<template>
  <div>
    <h2>TkContextMenu</h2>
    <fieldset class="tk-fieldset">
      <legend>Demo</legend>
      <div class="tk-form">
        <div class="tk-form-row">
          <div>
            autoClose
          </div>
          <div>
            <TkSwitch v-model="autoClose"/>
          </div>
        </div>
      </div>

      <hr>

      <AutoRatioBox class="demo-area" :ratio=".8">
        <div class="inner-box" @contextmenu.prevent="$refs.ctxMenu.open">
          Right click here
        </div>
      </AutoRatioBox>

      <TkContextMenu ref="ctxMenu" :auto-close="autoClose">
        <div class="flex items-center justify-between" style="padding: 0 5px" @click.stop>
          <TkButton>1</TkButton>
          <TkButton>2</TkButton>
          <TkButton>3</TkButton>
          <TkButton>4</TkButton>
        </div>
        <hr>
        <TkButton size="no-style" class="menu-item">Menu 1</TkButton>
        <hr>
        <li class="menu-item">Menu 2</li>
        <li class="menu-item">Menu 3</li>
        <li class="menu-item" disabled>Menu 4</li>
      </TkContextMenu>
    </fieldset>

  </div>
</template>

<script>
export default {
  name: 'Demo',
  data() {
    return {
      autoClose: true
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.demo-area {
  background: #ccc;
  ::v-deep .inner-box {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
