(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{149:function(e,a,t){"use strict";t.r(a);var n=t(7),l=t.n(n),r=t(0),i=t.n(r),c=(t(162),t(153)),s=t(34),o=t.n(s),m=(t(183),function(e){function a(a){var t;return(t=e.call(this,a)||this).travelScene=i.a.createRef(),t.developScene=i.a.createRef(),t.dailyScene=i.a.createRef(),t.travelSceneText=i.a.createRef(),t.developSceneText=i.a.createRef(),t.dailySceneText=i.a.createRef(),t.handleScroll=t.handleScroll.bind(o()(t)),t.state={transPosTravel:[0,0,0,0,0],transPosDevelop:[0,0,0,0,0],transPosDaily:[0,0,0,0,0],initBlockPos:{}},t}l()(a,e);var t=a.prototype;return t.componentDidMount=function(){var e=this.travelScene.current,a=this.developScene.current,t=this.dailyScene.current,n={TravelOffsetTop:e.offsetTop,DevelopOffsetTop:a.offsetTop,DailyOffsetTop:t.offsetTop};console.log("TCL: Scenes -> componentDidMount -> _tempPos",n),this.setState({initBlockPos:n}),window.addEventListener("scroll",this.handleScroll)},t.componentWillUnmount=function(){window.removeEventListener("scroll")},t.handleScroll=function(){var e=window.pageYOffset+window.screen.availHeight,a="";e>=this.state.initBlockPos.TravelOffsetTop&&e<this.state.initBlockPos.DevelopOffsetTop&&(a="Travel"),e>=this.state.initBlockPos.DevelopOffsetTop&&e<this.state.initBlockPos.DailyOffsetTop&&(a="Develop"),e>=this.state.initBlockPos.DailyOffsetTop&&(a="Daily");var t=[0,-.6,-1.2,-1.2,-1.3];if(a.length){var n,l=e-this.state.initBlockPos[a+"OffsetTop"];this.setState(((n={})["transPos"+a]=[0,l*t[1],l*t[2],l*t[3],l*t[4]],n)),console.log(this.state["transPos"+a],this.state)}},t.render=function(){return i.a.createElement("div",{className:"position-relative"},i.a.createElement("div",{className:"scene"}),i.a.createElement("div",{id:"travel-scene",className:"scene",ref:this.travelScene},i.a.createElement("div",{className:"scene-header",style:{backgroundImage:"url(http://blog.minghuiyang1998.com/nz_3.jpeg)"}},i.a.createElement("div",{className:"title-wrap"},i.a.createElement("h1",{className:"title"},"Travel"))),i.a.createElement("div",{className:"photos"},i.a.createElement("div",{className:"square-text",ref:this.travelSceneText},i.a.createElement("span",null,"New Zealand,",i.a.createElement("br",null)," Thailand,",i.a.createElement("br",null),"Japan, Korea, ",i.a.createElement("br",null)," Singapore ..."),i.a.createElement("div",{className:"square-anim"},i.a.createElement("div",{className:"top-line"}),i.a.createElement("div",{className:"right-line"}),i.a.createElement("div",{className:"bot-line"}),i.a.createElement("div",{className:"left-line"}))),i.a.createElement("div",{id:"img-1",className:"photo-wrapper"},i.a.createElement("img",{alt:"",className:"img-m",src:"http://blog.minghuiyang1998.com/9461558419052_.pic_hd.jpg"}),i.a.createElement("div",{className:"img-background"})),i.a.createElement("div",{id:"img-2",className:"photo-wrapper"},i.a.createElement("img",{alt:"",className:"img-m",src:"http://blog.minghuiyang1998.com/9471558420106_.pic_hd.jpg"}),i.a.createElement("div",{className:"img-background"})),i.a.createElement("div",{id:"img-3",className:"photo-wrapper"},i.a.createElement("img",{alt:"",src:"http://blog.minghuiyang1998.com/9481558420897_.pic_hd.jpg"}),i.a.createElement("div",{className:"img-background"})))),i.a.createElement("div",{id:"develop-scene",className:"scene",ref:this.developScene},i.a.createElement("div",{className:"scene-header",style:{backgroundImage:"url(http://blog.minghuiyang1998.com/laptop.jpg)"}},i.a.createElement("div",{className:"title-wrap"},i.a.createElement("h1",{className:"title"},"Develop"))),i.a.createElement("div",{className:"photos"},i.a.createElement("div",{className:"square-text",ref:this.developSceneText},i.a.createElement("span",null,"New Zealand,",i.a.createElement("br",null)," Thailand,",i.a.createElement("br",null),"Japan, Korea, ",i.a.createElement("br",null)," Singapore ..."),i.a.createElement("div",{className:"square-anim"},i.a.createElement("div",{className:"top-line"}),i.a.createElement("div",{className:"right-line"}),i.a.createElement("div",{className:"bot-line"}),i.a.createElement("div",{className:"left-line"}))),i.a.createElement("div",{id:"img-1",className:"photo-wrapper"},i.a.createElement("img",{alt:"",className:"img-m",src:"http://blog.minghuiyang1998.com/9461558419052_.pic_hd.jpg"}),i.a.createElement("div",{className:"img-background"})),i.a.createElement("div",{id:"img-2",className:"photo-wrapper"},i.a.createElement("img",{alt:"",className:"img-m",src:"http://blog.minghuiyang1998.com/9471558420106_.pic_hd.jpg"}),i.a.createElement("div",{className:"img-background"})),i.a.createElement("div",{id:"img-3",className:"photo-wrapper"},i.a.createElement("img",{alt:"",src:"http://blog.minghuiyang1998.com/9481558420897_.pic_hd.jpg"}),i.a.createElement("div",{className:"img-background"})))),i.a.createElement("div",{id:"daily-scene",className:"scene",ref:this.dailyScene},i.a.createElement("div",{className:"scene-header",style:{backgroundImage:"url(http://blog.minghuiyang1998.com/tongji.jpeg)"}},i.a.createElement("div",{className:"title-wrap"},i.a.createElement("h1",{className:"title"},"Daily"))),i.a.createElement("div",{className:"photos"},i.a.createElement("div",{className:"square-text",ref:this.dailySceneText},i.a.createElement("span",null,"New Zealand,",i.a.createElement("br",null)," Thailand,",i.a.createElement("br",null),"Japan, Korea, ",i.a.createElement("br",null)," Singapore ..."),i.a.createElement("div",{className:"square-anim"},i.a.createElement("div",{className:"top-line"}),i.a.createElement("div",{className:"right-line"}),i.a.createElement("div",{className:"bot-line"}),i.a.createElement("div",{className:"left-line"}))),i.a.createElement("div",{id:"img-1",className:"photo-wrapper"},i.a.createElement("img",{alt:"",className:"img-m",src:"http://blog.minghuiyang1998.com/9461558419052_.pic_hd.jpg"}),i.a.createElement("div",{className:"img-background"})),i.a.createElement("div",{id:"img-2",className:"photo-wrapper"},i.a.createElement("img",{alt:"",className:"img-m",src:"http://blog.minghuiyang1998.com/9471558420106_.pic_hd.jpg"}),i.a.createElement("div",{className:"img-background"})),i.a.createElement("div",{id:"img-3",className:"photo-wrapper"},i.a.createElement("img",{alt:"",src:"http://blog.minghuiyang1998.com/9481558420897_.pic_hd.jpg"}),i.a.createElement("div",{className:"img-background"})))))},a}(i.a.Component)),d=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={direction:"left"},t}return l()(a,e),a.prototype.render=function(){return i.a.createElement(c.a,null,i.a.createElement(m,null))},a}(i.a.Component);a.default=d},150:function(e,a,t){"use strict";t.d(a,"b",function(){return m});var n=t(0),l=t.n(n),r=t(4),i=t.n(r),c=t(33),s=t.n(c);t.d(a,"a",function(){return s.a}),t.d(a,"c",function(){return c.navigate});t(151);var o=l.a.createContext({}),m=function(e){return l.a.createElement(o.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):l.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},151:function(e,a,t){var n;e.exports=(n=t(152))&&n.default||n},152:function(e,a,t){"use strict";t.r(a);t(35);var n=t(0),l=t.n(n),r=t(4),i=t.n(r),c=t(55),s=t(2),o=function(e){var a=e.location,t=s.default.getResourcesForPathnameSync(a.pathname);return t?l.a.createElement(c.a,Object.assign({location:a,pageResources:t},t.json)):null};o.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},a.default=o},153:function(e,a,t){"use strict";var n=t(7),l=t.n(n),r=t(0),i=t.n(r),c=(t(154),t(155),t(156),t(34)),s=t.n(c),o=t(150),m=(t(157),function(e){function a(a){var t;return(t=e.call(this,a)||this).state={searchKey:""},t.handleChange=t.handleChange.bind(s()(t)),t.handleSubmit=t.handleSubmit.bind(s()(t)),t}l()(a,e);var t=a.prototype;return t.handleSubmit=function(e){e.preventDefault(),console.log("TCL: Header -> onSearchButtonTap -> this.state.searchKey",this.state.searchKey),Object(o.c)("/search?key="+this.state.searchKey)},t.handleChange=function(e){this.setState({searchKey:e.target.value})},t.render=function(){return i.a.createElement("div",{className:"header-wrap"},i.a.createElement("header",{className:"header"},i.a.createElement("div",{className:"logo"},i.a.createElement(o.a,{className:"header-link",to:"/"},i.a.createElement("svg",{className:"octicon",width:"64px",height:"64px",viewBox:"0 0 64 64",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xlink:"http://www.w3.org/1999/xlink"},i.a.createElement("g",{id:"Group",transform:"translate(0.000000, -3.000000)"},i.a.createElement("rect",{id:"Rectangle",x:"0",y:"3",width:"64",height:"64",rx:"32"}),i.a.createElement("text",{id:"J",style:{fontSize:"48",fontFamily:"PingFangSC-Medium, PingFang SC",fontWeight:"400"}},i.a.createElement("tspan",{x:"19.708",y:"51"},"J")))))),i.a.createElement("nav",{className:"nav"},i.a.createElement(o.a,{className:"header-link",to:"/develop"},"Develop"),i.a.createElement(o.a,{className:"header-link",to:"/travel"},"Travel"),i.a.createElement(o.a,{className:"header-link",to:"/classification"},"Classification")),i.a.createElement("form",{onSubmit:this.handleSubmit,className:"header-search"},i.a.createElement("input",{className:"input",type:"text",autoComplete:"off",placeholder:"Search or jump to...",value:this.state.searchKey,onChange:this.handleChange}),i.a.createElement("button",{type:"submit",className:"search-button"},i.a.createElement("svg",{t:"1555994577347",className:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1107"},i.a.createElement("path",{d:"M702.537056 608.55508c85.516676-129.373533 71.343885-305.235866-42.583864-419.164638-130.141012-130.141012-341.126284-130.141012-471.26832 0-130.141012 130.141012-130.141012 341.127308 0 471.26832 113.928772 113.927749 289.790082 128.101563 419.163615 42.582841 13.449313 2.808976 27.335578 1.909489 40.410362-2.061962-8.972349 27.489074-3.180436 58.4666 18.276249 79.922261l153.658635 153.671938c30.670533 30.66951 81.020268 30.05655 112.479771-1.403976 31.439036-31.461549 32.05302-81.799004 1.382487-112.49205L780.396331 667.239644c-21.455661-21.456684-52.432163-27.247574-79.922261-18.275225C704.468035 635.888612 705.367521 622.002346 702.537056 608.55508zM255.116887 594.71077c-92.976578-92.977601-92.976578-243.718791 0-336.696392 92.976578-92.998067 243.717767-92.976578 336.672856 0 92.999091 92.977601 92.999091 243.696278 0 336.696392C498.834654 687.688371 348.093465 687.688371 255.116887 594.71077z","p-id":"1108"})))),i.a.createElement("details",{className:"details"},i.a.createElement("summary",null,i.a.createElement("div",{className:"header-link"},i.a.createElement("span",{className:"icon-menu"}))),i.a.createElement("div",{className:"dropdown-menu"},i.a.createElement("form",{onSubmit:this.handleSubmit,className:"dropdown-search"},i.a.createElement("input",{className:"input",type:"text",autoComplete:"off",placeholder:"Search",value:this.state.searchKey,onChange:this.handleChange}),i.a.createElement("button",{type:"submit",className:"search-button"},i.a.createElement("svg",{t:"1555994577347",className:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1107"},i.a.createElement("path",{d:"M702.537056 608.55508c85.516676-129.373533 71.343885-305.235866-42.583864-419.164638-130.141012-130.141012-341.126284-130.141012-471.26832 0-130.141012 130.141012-130.141012 341.127308 0 471.26832 113.928772 113.927749 289.790082 128.101563 419.163615 42.582841 13.449313 2.808976 27.335578 1.909489 40.410362-2.061962-8.972349 27.489074-3.180436 58.4666 18.276249 79.922261l153.658635 153.671938c30.670533 30.66951 81.020268 30.05655 112.479771-1.403976 31.439036-31.461549 32.05302-81.799004 1.382487-112.49205L780.396331 667.239644c-21.455661-21.456684-52.432163-27.247574-79.922261-18.275225C704.468035 635.888612 705.367521 622.002346 702.537056 608.55508zM255.116887 594.71077c-92.976578-92.977601-92.976578-243.718791 0-336.696392 92.976578-92.998067 243.717767-92.976578 336.672856 0 92.999091 92.977601 92.999091 243.696278 0 336.696392C498.834654 687.688371 348.093465 687.688371 255.116887 594.71077z","p-id":"1108"})))),i.a.createElement(o.a,{className:"dropdown-item",to:"/develop"},"Develop"),i.a.createElement(o.a,{className:"dropdown-item",to:"/travel"},"travel"),i.a.createElement(o.a,{className:"dropdown-item",to:"/classification"},"classification"))),i.a.createElement("span",{className:"menu"})))},a}(i.a.Component)),d=(t(158),function(e){function a(){return e.apply(this,arguments)||this}return l()(a,e),a.prototype.render=function(){return i.a.createElement("main",{className:"container"},this.props.children)},a}(i.a.Component)),p=(t(159),function(e){function a(){return e.apply(this,arguments)||this}return l()(a,e),a.prototype.render=function(){return i.a.createElement("div",{className:"footer"},"Copyright © Jasmine Yang. All Rights Reserved")},a}(i.a.Component)),u=function(e){function a(){return e.apply(this,arguments)||this}return l()(a,e),a.prototype.render=function(){return i.a.createElement("div",{className:"layout"},i.a.createElement(m,null),i.a.createElement(d,null,this.props.children),i.a.createElement(p,null))},a}(i.a.Component);a.a=u},162:function(e,a,t){"use strict";var n=t(163),l=t(0),r=t.n(l),i=t(4),c=t.n(i),s=t(167),o=t.n(s);function m(e){var a=e.description,t=e.lang,l=e.meta,i=e.keywords,c=e.title,s=n.data.site,m=a||s.siteMetadata.description;return r.a.createElement(o.a,{htmlAttributes:{lang:t},title:c,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:m},{property:"og:title",content:c},{property:"og:description",content:m},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:m}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(l)})}m.defaultProps={lang:"en",meta:[],keywords:[],description:""},m.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired}},163:function(e){e.exports={data:{site:{siteMetadata:{title:"Jasmine Blog",description:"",author:"@jasmine"}}}}}}]);
//# sourceMappingURL=component---src-pages-classification-jsx-1b7ebbf2eac833f87ef3.js.map