const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

commonConfig = {
  entry: {
    app: [
      '@babel/polyfill',
      path.join(__dirname, 'src/index.jsx')
    ]
  },
  output: {
    path: path.join(__dirname, './dist'),
    publicPath: '/',
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.m?jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader?cacheDirectory=true'
        }
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8192
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      name: 'index.html',
      template: path.join(__dirname, 'src/index.html')
    })
  ],
  resolve: {
    alias: {
      router: path.join(__dirname, 'src/router'),
      components: path.join(__dirname, 'src/components'),
      pages: path.join(__dirname, 'src/pages')
    }
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
  }
};

module.exports = commonConfig;
