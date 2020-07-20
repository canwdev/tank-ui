<template>
  <div>
    <HelloWorld msg="A steel Vue UI library." />

    <DemoSwitcher v-model="isSwitch">开关:</DemoSwitcher>

    <p v-if="isSwitch">Now you see me, soon you won't.</p>
  </div>
</template>

<script>

export default {
  data () {
    return {
      isSwitch: false
    }
  }
}
</script>

<style>
</style>
