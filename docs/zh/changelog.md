---
sidebar: false
aside: false
---

# 更新日志

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
