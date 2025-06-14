# Color Schemes

Hugo Narrow comes with multiple built-in color schemes, supports custom colors, and allows color scheme switching through configuration files.

## Basic Interface Configuration

```yaml
params:
  showThemeSwitch: true      # Whether to show the theme switcher (palette icon)
```

## Theme Configuration

```yaml
params:
  colorScheme: "default"
  
  # Theme list
  themes:
    default:
      name: "Default"
      order: 1
    claude:
      name: "Claude"
      order: 2
    bumblebee:
      name: "Bumblebee"
      order: 3
    emerald:
      name: "Emerald"
      order: 4
    nord:
      name: "Nord"
      order: 5
    sunset:
      name: "Sunset"
      order: 6
    abyss:
      name: "Abyss"
      order: 7
    dracula:
      name: "Dracula"
      order: 8
```

## Custom Theme Styles

### 1. Creating a New Theme

Create a new theme file in the `assets/css/custom/` directory. Here's an example using the `dracula` color scheme:

```css
[data-theme="dracula"] {
  --color-primary: oklch(0.70 0.15 346.812);
  --color-primary-foreground: oklch(0.98 0.007 106.545);
  --color-secondary: oklch(0.68 0.12 301.883);
  --color-secondary-foreground: oklch(0.98 0.007 106.545);
  --color-accent: oklch(0.75 0.10 66.558);
  --color-accent-foreground: oklch(0.20 0.024 66.558);
  --color-background: oklch(0.95 0.01 277.508);
  --color-foreground: oklch(0.30 0.022 277.508);
  --color-muted: oklch(0.90 0.015 277.508);
  --color-muted-foreground: oklch(0.50 0.02 277.508);
  --color-border: oklch(0.82 0.02 277.508);
  --color-card: oklch(0.95 0.01 277.508);
  --color-card-foreground: oklch(0.30 0.022 277.508);
  --color-popover: oklch(0.97 0.005 277.508);
  --color-popover-foreground: oklch(0.30 0.022 277.508);

  --color-note: oklch(0.65 0.15 240);
  --color-tip: oklch(0.70 0.14 160);
  --color-important: oklch(0.70 0.15 346.812);
  --color-warning: oklch(0.75 0.16 85);
  --color-caution: oklch(0.65 0.18 15);
}

[data-theme="dracula"].dark {
  --color-primary: oklch(0.755 0.183 346.812);
  --color-primary-foreground: oklch(0.151 0.036 346.812);
  --color-secondary: oklch(0.742 0.148 301.883);
  --color-secondary-foreground: oklch(0.148 0.029 301.883);
  --color-accent: oklch(0.834 0.124 66.558);
  --color-accent-foreground: oklch(0.167 0.024 66.558);
  --color-background: oklch(0.288 0.022 277.508);
  --color-foreground: oklch(0.977 0.007 106.545);
  --color-muted: oklch(0.394 0.032 275.524);
  --color-muted-foreground: oklch(0.879 0.006 275.524);
  --color-border: oklch(0.45 0.035 277.508);
  --color-card: oklch(0.32 0.025 277.508);
  --color-card-foreground: oklch(0.977 0.007 106.545);
  --color-popover: oklch(0.394 0.032 275.524);
  --color-popover-foreground: oklch(0.977 0.007 106.545);

  --color-note: oklch(0.70 0.14 240);
  --color-tip: oklch(0.75 0.13 160);
  --color-important: oklch(0.755 0.183 346.812);
  --color-warning: oklch(0.80 0.15 85);
  --color-caution: oklch(0.70 0.17 15);
}
```

### 2. Configration theme

Add you theme at `hugo.yaml`:

```yaml
params:
  themes:
    dracula:
      name: "dracula"
      order: 9
```

> [!NOTE]
> You can also custom you styles at `~/assets/css/theme.css` or `~/assets/css/custom.css`
>
> You should install dependancies: `pnpm add -D tailwindcss @tailwindcss/cli @tailwindcss/typography`
>
> Then compile tailwindcss: `npx tailwindcss -i ./assets/css/main.css -o ./assets/css/compiled.css`
>
> See more at [Custom Styles](/configration/custom-style)