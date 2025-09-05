import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en',
  locales: {
    root: {
      label: 'English',
      lang: 'en',
    },
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/zh/',
      themeConfig: {
    nav: [
      { text: '主页', link: '/zh/' },
      { text: '更新日志', link: '/zh/changelog' }
    ],
        sidebar: [
          {
            text: '介绍',
            items: [
              { text: '关于', link: '/zh/introduction/about' },
              { text: '快速开始', link: '/zh/introduction/get-started' },
              { text: '自定义主题', link: '/zh/introduction/modify' }
            ]
          },
          {
            text: '文章',
            items: [
              { text: '头信息', link: '/zh/posts/frontmatter' },
              { text: '图像资源', link: '/zh/posts/image' },
              { text: 'Markdown 语法增强', link: '/zh/posts/markdown-enhanced' },
              { text: '短代码', link: '/zh/posts/shortcodes' },
            ]
          },
          {
            text: '配置',
            items: [
              { text: '站点配置', link: '/zh/configration/site' },
              { text: '导航菜单', link: '/zh/configration/menu' },
              { text: '主题配色', link: '/zh/configration/color-scheme' },
              { text: '多语言', link: '/zh/configration/i18n' },
              { text: '代码块', link: '/zh/configration/codeblock' },
              { text: '统计功能', link: '/zh/configration/analytics' },
              { text: '评论功能', link: '/zh/configration/comments' },
              { text: '图库功能', link: '/zh/configration/gallery' }
            ]
          }
        ]
      }
    }
  },


  title: "Narrow",
  description: "Modern Hugo Theme with Multiple Color Schemes - Built on TailwindCSS 4.",
  head: [
    ['link',{ rel: 'icon', href: '/logo.svg'}],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.svg',
    search: {
      provider: 'local',
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Changelog', link: '/changelog' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'About', link: '/introduction/about' },
          { text: 'Getting Started', link: '/introduction/get-started' },
          { text: 'Customization', link: '/introduction/modify' }
        ]
      },
      {
        text: 'Posts',
        items: [
          { text: 'Front Matter', link: '/posts/frontmatter' },
          { text: 'Images', link: '/posts/image' },
          { text: 'Enhanced Markdown', link: '/posts/markdown-enhanced' },
          { text: 'Shortcodes', link: '/posts/shortcodes' },
        ]
      },
      {
        text: 'Configuration',
        items: [
          { text: 'Site Config', link: '/configration/site' },
          { text: 'Navigation Menu', link: '/configration/menu' },
          { text: 'Color Schemes', link: '/configration/color-scheme' },
          { text: 'I18n', link: '/configration/i18n' },
          { text: 'Code Blocks', link: '/configration/codeblock' },
          { text: 'Analytics', link: '/configration/analytics' },
          { text: 'Comments', link: '/configration/comments' },
          { text: 'Gallery', link: '/configration/gallery' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/tom2almighty/hugo-narrow' }
    ]
    
  },
  sitemap: {
    hostname: 'https://hugo-narrow-docs.vercel.app',
  }
})
