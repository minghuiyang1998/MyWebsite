---
id: 10025
type: develop
path: /develop/js-eventloop-engine
title: js代码是如何被执行的
author: jasmine
digest: 从渲染线程解析js代码到执行结束的理解整合
image: http://blog.minghuiyang1998.com/js-eventloop-engine.jpg
create_date: Wed May 01 2019 12:58:13 GMT+0800 (CST)
update_date: Wed May 01 2019 12:58:13 GMT+0800 (CST)
timestamp: 1556686693495
reading_time: 15 MIN READ
tags: ['js works', 'eventloop', 'this', 'scope chain', 'context', 'call stack']
palette: {"Vibrant":[169,107,78],"DarkVibrant":[4,35,45],"LightVibrant":[228,186,152],"Muted":[142,129,127],"DarkMuted":[102,60,59],"LightMuted":[207,188,175]}
image_height: 5104
image_width: 3403
---



> 这篇文章小结一下我理解的js是如何工作的， 目的是把脑子里js引擎执行上下文，调用堆栈，eventloop，作用域作用域链，this的知识串起来（不会讨论service worker相关的内容），学习的时候往上并没有一篇十分完整的文章，所以花了一些时间才串了起来。





简要的思路：

- 程序执行方式
- v8引擎
- js运行时
  - 宿主环境
  - 浏览器
    - js运行时
    - 详细的代码段解析执行的过程





#程序的执行方式



- 解释：如Ruby， Javascript （转化一条执行一条，更灵活）
- 编译：如C， C++， Java（全部转化完后执行，更多的优化）

ps：现在很多语言两种方式都支持，即两种方式的区别是变为可执行机器码的过程有些不同



**JS是解释型的还是编译型的？**

​	提出这个问题的原因是js存在声明提升，如果他是解释型的应该就不会有声明提升的问题呀。出现声明提升是有解释器的处理方式造成的。

js的解释过程大致为：

- v8引擎进入作用域，词法分析整个作用域，形成AST，每遇到一个声明分配内存（这就造成了声明提升的现象，如果使用了babel应该就是在这个阶段就是改写生成的AST树变成ES5的语法）
- 由AST再编为机器码，执行

（ps：js的编译机制JIT（即时编译），会优化js代码的执行效率，优化类似于循环语句，还有进行热语句存储）

​	总的来说，js是单线程执行的，基于之前浏览器与操作系统那一篇，于chrome浏览器上就是每个tab上的渲染进程上的main线程。与java语言需要编译得到jar包不同的是，js是解释执行的，js引擎每次会解析执行部分代码（相当于是部分编译的）



**JS与Java？**

| java                                      | JavaScript                                                   |
| ----------------------------------------- | ------------------------------------------------------------ |
| 一次编译得到可执行文件（需要编译器和JVM） | 需要运行环境如NodeJS，浏览器（不需要编译器，但是需要宿主环境） |
| 强类型                                    | 弱类型（动态类型）运行时才知道                               |
| 多线程（语言本身支持异步）                | 单线程（环境支持异步）                                       |



# v8引擎

- v8引擎使用c++编写的，同时存在于浏览器和Node环境用于解释执行js代码
- v8旨在提高了js解析性能，使用了两个compiler
- 内部存在四个线程
  - 编译执行线程
  - 辅助编译线程
  - 检查耗时方法线程
  - 处理垃圾回收线程
- 组成部分
  - 内存堆：内存分配 
  - 调用栈：代码执行

