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
      <TkCard>
        This is a TkModalDialog

        <div>
          <TkButton @click="isShowDialog = false">Close</TkButton>
        </div>
      </TkCard>
    </TkModalDialog>

    <fieldset class="tk-fieldset">
      <legend>this.$prompt</legend>
      <div class="tk-form">
        <div class="tk-form-row">
          <div>
            .create()
          </div>
          <div>
            <TkButton @click="showPrompt">Show Prompt</TkButton>
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
        propsData: {
          title: 'Title',
          content: 'Content',
        }
      })
      .onConfirm((context) => {
        console.log('context', context)

        this.$toast.success('confirmed')
      })
      .onCancel((context) => {
        this.$toast.warning('canceled')
      })
    }
  }
}
</script>
