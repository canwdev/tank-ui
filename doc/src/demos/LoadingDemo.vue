<template>
  <div>
    <h2>TkLoading</h2>

    <TkLoading visible></TkLoading>

    <fieldset class="tk-fieldset">
      <legend>Size</legend>
      <div class="tk-block-gap-y-lg">
        <TkLoading visible size="xs" text="size=xs"/>
        <TkLoading visible size="sm" text="size=sm"/>
        <TkLoading visible size="lg" text="size=lg"/>
        <TkLoading visible size="xl" text="size=xl"/>
      </div>
    </fieldset>

    <fieldset class="tk-fieldset">
      <legend>Theme</legend>
      <div class="tk-block-gap-sm">
        <TkLoading visible theme="white" text="theme=white"/>
        <TkLoading visible theme="black" text="theme=black"/>
        <TkLoading visible theme="accent" text="theme=accent"/>
        <TkLoading visible theme="secondary" text="theme=secondary"/>
        <TkLoading visible theme="success" text="theme=success"/>
        <TkLoading visible theme="error" text="theme=error"/>
        <TkLoading visible theme="info" text="theme=info"/>
        <TkLoading visible theme="warning" text="theme=warning"/>
      </div>
    </fieldset>

  </div>
</template>

<script>
export default {
  name: 'LoadingDemo'
}
</script>

<style scoped>

</style>
