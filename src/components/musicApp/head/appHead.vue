<template>
  <div>
    <div class="m-header">
      这个是头部的内容
    </div>
  </div>
</template>

<script>
export default {
  name: 'appHead'
}
</script>

<style scoped lang="stylus">
  @import "~common/styles/variable"
  .m-header
    height: 44px
    display: flex
    align-items: center
    text-align: center
    color: $color-theme
</style>
