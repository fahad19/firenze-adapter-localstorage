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
// ```js
// var f = require('firenze');
// var Database = f.Database;
// var MemoryAdapter = require('firenze-adapter-memory');
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
    return this.data;
  }

  closeConnection(cb = null) {
    if (!cb) {
      cb = function () { };
    }
    return cb();
  }

  dropTable(model) {
    this.data = _.omit(this.data, model.collection().table);
    return new P.resolve(true);
  }

  createTable(model) {
    this.data[model.collection().table] = [];
    return new P.resolve(true);
  }

  populateTable(model, rows) {
    this.data[model.collection().table] = rows;
    return new P.resolve(true);
  }

  query(collection, options = {}) {
    return _.merge(options, {
      table: collection.table,
      alias: collection.model().alias,
      primaryKey: collection.model().primaryKey
    });
  }

  create(q, obj) {
    obj[q.primaryKey] = _.uniqueId();
    this.data[q.table].push(obj);
    return new P.resolve(obj);
  }

  read(q) {
    let records = _.filter(this.data[q.table], (record) => {
      return true; // apply conditions
    });
    return new P.resolve(records);
  }

  update(q, obj) {
    let k = _.findIndex(this.data[q.table], (r) => {
      return true; // apply conditions
    });

    this.data[q.table][k] = _.merge(this.data[q.table][k], obj);
    return new P.resolve(this.data[q.table][k]);
  }

  delete(q) {
    let k = _.findIndex(this.data[q.table], (r) => {
      return true; // apply conditions
    });

    this.data[q.table].splice(k, 1);
    return new P.resolve(true);
  }
}
