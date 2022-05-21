"use strict";(self.webpackChunkholyunblocker_website=self.webpackChunkholyunblocker_website||[]).push([[503],{139:function(e,t,n){n.d(t,{M8:function(){return w},NB:function(){return k},UH:function(){return m},oQ:function(){return y}});var r=n(7567),a=n(37),c=n(5168),s=n(6157),o=n(9405),u=n(8427),i=n.n(u),l=n(8828),d=n(5474),f=n(5120),h=(n(3888),n(1394)),p=["children","className"],v=["children","className"],x=["children","className"],b=["className","onChange","children"];function m(e){var t=e.children,n=e.className,r=(0,o.Z)(e,p);return(0,h.jsx)("button",(0,s.Z)((0,s.Z)({type:"button",className:(0,f.Z)("theme-button",n)},r),{},{children:t}))}function w(e){var t=e.children,n=e.className,r=(0,o.Z)(e,v);return(0,h.jsx)("div",(0,s.Z)((0,s.Z)({className:(0,f.Z)("theme-input-bar",n)},r),{},{children:t}))}var y=(0,d.forwardRef)((function(e,t){var n=e.children,r=e.className,a=(0,o.Z)(e,x);return(0,h.jsx)("input",(0,s.Z)((0,s.Z)({ref:t,className:(0,f.Z)("theme-input",r)},a),{},{children:n}))})),k=(0,d.forwardRef)((function(e,t){var n,u,p=(0,d.useRef)(),v=(0,d.useRef)(),x=(0,d.useState)(-1),m=(0,c.Z)(x,2),w=m[0],y=m[1],k=(0,d.useState)(!1),j=(0,c.Z)(k,2),Z=j[0],g=j[1];function N(e){return C.apply(this,arguments)}function C(){return(C=(0,a.Z)(i().mark((function t(n){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,H(n);case 2:return t.next=4,g(!1);case 4:"function"===typeof e.onChange&&e.onChange({target:p.current});case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var R,U=e.className,L=(e.onChange,e.children),S=(0,o.Z)(e,b),M=[],D=[],P=[],A=0,E=(0,r.Z)(L);try{for(E.s();!(R=E.n()).done;){var B=R.value;if("option"===B.type){var O={name:B.props.children,value:B.props.value,disabled:"disabled"in B.props};O.value===(e.value||e.defaultValue)&&(A=D.length),O.disabled||P.push(D.length),D.push(O)}}}catch(V){E.e(V)}finally{E.f()}for(var _=(0,d.useState)(A),q=(0,c.Z)(_,2),F=q[0],H=q[1],K=function(e){var t=D[e];M.push((0,h.jsx)("div",{className:(0,f.Z)("plain-option",e===w&&"hover",t.disabled&&"disabled"),onClick:function(){t.disabled||N(e)},onMouseOver:function(){t.disabled||y(e)},children:t.name},e))},T=0;T<D.length;T++)K(T);return(0,h.jsxs)("div",(0,s.Z)((0,s.Z)({},S),{},{tabIndex:0,className:(0,f.Z)("theme-select",U),"data-open":Number(Z),ref:v,onKeyDown:function(e){var t=!0;switch(e.code){case"ArrowDown":case"ArrowUp":var n,r=w,a=P.indexOf([].concat(P).sort((function(e,t){return Math.abs(e-r)-Math.abs(t-r)}))[0]);switch(e.code){case"ArrowDown":a===P.length-1?n=0:(n=a+1,D[r].disabled&&n--);break;case"ArrowUp":0===a?n=P.length-1:(n=a-1,D[r].disabled&&n--)}var c=P[n];y(c),Z||N(c);break;case"Enter":Z?N(w):g(!0);break;case"Space":g(!0);break;default:t=!1}t&&e.preventDefault()},onBlur:function(e){e.target.contains(e.relatedTarget)||g(!1)},children:[(0,h.jsx)("input",{ref:p,value:null===(n=D[F])||void 0===n?void 0:n.value,readOnly:!0,hidden:!0}),(0,h.jsxs)("div",{className:"toggle",onClick:(0,a.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:g(!Z),y(F),v.current.focus();case 3:case"end":return e.stop()}}),e)}))),children:[null===(u=D[F])||void 0===u?void 0:u.name,(0,h.jsx)(l.Z,{})]}),(0,h.jsx)("div",{className:"list",onMouseLeave:function(){y(-1)},children:M})]}))}))},5503:function(e,t,n){n.r(t),n.d(t,{default:function(){return N}});var r=n(37),a=n(8427),c=n.n(a),s=n(5253),o=n(5474),u=n(4324),i=n(57),l=n(3285),d=n(9703),f=n(1394),h=(0,d.Z)((0,f.jsx)("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check"),p=n(139),v=new s.ZP(l.A4);function x(e){return b.apply(this,arguments)}function b(){return(b=(0,r.Z)(c().mark((function e(t){var n,r,a,s,o,u,i,l,d,f;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.fetch(t,{redirect:"follow"});case 2:if((n=e.sent).ok){e.next=5;break}throw new Error("Response was not OK. Got ".concat(n.status));case 5:return r=new DOMParser,e.t0=r,e.t1="",e.next=10,n.text();case 10:return e.t2=e.sent,e.t3=e.t1.concat.call(e.t1,e.t2),a=e.t0.parseFromString.call(e.t0,e.t3,"text/html"),(s=document.createElement("base")).href=t,a.head.append(s),i=a.querySelector('link[rel*="icon"]'),o=null!==i&&""!==i.href?i.href:new URL("/favicon.ico",t).toString(),e.next=20,v.fetch(o,{redirect:"follow"});case 20:return l=e.sent,e.t4=Z,e.t5=Blob,e.next=25,l.arrayBuffer();case 25:return e.t6=e.sent,e.t7=[e.t6],e.t8={type:l.headers.get("content-type")},e.t9=new e.t5(e.t7,e.t8),e.next=31,(0,e.t4)(e.t9);case 31:return o=e.sent,null!==(d=a.querySelector("title"))&&""!==d.textContent?u=d.textContent:(f=n.finalURL,u="".concat(f.host).concat(f.pathname).concat(f.search).concat(f.query)),e.abrupt("return",{icon:o,title:u,url:n.finalURL});case 35:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var m=/\s+/,w=/^\w+:/;function y(e){if(e.match(w))return e;if(e.includes(".")&&!e.match(m))return"http://".concat(e);throw new Error("Bad URL")}function k(e){return j.apply(this,arguments)}function j(){return(j=(0,r.Z)(c().mark((function e(t){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=t,e.next="about:blank"===e.t0?3:4;break;case 3:return e.abrupt("return",{title:"about:blank",icon:"none",url:"about:blank"});case 4:return e.next=6,x(t);case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Z(e){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new FileReader,e.abrupt("return",new Promise((function(e,r){n.addEventListener("load",(function(){return e(n.result)})),n.addEventListener("error",r),n.readAsDataURL(t)})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(e){var t=(0,o.useRef)();function n(){return a.apply(this,arguments)}function a(){return(a=(0,r.Z)(c().mark((function n(){var r,a,s,o;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e.layout.current.notifications.current.add((0,f.jsx)(u.P,{description:"Fetching...",type:"info"})),n.next=4,k(y(t.current.value));case 4:r=n.sent,a=r.title,s=r.icon,o=r.url,t.current.value=o,e.layout.current.set_cloak({title:a,icon:s,url:o}),e.layout.current.notifications.current.add((0,f.jsx)(u.P,{description:"Cloak set",type:"success"})),n.next=16;break;case 13:n.prev=13,n.t0=n.catch(0),e.layout.current.notifications.current.add((0,f.jsx)(u.P,{description:n.t0.message,type:"error"}));case 16:case"end":return n.stop()}}),n,null,[[0,13]])})))).apply(this,arguments)}return(0,f.jsxs)("section",{children:[(0,f.jsx)("div",{children:(0,f.jsx)(i.mj,{children:"Tab Cloaking allows you to disguise Holy Unblocker as any website such as your school's home page, new tab, etc."})}),(0,f.jsxs)("div",{children:[(0,f.jsxs)("span",{children:[(0,f.jsx)(i.mj,{children:"URL"}),":"]}),(0,f.jsx)("form",{onSubmit:function(e){e.preventDefault(),n()},children:(0,f.jsxs)(p.M8,{children:[(0,f.jsx)("input",{className:"thin-pad-right",defaultValue:e.layout.current.cloak.url,placeholder:"https://example.org/",ref:t}),(0,f.jsx)(h,{onClick:n,className:"button right"})]})})]}),(0,f.jsx)("div",{children:(0,f.jsx)(p.UH,{onClick:function(){e.layout.current.set_cloak({title:"",icon:"",url:""}),t.current.value="",e.layout.current.notifications.current.add((0,f.jsx)(u.P,{description:"Cloak reset",type:"info"}))},children:(0,f.jsx)(i.mj,{children:"Reset Cloak"})})})]})}}}]);
//# sourceMappingURL=503.308d9dc5.chunk.js.map