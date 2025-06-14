# Custom Styles

Hugo Narrow supports custom styles.

## Basic Usage

Create a CSS file with any name in the site's `~/assets/css/custom/` directory and write your custom styles in it.

## Compilation Usage

### Install Dependencies

Install dependencies in the site root directory:

```javascript
pnpm add -D tailwindcss @tailwindcss/cli @tailwindcss/typography
```

### Custom Styles

Modify or add custom styles in `~/assets/css/custom.css` or other style files.

### Compilation

```javascript
npx tailwindcss -i ./assets/css/main.css -o ./assets/css/compiled.css
```
