---
title: Color Schemes
---

# Color Schemes

Hugo Narrow ships 12 color schemes, switched from the dock's appearance panel. Built-in schemes are registered in the theme's `data/themes.yaml`; the site only picks the default:

```yaml {filename="params.yaml"}
colorScheme: "default"
```

## Custom schemes

Create a CSS file under your site's `assets/css/custom/` and define `[data-theme="mytheme"]` plus its `.dark` variant. Use the raw shadcn token names:

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

Register it in your site's `data/themes.yaml` so the appearance panel lists it:

```yaml {filename="data/themes.yaml"}
mytheme:
  name: My Theme
  order: 20
```

`name` is the label in the panel; `order` controls sorting. The key must match `data-theme` in the CSS.

> [!NOTE]
> Site files in `assets/css/custom/*.css` are loaded automatically by `head/css.html`. Plain CSS variables need no Tailwind rebuild.
