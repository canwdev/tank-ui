<template>
  <div class="demo-left-bar">
    <TkTree
      :nodes="treeData"
      :selected="selected"
      @onItemClick="handleClick"
    />
  </div>
</template>

<script>
import {DemoList} from '../enum'
import TreeNode from '../../src/packages/Tree/tree-node'

export default {
  name: 'DocLeftNav',
  data() {
    return {
      treeData: new TreeNode({
        name: 'Documents',
        children: DemoList.map(item => new TreeNode(item))
      }),
      selected: null,
      breadcrumbList: []
    }
  },
  methods: {
    handleClick(node) {
      this.selected = node.id
      this.$emit('selectItem', node)
    }
  }
}
</script>

<style scoped>

</style>
