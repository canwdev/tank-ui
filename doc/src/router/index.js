import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/quickstart',
    name: 'QuickStart',
    component: () => import('@doc/views/QuickStart')
  },
  {
    path: '/docs',
    name: 'DocsIndex',
    redirect: '/docs/Button'
  },
  {
    path: '/docs/:name',
    name: 'Docs',
    component: () => import('@doc/views/Docs')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
