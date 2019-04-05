const fse = require('fs-extra')

const { join, projectName } = require('../utils')

module.exports = () => {
  return fse.emptyDirSync(join(`/${projectName}`))
}
