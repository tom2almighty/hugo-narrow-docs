# Code Block Configuration

Hugo Narrow supports code highlighting and enhances code block functionality, including:

- Language display
- Code copying
- Code block collapsing

## Basic Code Block Configuration

Configure code block styles in `hugo.yaml`:

```yaml
markup:
  highlight:
    codeFences: true           # Enable code fences
    guessSyntax: true         # Auto-detect language
    lineNos: true             # Show line numbers
    lineNumbersInTable: false  # Use table-style line numbers, set to false for theme compatibility
    noClasses: false          # Use CSS classes instead of inline styles
    style: "monokai"          # Code highlighting theme (setting here has no effect, details below)
    tabWidth: 4               # Tab width
```

## Code Highlighting Styles

The theme uses chroma for code highlighting, with github and github-dark styles for light and dark modes respectively.

For better theme compatibility, this theme creates style files using `hugo gen chromastyles --style=github > ./assets/css/github.css` and adapts them to the theme.

### Custom Code Highlighting

Modifying highlight styles also requires generating styles through commands.

```bash
# View all styles
hugo gen chromastyles --help

# Generate style files
hugo gen chromastyles --style=github > ./github.css
hugo gen chromastyles --style=github-dark > ./github-dark.css
```
After completion, replace the corresponding theme variable colors in `~/assets/css/chroma.css`.

You can also replace the corresponding highlight variable names with custom colors.

## Code Block Enhancements

Configure in `hugo.yaml`:

```yaml
params:
  codeblock:
    collapse:
      enabled: true
      defaultState: expanded  # Default collapse behavior: expanded, collapsed
      autoCollapseLines: 30   # Collapse when exceeding specified lines
      autoCollapseHeight: 400  # Collapse when exceeding specified height
      collapsedHeight: 120    # Height when collapsed
```




