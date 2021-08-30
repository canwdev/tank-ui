<template>
  <transition name="fade">
    <div v-show="visible" class="tk-loading" :class="{'_absolute': absolute}">
      <span
        class="loading-spinner"
        :class="[sizeClass, themeClass]"
      ></span>
      <span v-if="text" class="text">{{ text }}</span>
    </div>
  </transition>
</template>

<script>
import themeMixin from '@src/mixins/theme'

export default {
  name: 'TkLoading',
  mixins: [themeMixin],
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    absolute: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: null
    }
  }
}
</script>

