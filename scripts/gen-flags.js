'use strict';

var fs = require('fs')
  , path = require('path')
  , insp = require('util').inspect

function inspect(obj, depth) {
  console.error(require('util').inspect(obj, false, depth || 5, true));
}

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
      return Boolean(val)
    case 'int':
      return parseInt(val, 10);
    default:
      return val !== 'NULL' ? val.slice(1, -1) : null;
  }
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
    acc[matches[2]] = { type: type, default: defval, description: matches[4] };

    return acc;
  }, {});

var props = Object.keys(flags)
  .reduce(function (acc, k) {
    var val = flags[k];
    return acc.concat([
        '  /**'
      , '   * ' + val.description
      , '   * Default: `' + val.default + '`'
      , '   * '
      , '   * @name ' + k 
      , '   * @returns {' + val.type + '}'
      , '   */'
      , '  ' + k + ': {  '
      , '  ' + insp(val).slice(2).split('\n').map(function (x) { return '  ' + x }).join('\n') + ','
      , ''
      ])
  }, [])

var code = [ 
    '\'use strict\';'
  , ''
  , 'module.exports = {' 
  , ''
  ].concat(props)
  .concat('}')
  .join('\n')

//console.log(code)  
fs.writeFileSync(path.join(__dirname, '..', 'flags.js'), code, 'utf8');
