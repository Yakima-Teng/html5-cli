const gulp = require('gulp');

const { join } = require('../utils');

module.exports = () => {
    return gulp.src([
        join('/src/images/**/*.*')
    ])
        .pipe(gulp.dest(join('/dist/images')))
};
