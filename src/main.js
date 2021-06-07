import Vue from 'vue'
import api from './api'
import App from './App.vue'
import router from './router/index'
import vuetify from './plugins/vuetify'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.config.productionTip = false

Vue.use(api)
Vue.use(BootstrapVue)
require('code-prettify/styles/sunburst.css') ;

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
