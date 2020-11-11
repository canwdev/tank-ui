<template>
  <div class="tk-tree-item tree-bg-line" :class="{'is-last': isLast}">
    <div
      class="tree-item-title tree-bg-line"
      :class="{'is-last': isLast, 'is-selected': isSelected}"
      :title="item.name"
      @click="handleClick"
    >
      <img v-if="isLoading" src="./images/loading.gif" class="loading-img">
      <template v-else-if="isFolder && !isFolderEmpty">
        <img v-if="isOpen" class="node-open-close" src="./images/line-node-open.png">
        <img v-else class="node-open-close" src="./images/line-node-close.png">
      </template>
      <img v-else src="./images/line-node.png">

      <div class="title-inner">
        <img v-if="isFolder" src="./images/folder.png">
        <img v-else src="./images/file.png">

        {{ item.name }}
      </div>
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
          // this.item.children = children
          this.$set(this.item, 'children', children)
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

    .title-inner {
      flex: 1;
      display: flex;
      align-items: center;
      border-radius: 3px;
      padding-right: 5px;
      margin-right: 5px;
    }

    &.is-selected {
      .title-inner {
        background-color: rgba(134, 134, 134, 0.36);
      }
    }

    .loading-img {
      margin-left: 8px;
      margin-right: 8px
      background white
      flex-shrink: 0;
    }
  }
}
</style>
