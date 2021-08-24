<template>
  <div class="demo">
    <h2>TkRadio</h2>

    <fieldset class="tk-fieldset">
      <legend>Demo</legend>
      <div class="tk-block-gap-md">
        <TkRadio v-model="selected" val="A">A</TkRadio>
        <TkRadio v-model="selected" val="B">B</TkRadio>
        <TkRadio v-model="selected" val="C">C</TkRadio>
        <TkRadio v-model="selected" val="D">D</TkRadio>
      </div>
    </fieldset>

    <fieldset class="tk-fieldset">
      <legend>Size</legend>
      <div class="tk-block-gap-md">
        <TkRadio size="xs" v-model="selected" val="A">A (size="xs")</TkRadio>
        <TkRadio size="sm" v-model="selected" val="A">A (size="sm")</TkRadio>
        <TkRadio size="lg" v-model="selected" val="A">A (size="lg")</TkRadio>
        <TkRadio size="xl" v-model="selected" val="A">A (size="xl")</TkRadio>
      </div>
    </fieldset>

    <fieldset class="tk-fieldset">
      <legend>Theme</legend>
      <div class="tk-block-gap-md">
        <TkRadio theme="success" v-model="selected" val="A">A (theme="success")</TkRadio>
        <TkRadio theme="error" v-model="selected" val="A">A (theme="error")</TkRadio>
        <TkRadio theme="info" v-model="selected" val="A">A (theme="info")</TkRadio>
        <TkRadio theme="warning" v-model="selected" val="A">A (theme="warning")</TkRadio>
      </div>
    </fieldset>

    <fieldset class="tk-fieldset">
      <legend>v-model</legend>
      {{ selected }}
    </fieldset>

  </div>
</template>

<script>
export default {
  name: 'RadioDemo',
  data() {
    return {
      selected: 'A'
    }
  }
}
</script>


