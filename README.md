# html5-cli

> 快速创建针对移动端的项目初始模板文件，方便快速开发。

## 为何你需要html5-cli

公司是不是有一堆移动端的专题活动页要开发？

是不是为了创建这些项目，都需要重复一些编写/复制webpack配置文件、编译命令等工作？

通过脚手架创建项目初始模板文件就是为了减少这些重复性工作。

## 使用

第一次使用前，需要先全局安装`html5-cli`：

```bash
npm install -g html5-cli
```

然后，你就可以在你的终端中使用`html5`，或者使用别名`h5`，然后通过下面的方式创建一个新的空项目:

```bash
# 将<project-name>替换成实际项目名
html5 init <project-name>

# 或者使用h5别名替换html5
h5 init <project-name>
```

接下来就`cd <proejct-name>`进入到项目模板中，按照[模板中的说明](./template/README.md)进行开发即可。

## 移动端开发注意事项/兼容问题

以下是一些比较常见的item，完整列表[点此查看](./docs/README.md)。

* [rem布局注意事项](./docs/rem.md)

## 反馈意见、贡献代码

📚 [反馈意见](./docs/feedback.md)

📚 [贡献代码](./docs/contribution.md)

## License

本项目采用[MIT协议](./LICENSE)。
