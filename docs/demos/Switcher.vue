<template>
  <div>
    <TkSwitcher v-model="isShow">开关:</TkSwitcher>
    <p v-if="isShow">Now you see me, soon you won't.</p>
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
