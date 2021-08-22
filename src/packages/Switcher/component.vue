<template>
  <div
    class="tk-switch"
    @click="handleChange(value)"
  >
    <div
      :class="[{closed: !checked}, 'tk-switch-box']"
    >
      <span :class="{closed: !checked}">{{ checked ? textOn : textOff }}</span>
    </div>

    <input
      type="checkbox"
      :true-value="activeValue"
      :false-value="inactiveValue"
      :disabled="disabled"
      :value="value"
      @change="handleChange"
    >

    <span class="tk-switch-text"><slot></slot></span>
  </div>
</template>

<script>
export default {
  name: 'TkSwitch',
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
      this.$emit('input', !this.checked ? this.activeValue : this.inactiveValue)
    }
  }
}
</script>
