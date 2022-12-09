import Component from './components/Form.vue'

Component.install = function(Vue) {
  Vue.component(Component.name, Component)
}

export default Component
