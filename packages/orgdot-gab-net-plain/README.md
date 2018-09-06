# orgdot-gab-net-plain
The CSS and web font files to easily self-host Orgdot GAB.NET.

## Requirements
You need to have webpack setup to load CSS and font files.<br />For many tools built with Webpack such as [Gatsby](https://github.com/gatsbyjs/gatsby") and [Create React App](https://github.com/facebookincubator/create-react-app), it should work out-of-the-box.<br />Also tested with [ParcelJS]("https://parceljs.org/") bundler.

## Install
First, install like any other package<br />`npm install --save orgdot-gab-net-plain`

## Usage
Require the package in your entry file.<br />`require('orgdot-gab-net-plain')`

Then, use the font in your styles<br />`font-family: 'GAB.NET';`

## About
I'm NOT the owner of these fonts.<br />These are the collective work of the [Orgdot Consortium]("http://www.orgdot.com").
I generated the web fonts from [this files]("http://www.orgdot.com/aliasfonts/index.htm") using [Transfonter]("https://transfonter.org").
The idea of publishing npm packages for easy self-hosting comes from the [Typefaces]("https://github.com/KyleAMathews/typefaces") project.
