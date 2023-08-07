import{j as W,c as y,h as E,m as z,ao as ot,ap as lt,r as B,aq as ne,Y as De,a2 as at,g as M,ah as qe,R as J,af as ke,w as F,o as fe,k as U,ak as it,P as ce,ar as ut,as as Z,a as rt,at as st,au as ct,av as dt,aw as ft,a0 as We,ax as Ve,ad as ve,aj as vt,ay as mt,az as ht,aA as Qe,Q as gt,K as ue,aB as bt,ai as pt,ac as yt,v as wt,p as j,y as xt,z as G,G as Ee,C as A,B as C,aa as Y,H as V,A as _e,D as Bt,F as qt,d as Q,al as kt,Z as Et,E as _t,aC as St}from"./index.1a8d83d2.js";import{u as me,a as he}from"./use-dark.26dad1f7.js";import{c as Ct,Q as Tt}from"./QScrollArea.f2049202.js";import{g as Ft,e as Pt}from"./QResizeObserver.6f049bf4.js";import{u as Ht,Q as Mt}from"./use-meta.e2500f97.js";import{u as At}from"./store.ee6df7ef.js";import{_ as $t}from"./plugin-vue_export-helper.21dcd24c.js";var Lt=W({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:t}){const n=y(()=>parseInt(e.lines,10)),o=y(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(n.value===1?" ellipsis":"")),l=y(()=>e.lines!==void 0&&n.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":n.value}:null);return()=>E("div",{style:l.value,class:o.value},z(t.default))}}),Dt=W({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:t}){const n=y(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>E("div",{class:n.value},z(t.default))}}),Wt=W({name:"QItem",props:{...me,...ot,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:t,emit:n}){const{proxy:{$q:o}}=M(),l=he(e,o),{hasLink:u,linkAttrs:i,linkClass:r,linkTag:s,navigateOnClick:v}=lt(),d=B(null),p=B(null),b=y(()=>e.clickable===!0||u.value===!0||e.tag==="label"),a=y(()=>e.disable!==!0&&b.value===!0),m=y(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(l.value===!0?" q-item--dark":"")+(u.value===!0&&e.active===null?r.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(a.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),_=y(()=>{if(e.insetLevel===void 0)return null;const c=o.lang.rtl===!0?"Right":"Left";return{["padding"+c]:16+e.insetLevel*56+"px"}});function k(c){a.value===!0&&(p.value!==null&&(c.qKeyEvent!==!0&&document.activeElement===d.value?p.value.focus():document.activeElement===p.value&&d.value.focus()),v(c))}function S(c){if(a.value===!0&&ne(c,13)===!0){De(c),c.qKeyEvent=!0;const f=new MouseEvent("click",c);f.qKeyEvent=!0,d.value.dispatchEvent(f)}n("keyup",c)}function h(){const c=at(t.default,[]);return a.value===!0&&c.unshift(E("div",{class:"q-focus-helper",tabindex:-1,ref:p})),c}return()=>{const c={ref:d,class:m.value,style:_.value,role:"listitem",onClick:k,onKeyup:S};return a.value===!0?(c.tabindex=e.tabindex||"0",Object.assign(c,i.value)):b.value===!0&&(c["aria-disabled"]="true"),E(s.value,c,h())}}}),Vt=W({name:"QList",props:{...me,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:t}){const n=M(),o=he(e,n.proxy.$q),l=y(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(o.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>E(e.tag,{class:l.value},z(t.default))}}),Qt=W({name:"QBtnGroup",props:{unelevated:Boolean,outline:Boolean,flat:Boolean,rounded:Boolean,square:Boolean,push:Boolean,stretch:Boolean,glossy:Boolean,spread:Boolean},setup(e,{slots:t}){const n=y(()=>{const o=["unelevated","outline","flat","rounded","square","push","stretch","glossy"].filter(l=>e[l]===!0).map(l=>`q-btn-group--${l}`).join(" ");return`q-btn-group row no-wrap${o.length!==0?" "+o:""}`+(e.spread===!0?" q-btn-group--spread":" inline")});return()=>E("div",{class:n.value},z(t.default))}});const Rt={target:{default:!0},noParentEvent:Boolean,contextMenu:Boolean};function It({showing:e,avoidEmit:t,configureAnchorEl:n}){const{props:o,proxy:l,emit:u}=M(),i=B(null);let r=null;function s(a){return i.value===null?!1:a===void 0||a.touches===void 0||a.touches.length<=1}const v={};n===void 0&&(Object.assign(v,{hide(a){l.hide(a)},toggle(a){l.toggle(a),a.qAnchorHandled=!0},toggleKey(a){ne(a,13)===!0&&v.toggle(a)},contextClick(a){l.hide(a),qe(a),J(()=>{l.show(a),a.qAnchorHandled=!0})},prevent:qe,mobileTouch(a){if(v.mobileCleanup(a),s(a)!==!0)return;l.hide(a),i.value.classList.add("non-selectable");const m=a.target;ke(v,"anchor",[[m,"touchmove","mobileCleanup","passive"],[m,"touchend","mobileCleanup","passive"],[m,"touchcancel","mobileCleanup","passive"],[i.value,"contextmenu","prevent","notPassive"]]),r=setTimeout(()=>{r=null,l.show(a),a.qAnchorHandled=!0},300)},mobileCleanup(a){i.value.classList.remove("non-selectable"),r!==null&&(clearTimeout(r),r=null),e.value===!0&&a!==void 0&&Ct()}}),n=function(a=o.contextMenu){if(o.noParentEvent===!0||i.value===null)return;let m;a===!0?l.$q.platform.is.mobile===!0?m=[[i.value,"touchstart","mobileTouch","passive"]]:m=[[i.value,"mousedown","hide","passive"],[i.value,"contextmenu","contextClick","notPassive"]]:m=[[i.value,"click","toggle","passive"],[i.value,"keyup","toggleKey","passive"]],ke(v,"anchor",m)});function d(){it(v,"anchor")}function p(a){for(i.value=a;i.value.classList.contains("q-anchor--skip");)i.value=i.value.parentNode;n()}function b(){if(o.target===!1||o.target===""||l.$el.parentNode===null)i.value=null;else if(o.target===!0)p(l.$el.parentNode);else{let a=o.target;if(typeof o.target=="string")try{a=document.querySelector(o.target)}catch{a=void 0}a!=null?(i.value=a.$el||a,n()):(i.value=null,console.error(`Anchor: target "${o.target}" not found`))}}return F(()=>o.contextMenu,a=>{i.value!==null&&(d(),n(a))}),F(()=>o.target,()=>{i.value!==null&&d(),b()}),F(()=>o.noParentEvent,a=>{i.value!==null&&(a===!0?d():n())}),fe(()=>{b(),t!==!0&&o.modelValue===!0&&i.value===null&&u("update:modelValue",!1)}),U(()=>{r!==null&&clearTimeout(r),d()}),{anchorEl:i,canShow:s,anchorEvents:v}}function zt(e,t){const n=B(null);let o;function l(r,s){const v=`${s!==void 0?"add":"remove"}EventListener`,d=s!==void 0?s:o;r!==window&&r[v]("scroll",d,ce.passive),window[v]("scroll",d,ce.passive),o=s}function u(){n.value!==null&&(l(n.value),n.value=null)}const i=F(()=>e.noParentEvent,()=>{n.value!==null&&(u(),t())});return U(i),{localScrollTarget:n,unconfigureScrollTarget:u,changeScrollEvent:l}}const Ot={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},jt=["beforeShow","show","beforeHide","hide"];function Kt({showing:e,canShow:t,hideOnRouteChange:n,handleShow:o,handleHide:l,processOnMount:u}){const i=M(),{props:r,emit:s,proxy:v}=i;let d;function p(h){e.value===!0?m(h):b(h)}function b(h){if(r.disable===!0||h!==void 0&&h.qAnchorHandled===!0||t!==void 0&&t(h)!==!0)return;const c=r["onUpdate:modelValue"]!==void 0;c===!0&&(s("update:modelValue",!0),d=h,J(()=>{d===h&&(d=void 0)})),(r.modelValue===null||c===!1)&&a(h)}function a(h){e.value!==!0&&(e.value=!0,s("beforeShow",h),o!==void 0?o(h):s("show",h))}function m(h){if(r.disable===!0)return;const c=r["onUpdate:modelValue"]!==void 0;c===!0&&(s("update:modelValue",!1),d=h,J(()=>{d===h&&(d=void 0)})),(r.modelValue===null||c===!1)&&_(h)}function _(h){e.value!==!1&&(e.value=!1,s("beforeHide",h),l!==void 0?l(h):s("hide",h))}function k(h){r.disable===!0&&h===!0?r["onUpdate:modelValue"]!==void 0&&s("update:modelValue",!1):h===!0!==e.value&&(h===!0?a:_)(d)}F(()=>r.modelValue,k),n!==void 0&&ut(i)===!0&&F(()=>v.$route.fullPath,()=>{n.value===!0&&e.value===!0&&m()}),u===!0&&fe(()=>{k(r.modelValue)});const S={show:b,hide:m,toggle:p};return Object.assign(v,S),S}let K=[],N=[];function Re(e){N=N.filter(t=>t!==e)}function Nt(e){Re(e),N.push(e)}function Se(e){Re(e),N.length===0&&K.length!==0&&(K[K.length-1](),K=[])}function Ut(e){N.length===0?e():K.push(e)}const R=[];function Gt(e){return R.find(t=>t.contentEl!==null&&t.contentEl.contains(e))}function Ie(e,t){do{if(e.$options.name==="QMenu"){if(e.hide(t),e.$props.separateClosePopup===!0)return Z(e)}else if(e.__qPortal===!0){const n=Z(e);return n!==void 0&&n.$options.name==="QPopupProxy"?(e.hide(t),n):e}e=Z(e)}while(e!=null)}function Yt(e,t,n){for(;n!==0&&e!==void 0&&e!==null;){if(e.__qPortal===!0){if(n--,e.$options.name==="QMenu"){e=Ie(e,t);continue}e.hide(t)}e=Z(e)}}function Xt(e){for(e=e.parent;e!=null;){if(e.type.name==="QGlobalDialog")return!0;if(e.type.name==="QDialog"||e.type.name==="QMenu")return!1;e=e.parent}return!1}function Zt(e,t,n,o){const l=B(!1),u=B(!1);let i=null;const r={},s=o==="dialog"&&Xt(e);function v(p){if(p===!0){Se(r),u.value=!0;return}u.value=!1,l.value===!1&&(s===!1&&i===null&&(i=dt(!1,o)),l.value=!0,R.push(e.proxy),Nt(r))}function d(p){if(u.value=!1,p!==!0)return;Se(r),l.value=!1;const b=R.indexOf(e.proxy);b!==-1&&R.splice(b,1),i!==null&&(ft(i),i=null)}return rt(()=>{d(!0)}),e.proxy.__qPortal=!0,st(e.proxy,"contentEl",()=>t.value),{showPortal:v,hidePortal:d,portalIsActive:l,portalIsAccessible:u,renderPortal:()=>s===!0?n():l.value===!0?[E(ct,{to:i},n())]:void 0}}const ze={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function Jt(e,t=()=>{},n=()=>{}){return{transitionProps:y(()=>{const o=`q-transition--${e.transitionShow||t()}`,l=`q-transition--${e.transitionHide||n()}`;return{appear:!0,enterFromClass:`${o}-enter-from`,enterActiveClass:`${o}-enter-active`,enterToClass:`${o}-enter-to`,leaveFromClass:`${l}-leave-from`,leaveActiveClass:`${l}-leave-active`,leaveToClass:`${l}-leave-to`}}),transitionStyle:y(()=>`--q-transition-duration: ${e.transitionDuration}ms`)}}function en(){let e;const t=M();function n(){e=void 0}return We(n),U(n),{removeTick:n,registerTick(o){e=o,J(()=>{e===o&&(Ve(t)===!1&&e(),e=void 0)})}}}function tn(){let e=null;const t=M();function n(){e!==null&&(clearTimeout(e),e=null)}return We(n),U(n),{removeTimeout:n,registerTimeout(o,l){n(),Ve(t)===!1&&(e=setTimeout(o,l))}}}const $=[];let I;function nn(e){I=e.keyCode===27}function on(){I===!0&&(I=!1)}function ln(e){I===!0&&(I=!1,ne(e,27)===!0&&$[$.length-1](e))}function Oe(e){window[e]("keydown",nn),window[e]("blur",on),window[e]("keyup",ln),I=!1}function an(e){ve.is.desktop===!0&&($.push(e),$.length===1&&Oe("addEventListener"))}function Ce(e){const t=$.indexOf(e);t>-1&&($.splice(t,1),$.length===0&&Oe("removeEventListener"))}const L=[];function je(e){L[L.length-1](e)}function un(e){ve.is.desktop===!0&&(L.push(e),L.length===1&&document.body.addEventListener("focusin",je))}function rn(e){const t=L.indexOf(e);t>-1&&(L.splice(t,1),L.length===0&&document.body.removeEventListener("focusin",je))}const{notPassiveCapture:ee}=ce,D=[];function te(e){const t=e.target;if(t===void 0||t.nodeType===8||t.classList.contains("no-pointer-events")===!0)return;let n=R.length-1;for(;n>=0;){const o=R[n].$;if(o.type.name==="QTooltip"){n--;continue}if(o.type.name!=="QDialog")break;if(o.props.seamless!==!0)return;n--}for(let o=D.length-1;o>=0;o--){const l=D[o];if((l.anchorEl.value===null||l.anchorEl.value.contains(t)===!1)&&(t===document.body||l.innerRef.value!==null&&l.innerRef.value.contains(t)===!1))e.qClickOutside=!0,l.onClickOutside(e);else return}}function sn(e){D.push(e),D.length===1&&(document.addEventListener("mousedown",te,ee),document.addEventListener("touchstart",te,ee))}function Te(e){const t=D.findIndex(n=>n===e);t>-1&&(D.splice(t,1),D.length===0&&(document.removeEventListener("mousedown",te,ee),document.removeEventListener("touchstart",te,ee)))}let Fe,Pe;function He(e){const t=e.split(" ");return t.length!==2?!1:["top","center","bottom"].includes(t[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(t[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function cn(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const de={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{de[`${e}#ltr`]=e,de[`${e}#rtl`]=e});function Me(e,t){const n=e.split(" ");return{vertical:n[0],horizontal:de[`${n[1]}#${t===!0?"rtl":"ltr"}`]}}function dn(e,t){let{top:n,left:o,right:l,bottom:u,width:i,height:r}=e.getBoundingClientRect();return t!==void 0&&(n-=t[1],o-=t[0],u+=t[1],l+=t[0],i+=t[0],r+=t[1]),{top:n,bottom:u,height:r,left:o,right:l,width:i,middle:o+(l-o)/2,center:n+(u-n)/2}}function fn(e,t,n){let{top:o,left:l}=e.getBoundingClientRect();return o+=t.top,l+=t.left,n!==void 0&&(o+=n[1],l+=n[0]),{top:o,bottom:o+1,height:1,left:l,right:l+1,width:1,middle:l,center:o}}function vn(e,t){return{top:0,center:t/2,bottom:t,left:0,middle:e/2,right:e}}function Ae(e,t,n,o){return{top:e[n.vertical]-t[o.vertical],left:e[n.horizontal]-t[o.horizontal]}}function Ke(e,t=0){if(e.targetEl===null||e.anchorEl===null||t>5)return;if(e.targetEl.offsetHeight===0||e.targetEl.offsetWidth===0){setTimeout(()=>{Ke(e,t+1)},10);return}const{targetEl:n,offset:o,anchorEl:l,anchorOrigin:u,selfOrigin:i,absoluteOffset:r,fit:s,cover:v,maxHeight:d,maxWidth:p}=e;if(ve.is.ios===!0&&window.visualViewport!==void 0){const P=document.body.style,{offsetLeft:q,offsetTop:T}=window.visualViewport;q!==Fe&&(P.setProperty("--q-pe-left",q+"px"),Fe=q),T!==Pe&&(P.setProperty("--q-pe-top",T+"px"),Pe=T)}const{scrollLeft:b,scrollTop:a}=n,m=r===void 0?dn(l,v===!0?[0,0]:o):fn(l,r,o);Object.assign(n.style,{top:0,left:0,minWidth:null,minHeight:null,maxWidth:p||"100vw",maxHeight:d||"100vh",visibility:"visible"});const{offsetWidth:_,offsetHeight:k}=n,{elWidth:S,elHeight:h}=s===!0||v===!0?{elWidth:Math.max(m.width,_),elHeight:v===!0?Math.max(m.height,k):k}:{elWidth:_,elHeight:k};let c={maxWidth:p,maxHeight:d};(s===!0||v===!0)&&(c.minWidth=m.width+"px",v===!0&&(c.minHeight=m.height+"px")),Object.assign(n.style,c);const f=vn(S,h);let w=Ae(m,f,u,i);if(r===void 0||o===void 0)re(w,m,f,u,i);else{const{top:P,left:q}=w;re(w,m,f,u,i);let T=!1;if(w.top!==P){T=!0;const H=2*o[1];m.center=m.top-=H,m.bottom-=H+2}if(w.left!==q){T=!0;const H=2*o[0];m.middle=m.left-=H,m.right-=H+2}T===!0&&(w=Ae(m,f,u,i),re(w,m,f,u,i))}c={top:w.top+"px",left:w.left+"px"},w.maxHeight!==void 0&&(c.maxHeight=w.maxHeight+"px",m.height>w.maxHeight&&(c.minHeight=c.maxHeight)),w.maxWidth!==void 0&&(c.maxWidth=w.maxWidth+"px",m.width>w.maxWidth&&(c.minWidth=c.maxWidth)),Object.assign(n.style,c),n.scrollTop!==a&&(n.scrollTop=a),n.scrollLeft!==b&&(n.scrollLeft=b)}function re(e,t,n,o,l){const u=n.bottom,i=n.right,r=Ft(),s=window.innerHeight-r,v=document.body.clientWidth;if(e.top<0||e.top+u>s)if(l.vertical==="center")e.top=t[o.vertical]>s/2?Math.max(0,s-u):0,e.maxHeight=Math.min(u,s);else if(t[o.vertical]>s/2){const d=Math.min(s,o.vertical==="center"?t.center:o.vertical===l.vertical?t.bottom:t.top);e.maxHeight=Math.min(u,d),e.top=Math.max(0,d-u)}else e.top=Math.max(0,o.vertical==="center"?t.center:o.vertical===l.vertical?t.top:t.bottom),e.maxHeight=Math.min(u,s-e.top);if(e.left<0||e.left+i>v)if(e.maxWidth=Math.min(i,v),l.horizontal==="middle")e.left=t[o.horizontal]>v/2?Math.max(0,v-i):0;else if(t[o.horizontal]>v/2){const d=Math.min(v,o.horizontal==="middle"?t.middle:o.horizontal===l.horizontal?t.right:t.left);e.maxWidth=Math.min(i,d),e.left=Math.max(0,d-e.maxWidth)}else e.left=Math.max(0,o.horizontal==="middle"?t.middle:o.horizontal===l.horizontal?t.left:t.right),e.maxWidth=Math.min(i,v-e.left)}var mn=W({name:"QMenu",inheritAttrs:!1,props:{...Rt,...Ot,...me,...ze,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:He},self:{type:String,validator:He},offset:{type:Array,validator:cn},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...jt,"click","escapeKey"],setup(e,{slots:t,emit:n,attrs:o}){let l=null,u,i,r;const s=M(),{proxy:v}=s,{$q:d}=v,p=B(null),b=B(!1),a=y(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),m=he(e,d),{registerTick:_,removeTick:k}=en(),{registerTimeout:S}=tn(),{transitionProps:h,transitionStyle:c}=Jt(e),{localScrollTarget:f,changeScrollEvent:w,unconfigureScrollTarget:P}=zt(e,xe),{anchorEl:q,canShow:T}=It({showing:b}),{hide:H}=Kt({showing:b,canShow:T,handleShow:Xe,handleHide:Ze,hideOnRouteChange:a,processOnMount:!0}),{showPortal:ge,hidePortal:be,renderPortal:Ne}=Zt(s,p,et,"menu"),oe={anchorEl:q,innerRef:p,onClickOutside(g){if(e.persistent!==!0&&b.value===!0)return H(g),(g.type==="touchstart"||g.target.classList.contains("q-dialog__backdrop"))&&De(g),!0}},pe=y(()=>Me(e.anchor||(e.cover===!0?"center middle":"bottom start"),d.lang.rtl)),Ue=y(()=>e.cover===!0?pe.value:Me(e.self||"top start",d.lang.rtl)),Ge=y(()=>(e.square===!0?" q-menu--square":"")+(m.value===!0?" q-menu--dark q-dark":"")),Ye=y(()=>e.autoClose===!0?{onClick:Je}:{}),ye=y(()=>b.value===!0&&e.persistent!==!0);F(ye,g=>{g===!0?(an(ae),sn(oe)):(Ce(ae),Te(oe))});function le(){Ut(()=>{let g=p.value;g&&g.contains(document.activeElement)!==!0&&(g=g.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||g.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||g.querySelector("[autofocus], [data-autofocus]")||g,g.focus({preventScroll:!0}))})}function Xe(g){if(l=e.noRefocus===!1?document.activeElement:null,un(Be),ge(),xe(),u=void 0,g!==void 0&&(e.touchPosition||e.contextMenu)){const ie=vt(g);if(ie.left!==void 0){const{top:tt,left:nt}=q.value.getBoundingClientRect();u={left:ie.left-nt,top:ie.top-tt}}}i===void 0&&(i=F(()=>d.screen.width+"|"+d.screen.height+"|"+e.self+"|"+e.anchor+"|"+d.lang.rtl,O)),e.noFocus!==!0&&document.activeElement.blur(),_(()=>{O(),e.noFocus!==!0&&le()}),S(()=>{d.platform.is.ios===!0&&(r=e.autoClose,p.value.click()),O(),ge(!0),n("show",g)},e.transitionDuration)}function Ze(g){k(),be(),we(!0),l!==null&&(g===void 0||g.qClickOutside!==!0)&&(((g&&g.type.indexOf("key")===0?l.closest('[tabindex]:not([tabindex^="-"])'):void 0)||l).focus(),l=null),S(()=>{be(!0),n("hide",g)},e.transitionDuration)}function we(g){u=void 0,i!==void 0&&(i(),i=void 0),(g===!0||b.value===!0)&&(rn(Be),P(),Te(oe),Ce(ae)),g!==!0&&(l=null)}function xe(){(q.value!==null||e.scrollTarget!==void 0)&&(f.value=Pt(q.value,e.scrollTarget),w(f.value,O))}function Je(g){r!==!0?(Ie(v,g),n("click",g)):r=!1}function Be(g){ye.value===!0&&e.noFocus!==!0&&ht(p.value,g.target)!==!0&&le()}function ae(g){n("escapeKey"),H(g)}function O(){Ke({targetEl:p.value,offset:e.offset,anchorEl:q.value,anchorOrigin:pe.value,selfOrigin:Ue.value,absoluteOffset:u,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function et(){return E(mt,h.value,()=>b.value===!0?E("div",{role:"menu",...o,ref:p,tabindex:-1,class:["q-menu q-position-engine scroll"+Ge.value,o.class],style:[o.style,c.value],...Ye.value},z(t.default)):null)}return U(we),Object.assign(v,{focus:le,updatePosition:O}),Ne}});let se,X=0;const x=new Array(256);for(let e=0;e<256;e++)x[e]=(e+256).toString(16).substring(1);const hn=(()=>{const e=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return t=>{const n=new Uint8Array(t);return e.getRandomValues(n),n}}return t=>{const n=[];for(let o=t;o>0;o--)n.push(Math.floor(Math.random()*256));return n}})(),$e=4096;function gn(){(se===void 0||X+16>$e)&&(X=0,se=hn($e));const e=Array.prototype.slice.call(se,X,X+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,x[e[0]]+x[e[1]]+x[e[2]]+x[e[3]]+"-"+x[e[4]]+x[e[5]]+"-"+x[e[6]]+x[e[7]]+"-"+x[e[8]]+x[e[9]]+"-"+x[e[10]]+x[e[11]]+x[e[12]]+x[e[13]]+x[e[14]]+x[e[15]]}const bn=Object.keys(Qe),pn=e=>bn.reduce((t,n)=>{const o=e[n];return o!==void 0&&(t[n]=o),t},{});var yn=W({name:"QBtnDropdown",props:{...Qe,...ze,modelValue:Boolean,split:Boolean,dropdownIcon:String,contentClass:[Array,String,Object],contentStyle:[Array,String,Object],cover:Boolean,persistent:Boolean,noRouteDismiss:Boolean,autoClose:Boolean,menuAnchor:{type:String,default:"bottom end"},menuSelf:{type:String,default:"top end"},menuOffset:Array,disableMainBtn:Boolean,disableDropdown:Boolean,noIconAnimation:Boolean,toggleAriaLabel:String},emits:["update:modelValue","click","beforeShow","show","beforeHide","hide"],setup(e,{slots:t,emit:n}){const{proxy:o}=M(),l=B(e.modelValue),u=B(null),i=gn(),r=y(()=>{const f={"aria-expanded":l.value===!0?"true":"false","aria-haspopup":"true","aria-controls":i,"aria-label":e.toggleAriaLabel||o.$q.lang.label[l.value===!0?"collapse":"expand"](e.label)};return(e.disable===!0||e.split===!1&&e.disableMainBtn===!0||e.disableDropdown===!0)&&(f["aria-disabled"]="true"),f}),s=y(()=>"q-btn-dropdown__arrow"+(l.value===!0&&e.noIconAnimation===!1?" rotate-180":"")+(e.split===!1?" q-btn-dropdown__arrow-container":"")),v=y(()=>bt(e)),d=y(()=>pn(e));F(()=>e.modelValue,f=>{u.value!==null&&u.value[f?"show":"hide"]()}),F(()=>e.split,c);function p(f){l.value=!0,n("beforeShow",f)}function b(f){n("show",f),n("update:modelValue",!0)}function a(f){l.value=!1,n("beforeHide",f)}function m(f){n("hide",f),n("update:modelValue",!1)}function _(f){n("click",f)}function k(f){pt(f),c(),n("click",f)}function S(f){u.value!==null&&u.value.toggle(f)}function h(f){u.value!==null&&u.value.show(f)}function c(f){u.value!==null&&u.value.hide(f)}return Object.assign(o,{show:h,hide:c,toggle:S}),fe(()=>{e.modelValue===!0&&h()}),()=>{const f=[E(gt,{class:s.value,name:e.dropdownIcon||o.$q.iconSet.arrow.dropdown})];return e.disableDropdown!==!0&&f.push(E(mn,{ref:u,id:i,class:e.contentClass,style:e.contentStyle,cover:e.cover,fit:!0,persistent:e.persistent,noRouteDismiss:e.noRouteDismiss,autoClose:e.autoClose,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,separateClosePopup:!0,transitionShow:e.transitionShow,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,onBeforeShow:p,onShow:b,onBeforeHide:a,onHide:m},t.default)),e.split===!1?E(ue,{class:"q-btn-dropdown q-btn-dropdown--simple",...d.value,...r.value,disable:e.disable===!0||e.disableMainBtn===!0,noWrap:!0,round:!1,onClick:_},{default:()=>z(t.label,[]).concat(f),loading:t.loading}):E(Qt,{class:"q-btn-dropdown q-btn-dropdown--split no-wrap q-btn-item",rounded:e.rounded,square:e.square,...v.value,glossy:e.glossy,stretch:e.stretch},()=>[E(ue,{class:"q-btn-dropdown--current",...d.value,disable:e.disable===!0||e.disableMainBtn===!0,noWrap:!0,round:!1,onClick:k},{default:t.label,loading:t.loading}),E(ue,{class:"q-btn-dropdown__arrow-container q-anchor--skip",...r.value,...v.value,disable:e.disable===!0||e.disableDropdown===!0,rounded:e.rounded,color:e.color,textColor:e.textColor,dense:e.dense,size:e.size,padding:e.padding,ripple:e.ripple},()=>f)])}}});function Le(e){if(e===!1)return 0;if(e===!0||e===void 0)return 1;const t=parseInt(e,10);return isNaN(t)?0:t}var wn=yt({name:"close-popup",beforeMount(e,{value:t}){const n={depth:Le(t),handler(o){n.depth!==0&&setTimeout(()=>{const l=Gt(e);l!==void 0&&Yt(l,o,n.depth)})},handlerKey(o){ne(o,13)===!0&&n.handler(o)}};e.__qclosepopup=n,e.addEventListener("click",n.handler),e.addEventListener("keyup",n.handlerKey)},updated(e,{value:t,oldValue:n}){t!==n&&(e.__qclosepopup.depth=Le(t))},beforeUnmount(e){const t=e.__qclosepopup;e.removeEventListener("click",t.handler),e.removeEventListener("keyup",t.handlerKey),delete e.__qclosepopup}});const xn=["src"],Bn={class:"description"},qn={class:"detail"},kn={class:"name"},En={class:"version"},_n={class:"tags"},Sn={class:"description"},Cn=wt({__name:"StorePage",setup(e){Ht({title:"WEB\u5546\u5E97",titleTemplate:b=>`${b} - \u661F\u706B\u5E94\u7528\u5546\u5E97`,meta:{description:{name:"description",content:"\u661F\u706B\u5E94\u7528\u5546\u5E97spark store\u5B98\u7F51"},keywords:{name:"keywords",content:"spark store,\u661F\u706B\u5E94\u7528\u5546\u5E97,\u661F\u706B\u5546\u5E97,\u661F\u706B\u5E94\u7528\u5546\u5E97\u4E0B\u8F7D,\u661F\u706B\u5546\u5E97\u4E0B\u8F7D,deepin\u5E94\u7528\u5546\u5E97,uos,ubuntu,deepin"},equiv:{"http-equiv":"Content-Type",content:"text/html; charset=UTF-8"}}});const t=At(),n=B(t.debSource),o=B(t.source),l=B({active:!1,animation:!1,cover:!1});j("containerState",l);const u=B({active:!1,animation:!1,cover:!1});j("coverState",u);const i=B({});j("cover",i);const r=B();j("activeCard",r);const s=B();j("appDetail",s);const v=y(()=>{var b;return`${n.value}/${(b=s==null?void 0:s.value)==null?void 0:b.Filename}`}),d=y(()=>{var b;return`${o.value}/${(b=s==null?void 0:s.value)==null?void 0:b.Filename}.torrent`});function p(b){var a;b.propertyName==="transform"&&u!=null&&u.value&&((a=r==null?void 0:r.value)!=null&&a.class&&(r.value.class.cover=u.value.active),u.value.animation=!1,u.value.open=u.value.active)}return(b,a)=>{const m=xt("router-view");return G(),Ee(Mt,{class:"flex storePage"},{default:A(()=>{var _,k,S,h,c,f,w,P;return[C("div",{class:_t(["coverView",u.value]),onClick:a[5]||(a[5]=q=>{u.value&&(u.value.active=!1,u.value.open=!1,u.value.loaded=!1,u.value.animation=!0),l.value.cover=!1}),style:St((_=i.value)==null?void 0:_.style)},[C("div",{class:"card",onTransitionend:p,onClick:a[4]||(a[4]=Y(()=>{},["stop"]))},[C("div",{class:"cardView",onTransitionend:a[2]||(a[2]=Y(()=>{},["stop"]))},[C("img",{src:(k=r.value)==null?void 0:k.imgSrc,alt:"",onError:a[0]||(a[0]=q=>{var T;(T=r.value)!=null&&T.imgError&&(r.value.imgError=!0)})},null,40,xn),C("div",Bn,[C("h6",null,V((S=r.value)==null?void 0:S.Name),1),C("p",null,V((h=r.value)==null?void 0:h.More),1)]),C("div",qn,[C("h1",kn,V((c=s.value)==null?void 0:c.Name),1),C("span",En,V((f=s.value)==null?void 0:f.Version),1),C("div",_n,[(G(!0),_e(qt,null,Bt((w=s.value)==null?void 0:w.Tags,q=>(G(),_e("span",{key:q},V(q),1))),128))]),C("p",Sn,V((P=s.value)==null?void 0:P.More),1),Q(yn,{split:"",ripple:!1,href:v.value,color:"primary",label:"\u4E0B\u8F7D\uFF08DEB\uFF09","menu-anchor":"bottom middle","menu-self":"top middle",padding:"sm xl",onClick:a[1]||(a[1]=Y(()=>{},["stop"]))},{default:A(()=>[Q(Vt,null,{default:A(()=>[kt((G(),Ee(Wt,{clickable:"",href:d.value},{default:A(()=>[Q(Dt,null,{default:A(()=>[Q(Lt,null,{default:A(()=>[Et("BT\uFF08\u591A\u6E90\u4E0B\u8F7D\u66F4\u5FEB\uFF09")]),_:1})]),_:1})]),_:1},8,["href"])),[[wn]])]),_:1})]),_:1},8,["href"])])],32),C("div",{class:"toolBox",onTransitionend:a[3]||(a[3]=Y(()=>{},["stop"]))},"\u67E5\u770B\u8BE6\u60C5",32)],32)],6),Q(Tt,{style:{width:"100%"},"thumb-style":{zIndex:"2",borderRadius:"100px"},visible:!1},{default:A(()=>[Q(m)]),_:1})]}),_:1})}}});var Ln=$t(Cn,[["__scopeId","data-v-dee131ee"]]);export{Ln as default};
