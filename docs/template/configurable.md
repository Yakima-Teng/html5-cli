# 根据配置进行页面渲染

本模版适用于较为通用的场景，若用于公司内部，可在此基础上增加一些配置项方便团队成员开发使用，以下是一些例子：

1、若许多页面都需要添加页面访问埋点，可在配置项中加入一项埋点id，然后在ejs模版中判断如果有填写埋点id则渲染对应的js，否则不渲染对应的js代码，配置内容可类似这样：

```javascript
{
    // 埋点功能
    statistics: {
        enable: false,
        id: '',
    },
}
```

2、若许多页面都需要支持微信分享，可在配置项中加入一个share字段，类似这样：

```javascript
{
    // 微信分享
    share: {
        enable: false,
        title: '微信分享标题',
        description: '微信分享描述',
        // 分享icon
        icon: '',
    },
}
```
