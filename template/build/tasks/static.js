const gulp = require('gulp');

const { join } = require('../utils');

module.exports = () => {
  return gulp.src([
    join('/src/static/**/*.*')
  ])
      .pipe(gulp.dest(join('/dist/static')))
};
