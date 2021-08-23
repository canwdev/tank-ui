<template>
  <TkContainer class="docs-page">
    <div class="nav">
      <DocLeftNav
        ref="leftNav"
        @selectItem="handleSelectItem"
      />
    </div>
    <div class="main">
      <template v-if="selectedItem">
        <h1>{{ selectedItem.name }}</h1>
        <component
          :is="selectedItem.component"
        ></component>
      </template>
      <span v-else>Please select a document</span>
    </div>
  </TkContainer>
</template>

<script>
import DocLeftNav from '../components/DocLeftNav'
import {DemoList} from '../enum'

const dynamicImportComponents = {}
DemoList.forEach(item => {
  dynamicImportComponents[item.component] = resolve => require([`@doc/demos/${item.component}`], resolve)
})

export default {
  name: 'Docs',
  components: {
    DocLeftNav,
    ...dynamicImportComponents
  },
  data() {
    return {
      selectedItem: null
    }
  },
  watch: {
    '$route.params.name': {
      handler(val) {
        // console.log(val)
        if (val) {
          this.$refs.leftNav.goItem(val)
        }
      }
      // immediate: true
    }
  },
  mounted() {
    this.checkLeftNav(this.$route.params.name)
  },
  methods: {
    checkLeftNav(component) {
      if (component) {
        this.$refs.leftNav.goItem(component)
      }
    },
    handleSelectItem(item) {
      // console.log('handleSelectItem', item)
      if (!item.component) {
        return
      }

      this.selectedItem = item

      if (this.$route.params.name !== item.component) {
        this.$router.push({
          params: {
            name: item.component
          }
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.docs-page {
  display: flex;
  flex: 1;
  overflow: hidden;

  .nav {
    height: 100%;
    width: 220px;
    border-right: 1px solid $border-color;
    overflow: auto;
  }

  .main {
    box-sizing: border-box;
    height: 100%;
    overflow: auto;
    padding: 10px;
    flex: 1;
  }
}
</style>
