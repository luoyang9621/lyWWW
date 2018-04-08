<template>
    <div class="singer">
      这个是singer
      <ul>
        <li v-for='(item, index) in singerList' :key="index">{{ item.Fsinger_name }}</li>
      </ul>
    </div>
</template>

<script>
import { getSinger } from 'api/singer'
import { ERR_OK } from 'api/config'
export default {
  name: 'singer',
  data () {
    return {
      singerList: []
    }
  },
  mounted () {
    this._getSinger()
  },
  methods: {
    _getSinger () {
      getSinger().then((res) => {
        if (res.code === ERR_OK) {
          console.log(res)
        }
      })
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
