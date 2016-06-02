var webpack = require('webpack');
var LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

module.exports = {
  entry: './app',
  output: {
    pathinfo: true,
    path: __dirname + '/dist',
    filename: 'bundle.plugin.js'
  },
  module: {
    loaders: [{
      loader: 'babel',
      test: /\.js$/,
      exclude: /node_modules/,
      query: {
        plugins: ['lodash'],
        presets: ['es2015']
      }
    }]
  },
  plugins: [
    new LodashModuleReplacementPlugin(),
    new webpack.optimize.OccurenceOrderPlugin()
  ]
};
