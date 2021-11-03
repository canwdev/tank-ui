<template>
  <div class="page-home">

    <img src="@src/assets/images/logo.png">
    <TkHelloWorld msg="TankUI"/>

    <div><TkSwitch v-model="isAeroTheme"/></div>
    <p>A Minimal Vue 2 UI Library</p>

  </div>
</template>

<script>
export default {
  name: 'HomePage',
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

<style>
.page-home {
  text-align: center;
  margin-top: 60px;
}
</style>
