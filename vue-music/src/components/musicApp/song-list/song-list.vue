<template>
    <div class="song-list">
        <ul>
            <li class="item" v-for="(item, index) in songs" :key="index">
                <div class="content">
                  <h2 class="name">{{ item.name }} </h2>
                  <p class="desc">{{ item | getDesc }}</p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  props: {
    songs: {
      type: Array,
      default: []
    }
  },
  filters: {
    getDesc (song) {
      return song.singer + song.album
    }
  }
}
</script>
<style lang="stylus" scoped rel="stylesheet/stylus">
    @import '~common/styles/variable'
    @import '~common/styles/mixin'
    .song-list
      .item
        display: flex
        align-items: center
        box-sizing: border-box
        height: 64px
        font-size: $font-size-medium
        .content
          flex: 1
          line-height: 20px
          overflow: hidden
          .name
            nowrap()
            color: $color-text
          .desc
            nowrap()
            margin-top: 4px
            color: $color-text-d
</style>
