import Vue from 'vue'
import App from './App.vue'
import router from '../router/index'
import plugin from '../plugin'

Vue.use(plugin, {
  clear: process.env.NODE_ENV === 'development' ? false : true,
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
