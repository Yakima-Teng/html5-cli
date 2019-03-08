/**
 * configuration file
 *
 */
module.exports = {
    // info
    head: {
        title: 'Site Title',
        description: 'Here is the site description',
        keywords: ['keyword1', 'keyword2'],
        icon: './images/favicon.ico',
        author: ['gmail.com', '@', 'veryplans'].reverse().join('')
    },
    // wechat share
    share: {
        enable: true,
        title: 'Wechat share title',
        description: 'Here is the sharing description',
        icon: './images/share.png'
    }
};
