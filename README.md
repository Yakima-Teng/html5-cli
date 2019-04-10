# html5-cli

> 快速创建针对移动端的项目初始模板文件，方便快速开发，适用于移动端日常专题、活动页等的开发。

## 为何你需要html5-cli

公司是不是有一堆移动端的专题活动页要开发？

是不是为了创建这些项目，都需要重复一些编写/复制webpack配置文件、编译命令等工作？

通过脚手架创建模板项目就是为了减少这些重复性工作，目前模板项目的主要特点有：

* 🌐 修改文件时自动刷新浏览器，方便查看效果；

* 🙈 支持转发本地请求，避免跨域问题；

* 💪 自动添加CSS浏览器厂商前缀；

* 🔥 使用webpack4，支持js文件模块化开发；

* 👫 支持使用ES6+新特性；

* 🏇 自动压缩js、css，加快页面加载速度；

* 🏏 编译产物目录名根据项目名[动态生成](./docs/template/compile-folder-name.md)；

* 🚑 [eslint](./docs/template/eslint.md)代码风格检测（开启自动修复功能）；

* 🛠 支持配置化渲染页面，方便深度[定制](./docs/template/configurable.md)；

* 🚀 对于支持SFTP协议的服务器，支持命令行直接发布本地编译产物；

* 🥤 集成支持按需加载的UI组件库：Ant design mobile；

## 使用

第一次使用前，需要先全局安装`html5-cli`：

```bash
yarn global add html5-cli
```

然后，你就可以在你的终端中使用`html5`，或者使用别名`h5`，然后通过下面的方式创建一个新的空项目:

```bash
# 将<project-name>替换成实际项目名
html5 init <project-name>

# 或者使用h5别名替换html5
h5 init <project-name>
```

接下来就可以`cd <proejct-name>`进入到模板项目根目录，并通过下面的命令进行本地开发（渲染模版文件时，可以直接读取到`src/site.data.config.js`文件中的配置内容）：

```bash
yarn start
```

开发完毕后，可以通过下面的命令构建正式编译产物：

```bash
yarn build
```

最后，如果目标服务器支持通过SSH协议进行文件部署，则可通过下面的命令进行部署（需要先依据`build/deploy-example.js`的内容写一个`build/deploy.js`文件）：

```bash
yarn deploy
```

## 移动端开发秘籍

以下是一些比较常见的item，完整列表[点此查看](./docs/README.md)。

* [rem布局注意事项](docs/mobile/rem.md)

## 反馈意见、贡献代码

📚 [反馈意见](./docs/feedback.md)

📚 [贡献代码](./docs/contribution.md)

## License

本项目采用[MIT协议](./LICENSE)。
