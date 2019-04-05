const gulp = require('gulp')

const { join, projectName } = require('../utils')

module.exports = () => {
    return gulp.src([
        join('/src/images/**/*.*'),
    ])
        .pipe(gulp.dest(join(`/${projectName}/images`)))
}
