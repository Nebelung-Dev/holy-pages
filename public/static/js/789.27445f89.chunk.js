"use strict";(self.webpackChunkholyunblocker_website=self.webpackChunkholyunblocker_website||[]).push([[789],{895:function(e,t,r){r.d(t,{_:function(){return w},s:function(){return b}});var n=r(7567),a=r(9405),s=r(5168),c=r(6157),o=r(37),u=r(9592),i=r(6931),l=r(8427),h=r.n(l),d=r(5474),f=r(2723),m=r(57),p=r(9386),v=r(1394),x=["items"],w=function(){function e(t,r){(0,u.Z)(this,e),this.server=t,this.signal=r}return(0,i.Z)(e,[{key:"fetch",value:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){var e=(0,o.Z)(h().mark((function e(t){var r,n=arguments;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.length>1&&void 0!==n[1]?n[1]:{},e.next=3,fetch(new URL(t,this.server),(0,c.Z)((0,c.Z)({},r),{},{signal:this.signal}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}())},{key:"game",value:function(){var e=(0,o.Z)(h().mark((function e(t){var r,n;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetch("./games/".concat(t,"/"));case 2:return r=e.sent,e.next=5,r.json();case 5:if(n=e.sent,r.ok){e.next=8;break}throw new Error(n.message||n.error);case 8:return e.abrupt("return",n);case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"game_plays",value:function(){var e=(0,o.Z)(h().mark((function e(t,r){var n,a;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetch("./games/".concat(t,"/plays?")+new URLSearchParams({token:r}),{method:"PUT"});case 2:return n=e.sent,e.next=5,n.json();case 5:if(a=e.sent,n.ok){e.next=8;break}throw new Error(a.message||a.error);case 8:return e.abrupt("return",a);case 9:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"sort_params",value:function(e){for(var t in e)switch(typeof e[t]){case"undefined":case"object":delete e[t]}return e}},{key:"category",value:function(){var e=(0,o.Z)(h().mark((function e(t){var r,n;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetch("./games/?"+new URLSearchParams(this.sort_params(t)));case 2:return r=e.sent,e.next=5,r.json();case 5:if(n=e.sent,r.ok){e.next=8;break}throw new Error(n.message||n.error);case 8:return e.abrupt("return",n);case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}();function j(e){var t=(0,d.useState)(!1),r=(0,s.Z)(t,2),n=r[0],a=r[1];return(0,v.jsxs)(f.rU,{className:"item",to:"".concat((0,p.Z)("/theatre/","player"),"?id=").concat(e.id),children:[(0,v.jsx)("div",{className:"thumbnail","data-loaded":Number(n),children:(0,v.jsx)("img",{alt:"",loading:"lazy",onLoad:function(){return a(!0)},src:"/thumbnails/".concat(e.id,".webp")})}),(0,v.jsx)("div",{className:"name",children:(0,v.jsx)(m.mj,{ellipsis:!0,children:e.name})})]})}function y(){return(0,v.jsxs)("div",{className:"item loading",children:[(0,v.jsx)("div",{className:"thumbnail"}),(0,v.jsx)("div",{className:"name"})]})}function b(e){var t,r=e.items,s=(0,a.Z)(e,x),o=[],u=(0,n.Z)(r);try{for(u.s();!(t=u.n()).done;){var i=t.value;i.loading?o.push((0,v.jsx)(y,{id:i.id},i.id)):o.push((0,v.jsx)(j,{id:i.id,name:i.name},i.id))}}catch(l){u.e(l)}finally{u.f()}return(0,v.jsx)("div",(0,c.Z)((0,c.Z)({},s),{},{children:o}))}},6290:function(e,t,r){r.d(t,{Z:function(){return h}});var n=r(37),a=r(9592),s=r(6931),c=r(8427),o=r.n(c),u=r(3285),i=r(9386),l=function(){function e(t){(0,a.Z)(this,e),this.server=t}return(0,s.Z)(e,[{key:"compat",value:function(){var e=(0,n.Z)(o().mark((function e(t){var r,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(new URL("./compat/".concat(t,"/"),this.server));case 2:return r=e.sent,e.next=5,r.json();case 5:if(n=e.sent,r.ok){e.next=8;break}throw new Error(n.message||n.error);case 8:return e.abrupt("return",n);case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"sort_params",value:function(e){for(var t in e)switch(typeof e[t]){case"undefined":case"object":delete e[t]}return e}},{key:"category",value:function(){var e=(0,n.Z)(o().mark((function e(t,r){var n,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(new URL("./games/?"+new URLSearchParams(this.sort_params(t)),this.server),{signal:r});case 2:return n=e.sent,e.next=5,n.json();case 5:if(a=e.sent,n.ok){e.next=8;break}throw new Error(a.message||a.error);case 8:return e.abrupt("return",a);case 9:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()}]),e}();function h(e,t){return d.apply(this,arguments)}function d(){return(d=(0,n.Z)(o().mark((function e(t,r){var n,a,s,c;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("automatic"!==r){e.next=12;break}return n=new URL(t),a=n.host,s=new l(u.YA),e.prev=3,e.next=6,s.compat(a);case 6:r=e.sent.proxy,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(3),r=u.nY;case 12:e.t1=r,e.next="stomp"===e.t1?15:"ultraviolet"===e.t1?17:(e.t1,19);break;case 15:return c=(0,i.Z)("/compat/","stomp"),e.abrupt("break",21);case 17:return c=(0,i.Z)("/compat/","ultraviolet"),e.abrupt("break",21);case 19:return c=(0,i.Z)("/compat/","rammerhead"),e.abrupt("break",21);case 21:return e.abrupt("return","".concat(c,"#").concat(t));case 22:case"end":return e.stop()}}),e,null,[[3,9]])})))).apply(this,arguments)}},6789:function(e,t,r){r.r(t),r.d(t,{default:function(){return U}});var n=r(7567),a=r(6157),s=r(5168),c=r(37),o=r(8427),u=r.n(o),i=r(5474),l=r(57),h=r(3285),d=r(6290),f=r(895),m=r(9703),p=r(1394),v=(0,m.Z)((0,p.jsx)("path",{d:"m7 14 5-5 5 5z"}),"ArrowDropUp"),x=(0,m.Z)((0,p.jsx)("path",{d:"m14 7-5 5 5 5V7z"}),"ArrowLeft"),w=(0,m.Z)((0,p.jsx)("path",{d:"m7 10 5 5 5-5z"}),"ArrowDropDown"),j=(0,m.Z)((0,p.jsx)("path",{d:"m10 17 5-5-5-5v10z"}),"ArrowRight"),y=(0,m.Z)((0,p.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),b=(0,m.Z)((0,p.jsx)("path",{d:"M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-10 7H8v3H6v-3H3v-2h3V8h2v3h3v2zm4.5 2c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4-3c-.83 0-1.5-.67-1.5-1.5S18.67 9 19.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"}),"VideogameAsset"),k=(0,m.Z)((0,p.jsx)("path",{d:"M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star"),g=(0,m.Z)((0,p.jsx)("path",{d:"m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"}),"StarBorder"),Z=(0,m.Z)((0,p.jsx)("path",{d:"M23 18V6c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2zM8.5 12.5l2.5 3.01L14.5 11l4.5 6H5l3.5-4.5z"}),"Panorama"),N=r(8435),L=r(42),S=r(9386);function z(e,t,r){return E.apply(this,arguments)}function E(){return(E=(0,c.Z)(u().mark((function e(t,r,n){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=r,e.next="proxy"===e.t0?3:"embed"===e.t0?6:"flash"===e.t0?7:"emulator"===e.t0||"emulator.gba"===e.t0||"emulator.nes"===e.t0||"emulator.genesis"===e.t0?8:9;break;case 3:return e.next=5,(0,d.Z)(t,n);case 5:return e.abrupt("return",e.sent);case 6:return e.abrupt("return",t);case 7:return e.abrupt("return","".concat((0,S.Z)("/compat/","flash"),"#").concat(t," "));case 8:return e.abrupt("return",new URL("./html5/webretro/?"+new URLSearchParams({rom:t,core:"autodetect"}),h.Hq).toString());case 9:throw new TypeError("Unrecognized target: ".concat(r));case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function U(e){var t=(0,i.useState)((function(){return e.layout.current.settings.favorite_games.includes(e.id)})),r=(0,s.Z)(t,2),o=r[0],d=r[1],m=(0,i.useState)(!1),S=(0,s.Z)(m,2),E=S[0],U=S[1],_=(0,i.useState)(!1),R=(0,s.Z)(_,2),A=R[0],C=R[1],H=(0,i.useState)(),M=(0,s.Z)(H,2),V=M[0],D=M[1],P=(0,i.useRef)(),F=(0,i.useState)(),T=(0,s.Z)(F,2),q=T[0],W=T[1],Y=(0,i.useRef)(),B=(0,i.useRef)(),I=(0,i.useState)(),O=(0,s.Z)(I,2),G=O[0],J=O[1],K=(0,i.useRef)(),Q=(0,i.useState)((function(){return e.layout.current.settings.seen_games.includes(e.id)})),X=(0,s.Z)(Q,2),$=X[0],ee=X[1];function te(){Y.current&&(Y.current.contentWindow.focus(),document.activeElement&&!Y.current.contains(document.activeElement)&&(document.activeElement.blur(),document.activeElement.dispatchEvent(new Event("blur"))))}if((0,i.useEffect)((function(){var t=new AbortController;function r(e){return n.apply(this,arguments)}function n(){return n=(0,c.Z)(u().mark((function t(r){var n,s;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=e.layout.current.settings.seen_games,r?n.push(e.id):(s=n.indexOf(e.id),n.splice(s,1)),e.layout.current.set_settings((0,a.Z)((0,a.Z)({},e.layout.current.settings),{},{seen_games:n})),ee(r);case 4:case"end":return t.stop()}}),t)}))),n.apply(this,arguments)}return(0,c.Z)(u().mark((function n(){var a,s,c;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=new f._(h.YA,t.signal),n.prev=1,P.current="Unable to fetch game info",n.next=5,a.game(e.id);case 5:return s=n.sent,P.current=void 0,P.current="Unable to resolve game location",n.next=10,z(new URL(s.src,h.Hq).toString(),s.type,e.layout.current.settings.proxy);case 10:if(c=n.sent,P.current=void 0,W(s),J(c),$){n.next=20;break}return P.current="Unable to update plays",n.next=18,a.game_plays(e.id);case 18:r(!0),P.current=void 0;case 20:n.next=27;break;case 22:return n.prev=22,n.t0=n.catch(1),console.error(n.t0),D(n.t0),n.abrupt("return");case 27:case"end":return n.stop()}}),n,null,[[1,22]])})))(),function(){t.abort()}}),[$,e.id,e.layout]),(0,i.useEffect)((function(){return window.addEventListener("focus",te),te(),function(){window.removeEventListener("focus",te)}}),[q]),V)return(0,p.jsxs)("main",{className:"error",children:[(0,p.jsxs)("p",{children:["An error occurreds when loading the ",(0,p.jsx)(l.mj,{children:"game"}),":"]}),(0,p.jsx)("pre",{children:(0,p.jsx)(l.mj,{children:P.current||V.toString()})})]});if(!q)return(0,p.jsx)("main",{children:(0,p.jsxs)("span",{children:["Fetching ",(0,p.jsx)(l.mj,{children:"game"})," info..."]})});var re,ne=[],ae=(0,n.Z)(q.controls);try{for(ae.s();!(re=ae.n()).done;){var se,ce=re.value,oe=[],ue=(0,n.Z)(ce.keys);try{for(ue.s();!(se=ue.n()).done;){var ie=se.value;switch(ie){case"arrows":oe.push((0,p.jsxs)("div",{className:"move",children:[(0,p.jsx)(v,{className:"control-key"}),(0,p.jsx)(x,{className:"control-key"}),(0,p.jsx)(w,{className:"control-key"}),(0,p.jsx)(j,{className:"control-key"})]},ie));break;case"wasd":oe.push((0,p.jsxs)("div",{className:"move",children:[(0,p.jsx)("div",{className:"control-key",children:"W"}),(0,p.jsx)("div",{className:"control-key",children:"A"}),(0,p.jsx)("div",{className:"control-key",children:"S"}),(0,p.jsx)("div",{className:"control-key",children:"D"})]},ie));break;default:oe.push((0,p.jsx)("div",{className:"control-key key-".concat(ie),children:ie},ie))}}}catch(le){ue.e(le)}finally{ue.f()}ne.push((0,p.jsxs)("div",{className:"control",children:[(0,p.jsx)("div",{className:"visuals",children:oe}),(0,p.jsx)("span",{className:"label",children:ce.label})]},ce.label))}}catch(le){ae.e(le)}finally{ae.f()}return(0,p.jsxs)("main",{className:"theatre-player","data-panorama":Number(E),"data-controls":Number(A),children:[(0,p.jsxs)("div",{className:"frame",children:[(0,p.jsx)("iframe",{ref:Y,title:"Embed",onLoad:function(){Y.current.contentWindow.addEventListener("keydown",(function(e){switch(e.code){case"Space":case"ArrowUp":case"ArrowDown":case"ArrowLeft":case"ArrowRight":e.preventDefault()}}))},onClick:te,onFocus:te,src:G}),(0,p.jsxs)("div",{tabIndex:0,className:"controls",ref:K,onBlur:function(e){e.target.contains(e.relatedTarget)||B.current.contains(e.relatedTarget)||C(!1)},children:[(0,p.jsx)(y,{className:"close",onClick:function(){return C(!1)}}),(0,p.jsx)("div",{className:"controls",children:ne})]})]}),(0,p.jsxs)("div",{className:"title",children:[(0,p.jsx)("h3",{className:"name",children:(0,p.jsx)(l.mj,{children:q.name})}),(0,p.jsx)("div",{className:"shift-right"}),(0,p.jsx)("div",{className:"button",onClick:function(){te(),Y.current.requestFullscreen()},children:(0,p.jsx)(N.Z,{})}),0!==ne.length&&(0,p.jsx)("div",{className:"button",tabIndex:0,ref:B,onClick:(0,c.Z)(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:C(!A),K.current.focus();case 2:case"end":return e.stop()}}),e)}))),children:(0,p.jsx)(b,{})}),(0,p.jsx)("div",{className:"button",onClick:function(){var t=e.layout.current.settings.favorite_games,r=t.indexOf(e.id);-1===r?t.push(e.id):t.splice(r,1),e.layout.current.set_settings((0,a.Z)((0,a.Z)({},e.layout.current.settings),{},{favorite_games:t})),d(!0)},children:o?(0,p.jsx)(k,{}):(0,p.jsx)(g,{})}),(0,p.jsx)("div",{className:"button",onClick:(0,c.Z)(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:U(!E),E||te();case 2:case"end":return e.stop()}}),e)}))),children:E?(0,p.jsx)(L.Z,{}):(0,p.jsx)(Z,{})})]})]})}},42:function(e,t,r){var n=r(9703),a=r(1394);t.Z=(0,n.Z)((0,a.jsx)("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"ChevronLeft")},8435:function(e,t,r){var n=r(9703),a=r(1394);t.Z=(0,n.Z)((0,a.jsx)("path",{d:"M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"}),"Fullscreen")}}]);
//# sourceMappingURL=789.27445f89.chunk.js.map