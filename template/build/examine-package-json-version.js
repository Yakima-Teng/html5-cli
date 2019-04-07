const pkg = require('../package.json')

const dependencies = pkg.dependencies
const devDependencies = pkg.devDependencies

const isVersionNumberPure = (versionNumber) => /^[0-9.beta-]+$/.test(versionNumber)

const areAllVersionNumbersPure = (...objs) => objs.every((obj) => Object.keys(obj).map((key) => obj[key]).every(isVersionNumberPure))

if (!areAllVersionNumbersPure(dependencies) || !areAllVersionNumbersPure(devDependencies)) {
    /* eslint-disable no-console */
    console.log('package.json文件中定义的依赖包存在未固定的版本号，不允许提交！')
    /* eslint-enable no-console */
    process.exit(1)
}
