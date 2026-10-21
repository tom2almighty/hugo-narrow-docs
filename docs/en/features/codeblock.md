---
title: Code Block
---

Code blocks support copy, language/filename display, and collapsing.

```yaml {filename="params.yaml"}
codeblock:
  style: catppuccin-latte # Chroma light style
  darkStyle: catppuccin-mocha # Chroma dark style
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

Syntax highlighting CSS is generated at build time by Hugo's `css.ChromaStyles`; there is no stylesheet to maintain. To change the palette, set `style` and `darkStyle`:

```yaml {filename="params.yaml"}
codeblock:
  style: github
  darkStyle: github-dark
```

Style names are Chroma's, for example `catppuccin-latte`, `catppuccin-mocha`, `github`, `github-dark`, `nord`, or `dracula`. An invalid name fails the build.
