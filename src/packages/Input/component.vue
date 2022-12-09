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
import themeMixin from '@src/mixins/theme.js'
import inputMixin from '@src/mixins/input.js'
import emitter from '../../utils/emitter'

export default {
  name: 'TkInput',
  mixins: [themeMixin, inputMixin, emitter],
  props: {
    type: {
      type: String,
      default: null
    },
    clearable: {
      type: Boolean,
      default: false
    },
    validateEvent: {
      type: Boolean,
      default: true
    },
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
      if (this.validateEvent) {
        this.dispatch('ElFormItem', 'el.form.change', [event.target.value])
      }
    },
    handleFocus(event) {
      this.$emit('focus', event)
    },
    handleBlur(event) {
      this.$emit('blur', event)
      if (this.validateEvent) {
        this.dispatch('ElFormItem', 'el.form.blur', [event.target.value])
      }
    },
    handleChange(event) {
      this.$emit('change', event.target.value)
    }
  }
}
</script>
