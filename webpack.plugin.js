var webpack = require('webpack');
var LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

module.exports = {
  entry: './app',
  output: {
    pathinfo: true,
    path: __dirname + '/dist',
    filename: 'bundle.plugin.js'
  },
  plugins: [
    new LodashModuleReplacementPlugin(),
    new webpack.optimize.OccurenceOrderPlugin()
  ]
};
