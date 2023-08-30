"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[947],{9857:function(t,r,n){n.d(r,{j:function(){return p}});n(2791);var e=n(1087),a=n(7689),o=n(3457),i=n(184),u=(0,o.Z)("ul")({listStyle:"none",display:"flex",flexWrap:"wrap",padding:0,margin:0}),c=(0,o.Z)("li")({marginRight:"20px",marginBottom:"20px",width:"200px",textAlign:"center","& a":{textDecoration:"none",color:"black",display:"block","&:hover":{color:"#E50914"}}}),s=(0,o.Z)("img")({width:"100%",height:"300px",objectFit:"cover"}),p=function(t){var r=t.moviesList,n=(0,a.TH)();return(0,i.jsx)(u,{children:r&&r.map((function(t){var r=t.title,a=t.name,o=t.id,u=t.poster_path;return(0,i.jsx)(c,{children:(0,i.jsxs)(e.rU,{to:"/movies/".concat(o),state:{from:n},children:[(0,i.jsx)(s,{src:"https://image.tmdb.org/t/p/w500".concat(u),alt:""}),r||a]})},o)}))})}},8947:function(t,r,n){n.r(r),n.d(r,{default:function(){return Z}});var e=n(3433),a=n(9439),o=n(2791),i=n(1087),u=n(3071),c=n(9164),s=n(1123),p=n(9323),h=n(9857),l=n(3457),f=n(184),d=(0,l.Z)("form")({display:"flex",alignItems:"center",gap:"10px"}),m=(0,l.Z)("input")({padding:"8px",border:"1px solid #ccc",borderRadius:"4px"}),g=(0,l.Z)("button")({padding:"8px 16px",background:"#E50914",color:"white",border:"none",borderRadius:"4px",cursor:"pointer","&:hover":{background:"#C90813"}}),v=function(t){var r=t.onSubmit,n=(0,o.useState)(""),e=(0,a.Z)(n,2),i=e[0],u=e[1];return(0,f.jsxs)(d,{style:{marginBottom:"20px"},action:"",onSubmit:function(t){t.preventDefault(),i&&r(i)},children:[(0,f.jsx)(m,{type:"text",onChange:function(t){var r=t.target.value;u(r)},value:i}),(0,f.jsx)(g,{type:"submit",children:"Search"})]})},x=(0,l.Z)("button")({padding:"8px 16px",background:"#E50914",color:"white",border:"none",borderRadius:"4px",cursor:"pointer","&:hover":{background:"#C90813"}}),y=function(t){var r=t.onClick;return(0,f.jsx)(x,{onClick:r,children:"Load more"})},Z=function(){var t=(0,o.useState)([]),r=(0,a.Z)(t,2),n=r[0],l=r[1],d=(0,i.lr)(),m=(0,a.Z)(d,2),g=m[0],x=m[1],Z=(0,o.useState)(null),b=(0,a.Z)(Z,2),w=b[0],j=b[1],k=(0,o.useState)(1),B=(0,a.Z)(k,2),N=B[0],C=B[1],S=(0,o.useState)(!1),I=(0,a.Z)(S,2),M=I[0],W=I[1],J=g.get("query");(0,o.useEffect)((function(){J&&((0,p.pR)(J).then((function(t){return j(t.total_results)})),(0,p.GC)(J,N).then((function(t){l((function(r){var n=t.filter((function(t){return!r.some((function(r){return r.id===t.id}))})),a=Math.ceil(w/19)-N;return W(a>0),[].concat((0,e.Z)(r),(0,e.Z)(n))}))})).catch((function(t){return console.log(t)})))}),[J,N,w]);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(u.ZP,{}),(0,f.jsxs)(c.Z,{children:[(0,f.jsx)(s.Z,{variant:"h4",gutterBottom:!0,children:"Explore Movies"}),(0,f.jsx)(v,{onSubmit:function(t){x({query:t}),C(1),l([])}}),0!==w?(0,f.jsx)(h.j,{moviesList:n}):(0,f.jsx)(s.Z,{variant:"h6",children:"No movies found"}),M&&(0,f.jsx)(y,{onClick:function(){C((function(t){return t+1}))}})]})]})}},9323:function(t,r,n){n.d(r,{GC:function(){return s},TP:function(){return f},XT:function(){return u},jV:function(){return m},jW:function(){return v},pR:function(){return h}});var e=n(5861),a=n(4687),o=n.n(a),i=n(1243);function u(){return c.apply(this,arguments)}function c(){return(c=(0,e.Z)(o().mark((function t(){var r,n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("/trending/movie/day");case 2:return r=t.sent,n=r.data,t.abrupt("return",n.results);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function s(t,r){return p.apply(this,arguments)}function p(){return(p=(0,e.Z)(o().mark((function t(r,n){var e,a;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("/search/movie?query=".concat(r,"&page=").concat(n));case 2:return e=t.sent,a=e.data,t.abrupt("return",a.results);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return l.apply(this,arguments)}function l(){return(l=(0,e.Z)(o().mark((function t(r){var n,e;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("/search/movie?query=".concat(r));case 2:return n=t.sent,e=n.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return d.apply(this,arguments)}function d(){return(d=(0,e.Z)(o().mark((function t(r){var n,e;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("movie/".concat(r));case 2:return n=t.sent,e=n.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return g.apply(this,arguments)}function g(){return(g=(0,e.Z)(o().mark((function t(r){var n,e;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("movie/".concat(r,"/credits"));case 2:return n=t.sent,e=n.data,t.abrupt("return",e.cast);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return x.apply(this,arguments)}function x(){return(x=(0,e.Z)(o().mark((function t(r){var n,e;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("movie/".concat(r,"/reviews"));case 2:return n=t.sent,e=n.data,t.abrupt("return",e.results);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}i.Z.defaults.baseURL="https://api.themoviedb.org/3",i.Z.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZDI5NDI3NDZkZGQwNzIzZTk5YzYyNDVmZDkwM2JlZCIsInN1YiI6IjY0YmQyNTNhMGVkMmFiMDBlMmRhYjY4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.usFVKO1fi_bibknfzjxz84ON7pNr7gg38J8efPhFlyU"},1123:function(t,r,n){n.d(r,{Z:function(){return k}});var e=n(3366),a=n(7462),o=n(2791),i=n(3733),u=n(3433),c=n(2466),s=n(7416),p=["sx"];function h(t){var r,n=t.sx,o=function(t){var r,n,e={systemProps:{},otherProps:{}},a=null!=(r=null==t||null==(n=t.theme)?void 0:n.unstable_sxConfig)?r:s.Z;return Object.keys(t).forEach((function(r){a[r]?e.systemProps[r]=t[r]:e.otherProps[r]=t[r]})),e}((0,e.Z)(t,p)),i=o.systemProps,h=o.otherProps;return r=Array.isArray(n)?[i].concat((0,u.Z)(n)):"function"===typeof n?function(){var t=n.apply(void 0,arguments);return(0,c.P)(t)?(0,a.Z)({},i,t):i}:(0,a.Z)({},i,n),(0,a.Z)({},h,{sx:r})}var l=n(4419),f=n(6934),d=n(1402),m=n(4036),g=n(5878),v=n(7225);function x(t){return(0,v.Z)("MuiTypography",t)}(0,g.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var y=n(184),Z=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],b=(0,f.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:function(t,r){var n=t.ownerState;return[r.root,n.variant&&r[n.variant],"inherit"!==n.align&&r["align".concat((0,m.Z)(n.align))],n.noWrap&&r.noWrap,n.gutterBottom&&r.gutterBottom,n.paragraph&&r.paragraph]}})((function(t){var r=t.theme,n=t.ownerState;return(0,a.Z)({margin:0},"inherit"===n.variant&&{font:"inherit"},"inherit"!==n.variant&&r.typography[n.variant],"inherit"!==n.align&&{textAlign:n.align},n.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},n.gutterBottom&&{marginBottom:"0.35em"},n.paragraph&&{marginBottom:16})})),w={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},j={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},k=o.forwardRef((function(t,r){var n=(0,d.Z)({props:t,name:"MuiTypography"}),o=function(t){return j[t]||t}(n.color),u=h((0,a.Z)({},n,{color:o})),c=u.align,s=void 0===c?"inherit":c,p=u.className,f=u.component,g=u.gutterBottom,v=void 0!==g&&g,k=u.noWrap,B=void 0!==k&&k,N=u.paragraph,C=void 0!==N&&N,S=u.variant,I=void 0===S?"body1":S,M=u.variantMapping,W=void 0===M?w:M,J=(0,e.Z)(u,Z),P=(0,a.Z)({},u,{align:s,color:o,className:p,component:f,gutterBottom:v,noWrap:B,paragraph:C,variant:I,variantMapping:W}),R=f||(C?"p":W[I]||w[I])||"span",T=function(t){var r=t.align,n=t.gutterBottom,e=t.noWrap,a=t.paragraph,o=t.variant,i=t.classes,u={root:["root",o,"inherit"!==t.align&&"align".concat((0,m.Z)(r)),n&&"gutterBottom",e&&"noWrap",a&&"paragraph"]};return(0,l.Z)(u,x,i)}(P);return(0,y.jsx)(b,(0,a.Z)({as:R,ref:r,ownerState:P,className:(0,i.Z)(T.root,p)},J))}))}}]);
//# sourceMappingURL=947.0ddea8d9.chunk.js.map