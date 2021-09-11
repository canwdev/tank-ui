<template>
  <div class="demo-left-bar">
    <TkTree
      :nodes="treeData"
      :selected-id="selected && selected.id"
      @onItemClick="handleNodeClick"
    />
  </div>
</template>

<script>
import {DemoList} from '../enum'
import TreeNode from '../../../src/packages/Tree/tree-node'

export default {
  name: 'DocLeftNav',
  data() {
    return {
      treeData: new TreeNode({
        title: 'Documents',
        children: DemoList.map(item => new TreeNode(item))
      }),
      selected: null,
      breadcrumbList: []
    }
  },
  methods: {
    handleNodeClick(node) {
      this.selected = node
      this.$emit('selectItem', node)
    },
    goItem(component) {
      let result = null

      function traverse(node) {
        const {data} = node
        if (data.component === component) {
          result = node
          return
        }

        if (node.children) {
          for (const i in node.children) {
            const n = node.children[i]
            const {data} = n
            if (data.component === component) {
              result = n
              break
            }
            traverse(n)
          }
        }
      }

      traverse(this.treeData)

      if (result) {
        this.handleNodeClick(result)
      }
    }
  }
}
</script>


