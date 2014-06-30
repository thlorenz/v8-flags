var flags = require('..').flags;
console.log('inital use strict', flags.use_strict());

flags.use_strict(true);
console.log('set use strict to', flags.use_strict());

try {
  require('./use-strict-violator');
} catch(err) {
  console.error('FAIL:', err);
}

flags.use_strict(false);
console.log('set use strict to', flags.use_strict());

var violator = require('./use-strict-violator');
console.log(violator)
