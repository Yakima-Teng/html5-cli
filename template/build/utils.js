const path = require('path')

exports.join = (targetPath) => path.join(__dirname, '..', targetPath)

const folderName = exports.folderName = path.join(__dirname, '..').replace(path.join(__dirname, '../../'), '')

exports.projectName = folderName.replace(/^([0-9a-zA-Z]+)[^0-9a-zA-Z].*$/, '$1')

const toDouble = val => parseInt(val) < 10 ? '0' + val : '' + val

// 获取版本日期（此处需要以函数形式供实时调用，以让生成的版本日期最接近编译时间，如果直接通过IIFE返回常量，实际返回的相当于是开始编译时的时间了）
exports.getVersionDate = () => {
    const date = new Date()
    const versionDate = date.getFullYear() + toDouble(date.getMonth() + 1) + toDouble(date.getDate()) + toDouble(date.getHours()) + toDouble(date.getMinutes()) + toDouble(date.getSeconds())
    return versionDate
}
