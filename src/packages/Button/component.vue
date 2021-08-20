<template>
  <button
    class="tk-button"
    :class="[sizeClass, themeClass]"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot></slot>
  </button>
</template>

<script>
import themeMixin from '@src/mixins/theme-mixin.js'
export default {
  name: 'TkButton',
  mixins: [themeMixin]
}
</script>
