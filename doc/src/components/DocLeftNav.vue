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
import TreeNode from '../../../src/packages/Tree/tree-node'

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
    },
    goItem(component) {
      let result = null

      function traverse(node) {
        if (node.component === component) {
          result = node
          return
        }

        if (node.children) {
          for (const i in node.children) {
            const n = node.children[i]
            if (n.component === component) {
              result = n
              break
            }
            traverse(n)
          }
        }
      }

      traverse(this.treeData)

      if (result) {
        this.handleClick(result)
      }
    }
  }
}
</script>


