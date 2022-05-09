<template>
  <div>
    <h2>TkModalDialog</h2>
    <fieldset class="tk-fieldset">
      <legend>TkModalDialog</legend>

      <div class="tk-form">
        <div class="tk-form-row">
          <div>
            v-model
          </div>
          <div>
            <TkButton @click="isShowDialog = true">Show Dialog</TkButton>
          </div>
        </div>

        <div class="tk-form-row">
          <div>
            persistent
          </div>
          <div>
            <TkSwitch v-model="persistent"></TkSwitch>
          </div>
        </div>

        <div class="tk-form-row">
          <div>
            no-radius
          </div>
          <div>
            <TkSwitch v-model="noRadius"></TkSwitch>
          </div>
        </div>

        <div class="tk-form-row">
          <div>
            show-close
          </div>
          <div>
            <TkSwitch v-model="showClose"></TkSwitch>
          </div>
        </div>

        <div v-if="showClose" class="tk-form-row">
          <div>
            prevent-close
          </div>
          <div>
            <TkSwitch v-model="preventClose"></TkSwitch>
          </div>
        </div>
      </div>
    </fieldset>

    <TkModalDialog
      v-model="isShowDialog"
      :persistent="persistent"
      :show-close="showClose"
      :prevent-close="preventClose"
      :no-radius="noRadius"
    >
      <TkCard padding="lg">
        <h1>This is a TkModalDialog</h1>

        <div>
          <TkButton @click="isShowDialog = false">Close</TkButton>
        </div>
      </TkCard>
    </TkModalDialog>

    <fieldset class="tk-fieldset">
      <legend>this.$prompt.create()</legend>
      <div class="tk-form">
        <div class="tk-form-row">
          <div>
            $prompt
          </div>
          <div>
            <TkButton @click="showPrompt">Show</TkButton>
          </div>
        </div>

        <div class="tk-form-row">
          <div>
            input
          </div>
          <div>
            <TkButton @click="showPromptInput">Show</TkButton>
          </div>
        </div>

        <div class="tk-form-row">
          <div>
            VNode
          </div>
          <div>
            <TkButton @click="showPromptVNode">Show</TkButton>
          </div>
        </div>

        <div class="tk-form-row">
          <div>
            multipleActions
          </div>
          <div>
            <TkButton @click="showPromptMultiple">Show</TkButton>
          </div>
        </div>
      </div>
    </fieldset>

  </div>
</template>

<script>
export default {
  name: 'DialogDemo',
  data() {
    return {
      isShowDialog: false,
      persistent: false,
      showClose: true,
      preventClose: false,
      noRadius: false,
    }
  },
  methods: {
    showPrompt() {
      // console.log(this.$prompt)
      this.$prompt.create({
        parentEl: this.$el,
        propsData: {
          title: 'Title',
          content: 'Content',
        }
      }).onConfirm((context) => {
        console.log('context', context)
        this.$toast.success('confirmed')
      })
        .onCancel((context) => {
          this.$toast.warning('canceled')
        })
    },
    showPromptInput() {
      // console.log(this.$prompt)
      this.$prompt.create({
        parentEl: this.$el,
        propsData: {
          title: '请输入内容',
          input: {
            value: 'abcd',
            placeholder: 'Placeholder...',
            autofocus: true,
            // type: 'number',
            required: true,
          }
        }
      })
        .onConfirm((context) => {
          console.log('context', context)

          this.$toast.success(context.inputValue)
        })
    },
    showPromptVNode() {
      const h = this.$createElement;
      // console.log(this.$prompt)
      this.$prompt.create({
        parentEl: this.$el,
        propsData: {
          title: '',
          content: h('div', null, [
            h('span', null, '内容可以是 '),
            h('i', {style: 'color: red'}, 'VNode')
          ]),
          btnCancel: null,
          showClose: false
        }
      })
    },

    showPromptMultiple() {
      // console.log(this.$prompt)
      this.$prompt.create({
        parentEl: this.$el,
        propsData: {
          title: 'Title',
          content: '可以有多个按钮',
          btnConfirm: null,
          btnCancel: null,
          multipleActions: [
            {label: 'Act 1', value: 1},
            {label: 'Act 2', value: 2},
            {label: 'Act 3', value: 3},
          ]
        }
      }).onConfirm((context) => {
        console.log('context', context)
        this.$toast.success('confirmed')
      })
        .onCancel((context) => {
          this.$toast.warning('canceled')
        })
        .onAction((context, val) => {
          this.$toast.info('action ' + val)
        })
    },
  }
}
</script>
