"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[8],{857:function(t,e,r){r.d(e,{j:function(){return c}});var n=r(87),u=r(689),a=r(184),c=function(t){var e=t.moviesList,r=(0,u.TH)();return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("ul",{children:e.map((function(t){var e=t.title,u=t.name,c=t.id;return(0,a.jsx)("li",{children:(0,a.jsx)(n.rU,{to:"/movies/".concat(c),state:{from:r},children:e||u})},c)}))})})}},8:function(t,e,r){r.r(e);var n=r(861),u=r(439),a=r(757),c=r.n(a),i=r(87),s=r(791),o=r(323),p=r(857),f=r(184);e.default=function(){var t,e=(0,s.useState)([]),r=(0,u.Z)(e,2),a=r[0],h=r[1],l=(0,i.lr)(),v=(0,u.Z)(l,2),m=v[0],d=v[1],x=null!==(t=m.get("moviesId"))&&void 0!==t?t:"",Z=function(){var t=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),t.prev=1,t.next=4,(0,o.GC)(x);case 4:r=t.sent,h(r),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.error("Error fetching movies:",t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}();return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("form",{action:"",onSubmit:Z,children:[(0,f.jsx)("input",{type:"text",value:x,onChange:function(t){var e=t.target.value;if(""===e)return d({});d({moviesId:e})}}),(0,f.jsx)("button",{type:"submit",children:"Search"})]}),(0,f.jsx)(p.j,{moviesList:a})]})}},323:function(t,e,r){r.d(e,{GC:function(){return o},TP:function(){return f},XT:function(){return i},jV:function(){return l},jW:function(){return m}});var n=r(861),u=r(757),a=r.n(u),c=r(243);function i(){return s.apply(this,arguments)}function s(){return(s=(0,n.Z)(a().mark((function t(){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/trending/movie/day");case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function o(t){return p.apply(this,arguments)}function p(){return(p=(0,n.Z)(a().mark((function t(e){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/search/movie?query=".concat(e));case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return h.apply(this,arguments)}function h(){return(h=(0,n.Z)(a().mark((function t(e){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(e));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return v.apply(this,arguments)}function v(){return(v=(0,n.Z)(a().mark((function t(e){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(e,"/credits"));case 2:return r=t.sent,t.abrupt("return",r.data.cast);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return d.apply(this,arguments)}function d(){return(d=(0,n.Z)(a().mark((function t(e){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(e,"/reviews"));case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}c.Z.defaults.baseURL="https://api.themoviedb.org/3",c.Z.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZDI5NDI3NDZkZGQwNzIzZTk5YzYyNDVmZDkwM2JlZCIsInN1YiI6IjY0YmQyNTNhMGVkMmFiMDBlMmRhYjY4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.usFVKO1fi_bibknfzjxz84ON7pNr7gg38J8efPhFlyU"}}]);
//# sourceMappingURL=8.eb4153a3.chunk.js.map