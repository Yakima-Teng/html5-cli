module.exports = {
  seo: {
    cn: {
      title: '滕运锋的前端简历',
      description: '滕运锋的前端开发工程师简历',
      keywords: ['简历', '前端', '滕运锋']
    },
    en: {
      title: 'CV_Frontend_Yakima',
      description: 'the frontend CV of Yakima Teng',
      keywords: ['cv', 'resume', 'frontend', 'Yakima']
    }
  },
  pageHeader: {
    cn: {
      mainTitle: '滕运锋——前端开发',
      subTitleForPrintReader: '--- 三年开发经验，外包勿扰',
      subTitleForScreenReader: '--- 简历支持浏览器选择A4纸打印',
      notes: [
        '3年开发经验，期望薪资20k，外包项目勿扰'
      ]
    },
    en: {
      mainTitle: 'Frontend - Yakima Teng',
      subTitleForPrintReader: '--- 3 years frontend experience',
      subTitleForScreenReader: '--- able to print in A4 paper',
      notes: [
        '3 years frontend experience, expected 20k * 13'
      ]
    }
  },
  profile: {
    cn: {
      title: '基本信息',
      details: [
        { text: '户籍：浙江永嘉', widthPercentage: 'two' },
        { text: '出生：1991年8月', widthPercentage: 'two' },
        { text: `手机：${[9856, 5801, 184].reverse().join('-')}`, widthPercentage: 'two' },
        { text: `邮箱：<a href="mailto:${['veryplans', 'gmail.com'].join('@')}">${['veryplans', 'gmail.com'].join('@')}</a>`, widthPercentage: 'two' },
        { text: 'GitHub：<a href="https://github.com/Yakima-Teng" target="_blank">https://github.com/Yakima-Teng</a>', widthPercentage: 'one' },
        { text: '本科：2009 - 2013: 毕业于沈阳药科大学药学（食品药学方向）专业', widthPercentage: 'one' }
      ]
    },
    en: {
      title: 'Basic Info',
      details: [
        { text: 'Location: Shanghai City, China', widthPercentage: 'two' },
        { text: 'Birth: August, 1991', widthPercentage: 'two' },
        { text: `Mobile Phone: ${[9856, 5801, 184].reverse().join('-')}`, widthPercentage: 'two' },
        { text: `Email: <a href="mainto:${['veryplans', 'gmail.com'].join('@')}">${['veryplans', 'gmail.com'].join('@')}</a>`, widthPercentage: 'two' },
        { text: 'GitHub：<a href="https://github.com/Yakima-Teng" target="_blank">https://github.com/Yakima-Teng</a>', widthPercentage: 'one' },
        { text: 'Education: Bachelor degree in Pharmacy, Shenyang Pharmaceutical University, 2009-2013', widthPercentage: 'one' }
      ]
    }
  },
  skills: {
    cn: {
      title: '技能描述',
      details: [
        ['良好的学习能力和英文读写能力，虽非科班，但自学转行前端后看的基本都是英文书籍，读书时有跳级、保送经历，持有CET6证书，基本的学习能力是有保障的。'],
        ['熟悉ES6、CSS3/SASS/LESS，可高度还原设计稿样式。'],
        ['熟悉React（1年）和Vue（2年），有生产环境使用Flow/TypeScript的经验。'],
        ['熟练开发和调试移动端页面，包括web app和hybrid app。'],
        ['喜欢用Gulp/Webpack和一些其他node包来写一些小工具以提高开发体验。'],
        ['熟练使用Git、SVN、命令行工具。'],
        ['有简单的node(express)+mysql服务开发经验，有next.js服务端同构经验，可独立在linux服务器上进行项目部署。'],
        ['有限的Java Spring项目项目参与能力（参与过两三个月，可以写一些简单的CRUD）。']
      ]
    },
    en: {
      title: 'Skills',
      details: [
        ['Although not majored in computer, I learnt frontend skills myself with reading English books and articles, had grade-skipping experience in school, so a basic learning ability can be guaranteed.'],
        ['Familiar with ES6, CSS3/SASS/LESS, able to develop webpages with hight similarity to original UI designs.'],
        ['Experienced in using React (1 year) and Vue (2 years), having experience in using Flow/TypeScript.'],
        ['Experienced in mobile-platform webpages development and debugging, including pages in web apps and hybrid apps.'],
        ['Enjoy writing small tools using Gulp/Webpack and other node packages to help improving development experience.'],
        ['Familiar with using Git, SVN, HTTP proxy tools, command line tools.'],
        ['Able to develop a simple node(express)-mysql project, have experience using next.js, and able to deploy them to linux server.'],
        ['Have limited CRUD experience in Java development in Spring project with the premise that all basic structures are done.']
      ]
    }
  },
  projects: {
    cn: {
      title: '项目经验',
      details: [
        {
          title: 'APP',
          description: [
            '掌上基金：混合APP，用于在线购买基金产品。使用了react、react-router、redux。参与维护该项目后，曾将其中一个webpack+react项目进行优化，优化后编译产物大小缩减了78%（4.6M=>1M），编译时间缩减了87%（150秒=>20秒）。下载地址：<a href="https://sj.qq.com/myapp/detail.htm?apkName=howbuy.android.palmfund" target="_blank">https://sj.qq.com/myapp/detail.htm?apkName=howbuy.android.palmfund</a>。',
            '太平洋保险：内含一个使用React Native + react-router构建的APP，用户在线购买寿险。下载地址：<a href="https://sj.qq.com/myapp/detail.htm?apkName=com.cpic.sxbxxe" target="_blank">https://sj.qq.com/myapp/detail.htm?apkName=com.cpic.sxbxxe</a>。',
            '寻单王: <strong class="highlight">独立开发项目</strong>。使用Dcloud hBuilder构建的混合APP。使用了vue、vue-router、vuex。与服务端打通了支付宝和微信支付。下载地址：<a href="https://sj.qq.com/myapp/detail.htm?apkName=com.rongjinku.app.wk" target="_blank">https://sj.qq.com/myapp/detail.htm?apkName=com.rongjinku.app.wk</a>。'
          ]
        },
        {
          type: 'image',
          title: 'Wechat Official Account (you can scan QR code via WeChat to follow official account)',
          description: [
            {
              title: '苏通云课堂',
              image: './images/qrcode-stykt.bmp',
              description: [
                '<strong class="highlight">独立开发项目</strong>。',
                '在线播放视频教程。',
                'Pug + Sass。'
              ]
            },
            {
              title: 'CloudFB',
              image: './images/qrcode-cloudfb.bmp',
              description: [
                '<strong class="highlight">独立开发项目。</strong>',
                '在线食材销售，面向供应商和饭店。',
                'Vue + vue-router + vuex。'
              ]
            },
            {
              title: 'chebaowin',
              image: './images/qrcode-chebaowin.bmp',
              description: [
                '<strong class="highlight">独立开发项目。</strong>',
                '在线车险查询、购买平台。',
                'Vue + vue-router + vuex。'
              ]
            }
          ]
        },
        {
          title: '个人项目（Github、npm等）',
          description: [
            'jMock：一个命令行工具，用户快速建立mock服务，详情请访问：<a href="https://github.com/Yakima-Teng/jmock" target="_blank">https://github.com/Yakima-Teng/jmock</a>。',
            'html5-cli：一个项目脚手架，用户快速搭建简单项目的开发环境，详情请访问：<a href="https://github.com/Yakima-Teng/html5-cli" target="_blank">https://github.com/Yakima-Teng/html5-cli</a>。',
            'utils-daily：一个常用函数库，封装了工作中常用的函数，附有详细的文档。使用jasmine进行了单元测试，使用flow进行类型检查，使用rollup进行构建，详情请访问：<a href="https://yakima-teng.github.io/utils-daily/" target="_blank">https://yakima-teng.github.io/utils-daily/</a>。',
            '个人博客：<a href="http://www.orzzone.com" target="_blank">http://www.orzzone.com</a>，部署在个人VPS上。独立在linux服务器上安装nginx、php、mysql、部署改WordPress博客程序并维护了好几年了。'
          ]
        }
      ]
    },
    en: {
      title: 'Projects',
      details: [
        {
          title: 'APP',
          description: [
            '掌上基金: Hybrid APP, used to buy funds online. React, react-router, redux are used. During the development, I had reduced one of the webpack&react project included in this APP by 78% in size (from 4.6M to 1M) and 87% in compilation speed (from 150s to 20s). Download url: <a href="https://sj.qq.com/myapp/detail.htm?apkName=howbuy.android.palmfund" target="_blank">https://sj.qq.com/myapp/detail.htm?apkName=howbuy.android.palmfund</a>.',
            '太平洋保险: React Native, used to buy life insurances online. React-router are used. Download url: <a href="https://sj.qq.com/myapp/detail.htm?apkName=com.cpic.sxbxxe" target="_blank">https://sj.qq.com/myapp/detail.htm?apkName=com.cpic.sxbxxe</a>.',
            '寻单王: <strong class="highlight">Developed independently.</strong> Hybrid APP, created with Dcloud hBuilder. Vue, vue-router, vuex are used. Alipayment and wechat payment are both enabled. Download url: <a href="https://sj.qq.com/myapp/detail.htm?apkName=com.rongjinku.app.wk" target="_blank">https://sj.qq.com/myapp/detail.htm?apkName=com.rongjinku.app.wk</a>.'
          ]
        },
        {
          type: 'image',
          title: 'Wechat Official Account (you can scan QR code via WeChat to follow official account)',
          description: [
            {
              title: '苏通云课堂',
              image: './images/qrcode-stykt.bmp',
              description: [
                '<strong class="highlight">Developed independently.</strong>.',
                'Online video courses.',
                'Pug + Sass.'
              ]
            },
            {
              title: 'CloudFB',
              image: './images/qrcode-cloudfb.bmp',
              description: [
                '<strong class="highlight">Developed independently.</strong>',
                'Online raw food selling, from suppliers to customers.',
                'Vue + vue-router + vuex.'
              ]
            },
            {
              title: 'chebaowin',
              image: './images/qrcode-chebaowin.bmp',
              description: [
                '<strong class="highlight">Developed independently.</strong>',
                'Online car insurance ordering platform.',
                'Vue + vue-router + vuex.'
              ]
            }
          ]
        },
        {
          title: 'Mine (Github, npm, etc.)',
          description: [
            'jMock: a command line tool aims to establish a mock server rapidly, please visit here for details: <a href="https://github.com/Yakima-Teng/jmock" target="_blank">https://github.com/Yakima-Teng/jmock</a>.',
            'html5-cli: a project boilerplate aims to create project development environment rapidly, please visit here for details: <a href="https://github.com/Yakima-Teng/html5-cli" target="_blank">https://github.com/Yakima-Teng/html5-cli</a>.',
            'utils-daily: a javascript library containing many useful functions used in daily work with detailed document, using jasmine for unit test, flow for javascript type analyze, and rollup for bundling, please visit here for documentation: <a href="https://yakima-teng.github.io/utils-daily/" target="_blank">https://yakima-teng.github.io/utils-daily/</a>.',
            'My blog: <a href="http://www.orzzone.com" target="_blank">http://www.orzzone.com</a>, it was deployed to my own VPS, I installed nginx, php and mysql for making this WordPress site runnable and maintained it for several years.'
          ]
        }
      ]
    }
  },
  jobs: {
    cn: {
      title: '工作经验',
      details: [
        '高级前端开发工程师@好买财富管理股份有限公司（上市公司，腾讯系基金销售公司）| 2018年9月至今',
        '前端开发工程师 @ 北京无线天利有限公司上海分公司（上市公司）| 2015.12 – 2018.08',
        '国际药品注册专员 @ 浙江普洛康裕制药有限公司（上市公司）| 2013.10 – 2015.07',
        '符合以下条件的公司未列入：与前端无关且任职时间小于3个月的、或与前端有关但任职时间小于1个月的'
      ]
    },
    en: {
      title: 'Work Experience',
      details: [
        'Senior frontend developer @ 好买财务管理有限公司(public company) | 2018.09-now',
        'Intermediate frontend developer @ 北京无线天利有限公司上海分公司(public company) | 2015.12 - 2018.08',
        'International regular affair person @ Zhejiang Apeloa Kangyu Pharmaceutical Co., Ltd. (public company) | 2013.10 - 2015.07',
        'Note: frontend-related company stayed less than 1 month, and frontend-unrelated company stayed less than 3 months are not listed'
      ]
    }
  }
}
