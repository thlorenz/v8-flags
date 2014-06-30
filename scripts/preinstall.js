'use strict';

var path = require('path')
  , fs = require('fs')
  , cp = require('child_process')

var defineRe = /^ *DEFINE_(\w+)\(([^,]+), *([^,]+), *("[^"]+" *)+\)/;
var defineArgsRe = /^ *DEFINE_args\(([^,"]+, *){1,2} *".+"\)/;

function inspect(obj, depth) {
  console.error(require('util').inspect(obj, false, depth || 5, true));
}
var gypPath = path.join(process.env.HOME, ".node-gyp", process.versions.node);
if (fs.existsSync(gypPath)) {
  extractFlagDefinitions();
} else {
  console.log('Installing node-gyp files for node', process.version);
  cp.exec('node-gyp install', { stdio: 'inherit' }, function (err, stderr, stdout) {
    if (err) return console.error(err);
    console.log(stderr);
    console.log(stdout);
    extractFlagDefinitions();
  });
}

// some calls stretch across multiple lines, so we need to ensure to remove them completely
function removeComplete(regex, lines, start) {
  var matches = lines[start].match(regex);
  var i = 0;
  var s = lines[start];
  matches = s.match(regex);

  while (!matches) {
    i++;
    if ((start + i) > lines.length) return;
    s += lines[start + i];
    matches = s.match(regex);
  }
  lines.splice(start, i + 1);
}

function removeDefine(lines, name) {
  var regexp = new RegExp('^ *DEFINE_\\w+\\(' + name + ',');
  for (var i = 0; i < lines.length; i++) {
    if (regexp.test(lines[i])) { 
      removeComplete(defineRe, lines, i);
      break;
    }
  }
}

function removeDefineArgs(lines) {
  var regexp = /^ *DEFINE_args\(/;
 
  for (var i = 0; i < lines.length; i++) {
    if (regexp.test(lines[i])) {
      removeComplete(defineArgsRe, lines, i);
      i--;
    }
  }
}

function extractFlagDefinitions() {
  var flagDefinitionsHeader = path.join(gypPath, 'deps', 'v8', 'src', 'flag-definitions.h');
  var lines = fs.readFileSync(flagDefinitionsHeader, 'utf8').split('\n');

  // remove everything up to the FLAG declaration above the first definition
  while(!(/^ *#define *FLAG *FLAG_FULL *$/).test(lines[0])) lines.shift();
  // inculde everything up to // Cleanup 
  // that is a bit brittle but may work for good if that comment stays ;)
  while(!(/^\/\/ *Cleanup[.]+ * *$/).test(lines[lines.length - 1])) lines.pop();

  // DEFINE_args are meaningess here and changes arg len from 3 to 2 between versions
  // so not easily fixed by just supplying an empty define, therefore clean that up here
  removeDefineArgs(lines);

  // remove test flags
  [ 'testing_bool_flag'
  , 'testing_maybe_bool_flag'
  , 'testing_int_flag'
  , 'testing_float_flag'
  , 'testing_string_flag' // not matched due to comma in string (not important)
  , 'testing_prng_seed'
  ].forEach(removeDefine.bind(null, lines))

  var flagDefinitionsFile = path.join(__dirname, '..', 'src', 'v8_flag_definitions.h');
  fs.writeFileSync(flagDefinitionsFile, lines.join('\n'), 'utf8');
}
