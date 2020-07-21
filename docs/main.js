// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/style/normalize.css'
import '@/assets/style/base.styl'

import TankUI from '../src/index'
import '../src/theme/index.styl'

Vue.config.productionTip = false

Vue.use(TankUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
