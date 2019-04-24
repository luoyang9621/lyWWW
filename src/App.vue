<template>
  <div id="app">
    <app-head></app-head>
    <ul class="item-ul">
      <li><router-link to="/recommend">推荐</router-link></li>
      <li><router-link to="/rank">排行</router-link></li>
      <li><router-link to="/singer">歌手</router-link></li>
      <li><router-link to="/search">搜索</router-link></li>
    </ul>
    <router-view/>
    <Player></Player>
  </div>
</template>
<style lang="stylus">
  @import '~common/styles/index'
  .item-ul {
        width: 100%;
        height: 50px;
        align-items: center;
        text-align: center;
        display: flex;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
      li {
          flex: 1;
          color: #000;
          font-size: $font-size-medium;
        a {
          color: $color-text-l
          padding-bottom 5px;
          &.router-link-active {
             color: $color-theme
             border-bottom: 2px solid $color-theme
           }
        }
      }
  }
</style>
<script>
import Player from 'components/player/player'
import appHead from 'components/head/appHead'
import { mapGetters } from 'vuex'
export default {
  name: 'App',
  components: {
    Player, appHead
  },
  computed: {
    ...mapGetters([
      'fullScreen',
      'playList'
    ])
  }
}
</script>

<style>

</style>
