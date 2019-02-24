const gulp = require('gulp');
const sass = require('gulp-sass');
const gulpif = require('gulp-if');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const log = require('fancy-log');

const { browserSync, join, isProduction } = require('../utils');

module.exports = () => {
  return gulp.src([
    join('/src/**/*.scss'),
    '!' + join('/src/**/*.no.scss')
  ])
    .pipe(sass()).on('error', log)
    .pipe(autoprefixer())
    .pipe(gulpif(isProduction, cleanCSS({ compatibility: 'ie8' })))
    .pipe(gulp.dest(join('/dist')))
    .pipe(browserSync.stream())
};
