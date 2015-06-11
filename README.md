# firenze-adapter-memory

[![Build Status](https://secure.travis-ci.org/fahad19/firenze-adapter-memory.png?branch=master)](http://travis-ci.org/fahad19/firenze-adapter-memory)

In-memory database adapter for [firenze.js](https://github.com/fahad19/firenze)

Install it with npm:

```
$ npm install --save firenze-adapter-memory
```

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
# Contents

  - [Install](#install)
  - [Usage](#usage)
- [Testing](#testing)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<!--docume:src/index.js-->
## Install

```
$ npm install --save firenze-adapter-mysql
```

## Usage

You aren't expected to deal with the Adapter directly. Just pass the adapter to Database config when you create an instance.

```js
var f = require('firenze');
var Database = f.Database;
var MemoeyAdapter = require('firenze-adapter-memory');

var db = new Database({
  adapter: MemoryAdapter
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
