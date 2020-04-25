const gulp = require('gulp')
const scp = require('gulp-scp2')
const FtpDeploy = require('ftp-deploy')

const config = require('./config.deploy')
const { join } = require('./utils')

if (config.type === 'sftp') {
    gulp.src(join('/dist/**/**'))
        .pipe(scp({
            host: config.host,
            port: config.port || 22,
            username: config.username,
            password: config.password,
            dest: config.dest,
        }))
        .on('error', (err) => console.log(err)) // eslint-disable-line
    return
}

if (config.type === 'ftp') {
    const ftpDeploy = new FtpDeploy()
    const ftpConfig = {
        user: config.username,
        password: config.password,
        host: config.host,
        port: config.port || 21,
        localRoot: join(`/dist`),
        remoteRoot: config.dest,
        include: ['*', '**/*', '.*'],
        exclude: ['node_modules/**', 'node_modules/**/.*', '.git/**', '.idea/**', '.code/**', '.vscode/**'],
        deleteRemote: false,
        forcePasv: true,
    }
    ftpDeploy
        .deploy(ftpConfig)
        .then((res) => console.log(`finished: ${res.map((arr) => arr.join('\n')).join('\n')}`)) // eslint-disable-line no-console
        .catch((err) => console.log(err)) // eslint-disable-line no-console
}
