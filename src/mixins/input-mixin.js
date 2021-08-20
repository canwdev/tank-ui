export default {
  props: {
    value: {
      type: [String, Number, Boolean],
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
