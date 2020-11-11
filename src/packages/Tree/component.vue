<template>
  <div class="tk-tree">
    <TreeItem
      ref="treeFirstItem"
      :item="nodes"
      :selected="selected"
      @onItemClick="$emit('onItemClick', $event)"
      @onItemLazyLoad="$emit('onItemLazyLoad', $event)"
    ></TreeItem>
  </div>
</template>

<script>
import TreeItem from './TreeItem'

export default {
  name: 'TkTree',
  components: {
    TreeItem
  },
  props: {
    nodes: {
      type: Object,
      default() {
        return {}
      }
    },
    selected: {
      type: [Number, String],
      default: null
    }
  },
  data() {
    return {

    }
  },
  mounted() {
    this.$refs.treeFirstItem.handleClick()
  },
  methods: {
  }
}
</script>
