'use strict';

var fs = require('fs')
  , path = require('path')
  , meta = require('../').meta
  , doctoc = require('doctoc/lib/transform')

function docsFor(v) {
  return [
    ''
  , '### ' + v.name + ' *{' + v.type + '}*'
  , ''
  , v.description
  , ''
  , '- **default:** `' + v.default + '`'
  , '- **type:** `' + v.type + '`'
  , '- **readonly:** `' + v.readonly + '`'
  , v.comment
  ]
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
