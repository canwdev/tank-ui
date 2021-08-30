<template>
  <a
    v-if="noRouter || isOutLink"
    class="tk-link"
    :class="[sizeClass, themeClass, {'is-underline': underline}]"
    :href="href"
    :target="target"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot></slot>
  </a>
  <router-link
    v-else
    class="tk-link"
    :class="[sizeClass, themeClass, {'is-underline': underline}]"
    :to="href"
    :target="target"
  >
    <slot></slot>
  </router-link>
</template>

<script>
import {isOutLink} from '../../utils'
import themeMixin from '@src/mixins/theme.js'

export default {
  name: 'TkLink',
  mixins: [themeMixin],
  props: {
    href: {
      type: String,
      default: null
    },
    target: {
      type: String,
      default: null
    },
    underline: {
      type: Boolean,
      default: false
    },
    noRouter: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isOutLink() {
      return isOutLink(this.href)
    }
  }
}
</script>
