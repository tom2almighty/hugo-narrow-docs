# 快速开始

本指南将帮助你快速设置和使用 Hugo Narrow 主题。

## 前置要求

在开始之前，请确保你的系统已安装：

- [Git](https://git-scm.com/)
- [Hugo Extended](https://gohugo.io/installation/) (需要扩展版本且大于等于0.146)


## 安装

### 创建新的 Hugo 站点

```bash
hugo new site myblog
cd myblog
git init
```

### 添加主题

有两种方式添加主题：

#### 方式一：使用 Git 子模块（推荐）

```bash
git submodule add https://github.com/tom2almighty/hugo-narrow.git themes/hugo-narrow
# 更新子模块
git submodule update --init --recursive
```

#### 方式二：直接下载

访问 [Hugo Narrow 发布页面](https://github.com/tom2almighty/hugo-narrow/releases)下载最新版本，并解压到 `themes/hugo-narrow` 目录。


### 配置主题

复制示例配置文件：
```bash
cp -r themes/hugo-narrow/exampleSite/* .
```

修改 `hugo.yaml` 配置文件：
```yaml
theme: hugo-narrow
baseURL: 'https://example.com'  # 改为你的网站 URL
title: 'My Blog'  # 改为你的网站标题
```

### 创建内容

创建新文章：
```bash
hugo new posts/my-first-post.md
```

编辑文章头部信息（Front Matter）：
```yaml
---
title: "我的第一篇文章"
date: 2025-06-13
draft: false
categories: ["博客"]
tags: ["Hugo", "教程"]
---
```

### 本地预览

运行开发服务器：
```bash
hugo server -D
```

现在你可以在浏览器中访问 `http://localhost:1313` 查看你的网站。

## 在线部署（Vercel）

在站点根目录创建 `vercel.json`

```json
{
  "build": {
    "env": {
      "HUGO_VERSION": "0.146.0"
    }
  },
  "buildCommand": "hugo --minify --gc"
}
```


