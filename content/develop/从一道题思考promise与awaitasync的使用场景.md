---
id: 10035
type: develop
path: /develop/promise-await-async
title: 从一道题思考promise与awaitasync的使用场景
author: jasmine
digest: 在两个月之前因为使用await/async的次数真的不多，导致我也没有用心的去理解他和promise的区别，直到我遇到了这道题..我才稍微有了一点点想法
image: http://blog.minghuiyang1998.com/promise-await-async.jpg
create_date: Wed May 01 2019 10:57:26 GMT+0800 (CST)
update_date: Wed May 01 2019 10:57:26 GMT+0800 (CST)
timestamp: 1556593046482
reading_time: 6 MIN READ
tags: ['async', 'promise','await', 'callback']
image_height: 2934
image_width: 4401
palette: {"Vibrant":[114.92957746478872,127.49999999999999,140.0704225352113],"DarkVibrant":[59.76338028169014,66.3,72.83661971830986],"LightVibrant":[182.16338028169014,188.7,195.23661971830987],"Muted":[128,128,121],"DarkMuted":[72,67,62],"LightMuted":[177,184,191]}
---





> 最近很着急的把脑子里的东西小结出来，因为最近学校事情比较多，写代码写的比较少。这篇文章同样从一道题出发，这道题来自于我今年参加的一次微信的笔试，但是写的不是太好还花了很多时间，反思了一下不是很难的题目，终归是基础不够好，还要多加学习。这篇文章就从题目出发，反思一下js的异步处理的一些方法。



# 题目

​	大概是写一个测试函数，输入是总共执行的次数和每次发送的请求数目和请求url，比如输入3，4就是发送4个请求一共发送3次，然后记录每次请求到获得返回的时间，最后求平均值返回。



# 思考

1. js的异步编程有几种解决方案？
   - callback
   - promise
   - await/async
2. 这三种方式的区别
   - 错误捕获的方式
   - 常用的场景



​	这道题存在一个串行异步和一个并行异步的，我当时直接就只考虑用promise写，因为日常开发没怎么用过async/await，但是用promise写就会写的很长，因为要处理串行异步就会存在一个递归。async/await虽然是promise的语法糖，但是学习一下就会发现对于题目这种用法async/await明显会更合适。

​	

# 实现



1. async/await 与 promise的关系？

async/await 本质上还是promise，是promise和generator的语法糖（[详情可见阮一峰老师的ES6入门](<https://es6.ruanyifeng.com/#docs/async>)）

```js
async function f3() {
  /* 1. 这个函数里面的内容会被包成一个promise，
  相当于在这里面写了一个return new Promise((resolve, reject) => {})，
  然后这个Promise的里面又有一个Generator函数用于控制函数自动执行，
  通过递归调用step函数，顺序执行每一行，如果是异步操作就等待resolve再执行下一行*/
    
  try {
  /* 2. await 后面跟着一个promise, 而await下面的部分会被包成Promise.resolve()
     相当于在这里写了一个 var z = Promise.resolve(data);  z.then((data)=>{
      // 这里是await后面的代码
     })
  */
    var z = await Promise.resolve(30);
  } catch (e) {
    console.log(e);
  }
}

f3();
```

**了解了这些以后我重写了一下这道题目的代码** (这里省去了关于计算平均数的代码以便更清晰的展示思路)



2. 那么这道题用promise + 递归 写就会是下面这个样子（面试的时候我就是这样写的..)

```js
let allData = []
function send(times, counts, url) {
    return new Promise((resolve, reject)=>{
        _sendConcurrentRequest(counts, url).then((data) => {
            allData.push(data)
            if (times) {
                send(times - 1, counts, url) // 递归调用
            } else {
                // 计算平均数
                resolve(avarage)
            } 
 	 	}).catch(e => reject(e))  
    })
}

function _sendConcurrentRequest(counts, url) {
 	return new Promise((resolve, reject) => {
    	let tempList = [], _counts = counts
   		 while (_counts) {
        	return new Promise((resolve, reject) => {
          		tempList.push(_sendRequest(url))
         	 	_counts --
         	})
    	}
   		Promise.all(tempList).then((data) => {
        	resolve(data)
    	}).catch(e => reject(e))
	})
}

 function _sendRequest(url) {
    return new Promise((resolve, reject) => {
      let start = Date.now()
      // 模拟延时
      setTimeout(() => {
        let stop = Date.now()
        resolve(stop - start)
      }, 2000)
    })
  }
```



3. 改为使用await + 递归

```js
let allData = []
async function send(times, counts, url) {
    let data = await _sendConcurrentRequest(counts, url)
  	allData.push(data)
    
  	if (times) {
   		 await send(times - 1, counts, url)
  	} else {
   		 return avarage
  	}
}

// 后面的两个函数没有变化仍是用Promise.all处理并行请求
```



4. 将使用await的情况由递归变为循环，promise无法改写为循环的情况

```js
let allData = []
async function send(times, counts, url) {
    while(times) {
    	 let data = await _sendConcurrentRequest(counts, url)
   		 allData.push(data)
   		 times--
    }
 	return avarage
}
```



> 然后就会发现最后一种async/await+循环比第一种更便于理解语义清晰了无数倍：）



# 总结

​	为了解决callback hell出现了promise，用then使异步任务的执行更清晰明了的。Promise 的存在问题是代码冗余，不管什么操作后任务都得用Promise 起来带上resolve，reject。例如两个串行的异步操作中间必须有一个同步操作，那么为了能够链式回调，中间的同步操作也得用promise包起来，然后才能then链式调用。而且新接入的同学为了把代码看懂需要去找到这个函数声明的地方，原来的语义就不那么直观了。后来​为了解决串行的异步出现async/await，真正使异步操作能够像同步代码一样去写。

​	每种方法都有自己的用处，不存在绝对的好与坏，实习之初导师建议我能用callback直接处理就用callback处理，类似于（返回数据处理不复杂的情况下）两个串联的请求也没必要用promise包起来，两个回调嵌套使用就好了，使用promise反而会使的语义很不清晰。

​	callback和promise是解决异步的两种方案，async/await只是promise的语法糖，用promise都可以解决，但是由于异步操作也会出现串行，并行，循环异步的情景，通过这道题我觉得循环串行异步的场景中用async/await实现会比较清晰，其他的情况下promise也够用了。能不同步的两个或多个异步操作就尽量别同步会阻塞，除此之使用异步编程最应该注意的问题就是为了后期能够快速定位错误，一定要注意异常捕获。
