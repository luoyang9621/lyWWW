<template>
    <div class="loading">
        <img width="24" height="24" src="./loading.gif" alt="">
        <p class="desc">{{ title }}</p>
    </div>
</template>
<script type="text/javascript">
export default {
  props: {
    title: {
      type: String,
      default: '正在载入中...'
    }
  }
}
</script>
<style lang="stylus">
    @import '~common/styles/variable'
    .loading
        width: 100%
        text-align: center
        .desc
            line-height: $font-size-small
            color: $color-text-l
</style>
