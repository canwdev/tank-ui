<template>
  <textarea
    v-if="type === 'textarea'"
    class="tk-input"
    :class="[sizeClass, themeClass]"
    v-bind="$attrs"
    :value="mValue"
    @compositionstart="handleCompositionStart"
    @compositionend="handleCompositionEnd"
    @input="handleInput"
    @focus="handleFocus"
    @blur="handleBlur"
    @change="handleChange"
  ></textarea>
  <input
    v-else
    :value="mValue"
    class="tk-input"
    :class="[sizeClass, themeClass]"
    v-bind="$attrs"
    :type="type"
    @compositionstart="handleCompositionStart"
    @compositionend="handleCompositionEnd"
    @input="handleInput"
    @focus="handleFocus"
    @blur="handleBlur"
    @change="handleChange"
  >
</template>

<script>
import themeMixin from '@src/mixins/theme-mixin.js'
import inputMixin from '@src/mixins/input-mixin.js'

export default {
  name: 'TkInput',
  mixins: [themeMixin, inputMixin],
  props: {
    type: {
      type: String,
      default: null
    },
    clearable: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isComposing: false
    }
  },
  methods: {
    handleCompositionStart() {
      this.isComposing = true
    },
    handleCompositionEnd(event) {
      if (this.isComposing) {
        this.isComposing = false
        this.handleInput(event)
      }
    },
    handleInput(event) {
      this.$emit('input', event.target.value)
    },
    handleFocus(event) {
      this.$emit('focus', event)
    },

    handleBlur(event) {
      this.$emit('blur', event)
    },
    handleChange(event) {
      this.$emit('change', event.target.value)
    }
  }
}
</script>
