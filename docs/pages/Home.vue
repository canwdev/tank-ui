<template>
  <div class="page-home">

    <img src="../../src/assets/images/logo.png">

    <TkHelloWorld msg="A Test Vue UI Library."/>

    <div style="height: 1000px"></div>

    <TkDemoSwitcher v-model="isSwitch">开关:</TkDemoSwitcher>

    <p v-if="isSwitch">Now you see me, soon you won't.</p>

  </div>
</template>

<script>

  export default {
    data() {
      return {
        isSwitch: false
      }
    }
  }
</script>

<style>
  .page-home {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
