<template>
  <div class="tk-seekbar" :class="{vertical}">
    <div
      v-if="!vertical"
      class="seekbar-fill"
      :style="'width:'+progress+'%'"
    ></div>
    <input
      ref="seekBar"
      type="range"
      :min="min"
      :max="max"
      :value="value"
      class="common-seekbar seekbar-input"
      v-bind="$attrs"
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
      @change="handleChange"
    >
  </div>
</template>

<script>
export default {
  name: 'TkSeekbar',
  props: {
    min: {
      type: [Number, String],
      default: 0
    },
    max: {
      type: [Number, String],
      default: 100
    },
    value: {
      type: [Number, String],
      default: 100
    },
    vertical: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    progress() {
      return (this.value / this.max * 100).toFixed(1)
    }
  },
  methods: {
    handleInput(event) {
      this.$emit('input', event.target.value)
    },
    handleFocus(event) {
      this.$emit('focus', event)
    },
    handleBlur(event) {
      this.$emit('blur', event)
    },
    handleChange(event) {
      this.$emit('change', event.target.value)
    }
  }
}
</script>

<style lang="scss" scoped>
.tk-seekbar {
  height: 100%;
  flex: 1;
  position: relative;
  overflow: hidden;

  &.vertical {
    input {
      writing-mode: bt-lr; /* IE */
      -webkit-appearance: slider-vertical; /* WebKit */
      height: 100%;
      outline: none;
    }
  }

  .seekbar-fill {
    position: absolute;
    top: 49%;
    transform: translateY(-50%);
    height: 5px;
    width: 0;
    background: $primary;
    user-select: none;
    pointer-events: none;
    z-index: 0;
    border-radius: 2px;
  }

  input {
    width: 100%;
    appearance: none;
    height: 5px;
    background: $border-color;
    outline: none;
    border-radius: 2px;
    box-shadow: none;

    @mixin mixin-thumb {
      position: relative;
      appearance: none;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background: $primary;
      z-index: 10;
      border: none;
      box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.2);
      cursor: grab;
      &:active {
        cursor: grabbing;
        opacity: .8;
      }
    }

    &::-webkit-slider-thumb {
      @include mixin-thumb;
    }

    &::-moz-range-thumb {
      @include mixin-thumb;
    }
  }
}
</style>
