import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import VueProgressBar from 'vue-progressbar'
import LineChart from './components/chart/Line'
import DoughnutChart from './components/chart/Doughnut'
import Piechart from './components/chart/Pie'
import Barchart from './components/chart/Bar'
import HorizontalBarchart from './components/chart/HorizontalBar'
import PolarArea from './components/chart/PolarArea'
import SunBrust from './components/chart/SunBrust'
import Status from './components/status'


// Add the plugins
Vue.use(BootstrapVue)
Vue.use(VueProgressBar, {
  color: 'rgb(143, 255, 199)',
  failedColor: 'red',
  height: '2px'
})

// Load components
Vue.component('line-chart', LineChart)
Vue.component('doughnut-chart', DoughnutChart)
Vue.component('pie-chart', Piechart)
Vue.component('bar-chart', Barchart)
Vue.component('horizontalbar-chart', HorizontalBarchart)
Vue.component('sunburst-chart', SunBrust)
Vue.component('polar-chart', PolarArea)
Vue.component('status', Status)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = true

// Create the root Vue instance
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
