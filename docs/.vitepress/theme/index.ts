import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './custom.css'

// Extend the default theme. Add components / enhanceApp here later if needed.
// https://vitepress.dev/guide/extending-default-theme
export default {
  extends: DefaultTheme,
} satisfies Theme
