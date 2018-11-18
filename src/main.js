import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import VueProgressBar from 'vue-progressbar'

// Add the plugins
Vue.use(BootstrapVue)
Vue.use(VueProgressBar, {
  color: 'rgb(143, 255, 199)',
  failedColor: 'red',
  height: '2px'
})

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = true

// Create the root Vue instance
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
