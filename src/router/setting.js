/*
* 这里只要是对路由重新封装一下，需要定制化的处理操作都在这里，比如登录登出之类的
* */
import Store from './../store/index'

const routerEach = (Route) => Route.beforeEach((to, from, next) => {
  console.log(to)
  // const direct = to.meta.direct
  // if (direct) {
  //   console.log(direct)
  //   Store.dispatch('updateRouterDirect', direct)
  // } else {
  //   console.log(2222)
  //   Store.dispatch('updateRouterDirect', 'normal')
  // }
  next()
})

export default routerEach
