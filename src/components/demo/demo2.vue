<template>
    <div class="wrap">
      demo222222222222
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
  background-color: green;
  color: #999;
}
</style>
