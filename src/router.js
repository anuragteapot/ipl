import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/total',
      name: 'total',
      component: () => import('./views/Total.vue')
    },
    {
      path: '/max',
      name: 'max',
      component: () => import('./views/Max.vue')
    },
    {
      path: "*",
      component: Home
    }
  ]
})
