<template>
  <div class="nav-header-demo">
    <TkNavBar
      :menu="[
        {title: 'Start', url: '/quickstart'},
        {title: 'Documents', url: '/docs'},
        {title: 'Code', url: null, children: [
          {title: 'Github', url: 'https://github.com/canwdev/tank-ui'},
          {title: 'Gitee', url: 'https://gitee.com/canwdev/tank-ui'}
        ]}
      ]"
    >
      <template slot="left">
        Left
      </template>
      <template slot="right">
        Right
      </template>
    </TkNavBar>
  </div>
</template>

<script>
export default {
  name: 'NavBarDemo',
}
</script>


