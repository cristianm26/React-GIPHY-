(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{18:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),r=n.n(c),i=n(8),s=n.n(i),u=(n(6),n(2)),o=n(10),j=function(t){var e=t.setCategorias,n=Object(c.useState)(""),r=Object(u.a)(n,2),i=r[0],s=r[1];return Object(a.jsx)("form",{onSubmit:function(t){t.preventDefault(),i.trim().length>2&&(e((function(t){return[i].concat(Object(o.a)(t))})),s(""))},children:Object(a.jsx)("input",{type:"text",value:i,onChange:function(t){s(t.target.value)}})})},d=n(11),l=function(t){var e=t.title,n=t.url;return Object(a.jsxs)("div",{className:"card animate__animated animate__fadeIn ",children:[Object(a.jsx)("img",{src:n,alt:e}),Object(a.jsx)("p",{children:e})]})},b=n(7),f=n.n(b),p=n(9),h=function(){var t=Object(p.a)(f.a.mark((function t(e){var n,a,c,r,i;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(e),"&limit=10&api_key=2UeBD1ebDiNT8Gnlpup7AbSkou11Wgus"),t.next=3,fetch(n);case 3:return a=t.sent,t.next=6,a.json();case 6:return c=t.sent,r=c.data,i=r.map((function(t){var e;return{id:t.id,title:t.title,url:null===(e=t.images)||void 0===e?void 0:e.downsized_medium.url}})),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(t){var e=t.categoria,n=function(t){var e=Object(c.useState)({data:[],loading:!0}),n=Object(u.a)(e,2),a=n[0],r=n[1];return Object(c.useEffect)((function(){h(t).then((function(t){r({data:t,loading:!1})}))}),[t]),a}(e),r=n.data,i=n.loading;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h3",{className:"animate__animated animate__fadeIn ",children:e}),i&&Object(a.jsx)("p",{className:"animate__animated animate__flash ",children:"Cargando"}),Object(a.jsx)("div",{className:"card-grid",children:r.map((function(t){return Object(a.jsx)(l,Object(d.a)({},t),t.id)}))})]})},O=function(){var t=Object(c.useState)(["One Punch"]),e=Object(u.a)(t,2),n=e[0],r=e[1];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h2",{children:"Gif Expert App"}),Object(a.jsx)(j,{setCategorias:r}),Object(a.jsx)("hr",{}),Object(a.jsx)("ol",{children:n.map((function(t){return Object(a.jsx)(m,{categoria:t},t)}))})]})};var g=function(){return Object(a.jsx)(O,{})},x=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),a(t),c(t),r(t),i(t)}))};s.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(g,{})}),document.getElementById("root")),x()},6:function(t,e,n){}},[[18,1,2]]]);
//# sourceMappingURL=main.622a626f.chunk.js.map