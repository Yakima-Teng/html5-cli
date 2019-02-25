const gulp = require('gulp');
const babel = require('gulp-babel');
const gulpif = require('gulp-if');
const uglify = require('gulp-uglify');
const log = require('fancy-log');

const { join, isProduction, browserSync } = require('../utils');

module.exports = () => {
  return gulp.src([
    join('/src/js/**/*.js'),
    '!' + join('/src/js/**/*.no.js')
  ])
    .pipe(babel({
      presets: ['@babel/env']
    })).on('error', log)
    .pipe(gulpif(isProduction, uglify()))
    .pipe(gulp.dest(join('/dist/js')))
    .pipe(browserSync.stream())
};
