(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{144:function(e,t,n){"use strict";n.r(t);n(75);var o=n(34),a=n.n(o),c=n(7),s=n.n(c),r=n(0),i=n.n(r),u=n(153),h=n(165),l=n(164),p=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={searchKey:""},console.log("construct"),n.updateSearchKey=n.updateSearchKey.bind(a()(n)),n}s()(t,e);var n=t.prototype;return n.componentDidMount=function(){console.log("mount"),window&&this.updateSearchKey()},n.componentWillUnmount=function(){},n.componentDidUpdate=function(){(window.location.search.substring(5)||"")!=this.state.searchKey&&this.updateSearchKey()},n.updateSearchKey=function(){console.log("update key"),this.setState({searchKey:window.location.search.substring(5)||""})},n.render=function(){return i.a.createElement(u.a,null,console.log(this),i.a.createElement(l.a,{info:{searchKey:this.state.searchKey}}),i.a.createElement(h.a,{searchKey:this.state.searchKey}))},t}(i.a.Component);t.default=p}}]);
//# sourceMappingURL=component---src-pages-search-jsx-8be79b35c32c5557e064.js.map