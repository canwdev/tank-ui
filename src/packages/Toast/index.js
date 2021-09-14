import Component from './src/main'

Component.install = function(Vue) {
  Vue.prototype.$toast = Component
}

export default Component
