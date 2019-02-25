const gulp = require('gulp')

const taskEJS = require('./tasks/ejs')
const taskSass = require('./tasks/sass')
const taskStatic = require('./tasks/static')
const taskJS = require('./tasks/js')

const build = gulp.parallel(
  taskEJS,
  taskSass,
  taskStatic,
  taskJS
)

build()
