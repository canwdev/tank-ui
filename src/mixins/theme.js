export default {
  props: {
    // xs | sm | md | lg | xl | no-style
    // default: md
    size: {
      type: String,
      default: null
    },
    theme: {
      type: String,
      default: null
    }
  },
  computed: {
    sizeClass() {
      if (!this.size) {
        return
      }
      return `_size-${this.size}`
    },
    themeClass() {
      if (!this.theme) {
        return
      }
      return `_theme-${this.theme}`
    }
  }
}
