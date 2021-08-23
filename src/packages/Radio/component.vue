<template>
  <button class="tk-radio tk-button-no-style" @click="mValue = val">
    <div
      class="tk-radio-checkbox"
      :class="[sizeClass, themeClass, {'is-checked': mValue === val}]"
    >
      <span><slot name="checkboxInner"></slot></span>
    </div>

    <input v-model="mValue" type="radio" :value="val">
    <span v-if="$slots.default" class="tk-radio-text" :class="sizeClass"><slot></slot></span>
  </button>
</template>

<script>
import themeMixin from '@src/mixins/theme-mixin.js'

export default {
  name: 'TkRadio',
  mixins: [themeMixin],
  props: {
    value: {
      type: [String, Number],
      default: null
    },
    val: {
      type: [String, Number],
      default: null
    }
  },
  computed: {
    mValue: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    }
  }
}
</script>

<style scoped>

</style>
