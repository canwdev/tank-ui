import Component from './src/main'

/**
 *
 * @param {*} Vue
 * this.$prompt.open()
 */
Component.install = function(Vue) {
  Component.prototype.Vue = Vue
  Vue.prototype.$prompt = Component
}

Component.create = (options) => {
  return new Component().open(options)
}

export default Component
