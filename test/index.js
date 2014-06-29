'use strict';
/*jshint asi: true */

var test = require('tap').test
var semver = require('semver')
var flags = require('../').flags;

function inspect(obj, depth) {
  console.error(require('util').inspect(obj, false, depth || 5, true));
}

function refresh(p) {
  delete require.cache[require.resolve(p)];
  return require(p);
}

function exists(t, flag) {
  if (typeof flags[flag] !== 'function') {
    t.pass(flag + ' does not exist in this version of v8')
    return false;
  }
  return true;
}

function unverified(flag, enabled) {
  test('\n' + flag + ' - NOT VERIFIED', function (t) {
    if (!exists(t, flag)) return t.end();
    if (enabled) {
      t.ok(flags[flag](), 'enabled by default')
      t.doesNotThrow(flags['set_' + flag].bind(flags, false), 'can be disabled')
    } else {
      t.ok(!flags[flag](), 'disabled by default')
      t.doesNotThrow(flags['set_' + flag].bind(flags, true), 'can be enabled')
    }
    t.end()
  })
}

inspect(process.versions)

test('\nexpose_gc -- NOT CONFIGURABLE', function (t) {
  var p = './fixtures/expose_gc'
  var gc = require(p);

  t.ok(!flags.expose_gc(), 'not enabled by default')
  t.ok(!gc(), 'not exposed by default')

  flags.set_expose_gc(true)
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

  flags.set_allow_natives_syntax(true)
  
  var heap = require(p)();
  t.ok(heap.before > 0 && heap.after < heap.before, 'enabling allows native syntax to get heap and trigger garbage collection')
  t.end()
})

unverified('always_compact', false)

test('\nalways_opt', function (t) {
  if (!exists(t, 'always_opt')) return t.end();

  flags.allow_natives_syntax(true)
  t.ok(!flags.always_opt(), 'not enabled by default')

  var p = './fixtures/always_opt';
  var optimizations = require(p)();
  t.equal(optimizations, 0, 'does not optimize sample function on first try')
  optimizations = refresh(p)();
  t.equal(optimizations, 0, 'does not optimize sample function on second try')
  optimizations = refresh(p)();
  t.equal(optimizations, 0, 'does not optimize sample function on third try')

  flags.set_always_opt(true)
  optimizations = refresh(p)();
  t.equal(optimizations, 1, 'optimizes function once always_opt is enabled')
  t.end()
})

unverified('always_osr', false)
unverified('cache_prototype_transitions', true)
unverified('check_elimination', true)
unverified('code_comments', false)
unverified('compilation_cache', true)
unverified('concurrent_sweeping', false)
unverified('crankshaft', true)
unverified('dead_code_elimination', true)
unverified('debug_compile_events', true)
unverified('debug_sim', false)

