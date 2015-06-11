import _ from 'lodash';
import P from 'firenze/lib/Promise';

import Adapter from 'firenze/lib/Adapter';

// ## Install
//
// ```
// $ npm install --save firenze-adapter-memory
// ```
//
// ## Usage
//
// You aren't expected to deal with the Adapter directly. Just pass the adapter to Database config when you create an instance.
//
// ```js
// var f = require('firenze');
// var Database = f.Database;
// var MemoeyAdapter = require('firenze-adapter-memory');
//
// var db = new Database({
//   adapter: MemoryAdapter
// });
// ```
//
export default class Memory extends Adapter {
  constructor(options) {
    super(options);

    this.options = options;
    this.data = {};
  }

  getConnection() {
    return this.knex;
  }

  closeConnection(cb = null) {
    if (!cb) {
      cb = function () { };
    }
    return this.getConnection().destroy(cb);
  }
}
