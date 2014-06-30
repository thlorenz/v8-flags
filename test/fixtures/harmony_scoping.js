'use strict';
var assert = require('assert');

{
  let a = 2;
}
let b = 1;

module.exports = { a_is_undefined: typeof a === 'undefined', b_is_defined: b === 1 }
