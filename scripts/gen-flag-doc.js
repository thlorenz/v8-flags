'use strict';

var fs = require('fs')
  , path = require('path')
  , meta = require('../').meta
  , doctoc = require('doctoc/lib/transform')

function implications(v) {
  var s = '';
  if (v.implications.length) s += '\n#### Implications\n\n- ' + v.implications.join('\n- ');
  if (v.negativeImplications.length) s += '\n#### Negative implications\n\n- ' + v.negativeImplications.join('\n- ');
  return s.length ? s : undefined;
}

function configurable(v) {
  return v.configurable ? undefined : '\n**NOTE:** This flag cannot be configured after the process started up!\n';
}

function docsFor(v) {
  return [
    ''
  , '### ' + v.name + ' `' + v.default + '` *{' + v.type + '}*'
  , ''
  , v.description
  , ''
  , configurable(v)
  , '- **default:** `' + v.default + '`'
  , '- **type:** `' + v.type + '`'
  , '- **readonly:** `' + v.readonly + '`'
  , implications(v)
  , v.comment
  ]
  .filter(function (x) { return x !== undefined })
}

function commentFromFile(name) {
  var filename = path.join(__dirname, 'comments', name + '.md');
  if (!fs.existsSync(filename)) return null;

  return fs.readFileSync(filename, 'utf8').trim(/\\n/g)
}

var lines = Object.keys(meta)
  .reduce(function (acc, k) {
    var v = meta[k];
    var comment = commentFromFile(v.name);
    v.comment = comment ? '\n' + comment : '';
    return acc.concat(docsFor(v));
  }, [])

var api = lines.join('\n')
var tocced = doctoc(api).data;

console.log(tocced)
