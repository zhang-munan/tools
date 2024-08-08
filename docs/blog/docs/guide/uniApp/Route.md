---
title: 路由跳转
date: 2022/01/05
permalink: /pages/5fffc3/
categories: 
  - guide
  - uniApp
tags: 
  - 
author: 
  name: 张牧楠
---

## 使用

### 跳转页面

``` js
this.$u.route('/pages/index/current')
```

### 设置跳转方式

``` js
this.$u.route({
  type: 'tab',
  url: '/pages/index/current'
})
```

### 携带参数

``` js
this.$u.route('/pages/index/current',{
  data: 'info',
  status: 1
})
```

``` js
this.$u.route({
  url: '/pages/index/current',
  params: {
    data: 'info',
    status: 1
  }
})
```
## 参数

| 属性   |  类型 |   说明   | 可选值 | 默认值  |
|:------:|:----:|:-------:| :-----: | :-----:  |
| type   |String| 跳转方式 | navigateTo/to、redirectTo/redirect、switchTab/tab、reLaunch/launch、navigateBack/back | navigateTo  |
| url    |String| 跳转路由 |   -  |    -     |
| delta  |Number| navigateBack页面后退时,回退的层数|   如果 delta 大于现有页面数，则返回到首页   |     1    |
| params |Object| 传递的参数|   -   |     {}    |
| animationType |String| 窗口动画,只在APP有效|   pop-in、pop-out等，详细信息[参照官网](https://uniapp.dcloud.io/api/router?id=animation)   |     pop-in    |
| animationDuration |Number| 窗口动画持续时间,单位毫秒,只在APP有效|   -   |     300    |
| intercept |Boolean| 是否需要拦截 |   -   |     false    |




::: theorem 心灵鸡汤
人生的态度是，抱最大的希望，尽最大的努力，做最坏的打算。

::: right
来自 [句子控](https://www.juzikong.com/tags/%E5%8A%B1%E5%BF%97)
:::