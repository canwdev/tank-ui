<template>
  <div class="demo">
    <h1>TkToast</h1>
    <fieldset class="tk-fieldset">
      <legend>Demo</legend>
      <TkButton @click="showToast">Show Toast</TkButton>
    </fieldset>
    <fieldset class="tk-fieldset">
      <legend>配置</legend>

      <div class="tk-form">
        <div class="tk-form-row">
          <div>
            message
          </div>
          <div>
            <TkInput v-model="toastConfig.message"></TkInput>
          </div>
        </div>

        <div class="tk-form-row">
          <div>
            duration
          </div>
          <div>
            <TkInput v-model="toastConfig.duration" type="number"></TkInput>
          </div>
        </div>

        <div class="tk-form-row">
          <div>
            type
          </div>
          <div>
            <select
              v-model="type"
              class="tk-input"
            >
              <option
                v-for="item in typeList"
                :key="item"
                :value="item"
              >{{ item }}
              </option>
            </select>

            <span style="padding-left: 10px;">{{ type }}</span>
          </div>
        </div>

        <div class="tk-form-row">
          <div>
            showClose
          </div>
          <div>
            <TkSwitch v-model="toastConfig.showClose"></TkSwitch>
          </div>
        </div>

        <div class="tk-form-row">
          <div>
            center
          </div>
          <div>
            <TkSwitch v-model="toastConfig.center"></TkSwitch>
          </div>
        </div>

        <div class="tk-form-row">
          <div>
            dangerouslyUseHTMLString
          </div>
          <div>
            <TkSwitch v-model="toastConfig.dangerouslyUseHTMLString"></TkSwitch>
          </div>
        </div>

      </div>

    </fieldset>
  </div>
</template>

<script>
import {typeList} from '../../../src/packages/Toast/src/enum'

export default {
  name: 'ToastDemo',
  data() {
    return {
      typeList,
      type: typeList[0],
      toastConfig: {
        message: 'Hello world',
        duration: 3000,
        showClose: false,
        center: false,
        dangerouslyUseHTMLString: false,
      }
    }
  },
  methods: {
    showToast() {
      console.log(this.toastConfig)
      this.$toast[this.type](this.toastConfig)
    }
  }
}
</script>

<style scoped>

</style>
