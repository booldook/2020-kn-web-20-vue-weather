import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@fortawesome/fontawesome-free/css/all.min.css'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.min.css'


Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
