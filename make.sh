#!/bin/bash
set -e

COFFEE_IN=src/coffee
PKG_OUT=pkg/closure-js/libs/cassowary #dir that'll be sucked into JAR
JS_OUT=dev_public/js

#Clean output folder
rm -rf $JS_OUT $PKG_OUT
mkdir -p $JS_OUT

#Compile CoffeeScript
vendor/coffee-script/bin/coffee   \
    --google                      \
    --compile                     \
    --bare                        \
    --output $JS_OUT $COFFEE_IN 

mkdir -p $PKG_OUT
cp -r $JS_OUT/ $PKG_OUT/

lein jar
