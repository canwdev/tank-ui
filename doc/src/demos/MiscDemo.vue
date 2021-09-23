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

    <fieldset class="tk-fieldset">
      <legend>TkInputTags</legend>

      <div class="tk-form">
        <div class="tk-form-row">
          <div>
            v-model
          </div>
          <div>
            {{ tags }}
          </div>
        </div>

        <hr>

        <TkInputTags
          v-model="tags"
          placeholder="Input tags..."
          :limit-count="5"
          :show-limit="true"
        />

      </div>
    </fieldset>

  </div>
</template>

<script>
export default {
  name: 'MiscDemo',
  data() {
    return {
      progress: 50,
      tags: ['Test1']
    }
  }
}
</script>

<style scoped>

</style>
