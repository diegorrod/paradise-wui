const path = require('path')

module.exports = {
  entry: ['regenerator-runtime/runtime', './src/index.js'],
  target: 'node',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: 'build/'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        exclude: /(node_modules)/,
        test: /\.js$/
      },
      {
        exclude: /node_modules/,
        test: /\.graphql$/,
        use: [{ loader: 'graphql-import-loader' }]
      },
      {
        exclude: /node_modules/,
        test: /\.gql$/,
        use: [{ loader: 'graphql-import-loader' }]
      }
    ]
  }
}
