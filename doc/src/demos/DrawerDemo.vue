<template>
  <div>
    <fieldset class="tk-fieldset">
      <legend>Demo</legend>

      <div class="tk-form">

        <div class="tk-form-row">
          <div>pos</div>
          <div class="tk-block-gap-md">
            <TkRadio v-model="pos" val="left">left</TkRadio>
            <TkRadio v-model="pos" val="right">right</TkRadio>
            <TkRadio v-model="pos" val="top">top</TkRadio>
            <TkRadio v-model="pos" val="bottom">bottom</TkRadio>
          </div>
        </div>
        <div class="tk-form-row">
          <div>visible</div>
          <div><TkSwitch v-model="isShowDrawer">Open Drawer</TkSwitch></div>
        </div>
      </div>
    </fieldset>
    <TkDrawer :visible.sync="isShowDrawer" :menu="menu" :pos="pos">
      <div class="menu-item">
        <TkButton class="">Slot Item</TkButton>
      </div>
    </TkDrawer>
  </div>
</template>

<script>
export default {
  name: 'DrawerDemo',
  data() {
    return {
      isShowDrawer: false,
      pos: 'left',
      menu: [
        {name: 'Subtitle', subtitle: true},
        {
          active: true,
          name: 'Menu Item 1', action: () => {
          }
        },
        {
          name: 'Menu Item 2', action: () => {
          }
        },
        {name: 'Subtitle', subtitle: true},
        {
          name: 'Menu Item 3', action: () => {
          }
        },
        {
          name: 'Menu Item 4', action: () => {
          }
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>
