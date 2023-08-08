import{j as V,c as y,h as k,m as O,ao as lt,ap as at,r as x,aq as ue,Y as Ve,a2 as it,g as A,ah as Ee,R as le,af as _e,w as P,o as be,k as Z,ak as ut,P as he,ar as rt,as as oe,a as st,at as ct,au as dt,av as ft,aw as vt,a0 as Qe,ax as Re,ad as pe,aj as mt,ay as ht,az as gt,aA as Ie,Q as bt,K as de,aB as pt,ai as yt,ac as wt,v as xt,p as G,y as Bt,z as ee,G as Se,C as D,B as C,aa as te,E as fe,H as Q,A as Ce,D as qt,F as kt,d as R,al as Et,Z as _t,aC as St}from"./index.8f94e1de.js";import{u as ye,a as we}from"./use-dark.f606e68c.js";import{c as Ct,Q as Tt}from"./QScrollArea.7edbba86.js";import{g as Ft,e as Pt}from"./QResizeObserver.494b335f.js";import{u as Mt,Q as Ht}from"./use-meta.efa3d7bc.js";import{u as At}from"./store.d2c68700.js";import{_ as Dt}from"./plugin-vue_export-helper.21dcd24c.js";var $t=V({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:t}){const n=y(()=>parseInt(e.lines,10)),o=y(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(n.value===1?" ellipsis":"")),l=y(()=>e.lines!==void 0&&n.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":n.value}:null);return()=>k("div",{style:l.value,class:o.value},O(t.default))}}),Lt=V({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:t}){const n=y(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>k("div",{class:n.value},O(t.default))}}),Wt=V({name:"QItem",props:{...ye,...lt,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:t,emit:n}){const{proxy:{$q:o}}=A(),l=we(e,o),{hasLink:i,linkAttrs:a,linkClass:s,linkTag:c,navigateOnClick:m}=at(),d=x(null),b=x(null),p=y(()=>e.clickable===!0||i.value===!0||e.tag==="label"),r=y(()=>e.disable!==!0&&p.value===!0),h=y(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(l.value===!0?" q-item--dark":"")+(i.value===!0&&e.active===null?s.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(r.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),q=y(()=>{if(e.insetLevel===void 0)return null;const u=o.lang.rtl===!0?"Right":"Left";return{["padding"+u]:16+e.insetLevel*56+"px"}});function E(u){r.value===!0&&(b.value!==null&&(u.qKeyEvent!==!0&&document.activeElement===d.value?b.value.focus():document.activeElement===b.value&&d.value.focus()),m(u))}function S(u){if(r.value===!0&&ue(u,13)===!0){Ve(u),u.qKeyEvent=!0;const v=new MouseEvent("click",u);v.qKeyEvent=!0,d.value.dispatchEvent(v)}n("keyup",u)}function f(){const u=it(t.default,[]);return r.value===!0&&u.unshift(k("div",{class:"q-focus-helper",tabindex:-1,ref:b})),u}return()=>{const u={ref:d,class:h.value,style:q.value,role:"listitem",onClick:E,onKeyup:S};return r.value===!0?(u.tabindex=e.tabindex||"0",Object.assign(u,a.value)):p.value===!0&&(u["aria-disabled"]="true"),k(c.value,u,f())}}}),Vt=V({name:"QList",props:{...ye,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:t}){const n=A(),o=we(e,n.proxy.$q),l=y(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(o.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>k(e.tag,{class:l.value},O(t.default))}}),Qt=V({name:"QBtnGroup",props:{unelevated:Boolean,outline:Boolean,flat:Boolean,rounded:Boolean,square:Boolean,push:Boolean,stretch:Boolean,glossy:Boolean,spread:Boolean},setup(e,{slots:t}){const n=y(()=>{const o=["unelevated","outline","flat","rounded","square","push","stretch","glossy"].filter(l=>e[l]===!0).map(l=>`q-btn-group--${l}`).join(" ");return`q-btn-group row no-wrap${o.length!==0?" "+o:""}`+(e.spread===!0?" q-btn-group--spread":" inline")});return()=>k("div",{class:n.value},O(t.default))}});const Rt={target:{default:!0},noParentEvent:Boolean,contextMenu:Boolean};function It({showing:e,avoidEmit:t,configureAnchorEl:n}){const{props:o,proxy:l,emit:i}=A(),a=x(null);let s=null;function c(r){return a.value===null?!1:r===void 0||r.touches===void 0||r.touches.length<=1}const m={};n===void 0&&(Object.assign(m,{hide(r){l.hide(r)},toggle(r){l.toggle(r),r.qAnchorHandled=!0},toggleKey(r){ue(r,13)===!0&&m.toggle(r)},contextClick(r){l.hide(r),Ee(r),le(()=>{l.show(r),r.qAnchorHandled=!0})},prevent:Ee,mobileTouch(r){if(m.mobileCleanup(r),c(r)!==!0)return;l.hide(r),a.value.classList.add("non-selectable");const h=r.target;_e(m,"anchor",[[h,"touchmove","mobileCleanup","passive"],[h,"touchend","mobileCleanup","passive"],[h,"touchcancel","mobileCleanup","passive"],[a.value,"contextmenu","prevent","notPassive"]]),s=setTimeout(()=>{s=null,l.show(r),r.qAnchorHandled=!0},300)},mobileCleanup(r){a.value.classList.remove("non-selectable"),s!==null&&(clearTimeout(s),s=null),e.value===!0&&r!==void 0&&Ct()}}),n=function(r=o.contextMenu){if(o.noParentEvent===!0||a.value===null)return;let h;r===!0?l.$q.platform.is.mobile===!0?h=[[a.value,"touchstart","mobileTouch","passive"]]:h=[[a.value,"mousedown","hide","passive"],[a.value,"contextmenu","contextClick","notPassive"]]:h=[[a.value,"click","toggle","passive"],[a.value,"keyup","toggleKey","passive"]],_e(m,"anchor",h)});function d(){ut(m,"anchor")}function b(r){for(a.value=r;a.value.classList.contains("q-anchor--skip");)a.value=a.value.parentNode;n()}function p(){if(o.target===!1||o.target===""||l.$el.parentNode===null)a.value=null;else if(o.target===!0)b(l.$el.parentNode);else{let r=o.target;if(typeof o.target=="string")try{r=document.querySelector(o.target)}catch{r=void 0}r!=null?(a.value=r.$el||r,n()):(a.value=null,console.error(`Anchor: target "${o.target}" not found`))}}return P(()=>o.contextMenu,r=>{a.value!==null&&(d(),n(r))}),P(()=>o.target,()=>{a.value!==null&&d(),p()}),P(()=>o.noParentEvent,r=>{a.value!==null&&(r===!0?d():n())}),be(()=>{p(),t!==!0&&o.modelValue===!0&&a.value===null&&i("update:modelValue",!1)}),Z(()=>{s!==null&&clearTimeout(s),d()}),{anchorEl:a,canShow:c,anchorEvents:m}}function zt(e,t){const n=x(null);let o;function l(s,c){const m=`${c!==void 0?"add":"remove"}EventListener`,d=c!==void 0?c:o;s!==window&&s[m]("scroll",d,he.passive),window[m]("scroll",d,he.passive),o=c}function i(){n.value!==null&&(l(n.value),n.value=null)}const a=P(()=>e.noParentEvent,()=>{n.value!==null&&(i(),t())});return Z(a),{localScrollTarget:n,unconfigureScrollTarget:i,changeScrollEvent:l}}const Ot={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},jt=["beforeShow","show","beforeHide","hide"];function Kt({showing:e,canShow:t,hideOnRouteChange:n,handleShow:o,handleHide:l,processOnMount:i}){const a=A(),{props:s,emit:c,proxy:m}=a;let d;function b(f){e.value===!0?h(f):p(f)}function p(f){if(s.disable===!0||f!==void 0&&f.qAnchorHandled===!0||t!==void 0&&t(f)!==!0)return;const u=s["onUpdate:modelValue"]!==void 0;u===!0&&(c("update:modelValue",!0),d=f,le(()=>{d===f&&(d=void 0)})),(s.modelValue===null||u===!1)&&r(f)}function r(f){e.value!==!0&&(e.value=!0,c("beforeShow",f),o!==void 0?o(f):c("show",f))}function h(f){if(s.disable===!0)return;const u=s["onUpdate:modelValue"]!==void 0;u===!0&&(c("update:modelValue",!1),d=f,le(()=>{d===f&&(d=void 0)})),(s.modelValue===null||u===!1)&&q(f)}function q(f){e.value!==!1&&(e.value=!1,c("beforeHide",f),l!==void 0?l(f):c("hide",f))}function E(f){s.disable===!0&&f===!0?s["onUpdate:modelValue"]!==void 0&&c("update:modelValue",!1):f===!0!==e.value&&(f===!0?r:q)(d)}P(()=>s.modelValue,E),n!==void 0&&rt(a)===!0&&P(()=>m.$route.fullPath,()=>{n.value===!0&&e.value===!0&&h()}),i===!0&&be(()=>{E(s.modelValue)});const S={show:p,hide:h,toggle:b};return Object.assign(m,S),S}let Y=[],X=[];function ze(e){X=X.filter(t=>t!==e)}function Nt(e){ze(e),X.push(e)}function Te(e){ze(e),X.length===0&&Y.length!==0&&(Y[Y.length-1](),Y=[])}function Ut(e){X.length===0?e():Y.push(e)}const I=[];function Gt(e){return I.find(t=>t.contentEl!==null&&t.contentEl.contains(e))}function Oe(e,t){do{if(e.$options.name==="QMenu"){if(e.hide(t),e.$props.separateClosePopup===!0)return oe(e)}else if(e.__qPortal===!0){const n=oe(e);return n!==void 0&&n.$options.name==="QPopupProxy"?(e.hide(t),n):e}e=oe(e)}while(e!=null)}function Yt(e,t,n){for(;n!==0&&e!==void 0&&e!==null;){if(e.__qPortal===!0){if(n--,e.$options.name==="QMenu"){e=Oe(e,t);continue}e.hide(t)}e=oe(e)}}function Xt(e){for(e=e.parent;e!=null;){if(e.type.name==="QGlobalDialog")return!0;if(e.type.name==="QDialog"||e.type.name==="QMenu")return!1;e=e.parent}return!1}function Zt(e,t,n,o){const l=x(!1),i=x(!1);let a=null;const s={},c=o==="dialog"&&Xt(e);function m(b){if(b===!0){Te(s),i.value=!0;return}i.value=!1,l.value===!1&&(c===!1&&a===null&&(a=ft(!1,o)),l.value=!0,I.push(e.proxy),Nt(s))}function d(b){if(i.value=!1,b!==!0)return;Te(s),l.value=!1;const p=I.indexOf(e.proxy);p!==-1&&I.splice(p,1),a!==null&&(vt(a),a=null)}return st(()=>{d(!0)}),e.proxy.__qPortal=!0,ct(e.proxy,"contentEl",()=>t.value),{showPortal:m,hidePortal:d,portalIsActive:l,portalIsAccessible:i,renderPortal:()=>c===!0?n():l.value===!0?[k(dt,{to:a},n())]:void 0}}const je={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function Jt(e,t=()=>{},n=()=>{}){return{transitionProps:y(()=>{const o=`q-transition--${e.transitionShow||t()}`,l=`q-transition--${e.transitionHide||n()}`;return{appear:!0,enterFromClass:`${o}-enter-from`,enterActiveClass:`${o}-enter-active`,enterToClass:`${o}-enter-to`,leaveFromClass:`${l}-leave-from`,leaveActiveClass:`${l}-leave-active`,leaveToClass:`${l}-leave-to`}}),transitionStyle:y(()=>`--q-transition-duration: ${e.transitionDuration}ms`)}}function en(){let e;const t=A();function n(){e=void 0}return Qe(n),Z(n),{removeTick:n,registerTick(o){e=o,le(()=>{e===o&&(Re(t)===!1&&e(),e=void 0)})}}}function tn(){let e=null;const t=A();function n(){e!==null&&(clearTimeout(e),e=null)}return Qe(n),Z(n),{removeTimeout:n,registerTimeout(o,l){n(),Re(t)===!1&&(e=setTimeout(o,l))}}}const $=[];let z;function nn(e){z=e.keyCode===27}function on(){z===!0&&(z=!1)}function ln(e){z===!0&&(z=!1,ue(e,27)===!0&&$[$.length-1](e))}function Ke(e){window[e]("keydown",nn),window[e]("blur",on),window[e]("keyup",ln),z=!1}function an(e){pe.is.desktop===!0&&($.push(e),$.length===1&&Ke("addEventListener"))}function Fe(e){const t=$.indexOf(e);t>-1&&($.splice(t,1),$.length===0&&Ke("removeEventListener"))}const L=[];function Ne(e){L[L.length-1](e)}function un(e){pe.is.desktop===!0&&(L.push(e),L.length===1&&document.body.addEventListener("focusin",Ne))}function rn(e){const t=L.indexOf(e);t>-1&&(L.splice(t,1),L.length===0&&document.body.removeEventListener("focusin",Ne))}const{notPassiveCapture:ae}=he,W=[];function ie(e){const t=e.target;if(t===void 0||t.nodeType===8||t.classList.contains("no-pointer-events")===!0)return;let n=I.length-1;for(;n>=0;){const o=I[n].$;if(o.type.name==="QTooltip"){n--;continue}if(o.type.name!=="QDialog")break;if(o.props.seamless!==!0)return;n--}for(let o=W.length-1;o>=0;o--){const l=W[o];if((l.anchorEl.value===null||l.anchorEl.value.contains(t)===!1)&&(t===document.body||l.innerRef.value!==null&&l.innerRef.value.contains(t)===!1))e.qClickOutside=!0,l.onClickOutside(e);else return}}function sn(e){W.push(e),W.length===1&&(document.addEventListener("mousedown",ie,ae),document.addEventListener("touchstart",ie,ae))}function Pe(e){const t=W.findIndex(n=>n===e);t>-1&&(W.splice(t,1),W.length===0&&(document.removeEventListener("mousedown",ie,ae),document.removeEventListener("touchstart",ie,ae)))}let Me,He;function Ae(e){const t=e.split(" ");return t.length!==2?!1:["top","center","bottom"].includes(t[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(t[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function cn(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const ge={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{ge[`${e}#ltr`]=e,ge[`${e}#rtl`]=e});function De(e,t){const n=e.split(" ");return{vertical:n[0],horizontal:ge[`${n[1]}#${t===!0?"rtl":"ltr"}`]}}function dn(e,t){let{top:n,left:o,right:l,bottom:i,width:a,height:s}=e.getBoundingClientRect();return t!==void 0&&(n-=t[1],o-=t[0],i+=t[1],l+=t[0],a+=t[0],s+=t[1]),{top:n,bottom:i,height:s,left:o,right:l,width:a,middle:o+(l-o)/2,center:n+(i-n)/2}}function fn(e,t,n){let{top:o,left:l}=e.getBoundingClientRect();return o+=t.top,l+=t.left,n!==void 0&&(o+=n[1],l+=n[0]),{top:o,bottom:o+1,height:1,left:l,right:l+1,width:1,middle:l,center:o}}function vn(e,t){return{top:0,center:t/2,bottom:t,left:0,middle:e/2,right:e}}function $e(e,t,n,o){return{top:e[n.vertical]-t[o.vertical],left:e[n.horizontal]-t[o.horizontal]}}function Ue(e,t=0){if(e.targetEl===null||e.anchorEl===null||t>5)return;if(e.targetEl.offsetHeight===0||e.targetEl.offsetWidth===0){setTimeout(()=>{Ue(e,t+1)},10);return}const{targetEl:n,offset:o,anchorEl:l,anchorOrigin:i,selfOrigin:a,absoluteOffset:s,fit:c,cover:m,maxHeight:d,maxWidth:b}=e;if(pe.is.ios===!0&&window.visualViewport!==void 0){const M=document.body.style,{offsetLeft:_,offsetTop:T}=window.visualViewport;_!==Me&&(M.setProperty("--q-pe-left",_+"px"),Me=_),T!==He&&(M.setProperty("--q-pe-top",T+"px"),He=T)}const{scrollLeft:p,scrollTop:r}=n,h=s===void 0?dn(l,m===!0?[0,0]:o):fn(l,s,o);Object.assign(n.style,{top:0,left:0,minWidth:null,minHeight:null,maxWidth:b||"100vw",maxHeight:d||"100vh",visibility:"visible"});const{offsetWidth:q,offsetHeight:E}=n,{elWidth:S,elHeight:f}=c===!0||m===!0?{elWidth:Math.max(h.width,q),elHeight:m===!0?Math.max(h.height,E):E}:{elWidth:q,elHeight:E};let u={maxWidth:b,maxHeight:d};(c===!0||m===!0)&&(u.minWidth=h.width+"px",m===!0&&(u.minHeight=h.height+"px")),Object.assign(n.style,u);const v=vn(S,f);let w=$e(h,v,i,a);if(s===void 0||o===void 0)ve(w,h,v,i,a);else{const{top:M,left:_}=w;ve(w,h,v,i,a);let T=!1;if(w.top!==M){T=!0;const F=2*o[1];h.center=h.top-=F,h.bottom-=F+2}if(w.left!==_){T=!0;const F=2*o[0];h.middle=h.left-=F,h.right-=F+2}T===!0&&(w=$e(h,v,i,a),ve(w,h,v,i,a))}u={top:w.top+"px",left:w.left+"px"},w.maxHeight!==void 0&&(u.maxHeight=w.maxHeight+"px",h.height>w.maxHeight&&(u.minHeight=u.maxHeight)),w.maxWidth!==void 0&&(u.maxWidth=w.maxWidth+"px",h.width>w.maxWidth&&(u.minWidth=u.maxWidth)),Object.assign(n.style,u),n.scrollTop!==r&&(n.scrollTop=r),n.scrollLeft!==p&&(n.scrollLeft=p)}function ve(e,t,n,o,l){const i=n.bottom,a=n.right,s=Ft(),c=window.innerHeight-s,m=document.body.clientWidth;if(e.top<0||e.top+i>c)if(l.vertical==="center")e.top=t[o.vertical]>c/2?Math.max(0,c-i):0,e.maxHeight=Math.min(i,c);else if(t[o.vertical]>c/2){const d=Math.min(c,o.vertical==="center"?t.center:o.vertical===l.vertical?t.bottom:t.top);e.maxHeight=Math.min(i,d),e.top=Math.max(0,d-i)}else e.top=Math.max(0,o.vertical==="center"?t.center:o.vertical===l.vertical?t.top:t.bottom),e.maxHeight=Math.min(i,c-e.top);if(e.left<0||e.left+a>m)if(e.maxWidth=Math.min(a,m),l.horizontal==="middle")e.left=t[o.horizontal]>m/2?Math.max(0,m-a):0;else if(t[o.horizontal]>m/2){const d=Math.min(m,o.horizontal==="middle"?t.middle:o.horizontal===l.horizontal?t.right:t.left);e.maxWidth=Math.min(a,d),e.left=Math.max(0,d-e.maxWidth)}else e.left=Math.max(0,o.horizontal==="middle"?t.middle:o.horizontal===l.horizontal?t.left:t.right),e.maxWidth=Math.min(a,m-e.left)}var mn=V({name:"QMenu",inheritAttrs:!1,props:{...Rt,...Ot,...ye,...je,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:Ae},self:{type:String,validator:Ae},offset:{type:Array,validator:cn},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...jt,"click","escapeKey"],setup(e,{slots:t,emit:n,attrs:o}){let l=null,i,a,s;const c=A(),{proxy:m}=c,{$q:d}=m,b=x(null),p=x(!1),r=y(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),h=we(e,d),{registerTick:q,removeTick:E}=en(),{registerTimeout:S}=tn(),{transitionProps:f,transitionStyle:u}=Jt(e),{localScrollTarget:v,changeScrollEvent:w,unconfigureScrollTarget:M}=zt(e,qe),{anchorEl:_,canShow:T}=It({showing:p}),{hide:F}=Kt({showing:p,canShow:T,handleShow:Ze,handleHide:Je,hideOnRouteChange:r,processOnMount:!0}),{showPortal:j,hidePortal:K,renderPortal:J}=Zt(c,b,tt,"menu"),H={anchorEl:_,innerRef:b,onClickOutside(g){if(e.persistent!==!0&&p.value===!0)return F(g),(g.type==="touchstart"||g.target.classList.contains("q-dialog__backdrop"))&&Ve(g),!0}},N=y(()=>De(e.anchor||(e.cover===!0?"center middle":"bottom start"),d.lang.rtl)),Ge=y(()=>e.cover===!0?N.value:De(e.self||"top start",d.lang.rtl)),Ye=y(()=>(e.square===!0?" q-menu--square":"")+(h.value===!0?" q-menu--dark q-dark":"")),Xe=y(()=>e.autoClose===!0?{onClick:et}:{}),xe=y(()=>p.value===!0&&e.persistent!==!0);P(xe,g=>{g===!0?(an(se),sn(H)):(Fe(se),Pe(H))});function re(){Ut(()=>{let g=b.value;g&&g.contains(document.activeElement)!==!0&&(g=g.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||g.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||g.querySelector("[autofocus], [data-autofocus]")||g,g.focus({preventScroll:!0}))})}function Ze(g){if(l=e.noRefocus===!1?document.activeElement:null,un(ke),j(),qe(),i=void 0,g!==void 0&&(e.touchPosition||e.contextMenu)){const ce=mt(g);if(ce.left!==void 0){const{top:nt,left:ot}=_.value.getBoundingClientRect();i={left:ce.left-ot,top:ce.top-nt}}}a===void 0&&(a=P(()=>d.screen.width+"|"+d.screen.height+"|"+e.self+"|"+e.anchor+"|"+d.lang.rtl,U)),e.noFocus!==!0&&document.activeElement.blur(),q(()=>{U(),e.noFocus!==!0&&re()}),S(()=>{d.platform.is.ios===!0&&(s=e.autoClose,b.value.click()),U(),j(!0),n("show",g)},e.transitionDuration)}function Je(g){E(),K(),Be(!0),l!==null&&(g===void 0||g.qClickOutside!==!0)&&(((g&&g.type.indexOf("key")===0?l.closest('[tabindex]:not([tabindex^="-"])'):void 0)||l).focus(),l=null),S(()=>{K(!0),n("hide",g)},e.transitionDuration)}function Be(g){i=void 0,a!==void 0&&(a(),a=void 0),(g===!0||p.value===!0)&&(rn(ke),M(),Pe(H),Fe(se)),g!==!0&&(l=null)}function qe(){(_.value!==null||e.scrollTarget!==void 0)&&(v.value=Pt(_.value,e.scrollTarget),w(v.value,U))}function et(g){s!==!0?(Oe(m,g),n("click",g)):s=!1}function ke(g){xe.value===!0&&e.noFocus!==!0&&gt(b.value,g.target)!==!0&&re()}function se(g){n("escapeKey"),F(g)}function U(){Ue({targetEl:b.value,offset:e.offset,anchorEl:_.value,anchorOrigin:N.value,selfOrigin:Ge.value,absoluteOffset:i,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function tt(){return k(ht,f.value,()=>p.value===!0?k("div",{role:"menu",...o,ref:b,tabindex:-1,class:["q-menu q-position-engine scroll"+Ye.value,o.class],style:[o.style,u.value],...Xe.value},O(t.default)):null)}return Z(Be),Object.assign(m,{focus:re,updatePosition:U}),J}});let me,ne=0;const B=new Array(256);for(let e=0;e<256;e++)B[e]=(e+256).toString(16).substring(1);const hn=(()=>{const e=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return t=>{const n=new Uint8Array(t);return e.getRandomValues(n),n}}return t=>{const n=[];for(let o=t;o>0;o--)n.push(Math.floor(Math.random()*256));return n}})(),Le=4096;function gn(){(me===void 0||ne+16>Le)&&(ne=0,me=hn(Le));const e=Array.prototype.slice.call(me,ne,ne+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,B[e[0]]+B[e[1]]+B[e[2]]+B[e[3]]+"-"+B[e[4]]+B[e[5]]+"-"+B[e[6]]+B[e[7]]+"-"+B[e[8]]+B[e[9]]+"-"+B[e[10]]+B[e[11]]+B[e[12]]+B[e[13]]+B[e[14]]+B[e[15]]}const bn=Object.keys(Ie),pn=e=>bn.reduce((t,n)=>{const o=e[n];return o!==void 0&&(t[n]=o),t},{});var yn=V({name:"QBtnDropdown",props:{...Ie,...je,modelValue:Boolean,split:Boolean,dropdownIcon:String,contentClass:[Array,String,Object],contentStyle:[Array,String,Object],cover:Boolean,persistent:Boolean,noRouteDismiss:Boolean,autoClose:Boolean,menuAnchor:{type:String,default:"bottom end"},menuSelf:{type:String,default:"top end"},menuOffset:Array,disableMainBtn:Boolean,disableDropdown:Boolean,noIconAnimation:Boolean,toggleAriaLabel:String},emits:["update:modelValue","click","beforeShow","show","beforeHide","hide"],setup(e,{slots:t,emit:n}){const{proxy:o}=A(),l=x(e.modelValue),i=x(null),a=gn(),s=y(()=>{const v={"aria-expanded":l.value===!0?"true":"false","aria-haspopup":"true","aria-controls":a,"aria-label":e.toggleAriaLabel||o.$q.lang.label[l.value===!0?"collapse":"expand"](e.label)};return(e.disable===!0||e.split===!1&&e.disableMainBtn===!0||e.disableDropdown===!0)&&(v["aria-disabled"]="true"),v}),c=y(()=>"q-btn-dropdown__arrow"+(l.value===!0&&e.noIconAnimation===!1?" rotate-180":"")+(e.split===!1?" q-btn-dropdown__arrow-container":"")),m=y(()=>pt(e)),d=y(()=>pn(e));P(()=>e.modelValue,v=>{i.value!==null&&i.value[v?"show":"hide"]()}),P(()=>e.split,u);function b(v){l.value=!0,n("beforeShow",v)}function p(v){n("show",v),n("update:modelValue",!0)}function r(v){l.value=!1,n("beforeHide",v)}function h(v){n("hide",v),n("update:modelValue",!1)}function q(v){n("click",v)}function E(v){yt(v),u(),n("click",v)}function S(v){i.value!==null&&i.value.toggle(v)}function f(v){i.value!==null&&i.value.show(v)}function u(v){i.value!==null&&i.value.hide(v)}return Object.assign(o,{show:f,hide:u,toggle:S}),be(()=>{e.modelValue===!0&&f()}),()=>{const v=[k(bt,{class:c.value,name:e.dropdownIcon||o.$q.iconSet.arrow.dropdown})];return e.disableDropdown!==!0&&v.push(k(mn,{ref:i,id:a,class:e.contentClass,style:e.contentStyle,cover:e.cover,fit:!0,persistent:e.persistent,noRouteDismiss:e.noRouteDismiss,autoClose:e.autoClose,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,separateClosePopup:!0,transitionShow:e.transitionShow,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,onBeforeShow:b,onShow:p,onBeforeHide:r,onHide:h},t.default)),e.split===!1?k(de,{class:"q-btn-dropdown q-btn-dropdown--simple",...d.value,...s.value,disable:e.disable===!0||e.disableMainBtn===!0,noWrap:!0,round:!1,onClick:q},{default:()=>O(t.label,[]).concat(v),loading:t.loading}):k(Qt,{class:"q-btn-dropdown q-btn-dropdown--split no-wrap q-btn-item",rounded:e.rounded,square:e.square,...m.value,glossy:e.glossy,stretch:e.stretch},()=>[k(de,{class:"q-btn-dropdown--current",...d.value,disable:e.disable===!0||e.disableMainBtn===!0,noWrap:!0,round:!1,onClick:E},{default:t.label,loading:t.loading}),k(de,{class:"q-btn-dropdown__arrow-container q-anchor--skip",...s.value,...m.value,disable:e.disable===!0||e.disableDropdown===!0,rounded:e.rounded,color:e.color,textColor:e.textColor,dense:e.dense,size:e.size,padding:e.padding,ripple:e.ripple},()=>v)])}}});function We(e){if(e===!1)return 0;if(e===!0||e===void 0)return 1;const t=parseInt(e,10);return isNaN(t)?0:t}var wn=wt({name:"close-popup",beforeMount(e,{value:t}){const n={depth:We(t),handler(o){n.depth!==0&&setTimeout(()=>{const l=Gt(e);l!==void 0&&Yt(l,o,n.depth)})},handlerKey(o){ue(o,13)===!0&&n.handler(o)}};e.__qclosepopup=n,e.addEventListener("click",n.handler),e.addEventListener("keyup",n.handlerKey)},updated(e,{value:t,oldValue:n}){t!==n&&(e.__qclosepopup.depth=We(t))},beforeUnmount(e){const t=e.__qclosepopup;e.removeEventListener("click",t.handler),e.removeEventListener("keyup",t.handlerKey),delete e.__qclosepopup}});const xn=["src"],Bn={class:"description"},qn={class:"detail"},kn={class:"name"},En={class:"version"},_n={class:"tags"},Sn={class:"description"},Cn=xt({__name:"StorePage",setup(e){Mt({title:"WEB\u5546\u5E97",titleTemplate:f=>`${f} - \u661F\u706B\u5E94\u7528\u5546\u5E97`,meta:{description:{name:"description",content:"\u661F\u706B\u5E94\u7528\u5546\u5E97spark store\u5B98\u7F51"},keywords:{name:"keywords",content:"spark store,\u661F\u706B\u5E94\u7528\u5546\u5E97,\u661F\u706B\u5546\u5E97,\u661F\u706B\u5E94\u7528\u5546\u5E97\u4E0B\u8F7D,\u661F\u706B\u5546\u5E97\u4E0B\u8F7D,deepin\u5E94\u7528\u5546\u5E97,uos,ubuntu,deepin"},equiv:{"http-equiv":"Content-Type",content:"text/html; charset=UTF-8"}}});const t=At(),n=x(t.debSource),o=x(t.source),l=x({active:!1,animation:!1,cover:!1});G("containerState",l);const i=x({active:!1,animation:!1,cover:!1});G("coverState",i);const a=x({});G("cover",a);const s=x();G("activeCard",s);const c=x();G("appDetail",c);const m=y(()=>{var f;return`${n.value}/${(f=c==null?void 0:c.value)==null?void 0:f.Filename}`}),d=y(()=>{var f;return`${o.value}/${(f=c==null?void 0:c.value)==null?void 0:f.Filename}.torrent`});function b(f){var u;f.propertyName==="transform"&&i!=null&&i.value&&((u=s==null?void 0:s.value)!=null&&u.class&&(s.value.class.cover=i.value.active),i.value.animation=!1,i.value.open=i.value.active)}const p=x({active:!1});function r(){p.value.active=!0}function h(){p.value.active=!1}const q=x({active:!1});function E(){q.value.active=!0}function S(){q.value.active=!1}return(f,u)=>{const v=Bt("router-view");return ee(),Se(Ht,{class:"flex storePage"},{default:D(()=>{var w,M,_,T,F,j,K,J;return[C("div",{class:fe(["coverView",i.value]),onClick:u[5]||(u[5]=H=>{i.value&&(i.value.active=!1,i.value.open=!1,i.value.loaded=!1,i.value.animation=!0),l.value.cover=!1}),style:St((w=a.value)==null?void 0:w.style)},[C("div",{class:"card",onTransitionend:b,onClick:u[4]||(u[4]=te(()=>{},["stop"]))},[C("div",{class:fe(["cardView",p.value]),onTransitionend:u[2]||(u[2]=te(()=>{},["stop"])),onMousedown:r,onMouseup:h},[C("img",{src:(M=s.value)==null?void 0:M.imgSrc,alt:"",onError:u[0]||(u[0]=H=>{var N;(N=s.value)!=null&&N.imgError&&(s.value.imgError=!0)})},null,40,xn),C("div",Bn,[C("h6",null,Q((_=s.value)==null?void 0:_.Name),1),C("p",null,Q((T=s.value)==null?void 0:T.More),1)]),C("div",qn,[C("h1",kn,Q((F=c.value)==null?void 0:F.Name),1),C("span",En,Q((j=c.value)==null?void 0:j.Version),1),C("div",_n,[(ee(!0),Ce(kt,null,qt((K=c.value)==null?void 0:K.Tags,H=>(ee(),Ce("span",{key:H},Q(H),1))),128))]),C("p",Sn,Q((J=c.value)==null?void 0:J.More),1),R(yn,{split:"",ripple:!1,href:m.value,color:"primary",label:"\u4E0B\u8F7D\uFF08DEB\uFF09","menu-anchor":"bottom middle","menu-self":"top middle",padding:"sm xl",onClick:u[1]||(u[1]=te(()=>{},["stop"]))},{default:D(()=>[R(Vt,null,{default:D(()=>[Et((ee(),Se(Wt,{clickable:"",href:d.value},{default:D(()=>[R(Lt,null,{default:D(()=>[R($t,null,{default:D(()=>[_t("BT\uFF08\u591A\u6E90\u4E0B\u8F7D\u66F4\u5FEB\uFF09")]),_:1})]),_:1})]),_:1},8,["href"])),[[wn]])]),_:1})]),_:1},8,["href"])])],34),C("div",{class:fe(["toolBox",q.value]),onTransitionend:u[3]||(u[3]=te(()=>{},["stop"])),onMousedown:E,onMouseup:S}," \u67E5\u770B\u8BE6\u60C5 ",34)],32)],6),R(Tt,{style:{width:"100%"},"thumb-style":{zIndex:"2",borderRadius:"100px"},visible:!1},{default:D(()=>[R(v)]),_:1})]}),_:1})}}});var $n=Dt(Cn,[["__scopeId","data-v-6cbb2b8e"]]);export{$n as default};
