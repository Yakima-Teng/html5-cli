# html5-cli

<p align="center">
  <a href="https://npmcharts.com/compare/html5-cli?minimal=true">
    <img src="https://img.shields.io/npm/dm/html5-cli.svg" alt="Downloads">
  </a>
  <a href="https://www.npmjs.com/package/html5-cli">
    <img src="https://img.shields.io/npm/v/html5-cli.svg" alt="Version">
  </a>
  <a href="https://www.npmjs.com/package/html5-cli">
    <img src="https://img.shields.io/npm/l/html5-cli.svg" alt="License">
  </a>
</p>

> 快速创建针对移动端的初始模板，方便快速开发，适用于移动端日常专题、活动页等的开发。

***王婆卖瓜系列：如果你的项目简单到不太需要模块化的组件，js代码量也很少。不妨移步隔壁[classic-cli](https://github.com/Yakima-Teng/classic-cli)，classic-cli是给那种传统的前端开发模式使用的，可无侵入式地使用构建构建，即，随时可以零成本切换成不依赖构建工具的开发方式。***

注：项目文档后半部分还集成了移动端项目开发常见注意事项（持续更新中，欢迎提PR）。

## 为何你需要html5-cli

公司是不是有一堆移动端的专题活动页要开发？

是不是为了创建这些项目，都需要重复一些编写/复制webpack配置文件、编译命令等工作？

通过脚手架创建模板项目就是为了减少这些重复性工作。

html5-cli官方模板的主要特点有：

* 🎄 使用常见的react，没有新的学习成本；

* 📲 内置rem响应式支持（默认1rem = 100px，750px宽的设计稿对应7.5rem宽度）；

* 🌐 修改文件时自动刷新浏览器，方便查看效果；

* 🙈 支持转发本地请求，避免跨域问题；

* 💪 自动添加CSS浏览器厂商前缀；

* 🔥 使用webpack4，支持js文件模块化开发；

* 👫 支持使用ES6+新特性；

* 🏇 自动压缩js、css，加快页面加载速度；

* 🏏 编译产物目录名根据项目名[动态生成](./docs/template/compile-folder-name.md)(如"cjhd1903春节活动" => "cjhd1903")；

* 🚑 [eslint](./docs/template/eslint.md)代码风格检测（开启自动修复功能）；

* 🛠 支持配置化渲染页面，方便深度[定制](./docs/template/configurable.md)；

* 🚀 对于支持SFTP协议的服务器，支持命令行直接发布本地编译产物；

* 🥤 集成支持按需加载的UI组件库：Ant design mobile（可选）；

* 🐢 支持将代码按路由进行分割，支持懒加载；

## 使用

### 第一次使用前的准备

***第一次使用前***，需要先全局安装`html5-cli`（后面再创建项目时不需要再执行这个命令了）：

```bash
npm install -g html5-cli
```

然后，你就可以在你的终端中使用`html5`，或者使用别名`h5`了。

### 创建项目

```bash
# 将<project-name>替换成实际项目名（这里`h5`也可以换成`html5`，作用相同，看你喜欢用哪个命令）
h5 init <project-name>
```

### 安装项目依赖

进入项目后，安装起来

```bash
npm install

# 如果依赖安装较慢，可以使用淘宝镜像来安装
npm i --registry=https://registry.npm.taobao.org
```

说明：项目模板中提供了一个.npmrc文件，其中已经将registry设置为淘宝镜像，并且设置了sass_binnary_site（默认模板中没用到sass，预留给打算装sass来写项目的同学）。

### 本地开发

进入到`<project-name>`模板项目根目录，通过下面的命令进行本地开发（渲染模版文件时，可以直接读取到`src/site.data.config.js`文件中的配置内容）：

```bash
npm run start
```

### 构建产物

开发完毕后，可以通过下面的命令构建正式编译产物：

```bash
npm run build
```

### 部署上线

如果目标服务器支持通过SSH协议进行文件部署，则可通过下面的命令进行部署（需要先依据`build/deploy-example.js`的内容写一个`build/deploy.js`文件）：

```bash
npm deploy
```

注：如果不想每次都敲`npm run build`和`npm run deploy`命令，可以直接执行`npm run buildAndDeploy`命令，
`npm run buildAndDeploy`命令会先编译产物然后直接发布，跟分开执行`npm run build`和`npm run deploy`效果是等价的。

## 移动端开发注意事项

以下是一些比较常见的item，完整列表[点此查看](./docs/README.md)。

📚 [rem布局注意事项](docs/mobile/rem.md)

## 反馈意见、贡献代码

📚 [反馈意见](./docs/feedback.md)

📚 [贡献代码](./docs/contribution.md)

## 致谢

模版基于[vue3-h5-template](https://github.com/yulimchen/vue3-h5-template)。

## License

本项目采用[MIT协议](./LICENSE)。
