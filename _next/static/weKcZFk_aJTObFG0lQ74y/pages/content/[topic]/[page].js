(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"1OyB":function(t,e,n){"use strict";function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return a}))},"5mFU":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var a=n("1OyB"),c=n("vuIU"),i=n("rePB"),r=function(){function t(e,n){Object(a.a)(this,t),Object(i.a)(this,"_topic",void 0),Object(i.a)(this,"_page",void 0),Object(i.a)(this,"_title",void 0),this._topic=e,this._page=n,this._title=t.createTitle(e,n)}return Object(c.a)(t,[{key:"getTopic",value:function(){return this._topic}},{key:"getPage",value:function(){return this._page}},{key:"getTitle",value:function(){return this._title}},{key:"getLink",value:function(){return"/content/".concat(this._topic,"/").concat(this._page)}}],[{key:"createTitle",value:function(t,e){var n=t.charAt(0).toUpperCase()+t.slice(1),a=e.charAt(0).toUpperCase()+e.slice(1);return"".concat(n," - ").concat(a)}}]),t}()},"8D4K":function(t,e,n){"use strict";n.r(e),n.d(e,"__N_SSG",(function(){return y})),n.d(e,"default",(function(){return w}));var a=n("q1tI"),c=n.n(a),i=n("5M6V"),r=n("8Kt/"),o=n.n(r),u=n("dEyn"),s=n.n(u),l=n("Tred"),p=n.n(l),f=n("WIki"),d=n("YFqc"),g=n.n(d),v=c.a.createElement;function _(t){var e=t.topicPages,n=t.activePage;return v("div",{className:" ".concat(p.a.contentSidebar)},v("ul",{className:p.a.sidebarList},e.map((function(t){return v("li",{key:t.getTitle(),className:"".concat(p.a.sidebarItem," ").concat(m(t.getPage(),n)?p.a.active:"")},v(g.a,{href:"".concat("/cs-essentials","/content/[topic]/[page]"),as:"".concat("/cs-essentials").concat(t.getLink())},v("a",null,t.getPage())))}))))}var m=function(t,e){return e===t.split("/")[t.split("/").length-1]},h=n("5mFU"),b=c.a.createElement,y=!0;function w(t){var e=t.contentData,n=t.topicPages;return b(i.a,null,b(o.a,null,b("title",null,h.a.createTitle(e.topic,e.page))),b("div",{className:p.a.contentContainer},b("div",{className:s.a.pageContentContainer},b(_,{topicPages:n.map((function(t){return new h.a(t.topic,t.page)})),activePage:e.page}),b(f.a,null,b("div",{dangerouslySetInnerHTML:{__html:e.contentHtml}})),b("div",{className:s.a.dummySidebar}))))}},IE7w:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/content/[topic]/[page]",function(){return n("8D4K")}])},WIki:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var a=n("q1tI"),c=n.n(a),i=n("2hU1"),r=n.n(i),o=c.a.createElement;function u(t){var e=t.children;return o("div",{className:" ".concat(r.a.contentCard)},o("article",{className:r.a.contentArticle},e))}},dEyn:function(t,e,n){t.exports={pageContentContainer:"content_pageContentContainer__3dgQS",dummySidebar:"content_dummySidebar__LMYsL"}},rePB:function(t,e,n){"use strict";function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return a}))},vuIU:function(t,e,n){"use strict";function a(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function c(t,e,n){return e&&a(t.prototype,e),n&&a(t,n),t}n.d(e,"a",(function(){return c}))}},[["IE7w",0,2,1,3]]]);