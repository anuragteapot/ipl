import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import VueProgressBar from 'vue-progressbar'
import LineChart from './components/Chart/Line'
import DoughnutChart from './components/Chart/Doughnut'
import Piechart from './components/Chart/Pie'
import Barchart from './components/Chart/Bar'
import HorizontalBarchart from './components/Chart/HorizontalBar'

// Add the plugins
Vue.use(BootstrapVue)
Vue.use(VueProgressBar, {
  color: 'rgb(143, 255, 199)',
  failedColor: 'red',
  height: '2px'
})

// Load components
Vue.component('line-chart', LineChart);
Vue.component('doughnut-chart', DoughnutChart);
Vue.component('pie-chart', Piechart);
Vue.component('bar-chart', Barchart);
Vue.component('horizontalbar-chart', HorizontalBarchart);

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = true

// Create the root Vue instance
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
