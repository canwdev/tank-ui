<template>
  <transition name="tk-toast" @after-leave="handleAfterLeave">
    <div
      v-show="visible"
      :class="[
        'tk-toast',
        type && !iconClass ? `tk-toast--${ type }` : '',
        center ? 'is-center' : '',
        showClose ? 'is-closable' : '',
        customClass
      ]"
      :style="positionStyle"
      role="alert"
      @mouseenter="clearTimer"
      @mouseleave="startTimer"
    >
      <span v-if="iconClass" :class="iconClass"></span>
      <span v-else :class="typeClass"></span>
      <slot>
        <div v-if="!dangerouslyUseHTMLString" class="tk-toast__content">{{ message }}</div>
        <div v-else class="tk-toast__content" v-html="message"></div>
      </slot>
      <TkButton v-if="showClose" size="no-style" class="tk-toast__closeBtn" @click="close">✗</TkButton>
    </div>
  </transition>
</template>

<script>
import {typeMap} from './enum'
import TkButton from '@src/packages/Button'

export default {
  name: 'TkToast',
  components: {
    TkButton
  },
  data() {
    return {
      visible: false,
      message: '',
      duration: 3000,
      type: typeMap.info,
      iconClass: '',
      customClass: '',
      onClose: null,
      showClose: false,
      closed: false,
      verticalOffset: 20,
      timer: null,
      dangerouslyUseHTMLString: false,
      center: false
    }
  },
  computed: {
    typeClass() {
      return this.type && !this.iconClass
          ? `tk-toast__icon el-icon-${typeMap[this.type]}`
          : ''
    },
    positionStyle() {
      return {
        'top': `${this.verticalOffset}px`
      }
    }
  },
  watch: {
    closed(newVal) {
      if (newVal) {
        this.visible = false
      }
    }
  },
  mounted() {
    this.startTimer()
    document.addEventListener('keydown', this.keydown)
  },
  beforeDestroy() {
    document.removeEventListener('keydown', this.keydown)
  },
  methods: {
    handleAfterLeave() {
      this.$destroy(true)
      this.$el.parentNode.removeChild(this.$el)
    },

    close() {
      this.closed = true
      if (typeof this.onClose === 'function') {
        this.onClose(this)
      }
    },
    clearTimer() {
      clearTimeout(this.timer)
      this.timer = null
    },
    startTimer() {
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          if (!this.closed) {
            this.close()
          }
        }, this.duration)
      }
    },
    keydown(e) {
      if (e.keyCode === 27) { // esc关闭消息
        if (!this.closed) {
          this.close()
        }
      }
    }
  }
}
</script>
