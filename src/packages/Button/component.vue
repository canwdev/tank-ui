<template>
  <button
    class="tk-button"
    :class="[sizeClass, themeClass]"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot>{{ label }}</slot>
  </button>
</template>

<script>
import themeMixin from '@src/mixins/theme.js'
export default {
  name: 'TkButton',
  mixins: [themeMixin],
  props: {
    label: {
      type: [String, Number, Boolean],
      default: null
    }
  }
}
</script>
