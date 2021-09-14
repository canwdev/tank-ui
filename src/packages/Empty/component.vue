<template>
  <div class="tk-empty">
    <img v-if="img" class="tk-empty-img" :src="img">
    <div v-if="text" class="tk-empty-text">{{ text }}</div>
  </div>
</template>

<script>
export default {
  name: 'TkEmpty',
  props: {
    img: {
      type: String,
      default: require('@src/assets/images/no-data.png')
    },
    text: {
      type: String,
      default: 'Empty'
    }
  }
}
</script>

<style lang="scss" scoped>
.tk-empty {
  width: 100%;
  text-align: center;
  padding: 50px 0;

  &-img {
    width: 200px;
    height: auto;
    border-radius: $border-radius;
    //opacity: .2;
  }

  .tk-empty-text {
    color: $primary;
    padding-top: 10px;
    font-size: 16px;
  }
}
</style>
