---
title: 分页处理
date: 2022/01/06
permalink: /pages/ba6419/
categories: 
  - guide
  - miniApp
tags: 
  - 
author: 
  name: 张牧楠
---

## 设置分页参数

``` js
pageConfig: {
  pageIndex: 1,                   // 当前页面数
  pageSize: 10,                   // 单次检索页面数
  bottomEnd: false,               // 是否有下一页
  bottomLoading: false,           // 底部loading是否开启
}
```

## 初始化数据

``` js
/**
 * 初始化数据
 *
 * @param index
 */
initData() {
  this.loading = true
  this.dataList= [];
  this.pageConfig.pageIndex = 1;
  this.pageConfig.bottomEnd = false;
  this.getDataList();
},
```

## 上滑加载

``` js
/** 上滑加载 */
onReachBottom() {
  if (!this.pageConfig.bottomEnd) {
    this.pageConfig.pageIndex++
    this.pageConfig.bottomLoading = true
    this.getDataList();
  }
},
```

## 下拉刷新(调用初始化方法) 

``` js
/**
 * 下拉刷新数据
 */
onPullDownRefresh() {
  this.initData()
},
```

## 查询方法

``` js
/**
 * 查询数据
 */
getData() {
	let self = this
	self.$api.getDemandList({
		pageIndex: self.pageConfig.pageIndex,
		pageSize: self.pageConfig.pageSize,
	}).then(res => {
		if (res.data.length < self.pageConfig.pageSize) {
			self.pageConfig.bottomEnd = true
		}
		self.dataList = self.dataList.concat(res.data)
		// self.dataList = [...self.dataList, ...res.data]
		self.pageConfig.loading = false
		uni.stopPullDownRefresh()
	})
},
```


::: theorem 心灵鸡汤
我们坚持一件事情，并不是因为这样做了会有效果，而是坚信，这样做是对的。

::: right
来自 [句子控](https://www.juzikong.com/tags/%E5%8A%B1%E5%BF%97)
:::