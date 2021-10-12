---
id: 10020
type: develop
path: /develop/vue-react-wxminiapp
title: 体验过vue，react，微信小程序后的一些小总结
author: jasmine
digest: 在使用过vue，react，和微信小程序开发后对于他们的一些异同点一些微小的总结
image: http://blog.minghuiyang1998.com/vue-react-wxminiapp.jpg
create_date: Sat Apr 27 2019 16:31:50 GMT+0800 (CST)
update_date: Sat Apr 27 2019 16:31:50 GMT+0800 (CST)
reading_time: 6 MIN READ
tags: ['wxapp', 'vue', 'react']
palette: {"Vibrant":[198,133,44],"DarkVibrant":[107,63,6],"LightVibrant":[233,229,146],"Muted":[180,136,84],"DarkMuted":[102,75,55],"LightMuted":[148,189,191]}
timestamp: 1556353910000
image_height: 3840
image_width: 5760
---



> 在前端快速发展的这段时间，越来越多的东西如app，桌面应用都可以用接近于前端的开发方式进行开发，这篇文章就是用来记录一下，看完了React的开发文档并使用过react后，结合之前使用过的vue，微信小程序的一些小想法。



# SPA

###相似点

- 数据驱动的（data变对应使用的地方会自动更新，适用于复杂的状态管理不再需要繁复的DOM操作）
  - 生命周期
  - virtual dom和real dom 和diff 算法
  - 模版解析——实例化和内容替换涉及到一些写法不同的问题，都是由js渲染的页面
- 组件化（组件也都是对象，无论是vue还是react）
  - 组件之间的消息传递：父子，子父，页面中的不相关的两个组件
  - 由基础组装高阶组件

- 打包工具——webpack（避免用多组件的单文件显得很臃肿）

  - 由webpack完成组装，服务端只提供数据




###不同的体验

- 首先写法上的不同是比较明显的，但我感觉都是模版的问题就不在这里纤细分析和列出来了

- vue有computed和watch和双向绑定v-model，而react需要手动引入mobX（这一点很类似于小程序的开发）

- react的编程体验更明显，会让我想起类似于于ejs的模版语言，在jsx模版里面可以嵌入任何的表达式，使用js的逻辑相较于vue更强的格式更快的上手比如v-if，v-else，react会更灵活但需要更好的js基础

  

  

#微信小程序

​	小程序是没有computed和watched，也没有类似于vuex的多组件的状态管理工具（虽然大部分需求也不需要）。vue和react是前端框架，js运行是单线程的，而小程序是多线程的架构，每个页面一个webview线程再加上一个js线程，虽然分为三个文件js，html，css，但实际上是两个运行时wxs wxml wxss 在一个运行时类比于web的js html css，js是相当于一个控制器，与页面相关的操作要用setData和exec（）的方式，这样架构能够让页面更快加载渲染（具体可以看看小程序官网的生命周期），而之前看过一篇觉得挺好理解受益颇多的文章，了解[浏览器的加载原理](<https://mp.weixin.qq.com/s/X4yAFZBNLwaDUFYaR0Cn5g>)，一个tab的渲染在composite之前都是在渲染进程的main线程上进行的，即生成DOM和解析js是在一个线程上的，所以将script标签插入到其他节点中会阻塞html的解析DOM树的生成

​	由于实习的工作，在体验react之前更早接触小程序。最近面试也被问到过为什么做小程序的重构，从mpvue迁回原生，虽然小程序的写法和vue和react有相同之处，但我从上面的小的想法来看觉得是差别挺大的，所以可能vue的开发方式还是不能够完全照搬到小程序开发上来的吧。

​

