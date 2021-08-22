const path = require('path')
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@doc': path.join(__dirname, 'src'),
        '@src': path.join(__dirname, '../src')
      }
    }
  },
  css: {
    // extract: false,
    sourceMap: false,
    loaderOptions: {
      sass: {
        prependData: `@import "@src/theme/common/variables.scss";`
      }
    }
  },
}