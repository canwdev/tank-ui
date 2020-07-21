<template>
  <div id="app">
    <TkNavHeader
      :menu-list="[
        {title: '入门', url: '/quickstart'},
        {title: '文档', url: '/docs'},
        {title: '资源', url: '', children: [
          {title: 'Github', url: 'https://github.com/fe-player/tank-ui'},
          {title: 'Gitee', url: 'https://gitee.com/fe-player/tank-ui'}
        ]}
      ]"
    >
      <template slot="headerLeft">
        <NavLogo></NavLogo>
      </template>
      <template slot="headerRight">
        <TkLink>搜索</TkLink>
      </template>
    </TkNavHeader>

    <router-view/>
  </div>
</template>

<script>
  import NavLogo from '@/components/NavLogo'

  export default {
    name: 'App',
    components: {
      NavLogo
    }
  }
</script>

<style>
</style>
