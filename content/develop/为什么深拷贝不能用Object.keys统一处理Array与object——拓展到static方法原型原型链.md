---
id: 10006
type: develop
path: /develop/objectkeys-prototype
title: 为什么深拷贝不能用Object.keys统一处理Array与object——拓展到static方法原型原型链
author: jasmine
digest: 这篇文章的起源是写了一个深拷贝的方法，然而老师说我写的太长了，告诉我你可以用Object.keys同时处理Array与Object，但是真的可以这样处理吗？当然不可以因为会漏掉一种情况，但是为什么Array也可以用Object.keys呢，这个方法并不是Object.prototype上的方法...
image: http://blog.minghuiyang1998.com/objectkeys-prototype.jpg
create_date: Sun Apr 15 2019 08:53:16 GMT+0800 (CST)
update_date: Sun Apr 15 2019 08:53:16 GMT+0800 (CST)
reading_time: 3 MIN READ
tags: ["static methods", "prototype"]
palette: {"Vibrant":[130,166,212],"DarkVibrant":[33.9392857142857,62.353571428571406,98.6607142857143],"LightVibrant":[195,219,252],"Muted":[100,124,159],"DarkMuted":[41,65,77],"LightMuted":[188,196,220]}
timestamp: 1555289596000
image_height: 1728
image_width: 2426
---



> 写在前面：最近慢慢在把实习期间积累的笔记，整理输出。张鑫旭张老师每周都会有个小测帮助我们夯实基础，我从小测中学到很多，这篇文章是关于某次js小测的收获和思考：）。
>
> ⭐️ps: 这篇文章更像是记录，把我零碎的知识串起来的文章，而不是说明原型链原理的文章。



#问题引出的题目

实现一个方法，只要内容形态一致就认为数组和对象相等

例如：

```js
let obj1 = {a: [1, '2'], b: 2}
let obj2 = {b: 2, a: [1, '2']}
let arr1 = [1,2,{a: 1, b:2}, 9]
let arr2 = [1,2,{b: 2, a:1}, 9]
equal(obj1, obj2) //return true
equal(arr1, arr2) //return true
equal(obj1, arr1) //return false

// 然后我是这么写的（思路就是，递归+浅拷贝，大可跳过这部分，因为并不是我收获的重点😂）
function equalObject(obj1, obj2) {
    if (Object.keys(obj1).length != Object.keys(obj2).length) {
        return false
    } else {
        Object.keys(obj1).forEach((key) => {
            if (obj1[key] !== obj2[key]) {
                return false
            }
        })
        return true
    }
}

function equalArray(arr1, arr2) {
    return JSON.stringify(arr1) === JSON.stringify(arr2)
}

function equal(obj1, obj2) {
    let typeEnum = {
        'array': function (obj1, obj2) {
            if (obj1.length !== obj2.length) {
                return false
            } else {
                for (let i = 0; i < obj1.length; i++) {
                    let func = typeEnum[_detect(obj1[i], obj2[i])]
                    if (!func(obj1[i], obj2[i])) {
                        return false
                    }
                }
                return true
            }
        },
        'object': function (obj1, obj2) {
            if (Object.keys(obj1).length != Object.keys(obj2).length) {
                return false
            } else {
                let keys = Object.keys(obj1)
                for (let k = 0; k < keys.length; k++) {
                    let key = keys[k]
                    let func = typeEnum[_detect(obj1[key], obj2[key])]
                    if (!func(obj1[key], obj2[key])) {
                        return false
                    }
                }
                return true
            }
        },
        'other': function (obj1, obj2) {
            return obj1 === obj2
        }
    }

    function _detect(obj1, obj2) {
        if (Array.isArray(obj1) && Array.isArray(obj2)) {
            return 'array'
        } else if (typeof obj1 === 'object' && typeof obj2 === 'object') {
            return 'object'
        } else {
            return 'other'
        }
    }

    let func = typeEnum[_detect(obj1, obj2)]
    return func(obj1, obj2)
}
```

但是张老师给刚开始帮我看的时候给了我另一个解决方式，思路差不多，但是代码十分精简

```js
    if (!(o1 instanceof Object) || (o2 instanceof Object)) {
        return false
    }
    if (Object.keys(o1).length !== Object.keys(o2).length) {
        return false
    }
    return Object.keys(o1).every(v => {
        if (o1[v] instanceof Object) {
             return equal(o1[v], o2[v])
        } else {
            return o1[v]  === o2[v]
        }
    })
}

// 用Object.keys()直接处理了array和object两种类型的情况，虽然后来发现这种方法是是有点小问题的没办法处理equal（[1,2], {'0': 1, '1': 2})这种情况，但是我首先没想到那个（...因为基础不牢跑偏了orz），因为我首先想到的是为什么Object.keys（）可以用来同时处理array和object...
```

