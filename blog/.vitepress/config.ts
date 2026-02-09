import { defineConfig } from "vitepress";
import { generateSidebar } from "vitepress-sidebar";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Super12138",
    description: "Super12138 应用",
    base: "/",
    lang: "zh-CN",
    lastUpdated: true,
    head: [["link", { rel: "icon", href: "/Super12138.png" }]],
    themeConfig: {
        nav: [
            {
                text: "应用",
                items: [
                    { text: "Hash Checker", link: "/apps/hschecker/intro" },
                    { text: "待办", link: "/apps/todo/intro" },
                ],
            },
        ],

        sidebar: generateSidebar({
            documentRootPath: "blog",
            useTitleFromFrontmatter: true,
            useFolderTitleFromIndexFile: true,
            sortMenusByFrontmatterOrder: true,
        }),

        socialLinks: [
            { icon: "github", link: "https://github.com/Super12138/super12138.github.io/" },
        ],

        footer: {
            message:
                "所有文章遵循 CC BY-NC-ND 4.0 协议 \n Released under the CC BY-NC-ND 4.0 licence",
            copyright: `版权所有 © 2019-${new Date().getFullYear()} Super12138`,
        },

        lastUpdated: {
            text: "最后更新于",
            formatOptions: {
                dateStyle: "short",
                timeStyle: "medium",
            },
        },

        docFooter: {
            prev: "上一页",
            next: "下一页",
        },

        editLink: {
            pattern: "https://github.com/Super12138/super12138.github.io/edit/main/blog/:path",
            text: "在 GitHub 上编辑此页面",
        },

        outline: {
            label: "页面导航",
        },

        returnToTopLabel: "回到顶部",
        sidebarMenuLabel: "菜单",
        darkModeSwitchLabel: "主题",
        lightModeSwitchTitle: "切换到浅色模式",
        darkModeSwitchTitle: "切换到深色模式",

        search: {
            provider: "local",
            options: {
                miniSearch: {
                    options: {
                        // `tokenize`: 对备索引内容的分词器。
                        // `text`: 备索引内容，由 `extractField` 提供。
                        tokenize: (text) => {
                            // 这种拆分方式可以在遇到英数字时以单词拆分，
                            // 这样做是为了更全面地匹配非英数字的内容，
                            // 同时避免单字母或单数字拆分造成的无意义匹配。
                            return text.match(/[A-Za-z0-9]+|./g)?.filter(Boolean) ?? [];
                        },
                    },
                    searchOptions: {
                        // 完整匹配检索关键字（避免检索单词时出现单字内容）。
                        combineWith: "AND",
                    },
                },
                translations: {
                    button: {
                        buttonText: "搜索内容",
                        buttonAriaLabel: "搜索内容",
                    },
                    modal: {
                        displayDetails: "显示详细搜索结果",
                        resetButtonTitle: "清空搜索关键字",
                        backButtonTitle: "返回",
                        noResultsText: "无法找到",
                        footer: {
                            selectText: "选择",
                            selectKeyAriaLabel: "Enter 键",
                            navigateText: "切换",
                            navigateUpKeyAriaLabel: "向上箭头",
                            navigateDownKeyAriaLabel: "向下箭头",
                            closeText: "关闭",
                            closeKeyAriaLabel: "Esc 键",
                        },
                    },
                },
            }
        }
    },
    markdown: {
        codeCopyButtonTitle: "复制代码",
        image: {
            lazyLoading: true,
        },
    },
});
