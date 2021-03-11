<template>
  <TkContainer class="docs-page">
    <div class="nav">
      <DocLeftNav
        @selectItem="handleSelectItem"
      />
    </div>
    <div class="main">
      <component
        :is="selectedComponent"
        v-if="selectedComponent"
      ></component>
      <span v-else>Select a document</span>
    </div>
  </TkContainer>
</template>

<script>
import DocLeftNav from '../components/DocLeftNav'
import {DemoList} from '../enum'

const dynamicImportComponents = {}
DemoList.forEach(item => {
  dynamicImportComponents[item.component] = resolve => require([`../demos/${item.component}`], resolve)
})

export default {
  name: 'Docs',
  components: {
    DocLeftNav,
    ...dynamicImportComponents
  },
  data() {
    return {
      selectedComponent: null
    }
  },
  methods: {
    handleSelectItem(item) {
      this.selectedComponent = item.component
    }
  }
}
</script>

<style lang="scss" scoped>
.docs-page {
  display: flex;
  flex: 1;

  .nav {
    height: 100%;
    width: 260px;
    border-right: 1px solid #ccc;
  }

  .main {
    padding: 10px;
  }
}
</style>
