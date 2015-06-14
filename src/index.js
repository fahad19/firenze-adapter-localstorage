import _ from 'lodash';
import P from 'firenze/lib/Promise';
import async from 'async';

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
    return new P.resolve(this.findRecords(q));
  }

  findRecords(q) {
    return new P((resolve, reject) => {
      return async.waterfall([
        (cb) => {
          // all
          let records this.data[q.table];
          return cb(null, records);
        },
        (records, cb) => {
          // conditions
          if (!q.conditions) {
            return cb(null, records);
          }

          let conditions = {};
          _.each(q.conditions, (v, k) => {
            if (k.indexOf('.') > -1) {
              k = k.split('.')[1];
              conditions[k] = v;
            }
          });

          let filtered = _.filter(records, _.matches(conditions));
          return cb(null, filtered);
        },
        (records, cb) => {
          // sort
          if (!q.order) {
            return cb(null, records);
          }

          let order;
          if (_.isObject(q.order)) {
            order = [];
            _.each(q.order, (v, k) => {
              order.push({
                [k]: v
              })
            });
          } else {
            order = q.order;
          }

          let sortFields = [];
          let sortOrders = [];

          order.forEach((o) => {
            let k = _.keys(o)[0];
            let v = _.values(o)[0];

            if (k.indexOf('.') > -1) {
              k = k.split('.')[1];
            }

            sortFields.push(k);
            sortOrders.push(v.toLowerCase() === 'asc' ? true : false);
          });

          let sorted = _.sortByOrder(records, sortFields, sortOrders);
          return cb(null, sorted);
        },
        (records, cb) => {
          // limit
          let page = q.page ? q.page : 1;
          let limit = q.limit ? q.limit : null;

          if (!limit) {
            return cb(null, records);
          }

          let from = (page - 1) * limit;
          let to = from + limit;
          let limited = records.slice(from, to);
          return cb(null, limited);
        }
      ], (err, result) => {
        if (err) {
          return reject(err);
        }

        return resolve(result);
      });
    });
  }

  update(q, obj) {
    return new P((resolve, reject) => {
      let records = this.findRecords(q);
      if (records.length === 0) {
        return reject(false);
      }

      let id = records[0][q.primaryKey];
      let k = _.findIndex(this.data[q.table], (r) => {
        return r[q.primaryKey] === id;
      });
      this.data[q.table][k] = _.merge(this.data[q.table][k], obj);
      return resolve(this.data[q.table][k]);
    });
  }

  delete(q) {
    return new P((resolve, reject) => {
      let records = this.findRecords(q);
      if (records.length === 0) {
        return reject(false);
      }

      let id = records[0][q.primaryKey];
      let k = _.findIndex(this.data[q.table], (r) => {
        return r[q.primaryKey] === id;
      });
      this.data[q.table].splice(k, 1);
      return resolve(true);
    });
  }
}
