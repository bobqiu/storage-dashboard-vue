import url from 'url'
import querystring from 'querystring'
import crypto from 'crypto'
import { lru } from './lru'

let aws4 = {}
let credentialsCache = lru(1000)

// http://docs.amazonwebservices.com/general/latest/gr/signature-version-4.html

function hmac(key, string, encoding) {
  return crypto
    .createHmac('sha256', key)
    .update(string, 'utf8')
    .digest(encoding)
}

function hash(string, encoding) {
  return crypto
    .createHash('sha256')
    .update(string, 'utf8')
    .digest(encoding)
}

// This function assumes the string has already been percent encoded
function encodeRfc3986(urlEncodedString) {
  return urlEncodedString.replace(/[!'()*]/g, function(c) {
    return (
      '%' +
      c
        .charCodeAt(0)
        .toString(16)
        .toUpperCase()
    )
  })
}

// request: { path | body, [host], [method], [headers], [service], [region] }
// credentials: { accessKeyId, secretAccessKey, [sessionToken] }
function RequestSigner(req, credentials) {
  let request = req
  if (typeof request === 'string') request = url.parse(request)

  let headers = (request.headers = request.headers || {})
  let hostParts = this.matchHost(
    request.hostname || request.host || headers.Host || headers.host,
  )

  this.request = request
  this.credentials = credentials || this.defaultCredentials()

  this.service = request.service || hostParts[0] || ''
  this.region = request.region || hostParts[1] || 'us-east-1'

  // SES uses a different domain from the service name
  if (this.service === 'email') this.service = 'ses'

  if (!request.method && request.body) {
    request.method = 'POST'
  }

  if (!headers.Host && !headers.host) {
    headers.Host = request.hostname || request.host || this.createHost()

    // If a port is specified explicitly, use it as is
    if (request.port) {
      headers.Host += ':' + request.port
    }
  }
  if (!request.hostname && !request.host) {
    request.hostname = headers.Host || headers.host
  }

  this.isCodeCommitGit =
    this.service === 'codecommit' && request.method === 'GIT'
}

RequestSigner.prototype.matchHost = function(host) {
  let match = (host || '').match(/([^.]+)\.(?:([^.]*)\.)?amazonaws\.com$/)
  let hostParts = (match || []).slice(1, 3)

  // ES's hostParts are sometimes the other way round, if the value that is expected
  // to be region equals ‘es’ switch them back
  // e.g. search-cluster-name-aaaa00aaaa0aaa0aaaaaaa0aaa.us-east-1.es.amazonaws.com
  if (hostParts[1] === 'es') {
    hostParts = hostParts.reverse()
  }

  return hostParts
}

// http://docs.aws.amazon.com/general/latest/gr/rande.html
RequestSigner.prototype.isSingleRegion = function() {
  // Special case for S3 and SimpleDB in us-east-1
  if (['s3', 'sdb'].indexOf(this.service) >= 0 && this.region === 'us-east-1')
    return true

  return (
    ['cloudfront', 'ls', 'route53', 'iam', 'importexport', 'sts'].indexOf(
      this.service,
    ) >= 0
  )
}

RequestSigner.prototype.createHost = function() {
  let region = this.isSingleRegion()
    ? ''
    : (this.service === 's3' && this.region !== 'us-east-1' ? '-' : '.') +
      this.region
  let service = this.service === 'ses' ? 'email' : this.service
  return service + region + '.amazonaws.com'
}

