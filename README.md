# html5-cli

<div align="center">
	<img src="./attachments/logo.png" style="width:128px;" />
</div>

<p align="center" style="margin-top:15px;">
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

> 快速创建针对移动端的初始模板，方便项目快速启动。

默认的模板项目特性如下：

- [x] ⚡ Vue3 + Vite4
- [x] 🍕 TypeScript
- [x] ✨ Vant4 组件库
- [x] 🌀 Tailwindcss 原子类框架
- [x] 🍍 Pinia 状态管理
- [x] 🌓 支持深色模式
- [x] Vue-router 4
- [x] 支持 SVG 图标自动注册组件
- [x] vw 视口适配
- [x] Axios 封装
- [x] 打包资源 gzip 压缩
- [x] 开发环境支持 Mock 数据
- [x] ESLint
- [x] 首屏加载动画
- [x] 开发环境调试面板
- [x] 生产环境 CDN 依赖

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


## 反馈意见、贡献代码

📚 [反馈意见](./docs/feedback.md)

📚 [贡献代码](./docs/contribution.md)

## 致谢

模版基于[vue3-h5-template](https://github.com/yulimchen/vue3-h5-template)。

## License

本项目采用[MIT协议](./LICENSE)。
