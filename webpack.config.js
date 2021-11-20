const path = require('path');

module.exports = {
  mode: "development", // Do not minify the bundle
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  }
}