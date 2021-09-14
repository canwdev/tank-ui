<template>
  <TkModalDialog v-model="mVisible" :persistent="preventClose" show-close :prevent-close="preventClose">
    <TkCard solid>
      <TkLoading absolute :visible="isConfirmLoading"></TkLoading>

      <h4>{{ title }}</h4>
      <p>{{ content }}</p>

      <div class="buttons-row" align="right">
        <TkButton
          @click="cancel"
        >{{ btnCancelText }}
        </TkButton>
        <TkButton
          @click="confirm"
        >{{ btnConfirmText }}
        </TkButton>
      </div>
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
    dense: {
      type: Boolean,
      default: false
    },
    visible: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    btnConfirmText: {
      type: String,
      default: 'OK'
    },
    btnCancelText: {
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
    }
  },
  data() {
    return {
      isShow: false
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
    }
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
    }
  }
}
</script>

<style scoped>

</style>
