import{M as N,N as S,j as E,w as T,o as v,k as p,O as P,g as L,P as h,r as Q,s as W,R as x,h as j}from"./index.1a8d83d2.js";function X(e,n,t){return t<=n?n:Math.min(t,Math.max(n,e))}const k=[null,document,document.body,document.scrollingElement,document.documentElement];function q(e,n){let t=N(n);if(t===void 0){if(e==null)return window;t=e.closest(".scroll,.scroll-y,.overflow-auto")}return k.includes(t)?window:t}function Y(e){return(e===window?document.body:e).scrollHeight}function M(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function R(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}function C(e,n,t=0){const o=arguments[3]===void 0?performance.now():arguments[3],i=M(e);if(t<=0){i!==n&&g(e,n);return}requestAnimationFrame(c=>{const r=c-o,a=i+(n-i)/Math.max(r,t)*r;g(e,a),a!==n&&C(e,n,t-r,c)})}function H(e,n,t=0){const o=arguments[3]===void 0?performance.now():arguments[3],i=R(e);if(t<=0){i!==n&&b(e,n);return}requestAnimationFrame(c=>{const r=c-o,a=i+(n-i)/Math.max(r,t)*r;b(e,a),a!==n&&H(e,n,t-r,c)})}function g(e,n){if(e===window){window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,n);return}e.scrollTop=n}function b(e,n){if(e===window){window.scrollTo(n,window.pageYOffset||window.scrollY||document.body.scrollTop||0);return}e.scrollLeft=n}function $(e,n,t){if(t){C(e,n,t);return}g(e,n)}function B(e,n,t){if(t){H(e,n,t);return}b(e,n)}let w;function I(){if(w!==void 0)return w;const e=document.createElement("p"),n=document.createElement("div");S(e,{width:"100%",height:"200px"}),S(n,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),n.appendChild(e),document.body.appendChild(n);const t=e.offsetWidth;n.style.overflow="scroll";let o=e.offsetWidth;return t===o&&(o=n.clientWidth),n.remove(),w=t-o,w}const{passive:z}=h,A=["both","horizontal","vertical"];var U=E({name:"QScrollObserver",props:{axis:{type:String,validator:e=>A.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:n}){const t={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let o=null,i,c;T(()=>e.scrollTarget,()=>{s(),a()});function r(){o!==null&&o();const f=Math.max(0,M(i)),m=R(i),u={top:f-t.position.top,left:m-t.position.left};if(e.axis==="vertical"&&u.top===0||e.axis==="horizontal"&&u.left===0)return;const y=Math.abs(u.top)>=Math.abs(u.left)?u.top<0?"up":"down":u.left<0?"left":"right";t.position={top:f,left:m},t.directionChanged=t.direction!==y,t.delta=u,t.directionChanged===!0&&(t.direction=y,t.inflectionPoint=t.position),n("scroll",{...t})}function a(){i=q(c,e.scrollTarget),i.addEventListener("scroll",l,z),l(!0)}function s(){i!==void 0&&(i.removeEventListener("scroll",l,z),i=void 0)}function l(f){if(f===!0||e.debounce===0||e.debounce==="0")r();else if(o===null){const[m,u]=e.debounce?[setTimeout(r,e.debounce),clearTimeout]:[requestAnimationFrame(r),cancelAnimationFrame];o=()=>{u(m),o=null}}}const{proxy:d}=L();return T(()=>d.$q.lang.rtl,r),v(()=>{c=d.$el.parentNode,a()}),p(()=>{o!==null&&o(),s()}),Object.assign(d,{trigger:l,getPosition:()=>t}),P}});function D(){const e=Q(!W.value);return e.value===!1&&v(()=>{e.value=!0}),e}const V=typeof ResizeObserver!="undefined",O=V===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var G=E({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:n}){let t=null,o,i={width:-1,height:-1};function c(s){s===!0||e.debounce===0||e.debounce==="0"?r():t===null&&(t=setTimeout(r,e.debounce))}function r(){if(t!==null&&(clearTimeout(t),t=null),o){const{offsetWidth:s,offsetHeight:l}=o;(s!==i.width||l!==i.height)&&(i={width:s,height:l},n("resize",i))}}const{proxy:a}=L();if(V===!0){let s;const l=d=>{o=a.$el.parentNode,o?(s=new ResizeObserver(c),s.observe(o),r()):d!==!0&&x(()=>{l(!0)})};return v(()=>{l()}),p(()=>{t!==null&&clearTimeout(t),s!==void 0&&(s.disconnect!==void 0?s.disconnect():o&&s.unobserve(o))}),P}else{let d=function(){t!==null&&(clearTimeout(t),t=null),l!==void 0&&(l.removeEventListener!==void 0&&l.removeEventListener("resize",c,h.passive),l=void 0)},f=function(){d(),o&&o.contentDocument&&(l=o.contentDocument.defaultView,l.addEventListener("resize",c,h.passive),r())};const s=D();let l;return v(()=>{x(()=>{o=a.$el,o&&f()})}),p(d),a.trigger=c,()=>{if(s.value===!0)return j("object",{style:O.style,tabindex:-1,type:"text/html",data:O.url,"aria-hidden":"true",onLoad:f})}}}});export{U as Q,G as a,X as b,Y as c,M as d,q as e,B as f,I as g,$ as s};
