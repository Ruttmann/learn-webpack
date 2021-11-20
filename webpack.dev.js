const path = require('path');
const common = require('./webpack.common');
const merge = require('webpack-merge');

module.exports = merge(common, {
  mode: "development", // Do not minify the bundle
  devServer: { // No need for output configs since there's no file system bundling for dev server
    contentBase: './dist'
  }
})