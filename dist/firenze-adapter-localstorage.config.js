var filename = __filename.split('/').pop().replace(/\.config\.js/, '.js');
var _ = require('lodash');

module.exports = {
  entry: __dirname + '/../lib',
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
    lodash: '_',
    firenze: 'firenze',
    async: 'async'
  }
};
