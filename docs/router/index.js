import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/quickstart',
      name: 'QuickStart',
      component: () => import('@/pages/QuickStart')
    },
    {
      path: '/docs',
      name: 'DocsIndex',
      redirect: '/docs/Button'
    },
    {
      path: '/docs/:name',
      name: 'Docs',
      component: () => import('@/pages/Docs')
    }

  ]
})
