import { defineConfig } from 'vitepress';
import { generateSidebar } from 'vitepress-sidebar';

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Super12138",
    description: "Super12138 应用",
    base: "/",
    lang: "zh-CN",
    lastUpdated: true,
    head: [
        [
            'link', { rel: 'icon', href: '/Super12138.png' }
        ]
    ],
    themeConfig: {
        nav: [
            {
                text: '应用',
                items: [
                    { text: 'Hash Checker', link: '/apps/hschecker/intro' },
                    { text: '待办', link: '/apps/todo/intro' },
                ]
            }
        ],

        sidebar: generateSidebar({
            documentRootPath: 'blog',
            useTitleFromFrontmatter: true,
            useFolderTitleFromIndexFile: true,
            sortMenusByFrontmatterOrder: true
        }),

        socialLinks: [
            { icon: 'github', link: 'https://github.com/Super12138/super12138.github.io/' }
        ],

        footer: {
            copyright: `版权所有 © 2019-${new Date().getFullYear()} Super12138`
        },

        lastUpdated: {
            text: '最后更新于',
            formatOptions: {
                dateStyle: 'short',
                timeStyle: 'medium'
            }
        },

        docFooter: {
            prev: '上一页',
            next: '下一页'
        },

        editLink: {
            pattern: 'https://github.com/Super12138/super12138.github.io/edit/main/blog/:path',
            text: '在 GitHub 上编辑此页面'
        },

        outline: {
            label: '页面导航'
        },

        returnToTopLabel: '回到顶部',
        sidebarMenuLabel: '菜单',
        darkModeSwitchLabel: '主题',
        lightModeSwitchTitle: '切换到浅色模式',
        darkModeSwitchTitle: '切换到深色模式'
    },
    markdown: {
        codeCopyButtonTitle: '复制代码',
        image: {
            lazyLoading: true
        }
    }
});
