<template>
  <div class="tk-input-codes">
    <div
      v-for="(item, index) in data"
      :key="item.id"
      class="code-item"
      @input="handleKeyDown($event, item, index)"
      @keyup="handleKeyUp($event, item, index)"
      @enter="handleSubmit"
      @paste="handlePaste"
    >
      <input
        ref="inputs"
        v-model="item.value"
        type="text"
        maxlength="1"
        @focus="handleFocus"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'TkInputCodes',
  props: {
    length: {
      type: Number,
      default: 6
    },
    isUpperCase: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      data: [],
      currentInputIndex: 0
    }
  },
  watch: {
    currentInputIndex(val) {
      const inputs = this.$refs.inputs
      if (!inputs) {
        return
      }
      if (inputs[val]) {
        inputs[val].focus()
      }
    }
  },
  computed: {
    dataString() {
      return this.data.map(i => i.value).join('')
    }
  },
  created() {
    this.data = Array.from({length: this.length}, (item, index) => ({
      id: index,
      value: '',
      oldValue: ''
    }))
  },
  mounted() {
    this.$refs.inputs[0].focus()
  },
  methods: {
    handlePaste(event) {
      // event.preventDefault()

      let paste = (event.clipboardData || window.clipboardData).getData('text').trim()
      if (this.isUpperCase) {
        paste = paste.toUpperCase()
      }
      // console.log(paste)
      for (let i = 0; i < this.data.length; i++) {
        if (!paste[i]) {
          break
        }
        this.data[i].value = paste[i]
        this.currentInputIndex = i
      }

      this.handleSubmit()
    },
    handleKeyUp(event, item, index) {
      // console.log('handleKeyUp', event)
      const {key} = event
      if (key === 'Shift') {
        return
      }
      if (key === 'ArrowLeft') {
        this.goBack(index)
        return
      } else if (key === 'ArrowRight') {
        this.goNext(index)
        return
      }

      // console.log('this.data[index]',this.data[index])
      const {value: newVal, oldValue: oldVal} = this.data[index]

      if (!oldVal && !newVal) {
        this.goBack(index)
        return
      }
      if (!oldVal && newVal) {
        this.goNext(index)
      }
      // eslint-disable-next-line eqeqeq
      if (oldVal == newVal) {
        if (!newVal) {
          this.goBack(index)
        } else {
          this.goNext(index)
        }
        return
      }

      this.goNext(index)
    },
    handleKeyDown(event, item, index) {
      // console.log('handleKeyDown', event)
      this.data[index].oldValue = this.data[index].value.toString()
      if (this.isUpperCase) {
        item.value = event.target.value.toUpperCase()
      }
    },
    handleFocus(event) {
      event.target.select()
    },
    goBack(index = this.currentInputIndex) {
      const nextIndex = index - 1
      if (nextIndex < 0) {
        this.currentInputIndex = 0
      } else {
        this.currentInputIndex = nextIndex
      }
    },
    goNext(index = this.currentInputIndex) {
      const nextIndex = index + 1
      if (nextIndex >= this.length) {
        // this.currentInputIndex = 0
        this.handleSubmit()
      } else {
        this.currentInputIndex = nextIndex
      }
    },
    handleSubmit() {
      for (const key in this.data) {
        if (!this.data[key]) {
          console.warn('not complete', key)
          return
        }
      }

      this.$emit('complete', this.dataString)
    }
  }
}
</script>

