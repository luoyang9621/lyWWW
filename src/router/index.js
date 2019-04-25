import Vue from 'vue'
import Router from 'vue-router'
import Setting from './setting'

Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/rank',
      name: 'rank',
      component: () => import(/* rank */ 'components/rank/rank'),
      meta: {
        direct: 'forward'
      }
    },
    {
      path: '/singer',
      name: 'singer',
      component: () => import(/* singer */ 'components/singer/singer'),
      children: [
        {
          path: ':id',
          name: 'SingerDetail',
          component: () => import(/* SingerDetail */ 'components/singer/singer-detail'),
          meta: {
            direct: 'forward'
          }
        }
      ]
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: () => import(/* recommend */ 'components/recommend/recommend'),
      meta: {
        direct: 'forward'
      }
    },
    {
      path: '/search',
      name: 'search',
      component: () => import(/* search */ 'components/search/search'),
      meta: {
        direct: 'forward'
      }
    },
    {
      path: '/demo',
      name: 'demoindex',
      component: () => import(/* webpackChunkName: "demoindex" */ './../components/demo/index'),
      children: [
        {
          path: 'demo1',
          name: 'demo1',
          component: () => import(/* webpackChunkName: "demo1" */'./../components/demo/demo1'),
          meta: {
            direct: 'forward'
          }
        },
        {
          path: 'demo2',
          name: 'demo2',
          component: () => import(/* webpackChunkName: "demo2" */'./../components/demo/demo2'),
          meta: {
            direct: 'forward'
          }
        },
        {
          path: 'demo3',
          name: 'demo3',
          component: () => import(/* webpackChunkName: "demo3" */'./../components/demo/demo3'),
          meta: {
            direct: 'forward'
          }
        },
        {
          path: 'demo4',
          name: 'demo4',
          component: () => import(/* webpackChunkName: "demo4" */'./../components/demo/demo4'),
          meta: {
            direct: 'top'
          }
        }
      ]
    }
  ]
})

Setting(router)

export default router
