var webpack = require('webpack');

module.exports = {
  entry: './app',
  output: {
    pathinfo: true,
    path: __dirname + '/dist',
    filename: 'bundle.no-plugin.js'
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
    new webpack.optimize.OccurenceOrderPlugin()
  ]
};
