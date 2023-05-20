import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Super12138",
  description: "Super12138's Blog",
  base: "/",
  lang: "zh-CN",
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      {
        text: '应用',
        items: [
          { text: '全部', link: '/apps' },
          { text: 'Hash Checker', link: '/hschecker/intro' },
          { text: '官方网站查找器（Official Website Finder）', link: '/owf/intro' },
        ]
      }
    ],

    sidebar: [
      { text: '全部应用', link: '/apps'},
      {
        text: 'Hash Checker',
        items: [
          { text: '简介', link: '/hschecker/intro' },
          { text: '下载', link: '/hschecker/download' },
          { text: '使用', link: '/hschecker/use' },
        ]
      },
      {
        text: '官方网站查找器（Official Website Finder）',
        items: [
          { text: '简介', link: '/owf/intro' },
          { text: '下载', link: '/owf/download' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Super12138/super12138.github.io/' }
    ],

    footer: {
      copyright: 'Copyright © 2019-2023 Super12138'
    }
  }
})
