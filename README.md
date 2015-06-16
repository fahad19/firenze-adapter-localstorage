# firenze-adapter-memory

[![Build Status](https://secure.travis-ci.org/fahad19/firenze-adapter-memory.png?branch=master)](http://travis-ci.org/fahad19/firenze-adapter-memory) [![Coverage Status](https://coveralls.io/repos/fahad19/firenze-adapter-memory/badge.svg?branch=master)](https://coveralls.io/r/fahad19/firenze-adapter-memory?branch=master) [![npm](https://img.shields.io/npm/v/firenze-adapter-memory.svg)](https://www.npmjs.com/package/firenze-adapter-memory)

In-memory database adapter for [firenze.js](https://github.com/fahad19/firenze)

Install it with [npm](https://npmjs.com) or [Bower](http://bower.io):

```
$ npm install --save firenze-adapter-memory

$ bower install --save firenze-adapter-memory
```

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
# Contents

  - [Usage](#usage)
    - [Node.js](#nodejs)
    - [Browser](#browser)
  - [Finders](#finders)
    - [first](#first)
    - [all](#all)
    - [list](#list)
    - [count](#count)
  - [Order](#order)
  - [Limit (pagination)](#limit-pagination)
  - [Fields](#fields)
- [Testing](#testing)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<!--docume:src/index.js-->
## Usage

### Node.js

With [npm](https://npmjs.com):

```
$ npm install --save firenze-adapter-memory
```

Now you can require it as follows:

```js
var f = require('firenze');
var Database = f.Database;
var MemoryAdapter = require('firenze-adapter-memory');

var db = new Database({
  adapter: MemoryAdapter
});
```

### Browser


Or [Bower](http://bower.io):

```
$ bower installl --save firenze-adapter-memory
```

Can be loaded in your HTML page as follows:

```js
<script src="bower_components/lodash/lodash.min.js"></script>
<script src="bower_components/async/lib/async.js"></script>
<script src="bower_components/bluebird/js/browser/bluebird.min.js"></script>
<script src="bower_components/validator-js/validator.min.js"></script>

<script src="bower_components/firenze/dist/firenze.min.js"></script>
<script src="bower_components/firenze-adapter-memory/dist/firenze-adapter-memory.min.js"></script>

<script>
// Memory adapter is availble in `firenze.MemoryAdapter`
var db = new firenze.Database({
  adapter: firenze.MemoryAdapter
});
</script>
```

## Finders

Examples below assumes you have an instance of Collection already:

```js
var posts = new Posts();
```

### first

Gives you the first matched result:

```js
posts.find('first', {
  conditions: {
    id: 1
  }
}).then(function (post) {
  // post is now an instance of Post model
  var title = post.get('title');
});
```

### all

Gives you all matched results:

```js
posts.find('all', {
  conditions: {
    published: true
  }
}).then(function (models) {
  models.forEach(function (model) {
    var title = model.get('title');
  });
});
```
### list

Gives you a list of key/value paired object of matched results:

```js
posts.find('list', {
  fields: [
    'id',
    'title'
  ]
}).then(function (list) {
  // list is now:
  //
  // {
  //   1: 'Hello World',
  //   2: 'About'
  // }
});
```

### count

Gives you the total count of matched results:

```js
posts.find('count').then(function (count) {
  // count is an integer here
});
```

## Order

For ordering results:

```js
posts.find('all', {
  order: {
    'Post.title': 'asc'
  }
});
```

## Limit (pagination)

Limit number of results:

```js
posts.find('all', {
  limit: 10
});
```

If you want to go through paginated results:

```js
posts.find('all', {
  limit: 10,
  page: 2
});
```

## Fields

Select only a number of fields:

```js
posts.find('all', {
  fields: [
    'id',
    'title'
  ]
});
```

<!--/docume:src/index.js-->

# Testing

Tests are written with [mocha](http://mochajs.org/), and can be run via npm:

```
$ npm test
```

# License

MIT © [Fahad Ibnay Heylaal](http://fahad19.com)
