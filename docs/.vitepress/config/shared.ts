import type { UserConfig } from 'vitepress'

// Options shared across every locale. Locale-specific bits (nav, sidebar,
// translated UI labels) live in ./zh.ts and ./en.ts and are merged on top.
export const shared: UserConfig = {
  title: 'Hugo Narrow',

  // GitHub Pages *project* site is served from /<repo>/.
  // Using a custom domain or a user/org page instead? Change this to '/'.
  base: '/hugo-narrow-docs',

  cleanUrls: true,
  lastUpdated: true,

  // Content is still being migrated, so sidebar links may point at pages that
  // don't exist yet. Flip this to `false` (or an array of ignore patterns)
  // once every page is in place so broken links fail the build again.
  ignoreDeadLinks: true,

  head: [
    ['meta', { name: 'theme-color', content: '#ea7317' }],
  ],

  markdown: {
    lineNumbers: true,
  },

  themeConfig: {
    // add '/logo.svg' (placed in docs/public/) here once you have a logo
    // logo: '/logo.svg',

    socialLinks: [
      { icon: 'github', link: 'https://github.com/tom2almighty/hugo-narrow' },
    ],

    search: {
      provider: 'local',
      options: {
        locales: {
          // Search UI strings for the Chinese locale. The key must match the
          // locale key in config.mts, which is 'zh' (not 'root' — there is no
          // root locale; both languages live in subfolders).
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档',
              },
              modal: {
                displayDetails: '显示详细列表',
                resetButtonTitle: '清除查询条件',
                backButtonTitle: '关闭搜索',
                noResultsText: '无法找到相关结果',
                footer: {
                  selectText: '选择',
                  selectKeyAriaLabel: '选择',
                  navigateText: '切换',
                  navigateUpKeyAriaLabel: '上箭头',
                  navigateDownKeyAriaLabel: '下箭头',
                  closeText: '关闭',
                  closeKeyAriaLabel: 'esc',
                },
              },
            },
          },
        },
      },
    },
  },
}
