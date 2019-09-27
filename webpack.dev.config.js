const path = require('path');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.config');

const devConfig = {
  /* 入口 */
  entry: {
    app: [
      'react-hot-loader/patch',
      path.join(__dirname, 'src/index.jsx')
    ]
  },

  /* 输出到dist文件夹，输出文件名字为bundle.js */
  output: {
    filename: '[name].[hash].js'
  },
  devtool: 'inline-source-map',
  devServer: {
    port: 8080,
    contentBase: path.join(__dirname, './dist'),
    historyApiFallback: true,
    host: '0.0.0.0',
    open: true, // 自动打开浏览器
    inline: true // 实时刷新
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /(node_moudles|bower_components)/,
        use: [
          'style-loader', // 将js字符串生成为style节点
          'css-loader', // 将css转化为CommonJS模块
          'sass-loader' // 将Sass编译成css
        ]
      }
    ]
  }
};

module.exports = merge({
  customizeArray(a, b, key) {
    if (key === 'entry.app') {
      return b
    }
    return undefined;
  }
})(commonConfig, devConfig);
