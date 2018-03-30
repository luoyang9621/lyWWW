import Vue from 'vue'
import Router from 'vue-router'
import index from 'musicApp/index'
import rank from 'musicApp/rank/rank'
import singer from 'musicApp/singer/singer'
import recommend from 'musicApp/recommend/recommend'
import search from 'musicApp/search/search'

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
          component: singer
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
