(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"/EDR":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("23aj")}])},"23aj":function(t,e,n){"use strict";n.r(e),n.d(e,"__N_SSG",(function(){return v})),n.d(e,"default",(function(){return T}));var a=n("q1tI"),i=n.n(a),o=n("8Kt/"),c=n.n(o),r=n("A8zT"),l=n("5M6V"),s=n("Z4Yb"),u=n.n(s),_=n("Tred"),d=n.n(_),h=n("YFqc"),p=n.n(h),b=n("2hU1"),g=n.n(b),m=i.a.createElement;function f(t){var e=t.name,n=t.color;return m("div",{className:" ".concat(g.a.homeCard)},m("div",{className:" ".concat(g.a.homeCardColor," ").concat(u.a[n]," ")}),m("div",{className:g.a.homeCardTitle},e))}var C=n("5mFU"),k=i.a.createElement,v=!0;function T(t){var e=t.contentTopics,n=0;return k(l.a,{home:!0},k(c.a,null,k("title",null,r.a.COMPLETE_TITLE)),k("section",{className:u.a.jumbotron},k("h1",{className:u.a.heading2Xl},r.a.TITLE),k("h4",{className:u.a.headingMd},r.a.BRIEF_INTRO,k("a",{href:"https://github.com/cs-ieee-ist/cs-essentials"},"GitHub"))),k("section",{className:"".concat(d.a.homeCards," ").concat(u.a.padding1px)},e.map((function(t){return k(p.a,{href:"".concat("/cs-essentials","/content/[topic]/[page]"),as:"".concat("/cs-essentials").concat(new C.a(t).getLink()),key:t},k("a",null,k(f,{name:t,color:"backColor".concat(n=n%7+1)})))}))))}},"5mFU":function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var a=n("1OyB"),i=n("vuIU"),o=n("rePB"),c=function(){function t(e,n){Object(a.a)(this,t),Object(o.a)(this,"_topic",void 0),Object(o.a)(this,"_page",void 0),Object(o.a)(this,"_title",void 0),this._topic=e,this._page=n?n.replace(/[0-9]+-/,"").replace(/\.md$/,""):"Introduction",this._title=t.createTitle(this._topic,this._page)}return Object(i.a)(t,[{key:"getTopic",value:function(){return this._topic}},{key:"getPage",value:function(){return this._page}},{key:"getTitle",value:function(){return this._title}},{key:"getLink",value:function(){return encodeURI(encodeURI("/content/".concat(this._topic,"/").concat(this._page)))}}],[{key:"createTitle",value:function(t,e){var n=t.charAt(0).toUpperCase()+t.slice(1),a=e.replace(/[0-9]+-/,"").replace(/\.md$/,"");return"".concat(n," - ").concat(a)}}]),t}()},Z4Yb:function(t,e,n){t.exports={heading2Xl:"utils_heading2Xl__1I65m",headingXl:"utils_headingXl__1XecN",headingLg:"utils_headingLg__de7p0",headingMd:"utils_headingMd__3de6G",borderCircle:"utils_borderCircle__13qdJ",colorInherit:"utils_colorInherit__3Gudf",padding1px:"utils_padding1px__oCny8",list:"utils_list__S7_pe",listItem:"utils_listItem__2eJpJ",lightText:"utils_lightText__12Ckm",mainContent:"utils_mainContent__103EJ",jumbotron:"utils_jumbotron__10hI1",backColor1:"utils_backColor1__3OKXg",backColor2:"utils_backColor2__1urgU",backColor3:"utils_backColor3__Ad6h2",backColor4:"utils_backColor4__46yfC",backColor5:"utils_backColor5__2xMhD",backColor6:"utils_backColor6__1q9Lf"}},vuIU:function(t,e,n){"use strict";function a(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function i(t,e,n){return e&&a(t.prototype,e),n&&a(t,n),t}n.d(e,"a",(function(){return i}))}},[["/EDR",0,2,1,3]]]);