<template>
  <div class="page-home">

    <img class="home-logo" src="@src/assets/images/logo.png">
    <TkHelloWorld :msg="`TankUI v${version}`"/>

    <div><TkSwitch v-model="isAeroTheme" title="Transparent Blur"/></div>
    <p>A Minimal Vue 2 UI Library</p>

  </div>
</template>

<script>
import tankUI from '@canwdev/tank-ui'

export default {
  name: 'HomePage',
  data() {
    return {
      version: tankUI.version
    }
  },
  computed: {
    isAeroTheme: {
      get() {
        return this.$store.getters.isAeroTheme
      },
      set(val) {
        this.$store.commit('updateSettings', {
          key: 'isAeroTheme',
          value: val
        })
      }
    },
  },
  watch: {
    isAeroTheme(val) {
      this.setAeroTheme(val)
    }
  },
  mounted() {
    this.setAeroTheme(this.isAeroTheme)
  },
  methods: {
    setAeroTheme(flag) {
      console.log('setAeroTheme',flag)
      const body = document.body
      if (flag) {
        body.classList.add('tk-aero')
      } else {
        body.classList.remove('tk-aero')
      }
    }
  }
}
</script>

<style lang="scss">
.page-home {
  text-align: center;
  margin-top: 60px;

  .home-logo {
    width: 256px;
    height: 256px;
    border-radius: $border-radius;
  }
}
</style>
