import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import index from '@/components/index'
// import list from '@/components/list'
import info from '@/components/info'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/list',
      name: 'list',
      component: resolve =>require(['@/components/list'],resolve)
    },
    {
      path: '/info',
      name: 'info',
      component: info
    },
    {
      path: '/study',
      name: 'study',
      component: resolve => require(['@/components/routerDemo'],resolve),
      redirect:'/study/first',
      children:[
        {
          path:'first',
          name:'first',
          component: resolve => require(['@/components/routerDemo/firstpage'],resolve)
        },
        {
          path:'second',
          name:'second',
          component: resolve => require(['@/components/routerDemo/secondpage'],resolve)
        },
        {
          path:'jsonp',
          name:'second',
          component: resolve => require(['@/components/routerDemo/jsonp'],resolve)
        }
      ]
    }
  ]
})
