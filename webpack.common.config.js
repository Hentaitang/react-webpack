const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

commonConfig = {
  entry: {
    app: [
      path.join(__dirname, 'src/index.jsx')
    ]
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'app.[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.m?js[x?]$/,
        /* 除node_modules以外的文件夹 */
        exclude: /(node_modules|bower_components)/,
        /* src文件夹下的以.js结尾的文件，使用babel解析 */
        // include: path.join(__dirname, 'src'),
        use: {
          /* cacheDirectory用于缓存babel编译结果，下次编译加速 */
          loader: 'babel-loader?cacheDirectory=true'
        }
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8192
          }
        }]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, 'src/index.html')
    }),
  ],
  resolve: {
    alias: {
      pages: path.join(__dirname, 'src/pages'),
      component: path.join(__dirname, 'src/components'),
      router: path.join(__dirname, 'src/router'),
      components: path.join(__dirname, 'src/components')
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
