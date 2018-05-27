# web-template

## Environment

 - Eslint
 - Webpack 7+ (beta)
 - Gulp 4+ (beta)
 - Babel

## Notes

### Eslint

Use `eslint --init` to create `.eslintrc.js` config.

### Webpack

Using es6 syntax for `webpack.config.babel.js`. It needs `@babel/runtime`, `@babel/preset-env` and `.babelrc` to parse.

### Gulp

Same as webpack.

### JavaScript and Css and ...

Only use webpack to bundle js files. Css's will copied to the build directory by gulp.
