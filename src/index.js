import componentMap from './get-components'
import TreeNode from './packages/Tree/tree-node'
import './theme/index.scss'
import TkToast from './packages/Toast'
import TkPromptDialog from './packages/PromptDialog'

console.log('componentMap', componentMap)

// 存储组件列表
const components = Object.values(componentMap)

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function(Vue) {
  // 判断是否安装
  if (install.installed) return
  // 遍历注册全局组件
  components.forEach(component => {
    Vue.component(component.name, component)
  })

  // console.log('componentMap.TkToast',componentMap.TkToast)
  TkToast.install(Vue)
  // Vue.prototype.$prompt = new TkPromptDialog(Vue)
  TkPromptDialog.install(Vue)
}

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  components: componentMap,
  enum: {
    TreeNode
  }
}
