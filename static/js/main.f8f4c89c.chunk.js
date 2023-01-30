(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{23:function(e,t,c){},25:function(e,t,c){},26:function(e,t,c){"use strict";c.r(t);var n=c(11),a=c(5),r=c(2),s=(c(21),c(22),c(23),c(1)),j=c.n(s),i=c(6),l=c.n(i),o=c(0),b=function(){return Object(o.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"navbar-brand",children:[Object(o.jsx)(a.c,{to:"/",className:function(e){var t=e.isActive;return l()("navbar-item",{"has-background-grey-lighter":t})},children:"Home"}),Object(o.jsx)(a.c,{to:"/people",className:function(e){var t=e.isActive;return l()("navbar-item",{"has-background-grey-lighter":t})},children:"People"})]})})})},h=function(){return Object(o.jsxs)("div",{"data-cy":"app",children:[Object(o.jsx)(b,{}),Object(o.jsx)("main",{className:"section",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsx)(r.b,{})})})]})},d=j.a.memo((function(){return Object(o.jsx)("h1",{className:"title",children:"Home Page"})})),O=c(8),x=c(9),u=c(12),m=c(4);function p(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}c(25);var f=function(){return Object(o.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(o.jsx)("div",{className:"Loader__content"})})},v=function(e){var t=e.person;return Object(o.jsx)(a.b,{to:"../".concat(t.slug),className:l()({"has-text-danger":"f"===t.sex}),children:t.name})},g=function(e){var t=e.people,c=Object(r.i)().slug;return Object(o.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"Name"}),Object(o.jsx)("th",{children:"Sex"}),Object(o.jsx)("th",{children:"Born"}),Object(o.jsx)("th",{children:"Died"}),Object(o.jsx)("th",{children:"Mother"}),Object(o.jsx)("th",{children:"Father"})]})}),Object(o.jsx)("tbody",{children:t.map((function(e){return Object(o.jsxs)("tr",{"data-cy":"person",className:l()({"has-background-warning":e.slug===c}),children:[Object(o.jsx)("td",{children:Object(o.jsx)(v,{person:e})}),Object(o.jsx)("td",{children:e.sex}),Object(o.jsx)("td",{children:e.born}),Object(o.jsx)("td",{children:e.died}),Object(o.jsx)("td",{children:e.mother?Object(o.jsx)(v,{person:e.mother}):e.motherName||"-"}),Object(o.jsx)("td",{children:e.father?Object(o.jsx)(v,{person:e.father}):e.fatherName||"-"})]},e.slug)}))})]})},N=j.a.memo((function(){var e=Object(s.useState)([]),t=Object(m.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(!0),r=Object(m.a)(a,2),j=r[0],i=r[1],l=Object(s.useState)(""),b=Object(m.a)(l,2),h=b[0],d=b[1],v=function(){var e=Object(u.a)(Object(O.a)().mark((function e(){var t,c;return Object(O.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p();case 3:t=e.sent,c=t.map((function(e){var c=t.find((function(t){return t.name===e.motherName})),n=t.find((function(t){return t.name===e.fatherName}));return Object(x.a)(Object(x.a)({},e),{},{mother:c,father:n})})),n(c),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),d("Unable to load people");case 11:return e.prev=11,i(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){v()}),[]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{className:"title",children:"People Page"}),Object(o.jsx)("div",{className:"block",children:Object(o.jsxs)("div",{className:"box table-container",children:[j&&Object(o.jsx)(f,{}),h&&Object(o.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),!c.length&&!j&&Object(o.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),!j&&Object(o.jsx)(g,{people:c})]})})]})})),y=j.a.memo((function(){return Object(o.jsx)("h1",{className:"title",children:"Page not found"})}));Object(n.createRoot)(document.getElementById("root")).render(Object(o.jsxs)(a.a,{children:[Object(o.jsx)(r.e,{children:Object(o.jsxs)(r.c,{path:"/",element:Object(o.jsx)(h,{}),children:[Object(o.jsx)(r.c,{index:!0,element:Object(o.jsx)(d,{})}),Object(o.jsx)(r.c,{path:"/home",element:Object(o.jsx)(r.a,{to:"/",replace:!0})}),Object(o.jsxs)(r.c,{path:"/people",children:[Object(o.jsx)(r.c,{index:!0,element:Object(o.jsx)(N,{})}),Object(o.jsx)(r.c,{path:":slug",element:Object(o.jsx)(N,{})})]}),Object(o.jsx)(r.c,{path:"*",element:Object(o.jsx)(y,{})})]})}),Object(o.jsx)(h,{})]}))}},[[26,1,2]]]);
//# sourceMappingURL=main.f8f4c89c.chunk.js.map