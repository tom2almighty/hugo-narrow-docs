import { defineConfig } from 'vitepress'
import { shared } from './config/shared'
import { zh } from './config/zh'
import { en } from './config/en'

// https://vitepress.dev/reference/site-config
// https://vitepress.dev/guide/i18n
export default defineConfig({
  ...shared,

  // Both locales live in subfolders: the key equals the folder name and the URL
  // prefix. Chinese (docs/zh/) is served at /zh/, English (docs/en/) at /en/.
  // The site root (/) has no locale of its own — docs/index.md redirects to /zh/.
  locales: {
    zh: { ...zh },
    en: { ...en },
  },
})
