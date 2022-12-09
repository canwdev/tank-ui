<template>
  <div class="tk-form-item">
    <slot></slot>
    <slot
      v-if="validateState === 'error' && showMessage && form.showMessage"
      name="error"
      :error="validateMessage"
    >
      <div
        class="tk-form-item__error"
      >
        {{ validateMessage }}
      </div>
    </slot>
  </div>
</template>

<script>
import AsyncValidator from 'async-validator'
import emitter from '../../../utils/emitter'
import {getPropByPath, merge, noop} from '../../../utils'
export default {
  name: 'TkFormItem',
  componentName: 'ElFormItem',
  mixins: [emitter],
  provide() {
    return {
      elFormItem: this
    }
  },
  inject: ['elForm'],
  props: {
    prop: String,
    required: {
      type: Boolean,
      default: undefined
    },
    rules: [Object, Array],
    error: String,
    showMessage: {
      type: Boolean,
      default: true
    },
  },
  data() {
    return {
      validateState: '',
      validateMessage: '',
      validateDisabled: false,
      validator: {},
    }
  },
  watch: {
    error: {
      immediate: true,
      handler(value) {
        this.validateMessage = value
        this.validateState = value ? 'error' : ''
      }
    },
    validateStatus(value) {
      this.validateState = value
    },
    rules(value) {
      if ((!value || value.length === 0) && this.required === undefined) {
        this.clearValidate()
      }
    }
  },
  computed: {
    form() {
      let parent = this.$parent
      let parentName = parent.$options.componentName
      while (parentName !== 'ElForm') {
        parent = parent.$parent
        parentName = parent.$options.componentName
      }
      return parent
    },
    fieldValue() {
      const model = this.form.model
      if (!model || !this.prop) { return }

      let path = this.prop
      if (path.indexOf(':') !== -1) {
        path = path.replace(/:/, '.')
      }

      return getPropByPath(model, path, true).v
    },

  },
  mounted() {
    if (this.prop) {
      this.dispatch('ElForm', 'el.form.addField', [this])

      let initialValue = this.fieldValue
      if (Array.isArray(initialValue)) {
        initialValue = [].concat(initialValue)
      }
      Object.defineProperty(this, 'initialValue', {
        value: initialValue
      })

      this.addValidateEvents()
    }
  },
  beforeDestroy() {
    this.dispatch('ElForm', 'el.form.removeField', [this])
  },
  methods: {
    validate(trigger, callback = noop) {
      this.validateDisabled = false
      const rules = this.getFilteredRule(trigger)
      if ((!rules || rules.length === 0) && this.required === undefined) {
        callback()
        return true
      }

      this.validateState = 'validating'

      const descriptor = {}
      if (rules && rules.length > 0) {
        rules.forEach(rule => {
          delete rule.trigger
        })
      }
      descriptor[this.prop] = rules

      const validator = new AsyncValidator(descriptor)
      const model = {}

      model[this.prop] = this.fieldValue

      validator.validate(model, { firstFields: true }, (errors, invalidFields) => {
        this.validateState = !errors ? 'success' : 'error'
        this.validateMessage = errors ? errors[0].message : ''

        callback(this.validateMessage, invalidFields)
        this.elForm && this.elForm.$emit('validate', this.prop, !errors, this.validateMessage || null)
      })
    },
    clearValidate() {
      this.validateState = ''
      this.validateMessage = ''
      this.validateDisabled = false
    },
    resetField() {
      this.validateState = ''
      this.validateMessage = ''

      const model = this.form.model
      const value = this.fieldValue
      let path = this.prop
      if (path.indexOf(':') !== -1) {
        path = path.replace(/:/, '.')
      }

      const prop = getPropByPath(model, path, true)

      this.validateDisabled = true
      if (Array.isArray(value)) {
        prop.o[prop.k] = [].concat(this.initialValue)
      } else {
        prop.o[prop.k] = this.initialValue
      }

      // reset validateDisabled after onFieldChange triggered
      this.$nextTick(() => {
        this.validateDisabled = false
      })

      this.broadcast('ElTimeSelect', 'fieldReset', this.initialValue)
    },
    getRules() {
      let formRules = this.form.rules
      const selfRules = this.rules
      const requiredRule = this.required !== undefined ? { required: !!this.required } : []

      const prop = getPropByPath(formRules, this.prop || '')
      formRules = formRules ? (prop.o[this.prop || ''] || prop.v) : []

      return [].concat(selfRules || formRules || []).concat(requiredRule)
    },
    getFilteredRule(trigger) {
      const rules = this.getRules()

      return rules.filter(rule => {
        if (!rule.trigger || trigger === '') return true
        if (Array.isArray(rule.trigger)) {
          return rule.trigger.indexOf(trigger) > -1
        } else {
          return rule.trigger === trigger
        }
      }).map(rule => merge({}, rule))
    },
    onFieldBlur() {
      this.validate('blur')
    },
    onFieldChange() {
      if (this.validateDisabled) {
        this.validateDisabled = false
        return
      }

      this.validate('change')
    },
    addValidateEvents() {
      const rules = this.getRules()

      if (rules.length || this.required !== undefined) {
        this.$on('el.form.blur', this.onFieldBlur)
        this.$on('el.form.change', this.onFieldChange)
      }
    },
    removeValidateEvents() {
      this.$off()
    }
  }
}
</script>

<style lang="scss" scoped>
.tk-form-item {
  padding-bottom: 20px;
  position: relative;
  &__error {
    position: absolute;
    bottom: 3px;
    color: $color-red;
    font-size: 12px;
  }
}
</style>
