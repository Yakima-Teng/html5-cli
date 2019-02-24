const gulp = require('gulp')

const { join } = require('./utils')

const taskEJS = require('./tasks/ejs')
const taskStatic = require('./tasks/static')
const taskJS = require('./tasks/js')
const taskSass = require('./tasks/sass')
const taskServe = require('./tasks/serve')

const start = gulp.series(
  gulp.parallel(
    taskEJS,
    taskSass,
    taskStatic,
    taskJS
  ),
  taskServe
)

start()

gulp.watch([join('/src/**/*.ejs'), join('/src/**/site.data.config.js')], taskEJS)
gulp.watch([join('/src/**/*.scss')], taskSass)
gulp.watch([join('/src/**/*.js')], taskJS)
