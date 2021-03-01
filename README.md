Sikuli
===========



## What?

Generate Locator file based-on Image

## Installation

You need to install Sikuli first (and the JDK I think?).
The sikuli-script.jar and native libraries must be in Java classpath.

For Mac, it will work out of the box

## Demo

mocha --timeout 600000 src/genLocator.js -r @babel/register --file ./Setup.js  --fgrep Generate --file ./Teardown.js  --reporter mochawesome --reporter-options reportDir=Report
