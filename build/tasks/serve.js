const portfinder = require('portfinder');
const proxy = require('http-proxy-middleware');
const { browserSync, join } = require('../utils');
const proxyConfig  = require('../../site.proxy.config');

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
        startPath: '/htmls/cv/index_en.html',
        middleware: Object.keys(proxyConfig).map((key) => proxy(key, proxyConfig[key]))
      })
    })
    .catch((err) => {
      console.log(`[Error]: ${err.message}`)
    })
};
