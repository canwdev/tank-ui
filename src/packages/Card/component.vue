<template>
  <div class="tk-card" :class="classNames" v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TkCard',
  props: {
    neon: {
      type: [Boolean, String],
      default: null
    },
    shadow: {
      type: [Boolean],
      default: null
    },
    solid: {
      type: Boolean,
      default: false
    },
    padding: {
      type: [Boolean, String],
      default: null
    }
  },
  computed: {
    classNames() {
      const cls = []

      if (this.solid) {
        cls.push('_solid')
      }

      if (this.neon) {
        if (typeof this.neon === 'boolean') {
          cls.push(`_neon`)
        } else {
          cls.push(`_neon-${this.neon}`)
        }
      }
      if (this.shadow) {
        cls.push(`_shadow`)
      }
      if (this.padding) {
        if (typeof this.padding === 'boolean') {
          cls.push(`_padding`)
        } else {
          cls.push(`_padding-${this.padding}`)
        }
      }
      return cls
    }
  }
}
</script>

