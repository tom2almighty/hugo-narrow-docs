---
title: 配色
---

Hugo Narrow 内置 12 套配色，从 Dock 的外观面板切换。内置主题注册在主题自带的 `data/themes.yaml`，站点只需要选择默认值：

```yaml {filename="params.yaml"}
colorScheme: "default"
```

## 自定义配色

在站点的 `assets/css/custom/` 下新建一个 CSS 文件，定义 `[data-theme="mytheme"]` 和对应的 `.dark`。变量名使用 shadcn 的原始 token：

```css
[data-theme="mytheme"] {
  --primary: oklch(0.62 0.14 39.04);
  --primary-foreground: oklch(1 0 0);
  --secondary: oklch(0.92 0.01 92.99);
  --secondary-foreground: oklch(0.43 0.02 98.6);
  --accent: oklch(0.92 0.01 92.99);
  --accent-foreground: oklch(0.27 0.02 98.94);
  --background: oklch(0.98 0.01 95.1);
  --foreground: oklch(0.34 0.03 95.72);
  --muted: oklch(0.93 0.02 90.24);
  --muted-foreground: oklch(0.61 0.01 97.42);
  --border: oklch(0.88 0.01 97.36);
  --card: oklch(0.98 0.01 95.1);
  --card-foreground: oklch(0.27 0.02 98.94);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.27 0.02 98.94);
}

[data-theme="mytheme"].dark {
  --primary: oklch(0.67 0.13 38.76);
  --primary-foreground: oklch(1 0 0);
  --secondary: oklch(0.98 0.01 95.1);
  --secondary-foreground: oklch(0.31 0 106.6);
  --accent: oklch(0.21 0.01 95.42);
  --accent-foreground: oklch(0.97 0.01 98.88);
  --background: oklch(0.27 0 106.64);
  --foreground: oklch(0.81 0.01 93.01);
  --muted: oklch(0.22 0 106.71);
  --muted-foreground: oklch(0.77 0.02 99.07);
  --border: oklch(0.36 0.01 106.89);
  --card: oklch(0.27 0 106.64);
  --card-foreground: oklch(0.98 0.01 95.1);
  --popover: oklch(0.27 0 106.64);
  --popover-foreground: oklch(0.92 0 106.48);
}
```

然后在站点的 `data/themes.yaml` 里注册，外观面板才会列出它：

```yaml {filename="data/themes.yaml"}
mytheme:
  name: My Theme
  order: 20
```

`name` 是面板里显示的名字，`order` 决定排序。`key` 必须和 CSS 里的 `data-theme` 一致。

> [!NOTE]
> 站点 `assets/css/custom/*.css` 会被 `head/css.html` 自动加载，直接写 CSS 变量即可，不需要重新编译 Tailwind。
