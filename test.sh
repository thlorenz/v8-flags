#!/usr/bin/env sh

if [[ -e $TRAVIS ]] 
then
  DIR=`pwd`
else
  DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
fi

export PATH=$DIR/node_modules/.bin:$PATH

set -e

nave use $1 npm install

OUTPUT=$(nave use $1 node $DIR/test/index.js 2>&1)

echo "$OUTPUT" 

if [[ "$OUTPUT" =~ "# fail " ]] 
then
  echo "TEST FAILED"
  exit 1
fi

# tests will pass even if v8 logs an error due to unsupported flag, so we catch that here
if [[ "$OUTPUT" =~ "Error: unrecognized flag" ]] 
then
  echo "FAILING TESTS due to unrecognized flag"
  exit 1
fi
