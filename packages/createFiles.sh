for z in */index.css;
do
	fontFamily=$(cat $z | grep family | cut -f 2 -d "'");
	folder=$(echo $z | cut -f 1 -d "/" );

echo $folder/package.json

cat << _NPM_ > $folder/package.json
{
  "name": "$folder",
  "version": "0.0.0",
  "description": "The CSS and web font files to easily self-host Orgdot $fontFamily.",
  "main": "index.css",
  "keywords": [
    "orgdot",
    "font",
    "font family",
    "web fonts",
    "$(echo $fontFamily | tr '[A-Z]' '[a-z]')"
  ],
  "author": "primaveraentalca <primaveraentalca@gmail.com>",
  "license": "MIT",
  "repository": "https://github.com/primaveraentalca/orgdot-webfonts/tree/master/packages/$folder"
}
_NPM_

echo $folder/.gitignore

cat << _GIT_ > $folder/.gitignore
*.tgz
_GIT_

echo $folder/README.md

cat << _WOW_ > $folder/README.md
# $folder
The CSS and web font files to easily self-host Orgdot $fontFamily.

## Requirements
You need to have webpack setup to load CSS and font files.<br />For many tools built with Webpack such as [Gatsby](https://github.com/gatsbyjs/gatsby") and [Create React App](https://github.com/facebookincubator/create-react-app), it should work out-of-the-box.<br />Also tested with [ParcelJS](https://parceljs.org/) bundler.

## Install
First, install like any other package<br />\`npm install --save $folder\`

## Usage
Require the package in your entry file.<br />\`require('$folder')\`

Then, use the font in your styles<br />\`font-family: '$fontFamily';\`

## About
I'm NOT the owner of these fonts.<br />These are the collective work of the [Orgdot Consortium](http://www.orgdot.com).
I generated the web fonts from [this files](http://www.orgdot.com/aliasfonts/index.htm) using [Transfonter](https://transfonter.org).
The idea of publishing npm packages for easy self-hosting comes from the [Typefaces](https://github.com/KyleAMathews/typefaces) project.
_WOW_

echo $folder/ORGDOT.txt

cat << _ORGDOT_ > $folder/ORGDOT.txt
/* (c) 2001 http://www.orgdot.com: you can copy, use, modify and distribute this code and/or artwork for educational, commercial or recreational use. all we ask is that you include this copyright notice in the materialyou distribute. for compiled code, you will need to make accessible this copyright notice somewhere in the distribution, and/or via a link on the web. there are several reasons for this caveat - the most important being that open source is based on one main principle: what you find and use, others should also have access to. don't keep it to yourself! this software is provided by the author and contributors "as is" and any express or implied warranties, including, but not limited to, the implied warranties of merchantability and fitness for a particular purpose are disclaimed. in no event shall the author or contributors be liable for any direct, indirect, incidental, special, exemplary, or consequential damages (including, but not limited to, procurement of substitute goods or services; loss of use, data, or profits; or business interruption) however caused and on any theory of liability, whether in contract, strict liability, or tort (including negligence or otherwise) arising in any way out of the use of this software, even if advised of the possibility of such damage. */
_ORGDOT_

echo "\n\n"

done
