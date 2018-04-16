<template>
    <div class="singer" ref="singer">
      这个是singer
    </div>
</template>

<script>
import { getSinger } from 'api/singer'
import { ERR_OK } from 'api/config'
import { Singer } from 'common/js/singer'
const HOT_NAME = '热门'
const HOT_SINGER_LEN = 10
export default {
  name: 'singer',
  data () {
    return {
      singerList: []
    }
  },
  mounted () {
    this._getSinger()
  },
  methods: {
    _getSinger () {
      console.log(111)
      getSinger().then((res) => {
        if (res.code === ERR_OK) {
          console.log(res)
          this.singerList = res.data.list
        }
      })
    },
    _normalize () {
      let map = {
        hot: {
          title: HOT_NAME,
          items: []
        }
      }
      this.singerList.forEach((item, index) => {
        if (index < HOT_SINGER_LEN) {
          map.hot.items.push(new Singer({
            name: item.Fsinger_name,
            mid: item.Fsinger_mid
          }))
        }
        const key = item.Findex
        if (!map[key]) {
          map[key] = {
            title: key,
            items: []
          }
        }
        map[key].item.push(new Singer({
          name: item.Fsinger_name,
          mid: item.Fsinger_mid
        }))
      })
      // 为了得到a-z的有序列表，需要处理map
      let hot = []
      let singerArr = []
      for(let key in map) {
        let val = map[key]
        if (val.title.match(/[a-zA-Z]/)) {
          singerArr.push(val)
        } else if (val.title === HOT_NAME) {
          hot.push(val)
        }
      }
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .singer
    position: fixed
    top: 88px
    bottom: 0
    width: 100%
</style>
