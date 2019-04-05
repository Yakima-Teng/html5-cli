const fse = require('fs-extra')

const { join, projectName } = require('../utils')

module.exports = () => {
    // 因为添加了inline属性的link/script标签所引用的js和css文件会被内联到html中，所以产物中不需要保留css和js目录
    fse.remove(join(`/${projectName}/js`))
    return fse.remove(join(`/${projectName}/css`))
}
