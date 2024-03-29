<template>
  <div class="tk-tree-item tk-tree-bg-line" :class="{'is-last': isLast}" tabindex="-1">
    <div
      class="tree-item-title tk-tree-bg-line"
      :class="{'is-last': isLast, 'is-selected': isSelected}"
      :title="item.title"
      @click="handleClick"
      @dblclick="handleDbClick"
      @contextmenu="$emit('onItemContextMenu', {event: $event, item})"
    >
      <img v-if="item.isLoading" src="./images/loading.gif" class="loading-img">
      <div
        v-else-if="isFolder && !isFolderEmpty"
        class="flex"
        @click.stop="handleToggleOpen"
      >
        <img v-if="item.isOpen" class="node-open-close" src="./images/line-node-open.png">
        <img v-else class="node-open-close" src="./images/line-node-close.png">
      </div>
      <img v-else src="./images/line-node.png">

      <div class="title-inner">
        <slot name="icon" :data="{item, isFolder}">
          <img v-if="isFolder" src="./images/folder.png">
          <img v-else src="./images/file.png">
        </slot>

        <span class="title text-overflow">
          <slot name="title" :item="item">{{ item.title || item.id }}</slot>
        </span>
        <span class="append flex items-center" @click.stop>
          <slot name="append" :item="item"></slot>
        </span>
      </div>
    </div>
    <div v-show="item.isOpen" v-if="isFolder" class="tree-item-sub">
      <TkTreeItem
        v-for="(child, index) in item.children"
        :key="index"
        class="item"
        :item="child"
        :selected-id="selectedId"
        :is-last="index === item.children.length - 1"
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
  </div>
</template>

<script>
export default {
  name: 'TkTreeItem',
  props: {
    // 当前节点对象
    item: {
      type: Object,
      required: true
    },
    // 是否为最后一个节点（自动判断）
    isLast: {
      type: Boolean,
      default: true
    },
    // 当前选中节点 id
    selectedId: {
      type: [Number, String],
      default: null
    }
  },
  computed: {
    // 是否为文件夹（或懒加载项）
    isFolder() {
      return Boolean(this.item.isLazy || this.item.children)
    },
    // 是否为空文件夹
    isFolderEmpty() {
      return this.isFolder && this.item.children && this.item.children.length === 0
    },
    // 当前节点是否选中
    isSelected() {
      return this.item.id === this.selectedId
    }
  },
  watch: {
    item: {
      handler(val) {
        if (!val) {
          return
        }
        this.updateMethods()
      },
      immediate: true
    }
  },
  methods: {
    updateMethods() {
      this.item.$click = this.handleClick
      this.item.$doLazyLoad = this.doLazyLoad
    },
    /**
     * 处理节点点击事件（展开或异步加载）
     */
    handleClick() {
      this.$emit('onItemClick', this.item)
      this.handleToggleOpen({isOpen: true})
    },
    handleDbClick() {
      this.$emit('onItemDbClick', this.item)
      this.handleToggleOpen()
    },
    /**
     * 开关节点
     * isOpen boolean 强制打开或关闭
     */
    handleToggleOpen({isOpen} = {}) {
      if (this.item.isLazy && !this.item.isLoading) {
        this.item.isLoading = true
        this.doLazyLoad()
      } else if (this.item.children) {
        this.item.isOpen = isOpen !== undefined ? isOpen : !this.item.isOpen
      }
    },
    doLazyLoad() {
      this.item.children = []
      this.$emit('onItemLazyLoad', this.item.lazyLoad())
    }
  }
}
</script>

<style lang="scss" scoped>
.tk-tree-bg-line {
  background-repeat: repeat-y;
  background-image: url("./images/line.png");

  &.is-last {
    background: none;
  }
}

.tk-tree-item {
  line-height: 1.5;
  user-select: none;

  .tk-tree-item {
    margin-left: 32px;
  }

  .tree-item-sub {
  }

  .tree-item-title {
    display: flex;
    align-items: center;
    white-space: nowrap;
    cursor: pointer;

    .title-inner {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-radius: $border-radius;
      padding: 0 2px;
      margin-right: 4px;
      height: 32px;

      .title {
        margin-left: 4px;
        flex: 1;
      }
    }

    &:hover {
      .title-inner {
        filter: brightness(110%);
        background-color: $separator-color;
      }
    }

      &:active {
        .title-inner {
          filter: brightness(80%);
        }
      }

    &.is-selected {
      .title-inner {
        background-color: $border-color; //rgba(134, 134, 134, 0.36);
      }
    }

    .loading-img {
      margin-left: 8px;
      margin-right: 8px;
      flex-shrink: 0;
    }

    //.node-open-close {
    //  background: url('./images/node-bg.png')
    //}
  }
}
</style>
