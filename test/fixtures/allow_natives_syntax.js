'use strict';

module.exports = function () {
  /*jshint ignore: start */
  var before = %GetHeapUsage();
  %CollectGarbage('all');
  var after = %GetHeapUsage();
  return { before: before, after: after };
  /*jshint ignore: end */
}
