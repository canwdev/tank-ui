import Vue from 'vue'
import Vuex from 'vuex'
import {loadSettings, saveSettings} from '@/utils/settings'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    settings: loadSettings(),
  },
  getters: {
    isDarkTheme: state => state.settings.isDarkTheme,
    isAeroTheme: state => state.settings.isAeroTheme,
    themeColor: state => state.settings.themeColor,
  },
  mutations: {
    setSettings: (state, val) => {
      state.settings = val
      saveSettings(state.settings)
    },
    updateSettings: (state, payload) => {
      const {key, value} = payload
      state.settings[key] = value
      saveSettings(state.settings)
    }
  },
  actions: {
  },
  modules: {
  }
})
