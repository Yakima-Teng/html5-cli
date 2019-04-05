const gulp = require('gulp')
const gulpWatch = require('gulp-watch')

const { join } = require('./utils')

const taskClean = require('./tasks/clean')
const taskEJS = require('./tasks/ejs')
const taskStatic = require('./tasks/static')
const taskImages = require('./tasks/images')
const taskJS = require('./tasks/js')
const taskSass = require('./tasks/sass')
const taskServe = require('./tasks/serve')
const taskRemoveRedundantFolder = require('./tasks/remove-redundant-folder')

const { shouldStartServer } = require('./utils')

const taskEjsAfterHandlingCSSAndJS = gulp.series(
  gulp.parallel(
    taskSass,
    taskJS
  ),
  taskEJS,
  taskRemoveRedundantFolder
)

const start = gulp.series(
  gulp.parallel(
    taskEjsAfterHandlingCSSAndJS,
    taskStatic,
    taskImages
  ),
  shouldStartServer ? gulp.parallel(
    taskServe,
    taskRemoveRedundantFolder
  ) : taskRemoveRedundantFolder
)

taskClean()
start()

if (shouldStartServer) {
  gulpWatch([
    join('/src/**/*.ejs'),
    join('/src/**/site.data.config.js'),
    join('/src/css/**/*.scss'),
    join('/src/js/**/*.js'),
  ], taskEjsAfterHandlingCSSAndJS)
  gulpWatch([join('/src/static/**/*.*')], taskStatic)
  gulpWatch([join('/src/images/**/*.*')], taskImages)
}
