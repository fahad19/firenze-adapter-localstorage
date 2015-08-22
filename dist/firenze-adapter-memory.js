this["firenze"] = this["firenze"] || {}; this["firenze"]["MemoryAdapter"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* eslint-disable new-cap */

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _lodash = __webpack_require__(1);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _firenze = __webpack_require__(2);

	var _firenze2 = _interopRequireDefault(_firenze);

	var _async = __webpack_require__(3);

	var _async2 = _interopRequireDefault(_async);

	var P = _firenze2['default'].Promise;
	var Adapter = _firenze2['default'].Adapter;

	// ## Usage
	//
	// ### Node.js
	//
	// With [npm](https://npmjs.com):
	//
	// ```
	// $ npm install --save firenze-adapter-memory
	// ```
	//
	// Now you can require it as follows:
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
	// ### Browser
	//
	//
	// Or [Bower](http://bower.io):
	//
	// ```
	// $ bower installl --save firenze-adapter-memory
	// ```
	//
	// Can be loaded in your HTML page as follows:
	//
	// ```js
	// <script src="bower_components/lodash/lodash.min.js"></script>
	// <script src="bower_components/async/lib/async.js"></script>
	// <script src="bower_components/bluebird/js/browser/bluebird.min.js"></script>
	// <script src="bower_components/validator-js/validator.min.js"></script>
	//
	// <script src="bower_components/firenze/dist/firenze.min.js"></script>
	// <script src="bower_components/firenze-adapter-memory/dist/firenze-adapter-memory.min.js"></script>
	//
	// <script>
	// // Memory adapter is availble in `firenze.MemoryAdapter`
	// var db = new firenze.Database({
	//   adapter: firenze.MemoryAdapter
	// });
	// </script>
	// ```
	//

	var Memory = (function (_Adapter) {
	  function Memory(options) {
	    _classCallCheck(this, Memory);

	    _get(Object.getPrototypeOf(Memory.prototype), 'constructor', this).call(this, options);

	    this.options = options;
	    this.data = {};
	  }

	  _inherits(Memory, _Adapter);

	  _createClass(Memory, [{
	    key: 'getConnection',
	    value: function getConnection() {
	      return this.data;
	    }
	  }, {
	    key: 'closeConnection',
	    value: function closeConnection() {
	      return new P.resolve(true);
	    }
	  }, {
	    key: 'dropTable',
	    value: function dropTable(collection) {
	      this.data = _lodash2['default'].omit(this.data, collection.table);
	      return new P.resolve(true);
	    }
	  }, {
	    key: 'createTable',
	    value: function createTable(collection) {
	      this.data[collection.table] = [];
	      return new P.resolve(true);
	    }
	  }, {
	    key: 'populateTable',
	    value: function populateTable(collection, rows) {
	      this.data[collection.table] = _lodash2['default'].clone(rows);
	      return new P.resolve(true);
	    }
	  }, {
	    key: 'query',
	    value: function query(collection) {
	      var _this = this;

	      var options = arguments[1] === undefined ? {} : arguments[1];

	      var opt = _lodash2['default'].merge(options, {
	        table: collection.table,
	        alias: collection.alias,
	        primaryKey: collection.primaryKey
	      });

	      var promise = new P(function (resolve, reject) {
	        return _this.findRecords(opt).then(function (results) {
	          return resolve(results);
	        })['catch'](function (error) {
	          return reject(error);
	        });
	      });

	      return _lodash2['default'].merge(promise, opt);
	    }
	  }, {
	    key: 'create',
	    value: function create(q, obj) {
	      obj[q.primaryKey] = _lodash2['default'].uniqueId();
	      this.data[q.table].push(obj);
	      return new P.resolve(obj);
	    }
	  }, {
	    key: 'read',
	    value: function read(q) {
	      return new P.resolve(q);
	    }
	  }, {
	    key: 'findRecords',
	    value: function findRecords(q) {
	      var _this2 = this;

	      return new P(function (resolve, reject) {
	        return _async2['default'].waterfall([function (cb) {
	          // all
	          var records = _this2.data[q.table];
	          return cb(null, records);
	        },
	        // ## Finders
	        //
	        // Examples below assumes you have an instance of Collection already:
	        //
	        // ```js
	        // var posts = new Posts();
	        // ```
	        //
	        // ### first
	        //
	        // Gives you the first matched result:
	        //
	        // ```js
	        // posts.find('first', {
	        //   conditions: {
	        //     id: 1
	        //   }
	        // }).then(function (post) {
	        //   // post is now an instance of Post model
	        //   var title = post.get('title');
	        // });
	        // ```
	        //
	        // ### all
	        //
	        // Gives you all matched results:
	        //
	        // ```js
	        // posts.find('all', {
	        //   conditions: {
	        //     published: true
	        //   }
	        // }).then(function (models) {
	        //   models.forEach(function (model) {
	        //     var title = model.get('title');
	        //   });
	        // });
	        // ```
	        // ### list
	        //
	        // Gives you a list of key/value paired object of matched results:
	        //
	        // ```js
	        // posts.find('list', {
	        //   fields: [
	        //     'id',
	        //     'title'
	        //   ]
	        // }).then(function (list) {
	        //   // list is now:
	        //   //
	        //   // {
	        //   //   1: 'Hello World',
	        //   //   2: 'About'
	        //   // }
	        // });
	        // ```
	        //
	        // ### count
	        //
	        // Gives you the total count of matched results:
	        //
	        // ```js
	        // posts.find('count').then(function (count) {
	        //   // count is an integer here
	        // });
	        // ```
	        //
	        function (records, cb) {
	          // conditions
	          if (!q.conditions) {
	            return cb(null, records);
	          }

	          var conditions = {};
	          _lodash2['default'].each(q.conditions, function (v, k) {
	            if (k.indexOf('.') > -1) {
	              k = k.split('.')[1];
	              conditions[k] = v;
	            }
	          });

	          var filtered = _lodash2['default'].filter(records, _lodash2['default'].matches(conditions));
	          return cb(null, filtered);
	        },
	        // ## Order
	        //
	        // For ordering results:
	        //
	        // ```js
	        // posts.find('all', {
	        //   order: {
	        //     'Post.title': 'asc'
	        //   }
	        // });
	        // ```
	        //
	        function (records, cb) {
	          // sort
	          if (!q.order) {
	            return cb(null, records);
	          }

	          var order = undefined;
	          if (_lodash2['default'].isObject(q.order)) {
	            order = [];
	            _lodash2['default'].each(q.order, function (v, k) {
	              order.push(_defineProperty({}, k, v));
	            });
	          } else {
	            order = q.order;
	          }

	          var sortFields = [];
	          var sortOrders = [];

	          order.forEach(function (o) {
	            var k = _lodash2['default'].keys(o)[0];
	            var v = _lodash2['default'].values(o)[0];

	            if (k.indexOf('.') > -1) {
	              k = k.split('.')[1];
	            }

	            sortFields.push(k);
	            sortOrders.push(v.toLowerCase() === 'asc' ? true : false);
	          });

	          var sorted = _lodash2['default'].sortByOrder(records, sortFields, sortOrders);
	          return cb(null, sorted);
	        },
	        // ## Limit (pagination)
	        //
	        // Limit number of results:
	        //
	        // ```js
	        // posts.find('all', {
	        //   limit: 10
	        // });
	        // ```
	        //
	        // If you want to go through paginated results:
	        //
	        // ```js
	        // posts.find('all', {
	        //   limit: 10,
	        //   page: 2
	        // });
	        // ```
	        //
	        function (records, cb) {
	          // limit
	          var page = q.page ? q.page : 1;
	          var limit = q.limit ? q.limit : null;

	          if (!limit) {
	            return cb(null, records);
	          }

	          var from = (page - 1) * limit;
	          var to = from + limit;
	          var limited = records.slice(from, to);
	          return cb(null, limited);
	        },
	        // ## Fields
	        //
	        // Select only a number of fields:
	        //
	        // ```js
	        // posts.find('all', {
	        //   fields: [
	        //     'id',
	        //     'title'
	        //   ]
	        // });
	        // ```
	        //
	        function (records, cb) {
	          // fields
	          if (!_lodash2['default'].isArray(q.fields)) {
	            return cb(null, records);
	          }

	          return cb(null, _lodash2['default'].map(records, function (record) {
	            return _lodash2['default'].pick(record, q.fields);
	          }));
	        }, function (records, cb) {
	          // count
	          if (q.count) {
	            return cb(null, [{
	              '*': records.length
	            }]);
	          }

	          return cb(null, records);
	        }], function (err, result) {
	          if (err) {
	            return reject(err);
	          }

	          return resolve(result);
	        });
	      });
	    }
	  }, {
	    key: 'update',
	    value: function update(q, obj) {
	      var _this3 = this;

	      return new P(function (resolve, reject) {
	        return q.then(function (records) {
	          if (records.length === 0) {
	            return reject(false);
	          }

	          var id = records[0][q.primaryKey];
	          var k = _lodash2['default'].findIndex(_this3.data[q.table], function (r) {
	            return r[q.primaryKey] === id;
	          });
	          _this3.data[q.table][k] = _lodash2['default'].merge(_this3.data[q.table][k], obj);
	          return resolve(_this3.data[q.table][k]);
	        });
	      });
	    }
	  }, {
	    key: 'delete',
	    value: function _delete(q) {
	      var _this4 = this;

	      return new P(function (resolve, reject) {
	        return q.then(function (records) {
	          if (records.length === 0) {
	            return reject(false);
	          }

	          var id = records[0][q.primaryKey];
	          var k = _lodash2['default'].findIndex(_this4.data[q.table], function (r) {
	            return r[q.primaryKey] === id;
	          });
	          _this4.data[q.table].splice(k, 1);
	          return resolve(1);
	        });
	      });
	    }
	  }]);

	  return Memory;
	})(Adapter);

	exports['default'] = Memory;
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

	(function() { module.exports = this["_"]; }());

/***/ },
/* 2 */
/***/ function(module, exports) {

	(function() { module.exports = this["firenze"]; }());

/***/ },
/* 3 */
/***/ function(module, exports) {

	(function() { module.exports = this["async"]; }());

/***/ }
/******/ ]);