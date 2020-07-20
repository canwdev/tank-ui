<template>
  <h1 :style="{color: color}">{{msg}}</h1>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    color: {
      type: String,
      default: 'royalblue'
    },
    msg: {
      type: [Boolean, String, Number],
      default: 'Hello World!'
    }
  }
}
</script>
