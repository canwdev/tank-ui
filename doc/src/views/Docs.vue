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
        <h1>{{ selectedItem.title }}</h1>
        <component
          :is="selectedItem.data.component"
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
  dynamicImportComponents[item.data.component] = resolve => require([`@doc/demos/${item.data.component}`], resolve)
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
      console.log('handleSelectItem', item)
      const {data} = item
      if (!data.component) {
        this.selectedItem = null
        return
      }

      this.selectedItem = item

      if (this.$route.params.name !== data.component) {
        this.$router.push({
          params: {
            name: data.component
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
    border-right: $layout-border;
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
