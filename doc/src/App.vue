<template>
  <div id="app" class="tk-scroll">
    <TkNavHeader
      :menu-list="[
        {title: 'Start', url: '/quickstart'},
        {title: 'Documents', url: '/docs'},
        {title: 'Code', url: '', children: [
          {title: 'Github', url: 'https://github.com/canwdev/tank-ui'},
          {title: 'Gitee', url: 'https://gitee.com/canwdev/tank-ui'}
        ]}
      ]"
    >
      <template slot="headerLeft">
        <NavLogo></NavLogo>
      </template>
      <template slot="headerRight">
        <TkLink>#</TkLink>
      </template>
    </TkNavHeader>

    <router-view/>
  </div>
</template>

<script>
import NavLogo from '@doc/components/NavLogo'

export default {
  name: 'App',
  components: {
    NavLogo
  }
}
</script>

<style lang="scss" scoped>
#app {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
