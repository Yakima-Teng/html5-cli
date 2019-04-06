const gulp = require('gulp')
const log = require('fancy-log')
const ejs = require('gulp-ejs')
const htmlmin = require('gulp-htmlmin')
const gulpif = require('gulp-if')
const inlineSource = require('gulp-inline-source')

const {
    isProduction,
    join,
    browserSync,
    projectName,
    getVersionDate,
    shouldInline,
} = require('../utils')

module.exports = () => {
    // 需要先删除require缓存的数据，否则renderData的数据是不会随着config.js中renderData的改变而改变的
    Object.keys(require.cache).forEach((key) => {
        if (/site\.data\.config/.test(key)) {
            delete require.cache[key]
        }
    })
    const rawPipeLines = gulp.src([join('/src/**/*.ejs'), '!' + join('/src/**/*.no.ejs')])
        .pipe(ejs((() => {
            const renderData = require('../../src/site.data.config')
            renderData.projectName = projectName
            renderData.versionDate = getVersionDate()
            return renderData
        })(), {}, { ext: '.html' })).on('error', log)
        .pipe(gulpif(isProduction, htmlmin({
            collapseWhitespace: true,
            removeComments: true,
            removeAttributeQuotes: true,
        })))
    try {
        if (shouldInline) {
            return rawPipeLines
                .pipe(gulp.dest(join(`/${projectName}`)))
                .pipe(inlineSource())
                .pipe(gulp.dest(join(`/${projectName}`)))
                .pipe(browserSync.stream())
        }
        return rawPipeLines
            .pipe(gulp.dest(join(`/${projectName}`)))
            .pipe(browserSync.stream())
    } catch (e) {
        log(e)
    }
}
