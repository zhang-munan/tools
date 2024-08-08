---
title: 表单验证
date: 2022/01/06
permalink: /pages/e5035c/
categories: 
  - guide
  - uniApp
tags: 
  - 
author: 
  name: 张牧楠
---

## 使用

### 表单验证示例

``` html
<form @submit="formSubmit" @reset="formReset">
  <view class="uni-form-item uni-column">
    <view class="title">姓名</view>
    <input class="uni-input" name="nickname" placeholder="请输入姓名" />
  </view>
  <view class="uni-form-item uni-column">
    <view class="title">性别</view>
    <radio-group name="gender">
      <label>
        <radio value="男" /><text>男</text>
      </label>
      <label>
        <radio value="女" /><text>女</text>
      </label>
    </radio-group>
  </view>
  <view class="uni-form-item uni-column">
    <view class="title">爱好</view>
    <checkbox-group name="loves">
      <label>
        <checkbox value="读书" /><text>读书</text>
      </label>
      <label>
        <checkbox value="写字" /><text>写字</text>
      </label>
    </checkbox-group>
  </view>
  <view class="uni-btn-v">
    <button form-type="submit">Submit</button>
    <button type="default" form-type="reset">Reset</button>
  </view>
</form>
```

``` js
formSubmit: function(e) {
  var rule = [
    {name:"nickname", checkType : "string", checkRule:"1,3",  errorMsg:"姓名应为1-3个字符"},
    {name:"gender", checkType : "in", checkRule:"男,女",  errorMsg:"请选择性别"},
    {name:"loves", checkType : "notnull", checkRule:"",  errorMsg:"请选择爱好"}
  ];
  //进行表单检查
  var formData = e.detail.value;
  var checkRes = graceChecker.check(formData, rule);
  if(checkRes){
      uni.showToast({title:"验证通过!", icon:"none"});
  }else{
      uni.showToast({ title: graceChecker.error, icon: "none" });
  }
},
```

## 参数

| 属性   |  类型 |   说明   | 可选值 | 默认值  |
|:------:|:----:|:-------:| :-----: | :-----:  |





::: theorem 心灵鸡汤
生活总是让我们遍体鳞伤，可是后来，那些受伤的地方一定会变成我们最强壮的地方。

::: right
来自 [句子控](https://www.juzikong.com/tags/%E5%8A%B1%E5%BF%97)
:::