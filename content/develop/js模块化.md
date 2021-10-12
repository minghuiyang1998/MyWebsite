---
id: 10026
type: develop
path: /develop/module
title: js模块化
author: jasmine
digest: 故事的开始是实习的导师问我认不认识echarts修改样式的customed.js文件开始的12行代码...
image: http://blog.minghuiyang1998.com/module.jpg
create_date: Tue May 03 2019 10:30:48 GMT+0800 (CST)
update_date: Tue May 03 2019 10:30:48 GMT+0800 (CST)
timestamp: 1557196248971
reading_time: 8 MIN READ
tags: []
palette: {"Vibrant":[242,218,43],"DarkVibrant":[114,51,20],"LightVibrant":[251,235,120],"Muted":[144.15999999999997,127.84000000000002,8.840000000000018],"DarkMuted":[130.1641791044776,58.23134328358209,22.835820895522396],"LightMuted":[148.59712230215825,130.98561151079136,4.402877697841739]}
image_height: 5867
image_width: 3301
---



>  	故事的开始是实习的导师问我认不认识echarts修改样式的customed.js文件开始的12行代码（tips：本文会出现大量代码用以描述我整理我所记录的js module的演化过程），笔记其实已经是很长时间之前的了，所以今天才来整理花了不少时间才看明白= =



👇echarts修改样式的customed.js文件开始的12行代码：

```js
(function(root, factory) {
  if (typeof define === "function" && define.amd) {
    // AMD. Register as an anonymous module.
    define(["exports", "echarts"], factory);
  } else if (typeof exports === "object" && typeof exports.nodeName !== "string") {
    // CommonJS
    factory(exports, require("echarts"));
  } else {
    // Browser globals
    factory({}, root.echarts);
  }
})(this, function(exports, echarts) {
  var log = function(msg) {
    if (typeof console !== "undefined") {
      console && console.error && console.error(msg);
    }
  };
  if (!echarts) {
    log("ECharts is not Loaded");
    return;
  }
  echarts.registerTheme("customed", {
      // 这里删去了n行 
  });
});

```

​	

​	在这段代码里面用到了UMD，js代码模块化的方式，使得这段代码既可以用于服务端又可以用于浏览器，同时也避免了污染全局变量。

- 先判断是否支持AMD
- 再判断是否支持CommonJs
- 前两个都不存在公开到全局



# 在js代码里避免污染全局变量的方法

- 闭包 + 立即执行

  ```js
  (function(){  
  	var page
  	function book(){
          page = page + 1
  	}
  })()
  ```

- 命名空间（创建一个对象为他添加方法）调用函数或更改变量值，你总是需要通过主对象的名称将整个事物包装在匿名函数中并以这种方式保护范围

  ```js
  var main = {}
  main.book = function(){}
  main.page = 3;
  
  var main = {
      book:function(){},
      
  }
  ```

- 使用let，const（也是代码规范中的推荐做法）
- 模块化
  - 拆分大文件， 避免单文件内容过多过于臃肿
  - 便于支持组件化，单文件功能更独立，模块内外分离
  - 避免变量污染全局，解决命名冲突



#   js模块化解决方案

​	“历史上，JavaScript 一直没有模块（module）体系，无法将一个大程序拆分成互相依赖的小文件，再用简单的方法拼装起来。其他语言都有这项功能，比如 Ruby 的`require`、Python 的`import`，甚至就连 CSS 都有`@import`，但是 JavaScript 任何这方面的支持都没有，这对开发大型的、复杂的项目形成了巨大障碍。在 ES6 之前，社区制定了一些模块加载方案，最主要的有 CommonJS 和 AMD 两种。前者用于服务器，后者用于浏览器。”  —— [阮一峰ES6入门](https://es6.ruanyifeng.com/#docs/module)



### js实现简单的同步异步模块化机制

- 同步

```

```



- 异步

```

```



### 常见js模块化方案

- 服务端

  - nodejs使用CommonJS的解决方案（exports/require）实现模块加载（如果使用babel也可以使用import，export default的方式）
- 客户端
  - 页面直出使用模版渲染 —— （将拆分出来的文件使用<script>或<link>标签的形式引入）
  - 客户端渲染SPA —— 使用webpack进行打包（使用import，export default）

  （使用webpack会只需要在解析完空白html后请求一次将打包好的bundle.js文件返回，而使用<script>与<link>则是每个标签都会进行请求）



### CommonJS AMD CMD UMD

- commonJS (nodejs)：同步  用`module.exports`定义当前模块对外输出的接口（不推荐直接用`exports`），用`require`加载模块。
- AMD（异步）:所有依赖这个模块的语句，都定义在一个回调函数中，等到加载完成之后，这个回调函数才会运行用`require.config()`指定引用路径等，用`define()`定义模块，用`require()`加载模块。首先需要引入require.js文件和一个入口文件main.js。main.js中配置`require.config()`并规定项目中用到的基础模块。
- CMD和sea.js：CMD是另一种js模块化方案，它与AMD很类似，不同点在于：AMD 推崇依赖前置、提前执行，CMD推崇依赖就近、延迟执行。
- ES6 Module export{} import ：



###webpack（现代前端模块打包工具）

​	由于前端页面有着越来越重的交互需求，以Vue，React为代表的组件化的开发方式离不开模块打包工具



以webpack为例：

- 打包工具做了什么？
- 为什么spa页面尤其需要打包工具？
- 打包工具会带来什么问题？
- webpack与gulp？