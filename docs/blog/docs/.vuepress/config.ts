import { resolve } from "path";
import { defineConfig4CustomTheme, UserPlugins } from "vuepress/config";
import { VdoingThemeConfig } from "vuepress-theme-vdoing/types";
import dayjs from "dayjs";
import sidebarOption from "../.vuepress/config/sidebar";

const DOMAIN_NAME = "xugaoyi.com"; // 域名 (不带https)
const WEB_SITE = `https://${DOMAIN_NAME}`; // 网址+

export default defineConfig4CustomTheme<VdoingThemeConfig>({
  theme: resolve(__dirname, "../../vdoing"), // 使用本地主题包

  base: "/hc-doc/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "航成科技",
      description: "Welcome to the collaboration document of Dalian HangCheng Technology Co., Ltd."
    }
  },

  // 主题配置
  themeConfig: {
    // 导航配置
    nav: [
      { text: "首页", link: "/" },
      {
        text: "前端",
        link: "/web/",
        items: [
          {
            text: "web端",
            items: [
              {
                text: "Vue管理系统",
                link: "/vue-admin/introduce/"
              },
              {
                text: "Vue网页制作",
                link: "/web/introduce/"
              }
            ]
          },
          {
            text: "手机端",
            items: [
              {
                text: "uni-app",
                link: "/app/introduce/"
              },
              {
                text: "微信小程序",
                link: "/wx/introduce/"
              },
              {
                text: "flutter",
                link: "/flutter/introduce/"
              }
            ]
          }
        ]
      },
      {
        text: "后端",
        items: [
          { text: "Java", link: "" },
          { text: "nodejs", link: "" },
          { text: "go", link: "" },
        ]
      },
      {
        text: "开发",
        items: [
          { text: "Git使用手册", link: "/helper/git/" },
          { text: "Markdown使用教程", link: "" },
          { text: "npm常用命令", link: "" },
          { text: "centos相关", link: "" }
        ]
      },
      {
        text: "更多",
        link: ""
      }
    ],
    sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
    logo: "/img/logo.jpg", // 导航栏logo
    repo: "smallsunnyfox/vuepress-theme-reco-starter", // 导航栏右侧生成Github链接
    searchMaxSuggestions: 10, // 搜索结果显示最大数
    lastUpdated: "上次更新", // 开启更新时间，并配置前缀文字   string | boolean (取值为git提交时间)
    docsDir: "docs", // 编辑的文件夹
    // docsBranch: 'master', // 编辑的文件所在分支，默认master。 注意：如果你的分支是main则修改为main
    // editLinks: true, // 启用编辑
    // editLinkText: "编辑",

    // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | <自定义>    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页
    // @ts-ignore
    sidebar: sidebarOption,

    // 文章默认的作者信息，(可在md文件中单独配置此信息) string | {name: string, link?: string}
    author: {
      name: "张牧楠" // 必需
    },

    // 页脚信息
    footer: {
      createYear: 2022, // 博客创建年份
      copyrightInfo:
        '<a href="https://github.com/xugaoyi/vuepress-theme-vdoing/blob/master/LICENSE" target="_blank">MIT License</a> | Copyright © 2018-present Evan You' // 博客版权信息、备案信息等，支持a标签或换行标签</br>
    },

    // 扩展自动生成frontmatter。（当md文件的frontmatter不存在相应的字段时将自动添加。不会覆盖已有的数据。）
    extendFrontmatter: {
      author: {
        name: "张牧楠"
      }
    }
  },

  // 插件配置
  plugins: <UserPlugins>[
    [
      "sitemap", // 网站地图
      {
        hostname: WEB_SITE
      }
    ],

    // 可以添加第三方搜索链接的搜索框（继承原官方搜索框的配置参数）
    [
      "thirdparty-search",
      {
        thirdparty: [
          {
            title: "在MDN中搜索",
            frontUrl: "https://developer.mozilla.org/zh-CN/search?q=", // 搜索链接的前面部分
            behindUrl: "" // 搜索链接的后面部分，可选，默认 ''
          },
          {
            title: "在Runoob中搜索",
            frontUrl: "https://www.runoob.com/?s="
          },
          {
            title: "在Vue API中搜索",
            frontUrl: "https://cn.vuejs.org/api/"
          },
          {
            title: "在Bing中搜索",
            frontUrl: "https://cn.bing.com/search?q="
          },
          {
            title: "通过百度搜索本站的",
            frontUrl: `https://www.baidu.com/s?wd=site%3A${DOMAIN_NAME}%20`
          }
        ]
      }
    ],

    [
      "one-click-copy", // 代码块复制按钮
      {
        copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
        copyMessage: "复制成功", // default is 'Copy successfully and then paste it for use.'
        duration: 1000, // prompt message display time.
        showInMobile: false // whether to display on the mobile side, default: false.
      }
    ],

    [
      "demo-block", // demo演示模块 https://github.com/xiguaxigua/vuepress-plugin-demo-block
      {
        settings: {
          jsfiddle: false, // 是否显示 jsfiddle 链接
          codepen: true, // 是否显示 codepen 链接
          horizontal: false // 是否展示为横向样式
        }
      }
    ],
    [
      "vuepress-plugin-zooming", // 放大图片
      {
        selector: ".theme-vdoing-content img:not(.no-zoom)", // 排除class是no-zoom的图片
        options: {
          bgColor: "rgba(0,0,0,0.6)"
        }
      }
    ],
    [
      "@vuepress/last-updated", // "上次更新"时间格式
      {
        transformer: (timestamp, lang) => {
          return dayjs(timestamp).format("YYYY/MM/DD, HH:mm:ss");
        }
      }
    ],

    [
      "@vuepress/active-header-links",
      {
        sidebarLinkSelector: ".sidebar-link",
        headerAnchorSelector: ".header-anchor"
      }
    ],

    "@vuepress/nprogress",

    [
      "vuepress-plugin-container",
      {
        type: "note",
        defaultTitle: {
          "/": "笔记",
          "/en/": "NOTE"
        }
      }
    ],
    [
      "vuepress-plugin-container",
      {
        type: "tip",
        defaultTitle: {
          "/": "提示",
          "/en/": "TIP"
        }
      }
    ],
    [
      "vuepress-plugin-container",
      {
        type: "warning",
        defaultTitle: {
          "/": "注意",
          "/en/": "WARNING"
        }
      }
    ],
    [
      "vuepress-plugin-container",
      {
        type: "danger",
        defaultTitle: {
          "/": "警告",
          "/en/": "WARNING"
        }
      }
    ],
    [
      "vuepress-plugin-container",
      {
        type: "right",
        defaultTitle: ""
      }
    ],
    [
      "vuepress-plugin-container",
      {
        type: "theorem",
        before: info => `<div class="custom-block theorem"><p class="title">${info}</p>`,
        after: "</div>"
      }
    ],
    [
      "vuepress-plugin-container",
      {
        type: "details",
        before: info => `<details class="custom-block details">${info ? `<summary>${info}</summary>` : ""}\n`,
        after: () => "</details>\n",
        defaultTitle: {
          "/": "点击查看",
          "/en/": "DETAILS"
        }
      }
    ],

    // 内容居中容器
    [
      "vuepress-plugin-container",
      {
        type: "center",
        before: info => `<div class="center-container">`,
        after: () => "</div>"
      }
    ],
  ],

  markdown: {
    lineNumbers: true,
    extractHeaders: ["h2", "h3", "h4", "h5", "h6"] // 提取标题到侧边栏的级别，默认['h2', 'h3']
  },

  // 监听文件变化并重新构建
  extraWatchFiles: [".vuepress/config.ts"]
});
