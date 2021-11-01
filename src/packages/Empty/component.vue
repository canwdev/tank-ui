<template>
  <div class="tk-empty">
    <img v-if="img" class="tk-empty-img" :src="img">
    <TkIconEmpty v-else class="tk-empty-svg"></TkIconEmpty>
    <div v-if="text" class="tk-empty-text">{{ text }}</div>
  </div>
</template>

<script>
import TkIconEmpty from '../Icons/IconEmpty'

export default {
  name: 'TkEmpty',
  components: {
    TkIconEmpty
  },
  props: {
    img: {
      type: String,
      default: null
    },
    text: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
.tk-empty {
  width: 100%;
  text-align: center;
  padding: 50px 0;
  color: $primary;

  &-img {
    width: 200px;
    height: auto;
    border-radius: $border-radius;
    //opacity: .2;
  }

  &-svg {
    width: 64px;
    height: auto;
    opacity: .5;
  }

  .tk-empty-text {
    padding-top: 10px;
    font-size: 14px;
    opacity: .5;
  }
}
</style>
