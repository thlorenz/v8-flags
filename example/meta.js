'use strict';

var meta = require('../').meta;

function inspect(obj, depth) {
  console.error(require('util').inspect(obj, false, depth || 5, true));
}

inspect(meta);
