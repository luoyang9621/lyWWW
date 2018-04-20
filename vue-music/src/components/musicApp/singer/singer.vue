<template>
    <div class="singer" ref="singer">
      <list-view :dataList="singerList"></list-view>
    </div>
</template>

<script>
import ListView from 'base/listview'
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
  components: {
    ListView
  },
  mounted () {
    this._getSinger()
  },
  methods: {
    _getSinger () {
      getSinger().then((res) => {
        if (res.code === ERR_OK) {
          this.singerList = this._normalize(res.data.list)
        }
      })
    },
    _normalize (list) {
      let map = {
        hot: {
          title: HOT_NAME,
          items: []
        }
      }
      list.forEach((item, index) => {
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
        map[key].items.push(new Singer({
          name: item.Fsinger_name,
          mid: item.Fsinger_mid
        }))
      })
      // 为了得到a-z的有序列表，需要处理map
      let hot = []
      let singerArr = []
      for (let key in map) {
        let val = map[key]
        if (val.title.match(/[a-zA-Z]/)) {
          singerArr.push(val)
        } else if (val.title === HOT_NAME) {
          hot.push(val)
        }
      }
      singerArr.sort(function (a, b) {
        return a.title.charCodeAt(0) - b.title.charCodeAt(0)
      })
      return hot.concat(singerArr)
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
