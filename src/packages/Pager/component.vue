<template>
  <div class="tk-pager">

    <slot name="left"></slot>

    <TkButton
      v-if="showExtraButtons"
      theme="outline"
      :disabled="isFirst"
      title="First"
      @click="goFirst"
    >⏮
    </TkButton>
    <TkButton
      v-show="pagesCount > pageGroupCount"
      theme="outline"
      :disabled="isFirst"
      title="Previous Group"
      @click="goPrevGroup"
    >
      ⏪
    </TkButton>
    <TkButton
      v-if="showExtraButtons"
      theme="outline"
      :disabled="isFirst"
      title="Previous"
      @click="goPrevPage"
    >◀️
    </TkButton>
    <div class="page-items">
      <TkButton
        v-for="v in pageList"
        :key="v"
        theme="outline"
        :class="{active: v === mOffset}"
        @click="goPage(v)"
      >{{ v + 1 }}
      </TkButton>
    </div>
    <TkButton
      v-if="showExtraButtons"
      theme="outline"
      :disabled="isLast"
      title="Next"
      @click="goNextPage"
    >▶️
    </TkButton>
    <TkButton
      v-show="pagesCount > pageGroupCount"
      theme="outline"
      :disabled="isLast"
      title="Next Group"
      @click="goNextGroup"
    >⏩
    </TkButton>
    <TkButton
      v-if="showExtraButtons"
      theme="outline"
      :disabled="isLast"
      title="Last"
      @click="goLast"
    >
      ⏭
    </TkButton>

    <span v-if="showExtraInfo" class="pager-info">{{ mOffset+1 }}/{{ pagesCount }} ({{ total }})</span>

    <slot name="right"></slot>

  </div>
</template>

<script>
import TkButton from '@src/packages/Button'

export default {
  name: 'TkPager',
  components: {
    TkButton
  },
  props: {
    pageSize: {
      type: [Number, String],
      default: 10
    },
    offset: {
      type: [Number, String],
      default: 0
    },
    total: {
      type: [Number, String],
      default: 1
    },
    pageGroupCount: {
      type: [Number, String],
      default: 5
    },
    showExtraButtons: {
      type: Boolean,
      default: true
    },
    showExtraInfo: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
    }
  },
  computed: {
    mOffset: {
      get() {
        return Number(this.offset)
      },
      set(val) {
        this.$emit('update:offset', val)
      }
    },
    pagesCount() {
      return Math.ceil(Number(this.total) / Number(this.pageSize))
    },
    pageList() {
      const size = this.pageGroupCount
      const count = this.pagesCount
      const cur = this.mOffset

      // 将数列分割为短二维数组
      const groups = []
      for (let i = 0; i < Math.ceil(count / size); i++) {
        groups.push([])
      }
      let curGroup = 0
      for (let i = 0; i < count; i++) {
        groups[curGroup].push(i)
        if ((i + 1) % Number(this.pageGroupCount) === 0) {
          curGroup++
        }
      }
      // 确定当前选中在哪个组中
      for (let i = 0; i < groups.length; i++) {
        if (groups[i].indexOf(cur) !== -1) {
          curGroup = i
          break
        }
      }
      return groups[curGroup]
    },
    isFirst() {
      return this.mOffset <= 0
    },
    isLast() {
      return this.mOffset === this.pagesCount - 1
    },
  },
  methods: {
    goPage(offset) {
      this.mOffset = Math.min(this.pagesCount - 1, Math.max(0, offset))
    },
    goPrevPage() {
      this.mOffset = Math.max(0, this.mOffset - 1)
    },
    goNextPage() {
      this.mOffset = Math.min(this.pagesCount - 1, this.mOffset + 1)
    },
    goPrevGroup() {
      this.goPage(this.mOffset - this.pageGroupCount)
    },
    goNextGroup() {
      this.goPage(this.mOffset + this.pageGroupCount)
    },
    goFirst() {
      this.goPage(0)
    },
    goLast() {
      this.goPage(this.pagesCount - 1)
    }
  }
}
</script>
