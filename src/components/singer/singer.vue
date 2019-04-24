<template>
    <div class="singer">
      <list-view :data="singerList" @select="selectSinger"></list-view>
      <router-view></router-view>
    </div>
</template>

<script type="javascript">
import { getSinger } from 'api/singer'
import { ERR_OK } from 'api/config'
import Singer from 'common/js/singer'
import listView from 'base/listview'
import { mapMutations } from 'vuex'

const Regx = /^[A-Za-z]*$/
const HOT_NAME = '热门'
const HOT_NAME_LEN = 10
export default {
  name: 'singer',
  data () {
    return {
      singerList: []
    }
  },
  components: { listView },
  mounted () {
    this._getSinger()
  },
  methods: {
    _getSinger () {
      getSinger().then((res) => {
        if (res.code === ERR_OK) {
          this.singerList = this.normalize(res.data.list)
        }
      })
    },
    normalize (list) {
      let map = {
        hot: {
          title: HOT_NAME,
          items: []
        }
      }
      list.forEach((item, index) => {
        const key = item.Findex
        if (index < HOT_NAME_LEN) {
          map.hot.items.push(new Singer({
            mid: item.Fsinger_mid,
            name: item.Fsinger_name
          }))
        }
        if (!map[key]) {
          map[key] = {
            title: key,
            items: []
          }
        }
        map[key].items.push(new Singer({
          mid: item.Fsinger_mid,
          name: item.Fsinger_name
        }))
      })

      // 为了得到有序列表 ，需要处理map
      let hot = []
      let resArr = []
      let others = []
      for (let key in map) {
        let val = map[key]
        if (val.title === HOT_NAME) {
          hot.push(val)
        } else if (!Regx.test(val.title)) {
          val.title = '#'
          others.push(val)
        } else {
          resArr.push(val)
        }
      }
      resArr.sort(function (a, b) {
        return a.title.charCodeAt(0) - b.title.charCodeAt(0)
      })
      return hot.concat(resArr.concat(others))
    },
    selectSinger (singer) {
      this.$router.push({
        path: `/singer/${singer.mid}`
      })
      this.setSinger(singer)
    },
    ...mapMutations({
      setSinger: 'SET_SINGER'
    })
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
