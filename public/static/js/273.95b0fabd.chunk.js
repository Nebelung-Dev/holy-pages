"use strict";(self.webpackChunkholyunblocker_website=self.webpackChunkholyunblocker_website||[]).push([[273],{895:function(e,r,t){t.d(r,{_:function(){return g},s:function(){return w}});var n=t(7567),a=t(9405),s=t(5168),c=t(6157),o=t(37),i=t(9592),u=t(6931),l=t(8427),d=t.n(l),h=t(5474),f=t(2723),p=t(57),v=t(9386),m=t(1394),x=["items"],g=function(){function e(r,t){(0,i.Z)(this,e),this.server=r,this.signal=t}return(0,u.Z)(e,[{key:"fetch",value:function(e){function r(r){return e.apply(this,arguments)}return r.toString=function(){return e.toString()},r}(function(){var e=(0,o.Z)(d().mark((function e(r){var t,n=arguments;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>1&&void 0!==n[1]?n[1]:{},e.next=3,fetch(new URL(r,this.server),(0,c.Z)((0,c.Z)({},t),{},{signal:this.signal}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e,this)})));return function(r){return e.apply(this,arguments)}}())},{key:"game",value:function(){var e=(0,o.Z)(d().mark((function e(r){var t,n;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetch("./games/".concat(r,"/"));case 2:return t=e.sent,e.next=5,t.json();case 5:if(n=e.sent,t.ok){e.next=8;break}throw new Error(n.message||n.error);case 8:return e.abrupt("return",n);case 9:case"end":return e.stop()}}),e,this)})));return function(r){return e.apply(this,arguments)}}()},{key:"game_plays",value:function(){var e=(0,o.Z)(d().mark((function e(r,t){var n,a;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetch("./games/".concat(r,"/plays?")+new URLSearchParams({token:t}),{method:"PUT"});case 2:return n=e.sent,e.next=5,n.json();case 5:if(a=e.sent,n.ok){e.next=8;break}throw new Error(a.message||a.error);case 8:return e.abrupt("return",a);case 9:case"end":return e.stop()}}),e,this)})));return function(r,t){return e.apply(this,arguments)}}()},{key:"sort_params",value:function(e){for(var r in e)switch(typeof e[r]){case"undefined":case"object":delete e[r]}return e}},{key:"category",value:function(){var e=(0,o.Z)(d().mark((function e(r){var t,n;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetch("./games/?"+new URLSearchParams(this.sort_params(r)));case 2:return t=e.sent,e.next=5,t.json();case 5:if(n=e.sent,t.ok){e.next=8;break}throw new Error(n.message||n.error);case 8:return e.abrupt("return",n);case 9:case"end":return e.stop()}}),e,this)})));return function(r){return e.apply(this,arguments)}}()}]),e}();function b(e){var r=(0,h.useState)(!1),t=(0,s.Z)(r,2),n=t[0],a=t[1];return(0,m.jsxs)(f.rU,{className:"item",to:"".concat((0,v.Z)("/theatre/","player"),"?id=").concat(e.id),children:[(0,m.jsx)("div",{className:"thumbnail","data-loaded":Number(n),children:(0,m.jsx)("img",{alt:"",loading:"lazy",onLoad:function(){return a(!0)},src:"/thumbnails/".concat(e.id,".webp")})}),(0,m.jsx)("div",{className:"name",children:(0,m.jsx)(p.mj,{ellipsis:!0,children:e.name})})]})}function Z(){return(0,m.jsxs)("div",{className:"item loading",children:[(0,m.jsx)("div",{className:"thumbnail"}),(0,m.jsx)("div",{className:"name"})]})}function w(e){var r,t=e.items,s=(0,a.Z)(e,x),o=[],i=(0,n.Z)(t);try{for(i.s();!(r=i.n()).done;){var u=r.value;u.loading?o.push((0,m.jsx)(Z,{id:u.id},u.id)):o.push((0,m.jsx)(b,{id:u.id,name:u.name},u.id))}}catch(l){i.e(l)}finally{i.f()}return(0,m.jsx)("div",(0,c.Z)((0,c.Z)({},s),{},{children:o}))}},139:function(e,r,t){t.d(r,{M8:function(){return b},NB:function(){return w},UH:function(){return g},oQ:function(){return Z}});var n=t(7567),a=t(37),s=t(5168),c=t(6157),o=t(9405),i=t(8427),u=t.n(i),l=t(8828),d=t(5474),h=t(5120),f=(t(3888),t(1394)),p=["children","className"],v=["children","className"],m=["children","className"],x=["className","onChange","children"];function g(e){var r=e.children,t=e.className,n=(0,o.Z)(e,p);return(0,f.jsx)("button",(0,c.Z)((0,c.Z)({type:"button",className:(0,h.Z)("theme-button",t)},n),{},{children:r}))}function b(e){var r=e.children,t=e.className,n=(0,o.Z)(e,v);return(0,f.jsx)("div",(0,c.Z)((0,c.Z)({className:(0,h.Z)("theme-input-bar",t)},n),{},{children:r}))}var Z=(0,d.forwardRef)((function(e,r){var t=e.children,n=e.className,a=(0,o.Z)(e,m);return(0,f.jsx)("input",(0,c.Z)((0,c.Z)({ref:r,className:(0,h.Z)("theme-input",n)},a),{},{children:t}))})),w=(0,d.forwardRef)((function(e,r){var t,i,p=(0,d.useRef)(),v=(0,d.useRef)(),m=(0,d.useState)(-1),g=(0,s.Z)(m,2),b=g[0],Z=g[1],w=(0,d.useState)(!1),y=(0,s.Z)(w,2),j=y[0],k=y[1];function N(e){return A.apply(this,arguments)}function A(){return(A=(0,a.Z)(u().mark((function r(t){return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,q(t);case 2:return r.next=4,k(!1);case 4:"function"===typeof e.onChange&&e.onChange({target:p.current});case 5:case"end":return r.stop()}}),r)})))).apply(this,arguments)}var S,C=e.className,M=(e.onChange,e.children),U=(0,o.Z)(e,x),L=[],R=[],P=[],_=0,D=(0,n.Z)(M);try{for(D.s();!(S=D.n()).done;){var E=S.value;if("option"===E.type){var T={name:E.props.children,value:E.props.value,disabled:"disabled"in E.props};T.value===(e.value||e.defaultValue)&&(_=R.length),T.disabled||P.push(R.length),R.push(T)}}}catch(K){D.e(K)}finally{D.f()}for(var z=(0,d.useState)(_),B=(0,s.Z)(z,2),O=B[0],q=B[1],F=function(e){var r=R[e];L.push((0,f.jsx)("div",{className:(0,h.Z)("plain-option",e===b&&"hover",r.disabled&&"disabled"),onClick:function(){r.disabled||N(e)},onMouseOver:function(){r.disabled||Z(e)},children:r.name},e))},I=0;I<R.length;I++)F(I);return(0,f.jsxs)("div",(0,c.Z)((0,c.Z)({},U),{},{tabIndex:0,className:(0,h.Z)("theme-select",C),"data-open":Number(j),ref:v,onKeyDown:function(e){var r=!0;switch(e.code){case"ArrowDown":case"ArrowUp":var t,n=b,a=P.indexOf([].concat(P).sort((function(e,r){return Math.abs(e-n)-Math.abs(r-n)}))[0]);switch(e.code){case"ArrowDown":a===P.length-1?t=0:(t=a+1,R[n].disabled&&t--);break;case"ArrowUp":0===a?t=P.length-1:(t=a-1,R[n].disabled&&t--)}var s=P[t];Z(s),j||N(s);break;case"Enter":j?N(b):k(!0);break;case"Space":k(!0);break;default:r=!1}r&&e.preventDefault()},onBlur:function(e){e.target.contains(e.relatedTarget)||k(!1)},children:[(0,f.jsx)("input",{ref:p,value:null===(t=R[O])||void 0===t?void 0:t.value,readOnly:!0,hidden:!0}),(0,f.jsxs)("div",{className:"toggle",onClick:(0,a.Z)(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:k(!j),Z(O),v.current.focus();case 3:case"end":return e.stop()}}),e)}))),children:[null===(i=R[O])||void 0===i?void 0:i.name,(0,f.jsx)(l.Z,{})]}),(0,f.jsx)("div",{className:"list",onMouseLeave:function(){Z(-1)},children:L})]}))}))},4273:function(e,r,t){t.r(r),t.d(r,{default:function(){return Z}});for(var n=t(6157),a=t(37),s=t(5168),c=t(8427),o=t.n(c),i=t(5474),u=t(3285),l=t(895),d=t(2723),h=t(139),f=t(2523),p=t(9386),v=t(57),m=t(5635),x=(t(2481),t(1394)),g=[],b=0;b<200;b++)g.push({id:b,loading:!0});function Z(e){var r=(0,i.useState)(g),c=(0,s.Z)(r,2),b=c[0],Z=c[1],w=(0,i.useRef)(),y=(0,i.useState)(),j=(0,s.Z)(y,2),k=j[0],N=j[1],A=(0,f.r)("games category ".concat(e.id," settings"),(function(){return{sort:"Most Played"}})),S=(0,s.Z)(A,2),C=S[0],M=S[1];return(0,i.useEffect)((function(){Z(g);var r=new AbortController;return(0,a.Z)(o().mark((function t(){var n,a,s,c;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=new l._(u.YA,r.signal),a=!1,t.t0=C.sort,t.next="Least Played"===t.t0?5:"Most Played"===t.t0?6:"Least Favorites"===t.t0?8:"Most Favorites"===t.t0?9:"Name (Z-A)"===t.t0?11:"Name (A-Z)"===t.t0?12:14;break;case 5:a=!0;case 6:return s="plays",t.abrupt("break",16);case 8:a=!0;case 9:return s="favorites",t.abrupt("break",16);case 11:a=!0;case 12:return s="name",t.abrupt("break",16);case 14:return console.warn("Unknown sort",C.sort),t.abrupt("break",16);case 16:return t.prev=16,w.current="Unable to fetch the category data.",t.next=20,n.category({category:e.category,sort:s,leastGreatest:a});case 20:c=t.sent,w.current=void 0,Z(c),t.next=28;break;case 25:t.prev=25,t.t1=t.catch(16),"The operation was aborted"!==t.t1.message&&"The user aborted a request."!==t.t1.message&&(console.error(t.t1),N(t.t1));case 28:case"end":return t.stop()}}),t,null,[[16,25]])})))(),function(){return r.abort()}}),[e.category,e.id,C.sort]),k?(0,x.jsxs)("main",{className:"error",children:[(0,x.jsxs)("span",{children:["An error occured when loading the category:",(0,x.jsx)("br",{}),(0,x.jsx)("pre",{children:w.current||k.toString()})]}),(0,x.jsxs)("p",{children:["Try again by clicking"," ",(0,x.jsx)("a",{href:"i:",onClick:function(e){e.preventDefault(),t.g.location.reload()},children:"here"}),".",(0,x.jsx)("br",{}),"If this problem still occurs, check"," ",(0,x.jsx)(d.rU,{className:"theme-link",to:(0,p.Z)("/","faq"),target:"_parent",children:"Support"})," ","or"," ",(0,x.jsx)(d.rU,{className:"theme-link",to:(0,p.Z)("/","contact"),target:"_parent",children:"Contact Us"}),"."]})]}):(0,x.jsxs)("main",{className:"theatre-category",children:[(0,x.jsx)(m.Z,{category:e.category,placeholder:e.placeholder}),(0,x.jsxs)("section",{children:[(0,x.jsxs)("div",{className:"name",children:[(0,x.jsx)("h1",{children:(0,x.jsx)(v.mj,{ellipsis:!0,children:e.name})}),(0,x.jsxs)(h.NB,{className:"sort",defaultValue:C.sort,style:{width:145,flex:"none"},onChange:function(e){M((0,n.Z)((0,n.Z)({},C),{},{sort:e.target.value}))},children:[(0,x.jsx)("option",{value:"Most Played",children:"Most Played"}),(0,x.jsx)("option",{value:"Least Played",children:"Least Played"}),(0,x.jsx)("option",{value:"Name (A-Z)",children:"Name (A-Z)"}),(0,x.jsx)("option",{value:"Name (Z-A)",children:"Name (Z-A)"})]})]}),(0,x.jsx)(l.s,{className:"items",loading:200,items:b})]})]})}},5635:function(e,r,t){t.d(r,{Z:function(){return g}});var n=t(37),a=t(5168),s=t(8427),c=t.n(s),o=t(139),i=t(3650),u=t(5474),l=t(2723),d=t(8178),h=t(895),f=t(3285),p=t(5120),v=t(9386),m=t(57),x=t(1394);function g(e){var r=(0,d.s0)(),t=(0,u.useRef)(),s=(0,u.useState)([]),g=(0,a.Z)(s,2),b=g[0],Z=g[1],w=(0,u.useState)(-1),y=(0,a.Z)(w,2),j=y[0],k=y[1],N=(0,u.useState)(!1),A=(0,a.Z)(N,2),S=A[0],C=A[1],M=(0,u.useRef)(),U=(0,u.useRef)();function L(e){return R.apply(this,arguments)}function R(){return(R=(0,n.Z)(c().mark((function r(t){var n,a;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return void 0!==M.current&&M.current.abort(),M.current=new AbortController,n=new h._(f.YA,M.current.signal),r.prev=3,r.next=6,n.category({sort:"search",search:t,limit:8,category:e.category});case 6:a=r.sent,Z(a),r.next=13;break;case 10:r.prev=10,r.t0=r.catch(3),"The operation was aborted"!==r.t0.message&&"The user aborted a request."!==r.t0.message&&console.error(r.t0);case 13:case"end":return r.stop()}}),r,null,[[3,10]])})))).apply(this,arguments)}var P=S&&0!==b.length,_=[];if(P)for(var D=function(e){var r=b[e];e===j&&["option"].push("hover"),_.push((0,x.jsxs)(l.rU,{tabIndex:0,onClick:function(){return C(!1)},onMouseOver:function(){return k(e)},to:"".concat((0,v.Z)("/theatre/","player"),"?id=").concat(r.id),className:(0,p.Z)("option",e===j&&"hover"),children:[(0,x.jsx)("div",{className:"name",children:(0,x.jsx)(m.mj,{ellipsis:!0,children:r.name})}),(0,x.jsx)("div",{className:"category",children:void 0})]},r.id))},E=0;E<b.length;E++)D(E);return(0,x.jsxs)("div",{className:"theatre-search-bar","data-focused":Number(S),"data-suggested":Number(P),ref:U,onBlur:function(e){U.current.contains(e.relatedTarget)||C(!1)},children:[(0,x.jsxs)(o.M8,{children:[(0,x.jsx)(i.Z,{className:"icon"}),(0,x.jsx)("input",{ref:t,type:"text",className:"thin-pad-left",placeholder:e.placeholder,onFocus:function(e){C(!0),k(-1),L(e.target.value)},onClick:function(e){C(!0),k(-1),L(e.target.value)},onKeyDown:function(e){var n=!0;switch(e.code){case"Escape":C(!1);break;case"ArrowDown":case"ArrowUp":var a,s=j;switch(e.code){case"ArrowDown":a=s>=b.length-1?0:s+1;break;case"ArrowUp":a=s<=0?b.length-1:s-1}k(a);break;case"Enter":var c=b[j];t.current.blur(),C(!1),r("".concat((0,v.Z)("/theatre/","player"),"?id=").concat(c.id));break;default:n=!1}n&&e.preventDefault()},onChange:function(e){L(e.target.value),k(-1)}})]}),(0,x.jsx)("div",{className:"suggested",onMouseLeave:function(){k(-1)},children:_})]})}},8828:function(e,r,t){var n=t(9703),a=t(1394);r.Z=(0,n.Z)((0,a.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore")},3650:function(e,r,t){var n=t(9703),a=t(1394);r.Z=(0,n.Z)((0,a.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search")},2481:function(){}}]);
//# sourceMappingURL=273.95b0fabd.chunk.js.map