<template>
  <div>

    <fieldset class="tk-fieldset">
      <legend>TkEmpty</legend>
      <TkEmpty text="No Data!"></TkEmpty>
    </fieldset>

    <fieldset class="tk-fieldset">
      <legend>TkSeekbar</legend>
      <TkSeekbar v-model="progress"></TkSeekbar>
    </fieldset>

    <fieldset class="tk-fieldset">
      <legend>TkProgress</legend>
      <TkProgress v-model="progress"></TkProgress>
    </fieldset>

  </div>
</template>

<script>
export default {
  name: 'MiscDemo',
  data() {
    return {
      progress: 50
    }
  }
}
</script>

<style scoped>

</style>
