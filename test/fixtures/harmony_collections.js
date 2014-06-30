var assert = require('assert')
  , m = new Map()
  , key = { a: 'Test' }
  , value = 'a test value'
  ;

m.set(key, value);

module.exports = m.get(key) === value;
