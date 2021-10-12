---
id: 10021
type: develop
path: /develop/something-about-css
title: 写css真的不是能实现效果就够了
author: jasmine
digest: 这篇文章也是来自一个css小测的小结，顺便理顺一下自己对于写样式一些体会与感觉：）
image: http://blog.minghuiyang1998.com/something-about-css.jpg
create_date: Tue Apr 30 2019 10:32:22 GMT+0800 (CST)
update_date: Tue Apr 30 2019 10:32:22 GMT+0800 (CST)
timestamp: 1556591542881
reading_time: 6 MIN READ
tags: ['css','scss','atomic css']
palette: {"Vibrant":[97,157,188],"DarkVibrant":[10,7,28],"LightVibrant":[148,202,220],"Muted":[88,137,153],"DarkMuted":[57,65,101],"LightMuted":[179,190,195]}
image_height: 3456
image_width: 5184
---



> ​	css真的是很有趣和神奇的东西，如果足够熟悉所有的属性和使用场景，而不只是常用的那几个比如张老师，可以用优雅的代码创造很神奇的效果。刚入门如我刚开始学习css的时候，看了两本书《css权威指南》，张老师的《css世界》（这本其实还没看完，其实内容真的很好，但是更多的与实践相关，所以入门读起来可能真的会比较困难）关于样式最开始就是能实现就好，但是发现当页面越来越复杂，内容越来越多的时候样式不断叠加，内容越来越乱很难维护，自己写着写着就想重写全部了😂。
>
> ​	这篇文章主要小结一个css小测。



# 题目

