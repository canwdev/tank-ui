<template>
  <div>

    <h2>TkSwitch</h2>

    <fieldset class="tk-fieldset">
      <legend>Demo</legend>

      <div class="tk-form">
        <div class="tk-form-row">
          <div>
            开关
          </div>
          <div>
            <TkSwitch v-model="isShow">Label</TkSwitch>
          </div>
        </div>

        <div class="tk-form-row">
          <div>

          </div>
          <div class="tk-block-gap-xs">
            <TkSwitch v-model="isShow" text-on="1" text-off="0"></TkSwitch>
            <TkSwitch v-model="isShow" disabled text-on="1" text-off="0"></TkSwitch>
          </div>
        </div>

        <div class="tk-form-row">
          <div>
            checkbox
          </div>
          <div>
            <TkSwitch v-model="isShow" checkbox>Label</TkSwitch>
          </div>
        </div>

        <div class="tk-form-row">
          <div>

          </div>
          <div class="tk-block-gap-xs">
            <TkSwitch v-model="isShow" checkbox></TkSwitch>
            <TkSwitch v-model="isShow" checkbox><template v-slot:checkboxInner>✗</template></TkSwitch>
            <TkSwitch v-model="isShow" disabled checkbox></TkSwitch>
          </div>
        </div>
      </div>
    </fieldset>

    <fieldset class="tk-fieldset">
      <legend>Size</legend>
      <div class="tk-block-gap-md">
        <TkSwitch v-model="isShow" size="xs">size="xs"</TkSwitch>
        <TkSwitch v-model="isShow" size="sm">size="sm"</TkSwitch>
        <TkSwitch v-model="isShow" size="lg">size="lg"</TkSwitch>
        <TkSwitch v-model="isShow" size="xl">size="xl"</TkSwitch>
      </div>
      <div class="tk-block-gap-md">
        <TkSwitch v-model="isShow" checkbox size="xs">size="xs"</TkSwitch>
        <TkSwitch v-model="isShow" checkbox size="sm">size="sm"</TkSwitch>
        <TkSwitch v-model="isShow" checkbox size="lg">size="lg"</TkSwitch>
        <TkSwitch v-model="isShow" checkbox size="xl">size="xl"</TkSwitch>
      </div>
    </fieldset>

    <fieldset class="tk-fieldset">
      <legend>Theme</legend>

      <div class="tk-block-gap-md">
        <TkSwitch v-model="isShow" theme="success">theme="success"</TkSwitch>
        <TkSwitch v-model="isShow" theme="error">theme="error"</TkSwitch>
        <TkSwitch v-model="isShow" theme="info">theme="info"</TkSwitch>
        <TkSwitch v-model="isShow" theme="warning">theme="warning"</TkSwitch>
      </div>
      <div class="tk-block-gap-md">
        <TkSwitch v-model="isShow" checkbox theme="success">theme="success"</TkSwitch>
        <TkSwitch v-model="isShow" checkbox theme="error">theme="error"</TkSwitch>
        <TkSwitch v-model="isShow" checkbox theme="info">theme="info"</TkSwitch>
        <TkSwitch v-model="isShow" checkbox theme="warning">theme="warning"</TkSwitch>
      </div>
    </fieldset>

    <fieldset class="tk-fieldset">
      <legend>v-model</legend>
      <input v-model="isShow" type="checkbox">
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


