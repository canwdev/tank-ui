<template>
  <button
    class="tk-button"
    :class="[sizeClass, themeClass, round ? '_round':null, flat ? '_flat':null]"
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
    },
    round: {
      type: Boolean,
      default: false
    },
    flat: {
      type: Boolean,
      default: false
    }
  }
}
</script>
