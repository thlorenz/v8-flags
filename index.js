'use strict';

var v8_flags = require('./build/Release/v8_flags')
  , v8_meta  = require('./build/Release/v8_flags_meta');

var flags = exports.flags = v8_flags;

// constant meta data is initialized on startup from the definitions found in C++ land
exports.meta = Object.keys(v8_meta)
  .reduce(function (acc, k) {
    v8_meta[k](function () {
      acc[k] = {
          name: arguments[0]
        , default: arguments[1]
        , description: arguments[2]
        , type: arguments[3]
        , readonly: arguments[4]
      }
    });
    return acc;
  }, {});

exports.listFlags  = function () {
  return Object.keys(flags)
    .filter(function (k) { return k.slice(0, 4) !== 'set_' })
    .reduce(function (acc, k) {
      acc[k] = flags[k]();
      return acc;
    }, {})
}
