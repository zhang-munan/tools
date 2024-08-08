// ！！！注：此文件没有使用到，仅用于测试和侧边栏数据格式的参考。

// 侧边栏
module.exports = {
  "/web前端/": [
    {
      title: "vue管理系统",
      collapsable: false,
      children: [
        ["Vue管理系统/01-介绍.md", "介绍", "/vue-admin/introduce/"],
        ["Vue管理系统/02-快速开始.md", "快速开始", "/vue-admin/start/"]
        // ["vue管理系统/03..md", "快速开始", ""],
      ]
    },
    {
      title: "vue网页制作",
      collapsable: false,
      children: [["Vue网页制作/01-介绍.md", "介绍", "/vue-admin/introduce/"]]
    },
    {
      title: "环境搭建",
      collapsable: false,
      children: [
        ["环境搭建/01-node.md", "环境搭建", "/vue-admin/introduce/"]
      ]
    },
    {
      title: "插件介绍与使用",
      collapsable: false,
      children: [
        ["插件介绍与使用/01-介绍.md", "介绍", "/vue-admin/introduce/"],
        ["插件介绍与使用/02-快速开始.md", "快速开始", "/vue-admin/start/"]
      ]
    }
  ],
  "/手机端/": [
    {
      title: "uni-app",
      collapsable: false,
    },
    {
      title: "微信小程序",
      collapsable: false,
      children: [
        ["微信小程序/01-介绍.md", "介绍", "/wx/introduce/"],
        ["微信小程序/02-项目结构.md", "项目结构", "/wx/menu/"],
        ["微信小程序/03-快速开始.md", "快速开始", "/wx/page/"],
        ["微信小程序/04-工具类.md", "工具类", "/wx/utils/"],
        ["微信小程序/05-图标使用.md", "图标使用", "/wx/icon/"],
        ["微信小程序/06-小程序发布.md", "小程序发布", "/wx/build/"],
        ["微信小程序/07-框架原理.md", "框架原理", "/wx/base/"],
      ]
    }
  ],
  "/开发工具/": [
    {
      title: "版本控制",
      collapsable: false,
      children: [
        ["版本控制/Git.md", "Git使用手册", "/helper/git/"],
        // ["版本控制/SVN.md", "SVN使用手册", "/helper/svn/"],
      ]
    },
  ],
  "/开发规范/": [
    {
      title: "代码规范",
      collapsable: false,
      children: [
        ["代码规范/代码规范.md", "代码书写规范", "/standard/code/"],
        ["代码规范/起名规范.md", "起名规范", "/standard/name/"]
      ]
    },
    {
      title: "页面开发注意事项",
      collapsable: false,
      children: [["页面开发注意事项/页面开发注意事项.md", "页面开发注意事项", "/standard/tip/"]]
    },
    {
      title: "提交规范",
      collapsable: false,
      children: [["提交规范/前端代码提交规范.md", "前端代码提交规范", "/standard/commit/"]]
    }
  ],
  "/guide/vue/": ["", "Technology"],
  "/guide/uniApp/": [
    {
      title: "基础",
      collapsable: false,
      children: ["", "Directory"]
    },
    {
      title: "使用",
      collapsable: false,
      children: [
        "Main",
        {
          title: "交互",
          collapsable: false,
          children: ["Route", "Request"]
        },
        {
          title: "工具类",
          collapsable: false,
          children: ["Test", "FormCheck", "Function"]
        },
        {
          title: "共通处理",
          collapsable: false,
          children: ["PageScroll"]
        }
      ]
    }
  ],
  "/guide/miniApp/": [
    {
      title: "使用",
      children: [
        "",
        {
          title: "交互",
          collapsable: false,
          children: [""]
        },
        {
          title: "工具类",
          collapsable: false,
          children: [""]
        },
        {
          title: "共通处理",
          collapsable: false,
          children: ["Pagination"]
        }
      ]
    }
  ]
};
