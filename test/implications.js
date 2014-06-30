'use strict';

var test = require('tap').test
var v8Flags = require('../')
  , flags = v8Flags.flags
  , enforceImplications = v8Flags.enforceFlagImplications


test('\nwhen setting harmony all implied harmony flags get set ONLY after enforcing flag implications, and never when unsetting', function (t) {
  t.on('end', function () {
    flags.harmony(false)    
    flags.harmony_scoping(false)
    flags.harmony_modules(false)
    flags.harmony_proxies(false)
    flags.harmony_collections(false)
  })

  flags.harmony(true)    
  t.ok(!flags.harmony_scoping(), 'harmony_scoping off')
  t.ok(!flags.harmony_modules(), 'harmony_modules off')
  t.ok(!flags.harmony_proxies(), 'harmony_proxies off')
  t.ok(!flags.harmony_collections(), 'harmony_collections off')

  enforceImplications()

  t.ok(flags.harmony_scoping(), 'harmony_scoping on after enforcement')
  t.ok(flags.harmony_modules(), 'harmony_modules on after enforcement')
  t.ok(flags.harmony_proxies(), 'harmony_proxies on after enforcement')
  t.ok(flags.harmony_collections(), 'harmony_collections on after enforcement')

  flags.harmony(false)    
  enforceImplications()

  t.ok(flags.harmony_scoping(), 'harmony_scoping still on')
  t.ok(flags.harmony_modules(), 'harmony_modules still on')
  t.ok(flags.harmony_proxies(), 'harmony_proxies still on')
  t.ok(flags.harmony_collections(), 'harmony_collections still on')

  t.end()
})
