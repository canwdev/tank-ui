<template>
  <div class="demo-left-bar">
    <TkTree
      :nodes="treeData"
      :selected-id="selected && selected.id"
      @onItemClick="handleNodeClick"
    >
      <template v-slot:icon="{data: {item}}">
        <img v-if="!item.children" class="tree-node-icon" src="@doc/assets/images/vue.svg">
        <img v-else class="tree-node-icon" src="@doc/assets/images/folder-vue.svg">
      </template>
    </TkTree>
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

<style lang="scss" scoped>
.demo-left-bar {
  ::v-deep .tree-node-icon {
    width: 26px;
    height: 26px;
  }
}

</style>
