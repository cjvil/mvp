module.exports = {
  entry: __dirname + '/client/index.jsx',
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: 'babel-loader'
      }
    ],
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + '/client/build'
  }
};