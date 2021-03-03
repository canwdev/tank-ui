<template>
  <div class="tk-switch">
    <span><slot></slot></span>

    <div
      :class="[{closed: !checked}, 'tk-switch-box']"
      @click="handleChange(value)"
    >
      <span :class="{closed: !checked}"></span>
    </div>

    <input
      type="checkbox"
      :true-value="activeValue"
      :false-value="inactiveValue"
      :disabled="disabled"
      :value="value"
      @change="handleChange"
    >
  </div>
</template>

<script>
export default {
  name: 'TkSwitcher',
  data() {
    return {}
  },
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
