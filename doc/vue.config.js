const path = require('path')
module.exports = {
  devServer: {
    port: 3001
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@doc': path.join(__dirname, 'src'),
        '@src': path.join(__dirname, '../src')
      }
    },
    // externals: [
    //   {
    //     'vue': 'Vue',
    //   }
    // ]
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
