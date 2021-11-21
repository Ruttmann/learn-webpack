const common = require('./webpack.common');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode: "development", // Do not minify the bundle
  devServer: { // No need for output configs since there's no file system bundling for dev server
    contentBase: './dist'
  },
  plugins: [new HtmlWebpackPlugin({template: './src/template.html'})],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader', // 3. Inject styles into DOM
          'css-loader', // 2. Turns css into commonjs
          'sass-loader' // 1. Turns sass into css
        ]
      }
    ]
  }
})