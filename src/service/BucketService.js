import Vue from 'vue'
const time = (time, digit = 1) => {
    let timeArray = timeSpliteUnits(time, digit = 1)

    return timeArray[0] + ' ' + timeArray[1]
}
const timeSpliteUnits = (time, digit = 1) => {
    if (typeof time !== 'number') {
        time = parseFloat(time)
    }

    if (time < 1) {
        return '0 s'
    } else if (isNaN(time) || !isFinite(time)) {
        return '-'
    }

    const units = ['s', 'min', 'h']
    const exponent = Math.min(Math.floor(Math.log(time) / Math.log(60)), units.length - 1)
    const number = (time / Math.pow(60, Math.floor(exponent))).toFixed(digit)

    return [number, units[exponent]]
}
const thousands = numbers => `${numbers}`.replace(/\d{1,3}(?=(\d{3})+$)/g, function (s) {
    return s + ','
})
const bytes = (bytes, digit = 1) => {
    if (bytes === undefined) return '-'
    let bytesArray = bytesSpliteUnits(bytes, digit = 1)

    return bytesArray[0] + ' ' + bytesArray[1]
}
const bytesSpliteUnits = (bytes, digit = 1) => {
    if (typeof bytes !== 'number') {
        bytes = parseFloat(bytes)
    }

    if (bytes < 1) {
        return '0 B'
    } else if (isNaN(bytes) || !isFinite(bytes)) {
        return '-'
    }

    const units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
    const exponent = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), units.length - 1)
    const number = (bytes / Math.pow(1024, Math.floor(exponent))).toFixed(digit)

    return [number, units[exponent]]
}
const times = (times) => {
    if (times === undefined) return '-'
    times = typeof (times) === 'string' ? times : times.toString()
    let len = times.length
    if (len < 3) return times
    let result = len % 3 === 0 ? times.substr(0, len % 3) : times.substr(0, len % 3) + ','
    for (let i = len % 3; i < len - 1; i += 3) {
        result += i === len - 3 ? times.substr(i, 3) : (times.substr(i, 3) + ',')
    }
    return result
}
const timesK = (times, digit = 1) => {
    if (typeof times !== 'number') {
        times = parseFloat(times)
    }
    if (times < 1) {
        return 0
    } else if (isNaN(times) || !isFinite(times)) {
        return '-'
    }

    const units = ['', 'K', 'Million', 'Billion']
    const exponent = Math.min(Math.floor(Math.log(times) / Math.log(1000)), units.length - 1)
    const number = (times / Math.pow(1000, Math.floor(exponent))).toFixed(digit)

    return number + ' ' + units[exponent]
}
const timesSpliteUnits = (times, digit = 1) => {
    if (typeof times !== 'number') {
        times = parseFloat(times)
    }
    if (times < 1) {
        return [0]
    } else if (isNaN(times) || !isFinite(times)) {
        return ['-']
    }

    const units = ['', 'K', 'Million', 'Billion']
    const exponent = Math.min(Math.floor(Math.log(times) / Math.log(1000)), units.length - 1)
    const number = (times / Math.pow(1000, Math.floor(exponent))).toFixed(digit)

    return [number, units[exponent]]
}
const date = (value) => {
    let date = new Date(value)
    let texts = [date.getFullYear(), checkDate(date.getMonth() + 1), checkDate(date.getDate())]
    return texts.join('-')
}

const dateTime = (value) => {
    let date = new Date(value)
    let dateTexts = [checkDate(date.getMonth() + 1), checkDate(date.getDate())]
    let timeTexts = [checkDate(date.getHours()), checkDate(date.getMinutes())]
    return dateTexts.join('-') + ' ' + timeTexts.join(':')
}

const dateTimeYear = (value) => {
    let date = new Date(value)
    let dateTexts = [date.getFullYear(), checkDate(date.getMonth() + 1), checkDate(date.getDate())]
    let timeTexts = [checkDate(date.getHours()), checkDate(date.getMinutes())]
    return dateTexts.join('-') + ' ' + timeTexts.join(':')
}

const checkDate = (value) => {
    return value > 9 ? value : '0' + value
}

const removeItemFromArray = (array, item) => array.splice(array.indexOf(item), 1)

Vue.filter('userType', (Grantee) => {
    if (Grantee.URI && Grantee.URI === 'http://acs.amazonaws.com/groups/global/AllUsers') {
        return 'All Users'
    } else if (Grantee.URI && Grantee.URI === 'http://acs.amazonaws.com/groups/global/AuthenticatedUsers') {
        return 'Auth Users'
    } else if (Grantee.ID) {
        return Grantee.ID
    }
})

const keyFilter = (key, prefix) => key.slice(prefix.length)

// shit
const convertPrefix2Router = (prefix) => {
    if (!!prefix) {
        let prefixArray = prefix.split('/')
        let routeArray = []

        prefixArray.pop()
        _.each(prefixArray, (item, index) => {
            let copyArray = _.clone(prefixArray)
            copyArray.length = index + 1
            routeArray.push({
                text: item,
                prefix: copyArray.join('/') + '/'
            })
        })
        return routeArray
    } else {
        return []
    }
}
const prefix = {
    overlay: 'imgx/overlay/',
    rules: 'imgx/cmd_template/'
}
const Utf8ArrayToStr = array => {
    var out, i, len, c
    var char2, char3
    out = ''
    len = array.length
    i = 0
    while (i < len) {
        c = array[i++]
        switch (c >> 4) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
            // 0xxxxxxx
            out += String.fromCharCode(c)
            break
        case 12:
        case 13:
            // 110x xxxx   10xx xxxx
            char2 = array[i++]
            out += String.fromCharCode(((c & 0x1F) << 6) | (char2 & 0x3F))
            break
        case 14:
            // 1110 xxxx  10xx xxxx  10xx xxxx
            char2 = array[i++]
            char3 = array[i++]
            out += String.fromCharCode(((c & 0x0F) << 12) |
                    ((char2 & 0x3F) << 6) |
                    ((char3 & 0x3F) << 0))
            break
        }
    }
    return out
}
export { time, bytes, times, timesK, date, dateTime, dateTimeYear, convertPrefix2Router, keyFilter, removeItemFromArray, prefix, Utf8ArrayToStr, bytesSpliteUnits, timesSpliteUnits, thousands }
