const portfinder = require('portfinder');
const proxy = require('http-proxy-middleware');
const { browserSync, join } = require('../utils');

module.exports = () => {
  portfinder.basePort = process.env.PORT || 8080;
  return portfinder.getPortPromise()
      .then((port) => {
        browserSync.init({
          server: {
            baseDir: [join('/dist')],
            directory: true,
            index: 'index.html',
            routes: {
              '/test': 'test'
            }
          },
          port,
          startPath: '/index.html',
          middleware: [
            proxy('/path/api', {
              target: 'http://111.22.333.4',
              changeOrigin: true
            })
          ]
        })
      })
      .catch((err) => {
        console.log(`[Error]: ${err.message}`)
      })
};
