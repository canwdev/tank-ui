<template>
  <transition name="fade">
    <div v-show="mValue" class="tk-modal-dialog-wrap" :class="{fixed}">
      <div class="dialog-shadow" @click.stop="clickOutside"></div>
      <transition :name="transitionName">
        <div v-show="mValue" class="dialog-main" :class="{'no-radius': noRadius}">
          <button v-if="showClose" class="tk-button-no-style tk-modal-dialog-btn-close" @click="closeDialog">
            <TkIconClose/>
          </button>
          <div class="dialog-inner" :class="{'limited-size': !unlimitedSize}">
            <slot></slot>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
import inputMixin from '@src/mixins/input'
import TkIconClose from '../Icons/IconClose'

export default {
  name: 'TkModalDialog',
  mixins: [inputMixin],
  components: {
    TkIconClose
  },
  props: {
    transitionName: {
      type: String,
      default: 'fade-up'
    },
    showClose: {
      type: Boolean,
      default: false
    },
    unlimitedSize: {
      type: Boolean,
      default: false
    },
    noRadius: {
      type: Boolean,
      default: false
    },
    persistent: {
      type: Boolean,
      default: false
    },
    preventClose: {
      type: Boolean,
      default: false
    },
    closeFn: {
      type: Function,
      default: null
    },
    fixed: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    clickOutside() {
      if (!this.persistent) {
        this.closeDialog()
      }
    },
    closeDialog() {
      if (!this.preventClose) {
        if (this.closeFn) {
          this.closeFn()
          return
        }
        this.mValue = false
      }
    }
  }
}
</script>

