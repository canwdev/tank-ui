<template>
  <div class="auto-ratio-box" :class="{'_max-height': isY}">
    <svg
      v-if="isY"
      class="__height-box"
      :viewBox="`0 0 100 ${percent}`"
    >
    </svg>
    <div
      v-else
      class="__height-box"
      :style="{paddingBottom: `${percent}%`}"
    ></div>

    <div class="__box-content">
      <slot>
      </slot>
    </div>

  </div>
</template>

<script>
/* 自动计算长宽比的盒子 */
export default {
  name: 'AutoRatioBox',
  props: {
    width: {
      type: [Number, String],
      default: 1
    },
    height: {
      type: [Number, String],
      default: 1
    },
    ratio: {
      type: [Number, String],
      default: null
    },
    // 根据高度自适应宽度
    isY: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    mRatio() {
      if (this.ratio) {
        return Number(this.ratio)
      }
      return (Number(this.height) / Number(this.width))
    },
    percent() {
      return (this.mRatio * 100).toFixed(2)
    }
  }
}
</script>
