import{j as Q,r as f,c as y,o as Z,k as ie,h as w,g as V,i as re,l as G,p as ee,m as ue,n as te,q as ce,s as ve,t as L,w as ae,a as de,u as fe,v as le,x as he,y as oe,z as S,A as C,B as h,d as p,C as F,F as H,D as A,Q as N,E as P,G as W,H as I,I as pe,J as me,K as D,L as J}from"./index.1a8d83d2.js";import{b as ge,g as O,Q as _e,a as X}from"./QResizeObserver.6f049bf4.js";import{_ as ne}from"./plugin-vue_export-helper.21dcd24c.js";const K=XMLHttpRequest,se=K.prototype.open,be=["top","right","bottom","left"];let M=[],q=0;function ye({p:e,pos:i,active:u,horiz:a,reverse:v,dir:r}){let o=1,c=1;return a===!0?(v===!0&&(o=-1),i==="bottom"&&(c=-1),{transform:`translate3d(${o*(e-100)}%,${u?0:c*-200}%,0)`}):(v===!0&&(c=-1),i==="right"&&(o=-1),{transform:`translate3d(${u?0:r*o*-200}%,${c*(e-100)}%,0)`})}function xe(e,i){return typeof i!="number"&&(e<25?i=Math.random()*3+3:e<65?i=Math.random()*3:e<85?i=Math.random()*2:e<99?i=.6:i=0),ge(e+i,0,100)}function $e(e){q++,M.push(e),!(q>1)&&(K.prototype.open=function(i,u){const a=[],v=()=>{M.forEach(o=>{(o.hijackFilter.value===null||o.hijackFilter.value(u)===!0)&&(o.start(),a.push(o.stop))})},r=()=>{a.forEach(o=>{o()})};this.addEventListener("loadstart",v,{once:!0}),this.addEventListener("loadend",r,{once:!0}),se.apply(this,arguments)})}function we(e){M=M.filter(i=>i.start!==e),q=Math.max(0,q-1),q===0&&(K.prototype.open=se)}var Se=Q({name:"QAjaxBar",props:{position:{type:String,default:"top",validator:e=>be.includes(e)},size:{type:String,default:"2px"},color:String,skipHijack:Boolean,reverse:Boolean,hijackFilter:Function},emits:["start","stop"],setup(e,{emit:i}){const{proxy:u}=V(),a=f(0),v=f(!1),r=f(!0);let o=0,c=null,m;const g=y(()=>`q-loading-bar q-loading-bar--${e.position}`+(e.color!==void 0?` bg-${e.color}`:"")+(r.value===!0?"":" no-transition")),T=y(()=>e.position==="top"||e.position==="bottom"),k=y(()=>T.value===!0?"height":"width"),$=y(()=>{const l=v.value,t=ye({p:a.value,pos:e.position,active:l,horiz:T.value,reverse:u.$q.lang.rtl===!0&&["top","bottom"].includes(e.position)?e.reverse===!1:e.reverse,dir:u.$q.lang.rtl===!0?-1:1});return t[k.value]=e.size,t.opacity=l?1:0,t}),x=y(()=>v.value===!0?{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":a.value}:{"aria-hidden":"true"});function _(l=300){const t=m;return m=Math.max(0,l)||0,o++,o>1?(t===0&&l>0?s():c!==null&&t>0&&l<=0&&(clearTimeout(c),c=null),o):(c!==null&&clearTimeout(c),i("start"),a.value=0,c=setTimeout(()=>{c=null,r.value=!0,l>0&&s()},v.value===!0?500:1),v.value!==!0&&(v.value=!0,r.value=!1),o)}function B(l){return o>0&&(a.value=xe(a.value,l)),o}function n(){if(o=Math.max(0,o-1),o>0)return o;c!==null&&(clearTimeout(c),c=null),i("stop");const l=()=>{r.value=!0,a.value=100,c=setTimeout(()=>{c=null,v.value=!1},1e3)};return a.value===0?c=setTimeout(l,1):l(),o}function s(){a.value<100&&(c=setTimeout(()=>{c=null,B(),s()},m))}let d;return Z(()=>{e.skipHijack!==!0&&(d=!0,$e({start:_,stop:n,hijackFilter:y(()=>e.hijackFilter||null)}))}),ie(()=>{c!==null&&clearTimeout(c),d===!0&&we(_)}),Object.assign(u,{start:_,stop:n,increment:B}),()=>w("div",{class:g.value,style:$.value,...x.value})}}),ke=Q({name:"QPageContainer",setup(e,{slots:i}){const{proxy:{$q:u}}=V(),a=re(te,G);if(a===G)return console.error("QPageContainer needs to be child of QLayout"),G;ee(ce,!0);const v=y(()=>{const r={};return a.header.space===!0&&(r.paddingTop=`${a.header.size}px`),a.right.space===!0&&(r[`padding${u.lang.rtl===!0?"Left":"Right"}`]=`${a.right.size}px`),a.footer.space===!0&&(r.paddingBottom=`${a.footer.size}px`),a.left.space===!0&&(r[`padding${u.lang.rtl===!0?"Right":"Left"}`]=`${a.left.size}px`),r});return()=>w("div",{class:"q-page-container",style:v.value},ue(i.default))}}),Be=Q({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:i,emit:u}){const{proxy:{$q:a}}=V(),v=f(null),r=f(a.screen.height),o=f(e.container===!0?0:a.screen.width),c=f({position:0,direction:"down",inflectionPoint:0}),m=f(0),g=f(ve.value===!0?0:O()),T=y(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),k=y(()=>e.container===!1?{minHeight:a.screen.height+"px"}:null),$=y(()=>g.value!==0?{[a.lang.rtl===!0?"left":"right"]:`${g.value}px`}:null),x=y(()=>g.value!==0?{[a.lang.rtl===!0?"right":"left"]:0,[a.lang.rtl===!0?"left":"right"]:`-${g.value}px`,width:`calc(100% + ${g.value}px)`}:null);function _(t){if(e.container===!0||document.qScrollPrevented!==!0){const b={position:t.position.top,direction:t.direction,directionChanged:t.directionChanged,inflectionPoint:t.inflectionPoint.top,delta:t.delta.top};c.value=b,e.onScroll!==void 0&&u("scroll",b)}}function B(t){const{height:b,width:z}=t;let E=!1;r.value!==b&&(E=!0,r.value=b,e.onScrollHeight!==void 0&&u("scrollHeight",b),s()),o.value!==z&&(E=!0,o.value=z),E===!0&&e.onResize!==void 0&&u("resize",t)}function n({height:t}){m.value!==t&&(m.value=t,s())}function s(){if(e.container===!0){const t=r.value>m.value?O():0;g.value!==t&&(g.value=t)}}let d=null;const l={instances:{},view:y(()=>e.view),isContainer:y(()=>e.container),rootRef:v,height:r,containerHeight:m,scrollbarWidth:g,totalWidth:y(()=>o.value+g.value),rows:y(()=>{const t=e.view.toLowerCase().split(" ");return{top:t[0].split(""),middle:t[1].split(""),bottom:t[2].split("")}}),header:L({size:0,offset:0,space:!1}),right:L({size:300,offset:0,space:!1}),footer:L({size:0,offset:0,space:!1}),left:L({size:300,offset:0,space:!1}),scroll:c,animate(){d!==null?clearTimeout(d):document.body.classList.add("q-body--layout-animate"),d=setTimeout(()=>{d=null,document.body.classList.remove("q-body--layout-animate")},155)},update(t,b,z){l[t][b]=z}};if(ee(te,l),O()>0){let z=function(){t=null,b.classList.remove("hide-scrollbar")},E=function(){if(t===null){if(b.scrollHeight>a.screen.height)return;b.classList.add("hide-scrollbar")}else clearTimeout(t);t=setTimeout(z,300)},R=function(U){t!==null&&U==="remove"&&(clearTimeout(t),z()),window[`${U}EventListener`]("resize",E)},t=null;const b=document.body;ae(()=>e.container!==!0?"add":"remove",R),e.container!==!0&&R("add"),de(()=>{R("remove")})}return()=>{const t=fe(i.default,[w(_e,{onScroll:_}),w(X,{onResize:B})]),b=w("div",{class:T.value,style:k.value,ref:e.container===!0?void 0:v,tabindex:-1},t);return e.container===!0?w("div",{class:"q-layout-container overflow-hidden",ref:v},[w(X,{onResize:n}),w("div",{class:"absolute-full",style:$.value},[w("div",{class:"scroll",style:x.value},[b])])]):b}}});const ze=w("div",{class:"q-space"});var Y=Q({name:"QSpace",setup(){return()=>ze}});const j=e=>(pe("data-v-ebbda446"),e=e(),me(),e),Ce=j(()=>h("h1",null,"Spark Store",-1)),Te={class:"navBtnGroup"},je=j(()=>h("span",{class:"indicator"},null,-1)),Ee={class:"label"},Fe={class:"navBtnGroup"},qe=j(()=>h("span",{class:"indicator"},null,-1)),Le={class:"label"},Pe={class:"navBtn"},Me=j(()=>h("span",{class:"indicator"},null,-1)),Qe=j(()=>h("span",{class:"label"},"\u9996\u9875",-1)),Re={class:"navBtnGroup"},Ge=j(()=>h("span",{class:"indicator"},null,-1)),He={class:"label"},Ae=le({__name:"NavigateBar",setup(e){const i=he(),u=f({home:!i.path.match("store"),navigation:!0,hoverP:!1,hoverS:!1,primary:!(i.path.match("sort")||i.path.match("application")),secondary:i.path.match("sort")||i.path.match("application"),active:!0}),a=f([{id:1,name:"home",path:"/",label:"\u9996\u9875",active:!0,el:null},{id:2,name:"download",path:"/download",label:"\u4E0B\u8F7D",active:!1,el:null},{id:3,name:"store",path:"/store",label:"\u5546\u5E97",active:!1,el:null},{id:4,name:"forum",path:"/forum",label:"\u793E\u533A",active:!1,el:null},{id:5,name:"about",path:"/about",label:"\u5173\u4E8E",active:!1,el:null}]),v=f([{id:1,name:"recommend",path:"/store",label:"\u63A8\u8350",icon:"recommend",active:!0,el:null},{id:2,name:"rank",path:"/store/rank",label:"\u6392\u884C",icon:"format_list_numbered",active:!1,el:null},{id:3,name:"sort",path:"/store/sort/games",label:"\u5206\u7C7B",icon:"queue",active:!1,el:null}]),r=f([{id:1,name:"games",path:"/store/sort/games",label:"\u6E38\u620F",icon:"sports_esports",active:!0,el:null},{id:2,name:"network",path:"/store/sort/network",label:"\u7F51\u7EDC",icon:"travel_explore",active:!1,el:null},{id:3,name:"chat",path:"/store/sort/chat",label:"\u793E\u4EA4",icon:"question_answer",active:!1,el:null},{id:4,name:"music",path:"/store/sort/music",label:"\u97F3\u4E50",icon:"library_music",active:!1,el:null},{id:5,name:"video",path:"/store/sort/video",label:"\u89C6\u9891",icon:"smart_display",active:!1,el:null},{id:6,name:"image_graphics",path:"/store/sort/image_graphics",label:"\u56FE\u5F62",icon:"image",active:!1,el:null},{id:7,name:"office",path:"/store/sort/office",label:"\u529E\u516C",icon:"business_center",active:!1,el:null},{id:8,name:"reading",path:"/store/sort/reading",label:"\u9605\u8BFB",icon:"auto_stories",active:!1,el:null},{id:9,name:"development",path:"/store/sort/development",label:"\u5F00\u53D1",icon:"developer_board",active:!1,el:null},{id:10,name:"tools",path:"/store/sort/tools",label:"\u5DE5\u5177",icon:"handyman",active:!1,el:null},{id:11,name:"themes",path:"/store/sort/themes",label:"\u7F8E\u5316",icon:"extension",active:!1,el:null},{id:12,name:"others",path:"/store/sort/others",label:"\u5176\u4ED6",icon:"pending",active:!1,el:null}]),o=f({}),c=f({});for(const n of a.value)o.value[n.name]=n,c.value[n.path]=n;const m=f({}),g=f({});for(const n of v.value)m.value[n.name]=n,g.value[n.path]=n;const T=f({}),k=f({});for(const n of r.value)T.value[n.name]=n,k.value[n.path]=n;const $=f(a.value[0]),x=f(v.value[0]),_=f(v.value[0]);function B(n){return n.match("store")?n.match("sort")?k.value.hasOwnProperty(n)?[o.value.store,m.value.sort,k.value[n]]:[o.value.store,m.value.sort,r.value[0]]:n.match("application")?[o.value.store,m.value.sort,_.value]:g.value.hasOwnProperty(n)?[o.value.store,g.value[n],r.value[0]]:[o.value.store,v.value[0],r.value[0]]:c.value.hasOwnProperty(n)?[c.value[n],m.value.recommend,r.value[0]]:[a.value[0],m.value.recommend,r.value[0]]}return ae(()=>i.path,async n=>{$.value.active=!1,x.value.active=!1,_.value.active=!1;const s=B(n);$.value=s[0],x.value=s[1],_.value=s[2],$.value.active=!0,x.value.active=!0,_.value.active=!0,u.value.home=!i.path.match("store"),u.value.primary=!x.value.name.match("sort"),u.value.secondary=x.value.name.match("sort");for(const d of a.value)d.el&&(d.el.style.cssText=`--j-offset:${($.value.id-d.id)*78}px`);for(const d of v.value)d.el&&(d.el.style.cssText=`--j-offset:${(x.value.id-d.id)*52}px`);for(const d of r.value)d.el&&(d.el.style.cssText=`--j-offset:${(_.value.id-d.id)*52}px`)}),Z(()=>{$.value.active=!1,x.value.active=!1,_.value.active=!1;const n=B(i.path);$.value=n[0],x.value=n[1],_.value=n[2],$.value.active=!0,x.value.active=!0,_.value.active=!0,u.value.home=!i.path.match("store");for(const s of a.value)s.el&&(s.el.style.cssText=`--j-offset:${($.value.id-s.id)*78}px`);for(const s of v.value)s.el&&(s.el.style.cssText=`--j-offset:${(x.value.id-s.id)*52}px`);for(const s of r.value)s.el&&(s.el.style.cssText=`--j-offset:${(_.value.id-s.id)*52}px`)}),(n,s)=>{const d=oe("router-link");return S(),C("span",{class:P(u.value)},[h("header",null,[p(d,{to:"/",class:"logo"},{default:F(()=>[Ce]),_:1}),p(Y),h("div",Te,[(S(!0),C(H,null,A(a.value,l=>(S(),W(d,{to:l.path,class:P(["navBtn",{active:l.active}]),ref_for:!0,ref:t=>{l.el=t.$el},key:l.name},{default:F(()=>[je,h("span",Ee,I(l.label),1)]),_:2},1032,["to","class"]))),128))])]),h("nav",{class:"primary",onMouseenter:s[1]||(s[1]=l=>u.value.hoverP=!0),onMouseleave:s[2]||(s[2]=l=>u.value.hoverP=!1)},[p(d,{to:"/",class:"logo"}),h("div",Fe,[(S(!0),C(H,null,A(v.value,l=>(S(),C("div",{key:l.name,class:P(["navBtn",{active:l.active}]),ref_for:!0,ref:t=>{l.el=t}},[qe,p(N,{name:l.icon,size:"24px"},null,8,["name"]),h("span",Le,I(l.label),1),p(d,{to:l.path,class:"cover"},null,8,["to"])],2))),128)),p(Y),h("div",Pe,[Me,p(N,{name:"home",size:"24px"}),Qe,p(d,{to:"/",class:"cover"})])]),h("span",{class:"activeCtrl",onClick:s[0]||(s[0]=l=>u.value.active=!u.value.active)})],32),h("nav",{class:"secondary",onMouseenter:s[3]||(s[3]=l=>u.value.hoverS=!0),onMouseleave:s[4]||(s[4]=l=>u.value.hoverS=!1)},[h("div",Re,[(S(!0),C(H,null,A(r.value,l=>(S(),W(d,{to:l.path,class:P(["navBtn",{active:l.active}]),ref_for:!0,ref:t=>{l.el=t.$el},key:l.name},{default:F(()=>[Ge,p(N,{name:l.icon,size:"24px"},null,8,["name"]),h("span",He,I(l.label),1)]),_:2},1032,["to","class"]))),128))])],32)],2)}}});var Ne=ne(Ae,[["__scopeId","data-v-ebbda446"]]);const Ie={key:0,class:"toolbox"},De={key:1,class:"dragArea"},Oe=le({__name:"MainLayout",setup(e){function i(){}function u(){}function a(){}return(v,r)=>{const o=oe("router-view");return S(),W(Be,{view:"lhr lpR fFf",class:"md3"},{default:F(()=>[p(Se,{ref:"bar",position:"top",color:"primary"},null,512),v.$q.platform.is.electron?(S(),C("div",Ie,[p(D,{color:"white",padding:"xs",icon:"minimize",onClick:i}),p(D,{color:"white",padding:"xs","icon-right":"settings_ethernet",onClick:u}),p(D,{color:"white",padding:"xs",icon:"close",onClick:a})])):J("",!0),v.$q.platform.is.electron?(S(),C("div",De)):J("",!0),p(Ne),p(ke,{style:{overflow:"hidden"}},{default:F(()=>[p(o)]),_:1})]),_:1})}}});var Ue=ne(Oe,[["__scopeId","data-v-bd4effce"]]);export{Ue as default};
