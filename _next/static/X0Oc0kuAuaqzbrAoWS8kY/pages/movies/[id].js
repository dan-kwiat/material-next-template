(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{AIWG:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/movies/[id]",function(){var e=t("oCAI");return{page:e.default||e}}])},"m/Gl":function(e,n,t){"use strict";t.r(n),n.default=function(e,n){return n=n||{},new Promise(function(t,r){var s=new XMLHttpRequest,o=[],u=[],a={},c=function(){return{ok:2==(s.status/100|0),statusText:s.statusText,status:s.status,url:s.responseURL,text:function(){return Promise.resolve(s.responseText)},json:function(){return Promise.resolve(JSON.parse(s.responseText))},blob:function(){return Promise.resolve(new Blob([s.response]))},clone:c,headers:{keys:function(){return o},entries:function(){return u},get:function(e){return a[e.toLowerCase()]},has:function(e){return e.toLowerCase()in a}}}};for(var i in s.open(n.method||"get",e,!0),s.onload=function(){s.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(e,n,t){o.push(n=n.toLowerCase()),u.push([n,t]),a[n]=a[n]?a[n]+","+t:t}),t(c())},s.onerror=r,s.withCredentials="include"==n.credentials,n.headers)s.setRequestHeader(i,n.headers[i]);s.send(n.body||null)})}},oCAI:function(e,n,t){"use strict";t.r(n);var r=t("ln6h"),s=t.n(r),o=t("O40h"),u=t("q1tI"),a=t.n(u),c=t("zgjP"),i=t.n(c),l=function(e){return a.a.createElement("div",{className:"content-container"},a.a.createElement("h1",null,e.show.name),a.a.createElement("p",null,e.show.summary?e.show.summary.replace(/<[\/]?p>/g,""):null),a.a.createElement("img",{src:e.show.image?e.show.image.medium:null}))};l.getInitialProps=function(){var e=Object(o.default)(s.a.mark(function e(n){var t,r,o;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.query.id,e.next=3,i()("https://api.tvmaze.com/shows/".concat(t));case 3:return r=e.sent,e.next=6,r.json();case 6:return o=e.sent,console.log("Fetched show: ".concat(o.name)),e.abrupt("return",{show:o});case 9:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}(),n.default=l},zgjP:function(e,n,t){e.exports=window.fetch||(window.fetch=t("m/Gl").default||t("m/Gl"))}},[["AIWG",1,0]]]);