import myJsonp from 'common/js/jsonp'
import {commonParams, options} from 'api/config'

export function getSinger () {
  const url = 'https://shc.y.qq.com/v8/fcg-bin/v8.fcg'
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

export function getSingerDetail (singerid) {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg'
  const data = Object.assign({}, commonParams, {
    g_tk: 5381,
    hostUin: 0,
    notice: 0,
    platform: 'yqq',
    needNewCode: 0,
    singermid: singerid,
    order: 'listen',
    begin: 0,
    num: 100,
    songstatus: 1
  })
  return myJsonp(url, data, options)
}
