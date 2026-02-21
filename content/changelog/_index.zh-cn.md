---
title: "更新日志"
date: 2026-02-20
layout: "timeline"
---

# 更新日志

## v1.3.1 - 2026-02-21

### 重构

- 重构项目卡片和项目详情模板。
- 精简项目头信息。

## v1.3.0 - 2026-02-20

### 重构

- 使用自实现库替换 justified gallery 库，图库现在支持两端对齐、瀑布流和网格布局，支持前端切换布局。
- 使用 photoswipe 替换 Glightbox。
- 移除 masonry 短代码。
- 目录重构，现在支持顶部和侧边悬浮显示。
- 文章封面重构，移除冗杂占位图逻辑。

### 新特性

- 添加 `timeline` 布局，使用 `h2` 区分时间块，使用原生 markdown 语法。

### 样式

- 简化部分样式，移除冗余样式文件。
- 面包屑导航恢复图标。

## v1.2.3 - 2026-02-03

### 新特性

- 定义搜索主区域。

### 重构

- baseof 模板使用网格样式。
- 移除 series 参数。
- 移除 toc 侧边栏宽度参数。

## v1.2.2 - 2026-01-09

### 新特性

- 首页通知支持多语言。
- 支持系列文章分类法字段。

### Bug 修复

- 修复相关文章计数参数。
- 修复评论参数。
- 修复某些语言下 header 按钮溢出。

## v1.2.1 - 2025-12-26

### 新特性

- 添加目录开关（`params.toc.enabled: true`）。
- 添加自定义 head 模板。
- 添加项目内容。
- 添加 `button` 和 `icon` 短代码。

#### Button 短代码

```markdown
{\{< button text="Learn More" url="/about" >}\}
{\{< button text="GitHub" url="https://github.com" icon="github" target="\_self" >}\}
{\{< button text="Download" url="/download" variant="outline" size="lg" >}\}
```

**参数：**

- `text`：按钮文字（必需，或使用内部内容）。
- `url`：链接地址（必需）。
- `variant`：`primary`、`secondary`、`outline`（默认：`primary`）。
- `size`：`sm`、`md`、`lg`（默认：`md`）。
- `icon`：图标名称。
- `target`：`_blank`、`_self`（默认：`_blank`）。
- `rel`：链接关系（`_blank` 时自动添加 `noopener noreferrer`）。

#### Icon 短代码

显示 `~/assets/icons/` 目录下的图标：

```markdown
{\{< icon name="heart" >}\}
{\{< icon name="github" size="lg" >}\}
{\{< icon name="sun" class="text-primary" >}\}
```

**参数：**

- `name`: 图标名称（必需）- 查看 `~/assets/icons/` 了解可用图标 或者将自定义图放置在此目录下。
- `size`: `xs`, `sm`, `md`, `lg`, `xl`, `2xl` (默认：`md`)。
- `class`: 自定义类名，可以用来更改颜色。

### Bug 修复

- 移除冗余样式文件。
- 调整链接样式以修复不必要的下划线。

## v1.2.0 - 2025-12-24

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

## v1.1.6 - 2025-11-16

### 功能增强

- 首页作者信息支持 i18n 翻译
- 首页作者信息和最近文章之间添加自定义内容模板

### Bug 修复

- 修复站点配置文件中 clarity 参数名称错误

## v1.1.5 - 2025-09-05

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

## v1.1.4 - 2025-08-22

### Bug 修复

- 修复文章卡片摘要索引顺序
- 修复阅读进度和代码块设置

### 功能增强

- 添加语言切换选项，添加参数 `params: languageSwitchMode`，支持 `dropdown` 和 `cycle` 选项

### 样式优化

- 页脚添加版权信息

## v1.1.3 - 2025-08-06

### Bug 修复

- 修复文章展位图不生效
- 修复普通页面评论不显示
- 修复版权组件中 URL 过长导致页面溢出

### 样式优化

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

## v1.1.2 - 2025-07-02

### Bug 修复

- 修复 Frontmatter 版权参数不生效

### 样式优化

- 图片居中显示

### 重大变更

- license 字段添加 `author` 和 `show` 参数
- 删除 `showLicense` 参数

## v1.1.1 - 2025-06-25

### Bug 修复

- 修复 masonry 短代码 ID 重复导致的样式失效问题。
- 修复 glightbox 和 justified 参数设置不生效问题 。

### 样式优化

- 优化链接、脚注样式。
- 添加 scrollbar 样式。
- 添加主题配色，来自[tweakcn](https://tweakcn.com/)。

## v1.1.0 - 2026-06-17

本次更新重构了图库配置，并添加了瀑布流布局图库短代码。

### 重大变更

图库配置结构已更新，请及时调整您的 Hugo 配置。

详情请参阅 [发布说明](https://github.com/tom2almighty/hugo-narrow/releases/tag/v1.1.0)。

### 功能增强

- 瀑布流图库短代码：新增 `{\{< masonry >}}` 短代码，支持瀑布流布局。

```markdown
{\{< masonry columns=4 gutter=15 >}\}
![Image 1](image1.jpg)
![Image 2](image2.jpg)
{\{< /masonry >}\}
```

### 改进

- 全新灯箱系统：图库灯箱由 lightGallery 迁移至 GLightbox，提升性能与现代化体验。
- 优化分栏布局：jQuery 版 justified gallery 替换为 flickr-justified-gallery，全面支持原生 JavaScript。
- 移除 jQuery 依赖：图库系统完全去除 jQuery，提升加载速度并减小包体积。

### Bug 修复

- 修复 post-meta 组件的 i18n 翻译问题。
- 解决统计模板导入异常问题。

## v1.0.0 - 2025-06-14

本次更新添加了图库功能，同时文章封面会生成展位图，SEO 数据由 Hugo 内置模板生成。

### 功能增强

- 集成 Hugo 内置 SEO 模板
- 实现图库功能支持
- 添加文章封面自定义占位图功能

### 改进

- 移除冗余元数据字段
- 修复文章页导航描述显示问题
