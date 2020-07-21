// 自动加载 packages 中的所有组件文件
const context = require.context('./packages', true, /\.js$/)
const componentObjects = {}
context.keys().forEach((key) => {
  const name = key.replace(/(.*\/)*([^.]+).*/ig, '$2')
  if (name === 'index') {
    const component = context(key).default
    componentObjects[component.name] = component
  }
})
// console.log(componentObjects)
export default componentObjects
