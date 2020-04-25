// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'production'
process.env.NODE_ENV = 'production'

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', err => {
    throw err
})

const path = require('path')
const chalk = require('chalk')
const fs = require('fs-extra')
const webpack = require('webpack')
const bfj = require('bfj')
const config = require('./webpack.prod.config')
const checkRequiredFiles = require('react-dev-utils/checkRequiredFiles')
const formatWebpackMessages = require('react-dev-utils/formatWebpackMessages')
const printHostingInstructions = require('react-dev-utils/printHostingInstructions')
const FileSizeReporter = require('react-dev-utils/FileSizeReporter')
const printBuildError = require('react-dev-utils/printBuildError')

const { join, projectName } = require('./utils')

const measureFileSizesBeforeBuild =
    FileSizeReporter.measureFileSizesBeforeBuild
const printFileSizesAfterBuild = FileSizeReporter.printFileSizesAfterBuild
const useYarn = fs.existsSync(join('/yarn.lock'))

// These sizes are pretty large. We'll warn for bundles exceeding them.
const WARN_AFTER_BUNDLE_GZIP_SIZE = 512 * 1024
const WARN_AFTER_CHUNK_GZIP_SIZE = 1024 * 1024

const isInteractive = process.stdout.isTTY

// Warn and crash if required files are missing
if (!checkRequiredFiles([
    join('/src/index.html'),
    join('/src/app.jsx'),
])) {
    process.exit(1)
}

// Process CLI arguments
const argv = process.argv.slice(2)
const writeStatsJson = argv.indexOf('--stats') !== -1

// We require that you explicitly set browsers and do not fall back to
// browserslist defaults.
const { checkBrowsers } = require('react-dev-utils/browsersHelper')
checkBrowsers(join('/'), isInteractive)
    .then(() => {
        // First, read the current file sizes in build directory.
        // This lets us display how much they changed later.
        return measureFileSizesBeforeBuild(join(`/dist/${projectName}`))
    })
    .then(previousFileSizes => {
        // Remove all content but keep the directory so that
        // if you're in it, you don't end up in Trash
        fs.emptyDirSync(join(`/dist/${projectName}`))
        // Merge with the public folder
        copyPublicFolder()
        // Start the webpack build
        return build(previousFileSizes)
    })
    .then(
        ({ stats, previousFileSizes, warnings }) => {
            if (warnings.length) {
                /* eslint-disable no-console */
                console.log(chalk.yellow('Compiled with warnings.\n'))
                console.log(warnings.join('\n\n'))
                console.log(
                    '\nSearch for the ' +
                    chalk.underline(chalk.yellow('keywords')) +
                    ' to learn more about each warning.'
                )
                console.log(
                    'To ignore, add ' +
                    chalk.cyan('// eslint-disable-next-line') +
                    ' to the line before.\n'
                )
                /* eslint-enable no-console */
            } else {
                /* eslint-disable no-console */
                console.log(chalk.green('Compiled successfully.\n'))
                /* eslint-enable no-console */
            }

            /* eslint-disable no-console */
            console.log('File sizes after gzip:\n')
            /* eslint-enable no-console */
            printFileSizesAfterBuild(
                stats,
                previousFileSizes,
                join(`/dist/${projectName}`),
                WARN_AFTER_BUNDLE_GZIP_SIZE,
                WARN_AFTER_CHUNK_GZIP_SIZE
            )
            /* eslint-disable no-console */
            console.log()
            /* eslint-enable no-console */

            const appPackage = require('../package')
            const publicUrl = '/'
            const publicPath = config.output.publicPath
            const buildFolder = path.relative(process.cwd(), join(`/dist/${projectName}`))
            printHostingInstructions(
                appPackage,
                publicUrl,
                publicPath,
                buildFolder,
                useYarn
            )
        },
        err => {
            /* eslint-disable no-console */
            console.log(chalk.red('Failed to compile.\n'))
            /* eslint-enable no-console */
            printBuildError(err)
            process.exit(1)
        }
    )
    .catch(err => {
        if (err && err.message) {
            /* eslint-disable no-console */
            console.log(err.message)
            /* eslint-enable no-console */
        }
        process.exit(1)
    })

// Create the production build and print the deployment instructions.
function build (previousFileSizes) {
    /* eslint-disable no-console */
    console.log('Creating an optimized production build...')
    /* eslint-enable no-console */

    let compiler = webpack(config)
    return new Promise((resolve, reject) => {
        compiler.run((err, stats) => {
            let messages
            if (err) {
                if (!err.message) {
                    return reject(err)
                }
                messages = formatWebpackMessages({
                    errors: [err.message],
                    warnings: [],
                })
            } else {
                messages = formatWebpackMessages(
                    stats.toJson({ all: false, warnings: true, errors: true })
                )
            }
            if (messages.errors.length) {
                // Only keep the first error. Others are often indicative
                // of the same problem, but confuse the reader with noise.
                if (messages.errors.length > 1) {
                    messages.errors.length = 1
                }
                return reject(new Error(messages.errors.join('\n\n')))
            }
            if (
                process.env.CI &&
                (typeof process.env.CI !== 'string' ||
                    process.env.CI.toLowerCase() !== 'false') &&
                messages.warnings.length
            ) {
                /* eslint-disable no-console */
                console.log(
                    chalk.yellow(
                        '\nTreating warnings as errors because process.env.CI = true.\n' +
                        'Most CI servers set it automatically.\n'
                    )
                )
                /* eslint-enable no-console */
                return reject(new Error(messages.warnings.join('\n\n')))
            }

            const resolveArgs = {
                stats,
                previousFileSizes,
                warnings: messages.warnings,
            }
            if (writeStatsJson) {
                return bfj
                    .write(join(`/dist/${projectName}`) + '/bundle-stats.json', stats.toJson())
                    .then(() => resolve(resolveArgs))
                    .catch(error => reject(new Error(error)))
            }

            return resolve(resolveArgs)
        })
    })
}

function copyPublicFolder () {
    fs.copySync(join('/src/index.html'), join(`/dist/${projectName}`), {
        dereference: true,
        filter: file => {
            return file !== join('/src/index.html')
        },
    })
}
