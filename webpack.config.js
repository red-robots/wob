var path = require('path');
module.exports = {
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
