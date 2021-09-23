<template>
  <div
    class="tk-input-tags"
    :class="{focused: boxFocused, disabled}"
    @click="handleMainClick"
  >
    <span
      v-for="item in mValue"
      :key="item"
      class="tag-item"
      @click="removeTag(item)"
    >
      <span class="icon-del">✖</span>
      {{ item }}
    </span>
    <span class="relative-position">
      <input
        v-if="showInput"
        ref="tagInput"
        v-model="currentString"
        type="text"
        maxlength="100"
        :disabled="disabled"
        @keydown.delete="deleteLastTag"
        @keyup.enter="addTag"
        @focus="boxFocused = true"
        @blur="handleBlur"
      />
      <div v-if="showInput&&!boxFocused&&!mValue.length" class="placeholder" v-html="placeholder"></div>
    </span>
    <span v-if="limitCount&&showLimit" class="limit-tip">Limit {{ limitCount }}</span>
  </div>
</template>

<script>

export default {
  name: 'TkInputTags',
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    value: {
      type: Array,
      default() {
        return []
      }
    },
    limitCount: {
      type: [Number, null],
      default: null
    },
    showLimit: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
  },
  computed: {
    mValue: {
      get() {
        return this.value
      },
      set(v) {
        this.$emit('input', v)
      }
    },
    showInput() {
      if (!this.limitCount) {
        return true
      }
      return this.mValue.length + 1 <= this.limitCount
    }
  },
  data() {
    return {
      boxFocused: false,
      currentString: ''
    }
  },
  methods: {
    handleBlur() {
      this.addTag()
      this.boxFocused = false
    },
    addTag() {
      const str = this.currentString.trim()
      this.currentString = ''

      if (this.mValue.indexOf(str) === -1 && /([^\s])/.test(str)) {
        this.mValue.push(str)
      }
    },
    deleteLastTag() {
      if (this.currentString === '') {
        this.mValue.pop()
      }
    },
    removeTag(tag) {
      const index = this.mValue.indexOf(tag)
      this.mValue.splice(index, 1)
    },
    handleMainClick() {
      if (this.$refs.tagInput) {
        this.$refs.tagInput.focus()
      }
    }
  }
}
</script>

