"use strict";(self.webpackChunkholyunblocker_website=self.webpackChunkholyunblocker_website||[]).push([[245],{139:function(e,n,t){t.d(n,{M8:function(){return x},NB:function(){return w},UH:function(){return b},oQ:function(){return g}});var a=t(7567),r=t(37),s=t(5168),c=t(6157),i=t(9405),u=t(8427),l=t.n(u),o=t(8828),d=t(5474),h=t(5120),f=(t(3888),t(1394)),p=["children","className"],v=["children","className"],m=["children","className"],Z=["className","onChange","children"];function b(e){var n=e.children,t=e.className,a=(0,i.Z)(e,p);return(0,f.jsx)("button",(0,c.Z)((0,c.Z)({type:"button",className:(0,h.Z)("theme-button",t)},a),{},{children:n}))}function x(e){var n=e.children,t=e.className,a=(0,i.Z)(e,v);return(0,f.jsx)("div",(0,c.Z)((0,c.Z)({className:(0,h.Z)("theme-input-bar",t)},a),{},{children:n}))}var g=(0,d.forwardRef)((function(e,n){var t=e.children,a=e.className,r=(0,i.Z)(e,m);return(0,f.jsx)("input",(0,c.Z)((0,c.Z)({ref:n,className:(0,h.Z)("theme-input",a)},r),{},{children:t}))})),w=(0,d.forwardRef)((function(e,n){var t,u,p=(0,d.useRef)(),v=(0,d.useRef)(),m=(0,d.useState)(-1),b=(0,s.Z)(m,2),x=b[0],g=b[1],w=(0,d.useState)(!1),N=(0,s.Z)(w,2),j=N[0],y=N[1];function k(e){return C.apply(this,arguments)}function C(){return(C=(0,r.Z)(l().mark((function n(t){return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,I(t);case 2:return n.next=4,y(!1);case 4:"function"===typeof e.onChange&&e.onChange({target:p.current});case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var M,D=e.className,A=(e.onChange,e.children),R=(0,i.Z)(e,Z),S=[],B=[],O=[],U=0,_=(0,a.Z)(A);try{for(_.s();!(M=_.n()).done;){var E=M.value;if("option"===E.type){var T={name:E.props.children,value:E.props.value,disabled:"disabled"in E.props};T.value===(e.value||e.defaultValue)&&(U=B.length),T.disabled||O.push(B.length),B.push(T)}}}catch(Q){_.e(Q)}finally{_.f()}for(var V=(0,d.useState)(U),z=(0,s.Z)(V,2),H=z[0],I=z[1],K=function(e){var n=B[e];S.push((0,f.jsx)("div",{className:(0,h.Z)("plain-option",e===x&&"hover",n.disabled&&"disabled"),onClick:function(){n.disabled||k(e)},onMouseOver:function(){n.disabled||g(e)},children:n.name},e))},L=0;L<B.length;L++)K(L);return(0,f.jsxs)("div",(0,c.Z)((0,c.Z)({},R),{},{tabIndex:0,className:(0,h.Z)("theme-select",D),"data-open":Number(j),ref:v,onKeyDown:function(e){var n=!0;switch(e.code){case"ArrowDown":case"ArrowUp":var t,a=x,r=O.indexOf([].concat(O).sort((function(e,n){return Math.abs(e-a)-Math.abs(n-a)}))[0]);switch(e.code){case"ArrowDown":r===O.length-1?t=0:(t=r+1,B[a].disabled&&t--);break;case"ArrowUp":0===r?t=O.length-1:(t=r-1,B[a].disabled&&t--)}var s=O[t];g(s),j||k(s);break;case"Enter":j?k(x):y(!0);break;case"Space":y(!0);break;default:n=!1}n&&e.preventDefault()},onBlur:function(e){e.target.contains(e.relatedTarget)||y(!1)},children:[(0,f.jsx)("input",{ref:p,value:null===(t=B[H])||void 0===t?void 0:t.value,readOnly:!0,hidden:!0}),(0,f.jsxs)("div",{className:"toggle",onClick:(0,r.Z)(l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:y(!j),g(H),v.current.focus();case 3:case"end":return e.stop()}}),e)}))),children:[null===(u=B[H])||void 0===u?void 0:u.name,(0,f.jsx)(o.Z,{})]}),(0,f.jsx)("div",{className:"list",onMouseLeave:function(){g(-1)},children:S})]}))}))},9245:function(e,n,t){t.r(n),t.d(n,{default:function(){return c}});var a=t(6157),r=t(139),s=t(1394);function c(e){return(0,s.jsx)("section",{children:(0,s.jsxs)("div",{children:[(0,s.jsx)("span",{children:"Theme:"}),(0,s.jsxs)(r.NB,{defaultValue:e.layout.current.settings.theme,onChange:function(n){e.layout.current.set_settings((0,a.Z)((0,a.Z)({},e.layout.current.settings),{},{theme:n.target.value}))},children:[(0,s.jsx)("option",{value:"day",children:"Day"}),(0,s.jsx)("option",{value:"night",children:"Night"})]})]})})}},8828:function(e,n,t){var a=t(9703),r=t(1394);n.Z=(0,a.Z)((0,r.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore")}}]);
//# sourceMappingURL=245.2663ac22.chunk.js.map