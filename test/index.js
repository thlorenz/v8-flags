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

test('\nexpose gc', function (t) {
  var gc = require('./fixtures/gc');

  t.ok(!flags.expose_gc(), 'not on by default')
  t.ok(!gc(), 'not exposed by default')

  t.ok(flags.expose_gc(true), 'turning on works')
  t.ok(!refresh('./fixtures/gc')(), 'BUT does not expose it')
  t.end();
})

test('\nruntime functions', function (t) {
  var p = './fixtures/runtime-functions';
  t.plan(4)

  t.ok(!flags.allow_natives_syntax(), 'not on by default')
  try {
   require(p)
  } catch (e) {
    t.pass('and are not allowed')
  }

  t.ok(flags.allow_natives_syntax(true), 'turning on works')
  
  var heap = require(p)();
  t.ok(heap > 0, 'and allows native syntax')
})
