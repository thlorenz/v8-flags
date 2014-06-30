#!/usr/bin/env sh

if [[ -e $TRAVIS ]] 
then
  DIR=`pwd`
else
  DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
fi

export PATH=$DIR/node_modules/.bin:$PATH

set -e

if [[ -e $TRAVIS ]]
then
  npm install
  tap $DIR/test/*.js
else
  nave use $1 npm install
  nave use $1 node $DIR/test/index.js
fi
