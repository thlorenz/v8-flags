'use strict';
/*jshint asi: true */

var test = require('tap').test
var semver = require('semver')
var flags = require('../').flags;
// ignore last digit in versions like 3.14.5.9
var v8 = process.versions.v8.split('.').slice(0, 3).join('.')

function inspect(obj, depth) {
  console.error(require('util').inspect(obj, false, depth || 5, true));
}

function insp(obj, depth) {
  return require('util').inspect(obj, false, depth || 5, true);
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

function throwsInitially(t, p, name, message, debug) {
  try {
    var res = require( p)
    if (debug) inspect(res);
    t.fail('requiring initially should have thrown')
  } catch (err) {
    if (debug) return inspect(err);
    t.equal(err.name, name, 'throws ' + name)
    t.similar(err.message, new RegExp(message), message)
  }
}


function unverified(flag, enabled) {
  test('\n' + flag + ' - NOT VERIFIED', function (t) {
    if (!exists(t, flag)) return t.end();
    t.on('end', flags[flag].bind(flags, enabled))
    if (enabled) {
      t.ok(flags[flag](), 'enabled by default')
      t.doesNotThrow(flags[flag].bind(flags, false), 'can be disabled')
    } else {
      t.ok(!flags[flag](), 'disabled by default')
      t.doesNotThrow(flags[flag].bind(flags, true), 'can be enabled')
    }
    t.end()
  })
}

test('\nversions ' + insp(process.versions), function (t) {
  t.end()
})

test('\nlist flags ' + insp(require('../').listFlags()), function (t) {
  t.end()
})

test('\nflags meta ' + insp(require('../').meta), function (t) {
  t.end()
})

test('\nversions ' + insp(process.versions), function (t) {
  t.end()
})

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

  throwsInitially(t, p, 'SyntaxError', 'Unexpected token %')

  flags.allow_natives_syntax(true)
  
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

  flags.always_opt(true)
  optimizations = refresh(p)();
  if (semver.gte(v8, '3.14.5')) 
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

test('\nharmony_scoping', function (t) {
  t.on('end', flags.harmony_scoping.bind(flags, false))

  var p = './fixtures/harmony_scoping'
  t.ok(!flags.harmony_scoping(), 'not enabled by default')
  throwsInitially(t, p, 'SyntaxError', 'Unexpected strict mode reserved word')

  flags.harmony_scoping(true)
  var e = require(p)
  t.ok(e.a_is_undefined, 'block scoped var is not defined outside its scope')
  t.ok(e.b_is_defined, 'script level scoped var is defined')
  t.end()
})

test('\nharmony_typeof', function (t) {
  t.on('end', flags.harmony_typeof.bind(flags, false))

  var p = './fixtures/harmony_typeof'
  t.ok(!flags.harmony_typeof(), 'not enabled by default')
  t.ok(require(p), 'works initially')
  t.end()
})

// not configurable because part of the bootstrapping process
unverified('harmony_proxies', false)
unverified('harmony_collections', false)

// imports don't work since node wraps file contents on require
unverified('harmony_modules', false)
