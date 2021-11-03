<template>
  <div id="app" :class="[isDarkTheme ? 'tk-dark-theme' : 'tk-light-theme']">
    <TkNavBar
      :menu="[
        {title: 'Start', url: '/quickstart'},
        {title: 'Documents', url: '/docs'},
        {title: 'Code', url: null, children: [
          {title: 'Github', url: 'https://github.com/canwdev/tank-ui'},
          // {title: 'Gitee', url: 'https://gitee.com/canwdev/tank-ui'}
        ]}
      ]"
    >
      <template slot="left">
        <NavLogo></NavLogo>
      </template>
      <template slot="right">
        <div class="flex items-center justify-end">
          <input class="tk-button-no-style color-input" type="color" :value="themeColor" @change="handleThemeColorChange">

          <TkSwitch v-model="isDarkTheme" text-on="暗" text-off="明"></TkSwitch>
        </div>
      </template>
    </TkNavBar>

    <router-view/>
  </div>
</template>

<script>
import NavLogo from '@doc/components/NavLogo'
import {hexToRgb} from '@/utils/color'

export default {
  name: 'App',
  components: {
    NavLogo
  },
  computed: {
    isDarkTheme: {
      get() {
        return this.$store.getters.isDarkTheme
      },
      set(val) {
        this.$store.commit('updateSettings', {
          key: 'isDarkTheme',
          value: val
        })
      }
    },
    themeColor() {
      return this.$store.getters.themeColor
    }
  },
  created() {
    const themeColor = this.themeColor
    // console.log('themeColor', themeColor.value)
    if (themeColor) {
      const {r, g, b} = hexToRgb(themeColor)
      const root = document.documentElement
      root.style.setProperty('--primary-rgb', `${r}, ${g}, ${b}`)
    }
  },
  methods: {
    handleThemeColorChange(event) {
      const colorHex = event.target.value
      const {r, g, b} = hexToRgb(colorHex)
      console.log(colorHex)

      const root = document.documentElement
      root.style.setProperty('--primary-rgb', `${r}, ${g}, ${b}`)
      this.$store.commit('updateSettings', {
        key: 'themeColor',
        value: colorHex
      })
    }
  }
}
</script>

<style lang="scss" scoped>
#app {
  height: 100%;
  display: flex;
  flex-direction: column;
  .color-input {
    width: 30px;
    height: 30px;
    padding: 0;
    margin-right: 10px;
  }
}
</style>
