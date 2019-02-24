const gulp = require('gulp');

const { join } = require('../utils');

module.exports = () => {
  return gulp.src([
    join('/src/**/*.*'),
    '!' + join('/src/**/*.md'),
    '!' + join('/src/**/*.ejs'),
    '!' + join('/src/**/*.scss'),
    '!' + join('/src/**/*.js'),
    '!' + join('/src/**/*.html')
  ])
    .pipe(gulp.dest(join('/dist')))
};
