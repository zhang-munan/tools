---
title: 页面布局
date: 2022/01/19
permalink: /pages/42d158/
categories: 
  - guide
  - uniApp
tags: 
  - 
author: 
  name: 张牧楠
---

实现了页面的下拉刷新，上滑加载，空布局等共通处理。

##  使用组件


``` html
<template>
  <page-container @initData="init">
    // 页面内容
  </page-container>
</template>
```

``` js
<script>
import PageContainer from '@/baseConfig/components/page-container/page-container.vue'
export default {
  components: {
    PageContainer
  },
  data() {
    return {
      mescroll: null, // 初始化组件对象
    }
  },
  methods: {
    /**
     * 初始化数据
     * @param {Object} options
     */
    init(options) {
      this.mescroll = options
    },
  }
}
</script>
```

::: tip 提示
如果不进行其他配置，组件是默认可下拉和上滑加载的，适用于编写列展示列表的页面
:::

## 组件属性

| 属性   |  类型 |   说明   | 可选值 | 是否必填 | 默认值  |
|:------:|:----:|:-------:| :-----: | :-----:  | :-----:  |
| downOption | Object | 下拉刷新的参数配置，详细查看downOption属性 | - | 非必填 | - |
| upOption | Object | 上拉加载的参数配置，详细查看upOption属性 | - | 非必填 | - |
| top | String, Number | 下拉布局往下的偏移量 (支持20, "20rpx", "20px", "20%"格式的值, 其中纯数字则默认单位rpx, 百分比则相对于windowHeight) | - | 非必填 | 0 |
| topbar | Boolean, String | 偏移量top是否加上状态栏高度, (使用场景:取消原生导航栏时,配置此项可留出状态栏的占位, 支持传入字符串背景,如色值,背景图,渐变) | - | 非必填 | false |
| bottom | String, Number | 上拉布局往上的偏移量 (支持20, "20rpx", "20px", "20%"格式的值, 其中纯数字则默认单位rpx, 百分比则相对于windowHeight) | - | 非必填 | 0 |
| safearea | Boolean | 偏移量bottom是否加上底部安全区的距离(需要适配iPhoneX时使用) | - | 非必填 | false |
| fixed | Boolean | 是否通过fixed固定mescroll的高度 | - | 非必填 | true |
| height | String, Number | 指定mescroll最小高度,默认windowHeight,使列表不满屏仍可下拉 | - | 非必填 | - |
| bottombar | Boolean | 底部是否偏移TabBar的高度 (仅在H5端的tab页生效) | - | 非必填 | true |
| sticky | Boolean | 是否支持sticky; 当值配置true时,需避免在mescroll-body标签前面加非定位的元素,否则下拉区域无法隐藏 | - | 非必填 | false |


## downOption属性

| 属性   |  类型 |   说明   | 可选值 | 是否必填 | 默认值  |
|:------:|:----:|:-------:| :-----: | :-----:  | :-----:  |
| use | Boolean | 是否启用下拉刷新 | - | 非必填 | true |
| auto | Boolean | 是否在初始化完毕之后自动执行下拉刷新的回调 | - | 非必填 | true |
| native | Boolean | 是否使用系统自带的下拉刷新; 仅mescroll-body生效 (值为true时,还需在pages配置enablePullDownRefresh:true;详请参考mescroll-native的案例) | - | 非必填 | false |
| autoShowLoading | Boolean | 如果设置auto=true(在初始化完毕之后自动执行下拉刷新的回调),那么是否显示下拉刷新的进度 | - | 非必填 | false |
| isLock | Boolean | 是否锁定下拉刷新 | - | 非必填 | false |
| offset | Number | 在列表顶部,下拉大于80upx,松手即可触发下拉刷新的回调 | - | 非必填 | 80 |



## upOption属性

| 属性   |  类型 |   说明   | 可选值 | 是否必填 | 默认值  |
|:------:|:----:|:-------:| :-----: | :-----:  | :-----:  |


## 组件方法

| 方法名  |   说明 |  是否必填  | 参数 |
|:------:|:----:|:-------:|:-------:|
| initData | 组件初始化数据的回调 | 必填 | - |
| emptyClick | 点击空布局按钮的回调 | 非必填 | - |
| topClick | 点击回到顶部按钮的回调 | 非必填 | - |
| scroll | 滚动监听 (需在 up 配置 onScroll:true 才生效) | 非必填 | - |


::: theorem 心灵鸡汤
不管前方的路有多苦，只要走的方向正确，不管多么崎岖不平，都比站在原地更接近幸福。  

::: right
来自 [句子控](https://www.juzikong.com/tags/%E5%8A%B1%E5%BF%97)
:::