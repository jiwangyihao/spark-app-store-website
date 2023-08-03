import{j as N,c as y,h as H,m as Z,ao as rt,ap as ut,r as E,aq as pe,Y as Ue,a2 as st,g as z,ag as Me,O as me,ae as $e,w as L,o as G,k as oe,aj as ct,N as Se,ar as dt,as as ve,a as ft,at as vt,au as mt,av as ht,aw as gt,a0 as Ge,ax as Ye,ac as Ce,ai as pt,ay as bt,az as yt,aA as Xe,Q as wt,K as xe,aB as xt,ah as Et,ab as qt,i as kt,aC as Bt,aD as St,v as _t,x as Ct,aE as Tt,a7 as Ae,z as U,A as ee,B as S,aa as ce,H as Q,F as De,D as Le,d as de,C as te,E as Ee,aF as qe,ak as Pt,G as Ht,Z as Mt}from"./index.2a509285.js";import{u as Te,a as Pe}from"./use-dark.4010f2c8.js";import{c as $t}from"./selection.205c887c.js";import{g as At,a as Dt}from"./scroll.dda04a9c.js";import{api as Fe}from"./api.31ee6ffb.js";import{_ as Lt}from"./plugin-vue_export-helper.21dcd24c.js";var Ft=N({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:n}){const t=y(()=>parseInt(e.lines,10)),a=y(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(t.value===1?" ellipsis":"")),o=y(()=>e.lines!==void 0&&t.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":t.value}:null);return()=>H("div",{style:o.value,class:a.value},Z(n.default))}}),Wt=N({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:n}){const t=y(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>H("div",{class:t.value},Z(n.default))}}),Vt=N({name:"QItem",props:{...Te,...rt,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:n,emit:t}){const{proxy:{$q:a}}=z(),o=Pe(e,a),{hasLink:i,linkAttrs:l,linkClass:s,linkTag:h,navigateOnClick:v}=ut(),c=E(null),w=E(null),x=y(()=>e.clickable===!0||i.value===!0||e.tag==="label"),r=y(()=>e.disable!==!0&&x.value===!0),u=y(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(o.value===!0?" q-item--dark":"")+(i.value===!0&&e.active===null?s.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(r.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),_=y(()=>{if(e.insetLevel===void 0)return null;const f=a.lang.rtl===!0?"Right":"Left";return{["padding"+f]:16+e.insetLevel*56+"px"}});function M(f){r.value===!0&&(w.value!==null&&(f.qKeyEvent!==!0&&document.activeElement===c.value?w.value.focus():document.activeElement===w.value&&c.value.focus()),v(f))}function B(f){if(r.value===!0&&pe(f,13)===!0){Ue(f),f.qKeyEvent=!0;const d=new MouseEvent("click",f);d.qKeyEvent=!0,c.value.dispatchEvent(d)}t("keyup",f)}function p(){const f=st(n.default,[]);return r.value===!0&&f.unshift(H("div",{class:"q-focus-helper",tabindex:-1,ref:w})),f}return()=>{const f={ref:c,class:u.value,style:_.value,role:"listitem",onClick:M,onKeyup:B};return r.value===!0?(f.tabindex=e.tabindex||"0",Object.assign(f,l.value)):x.value===!0&&(f["aria-disabled"]="true"),H(h.value,f,p())}}}),It=N({name:"QList",props:{...Te,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:n}){const t=z(),a=Pe(e,t.proxy.$q),o=y(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(a.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>H(e.tag,{class:o.value},Z(n.default))}}),Qt=N({name:"QBtnGroup",props:{unelevated:Boolean,outline:Boolean,flat:Boolean,rounded:Boolean,square:Boolean,push:Boolean,stretch:Boolean,glossy:Boolean,spread:Boolean},setup(e,{slots:n}){const t=y(()=>{const a=["unelevated","outline","flat","rounded","square","push","stretch","glossy"].filter(o=>e[o]===!0).map(o=>`q-btn-group--${o}`).join(" ");return`q-btn-group row no-wrap${a.length!==0?" "+a:""}`+(e.spread===!0?" q-btn-group--spread":" inline")});return()=>H("div",{class:t.value},Z(n.default))}});const zt={target:{default:!0},noParentEvent:Boolean,contextMenu:Boolean};function Rt({showing:e,avoidEmit:n,configureAnchorEl:t}){const{props:a,proxy:o,emit:i}=z(),l=E(null);let s=null;function h(r){return l.value===null?!1:r===void 0||r.touches===void 0||r.touches.length<=1}const v={};t===void 0&&(Object.assign(v,{hide(r){o.hide(r)},toggle(r){o.toggle(r),r.qAnchorHandled=!0},toggleKey(r){pe(r,13)===!0&&v.toggle(r)},contextClick(r){o.hide(r),Me(r),me(()=>{o.show(r),r.qAnchorHandled=!0})},prevent:Me,mobileTouch(r){if(v.mobileCleanup(r),h(r)!==!0)return;o.hide(r),l.value.classList.add("non-selectable");const u=r.target;$e(v,"anchor",[[u,"touchmove","mobileCleanup","passive"],[u,"touchend","mobileCleanup","passive"],[u,"touchcancel","mobileCleanup","passive"],[l.value,"contextmenu","prevent","notPassive"]]),s=setTimeout(()=>{s=null,o.show(r),r.qAnchorHandled=!0},300)},mobileCleanup(r){l.value.classList.remove("non-selectable"),s!==null&&(clearTimeout(s),s=null),e.value===!0&&r!==void 0&&$t()}}),t=function(r=a.contextMenu){if(a.noParentEvent===!0||l.value===null)return;let u;r===!0?o.$q.platform.is.mobile===!0?u=[[l.value,"touchstart","mobileTouch","passive"]]:u=[[l.value,"mousedown","hide","passive"],[l.value,"contextmenu","contextClick","notPassive"]]:u=[[l.value,"click","toggle","passive"],[l.value,"keyup","toggleKey","passive"]],$e(v,"anchor",u)});function c(){ct(v,"anchor")}function w(r){for(l.value=r;l.value.classList.contains("q-anchor--skip");)l.value=l.value.parentNode;t()}function x(){if(a.target===!1||a.target===""||o.$el.parentNode===null)l.value=null;else if(a.target===!0)w(o.$el.parentNode);else{let r=a.target;if(typeof a.target=="string")try{r=document.querySelector(a.target)}catch{r=void 0}r!=null?(l.value=r.$el||r,t()):(l.value=null,console.error(`Anchor: target "${a.target}" not found`))}}return L(()=>a.contextMenu,r=>{l.value!==null&&(c(),t(r))}),L(()=>a.target,()=>{l.value!==null&&c(),x()}),L(()=>a.noParentEvent,r=>{l.value!==null&&(r===!0?c():t())}),G(()=>{x(),n!==!0&&a.modelValue===!0&&l.value===null&&i("update:modelValue",!1)}),oe(()=>{s!==null&&clearTimeout(s),c()}),{anchorEl:l,canShow:h,anchorEvents:v}}function jt(e,n){const t=E(null);let a;function o(s,h){const v=`${h!==void 0?"add":"remove"}EventListener`,c=h!==void 0?h:a;s!==window&&s[v]("scroll",c,Se.passive),window[v]("scroll",c,Se.passive),a=h}function i(){t.value!==null&&(o(t.value),t.value=null)}const l=L(()=>e.noParentEvent,()=>{t.value!==null&&(i(),n())});return oe(l),{localScrollTarget:t,unconfigureScrollTarget:i,changeScrollEvent:o}}const Ot={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},Kt=["beforeShow","show","beforeHide","hide"];function Nt({showing:e,canShow:n,hideOnRouteChange:t,handleShow:a,handleHide:o,processOnMount:i}){const l=z(),{props:s,emit:h,proxy:v}=l;let c;function w(p){e.value===!0?u(p):x(p)}function x(p){if(s.disable===!0||p!==void 0&&p.qAnchorHandled===!0||n!==void 0&&n(p)!==!0)return;const f=s["onUpdate:modelValue"]!==void 0;f===!0&&(h("update:modelValue",!0),c=p,me(()=>{c===p&&(c=void 0)})),(s.modelValue===null||f===!1)&&r(p)}function r(p){e.value!==!0&&(e.value=!0,h("beforeShow",p),a!==void 0?a(p):h("show",p))}function u(p){if(s.disable===!0)return;const f=s["onUpdate:modelValue"]!==void 0;f===!0&&(h("update:modelValue",!1),c=p,me(()=>{c===p&&(c=void 0)})),(s.modelValue===null||f===!1)&&_(p)}function _(p){e.value!==!1&&(e.value=!1,h("beforeHide",p),o!==void 0?o(p):h("hide",p))}function M(p){s.disable===!0&&p===!0?s["onUpdate:modelValue"]!==void 0&&h("update:modelValue",!1):p===!0!==e.value&&(p===!0?r:_)(c)}L(()=>s.modelValue,M),t!==void 0&&dt(l)===!0&&L(()=>v.$route.fullPath,()=>{t.value===!0&&e.value===!0&&u()}),i===!0&&G(()=>{M(s.modelValue)});const B={show:x,hide:u,toggle:w};return Object.assign(v,B),B}let ne=[],ae=[];function Ze(e){ae=ae.filter(n=>n!==e)}function Ut(e){Ze(e),ae.push(e)}function We(e){Ze(e),ae.length===0&&ne.length!==0&&(ne[ne.length-1](),ne=[])}function Gt(e){ae.length===0?e():ne.push(e)}const Y=[];function Yt(e){return Y.find(n=>n.contentEl!==null&&n.contentEl.contains(e))}function Je(e,n){do{if(e.$options.name==="QMenu"){if(e.hide(n),e.$props.separateClosePopup===!0)return ve(e)}else if(e.__qPortal===!0){const t=ve(e);return t!==void 0&&t.$options.name==="QPopupProxy"?(e.hide(n),t):e}e=ve(e)}while(e!=null)}function Xt(e,n,t){for(;t!==0&&e!==void 0&&e!==null;){if(e.__qPortal===!0){if(t--,e.$options.name==="QMenu"){e=Je(e,n);continue}e.hide(n)}e=ve(e)}}function Zt(e){for(e=e.parent;e!=null;){if(e.type.name==="QGlobalDialog")return!0;if(e.type.name==="QDialog"||e.type.name==="QMenu")return!1;e=e.parent}return!1}function Jt(e,n,t,a){const o=E(!1),i=E(!1);let l=null;const s={},h=a==="dialog"&&Zt(e);function v(w){if(w===!0){We(s),i.value=!0;return}i.value=!1,o.value===!1&&(h===!1&&l===null&&(l=ht(!1,a)),o.value=!0,Y.push(e.proxy),Ut(s))}function c(w){if(i.value=!1,w!==!0)return;We(s),o.value=!1;const x=Y.indexOf(e.proxy);x!==-1&&Y.splice(x,1),l!==null&&(gt(l),l=null)}return ft(()=>{c(!0)}),e.proxy.__qPortal=!0,vt(e.proxy,"contentEl",()=>n.value),{showPortal:v,hidePortal:c,portalIsActive:o,portalIsAccessible:i,renderPortal:()=>h===!0?t():o.value===!0?[H(mt,{to:l},t())]:void 0}}const et={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function en(e,n=()=>{},t=()=>{}){return{transitionProps:y(()=>{const a=`q-transition--${e.transitionShow||n()}`,o=`q-transition--${e.transitionHide||t()}`;return{appear:!0,enterFromClass:`${a}-enter-from`,enterActiveClass:`${a}-enter-active`,enterToClass:`${a}-enter-to`,leaveFromClass:`${o}-leave-from`,leaveActiveClass:`${o}-leave-active`,leaveToClass:`${o}-leave-to`}}),transitionStyle:y(()=>`--q-transition-duration: ${e.transitionDuration}ms`)}}function tn(){let e;const n=z();function t(){e=void 0}return Ge(t),oe(t),{removeTick:t,registerTick(a){e=a,me(()=>{e===a&&(Ye(n)===!1&&e(),e=void 0)})}}}function nn(){let e=null;const n=z();function t(){e!==null&&(clearTimeout(e),e=null)}return Ge(t),oe(t),{removeTimeout:t,registerTimeout(a,o){t(),Ye(n)===!1&&(e=setTimeout(a,o))}}}const j=[];let X;function an(e){X=e.keyCode===27}function on(){X===!0&&(X=!1)}function ln(e){X===!0&&(X=!1,pe(e,27)===!0&&j[j.length-1](e))}function tt(e){window[e]("keydown",an),window[e]("blur",on),window[e]("keyup",ln),X=!1}function rn(e){Ce.is.desktop===!0&&(j.push(e),j.length===1&&tt("addEventListener"))}function Ve(e){const n=j.indexOf(e);n>-1&&(j.splice(n,1),j.length===0&&tt("removeEventListener"))}const O=[];function nt(e){O[O.length-1](e)}function un(e){Ce.is.desktop===!0&&(O.push(e),O.length===1&&document.body.addEventListener("focusin",nt))}function sn(e){const n=O.indexOf(e);n>-1&&(O.splice(n,1),O.length===0&&document.body.removeEventListener("focusin",nt))}const{notPassiveCapture:he}=Se,K=[];function ge(e){const n=e.target;if(n===void 0||n.nodeType===8||n.classList.contains("no-pointer-events")===!0)return;let t=Y.length-1;for(;t>=0;){const a=Y[t].$;if(a.type.name==="QTooltip"){t--;continue}if(a.type.name!=="QDialog")break;if(a.props.seamless!==!0)return;t--}for(let a=K.length-1;a>=0;a--){const o=K[a];if((o.anchorEl.value===null||o.anchorEl.value.contains(n)===!1)&&(n===document.body||o.innerRef.value!==null&&o.innerRef.value.contains(n)===!1))e.qClickOutside=!0,o.onClickOutside(e);else return}}function cn(e){K.push(e),K.length===1&&(document.addEventListener("mousedown",ge,he),document.addEventListener("touchstart",ge,he))}function Ie(e){const n=K.findIndex(t=>t===e);n>-1&&(K.splice(n,1),K.length===0&&(document.removeEventListener("mousedown",ge,he),document.removeEventListener("touchstart",ge,he)))}let Qe,ze;function Re(e){const n=e.split(" ");return n.length!==2?!1:["top","center","bottom"].includes(n[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(n[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function dn(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const _e={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{_e[`${e}#ltr`]=e,_e[`${e}#rtl`]=e});function je(e,n){const t=e.split(" ");return{vertical:t[0],horizontal:_e[`${t[1]}#${n===!0?"rtl":"ltr"}`]}}function fn(e,n){let{top:t,left:a,right:o,bottom:i,width:l,height:s}=e.getBoundingClientRect();return n!==void 0&&(t-=n[1],a-=n[0],i+=n[1],o+=n[0],l+=n[0],s+=n[1]),{top:t,bottom:i,height:s,left:a,right:o,width:l,middle:a+(o-a)/2,center:t+(i-t)/2}}function vn(e,n,t){let{top:a,left:o}=e.getBoundingClientRect();return a+=n.top,o+=n.left,t!==void 0&&(a+=t[1],o+=t[0]),{top:a,bottom:a+1,height:1,left:o,right:o+1,width:1,middle:o,center:a}}function mn(e,n){return{top:0,center:n/2,bottom:n,left:0,middle:e/2,right:e}}function Oe(e,n,t,a){return{top:e[t.vertical]-n[a.vertical],left:e[t.horizontal]-n[a.horizontal]}}function at(e,n=0){if(e.targetEl===null||e.anchorEl===null||n>5)return;if(e.targetEl.offsetHeight===0||e.targetEl.offsetWidth===0){setTimeout(()=>{at(e,n+1)},10);return}const{targetEl:t,offset:a,anchorEl:o,anchorOrigin:i,selfOrigin:l,absoluteOffset:s,fit:h,cover:v,maxHeight:c,maxWidth:w}=e;if(Ce.is.ios===!0&&window.visualViewport!==void 0){const I=document.body.style,{offsetLeft:A,offsetTop:F}=window.visualViewport;A!==Qe&&(I.setProperty("--q-pe-left",A+"px"),Qe=A),F!==ze&&(I.setProperty("--q-pe-top",F+"px"),ze=F)}const{scrollLeft:x,scrollTop:r}=t,u=s===void 0?fn(o,v===!0?[0,0]:a):vn(o,s,a);Object.assign(t.style,{top:0,left:0,minWidth:null,minHeight:null,maxWidth:w||"100vw",maxHeight:c||"100vh",visibility:"visible"});const{offsetWidth:_,offsetHeight:M}=t,{elWidth:B,elHeight:p}=h===!0||v===!0?{elWidth:Math.max(u.width,_),elHeight:v===!0?Math.max(u.height,M):M}:{elWidth:_,elHeight:M};let f={maxWidth:w,maxHeight:c};(h===!0||v===!0)&&(f.minWidth=u.width+"px",v===!0&&(f.minHeight=u.height+"px")),Object.assign(t.style,f);const d=mn(B,p);let k=Oe(u,d,i,l);if(s===void 0||a===void 0)ke(k,u,d,i,l);else{const{top:I,left:A}=k;ke(k,u,d,i,l);let F=!1;if(k.top!==I){F=!0;const P=2*a[1];u.center=u.top-=P,u.bottom-=P+2}if(k.left!==A){F=!0;const P=2*a[0];u.middle=u.left-=P,u.right-=P+2}F===!0&&(k=Oe(u,d,i,l),ke(k,u,d,i,l))}f={top:k.top+"px",left:k.left+"px"},k.maxHeight!==void 0&&(f.maxHeight=k.maxHeight+"px",u.height>k.maxHeight&&(f.minHeight=f.maxHeight)),k.maxWidth!==void 0&&(f.maxWidth=k.maxWidth+"px",u.width>k.maxWidth&&(f.minWidth=f.maxWidth)),Object.assign(t.style,f),t.scrollTop!==r&&(t.scrollTop=r),t.scrollLeft!==x&&(t.scrollLeft=x)}function ke(e,n,t,a,o){const i=t.bottom,l=t.right,s=At(),h=window.innerHeight-s,v=document.body.clientWidth;if(e.top<0||e.top+i>h)if(o.vertical==="center")e.top=n[a.vertical]>h/2?Math.max(0,h-i):0,e.maxHeight=Math.min(i,h);else if(n[a.vertical]>h/2){const c=Math.min(h,a.vertical==="center"?n.center:a.vertical===o.vertical?n.bottom:n.top);e.maxHeight=Math.min(i,c),e.top=Math.max(0,c-i)}else e.top=Math.max(0,a.vertical==="center"?n.center:a.vertical===o.vertical?n.top:n.bottom),e.maxHeight=Math.min(i,h-e.top);if(e.left<0||e.left+l>v)if(e.maxWidth=Math.min(l,v),o.horizontal==="middle")e.left=n[a.horizontal]>v/2?Math.max(0,v-l):0;else if(n[a.horizontal]>v/2){const c=Math.min(v,a.horizontal==="middle"?n.middle:a.horizontal===o.horizontal?n.right:n.left);e.maxWidth=Math.min(l,c),e.left=Math.max(0,c-e.maxWidth)}else e.left=Math.max(0,a.horizontal==="middle"?n.middle:a.horizontal===o.horizontal?n.left:n.right),e.maxWidth=Math.min(l,v-e.left)}var hn=N({name:"QMenu",inheritAttrs:!1,props:{...zt,...Ot,...Te,...et,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:Re},self:{type:String,validator:Re},offset:{type:Array,validator:dn},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...Kt,"click","escapeKey"],setup(e,{slots:n,emit:t,attrs:a}){let o=null,i,l,s;const h=z(),{proxy:v}=h,{$q:c}=v,w=E(null),x=E(!1),r=y(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),u=Pe(e,c),{registerTick:_,removeTick:M}=tn(),{registerTimeout:B}=nn(),{transitionProps:p,transitionStyle:f}=en(e),{localScrollTarget:d,changeScrollEvent:k,unconfigureScrollTarget:I}=jt(e,R),{anchorEl:A,canShow:F}=Rt({showing:x}),{hide:P}=Nt({showing:x,canShow:F,handleShow:re,handleHide:ue,hideOnRouteChange:r,processOnMount:!0}),{showPortal:le,hidePortal:ie,renderPortal:be}=Jt(h,w,ot,"menu"),g={anchorEl:A,innerRef:w,onClickOutside(b){if(e.persistent!==!0&&x.value===!0)return P(b),(b.type==="touchstart"||b.target.classList.contains("q-dialog__backdrop"))&&Ue(b),!0}},m=y(()=>je(e.anchor||(e.cover===!0?"center middle":"bottom start"),c.lang.rtl)),V=y(()=>e.cover===!0?m.value:je(e.self||"top start",c.lang.rtl)),q=y(()=>(e.square===!0?" q-menu--square":"")+(u.value===!0?" q-menu--dark q-dark":"")),W=y(()=>e.autoClose===!0?{onClick:se}:{}),$=y(()=>x.value===!0&&e.persistent!==!0);L($,b=>{b===!0?(rn(ye),cn(g)):(Ve(ye),Ie(g))});function D(){Gt(()=>{let b=w.value;b&&b.contains(document.activeElement)!==!0&&(b=b.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||b.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||b.querySelector("[autofocus], [data-autofocus]")||b,b.focus({preventScroll:!0}))})}function re(b){if(o=e.noRefocus===!1?document.activeElement:null,un(He),le(),R(),i=void 0,b!==void 0&&(e.touchPosition||e.contextMenu)){const we=pt(b);if(we.left!==void 0){const{top:lt,left:it}=A.value.getBoundingClientRect();i={left:we.left-it,top:we.top-lt}}}l===void 0&&(l=L(()=>c.screen.width+"|"+c.screen.height+"|"+e.self+"|"+e.anchor+"|"+c.lang.rtl,J)),e.noFocus!==!0&&document.activeElement.blur(),_(()=>{J(),e.noFocus!==!0&&D()}),B(()=>{c.platform.is.ios===!0&&(s=e.autoClose,w.value.click()),J(),le(!0),t("show",b)},e.transitionDuration)}function ue(b){M(),ie(),C(!0),o!==null&&(b===void 0||b.qClickOutside!==!0)&&(((b&&b.type.indexOf("key")===0?o.closest('[tabindex]:not([tabindex^="-"])'):void 0)||o).focus(),o=null),B(()=>{ie(!0),t("hide",b)},e.transitionDuration)}function C(b){i=void 0,l!==void 0&&(l(),l=void 0),(b===!0||x.value===!0)&&(sn(He),I(),Ie(g),Ve(ye)),b!==!0&&(o=null)}function R(){(A.value!==null||e.scrollTarget!==void 0)&&(d.value=Dt(A.value,e.scrollTarget),k(d.value,J))}function se(b){s!==!0?(Je(v,b),t("click",b)):s=!1}function He(b){$.value===!0&&e.noFocus!==!0&&yt(w.value,b.target)!==!0&&D()}function ye(b){t("escapeKey"),P(b)}function J(){at({targetEl:w.value,offset:e.offset,anchorEl:A.value,anchorOrigin:m.value,selfOrigin:V.value,absoluteOffset:i,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function ot(){return H(bt,p.value,()=>x.value===!0?H("div",{role:"menu",...a,ref:w,tabindex:-1,class:["q-menu q-position-engine scroll"+q.value,a.class],style:[a.style,f.value],...W.value},Z(n.default)):null)}return oe(C),Object.assign(v,{focus:D,updatePosition:J}),be}});let Be,fe=0;const T=new Array(256);for(let e=0;e<256;e++)T[e]=(e+256).toString(16).substring(1);const gn=(()=>{const e=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return n=>{const t=new Uint8Array(n);return e.getRandomValues(t),t}}return n=>{const t=[];for(let a=n;a>0;a--)t.push(Math.floor(Math.random()*256));return t}})(),Ke=4096;function pn(){(Be===void 0||fe+16>Ke)&&(fe=0,Be=gn(Ke));const e=Array.prototype.slice.call(Be,fe,fe+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,T[e[0]]+T[e[1]]+T[e[2]]+T[e[3]]+"-"+T[e[4]]+T[e[5]]+"-"+T[e[6]]+T[e[7]]+"-"+T[e[8]]+T[e[9]]+"-"+T[e[10]]+T[e[11]]+T[e[12]]+T[e[13]]+T[e[14]]+T[e[15]]}const bn=Object.keys(Xe),yn=e=>bn.reduce((n,t)=>{const a=e[t];return a!==void 0&&(n[t]=a),n},{});var wn=N({name:"QBtnDropdown",props:{...Xe,...et,modelValue:Boolean,split:Boolean,dropdownIcon:String,contentClass:[Array,String,Object],contentStyle:[Array,String,Object],cover:Boolean,persistent:Boolean,noRouteDismiss:Boolean,autoClose:Boolean,menuAnchor:{type:String,default:"bottom end"},menuSelf:{type:String,default:"top end"},menuOffset:Array,disableMainBtn:Boolean,disableDropdown:Boolean,noIconAnimation:Boolean,toggleAriaLabel:String},emits:["update:modelValue","click","beforeShow","show","beforeHide","hide"],setup(e,{slots:n,emit:t}){const{proxy:a}=z(),o=E(e.modelValue),i=E(null),l=pn(),s=y(()=>{const d={"aria-expanded":o.value===!0?"true":"false","aria-haspopup":"true","aria-controls":l,"aria-label":e.toggleAriaLabel||a.$q.lang.label[o.value===!0?"collapse":"expand"](e.label)};return(e.disable===!0||e.split===!1&&e.disableMainBtn===!0||e.disableDropdown===!0)&&(d["aria-disabled"]="true"),d}),h=y(()=>"q-btn-dropdown__arrow"+(o.value===!0&&e.noIconAnimation===!1?" rotate-180":"")+(e.split===!1?" q-btn-dropdown__arrow-container":"")),v=y(()=>xt(e)),c=y(()=>yn(e));L(()=>e.modelValue,d=>{i.value!==null&&i.value[d?"show":"hide"]()}),L(()=>e.split,f);function w(d){o.value=!0,t("beforeShow",d)}function x(d){t("show",d),t("update:modelValue",!0)}function r(d){o.value=!1,t("beforeHide",d)}function u(d){t("hide",d),t("update:modelValue",!1)}function _(d){t("click",d)}function M(d){Et(d),f(),t("click",d)}function B(d){i.value!==null&&i.value.toggle(d)}function p(d){i.value!==null&&i.value.show(d)}function f(d){i.value!==null&&i.value.hide(d)}return Object.assign(a,{show:p,hide:f,toggle:B}),G(()=>{e.modelValue===!0&&p()}),()=>{const d=[H(wt,{class:h.value,name:e.dropdownIcon||a.$q.iconSet.arrow.dropdown})];return e.disableDropdown!==!0&&d.push(H(hn,{ref:i,id:l,class:e.contentClass,style:e.contentStyle,cover:e.cover,fit:!0,persistent:e.persistent,noRouteDismiss:e.noRouteDismiss,autoClose:e.autoClose,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,separateClosePopup:!0,transitionShow:e.transitionShow,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,onBeforeShow:w,onShow:x,onBeforeHide:r,onHide:u},n.default)),e.split===!1?H(xe,{class:"q-btn-dropdown q-btn-dropdown--simple",...c.value,...s.value,disable:e.disable===!0||e.disableMainBtn===!0,noWrap:!0,round:!1,onClick:_},{default:()=>Z(n.label,[]).concat(d),loading:n.loading}):H(Qt,{class:"q-btn-dropdown q-btn-dropdown--split no-wrap q-btn-item",rounded:e.rounded,square:e.square,...v.value,glossy:e.glossy,stretch:e.stretch},()=>[H(xe,{class:"q-btn-dropdown--current",...c.value,disable:e.disable===!0||e.disableMainBtn===!0,noWrap:!0,round:!1,onClick:M},{default:n.label,loading:n.loading}),H(xe,{class:"q-btn-dropdown__arrow-container q-anchor--skip",...s.value,...v.value,disable:e.disable===!0||e.disableDropdown===!0,rounded:e.rounded,color:e.color,textColor:e.textColor,dense:e.dense,size:e.size,padding:e.padding,ripple:e.ripple},()=>d)])}}});function Ne(e){if(e===!1)return 0;if(e===!0||e===void 0)return 1;const n=parseInt(e,10);return isNaN(n)?0:n}var xn=qt({name:"close-popup",beforeMount(e,{value:n}){const t={depth:Ne(n),handler(a){t.depth!==0&&setTimeout(()=>{const o=Yt(e);o!==void 0&&Xt(o,a,t.depth)})},handlerKey(a){pe(a,13)===!0&&t.handler(a)}};e.__qclosepopup=t,e.addEventListener("click",t.handler),e.addEventListener("keyup",t.handlerKey)},updated(e,{value:n,oldValue:t}){n!==t&&(e.__qclosepopup.depth=Ne(n))},beforeUnmount(e){const n=e.__qclosepopup;e.removeEventListener("click",n.handler),e.removeEventListener("keyup",n.handlerKey),delete e.__qclosepopup}}),En="/spark-store-qe/assets/application.bc4a430e.svg";function qn(){return kt(Bt)}const kn=St("counter",{state:()=>({appList:{},source:"https://d.store.deepinos.org.cn",debSource:"https://mirrors.sdu.edu.cn/spark-store-repository/"}),getters:{},actions:{}});const Bn=["src"],Sn={class:"description"},_n={class:"detail"},Cn={class:"name"},Tn={class:"version"},Pn={class:"tags"},Hn={class:"description"},Mn=["onMousedown","onMouseup"],$n=["onTransitionend"],An=["src","onError"],Dn={class:"description"},Ln=_t({__name:"SortPage",setup(e){const n=qn(),t=E(),a=E({}),o=E({active:!1,animation:!1,cover:!1}),i=E({active:!1,animation:!1,loaded:!1,open:!1}),l=E(),s=Ct(),h=Tt(),v=kn(),c=E([]),w=E(v.source),x=E(v.debSource),r=E(s.params.sort.toString());G(()=>{L(()=>s.params.sort,()=>{if(s.params.sort){async function g(){const m=await Fe.getApplicationList(s.params.sort.toString());m.length>0?(c.value=f(m),r.value=s.params.sort.toString(),cancelAnimationFrame(d.value.animationId),t.value.parentElement.parentElement.scrollTo({top:t.value.parentElement.parentElement.scrollTop,behavior:"smooth"})):await h.push("/Error404")}i.value.active?(i.value.active=!1,i.value.open=!1,i.value.loaded=!1,o.value.cover=!1,i.value.animation=!0,setTimeout(g,2e3)):g().catch(m=>{n.notify({type:"negative",message:m.toString()})})}},{immediate:!0})});const u={cardWidth:264,cardHeight:92,verticalPadding:50,horizonPadding:16,gap:32},_=E(0),M=y(()=>`${Math.ceil(c.value.length/B.value)*(u.cardHeight+u.gap)+u.gap+u.verticalPadding*1.5}px`),B=y(()=>Math.floor((_.value+u.gap-u.horizonPadding*2)/(u.cardWidth+u.gap))),p=y(()=>(_.value-(u.cardWidth+u.gap)*B.value+u.gap-u.horizonPadding*2)/(B.value+1));function f(g){var V;g.forEach((q,W)=>{q.position={left:y(()=>W%B.value*(p.value+u.gap+u.cardWidth)+u.horizonPadding+p.value),top:y(()=>Math.floor(W/B.value)*(u.cardHeight+u.gap)+u.verticalPadding)},q.style=y(()=>{var $,D;return`transform:translate(${($=q.position)==null?void 0:$.left.value}px,${(D=q.position)==null?void 0:D.top.value}px)`}),q.hasOwnProperty("class")||(q.class={active:!1,animation:!1,appCard:!0,cover:!1}),q.imgError=E(!1),q.imgSrc=y(()=>{var $;return($=q.imgError)!=null&&$.value?En:`${w.value}/store/${r.value}/${q.Package.replaceAll("+","%2B")}/icon.png`})});const m=E((V=t.value)==null?void 0:V.parentElement.parentElement.scrollTop);return a.value.style=y(()=>{var q,W,$,D;return`--j-left:${((W=(q=l.value)==null?void 0:q.position)==null?void 0:W.left)-_.value/2}px;--j-top:${((D=($=l.value)==null?void 0:$.position)==null?void 0:D.top)-t.value.parentElement.parentElement.clientHeight/2-m.value}px;`}),t.value.parentElement.parentElement.addEventListener("scroll",Ae(()=>{var q;d.value.animationId||(m.value=(q=t.value)==null?void 0:q.parentElement.parentElement.scrollTop)},250)),g}G(()=>{var g;_.value=(g=t.value)==null?void 0:g.clientWidth,window.addEventListener("resize",Ae(()=>{var m;_.value=(m=t.value)==null?void 0:m.clientWidth},250))});const d=E({originTop:0,targetTop:0,animationId:0});G(()=>{L(B,(g,m)=>{cancelAnimationFrame(d.value.animationId);const V=d.value.targetTop?d.value.targetTop:t.value.parentElement.parentElement.scrollTop;d.value.targetTop=(V-u.verticalPadding+t.value.parentElement.parentElement.clientHeight/2)*m/g-t.value.parentElement.parentElement.clientHeight/2+u.verticalPadding,t.value.parentElement.parentElement.scrollTo({top:d.value.targetTop,behavior:"smooth"})})});function k(g){var m;o.value.active=!0,o.value.animation=!0,(m=l.value)!=null&&m.class&&(l.value.class.cover=!1),g.class&&(g.class.active=!0,g.class.animation=!0),l.value=g,be(g.Package)}function I(g){o.value.active=!1,g.class&&(g.class.active=!1,g.class.cover=!0),i.value.active=!0,o.value.cover=!0}function A(g,m){m.propertyName==="transform"&&(o.value.animation=!1,g.class&&(g.class.animation=!1))}function F(g){var m;g.propertyName==="transform"&&(i.value.animation=!1,(m=l.value)!=null&&m.class&&(l.value.class.cover=i.value.active),i.value.open=i.value.active)}const P=E(),le=y(()=>{var g;return`${x.value}/${(g=P.value)==null?void 0:g.Filename}`}),ie=y(()=>{var g;return`${w.value}/${(g=P.value)==null?void 0:g.Filename}.torrent`});function be(g){Fe.getApplicationDetail(g).then(m=>{P.value=m,i.value.loaded=!0}).catch(m=>{n.notify({type:"negative",message:m.toString()})})}return(g,m)=>{var V,q,W,$,D,re,ue;return U(),ee("div",{class:Ee(["container",o.value]),style:qe({height:M.value}),ref_key:"container",ref:t},[S("div",{class:Ee(["coverView",i.value]),onClick:m[5]||(m[5]=C=>{i.value.active=!1,i.value.open=!1,i.value.loaded=!1,o.value.cover=!1,i.value.animation=!0}),style:qe(a.value.style)},[S("div",{class:"card",onTransitionend:F,onClick:m[4]||(m[4]=ce(()=>{},["stop"]))},[S("div",{class:"cardView",onTransitionend:m[2]||(m[2]=ce(()=>{},["stop"]))},[S("img",{src:(V=l.value)==null?void 0:V.imgSrc,alt:"",onError:m[0]||(m[0]=C=>{var R;(R=l.value)!=null&&R.imgError&&(l.value.imgError=!0)})},null,40,Bn),S("div",Sn,[S("h6",null,Q((q=l.value)==null?void 0:q.Name),1),S("p",null,Q((W=l.value)==null?void 0:W.More),1)]),S("div",_n,[S("h1",Cn,Q(($=P.value)==null?void 0:$.Name),1),S("span",Tn,Q((D=P.value)==null?void 0:D.Version),1),S("div",Pn,[(U(!0),ee(De,null,Le((re=P.value)==null?void 0:re.Tags,C=>(U(),ee("span",{key:C},Q(C),1))),128))]),S("p",Hn,Q((ue=P.value)==null?void 0:ue.More),1),de(wn,{split:"",ripple:!1,href:le.value,color:"primary",label:"\u4E0B\u8F7D\uFF08DEB\uFF09","menu-anchor":"bottom middle","menu-self":"top middle",padding:"sm xl",onClick:m[1]||(m[1]=ce(()=>{},["stop"]))},{default:te(()=>[de(It,null,{default:te(()=>[Pt((U(),Ht(Vt,{clickable:"",href:ie.value},{default:te(()=>[de(Wt,null,{default:te(()=>[de(Ft,null,{default:te(()=>[Mt("BT\uFF08\u591A\u6E90\u4E0B\u8F7D\u66F4\u5FEB\uFF09")]),_:1})]),_:1})]),_:1},8,["href"])),[[xn]])]),_:1})]),_:1},8,["href"])])],32),S("div",{class:"toolBox",onTransitionend:m[3]||(m[3]=ce(()=>{},["stop"]))},"\u67E5\u770B\u8BE6\u60C5",32)],32)],6),(U(!0),ee(De,null,Le(c.value,(C,R)=>(U(),ee("div",{style:qe(C.style),class:Ee(["card",C.class]),key:R,onMousedown:()=>k(C),onMouseup:()=>I(C)},[S("div",{class:"cardView",onTransitionend:se=>A(C,se)},[S("img",{src:C.imgSrc,alt:"",onError:se=>C.imgError=!0},null,40,An),S("div",Dn,[S("h6",null,Q(C.Name),1),S("p",null,Q(C.More),1)])],40,$n)],46,Mn))),128))],6)}}});var Rn=Lt(Ln,[["__scopeId","data-v-b69a8032"]]);export{Rn as default};
