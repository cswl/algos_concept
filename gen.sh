#!/usr/bin/env bash

if [[ -z "$1" ]] ;then
	echo "Usage: "
	echo "gen.sh ./path/to/wooorm/dictionaries"
	exit 1
fi;

echo "Generating dictionaries..."
# The sed removes everything after the trailing slash which is the metadata
# The -f option to sort folds case-insentive words into single word
# The -i option to uniq ignores cases when comparing
cat "$1"/dictionaries/en-*/index.dic | sed 's|[/].*$||' | sort -f | uniq -i > index.dic

echo "Copying licences to LICENSES"
mkdir -p LICENSES
for dic in "$1"/dictionaries/en-*/ ; do
	dname="$(basename $dic)"
	mkdir "LICENSES/$dname"
	cp "$dic/LICENSE"  "LICENSES/$dname"
done 