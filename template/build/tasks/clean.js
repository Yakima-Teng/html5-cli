const fse = require('fs-extra')

const { join } = require('../utils');

module.exports = () => {
    return fse.emptyDirSync(join('/dist'))
};
