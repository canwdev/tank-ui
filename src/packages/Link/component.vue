<template>
  <a
    v-if="isOutLink"
    class="tk-link"
    :class="{'is-underline': underline}"
    :href="href"
    :target="target"
  >
    <slot></slot>
  </a>
  <router-link
    v-else
    class="tk-link"
    :class="{'is-underline': underline}"
    :to="href"
    :target="target"
  >
    <slot></slot>
  </router-link>
</template>

<script>
import {isOutLink} from '../../utils'

export default {
  name: 'TkLink',
  props: {
    href: {
      type: String,
      default: ''
    },
    target: {
      type: String,
      default: ''
    },
    underline: {
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
