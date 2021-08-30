<template>
  <div>
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

  </div>
</template>

<script>
export default {
  name: 'LoadingDemo'
}
</script>

<style scoped>

</style>
