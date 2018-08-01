import Vue from 'vue'
import Router from 'vue-router'
import index from 'components/index'
import rank from 'components/rank/rank'
import singer from 'components/singer/singer'
import recommend from 'components/recommend/recommend'
import search from 'components/search/search'
import SingerDetail from 'components/singer/singer-detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      redirect: '/recommend',
      children: [
        {
          path: '/rank',
          name: 'rank',
          component: rank
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
        }
      ]
    }
  ]
})
