<template>
  <button
    class="tk-switch tk-button-no-style"
    :disabled="disabled"
    v-bind="$attrs"
    @click="handleChange(value)"
    v-on="$listeners"
  >
    <div
      v-if="checkbox"
      class="tk-switch-checkbox"
      :class="[sizeClass, themeClass, {'is-checked': checked}]"
    >
      <span><slot name="inner">✓</slot></span>
    </div>
    <div
      v-else
      class="tk-switch-box"
      :class="[sizeClass, themeClass, {'is-checked': checked}]"
    >
      <span>{{ checked ? textOn : textOff }}</span>
    </div>

    <input
      type="checkbox"
      :true-value="activeValue"
      :false-value="inactiveValue"
      :disabled="disabled"
      :value="value"
      @change="handleChange"
    >

    <span v-if="$slots.default" class="tk-switch-text" :class="sizeClass"><slot></slot></span>
  </button>
</template>

<script>
import themeMixin from '@src/mixins/theme.js'

export default {
  name: 'TkSwitch',
  mixins: [themeMixin],
  props: {
    value: {
      type: [Boolean, String, Number],
      default: false
    },
    activeValue: {
      type: [Boolean, String, Number],
      default: true
    },
    inactiveValue: {
      type: [Boolean, String, Number],
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    checkbox: {
      type: Boolean,
      default: false
    },
    textOn: {
      type: [String, Number],
      default: null
    },
    textOff: {
      type: [String, Number],
      default: null
    }
  },
  computed: {
    checked() {
      return this.value === this.activeValue
    }
  },
  methods: {
    handleChange() {
      console.log(this)
      this.$emit('input', !this.checked ? this.activeValue : this.inactiveValue)
    }
  }
}
</script>