RequestSigner.prototype.prepareRequest = function() {
  this.parsePath()
  let request = this.request
  let headers = request.headers
  let query

  if (request.signQuery) {
    this.parsedPath.query = query = this.parsedPath.query || {}

    if (this.credentials.sessionToken) {
      query['X-Amz-Security-Token'] = this.credentials.sessionToken
    }

    if (this.service === 's3' && !query['X-Amz-Expires']) {
      query['X-Amz-Expires'] = 86400
    }

    if (query['X-Amz-Date']) {
      this.datetime = query['X-Amz-Date']
    } else {
      query['X-Amz-Date'] = this.getDateTime()
    }

    query['X-Amz-Algorithm'] = 'AWS4-HMAC-SHA256'
    query['X-Amz-Credential'] =
      this.credentials.accessKeyId + '/' + this.credentialString()
    query['X-Amz-SignedHeaders'] = this.signedHeaders()
  } else {
    if (!request.doNotModifyHeaders && !this.isCodeCommitGit) {
      if (
        request.body &&
        !headers['Content-Type'] &&
        !headers['content-type']
      ) {
        headers['Content-Type'] =
          'application/x-www-form-urlencoded; charset=UTF-8'
      }

      if (
        request.body &&
        !headers['Content-Length'] &&
        !headers['content-length']
      ) {
        headers['Content-Length'] = Buffer.byteLength(request.body)
      }

      if (
        this.credentials.sessionToken &&
        !headers['X-Amz-Security-Token'] &&
        !headers['x-amz-security-token']
      ) {
        headers['X-Amz-Security-Token'] = this.credentials.sessionToken
      }

      if (
        this.service === 's3' &&
        !headers['X-Amz-Content-Sha256'] &&
        !headers['x-amz-content-sha256']
      ) {
        headers['X-Amz-Content-Sha256'] = hash(this.request.body || '', 'hex')
      }

      if (headers['X-Amz-Date'] || headers['x-amz-date']) {
        this.datetime = headers['X-Amz-Date'] || headers['x-amz-date']
      } else {
        headers['X-Amz-Date'] = this.getDateTime()
      }
    }

    delete headers.Authorization
    delete headers.authorization
  }
}

RequestSigner.prototype.sign = function() {
  if (!this.parsedPath) this.prepareRequest()

  if (this.request.signQuery) {
    this.parsedPath.query['X-Amz-Signature'] = this.signature()
  } else {
    this.request.headers.Authorization = this.authHeader()
  }

  this.request.path = this.formatPath()

  return this.request
}

RequestSigner.prototype.getDateTime = function() {
  if (!this.datetime) {
    let headers = this.request.headers
    let date = new Date(headers.Date || headers.date || new Date())

    this.datetime = date.toISOString().replace(/[:-]|\.\d{3}/g, '')

    // Remove the trailing 'Z' on the timestamp string for CodeCommit git access
    if (this.isCodeCommitGit) this.datetime = this.datetime.slice(0, -1)
  }
  return this.datetime
}

RequestSigner.prototype.getDate = function() {
  return this.getDateTime().substr(0, 8)
}

RequestSigner.prototype.authHeader = function() {
  return [
    'AWS4-HMAC-SHA256 Credential=' +
      this.credentials.accessKeyId +
      '/' +
      this.credentialString(),
    'SignedHeaders=' + this.signedHeaders(),
    'Signature=' + this.signature(),
  ].join(', ')
}

RequestSigner.prototype.signature = function() {
  let date = this.getDate()
  let cacheKey = [
    this.credentials.secretAccessKey,
    date,
    this.region,
    this.service,
  ].join()
  let kDate
  let kRegion
  let kService
  let kCredentials = credentialsCache.get(cacheKey)
  if (!kCredentials) {
    kDate = hmac('AWS4' + this.credentials.secretAccessKey, date)
    kRegion = hmac(kDate, this.region)
    kService = hmac(kRegion, this.service)
    kCredentials = hmac(kService, 'aws4_request')
    credentialsCache.set(cacheKey, kCredentials)
  }
  return hmac(kCredentials, this.stringToSign(), 'hex')
}

RequestSigner.prototype.stringToSign = function() {
  return [
    'AWS4-HMAC-SHA256',
    this.getDateTime(),
    this.credentialString(),
    hash(this.canonicalString(), 'hex'),
  ].join('\n')
}

