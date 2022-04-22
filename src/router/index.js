import Vue from 'vue'
import VueRouter from 'vue-router'

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
  //chat
  // {
  //   path: '/chat',
  //   name: 'Chat',
  //   component: () => import('../components/Chat/Chat.vue'),
  //   // children: [
  //   //   {
  //   //     path: 'chat',
  //   //     component: () => import('../components/Chat/Chat.vue')
  //   //   },
  //   // ]
  // },
  {
      path: '/chat',
      component: () => import('../views/Chat.vue')
  },
 
  {
    // chatdirectory
    path: '/chatdirectory',
    name: 'ChatDirectory',
    component: () => import('../components/Chat/Directory.vue')
  },
  {
    path: '/singlemsg',
    name: 'SingleMsg',
    component: () => import('../components/Chat/SingleMsg.vue')
  },
  {
    path: '/groupprofile',
    name: 'groupProfile',
    component: () => import('../components/Chat/GroupProfile.vue')
  },
  {
    path: '/add',
    name: 'Add',
    component: () => import('../components/Chat/Add.vue')
  },
  {
    path: '/addf',
    name: 'AddF',
    component: () => import('../components/Chat/AddF.vue')
  },
  {
    path: '/chatfriend',
    name: 'chatfriend',
    component: () => import('../components/Chat/Friend.vue')
  },
  {
    path: '/chatselfsetting',
    name: 'chatselfsetting',
    component: () => import('../components/Chat/SelfSetting.vue') 
  },
  //login
  {
    path: '/login',
    name: 'Login',
    component: () => import('../components/login/Login.vue'),
    children: [
      // {
      //   path: 'Enroll',
      //   component: () => import('../components/login/Enroll.vue')
      // },
    ]
  },
  {
    path: '/notice',
    name: 'Notice',
    component: () => import('../components/login/Notice.vue')
  },
  {
    path: '/reset',
    name: 'Reset',
    component: () => import('../components/login/Reset.vue')
  },
  {
    path: '/forgotpw',
    name: 'ForgotPW',
    component: () => import('../components/login/ForgotPW.vue')
  },
  {
    path: '/enroll',
    name: 'Enroll',
    component: () => import('../components/login/Enroll.vue')
  },
  {
    path: '/success',
    name: 'Success',
    component: () => import('../components/login/Success.vue')
  },
  {
    path: '/selfsetting',
    name: 'selfsetting',
    component: () => import('../components/SelfSetting.vue') 
  },
  {
    path: '/phonesetting',
    name: 'phonesetting',
    component:  () => import('../components/PhoneSetting.vue') 
  }, 
  {
    path: '/friend',
    name: 'friend',
    component: () => import('../components/Friend.vue')
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
