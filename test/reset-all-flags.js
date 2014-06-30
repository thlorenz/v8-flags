'use strict';

var test = require('tap').test
var v8Flags = require('../')
  , flags = v8Flags.flags
  , resetAllFlags= v8Flags.resetAllFlags

test('\nresetting all flags resets only `false` by default flags to `false`', function (t) {
  t.on('end', resetAllFlags)   

  flags.use_strict(true)
  flags.trap_on_deopt(true)

  t.ok(flags.use_strict(), 'use_strict on')
  t.ok(flags.trap_on_deopt(), 'trap_on_deopt on')
  t.ok(flags.crankshaft(), 'crankshaft on by default')

  resetAllFlags()

  t.ok(!flags.use_strict(), 'use_strict off')
  t.ok(!flags.trap_on_deopt(), 'trap_on_deopt off')
  t.ok(flags.crankshaft(), 'crankshaft on by default')

  t.end()
})
