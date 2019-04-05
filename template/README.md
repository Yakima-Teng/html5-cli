# A template for html5-cli

> 这是一个移动端日常专题、活动页build开发模版。

## 主要特点

* 🌐 修改文件时自动刷新浏览器，方便查看效果；

* 🙈 支持转发本地请求，避免跨域问题；

* 💪 自动添加CSS浏览器厂商前缀；

* 🔥 使用webpack4，支持js文件模块化开发；

* 👫 支持使用ES6+新特性；

* 🏇 自动压缩js、css并[内联](./docs/inline.md)至html文件中，加快页面加载速度；

* 🏏 编译产物目录名根据项目名[动态生成](./docs/compile-folder-name.md)；

* 🚑 [eslint](./docs/eslint.md)代码风格检测（开启自动修复功能）；

* 🛠 支持配置化渲染页面，方便深度[定制](./docs/configurable.md)；

* 🚀 对于支持SFTP协议的服务器，支持命令行直接发布本地编译产物；

## 立即开始

1、首次使用该模板时，需要先全局安装`html5-cli`命令行工具：

```bash
yarn global add html5-cli
```

2、创建新项目

```bash
# 将 <project-name> 替换成你实际的项目名，如`html5 init cjhd1903春节活动2019年3月`
html5 init <project-name>

# 你也可以使用h5别名来替代html5
h5 init <project-name>
```

3、本地开发

```bash
yarn start
```

📚 [本地开发时的注意事项](./docs/develop-note.md)

4、部署文件到服务器上

```bash
yarn deploy
```

## 反馈意见、贡献代码

📚 [反馈意见](./docs/feedback.md)

📚 [贡献代码](./docs/contribution.md)

## 协议

本项目采用[MIT协议](./LICENSE)。

## TODO list

* `yarn start`时的报错信息优化；

* 编码时是否存在样式和脚本未内联至html文件中的情况；

* 开发阶段报错的追踪；
