import{u as ce,a as ve}from"./use-dark.0505aa20.js";import{a as N,Q as de,b as E}from"./QResizeObserver.5a87ac03.js";import{ab as fe,ac as C,M as he,ad as me,ae as P,af as A,ag as R,ah as O,ai as B,aj as T,Y as be,k as pe,r as m,c as d,a7 as ze,w as ye,a0 as Se,$ as ge,l as Ce,h as y,v as _e,ak as U,g as qe}from"./index.47983c54.js";import{c as Me}from"./selection.0cb4229b.js";import{s as V,e as D}from"./scroll.33da46a4.js";const k={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},we=Object.keys(k);k.all=!0;function I(i){const a={};for(const s of we)i[s]===!0&&(a[s]=!0);return Object.keys(a).length===0?k:(a.horizontal===!0?a.left=a.right=!0:a.left===!0&&a.right===!0&&(a.horizontal=!0),a.vertical===!0?a.up=a.down=!0:a.up===!0&&a.down===!0&&(a.vertical=!0),a.horizontal===!0&&a.vertical===!0&&(a.all=!0),a)}const Ee=["INPUT","TEXTAREA"];function K(i,a){return a.event===void 0&&i.target!==void 0&&i.target.draggable!==!0&&typeof a.handler=="function"&&Ee.includes(i.target.nodeName.toUpperCase())===!1&&(i.qClonedBy===void 0||i.qClonedBy.indexOf(a.uid)===-1)}function H(i,a,s){const f=B(i);let e,r=f.left-a.event.x,o=f.top-a.event.y,t=Math.abs(r),v=Math.abs(o);const u=a.direction;u.horizontal===!0&&u.vertical!==!0?e=r<0?"left":"right":u.horizontal!==!0&&u.vertical===!0?e=o<0?"up":"down":u.up===!0&&o<0?(e="up",t>v&&(u.left===!0&&r<0?e="left":u.right===!0&&r>0&&(e="right"))):u.down===!0&&o>0?(e="down",t>v&&(u.left===!0&&r<0?e="left":u.right===!0&&r>0&&(e="right"))):u.left===!0&&r<0?(e="left",t<v&&(u.up===!0&&o<0?e="up":u.down===!0&&o>0&&(e="down"))):u.right===!0&&r>0&&(e="right",t<v&&(u.up===!0&&o<0?e="up":u.down===!0&&o>0&&(e="down")));let p=!1;if(e===void 0&&s===!1){if(a.event.isFirst===!0||a.event.lastDir===void 0)return{};e=a.event.lastDir,p=!0,e==="left"||e==="right"?(f.left-=r,t=0,r=0):(f.top-=o,v=0,o=0)}return{synthetic:p,payload:{evt:i,touch:a.event.mouse!==!0,mouse:a.event.mouse===!0,position:f,direction:e,isFirst:a.event.isFirst,isFinal:s===!0,duration:Date.now()-a.event.time,distance:{x:t,y:v},offset:{x:r,y:o},delta:{x:f.left-a.event.lastX,y:f.top-a.event.lastY}}}}let Pe=0;var G=fe({name:"touch-pan",beforeMount(i,{value:a,modifiers:s}){if(s.mouse!==!0&&C.has.touch!==!0)return;function f(r,o){s.mouse===!0&&o===!0?be(r):(s.stop===!0&&O(r),s.prevent===!0&&R(r))}const e={uid:"qvtp_"+Pe++,handler:a,modifiers:s,direction:I(s),noop:he,mouseStart(r){K(r,e)&&me(r)&&(P(e,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),e.start(r,!0))},touchStart(r){if(K(r,e)){const o=r.target;P(e,"temp",[[o,"touchmove","move","notPassiveCapture"],[o,"touchcancel","end","passiveCapture"],[o,"touchend","end","passiveCapture"]]),e.start(r)}},start(r,o){if(C.is.firefox===!0&&A(i,!0),e.lastEvt=r,o===!0||s.stop===!0){if(e.direction.all!==!0&&(o!==!0||e.modifiers.mouseAllDir!==!0&&e.modifiers.mousealldir!==!0)){const u=r.type.indexOf("mouse")>-1?new MouseEvent(r.type,r):new TouchEvent(r.type,r);r.defaultPrevented===!0&&R(u),r.cancelBubble===!0&&O(u),Object.assign(u,{qKeyEvent:r.qKeyEvent,qClickOutside:r.qClickOutside,qAnchorHandled:r.qAnchorHandled,qClonedBy:r.qClonedBy===void 0?[e.uid]:r.qClonedBy.concat(e.uid)}),e.initialEvent={target:r.target,event:u}}O(r)}const{left:t,top:v}=B(r);e.event={x:t,y:v,time:Date.now(),mouse:o===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:t,lastY:v}},move(r){if(e.event===void 0)return;const o=B(r),t=o.left-e.event.x,v=o.top-e.event.y;if(t===0&&v===0)return;e.lastEvt=r;const u=e.event.mouse===!0,p=()=>{f(r,u);let b;s.preserveCursor!==!0&&s.preservecursor!==!0&&(b=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),u===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Me(),e.styleCleanup=S=>{if(e.styleCleanup=void 0,b!==void 0&&(document.documentElement.style.cursor=b),document.body.classList.remove("non-selectable"),u===!0){const _=()=>{document.body.classList.remove("no-pointer-events--children")};S!==void 0?setTimeout(()=>{_(),S()},50):_()}else S!==void 0&&S()}};if(e.event.detected===!0){e.event.isFirst!==!0&&f(r,e.event.mouse);const{payload:b,synthetic:S}=H(r,e,!1);b!==void 0&&(e.handler(b)===!1?e.end(r):(e.styleCleanup===void 0&&e.event.isFirst===!0&&p(),e.event.lastX=b.position.left,e.event.lastY=b.position.top,e.event.lastDir=S===!0?void 0:b.direction,e.event.isFirst=!1));return}if(e.direction.all===!0||u===!0&&(e.modifiers.mouseAllDir===!0||e.modifiers.mousealldir===!0)){p(),e.event.detected=!0,e.move(r);return}const z=Math.abs(t),h=Math.abs(v);z!==h&&(e.direction.horizontal===!0&&z>h||e.direction.vertical===!0&&z<h||e.direction.up===!0&&z<h&&v<0||e.direction.down===!0&&z<h&&v>0||e.direction.left===!0&&z>h&&t<0||e.direction.right===!0&&z>h&&t>0?(e.event.detected=!0,e.move(r)):e.end(r,!0))},end(r,o){if(e.event!==void 0){if(T(e,"temp"),C.is.firefox===!0&&A(i,!1),o===!0)e.styleCleanup!==void 0&&e.styleCleanup(),e.event.detected!==!0&&e.initialEvent!==void 0&&e.initialEvent.target.dispatchEvent(e.initialEvent.event);else if(e.event.detected===!0){e.event.isFirst===!0&&e.handler(H(r===void 0?e.lastEvt:r,e).payload);const{payload:t}=H(r===void 0?e.lastEvt:r,e,!0),v=()=>{e.handler(t)};e.styleCleanup!==void 0?e.styleCleanup(v):v()}e.event=void 0,e.initialEvent=void 0,e.lastEvt=void 0}}};if(i.__qtouchpan=e,s.mouse===!0){const r=s.mouseCapture===!0||s.mousecapture===!0?"Capture":"";P(e,"main",[[i,"mousedown","mouseStart",`passive${r}`]])}C.has.touch===!0&&P(e,"main",[[i,"touchstart","touchStart",`passive${s.capture===!0?"Capture":""}`],[i,"touchmove","noop","notPassiveCapture"]])},updated(i,a){const s=i.__qtouchpan;s!==void 0&&(a.oldValue!==a.value&&(typeof value!="function"&&s.end(),s.handler=a.value),s.direction=I(a.modifiers))},beforeUnmount(i){const a=i.__qtouchpan;a!==void 0&&(a.event!==void 0&&a.end(),T(a,"main"),T(a,"temp"),C.is.firefox===!0&&A(i,!1),a.styleCleanup!==void 0&&a.styleCleanup(),delete i.__qtouchpan)}});const J=["vertical","horizontal"],j={vertical:{offset:"offsetY",scroll:"scrollTop",dir:"down",dist:"y"},horizontal:{offset:"offsetX",scroll:"scrollLeft",dir:"right",dist:"x"}},W={prevent:!0,mouse:!0,mouseAllDir:!0},Z=i=>i>=250?50:Math.ceil(i/5);var je=pe({name:"QScrollArea",props:{...ce,thumbStyle:Object,verticalThumbStyle:Object,horizontalThumbStyle:Object,barStyle:[Array,String,Object],verticalBarStyle:[Array,String,Object],horizontalBarStyle:[Array,String,Object],contentStyle:[Array,String,Object],contentActiveStyle:[Array,String,Object],delay:{type:[String,Number],default:1e3},visible:{type:Boolean,default:null},tabindex:[String,Number],onScroll:Function},setup(i,{slots:a,emit:s}){const f=m(!1),e=m(!1),r=m(!1),o={vertical:m(0),horizontal:m(0)},t={vertical:{ref:m(null),position:m(0),size:m(0)},horizontal:{ref:m(null),position:m(0),size:m(0)}},{proxy:v}=qe(),u=ve(i,v.$q);let p=null,z;const h=m(null),b=d(()=>"q-scrollarea"+(u.value===!0?" q-scrollarea--dark":""));t.vertical.percentage=d(()=>{const l=t.vertical.size.value-o.vertical.value;if(l<=0)return 0;const n=E(t.vertical.position.value/l,0,1);return Math.round(n*1e4)/1e4}),t.vertical.thumbHidden=d(()=>(i.visible===null?r.value:i.visible)!==!0&&f.value===!1&&e.value===!1||t.vertical.size.value<=o.vertical.value+1),t.vertical.thumbStart=d(()=>t.vertical.percentage.value*(o.vertical.value-t.vertical.thumbSize.value)),t.vertical.thumbSize=d(()=>Math.round(E(o.vertical.value*o.vertical.value/t.vertical.size.value,Z(o.vertical.value),o.vertical.value))),t.vertical.style=d(()=>({...i.thumbStyle,...i.verticalThumbStyle,top:`${t.vertical.thumbStart.value}px`,height:`${t.vertical.thumbSize.value}px`})),t.vertical.thumbClass=d(()=>"q-scrollarea__thumb q-scrollarea__thumb--v absolute-right"+(t.vertical.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),t.vertical.barClass=d(()=>"q-scrollarea__bar q-scrollarea__bar--v absolute-right"+(t.vertical.thumbHidden.value===!0?" q-scrollarea__bar--invisible":"")),t.horizontal.percentage=d(()=>{const l=t.horizontal.size.value-o.horizontal.value;if(l<=0)return 0;const n=E(Math.abs(t.horizontal.position.value)/l,0,1);return Math.round(n*1e4)/1e4}),t.horizontal.thumbHidden=d(()=>(i.visible===null?r.value:i.visible)!==!0&&f.value===!1&&e.value===!1||t.horizontal.size.value<=o.horizontal.value+1),t.horizontal.thumbStart=d(()=>t.horizontal.percentage.value*(o.horizontal.value-t.horizontal.thumbSize.value)),t.horizontal.thumbSize=d(()=>Math.round(E(o.horizontal.value*o.horizontal.value/t.horizontal.size.value,Z(o.horizontal.value),o.horizontal.value))),t.horizontal.style=d(()=>({...i.thumbStyle,...i.horizontalThumbStyle,[v.$q.lang.rtl===!0?"right":"left"]:`${t.horizontal.thumbStart.value}px`,width:`${t.horizontal.thumbSize.value}px`})),t.horizontal.thumbClass=d(()=>"q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom"+(t.horizontal.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),t.horizontal.barClass=d(()=>"q-scrollarea__bar q-scrollarea__bar--h absolute-bottom"+(t.horizontal.thumbHidden.value===!0?" q-scrollarea__bar--invisible":""));const S=d(()=>t.vertical.thumbHidden.value===!0&&t.horizontal.thumbHidden.value===!0?i.contentStyle:i.contentActiveStyle),_=[[G,l=>{Y(l,"vertical")},void 0,{vertical:!0,...W}]],x=[[G,l=>{Y(l,"horizontal")},void 0,{horizontal:!0,...W}]];function $(){const l={};return J.forEach(n=>{const c=t[n];l[n+"Position"]=c.position.value,l[n+"Percentage"]=c.percentage.value,l[n+"Size"]=c.size.value,l[n+"ContainerSize"]=o[n].value}),l}const F=ze(()=>{const l=$();l.ref=v,s("scroll",l)},0);function X(l,n,c){if(J.includes(l)===!1){console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");return}(l==="vertical"?V:D)(h.value,n,c)}function ee({height:l,width:n}){let c=!1;o.vertical.value!==l&&(o.vertical.value=l,c=!0),o.horizontal.value!==n&&(o.horizontal.value=n,c=!0),c===!0&&q()}function te({position:l}){let n=!1;t.vertical.position.value!==l.top&&(t.vertical.position.value=l.top,n=!0),t.horizontal.position.value!==l.left&&(t.horizontal.position.value=l.left,n=!0),n===!0&&q()}function re({height:l,width:n}){t.horizontal.size.value!==n&&(t.horizontal.size.value=n,q()),t.vertical.size.value!==l&&(t.vertical.size.value=l,q())}function Y(l,n){const c=t[n];if(l.isFirst===!0){if(c.thumbHidden.value===!0)return;z=c.position.value,e.value=!0}else if(e.value!==!0)return;l.isFinal===!0&&(e.value=!1);const g=j[n],w=o[n].value,ne=(c.size.value-w)/(w-c.thumbSize.value),ue=l.distance[g.dist],se=z+(l.direction===g.dir?1:-1)*ue*ne;Q(se,n)}function L(l,n){const c=t[n];if(c.thumbHidden.value!==!0){const g=l[j[n].offset];if(g<c.thumbStart.value||g>c.thumbStart.value+c.thumbSize.value){const w=g-c.thumbSize.value/2;Q(w/o[n].value*c.size.value,n)}c.ref.value!==null&&c.ref.value.dispatchEvent(new MouseEvent(l.type,l))}}function le(l){L(l,"vertical")}function ae(l){L(l,"horizontal")}function q(){f.value=!0,p!==null&&clearTimeout(p),p=setTimeout(()=>{p=null,f.value=!1},i.delay),i.onScroll!==void 0&&F()}function Q(l,n){h.value[j[n].scroll]=l}function oe(){r.value=!0}function ie(){r.value=!1}let M=null;return ye(()=>v.$q.lang.rtl,l=>{h.value!==null&&D(h.value,Math.abs(t.horizontal.position.value)*(l===!0?-1:1))}),Se(()=>{M={top:t.vertical.position.value,left:t.horizontal.position.value}}),ge(()=>{if(M===null)return;const l=h.value;l!==null&&(D(l,M.left),V(l,M.top))}),Ce(F.cancel),Object.assign(v,{getScrollTarget:()=>h.value,getScroll:$,getScrollPosition:()=>({top:t.vertical.position.value,left:t.horizontal.position.value}),getScrollPercentage:()=>({top:t.vertical.percentage.value,left:t.horizontal.percentage.value}),setScrollPosition:X,setScrollPercentage(l,n,c){X(l,n*(t[l].size.value-o[l].value)*(l==="horizontal"&&v.$q.lang.rtl===!0?-1:1),c)}}),()=>y("div",{class:b.value,onMouseenter:oe,onMouseleave:ie},[y("div",{ref:h,class:"q-scrollarea__container scroll relative-position fit hide-scrollbar",tabindex:i.tabindex!==void 0?i.tabindex:void 0},[y("div",{class:"q-scrollarea__content absolute",style:S.value},_e(a.default,[y(N,{debounce:0,onResize:re})])),y(de,{axis:"both",onScroll:te})]),y(N,{debounce:0,onResize:ee}),y("div",{class:t.vertical.barClass.value,style:[i.barStyle,i.verticalBarStyle],"aria-hidden":"true",onMousedown:le}),y("div",{class:t.horizontal.barClass.value,style:[i.barStyle,i.horizontalBarStyle],"aria-hidden":"true",onMousedown:ae}),U(y("div",{ref:t.vertical.ref,class:t.vertical.thumbClass.value,style:t.vertical.style.value,"aria-hidden":"true"}),_),U(y("div",{ref:t.horizontal.ref,class:t.horizontal.thumbClass.value,style:t.horizontal.style.value,"aria-hidden":"true"}),x)])}});export{je as Q};