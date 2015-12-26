var filename = __filename.split('/').pop().replace(/\.config\.js/, '.js');
var _ = require('lodash');
var webpack = require('webpack');

module.exports = {
  entry: __dirname + '/../lib',
  plugins: [
    new webpack.IgnorePlugin(/Migration/)
  ],
  output: {
    path: __dirname,
    filename: filename,
    libraryTarget: 'this',
    library: ['firenze', 'LocalStorageAdapter']
  },
  resolve: {
    extensions: [
      '',
      '.js'
    ]
  },
  externals: {
    firenze: 'firenze',
    lodash: '_',
    bluebird: 'P',
    async: 'async',
    validator: 'validator'
  }
};
