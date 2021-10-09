import Component from './main.vue'
import {isVNode} from '@src/utils'

const defaults = {
  currentInstance: null
}

export default class PromptDialog {
  constructor() {
    Object.assign(this, defaults)
    this.InstanceConstructor = this.Vue.extend(Component)
    this.instance = null
    this.parentEl = document.body
  }

  // 点击确定返回结果回调
  onConfirm(fn) {
    this.confirmFn = fn
    return this
  }

  onCancel(fn) {
    this.cancelFn = fn
    return this
  }

  open(config = {}) {
    const {
      propsData = {},
      parentEl
    } = config || {}

    if (parentEl) {
      this.parentEl = parentEl
    }

    let slot
    if (isVNode(propsData.content)) {
      slot = [propsData.content]
      propsData.content = null
    }

    const self = this
    const instance = new this.InstanceConstructor({
      propsData: propsData,
      watch: {
        isShow(nv) {
          if (!nv) {
            setTimeout(() => { // 关闭动画
              this.$destroy(true) // 销毁当前实例
            }, 700)
          }
        }
      },
      destroyed() {
        this.$el.parentNode.removeChild(this.$el) // 移除dom
      },
      methods: {
        async confirm() {
          try {
            this.isLoading = true

            self.confirmFn && await self.confirmFn(this)

            if (!this.isPreventConfirmClose) {
              self.$close()
            }
          } catch (e) {
            console.error(e.message)
          } finally {
            this.isLoading = false
          }
        },
        async cancel() {
          try {
            self.cancelFn && await self.cancelFn(this)
            self.$close()
          } catch (e) {
            console.error(e.message)
          }
        }
      }
    })

    if (slot) {
      instance.$slots.default = slot
    } else {
      delete instance.$slots.default
    }

    this.instance = instance
    this.currentInstance = instance
    instance.$mount()
    this.parentEl.appendChild(instance.$el)
    instance.isShow = true
    return this
  }

  $close() {
    if (!this.currentInstance) return
    this.currentInstance.isShow = false
    this.currentInstance = null
    this.instance = null
  }
}

