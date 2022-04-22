import Vue from 'vue'
import Vuex from 'vuex'
// import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  namescaped: true,
  state: {
    currentUser: null,
    // token: "", // 存放jwt token
    isLogin: false,
    userId: null,
    group: false,
   

  },
  mutations: {
    SET_USER (state, user) {
      state.currentUser = user
    },
    SET_ADMIN (state, isAdmin) {
      state.isAdmin = isAdmin
    },
    SET_USERID(state, id){
      state.userId = id
    },
    SET_GROUP(state, group){
      state.group = group
    },
   
  },
  actions: {
    setUser ({ commit }, user) {
      commit('SET_USER', user)
    },
    setUserId ({ commit }, id) {
      commit('SET_USERID', id)
    },
    setAdmin ({ commit }, isAdmin) {
      commit('SET_ADMIN', isAdmin)
    },
    setGroup ({ commit }, group) {
      commit('SET_GROUP', group)
    },
    
  },
  getters: {
    currentUser: state => state.currentUser,
    isLogin: state => state.isLogin,
    userId: state => state.userId,
    group: state => state.group,
   
  },
  
  // plugins: [createPersistedState({
  //   storage: window.localStorage,
  //   }
  // )],


})
