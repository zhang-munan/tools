---
title: baseConfig全局引入
date: 2022/01/03
permalink: /pages/5e8d06/
categories: 
  - guide
  - uniApp
tags: 
  - 
author: 
  name: 张牧楠
---

本节将介绍如何在项目中引入 baseConfig。
# 用法

## 完整引入

只需要在main.js增加以下代码：
``` js {3,8,22}
// main.js
// 引入全局baseConfig
import baseConfig from 'baseConfig';

// 如果项目使用Vue2
// #ifndef VUE3
import Vue from 'vue'
Vue.use(baseConfig);

const app = new Vue({
  ...App
})
app.$mount()
// #endif

// 如果项目使用Vue3
// #ifdef VUE3
import {createSSRApp} from 'vue'

export function createApp() {
  const app = createSSRApp(App)
  app.use(baseConfig);
  return {
    app
  }
}
// #endif
```


::: theorem 心灵鸡汤
不管前方的路有多苦，只要走的方向正确，不管多么崎岖不平，都比站在原地更接近幸福。

::: right
来自 [句子控](https://www.juzikong.com/tags/%E5%8A%B1%E5%BF%97)
:::

