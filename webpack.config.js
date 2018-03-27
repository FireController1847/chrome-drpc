const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: {
    app: './src/background.js'
  },
  devServer: {
    contentBase: './build'
  },
  plugins: [
    // new UglifyJSPlugin()
  ],
  output: {
    filename: '[name].min.js',
    path: path.resolve(__dirname, 'build')
  }
};