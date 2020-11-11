<template>
  <div class="tk-tree-item">
    <div
      class="tree-item-title"
      :class="{'is-last': isLast, 'is-selected': isSelected}"
      @click="handleClick"
    >
      <img v-if="isLoading" src="./images/loading.gif" class="loading-img">
      <template v-else-if="isFolder">
        <img v-if="isOpen" src="./images/line-node-open.png">
        <img v-else src="./images/line-node-close.png">
      </template>
      <img v-else src="./images/line-node.png">

      <img v-if="isFolder" src="./images/folder.png">
      <img v-else src="./images/file.png">

      {{ item.name }}
    </div>
    <div v-show="isOpen" v-if="isFolder">
      <tree-item
        v-for="(child, index) in item.children"
        :key="index"
        class="item"
        :item="child"
        :selected="selected"
        :is-last="index === item.children.length - 1"
        @onItemClick="$emit('onItemClick', $event)"
        @onItemLazyLoad="$emit('onItemLazyLoad', $event)"
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
    },
    selected: {
      type: [Number, String],
      default: null
    }
  },
  data() {
    return {
      isOpen: false,
      isLoading: false,
    }
  },
  computed: {
    isFolder() {
      return this.item.lazy || (this.item.children && this.item.children.length)
    },
    isSelected() {
      return this.item.id === this.selected
    }
  },
  methods: {
    handleClick() {
      this.$emit('onItemClick', this.item)
      if (this.item.children && this.item.children.length) {
        this.isOpen = !this.isOpen
      } else if (this.item.lazy && !this.isLoading) {
        this.isLoading = true
        this.$emit('onItemLazyLoad', this.lazyLoad())
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

    &.is-selected {
      font-weight: bold;
      color #409EFF
    }

    &.is-last {
      background none
    }

    .loading-img {
      margin-left: 8px;
      margin-right: 8px
      background white
    }
  }
}
</style>
