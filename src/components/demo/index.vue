<template>
    <div class="wrap">
      <div class="btn-list">
        <router-link :to="{ name: 'demo1' }" class="btn">demo1</router-link>
        <router-link :to="{ name: 'demo2' }" class="btn">demo2</router-link>
        <router-link :to="{ name: 'demo3' }" class="btn">demo3</router-link>
        <router-link :to="{ name: 'demo4' }" class="btn">demo4</router-link>
      </div>
      <transition
        name="slide-top"
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
        @enter-cancelled="enterCancelled"

        @before-leave="beforeLeave"
        @leave="leave"
        @after-leave="afterLeave"
        @leave-cancelled="leaveCancelled"
      >
        <router-view
          class="router-view"
        />
      </transition>
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
    },
    // --------
    // 进入中
    // --------
    beforeEnter: function (el) {
      console.log(111, el)
      // ...
    },
    // 当与 CSS 结合使用时
    // 回调函数 done 是可选的
    enter: function (el, done) {
      console.log(222, el)
      // ...
      done()
    },
    afterEnter: function (el) {
      console.log(333, el)
      // ...
    },
    enterCancelled: function (el) {
      console.log(444, el)
      // ...
    },

    // --------
    // 离开时
    // --------

    beforeLeave: function (el) {
      console.log('aaa', el)
      // ...
    },
    // 当与 CSS 结合使用时
    // 回调函数 done 是可选的
    leave: function (el, done) {
      console.log('bbb', el)
      // ...
      done()
    },
    afterLeave: function (el) {
      console.log('ccc', el)
      // ...
    },
    // leaveCancelled 只用于 v-show 中
    leaveCancelled: function (el) {
      console.log('ddd', el)
      // ...
    }
  }
}
</script>

<style lang="scss" scoped>
.wrap {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  height: 600px;
  position: relative;
  top: 0;
  left: 0;
  .btn-list {
    height: 80px;
    display: flex;
    .btn {
      height: 44px;
      margin: 0 10px;
      background-color: #4287f5;
      color: #fff;
    }
  }
  .router-view {
    width: 100%;
    height: calc(100% - 80px);
    position: absolute;
    top: 80px;
    left: 0;
    transition: all ease .5s;
    visibility: visible;
  }
}
</style>
