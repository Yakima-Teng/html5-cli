const gulp = require('gulp')

const taskClean = require('./tasks/clean')
const taskEJS = require('./tasks/ejs')
const taskSass = require('./tasks/sass')
const taskStatic = require('./tasks/static')
const taskImages = require('./tasks/images')
const taskJS = require('./tasks/js')

const build = gulp.parallel(
    taskEJS,
    taskSass,
    taskStatic,
    taskImages,
    taskJS
)

taskClean()
build()
