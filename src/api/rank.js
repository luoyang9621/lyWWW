import myJsonp from 'common/js/jsonp'
import {commonParams, options} from 'api/config'
export function getRank () {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
  const data = Object.assign({}, commonParams, {
    paltfrom: 'h5',
    needNewCode: 1
  })
  return myJsonp(url, data, options)
}
