# react-starter
webpack + react + react-hot-loader...

## Update April-24-2018
Upgrade from babel 6.x to babel 7.x  
[Babel monorepo](https://github.com/babel/babel/blob/master/packages/README.md)

## Webpack Config
Copy/pasted from the official documentation.  

See the [Guides](https://webpack.js.org/guides/), namely Development, HMR, Production and Caching.
Most of the production config can be skipped by setting `mode:'production'`. [WebpackDocs/Mode](https://webpack.js.org/concepts/mode/).

Stable release of `extract-text-webpack-plugin` does not work with `webpack >= 4.0`.  
[Github Issue](https://github.com/webpack-contrib/extract-text-webpack-plugin/issues/701) and fix [alpha/beta release](https://github.com/webpack-contrib/extract-text-webpack-plugin/releases).

### webpack-merge customizeArray() function in webpack.prod.js
Takes the first index of the first `module.rules` array `a[0]` and concatenates it with the second `modules.rules` array.  
In this case: The `babel-loader` from `webpack.common.js` and `scss-loader` from `webpack.prod.js`.