RequestSigner.prototype.canonicalString = function() {
  if (!this.parsedPath) this.prepareRequest()

  let pathStr = this.parsedPath.path
  let query = this.parsedPath.query
  let queryStr = ''
  let normalizePath = this.service !== 's3'
  let decodePath = this.service === 's3' || this.request.doNotEncodePath
  let decodeSlashesInPath = this.service === 's3'
  let firstValOnly = this.service === 's3'
  let bodyHash = 'UNSIGNED-PAYLOAD'

  if (query) {
    queryStr = encodeRfc3986(
      querystring.stringify(
        Object.keys(query)
          .sort()
          .reduce(function(obj, key) {
            if (!key) return obj
            obj[key] = !Array.isArray(query[key])
              ? query[key]
              : firstValOnly
                ? query[key][0]
                : query[key].slice().sort()
            return obj
          }, {}),
      ),
    )
  }
  if (pathStr !== '/') {
    if (normalizePath) pathStr = pathStr.replace(/\/{2,}/g, '/')
    pathStr = pathStr
      .split('/')
      .reduce(function(path, pie) {
        let piece = pie
        if (normalizePath && piece === '..') {
          path.pop()
        } else if (!normalizePath || piece !== '.') {
          if (decodePath) piece = querystring.unescape(piece)
          path.push(encodeRfc3986(querystring.escape(piece)))
        }
        return path
      }, [])
      .join('/')
    if (pathStr[0] !== '/') pathStr = '/' + pathStr
    if (decodeSlashesInPath) pathStr = pathStr.replace(/%2F/g, '/')
  }
  return [
    this.request.method || 'GET',
    pathStr,
    queryStr,
    this.canonicalHeaders() + '\n',
    this.signedHeaders(),
    bodyHash,
  ].join('\n')
}

RequestSigner.prototype.canonicalHeaders = function() {
  let headers = this.request.headers
  function trimAll(header) {
    return header
      .toString()
      .trim()
      .replace(/\s+/g, ' ')
  }
  return Object.keys(headers)
    .sort(function(a, b) {
      return a.toLowerCase() < b.toLowerCase() ? -1 : 1
    })
    .map(function(key) {
      return key.toLowerCase() + ':' + trimAll(headers[key])
    })
    .join('\n')
}

RequestSigner.prototype.signedHeaders = function() {
  return Object.keys(this.request.headers)
    .map(function(key) {
      return key.toLowerCase()
    })
    .sort()
    .join(';')
}

RequestSigner.prototype.credentialString = function() {
  return [this.getDate(), this.region, this.service, 'aws4_request'].join('/')
}

RequestSigner.prototype.defaultCredentials = function() {
  let env = process.env
  return {
    accessKeyId: env.AWS_ACCESS_KEY_ID || env.AWS_ACCESS_KEY,
    secretAccessKey: env.AWS_SECRET_ACCESS_KEY || env.AWS_SECRET_KEY,
    sessionToken: env.AWS_SESSION_TOKEN,
  }
}

RequestSigner.prototype.parsePath = function() {
  let path = this.request.path || '/'
  let queryIx = path.indexOf('?')
  let query = null

  if (queryIx >= 0) {
    query = querystring.parse(path.slice(queryIx + 1))
    path = path.slice(0, queryIx)
  }

  // S3 doesn't always encode characters > 127 correctly and
  // all services don't encode characters > 255 correctly
  // So if there are non-reserved chars (and it's not already all % encoded), just encode them all
  if (/[^0-9A-Za-z!'()*\-._~%/]/.test(path)) {
    path = path
      .split('/')
      .map(function(piece) {
        return querystring.escape(querystring.unescape(piece))
      })
      .join('/')
  }

  this.parsedPath = {
    path: path,
    query: query,
  }
}

RequestSigner.prototype.formatPath = function() {
  let path = this.parsedPath.path
  let query = this.parsedPath.query

  if (!query) return path

  // Services don't support empty query string keys
  if (query[''] != null) delete query['']

  return path + '?' + encodeRfc3986(querystring.stringify(query))
}

aws4.RequestSigner = RequestSigner

aws4.sign = function(request, credentials) {
  return new RequestSigner(request, credentials).sign()
}
export { aws4 }
