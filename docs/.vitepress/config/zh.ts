import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

const nav: DefaultTheme.NavItem[] = [
  { text: '示例', link: 'https://tom2almighty.github.io/hugo-narrow' },
  { text: '更新日志', link: '/zh/changelog' },
]

// Sidebar key '/zh/' must match the route prefix of the Chinese pages, which
// live in docs/zh/ and are therefore served under /zh/. Every link is absolute
// and prefixed with /zh/ for the same reason.
const sidebar: DefaultTheme.Sidebar = {
  '/zh/': [
    {
      text: '快速开始',
      collapsed: false,
      items: [
        { text: 'Hugo 模块', link: '/zh/quickstart/hugo-mod' },
        { text: 'Git 子模块', link: '/zh/quickstart/git-submodule' },
      ],
    },
    {
      text: '内容管理',
      collapsed: false,
      items: [
        { text: '组织文件', link: '/zh/content-management/organize-files' },
        { text: '本地资源', link: '/zh/content-management/local-resources' },
        { text: '模板文件', link: '/zh/content-management/archetypes' },
        { text: '元数据', link: '/zh/content-management/frontmatter' },
      ],
    },
    {
      text: '站点配置',
      collapsed: false,
      items: [
        { text: '基础配置', link: '/zh/configuration/basic-config' },
        { text: '菜单', link: '/zh/configuration/menus' },
        { text: '多语言', link: '/zh/configuration/multilingual' },
      ],
    },
    {
      text: '特色功能',
      collapsed: false,
      items: [
        { text: 'SEO', link: '/zh/features/seo' },
        { text: '首页', link: '/zh/features/home' },
        { text: '作者', link: '/zh/features/author' },
        { text: '页头', link: '/zh/features/header' },
        { text: 'Dock', link: '/zh/features/dock' },
        { text: '配色方案', link: '/zh/features/color-schemes' },
        { text: '文章', link: '/zh/features/posts' },
        { text: '评论', link: '/zh/features/comments' },
        { text: '统计分析', link: '/zh/features/analytics' },
        { text: '代码块', link: '/zh/features/codeblock' },
        { text: '公式与图表', link: '/zh/features/formulas-charts' },
        { text: '图库', link: '/zh/features/gallery' },
        { text: '杂项', link: '/zh/features/miscellaneous' },
      ],
    },
    {
      text: '短代码',
      collapsed: false,
      items: [
        { text: '内置短代码', link: '/zh/shortcodes/build-in-shortcodes' },
        { text: '扩展短代码', link: '/zh/shortcodes/extended-shortcodes' },
      ],
    },
    {
      text: '进阶',
      collapsed: false,
      items: [
        { text: '自定义主题', link: '/zh/advanced/custom-theme' },
      ],
    },
  ],
}

// Chinese locale. Key in config.mts is 'zh', so files live in docs/zh/ and are
// served under /zh/.
export const zh: LocaleSpecificConfig<DefaultTheme.Config> & {
  label: string
  link?: string
} = {
  label: '简体中文',
  lang: 'zh-Hans',
  link: '/zh/',
  title: 'Hugo Narrow 文档',
  description: 'Hugo Narrow 主题官方文档：简洁、专注内容与用户体验的 Hugo 主题。',
  themeConfig: {
    nav,
    sidebar,
    editLink: {
      pattern: 'https://github.com/tom2almighty/hugo-narrow-docs/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页',
    },
    outline: { label: '页面导航', level: [2, 3] },
    docFooter: { prev: '上一页', next: '下一页' },
    lastUpdated: {
      text: '最后更新于',
      formatOptions: { dateStyle: 'short', timeStyle: 'short' },
    },
    langMenuLabel: '切换语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
  },
}
