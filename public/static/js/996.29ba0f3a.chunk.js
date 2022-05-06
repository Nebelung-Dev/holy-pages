/*! For license information please see 996.29ba0f3a.chunk.js.LICENSE.txt */
(self.webpackChunkholyunblocker_website=self.webpackChunkholyunblocker_website||[]).push([[996],{4383:function(e){var t={utf8:{stringToBytes:function(e){return t.bin.stringToBytes(unescape(encodeURIComponent(e)))},bytesToString:function(e){return decodeURIComponent(escape(t.bin.bytesToString(e)))}},bin:{stringToBytes:function(e){for(var t=[],r=0;r<e.length;r++)t.push(255&e.charCodeAt(r));return t},bytesToString:function(e){for(var t=[],r=0;r<e.length;r++)t.push(String.fromCharCode(e[r]));return t.join("")}}};e.exports=t},2358:function(e){!function(){var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",r={rotl:function(e,t){return e<<t|e>>>32-t},rotr:function(e,t){return e<<32-t|e>>>t},endian:function(e){if(e.constructor==Number)return 16711935&r.rotl(e,8)|4278255360&r.rotl(e,24);for(var t=0;t<e.length;t++)e[t]=r.endian(e[t]);return e},randomBytes:function(e){for(var t=[];e>0;e--)t.push(Math.floor(256*Math.random()));return t},bytesToWords:function(e){for(var t=[],r=0,n=0;r<e.length;r++,n+=8)t[n>>>5]|=e[r]<<24-n%32;return t},wordsToBytes:function(e){for(var t=[],r=0;r<32*e.length;r+=8)t.push(e[r>>>5]>>>24-r%32&255);return t},bytesToHex:function(e){for(var t=[],r=0;r<e.length;r++)t.push((e[r]>>>4).toString(16)),t.push((15&e[r]).toString(16));return t.join("")},hexToBytes:function(e){for(var t=[],r=0;r<e.length;r+=2)t.push(parseInt(e.substr(r,2),16));return t},bytesToBase64:function(e){for(var r=[],n=0;n<e.length;n+=3)for(var s=e[n]<<16|e[n+1]<<8|e[n+2],a=0;a<4;a++)8*n+6*a<=8*e.length?r.push(t.charAt(s>>>6*(3-a)&63)):r.push("=");return r.join("")},base64ToBytes:function(e){e=e.replace(/[^A-Z0-9+\/]/gi,"");for(var r=[],n=0,s=0;n<e.length;s=++n%4)0!=s&&r.push((t.indexOf(e.charAt(n-1))&Math.pow(2,-2*s+8)-1)<<2*s|t.indexOf(e.charAt(n))>>>6-2*s);return r}};e.exports=r}()},5586:function(e){function t(e){return!!e.constructor&&"function"===typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}e.exports=function(e){return null!=e&&(t(e)||function(e){return"function"===typeof e.readFloatLE&&"function"===typeof e.slice&&t(e.slice(0,0))}(e)||!!e._isBuffer)}},3329:function(e,t,r){!function(){var t=r(2358),n=r(4383).utf8,s=r(5586),a=r(4383).bin,o=function e(r,o){r.constructor==String?r=o&&"binary"===o.encoding?a.stringToBytes(r):n.stringToBytes(r):s(r)?r=Array.prototype.slice.call(r,0):Array.isArray(r)||r.constructor===Uint8Array||(r=r.toString());for(var i=t.bytesToWords(r),c=8*r.length,u=1732584193,h=-271733879,f=-1732584194,l=271733878,p=0;p<i.length;p++)i[p]=16711935&(i[p]<<8|i[p]>>>24)|4278255360&(i[p]<<24|i[p]>>>8);i[c>>>5]|=128<<c%32,i[14+(c+64>>>9<<4)]=c;var d=e._ff,v=e._gg,w=e._hh,b=e._ii;for(p=0;p<i.length;p+=16){var y=u,x=h,g=f,m=l;u=d(u,h,f,l,i[p+0],7,-680876936),l=d(l,u,h,f,i[p+1],12,-389564586),f=d(f,l,u,h,i[p+2],17,606105819),h=d(h,f,l,u,i[p+3],22,-1044525330),u=d(u,h,f,l,i[p+4],7,-176418897),l=d(l,u,h,f,i[p+5],12,1200080426),f=d(f,l,u,h,i[p+6],17,-1473231341),h=d(h,f,l,u,i[p+7],22,-45705983),u=d(u,h,f,l,i[p+8],7,1770035416),l=d(l,u,h,f,i[p+9],12,-1958414417),f=d(f,l,u,h,i[p+10],17,-42063),h=d(h,f,l,u,i[p+11],22,-1990404162),u=d(u,h,f,l,i[p+12],7,1804603682),l=d(l,u,h,f,i[p+13],12,-40341101),f=d(f,l,u,h,i[p+14],17,-1502002290),u=v(u,h=d(h,f,l,u,i[p+15],22,1236535329),f,l,i[p+1],5,-165796510),l=v(l,u,h,f,i[p+6],9,-1069501632),f=v(f,l,u,h,i[p+11],14,643717713),h=v(h,f,l,u,i[p+0],20,-373897302),u=v(u,h,f,l,i[p+5],5,-701558691),l=v(l,u,h,f,i[p+10],9,38016083),f=v(f,l,u,h,i[p+15],14,-660478335),h=v(h,f,l,u,i[p+4],20,-405537848),u=v(u,h,f,l,i[p+9],5,568446438),l=v(l,u,h,f,i[p+14],9,-1019803690),f=v(f,l,u,h,i[p+3],14,-187363961),h=v(h,f,l,u,i[p+8],20,1163531501),u=v(u,h,f,l,i[p+13],5,-1444681467),l=v(l,u,h,f,i[p+2],9,-51403784),f=v(f,l,u,h,i[p+7],14,1735328473),u=w(u,h=v(h,f,l,u,i[p+12],20,-1926607734),f,l,i[p+5],4,-378558),l=w(l,u,h,f,i[p+8],11,-2022574463),f=w(f,l,u,h,i[p+11],16,1839030562),h=w(h,f,l,u,i[p+14],23,-35309556),u=w(u,h,f,l,i[p+1],4,-1530992060),l=w(l,u,h,f,i[p+4],11,1272893353),f=w(f,l,u,h,i[p+7],16,-155497632),h=w(h,f,l,u,i[p+10],23,-1094730640),u=w(u,h,f,l,i[p+13],4,681279174),l=w(l,u,h,f,i[p+0],11,-358537222),f=w(f,l,u,h,i[p+3],16,-722521979),h=w(h,f,l,u,i[p+6],23,76029189),u=w(u,h,f,l,i[p+9],4,-640364487),l=w(l,u,h,f,i[p+12],11,-421815835),f=w(f,l,u,h,i[p+15],16,530742520),u=b(u,h=w(h,f,l,u,i[p+2],23,-995338651),f,l,i[p+0],6,-198630844),l=b(l,u,h,f,i[p+7],10,1126891415),f=b(f,l,u,h,i[p+14],15,-1416354905),h=b(h,f,l,u,i[p+5],21,-57434055),u=b(u,h,f,l,i[p+12],6,1700485571),l=b(l,u,h,f,i[p+3],10,-1894986606),f=b(f,l,u,h,i[p+10],15,-1051523),h=b(h,f,l,u,i[p+1],21,-2054922799),u=b(u,h,f,l,i[p+8],6,1873313359),l=b(l,u,h,f,i[p+15],10,-30611744),f=b(f,l,u,h,i[p+6],15,-1560198380),h=b(h,f,l,u,i[p+13],21,1309151649),u=b(u,h,f,l,i[p+4],6,-145523070),l=b(l,u,h,f,i[p+11],10,-1120210379),f=b(f,l,u,h,i[p+2],15,718787259),h=b(h,f,l,u,i[p+9],21,-343485551),u=u+y>>>0,h=h+x>>>0,f=f+g>>>0,l=l+m>>>0}return t.endian([u,h,f,l])};o._ff=function(e,t,r,n,s,a,o){var i=e+(t&r|~t&n)+(s>>>0)+o;return(i<<a|i>>>32-a)+t},o._gg=function(e,t,r,n,s,a,o){var i=e+(t&n|r&~n)+(s>>>0)+o;return(i<<a|i>>>32-a)+t},o._hh=function(e,t,r,n,s,a,o){var i=e+(t^r^n)+(s>>>0)+o;return(i<<a|i>>>32-a)+t},o._ii=function(e,t,r,n,s,a,o){var i=e+(r^(t|~n))+(s>>>0)+o;return(i<<a|i>>>32-a)+t},o._blocksize=16,o._digestsize=16,e.exports=function(e,r){if(void 0===e||null===e)throw new Error("Illegal argument "+e);var n=t.wordsToBytes(o(e,r));return r&&r.asBytes?n:r&&r.asString?a.bytesToString(n):t.bytesToHex(n)}}()},5996:function(e,t,r){"use strict";r.d(t,{ZP:function(){return X}});var n=r(5861),s=r(5671),a=r(3144);function o(e,t){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.add(e)}var i=r(4942);function c(e,t,r){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return r}var u=r(7757),h=r(136),f=r(3668),l=r(1120),p=r(9611);var d=r(8814);function v(e,t,r){return v=(0,d.Z)()?Reflect.construct:function(e,t,r){var n=[null];n.push.apply(n,t);var s=new(Function.bind.apply(e,n));return r&&(0,p.Z)(s,r.prototype),s},v.apply(null,arguments)}function w(e){var t="function"===typeof Map?new Map:void 0;return w=function(e){if(null===e||(r=e,-1===Function.toString.call(r).indexOf("[native code]")))return e;var r;if("function"!==typeof e)throw new TypeError("Super expression must either be null or a function");if("undefined"!==typeof t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return v(e,arguments,(0,l.Z)(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),(0,p.Z)(n,e)},w(e)}var b,y=[101,204,205,304],x=[304],g=function(e){(0,h.Z)(r,e);var t=(0,f.Z)(r);function r(e,n){var a;return(0,s.Z)(this,r),(a=t.call(this,n.message)).status=e,a.body=n,a}return(0,a.Z)(r)}(w(Error)),m=function(){function e(t){(0,s.Z)(this,e),this.bare=t,this.version=this.constructor.version,this.base=new URL("./v".concat(this.version,"/"),this.bare.server)}return(0,a.Z)(e,[{key:"request",value:function(){var e=(0,n.Z)(u.mark((function e(){return u.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:throw new Error("Not implemented");case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"connect",value:function(){var e=(0,n.Z)(u.mark((function e(){return u.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:throw new Error("Not implemented");case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),e}(),k=r(885),Z=r(7762),T=r(7326),S="!#$%&'*+-.0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ^_`abcdefghijklmnopqrstuvwxyz|~";function E(e){e=e.toString();for(var t="",r=0;r<e.length;r++){var n=e[r];if(S.includes(n)&&!"%".includes(n))t+=n;else t+="%"+n.charCodeAt().toString(16).padStart(2,0)}return t}"object"===typeof self&&void 0!==self&&(b=self),"object"===typeof globalThis&&void 0!==globalThis?b=globalThis:"object"===typeof window&&void 0!==window&&(b=window);var _=b,j=_.fetch,R=_.WebSocket,B=new WeakSet,H=new WeakSet,L=function(e){(0,h.Z)(r,e);var t=(0,f.Z)(r);function r(){var e;(0,s.Z)(this,r);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return e=t.call.apply(t,[this].concat(a)),o((0,T.Z)(e),H),o((0,T.Z)(e),B),e.ws=new URL(e.base),e.http=new URL(e.base),e.new_meta=new URL("./ws-new-meta",e.base),e.get_meta=new URL("./ws-meta",e.base),"https:"===e.ws.protocol?e.ws.protocol="wss:":e.ws.protocol="ws:",e}return(0,a.Z)(r,[{key:"connect",value:function(){var e=(0,n.Z)(u.mark((function e(t,r,s,a,o){var i,c,h,f=this;return u.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j(this.new_meta,{method:"GET"});case 2:if((i=e.sent).ok){e.next=10;break}return e.t0=g,e.t1=i.status,e.next=8,i.json();case 8:throw e.t2=e.sent,(0,e.t0)(e.t1,e.t2);case 10:return e.next=12,i.text();case 12:return c=e.sent,(h=new R(this.ws,["bare",E(JSON.stringify({remote:{protocol:r,host:s,port:a,path:o},headers:t,forward_headers:["accept-encoding","accept-language","sec-websocket-extensions","sec-websocket-key","sec-websocket-version"],id:c}))])).meta=new Promise((function(e,t){h.addEventListener("open",(0,n.Z)(u.mark((function r(){var n;return u.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,j(f.get_meta,{headers:{"x-bare-id":c},method:"GET"});case 2:if((n=r.sent).ok){r.next=12;break}return r.t0=t,r.t1=g,r.t2=n.status,r.next=9,n.json();case 9:r.t3=r.sent,r.t4=new r.t1(r.t2,r.t3),(0,r.t0)(r.t4);case 12:return r.t5=e,r.next=15,n.json();case 15:r.t6=r.sent,(0,r.t5)(r.t6);case 17:case"end":return r.stop()}}),r)})))),h.addEventListener("error",t)})),e.abrupt("return",h);case 16:case"end":return e.stop()}}),e,this)})));return function(t,r,n,s,a){return e.apply(this,arguments)}}()},{key:"request",value:function(){var e=(0,n.Z)(u.mark((function e(t,r,n,s,a,o,i,h,f){var l,p,d,v,w,b,x,g,m,T,S,E,_,R,L,U,O,N;return u.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!s.startsWith("blob:")){e.next=6;break}return e.next=3,j("blob:".concat(location.origin).concat(i));case 3:return(l=e.sent).jsonHeaders=Object.fromEntries(l.headers.entries()),e.abrupt("return",l);case 6:if(p={},r instanceof Headers){d=(0,Z.Z)(r);try{for(d.s();!(v=d.n()).done;)w=(0,k.Z)(v.value,2),b=w[0],x=w[1],p[b]=x}catch(u){d.e(u)}finally{d.f()}}else for(g in r)p[g]=r[g];return m=["accept-encoding","accept-language"],T={credentials:"omit",method:t,signal:f},void 0!==n&&(T.body=n),S=new Request(this.http,T),c(this,H,W).call(this,S,s,a,i,o,p,m),e.next=15,j(S);case 15:return E=e.sent,e.next=18,c(this,B,A).call(this,E);case 18:return _=e.sent,R=_.status,L=_.statusText,U=_.headers,O=_.rawHeaders,(N=y.includes(R)?new Response(void 0,{status:R,statusText:L,headers:U}):new Response(E.body,{status:R,statusText:L,headers:U})).rawHeaders=O,e.abrupt("return",N);case 26:case"end":return e.stop()}}),e,this)})));return function(t,r,n,s,a,o,i,c,u){return e.apply(this,arguments)}}()}]),r}(m);function A(e){return U.apply(this,arguments)}function U(){return(U=(0,n.Z)(u.mark((function e(t){var r,n,s,a;return u.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.ok){e.next=7;break}return e.t0=g,e.t1=t.status,e.next=5,t.json();case 5:throw e.t2=e.sent,new e.t0(e.t1,e.t2);case 7:return r=parseInt(t.headers.get("x-bare-status")),n=t.headers.get("x-bare-status-text"),s=JSON.parse(t.headers.get("x-bare-headers")),a=new Headers(s),e.abrupt("return",{status:r,statusText:n,rawHeaders:s,headers:a});case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function W(e,t,r,n,s,a,o){e.headers.set("x-bare-protocol",t),e.headers.set("x-bare-host",r),e.headers.set("x-bare-path",n),e.headers.set("x-bare-port",s),e.headers.set("x-bare-headers",JSON.stringify(a)),e.headers.set("x-bare-forward-headers",JSON.stringify(o))}(0,i.Z)(L,"version",1);var O=3072;function N(e){if((e=new Headers(e)).has("x-bare-headers")){var t=e.get("x-bare-headers");if(t.length>O){e.delete("x-bare-headers");for(var r=0,n=0;n<t.length;n+=O){var s=t.slice(n,n+O),a=r++;e.set("x-bare-headers-".concat(a),";".concat(s))}}}return e}function q(e){var t="x-bare-headers";if((e=new Headers(e)).has("".concat(t,"-0"))){var r,n=[],s=(0,Z.Z)(e);try{for(s.s();!(r=s.n()).done;){var a=(0,k.Z)(r.value,2),o=a[0],i=a[1];if(o.startsWith(t)){if(!i.startsWith(";"))return{error:{code:"INVALID_BARE_HEADER",id:"request.headers.".concat(o),message:"Value didn't begin with semi-colon."}};i=i.slice(1),n[parseInt(o.slice(t.length+1))]=i,e.delete(o)}}}catch(c){s.e(c)}finally{s.f()}e.set(t,n.join(""))}return e}var C=r(3329),I=_.fetch,J=_.WebSocket,M=_.Request,G=new WeakSet,z=new WeakSet,F=function(e){(0,h.Z)(r,e);var t=(0,f.Z)(r);function r(){var e;(0,s.Z)(this,r);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return e=t.call.apply(t,[this].concat(a)),o((0,T.Z)(e),z),o((0,T.Z)(e),G),e.ws=new URL(e.base),e.http=new URL(e.base),e.new_meta=new URL("./ws-new-meta",e.base),e.get_meta=new URL("./ws-meta",e.base),"https:"===e.ws.protocol?e.ws.protocol="wss:":e.ws.protocol="ws:",e}return(0,a.Z)(r,[{key:"connect",value:function(){var e=(0,n.Z)(u.mark((function e(t,r,s,a,o){var i,h,f,l,p=this;return u.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=new M(this.new_meta),c(this,z,V).call(this,i.headers,r,s,o,a,t),e.next=4,I(i);case 4:if((h=e.sent).ok){e.next=12;break}return e.t0=g,e.t1=h.status,e.next=10,h.json();case 10:throw e.t2=e.sent,new e.t0(e.t1,e.t2);case 12:return e.next=14,h.text();case 14:return f=e.sent,(l=new J(this.ws,[E(f)])).meta=new Promise((function(e,t){l.addEventListener("open",(0,n.Z)(u.mark((function t(){var r;return u.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,I(p.get_meta,{headers:{"x-bare-id":f},method:"GET"});case 2:return r=t.sent,t.t0=e,t.next=6,c(p,G,P).call(p,r);case 6:t.t1=t.sent,(0,t.t0)(t.t1);case 8:case"end":return t.stop()}}),t)})))),l.addEventListener("error",t)})),e.abrupt("return",l);case 18:case"end":return e.stop()}}),e,this)})));return function(t,r,n,s,a){return e.apply(this,arguments)}}()},{key:"request",value:function(){var e=(0,n.Z)(u.mark((function e(t,r,n,s,a,o,i,h,f){var l,p,d,v,w,b,g,m,T,S,E,_,j,R,B,H,L;return u.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!s.startsWith("blob:")){e.next=6;break}return e.next=3,I("blob:".concat(location.origin).concat(i));case 3:return(l=e.sent).jsonHeaders=Object.fromEntries(l.headers.entries()),e.abrupt("return",l);case 6:if(p={},r instanceof Headers){d=(0,Z.Z)(r);try{for(d.s();!(v=d.n()).done;)w=(0,k.Z)(v.value,2),b=w[0],g=w[1],p[b]=g}catch(u){d.e(u)}finally{d.f()}}else for(m in r)p[m]=r[m];return T={credentials:"omit",method:t,signal:f},"only-if-cached"!==h&&(T.cache=h),void 0!==n&&(T.body=n),S=new M(this.http+"?cache="+C("".concat(s).concat(a).concat(o).concat(i)),T),c(this,z,V).call(this,S.headers,s,a,i,o,p),e.next=15,I(S);case 15:return E=e.sent,e.next=18,c(this,G,P).call(this,E);case 18:return _=e.sent,j=_.status,R=_.statusText,B=_.headers,H=_.rawHeaders,x.includes(j)&&(j=E.status,R=E.statusText),(L=y.includes(j)?new Response(void 0,{status:j,statusText:R,headers:B}):new Response(E.body,{status:j,statusText:R,headers:B})).rawHeaders=H,e.abrupt("return",L);case 27:case"end":return e.stop()}}),e,this)})));return function(t,r,n,s,a,o,i,c,u){return e.apply(this,arguments)}}()}]),r}(m);function P(e){return D.apply(this,arguments)}function D(){return(D=(0,n.Z)(u.mark((function e(t){var r,n,s,a,o;return u.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.ok){e.next=7;break}return e.t0=g,e.t1=t.status,e.next=5,t.json();case 5:throw e.t2=e.sent,new e.t0(e.t1,e.t2);case 7:if(!(r=q(t.headers)).error){e.next=10;break}throw new g(r.error);case 10:return n=parseInt(r.get("x-bare-status")),s=r.get("x-bare-status-text"),a=JSON.parse(r.get("x-bare-headers")),o=new Headers(a),e.abrupt("return",{status:n,statusText:s,headers:o,rawHeaders:a});case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function V(e,t,r,n,s,a){var o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:[],i=arguments.length>7&&void 0!==arguments[7]?arguments[7]:[],c=arguments.length>8&&void 0!==arguments[8]?arguments[8]:[];e.set("x-bare-protocol",t),e.set("x-bare-host",r),e.set("x-bare-path",n),e.set("x-bare-port",s),e.set("x-bare-headers",JSON.stringify(a));var u,h=(0,Z.Z)(o);try{for(h.s();!(u=h.n()).done;){var f=u.value;e.append("x-bare-forward-headers",f)}}catch(y){h.e(y)}finally{h.f()}var l,p=(0,Z.Z)(i);try{for(p.s();!(l=p.n()).done;){var d=l.value;e.append("x-bare-pass-headers",d)}}catch(y){p.e(y)}finally{p.f()}var v,w=(0,Z.Z)(c);try{for(w.s();!(v=w.n()).done;){var b=v.value;e.append("x-bare-pass-status",b)}}catch(y){w.e(y)}finally{w.f()}return N(e),e}(0,i.Z)(F,"version",2);var K=new WeakSet,Q=new WeakSet,X=function(){function e(t,r){(0,s.Z)(this,e),o(this,Q),o(this,K),(0,i.Z)(this,"ready",!1),this.server=new URL(t),"object"===typeof r&&c(this,K,Y).call(this,r)}return(0,a.Z)(e,[{key:"request",value:function(){var e=(0,n.Z)(u.mark((function e(t,r,n,s,a,o,i,h,f){return u.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c(this,Q,$).call(this);case 2:return e.abrupt("return",this.client.request(t,r,n,s,a,o,i,h,f));case 3:case"end":return e.stop()}}),e,this)})));return function(t,r,n,s,a,o,i,c,u){return e.apply(this,arguments)}}()},{key:"connect",value:function(){var e=(0,n.Z)(u.mark((function e(t,r,n,s,a){return u.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c(this,Q,$).call(this);case 2:return e.abrupt("return",this.client.connect(t,r,n,s,a));case 3:case"end":return e.stop()}}),e,this)})));return function(t,r,n,s,a){return e.apply(this,arguments)}}()},{key:"fetch",value:function(){var e=(0,n.Z)(u.mark((function e(t){var r,n,s,a,o,i,c,h=arguments;return u.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=h.length>1&&void 0!==h[1]?h[1]:{},t=new URL(t),n="string"===typeof r.method?r.method:"GET",void 0!==r.body&&null!==r.body&&(s=r.body),(a="object"===typeof r.headers&&null!==r.headers?r.headers:{}).host=t.host,o="string"===typeof r.cache?r.cache:"default",r.signal instanceof AbortSignal&&(i=r.signal),c=""===t.port?"https:"===t.protocol?"443":"80":t.port,e.abrupt("return",this.request(n,a,s,t.protocol,t.hostname,c,t.pathname+t.search,o,i));case 10:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}();function Y(e){for(var t=!1,r=0,n=[F,L];r<n.length;r++){var s=n[r];if(e.versions.includes("v".concat(s.version))){this.client=new s(this),t=!0;break}}if(!t)throw new Error("Unable to find compatible client version.");this.data=e,this.ready=!0}function $(){return ee.apply(this,arguments)}function ee(){return(ee=(0,n.Z)(u.mark((function e(){var t;return u.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!0!==this.ready){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,fetch(this.server);case 4:if((t=e.sent).ok){e.next=13;break}return e.t0=Error,e.t1="Unable to fetch Bare meta: ".concat(t.status," "),e.next=10,t.text();case 10:throw e.t2=e.sent,e.t3=e.t1.concat.call(e.t1,e.t2),new e.t0(e.t3);case 13:return e.t4=c(this,K,Y),e.t5=this,e.next=17,t.json();case 17:e.t6=e.sent,e.t4.call.call(e.t4,e.t5,e.t6);case 19:case"end":return e.stop()}}),e,this)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=996.29ba0f3a.chunk.js.map