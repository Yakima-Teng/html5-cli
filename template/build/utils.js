const path = require('path')

const { NODE_ENV, SERVER, INLINE } = process.env

exports.browserSync = require('browser-sync').create()

exports.join = (targetPath) => path.join(__dirname, '..', targetPath)

exports.isProduction = NODE_ENV === 'production'

// 是否需要启动本地服务（开发阶段用）
exports.shouldStartServer = SERVER === '1'

// 是否需要将js和css文件内联至html文件中（只会处理html中通过link和script标签引入时标记了inline属性的js和css文件）
exports.shouldInline = INLINE === '1'

const folderName = exports.folderName = path.join(__dirname, '..').replace(path.join(__dirname, '../../'), '')

exports.projectName = folderName.replace(/^([0-9a-zA-Z]+)[^0-9a-zA-Z].*$/, '$1')

const toDouble = val => parseInt(val) < 10 ? '0' + val : '' + val

// 获取版本日期（此处需要以函数形式供实时调用，以让生成的版本日期最接近编译时间，如果直接通过IIFE返回常量，实际返回的相当于是开始编译时的时间了）
exports.getVersionDate = () => {
    const date = new Date()
    const versionDate = date.getFullYear() + toDouble(date.getMonth() + 1) + toDouble(date.getDate()) + toDouble(date.getHours()) + toDouble(date.getMinutes()) + toDouble(date.getSeconds())
    return versionDate
}
