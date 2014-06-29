'use strict';

var listFlags = require('../').listFlags;

function inspect(obj, depth) {
  console.error(require('util').inspect(obj, false, depth || 5, true));
}

inspect(listFlags());
