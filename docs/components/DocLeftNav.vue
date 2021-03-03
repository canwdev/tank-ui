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

export default {
  name: 'DocLeftNav',
  data() {
    return {
      treeData: {
        id: 0,
        name: 'Documents',
        children: DemoList
      },
      selected: 0,
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
