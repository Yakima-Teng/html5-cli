const gulp = require('gulp');
const log = require('fancy-log');
const webpackStream = require('webpack-stream');
const webpackCompiler = require('webpack');
const named = require('vinyl-named');

const { join, isProduction, browserSync } = require('../utils');

module.exports = () => {
  return gulp.src([
    join('/src/js/**/*.js'),
    '!' + join('/src/js/**/*.no.js')
  ])
      .pipe(named((file) => {
        console.log(file.history[0])
        return file.history[0].split('src/js/')[1].replace(/\.js$/, '')
      }))
      .pipe(webpackStream({
        mode: isProduction ? 'production' : 'development'
      }), webpackCompiler, (err, stats) => {
        if (err) {
          log(err)
        }
      })
      .pipe(gulp.dest(join('/dist/js')))
      .pipe(browserSync.stream())
};
