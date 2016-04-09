#!/bin/bsh
cd ../..
git subtree split -Psite -b gh-pages
git push -f origin gh-pages:gh-pages
git branch -D gh-pages