#!/usr/bin/env bash

## This is a wrapper script that uses the node binary installed by maven

PATH=$PWD/node:$PWD/node_modules/.bin:$PATH

if [ ! -x $PWD/node -a ! -x $PWD/npm ]; then
  echo "Unable to locate node/npm binaries.  Please run \"mvn install\" first"
  exit 1
fi

if [ ! -d $PWD/node_modules ]; then
  npm install
fi

npm run "$@"
