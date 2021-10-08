<template>
  <TkModalDialog
    v-model="mVisible"
    :persistent="preventClose"
    :show-close="showClose"
    :prevent-close="preventClose"
    :close-fn="closeFn"
  >
    <TkCard class="prompt-dialog-card" :style="cardStyle">
      <form @submit.prevent="confirm">
        <TkLoading absolute :visible="isConfirmLoading"></TkLoading>

        <div v-if="title" class="prompt-dialog-title">
          <template v-if="!useHTML">
            {{ title }}
          </template>
          <template v-else v-html="title"></template>
        </div>
        <div class="prompt-dialog-content">
          <slot>
            <div v-if="content" class="content-text" >
              <template v-if="!useHTML">
                {{ content }}
              </template>
              <template v-else v-html="content"></template>
            </div>
          </slot>
          <div v-if="input" class="content-input">
            <input
              v-model="inputValue"
              v-bind="input"
            >
          </div>
        </div>

        <div class="buttons-row" align="right">
          <TkButton
            v-if="btnCancel"
            type="button"
            @click="cancel"
          >{{ btnCancel }}
          </TkButton>
          <TkButton
            v-if="btnConfirm"
            type="submit"
          >{{ btnConfirm }}
          </TkButton>
        </div>
      </form>
    </TkCard>
  </TkModalDialog>
</template>

<script>
import TkModalDialog from '@src/packages/ModalDialog'
import TkButton from '@src/packages/Button'
import TkLoading from '@src/packages/Loading'
import TkCard from '@src/packages/Card'

export default {
  name: 'TkPromptDialog',
  components: {
    TkModalDialog,
    TkButton,
    TkLoading,
    TkCard
  },
  props: {
    showClose: {
      type: Boolean,
      default: true
    },
    visible: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: null
    },
    content: {
      type: String,
      default: null
    },
    btnConfirm: {
      type: String,
      default: 'OK'
    },
    btnCancel: {
      type: String,
      default: 'Cancel'
    },
    isConfirmLoading: {
      type: Boolean,
      default: false
    },
    isPreventConfirmClose: {
      type: Boolean,
      default: false
    },
    //点击遮罩层关闭
    persistent: {
      type: Boolean,
      default: false
    },
    isCloseEqualCancel: {
      type: Boolean,
      default: true
    },
    useHTML: {
      type: Boolean,
      default: false
    },
    cardStyle: {
      type: Object,
      default() {
        return {
          minWidth: '240px'
        }
      }
    },
    input: {
      type: Object,
      default: null
    }
  },
  watch: {
    input: {
      handler(val) {
        if (!val) {
          return
        }
        this.inputValue = val.value
      },
      immediate: true
    }
  },
  data() {
    return {
      isShow: false,
      inputValue: null
    }
  },
  computed: {
    mVisible: {
      get() {
        return this.visible || this.isShow
      },
      set(nv) {
        this.isShow = nv
        this.$emit('update:visible', this.isShow)
      }
    },
    preventClose() {
      return this.persistent || this.isConfirmLoading
    },
  },
  methods: {
    confirm() {
      this.$emit('onConfirm')
      if (!this.isPreventConfirmClose) {
        this.mVisible = false
      }
    },
    cancel() {
      this.$emit('onCancel')
      this.mVisible = false
    },
    closeFn() {
      if (this.isCloseEqualCancel) {
        this.cancel()
        return
      }
      this.mVisible = false
    }
  }
}
</script>

<style lang="scss" scoped>
.prompt-dialog-card {
  .prompt-dialog-title {
    font-weight: bold;
    font-size: 18px;
    margin: 10px 0 10px;
    padding: 0 10px;
  }

  .prompt-dialog-content {
    padding: 10px 10px 20px;

  }
}
</style>

