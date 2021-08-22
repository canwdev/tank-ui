<template>
  <div class="demo">
    <h1>size</h1>
    <div class="tk-block-gap-1 flex items-center">
      <TkInput size="xs" placeholder="input (xs)"/>
      <TkInput size="sm" placeholder="input (sm)"/>
      <TkInput placeholder="input"/>
      <TkInput size="lg" placeholder="input (lg)"/>
      <TkInput size="xl" placeholder="input (xl)"/>
    </div>
    <h1>theme</h1>
    <div class="tk-block-gap-1 flex items-center">
      <TkInput theme="black" value="black"/>
      <TkInput theme="success" value="success"/>
      <TkInput theme="error" value="error"/>
      <TkInput theme="info" value="info"/>
      <TkInput theme="warning" value="warning"/>
    </div>

    <fieldset class="tk-fieldset">
      <legend><h1>v-model</h1></legend>
      <div>
        <TkInput v-model="textStr"/>

        <fieldset class="tk-fieldset">
          <legend>data</legend>

          <input v-model="textStr" type="text">
          <div>{{ textStr }}</div>
        </fieldset>
      </div>
    </fieldset>

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
