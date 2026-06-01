import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

const nav: DefaultTheme.NavItem[] = [
  { text: 'Demo', link: 'https://tom2almighty.github.io/hugo-narrow' },
  { text: 'Changelog', link: '/en/changelog' },
]

// Sidebar key '/en/' matches the route prefix of the English pages, which live
// in docs/en/ and are served under /en/.
const sidebar: DefaultTheme.Sidebar = {
  '/en/': [
    {
      text: 'Quick Start',
      collapsed: false,
      items: [
        { text: 'Hugo Modules', link: '/en/quickstart/hugo-mod' },
        { text: 'Git Submodule', link: '/en/quickstart/git-submodule' },
      ],
    },
    {
      text: 'Content Management',
      collapsed: false,
      items: [
        { text: 'Organize Files', link: '/en/content-management/organize-files' },
        { text: 'Local Resources', link: '/en/content-management/local-resources' },
        { text: 'Archetypes', link: '/en/content-management/archetypes' },
        { text: 'Frontmatter', link: '/en/content-management/frontmatter' },
      ],
    },
    {
      text: 'Configuration',
      collapsed: false,
      items: [
        { text: 'Basic Config', link: '/en/configuration/basic-config' },
        { text: 'Menus', link: '/en/configuration/menus' },
        { text: 'Multilingual', link: '/en/configuration/multilingual' },
      ],
    },
    {
      text: 'Features',
      collapsed: false,
      items: [
        { text: 'SEO', link: '/en/features/seo' },
        { text: 'Home', link: '/en/features/home' },
        { text: 'Author', link: '/en/features/author' },
        { text: 'Header', link: '/en/features/header' },
        { text: 'Dock', link: '/en/features/dock' },
        { text: 'Color Schemes', link: '/en/features/color-schemes' },
        { text: 'Posts', link: '/en/features/posts' },
        { text: 'Comments', link: '/en/features/comments' },
        { text: 'Analytics', link: '/en/features/analytics' },
        { text: 'Code Block', link: '/en/features/codeblock' },
        { text: 'Formulas & Charts', link: '/en/features/formulas-charts' },
        { text: 'Gallery', link: '/en/features/gallery' },
        { text: 'Miscellaneous', link: '/en/features/miscellaneous' },
      ],
    },
    {
      text: 'Shortcodes',
      collapsed: false,
      items: [
        { text: 'Built-in Shortcodes', link: '/en/shortcodes/build-in-shortcodes' },
        { text: 'Extended Shortcodes', link: '/en/shortcodes/extended-shortcodes' },
      ],
    },
    {
      text: 'Advanced',
      collapsed: false,
      items: [
        { text: 'Custom Theme', link: '/en/advanced/custom-theme' },
      ],
    },
  ],
}

// English locale, served under /en/.
export const en: LocaleSpecificConfig<DefaultTheme.Config> & {
  label: string
  link?: string
} = {
  label: 'English',
  lang: 'en-US',
  link: '/en/',
  title: 'Hugo Narrow Docs',
  description: 'Official documentation for Hugo Narrow — a clean, content-focused Hugo theme.',
  themeConfig: {
    nav,
    sidebar,
    editLink: {
      pattern: 'https://github.com/tom2almighty/hugo-narrow-docs/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },
    outline: { label: 'On this page', level: [2, 3] },
  },
}
