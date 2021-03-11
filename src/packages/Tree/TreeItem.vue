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
    // 当前节点对象
    item: Object,
    // 是否为最后一个节点（自动判断）
    isLast: {
      type: Boolean,
      default: true
    },
    // 当前选中节点 id
    selected: {
      type: [Number, String],
      default: null
    }
  },
  data() {
    return {
      // 节点是否展开
      isOpen: false,
      // 节点是否加载中
      isLoading: false
    }
  },
  computed: {
    // 是否为文件夹（或懒加载项）
    isFolder() {
      return this.item.lazy || this.item.children
    },
    // 是否为空文件夹
    isFolderEmpty() {
      return this.isFolder && this.item.children && this.item.children.length === 0
    },
    // 当前节点是否选中
    isSelected() {
      return this.item.id === this.selected
    }
  },
  methods: {
    // 处理节点点击事件（展开或异步加载）
    handleClick() {
      this.$emit('onItemClick', this.item)
      if (this.item.lazy && !this.isLoading) {
        this.isLoading = true
        this.$emit('onItemLazyLoad', this.lazyLoad())
      } else if (this.item.children) {
        this.isOpen = !this.isOpen
      }
    },
    /**
     * 处理异步加载的数据
     * node 节点
     * key 节点 id
     * done 异步加载成功后回调，传入 children 数组
     * fail 异步加载失败后回调
     * @returns {{node: Object, fail: fail, done: done, key: *}}
     */
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

<style lang="scss" scoped>.tree-bg-line  {
  background-repeat: repeat-y;
  background-image: url("./images/line.png");&.is-last  {
    background: none;
  }
}.tk-tree-item  {
  cursor: pointer;
  line-height: 1.5;
  user-select: none;.tk-tree-item  {
    margin-left: 32px;
  }.tree-item-title  {
    display: flex;
    align-items: center;
    white-space: nowrap;.title-inner  {
      flex: 1;
      display: flex;
      align-items: center;
      border-radius: 3px;
      padding-right: 5px;
      margin-right: 5px;
    }&.is-selected  {
      .title-inner  {
        background-color: rgba(134, 134, 134, 0.36);
      }
    }.loading-img  {
      margin-left: 8px;
      margin-right: 8px;
      background: white;
      flex-shrink: 0;
    }
  }
}
</style>
