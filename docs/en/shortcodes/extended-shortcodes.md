---
title: Extended Shortcodes
---

Delete the `\` between `{\{` and `}\}`.

## Bilibili

```bash
{\{< bilibili VIDEO_ID PART_NUMBER >}\}
```

Support AV number or BV number, `PART_NUMBER` is optinal, specifies which part to display when provided.

## Tencent Video

```bash
{\{< tencent VIDEO_ID >}\}
```

## Link cards

### Single card

```bash
{\{< link title="Google" description="The world largest search engine." url="https://google.com" icon="https://google.com/favicon.ico" >}\}
```

`title` and `url` are required; `description` and `icon` are optional. `icon` accepts:

- A full URL or site-relative path: rendered as an image.
- An icon name such as `github`: uses the SVG in `assets/icons/`.
- Empty: falls back to the `link` icon.

### Group

`data/links.yaml` is a flat list grouped by a `group` field:

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

Render the whole group in Markdown:

```bash
{\{< link group="social" >}\}
```

A missing group, or an entry without `title` / `url`, fails the build instead of rendering a placeholder card.

## Button

```markdown
{\{< button text="Learn More" url="/about" >}\}
{\{< button text="GitHub" url="https://github.com" icon="github" target="\_self" >}\}
{\{< button text="Download" url="/download" variant="outline" size="lg" >}\}
```

**Parameters:**

- `text`: Button text (required, or use inner content)
- `url`: Link address (required)
- `variant`: `primary`, `secondary`, `outline` (default: primary)
- `size`: `sm`, `md`, `lg` (default: `md`)
- `icon`: Theme icon name
- `target`: `_blank`, `_self` (default: `_blank`)
- `rel`: Link relationship (noopener noreferrer is automatically added when `_blank` is used)

## Icon

Display SVG icons from the `~/assets/icons/` directory:

```markdown
{\{< icon name="heart" >}\}
{\{< icon name="github" size="lg" >}\}
{\{< icon name="sun" class="text-primary" >}\}
```

**Parameters:**

- `name`: Icon name (required) - Check `assets/icons/` for available icons or place custom icons in this directory, or place the custom icon in this directory
- `size`: `xs`, `sm`, `md`, `lg`, `xl`, `2xl` (default: `md`)
- `class`: Custom CSS class, which can be used to change colors

## Tabs

Use the `tabs` and `tab` shortcodes to switch between arbitrary Markdown content.

```markdown
{\{< tabs >}\}

{\{< tab label="" >}\}
{\{< /tab >}\}

{\{< tab label="" >}\}
{\{< /tab >}\}

{\{ /tabs >}\}
```

## Custom shortcodes

Add your shortcode templates in the `~/layout/_shortcodes` directory. If using Tailwind CSS, you'll need to compile styles locally to apply them to the theme.
