# html5-cli

[中文文档](./README_zh-CN.md)

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

> Quickly create an HTML project for mobile devices, and develop with live reload.

## Install

***before first use***, install `html5-cli` globally (only need once):

```bash
npm i -g html5-cli
```

Then you can use `h5` or `html5` command in your terminal to create a new project.

## Create a new project

```bash
# replace <project-name> with actually project name (you can also use `html5` in place of `h5`, there two commands are the same)
h5 init <project-name>
```

Then you will be prompted to choose a template you want to use. Currently, there are two templates.

### classic template

This template is raw enough with only some raw html, css and js files. No building tools like webpack or vite is used.

If you want to develop with live reload, you can use the `html5 build` command which is described later.

### vue3 template

This template is out of the box with the following features:

- [x] Vue3 + Vite4
- [x] TypeScript
- [x] Vant4 UI Library
- [x] Tailwindcss: utility-first CSS framework
- [x] Use Pinia for state management
- [x] Support dark theme mode
- [x] Vue-router 4
- [x] Support automatically register components for SVG icons
- [x] adaptive for vw viewport design
- [x] make request with Axios
- [x] support gzip compression
- [x] support mocking data for development environment
- [x] ESLint
- [x] First screen loading animation
- [x] Debug in development environment with [Eruda](https://github.com/liriliri/eruda)
- [x] Support take advantage of CDN in production environment

## Develop with live reload

If you are using the `classic` template, or any other HTML projects without building tools like webpack or vite, you can use `html5-cli` to provide the live reload ability, making developing a pleasure.

```bash
# enter project and then execute the command below, default server port is 8080
html5 build

# or you can specify the port
html5 build --port 8081
```

Changes to any files whose file name is not ending with `.min.js` or `.min.css` will trigger HTML files visited in browser to be refreshed automatically.

## Thanks

- [vue3-h5-template](https://github.com/yulimchen/vue3-h5-template).

## License

Licensed under the [MIT license](./LICENSE).
