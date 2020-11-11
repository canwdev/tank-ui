<template>
  <div class="limit-width">
    <TkTree
        :nodes="treeData"
        :selected="selected"
        @onItemClick="handleClick"
        @onItemLazyLoad="handleLazyLoad"
    />
  </div>
</template>

<script>
function getRandomId() {
  return Number(Math.random().toString().split('.')[1])
}

export default {
  data() {
    return {
      treeData: {
        id: 0,
        name: 'My Tree',
        children: [
          {
            id: 1,
            name: 'hello'
          },
          {
            id: 2,
            name: 'wat'
          },
          {
            id: getRandomId(),
            name: 'New Lazy Folder New Lazy Folder New Lazy Folder',
            lazy: true
          },
          {
            id: 3,
            name: 'child folder',
            children: [
              {
                id: 4,
                name: 'child folder',
                children: [{id: 5, name: 'hello'}, {id: 6, name: 'wat'}]
              },
              {
                id: 9, name: 'child folder',
                children: [{id: 10, name: 'hello'}, {id: 11, name: 'wat'}]
              },
              {id: 7, name: 'hello'},
              {id: 8, name: 'wat'}
            ]
          }
        ]
      },
      selected: 0
    }
  },
  methods: {
    handleClick(node) {
      this.selected = node.id
      console.log('handleClick', node)
    },
    handleLazyLoad({node, key, done, fail}) {
      console.log('handleLazyLoad', node, key)
      setTimeout(() => {
        // fail()
        done([
          {id: getRandomId(), name: 'hello'},
          {
            id: getRandomId(), name: 'New Lazy Folder New Lazy Folder New Lazy Folder',
            lazy: true
          },
          {id: getRandomId(), name: 'wat'},
          {
            id: getRandomId(), name: 'Empty Folder',
            children: []
          },
          {
            id: getRandomId(), name: 'Lazy',
            lazy: true
          }
        ])
      }, 500)
    }
  }
}
</script>

<style scoped>
.limit-width {
  margin-top: 100px;
  border: 1px solid crimson;
  width: 800px;
  height: 600px;
  overflow: auto;
}
</style>
