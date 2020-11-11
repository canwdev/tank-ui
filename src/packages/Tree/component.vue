<template>
  <div class="tk-tree">
    <tree-item
      :item="treeData"
      @make-folder="makeFolder"
      @add-item="addItem"
    ></tree-item>
  </div>
</template>

<script>
import TreeItem from './TreeItem'

export default {
  name: 'TkTree',
  components: {
    TreeItem
  },
  data() {
    return {
      treeData: {
        name: 'My Tree',
        children: [
          {name: 'hello'},
          {name: 'wat'},
          {
            name: 'child folder',
            children: [
              {
                name: 'child folder',
                children: [{name: 'hello'}, {name: 'wat'}]
              },
              {name: 'hello'},
              {name: 'wat'},
              {
                name: 'child folder',
                children: [{name: 'hello'}, {name: 'wat'}]
              }
            ]
          }
        ]
      }
    }
  },
  methods: {
    makeFolder: function(item) {
      this.$set(item, 'children', [])
      this.addItem(item)
    },
    addItem: function(item) {
      item.children.push({
        name: 'new stuff'
      })
    }
  }
}
</script>
