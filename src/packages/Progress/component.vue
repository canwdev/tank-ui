<template>
  <div class="tk-progress-bar">
    <div v-if="value > 0" :class="themeClass" class="progress" :style="{width: value + '%'}"></div>
  </div>
</template>

<script>
import themeMixin from '@src/mixins/theme.js'

export default {
  name: 'TkProgress',
  mixins: [themeMixin],
  props: {
    value: {
      type: [Number, String],
      default: 0
    }
  }
}
</script>

