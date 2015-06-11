/* global describe, before, after, it */

var _ = require('lodash');
var should = require('should'); //eslint-disable-line
var lib = require('firenze');
var config = require('../config');

describe('Collection', function () {
  before(function (done) {
    this.db = new lib.Database(config);
    this.Posts = require('../collections/Posts')(this.db);
    this.Post = require('../models/Post')(this.db);
    this.postsData = require('../fixtures/posts');

    this.db.getAdapter().loadAllFixtures([
      {
        model: new this.Post(),
        rows: this.postsData
      }
    ]).then(function () {
      done();
    }).catch(function (error) {
      throw error;
    });
  });

  after(function (done) {
    this.db.close(done);
  });
});
