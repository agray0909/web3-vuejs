import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: Home
    // },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/metamask_info',
      name: 'metamask_info',
      component: () => import( './views/MetamaskInfo.vue'),
      props: true
    },
    {
      path: '/block_info',
      name: 'block_info',
      component: () => import( './views/BlockInfo.vue'),
      props: true
    },
    {
      path: '/web3_func',
      name: 'web3_func',
      component: () => import( './views/Web3Function.vue'),
      props: true
    }
  ]
})
