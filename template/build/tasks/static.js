const gulp = require('gulp')

const { join, projectName } = require('../utils')

module.exports = () => {
    return gulp.src([
        join('/src/static/**/*.*'),
    ])
        .pipe(gulp.dest(join(`/${projectName}/static`)))
}
