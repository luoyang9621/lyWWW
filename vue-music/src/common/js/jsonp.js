import originJsonp from 'jsonp'

export default function myJsonp (url, data, option) {
  url += (url.indexOf('?') < 0 ? '?' : '&') + formatUrl(data)

  return new Promise((resolve, reject) => {
    originJsonp(url, option, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}

function formatUrl (data) {
  let _url = ''
  for (let key in data) {
    if (data[key]) {
      _url += `&${key}=${data[key]}`
    }
  }
  return _url ? _url.substring(1) : ''
}
