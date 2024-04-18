import{k as F,r as d,c as y,o as Z,l as ie,h as S,g as K,i as re,m as H,p as ee,n as ue,q as te,t as ce,u as ve,v as M,w as ae,a as fe,x as de,d as le,y as he,z as oe,A as k,B as C,C as h,f as p,D as L,F as N,E,G as V,H as A,I as Q,Q as I,J as pe,K as me,_ as ne,L as O,M as J}from"./index-C7NnRKns.js";import{b as ge,Q as be,a as X}from"./QResizeObserver-498hprzj.js";import{g as W}from"./scroll-Cc_Qv8yh.js";const D=XMLHttpRequest,se=D.prototype.open,ye=["top","right","bottom","left"];let R=[],P=0;function _e({p:e,pos:i,active:u,horiz:t,reverse:v,dir:r}){let o=1,c=1;return t===!0?(v===!0&&(o=-1),i==="bottom"&&(c=-1),{transform:`translate3d(${o*(e-100)}%,${u?0:c*-200}%,0)`}):(v===!0&&(c=-1),i==="right"&&(o=-1),{transform:`translate3d(${u?0:r*o*-200}%,${c*(e-100)}%,0)`})}function xe(e,i){return typeof i!="number"&&(e<25?i=Math.random()*3+3:e<65?i=Math.random()*3:e<85?i=Math.random()*2:e<99?i=.6:i=0),ge(e+i,0,100)}function $e(e){P++,R.push(e),!(P>1)&&(D.prototype.open=function(i,u){const t=[],v=()=>{R.forEach(o=>{(o.hijackFilter.value===null||o.hijackFilter.value(u)===!0)&&(o.start(),t.push(o.stop))})},r=()=>{t.forEach(o=>{o()})};this.addEventListener("loadstart",v,{once:!0}),this.addEventListener("loadend",r,{once:!0}),se.apply(this,arguments)})}function we(e){R=R.filter(i=>i.start!==e),P=Math.max(0,P-1),P===0&&(D.prototype.open=se)}const Se=F({name:"QAjaxBar",props:{position:{type:String,default:"top",validator:e=>ye.includes(e)},size:{type:String,default:"2px"},color:String,skipHijack:Boolean,reverse:Boolean,hijackFilter:Function},emits:["start","stop"],setup(e,{emit:i}){const{proxy:u}=K(),t=d(0),v=d(!1),r=d(!0);let o=0,c=null,m;const g=y(()=>`q-loading-bar q-loading-bar--${e.position}`+(e.color!==void 0?` bg-${e.color}`:"")+(r.value===!0?"":" no-transition")),j=y(()=>e.position==="top"||e.position==="bottom"),B=y(()=>j.value===!0?"height":"width"),$=y(()=>{const a=v.value,l=_e({p:t.value,pos:e.position,active:a,horiz:j.value,reverse:u.$q.lang.rtl===!0&&["top","bottom"].includes(e.position)?e.reverse===!1:e.reverse,dir:u.$q.lang.rtl===!0?-1:1});return l[B.value]=e.size,l.opacity=a?1:0,l}),_=y(()=>v.value===!0?{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":t.value}:{"aria-hidden":"true"});function b(a=300){const l=m;return m=Math.max(0,a)||0,o++,o>1?(l===0&&a>0?s():c!==null&&l>0&&a<=0&&(clearTimeout(c),c=null),o):(c!==null&&clearTimeout(c),i("start"),t.value=0,c=setTimeout(()=>{c=null,r.value=!0,a>0&&s()},v._value===!0?500:1),v._value!==!0&&(v.value=!0,r.value=!1),o)}function T(a){return o>0&&(t.value=xe(t.value,a)),o}function n(){if(o=Math.max(0,o-1),o>0)return o;c!==null&&(clearTimeout(c),c=null),i("stop");const a=()=>{r.value=!0,t.value=100,c=setTimeout(()=>{c=null,v.value=!1},1e3)};return t.value===0?c=setTimeout(a,1):a(),o}function s(){t.value<100&&(c=setTimeout(()=>{c=null,T(),s()},m))}let f;return Z(()=>{e.skipHijack!==!0&&(f=!0,$e({start:b,stop:n,hijackFilter:y(()=>e.hijackFilter||null)}))}),ie(()=>{c!==null&&clearTimeout(c),f===!0&&we(b)}),Object.assign(u,{start:b,stop:n,increment:T}),()=>S("div",{class:g.value,style:$.value,..._.value})}}),ke=F({name:"QPageContainer",setup(e,{slots:i}){const{proxy:{$q:u}}=K(),t=re(te,H);if(t===H)return console.error("QPageContainer needs to be child of QLayout"),H;ee(ce,!0);const v=y(()=>{const r={};return t.header.space===!0&&(r.paddingTop=`${t.header.size}px`),t.right.space===!0&&(r[`padding${u.lang.rtl===!0?"Left":"Right"}`]=`${t.right.size}px`),t.footer.space===!0&&(r.paddingBottom=`${t.footer.size}px`),t.left.space===!0&&(r[`padding${u.lang.rtl===!0?"Right":"Left"}`]=`${t.left.size}px`),r});return()=>S("div",{class:"q-page-container",style:v.value},ue(i.default))}}),ze=F({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:i,emit:u}){const{proxy:{$q:t}}=K(),v=d(null),r=d(t.screen.height),o=d(e.container===!0?0:t.screen.width),c=d({position:0,direction:"down",inflectionPoint:0}),m=d(0),g=d(ve.value===!0?0:W()),j=y(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),B=y(()=>e.container===!1?{minHeight:t.screen.height+"px"}:null),$=y(()=>g.value!==0?{[t.lang.rtl===!0?"left":"right"]:`${g.value}px`}:null),_=y(()=>g.value!==0?{[t.lang.rtl===!0?"right":"left"]:0,[t.lang.rtl===!0?"left":"right"]:`-${g.value}px`,width:`calc(100% + ${g.value}px)`}:null);function b(l){if(e.container===!0||document.qScrollPrevented!==!0){const x={position:l.position.top,direction:l.direction,directionChanged:l.directionChanged,inflectionPoint:l.inflectionPoint.top,delta:l.delta.top};c.value=x,e.onScroll!==void 0&&u("scroll",x)}}function T(l){const{height:x,width:z}=l;let w=!1;r.value!==x&&(w=!0,r.value=x,e.onScrollHeight!==void 0&&u("scrollHeight",x),s()),o.value!==z&&(w=!0,o.value=z),w===!0&&e.onResize!==void 0&&u("resize",l)}function n({height:l}){m.value!==l&&(m.value=l,s())}function s(){if(e.container===!0){const l=r.value>m.value?W():0;g.value!==l&&(g.value=l)}}let f=null;const a={instances:{},view:y(()=>e.view),isContainer:y(()=>e.container),rootRef:v,height:r,containerHeight:m,scrollbarWidth:g,totalWidth:y(()=>o.value+g.value),rows:y(()=>{const l=e.view.toLowerCase().split(" ");return{top:l[0].split(""),middle:l[1].split(""),bottom:l[2].split("")}}),header:M({size:0,offset:0,space:!1}),right:M({size:300,offset:0,space:!1}),footer:M({size:0,offset:0,space:!1}),left:M({size:300,offset:0,space:!1}),scroll:c,animate(){f!==null?clearTimeout(f):document.body.classList.add("q-body--layout-animate"),f=setTimeout(()=>{f=null,document.body.classList.remove("q-body--layout-animate")},155)},update(l,x,z){a[l][x]=z}};if(ee(te,a),W()>0){let l=function(){w=null,G.classList.remove("hide-scrollbar")},x=function(){if(w===null){if(G.scrollHeight>t.screen.height)return;G.classList.add("hide-scrollbar")}else clearTimeout(w);w=setTimeout(l,300)},z=function(U){w!==null&&U==="remove"&&(clearTimeout(w),l()),window[`${U}EventListener`]("resize",x)},w=null;const G=document.body;ae(()=>e.container!==!0?"add":"remove",z),e.container!==!0&&z("add"),fe(()=>{z("remove")})}return()=>{const l=de(i.default,[S(be,{onScroll:b}),S(X,{onResize:T})]),x=S("div",{class:j.value,style:B.value,ref:e.container===!0?void 0:v,tabindex:-1},l);return e.container===!0?S("div",{class:"q-layout-container overflow-hidden",ref:v},[S(X,{onResize:n}),S("div",{class:"absolute-full",style:$.value},[S("div",{class:"scroll",style:_.value},[x])])]):x}}}),Be=S("div",{class:"q-space"}),Y=F({name:"QSpace",setup(){return()=>Be}}),q=e=>(pe("data-v-7e20051e"),e=e(),me(),e),Te=q(()=>h("h1",null,"Spark Store",-1)),Ce={class:"navBtnGroup"},je=q(()=>h("span",{class:"indicator"},null,-1)),qe={class:"label"},Le={class:"navBtnGroup"},Pe=q(()=>h("span",{class:"indicator"},null,-1)),Me={class:"label"},Qe={class:"navBtn"},Re=q(()=>h("span",{class:"indicator"},null,-1)),Fe=q(()=>h("span",{class:"label"},"首页",-1)),Ge={class:"navBtnGroup"},He=q(()=>h("span",{class:"indicator"},null,-1)),Ne={class:"label"},Ee=le({__name:"NavigateBar",setup(e){const i=he(),u=d({home:!i.path.match("store"),navigation:!0,hoverP:!1,hoverS:!1,primary:!(i.path.match("sort")||i.path.match("application")),secondary:i.path.match("sort")||i.path.match("application"),active:!0}),t=d([{id:1,name:"home",path:"/",label:"首页",active:!0,el:null},{id:2,name:"download",path:"/download",label:"下载",active:!1,el:null},{id:3,name:"store",path:"/store",label:"商店",active:!1,el:null},{id:4,name:"forum",path:"/forum",label:"社区",active:!1,el:null},{id:5,name:"about",path:"/about",label:"关于",active:!1,el:null}]),v=d([{id:1,name:"recommend",path:"/store",label:"推荐",icon:"recommend",active:!0,el:null},{id:2,name:"rank",path:"/store/rank",label:"排行",icon:"format_list_numbered",active:!1,el:null},{id:3,name:"sort",path:"/store/sort/games",label:"分类",icon:"queue",active:!1,el:null}]),r=d([{id:1,name:"games",path:"/store/sort/games",label:"游戏",icon:"sports_esports",active:!0,el:null},{id:2,name:"network",path:"/store/sort/network",label:"网络",icon:"travel_explore",active:!1,el:null},{id:3,name:"chat",path:"/store/sort/chat",label:"社交",icon:"question_answer",active:!1,el:null},{id:4,name:"music",path:"/store/sort/music",label:"音乐",icon:"library_music",active:!1,el:null},{id:5,name:"video",path:"/store/sort/video",label:"视频",icon:"smart_display",active:!1,el:null},{id:6,name:"image_graphics",path:"/store/sort/image_graphics",label:"图形",icon:"image",active:!1,el:null},{id:7,name:"office",path:"/store/sort/office",label:"办公",icon:"business_center",active:!1,el:null},{id:8,name:"reading",path:"/store/sort/reading",label:"阅读",icon:"auto_stories",active:!1,el:null},{id:9,name:"development",path:"/store/sort/development",label:"开发",icon:"developer_board",active:!1,el:null},{id:10,name:"tools",path:"/store/sort/tools",label:"工具",icon:"handyman",active:!1,el:null},{id:11,name:"themes",path:"/store/sort/themes",label:"美化",icon:"extension",active:!1,el:null},{id:12,name:"others",path:"/store/sort/others",label:"其他",icon:"pending",active:!1,el:null}]),o=d({}),c=d({});for(const n of t.value)o.value[n.name]=n,c.value[n.path]=n;const m=d({}),g=d({});for(const n of v.value)m.value[n.name]=n,g.value[n.path]=n;const j=d({}),B=d({});for(const n of r.value)j.value[n.name]=n,B.value[n.path]=n;const $=d(t.value[0]),_=d(v.value[0]),b=d(v.value[0]);function T(n){return n.match("store")?n.match("sort")?B.value.hasOwnProperty(n)?[o.value.store,m.value.sort,B.value[n]]:[o.value.store,m.value.sort,r.value[0]]:n.match("application")?[o.value.store,m.value.sort,b.value]:g.value.hasOwnProperty(n)?[o.value.store,g.value[n],r.value[0]]:[o.value.store,v.value[0],r.value[0]]:c.value.hasOwnProperty(n)?[c.value[n],m.value.recommend,r.value[0]]:[t.value[0],m.value.recommend,r.value[0]]}return ae(()=>i.path,async n=>{$.value.active=!1,_.value.active=!1,b.value.active=!1;const s=T(n);$.value=s[0],_.value=s[1],b.value=s[2],$.value.active=!0,_.value.active=!0,b.value.active=!0,u.value.home=!i.path.match("store"),u.value.primary=!_.value.name.match("sort"),u.value.secondary=_.value.name.match("sort");for(const f of t.value)f.el&&(f.el.style.cssText=`--j-offset:${($.value.id-f.id)*78}px`);for(const f of v.value)f.el&&(f.el.style.cssText=`--j-offset:${(_.value.id-f.id)*52}px`);for(const f of r.value)f.el&&(f.el.style.cssText=`--j-offset:${(b.value.id-f.id)*52}px`)}),Z(()=>{$.value.active=!1,_.value.active=!1,b.value.active=!1;const n=T(i.path);$.value=n[0],_.value=n[1],b.value=n[2],$.value.active=!0,_.value.active=!0,b.value.active=!0,u.value.home=!i.path.match("store");for(const s of t.value)s.el&&(s.el.style.cssText=`--j-offset:${($.value.id-s.id)*78}px`);for(const s of v.value)s.el&&(s.el.style.cssText=`--j-offset:${(_.value.id-s.id)*52}px`);for(const s of r.value)s.el&&(s.el.style.cssText=`--j-offset:${(b.value.id-s.id)*52}px`)}),(n,s)=>{const f=oe("router-link");return k(),C("span",{class:Q(u.value)},[h("header",null,[p(f,{to:"/",class:"logo"},{default:L(()=>[Te]),_:1}),p(Y),h("div",Ce,[(k(!0),C(N,null,E(t.value,a=>(k(),V(f,{to:a.path,class:Q(["navBtn",{active:a.active}]),ref_for:!0,ref:l=>{a.el=l.$el},key:a.name},{default:L(()=>[je,h("span",qe,A(a.label),1)]),_:2},1032,["to","class"]))),128))])]),h("nav",{class:"primary",onMouseenter:s[1]||(s[1]=a=>u.value.hoverP=!0),onMouseleave:s[2]||(s[2]=a=>u.value.hoverP=!1)},[p(f,{to:"/",class:"logo"}),h("div",Le,[(k(!0),C(N,null,E(v.value,a=>(k(),C("div",{key:a.name,class:Q(["navBtn",{active:a.active}]),ref_for:!0,ref:l=>{a.el=l}},[Pe,p(I,{name:a.icon,size:"24px"},null,8,["name"]),h("span",Me,A(a.label),1),p(f,{to:a.path,class:"cover"},null,8,["to"])],2))),128)),p(Y),h("div",Qe,[Re,p(I,{name:"home",size:"24px"}),Fe,p(f,{to:"/",class:"cover"})])]),h("span",{class:"activeCtrl",onClick:s[0]||(s[0]=a=>u.value.active=!u.value.active)})],32),h("nav",{class:"secondary",onMouseenter:s[3]||(s[3]=a=>u.value.hoverS=!0),onMouseleave:s[4]||(s[4]=a=>u.value.hoverS=!1)},[h("div",Ge,[(k(!0),C(N,null,E(r.value,a=>(k(),V(f,{to:a.path,class:Q(["navBtn",{active:a.active}]),ref_for:!0,ref:l=>{a.el=l.$el},key:a.name},{default:L(()=>[He,p(I,{name:a.icon,size:"24px"},null,8,["name"]),h("span",Ne,A(a.label),1)]),_:2},1032,["to","class"]))),128))])],32)],2)}}}),Ae=ne(Ee,[["__scopeId","data-v-7e20051e"],["__file","NavigateBar.vue"]]),Ie={key:0,class:"toolbox"},Oe={key:1,class:"dragArea"},We=le({__name:"MainLayout",setup(e){function i(){}function u(){}function t(){}return(v,r)=>{const o=oe("router-view");return k(),V(ze,{view:"lhr lpR fFf",class:"md3"},{default:L(()=>[p(Se,{ref:"bar",position:"top",color:"primary"},null,512),v.$q.platform.is.electron?(k(),C("div",Ie,[p(O,{color:"white",padding:"xs",icon:"minimize",onClick:i}),p(O,{color:"white",padding:"xs","icon-right":"settings_ethernet",onClick:u}),p(O,{color:"white",padding:"xs",icon:"close",onClick:t})])):J("",!0),v.$q.platform.is.electron?(k(),C("div",Oe)):J("",!0),p(Ae),p(ke,{style:{overflow:"hidden"}},{default:L(()=>[p(o)]),_:1})]),_:1})}}}),Ue=ne(We,[["__scopeId","data-v-3b4198a6"],["__file","MainLayout.vue"]]);export{Ue as default};
