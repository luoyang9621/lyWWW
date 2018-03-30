import myJsonp from 'common/js/jsonp'
import {commonParams, options} from 'api/config'
import axios from 'axios'

export function getRecommend () {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
  const data = Object.assign({}, commonParams, {
    paltfrom: 'h5',
    needNewCode: 1
  })
  return myJsonp(url, data, options)
}

export function getDisList () {
  const url = '/apis/getDisList'
  const data = Object.assign({}, commonParams, {
    picmid: 1,
    rnd: Math.random(),
    loginUin: 0,
    hostUin: 0,
    format: 'json',
    platform: 'yqq',
    needNewCode: '0',
    categoryId: 10000000,
    sortId: 5,
    sin: 0,
    ein: 29
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
