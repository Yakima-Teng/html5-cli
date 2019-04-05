const pkg = require('../package.json')

const dependencies = pkg.dependencies
const devDependencies = pkg.devDependencies

const isVersionNumberPure = (versionNumber) => /^[0-9.]+$/.test(versionNumber)

const areAllVersionNumbersPure = (...objs) => objs.every((obj) => Object.keys(obj).map((key) => obj[key]).every(isVersionNumberPure))

if (!areAllVersionNumbersPure(dependencies) || !areAllVersionNumbersPure(devDependencies)) {
    console.log('package.json文件中定义的依赖包存在未固定的版本号，不允许提交！')
    process.exit(1)
}
