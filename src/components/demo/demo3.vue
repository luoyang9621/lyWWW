<template>
    <div class="wrap">
      333333333333啊啊啊啊啊啊啊啊啊啊啊啊
    </div>
</template>

<script>
export default {
  name: 'demo1',
  data () {
    return {
      show1: true
    }
  },
  methods: {
    changeShow1 () {
      this.show1 = !this.show1
    }
  }
}
</script>

<style lang="scss" scoped>
.wrap {
  background-color: yellowgreen;
  color: #999;
}
</style>
