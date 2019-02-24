const path = require('path')

const { NODE_ENV } = process.env

exports.browserSync = require('browser-sync').create()

exports.join = (targetPath) => path.join(__dirname, '..', targetPath)

exports.isProduction = NODE_ENV === 'production'
