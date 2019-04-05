const path = require('path')
const gulp = require('gulp')
const log = require('fancy-log')
const webpackStream = require('webpack-stream')
const webpackCompiler = require('webpack')
const named = require('vinyl-named')
const webpackConfig = require('../../webpack.config')

const { join, browserSync, projectName } = require('../utils')

const pathForSrcJS = path.join(__dirname, '../../src/js/')

module.exports = () => {
    return gulp.src([
        join('/src/js/**/*.js'),
        '!' + join('/src/js/**/*.no.js'),
    ])
        .pipe(named((file) => {
            return file.history[0].split(pathForSrcJS)[1].replace(/\.js$/, '')
        }))
        .pipe(webpackStream(webpackConfig), webpackCompiler, (err, stats) => {
            if (err) {
                log(err)
            }
        })
        .pipe(gulp.dest(join(`/${projectName}/js`)))
        .pipe(browserSync.stream())
}
