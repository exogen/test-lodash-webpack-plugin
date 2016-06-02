var webpack = require('webpack');

module.exports = {
  entry: './app',
  output: {
    pathinfo: true,
    path: __dirname + '/dist',
    filename: 'bundle.no-plugin.js'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin()
  ]
};
