const gulp = require('gulp')
const fse = require('fs-extra')

const {
    join,
    projectName,
    shouldInline,
} = require('../utils')

module.exports = () => {
    if (shouldInline) {
        // 因为添加了inline属性的link/script标签所引用的js和css文件会被内联到html中，所以产物中不需要保留css和js目录
        fse.removeSync(join(`/${projectName}/js`))
        return fse.remove(join(`/${projectName}/css`))
    }
    // 这里具体gulp.src的文件不重要，只是为了返回一个"空"的gulp任务
    return gulp.src(join('/src/site.data.config.js'))
}
