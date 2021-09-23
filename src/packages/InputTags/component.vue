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

<style lang="scss" scoped>
.tk-input-tags {
  padding: 5px 10px;
  border-radius: $border-radius;
  border: $layout-border;
  transition: all .3s;
  position: relative;

  &.disabled {
    &:before {
      display: none;
    }
    .placeholder {
      opacity: .5;
    }
  }

  &.focused, &:hover, &:focus, &:active {
    border-color: $primary;
    box-shadow: 0 0 1px 1px $primary inset;
  }

  .tag-item {
    display: inline-block;
    line-height: 24px;
    padding: 0 10px;
    background: $primary;
    color: white;
    border-radius: 3px;
    position: relative;
    cursor: pointer;
    margin: 2px 5px 2px 0;

    .icon-del {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      display: none;
      width: 100%;
      text-align: center;
      color: white;
      font-size: 18px;
    }

    &:hover {
      &::before {
        content: " ";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.4);
        cursor: pointer;
        border-radius: 3px;
      }

      .icon-del {
        display: block;
      }
    }
  }

  input {
    border: none;
    outline: none;
    background: transparent;
    width: 310px;
    margin: 2px 0;
    height: 24px;
    color: inherit;
    position: relative;
  }

  .placeholder {
    position: absolute;
    top: 0;
    left: 4px;
    user-select: none;
    cursor: text;
  }

  .limit-tip {
    position: absolute;
    bottom: 8px;
    right: 9px;
    line-height: 12px;
    font-size: 12px;
  }
}
</style>
