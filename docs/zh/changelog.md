---
title: "更新日志"
---

## v1.3.12 - 2026-05-31

- feat: 支持 Comentario 评论系统 [@LTSlw](https://github.com/LTSlw)
- chore: 移除冗余依赖说明，优化构建和 README.md 文件。
- feat: 统一评论系统未配置组件提示，优化跳转评论按钮逻辑。
- feat: 添加 CLAUDE.md 文档说明。

## v1.3.11 - 2026-05-24

- feat: 添加简历模板 [@svenvg93](https://github.com/svenvg93)
- feat: 灯箱图片描述移动到底部中间区域 [@svenvg93](https://github.com/svenvg93)

## v1.3.10 - 2026-05-05

- fix: 更新时间和日期格式化模板，避免上游错误
- chore: 更新 Hugo 最低版本到 0.158.0

## v1.3.9 - 2026-05-05

- feat!: 迁移旧的语言参数

## v1.3.8 - 2026-05-03

- feat: 添加日期格式化模板和参数
- chore: 更新 Hugo 最低版本到 0.156.0

## v1.3.7 - 2026-04-27

- feat: 添加系列分类法列表布局 [@svenvg93](https://github.com/svenvg93)

## v1.3.6 - 2026-03-27

- refactor!: 使用自实现灯箱替换PhotoSwipe

  ```diff
    lightbox:
      enabled: true
  -   bgOpacity: 0.8
  -   showHideAnimationType: zoom
  -   showAnimationDuration: 333
  -   hideAnimationDuration: 333
  ```

## v1.3.5 - 2026-03-18

- refactor: 重构 i18n 翻译。
- feat: 新增短代码 `tabs`。

## v1.3.2 - 2026-3-10

- fix: 修复项目元信息字段错误。
- fix: 修复翻译问题导致的日期错误。
- fix: 添加表格基础样式。
- feat: 导航栏添加子菜单。
- feat: 标题添加锚链接。

## v1.3.1 - 2026-02-21

- refactor: 重构项目卡片和项目详情模板。
- refactor: 精简项目头信息。

## v1.3.0 - 2026-02-20

- refactor!: 使用自实现库替换 justified gallery 库，图库现在支持两端对齐、瀑布流和网格布局，支持前端切换布局。
- refactor!: 使用 photoswipe 替换 Glightbox。
- refactor!: 移除 masonry 短代码。
- refactor!: 目录重构，现在支持顶部和侧边悬浮显示。
- refactor!: 文章封面重构，移除冗杂占位图逻辑。
- feat: 添加 `timeline` 布局，使用 `h2` 区分时间块，使用原生 markdown 语法。
- style: 简化部分样式，移除冗余样式文件。
- style: 面包屑导航恢复图标。

## v1.2.3 - 2026-02-03

- feat: 定义搜索主区域。
- refactor!: baseof 模板使用网格样式。
- refactor!: 移除 series 参数。
- refactor!: 移除 toc 侧边栏宽度参数。

## v1.2.2 - 2026-01-09

- feat: 首页通知支持多语言。
- feat: 支持系列文章分类法字段。
- fix: 修复相关文章计数参数。
- fix: 修复评论参数。
- fix: 修复某些语言下 header 按钮溢出。

## v1.2.1 - 2025-12-26

- feat: 添加目录开关（`params.toc.enabled: true`）。
- feat: 添加自定义 head 模板。
- feat: 添加项目内容。
- feat: 添加 `button` 和 `icon` 短代码。
- fix: 移除冗余样式文件。
- fix: 调整链接样式以修复不必要的下划线。

## v1.2.0 - 2025-12-24

- fix: icon 模板支持填充图标
- fix: 调整部分样式类名
- feat: 支持侧边栏目录
- feat: 支持 Hugo Mod 形式引入主题
- feat: 首页模块支持自定义顺序
- refactor: 结构化站点配置
- refactor: 调整 header 相关参数的层级
- refactor!: 调整 Header 相关参数的层级, 添加目录位置参数。

## v1.1.6 - 2025-11-16

- feat: 首页作者信息支持 i18n 翻译
- feat: 首页作者信息和最近文章之间添加自定义内容模板
- fix: 修复站点配置文件中 clarity 参数名称错误

## v1.1.5 - 2025-09-05

- style: 修改上标下标颜色
- style: 修改 alert 引用块底部 padding
- feat: 使用新标签页打开外部链接
- feat: 支持自定义 js 文件
- feat: 添加 404 模板
- feat: 添加 dock 显示模式参数

  ```diff
  params
  +  dock: float # Options: "scroll" (show on scroll up), "always" (always visible), "float" (floating)
  ```

## v1.1.4 - 2025-08-22

- fix: 修复文章卡片摘要索引顺序
- fix: 修复阅读进度和代码块设置
- feat: 添加语言切换选项，添加参数 `params: languageSwitchMode`，支持 `dropdown` 和 `cycle` 选项
- style: 页脚添加版权信息

## v1.1.3 - 2025-08-06

- fix: 修复文章展位图不生效
- fix: 修复普通页面评论不显示
- fix: 修复版权组件中 URL 过长导致页面溢出
- style: GitHub Alert 样式优化
- style: Plaintext 代码块样式优化
- style: 文章卡片样式优化
- style: 有序列表颜色优化
- style: 相关文章卡片样式精简
- style: 文章导航卡片高度
- feat: 添加 `About` 模板
- feat: 添加 `link` 短代码
- feat: 优化搜索和目录功能点击事件
- refactor!: 重构 CSS 样式框架，移除 `@tailwindcss/typography` 依赖

## v1.1.2 - 2025-07-02

- fix: 修复 Frontmatter 版权参数不生效
- style: 图片居中显示
- refactor!: license 字段添加 `author` 和 `show` 参数
- refactor!: 删除 `showLicense` 参数

## v1.1.1 - 2025-06-25

- fix: 修复 masonry 短代码 ID 重复导致的样式失效问题。
- fix: 修复 glightbox 和 justified 参数设置不生效问题 。
- style: 优化链接、脚注样式。
- style: 添加 scrollbar 样式。
- style: 添加主题配色，来自[tweakcn](https://tweakcn.com/)。

## v1.1.0 - 2026-06-17

- feat: 瀑布流图库短代码：新增 `{\{< masonry >}}` 短代码，支持瀑布流布局。
- refactor: 重构图库，更新参数。
- feat: 全新灯箱系统：图库灯箱由 lightGallery 迁移至 GLightbox，提升性能与现代化体验。
- feat: 优化分栏布局：jQuery 版 justified gallery 替换为 flickr-justified-gallery，全面支持原生 JavaScript。
- feat: 移除 jQuery 依赖：图库系统完全去除 jQuery，提升加载速度并减小包体积。
- fix:修复 post-meta 组件的 i18n 翻译问题。
- fix:解决统计模板导入异常问题。

## v1.0.0 - 2025-06-14

- feat: 集成 Hugo 内置 SEO 模板
- feat: 实现图库功能支持
- feat: 添加文章封面自定义占位图功能
- fix: 移除冗余元数据字段
- fix: 修复文章页导航描述显示问题