实现一个类似于微信聊天界面的布局，兼容移动端即可（[小测地址](https://github.com/zhangxinxu/quiz/issues/16)）

![css4](http://blog.minghuiyang1998.com/css4.png)







#思考

这个题目的关键点在于了解一下direction这个属性，但我还学到了更多的东西，下面是经过我修改的代码：

```html
<head>
  <style>
    body {
      margin: 0;
    }

    p {
      margin: 0;
    }

    html {
      font-size: 16px;
    }

    @media screen and (min-width: 375px) {
      html {
        /* iPhone6的375px尺寸作为16px基准，414px正好18px大小, 600 20px */
        font-size: calc(100% + 2 * (100vw - 375px) / 39);
        font-size: calc(16px + 2 * (100vw - 375px) / 39);
      }
    }

    @media screen and (min-width: 414px) {
      html {
        /* 414px-1000px每100像素宽字体增加1px(18px-22px) */
        font-size: calc(112.5% + 4 * (100vw - 414px) / 586);
        font-size: calc(18px + 4 * (100vw - 414px) / 586);
      }
    }

    @media screen and (min-width: 600px) {
      html {
        /* 600px-1000px每100像素宽字体增加1px(20px-24px) */
        font-size: calc(125% + 4 * (100vw - 600px) / 400);
        font-size: calc(20px + 4 * (100vw - 600px) / 400);
      }
    }

    @media screen and (min-width: 1000px) {
      html {
        /* 1000px往后是每100像素0.5px增加 */
        font-size: calc(137.5% + 6 * (100vw - 1000px) / 1000);
        font-size: calc(22px + 6 * (100vw - 1000px) / 1000);
      }
    }

    .container {
      padding: 0 1rem;
    }

    .chat-item {
      display: flex;
      padding: 0.625rem 0;
    }

    .chat-user {
      color: #808080;
      font-size: 1rem;
      margin-bottom: 0.5rem;
    }

    .chat-name,
    .chat-time {
      display: inline-block;
    }

    .chat-avatar-wrap {
      display: inline-block;
    }

    .chat-avatar {
      border-radius: 50%;
      width: 3.75rem;
      height: 3.75rem;
      margin-inline-end: 0.8rem;
    }

    .chat-text {
      border-radius: 0.75rem;
      position: relative;
      padding: 0.75rem 0.625rem;

      background-color: #eee;
      border-color: #eee;
      color: #3b3f47;
    }

    .chat-text p {
      text-align: left;
    }

    .chat-text::before {
      content: "";
      display: inline-block;
      position: absolute;
      z-index: -1;
      width: 2rem;
      height: 1.2rem;
      top: -0.1rem;
      margin-inline-start: -3.2rem;
      border-top-right-radius: 40% 50%;
      border-top-left-radius: 40% 50%;
      border-left: 0.6em solid;
      border-right: 0.6em solid;
      border-color: inherit;
    }

    [data-is-self].chat-item {
      direction: rtl;
    }

    [data-is-self] .chat-text {
      background-color: #00beff;
      border-color: #00beff;
      color: #ffffff;
    }
  </style>
</head>

<body>
  <div class="container">
    <div class="chat-item">
      <div class="chat-avatar-wrap">
        <img class="chat-avatar" src=""/>
      </div>
      <div class="chat-info">
        <div class="chat-user">
          <span class="chat-name">提案笙</span>
          <span class="chat-time">9月30日 21:47</span>
        </div>
        <div class="chat-text">
          <p>什么秘密，我觉得你现在跟我说什么都没有意义</p>
        </div>
      </div>
    </div>

    <div class="chat-item" data-is-self>
      <div class="chat-avatar-wrap">
        <img class="chat-avatar" src=""/>
      </div>
      <div class="chat-info">
        <div class="chat-user">
          <span class="chat-name">提案笙</span>
          <span class="chat-time">9月30日 21:47</span>
        </div>
        <div class="chat-text">
          <p>什么秘密，我觉得你现在跟我说什么都没有意义</p>
        </div>
      </div>
    </div>
  </div>
</body>
```



感受最深的修改在几个地方：

- 选择器
- 命名
- 一些很好用但是不熟悉的属性direction，margin-inline-start， margin-inline-end



1. 选择器

   ​	在此之前我的习惯是用class和id选择器，但是会发现这里用了属性选择器，属性选择器 [data-is-self] .chat-item-info 写定制样式，而不是像我原来写了chat-info-left，chat-info-right两个class，或者可能会这样写.chat-item-info. right 。使用属性选择器的好处是含义更清晰，写法也更优雅了，靠左和靠右的消息本质上都是消息，所以为了区别样式拆为两个class，并不如只通过属性不同去定制样式更贴合概念可读性好。

   

   这里补充提一个我提的问题

   Q🙋：张老师平时选择器您一般怎么选择使用的呢？

   A👨‍🎓：一般就是class和id加上属性，通常情况下是不推荐使用多个选择器互相选择的，性能不是关键问题只要不是用了很多的选择器，在为DOMtree匹配样式的时候，选择器过多这个造成性能问题都可以忽略不计，关键是css的特殊性计算规则和层叠规则，会让选择器过多的样式很难被覆盖，然后代码就会越写越乱（时间有点久了，原话可能不是这样的，我是根据我的记忆和理解回答的，最终解释权归张老师😂）



2. 命名

   ​	当项目比较大时，我会为样式命名混乱头疼，还会为样式互相覆盖，命名没有章法越写越乱越写越多而头疼，下面的几种方式是我使用过的几种方式，在这里小结一下他们的区别与用法。

   

   **命名：**

   ​	最简单的避免样式覆盖和令代码清晰易懂，就是class命名，用短横线加上一个命名空间比如chat-info的模块里面，就两个元素分别命名为chat-info-name，chat-info-avatar

   优点：简单

   缺点：功能复杂的组件命名会越来愈长，而且也会很乱，样式复用率低

   

   **css模块化 与 scss ：**

   ​	css模块化使用父子选择器如.chat-item-info. right ，.chat-item-info. name，形成命名空间，可以增加样式复用率。嵌套写法应该是scss最常用的功能之一，这种写法会让样式的层叠关系比较清晰，但是这也会造成一个问题，就是嵌套层数多了以后，相当于用了多层父子选择器，选择器层级变多了，虽然可以防止样式被污染或污染到其他的样式，但是想要在@media或者一些其他操作中覆盖之前的样式也会更难。

   

   优点：让样式的层叠关系比较清晰，可以增加样式的复用率

   缺点：相当于使用了多层父子选择器，根据样式层叠的计算规则，会使得之前的样式很难覆盖

   

   **Atomic CSS：**

   ​	首先推荐一下atomic css（可以看看material UI和Github的primer然后你就懂什么是atomic css了）使用它有很多好处，不用担心命名，样式是收敛的十分好管理，打开控制台会发现使用atomic不用去选中元素看样式，所有的class一目了然，变化根据高亮也一目了然。但是atomic css通常会受到inline style反对者的抨击，觉得这和把样式写在标签上没有区别，说的不是没有道理，但是我认为还是有区别的。

   ​	使用atomic我认为应该不是说要严格的完全的使用，像GitHub也是存在部分的定制样式的，只是重复率非常高的比如只是想让父元素display：flex，你可以直接通过给父元素添加叫flex的class而不是在绞尽脑汁为这个节点取一个例如xxx-wrap，然后在css文件中写display，或者妥协的写一个inline style然后debug的时候完全忘了这个inline style。我的想法是这是一种inline和独立样式的折中吧（好像扯远了，不过你用一次应该就会上瘾了，因为可以把注意力更多的放在编码上，避免了为了给父容器去增加一个display：flex，为命名绞尽脑汁：）。

   ​	不过团队自己实现一套好用的atomic的样式规则并不容易，因为团队里面每个人的习惯都不一样，如何符合大家的使用习惯，最大程度的兼容所有的项目和设计师的设计，而不是每写一个都去查文档找命名就十分重要了。atomic的用法最适合用于组件化的开发，如果单独为组件定制样式，修改的时候很容易牵一发而动全身。

   

   优点：不用考虑命名，专注于代码逻辑，减少冗余的css代码

   缺点：若应用于团队命名规则的统一，以及什么属性应该包装为一个单独的规则，让整个样式规则大家用起来都得心应手，比较难协调

   

   （ps: 命名和书写的方式还是具体看团队以及这个项目建立时候约定的规范，在项目中统一，而不是各人按个人的习惯去写，我觉得css和js一样也是需要明确目录结构和模块化方式，以此避免大量的样式代码冗余的，这也是Yahoo35条优化其中之一）

   

2. direction这个属性

   ​	考虑使用非常用属性的时候确实要去考虑这个属性的兼容性与这个属性会不会造成性能问题。但direction这个属性兼容性其实挺好的（详情可以参考[张老师的博客]([https://www.zhangxinxu.com](https://www.zhangxinxu.com/))）最后提一下的原因是，写的时候会发现不了解direction属性其实很难在左右两边两种消息形式使用同一模块顺序（仔细观察时间和用户名的顺序就会发现也是反的），那么用这个这属性就可以在保持模块顺序，减少定制化的代码。‘再配合margin-inline-start， margin-inline-end会减少很多用于定制的冗余代码。



# 其他

这是一些我认为的让css更好控制更具有全局或局部感的好用法

- css变量与css函数

  不需要预编译就可以使用变量，用于控制值相同的属性变化如主题色等等或一次性修改这些属性的值

- rem，em， ch， vh，vm， %多种相对单位的根据场景不同的使用

  ​	在适配移动端时一般要让让字体的大小去适应屏幕的大小变化以创造更好的显示效果，那么就会使用rem这种相对单位而不是px这种绝对单位，让字体以及间距自动调节就类似于小程序中的rpx，ch，em会用在需要等宽字体的情况比如倒计时等等。尽管使用%去实现响应式布局已经不是一个很好的方式了，这是因为%的变化的比率是一样的，具体可见[陈慧静老师css大会上关于布局的分享](https://www.chenhuijing.com/slides/53-cssconfcn-2019/#/15)（真的很赞！）。但百分比是一个相对的单位，在控制元素的宽高等很多场景还是经常使用的。

- currentColor

  让图标与文字保持相同的颜色，而不是手动匹配两者的颜色



# 总结

​	以前做项目的时候我不会去考虑这些问题觉得实现就好，但是虽然表面上效果实现了但是如果由于没有考虑这些问题后续的开发和维护就很费精力，实际上css和js一样也是需要明确目录结构和模块化方式的，这对项目后期维护很重要。当要去封装组件这些问题就更需要去思考。今天整理出来一些些，希望日后能逐步完善直到自己有一套自己认可的明确的布局和书写样式的方式与规则：）。



