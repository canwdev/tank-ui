<template>
  <div class="tk-tree-item tree-bg-line" :class="{'is-last': isLast}">
    <div
        class="tree-item-title tree-bg-line"
        :class="{'is-last': isLast, 'is-selected': isSelected}"
        @click="handleClick"
        :title="item.name"
    >
      <img v-if="isLoading" src="./images/loading.gif" class="loading-img">
      <template v-else-if="isFolder && !isFolderEmpty">
        <img v-if="isOpen" src="./images/line-node-open.png">
        <img v-else src="./images/line-node-close.png">
      </template>
      <img v-else src="./images/line-node.png">

      <img v-if="isFolder" src="./images/folder.png">
      <img v-else src="./images/file.png">

      {{ item.name }}
    </div>
    <div v-show="isOpen" v-if="isFolder">
      <TreeItem
          v-for="(child, index) in item.children"
          :key="index"
          class="item"
          :item="child"
          :selected="selected"
          :is-last="index === item.children.length - 1"
          @onItemClick="$emit('onItemClick', $event)"
          @onItemLazyLoad="$emit('onItemLazyLoad', $event)"
      ></TreeItem>
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
    },
    selected: {
      type: [Number, String],
      default: null
    }
  },
  data() {
    return {
      isOpen: false,
      isLoading: false
    }
  },
  computed: {
    isFolder() {
      return this.item.lazy || this.item.children
    },
    isFolderEmpty() {
      return this.isFolder && this.item.children && this.item.children.length === 0
    },
    isSelected() {
      return this.item.id === this.selected
    }
  },
  methods: {
    handleClick() {
      this.$emit('onItemClick', this.item)
      if (this.item.lazy && !this.isLoading) {
        this.isLoading = true
        this.$emit('onItemLazyLoad', this.lazyLoad())
      } else if (this.item.children) {
        this.isOpen = !this.isOpen
      }
    },
    lazyLoad() {
      return {
        node: this.item,
        key: this.item.id,
        done: (children) => {
          this.item.children = children
          this.isOpen = true
          this.isLoading = false
          this.item.lazy = false
        },
        fail: () => {
          console.error('lazyLoad fail')
          this.isLoading = false
        }
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.tree-bg-line {
  background-repeat repeat-y
  background-image url("./images/line.png")

  &.is-last {
    background none
  }
}

.tk-tree-item {
  cursor pointer
  line-height: 1.5
  user-select none

  .tk-tree-item {
    margin-left: 32px
  }

  .tree-item-title {
    display flex
    align-items center
    white-space: nowrap;

    &.is-selected {
      font-weight: bold;
      color #409EFF
    }

    .loading-img {
      margin-left: 8px;
      margin-right: 8px
      background white
    }
  }
}
</style>
