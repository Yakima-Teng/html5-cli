const gulp = require('gulp')
const scp = require('gulp-scp2')

const { join, projectName } = require('./utils')

gulp.src(join(`/${projectName}/**/*`))
  .pipe(scp({
    host: 'localhost',
    port: 22,
    username: 'username',
    password: 'password',
    dest: `/home/username/${projectName}/`,
  }))
  .on('error', function (err) {
    console.log(err)
  })
