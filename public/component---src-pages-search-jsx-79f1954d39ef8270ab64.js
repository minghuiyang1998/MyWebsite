(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{144:function(e,t,a){"use strict";a.r(t);a(75);var n=a(34),r=a.n(n),s=a(7),c=a.n(s),i=a(0),o=a.n(i),h=a(152),u=a(167),y=a(166),K=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={searchKey:""},a.getKey=a.getKey.bind(r()(a)),a.updateSearchKey=a.updateSearchKey.bind(r()(a)),a.updateSearchKey(),a}c()(t,e);var a=t.prototype;return a.componentDidUpdate=function(){this.getKey()!=this.state.searchKey&&this.updateSearchKey()},a.getKey=function(){return window.location.search.substring(5)||""},a.updateSearchKey=function(){console.log("update key"),this.setState({searchKey:this.getKey()})},a.render=function(){return o.a.createElement(h.a,null,console.log(this),o.a.createElement(y.a,{info:{searchKey:this.state.searchKey}}),o.a.createElement(u.a,{searchKey:this.state.searchKey}))},t}(o.a.Component);t.default=K}}]);
//# sourceMappingURL=component---src-pages-search-jsx-79f1954d39ef8270ab64.js.map