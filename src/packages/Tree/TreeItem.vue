<template>
  <div class="tk-tree-item">
    <div
      class="tree-item-title"
      :class="{'is-last': isLast}"
      @click="toggle"
    >
      <template v-if="isFolder">
        <img v-if="isOpen" src="./images/line-node-open.png">
        <img v-else src="./images/line-node-close.png">
      </template>
      <img v-else src="./images/line-node.png">

      <template v-if="isFolder">
        <img src="./images/folder.png">
      </template>
      <img v-else src="./images/file.png">

      {{ item.name }}
    </div>
    <div v-show="isOpen" v-if="isFolder">
      <tree-item
        v-for="(child, index) in item.children"
        :key="index"
        class="item"
        :item="child"
        :is-last="index === item.children.length - 1"
        @make-folder="$emit('make-folder', $event)"
        @add-item="$emit('add-item', $event)"
      ></tree-item>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TreeItem',
  props: {
    item: Object,
    isLast: {
      type: Boolean,
      default: true
    }
  },
  data: function() {
    return {
      isOpen: false
    }
  },
  computed: {
    isFolder() {
      return this.item.children && this.item.children.length
    }
  },
  methods: {
    toggle: function() {
      if (this.isFolder) {
        this.isOpen = !this.isOpen
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.tk-tree-item {
  cursor pointer
  line-height: 1.5
  user-select none

  .tk-tree-item {
    padding-left: 32px
  }

  .tree-item-title {
    display flex
    align-items center
    background url("./images/line.png") no-repeat

    &.is-last {
      background none
    }

    .title-line {

    }
  }
}
</style>
