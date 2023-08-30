"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[560],{560:function(e,t,n){n.r(t);var r=n(9439),a=n(2791),i=n(1087),c=n(7689),s=n(9323),o=n(3457),u=n(3514),p=n(5527),l=n(1123),d=n(184),f=(0,o.Z)(u.Z)({backgroundColor:"#E50914",color:"white","&:hover":{backgroundColor:"#C90813"}}),h=(0,o.Z)("div")({display:"flex",alignItems:"center",justifyContent:"space-between",padding:"20px",marginBottom:"20px"}),x=(0,o.Z)("img")({width:"300px",height:"450px",borderRadius:"8px",boxShadow:"0px 4px 20px rgba(0, 0, 0, 0.2)"}),v=(0,o.Z)("div")({display:"flex",flexDirection:"column",gap:"10px"}),m=(0,o.Z)("ul")({listStyle:"none",display:"flex",gap:"8px",margin:0,padding:0}),g=(0,o.Z)("li")({fontSize:"14px",color:"#E50914"}),Z=(0,o.Z)(p.Z)({padding:"20px",display:"flex",justifyContent:"space-between",alignItems:"center",borderRadius:"8px",background:"transparent"}),y=(0,o.Z)(i.rU)({color:"#E50914",textDecoration:"none",fontSize:"18px",fontWeight:"bold",transition:"color 0.3s","&:hover":{color:"#C90813"}});t.default=function(){var e,t,n=(0,a.useState)(null),o=(0,r.Z)(n,2),u=o[0],p=o[1],b=(0,c.UO)().movieDetailsId,j=(0,c.TH)(),w=(0,a.useRef)(null!==(e=null===(t=j.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/");if((0,a.useEffect)((function(){(0,s.TP)(b).then((function(e){p(e)})).catch((function(e){return console.error("Error fetching movie details:",e)}))}),[b]),!u)return(0,d.jsx)("div",{children:"Loading..."});var k=u.poster_path,I=u.original_title,C=u.overview,N=u.genres;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(f,{component:i.rU,to:w.current,children:"Go back"}),(0,d.jsxs)(h,{children:[(0,d.jsx)(x,{src:k?"https://image.tmdb.org/t/p/w500".concat(k):"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2MQQS_knNjQPkLzTyixP5F51QTPzXcOU6VkpoAPAe9Q&s",alt:""}),(0,d.jsxs)(v,{children:[(0,d.jsx)(l.Z,{variant:"h4",children:I}),(0,d.jsx)(l.Z,{variant:"h6",children:"Overview"}),(0,d.jsx)(l.Z,{children:C}),(0,d.jsx)(l.Z,{variant:"subtitle1",children:"Genres"}),(0,d.jsx)(m,{children:N&&N.map((function(e){var t=e.name;return(0,d.jsx)(g,{children:t},t)}))})]})]}),(0,d.jsxs)(Z,{children:[(0,d.jsx)(y,{to:"cast",children:"Cast"}),(0,d.jsx)(y,{to:"reviews",children:"Reviews"})]}),(0,d.jsx)(a.Suspense,{fallback:(0,d.jsx)("div",{children:"Loading..."}),children:(0,d.jsx)(c.j3,{})})]})}},9323:function(e,t,n){n.d(t,{GC:function(){return u},TP:function(){return f},XT:function(){return s},jV:function(){return x},jW:function(){return m},pR:function(){return l}});var r=n(5861),a=n(4687),i=n.n(a),c=n(1243);function s(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(i().mark((function e(){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/trending/movie/day");case 2:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(e,t){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(i().mark((function e(t,n){var r,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/search/movie?query=".concat(t,"&page=").concat(n));case 2:return r=e.sent,a=r.data,e.abrupt("return",a.results);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/search/movie?query=".concat(t));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"/credits"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.cast);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"/reviews"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}c.Z.defaults.baseURL="https://api.themoviedb.org/3",c.Z.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZDI5NDI3NDZkZGQwNzIzZTk5YzYyNDVmZDkwM2JlZCIsInN1YiI6IjY0YmQyNTNhMGVkMmFiMDBlMmRhYjY4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.usFVKO1fi_bibknfzjxz84ON7pNr7gg38J8efPhFlyU"}}]);
//# sourceMappingURL=560.f77b0b27.chunk.js.map