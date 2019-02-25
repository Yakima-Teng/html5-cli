const fileContentForIndexEJS = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="id=edge">
    <title></title>
    <meta name="description" content="">
    <meta name="keywords" content="">
    <link rel="stylesheet" href="./app.css">
</head>
<body>
Just an example
<script src="./app.js"></script>
</body>
</html>
`

const fileContentForAppScss = `
body {}
`

const fileContentForAppJS = `
// your code here
`

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
    if (data.shouldKeepExampleFiles === false) {
      const destDirName = data.destDirName
      const inPLace = data.inPlace
      if (inPLace === true) {
        fs.mkdirSync('src')
        fs.writeFileSync('src/index.ejs', fileContentForIndexEJS)
        fs.writeFileSync('src/app.scss', fileContentForAppScss)
        fs.writeFileSync('src/app.js', fileContentForAppJS)
      } else {
        fs.mkdirSync(`${destDirName}/src`)
        fs.writeFileSync(`${destDirName}/src/index.ejs`, fileContentForIndexEJS)
        fs.writeFileSync(`${destDirName}/src/app.scss`, fileContentForAppScss)
        fs.writeFileSync(`${destDirName}/src/app.js`, fileContentForAppJS)
      }
    }
  }
}
