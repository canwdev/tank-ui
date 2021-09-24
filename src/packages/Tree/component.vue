<template>
  <div class="tk-tree">
    <TkTreeItem
      ref="rootItem"
      :item="nodes"
      :selected-id="selectedId"
      @onItemClick="$emit('onItemClick', $event)"
      @onItemDbClick="$emit('onItemDbClick', $event)"
      @onItemLazyLoad="$emit('onItemLazyLoad', $event)"
      @onItemContextMenu="$emit('onItemContextMenu', $event)"
    >
      <template #icon="{data}">
        <slot name="icon" :data="data"></slot>
      </template>
      <template #title="{item}">
        <slot name="title" :item="item"></slot>
      </template>
      <template #append="{item}">
        <slot name="append" :item="item"></slot>
      </template>
    </TkTreeItem>
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
     * 使用 new TreeNode() 创建节点
     */
    nodes: {
      type: Object,
      default() {
        return {}
      }
    },
    // 当前选中的 id
    selectedId: {
      type: [Number, String],
      default: null
    }
  },
  mounted() {
    // 自动打开第一个节点
    this.getRootItem().handleClick()
  },
  methods: {
    getRootItem() {
      return this.$refs.rootItem
    }
  }
}
</script>

<style lang="scss" scoped>
.tk-tree {
  width: 100%;
}
</style>
