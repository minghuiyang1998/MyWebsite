(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{148:function(e,t,a){"use strict";a.r(t);a(160),a(36);var n=a(34),r=a.n(n),s=a(7),i=a.n(s),l=a(0),o=a.n(l),c=a(153),u=(a(169),a(166)),d=a.n(u),p=(a(150),function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){return o.a.createElement("div",{className:"banner-featured"},o.a.createElement("div",{className:"image-wrap"},o.a.createElement("div",{className:"banner-image",style:{backgroundImage:"url("+this.props.details.image+")"}})),o.a.createElement("div",{className:"reading-time"},o.a.createElement("time",null,d()(this.props.details.create_date).fromNow()),o.a.createElement("svg",{role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}," ",o.a.createElement("path",{d:"M10.1907692,24 C4.5625628,24 0,19.4374372 0,13.8092308 C0,8.18102433 4.5625628,3.61846154 10.1907692,3.61846154 C15.8189757,3.61846154 20.3815385,8.18102433 20.3815385,13.8092308 C20.3815385,19.4374372 15.8189757,24 10.1907692,24 Z M10.1907692,22 C14.7144062,22 18.3815385,18.3328677 18.3815385,13.8092308 C18.3815385,9.28559383 14.7144062,5.61846154 10.1907692,5.61846154 C5.6671323,5.61846154 2,9.28559383 2,13.8092308 C2,18.3328677 5.6671323,22 10.1907692,22 Z",id:"Oval"}),o.a.createElement("path",{d:"M7.53230769,2.32923077 C6.98002294,2.32923077 6.53230769,1.88151552 6.53230769,1.32923077 C6.53230769,0.776946019 6.98002294,0.329230769 7.53230769,0.329230769 L12.9225711,0.329230769 C13.4748559,0.329230769 13.9225711,0.776946019 13.9225711,1.32923077 C13.9225711,1.88151552 13.4748559,2.32923077 12.9225711,2.32923077 L7.53230769,2.32923077 Z",id:"Line-2"}),o.a.createElement("path",{d:"M13.2928932,9.29289322 C13.6834175,8.90236893 14.3165825,8.90236893 14.7071068,9.29289322 C15.0976311,9.68341751 15.0976311,10.3165825 14.7071068,10.7071068 L10.897876,14.5163376 C10.5073517,14.9068618 9.87418674,14.9068618 9.48366245,14.5163376 C9.09313816,14.1258133 9.09313816,13.4926483 9.48366245,13.102124 L13.2928932,9.29289322 Z",id:"Line"})),o.a.createElement("span",null,this.props.details.reading_time)),o.a.createElement("h1",{className:"banner-title"},this.props.details.title))},t}(o.a.Component)),g=(a(37),a(171),a(172)),m=a.n(g),h=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e={html:"html",js:"javascript",css:"css"},t=this.props.html.replace(/&#x3C;/g,"<").replace(/<pre><[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*code[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+class="language\x2D([\0-\uFFFF]*?)">([\0-\uFFFF]*?)<\/code><\/pre>/g,function(t,a,n){return'<pre class="language-'+e[a]+'"><code class="language-'+e[a]+'">'+m.a.highlight(n,m.a.languages[e[a]],e[a])+"</code></pre>"});return o.a.createElement("article",{className:"article",dangerouslySetInnerHTML:{__html:t}})},t}(o.a.Component),f=a(173),v=a.n(f);a(175);a.d(t,"postQuery",function(){return y});var y="3123867948",b=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={theme:{backgroundColor:"rgb("+t.data.markdownRemark.frontmatter.palette.Muted.join()+")"},isHeaderShow:!0},a.handleScroll=a.handleScroll.bind(r()(a)),a}i()(t,e);var a=t.prototype;return a.componentDidMount=function(){window.addEventListener("scroll",this.handleScroll)},a.componentWillUnmount=function(){window.removeEventListener("scroll",this.handleScroll)},a.handleScroll=function(e){window.pageYOffset>430?this.setState({isHeaderShow:!1}):this.setState({isHeaderShow:!0})},a.render=function(){return o.a.createElement(c.a,null,o.a.createElement("div",{className:"theme",style:this.state.theme}),o.a.createElement(p,{details:this.props.data.markdownRemark.frontmatter}),o.a.createElement(h,{html:this.props.data.markdownRemark.html}),o.a.createElement(v.a,{identifier:this.props.data.markdownRemark.frontmatter.id.toString(),title:this.props.data.markdownRemark.frontmatter.title,url:this.props.data.markdownRemark.frontmatter.path}))},t}(o.a.Component);t.default=b},150:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),s=a(4),i=a.n(s),l=a(33),o=a.n(l);a.d(t,"a",function(){return o.a}),a.d(t,"c",function(){return l.navigate});a(151);var c=r.a.createContext({}),u=function(e){return r.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},151:function(e,t,a){var n;e.exports=(n=a(152))&&n.default||n},152:function(e,t,a){"use strict";a.r(t);a(35);var n=a(0),r=a.n(n),s=a(4),i=a.n(s),l=a(55),o=a(2),c=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},153:function(e,t,a){"use strict";var n=a(7),r=a.n(n),s=a(0),i=a.n(s),l=(a(154),a(155),a(156),a(34)),o=a.n(l),c=a(150),u=(a(157),function(e){function t(t){var a;return(a=e.call(this,t)||this).state={searchKey:""},a.handleChange=a.handleChange.bind(o()(a)),a.handleSubmit=a.handleSubmit.bind(o()(a)),a}r()(t,e);var a=t.prototype;return a.handleSubmit=function(e){e.preventDefault(),console.log("TCL: Header -> onSearchButtonTap -> this.state.searchKey",this.state.searchKey),Object(c.c)("/search?key="+this.state.searchKey)},a.handleChange=function(e){this.setState({searchKey:e.target.value})},a.render=function(){return i.a.createElement("div",{className:"header-wrap"},i.a.createElement("header",{className:"header"},i.a.createElement("div",{className:"logo"},i.a.createElement(c.a,{className:"header-link",to:"/"},i.a.createElement("svg",{className:"octicon",width:"64px",height:"64px",viewBox:"0 0 64 64",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xlink:"http://www.w3.org/1999/xlink"},i.a.createElement("g",{id:"Group",transform:"translate(0.000000, -3.000000)"},i.a.createElement("rect",{id:"Rectangle",x:"0",y:"3",width:"64",height:"64",rx:"32"}),i.a.createElement("text",{id:"J",style:{fontSize:"48",fontFamily:"PingFangSC-Medium, PingFang SC",fontWeight:"400"}},i.a.createElement("tspan",{x:"19.708",y:"51"},"J")))))),i.a.createElement("nav",{className:"nav"},i.a.createElement(c.a,{className:"header-link",to:"/develop"},"Develop"),i.a.createElement(c.a,{className:"header-link",to:"/travel"},"Travel"),i.a.createElement(c.a,{className:"header-link",to:"/classification"},"Classification")),i.a.createElement("form",{onSubmit:this.handleSubmit,className:"header-search"},i.a.createElement("input",{className:"input",type:"text",autoComplete:"off",placeholder:"Search or jump to...",value:this.state.searchKey,onChange:this.handleChange}),i.a.createElement("button",{type:"submit",className:"search-button"},i.a.createElement("svg",{t:"1555994577347",className:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1107"},i.a.createElement("path",{d:"M702.537056 608.55508c85.516676-129.373533 71.343885-305.235866-42.583864-419.164638-130.141012-130.141012-341.126284-130.141012-471.26832 0-130.141012 130.141012-130.141012 341.127308 0 471.26832 113.928772 113.927749 289.790082 128.101563 419.163615 42.582841 13.449313 2.808976 27.335578 1.909489 40.410362-2.061962-8.972349 27.489074-3.180436 58.4666 18.276249 79.922261l153.658635 153.671938c30.670533 30.66951 81.020268 30.05655 112.479771-1.403976 31.439036-31.461549 32.05302-81.799004 1.382487-112.49205L780.396331 667.239644c-21.455661-21.456684-52.432163-27.247574-79.922261-18.275225C704.468035 635.888612 705.367521 622.002346 702.537056 608.55508zM255.116887 594.71077c-92.976578-92.977601-92.976578-243.718791 0-336.696392 92.976578-92.998067 243.717767-92.976578 336.672856 0 92.999091 92.977601 92.999091 243.696278 0 336.696392C498.834654 687.688371 348.093465 687.688371 255.116887 594.71077z","p-id":"1108"})))),i.a.createElement("details",{className:"details"},i.a.createElement("summary",null,i.a.createElement("div",{className:"header-link"},i.a.createElement("span",{className:"icon-menu"}))),i.a.createElement("div",{className:"dropdown-menu"},i.a.createElement("form",{onSubmit:this.handleSubmit,className:"dropdown-search"},i.a.createElement("input",{className:"input",type:"text",autoComplete:"off",placeholder:"Search",value:this.state.searchKey,onChange:this.handleChange}),i.a.createElement("button",{type:"submit",className:"search-button"},i.a.createElement("svg",{t:"1555994577347",className:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1107"},i.a.createElement("path",{d:"M702.537056 608.55508c85.516676-129.373533 71.343885-305.235866-42.583864-419.164638-130.141012-130.141012-341.126284-130.141012-471.26832 0-130.141012 130.141012-130.141012 341.127308 0 471.26832 113.928772 113.927749 289.790082 128.101563 419.163615 42.582841 13.449313 2.808976 27.335578 1.909489 40.410362-2.061962-8.972349 27.489074-3.180436 58.4666 18.276249 79.922261l153.658635 153.671938c30.670533 30.66951 81.020268 30.05655 112.479771-1.403976 31.439036-31.461549 32.05302-81.799004 1.382487-112.49205L780.396331 667.239644c-21.455661-21.456684-52.432163-27.247574-79.922261-18.275225C704.468035 635.888612 705.367521 622.002346 702.537056 608.55508zM255.116887 594.71077c-92.976578-92.977601-92.976578-243.718791 0-336.696392 92.976578-92.998067 243.717767-92.976578 336.672856 0 92.999091 92.977601 92.999091 243.696278 0 336.696392C498.834654 687.688371 348.093465 687.688371 255.116887 594.71077z","p-id":"1108"})))),i.a.createElement(c.a,{className:"dropdown-item",to:"/develop"},"Develop"),i.a.createElement(c.a,{className:"dropdown-item",to:"/travel"},"travel"),i.a.createElement(c.a,{className:"dropdown-item",to:"/classification"},"classification"))),i.a.createElement("span",{className:"menu"})))},t}(i.a.Component)),d=(a(158),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return i.a.createElement("main",{className:"container"},this.props.children)},t}(i.a.Component)),p=(a(159),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return i.a.createElement("div",{className:"footer"},"Copyright © Jasmine Yang. All Rights Reserved")},t}(i.a.Component)),g=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return i.a.createElement("div",{className:"layout"},i.a.createElement(u,null),i.a.createElement(d,null,this.props.children),i.a.createElement(p,null))},t}(i.a.Component);t.a=g},160:function(e,t,a){"use strict";a(161);var n=a(5),r=a(74),s=a(18),i=/./.toString,l=function(e){a(14)(RegExp.prototype,"toString",e,!0)};a(19)(function(){return"/a/b"!=i.call({source:"a",flags:"b"})})?l(function(){var e=n(this);return"/".concat(e.source,"/","flags"in e?e.flags:!s&&e instanceof RegExp?r.call(e):void 0)}):"toString"!=i.name&&l(function(){return i.call(this)})},161:function(e,t,a){a(18)&&"g"!=/./g.flags&&a(25).f(RegExp.prototype,"flags",{configurable:!0,get:a(74)})},172:function(e,t,a){(function(t){var a=function(e){var t=/\blang(?:uage)?-([\w-]+)\b/i,a=0,n={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof r?new r(e.type,n.util.encode(e.content),e.alias):Array.isArray(e)?e.map(n.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++a}),e.__id},clone:function e(t,a){var r,s,i=n.util.type(t);switch(a=a||{},i){case"Object":if(s=n.util.objId(t),a[s])return a[s];for(var l in r={},a[s]=r,t)t.hasOwnProperty(l)&&(r[l]=e(t[l],a));return r;case"Array":return s=n.util.objId(t),a[s]?a[s]:(r=[],a[s]=r,t.forEach(function(t,n){r[n]=e(t,a)}),r);default:return t}}},languages:{extend:function(e,t){var a=n.util.clone(n.languages[e]);for(var r in t)a[r]=t[r];return a},insertBefore:function(e,t,a,r){var s=(r=r||n.languages)[e],i={};for(var l in s)if(s.hasOwnProperty(l)){if(l==t)for(var o in a)a.hasOwnProperty(o)&&(i[o]=a[o]);a.hasOwnProperty(l)||(i[l]=s[l])}var c=r[e];return r[e]=i,n.languages.DFS(n.languages,function(t,a){a===c&&t!=e&&(this[t]=i)}),i},DFS:function e(t,a,r,s){s=s||{};var i=n.util.objId;for(var l in t)if(t.hasOwnProperty(l)){a.call(t,l,t[l],r||l);var o=t[l],c=n.util.type(o);"Object"!==c||s[i(o)]?"Array"!==c||s[i(o)]||(s[i(o)]=!0,e(o,a,l,s)):(s[i(o)]=!0,e(o,a,null,s))}}},plugins:{},highlightAll:function(e,t){n.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,a){var r={callback:a,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};n.hooks.run("before-highlightall",r);for(var s,i=r.elements||e.querySelectorAll(r.selector),l=0;s=i[l++];)n.highlightElement(s,!0===t,r.callback)},highlightElement:function(a,r,s){for(var i,l,o=a;o&&!t.test(o.className);)o=o.parentNode;o&&(i=(o.className.match(t)||[,""])[1].toLowerCase(),l=n.languages[i]),a.className=a.className.replace(t,"").replace(/\s+/g," ")+" language-"+i,a.parentNode&&(o=a.parentNode,/pre/i.test(o.nodeName)&&(o.className=o.className.replace(t,"").replace(/\s+/g," ")+" language-"+i));var c={element:a,language:i,grammar:l,code:a.textContent},u=function(e){c.highlightedCode=e,n.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,n.hooks.run("after-highlight",c),n.hooks.run("complete",c),s&&s.call(c.element)};if(n.hooks.run("before-sanity-check",c),c.code)if(n.hooks.run("before-highlight",c),c.grammar)if(r&&e.Worker){var d=new Worker(n.filename);d.onmessage=function(e){u(e.data)},d.postMessage(JSON.stringify({language:c.language,code:c.code,immediateClose:!0}))}else u(n.highlight(c.code,c.grammar,c.language));else u(n.util.encode(c.code));else n.hooks.run("complete",c)},highlight:function(e,t,a){var s={code:e,grammar:t,language:a};return n.hooks.run("before-tokenize",s),s.tokens=n.tokenize(s.code,s.grammar),n.hooks.run("after-tokenize",s),r.stringify(n.util.encode(s.tokens),s.language)},matchGrammar:function(e,t,a,s,i,l,o){for(var c in a)if(a.hasOwnProperty(c)&&a[c]){if(c==o)return;var u=a[c];u="Array"===n.util.type(u)?u:[u];for(var d=0;d<u.length;++d){var p=u[d],g=p.inside,m=!!p.lookbehind,h=!!p.greedy,f=0,v=p.alias;if(h&&!p.pattern.global){var y=p.pattern.toString().match(/[imuy]*$/)[0];p.pattern=RegExp(p.pattern.source,y+"g")}p=p.pattern||p;for(var b=s,w=i;b<t.length;w+=t[b].length,++b){var F=t[b];if(t.length>e.length)return;if(!(F instanceof r)){if(h&&b!=t.length-1){if(p.lastIndex=w,!(S=p.exec(e)))break;for(var k=S.index+(m?S[1].length:0),x=S.index+S[0].length,E=b,A=w,C=t.length;E<C&&(A<x||!t[E].type&&!t[E-1].greedy);++E)k>=(A+=t[E].length)&&(++b,w=A);if(t[b]instanceof r)continue;N=E-b,F=e.slice(w,A),S.index-=w}else{p.lastIndex=0;var S=p.exec(F),N=1}if(S){m&&(f=S[1]?S[1].length:0);x=(k=S.index+f)+(S=S[0].slice(f)).length;var j=F.slice(0,k),_=F.slice(x),$=[b,N];j&&(++b,w+=j.length,$.push(j));var L=new r(c,g?n.tokenize(S,g):S,v,S,h);if($.push(L),_&&$.push(_),Array.prototype.splice.apply(t,$),1!=N&&n.matchGrammar(e,t,a,b,w,!0,c),l)break}else if(l)break}}}}},tokenize:function(e,t){var a=[e],r=t.rest;if(r){for(var s in r)t[s]=r[s];delete t.rest}return n.matchGrammar(e,a,t,0,0,!1),a},hooks:{all:{},add:function(e,t){var a=n.hooks.all;a[e]=a[e]||[],a[e].push(t)},run:function(e,t){var a=n.hooks.all[e];if(a&&a.length)for(var r,s=0;r=a[s++];)r(t)}},Token:r};function r(e,t,a,n,r){this.type=e,this.content=t,this.alias=a,this.length=0|(n||"").length,this.greedy=!!r}if(e.Prism=n,r.stringify=function(e,t,a){if("string"==typeof e)return e;if(Array.isArray(e))return e.map(function(a){return r.stringify(a,t,e)}).join("");var s={type:e.type,content:r.stringify(e.content,t,a),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:a};if(e.alias){var i=Array.isArray(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(s.classes,i)}n.hooks.run("wrap",s);var l=Object.keys(s.attributes).map(function(e){return e+'="'+(s.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+s.tag+' class="'+s.classes.join(" ")+'"'+(l?" "+l:"")+">"+s.content+"</"+s.tag+">"},!e.document)return e.addEventListener?(n.disableWorkerMessageHandler||e.addEventListener("message",function(t){var a=JSON.parse(t.data),r=a.language,s=a.code,i=a.immediateClose;e.postMessage(n.highlight(s,n.languages[r],r)),i&&e.close()},!1),n):n;var s=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return s&&(n.filename=s.src,n.manual||s.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(n.highlightAll):window.setTimeout(n.highlightAll,16):document.addEventListener("DOMContentLoaded",n.highlightAll))),n}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});e.exports&&(e.exports=a),void 0!==t&&(t.Prism=a),a.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s\/>])))+)?\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},a.languages.markup.tag.inside["attr-value"].inside.entity=a.languages.markup.entity,a.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),Object.defineProperty(a.languages.markup.tag,"addInlined",{value:function(e,t){var n={};n["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:a.languages[t]},n.cdata=/^<!\[CDATA\[|\]\]>$/i;var r={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:n}};r["language-"+t]={pattern:/[\s\S]+/,inside:a.languages[t]};var s={};s[e]={pattern:RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g,e),"i"),lookbehind:!0,greedy:!0,inside:r},a.languages.insertBefore("markup","cdata",s)}}),a.languages.xml=a.languages.extend("markup",{}),a.languages.html=a.languages.markup,a.languages.mathml=a.languages.markup,a.languages.svg=a.languages.markup,function(e){var t=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+?[\s\S]*?(?:;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:RegExp("url\\((?:"+t.source+"|.*?)\\)","i"),selector:RegExp("[^{}\\s](?:[^{};\"']|"+t.source+")*?(?=\\s*\\{)"),string:{pattern:t,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var a=e.languages.markup;a&&(a.tag.addInlined("style","css"),e.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:a.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:e.languages.css}},alias:"language-css"}},a.tag))}(a),a.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},a.languages.javascript=a.languages.extend("clike",{"class-name":[a.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},{pattern:/(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],number:/\b(?:(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+)n?|\d+n|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,function:/[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),a.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,a.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^\/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,lookbehind:!0,inside:a.languages.javascript},{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,inside:a.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,lookbehind:!0,inside:a.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,lookbehind:!0,inside:a.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),a.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,greedy:!0,inside:{interpolation:{pattern:/\${[^}]+}/,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:a.languages.javascript}},string:/[\s\S]+/}}}),a.languages.markup&&a.languages.markup.tag.addInlined("script","javascript"),a.languages.js=a.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(e){e=e||document;var t={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(e.querySelectorAll("pre[data-src]")).forEach(function(e){if(!e.hasAttribute("data-src-loaded")){for(var n,r=e.getAttribute("data-src"),s=e,i=/\blang(?:uage)?-([\w-]+)\b/i;s&&!i.test(s.className);)s=s.parentNode;if(s&&(n=(e.className.match(i)||[,""])[1]),!n){var l=(r.match(/\.(\w+)$/)||[,""])[1];n=t[l]||l}var o=document.createElement("code");o.className="language-"+n,e.textContent="",o.textContent="Loading…",e.appendChild(o);var c=new XMLHttpRequest;c.open("GET",r,!0),c.onreadystatechange=function(){4==c.readyState&&(c.status<400&&c.responseText?(o.textContent=c.responseText,a.highlightElement(o),e.setAttribute("data-src-loaded","")):c.status>=400?o.textContent="✖ Error "+c.status+" while fetching file: "+c.statusText:o.textContent="✖ Error: File does not exist or is empty")},c.send(null)}}),a.plugins.toolbar&&a.plugins.toolbar.registerButton("download-file",function(e){var t=e.element.parentNode;if(t&&/pre/i.test(t.nodeName)&&t.hasAttribute("data-src")&&t.hasAttribute("data-download-link")){var a=t.getAttribute("data-src"),n=document.createElement("a");return n.textContent=t.getAttribute("data-download-link-label")||"Download",n.setAttribute("download",""),n.href=a,n}})},document.addEventListener("DOMContentLoaded",function(){self.Prism.fileHighlight()}))}).call(this,a(76))},173:function(e,t,a){"use strict";var n=a(8);t.__esModule=!0,t.default=void 0;var r=n(a(77)),s=n(a(7)),i=n(a(0)),l=n(a(4));a(174);var o=function(e){function t(t){var a;return(a=e.call(this,t)||this).state=t,a.shortname="gatsbyjasmine",a}(0,s.default)(t,e);var a=t.prototype;return a.componentWillReceiveProps=function(e){this.setState(e)},a.componentWillMount=function(){if("undefined"!=typeof window&&window.document){var e=this;window.disqus_config=function(){this.page.identifier=e.state.identifier,this.page.title=e.state.title,this.page.url=e.state.url};var t=document.createElement("script");t.src="//"+this.shortname+".disqus.com/embed.js",t.async=!0,document.body.appendChild(t)}},a.render=function(){var e=this.props;return i.default.createElement("div",(0,r.default)({id:"disqus_thread"},e,{__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/index.js",lineNumber:36},__self:this}))},t}(i.default.Component);t.default=o,o.propTypes={identifier:l.default.string,title:l.default.string,url:l.default.string}}}]);
//# sourceMappingURL=component---src-templates-md-article-jsx-6b8013c422dade403072.js.map