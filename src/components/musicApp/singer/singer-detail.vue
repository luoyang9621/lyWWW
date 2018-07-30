<template>
    <transition name="slide">
        <!--<div class="singer-detail">
            歌手详情页
        </div>-->
        <music-list :songs="songs" :title="title" :bg-image="bgImage"></music-list>
    </transition>
</template>
<script>
import { mapGetters } from 'vuex'
import { getSingerDetail } from 'api/singer'
import { ERR_OK } from 'api/config'
import { createSong } from 'api/song'
import musicList from 'musicApp/music-list/music-list'
export default {
  data () {
    return {
      songs: []
    }
  },
  computed: {
    ...mapGetters([
      'singer'
    ]),
    title () {
      return this.singer.name
    },
    bgImage () {
      return this.singer.avatar
    }
  },
  mounted () {
    console.log('singer=', this.singer)
    if (!this.singer || Object.keys(this.singer).length === 0) {
      this.$router.push('/singer')
    }
    this._getSingerDetail()
  },
  methods: {
    _getSingerDetail () {
      getSingerDetail(this.singer.mid).then((res) => {
        if (res.code === ERR_OK) {
          console.log('res=', res)
          this.songs = this._normaLizeSongs(res.data.list)
        }
      })
    },
    _normaLizeSongs (list) {
      let ret = []
      list.forEach((item, index) => {
        let {musicData} = item
        if (musicData.songid && musicData.albummid) {
          ret.push(createSong(musicData))
        }
      })
      return ret
    }
  },
  components: {
    musicList
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped >
    @import "~common/styles/variable"
    .singer-detail
        z-index: 100
        position: fixed
        top: 0
        left: 0
        bottom: 0
        right: 0
        background: $color-background
    .slide-enter-active, .slide-leave-active
        transition: all 0.5s
    .slide-enter, .slide-leave-to
        transform: translate3d(100%, 0, 0)
</style>
