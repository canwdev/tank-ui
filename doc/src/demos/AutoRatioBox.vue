<template>
  <div>
    <h2>AutoRatioBox</h2>

    <fieldset class="tk-fieldset">
      <legend>Size</legend>
      <div>
        <AutoRatioBox class="custom-box-style">1/1</AutoRatioBox>
        <AutoRatioBox class="custom-box-style" :ratio="0.75">3/4</AutoRatioBox>
        <AutoRatioBox class="custom-box-style" width="1920" height="1080">1920/1080</AutoRatioBox>
        <AutoRatioBox class="custom-box-style" ratio="2">2/1</AutoRatioBox>
        <AutoRatioBox class="custom-box-style" is-y ratio=".5" style="height: 200px">1/2 (is-y)</AutoRatioBox>
      </div>
    </fieldset>
  </div>
</template>

<script>
export default {
  name: 'AutoRatioBoxDemo'
}
</script>

<style lang="scss" scoped>
.custom-box-style {
  width: 100px;
  background: $primary;
  color: white;
  margin: 10px;
  ::v-deep .box-content {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
