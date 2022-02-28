# TankUI (tank-ui)

<a href="https://badge.fury.io/js/@canwdev%2Ftank-ui"><img src="https://badge.fury.io/js/@canwdev%2Ftank-ui.svg" alt="npm version" height="18"></a>

A ~~Minimal~~ Test Vue 2 UI Library.

Examples: https://canwdev.github.io/tank-ui

![HammerTank](src/assets/images/logo.png)

## Usage

```sh
yarn add tank-ui
```

In main.js

```js
import tankUI from '@canwdev/tank-ui'
import '@canwdev/tank-ui/dist/tank-ui.css'

Vue.use(tankUI)

export default new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
```

In `.vue` file

```vue
<template>
  <TkButton>Hello world!</TkButton>
</template>
```

More examples see: [doc](./doc) folder

## Dev & Build

```sh
# Install deps
yarn install
cd doc && yarn install

# Start dev service
yarn dev

# Start doc
cd doc && yarn serve

# Build
yarn build
```

---

- [npmmirror sync request](https://npmmirror.com/sync/@canwdev/tank-ui)
