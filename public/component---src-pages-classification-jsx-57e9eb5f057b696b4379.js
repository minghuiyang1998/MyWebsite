(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"1SCs":function(e,a,t){"use strict";t.r(a);var n=t("dI71"),l=t("q1tI"),r=t.n(l),c=(t("vrFN"),t("uSmJ")),i=t("JX7q"),s=(t("SLjX"),function(e){function a(a){var t;return(t=e.call(this,a)||this).travelScene=r.a.createRef(),t.developScene=r.a.createRef(),t.dailyScene=r.a.createRef(),t.handleScroll=t.handleScroll.bind(Object(i.a)(t)),t.state={current:"",transPosTravel:[0,0,0,0,0],transPosDevelop:[0,0,0,0,0],transPosDaily:[0,0,0,0,0],initBlockPos:{}},t}Object(n.a)(a,e);var t=a.prototype;return t.componentDidMount=function(){window.addEventListener("scroll",this.handleScroll)},t.componentWillUnmount=function(){window.removeEventListener("scroll",this.handleScroll)},t.handleScroll=function(){var e=this.travelScene.current.offsetTop,a=this.developScene.current.offsetTop,t=this.dailyScene.current.offsetTop,n=window.pageYOffset+window.innerHeight-400;console.log("TCL: Scenes -> handleScroll -> scrollTop",n);var l="";n>=e&&n<a&&(l="Travel"),n>=a&&n<t&&(l="Develop"),n>=t&&(l="Daily");var r=[0,-.6,-1.2,-1.2,-1.3];if(l.length){var c,i=n-this.state.initBlockPos[l+"OffsetTop"];this.setState(((c={})["transPos"+l]=[0,i*r[1],i*r[2],i*r[3],i*r[4]],c.current=l,c))}},t.render=function(){return r.a.createElement("div",{className:"position-relative"},r.a.createElement("div",{id:"travel-scene",className:"scene",ref:this.travelScene},r.a.createElement("div",{className:"scene-header",style:{backgroundImage:"url(http://blog.minghuiyang1998.com/nz_3.jpeg)"}},r.a.createElement("div",{className:"title-wrap"},r.a.createElement("h1",{className:"title"},"Travel"))),r.a.createElement("div",{className:"photos"},r.a.createElement("div",{className:"square-text"},r.a.createElement("span",null,"New Zealand,",r.a.createElement("br",null)," Thailand,",r.a.createElement("br",null),"Japan, Korea, ",r.a.createElement("br",null)," Singapore ..."),r.a.createElement("div",{className:"square-anim",visible:this.state.current},r.a.createElement("div",{className:"top-line"}),r.a.createElement("div",{className:"right-line"}),r.a.createElement("div",{className:"bot-line"}),r.a.createElement("div",{className:"left-line"}))),r.a.createElement("div",{id:"img-1",className:"photo-wrapper"},r.a.createElement("img",{alt:"",className:"img-m",src:"http://blog.minghuiyang1998.com/9461558419052_.pic_hd.jpg"}),r.a.createElement("div",{className:"img-background"})),r.a.createElement("div",{id:"img-2",className:"photo-wrapper"},r.a.createElement("img",{alt:"",className:"img-m",src:"http://blog.minghuiyang1998.com/9471558420106_.pic_hd.jpg"}),r.a.createElement("div",{className:"img-background"})),r.a.createElement("div",{id:"img-3",className:"photo-wrapper"},r.a.createElement("img",{alt:"",src:"http://blog.minghuiyang1998.com/9481558420897_.pic_hd.jpg"}),r.a.createElement("div",{className:"img-background"})))),r.a.createElement("div",{id:"develop-scene",className:"scene",ref:this.developScene},r.a.createElement("div",{className:"scene-header",style:{backgroundImage:"url(http://blog.minghuiyang1998.com/laptop.jpg)"}},r.a.createElement("div",{className:"title-wrap"},r.a.createElement("h1",{className:"title"},"Develop"))),r.a.createElement("div",{className:"photos"},r.a.createElement("div",{className:"square-text"},r.a.createElement("span",null,"JavaScript, CSS, Html, ",r.a.createElement("br",null)," OS, Internet, Algorithm ..."),r.a.createElement("div",{className:"square-anim",visible:this.state.current},r.a.createElement("div",{className:"top-line"}),r.a.createElement("div",{className:"right-line"}),r.a.createElement("div",{className:"bot-line"}),r.a.createElement("div",{className:"left-line"}))),r.a.createElement("div",{id:"img-1",className:"photo-wrapper"},r.a.createElement("img",{alt:"",className:"img-m",src:"http://blog.minghuiyang1998.com/something-about-css.jpg"}),r.a.createElement("div",{className:"img-background"})),r.a.createElement("div",{id:"img-2",className:"photo-wrapper"},r.a.createElement("img",{alt:"",className:"img-m",src:"http://blog.minghuiyang1998.com/vue-react-wxminiapp.jpg"}),r.a.createElement("div",{className:"img-background"})),r.a.createElement("div",{id:"img-3",className:"photo-wrapper"},r.a.createElement("img",{alt:"",src:"http://blog.minghuiyang1998.com/browser-render-blog.jpg"}),r.a.createElement("div",{className:"img-background"})))),r.a.createElement("div",{id:"daily-scene",className:"scene",ref:this.dailyScene},r.a.createElement("div",{className:"scene-header",style:{backgroundImage:"url(http://blog.minghuiyang1998.com/tongji.jpeg)"}},r.a.createElement("div",{className:"title-wrap"},r.a.createElement("h1",{className:"title"},"Daily"))),r.a.createElement("div",{className:"photos"},r.a.createElement("div",{id:"img-1",className:"photo-wrapper"},r.a.createElement("img",{alt:"",src:"http://blog.minghuiyang1998.com/run.jpg"}),r.a.createElement("div",{className:"img-background"})),r.a.createElement("div",{id:"img-2",className:"photo-wrapper"},r.a.createElement("img",{alt:"",className:"img-m",src:"http://blog.minghuiyang1998.com/tj-1.jpeg"}),r.a.createElement("div",{className:"img-background"})),r.a.createElement("div",{className:"square-text"},r.a.createElement("span",null,"running,",r.a.createElement("br",null)," tongji sse,",r.a.createElement("br",null),"thinking ..."),r.a.createElement("div",{className:"square-anim",visible:this.state.current},r.a.createElement("div",{className:"top-line"}),r.a.createElement("div",{className:"right-line"}),r.a.createElement("div",{className:"bot-line"}),r.a.createElement("div",{className:"left-line"}))),r.a.createElement("div",{id:"img-3",className:"photo-wrapper"},r.a.createElement("img",{alt:"",className:"img-m",src:"http://blog.minghuiyang1998.com/project.jpeg"}),r.a.createElement("div",{className:"img-background"})))))},a}(r.a.Component)),m=function(e){function a(){return e.apply(this,arguments)||this}return Object(n.a)(a,e),a.prototype.render=function(){return r.a.createElement(c.a,null,r.a.createElement(s,null))},a}(r.a.Component);a.default=m},"2PhP":function(e,a,t){},"6Pxn":function(e,a,t){},"A/xl":function(e,a,t){},HgXS:function(e,a,t){},JX7q:function(e,a,t){"use strict";function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}t.d(a,"a",(function(){return n}))},SLjX:function(e,a,t){},WuLn:function(e,a,t){},d1Pv:function(e,a,t){},uSmJ:function(e,a,t){"use strict";var n=t("dI71"),l=t("q1tI"),r=t.n(l),c=(t("2PhP"),t("HgXS"),t("d1Pv"),t("JX7q")),i=t("Wbzz"),s=(t("A/xl"),function(e){function a(a){var t;return(t=e.call(this,a)||this).state={searchKey:""},t.handleChange=t.handleChange.bind(Object(c.a)(t)),t.handleSubmit=t.handleSubmit.bind(Object(c.a)(t)),t}Object(n.a)(a,e);var t=a.prototype;return t.handleSubmit=function(e){e.preventDefault(),console.log("TCL: Header -> onSearchButtonTap -> this.state.searchKey",this.state.searchKey),Object(i.navigate)("/search?key="+this.state.searchKey)},t.handleChange=function(e){this.setState({searchKey:e.target.value})},t.render=function(){return r.a.createElement("div",{className:"header-wrap"},r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"logo"},r.a.createElement(i.Link,{className:"header-link",to:"/"},r.a.createElement("svg",{className:"octicon",width:"64px",height:"64px",viewBox:"0 0 64 64",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xlink:"http://www.w3.org/1999/xlink"},r.a.createElement("g",{id:"Group",transform:"translate(0.000000, -3.000000)"},r.a.createElement("rect",{id:"Rectangle",x:"0",y:"3",width:"64",height:"64",rx:"32"}),r.a.createElement("text",{id:"J",style:{fontSize:"48",fontFamily:"PingFangSC-Medium, PingFang SC",fontWeight:"400"}},r.a.createElement("tspan",{x:"19.708",y:"51"},"J")))))),r.a.createElement("nav",{className:"nav"},r.a.createElement(i.Link,{className:"header-link",to:"/develop"},"Develop"),r.a.createElement(i.Link,{className:"header-link",to:"/travel"},"Travel")),r.a.createElement("form",{onSubmit:this.handleSubmit,className:"header-search"},r.a.createElement("input",{className:"input",type:"text",autoComplete:"off",placeholder:"Search or jump to...",value:this.state.searchKey,onChange:this.handleChange}),r.a.createElement("button",{type:"submit",className:"search-button"},r.a.createElement("svg",{t:"1555994577347",className:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1107"},r.a.createElement("path",{d:"M702.537056 608.55508c85.516676-129.373533 71.343885-305.235866-42.583864-419.164638-130.141012-130.141012-341.126284-130.141012-471.26832 0-130.141012 130.141012-130.141012 341.127308 0 471.26832 113.928772 113.927749 289.790082 128.101563 419.163615 42.582841 13.449313 2.808976 27.335578 1.909489 40.410362-2.061962-8.972349 27.489074-3.180436 58.4666 18.276249 79.922261l153.658635 153.671938c30.670533 30.66951 81.020268 30.05655 112.479771-1.403976 31.439036-31.461549 32.05302-81.799004 1.382487-112.49205L780.396331 667.239644c-21.455661-21.456684-52.432163-27.247574-79.922261-18.275225C704.468035 635.888612 705.367521 622.002346 702.537056 608.55508zM255.116887 594.71077c-92.976578-92.977601-92.976578-243.718791 0-336.696392 92.976578-92.998067 243.717767-92.976578 336.672856 0 92.999091 92.977601 92.999091 243.696278 0 336.696392C498.834654 687.688371 348.093465 687.688371 255.116887 594.71077z","p-id":"1108"})))),r.a.createElement("details",{className:"details"},r.a.createElement("summary",null,r.a.createElement("div",{className:"header-link"},r.a.createElement("span",{className:"icon-menu"}))),r.a.createElement("div",{className:"dropdown-menu"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"dropdown-search"},r.a.createElement("input",{className:"input",type:"text",autoComplete:"off",placeholder:"Search",value:this.state.searchKey,onChange:this.handleChange}),r.a.createElement("button",{type:"submit",className:"search-button"},r.a.createElement("svg",{t:"1555994577347",className:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1107"},r.a.createElement("path",{d:"M702.537056 608.55508c85.516676-129.373533 71.343885-305.235866-42.583864-419.164638-130.141012-130.141012-341.126284-130.141012-471.26832 0-130.141012 130.141012-130.141012 341.127308 0 471.26832 113.928772 113.927749 289.790082 128.101563 419.163615 42.582841 13.449313 2.808976 27.335578 1.909489 40.410362-2.061962-8.972349 27.489074-3.180436 58.4666 18.276249 79.922261l153.658635 153.671938c30.670533 30.66951 81.020268 30.05655 112.479771-1.403976 31.439036-31.461549 32.05302-81.799004 1.382487-112.49205L780.396331 667.239644c-21.455661-21.456684-52.432163-27.247574-79.922261-18.275225C704.468035 635.888612 705.367521 622.002346 702.537056 608.55508zM255.116887 594.71077c-92.976578-92.977601-92.976578-243.718791 0-336.696392 92.976578-92.998067 243.717767-92.976578 336.672856 0 92.999091 92.977601 92.999091 243.696278 0 336.696392C498.834654 687.688371 348.093465 687.688371 255.116887 594.71077z","p-id":"1108"})))),r.a.createElement(i.Link,{className:"dropdown-item",to:"/develop"},"Develop"),r.a.createElement(i.Link,{className:"dropdown-item",to:"/travel"},"travel"),r.a.createElement(i.Link,{className:"dropdown-item",to:"/classification"},"classification"))),r.a.createElement("span",{className:"menu"})))},a}(r.a.Component)),m=(t("6Pxn"),function(e){function a(){return e.apply(this,arguments)||this}return Object(n.a)(a,e),a.prototype.render=function(){return r.a.createElement("main",{className:"container"},this.props.children)},a}(r.a.Component)),o=(t("WuLn"),function(e){function a(){return e.apply(this,arguments)||this}return Object(n.a)(a,e),a.prototype.render=function(){return r.a.createElement("div",{className:"footer"},"Copyright © Jasmine Yang. All Rights Reserved")},a}(r.a.Component)),d=function(e){function a(){return e.apply(this,arguments)||this}return Object(n.a)(a,e),a.prototype.render=function(){return r.a.createElement("div",{className:"layout"},r.a.createElement(s,null),r.a.createElement(m,null,this.props.children),r.a.createElement(o,null))},a}(r.a.Component);a.a=d},yLpj:function(e,a){var t;t=function(){return this}();try{t=t||new Function("return this")()}catch(n){"object"==typeof window&&(t=window)}e.exports=t}}]);
//# sourceMappingURL=component---src-pages-classification-jsx-57e9eb5f057b696b4379.js.map