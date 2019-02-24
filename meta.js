module.exports = {
  prompts: {
    'shouldKeepExampleFiles': {
      type: 'confirm',
      message: 'Need keep example files?'
    }
  },
  filters: {
    'bin/**/*': 'false',
    'bin-lib/**/*': 'false',
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
  complete (data, { chalk }) {
    console.log(chalk.green('success'))
  }
}
