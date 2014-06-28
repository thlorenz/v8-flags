'use strict';

exports = module.exports = require('./build/Release/v8_flags');
exports.list = function () {
  return Object.keys(exports)
    .filter(function (k) { return k !== 'list' && k.slice(0,4) !== 'set_' })
    .reduce(function (acc, k) {
      acc[k] = exports[k]();
      return acc;
    }, {})
}
