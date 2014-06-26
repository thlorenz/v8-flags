'use strict';

function toopt(a, b) {
  return a + b;  
}

exports = module.exports = function () {
  exports.result = toopt(1, 2);
  return %GetOptimizationCount(toopt);
}
