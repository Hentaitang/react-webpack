const path = require('path');
const commonConfig =  require('./webpack.common.config');
const merge = require('webpack-merge');

const devConfig = {
  devtool: 'inline-source-map',
  entry: {
    app: [
      'react-hot-loader/patch',
      '@babel/polyfill',
      path.join(__dirname, 'src/index.jsx')
    ]
  },
  output: {
    filename: '[name].[hash].js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 8080,
    historyApiFallback: true,
    host: '0.0.0.0',
    open: true,
    inline: true
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /(node_modules|bower_components)/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
      }
    ]
  },
  resolve: {
    alias: { 'react-dom': '@hot-loader/react-dom'  }
  }
};

module.exports = merge({
  customizeArray(a, b, key) {
    if (key === 'entry.app') {
      return b;
    }
    return undefined;
  }
})(commonConfig, devConfig);
