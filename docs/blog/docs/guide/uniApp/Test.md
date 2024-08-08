---
title: 规则检验
date: 2022/01/06
permalink: /pages/6548b8/
categories: 
  - guide
  - uniApp
tags: 
  - 
author: 
  name: 张牧楠
---

## 常用表单验证

### 邮箱格式
``` js
this.$u.test.email(value)
```
### 手机格式
``` js
this.$u.test.mobile(value)
```
### 身份证号码
``` js
this.$u.test.idCard(value)
```
### 车牌号
``` js
this.$u.test.carNo(value)
```
### 金额,只允许2位小数
``` js
this.$u.test.amount(value)
```
### 中文
``` js
this.$u.test.chinese(value)
```
### 只能输入字母
``` js
this.$u.test.letter(value)
```
### 验证一个值范围[min, max]
``` js
// param 是一个设置范围的数组
this.$u.test.range(value, param)
```
### 验证一个长度范围[min, max]
``` js
// param 是一个设置范围的数组
this.$u.test.rangeLength(value, param)
```
### 是否固定电话
``` js
this.$u.test.landline(value, param)
```
### 判断是否为空
``` js
this.$u.test.empty(value, param)
```
### 是否短信验证码
``` js
this.$u.test.code(value, param)
```
### 整数
``` js
this.$u.test.digits(value)
```
### 只能是字母或者数字
``` js
this.$u.test.enOrNum(value)
```

## 工具类方法

### 验证是否包含某个值
``` js
this.$u.test.contains(value)
```

## 类型验证

### URL格式
``` js
this.$u.test.url(value)
```
### 日期格式
``` js
// 判断是否数值或者字符串数值(意味着为时间戳)，转为数值，否则new Date无法识别字符串时间戳
this.$u.test.date(value)
```
### ISO类型的日期格式
``` js
this.$u.test.dateISO(value)
```
### 十进制数字
``` js
this.$u.test.dateISO(value)
```
### 字符串
``` js
this.$u.test.string(value)
```
### 是否json字符串
``` js
this.$u.test.jsonString(value, param)
```
### 是否数组
``` js
this.$u.test.array(value, param)
```
### 是否对象
``` js
this.$u.test.object(value, param)
```
### 是否函数方法
``` js
this.$u.test.func(value, param)
```
### 是否promise对象
``` js
this.$u.test.promise(value, param)
```
### 是否图片格式
``` js
this.$u.test.image(value, param)
```
### 是否视频格式
``` js
this.$u.test.video(value, param)
```
### 是否为正则对象
``` js
this.$u.test.regExp(value, param)
```

::: theorem 心灵鸡汤
你的负担将变成礼物，你受的苦将照亮你的路。

::: right
来自 [句子控](https://www.juzikong.com/tags/%E5%8A%B1%E5%BF%97)
:::