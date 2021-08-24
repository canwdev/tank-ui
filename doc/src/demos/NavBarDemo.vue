<template>
  <div class="nav-header-demo">
    <TkNavBar
      :menu-list="[
        {title: 'AAAA', url: '#'},
        {title: 'BBBB', url: '#'},
        {title: 'CCCC', url: '', children: [
          {title: 'DDDD', url: '#'},
          {title: 'EEEE', url: '#'}
        ]}
      ]"
    ></TkNavBar>
  </div>
</template>

<script>
export default {
  name: 'NavBarDemo'
}
</script>


