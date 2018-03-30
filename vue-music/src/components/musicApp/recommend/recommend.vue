<template>
    <div class="recommend">
      <div class="recommend-content">
        <div class="slider-wrapper" v-if="sliderList.length > 0">
          <slider>
            <div v-for="(item, index) in sliderList" :key="index">
              <a :href="item.linkUrl"><img :src="item.picUrl" alt=""></a>
            </div>
          </slider>
        </div>
        <div class="recommend-list">
          <div class="list-title">推荐歌单</div>
          <ul>
            <li v-for="(item, index) in disList" :key="index" class="item">
              <div class="icon">
                <img :src="item.imgurl" alt="" width="60" height="60">
              </div>
              <div class="text">
                <h2 class="name" v-html="item.creator.name"></h2>
                <div class="desc" v-html="item.dissname"></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
import { getRecommend, getDisList } from 'api/recommend'
import { ERR_OK } from 'api/config'
import slider from 'base/slider'
// import axios from 'axios'

export default {
  name: 'recommend',
  data () {
    return {
      sliderList: [],
      disList: []
    }
  },
  components: { slider },
  mounted () {
    this._rank()
    this._getList()
  },
  methods: {
    _rank () {
      getRecommend().then((res) => {
        if (res.code === ERR_OK) {
          this.sliderList = res.data.slider
        }
      })
    },
    _getList () {
      getDisList().then((res) => {
        if (res.code === ERR_OK) {
          console.log('aaaa', res)
          this.disList = res.data.list
        }
      })
    },
    _getListFG () {

    }
  }
}
</script>

<style scoped lang="stylus">
  @import "~common/styles/variable"
  .recommend
    position: fixed
    width: 100%
    top: 88px
    bottom: 0
    .recommend-content
      height: 100%
      overflow: hidden
      .slider-wrapper
        position: relative
        width: 100%
        height: auto
        overflow: hidden
        .slider-content
          position: absolute
          top: 0
          left: 0
          width: 100%
          height: 100%
      .recommend-list
        .list-title
          height: 65px
          line-height: 65px
          text-align: center
          font-size: $font-size-medium
          color: $color-theme
        .item
          display: flex
          box-sizing: border-box
          align-items: center
          padding: 0 20px 20px 20px
          .icon
            flex: 0 0 60px
            width: 60px
            padding-right: 20px
          .text
            display: flex
            flex-direction: column
            justify-content: center
            flex: 1
            line-height: 20px
            overflow: hidden
            font-size: $font-size-medium
            .name
              margin-bottom: 10px
              color: $color-text
            .desc
              color: $color-text-d
      .loading-container
        position: absolute
        width: 100%
        top: 50%
        transform: translateY(-50%)
</style>
