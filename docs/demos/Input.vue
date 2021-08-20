<template>
  <div class="link-demo">
    <h1>size</h1>
    <div class="block-gap-1 flex items-center">
      <TkInput size="xs" placeholder="input (xs)"/>
      <TkInput size="sm" placeholder="input (sm)"/>
      <TkInput placeholder="input"/>
      <TkInput size="lg" placeholder="input (lg)"/>
      <TkInput size="xl" placeholder="input (xl)"/>
    </div>
    <h1>theme</h1>
    <div class="block-gap-1 flex items-center">
      <TkInput theme="black" value="black"/>
      <TkInput theme="positive" value="positive"/>
      <TkInput theme="negative" value="negative"/>
      <TkInput theme="info" value="info"/>
      <TkInput theme="warning" value="warning"/>
    </div>

    <h1>v-model</h1>
    <div>
      <TkInput v-model="textStr"/>
      <input v-model="textStr" type="text">
      <p>{{ textStr }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InputDemo',
  data() {
    return {
      textStr: 'Hello world'
    }
  }
}
</script>

<style scoped>

</style>
