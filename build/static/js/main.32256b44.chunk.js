(this.webpackJsonpEcomoGame=this.webpackJsonpEcomoGame||[]).push([[0],{77:function(e,t,c){},78:function(e,t,c){},82:function(e,t,c){},83:function(e,t,c){},84:function(e,t,c){},85:function(e,t,c){},86:function(e,t,c){},87:function(e,t,c){},88:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),i=c(13),s=c.n(i),r=(c(77),c(25)),o=c(5),j=c(4),l=c(117),b=c(113),d=c(116),u=c(60),O=(c(78),c(127)),m=(c.p,c(2)),x=Object(b.a)((function(e){return{body:{padding:"10px 10px"},inputBox:{width:"300px"},submitButton:{width:"300px"},stage1:{width:"300px",top:"145px",marginLeft:"20px"},welcome:{height:"0px",width:"10px",top:"0px",marginLeft:"60px"},content:{marginLeft:"30px",marginRight:"30px",color:"white"},ecomogame:{marginLeft:"30px",marginRight:"30px",color:"rgb(30, 255, 0)"}}}));function h(e){var t=n.a.useState(!1),c=Object(o.a)(t,2),a=c[0],i=c[1],s=x(),r=Object(j.l)();return Object(m.jsxs)("div",{className:"all",children:[Object(m.jsxs)("div",{className:"top",children:[Object(m.jsx)("p",{className:"p",children:"\ud83e\udde9"}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("div",{children:Object(m.jsx)("p",{className:"EcomoGame",children:"EcomoGame"})}),Object(m.jsx)("p",{className:s.content,children:"The EcomoGame is a simple game to test the player\u2019s memory. In a deck of paired cards, the player needs to select a matching pair in consecutive turns. The player wins the game when all matching pairs are selected."})]}),Object(m.jsxs)("div",{className:"bottom",children:[Object(m.jsx)("div",{style:{display:"block",padding:30},children:Object(m.jsx)(O.a,{onClose:function(){i(!1)},open:a,style:{position:"absolute",border:"2px solid rgb(30, 255, 0)",backgroundColor:"gray",boxShadow:"2px solid black",height:200,width:340,margin:"auto"},children:Object(m.jsxs)("h2",{children:[Object(m.jsxs)("div",{className:s.welcome,children:[Object(m.jsx)("p",{className:"loader-wel",children:"welcome"}),Object(m.jsx)("p",{className:"to",children:"to"}),Object(m.jsx)("p",{className:"name",children:"EcomoGame"})]}),Object(m.jsx)(d.a,{variant:"contained",color:"primary",className:s.stage1,onClick:function(){return e="/stage1",console.log(e),void r(e);var e},children:"Get Started"})]})})}),Object(m.jsx)(d.a,{variant:"contained",color:"primary",className:s.submitButton,onClick:function(){i(!0)},children:"START"})]}),Object(m.jsx)(l.a,{item:!0})]})}var p=function(e){return Object(m.jsx)(l.a,{container:!0,item:!0,direction:"column",alignItems:"center",justify:"center",style:{padding:"30px",minHeight:"93vh"},children:Object(m.jsx)(l.a,{item:!0,children:Object(m.jsx)(u.a,{variant:"h2",children:"Error 404"})})})};function f(e){var t=Object(a.useState)(""),c=Object(o.a)(t,2),n=c[0],i=c[1],s=Object(a.useState)(""),r=Object(o.a)(s,2),l=r[0],b=r[1],d=Object(j.l)();return Object(m.jsxs)("div",{children:[Object(m.jsx)("input",{type:"text",value:n,onChange:function(e){i(e.target.value)},required:!0}),Object(m.jsx)("input",{type:"text",value:l,onChange:function(e){b(e.target.value)},required:!0}),Object(m.jsx)("button",{type:"submit",onClick:function(){return e="/stage1",console.log(e),void d(e);var e},children:"Log In"})]})}var g=c(11),v=c(7),y=c.p+"static/media/bird1.991fa7ea.jpg",S=c.p+"static/media/bird2.b650830a.jpg",N=c.p+"static/media/bird3.8063cae8.jpg",k=[{type:"bird1",image:y},{type:"bird2",image:S},{type:"bird3",image:N}],E=(c(56),c(82),c(118)),C=c(58),I=function(e){var t=e.moves,c=e.bestScore,a=e.handleRestart;return Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:"Ecomo",children:Object(m.jsx)("p",{className:"Ecomog",children:"EcomoGame"})}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)(E.a,{children:Object(m.jsxs)("div",{className:"sub-header",children:[Object(m.jsxs)("div",{className:"moves",children:[Object(m.jsx)("span",{className:"bold",children:"Moves:"}),t]}),Object(m.jsx)("div",{className:"reshuffle",children:Object(m.jsx)("button",{onClick:a,children:Object(m.jsx)(C.a,{})})}),localStorage.getItem("bestScore")&&Object(m.jsxs)("div",{className:"high-score",children:[Object(m.jsx)("span",{children:"Best Score:"}),c]})]})})]})},w=c(124),T=c(125),G=(c(83),c.p+"static/media/backpic.6399890d.jpg"),R=c(23),M=c.n(R),B=function(e){var t=e.onClick,c=e.card,a=e.index,n=e.isInactive,i=e.isFlipped,s=e.isDisabled;return Object(m.jsxs)("div",{className:M()("card",{"is-flipped":i,"is-inactive":n}),onClick:function(){!i&&!s&&t(a)},children:[Object(m.jsx)("div",{className:"card-face card-font-face",children:Object(m.jsx)("img",{src:G,alt:"backpic",className:"img"})}),Object(m.jsx)("div",{className:"card-face card-back-face",children:Object(m.jsx)("img",{src:c.image,alt:"frontpic",className:"img"})})]})},Y=c(129),D=c(123),F=c(121),L=c(122),H=c(120),J=(c(84),function(e){var t=e.handleRestart,c=e.showModal,a=e.bestScore,n=e.moves,i=Object(j.l)();return Object(m.jsx)("div",{children:Object(m.jsxs)(Y.a,{open:c,disableBackdropClick:!0,disableEscapeKeyDown:!0,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(m.jsx)("div",{className:"Ecomo",children:Object(m.jsx)("p",{className:"Ecomog",children:"EcomoGame"})}),Object(m.jsx)(H.a,{id:"alert-dialog-title",children:"Hurray !!! You completed the EcomoGame Stage 1 !!"}),Object(m.jsx)(F.a,{children:Object(m.jsxs)(L.a,{id:"alert-dialog-description",children:["You got ",n," moves. Your best score is ",a]})}),Object(m.jsxs)(D.a,{children:[Object(m.jsx)(d.a,{onClick:t,color:"primary",children:"Restart "}),Object(m.jsx)(d.a,{onClick:function(){return e="/stage2",console.log(e),void i(e);var e},color:"primary",children:"Next Stage"})]})]})})});function A(e,t,c){var a=e[t];e[t]=e[c],e[c]=a}function P(e){for(var t=e.length;t>0;t--){A(e,t-1,Math.floor(Math.random()*t))}return e}var q=function(){var e=Object(a.useState)((function(){return P(k.concat(k))})),t=Object(o.a)(e,2),c=t[0],n=t[1],i=Object(a.useState)([]),s=Object(o.a)(i,2),j=s[0],l=s[1],b=Object(a.useState)({}),d=Object(o.a)(b,2),u=d[0],O=d[1],x=Object(a.useState)(0),h=Object(o.a)(x,2),p=h[0],f=h[1],y=Object(a.useState)(!1),S=Object(o.a)(y,2),N=S[0],C=S[1],G=Object(a.useState)(!1),R=Object(o.a)(G,2),M=R[0],Y=R[1],D=Object(a.useState)(JSON.parse(localStorage.getItem("bestScore"))||Number.POSITIVE_INFINITY),F=Object(o.a)(D,2),L=F[0],H=F[1],A=Object(a.useRef)(null),q=function(){var e=Object(o.a)(j,2),t=e[0],a=e[1];if(Y(!1),c[t].type===c[a].type)return O((function(e){return Object(r.a)(Object(r.a)({},e),{},Object(v.a)({},c[t].type,!0))})),void l([]);A.current=setTimeout((function(){l([])}),300)},K=function(e){1===j.length?(l((function(t){return[].concat(Object(g.a)(t),[e])})),f((function(e){return e+1})),Y(!0)):(clearTimeout(A.current),l([e]))};Object(a.useEffect)((function(){var e=null;return 2===j.length&&(e=setTimeout(q,300)),function(){clearTimeout(e)}}),[j]),Object(a.useEffect)((function(){!function(){if(Object.keys(u).length===k.length){C(!0);var e=Math.min(p,L);H(e),localStorage.setItem("bestScore",e)}}()}),[u]);var V=function(e){return j.includes(e)},_=function(e){return Boolean(u[e.type])},W=function(){O({}),l([]),C(!1),f(0),Y(!1),n(P(k.concat(k)))};return Object(m.jsxs)("div",{children:[Object(m.jsx)(I,{moves:p,bestScore:L,handleRestart:W}),Object(m.jsxs)(E.a,{children:[Object(m.jsx)("h5",{children:"STAGE: ONE(1)"}),Object(m.jsx)(w.a,{children:c.map((function(e,t){return Object(m.jsx)(T.a,{xs:4,md:3,lg:2,children:Object(m.jsx)(B,{card:e,index:t,isDisabled:M,isInactive:_(e),isFlipped:V(t),onClick:K},t)})}))})]}),Object(m.jsx)(J,{showModal:N,moves:p,bestScore:L,handleRestart:W})]})},K=[{type:"bird1",image:y},{type:"bird2",image:S},{type:"bird3",image:N},{type:"bird4",image:c.p+"static/media/bird4.fb67c4c8.jpg"}],V=(c(85),function(e){var t=e.onClick,c=e.card,a=e.index,n=e.isInactive,i=e.isFlipped,s=e.isDisabled;return Object(m.jsxs)("div",{className:M()("card",{"is-flipped":i,"is-inactive":n}),onClick:function(){!i&&!s&&t(a)},children:[Object(m.jsx)("div",{className:"card-face card-font-face",children:Object(m.jsx)("img",{src:G,alt:"backpic",className:"img"})}),Object(m.jsx)("div",{className:"card-face card-back-face",children:Object(m.jsx)("img",{src:c.image,alt:"frontpic",className:"img"})})]})}),_=(c(86),function(e){var t=e.handleRestart,c=e.showModal,a=e.bestScore,n=e.moves,i=Object(j.l)();return Object(m.jsx)("div",{children:Object(m.jsxs)(Y.a,{open:c,disableBackdropClick:!0,disableEscapeKeyDown:!0,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(m.jsx)("h2",{children:"Ecomo Game"}),Object(m.jsx)(H.a,{id:"alert-dialog-title",children:"Hurray !!! You completed the Ecomo Game  !!"}),Object(m.jsx)(F.a,{children:Object(m.jsxs)(L.a,{id:"alert-dialog-description",children:["You got ",n," moves. Your best score is ",a]})}),Object(m.jsxs)(D.a,{children:[Object(m.jsx)(d.a,{onClick:t,color:"primary",children:"Restart "}),Object(m.jsx)(d.a,{onClick:function(){return e="/stage2",console.log(e),void i(e);var e},color:"primary",children:"Next Stage"})]})]})})});function W(e,t,c){var a=e[t];e[t]=e[c],e[c]=a}function z(e){for(var t=e.length;t>0;t--){W(e,t-1,Math.floor(Math.random()*t))}return e}var Q=function(){var e=Object(a.useState)((function(){return z(K.concat(K))})),t=Object(o.a)(e,2),c=t[0],n=t[1],i=Object(a.useState)([]),s=Object(o.a)(i,2),j=s[0],l=s[1],b=Object(a.useState)({}),d=Object(o.a)(b,2),u=d[0],O=d[1],x=Object(a.useState)(0),h=Object(o.a)(x,2),p=h[0],f=h[1],y=Object(a.useState)(!1),S=Object(o.a)(y,2),N=S[0],k=S[1],C=Object(a.useState)(!1),G=Object(o.a)(C,2),R=G[0],M=G[1],B=Object(a.useState)(JSON.parse(localStorage.getItem("bestScore"))||Number.POSITIVE_INFINITY),Y=Object(o.a)(B,2),D=Y[0],F=Y[1],L=Object(a.useRef)(null),H=function(){var e=Object(o.a)(j,2),t=e[0],a=e[1];if(M(!1),c[t].type===c[a].type)return O((function(e){return Object(r.a)(Object(r.a)({},e),{},Object(v.a)({},c[t].type,!0))})),void l([]);L.current=setTimeout((function(){l([])}),500)},J=function(e){1===j.length?(l((function(t){return[].concat(Object(g.a)(t),[e])})),f((function(e){return e+1})),M(!0)):(clearTimeout(L.current),l([e]))};Object(a.useEffect)((function(){var e=null;return 2===j.length&&(e=setTimeout(H,300)),function(){clearTimeout(e)}}),[j]),Object(a.useEffect)((function(){!function(){if(Object.keys(u).length===K.length){k(!0);var e=Math.min(p,D);F(e),localStorage.setItem("bestScore",e)}}()}),[u]);var A=function(e){return j.includes(e)},P=function(e){return Boolean(u[e.type])},q=function(){O({}),l([]),k(!1),f(0),M(!1),n(z(K.concat(K)))};return Object(m.jsxs)("div",{children:[Object(m.jsx)(I,{moves:p,bestScore:D,handleRestart:q}),Object(m.jsxs)(E.a,{children:[Object(m.jsx)("h5",{children:"STAGE: TWO(2)"}),Object(m.jsx)(w.a,{children:c.map((function(e,t){return Object(m.jsx)(T.a,{xs:4,md:3,lg:2,children:Object(m.jsx)(V,{card:e,index:t,isDisabled:R,isInactive:P(e),isFlipped:A(t),onClick:J},t)})}))})]}),Object(m.jsx)(_,{showModal:N,moves:p,bestScore:D,handleRestart:q})]})},U=c(128),X=c(126),Z=function(e){var t=function(t,c){"clickaway"!==c&&e.setOpen(!1)};return Object(m.jsx)(U.a,{open:e.open,onClose:t,autoHideDuration:2e3,children:Object(m.jsx)(X.a,{onClose:t,severity:e.severity,children:e.message})})},$=(c(87),Object(a.createContext)()),ee=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),c=t[0],n=t[1];Object(a.useEffect)((function(){n(!0),setTimeout((function(){n(!1)}),4e3)}),[]);var i=Object(a.useState)({open:!1,severity:"",message:""}),s=Object(o.a)(i,2),b=s[0],d=s[1];return Object(m.jsx)("div",{className:"con",children:c?Object(m.jsx)("div",{className:"loader-con",children:Object(m.jsx)("div",{className:"spinner",children:Object(m.jsx)("p",{className:"loader-img",children:"\ud83e\udde9"})})}):Object(m.jsxs)($.Provider,{value:d,children:[Object(m.jsxs)(l.a,{container:!0,direction:"column",children:[Object(m.jsx)(l.a,{item:!0,xs:!0}),Object(m.jsx)(l.a,{item:!0,children:Object(m.jsxs)(j.c,{children:[Object(m.jsx)(j.a,{exact:!0,path:"/",element:Object(m.jsx)(h,{})}),Object(m.jsx)(j.a,{exact:!0,path:"/start",element:Object(m.jsx)(f,{})}),Object(m.jsx)(j.a,{exact:!0,path:"/stage1",element:Object(m.jsx)(q,{})}),Object(m.jsx)(j.a,{exact:!0,path:"/stage2",element:Object(m.jsx)(Q,{})}),Object(m.jsx)(j.a,{path:"*",element:Object(m.jsx)(p,{})})]})})]}),Object(m.jsx)(Z,{open:b.open,setOpen:function(e){return d(Object(r.a)(Object(r.a)({},b),{},{open:e}))},severity:b.severity,message:b.message})]})})},te=c(30);s.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(te.a,{children:Object(m.jsx)(ee,{})})}),document.getElementById("root"))}},[[88,1,2]]]);
//# sourceMappingURL=main.32256b44.chunk.js.map