module.exports = {
  prompts: {
    'shouldKeepExampleFiles': {
      type: 'confirm',
      message: 'Need keep example files?'
    }
  },
  filters: {
    'build/**/*': 'true',
    'lib/**/*': 'true',
    'src/**/*': 'shouldKeepExampleFiles',
    '.browserslistrc': 'true',
    '.gitignore': 'true',
    'LICENSE': 'false',
    'meta.js': 'false',
    'package.json': 'true',
    'package-lock.json': 'false',
    'README.md': 'true',
    'site.data.config.js': 'shouldKeepExampleFiles',
    'site.proxy.config.js': 'true'
  },
  skipInterpolation: 'src/**/*.bmp',
  complete (data, { chalk, logger, files, fs }) {
    console.log(`data: ${JSON.stringify(data, null, 2)}`)
    fs.mkdirSync('src')
    fs.writeFile('src/index.ejs', '')
    fs.writeFile('src/app.scss', '')
    fs.writeFile('src/app.js', '')
  }
}
