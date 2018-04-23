<template>
  <transition name="slide">
    <div class="siner-detail">
    </div>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex'
import { getSingerDetail } from 'api/singer'
import { ERR_OK } from 'api/config'
import { createSong } from 'common/js/song'

export default {
  name: 'singer-detail',
  data () {
    return {
      singerDetail: null,
      songs: []
    }
  },
  computed: {
    ...mapGetters([
      'singer'
    ])
  },
  mounted () {
    this._getDetail()
  },
  methods: {
    _getDetail () {
      if (!this.singer.mid) {
        this.$router.push('/singer')
        return
      }
      getSingerDetail(this.singer.mid).then((res) => {
        if (res.code === ERR_OK) {
          console.log(res)
          this.songs = this._normalLizSongs(res.data.list)
        }
      })
    },
    _normalLizSongs (list) {
      console.log(list)
      let hot = []
      list.forEach((item, index) => {
        let { musicData } = item
        if (musicData.songid && musicData.albummid) {
          hot.push(createSong(musicData))
        }
      })
      return hot
    }
  }
}
</script>

<style scoped lang="stylus">
  @import '~common/styles/variable'
  .siner-detail
    position: fixed
    z-index: 100
    top: 0
    left: 0
    right: 0
    bottom: 0
    background-color $color-background

  .slide-enter-active, .slide-leave-active
    transition: all 0.3s
  .slide-enter, .slide-leave {
    transform: translate3d(100%, 0, 0)
  }
</style>
