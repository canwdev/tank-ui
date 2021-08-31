<template>
  <select
    v-model="mValue"
    class="tk-dropdown"
    v-bind="$attrs"
    v-on="$listeners"
    :class="[sizeClass, themeClass]"
  >
    <option v-if="placeholder" value="" disabled selected>{{ placeholder }}</option>
    <option
      v-for="item in options"
      :key="item"
      :value="item"
    >{{ item }}
    </option>
  </select>
</template>

<script>
import inputMixin from '@src/mixins/input'
import themeMixin from '@src/mixins/theme'

export default {
  name: 'TkDropdown',
  mixins: [themeMixin, inputMixin],
  props: {
    placeholder: {
      type: [String, Number],
      default: null
    },
    options: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>

</style>
