#!/usr/bin/env bash

# Shows the number of lines, hence words in the hunspell dictionaries.

if [[ -z "$1" ]] ;then
	echo "Usage: "
	echo "stats.sh ./path/to/wooorm/dictionaries"
	exit 1
fi;

for d in "$1"/dictionaries/en-*/index.dic; do
	wc -l "$d"
done;

echo

wc -l index.dic