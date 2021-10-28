const LS_KEY_LOCWEB_SETTINGS = 'LS_KEY_TANK_UI_SETTINGS'

const isSystemDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches

const defaultSettings = {
  isDarkTheme: isSystemDarkMode,
  themeColor: null
}

export function loadSettings() {
  const settings = JSON.parse(localStorage.getItem(LS_KEY_LOCWEB_SETTINGS) || '{}')
  return {...defaultSettings, ...settings}
}

export function saveSettings(obj = {}) {
  localStorage.setItem(LS_KEY_LOCWEB_SETTINGS, JSON.stringify(obj))
}
