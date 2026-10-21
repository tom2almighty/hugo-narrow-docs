---
title: 扩展短代码
---

使用时删除 `{\{` 和 `}\}` 中间的 `\`

## Bilibili

```bash
{\{< bilibili VIDEO_ID PART_NUMBER >}\}
```

同时支持 AV 号和 BV 号，其中 `PART_NUMBER` 是可选参数，指定后展示对应分集。

## 腾讯视频

```bash
{\{< tencent VIDEO_ID >}\}
```

## 链接卡片

### 单卡

```bash
{\{< link title="Google" description="世界上最大的搜索引擎。" url="https://google.com" icon="https://google.com/favicon.ico" >}\}
```

`title` 和 `url` 必填，`description` 和 `icon` 可选。`icon` 支持三种写法：

- 完整 URL 或站内路径：渲染为图片。
- 图标名（如 `github`）：使用 `assets/icons/` 下的 SVG。
- 留空：使用 `link` 图标。

### 分组

`data/links.yaml` 是一个扁平列表，用 `group` 字段分组：

```yaml {filename="data/links.yaml"}
- group: social
  title: GitHub
  description: The world's largest code hosting platform.
  url: https://github.com
  icon: https://github.com/fluidicon.png

- group: social
  title: LinkedIn
  description: Career Social Network.
  url: https://linkedin.com
```

在 Markdown 中渲染整个分组：

```bash
{\{< link group="social" >}\}
```

分组不存在或条目缺少 `title` / `url` 时构建会直接报错，不会渲染错误占位卡片。

## 按钮

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

## 图标

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

## 标签页

标签页内可以输入任意内容

```markdown
{\{< tabs >}\}

{\{< tab label="" >}\}
{\{< /tab >}\}

{\{< tab label="" >}\}
{\{< /tab >}\}

{\{ /tabs >}\}
```

## 自定义短代码

在 `~/layout/_shortcodes` 目录下添加短代码模板，如果使用 `Tailwind CSS`，需要在本地编译样式应用到主题。
