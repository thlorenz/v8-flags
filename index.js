'use strict';

var v8_flags = require('./build/Release/v8_flags')
  , v8_meta  = require('./build/Release/v8_flags_meta')
  , v8_flag_list = require('./build/Release/v8_flag_list')

// The following flags aren't configurable after startup since they activate (or don't) during the bootstrapping process
// https://github.com/v8/v8/blob/146bf7bec2518cf664994a658dfc4a72a9c6bb10/src/bootstrapper.cc#L86-L97
var notConfigurable = [
    'expose_gc'
  , 'expose_gc_as'
  , 'expose_natives_as'
  , 'debugger'
  , 'debugger_agent'
  , 'debugger_port'
  , 'expose_debug_as'
  , 'harmony_proxies'
  , 'harmony_collections'
]

/**
 * Exposes methods to get and set v8 flags.
 *
 * #### Example
 *
 * ```js
 * var flags = require('v8-flags').flags;
 * console.log(flags.use_strict()); // false
 * flags.use_strict(true)
 * console.log(flags.use_strict()); // true
 * ```
 * 
 * @name flags
 * @function
 */
var flags = exports.flags = v8_flags;

//
/**
 * The meta data for the flags.
 *
 * It is initialized on startup from the definitions found in C++ land.
 * 
 * @name meta
 * @function
 * @return {Array.<Object>} array of objects with the folloing properties each
 *
 *  - **name:** flag name
 *  - **default:** default setting of the flag
 *  - **type:** type of the flag
 *  - **description:** the description of the flag
 *  - **readonly:** set `true` if flag cannot be set
 *  - **configurable:** set `true` if setting the flag at runtime has the desired effect
 *  - **implications:** flags that will be set to `true` whenever this flag is `true` and `enforceFlagImplications` is called
 *  - **negativeImplications:** flags that will be set to `false` whenever this flag is `false` and `enforceFlagImplications` is called
 */
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
        , configurable         : !~notConfigurable.indexOf(k)
      }
    });
    return acc;
  }, {});

/**
 * Lists all flags along with their **current** value.
 * 
 * @name listFlags
 * @function
 * @return {Object} key/value pair for each flag
 */
exports.listFlags  = function () {
  return Object.keys(flags)
    .reduce(function (acc, k) {
      acc[k] = flags[k]();
      return acc;
    }, {})
}

/**
 * Prints flag help to the console.
 * 
 * @name printHelp
 * @function
 */
exports.printHelp = v8_flag_list.printHelp;

/**
 * Resets all flags to their default values
 * 
 * @name resetAllFlags 
 * @function
 */
exports.resetAllFlags = v8_flag_list.resetAllFlags;


/**
 * Enforces all flag implications.
 * 
 * @name enforceFlagImplications
 * @function
 */
exports.enforceFlagImplications = v8_flag_list.enforceFlagImplications;
