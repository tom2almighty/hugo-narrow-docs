---
title: Hugo 模块
---

# Hugo 模块

## 安装要求

在开始之前，你需要安装以下软件：

- [Hugo 扩展版](https://gohugo.io/installation/) 且版本大于等于 0.165。
- [Git](https://git-scm.com/)
- [Go](https://go.dev/)

## 步骤

### 初始化新的站点

```bash
hugo new site my-site --format=yaml
```

### 通过 Hugo 模块引入主题

```bash
# 初始化Hugo模块
cd my-site
hugo mod init github.com/username/my-site

# 添加 Hugo Narrow 主题
hugo mod get github.com/tom2almighty/hugo-narrow/v2
```

### 复制示例站点配置

将 `hugo-narrow/exampleSite/` 下的内容复制到站点根目录下。这种方式在 `~/themes/` 目录下不会创建文件，访问[主题仓库](https://github.com/tom2almighty/hugo-narrow/tree/main/exampleSite)查看文件。

修改站点的 `config/_default/hugo.yaml` 配置文件，移除 `theme: "hugo-narrow"`，通过模块引入主题：

```yaml
module:
  hugoVersion:
    extended: true
    min: 0.165.0
  imports:
    - path: github.com/tom2almighty/hugo-narrow/v2
```

### 本地预览

```bash
hugo server --buildDrafts --disableFastRender
```

访问 `http://localhost:1313` 查看预览站点。

## 更新主题

更新仓库中**所有**的模块，使用下面的命令：

```bash
hugo mod get -u
```

更新主题模块使用下面的命令：

```bash
hugo mod get -u github.com/tom2almighty/hugo-narrow/v2
```

如果之前使用的是不带 `/v2` 的模块路径，先将配置文件中 `module.imports` 的主题路径改为 `github.com/tom2almighty/hugo-narrow/v2`，再执行上面的更新命令。更新后运行 `hugo mod tidy` 清理旧的模块依赖。

> [!NOTE]
>
> 访问 [Hugo 模块](https://gohugo.io/hugo-modules/use-modules/#update-all-modules) 查看 Hugo 模块更新文档。
