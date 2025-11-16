# 站点基础配置

本文档详细介绍 Hugo Narrow 主题的站点基础配置选项。所有配置都在 `hugo.yaml` 文件中进行。

## 基础配置

```yaml
# 基本站点配置
baseURL: 'https://example.com'    # 网站的基础 URL
title: 'My Website'               # 网站标题
theme: 'hugo-narrow'              # 主题名称

# 语言设置
languageCode: 'zh-CN'            # 默认语言代码，用于搜索引擎索引语言
defaultContentLanguage: 'zh-cn'   # 默认内容语言，决定站点显示语言
defaultContentLanguageInSubdir: false  # 默认语言是否使用子目录

# 时区设置
timeZone: 'Asia/Shanghai'        # 时区设置

# 内容处理配置
hasCJKLanguage: true   # 是否包含中日韩文字
enableEmoji: true      # 启用 emoji 支持

# 分页配置
pagination:
  pagerSize: 6       # 分页器显示的页数

# URL 配置
permalinks:
  posts: /posts/:year/:month/:slug/  # 文章永久链接格式
  pages: /:slug/                     # 页面永久链接格式

# 分类法配置(无需修改)
taxonomies:
  category: categories  # 分类
  tag: tags           # 标签
```

## SEO

```yaml
params:
  # 站点信息 用于 SEO
  description: "网站描述"  # 网站描述，用于 SEO
  keywords: ["关键词1", "关键词2"]  # 网站关键词
  defaultAuthor: "Hugo Narrow" # 作者
  language: "en-US"
  shortName: "Hugo Narrow"  # PWA

  logo:
    image: "/images/logo.svg"  # 静态目录相对路径, 留空使用站点标题首字母并适配主题配色
    link: "/"                  # 点击访问站点主页

  favicon:
    svg: "/favicon.svg"        # SVG 格式 favicon
  
  images: 
    - "/images/og-default.avif"  # 默认 Open Graph 图片
```

## 导航栏设置

支持 `true/false`

```yaml
params:
  stickyHeader: true  # 粘性导航栏
  showThemeSwitch: true      # 是否显示主题配色切换按钮
  showDarkModeSwitch: true   # 是否显示暗色模式切换按钮
  showLanguageSwitch: true   # 是否显示语言切换按钮
  languageSwitchMode: dropdown # 语言切换模式: "dropdown" (显示菜单) or "cycle" (点击直接切换)
  # Dock 显示模式
  # Options: "scroll" (滚动显示), "always" (常驻显示), "float" (悬浮显示)
  dock: "float"
```

## 首页配置

### 作者信息卡片

作者信息支持两种配置方式，在 Hugo 站点配置中配置和首页 `_index.md` 文件中配置，配置的说明如下：

- `_index.md` 文件的配置会覆盖站点配置文件的参数
- `_index.md` 文件的配置支持 i18n，如 `_index.md` 和 `_index.zh.md`
- `_index.md` 文件的配置**不支持合并参数**，即如果配置则需要填写全部参数

```yaml
params:
  author:
    name: "Hugo Narrow"
    title: "A Clean and Minimal Hugo Theme"
    description: "Focused on content and user experience."
    avatar: "/images/avatar.svg"
    social:
      - name: "GitHub"
        url: "https://github.com/username"
        icon: "github"
      - name: "Twitter"
        url: "https://twitter.com/username"
        icon: "twitter"
      - name: "Email"
        url: "mailto:hello@example.com"
        icon: "email"
```

`icon` 放置在 `~/assets/icons` 目录下，放入需要的 `SVG` 文件，以 `icon: SVG 文件名` 方式使用。

### 首页自定义内容

在 作者信息和最近文章之间支持添加自定义内容模板，通过参数配置是否引入自定义模板及引入的模板名称。

模板应放置在 `~/layouts/_partials/content/` 文件夹。

```yaml
params:
  home_custom:
    enabled: true
    files:
      - custom_1.html
      - custom_2.html
```

### 最近文章

首页最近文章数量：

```yaml
params:
  home:
    recentPostsCount: 5
```

## 文章页面配置

```yaml
  post:
    showRelated: true           # 相关文章展示
    relatedPostsCount: 3        # 相关文章卡片数量

    license:
      show: true
      author: Hugo Narrow
      name: "CC BY-NC-SA 4.0"
      description: "This work is licensed under a Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License. Please attribute the source, use non-commercially, and maintain the same license."
      url: "https://creativecommons.org/licenses/by-nc-sa/4.0/"
      displayName: "CC BY-NC-SA 4.0"
```

## 输出配置

```yaml
outputs:
  home: ["HTML", "RSS", "JSON", "WebAppManifest"]

# 自定义输出 WebManifest
outputFormats:
  WebAppManifest:
    mediaType: "application/manifest+json"
    baseName: "site"
    isPlainText: true
```

## 阅读进度

```yaml
params:
  readingProgress:
    enabled: true
    height: 3
    showOnHomepage: false
    smoothScroll: true
    hideOnComplete: false
```
