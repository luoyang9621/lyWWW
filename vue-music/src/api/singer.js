import myJsonp from 'common/js/jsonp'
import {commonParams, options} from 'api/config'
import axios from 'axios'

export function getSinger() {
  const url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg'
  const data = Object.assign({}, commonParams, {
    channel: 'singer',
    page: 'list',
    key: 'all_all_all',
    pagesize: 100,
    pagenum: 1,
    g_tk: 700298696,
    // jsonpCallback: GetSingerListCallback
    loginUin: 0,
    hostUin: 0,
    platform: 'yqq',
    needNewCode: 0
  })
}
