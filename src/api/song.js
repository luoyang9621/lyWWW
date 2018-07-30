export default class Song {
  constructor ({id, mid, singer, name, album, duration, image, url}) {
    this.id = id
    this.mid = mid
    this.singer = singer
    this.name = name
    this.album = album
    this.duration = duration
    this.image = image
    this.url = url
  }
}

export function createSong (musicData) {
  return new Song({
    id: musicData.songid,
    mid: musicData.songmid,
    name: musicData.songname,
    singer: filterName(musicData.singer),
    album: musicData.albumname,
    duration: musicData.interval,
    image: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${musicData.albummid}.jpg?max_age=2592000`,
    url: `http://dl.stream.qqmusic.qq.com/${musicData.songid}.m4a?fromtag=66&guid=472669536&uin=0`
  })
}

function filterName (singer) {
  let name = ''
  if (!singer || singer.length === 0) {
    return name
  }
  singer.forEach((value, index) => {
    name += value.name + '/'
  })
  return name.substring(name.length - 1, 1)
}
