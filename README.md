# react-starter

webpack + react + react-hot-loader...

## Update June-08-2019

:arrow_up: Upgrading dependencies  
:boom: Using named export for `CleanWebpackPlugin` due to breaking changes [(link)](https://github.com/johnagan/clean-webpack-plugin/issues/106)

## Update July-23-2018

Code splitting of application in production.  
Using `splitChunks` optimization to create a `vendors.js` bundle.  
Using `HashedModuleIdsPlugin` to prevent unexpected changes to the `vendors.js` bundle hash value.

Useful Links:  
[`splitChunks` vendor bundle example.](https://webpack.js.org/plugins/split-chunks-plugin/#split-chunks-example-2)  
[Why `HashedModuleIdsPlugin` is necessary.](https://webpack.js.org/guides/caching/#module-identifiers)

## Update May-17-2018

Replaced `extract-text-webpack-plugin` with `mini-css-extract-plugin`
[(link)](https://github.com/webpack-contrib/extract-text-webpack-plugin#usage).  
Replaced `customizeArray` with `smartStrategy`.

## Update April-24-2018

Upgrade from babel 6.x to babel 7.x  
[Babel monorepo](https://github.com/babel/babel/blob/master/packages/README.md)

## Webpack Config

Copy/pasted from the official documentation.

See the [Guides](https://webpack.js.org/guides/), namely Development, HMR, Production and Caching.
Most of the production config can be skipped by setting `mode:'production'`. [WebpackDocs/Mode](https://webpack.js.org/concepts/mode/).

### webpack-merge smartStrategy

> Given you may want to configure merging behavior per field...

> _webpack-merge_ tries to be smart about merging loaders when `merge.smart` is used. Loaders with matching tests will be merged into a single loader value.

Merges the `module.rules.use` array by prepending the value(s) from the 2nd array.

```js
merge.smartStrategy({
  'module.rules.use': 'prepend'
})({
  module: {
    rules: [
      {
        test: /\.(scss|sass)$/,
        use: [
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
        ]
      }
    ];
  }
}, {
  module: {
    rules: [
      {
        test: /\.(scss|sass)$/,
        use: [MiniCssExtractPlugin.loader]
      }
    ]
  }
});
// will become
{
  module: {
    rules: [
      {
        test: /\.(scss|sass)$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
        ]
      }
    ];
  }
}
```
