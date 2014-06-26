'use strict';

module.exports = function () {
  %CollectGarbage('all');
  return %GetHeapUsage();
}
