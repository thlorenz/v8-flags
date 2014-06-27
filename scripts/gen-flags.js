'use strict';

var fs = require('fs')
  , path = require('path')
  , insp = require('util').inspect

function inspect(obj, depth) {
  console.error(require('util').inspect(obj, false, depth || 5, true));
}

// The following flags aren't configurable after startup since they activate (or don't) during the bootstrapping process
// https://github.com/v8/v8/blob/146bf7bec2518cf664994a658dfc4a72a9c6bb10/src/bootstrapper.cc#L86-L97
var notConfigurable = [
    'expose_gc'
  , 'expose_gc_as'
  , 'debugger'
  , 'debugger_agent'
  , 'debugger_port'
]

var defsFile = path.join(__dirname, '..', 'v8', 'flag-definitions.h');
var defsSrc = fs.readFileSync(defsFile, 'utf8');
var allDefs = defsSrc.split('\n')
  , defs = []
  , i;

for (i = 0; i < allDefs.length; i++) {
  if ((/^ *\/\/ *Disassembler only flags/).test(allDefs[i])) break;
  defs.push(allDefs[i]);
}

var regex = /^ *DEFINE_(\w+)\(([^,]+), *([^,]+), *"([^"]+)"\)/;

function getDefault(type, val) {
  switch(type) {
    case 'bool':
      return JSON.parse(val)
    case 'int':
      return parseInt(val, 10);
    default:
      return val !== 'NULL' ? val.slice(1, -1) : null;
  }
}

function commentFromFile(name) {
  var filename = path.join(__dirname, 'comments', name + '.md');
  if (!fs.existsSync(filename)) return null;

  return fs.readFileSync(filename, 'utf8').trim(/\\n/g)
}

var flags = defs
  .reduce(function (acc, line, idx) {
    if (!/^ *DEFINE/.test(line)) return acc;
    var i = 0;
    var s = line;
    var matches = s.match(regex);

    while (!matches) {
      if ((idx + i) > defs.length) return acc;
      s += line[idx + i]; i++;
      matches = s.match(regex);
    }

    var type = matches[1];
    var defval = getDefault(type, matches[3]);
    var name =  matches[2];
    var comment = commentFromFile(name);
    var configurable = !~notConfigurable.indexOf(name);
    acc[name] = { 
        type: type
      , default: defval
      , description: matches[4] 
      , configurable: configurable
      , comment: comment
    };

    return acc;
  }, {});

var defaultFlags = Object.keys(flags)
  .reduce(function (acc, k) {
    var val = flags[k];
    return acc.concat([
        '  /**'
      , '   * ' + val.description
      , '   * Default: `' + val.default + '`'
      , '   * '
      , '   * @name ' + k 
      , '   * @private' 
      , '   * @returns {' + val.type + '}'
      , '   */'
      , '  ' + k + ': {  '
      , '  ' + insp(val).slice(2).split('\n').map(function (x) { return '  ' + x }).join('\n') + ','
      , ''
      ])
  }, [])

var defaultFlagsCode = [ 
    '\'use strict\';'
  , ''
  , 'module.exports = {' 
  , ''
  ].concat(defaultFlags)
  .concat('}')
  .join('\n')

var api = Object.keys(flags)
  .reduce(function (acc, k) {
    var val = flags[k];
    var arg = k === 'debugger' ? 'debugr' : k;
    var set;
    switch(val.type) {
      case 'bool':
        set = arg + ' ? \'--' + k + '\' : \'--no' + k + '\''
        break;
      default:
        set = '\'--' + k + '=\' + ' + arg;
    }

    var configMsg = val.configurable ? null : '\n' + ' * **NOT CONFIGURABLE** ' + '\n *';
    acc = acc.concat([
        '/**'
      , ' * ' + val.description
      , ' * '
      , ' * *default*: `' + val.default + '`'
    ])

    if (configMsg) acc.push(configMsg);
    if (val.comment) acc.push(' *\n * ' + val.comment.split('\n').join('\n * '))

    acc = acc.concat([
        ' * '
      , ' * @name ' + k 
      , ' * @param {' + val.type + '=} ' + k + ' when supplied it sets ' + k
      , ' * @function' 
      , ' * @returns {' + val.type + '} the current value of ' + k 
      , ' */'
      , 'proto.' + k + ' = function (' + arg + ') {  '
      , '  if (typeof ' + arg + ' !== \'undefined\')  {'
      , '    this._' + k + ' = ' + arg + ';'
      , '    v8_flags.set(' + set + ');'
      , '  }'
      , '  return this._' + k + ';'
      , '}'
      , ''
    ])

    return acc;
  }, [])

var apiCode = [
    '\'use strict\';'
  , ''
  , 'var v8_flags = require(\'./build/Release/v8_flags\');'
  , 'var defaultFlags = require(\'./default-flags\');'
  , ''
  , 'module.exports = new Flags();' 
  , ''
  , 'function Flags() {'
  , '  if (!(this instanceof Flags)) return new Flags();'
  , '  var self = this;'
  , '  Object.keys(defaultFlags).forEach(function (k) { self[\'_\' + k] = defaultFlags[k].default });'
  , '}'
  , ''
  , 'var proto = Flags.prototype;'
  , ''
  ].concat(api)
  .join('\n')

// TODO: try to use %SetFlags if we are in the browser and thus don't have v8_flags compiles (in the hopes that --allow-natives-syntax was passed)
// TODO: parse out implication and neg. implication and add that info to comments
// TODO: get smart about command line flags, i.e. query process.argv for v8 flags or better get to actual v8 arguments
// TODO: separate out debug-only flags like code_stats between
    //
    // Debug only flags
    //
// and 
    //
    // Logging and profiling flags
    //
// since they only work when compiled with debug flag?
// TODO: make singleton (1t)

fs.writeFileSync(path.join(__dirname, '..', 'default-flags.js'), defaultFlagsCode, 'utf8');
fs.writeFileSync(path.join(__dirname, '..', 'index.js'), apiCode, 'utf8');
