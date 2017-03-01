var path = require('path')

module.exports = {
  entry : path.resolve(__dirname, 'src/js/index.js'),
  output : {
    publicPath :'/dist/js/',
    path : path.resolve(__dirname, 'dist/js'),
    filename : 'bundle.js'
  },
  module: {
    loaders : [
      {
        test : /\.js$/,
        exclude: /node_modules/,
        loader : 'babel-loader'
      }
    ]
  }
}
