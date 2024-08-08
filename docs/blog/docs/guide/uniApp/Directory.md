---
title: 目录结构
date: 2022/01/01
permalink: /pages/474a1d/
categories: 
  - guide
  - uniApp
tags: 
  - 
author: 
  name: 张牧楠
---

基本的目录结构如下：
```
.
├── baseConfig(底层配置)
│   ├── components
│   ├── libs
│   │   ├── config
│   │   │   ├── config.js
│   │   │   └── zIndex.js
│   │   ├── function
│   │   │   ├── colorGradient.js
│   │   │   ├── debounce.js
│   │   │   ├── graceChecker.js
│   │   │   ├── index.js
│   │   │   ├── permission.js
│   │   │   ├── platform.js
│   │   │   ├── test.js
│   │   │   └── throttle.js
│   │   ├── luch-request
│   │   ├── mixin
│   │   └── utils
│   ├── index.scss
│   └── theme.scss
│
├── common(共通方法)
│   ├── api.js
│   ├── config.js
│   └── mixin.js
│
├── pages(页面)
│
├── store
│   └── index.js
│
├── util
│   └── request
│       └── index.js
│
├── .gitignore
├── App.vue
├── index.html
├── main.js
├── manifest.json
├── package.json
├── page.json
├── README.md
├── template.h5.html
└── uni.scss
```
::: warning 注意
项目结构并不唯一，以下说明只针对当面模板
:::
- `` baseConfig/``: 用于存放全局的配置、方法、组件、静态资源等（适用于所有项目）。
- `` baseConfig/components``: 该目录中的组件会被注册为全局组件。
- `` baseConfig/libs/``: 全局方法。
- `` baseConfig/libs/config/``: 版本等全局配置信息。
- `` baseConfig/libs/function/``: 全局的共通方法。
- `` baseConfig/libs/luch-request/``: 用于封装request请求。
- `` baseConfig/libs/mixin/``: 全局的混入对象。
- `` baseConfig/libs/utils/``: 工具类。
- `` common/``: 当前项目的共通方法。
- `` pages/``: 项目的所有页面。
- `` store/``: 状态管理。
- `` util/``: 工具类。
- `` template.h5.html/``: 用于打包H5应用。

::: tip 提示
baseConfig 是自行封装的用来帮助提升开发效率的工具，不是项目中必不可少的文件。
:::

**同时阅读:**
- [uniApp官方文档](https://uniapp.dcloud.io/)
- [vue官方文档(v2.x)](https://cn.vuejs.org/index.html)
- [vue官方文档(v3.x)](https://v3.cn.vuejs.org/)
- [dayjs官方文档](https://dayjs.fenxianglu.cn/category/#node-js)


::: theorem 心灵鸡汤
人生没有白走的路，每一步都算数。

::: right
来自 [句子控](https://www.juzikong.com/tags/%E5%8A%B1%E5%BF%97)
:::
