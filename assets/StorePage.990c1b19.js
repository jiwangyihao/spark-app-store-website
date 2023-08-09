import{j as Q,c as w,h as k,m as j,ao as at,ap as it,r as x,aq as re,Y as Qe,a2 as ut,g as A,ah as Se,R as ae,af as Ce,w as F,o as se,k as te,ak as rt,P as pe,ar as st,as as le,a as ct,at as dt,au as ft,av as vt,aw as mt,a0 as Re,ax as Ie,ad as we,aj as ht,ay as ze,az as gt,aA as Oe,Q as bt,K as ve,aB as pt,ai as yt,ac as wt,v as xt,x as Bt,aC as qt,p as Y,y as kt,z as X,G as me,C as H,B as C,aa as Z,E as he,H as I,A as Te,D as Et,F as _t,d as L,al as St,Z as Ct,aD as Tt,aE as Pt}from"./index.50d2f0c2.js";import{u as xe,a as Be}from"./use-dark.28778cb3.js";import{c as Ft,Q as Mt}from"./QScrollArea.161a47b1.js";import{g as Ht,e as Dt}from"./QResizeObserver.4b845a0a.js";import{u as At,Q as Lt}from"./use-meta.83b8c9b8.js";import{u as $t}from"./store.13973f50.js";import{_ as Wt}from"./plugin-vue_export-helper.21dcd24c.js";var Vt=Q({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:t}){const n=w(()=>parseInt(e.lines,10)),o=w(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(n.value===1?" ellipsis":"")),l=w(()=>e.lines!==void 0&&n.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":n.value}:null);return()=>k("div",{style:l.value,class:o.value},j(t.default))}}),Qt=Q({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:t}){const n=w(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>k("div",{class:n.value},j(t.default))}}),Rt=Q({name:"QItem",props:{...xe,...at,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:t,emit:n}){const{proxy:{$q:o}}=A(),l=Be(e,o),{hasLink:d,linkAttrs:a,linkClass:i,linkTag:m,navigateOnClick:c}=it(),r=x(null),p=x(null),y=w(()=>e.clickable===!0||d.value===!0||e.tag==="label"),u=w(()=>e.disable!==!0&&y.value===!0),v=w(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(l.value===!0?" q-item--dark":"")+(d.value===!0&&e.active===null?i.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(u.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),S=w(()=>{if(e.insetLevel===void 0)return null;const f=o.lang.rtl===!0?"Right":"Left";return{["padding"+f]:16+e.insetLevel*56+"px"}});function E(f){u.value===!0&&(p.value!==null&&(f.qKeyEvent!==!0&&document.activeElement===r.value?p.value.focus():document.activeElement===p.value&&r.value.focus()),c(f))}function q(f){if(u.value===!0&&re(f,13)===!0){Qe(f),f.qKeyEvent=!0;const s=new MouseEvent("click",f);s.qKeyEvent=!0,r.value.dispatchEvent(s)}n("keyup",f)}function g(){const f=ut(t.default,[]);return u.value===!0&&f.unshift(k("div",{class:"q-focus-helper",tabindex:-1,ref:p})),f}return()=>{const f={ref:r,class:v.value,style:S.value,role:"listitem",onClick:E,onKeyup:q};return u.value===!0?(f.tabindex=e.tabindex||"0",Object.assign(f,a.value)):y.value===!0&&(f["aria-disabled"]="true"),k(m.value,f,g())}}}),It=Q({name:"QList",props:{...xe,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:t}){const n=A(),o=Be(e,n.proxy.$q),l=w(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(o.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>k(e.tag,{class:l.value},j(t.default))}}),zt=Q({name:"QBtnGroup",props:{unelevated:Boolean,outline:Boolean,flat:Boolean,rounded:Boolean,square:Boolean,push:Boolean,stretch:Boolean,glossy:Boolean,spread:Boolean},setup(e,{slots:t}){const n=w(()=>{const o=["unelevated","outline","flat","rounded","square","push","stretch","glossy"].filter(l=>e[l]===!0).map(l=>`q-btn-group--${l}`).join(" ");return`q-btn-group row no-wrap${o.length!==0?" "+o:""}`+(e.spread===!0?" q-btn-group--spread":" inline")});return()=>k("div",{class:n.value},j(t.default))}});const Ot={target:{default:!0},noParentEvent:Boolean,contextMenu:Boolean};function jt({showing:e,avoidEmit:t,configureAnchorEl:n}){const{props:o,proxy:l,emit:d}=A(),a=x(null);let i=null;function m(u){return a.value===null?!1:u===void 0||u.touches===void 0||u.touches.length<=1}const c={};n===void 0&&(Object.assign(c,{hide(u){l.hide(u)},toggle(u){l.toggle(u),u.qAnchorHandled=!0},toggleKey(u){re(u,13)===!0&&c.toggle(u)},contextClick(u){l.hide(u),Se(u),ae(()=>{l.show(u),u.qAnchorHandled=!0})},prevent:Se,mobileTouch(u){if(c.mobileCleanup(u),m(u)!==!0)return;l.hide(u),a.value.classList.add("non-selectable");const v=u.target;Ce(c,"anchor",[[v,"touchmove","mobileCleanup","passive"],[v,"touchend","mobileCleanup","passive"],[v,"touchcancel","mobileCleanup","passive"],[a.value,"contextmenu","prevent","notPassive"]]),i=setTimeout(()=>{i=null,l.show(u),u.qAnchorHandled=!0},300)},mobileCleanup(u){a.value.classList.remove("non-selectable"),i!==null&&(clearTimeout(i),i=null),e.value===!0&&u!==void 0&&Ft()}}),n=function(u=o.contextMenu){if(o.noParentEvent===!0||a.value===null)return;let v;u===!0?l.$q.platform.is.mobile===!0?v=[[a.value,"touchstart","mobileTouch","passive"]]:v=[[a.value,"mousedown","hide","passive"],[a.value,"contextmenu","contextClick","notPassive"]]:v=[[a.value,"click","toggle","passive"],[a.value,"keyup","toggleKey","passive"]],Ce(c,"anchor",v)});function r(){rt(c,"anchor")}function p(u){for(a.value=u;a.value.classList.contains("q-anchor--skip");)a.value=a.value.parentNode;n()}function y(){if(o.target===!1||o.target===""||l.$el.parentNode===null)a.value=null;else if(o.target===!0)p(l.$el.parentNode);else{let u=o.target;if(typeof o.target=="string")try{u=document.querySelector(o.target)}catch{u=void 0}u!=null?(a.value=u.$el||u,n()):(a.value=null,console.error(`Anchor: target "${o.target}" not found`))}}return F(()=>o.contextMenu,u=>{a.value!==null&&(r(),n(u))}),F(()=>o.target,()=>{a.value!==null&&r(),y()}),F(()=>o.noParentEvent,u=>{a.value!==null&&(u===!0?r():n())}),se(()=>{y(),t!==!0&&o.modelValue===!0&&a.value===null&&d("update:modelValue",!1)}),te(()=>{i!==null&&clearTimeout(i),r()}),{anchorEl:a,canShow:m,anchorEvents:c}}function Kt(e,t){const n=x(null);let o;function l(i,m){const c=`${m!==void 0?"add":"remove"}EventListener`,r=m!==void 0?m:o;i!==window&&i[c]("scroll",r,pe.passive),window[c]("scroll",r,pe.passive),o=m}function d(){n.value!==null&&(l(n.value),n.value=null)}const a=F(()=>e.noParentEvent,()=>{n.value!==null&&(d(),t())});return te(a),{localScrollTarget:n,unconfigureScrollTarget:d,changeScrollEvent:l}}const Nt={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},Ut=["beforeShow","show","beforeHide","hide"];function Gt({showing:e,canShow:t,hideOnRouteChange:n,handleShow:o,handleHide:l,processOnMount:d}){const a=A(),{props:i,emit:m,proxy:c}=a;let r;function p(g){e.value===!0?v(g):y(g)}function y(g){if(i.disable===!0||g!==void 0&&g.qAnchorHandled===!0||t!==void 0&&t(g)!==!0)return;const f=i["onUpdate:modelValue"]!==void 0;f===!0&&(m("update:modelValue",!0),r=g,ae(()=>{r===g&&(r=void 0)})),(i.modelValue===null||f===!1)&&u(g)}function u(g){e.value!==!0&&(e.value=!0,m("beforeShow",g),o!==void 0?o(g):m("show",g))}function v(g){if(i.disable===!0)return;const f=i["onUpdate:modelValue"]!==void 0;f===!0&&(m("update:modelValue",!1),r=g,ae(()=>{r===g&&(r=void 0)})),(i.modelValue===null||f===!1)&&S(g)}function S(g){e.value!==!1&&(e.value=!1,m("beforeHide",g),l!==void 0?l(g):m("hide",g))}function E(g){i.disable===!0&&g===!0?i["onUpdate:modelValue"]!==void 0&&m("update:modelValue",!1):g===!0!==e.value&&(g===!0?u:S)(r)}F(()=>i.modelValue,E),n!==void 0&&st(a)===!0&&F(()=>c.$route.fullPath,()=>{n.value===!0&&e.value===!0&&v()}),d===!0&&se(()=>{E(i.modelValue)});const q={show:y,hide:v,toggle:p};return Object.assign(c,q),q}let J=[],ee=[];function je(e){ee=ee.filter(t=>t!==e)}function Yt(e){je(e),ee.push(e)}function Pe(e){je(e),ee.length===0&&J.length!==0&&(J[J.length-1](),J=[])}function Xt(e){ee.length===0?e():J.push(e)}const z=[];function Zt(e){return z.find(t=>t.contentEl!==null&&t.contentEl.contains(e))}function Ke(e,t){do{if(e.$options.name==="QMenu"){if(e.hide(t),e.$props.separateClosePopup===!0)return le(e)}else if(e.__qPortal===!0){const n=le(e);return n!==void 0&&n.$options.name==="QPopupProxy"?(e.hide(t),n):e}e=le(e)}while(e!=null)}function Jt(e,t,n){for(;n!==0&&e!==void 0&&e!==null;){if(e.__qPortal===!0){if(n--,e.$options.name==="QMenu"){e=Ke(e,t);continue}e.hide(t)}e=le(e)}}function en(e){for(e=e.parent;e!=null;){if(e.type.name==="QGlobalDialog")return!0;if(e.type.name==="QDialog"||e.type.name==="QMenu")return!1;e=e.parent}return!1}function tn(e,t,n,o){const l=x(!1),d=x(!1);let a=null;const i={},m=o==="dialog"&&en(e);function c(p){if(p===!0){Pe(i),d.value=!0;return}d.value=!1,l.value===!1&&(m===!1&&a===null&&(a=vt(!1,o)),l.value=!0,z.push(e.proxy),Yt(i))}function r(p){if(d.value=!1,p!==!0)return;Pe(i),l.value=!1;const y=z.indexOf(e.proxy);y!==-1&&z.splice(y,1),a!==null&&(mt(a),a=null)}return ct(()=>{r(!0)}),e.proxy.__qPortal=!0,dt(e.proxy,"contentEl",()=>t.value),{showPortal:c,hidePortal:r,portalIsActive:l,portalIsAccessible:d,renderPortal:()=>m===!0?n():l.value===!0?[k(ft,{to:a},n())]:void 0}}const Ne={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function nn(e,t=()=>{},n=()=>{}){return{transitionProps:w(()=>{const o=`q-transition--${e.transitionShow||t()}`,l=`q-transition--${e.transitionHide||n()}`;return{appear:!0,enterFromClass:`${o}-enter-from`,enterActiveClass:`${o}-enter-active`,enterToClass:`${o}-enter-to`,leaveFromClass:`${l}-leave-from`,leaveActiveClass:`${l}-leave-active`,leaveToClass:`${l}-leave-to`}}),transitionStyle:w(()=>`--q-transition-duration: ${e.transitionDuration}ms`)}}function on(){let e;const t=A();function n(){e=void 0}return Re(n),te(n),{removeTick:n,registerTick(o){e=o,ae(()=>{e===o&&(Ie(t)===!1&&e(),e=void 0)})}}}function ln(){let e=null;const t=A();function n(){e!==null&&(clearTimeout(e),e=null)}return Re(n),te(n),{removeTimeout:n,registerTimeout(o,l){n(),Ie(t)===!1&&(e=setTimeout(o,l))}}}const $=[];let O;function an(e){O=e.keyCode===27}function un(){O===!0&&(O=!1)}function rn(e){O===!0&&(O=!1,re(e,27)===!0&&$[$.length-1](e))}function Ue(e){window[e]("keydown",an),window[e]("blur",un),window[e]("keyup",rn),O=!1}function sn(e){we.is.desktop===!0&&($.push(e),$.length===1&&Ue("addEventListener"))}function Fe(e){const t=$.indexOf(e);t>-1&&($.splice(t,1),$.length===0&&Ue("removeEventListener"))}const W=[];function Ge(e){W[W.length-1](e)}function cn(e){we.is.desktop===!0&&(W.push(e),W.length===1&&document.body.addEventListener("focusin",Ge))}function dn(e){const t=W.indexOf(e);t>-1&&(W.splice(t,1),W.length===0&&document.body.removeEventListener("focusin",Ge))}const{notPassiveCapture:ie}=pe,V=[];function ue(e){const t=e.target;if(t===void 0||t.nodeType===8||t.classList.contains("no-pointer-events")===!0)return;let n=z.length-1;for(;n>=0;){const o=z[n].$;if(o.type.name==="QTooltip"){n--;continue}if(o.type.name!=="QDialog")break;if(o.props.seamless!==!0)return;n--}for(let o=V.length-1;o>=0;o--){const l=V[o];if((l.anchorEl.value===null||l.anchorEl.value.contains(t)===!1)&&(t===document.body||l.innerRef.value!==null&&l.innerRef.value.contains(t)===!1))e.qClickOutside=!0,l.onClickOutside(e);else return}}function fn(e){V.push(e),V.length===1&&(document.addEventListener("mousedown",ue,ie),document.addEventListener("touchstart",ue,ie))}function Me(e){const t=V.findIndex(n=>n===e);t>-1&&(V.splice(t,1),V.length===0&&(document.removeEventListener("mousedown",ue,ie),document.removeEventListener("touchstart",ue,ie)))}let He,De;function Ae(e){const t=e.split(" ");return t.length!==2?!1:["top","center","bottom"].includes(t[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(t[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function vn(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const ye={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{ye[`${e}#ltr`]=e,ye[`${e}#rtl`]=e});function Le(e,t){const n=e.split(" ");return{vertical:n[0],horizontal:ye[`${n[1]}#${t===!0?"rtl":"ltr"}`]}}function mn(e,t){let{top:n,left:o,right:l,bottom:d,width:a,height:i}=e.getBoundingClientRect();return t!==void 0&&(n-=t[1],o-=t[0],d+=t[1],l+=t[0],a+=t[0],i+=t[1]),{top:n,bottom:d,height:i,left:o,right:l,width:a,middle:o+(l-o)/2,center:n+(d-n)/2}}function hn(e,t,n){let{top:o,left:l}=e.getBoundingClientRect();return o+=t.top,l+=t.left,n!==void 0&&(o+=n[1],l+=n[0]),{top:o,bottom:o+1,height:1,left:l,right:l+1,width:1,middle:l,center:o}}function gn(e,t){return{top:0,center:t/2,bottom:t,left:0,middle:e/2,right:e}}function $e(e,t,n,o){return{top:e[n.vertical]-t[o.vertical],left:e[n.horizontal]-t[o.horizontal]}}function Ye(e,t=0){if(e.targetEl===null||e.anchorEl===null||t>5)return;if(e.targetEl.offsetHeight===0||e.targetEl.offsetWidth===0){setTimeout(()=>{Ye(e,t+1)},10);return}const{targetEl:n,offset:o,anchorEl:l,anchorOrigin:d,selfOrigin:a,absoluteOffset:i,fit:m,cover:c,maxHeight:r,maxWidth:p}=e;if(we.is.ios===!0&&window.visualViewport!==void 0){const D=document.body.style,{offsetLeft:_,offsetTop:T}=window.visualViewport;_!==He&&(D.setProperty("--q-pe-left",_+"px"),He=_),T!==De&&(D.setProperty("--q-pe-top",T+"px"),De=T)}const{scrollLeft:y,scrollTop:u}=n,v=i===void 0?mn(l,c===!0?[0,0]:o):hn(l,i,o);Object.assign(n.style,{top:0,left:0,minWidth:null,minHeight:null,maxWidth:p||"100vw",maxHeight:r||"100vh",visibility:"visible"});const{offsetWidth:S,offsetHeight:E}=n,{elWidth:q,elHeight:g}=m===!0||c===!0?{elWidth:Math.max(v.width,S),elHeight:c===!0?Math.max(v.height,E):E}:{elWidth:S,elHeight:E};let f={maxWidth:p,maxHeight:r};(m===!0||c===!0)&&(f.minWidth=v.width+"px",c===!0&&(f.minHeight=v.height+"px")),Object.assign(n.style,f);const s=gn(q,g);let h=$e(v,s,d,a);if(i===void 0||o===void 0)ge(h,v,s,d,a);else{const{top:D,left:_}=h;ge(h,v,s,d,a);let T=!1;if(h.top!==D){T=!0;const P=2*o[1];v.center=v.top-=P,v.bottom-=P+2}if(h.left!==_){T=!0;const P=2*o[0];v.middle=v.left-=P,v.right-=P+2}T===!0&&(h=$e(v,s,d,a),ge(h,v,s,d,a))}f={top:h.top+"px",left:h.left+"px"},h.maxHeight!==void 0&&(f.maxHeight=h.maxHeight+"px",v.height>h.maxHeight&&(f.minHeight=f.maxHeight)),h.maxWidth!==void 0&&(f.maxWidth=h.maxWidth+"px",v.width>h.maxWidth&&(f.minWidth=f.maxWidth)),Object.assign(n.style,f),n.scrollTop!==u&&(n.scrollTop=u),n.scrollLeft!==y&&(n.scrollLeft=y)}function ge(e,t,n,o,l){const d=n.bottom,a=n.right,i=Ht(),m=window.innerHeight-i,c=document.body.clientWidth;if(e.top<0||e.top+d>m)if(l.vertical==="center")e.top=t[o.vertical]>m/2?Math.max(0,m-d):0,e.maxHeight=Math.min(d,m);else if(t[o.vertical]>m/2){const r=Math.min(m,o.vertical==="center"?t.center:o.vertical===l.vertical?t.bottom:t.top);e.maxHeight=Math.min(d,r),e.top=Math.max(0,r-d)}else e.top=Math.max(0,o.vertical==="center"?t.center:o.vertical===l.vertical?t.top:t.bottom),e.maxHeight=Math.min(d,m-e.top);if(e.left<0||e.left+a>c)if(e.maxWidth=Math.min(a,c),l.horizontal==="middle")e.left=t[o.horizontal]>c/2?Math.max(0,c-a):0;else if(t[o.horizontal]>c/2){const r=Math.min(c,o.horizontal==="middle"?t.middle:o.horizontal===l.horizontal?t.right:t.left);e.maxWidth=Math.min(a,r),e.left=Math.max(0,r-e.maxWidth)}else e.left=Math.max(0,o.horizontal==="middle"?t.middle:o.horizontal===l.horizontal?t.left:t.right),e.maxWidth=Math.min(a,c-e.left)}var bn=Q({name:"QMenu",inheritAttrs:!1,props:{...Ot,...Nt,...xe,...Ne,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:Ae},self:{type:String,validator:Ae},offset:{type:Array,validator:vn},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...Ut,"click","escapeKey"],setup(e,{slots:t,emit:n,attrs:o}){let l=null,d,a,i;const m=A(),{proxy:c}=m,{$q:r}=c,p=x(null),y=x(!1),u=w(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),v=Be(e,r),{registerTick:S,removeTick:E}=on(),{registerTimeout:q}=ln(),{transitionProps:g,transitionStyle:f}=nn(e),{localScrollTarget:s,changeScrollEvent:h,unconfigureScrollTarget:D}=Kt(e,Ee),{anchorEl:_,canShow:T}=jt({showing:y}),{hide:P}=Gt({showing:y,canShow:T,handleShow:Je,handleHide:et,hideOnRouteChange:u,processOnMount:!0}),{showPortal:K,hidePortal:N,renderPortal:ne}=tn(m,p,nt,"menu"),R={anchorEl:_,innerRef:p,onClickOutside(b){if(e.persistent!==!0&&y.value===!0)return P(b),(b.type==="touchstart"||b.target.classList.contains("q-dialog__backdrop"))&&Qe(b),!0}},U=w(()=>Le(e.anchor||(e.cover===!0?"center middle":"bottom start"),r.lang.rtl)),M=w(()=>e.cover===!0?U.value:Le(e.self||"top start",r.lang.rtl)),Xe=w(()=>(e.square===!0?" q-menu--square":"")+(v.value===!0?" q-menu--dark q-dark":"")),Ze=w(()=>e.autoClose===!0?{onClick:tt}:{}),qe=w(()=>y.value===!0&&e.persistent!==!0);F(qe,b=>{b===!0?(sn(de),fn(R)):(Fe(de),Me(R))});function ce(){Xt(()=>{let b=p.value;b&&b.contains(document.activeElement)!==!0&&(b=b.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||b.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||b.querySelector("[autofocus], [data-autofocus]")||b,b.focus({preventScroll:!0}))})}function Je(b){if(l=e.noRefocus===!1?document.activeElement:null,cn(_e),K(),Ee(),d=void 0,b!==void 0&&(e.touchPosition||e.contextMenu)){const fe=ht(b);if(fe.left!==void 0){const{top:ot,left:lt}=_.value.getBoundingClientRect();d={left:fe.left-lt,top:fe.top-ot}}}a===void 0&&(a=F(()=>r.screen.width+"|"+r.screen.height+"|"+e.self+"|"+e.anchor+"|"+r.lang.rtl,G)),e.noFocus!==!0&&document.activeElement.blur(),S(()=>{G(),e.noFocus!==!0&&ce()}),q(()=>{r.platform.is.ios===!0&&(i=e.autoClose,p.value.click()),G(),K(!0),n("show",b)},e.transitionDuration)}function et(b){E(),N(),ke(!0),l!==null&&(b===void 0||b.qClickOutside!==!0)&&(((b&&b.type.indexOf("key")===0?l.closest('[tabindex]:not([tabindex^="-"])'):void 0)||l).focus(),l=null),q(()=>{N(!0),n("hide",b)},e.transitionDuration)}function ke(b){d=void 0,a!==void 0&&(a(),a=void 0),(b===!0||y.value===!0)&&(dn(_e),D(),Me(R),Fe(de)),b!==!0&&(l=null)}function Ee(){(_.value!==null||e.scrollTarget!==void 0)&&(s.value=Dt(_.value,e.scrollTarget),h(s.value,G))}function tt(b){i!==!0?(Ke(c,b),n("click",b)):i=!1}function _e(b){qe.value===!0&&e.noFocus!==!0&&gt(p.value,b.target)!==!0&&ce()}function de(b){n("escapeKey"),P(b)}function G(){Ye({targetEl:p.value,offset:e.offset,anchorEl:_.value,anchorOrigin:U.value,selfOrigin:M.value,absoluteOffset:d,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function nt(){return k(ze,g.value,()=>y.value===!0?k("div",{role:"menu",...o,ref:p,tabindex:-1,class:["q-menu q-position-engine scroll"+Xe.value,o.class],style:[o.style,f.value],...Ze.value},j(t.default)):null)}return te(ke),Object.assign(c,{focus:ce,updatePosition:G}),ne}});let be,oe=0;const B=new Array(256);for(let e=0;e<256;e++)B[e]=(e+256).toString(16).substring(1);const pn=(()=>{const e=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return t=>{const n=new Uint8Array(t);return e.getRandomValues(n),n}}return t=>{const n=[];for(let o=t;o>0;o--)n.push(Math.floor(Math.random()*256));return n}})(),We=4096;function yn(){(be===void 0||oe+16>We)&&(oe=0,be=pn(We));const e=Array.prototype.slice.call(be,oe,oe+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,B[e[0]]+B[e[1]]+B[e[2]]+B[e[3]]+"-"+B[e[4]]+B[e[5]]+"-"+B[e[6]]+B[e[7]]+"-"+B[e[8]]+B[e[9]]+"-"+B[e[10]]+B[e[11]]+B[e[12]]+B[e[13]]+B[e[14]]+B[e[15]]}const wn=Object.keys(Oe),xn=e=>wn.reduce((t,n)=>{const o=e[n];return o!==void 0&&(t[n]=o),t},{});var Bn=Q({name:"QBtnDropdown",props:{...Oe,...Ne,modelValue:Boolean,split:Boolean,dropdownIcon:String,contentClass:[Array,String,Object],contentStyle:[Array,String,Object],cover:Boolean,persistent:Boolean,noRouteDismiss:Boolean,autoClose:Boolean,menuAnchor:{type:String,default:"bottom end"},menuSelf:{type:String,default:"top end"},menuOffset:Array,disableMainBtn:Boolean,disableDropdown:Boolean,noIconAnimation:Boolean,toggleAriaLabel:String},emits:["update:modelValue","click","beforeShow","show","beforeHide","hide"],setup(e,{slots:t,emit:n}){const{proxy:o}=A(),l=x(e.modelValue),d=x(null),a=yn(),i=w(()=>{const s={"aria-expanded":l.value===!0?"true":"false","aria-haspopup":"true","aria-controls":a,"aria-label":e.toggleAriaLabel||o.$q.lang.label[l.value===!0?"collapse":"expand"](e.label)};return(e.disable===!0||e.split===!1&&e.disableMainBtn===!0||e.disableDropdown===!0)&&(s["aria-disabled"]="true"),s}),m=w(()=>"q-btn-dropdown__arrow"+(l.value===!0&&e.noIconAnimation===!1?" rotate-180":"")+(e.split===!1?" q-btn-dropdown__arrow-container":"")),c=w(()=>pt(e)),r=w(()=>xn(e));F(()=>e.modelValue,s=>{d.value!==null&&d.value[s?"show":"hide"]()}),F(()=>e.split,f);function p(s){l.value=!0,n("beforeShow",s)}function y(s){n("show",s),n("update:modelValue",!0)}function u(s){l.value=!1,n("beforeHide",s)}function v(s){n("hide",s),n("update:modelValue",!1)}function S(s){n("click",s)}function E(s){yt(s),f(),n("click",s)}function q(s){d.value!==null&&d.value.toggle(s)}function g(s){d.value!==null&&d.value.show(s)}function f(s){d.value!==null&&d.value.hide(s)}return Object.assign(o,{show:g,hide:f,toggle:q}),se(()=>{e.modelValue===!0&&g()}),()=>{const s=[k(bt,{class:m.value,name:e.dropdownIcon||o.$q.iconSet.arrow.dropdown})];return e.disableDropdown!==!0&&s.push(k(bn,{ref:d,id:a,class:e.contentClass,style:e.contentStyle,cover:e.cover,fit:!0,persistent:e.persistent,noRouteDismiss:e.noRouteDismiss,autoClose:e.autoClose,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,separateClosePopup:!0,transitionShow:e.transitionShow,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,onBeforeShow:p,onShow:y,onBeforeHide:u,onHide:v},t.default)),e.split===!1?k(ve,{class:"q-btn-dropdown q-btn-dropdown--simple",...r.value,...i.value,disable:e.disable===!0||e.disableMainBtn===!0,noWrap:!0,round:!1,onClick:S},{default:()=>j(t.label,[]).concat(s),loading:t.loading}):k(zt,{class:"q-btn-dropdown q-btn-dropdown--split no-wrap q-btn-item",rounded:e.rounded,square:e.square,...c.value,glossy:e.glossy,stretch:e.stretch},()=>[k(ve,{class:"q-btn-dropdown--current",...r.value,disable:e.disable===!0||e.disableMainBtn===!0,noWrap:!0,round:!1,onClick:E},{default:t.label,loading:t.loading}),k(ve,{class:"q-btn-dropdown__arrow-container q-anchor--skip",...i.value,...c.value,disable:e.disable===!0||e.disableDropdown===!0,rounded:e.rounded,color:e.color,textColor:e.textColor,dense:e.dense,size:e.size,padding:e.padding,ripple:e.ripple},()=>s)])}}});function Ve(e){if(e===!1)return 0;if(e===!0||e===void 0)return 1;const t=parseInt(e,10);return isNaN(t)?0:t}var qn=wt({name:"close-popup",beforeMount(e,{value:t}){const n={depth:Ve(t),handler(o){n.depth!==0&&setTimeout(()=>{const l=Zt(e);l!==void 0&&Jt(l,o,n.depth)})},handlerKey(o){re(o,13)===!0&&n.handler(o)}};e.__qclosepopup=n,e.addEventListener("click",n.handler),e.addEventListener("keyup",n.handlerKey)},updated(e,{value:t,oldValue:n}){t!==n&&(e.__qclosepopup.depth=Ve(t))},beforeUnmount(e){const t=e.__qclosepopup;e.removeEventListener("click",t.handler),e.removeEventListener("keyup",t.handlerKey),delete e.__qclosepopup}});const kn=["src"],En={class:"description"},_n={class:"detail"},Sn={class:"name"},Cn={class:"version"},Tn={class:"tags"},Pn={class:"description"},Fn=xt({__name:"StorePage",setup(e){At({title:"WEB\u5546\u5E97",titleTemplate:s=>`${s} - \u661F\u706B\u5E94\u7528\u5546\u5E97`,meta:{description:{name:"description",content:"\u661F\u706B\u5E94\u7528\u5546\u5E97spark store\u5B98\u7F51"},keywords:{name:"keywords",content:"spark store,\u661F\u706B\u5E94\u7528\u5546\u5E97,\u661F\u706B\u5546\u5E97,\u661F\u706B\u5E94\u7528\u5546\u5E97\u4E0B\u8F7D,\u661F\u706B\u5546\u5E97\u4E0B\u8F7D,deepin\u5E94\u7528\u5546\u5E97,uos,ubuntu,deepin"},equiv:{"http-equiv":"Content-Type",content:"text/html; charset=UTF-8"}}});const t=Bt(),n=qt(),o=$t(),l=x(o.debSource),d=x(o.source),a=x({active:!1,animation:!1,cover:!1});Y("containerState",a);const i=x({active:!1,animation:!1,cover:!1,application:!1});Y("coverState",i);const m=x({});Y("cover",m);const c=x();Y("activeCard",c);const r=x();Y("appDetail",r);const p=w(()=>{var s;return`${l.value}/${(s=r==null?void 0:r.value)==null?void 0:s.Filename}`}),y=w(()=>{var s;return`${d.value}/${(s=r==null?void 0:r.value)==null?void 0:s.Filename}.torrent`});function u(s){var h;s.propertyName==="transform"&&i!=null&&i.value&&((h=c==null?void 0:c.value)!=null&&h.class&&(c.value.class.cover=i.value.active),i.value.animation=!1,i.value.open=i.value.active)}const v=x({active:!1});function S(){v.value.active=!0}function E(){v.value.active=!1}const q=x({active:!1});function g(){q.value.active=!0}function f(){var s,h;q.value.active=!1,(s=c.value)!=null&&s.Package&&n.push(`/store/application/${encodeURIComponent((h=c.value)==null?void 0:h.Package.replaceAll(".","_dot_"))}`)}return se(()=>{F(()=>t.name,()=>{i.value.application=t.name==="application"},{immediate:!0})}),(s,h)=>{const D=kt("router-view");return X(),me(Lt,{class:"flex storePage"},{default:H(()=>{var _,T,P,K,N,ne,R,U;return[C("div",{class:he(["coverView",i.value]),onClick:h[6]||(h[6]=()=>{i.value&&(i.value.active=!1,i.value.open=!1,i.value.loaded=!1,i.value.animation=!0),a.value.cover=!1}),style:Tt((_=m.value)==null?void 0:_.style)},[C("div",{class:"card",onTransitionend:u,onClick:h[5]||(h[5]=Z(()=>{},["stop"]))},[C("div",{class:he(["cardView",v.value]),onTransitionend:h[3]||(h[3]=Z(()=>{},["stop"])),onMousedown:S,onMouseup:E},[C("img",{src:(T=c.value)==null?void 0:T.imgSrc,alt:"",onError:h[0]||(h[0]=()=>{var M;(M=c.value)!=null&&M.imgError&&(c.value.imgError=!0)})},null,40,kn),C("div",En,[C("h6",null,I((P=c.value)==null?void 0:P.Name),1),C("p",null,I((K=c.value)==null?void 0:K.More),1)]),C("div",_n,[C("h1",Sn,I((N=r.value)==null?void 0:N.Name),1),C("span",Cn,I((ne=r.value)==null?void 0:ne.Version),1),C("div",Tn,[(X(!0),Te(_t,null,Et((R=r.value)==null?void 0:R.Tags,M=>(X(),Te("span",{key:M},I(M),1))),128))]),C("p",Pn,I((U=r.value)==null?void 0:U.More),1),L(Bn,{split:"",ripple:!1,href:p.value,color:"primary",label:"\u4E0B\u8F7D\uFF08DEB\uFF09","menu-anchor":"bottom middle","menu-self":"top middle",padding:"sm xl",onClick:h[1]||(h[1]=Z(()=>{},["stop"])),onMousedown:h[2]||(h[2]=Z(()=>{},["stop"]))},{default:H(()=>[L(It,null,{default:H(()=>[St((X(),me(Rt,{clickable:"",href:y.value},{default:H(()=>[L(Qt,null,{default:H(()=>[L(Vt,null,{default:H(()=>[Ct("BT\uFF08\u591A\u6E90\u4E0B\u8F7D\u66F4\u5FEB\uFF09")]),_:1})]),_:1})]),_:1},8,["href"])),[[qn]])]),_:1})]),_:1},8,["href"])])],34),C("div",{class:he(["toolBox",q.value]),onTransitionend:h[4]||(h[4]=Z(()=>{},["stop"])),onMousedown:g,onMouseup:f}," \u67E5\u770B\u8BE6\u60C5 ",34)],32)],6),L(Mt,{style:{width:"100%"},"thumb-style":{zIndex:"2",borderRadius:"100px"},visible:!1},{default:H(()=>[L(D,null,{default:H(({Component:M})=>[L(ze,null,{default:H(()=>[(X(),me(Pt(M)))]),_:2},1024)]),_:1})]),_:1})]}),_:1})}}});var Vn=Wt(Fn,[["__scopeId","data-v-668789b6"]]);export{Vn as default};
