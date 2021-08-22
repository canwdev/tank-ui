<template>
  <div class="demo">
    <h1>size</h1>
    <div class="tk-block-gap-1 flex items-center">
      <TkButton size="no-style">Button (no-style)</TkButton>
      <TkButton size="xs">Button (xs)</TkButton>
      <TkButton size="sm">Button (sm)</TkButton>
      <TkButton >Button</TkButton>
      <TkButton size="lg">Button (lg)</TkButton>
      <TkButton size="xl">Button (xl)</TkButton>
    </div>
    <h1>theme</h1>
    <div class="tk-block-gap-1 flex items-center">
      <TkButton theme="white">Button (white)</TkButton>
      <TkButton theme="black">Button (black)</TkButton>
      <TkButton theme="success">Button (success)</TkButton>
      <TkButton theme="error">Button (error)</TkButton>
      <TkButton theme="info">Button (info)</TkButton>
      <TkButton theme="warning">Button (warning)</TkButton>
    </div>
  </div>
</template>

<script>
export default {
name: 'ButtonDemo'
}
</script>

<style scoped>

</style>
