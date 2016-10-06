var path = require('path');
var webpack = require('webpack');
 
module.exports = {
  entry: './lib/main.js',
  output: { path: __dirname, filename: 'index.js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/, 
        include: [
            path.resolve(__dirname, "lib"),
        ],
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
};
