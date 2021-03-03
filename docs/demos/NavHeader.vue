<template>
  <div class="nav-header-demo">
    <TkNavHeader
      :menu-list="[
        {title: 'AAAA', url: '#'},
        {title: 'BBBB', url: '#'},
        {title: 'CCCC', url: '', children: [
          {title: 'DDDD', url: '#'},
          {title: 'EEEE', url: '#'}
        ]}
      ]"
    ></TkNavHeader>
  </div>
</template>

<script>
export default {
name: "NavHeaderDemo"
}
</script>

<style scoped>

</style>
