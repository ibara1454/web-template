# web-template

Template of fast-building SPA.

## Environment

Main tools

 - Eslint
 - Webpack 7+ (beta)
 - Gulp 4+ (beta)
 - Stylus
 - Babel

## Usage

### Build

`npx gulp build`

### Start browser-sync server, and build on change

`npx gulp server`

## Notes

### Eslint

Use `eslint --init` to create `.eslintrc.js` config.

### Webpack

Using es6 syntax for `webpack.config.babel.js`. It needs `@babel/runtime`, `@babel/preset-env` and `.babelrc` to parse.

### Gulp

Same as webpack.

### JavaScript and Css and ...

Only use webpack to bundle js files. *.styl's will be compiled to the build directory by gulp.

Js Entry: `/js/bundle.js`

Css Entry: `/css/style.css`
