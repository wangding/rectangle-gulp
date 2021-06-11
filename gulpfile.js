const { src, dest, parallel } = require('gulp'),
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
    .pipe(eslint.failAfterError());
}

module.exports.lint = parallel(lintHTML, lintCSS, lintJS);
