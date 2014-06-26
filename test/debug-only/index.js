'use strict';
/*jshint asi: true */

var test = require('tap').test
var semver = require('semver')
var flags = require('../../');
// ignore last digit in versions like 3.14.5.9
var v8 = process.versions.v8.split('.').slice(0, 3).join('.')

function inspect(obj, depth) {
  console.error(require('util').inspect(obj, false, depth || 5, true));
}

function refresh(p) {
  delete require.cache[require.resolve(p)];
  return require(p);
}

test('\ncode_stats', function (t) {
  flags.allow_natives_syntax(true)

  var p = '../fixtures/code_stats'
  var code_stats = require(p);
  t.ok(!flags.code_stats(), 'not enabled by default')
  code_stats()

  flags.code_stats(true)
  code_stats()
  t.end()
  
})
