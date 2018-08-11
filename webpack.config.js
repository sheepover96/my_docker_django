const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'app/src/app.js'),
  output: {
    path: path.join(__dirname, 'app/dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                //['env', { 'modules': false }],
                'react'
              ],
            }
          }
        ],
        exclude: /node_modules/,
      }],
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
};
