/* global describe, before, after, it */

var _ = require('lodash');
var should = require('should'); //eslint-disable-line
var lib = require('firenze');
var config = require('../config');

describe('Collection', function () {
  before(function (done) {
    this.db = new lib.Database(config);
    this.Posts = require('../collections/Posts')(this.db);
    this.postsData = require('../fixtures/posts');

    this.db.getAdapter().loadAllFixtures([
      {
        collection: new this.Posts(),
        rows: this.postsData
      }
    ]).then(function () {
      done();
    }).catch(function (error) {
      throw error;
    });
  });

  after(function (done) {
    this.db.close().then(done);
  });

  it('should find all results', function (done) {
    var posts = new this.Posts();
    posts.find('all').then(function (models) {
      models.should.be.instanceOf(Array);
      models.should.have.lengthOf(3);

      var firstPost = models[0];
      firstPost.should.have.property('attributes');
      firstPost.attributes.title.should.be.exactly('Hello World');

      done();
    }).catch(function (error) {
      throw error;
    });
  });

  it('should find all results with ordering', function (done) {
    var posts = new this.Posts();
    posts.find('all', {
      order: {
        title: 'asc'
      }
    }).then(function (models) {
      models.should.be.instanceOf(Array);

      var firstPost = models[0];
      firstPost.should.have.property('attributes');
      firstPost.get('title').should.be.exactly('About');

      done();
    }).catch(function (error) {
      throw error;
    });
  });

  it('should find all results with pagination', function (done) {
    var posts = new this.Posts();
    posts.find('all', {
      order: {
        title: 'asc'
      },
      limit: 2,
      page: 2
    }).then(function (models) {
      models.should.be.instanceOf(Array);

      var firstPost = models[0];
      firstPost.should.have.property('attributes');
      firstPost.get('title').should.be.exactly('Hello World');

      done();
    }).catch(function (error) {
      throw error;
    });
  });

  it('should find single result', function (done) {
    var posts = new this.Posts();
    posts.find('first', {
      conditions: {
        id: 1
      }
    }).then(function (post) {
      post.get('title').should.equal('Hello World');
      done();
    }).catch(function (error) {
      throw error;
    });
  });

  it('should find single result with selected fields', function (done) {
    var posts = new this.Posts();
    posts.find('first', {
      fields: [
        'id',
        'title'
      ],
      conditions: {
        id: 1
      }
    }).then(function (post) {
      _.keys(post.attributes).should.eql([
        'id',
        'title'
      ]);
      done();
    }).catch(function (error) {
      throw error;
    });
  });

  it('should find single result with aliased conditions', function (done) {
    var posts = new this.Posts();
    posts.find('first', {
      conditions: {
        'Post.id': 2
      }
    }).then(function (post) {
      post.get('title').should.equal('About');
      done();
    }).catch(function (error) {
      throw error;
    });
  });

  it('should find list', function (done) {
    var posts = new this.Posts();
    posts.find('list').then(function (list) {
      list.should.eql({
        1: 'Hello World',
        2: 'About',
        3: 'Contact'
      });
      done();
    }).catch(function (error) {
      throw error;
    });
  });

  it('should find count of results', function (done) {
    var posts = new this.Posts();
    posts.find('count').then(function (count) {
      count.should.equal(3);
      done();
    }).catch(function(error) {
      throw error;
    });
  });
});
