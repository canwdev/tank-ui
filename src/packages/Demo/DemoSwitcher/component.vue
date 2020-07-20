<template>
  <div class="tk-demo-switch">
    <span><slot></slot></span>

    <div :class="[{closed: !checked}, 'tk-demo-switch-box']"
      @click="handleChange(value)">
      <span :class="{closed: !checked}"></span>
    </div>

    <input
    type="checkbox"
    @change="handleChange"
    :true-value="activeValue"
    :false-value="inactiveValue"
    :disabled="disabled"
    :value="value">
  </div>
</template>

<script>
export default {
  name: 'DemoSwitcher',
  data () {
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
    checked () {
      return this.value === this.activeValue
    }
  },
  methods: {
    handleChange () {
      this.$emit('input', !this.checked ? this.activeValue : this.inactiveValue)
    }
  }
}
</script>
