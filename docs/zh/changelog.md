---
sidebar: false
aside: false
---

# 更新日志

## v1.2.0 (2025-12-24)

### 重大变更

调整 Header 相关参数的层级, 添加目录位置参数, 具体参数变更如下:

```diff
- params:
-   logo:
-     image: ""
-     link: ""
-   stickyHeader: true
-   showThemeSwitch: true 
-   showDarkModeSwitch: true
-   showLanguageSwitch: true
-   languageSwitchMode: "dropdown"
+ params:
+   header:
+     sticky: true
+     logo:
+       image: ""
+       link: ""
+     showThemeSwitch: true 
+     showDarkMode: true
+     showLanguageSwitch: true
+     languageSwitchMode: "dropdown"
+   toc:
+     position: left # left | right | card
+     maxWidth: "280px"
+     maxHeight: "80vh"
```

### 功能增强

- 支持侧边栏目录
- 支持 Hugo Mod 形式引入主题
- 首页模块支持自定义顺序


### 重构

- 结构化站点配置
- 调整 header 相关参数的层级

### Bug 修复

- icon 模板支持填充图标
- 调整部分样式类名

## v1.1.6 (2025-11-16)

### 功能增强

- 首页作者信息支持 i18n 翻译
- 首页作者信息和最近文章之间添加自定义内容模板

```diff
+ params:
+   home_custom:
+   enabled: true
+     files:
+       - custom_1.html
+       - custom_2.html
```

### Bug 修复

- 修复站点配置文件中 clarity 参数名称错误

## v1.1.5 (2025-09-05)

### 功能增强

- 使用新标签页打开外部链接
- 支持自定义 js 文件
- 添加 404 模板
- 添加 dock 显示模式参数

```diff
params
+  dock: float # Options: "scroll" (show on scroll up), "always" (always visible), "float" (floating)
```

### 样式优化

- 修改上标下标颜色
- 修改 alert 引用块底部 padding

## v1.1.4 (2025-08-22)

### Bug 修复

- 修复文章卡片摘要索引顺序
- 修复阅读进度和代码块设置

### 功能增强

- 添加语言切换选项，添加参数 `params: languageSwitchMode`，支持 `dropdown` 和 `cycle` 选项

### 样式优化

- 页脚添加版权信息

## v1.1.3 (2025-08-06)

### Bug 修复

- 修复文章展位图不生效
- 修复普通页面评论不显示
- 修复版权组件中 URL 过长导致页面溢出

### 　样式优化

- GitHub Alert 样式优化
- Plaintext 代码块样式优化
- 文章卡片样式优化
- 有序列表颜色优化
- 相关文章卡片样式精简
- 文章导航卡片高度

### 新特性

- 添加 `About` 模板
- 添加 `link` 短代码
- 优化搜索和目录功能点击事件

### 重构

- 重构 CSS 样式框架，移除 `@tailwindcss/typography` 依赖

## v1.1.2 (2025-07-02)

### Bug 修复

- 修复 Frontmatter 版权参数不生效

### 样式优化

- 图片居中显示

### 重大变更

- license 字段添加 `author` 和 `show` 参数
- 删除 `showLicense` 参数

```diff
params:
  post:
-   showLicense: true
    license:
+     show: true
+     author: "Hugo Narrow"
      name: "CC BY-NC-SA 4.0"
      description: "This work is licensed under a Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License. Please attribute the source, use non-commercially, and maintain the same license."
      url: "https://creativecommons.org/licenses/by-nc-sa/4.0/"
      displayName: "CC BY-NC-SA 4.0"
```

## v1.1.1 (2025-06-25)

### Bug 修复

- 修复 masonry 短代码 ID 重复导致的样式失效问题。
- 修复 glightbox 和 justified 参数设置不生效问题 。

### 样式优化

- 优化链接、脚注样式。
- 添加 scrollbar 样式。
- 添加主题配色，来自[tweakcn](https://tweakcn.com/)。

## v1.1.0 (2025-06-17)

### 重大变更

图库配置结构已更新，请及时调整您的 Hugo 配置。详情请参阅 [发布说明](https://github.com/tom2almighty/hugo-narrow/releases/tag/v1.1.0)。

### 功能增强

- 瀑布流图库短代码：新增 `{\{< masonry >}}` 短代码，支持瀑布流布局。

### 改进

- 全新灯箱系统：图库灯箱由 lightGallery 迁移至 GLightbox，提升性能与现代化体验。
- 优化分栏布局：jQuery 版 justified gallery 替换为 flickr-justified-gallery，全面支持原生 JavaScript。
- 移除 jQuery 依赖：图库系统完全去除 jQuery，提升加载速度并减小包体积。

### Bug 修复

- 修复 post-meta 组件的 i18n 翻译问题。
- 解决统计模板导入异常问题。

## v1.0.0 (2025-06-14)

### 功能增强

- 集成 Hugo 内置 SEO 模板
- 实现图库功能支持
- 添加文章封面自定义占位图功能

### 改进

- 移除冗余元数据字段
- 修复文章页导航描述显示问题
