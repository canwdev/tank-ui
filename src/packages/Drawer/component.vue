<template>
  <div class="tk-side-drawer">
    <transition name="fade">
      <div
        v-show="mVisible"
        class="bg-shade"
        @click="mVisible=false"
        @contextmenu.prevent="mVisible=false"
      ></div>
    </transition>
    <transition :name="`slide-${pos}`">
      <div v-show="mVisible" class="menu-wrap" :class="[`_pos-${pos}`]">
        <div class="menu-title flex items-center justify-between">
          <span class="flex items-center">
            {{ title }}
          </span>
          <button class="tk-button-no-style" @click="mVisible=false">
            <TkIconClose/>
          </button>
        </div>

        <template
          v-for="(item, index) in menu"
        >
          <div
            v-if="item.subtitle"
            :key="index"
            class="subtitle"
          >{{ item.name }}
          </div>
          <button
            v-else
            v-show="!item.disabled"
            :key="index"
            class="tk-button-no-style menu-item"
            :class="{active: item.active}"
            @click="item.action && item.action()"
          >
            <span v-if="item.iconClass" :class="item.iconClass">{{ item.iconName || null }}</span> <span
              class="menu-item-title"
            >{{ item.name }}</span>
          </button>
        </template>

        <slot></slot>

      </div>
    </transition>
  </div>
</template>

<script>
import visibleMixin from '@src/mixins/visible'
import TkIconClose from '../Icons/IconClose'

export default {
  name: 'TkDrawer',
  mixins: [visibleMixin],
  components: {
    TkIconClose
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    pos: {
      type: String,
      default: 'left'
    },
    menu: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

