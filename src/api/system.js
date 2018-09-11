import { group } from './util'
import request from '@/service/request'

export function getNodeList() {
  return request(group('node/list'), {
    method: 'get',
  })
}

export function getGroupList() {
  return request(group('group/list'), {
    method: 'get',
  })
}

export function postGroupMove(params) {
  return request(group('group/move'), {
    method: 'post',
    params,
  })
}

export function postGroupReadOnly(params) {
  return request(group('group/read_only'), {
    method: 'post',
    params,
  })
}

export function getTrafficList() {
  return request(group('traffic/list'), {
    method: 'get',
  })
}

export function getPartitionIdcList() {
  return request(group('partition/used/stats'), {
    method: 'get',
  })
}

export function getPartitionUnusedList(params) {
  return request(group('partition/unused/stats'), {
    method: 'get',
    params,
  })
}

export function getPartitionDeletedList() {
  return request(group('partition/deleted/list'), {
    method: 'get',
  })
}

export function getPartitionUsedDetail(params) {
  return request(group('partition/used/detail'), {
    method: 'get',
    params,
  })
}

export function getPartitionUsedList() {
  return request(group('partition/used/list'), {
    method: 'get',
  })
}

export function postPartitionUsedSet(params) {
  return request(group('partition/used/set'), {
    method: 'post',
    params,
  })
}

export function postPartitionUsedMove(params) {
  return request(group('partition/used/move'), {
    method: 'post',
    params,
  })
}

export function postPartitionUsedDelete(params) {
  return request(group('partition/used/delete'), {
    method: 'post',
    params,
  })
}

export function postPartitionUsedAdd(params) {
  return request(group('partition/unused/add'), {
    method: 'post',
    params,
  })
}

export function postFetch404(data) {
  return request(group('retrieve'), {
    method: 'post',
    data,
  })
}

export function postAccessList(data) {
  return request(group('access'), {
    method: 'post',
    data,
  })
}

export function postAddService(data) {
  return request(group('user/add/service'), {
    method: 'post',
    data,
  })
}

export function getCustomDomain(url = '') {
  return request(group(`custom_domain/${url}`), {
    method: 'get',
  })
}

export function deleteCustomDomain(url = '', data) {
  return request(group(`custom_domain/${url}`), {
    method: 'delete',
    data,
  })
}

export function postCustomDomain(url = '', data) {
  return request(group(`custom_domain/${url}`), {
    method: 'post',
    data,
  })
}
