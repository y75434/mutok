import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../views/Login'
import Chat from '../views/Chat'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Chat',
    component: Chat
  },
  {
    path: '/login',
    name: 'Login',
    component: Login

    // component: () => import(/* webpackChunkName: "about" */ '../views/')
  }
]

const router = new VueRouter({
  routes
})

export default router