A：Object.keys() ,并不是Object.prototype上的方法，而是定义在Object函数上的静态方法



# JS的原型系统  &  Object.keys

Q：为什么Object.keys（）可以用来同时处理array和object ？

为了解决这个问题于是我对js的原型系统的相关概念的重新梳理了一下：

（js基于原型的实现面向对象，注意区别对象，对象的原型，实例）

![objectkeys-prototype_1.pic](http://blog.minghuiyang1998.com/objectkeys-prototype_1.jpeg)

## JS的原型系统

- 构造函数（串有关普通函数，构造函数，new，this）
- 原型 （prototype属性）
- constructor
- \__proto__指针
- 原型链 （instance原型链的关系）
- 静态方法（Object.keys().....)

（ps：下述的大部分理解来自JStutorial<https://javascript.info/>， 很多东西但当时看完题目也做对了觉得自己都懂了，然后遇到问题再重新理解才发现当时肯定是没懂😂）



####1. 构造函数

- 使用new调用普通函数则普通函数就成了构造函数 

- new关键词做了什么
  1. 创建一个对象 let obj = { }
  2. obj.\__proto__ = 构造函数.prototype
  3. 执行构造函数中的代码
  4. 返回这个对象
- 用new调用构造函数的时候，调用函数的对象，即函数的this值指向的应该是新创建的对象即上面的obj



#### 2. prototype属性（原型）

​	每个**函数**都有一个prototype属性，指向**函数的原型对象**(这个属性的值是一个对象)



#### 3. constructor

​	函数的原型对象都有一个constructor属性指向函数本身，用构造函数创建实例后，实例的\__proto__（原型）和只会默认取得构造函数的prototype属性（解决了对象识别的问题，可以通过属性判断实例室友那个构造函数创建的）



#### 4.\__proto__指针

每个实例都有一个\__proto__指针指向构造函数的原型对象



#### 5.原型链

当试图访问实例的一个属性的时候，会沿着原性链层层向上搜索知道找到匹配的属性，否则报错



#### 6.静态方法

（jstutorial当时讲这个的时候我真的以为我理解了🌚）



重新补充上面概念的细节：

#####构造函数（这个地方在浏览器里面console.dir看看就会明白许多）

- 所有的**函数**包括内置的**Object()，Function()，Array()，还有自建函数function foo(){}**是函数的\__proto__都是一个匿名函数，与Object.prototype, Array.prototype…要区分开来
  - special：这个**匿名函数**没有prototype属性,有一个constructor属性是Function（不是本身），_proto_指向Object.prototype
  - special：**函数Object（）**的prototype属性指向Object.prototype, prototype包含两个属性constructor指向Object（）本身，_proto_指向null
- 其他**函数如Function（），Array（）**的prototype属性指向自己的原型对象，原型对象的constructor指向自己本身，原型对象的_proto_属性指向Object.prototype（即构造函数的原型对象是由Object生成的，但是看文章开始的图可见构造函数的\__proto__(原型）是匿名函数，可见这两个东西是不一样，没有绑定关系的）
- prototype除了有constructor属性和\___proto__属性还有原型里面定义有的这个类型的方法，比如Array的concat，find等等方法

#####当使用class与extends构造对象的时候

- 使用extends关键词的函数的_proto_不会是匿名函数，是extends的那个Object(**不仅仅是原型继承，原函数也继承**)



##Object.keys

但是打开看Array的\__proto__发现并没有Object.keys()，因为这个方法是定义在Object对象上的方法）

![objectkeys-prototype_2.pic](http://blog.minghuiyang1998.com/objectkeys-prototype_2.jpeg)

Array和Object都可以用来遍历元素是因为，Array可以看作是key是1，2，3..的Object，然后借用了定义在Object上的这个方法来将所有的key值放到了一个数组里返回



# 小结

​	😂思路跑偏了好远，本来只是想知道为什么Object.keys（）可以用来同时处理array和object，不理解的原因归根究底就是没有理解静态方法，把原型链的知识又从头到尾梳理了一遍解决了很多之前含糊不清的点也是巨大的收获吧～：D

ps：后来还想到了object移除一组值用的是delete key，array删除某个值用的是splice，为什么呢 ？某天再写吧，这太长了...