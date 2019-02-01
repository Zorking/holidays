import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueResource from 'vue-resource'
require('bootstrap')
Vue.config.productionTip = false

Vue.use(VueResource)
new Vue({
  el: '#app',
  created: function () {
    window.Vue = this
  },
  router,
  render: h => h(App)
})