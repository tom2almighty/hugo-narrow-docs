# 主题修改指南

本文介绍如何修改和自定义 Hugo Narrow 主题。

## 修改方法

### 使用 Git 子模块方式

当你使用 `git submodule` 方式添加主题时，将你想要修改的主题文件复制到站点根目录相同路径，在其中定义你的修改。

使用这种方式你**无法**提交修改到 GitHub。

如果你希望保存你的修改到 GitHub 仓库，你可以 fork 主题，然后将 `git submodule` 添加的子模块替换成你的仓库地址。

### 下载主题方式
当你直接下载主题文件到你站点目录时，你可以直接修改主题文件，缺陷是每次更新需要手动对比主题变化，升级困难。


## 自定义样式

支持两种方式自定义样式：

1. 在站点 `~/assets/css/custom/` 目录下新建任意名称的 CSS 文件，在其中写入自定义样式即可。
2. 站点根目录安装依赖：

    ```javascript
    pnpm add -D tailwindcss @tailwindcss/cli @tailwindcss/typography
    ```
   在 `~/assets/css/custom.css` 中或其他样式文件中修改或添加自定义样式。

   完成后需要编译样式文件：
    ```javascript
    npx tailwindcss -i ./assets/css/main.css -o ./assets/css/compiled.css
    ```

## 自定义 JavaScript

在站点 `~/assets/js/custom/` 目录下创建 js 自定义文件即可自动引入。