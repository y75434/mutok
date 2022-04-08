import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../views/Login'
// import Chat from '../views/Chat'
// import Directory from '../views/Directory'

import KeyBoard from'../components/KeyBoard.vue'
import SelfSetting from'../components/SelfSetting.vue'
import Call from'../components/Call.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Voip',
    component: () => import('../views/Voip.vue'),
    children: [
      {
        path: 'voipchat',
        component: () => import('../components/voip/Chat.vue')
      },
      {
        path: '/directory',
        name: 'directory',
        component: () => import('../components/voip/Directory.vue')

      },
      {
        path: '/history',
        name: 'history',
        component: () => import('../components/voip/History.vue')

      },
      {
        path: '/voipcall',
        name: 'voipcall',
        component: () => import('../components/voip/Call.vue')

      },
    ]
  },
  {
    path: '/chat',
    name: 'Chat',
    component: () => import('../views/Chat.vue'),
    children: [
      {
        path: 'chat',
        component: () => import('../components/Chat/Chat.vue')
      },
      // {
      //   path: '/voipcall',
      //   name: 'voipcall',
      //   component: () => import('../components/voip/Call.vue')

      // },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
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
    component: Call,
   
  },
  
]

const router = new VueRouter({
  routes
})

export default router
