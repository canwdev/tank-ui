// 自动加载 packages 中的所有组件文件
const context = require.context('./packages', true, /\.js$/)
const componentMap = {}
context.keys().forEach((key) => {
  const name = key.replace(/(.*\/)*([^.]+).*/ig, '$2')
  if (name === 'index') {
    const component = context(key).default
    if (component.name) {
      componentMap[component.name] = component
    }
  }
})
// console.log(componentMap)
export default componentMap
