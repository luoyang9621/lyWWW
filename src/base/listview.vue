<template>
  <scroll class="listview" :data='data' ref="listview" :listenScroll="true" @scroll="scroll" :probeType="probeType">
    <ul>
        <li v-for="(group, index) in data" class="list-group" :key="index" ref="listGroup">
            <h2 class="list-group-title">{{ group.title }}</h2>
            <ul>
                <li v-for="item in group.items" class="list-group-item" :key="item.mid" @click='selectItem(item)'>
                    <img class="avatar" v-lazy="item.avatar" alt="">
                    <span class="name">{{ item.name }}</span>
                </li>
            </ul>
        </li>
    </ul>
    <div class="list-shortcut"  @touchstart="onTouchStart">
      <ul>
        <li v-for="(item, index) in shortcutList" :key="item"  class="item" :data-index="index" :class="{ 'current': currIndex === index }">{{ item }}</li>
      </ul>
    </div>
    <div class="list-fixed" v-show='fixedTitle' ref='fixTitle'>
      <h1 class="fixed-title">{{ fixedTitle }}</h1>
    </div>
    <div class="loading-container" v-show='!data.length'>
      <loading></loading>
    </div>
  </scroll>
</template>
<script type="javascript">
import scroll from 'base/scroll'
import { getData } from 'common/js/dom'
import loading from 'base/loading'

const TITLE_HEIGHT = 30

export default {
  name: 'listview',
  data () {
    return {
      currIndex: 0,
      scrollY: -1,
      listHeight: [],
      probeType: 3,
      diff: -1
    }
  },
  components: { scroll, loading },
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  watch: {
    scrollY: function (newVal) {
      let listHeight = this.listHeight
      // 当滚动到顶部，切 newY 》0
      if (newVal > 0) {
        this.currIndex = 0
        return
      }
      // 中间部分滚动
      for (let i = 0; i < listHeight.length - 1; i++) {
        let height1 = listHeight[i]
        let height2 = listHeight[i + 1]
        if ((-newVal >= height1) && (-newVal < height2)) {
          this.currIndex = i
          this.diff = height2 + newVal
          return
        }
      }
      // 底部滚动
      this.currIndex = listHeight.length - 2
    },
    data () {
      setTimeout(() => {
        this._calculateHeight()
      }, 20)
    },
    diff (newVal) {
      let fixedTop = (newVal > 0 && newVal < TITLE_HEIGHT) ? newVal - TITLE_HEIGHT : 0
      if (this.fixedTop === fixedTop) {
        return
      }
      this.fixedTop = fixedTop
      this.$refs.fixTitle.style.transform = `translate3d(0, ${fixedTop}px, 0)`
    }
  },
  computed: {
    shortcutList () {
      return this.data.map((res) => {
        return res.title.substr(0, 1)
      })
    },
    fixedTitle () {
      if (this.scrollY > 0) {
        return ''
      }
      return this.data[this.currIndex] ? this.data[this.currIndex].title : ''
    }
  },
  mounted () {

  },
  methods: {
    onTouchStart (e) {
      let anchorIndex = parseInt(getData(e.target, 'index'))
      this._scrollTo(anchorIndex)
    },
    scroll (pos) {
      this.scrollY = pos.y
    },
    _scrollTo (index) {
      if (!index && index !== 0) {
        return
      }
      if (index < 0) {
        index = 0
      } else if (index > this.listHeight.length - 2) {
        index = this.listHeight.length - 2
      }
      this.currIndex = index
      this.$refs.listview.scrollToElement(this.$refs.listGroup[index], 0)
    },
    _calculateHeight () {
      this.listHeight = []
      const list = this.$refs.listGroup
      let height = 0
      this.listHeight.push(height)
      for (let i = 0; i < list.length; i++) {
        let item = list[i].clientHeight
        height += item
        this.listHeight.push(height)
      }
    },
    selectItem (item) {
      this.$emit('select', item)
    }
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/styles/variable"

  .listview
    position: relative
    width: 100%
    height: 100%
    overflow: hidden
    background: $color-background
    .list-group
      padding-bottom: 30px
      .list-group-title
        height: 30px
        line-height: 30px
        padding-left: 20px
        font-size: $font-size-small
        color: $color-text-l
        background: $color-highlight-background
      .list-group-item
        display: flex
        align-items: center
        padding: 20px 0 0 30px
        .avatar
          width: 50px
          height: 50px
          border-radius: 50%
        .name
          margin-left: 20px
          color: $color-text-l
          font-size: $font-size-medium
    .list-shortcut
      position: absolute
      z-index: 30
      right: 0
      top: 50%
      transform: translateY(-50%)
      width: 20px
      padding: 20px 0
      border-radius: 10px
      text-align: center
      background: $color-background-d
      font-family: Helvetica
      .item
        padding: 3px
        line-height: 1
        color: $color-text-l
        font-size: $font-size-small
        &.current
          color: $color-theme
    .list-fixed
      position: absolute
      top: 0
      left: 0
      width: 100%
      .fixed-title
        height: 30px
        line-height: 30px
        padding-left: 20px
        font-size: $font-size-small
        color: $color-text-l
        background: $color-highlight-background
    .loading-container
      position: absolute
      width: 100%
      top: 50%
      transform: translateY(-50%)
</style>
