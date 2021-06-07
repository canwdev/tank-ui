<template>
  <div class="tree-demo">
    <div class="panel">
      <div class="panel-left">
        <TkTree
          :nodes="treeData"
          :selected="selected"
          @onItemClick="handleClick"
          @onItemLazyLoad="handleLazyLoad"
        />
      </div>

      <div class="panel-right">
        <p>path: {{ breadcrumbList.join(' > ') }}</p>
        <p>selected: {{ selected }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import TreeNode from '../../src/packages/Tree/tree-node'

export default {
  name: 'TreeDemo',
  data() {
    return {
      treeData: new TreeNode({
        name: 'My Tree',
        children: [
          {
            name: 'hello'
          },
          {
            name: 'wat'
          },
          {
            name: 'New Lazy Folder New Lazy Folder New Lazy Folder',
            lazy: true
          },
          {
            name: 'child folder',
            children: [
              {
                name: 'child folder',
                children: [{name: 'hello'}, {name: 'wat'}].map(i => new TreeNode(i))
              },
              {
                name: 'child folder',
                children: [{name: 'hello'}, {name: 'wat'}].map(i => new TreeNode(i))
              },
              {name: 'hello'},
              {name: 'wat'}
            ].map(i => new TreeNode(i))
          }
        ].map(i => new TreeNode(i))
      }),
      selected: null,
      breadcrumbList: []
    }
  },
  methods: {
    handleClick(node) {
      this.selected = node.id
      console.log('handleClick', node)
      const list = this.getNodePathById(node.id)
      this.breadcrumbList = [this.treeData, ...list].map(item => item.name)
    },
    // 根据 id 获取当前路径数组
    getNodePathById(id) {
      id = id !== undefined ? id : this.selected
      const rootNode = this.treeData
      if (id === rootNode.id) {
        return []
      }
      return this.getPathByKey(id, 'id', rootNode.children)
    },
    // 获取指定节点的路径数组
    getPathByKey(value, key, arr) {
      // 用于存储节点唯一标识值路径数组
      this.nodePathArray = []
      try {
        for (let i = 0; i < arr.length; i++) {
          this.getNodePath(arr[i], key, value)
        }
      } catch (e) {
        return this.nodePathArray
      }
    },
    getNodePath(node, key, value) {
      this.nodePathArray.push(node)

      // 找到符合条件的节点，通过throw终止掉递归
      if (node[key] === value) {
        // 也可以直接使用return;结束循环
        throw new Error('over!')
      }
      if (node.children && node.children.length > 0) {
        for (let i = 0; i < node.children.length; i++) {
          this.getNodePath(node.children[i], key, value)
        }
        // 当前节点的子节点遍历完依旧没找到，则删除路径中的该节点
        this.nodePathArray.pop()
      } else {
        // 找到叶子节点时，删除路径当中的该叶子节点
        this.nodePathArray.pop()
      }
    },
    handleLazyLoad({node, key, done, fail}) {
      console.log('handleLazyLoad', node, key)
      setTimeout(() => {
        // fail()
        done([
          {name: 'hello'},
          {
            name: 'New Lazy Folder New Lazy Folder New Lazy Folder',
            lazy: true
          },
          {name: 'wat'},
          {
            name: 'Empty Folder',
            children: []
          },
          {
            name: 'Lazy',
            lazy: true
          }
        ].map(i => new TreeNode(i)))
      }, 500)
    }
  }
}
</script>

<style lang="scss" scoped>
.tree-demo {

  .panel {
    display: flex;

    .panel-left {
      margin-right: 10px;
      border: 1px solid $color_theme;
      width: 300px;
      height: 600px;
      overflow: auto;
    }

    .panel-right {
      flex: 1;
    }
  }

}

</style>
