import{k as p,i as su,m as $,c as B,a2 as X,h as e,Q as nu,n as k,a3 as Y,p as lu,g as uu,a4 as ou,a5 as ru,r as D,w as x,$ as cu,a0 as du,l as Fu,o as Eu,N as vu,O as U,a6 as R,a7 as mu,a8 as fu,d as gu,z as b,G as K,C as v,B as i,f as g,a9 as W,Z as P,K as M,H as G,A as w,D as L,F as I,L as Bu,aa as Cu,E as hu,I as _u,J as Du}from"./index.47983c54.js";import{u as bu,a as Au}from"./use-dark.0505aa20.js";import{d as S,b as z,s as V,a as yu}from"./scroll.33da46a4.js";import{Q as xu}from"./QScrollArea.d0c42c4c.js";import{u as wu,Q as pu}from"./use-meta.845974cd.js";import{F as qu}from"./FooterView.bf79e79d.js";import{api as J}from"./api.74bd1fae.js";import{_ as Su}from"./plugin-vue_export-helper.21dcd24c.js";import"./QResizeObserver.5a87ac03.js";import"./selection.0cb4229b.js";var ku=p({name:"QTimelineEntry",props:{heading:Boolean,tag:{type:String,default:"h3"},side:{type:String,default:"right",validator:u=>["left","right"].includes(u)},icon:String,avatar:String,color:String,title:String,subtitle:String,body:String},setup(u,{slots:s}){const r=su(Y,$);if(r===$)return console.error("QTimelineEntry needs to be child of QTimeline"),$;const c=B(()=>`q-timeline__entry q-timeline__entry--${u.side}`+(u.icon!==void 0||u.avatar!==void 0?" q-timeline__entry--icon":"")),l=B(()=>`q-timeline__dot text-${u.color||r.color}`),E=B(()=>r.layout==="comfortable"&&r.side==="left");return()=>{const m=X(s.default,[]);if(u.body!==void 0&&m.unshift(u.body),u.heading===!0){const a=[e("div"),e("div"),e(u.tag,{class:"q-timeline__heading-title"},m)];return e("div",{class:"q-timeline__heading"},E.value===!0?a.reverse():a)}let F;u.icon!==void 0?F=[e(nu,{class:"row items-center justify-center",name:u.icon})]:u.avatar!==void 0&&(F=[e("img",{class:"q-timeline__dot-img",src:u.avatar})]);const t=[e("div",{class:"q-timeline__subtitle"},[e("span",{},k(s.subtitle,[u.subtitle]))]),e("div",{class:l.value},F),e("div",{class:"q-timeline__content"},[e("h6",{class:"q-timeline__title"},k(s.title,[u.title]))].concat(m))];return e("li",{class:c.value},E.value===!0?t.reverse():t)}}}),Tu=p({name:"QTimeline",props:{...bu,color:{type:String,default:"primary"},side:{type:String,default:"right",validator:u=>["left","right"].includes(u)},layout:{type:String,default:"dense",validator:u=>["dense","comfortable","loose"].includes(u)}},setup(u,{slots:s}){const r=uu(),c=Au(u,r.proxy.$q);lu(Y,u);const l=B(()=>`q-timeline q-timeline--${u.layout} q-timeline--${u.layout}--${u.side}`+(c.value===!0?" q-timeline--dark":""));return()=>e("ul",{class:l.value},k(s.default))}});const Qu=[e("circle",{cx:"15",cy:"15",r:"15"},[e("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),e("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})]),e("circle",{cx:"60",cy:"15",r:"9","fill-opacity":".3"},[e("animate",{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}),e("animate",{attributeName:"fill-opacity",from:".5",to:".5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"})]),e("circle",{cx:"105",cy:"15",r:"15"},[e("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),e("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})])];var Hu=p({name:"QSpinnerDots",props:ou,setup(u){const{cSize:s,classes:r}=ru(u);return()=>e("svg",{class:r.value,fill:"currentColor",width:s.value,height:s.value,viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg"},Qu)}});const{passive:A}=vu;var Nu=p({name:"QInfiniteScroll",props:{offset:{type:Number,default:500},debounce:{type:[String,Number],default:100},scrollTarget:{default:void 0},initialIndex:Number,disable:Boolean,reverse:Boolean},emits:["load"],setup(u,{slots:s,emit:r}){const c=D(!1),l=D(!0),E=D(null),m=D(null);let F=u.initialIndex||0,t,a;const n=B(()=>"q-infinite-scroll__loading"+(c.value===!0?"":" invisible"));function d(){if(u.disable===!0||c.value===!0||l.value===!1)return;const o=S(t),h=z(t),y=R(t);u.reverse===!1?Math.round(h+y+u.offset)>=Math.round(o)&&f():Math.round(h)<=u.offset&&f()}function f(){if(u.disable===!0||c.value===!0||l.value===!1)return;F++,c.value=!0;const o=S(t);r("load",F,h=>{l.value===!0&&(c.value=!1,U(()=>{if(u.reverse===!0){const y=S(t),au=z(t),iu=y-o;V(t,au+iu)}h===!0?T():E.value&&E.value.closest("body")&&a()}))})}function C(){F=0}function q(){l.value===!1&&(l.value=!0,t.addEventListener("scroll",a,A)),d()}function T(){l.value===!0&&(l.value=!1,c.value=!1,t.removeEventListener("scroll",a,A),a!==void 0&&a.cancel!==void 0&&a.cancel())}function j(){if(t&&l.value===!0&&t.removeEventListener("scroll",a,A),t=yu(E.value,u.scrollTarget),l.value===!0){if(t.addEventListener("scroll",a,A),u.reverse===!0){const o=S(t),h=R(t);V(t,o-h)}d()}}function eu(o){F=o}function O(o){o=parseInt(o,10);const h=a;a=o<=0?d:mu(d,isNaN(o)===!0?100:o),t&&l.value===!0&&(h!==void 0&&t.removeEventListener("scroll",h,A),t.addEventListener("scroll",a,A))}function Q(o){if(H.value===!0){if(m.value===null){o!==!0&&U(()=>{Q(!0)});return}const h=`${c.value===!0?"un":""}pauseAnimations`;Array.from(m.value.getElementsByTagName("svg")).forEach(y=>{y[h]()})}}const H=B(()=>u.disable!==!0&&l.value===!0);x([c,H],()=>{Q()}),x(()=>u.disable,o=>{o===!0?T():q()}),x(()=>u.reverse,()=>{c.value===!1&&l.value===!0&&d()}),x(()=>u.scrollTarget,j),x(()=>u.debounce,O);let N=!1;cu(()=>{N!==!1&&t&&V(t,N)}),du(()=>{N=t?z(t):!1}),Fu(()=>{l.value===!0&&t.removeEventListener("scroll",a,A)}),Eu(()=>{O(u.debounce),j(),c.value===!1&&Q()});const tu=uu();return Object.assign(tu.proxy,{poll:()=>{a!==void 0&&a()},trigger:f,stop:T,reset:C,resume:q,setIndex:eu}),()=>{const o=X(s.default,[]);return H.value===!0&&o[u.reverse===!1?"push":"unshift"](e("div",{ref:m,class:n.value},k(s.loading))),e("div",{class:"q-infinite-scroll",ref:E},o)}}}),Z=p({name:"QChatMessage",props:{sent:Boolean,label:String,bgColor:String,textColor:String,name:String,avatar:String,text:Array,stamp:String,size:String,labelHtml:Boolean,nameHtml:Boolean,textHtml:Boolean,stampHtml:Boolean},setup(u,{slots:s}){const r=B(()=>u.sent===!0?"sent":"received"),c=B(()=>`q-message-text-content q-message-text-content--${r.value}`+(u.textColor!==void 0?` text-${u.textColor}`:"")),l=B(()=>`q-message-text q-message-text--${r.value}`+(u.bgColor!==void 0?` text-${u.bgColor}`:"")),E=B(()=>"q-message-container row items-end no-wrap"+(u.sent===!0?" reverse":"")),m=B(()=>u.size!==void 0?`col-${u.size}`:""),F=B(()=>({msg:u.textHtml===!0?"innerHTML":"textContent",stamp:u.stampHtml===!0?"innerHTML":"textContent",name:u.nameHtml===!0?"innerHTML":"textContent",label:u.labelHtml===!0?"innerHTML":"textContent"}));function t(n){return s.stamp!==void 0?[n,e("div",{class:"q-message-stamp"},s.stamp())]:u.stamp?[n,e("div",{class:"q-message-stamp",[F.value.stamp]:u.stamp})]:[n]}function a(n,d){const f=d===!0?n.length>1?C=>C:C=>e("div",[C]):C=>e("div",{[F.value.msg]:C});return n.map((C,q)=>e("div",{key:q,class:l.value},[e("div",{class:c.value},t(f(C)))]))}return()=>{const n=[];s.avatar!==void 0?n.push(s.avatar()):u.avatar!==void 0&&n.push(e("img",{class:`q-message-avatar q-message-avatar--${r.value}`,src:u.avatar,"aria-hidden":"true"}));const d=[];s.name!==void 0?d.push(e("div",{class:`q-message-name q-message-name--${r.value}`},s.name())):u.name!==void 0&&d.push(e("div",{class:`q-message-name q-message-name--${r.value}`,[F.value.name]:u.name})),s.default!==void 0?d.push(a(fu(s.default()),!0)):u.text!==void 0&&d.push(a(u.text)),n.push(e("div",{class:m.value},d));const f=[];return s.label!==void 0?f.push(e("div",{class:"q-message-label"},s.label())):u.label!==void 0&&f.push(e("div",{class:"q-message-label",[F.value.label]:u.label})),f.push(e("div",{class:E.value},n)),e("div",{class:`q-message q-message-${r.value}`},f)}}}),$u="/spark-store-qe/assets/favicon-96x96.a9a0cf56.png",Pu="/spark-store-qe/assets/download-debian.e986f5b1.png";const _=u=>(_u("data-v-b5371596"),u=u(),Du(),u),Mu=_(()=>i("h1",null,"\u4E0B\u8F7D",-1)),Lu=_(()=>i("h2",null,"DOWNLOADS",-1)),Iu={class:"row",style:{width:"76vw"}},zu={class:"row",style:{"flex-grow":"1",padding:"4vmin"}},Vu={class:"row downCard"},Uu=_(()=>i("img",{src:$u,alt:""},null,-1)),ju={class:"row",style:{"flex-direction":"column","align-items":"flex-start","margin-left":"2vmin"}},Ou=_(()=>i("h3",null,"\u8F6F\u4EF6\u672C\u4F53",-1)),Ru={class:"row"},Ku={class:"row",style:{"flex-grow":"1",padding:"4vmin"}},Wu={class:"row downCard"},Gu=_(()=>i("img",{src:Pu,alt:""},null,-1)),Ju={class:"row",style:{"flex-direction":"column","align-items":"flex-start","margin-left":"2vmin"}},Zu=_(()=>i("h3",null,"\u4F9D\u8D56\u5305(Ubuntu 20.04/Debian 11)",-1)),Xu={class:"row"},Yu=_(()=>i("span",null,"\u6700\u65B0\u7248\u672C 5.4.20",-1)),ue={style:{"max-width":"600px"}},ee={style:{"padding-inline-start":"0","word-break":"break-word"}},te={key:0,class:"text-center text-grey"},ae={class:"row justify-center q-my-md"},ie=_(()=>i("div",{class:"logoPanel"},null,-1)),se={class:"contentPanel"},ne=_(()=>i("h3",null,"\u5B89\u88C5\u8BF4\u660E Q&A",-1)),le=_(()=>i("div",{class:"avatar"},"Q",-1)),oe=_(()=>i("div",{class:"avatar"},"A",-1)),re=gu({__name:"DownloadPage",setup(u){wu({title:"\u4E0B\u8F7D",titleTemplate:t=>`${t} - \u661F\u706B\u5E94\u7528\u5546\u5E97`,meta:{description:{name:"description",content:"\u661F\u706B\u5E94\u7528\u5546\u5E97spark store\u5B98\u65B9\u4E0B\u8F7D"},keywords:{name:"keywords",content:"spark store,\u661F\u706B\u5E94\u7528\u5546\u5E97,\u661F\u706B\u5546\u5E97,\u661F\u706B\u5E94\u7528\u5546\u5E97\u4E0B\u8F7D,\u661F\u706B\u5546\u5E97\u4E0B\u8F7D,deepin\u5E94\u7528\u5546\u5E97,uos,ubuntu,deepin"},equiv:{"http-equiv":"Content-Type",content:"text/html; charset=UTF-8"}}});const s=D(!1),r=[{question:["\u661F\u706B\u7528\u6237\u7684\u793E\u7FA4\u5728\u54EA\u91CC\uFF1F\u6709\u8BBA\u575B\u6216\u8005\u7FA4\u804A\u5417"],answer:["<a href='https://blog.shenmo.tech/post/%E6%95%85%E9%9A%9C%E5%85%AC%E5%91%8A/'>\u70B9\u51FB\u8FD9\u91CC</a>\u67E5\u770B\u6211\u4EEC\u7684\u793E\u7FA4\u5E73\u53F0"]},{question:["\u53EA\u6709Debian\u7CFB\u53EF\u4EE5\u4F7F\u7528\u661F\u706B\u5E94\u7528\u5546\u5E97\u5417"],answer:["\u73B0\u5728\u60A8\u6709\u66F4\u591A\u9009\u62E9\u3002\u60A8\u53EF\u4F7F\u7528<a href='https://gitee.com/amber-ce/amber-ce-bookworm'>ACE\u517C\u5BB9\u73AF\u5883</a>\u6765\u5728Arch,Fedora\u4E0A\u5B89\u88C5\u5546\u5E97","\u5C3D\u7BA1\u5982\u6B64\uFF0C\u90E8\u5206\u5E94\u7528\u8FD8\u662F\u65E0\u6CD5\u4F7F\u7528\u7684\u3002\u8BF7\u53C2\u8003\uFF1A<a href='https://bbs.spark-app.store/d/1668-xing-huo-ying-yong-shang-dian-on-ace'>\u6B64\u8FDE\u63A5</a>"]},{question:["\u6211\u662F\u56FD\u4EA7\u67B6\u6784\uFF0C\u600E\u4E48\u83B7\u53D6\u5E94\u7528\uFF1F"],answer:["\u6211\u4EEC\u73B0\u5728\u652F\u6301\u6D77\u5149\uFF0C\u5146\u82AF\u7684x86;\u98DE\u817E\uFF0C\u9CB2\u9E4F\uFF0C\u9E92\u9E9F\u7684arm64;\u9F99\u82AF\u65B0\u4E16\u754C\u7684deepin 23(loong64)\uFF0C\u5177\u4F53\u5B89\u88C5\u6559\u7A0B\u8BF7\u67E5\u770B\u4E0B\u8F7D\u754C\u9762"]},{question:["\u5E94\u7528\u65E0\u6CD5\u4F7F\u7528\u53BB\u54EA\u53CD\u9988\uFF1F"],answer:["\u5E94\u7528\u8BE6\u60C5\u9875\u9762\u6709\u6309\u94AE\uFF0C\u5728\u4E0B\u8F7D\u5B89\u88C5\u4E0B\u65B9"]},{question:["\u5728\u54EA\u91CC\u6295\u7A3F\u6211\u559C\u6B22\u6216\u8005\u6211\u5E38\u7528\u7684\u5E94\u7528\uFF1F"],answer:["\u53F3\u4E0A\u89D2\u83DC\u5355--->\u6295\u9012\u5E94\u7528\u3002\u82E5\u662F\u5DF2\u4E0A\u67B6\u5E94\u7528\u5219\u63A8\u8350\u4F7F\u7528\u6295\u7A3F\u5668\u6295\u7A3F\uFF0C\u53EF\u4EE5\u9009\u62E9\u67B6\u6784\u540E\u4E00\u952E\u586B\u5199\u4FE1\u606F\uFF0C\u4E0D\u9700\u8981\u624B\u52A8\u5199\u4E86","arm/\u9F99\u82AF\u5E94\u7528\u6295\u9012\u6682\u4EC5\u652F\u6301\u6295\u7A3F\u5668\u7684\u6253\u5305\u529F\u80FD\u6295\u9012\uFF0C\u8BF7\u5728\u586B\u5199\u4FE1\u606F\u540E\u6309\u53F3\u952E\u7A7A\u767D\u5730\u533A\uFF0C\u7136\u540E\u70B9\u51FB\u6253\u5305\u4E00\u4E0B\uFF0C\u9009\u62E9\u67B6\u6784\u540E\u628A\u83B7\u5F97\u7684deb\u5305\u53D1\u9001\u7ED9\u7528\u6237\u793E\u7FA4\u7684shenmo\u5373\u53EF\u624B\u52A8\u4E0A\u67B6"]},{question:["\u6211\u88C5\u4E0D\u4E0A\u5546\u5E97\u600E\u4E48\u529E\uFF1F"],answer:["UOS 1060+/deepin 20.9/deepin 23/Debian 12/Ubuntu 22.04+\u53EF\u76F4\u63A5\u5B89\u88C5\u5E94\u7528\u5546\u5E97","\u5BF9\u4E8EUbuntu 20.04/Debian10/Debian 11\uFF0C\u5B89\u88C5\u4F9D\u8D56\u5305\u540E\u624D\u80FD\u5B89\u88C5\u5546\u5E97","\u5BF9\u4E8E\u9F99\u82AF\u7528\u6237\u8BF7\u9075\u5FAA\u4E0B\u8F7D\u754C\u9762\u7684\u5B89\u88C5\u6559\u7A0B","\u94F6\u6CB3\u9E92\u9E9FV10\u7684\u67D0\u4E9B\u7248\u672C\u5546\u5E97\u9891\u7E41\u95EA\u9000\u65E0\u6CD5\u6B63\u5E38\u4F7F\u7528\uFF0C\u56E0\u4E3A\u94F6\u6CB3\u9E92\u9E9F\u7684\u7CFB\u7EDFqt\u6709\u95EE\u9898\uFF0C\u8FD9\u4E0D\u662F\u661F\u706B\u7684bug,\u82E5\u5B9E\u5728\u65E0\u6CD5\u4F7F\u7528\u8BF7\u5B89\u88C5\u7EC8\u7AEF\u7248\u6216\u8005\u4F7F\u7528ACE\u5B89\u88C5","\u8FD8\u662F\u641E\u4E0D\u660E\u767D\uFF0C\u8BF7\u56DE\u5230\u7B2C\u4E00\u6761\u8FDB\u5165\u793E\u7FA4\u5BFB\u6C42\u5C0F\u4F19\u4F34\u7684\u5E2E\u52A9","\u5982\u679C\u4F60\u8FD8\u662F\u641E\u4E0D\u660E\u767D\u600E\u4E48\u88C5\uFF0C\u8BF7\u4F7F\u7528\u661F\u706B\u7EC8\u7AEF\u7248\uFF0C\u540C\u6837\u5728\u4E0B\u8F7D\u754C\u9762\u53EF\u4EE5\u83B7\u53D6\u5230\u3002"]},{question:["\u6211\u53EF\u4EE5\u7528dpkg -i\u5B89\u88C5\u5417\uFF1F"],answer:["\u4E0D\u53EF\u4EE5\uFF01\u4E0D\u53EF\u4EE5\uFF01\u4E0D\u53EF\u4EE5\uFF01\u76F4\u63A5\u8C03\u7528dpkg\u662F\u4E0D\u5904\u7406\u4F9D\u8D56\u7684\uFF01\u4F7F\u7528sudo apt install ./xxxx.deb\u6765\u5B89\u88C5\uFF0C\u6216\u8005\u76F4\u63A5\u4F7F\u7528gdebi\u7B49\u56FE\u5F62\u5316\u7684\u5B89\u88C5\u5668\uFF01\uFF01\uFF01","\u5DF2\u7ECF\u6709\u4E0D\u4E0B20\u4E2A\u4EBA\u88AB\u8FD9\u4E2A\u5751\u4E86\u3002CSDN\u5BB3\u4EBA\u4E0D\u6D45"]},{question:["\u6211\u60F3\u8F6C\u8F7D\u661F\u706B\u5546\u5E97\u4E0A\u7684\u5E94\u7528\u5305\uFF0C\u4E0B\u8F7D\u5B8C\u4E86\u4E3A\u4EC0\u4E48\u627E\u4E0D\u5230\uFF1F"],answer:["\u661F\u706B\u5E94\u7528\u5546\u5E97\u4E0A\u7684\u5E94\u7528\u672A\u7ECF\u6295\u9012\u8005\u6216\u7BA1\u7406\u5458\u8BB8\u53EF\u4E0D\u53EF\u8F6C\u8F7D\uFF0C\u6BCF\u6B3E\u5E94\u7528\u5747\u4E3A\u793E\u533A\u6210\u5458\u82B1\u8D39\u4E86\u65F6\u95F4\u548C\u7CBE\u529B\u6253\u5305\u6216\u7F16\u5199\u7684\uFF0C\u8BF7\u52FF\u722C\u53D6\u4ED3\u5E93"]},{question:["\u6709\u4E9B\u5E94\u7528\u5DF2\u7ECF\u8FC7\u65F6\u6216\u8005\u5931\u6548\u4E86\uFF0C\u6211\u60F3\u8BA9\u4ED6\u4E0B\u67B6"],answer:["\u524D\u5F80<a href='https://gitee.com/spark-store-project/software_-issue'>https://gitee.com/spark-store-project/software_-issue</a>"]},{question:["\u7F51\u9875\u5546\u5E97\u600E\u4E48\u5728\u7EF4\u62A4"],answer:["\u7F51\u9875\u5546\u5E97\u5DF2\u5E9F\u5F03\uFF0C\u8BF7\u4F7F\u7528\u5BA2\u6237\u7AEF"]}],c=D({version:"",time:"",details:[]});J.getLatest().then(t=>{c.value=t});const l=D([]),E=D(!1),m=D();U(()=>{m.value.trigger()});const F=(t,a)=>{J.getHistory(t).then(n=>{l.value=l.value.concat(n.data),n.isEnded&&(E.value=!0),a()})};return(t,a)=>(b(),K(pu,{class:"flex flex-start downPage varImageBg downBackground"},{default:v(()=>[Mu,Lu,i("div",Iu,[i("div",zu,[i("div",Vu,[g(W,{size:"48px"},{default:v(()=>[Uu]),_:1}),i("div",ju,[Ou,i("div",Ru,[g(M,{color:"primary","text-color":"white",onClick:a[0]||(a[0]=n=>s.value=!0),style:{padding:"0 3vmin"},dense:"",rounded:"",unelevated:""},{default:v(()=>[P(" \u70B9\u51FB\u4E0B\u8F7D ")]),_:1}),i("span",null,"\u6700\u65B0\u7248\u672C "+G(c.value.version),1)])])])]),i("div",Ku,[i("div",Wu,[g(W,{size:"48px"},{default:v(()=>[Gu]),_:1}),i("div",Ju,[Zu,i("div",Xu,[g(M,{color:"primary","text-color":"white",to:"/download_dependencies_latest",style:{padding:"0 3vmin"},dense:"",rounded:"",unelevated:""},{default:v(()=>[P(" \u70B9\u51FB\u4E0B\u8F7D ")]),_:1}),Yu])])])]),g(Nu,{onLoad:F,"initial-index":0,"scroll-target":".downPage",disable:E.value,style:{width:"-webkit-fill-available","min-height":"60vh"},ref_key:"historyView",ref:m},{loading:v(()=>[i("div",ae,[g(Hu,{color:"primary",size:"40px"})])]),default:v(()=>[g(Tu,{color:"primary",layout:"comfortable"},{default:v(()=>[(b(!0),w(I,null,L(l.value,(n,d)=>(b(),K(ku,{key:d,title:n.version,subtitle:n.time},{default:v(()=>[i("div",ue,[i("ul",ee,[(b(!0),w(I,null,L(n.details,(f,C)=>(b(),w("li",{key:C},G(f),1))),128))])])]),_:2},1032,["title","subtitle"]))),128))]),_:1}),E.value?(b(),w("p",te," ~ \u5DF2\u7ECF\u5230\u5E95\u4E86\u54E6 (\u25CF'\u25E1'\u25CF) ~ ")):Bu("",!0)]),_:1},8,["disable"])]),i("div",{class:hu(["tipsContainer",{active:s.value}]),onClick:a[2]||(a[2]=n=>s.value=!1)},[i("div",{class:"tipsPanel",onClick:a[1]||(a[1]=Cu(()=>{},["stop"]))},[ie,i("div",se,[ne,g(xu,{class:"qaCard"},{default:v(()=>[(b(),w(I,null,L(r,(n,d)=>i("div",{class:"qaSection",key:d},[g(Z,{text:n.question,"text-html":"","text-color":"white","bg-color":"primary"},{avatar:v(()=>[le]),_:2},1032,["text"]),g(Z,{text:n.answer,"text-html":"",sent:""},{avatar:v(()=>[oe]),_:2},1032,["text"])])),64))]),_:1}),g(M,{color:"primary","text-color":"white",to:"/download_latest"},{default:v(()=>[P(" \u5F00\u59CB\u4E0B\u8F7D ")]),_:1})])])],2),g(qu)]),_:1}))}});var he=Su(re,[["__scopeId","data-v-b5371596"]]);export{he as default};