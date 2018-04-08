import myJsonp from 'common/js/jsonp'
import {commonParams, options} from 'api/config'

export function getSinger () {
  const url = '/apis/getSinger'
  const data = Object.assign({}, commonParams, {
    channel: 'singer',
    page: 'list',
    key: 'all_all_all',
    pagesize: 100,
    pagenum: 1,
    g_tk: 5381,
    loginUin: 0,
    hostUin: 0,
    platform: 'yqq'
  })
  return myJsonp(url, data, options)
}
