import Vue from 'vue'
import Router from 'vue-router'
import rank from 'components/rank/rank'
import singer from 'components/singer/singer'
import recommend from 'components/recommend/recommend'
import search from 'components/search/search'
import SingerDetail from 'components/singer/singer-detail'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/rank',
      name: 'rank',
      component: rank,
      direct: '',
    },
    {
      path: '/singer',
      name: 'singer',
      component: singer,
      children: [
        {
          path: ':id',
          name: 'SingerDetail',
          component: SingerDetail
        }
      ]
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: recommend
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/demo',
      name: 'demoindex',
      component: () => import(/* webpackChunkName: "demoindex" */ './../components/demo/index'),
      children: [
        {
          path: 'demo1',
          name: 'demo1',
          component: () => import(/* webpackChunkName: "demo1" */'./../components/demo/demo1')
        },
        {
          path: 'demo2',
          name: 'demo2',
          component: () => import(/* webpackChunkName: "demo2" */'./../components/demo/demo2')
        },
        {
          path: 'demo3',
          name: 'demo3',
          component: () => import(/* webpackChunkName: "demo3" */'./../components/demo/demo3')
        },
        {
          path: 'demo4',
          name: 'demo4',
          component: () => import(/* webpackChunkName: "demo4" */'./../components/demo/demo4')
        }
      ]
    }
  ]
})
