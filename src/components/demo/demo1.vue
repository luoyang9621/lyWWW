<template>
    <div class="wrap2">
      demo1里面的内容demo1里面的内容
      demo1里面的内容demo1里面的内容
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
.wrap2 {
  background-color: red;
  color: #fff;
}
</style>
