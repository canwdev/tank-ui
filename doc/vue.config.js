const path = require('path')

const isProd = process.env.NODE_ENV === 'production' // 'development'

module.exports = {
  publicPath: './',
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
    externals: isProd ? [] : [
      {
        '@canwdev/tank-ui': 'tankUI',
      }
    ]
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
