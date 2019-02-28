const gulp = require('gulp')
const scp = require('gulp-scp2')

const { join } = require('./utils')

gulp.src(join('/dist/**/*'))
  .pipe(scp({
    host: 'localhost',
    port: 22,
    username: 'username',
    password: 'password',
    dest: '/home/username/'
  }))
  .on('error', function(err) {
    console.log(err);
  })
