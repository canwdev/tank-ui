<template>
  <div
    class="row-item table-row"
    :class="{'visible': item.isVisible}"
  >
    <div class="table-col flex-sm">
      <input v-model="item.isChecked" type="checkbox">
    </div>
    <div class="table-col flex-xl tree-item">
      <div class="tree-title" :style="{paddingLeft: item.depth*32+'px'}">
        <div v-if="!isLast" class="padding-block-wrap">
          <div
            v-for="i in item.depth + 1"
            :key="i"
            class="padding-block"
          ></div>
        </div>

        <div
          class="item-toggler"
          :class="{hasChild: item.hasChild, isOpen: item.isOpen, isLazyLoad: item.isLazyLoad, isLoading: item.isLoading}"
          @click="$emit('toggleExpand')"
        >

        </div>

        <div
          class="item-icon"
          :class="{hasChild: item.hasChild || item.isLazyLoad}"
        >
        </div>
        <span class="text-overflow">{{ item.name }}</span>
      </div>
    </div>

    <div class="table-col dev-info flex-md">{{ item.depth }}</div>
    <div class="table-col dev-info flex-md">{{ item.id }}</div>
    <div class="table-col dev-info flex-md">{{ item.pids }}</div>

    <div class="table-col flex-md size">
      <span class="text-overflow">{{ item.desc }}</span>
    </div>
    <div class="table-col flex-lg">{{ formatTime(item.uploadTime) }}</div>
  </div>
</template>

<script>
export default {
  name: 'TkTreeTableRowItem',
  props: {
    item: {
      type: Object,
      default: null
    },
    // 是否为最后一个节点
    isLast: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    formatTime(value) {
      return value.toLocaleDateString()
    }
  }
}
</script>

<style lang="scss" scoped>
.tree-item {
  position: relative;

  .tree-title {
    display: flex;
    align-items: center;
  }

  .padding-block-wrap {
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    pointer-events: none;
  }

  .padding-block {
    width: 32px;
    height: 32px;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url("./images/line.png");
  }

  .item-toggler {
    width: 32px;
    height: 32px;
    position: relative;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url("./images/line-node.png");

    &.isLazyLoad {
      &:before {
        content: "";
        position: absolute;
        right: 5px;
        top: 5px;
        border-radius: 50%;
        width: 5px;
        height: 5px;
        background: red;
      }

      background-image: url("./images/line-node-close.png");
      cursor: pointer;
    }

    &.hasChild {
      background-image: url("./images/line-node-close.png");
      cursor: pointer;

      &.isOpen {
        background-image: url("./images/line-node-open.png");
      }
    }

    &.isLoading {
      background-image: url("./images/loading.gif");
    }
  }

  .item-icon {
    width: 32px;
    height: 32px;
    margin-right: 5px;
    color: cyan;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url("./images/file.png");

    &.hasChild {
      background-image: url("./images/folder.png");
    }

  }
}
.dev-info {
  font-size: 12px;
  color: blue;
}
</style>
