<template>
  <div class="tree-table-wrap">
    <div class="header-thead table-row">
      <div class="table-col flex-sm">
        <label for="selectAll">
          <input id="selectAll" type="checkbox">
          <span>select</span>
        </label>
      </div>
      <div class="table-col flex-xl">name</div>
      <div class="table-col flex-md">depth</div>
      <div class="table-col flex-md">id</div>
      <div class="table-col flex-md">pids</div>
      <div class="table-col flex-md">desc</div>
      <div class="table-col flex-lg">date</div>
    </div>

    <div class="tree-table-body">
      <RowItem
        v-for="(item, index) in treeFlatList"
        :key="item.id"
        :item="item"
        :is-last="index === treeFlatList.length - 1"
        @toggleExpand="toggleTreeItemExpand(item, index)"
      />
    </div>

  </div>
</template>

<script>
import RowItem from './RowItem'
// 生成自增id
let idSeed = 1
const getId = () => {
  return idSeed++
}

// 生成树叶item
const getItemTemplate = (config = {}) => {
  const {
    isLazyLoad = false // 是否开启懒加载子叶
  } = config

  return {
    id: getId(),
    isChecked: false,
    name: 'File',
    desc: '这是备注',
    uploadTime: new Date(),
    isLazyLoad,
    isLoading: false
  }
}

// 生成扁平列表项
const getItemTemplateFlatted = (item, config = {}) => {
  const {
    depth = 0, // 深度
    pids = [], // 上层id列表
    hasChild = true, // 是否有子叶
    isOpen = false, // 是否已展开
    isVisible = false // 当前叶子是否可见
  } = config
  return {
    ...item,
    pids,
    depth,
    hasChild,
    isOpen,
    isVisible
  }
}

// 生成继承父树叶的扁平列表项
const inheritItemDepth = (item) => {
  const id = getId()
  return getItemTemplateFlatted({
    ...item,
    id,
    name: 'New',
    isLazyLoad: id % 2 === 0,
    isLoading: false
  }, {
    depth: item.depth + 1,
    pids: [...item.pids, item.id],
    hasChild: false,
    isVisible: true
  })
}

const recursionTraverseTree = (node, depth = 0) => {
  const list = []
  if (!node || node.length === 0) return list

  node.forEach((item) => {
    const children = item.children

    list.push({
      name: item.name,
      id: item.id,
      depth: depth,
      children: children ? recursionTraverseTree(children, depth + 1) : undefined
    })
  })
  return list
}

export default {
  name: 'TkTreeTable',
  components: {
    RowItem
  },
  data() {
    const tableData = []
    for (let i = 0; i < 10; i++) {
      // 生成demo数据
      tableData.push(getItemTemplateFlatted(getItemTemplate(), {
        depth: i * 10,
        hasChild: i % 2 === 0,
        isOpen: i % 2 === 0
      }))
    }

    return {
      tableData,
      treeData: [
        getItemTemplate(),
        {
          ...getItemTemplate(),
          children: [
            getItemTemplate(),
            getItemTemplate(),
            {
              ...getItemTemplate(),
              children: [
                getItemTemplate(),
                getItemTemplate(),
                getItemTemplate(),
              ]
            }
          ]
        },
        getItemTemplate({isLazyLoad: true}),
        getItemTemplate({isLazyLoad: true}),
        getItemTemplate()
      ],
      treeFlatList: []
    }
  },
  watch: {
    treeData: {
      handler() {
        this.treeFlatList = []
        return this.flattenTree(this.treeData)
      },
      immediate: true
    }
  },
  methods: {
    // 树状图转换为扁平列表
    flattenTree(node, depth = 0, pids = []) {
      // console.log('flattenTree', node, depth)
      if (!node || node.length === 0) return

      node.forEach((item) => {
        this.treeFlatList.push(getItemTemplateFlatted(item, {
          depth: depth,
          pids,
          isVisible: pids.length === 0,
          hasChild: Boolean(item.children)
        }))

        if (item.children) {
          this.flattenTree(item.children, depth + 1, [...pids, item.id])
        }
      })
    },
    // 列表展开收缩
    toggleTreeItemExpand(item, index) {
      if (!item.hasChild) {
        if (item.isLazyLoad) {
          console.log(item, 'isLazyLoad')
          this.lazyLoadItem(item, index)
        }
        return
      }

      const isOpen = item.isOpen
      const {id} = item
      const flag = !isOpen

      this.treeFlatList.forEach(item => {
        if (flag) {
          // 展开对应
          if (item.pids[item.pids.length - 1] === id) {
            item.isVisible = true
          }
        } else {
          // 收缩全部子类
          if (item.pids.includes(id)) {
            item.isVisible = false
            item.isOpen = false
          }
        }
      })

      item.isOpen = flag
    },
    // 懒加载列表项
    lazyLoadItem(item, index) {
      item.isLoading = true
      setTimeout(() => {
        const childArr = [
          inheritItemDepth(item),
          inheritItemDepth(item),
          inheritItemDepth(item),
          inheritItemDepth(item)
        ]
        this.treeFlatList.splice(index + 1, 0, ...childArr)
        item.isLazyLoad = false
        item.hasChild = true
        item.isOpen = true
        item.isLoading = false
      }, 500)
    }
  }
}
</script>

<style lang="scss" scoped>
.tree-table-wrap {
  .header-thead {
    border-bottom: 1px solid #ccc;
    height: 40px;
  }

  ::v-deep .table-row {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .table-col {
      height: 100%;
      display: flex;
      align-items: center;
      box-sizing: border-box;
      overflow: auto;

      &.flex-sm {
        flex: 0.8;
      }

      &.flex-md {
        flex: 1;
      }

      &.flex-lg {
        flex: 1.5;
      }

      &.flex-xl {
        flex: 3;
      }
    }
  }

  .tree-table-body {
    ::v-deep .table-row {
      height: 32px;
      //border-bottom: 1px solid #ececec;

      display: none;

      &.visible {
        display: flex;
      }

      &:hover {
        background: rgba(0, 0, 0, 0.05);
      }

      .table-col {
        &.size {
          color: #ccc;
        }
      }
    }
  }
}
</style>
