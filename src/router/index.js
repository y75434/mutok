import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../views/Login'
import Chat from '../views/Chat'
import Directory from '../views/Directory'

import KeyBoard from'../components/KeyBoard.vue'
import SelfSetting from'../components/SelfSetting.vue'
import Call from'../components/Call.vue'


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
  },
  {
    path: '/selfsetting',
    name: 'selfsetting',
    component: SelfSetting
  },
  {
    path: '/keyboard',
    name: 'keyboard',
    component: KeyBoard
  },
  {
    path: '/call',
    name: 'call',
    component: Call
  },
  {
    path: '/directory',
    name: 'directory',
    component: Directory
  },
]

const router = new VueRouter({
  routes
})

export default router
