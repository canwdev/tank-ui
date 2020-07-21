<template>
  <div id="app">
    <TkNavHeader
      :menu-list="[
        {title: '首页', url: '/'},
        {title: '文档', url: '/'},
        {title: '资源', url: '/'}
      ]"
    />
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
