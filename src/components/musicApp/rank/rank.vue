<template>
    <div>
      rank
    </div>
</template>

<script>
import { getRank } from 'api/Rank'
// import { commonParams, options } from 'api/config'

export default {
  name: 'rank',
  data () {
    return {
      sliderList: []
    }
  },
  mounted () {
    this._rank()
  },
  methods: {
    _rank () {
      getRank().then((res) => {
        console.log(res.data)
        this.sliderList = res.data.slider
      })
    }
  }
}
</script>

<style scoped>

</style>
