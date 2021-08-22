<template>
  <div>

    <div class="tk-form">
      <div class="tk-form-row">
        <div>
          文本
        </div>
        <div>
          <TkSwitch v-model="isShow">Label</TkSwitch>
        </div>
      </div>

      <div class="tk-form-row">
        <div>
          状态文本
        </div>
        <div>
          <TkSwitch v-model="isShow" text-on="1" text-off="0"></TkSwitch>
        </div>
      </div>
    </div>

    <fieldset class="tk-fieldset">
      <legend>v-model</legend>
      <input type="checkbox" v-model="isShow">
      <p v-if="isShow">Now you see me, soon you won't.</p>
    </fieldset>


  </div>
</template>

<script>
export default {
  name: 'SwitchDemo',

  data() {
    return {
      isShow: false
    }
  }
}
</script>

<style scoped>

</style>
