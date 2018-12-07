const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const {VueLoaderPlugin} = require('vue-loader')
const webpack = require('webpack')
module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {test: /\.css$/, use: 'css-loader'},
      {test: /\.vue$/, use: 'vue-loader'},
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CleanWebpackPlugin(['dist']),//表示清除dist文件夹下的内容
    new VueLoaderPlugin(),
    new webpack.LoaderOptionsPlugin({
      vue: {
        loader: {
          js: 'babel-loader'
        }
      }
    })
  ],
  devServer: {
    port: 3306
  },

}