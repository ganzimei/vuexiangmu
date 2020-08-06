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
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/shequ',
    component: () => import('../views/shequ.vue')
  },
  {
    path: '/wode',
    component: () => import('../views/wode.vue')
  },
  {
    path: '/deng',
    component: () => import('../components/deng.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
