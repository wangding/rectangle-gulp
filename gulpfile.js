const { src, dest, parallel, series } = require('gulp'),
      htmlhint = require('gulp-htmlhint'),
      csslint  = require('gulp-csslint'),
      eslint   = require('gulp-eslint');

function lintHTML() {
  return src('./src/*.html')
    .pipe(htmlhint())
    .pipe(htmlhint.failAfterError());
}

function lintCSS() {
  return src('./src/*.css')
    .pipe(csslint())
    .pipe(csslint.formatter(require('csslint-stylish')))
    .pipe(csslint.formatter('fail'));
}

function lintJS() {
  return src('./src/*.js')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
}

module.exports.lint = parallel(lintHTML, lintCSS, lintJS);

const htmlmin = require('gulp-htmlmin'),
      cssmin  = require('gulp-csso'),
      webpack = require('gulp-webpack-yawp');

function minfiyHTML() {
  return src('./src/*.html')
    .pipe(htmlmin( {
      collapseWhitespace: true,
      removeComments: true,
      removeOptionalTags: true,
      removeRedundantAttributes: true,
      removeScriptTypeAttributes: true
    }))
    .pipe(dest('./dist'));
}

function minifyCSS() {
  return src('./src/*.css')
    .pipe(cssmin())
    .pipe(dest('./dist'));
}

function minifyJS() {
  return src('./src/main.js')
    .pipe(webpack())
    .pipe(dest('./dist'));
}

module.exports.minify = parallel(minfiyHTML, minifyCSS, minifyJS);
module.exports.default = series(
  parallel(lintHTML, lintCSS, lintJS),
  parallel(minfiyHTML, minifyCSS, minifyJS)
);
