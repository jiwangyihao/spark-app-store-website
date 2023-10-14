function Ce(e,t){return function(){return e.apply(t,arguments)}}const{toString:Ze}=Object.prototype,{getPrototypeOf:ae}=Object,k=(e=>t=>{const r=Ze.call(t);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),O=e=>(e=e.toLowerCase(),t=>k(t)===e),M=e=>t=>typeof t===e,{isArray:P}=Array,C=M("undefined");function Ye(e){return e!==null&&!C(e)&&e.constructor!==null&&!C(e.constructor)&&E(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const _e=O("ArrayBuffer");function et(e){let t;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&_e(e.buffer),t}const tt=M("string"),E=M("function"),Le=M("number"),$=e=>e!==null&&typeof e=="object",rt=e=>e===!0||e===!1,F=e=>{if(k(e)!=="object")return!1;const t=ae(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},nt=O("Date"),st=O("File"),ot=O("Blob"),it=O("FileList"),at=e=>$(e)&&E(e.pipe),ct=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||E(e.append)&&((t=k(e))==="formdata"||t==="object"&&E(e.toString)&&e.toString()==="[object FormData]"))},ut=O("URLSearchParams"),lt=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function _(e,t,{allOwnKeys:r=!1}={}){if(e===null||typeof e=="undefined")return;let n,s;if(typeof e!="object"&&(e=[e]),P(e))for(n=0,s=e.length;n<s;n++)t.call(null,e[n],n,e);else{const o=r?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let u;for(n=0;n<i;n++)u=o[n],t.call(null,e[u],u,e)}}function De(e,t){t=t.toLowerCase();const r=Object.keys(e);let n=r.length,s;for(;n-- >0;)if(s=r[n],t===s.toLowerCase())return s;return null}const Ue=(()=>typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:global)(),Fe=e=>!C(e)&&e!==Ue;function X(){const{caseless:e}=Fe(this)&&this||{},t={},r=(n,s)=>{const o=e&&De(t,s)||s;F(t[o])&&F(n)?t[o]=X(t[o],n):F(n)?t[o]=X({},n):P(n)?t[o]=n.slice():t[o]=n};for(let n=0,s=arguments.length;n<s;n++)arguments[n]&&_(arguments[n],r);return t}const ft=(e,t,r,{allOwnKeys:n}={})=>(_(t,(s,o)=>{r&&E(s)?e[o]=Ce(s,r):e[o]=s},{allOwnKeys:n}),e),dt=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),ht=(e,t,r,n)=>{e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},pt=(e,t,r,n)=>{let s,o,i;const u={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!n||n(i,e,t))&&!u[i]&&(t[i]=e[i],u[i]=!0);e=r!==!1&&ae(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},mt=(e,t,r)=>{e=String(e),(r===void 0||r>e.length)&&(r=e.length),r-=t.length;const n=e.indexOf(t,r);return n!==-1&&n===r},yt=e=>{if(!e)return null;if(P(e))return e;let t=e.length;if(!Le(t))return null;const r=new Array(t);for(;t-- >0;)r[t]=e[t];return r},wt=(e=>t=>e&&t instanceof e)(typeof Uint8Array!="undefined"&&ae(Uint8Array)),bt=(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=n.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},St=(e,t)=>{let r;const n=[];for(;(r=e.exec(t))!==null;)n.push(r);return n},Et=O("HTMLFormElement"),gt=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(r,n,s){return n.toUpperCase()+s}),he=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype),Rt=O("RegExp"),Be=(e,t)=>{const r=Object.getOwnPropertyDescriptors(e),n={};_(r,(s,o)=>{let i;(i=t(s,o,e))!==!1&&(n[o]=i||s)}),Object.defineProperties(e,n)},Ot=e=>{Be(e,(t,r)=>{if(E(e)&&["arguments","caller","callee"].indexOf(r)!==-1)return!1;const n=e[r];if(!!E(n)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},At=(e,t)=>{const r={},n=s=>{s.forEach(o=>{r[o]=!0})};return P(e)?n(e):n(String(e).split(t)),r},xt=()=>{},Tt=(e,t)=>(e=+e,Number.isFinite(e)?e:t),V="abcdefghijklmnopqrstuvwxyz",pe="0123456789",je={DIGIT:pe,ALPHA:V,ALPHA_DIGIT:V+V.toUpperCase()+pe},Nt=(e=16,t=je.ALPHA_DIGIT)=>{let r="";const{length:n}=t;for(;e--;)r+=t[Math.random()*n|0];return r};function Pt(e){return!!(e&&E(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const vt=e=>{const t=new Array(10),r=(n,s)=>{if($(n)){if(t.indexOf(n)>=0)return;if(!("toJSON"in n)){t[s]=n;const o=P(n)?[]:{};return _(n,(i,u)=>{const f=r(i,s+1);!C(f)&&(o[u]=f)}),t[s]=void 0,o}}return n};return r(e,0)},Ct=O("AsyncFunction"),_t=e=>e&&($(e)||E(e))&&E(e.then)&&E(e.catch);var a={isArray:P,isArrayBuffer:_e,isBuffer:Ye,isFormData:ct,isArrayBufferView:et,isString:tt,isNumber:Le,isBoolean:rt,isObject:$,isPlainObject:F,isUndefined:C,isDate:nt,isFile:st,isBlob:ot,isRegExp:Rt,isFunction:E,isStream:at,isURLSearchParams:ut,isTypedArray:wt,isFileList:it,forEach:_,merge:X,extend:ft,trim:lt,stripBOM:dt,inherits:ht,toFlatObject:pt,kindOf:k,kindOfTest:O,endsWith:mt,toArray:yt,forEachEntry:bt,matchAll:St,isHTMLForm:Et,hasOwnProperty:he,hasOwnProp:he,reduceDescriptors:Be,freezeMethods:Ot,toObjectSet:At,toCamelCase:gt,noop:xt,toFiniteNumber:Tt,findKey:De,global:Ue,isContextDefined:Fe,ALPHABET:je,generateString:Nt,isSpecCompliantForm:Pt,toJSONObject:vt,isAsyncFn:Ct,isThenable:_t};function m(e,t,r,n,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),s&&(this.response=s)}a.inherits(m,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Ie=m.prototype,qe={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{qe[e]={value:e}});Object.defineProperties(m,qe);Object.defineProperty(Ie,"isAxiosError",{value:!0});m.from=(e,t,r,n,s,o)=>{const i=Object.create(Ie);return a.toFlatObject(e,i,function(f){return f!==Error.prototype},u=>u!=="isAxiosError"),m.call(i,e.message,t,r,n,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};var Lt=null;function Q(e){return a.isPlainObject(e)||a.isArray(e)}function He(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function me(e,t,r){return e?e.concat(t).map(function(s,o){return s=He(s),!r&&o?"["+s+"]":s}).join(r?".":""):t}function Dt(e){return a.isArray(e)&&!e.some(Q)}const Ut=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function z(e,t,r){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,r=a.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(p,S){return!a.isUndefined(S[p])});const n=r.metaTokens,s=r.visitor||c,o=r.dots,i=r.indexes,f=(r.Blob||typeof Blob!="undefined"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function d(l){if(l===null)return"";if(a.isDate(l))return l.toISOString();if(!f&&a.isBlob(l))throw new m("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(l)||a.isTypedArray(l)?f&&typeof Blob=="function"?new Blob([l]):Buffer.from(l):l}function c(l,p,S){let A=l;if(l&&!S&&typeof l=="object"){if(a.endsWith(p,"{}"))p=n?p:p.slice(0,-2),l=JSON.stringify(l);else if(a.isArray(l)&&Dt(l)||(a.isFileList(l)||a.endsWith(p,"[]"))&&(A=a.toArray(l)))return p=He(p),A.forEach(function(U,Qe){!(a.isUndefined(U)||U===null)&&t.append(i===!0?me([p],Qe,o):i===null?p:p+"[]",d(U))}),!1}return Q(l)?!0:(t.append(me(S,p,o),d(l)),!1)}const h=[],w=Object.assign(Ut,{defaultVisitor:c,convertValue:d,isVisitable:Q});function b(l,p){if(!a.isUndefined(l)){if(h.indexOf(l)!==-1)throw Error("Circular reference detected in "+p.join("."));h.push(l),a.forEach(l,function(A,g){(!(a.isUndefined(A)||A===null)&&s.call(t,A,a.isString(g)?g.trim():g,p,w))===!0&&b(A,p?p.concat(g):[g])}),h.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return b(e),t}function ye(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(n){return t[n]})}function ce(e,t){this._pairs=[],e&&z(e,this,t)}const ke=ce.prototype;ke.append=function(t,r){this._pairs.push([t,r])};ke.toString=function(t){const r=t?function(n){return t.call(this,n,ye)}:ye;return this._pairs.map(function(s){return r(s[0])+"="+r(s[1])},"").join("&")};function Ft(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Me(e,t,r){if(!t)return e;const n=r&&r.encode||Ft,s=r&&r.serialize;let o;if(s?o=s(t,r):o=a.isURLSearchParams(t)?t.toString():new ce(t,r).toString(n),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class Bt{constructor(){this.handlers=[]}use(t,r,n){return this.handlers.push({fulfilled:t,rejected:r,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(n){n!==null&&t(n)})}}var we=Bt,$e={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},jt=typeof URLSearchParams!="undefined"?URLSearchParams:ce,It=typeof FormData!="undefined"?FormData:null,qt=typeof Blob!="undefined"?Blob:null;const Ht=(()=>{let e;return typeof navigator!="undefined"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"})(),kt=(()=>typeof WorkerGlobalScope!="undefined"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")();var R={isBrowser:!0,classes:{URLSearchParams:jt,FormData:It,Blob:qt},isStandardBrowserEnv:Ht,isStandardBrowserWebWorkerEnv:kt,protocols:["http","https","file","blob","url","data"]};function Mt(e,t){return z(e,new R.classes.URLSearchParams,Object.assign({visitor:function(r,n,s,o){return R.isNode&&a.isBuffer(r)?(this.append(n,r.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function $t(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function zt(e){const t={},r=Object.keys(e);let n;const s=r.length;let o;for(n=0;n<s;n++)o=r[n],t[o]=e[o];return t}function ze(e){function t(r,n,s,o){let i=r[o++];const u=Number.isFinite(+i),f=o>=r.length;return i=!i&&a.isArray(s)?s.length:i,f?(a.hasOwnProp(s,i)?s[i]=[s[i],n]:s[i]=n,!u):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(r,n,s[i],o)&&a.isArray(s[i])&&(s[i]=zt(s[i])),!u)}if(a.isFormData(e)&&a.isFunction(e.entries)){const r={};return a.forEachEntry(e,(n,s)=>{t($t(n),s,r,0)}),r}return null}function Jt(e,t,r){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(n){if(n.name!=="SyntaxError")throw n}return(r||JSON.stringify)(e)}const ue={transitional:$e,adapter:["xhr","http"],transformRequest:[function(t,r){const n=r.getContentType()||"",s=n.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s&&s?JSON.stringify(ze(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let u;if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1)return Mt(t,this.formSerializer).toString();if((u=a.isFileList(t))||n.indexOf("multipart/form-data")>-1){const f=this.env&&this.env.FormData;return z(u?{"files[]":t}:t,f&&new f,this.formSerializer)}}return o||s?(r.setContentType("application/json",!1),Jt(t)):t}],transformResponse:[function(t){const r=this.transitional||ue.transitional,n=r&&r.forcedJSONParsing,s=this.responseType==="json";if(t&&a.isString(t)&&(n&&!this.responseType||s)){const i=!(r&&r.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(u){if(i)throw u.name==="SyntaxError"?m.from(u,m.ERR_BAD_RESPONSE,this,null,this.response):u}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:R.classes.FormData,Blob:R.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{ue.headers[e]={}});var le=ue;const Vt=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var Wt=e=>{const t={};let r,n,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),r=i.substring(0,s).trim().toLowerCase(),n=i.substring(s+1).trim(),!(!r||t[r]&&Vt[r])&&(r==="set-cookie"?t[r]?t[r].push(n):t[r]=[n]:t[r]=t[r]?t[r]+", "+n:n)}),t};const be=Symbol("internals");function v(e){return e&&String(e).trim().toLowerCase()}function B(e){return e===!1||e==null?e:a.isArray(e)?e.map(B):String(e)}function Kt(e){const t=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let n;for(;n=r.exec(e);)t[n[1]]=n[2];return t}const Gt=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function W(e,t,r,n,s){if(a.isFunction(n))return n.call(this,t,r);if(s&&(t=r),!!a.isString(t)){if(a.isString(n))return t.indexOf(n)!==-1;if(a.isRegExp(n))return n.test(t)}}function Xt(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,r,n)=>r.toUpperCase()+n)}function Qt(e,t){const r=a.toCamelCase(" "+t);["get","set","has"].forEach(n=>{Object.defineProperty(e,n+r,{value:function(s,o,i){return this[n].call(this,t,s,o,i)},configurable:!0})})}class J{constructor(t){t&&this.set(t)}set(t,r,n){const s=this;function o(u,f,d){const c=v(f);if(!c)throw new Error("header name must be a non-empty string");const h=a.findKey(s,c);(!h||s[h]===void 0||d===!0||d===void 0&&s[h]!==!1)&&(s[h||f]=B(u))}const i=(u,f)=>a.forEach(u,(d,c)=>o(d,c,f));return a.isPlainObject(t)||t instanceof this.constructor?i(t,r):a.isString(t)&&(t=t.trim())&&!Gt(t)?i(Wt(t),r):t!=null&&o(r,t,n),this}get(t,r){if(t=v(t),t){const n=a.findKey(this,t);if(n){const s=this[n];if(!r)return s;if(r===!0)return Kt(s);if(a.isFunction(r))return r.call(this,s,n);if(a.isRegExp(r))return r.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,r){if(t=v(t),t){const n=a.findKey(this,t);return!!(n&&this[n]!==void 0&&(!r||W(this,this[n],n,r)))}return!1}delete(t,r){const n=this;let s=!1;function o(i){if(i=v(i),i){const u=a.findKey(n,i);u&&(!r||W(n,n[u],u,r))&&(delete n[u],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(t){const r=Object.keys(this);let n=r.length,s=!1;for(;n--;){const o=r[n];(!t||W(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const r=this,n={};return a.forEach(this,(s,o)=>{const i=a.findKey(n,o);if(i){r[i]=B(s),delete r[o];return}const u=t?Xt(o):String(o).trim();u!==o&&delete r[o],r[u]=B(s),n[u]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const r=Object.create(null);return a.forEach(this,(n,s)=>{n!=null&&n!==!1&&(r[s]=t&&a.isArray(n)?n.join(", "):n)}),r}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,r])=>t+": "+r).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...r){const n=new this(t);return r.forEach(s=>n.set(s)),n}static accessor(t){const n=(this[be]=this[be]={accessors:{}}).accessors,s=this.prototype;function o(i){const u=v(i);n[u]||(Qt(s,i),n[u]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}}J.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(J.prototype,({value:e},t)=>{let r=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(n){this[r]=n}}});a.freezeMethods(J);var x=J;function K(e,t){const r=this||le,n=t||r,s=x.from(n.headers);let o=n.data;return a.forEach(e,function(u){o=u.call(r,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function Je(e){return!!(e&&e.__CANCEL__)}function L(e,t,r){m.call(this,e==null?"canceled":e,m.ERR_CANCELED,t,r),this.name="CanceledError"}a.inherits(L,m,{__CANCEL__:!0});function Zt(e,t,r){const n=r.config.validateStatus;!r.status||!n||n(r.status)?e(r):t(new m("Request failed with status code "+r.status,[m.ERR_BAD_REQUEST,m.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}var Yt=R.isStandardBrowserEnv?function(){return{write:function(r,n,s,o,i,u){const f=[];f.push(r+"="+encodeURIComponent(n)),a.isNumber(s)&&f.push("expires="+new Date(s).toGMTString()),a.isString(o)&&f.push("path="+o),a.isString(i)&&f.push("domain="+i),u===!0&&f.push("secure"),document.cookie=f.join("; ")},read:function(r){const n=document.cookie.match(new RegExp("(^|;\\s*)("+r+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove:function(r){this.write(r,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function er(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function tr(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Ve(e,t){return e&&!er(t)?tr(e,t):t}var rr=R.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");let n;function s(o){let i=o;return t&&(r.setAttribute("href",i),i=r.href),r.setAttribute("href",i),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:r.pathname.charAt(0)==="/"?r.pathname:"/"+r.pathname}}return n=s(window.location.href),function(i){const u=a.isString(i)?s(i):i;return u.protocol===n.protocol&&u.host===n.host}}():function(){return function(){return!0}}();function nr(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function sr(e,t){e=e||10;const r=new Array(e),n=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(f){const d=Date.now(),c=n[o];i||(i=d),r[s]=f,n[s]=d;let h=o,w=0;for(;h!==s;)w+=r[h++],h=h%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),d-i<t)return;const b=c&&d-c;return b?Math.round(w*1e3/b):void 0}}function Se(e,t){let r=0;const n=sr(50,250);return s=>{const o=s.loaded,i=s.lengthComputable?s.total:void 0,u=o-r,f=n(u),d=o<=i;r=o;const c={loaded:o,total:i,progress:i?o/i:void 0,bytes:u,rate:f||void 0,estimated:f&&i&&d?(i-o)/f:void 0,event:s};c[t?"download":"upload"]=!0,e(c)}}const or=typeof XMLHttpRequest!="undefined";var ir=or&&function(e){return new Promise(function(r,n){let s=e.data;const o=x.from(e.headers).normalize(),i=e.responseType;let u;function f(){e.cancelToken&&e.cancelToken.unsubscribe(u),e.signal&&e.signal.removeEventListener("abort",u)}let d;a.isFormData(s)&&(R.isStandardBrowserEnv||R.isStandardBrowserWebWorkerEnv?o.setContentType(!1):o.getContentType(/^\s*multipart\/form-data/)?a.isString(d=o.getContentType())&&o.setContentType(d.replace(/^\s*(multipart\/form-data);+/,"$1")):o.setContentType("multipart/form-data"));let c=new XMLHttpRequest;if(e.auth){const l=e.auth.username||"",p=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(l+":"+p))}const h=Ve(e.baseURL,e.url);c.open(e.method.toUpperCase(),Me(h,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function w(){if(!c)return;const l=x.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),S={data:!i||i==="text"||i==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:l,config:e,request:c};Zt(function(g){r(g),f()},function(g){n(g),f()},S),c=null}if("onloadend"in c?c.onloadend=w:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(w)},c.onabort=function(){!c||(n(new m("Request aborted",m.ECONNABORTED,e,c)),c=null)},c.onerror=function(){n(new m("Network Error",m.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let p=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const S=e.transitional||$e;e.timeoutErrorMessage&&(p=e.timeoutErrorMessage),n(new m(p,S.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,e,c)),c=null},R.isStandardBrowserEnv){const l=(e.withCredentials||rr(h))&&e.xsrfCookieName&&Yt.read(e.xsrfCookieName);l&&o.set(e.xsrfHeaderName,l)}s===void 0&&o.setContentType(null),"setRequestHeader"in c&&a.forEach(o.toJSON(),function(p,S){c.setRequestHeader(S,p)}),a.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),i&&i!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",Se(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",Se(e.onUploadProgress)),(e.cancelToken||e.signal)&&(u=l=>{!c||(n(!l||l.type?new L(null,e,c):l),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(u),e.signal&&(e.signal.aborted?u():e.signal.addEventListener("abort",u)));const b=nr(h);if(b&&R.protocols.indexOf(b)===-1){n(new m("Unsupported protocol "+b+":",m.ERR_BAD_REQUEST,e));return}c.send(s||null)})};const Z={http:Lt,xhr:ir};a.forEach(Z,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Ee=e=>`- ${e}`,ar=e=>a.isFunction(e)||e===null||e===!1;var We={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let r,n;const s={};for(let o=0;o<t;o++){r=e[o];let i;if(n=r,!ar(r)&&(n=Z[(i=String(r)).toLowerCase()],n===void 0))throw new m(`Unknown adapter '${i}'`);if(n)break;s[i||"#"+o]=n}if(!n){const o=Object.entries(s).map(([u,f])=>`adapter ${u} `+(f===!1?"is not supported by the environment":"is not available in the build"));let i=t?o.length>1?`since :
`+o.map(Ee).join(`
`):" "+Ee(o[0]):"as no adapter specified";throw new m("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return n},adapters:Z};function G(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new L(null,e)}function ge(e){return G(e),e.headers=x.from(e.headers),e.data=K.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),We.getAdapter(e.adapter||le.adapter)(e).then(function(n){return G(e),n.data=K.call(e,e.transformResponse,n),n.headers=x.from(n.headers),n},function(n){return Je(n)||(G(e),n&&n.response&&(n.response.data=K.call(e,e.transformResponse,n.response),n.response.headers=x.from(n.response.headers))),Promise.reject(n)})}const Re=e=>e instanceof x?e.toJSON():e;function N(e,t){t=t||{};const r={};function n(d,c,h){return a.isPlainObject(d)&&a.isPlainObject(c)?a.merge.call({caseless:h},d,c):a.isPlainObject(c)?a.merge({},c):a.isArray(c)?c.slice():c}function s(d,c,h){if(a.isUndefined(c)){if(!a.isUndefined(d))return n(void 0,d,h)}else return n(d,c,h)}function o(d,c){if(!a.isUndefined(c))return n(void 0,c)}function i(d,c){if(a.isUndefined(c)){if(!a.isUndefined(d))return n(void 0,d)}else return n(void 0,c)}function u(d,c,h){if(h in t)return n(d,c);if(h in e)return n(void 0,d)}const f={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:u,headers:(d,c)=>s(Re(d),Re(c),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(c){const h=f[c]||s,w=h(e[c],t[c],c);a.isUndefined(w)&&h!==u||(r[c]=w)}),r}const Ke="1.5.1",fe={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{fe[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}});const Oe={};fe.transitional=function(t,r,n){function s(o,i){return"[Axios v"+Ke+"] Transitional option '"+o+"'"+i+(n?". "+n:"")}return(o,i,u)=>{if(t===!1)throw new m(s(i," has been removed"+(r?" in "+r:"")),m.ERR_DEPRECATED);return r&&!Oe[i]&&(Oe[i]=!0,console.warn(s(i," has been deprecated since v"+r+" and will be removed in the near future"))),t?t(o,i,u):!0}};function cr(e,t,r){if(typeof e!="object")throw new m("options must be an object",m.ERR_BAD_OPTION_VALUE);const n=Object.keys(e);let s=n.length;for(;s-- >0;){const o=n[s],i=t[o];if(i){const u=e[o],f=u===void 0||i(u,o,e);if(f!==!0)throw new m("option "+o+" must be "+f,m.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new m("Unknown option "+o,m.ERR_BAD_OPTION)}}var Y={assertOptions:cr,validators:fe};const T=Y.validators;class I{constructor(t){this.defaults=t,this.interceptors={request:new we,response:new we}}request(t,r){typeof t=="string"?(r=r||{},r.url=t):r=t||{},r=N(this.defaults,r);const{transitional:n,paramsSerializer:s,headers:o}=r;n!==void 0&&Y.assertOptions(n,{silentJSONParsing:T.transitional(T.boolean),forcedJSONParsing:T.transitional(T.boolean),clarifyTimeoutError:T.transitional(T.boolean)},!1),s!=null&&(a.isFunction(s)?r.paramsSerializer={serialize:s}:Y.assertOptions(s,{encode:T.function,serialize:T.function},!0)),r.method=(r.method||this.defaults.method||"get").toLowerCase();let i=o&&a.merge(o.common,o[r.method]);o&&a.forEach(["delete","get","head","post","put","patch","common"],l=>{delete o[l]}),r.headers=x.concat(i,o);const u=[];let f=!0;this.interceptors.request.forEach(function(p){typeof p.runWhen=="function"&&p.runWhen(r)===!1||(f=f&&p.synchronous,u.unshift(p.fulfilled,p.rejected))});const d=[];this.interceptors.response.forEach(function(p){d.push(p.fulfilled,p.rejected)});let c,h=0,w;if(!f){const l=[ge.bind(this),void 0];for(l.unshift.apply(l,u),l.push.apply(l,d),w=l.length,c=Promise.resolve(r);h<w;)c=c.then(l[h++],l[h++]);return c}w=u.length;let b=r;for(h=0;h<w;){const l=u[h++],p=u[h++];try{b=l(b)}catch(S){p.call(this,S);break}}try{c=ge.call(this,b)}catch(l){return Promise.reject(l)}for(h=0,w=d.length;h<w;)c=c.then(d[h++],d[h++]);return c}getUri(t){t=N(this.defaults,t);const r=Ve(t.baseURL,t.url);return Me(r,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){I.prototype[t]=function(r,n){return this.request(N(n||{},{method:t,url:r,data:(n||{}).data}))}});a.forEach(["post","put","patch"],function(t){function r(n){return function(o,i,u){return this.request(N(u||{},{method:t,headers:n?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}I.prototype[t]=r(),I.prototype[t+"Form"]=r(!0)});var j=I;class de{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(o){r=o});const n=this;this.promise.then(s=>{if(!n._listeners)return;let o=n._listeners.length;for(;o-- >0;)n._listeners[o](s);n._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(u=>{n.subscribe(u),o=u}).then(s);return i.cancel=function(){n.unsubscribe(o)},i},t(function(o,i,u){n.reason||(n.reason=new L(o,i,u),r(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const r=this._listeners.indexOf(t);r!==-1&&this._listeners.splice(r,1)}static source(){let t;return{token:new de(function(s){t=s}),cancel:t}}}var ur=de;function lr(e){return function(r){return e.apply(null,r)}}function fr(e){return a.isObject(e)&&e.isAxiosError===!0}const ee={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ee).forEach(([e,t])=>{ee[t]=e});var dr=ee;function Ge(e){const t=new j(e),r=Ce(j.prototype.request,t);return a.extend(r,j.prototype,t,{allOwnKeys:!0}),a.extend(r,t,null,{allOwnKeys:!0}),r.create=function(s){return Ge(N(e,s))},r}const y=Ge(le);y.Axios=j;y.CanceledError=L;y.CancelToken=ur;y.isCancel=Je;y.VERSION=Ke;y.toFormData=z;y.AxiosError=m;y.Cancel=y.CanceledError;y.all=function(t){return Promise.all(t)};y.spread=lr;y.isAxiosError=fr;y.mergeConfig=N;y.AxiosHeaders=x;y.formToJSON=e=>ze(a.isHTMLForm(e)?new FormData(e):e);y.getAdapter=We.getAdapter;y.HttpStatusCode=dr;y.default=y;var Ae=y;/*! Sifrr.Storage v0.0.9 - sifrr project | MIT licensed | https://github.com/sifrr/sifrr */var hr=Object.prototype.toString,q="~SS%l3g5k3~";function pr(e,t){return new Blob([new Uint8Array(e.split(",")).buffer],{type:t})}function mr(e){var t=URL.createObjectURL(e),r=new XMLHttpRequest;r.open("GET",t,!1),r.send(),URL.revokeObjectURL(t);for(var n=new Uint8Array(r.response.length),s=0;s<r.response.length;++s)n[s]=r.response.charCodeAt(s);return n.toString()}function te(e){var t=e;if(typeof e=="string")try{t=e=JSON.parse(e)}catch{}if(typeof e=="string"&&e.indexOf(q)>0){var[r,n,s]=e.split(q);r==="ArrayBuffer"?t=new Uint8Array(n.split(",").map(i=>parseInt(i))).buffer:r==="Blob"?t=pr(s,n):t=new window[r](n.split(","))}else if(Array.isArray(e))t=[],e.forEach((i,u)=>{t[u]=te(i)});else if(typeof e=="object"){if(e===null)return null;t={};for(var o in e)t[o]=te(e[o])}return t}function H(e){if(typeof e!="object")return JSON.stringify(e);if(e===null)return"null";if(Array.isArray(e))return JSON.stringify(e.map(s=>H(s)));var t=hr.call(e).slice(8,-1);if(t==="Object"){var r={};for(var n in e)r[n]=H(e[n]);return JSON.stringify(r)}else t==="ArrayBuffer"?e=new Uint8Array(e):t==="Blob"&&(e=e.type+q+mr(e));return t+q+e.toString()}var xe=(e,t)=>{var r=Date.now();return Object.keys(e).forEach(n=>{if(typeof e[n]!="undefined"){var{createdAt:s,ttl:o}=e[n];e[n]=e[n]&&e[n].value,o!==0&&r-s>o&&(delete e[n],t&&t(n))}}),e},Te=(e,t)=>e&&e.value?(e.ttl=e.ttl||t,e.createdAt=Date.now(),e):{value:e,ttl:t,createdAt:Date.now()},yr=(e,t,r)=>{if(typeof e=="string")return{[e]:Te(t,r)};var n={};return Object.keys(e).forEach(s=>n[s]=Te(e[s],r)),n},Ne=e=>Array.isArray(e)?e:[e],Pe={name:"SifrrStorage",version:1,description:"Sifrr Storage",size:5*1024*1024,ttl:0};class D{constructor(t=Pe){this.type=this.constructor.type,this.table={},Object.assign(this,Pe,t),this.tableName=this.name+this.version}select(t){var r=this.getStore(),n={};return t.forEach(s=>n[s]=r[s]),n}upsert(t){var r=this.getStore();for(var n in t)r[n]=t[n];return this.setStore(r),!0}delete(t){var r=this.getStore();return t.forEach(n=>delete r[n]),this.setStore(r),!0}deleteAll(){return this.setStore({}),!0}getStore(){return this.table}setStore(t){this.table=t}keys(){return Promise.resolve(this.getStore()).then(t=>Object.keys(t))}all(){return Promise.resolve(this.getStore()).then(t=>xe(t,this.del.bind(this)))}get(t){return Promise.resolve(this.select(Ne(t))).then(r=>xe(r,this.del.bind(this)))}set(t,r){return Promise.resolve(this.upsert(yr(t,r,this.ttl)))}del(t){return Promise.resolve(this.delete(Ne(t)))}clear(){return Promise.resolve(this.deleteAll())}memoize(t,r=(...n)=>typeof n[0]=="string"?n[0]:H(n[0])){return(...n)=>{var s=r(...n);return this.get(s).then(o=>{if(o[s]===void 0||o[s]===null){var i=t(...n);if(!(i instanceof Promise))throw Error("Only promise returning functions can be memoized");return i.then(u=>this.set(s,u).then(()=>u))}else return o[s]})}}isSupported(t=!0){return t&&(typeof window=="undefined"||typeof document=="undefined")?!0:!!(window&&this.hasStore())}hasStore(){return!0}isEqual(t){return this.tableName==t.tableName&&this.type==t.type}static stringify(t){return H(t)}static parse(t){return te(t)}static _add(t){this._all=this._all||[],this._all.push(t)}static _matchingInstance(t){for(var r=this._all||[],n=r.length,s=0;s<n;s++)if(r[s].isEqual(t))return r[s];return this._add(t),t}}class re extends D{constructor(t){return super(t),this.constructor._matchingInstance(this)}select(t){var r={},n=[];return t.forEach(s=>n.push(this._tx("readonly","get",s,void 0).then(o=>r[s]=o))),Promise.all(n).then(()=>r)}upsert(t){var r=[];for(var n in t)r.push(this._tx("readwrite","put",t[n],n));return Promise.all(r).then(()=>!0)}delete(t){var r=[];return t.forEach(n=>r.push(this._tx("readwrite","delete",n,void 0))),Promise.all(r).then(()=>!0)}deleteAll(){return this._tx("readwrite","clear",void 0,void 0)}_tx(t,r,n,s){var o=this;return this.store=this.store||this.createStore(o.tableName),this.store.then(i=>new Promise((u,f)=>{var d=i.transaction(o.tableName,t).objectStore(o.tableName),c=d[r].call(d,n,s);c.onsuccess=h=>u(h.target.result),c.onerror=h=>f(h.error)}))}getStore(){return this._tx("readonly","getAllKeys",void 0,void 0).then(this.select.bind(this))}createStore(t){return new Promise((r,n)=>{var s=window.indexedDB.open(t,1);s.onupgradeneeded=()=>{s.result.createObjectStore(t)},s.onsuccess=()=>r(s.result),s.onerror=()=>n(s.error)})}hasStore(){return!!window.indexedDB}static get type(){return"indexeddb"}}class ne extends D{constructor(t){return super(t),this.constructor._matchingInstance(this)}parsedData(){}select(t){var r=t.map(()=>"?").join(", ");return this.execSql("SELECT key, value FROM ".concat(this.tableName," WHERE key in (").concat(r,")"),t)}upsert(t){return this.getWebsql().transaction(r=>{for(var n in t)r.executeSql("INSERT OR REPLACE INTO ".concat(this.tableName,"(key, value) VALUES (?, ?)"),[n,this.constructor.stringify(t[n])])}),!0}delete(t){var r=t.map(()=>"?").join(", ");return this.execSql("DELETE FROM ".concat(this.tableName," WHERE key in (").concat(r,")"),t),!0}deleteAll(){return this.execSql("DELETE FROM ".concat(this.tableName)),!0}getStore(){return this.execSql("SELECT key, value FROM ".concat(this.tableName))}hasStore(){return!!window.openDatabase}getWebsql(){return this._store?this._store:(this._store=window.openDatabase("ss",1,this.description,this.size),this.execSql("CREATE TABLE IF NOT EXISTS ".concat(this.tableName," (key unique, value)")),this._store)}execSql(t,r=[]){var n=this;return new Promise(s=>{n.getWebsql().transaction(function(o){o.executeSql(t,r,(i,u)=>{s(n.parseResults(u))})})})}parseResults(t){for(var r={},n=t.rows.length,s=0;s<n;s++)r[t.rows.item(s).key]=this.constructor.parse(t.rows.item(s).value);return r}static get type(){return"websql"}}class se extends D{constructor(t){return super(t),this.constructor._matchingInstance(this)}select(t){var r={};return t.forEach(n=>{var s=this.constructor.parse(this.getLocalStorage().getItem(this.tableName+"/"+n));s!==null&&(r[n]=s)}),r}upsert(t){for(var r in t)this.getLocalStorage().setItem(this.tableName+"/"+r,this.constructor.stringify(t[r]));return!0}delete(t){return t.map(r=>this.getLocalStorage().removeItem(this.tableName+"/"+r)),!0}deleteAll(){return Object.keys(this.getLocalStorage()).forEach(t=>{t.indexOf(this.tableName)===0&&this.getLocalStorage().removeItem(t)}),!0}getStore(){return this.select(Object.keys(this.getLocalStorage()).map(t=>{if(t.indexOf(this.tableName)===0)return t.slice(this.tableName.length+1)}).filter(t=>typeof t!="undefined"))}getLocalStorage(){return window.localStorage}hasStore(){return!!window.localStorage}static get type(){return"localstorage"}}var wr=new Date(0).toUTCString(),Xe="%3D",br=new RegExp(Xe,"g");class oe extends D{constructor(t){return super(t),this.constructor._matchingInstance(this)}upsert(t){for(var r in t)this.setStore("".concat(this.tableName,"/").concat(r,"=").concat(this.constructor.stringify(t[r]).replace(/=/g,Xe),"; path=/"));return!0}delete(t){return t.forEach(r=>this.setStore("".concat(this.tableName,"/").concat(r,"=; expires=").concat(wr,"; path=/"))),!0}deleteAll(){return this.keys().then(this.delete.bind(this))}getStore(){var t=document.cookie,r={};return t.split("; ").forEach(n=>{var[s,o]=n.split("=");s.indexOf(this.tableName)===0&&(r[s.slice(this.tableName.length+1)]=this.constructor.parse(o.replace(br,"=")))}),r}setStore(t){document.cookie=t}hasStore(){return typeof document.cookie!="undefined"}static get type(){return"cookies"}}class ie extends D{constructor(t){return super(t),this.constructor._matchingInstance(this)}hasStore(){return!0}static get type(){return"jsonstorage"}}var ve={[re.type]:re,[ne.type]:ne,[se.type]:se,[oe.type]:oe,[ie.type]:ie};function Sr(e=[],t={}){e=e.concat([re.type,ne.type,se.type,oe.type,ie.type]);for(var r=0;r<e.length;r++){var n=ve[e[r]];if(n){var s=new n(t);if(s.isSupported())return s}}throw Error("No compatible storage found. Available types: "+Object.keys(ve).join(", ")+".")}function Er(e){var t=typeof e=="string"?[e]:(e||{}).priority,r=typeof e=="string"?{}:e;return Sr(t,r)}/*! (c) @aadityataparia */const gr={axios:Ae.create({baseURL:"https://store.deepinos.org/api/"}),server:Ae.create({baseURL:"https://server.jwyihao.top"}),storage:Er({priority:["indexeddb","websql","localstorage"],name:"apiCache",version:1,description:"Cache for Spark Store API",ttl:0}),getLatest:async function(){try{const e=r=>r.latest!==void 0,t=await this.storage.get("latest");if(e(t))return t.latest}catch(e){throw console.error(e),e}try{const e=await this.server.get("/info/latest");return await this.storage.set("latest",{value:e.data,ttl:24*60*60*1e3}),e.data}catch(e){throw console.error(e),e}},getHistory:async function(e){try{const t=n=>n[`history_${e}`]!==void 0,r=await this.storage.get(`history_${e}`);if(t(r))return r[`history_${e}`]}catch(t){throw console.error(t),t}try{const t=await this.server.get(`/info/history?page=${e}`);return await this.storage.set(`history_${e}`,{value:t.data,ttl:24*60*60*1e3}),t.data}catch(t){throw console.error(t),t}},getApplicationList:async function(e){try{const t=n=>n[`applicationList_${e}`]!==void 0,r=await this.storage.get(`applicationList_${e}`);if(t(r))return r[`applicationList_${e}`]}catch(t){throw console.error(t),t}try{const t=(await this.server.get(`/repo/getAppList?sort=${e}`)).data;return await this.storage.set(`applicationList_${e}`,{value:t,ttl:24*60*60*1e3}),t}catch(t){throw console.error(t),t}},getApplicationDetail:async function(e){try{const t=n=>n[`applicationDetail_${encodeURIComponent(e)}`]!==void 0,r=await this.storage.get(`applicationDetail_${encodeURIComponent(e)}`);if(t(r))return r[`applicationDetail_${encodeURIComponent(e)}`]}catch(t){throw console.error(t),t}try{const t=(await this.server.get(`/repo/getAppDetail?package=${encodeURIComponent(e)}`)).data[0];return await this.storage.set(`applicationDetail_${encodeURIComponent(e)}`,{value:t,ttl:24*60*60*1e3}),t}catch(t){throw console.error(t),t}}};export{gr as api};
