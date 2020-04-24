dirName="$(pwd)/build/static"

echo ""
echo "Moving JavaScript Files"
echo ""

cd $dirName/js
fileName=$( ls *.js | grep "^main*" )
rm ../../../../staticfiles/js/"pseudo-forms.js"
cp $fileName ../../../../staticfiles/js
cd ../../../../staticfiles/js
mv $fileName "pseudo-forms.js"
cd -
fileName=$( ls *.js | grep "^runtime*" )
rm ../../../../staticfiles/js/"pseudo-forms1.js"
cp $fileName ../../../../staticfiles/js
cd ../../../../staticfiles/js
mv $fileName "pseudo-forms1.js"
cd -
fileName=$( ls *.js | grep "^[0-9]" )
rm ../../../../staticfiles/js/"pseudo-forms2.js"
cp $fileName ../../../../staticfiles/js
cd ../../../../staticfiles/js
mv $fileName "pseudo-forms2.js"
cd -

echo ""
echo "Moving CSS Files"
echo ""

cd ..

cd $dirName/css
fileName=$( ls *.css | grep "^main*" )
rm ../../../../staticfiles/css/"pseudo-forms.css"
cp $fileName ../../../../staticfiles/css
cd ../../../../staticfiles/css
mv $fileName "pseudo-forms.css"
cd -
fileName=$( ls *.css | grep "^[0-9]" )
rm ../../../../staticfiles/css/"pseudo-forms1.css"
cp $fileName ../../../../staticfiles/css
cd ../../../../staticfiles/css
mv $fileName "pseudo-forms1.css"
cd -