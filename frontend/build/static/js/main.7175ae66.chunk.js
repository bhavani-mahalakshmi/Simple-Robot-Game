(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{41:function(e,t,n){},42:function(e,t,n){},52:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),s=n(33),i=n.n(s),l=(n(41),n(42),n(16)),r=n(6),o=n(1);var b=Object(r.f)((function(e){return Object(o.jsx)("div",{className:"navigation",children:Object(o.jsx)("nav",{className:"navbar navbar-expand navbar-dark bg-dark",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsx)(l.b,{className:"navbar-brand",to:"/",children:"Robot Feedback"})})})})}));var j=function(){return Object(o.jsx)("div",{className:"footer",children:Object(o.jsx)("footer",{className:"py-3 bg-dark fixed-bottom",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("p",{className:"m-0 text-center text-white",children:"Copyright \xa9 Bhavani Mahalakshmi for Yochan Fall Web Dev Application"})})})})},d=n(10),u=n(12),O=n(36),h=(n(52),n(13)),x=n.n(h),m=n(14),v=new m.a;function f(){Object(c.useEffect)((function(){return v.remove("user_id",{path:"/"})}),[]);var e=Object(c.useState)(""),t=Object(d.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),i=Object(d.a)(s,2),l=i[0],r=i[1];return Object(o.jsx)("div",{className:"Login",children:Object(o.jsxs)(u.a,{onSubmit:function(e){e.preventDefault();var t={name:l,email:n};x.a.post("/add",t).then((function(e){console.log("SUCCESS",e.data.id),v.set("user_id",e.data.id),window.location="/interactions"})).catch((function(e){console.log(e)}))},children:[Object(o.jsxs)(u.a.Group,{size:"lg",controlId:"name",children:[Object(o.jsx)(u.a.Label,{children:"Name"}),Object(o.jsx)(u.a.Control,{type:"text",value:l,onChange:function(e){return r(e.target.value)}})]}),Object(o.jsxs)(u.a.Group,{size:"lg",controlId:"email",children:[Object(o.jsx)(u.a.Label,{children:"Email"}),Object(o.jsx)(u.a.Control,{autoFocus:!0,type:"email",value:n,onChange:function(e){return a(e.target.value)}})]}),Object(o.jsx)(u.a.Group,{size:"lg",controlId:"name",children:Object(o.jsx)(O.a,{block:!0,size:"lg",type:"submit",disabled:!(n.length>0&&l.length>0),id:"login-btn",children:"Login"})})]})})}var g=new m.a;var p=function(){var e=Object(c.useState)(1),t=Object(d.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)([{cell:1,value:""},{cell:2,value:""},{cell:3,value:""},{cell:4,value:""},{cell:5,value:""},{cell:6,value:""},{cell:7,value:""}]),i=Object(d.a)(s,2),l=i[0],r=(i[1],Object(c.useState)("images/1.png")),b=Object(d.a)(r,2),j=b[0],u=b[1];return Object(c.useEffect)((function(){void 0==g.get("user_id")&&(window.alert("Please login to view this page"),window.location="/")})),Object(o.jsx)("div",{className:"about",children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsxs)("div",{className:"row align-items-center",children:[Object(o.jsx)("div",{className:"col-lg-7",children:Object(o.jsx)("img",{className:"img-fluid rounded mb-4 mb-lg-0",src:j,id:"board",alt:""})}),Object(o.jsxs)("div",{children:[Object(o.jsx)("p",{children:"Feedback"}),Object(o.jsx)("button",{type:"button",className:"btn btn-primary fb-btns",onClick:function(){n>=1&&n<=7&&(l[n-1].value="+")},children:"+"}),Object(o.jsx)("button",{type:"button",className:"btn btn-primary fb-btns",onClick:function(){n>=0&&n<7&&(l[n-1].value="-")},children:"-"})]})]}),Object(o.jsxs)("div",{className:"mx-auto btn-toolbar col-md-10",children:[Object(o.jsx)("button",{type:"button",className:"btn btn-primary state-btns",onClick:function(){return function(){var e=n-1;e>=1&&e<=7&&(a(e),u("images/"+e.toString()+".png"),console.log(j))}()},children:"Previous State"}),Object(o.jsx)("button",{type:"button",className:"btn btn-primary state-btns",onClick:function(){return function(){var e=n+1;e>=1&&e<=7&&(a(e),u("images/"+e.toString()+".png"))}()},children:"Next State"}),Object(o.jsx)("button",{type:"button",className:"btn btn-primary state-btns",onClick:function(){return function(){var e=g.get("user_id"),t={feedback:l};console.log(l);var n="/update?id="+e.toString();x.a.post(n,t).then((function(e){window.location="/result"}))}()},children:"Submit"})]})]})})},N=new m.a;var w=function(){var e=Object(c.useState)(""),t=Object(d.a)(e,2),n=(t[0],t[1]),a=Object(c.useState)(""),s=Object(d.a)(a,2),i=s[0],l=s[1],r=Object(c.useState)(""),b=Object(d.a)(r,2),j=b[0],u=b[1];return Object(c.useEffect)((function(){var e=N.get("user_id");void 0==e&&(window.alert("Please login to view this page"),window.location="/");var t="/list?id="+e.toString();x.a.get(t).then((function(e){console.log("SUCCESS",e.data.email),n(e.data.email),l(e.data.name),console.log(e.data.feedback);var t=e.data.feedback.feedback.map((function(e){var t=e.cell,n=e.value;return Object(o.jsxs)("tr",{children:[" ",Object(o.jsx)("td",{children:t})," ",Object(o.jsx)("td",{children:n})," "]})}));u(t)})).catch((function(e){console.log(e)}))}),[]),Object(o.jsx)("div",{className:"contact",children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsxs)("div",{className:"row align-items-center",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{})," "]}),Object(o.jsxs)("h1",{className:"font-weight-light",children:["Feedback given by user ",Object(o.jsx)("b",{children:i})]})]}),Object(o.jsx)("div",{className:"row justify-content-center",children:Object(o.jsx)("div",{className:"col-auto",children:Object(o.jsx)("table",{className:"tg row align-items-center",children:Object(o.jsxs)("thead",{children:[Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:Object(o.jsx)("b",{children:"Cell"})}),Object(o.jsx)("td",{children:Object(o.jsx)("b",{children:"Value"})})]}),j]})})})})]})})};var S=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)(l.a,{children:[Object(o.jsx)(b,{}),Object(o.jsx)(l.a,{children:Object(o.jsxs)(r.c,{children:[Object(o.jsx)(r.a,{path:"/",exact:!0,component:function(){return Object(o.jsx)(f,{})}}),Object(o.jsx)(r.a,{path:"/interactions",exact:!0,component:function(){return Object(o.jsx)(p,{})}}),Object(o.jsx)(r.a,{path:"/result",exact:!0,component:function(){return Object(o.jsx)(w,{})}})]})}),Object(o.jsx)(j,{})]})})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,73)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),s(e),i(e)}))};i.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(S,{})}),document.getElementById("root")),k()}},[[72,1,2]]]);
//# sourceMappingURL=main.7175ae66.chunk.js.map