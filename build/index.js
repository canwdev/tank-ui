const path = require('path')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin')
const host = 'localhost'
const port = 9999
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

const {CleanWebpackPlugin} = require('clean-webpack-plugin')

const createLintingRule = () => ({
  test: /\.(js|vue)$/,
  loader: 'eslint-loader',
  enforce: 'pre',
  include: [resolve('src'), resolve('test')],
  options: {
    formatter: require('eslint-friendly-formatter'),
    emitWarning: true
  }
})

module.exports = (env, argv) => {
  const isDev = env === 'development'
  return {
    mode: env,
    resolve: {
      extensions: ['.js', '.vue', '.css'],
      alias: {
        '@doc': resolve('doc'),
        '@src': resolve('src'),
      }
    },
    // 入口文件
    entry: {
      'tank-ui': resolve('src/index.js'),
    },
    output: {
      publicPath: `http://${host}:${port}/`,
      path: path.resolve(`dist`),
      filename: '[name].js', // .[hash:7]
      libraryTarget: 'umd',
      library: 'tankUI',
    },
    optimization: {
      minimize: !isDev,
      splitChunks: {
        // cacheGroups: {
        //   commons: {
        //     chunks: 'all',
        //     name: 'commons',
        //     minSize: 0,
        //     minChunks: 2,
        //   },
        // }
      }
    },
    module: {
      rules: [
        ...(isDev ? [createLintingRule()] : []),
        {
          test: /\.(sass|css|scss)/,
          use: [
            MiniCssExtractPlugin.loader,
            // {loader: 'style-loader'},
            {loader: 'css-loader'},
            {loader: 'sass-loader'},
            {
              loader: 'sass-resources-loader',
              options: {
                resources: resolve('src/theme/common/variables.scss')
              }
            }
          ]
        },
        {
          test: /\.vue$/,
          loader: 'vue-loader',
          options: {
            loaders: {}
          }
        },
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/, //排除掉node_modules下的js文件，即不解析这个文件夹下的js文件
        },
        {
          test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
          loader: 'url-loader',
          options: {
            limit: 1000000,
            name: 'static/img/[name].[hash:7].[ext]',
            esModule: false,
          }
        },
        {
          test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: 'static/media/[name].[hash:7].[ext]',
            esModule: false,
          }
        },
        {
          test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: 'static/fonts/[name].[hash:7].[ext]',
            esModule: false,
          }
        },
        // {
        //   test: /\.worker\.js$/,
        //   loader: "worker-loader",
        //   options: {
        //     inline: "fallback",
        //   },
        // },
      ]
    },
    plugins: [
      ...(!isDev ? [
        new ParallelUglifyPlugin({
        sourceMap: false,
        uglifyJS: {
          output: {
            beautify: false,
            comments: false
          },
          compress: {
            drop_console: false,
            collapse_vars: true,
            reduce_vars: true,
          }
        }
      }),
        // new CompressionWebpackPlugin({
        //   algorithm: 'gzip',
        //   threshold: 10240,
        //   compressionOptions: {level: 9},
        // })
      ] : []),
      new MiniCssExtractPlugin(),
      new webpack.DefinePlugin({
        'process.env': env
      }),
      new VueLoaderPlugin(),
      new CleanWebpackPlugin(),
    ],
    devServer: {
      // 设置基本目录结构
      contentBase: path.resolve(__dirname, './'),
      //服务器的ip地址 可以使用ip也可以使用localhost
      host,
      //服务器压缩是否开启
      compress: true,
      //配置服务端口号
      port,
      hot: true,
      // 开启服务器的模块热替换(HMR)
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    },
    node: {
      fs: 'empty',
      net: 'empty',
      tls: 'empty',
    },
    externals: {
      // 把导入语句里的 LJquery 替换成运行环境里的全局变量 jQuery
      // LJquery: 'jQuery'
    },
  }
}
