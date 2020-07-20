<template>
  <h1 class="tk-hello-world-h1">{{msg}}</h1>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: {
      type: [Boolean, String, Number],
      default: 'Hello World! TankUI'
    }
  }
}
</script>
