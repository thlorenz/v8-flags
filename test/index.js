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

  try {
    require( p)
    t.fail('requiring without natives syntax allowed should have thrown')
  } catch (err) {
    t.equal(err.name, 'SyntaxError', 'throws SyntaxError')
    t.similar(err.message, /Unexpected token %/, 'Unexpected token %')
  }

  flags.allow_natives_syntax(true)
  
  var heap = require(p)();
  t.ok(heap.before > 0 && heap.after < heap.before, 'enabling allows native syntax to get heap and trigger garbage collection')
  t.end()
})

test('\nalways_compact - NOT VERIFIED', function (t) {
  t.ok(!flags.always_compact(), 'not enabled by default')
  flags.always_compact(true)
  t.end()
})

test('\nalways_opt', function (t) {
  flags.allow_natives_syntax(true)
  t.ok(!flags.always_opt(), 'not enabled by default')

  var p = './fixtures/always_opt';
  var optimizations = require(p)();
  t.equal(optimizations, 0, 'does not optimize sample function on first try')
  optimizations = refresh(p)();
  t.equal(optimizations, 0, 'does not optimize sample function on second try')
  optimizations = refresh(p)();
  t.equal(optimizations, 0, 'does not optimize sample function on third try')

  flags.always_opt(true)
  optimizations = refresh(p)();
  t.equal(optimizations, 1, 'optimizes function once always_opt is enabled')
  t.end()
})