（ps：看过一篇文章讲了建立在理解js代码运行原理上写出优化的代码，写的超级好，分享在[这里](https://blog.sessionstack.com/how-javascript-works-inside-the-v8-engine-5-tips-on-how-to-write-optimized-code-ac089e62b12e)（需要科学上网））



js是单线程执行的，所以也只有一个调用栈，所以js不存在死锁，但是会存在阻塞，那么如何在不阻塞UI的情况下执行复杂的代码和异步操作呢？

[[参考文章](https://blog.sessionstack.com/how-does-javascript-actually-work-part-1-b0bacc073cf)]



# Js运行时

##宿主环境

​	如浏览器， Node：Js引擎 + eventloop机制 + API（在浏览器和Node中的event loop机制是不一样的， 浏览器和Node提供的API也是不一样的）



## 浏览器

简要画了一下浏览器整个程序的运行过程（结合了JakeArchibald大神Google大会上讲解的eventloop）

![eventloop](http://blog.minghuiyang1998.com/eventloop.png)



###js运行时基本组成部分

浏览器提供webAPI   +    eventloop  +   call back queue

- eventloop： js的执行机制用来调度js引擎执行js代码，也使js能实现异步执行。eventloop机制会调用js引擎处理程序中多个块的执行执行调度事件，监控调用栈与call back queue。

  >  例如：js程序段发送ajax请求有回调，js引擎告诉宿主环境“嘿，我现在要暂停执行了，但你完成请求得到数据记得让我执行回调函数”然后浏览器设置网络响应的监听，当他有东西返回的时候它将会把回调函数插入到事件循环队列然后执行([隔得有点久了，找到参考原文会放上来]()）

- Web API：访问其他的线程的接口，属于浏览器并行启动的其他部分（即在浏览器运行原理和操作系统中提到的其他进程与线程）

  如：DOM， ajax， setTimeout...

- call back queue：用来存放待执行的回调



例如：执行一个setTimeout(cb, time)

- 首先加入call stack（调用栈）执行
- 浏览器创建一个定时器（Web API的一部分）开始倒计时
- call stack执行完该代码弹出执行下一句
- 定时完成将cb加入call back queue（回调队列）
- 当call stack为空从call back queue中取出cs入call stack执行

（所以setTimeout的定时是加入call back queue的事件而不是执行时间，setTimeout的主要任务也不是用来处理动画，而是拆分耗时操作，动画的操作应该尽可能使用requestAnimationFrame，因为它执行在线程重新渲染画面之前，而使用setTimeout就是每次执行call back queue队列中任务时，这里说的很粗略，推荐看看[JakeArchibald在Google大会上的演讲](https://www.youtube.com/watch?v=cCOL7MC4Pl0)理解一下（需要科学上网））



**补充**

- ES6指定了eventloop如何工作，即技术上应该是属于js引擎的范畴而不再是宿主环境的范畴，愿意是引入了promise

  - Job Queue（作业队列）

    - eventloop 每执行到调用栈为空称为一个tick（一个eventloop，在Vue中也有$nextTick）
    - 作业队列实际跟在事件队列每个tick末尾的一个队列，在执行至call stack为空时，会先去检查job queue是否为空，将job queue执行为空才会去检查call back queue
    - 有点像setTimeout（cb，0）的hack，但有个更明确的执行顺序：稍后后执行但是会尽快执行

    所以js中关于异步的操作就分为了两类

    - setTimeout
    - promise

    

**小结**：在详述执行过程前重新理顺上文内容就是，js引擎解析执行js代码，有调用栈内存堆组成，只会在任一时刻执行一个程序，如何去调用js执行你的程序，由周围的宿主环境调度执行

call stack有三个任务来源

- 主任务队列（js文件中的代码，或script标签中的代码）
- Job queue（microtask）
- call back queue



###js引擎处理一个代码段的详细过程

>  这个过程解释了声明提升，作用域链及this的形成原因



由于解析的方式会提到以下的语言特性

- 闭包（closure）：在函数内部可以访问到外部函数（环境）变量的现象
- 声明提升（raising）：用var声明在调用处下方的变量仍可访问
- this：调用函数的对象（ps：很多文章会解释为执行上下文，但是我认为不太对）
- 作用域（scope）
- 作用域链（scope chain）



当js引擎读入一个代码段

![scope-chain](http://blog.minghuiyang1998.com/scope-chain.png)

- 这里的读入一个代码段常但不仅仅指的是一个函数的调用, 在ES6中是存在块级作用域的 

- js是静态作用域（lexical scope，还有一个dynamic scope这个概念在 _you don‘t know js_ 有解释），含义是js的作用范围在编译时被确定，而不是运行时，这促成了js的两个语言特性闭包（closure）以及声明提升（raising）

- 如果函数层层调用，call stack中会一层一层入栈，如果是递归不恰当，就会遇到栈溢出（stack exceeding）的情况。外层环境中的变量能否访问到和外层函数是否仍在call stack中是没有关系的，例如尾递归的调用方式虽然外层函数调用完成出栈了，但是由于保留在函数作用域中的是对变量的索引指向内存中变量存放的位置，所以即使是声明在外层函数中的变量，只要变量的引用不为0，就不会释放内存，所以closure的不恰当使用还会造成内存泄漏的问题（垃圾回收机制是不会回收这部分的内存的）

- 如果是回调函数？为什么回调函数会有this丢失的情况？

  回调函数的声明并不会被分配内存和[[scope]]属性中，而是由web api进行处理，在异步任务结束时将函数的调用放入相应的队列。此时如果不绑定回调函数的调用对象this，那么函数就会遇到访问不到声明处外层对象内部定义的变量。这是由于在函数内部执行函数调用时，都隐式调用了function.call(this)，没有指定调用对象的函数调用，this指向window，那么遇到变量去作用域链上查找的时候window上没有就undefined了

- 作用域链上的查找和原型链上的查找？

  当以objName.xxx方式调用函数时，当前对象的定义中没有该方法时就会到原型链上去查找，而在执行过程中遇到函数的调用，只会到作用域链上去查找

- 可以像下图一样测试

  在控制台中查看call stack，然后在函数调用内部去把这个正在执行的函数console.dir()

  ![call stack](http://blog.minghuiyang1998.com/call-stack.png)







# 总结

​	我还在研究有些部分的正误，因为看到的资料大多对于执行上下文这个部分说的并不是很清楚，对这部分的一直挖掘其实是从很多文章误将this命名为执行上下文让我十分疑惑开始的，我也是慢慢理顺，现在得到的串联应该说是我能暂时能把所有知识接上的串联：）