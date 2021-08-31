<template>
  <div class="demo">
    <h2>TkInput</h2>

    <fieldset class="tk-fieldset">
      <legend>Size</legend>

      <div class="tk-block-gap-xs flex items-center">
        <TkInput size="xs" placeholder="input (xs)"/>
        <TkInput size="sm" placeholder="input (sm)"/>
        <TkInput placeholder="input"/>
        <TkInput size="lg" placeholder="input (lg)"/>
        <TkInput size="xl" placeholder="input (xl)"/>
      </div>
    </fieldset>

    <fieldset class="tk-fieldset">
      <legend>Theme</legend>

      <div class="tk-block-gap-xs flex items-center">
        <TkInput theme="black" value="black"/>
        <TkInput theme="success" value="success"/>
        <TkInput theme="accent" value="accent"/>
        <TkInput theme="secondary" value="secondary"/>
        <TkInput theme="error" value="error"/>
        <TkInput theme="info" value="info"/>
        <TkInput theme="warning" value="warning"/>
      </div>
    </fieldset>

    <fieldset class="tk-fieldset">
      <legend>Disable</legend>

      <div class="tk-block-gap-xs flex items-center">
        <TkInput disabled placeholder="disabled"/>
        <TkInput readonly placeholder="readonly" value="readonly text"/>
      </div>
    </fieldset>

    <fieldset class="tk-fieldset">
      <legend>type="textarea"</legend>
      <div>
        <TkInput
          cols="30"
          rows="5"
          type="textarea" v-model="textStr"/>
      </div>
    </fieldset>

    <fieldset class="tk-fieldset">
      <legend>v-model</legend>
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


