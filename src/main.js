import Vue from 'vue'
import router from './router'
import App from './App.vue'
import alert from './public/alert.js'

Vue.prototype.$Alert = alert

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
