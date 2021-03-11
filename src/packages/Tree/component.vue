<template>
  <div class="tk-tree">
    <TkTreeItem
      ref="treeFirstItem"
      :item="nodes"
      :selected="selected"
      @onItemClick="$emit('onItemClick', $event)"
      @onItemLazyLoad="$emit('onItemLazyLoad', $event)"
    ></TkTreeItem>
  </div>
</template>

<script>
import TkTreeItem from './TreeItem'

export default {
  name: 'TkTree',
  components: {
    TkTreeItem
  },
  props: {
    /**
     * {
            id: 1, // 唯一标识符id
            name: 'hello', // 节点显示名称
            lazy: false, // 如果为 true 则会触发 onItemLazyLoad 事件处理异步加载逻辑
            children: [] // 子节点，可以为空数组或直接没有该属性
          },
     */
    nodes: {
      type: Object,
      default() {
        return {}
      }
    },
    // 当前选中的 id
    selected: {
      type: [Number, String],
      default: null
    }
  },
  mounted() {
    // 自动打开第一个节点
    this.$refs.treeFirstItem.handleClick()
  }
}
</script>
