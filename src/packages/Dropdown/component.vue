<template>
  <select
    v-model="mValue"
    class="tk-dropdown"
    v-bind="$attrs"
    :class="[sizeClass, themeClass]"
    @input="handleInput"
    @change="handleChange"
  >
    <option v-if="placeholder" value="" disabled selected>{{ placeholder }}</option>
    <option
      v-for="item in optionList"
      :key="item.value"
      :value="item.value"
    >{{ item.label }}
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
    },
    optionValue: {
      type: [String, Number, Object, Array],
      default: 'value'
    },
    optionLabel: {
      type: [String, Number, Object, Array],
      default: 'label'
    },
  },
  data() {
    return {
      optionList: []
    }
  },
  watch: {
    options: {
      handler(val) {
        if (!val) {
          this.optionList = []
          return
        }
        this.optionList = val.map(item => {
          if (typeof item === 'string') {
            return {
              label: item,
              value: item
            }
          } else {
            return {
              label: item[this.optionLabel || 'label'],
              value: item[this.optionValue || 'value']
            }
          }
        })
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    handleInput(event) {
      this.$emit('input', event.target.value)
    },
    handleChange(event) {
      this.$emit('change', event.target.value)
    }
  }
}
</script>
