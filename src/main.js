import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store/store';
import VueContextMenu from 'vue-contextmenu'
Vue.use(VueContextMenu)
Vue.use(vuetify);

Vue.config.productionTip = false



new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
