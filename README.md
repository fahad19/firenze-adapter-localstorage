# firenze-adapter-localstorage

[![Build Status](https://secure.travis-ci.org/fahad19/firenze-adapter-localstorage.png?branch=master)](http://travis-ci.org/fahad19/firenze-adapter-localstorage) [![npm](https://img.shields.io/npm/v/firenze-adapter-localstorage.svg)](https://www.npmjs.com/package/firenze-adapter-localstorage) [![Join the chat at https://gitter.im/fahad19/firenze](https://img.shields.io/badge/gitter-join_chat_%E2%86%92-1dce73.svg)](https://gitter.im/fahad19/firenze)

> localStorage adapter for [firenze.js](https://github.com/fahad19/firenze) ORM

Install it with [npm](https://npmjs.com) or [Bower](http://bower.io):

```
$ npm install --save firenze-adapter-localstorage

$ bower install --save firenze-adapter-localstorage
```

## Usage

### CommonJS

Useful if you have a CommonJS build set up, like Browserify or Webpack.

With [npm](https://npmjs.com):

```
$ npm install --save firenze-adapter-localstorage
```

Now you can require it as follows:

```js
var f = require('firenze');
var Database = f.Database;
var LocalStorageAdapter = require('firenze-adapter-localstorage');

var db = new Database({
  adapter: LocalStorageAdapter,
  key: 'my_localstorage_key' // optional, defaults to `firenze_data`
});
```

### Bower

Or [Bower](http://bower.io):

```
$ bower installl --save firenze-adapter-localstorage
```

Can be loaded in your HTML page as follows:

```js
<script src="bower_components/lodash/lodash.min.js"></script>
<script src="bower_components/async/lib/async.js"></script>
<script src="bower_components/bluebird/js/browser/bluebird.min.js"></script>
<script src="bower_components/validator-js/validator.min.js"></script>

<script src="bower_components/firenze/dist/firenze.min.js"></script>
<script src="bower_components/firenze-adapter-localstorage/dist/firenze-adapter-localstorage.min.js"></script>

<script>
// LocalStorage adapter is availble in `firenze.LocalStorageAdapter`
var db = new firenze.Database({
  adapter: firenze.LocalStorageAdapter
});
</script>
```

# Testing

Can be run via npm:

```
$ npm test
```

# License

MIT © [Fahad Ibnay Heylaal](http://fahad19.com)
