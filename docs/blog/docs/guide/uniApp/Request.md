---
title: 请求api
date: 2022/01/06
permalink: /pages/c74c1d/
categories: 
  - guide
  - uniApp
tags: 
  - 
author: 
  name: 张牧楠
---

## 使用

### 定义请求方法

::: tip 提示
通常在 **common/api.js** 文件下定义请求方法  
根据文档或实际情况选择请求方式，定义名称不能重复
:::

**post请求**
``` js
// 获取菜单
export const fetchMenu = (params, config = {}) => http.post('/equipment/home', params, config)
```

**get请求**
``` js
// 获取列表
export const fetchList = (params, config = {}) => http.get('/equipment/List', params, config)
```



### 调用请求方法

``` js
this.$api.fetchMenu({}).then(res => {
  //todo 获取的请求结果
}).catch(e => {
  //todo 请求异常
})
```

## 参数

| 属性   |  类型 |   说明   | 可选值 | 默认值  |
|:------:|:----:|:-------:| :-----: | :-----:  |
|params  | Object| 请求参数| - | - |
|config  | Object| 头部参数| - | {} |




::: theorem 心灵鸡汤
你要去相信，时光且长，你终将长成自己想要的模样，拥抱独属于你的未来。

::: right
来自 [句子控](https://www.juzikong.com/tags/%E5%8A%B1%E5%BF%97)
:::