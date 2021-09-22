import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/style/normalize.css'
import './assets/style/base.scss'
const isProd = process.env.NODE_ENV === 'production' // 'development'

import tankUI from '@canwdev/tank-ui'

if (isProd) {
  require('@canwdev/tank-ui/dist/tank-ui.css')
}

Vue.use(tankUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
