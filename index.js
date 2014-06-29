'use strict';

var v8_flags = require('./build/Release/v8_flags')
  , v8_meta  = require('./build/Release/v8_flags_meta');

var flags = exports.flags = v8_flags;

// constant meta data is initialized on startup from the definitions found in C++ land
exports.meta = Object.keys(v8_meta)
  .filter(function (k) { 
    return k.slice(0, 13) !== 'implications_' 
        && k.slice(0, 17) !== 'neg_implications_' 
  })
  .reduce(function (acc, k) {
    var implications, neg_implications;
    v8_meta['implications_' + k](function () {
      implications = [].slice.call(arguments);  
    })
    v8_meta['neg_implications_' + k](function () {
      neg_implications = [].slice.call(arguments);  
    })
    v8_meta[k](function () {
      acc[k] = {
          name                 : arguments[0]
        , default              : arguments[1]
        , description          : arguments[2]
        , type                 : arguments[3]
        , readonly             : arguments[4]
        , implications         : implications
        , negativeImplications : neg_implications
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
