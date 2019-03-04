/**
 * 配置表，用于生成简单H5页面
 * 
 * 注意：引用资源时，请填写相对src目录的相对地址
 */
const TYPES = {
    IMAGE_BANNER: 'IMAGE_BANNER',
    IMAGE_NORMAL: 'IMAGE_NORMAL',
    TEXT_TITLE: 'TEXT_TITLE',
    TEXT_NORMAL: 'TEXT_NORMAL'
}
const LOGOS = {
    ZJ: './images/icon_zj.png',
    CXG: '/images/icon_cxg.png'
}
module.exports = {
    // meta信息和显示在浏览器标签上的icon
    head: {
        title: '网页标题',
        description: '网站描述',
        keywords: ['关键词1', '关键词2'],
        icon: './images/favicon.ico'
    },
    // 微信分享
    share: {
        enable: true,
        title: '微信分享标题',
        description: '微信分享描述',
        icon: './images/share.png'
    },
    // 点赞功能
    thumbup: {
        id: ''
    },
    // 图文详情
    data: [
        {
            type: TYPES.IMAGE_BANNER,
            src: './images/banner.png'
        },
        {
            type: TYPES.TEXT_TITLE,
            text: '标题1'
        },
        {
            type: TYPES.IMAGE_NORMAL,
            src: './images/pic1.png'
        },
        {
            type: TYPES.TEXT_NORMAL,
            text: '一段描述文字，支持HTML元素以便<span class="highlight">突出一些文字</span>。'
        }
    ]
};
