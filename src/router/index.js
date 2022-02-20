import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import long from '../views/long'
import moned from '../views/moned'
import mas from '../views/mas'
import tiemp from '../views/tiemp'
import almacen from '../views/almacen'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/longitud',
    name: 'longitud',
    component: long
  },
  {
    path: '/convertMoneda',
    name: 'convertMoneda',
    component: moned

  },
  {
    path: '/masa',
    name: 'masa',
    component: mas
  },
  {
    path: '/tiempo',
    name: 'tiempo',
    component: tiemp
  },
  {
    path: '/almacenamiento',
    name: 'almacenamiento',
    component: almacen
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
