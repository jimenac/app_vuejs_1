import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import axios from './plugins/axios'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  axios,
  render: h => h(App)
}).$mount('#app')
