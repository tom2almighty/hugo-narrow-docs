---
title: Code Block
---

Code blocks support copy, language/filename display, and collapsing.

```yaml {filename="params.yaml"}
codeblock:
  collapse:
    enabled: true
    defaultState: expanded # expanded | collapsed
    maxLines: 30
    collapsedHeight: 120
```

Blocks longer than `maxLines` start collapsed to `collapsedHeight` pixels. A single block can override this in Markdown attributes:

````markdown
```go {filename="main.go" collapsed=true}
package main
```
````

## Highlighting

Syntax highlighting CSS is generated at build time by Hugo's `css.ChromaStyles`; there is no stylesheet to maintain. The theme reads Hugo's standard `markup.highlight.style` and generates the dark stylesheet from that style's dark counterpart, so a site only configures one light style.

```yaml {filename="hugo.yaml"}
markup:
  highlight:
    noClasses: false
    style: catppuccin-latte
```

Hugo provides paired light/dark styles, for example:

| Light style | Dark counterpart |
| --- | --- |
| `catppuccin-latte` | `catppuccin-mocha` |
| `github` | `github-dark` |
| `monokailight` | `monokai` |
| `solarized-light` | `solarized-dark` |
| `tokyonight-day` | `tokyonight-night` |

See [Hugo syntax highlighting styles](https://gohugo.io/quick-reference/syntax-highlighting-styles/) for the full list, [css.ChromaStyles](https://gohugo.io/functions/css/chromastyles/) for the generator, and [markup.highlight](https://gohugo.io/configuration/markup/#highlight) for the configuration options.

If the selected style has no dark counterpart, `mode: dark` fails at build time. Use one of the paired styles above or override colors in custom CSS.

> [!NOTE]
> Hugo Narrow 2.0 removed `params.codeblock.style` and `params.codeblock.darkStyle`. The old `autoCollapseLines` option is now `maxLines`; `autoCollapseHeight` was removed.
