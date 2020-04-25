/**
 * 配置表，用于渲染简单H5页面
 *
 * 注意：引用资源时，请填写相对src目录的相对地址
 */
module.exports = {
    // 本地开发时默认打开的页面
    openUrl: 'index.html#/ad/index',
    // head头部信息
    head: {
        title: ' ',
        description: '',
        keywords: [''],
        icon: './static/favicon.ico',
        author: ['163.com', '@', 'cleveryun'].reverse().join(''),
        // 一些优化（如果你不知道它们的用途的话可以直接忽略）
        optimization: {
            dnsPrefetch: [
                // '//www.example.com'
            ],
        },
    },
    // 微信分享
    share: {
        enable: false,
        title: '微信分享标题',
        description: '微信分享中的描述信息',
        icon: './images/share.png', // 分享图标
    },
    // 本地开发时转发请求避免跨域问题
    proxyConfig: {
        '/api/v1': {
            target: 'http://111.222.33.44:8080',
            changeOrigin: true,
        },
    },
}
