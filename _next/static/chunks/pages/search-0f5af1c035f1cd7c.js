(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[603],{881:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/search",function(){return n(9214)}])},7300:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n.d(t,{Z:function(){return a}});var a=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._topic=t,this._page=n?n.replace(/[0-9]+-/,"").replace(/\.md$/,""):"Introduction",this._title=e.createTitle(this._topic,this._page)}var t,n,a;return t=e,a=[{key:"createTitle",value:function(e,t){var n=e.charAt(0).toUpperCase()+e.slice(1),r=t.replace(/[0-9]+-/,"").replace(/\.md$/,"");return"".concat(n," - ").concat(r)}}],(n=[{key:"getTopic",value:function(){return this._topic}},{key:"getPage",value:function(){return this._page}},{key:"getTitle",value:function(){return this._title}},{key:"getLink",value:function(){return encodeURI("/content/".concat(this._topic,"/").concat(this._page))}}])&&r(t.prototype,n),a&&r(t,a),e}()},9214:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return g},default:function(){return y}});var r=n(5893),a=n(9008),i=n(9739),c=n(8721),o=n.n(c),s=n(1163);function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._a=t,this._b=n,this._aSize=t.length,this._bSize=n.length,this._d=new Array(t.length+1).fill(0).map((function(){return new Array(n.length+1).fill(0)}))}var t,n,r;return t=e,(n=[{key:"min",value:function(e,t){return Math.min(e,t)}},{key:"max",value:function(e,t){return Math.max(e,t)}},{key:"lev",value:function(e,t){for(var n=1;n<=e;n++)this._d[n][0]=n;for(var r=1;r<=t;r++)this._d[0][r]=r;for(var a=1;a<=t;a++)for(var i=1;i<=e;i++){var c=0;c=this._a[i]===this._b[a]?0:1,this._d[i][a]=Math.min(this._d[i-1][a]+1,this._d[i][a-1]+1,this._d[i-1][a-1]+c)}return this._d[e][t]}},{key:"run",value:function(){var e=this.lev(this._aSize,this._bSize),t=this._aSize-this._bSize===0?1:this._aSize-this._bSize;return e/Math.abs(t)}}])&&u(t.prototype,n),r&&u(t,r),e}();var h=n(2667),f=n.n(h),v=n(1664);function _(e){var t=e.page;e.color;return(0,r.jsx)(v.default,{href:"/content/[topic]/[page]",as:"".concat(t.getLink()),children:(0,r.jsx)("a",{children:(0,r.jsx)("div",{className:" ".concat(f().searchCard),children:(0,r.jsxs)("div",{className:f().searchCardTitle,children:[(0,r.jsx)("span",{className:f().searchCardTopic,children:t.getTopic()}),(0,r.jsx)("span",{className:f().searchCardPage,children:t.getPage()})]})})})})}var d=n(7300),p=n(3444),g=!0;function y(e){var t=e.pages,n=(0,s.useRouter)(),c=0,u=[],h=t.map((function(e){return new d.Z(e.topic,e.page)}));return void 0!==n.query.query&&(u=function(e,t){var n=[],r=!0,a=!1,i=void 0;try{for(var c,o=t[Symbol.iterator]();!(r=(c=o.next()).done);r=!0){var s=c.value,u=s.getTitle(),h=new l(e,u).run();h<1.09&&n.push({page:s,ratio:h})}}catch(f){a=!0,i=f}finally{try{r||null==o.return||o.return()}finally{if(a)throw i}}return n.sort((function(e,t){return e.ratio<t.ratio?-1:e.ratio>t.ratio?1:0}))}(n.query.query,h)),(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(a.default,{children:(0,r.jsx)("title",{children:"Search - "+p.Z.COMPLETE_TITLE})}),(0,r.jsx)("div",{className:o().contentContainer,children:(0,r.jsxs)("div",{className:o().searchResults,children:[(0,r.jsx)("div",{className:o().searchResultsTitle,children:"Search Results"}),u.map((function(e){return(0,r.jsx)(_,{page:e.page,color:"backColor".concat(c=c%7+1)},e.page.getTitle())}))]})})]})}}},function(e){e.O(0,[545,774,888,179],(function(){return t=881,e(e.s=t);var t}));var t=e.O();_N_E=t}]);