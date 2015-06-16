var filename = __filename.split('/').pop().replace(/\.config\.js/, '.js');
var _ = require('lodash');

module.exports = {
  entry: __dirname + '/../lib/test/all',
  output: {
    path: __dirname,
    filename: filename
  },
  resolve: {
    extensions: [
      '',
      '.js'
    ]
  }
};
