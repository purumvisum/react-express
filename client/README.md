# webpack_react_redux
Simple starter kit for react + Redux + Webpack app:
*   scss
*   custom fonts
*   svg
*   tests (jest)
*   separate production build (optimazed)

to start:
```js
npm install
npm start
```
run tests:
```js
npm run test
npm test -- --watch
``` 
## Linters
*   eslint
*   stylelint

## Icons 
* [svg-sprite-loader](https://www.npmjs.com/package/svg-sprite-loader)
* [svgo-loader](https://github.com/rpominov/svgo-loader)

### Example
```js
import logo from '../../public/svg/logo.svg';
<svg>
  <use xlinkHref="#logo"></use>
</svg>
```

## Styles
Scss + autoprefixer

## Modes

### "Developer Mode"
<code>SET NODE_ENV = development</code> (for windows)<br/>
<code>npm run build</code>
default config (webpack.config.js):
*   source - map
*   redux dev tools

### "Production Mode"
<code>SET NODE_ENV = production</code> (for windows)<br/>
<code>build-production</code>
default config (webpack.production.config.js):
*   UglifyJsPlugin (to compress bundle)
