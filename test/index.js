'use strict';
/*jshint asi: true */

var test = require('tap').test
var flags = require('../')();

function inspect(obj, depth) {
  console.error(require('util').inspect(obj, false, depth || 5, true));
}

function refresh(p) {
  delete require.cache[require.resolve(p)];
  return require(p);
}

test('\nexpose_gc -- NOT CONFIGURABLE', function (t) {
  var p = './fixtures/expose_gc'
  var gc = require(p);

  t.ok(!flags.expose_gc(), 'not enabled by default')
  t.ok(!gc(), 'not exposed by default')

  flags.expose_gc(true)
  t.ok(!refresh(p)(), 'enabling does NOT expose it')
  t.end()
})

test('\nallow_natives_syntax', function (t) {
  var p = './fixtures/allow_natives_syntax';

  t.ok(!flags.allow_natives_syntax(), 'not enabled by default')
  t.throws(require.bind(null, p), { name: 'SyntaxError', message: 'Unexpected token %' }, 'and are not allowed')

  flags.allow_natives_syntax(true)
  
  var heap = require(p)();
  t.ok(heap.before > 0 && heap.after < heap.before, 'enabling allows native syntax to get heap and trigger garbage collection')
  t.end()
})
