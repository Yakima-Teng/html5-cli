const gulp = require('gulp')

const { join } = require('./utils')

const taskClean = require('./tasks/clean')
const taskEJS = require('./tasks/ejs')
const taskStatic = require('./tasks/static')
const taskImages = require('./tasks/images')
const taskJS = require('./tasks/js')
const taskSass = require('./tasks/sass')
const taskServe = require('./tasks/serve')

const start = gulp.series(
    gulp.parallel(
        taskEJS,
        taskSass,
        taskStatic,
        taskImages,
        taskJS
    ),
    taskServe
)

taskClean()
start()

gulp.watch([join('/src/**/*.ejs'), join('/src/**/site.data.config.js')], taskEJS)
gulp.watch([join('/src/css/**/*.scss')], taskSass)
gulp.watch([join('/src/js/**/*.js')], taskJS)
gulp.watch([join('/src/static/**/*.*')], taskStatic)
gulp.watch([join('/src/images/**/*.*')], taskImages)
