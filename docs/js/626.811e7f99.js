"use strict";(self["webpackChunkspark_app_store"]=self["webpackChunkspark_app_store"]||[]).push([[626],{626:(e,t,o)=>{o.r(t),o.d(t,{default:()=>O});o(7280),o(7098);var a=o(3673),l=o(8880);const i={key:0,class:"toolbox"},n={key:1,class:"dragArea"},r={key:0},s=(0,a.Wm)("img",{src:"icons/favicon-128x128.png"},null,-1),c=(0,a.Uk)(" Spark Store "),u=(0,a.Wm)("img",{src:"icons/favicon-128x128.png"},null,-1),d=(0,a.Wm)("span",null,"Spark Web Store",-1),p={class:"menu"},m={key:2},v=(0,a.Uk)(" © 2021 星火应用商店 ");function h(e,t,o,h,b,f){const g=(0,a.up)("q-btn"),w=(0,a.up)("q-avatar"),k=(0,a.up)("q-toolbar-title"),_=(0,a.up)("router-link"),C=(0,a.up)("q-space"),W=(0,a.up)("q-route-tab"),q=(0,a.up)("q-tabs"),T=(0,a.up)("q-toolbar"),y=(0,a.up)("j-tab"),S=(0,a.up)("j-tabs"),x=(0,a.up)("q-tab"),$=(0,a.up)("router-view"),A=(0,a.up)("q-page-container"),M=(0,a.up)("q-layout");return(0,a.wg)(),(0,a.j4)(M,{view:"lhr lpR fFf"},{default:(0,a.w5)((()=>["electron"==b.mode?((0,a.wg)(),(0,a.j4)("div",i,[(0,a.Wm)(g,{color:"white",padding:"xs",icon:"minimize",onClick:f.min},null,8,["onClick"]),(0,a.Wm)(g,{color:"white",padding:"xs","icon-right":"settings_ethernet",onClick:f.max},null,8,["onClick"]),(0,a.Wm)(g,{color:"white",padding:"xs",icon:"close",onClick:f.close},null,8,["onClick"])])):(0,a.kq)("",!0),"electron"==b.mode?((0,a.wg)(),(0,a.j4)("div",n)):(0,a.kq)("",!0),(0,a.Wm)(l.uT,{appear:"","enter-active-class":"animated fadeInDown","leave-active-class":"animated fadeOutUp"},{default:(0,a.w5)((()=>[e.$route.path.match("store")?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)("header",r,[(0,a.Wm)(T,{style:{height:"60px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(_,{to:"/",style:{"text-decoration":"unset",color:"black"}},{default:(0,a.w5)((()=>[(0,a.Wm)(k,null,{default:(0,a.w5)((()=>[(0,a.Wm)(w,null,{default:(0,a.w5)((()=>[s])),_:1}),c])),_:1})])),_:1}),(0,a.Wm)(C),(0,a.Wm)(q,{shrink:"",class:"text-black","active-color":"primary","indicator-color":"primary","narrow-indicator":""},{default:(0,a.w5)((()=>[(0,a.Wm)(W,{to:"/",label:"首页",ripple:!1}),(0,a.Wm)(W,{to:"/download",label:"下载",ripple:!1}),(0,a.Wm)(W,{to:"/store",label:"商店",ripple:!1}),(0,a.Wm)(W,{to:"/fourm",label:"社区",ripple:!1}),(0,a.Wm)(W,{to:"/about",label:"关于",ripple:!1})])),_:1})])),_:1})]))])),_:1}),(0,a.Wm)(l.uT,{appear:"","enter-active-class":"animated fadeInLeft","leave-active-class":"animated fadeOutLeft"},{default:(0,a.w5)((()=>[e.$route.path.match("store")?((0,a.wg)(),(0,a.j4)("div",{key:0,class:{storenav:!0,active:b.hActive&&b.nActive&&b.lsA,nActive:b.nActive,seMenu:!b.hActive,isSorts:b.isSorts}},[(0,a.Wm)("nav",null,[(0,a.Wm)(_,{to:"/",style:{"text-decoration":"unset",color:"black",width:"100%"}},{default:(0,a.w5)((()=>[(0,a.Wm)(k,{class:"logo"},{default:(0,a.w5)((()=>[(0,a.Wm)(w,{size:"36px"},{default:(0,a.w5)((()=>[u])),_:1}),d])),_:1})])),_:1}),(0,a.Wm)(S,{modelValue:b.tabs,"onUpdate:modelValue":t[5]||(t[5]=e=>b.tabs=e),vertical:"",shrink:"",ref:"tabs1"},{default:(0,a.w5)((()=>[(0,a.Wm)(y,{name:"recommend",onClick:t[1]||(t[1]=(0,l.iM)((e=>f.to("/store")),["prevent"])),id:"recommend",icon:"recommend",label:"推荐",ripple:!1}),(0,a.Wm)(y,{name:"rank",onClick:t[2]||(t[2]=(0,l.iM)((e=>f.to("/store/rank")),["prevent"])),id:"rank",icon:"format_list_numbered",label:"排行",ripple:!1}),(0,a.Wm)(y,{name:"sorts",onClick:t[3]||(t[3]=(0,l.iM)((e=>f.to("/store/sorts/games")),["prevent"])),id:"sorts",icon:"queue",label:"分类",ripple:!1}),(0,a.Wm)(C),(0,a.Wm)(y,{name:"home",onClick:t[4]||(t[4]=(0,l.iM)((e=>f.to("/")),["prevent"])),id:"home",icon:"home",label:"首页",ripple:!1})])),_:1},8,["modelValue"]),(0,a.Wm)("span",{onClick:t[6]||(t[6]=e=>b.nActive=!b.nActive)})]),(0,a.Wm)("div",p,[(0,a.Wm)(q,{modelValue:b.sort,"onUpdate:modelValue":t[19]||(t[19]=e=>b.sort=e),vertical:"",shrink:""},{default:(0,a.w5)((()=>[(0,a.Wm)(x,{name:"games",onClick:t[7]||(t[7]=e=>f.to("/store/sorts/games")),id:"games",icon:"sports_esports",label:"游戏",ripple:!1}),(0,a.Wm)(x,{name:"network",onClick:t[8]||(t[8]=e=>f.to("/store/sorts/network")),id:"network",icon:"travel_explore",label:"网络",ripple:!1}),(0,a.Wm)(x,{name:"chat",onClick:t[9]||(t[9]=e=>f.to("/store/sorts/chat")),id:"chat",icon:"question_answer",label:"社交",ripple:!1}),(0,a.Wm)(x,{name:"music",onClick:t[10]||(t[10]=e=>f.to("/store/sorts/music")),id:"music",icon:"library_music",label:"音乐",ripple:!1}),(0,a.Wm)(x,{name:"video",onClick:t[11]||(t[11]=e=>f.to("/store/sorts/video")),id:"video",icon:"smart_display",label:"视频",ripple:!1}),(0,a.Wm)(x,{name:"image_graphics",onClick:t[12]||(t[12]=e=>f.to("/store/sorts/image_graphics")),id:"image",icon:"sports_esports",label:"图形",ripple:!1}),(0,a.Wm)(x,{name:"office",onClick:t[13]||(t[13]=e=>f.to("/store/sorts/office")),id:"office",icon:"business_center",label:"办公",ripple:!1}),(0,a.Wm)(x,{name:"reading",onClick:t[14]||(t[14]=e=>f.to("/store/sorts/reading")),id:"reading",icon:"auto_stories",label:"阅读",ripple:!1}),(0,a.Wm)(x,{name:"development",onClick:t[15]||(t[15]=e=>f.to("/store/sorts/development")),id:"development",icon:"developer_board",label:"开发",ripple:!1}),(0,a.Wm)(x,{name:"tools",onClick:t[16]||(t[16]=e=>f.to("/store/sorts/tools")),id:"tools",icon:"handyman",label:"工具",ripple:!1}),(0,a.Wm)(x,{name:"themes",onClick:t[17]||(t[17]=e=>f.to("/store/sorts/themes")),id:"themes",icon:"extension",label:"美化",ripple:!1}),(0,a.Wm)(x,{name:"others",onClick:t[18]||(t[18]=e=>f.to("/store/sorts/others")),id:"others",icon:"pending",label:"其他",ripple:!1})])),_:1},8,["modelValue"])])],2)):(0,a.kq)("",!0)])),_:1}),(0,a.Wm)(A,{style:{overflow:"hidden"}},{default:(0,a.w5)((()=>[(0,a.Wm)($)])),_:1}),e.$route.path.match("store")?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)("footer",m,[(0,a.Wm)(T,{style:{height:"10vmin","justify-content":"center"}},{default:(0,a.w5)((()=>[(0,a.Wm)(_,{to:"/",style:{"text-decoration":"unset",color:"black"}},{default:(0,a.w5)((()=>[(0,a.Wm)(k,{style:{color:"rgb(206,206,206)","font-size":"2.4vmin"}},{default:(0,a.w5)((()=>[v])),_:1})])),_:1})])),_:1})]))])),_:1})}var b=o(1959),f=o(4554),g=o(5151),w=o(416),k=o(4955),_=o(4716),C=o(7657),W=o(2547);function q(e,t,o){const a=!0===o?["left","right"]:["top","bottom"];return`absolute-${!0===t?a[0]:a[1]}${e?` text-${e}`:""}`}const T=["left","center","right","justify"],y=(0,a.aZ)({name:"JTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:e=>T.includes(e)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":Function},setup(e,{slots:t,emit:o}){const l=(0,a.FN)(),{proxy:{$q:i}}=l,{registerTick:n,prepareTick:r}=(0,w.Z)(),{registerTimeout:s}=(0,k.Z)(),c=(0,b.iH)(null),u=(0,b.iH)(null),d=(0,b.iH)(e.modelValue),p=(0,b.iH)(!1),m=(0,b.iH)(!0),v=(0,b.iH)(!1),h=(0,b.iH)(!1),T=(0,a.Fl)((()=>!0===i.platform.is.desktop||!0===e.mobileArrows)),y=[];let S,x,$,A=!1,M=!0===T.value?V:_.ZT;const P=(0,a.Fl)((()=>({activeColor:e.activeColor,activeBgColor:e.activeBgColor,indicatorClass:q(e.indicatorColor,e.switchIndicator,e.vertical),narrowIndicator:e.narrowIndicator,inlineLabel:e.inlineLabel,noCaps:e.noCaps}))),B=(0,a.Fl)((()=>{const t=!0===p.value?"left":!0===h.value?"justify":e.align;return`q-tabs__content--align-${t}`})),I=(0,a.Fl)((()=>`q-tabs row no-wrap items-center q-tabs--${!0===p.value?"":"not-"}scrollable q-tabs--`+(!0===e.vertical?"vertical":"horizontal")+" q-tabs__arrows--"+(!0===T.value&&!0===e.outsideArrows?"outside":"inside")+(!0===e.dense?" q-tabs--dense":"")+(!0===e.shrink?" col-shrink":"")+(!0===e.stretch?" self-stretch":""))),Z=(0,a.Fl)((()=>"q-tabs__content row no-wrap items-center self-stretch hide-scrollbar "+B.value+(void 0!==e.contentClass?` ${e.contentClass}`:"")+(!0===i.platform.is.mobile?" scroll":""))),R=(0,a.Fl)((()=>!0===e.vertical?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"}));function L({name:t,setCurrent:a,skipEmit:l,fromRoute:i}){d.value!==t&&(!0!==l&&o("update:modelValue",t),!0!==a&&void 0!==e["onUpdate:modelValue"]||(Q(d.value,t),d.value=t)),void 0!==i&&(A=i)}function F(){n((()=>{!0!==l.isDeactivated&&!0!==l.isUnmounted&&H({width:c.value.offsetWidth,height:c.value.offsetHeight})})),r()}function H(t){if(void 0===R.value||null===u.value)return;const o=t[R.value.container],l=Math.min(u.value[R.value.scroll],Array.prototype.reduce.call(u.value.children,((e,t)=>e+t[R.value.content]),0)),i=o>0&&l>o;p.value!==i&&(p.value=i),!0===i&&(0,a.Y3)(M);const n=o<parseInt(e.breakpoint,10);h.value!==n&&(h.value=n)}function Q(t,o){const l=void 0!==t&&null!==t&&""!==t?y.find((e=>e.name.value===t)):null,i=void 0!==o&&null!==o&&""!==o?y.find((e=>e.name.value===o)):null;if(l&&i){const e=l.tabIndicatorRef.value,t=i.tabIndicatorRef.value;clearTimeout(S),e.style.transition="none",e.style.transform="",t.style.transition="none",t.style.transform="";const o=e.getBoundingClientRect(),n=t.getBoundingClientRect();window.nActive&&!window.isSorts?t.style.transform=`translate3d(0,${o.top-n.top}px,0) scale3d(1,${n.height?o.height/n.height:1},1)`:(t.style.transform=`translate3d(9px,${o.top-n.top+17}px,0) scale3d(1,${n.height?o.height/n.height:1},1)`,window.isSorts=!1),(0,a.Y3)((()=>{S=setTimeout((()=>{t.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",t.style.transform="",setTimeout((()=>{t.style.transition=""}),250)}),70)}))}if(i&&!0===p.value){const{left:t,width:o,top:a,height:l}=u.value.getBoundingClientRect(),n=i.rootRef.value.getBoundingClientRect();let r=!0===e.vertical?n.top-a:n.left-t;if(r<0)return u.value[!0===e.vertical?"scrollTop":"scrollLeft"]+=Math.floor(r),void M();r+=!0===e.vertical?n.height-l:n.width-o,r>0&&(u.value[!0===e.vertical?"scrollTop":"scrollLeft"]+=Math.ceil(r),M())}}function V(){const t=u.value;if(null!==t){const o=t.getBoundingClientRect(),a=!0===e.vertical?t.scrollTop:t.scrollLeft;m.value=a>0,v.value=!0===e.vertical?Math.ceil(a+o.height)<t.scrollHeight:Math.ceil(a+o.width)<t.scrollWidth}}function j(e){U(),Y(e),x=setInterval((()=>{Y(e)&&U()}),5)}function J(){j(0)}function N(){j(9999)}function U(){clearInterval(x)}function Y(t){const o=u.value;let a=!0===e.vertical?o.scrollTop:o.scrollLeft,l=!1;const i=t<a?-1:1;return a+=5*i,a<0?(l=!0,a=0):(-1===i&&a<=t||1===i&&a>=t)&&(l=!0,a=t),o[!0===e.vertical?"scrollTop":"scrollLeft"]=a,M(),l}function z(){return y.filter((e=>void 0!==e.routerProps&&!0===e.routerProps.hasLink.value))}function E(){let e="",t=null,o=A;z().forEach((a=>{void 0!==a.routerProps&&!0===a.routerProps[!0===a.routerProps.exact.value?"linkIsExactActive":"linkIsActive"].value&&a.routerProps.linkRoute.value.href.length>e.length?(e=a.routerProps.linkRoute.value.href,t=a.name.value):d.value===a.name.value&&(o=!0)})),!0!==o&&null===t||L({name:t,setCurrent:!0,fromRoute:!0})}function O(){s(E)}function D(e){y.push(e);const t=z();t.length>0&&(void 0===$&&($=(0,a.YP)((()=>l.proxy.$route),O)),O())}function K(e){if(y.splice(y.indexOf(e),1),void 0!==$){const e=z();0===e.length&&($(),$=void 0),O()}}return(0,a.YP)((()=>e.modelValue),(e=>{L({name:e,setCurrent:!0,skipEmit:!0})})),(0,a.YP)((()=>e.outsideArrows),(()=>{(0,a.Y3)(F())})),(0,a.YP)(T,(e=>{M=!0===e?V:_.ZT,(0,a.Y3)(F())})),(0,a.JJ)(W.Nd,{currentModel:d,tabProps:P,registerTab:D,unregisterTab:K,verifyRouteModel:O,updateModel:L,recalculateScroll:F}),(0,a.Jd)((()=>{clearTimeout(S),void 0!==$&&$()})),(0,a.dl)(F),()=>{const o=[(0,a.h)(g.Z,{onResize:H}),(0,a.h)("div",{ref:u,class:Z.value,onScroll:M},(0,C.KR)(t.default))];return!0===T.value&&o.push((0,a.h)(f.Z,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+(!0===m.value?"":" q-tabs__arrow--faded"),name:e.leftIcon||i.iconSet.tabs[!0===e.vertical?"up":"left"],onMousedown:J,onTouchstartPassive:J,onMouseup:U,onMouseleave:U,onTouchend:U}),(0,a.h)(f.Z,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+(!0===v.value?"":" q-tabs__arrow--faded"),name:e.rightIcon||i.iconSet.tabs[!0===e.vertical?"down":"right"],onMousedown:N,onTouchstartPassive:N,onMouseup:U,onMouseleave:U,onTouchend:U})),(0,a.h)("div",{ref:c,class:I.value,role:"tablist"},o)}}});var S=o(515),x=o.n(S),$=o(6489),A=o(1436);let M=0;const P=["click","keyup"],B={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>"t_"+M++},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function I(e,t,o,l){const i=(0,a.f3)(W.Nd,(()=>{console.error("QTab/QRouteTab component needs to be child of QTabs")})),n=(0,b.iH)(null),r=(0,b.iH)(null),s=(0,b.iH)(null),c=(0,a.Fl)((()=>i.currentModel.value===e.name)),u=(0,a.Fl)((()=>`q-tab relative-position self-stretch flex flex-center text-center q-tab--${!0===c.value?"":"in"}active`+(!0===c.value?(i.tabProps.value.activeColor?` text-${i.tabProps.value.activeColor}`:"")+(i.tabProps.value.activeBgColor?` bg-${i.tabProps.value.activeBgColor}`:""):"")+(e.icon&&e.label&&!1===i.tabProps.value.inlineLabel?" q-tab--full":"")+(!0===e.noCaps||!0===i.tabProps.value.noCaps?" q-tab--no-caps":"")+(!0===e.disable?" disabled":" q-focusable q-hoverable cursor-pointer")+(void 0!==l&&""!==l.linkClass.value?` ${l.linkClass.value}`:""))),d=(0,a.Fl)((()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(!0===i.tabProps.value.inlineLabel?"row no-wrap q-tab__content--inline":"column")+(void 0!==e.contentClass?` ${e.contentClass}`:""))),p=(0,a.Fl)((()=>!0===e.disable||!0===c.value?-1:e.tabindex||0));function m(t,a){if(!0!==a&&null!==n.value&&n.value.focus(),!0!==e.disable)if(void 0!==l)if(!0===l.hasLink.value){const e=()=>{t.__qNavigate=!0,l.navigateToLink(t)};o("click",t,e),!0!==t.defaultPrevented&&e()}else o("click",t);else o("click",t)}function v(e){!0===(0,A.So)(e,13)&&m(e,!0),o("keyup",e)}function h(){const o=i.tabProps.value.narrowIndicator,l=[],r=(0,a.h)("div",{ref:s,class:["q-tab__indicator",i.tabProps.value.indicatorClass]});void 0!==e.icon&&l.push((0,a.h)(f.Z,{class:"q-tab__icon",name:e.icon})),void 0!==e.label&&l.push((0,a.h)("div",{class:"q-tab__label"},e.label)),!1!==e.alert&&l.push(void 0!==e.alertIcon?(0,a.h)(f.Z,{class:"q-tab__alert-icon",color:!0!==e.alert?e.alert:void 0,name:e.alertIcon}):(0,a.h)("div",{class:"q-tab__alert"+(!0!==e.alert?` text-${e.alert}`:"")})),!0===o&&l.push(r);const c=[(0,a.h)("div",{class:"q-focus-helper",tabindex:-1,ref:n}),(0,a.h)("div",{class:d.value},(0,C.vs)(t.default,l))];return!1===o&&c.push(r),c}const g={name:(0,a.Fl)((()=>e.name)),rootRef:r,tabIndicatorRef:s,routerProps:l};function w(t,o){const a=x()({ref:r,class:u.value,tabindex:p.value,role:"tab","aria-selected":c.value,"aria-disabled":!0===e.disable?"true":void 0,onClick:m,onKeyup:v},o);return(0,C.Jl)(t,a,h(),"main",!1!==e.ripple&&!1===e.disable,(()=>[[$.Z,e.ripple]]))}return(0,a.Jd)((()=>{i.unregisterTab(g),i.recalculateScroll()})),(0,a.bv)((()=>{i.registerTab(g),i.recalculateScroll()})),{renderTab:w,$tabs:i}}const Z=(0,a.aZ)({name:"JTab",props:B,emits:P,setup(e,{slots:t,emit:o}){const{renderTab:a}=I(e,t,o);return()=>a("div")}}),R={name:"MainLayout",components:{JTabs:y,JTab:Z},data(){return{hActive:!0,nActive:!0,part:"index",animateTimer:void 0,animateTimer1:void 0,tabs:"",sort:"",path:{"/":"home","/store":"recommend","/store/rank":"rank"},isSorts:!1,lsA:!0,mode:"spa"}},methods:{to:function(e){this.$route.path!=e&&this.$router.push(e)},seMenu:function(){this.hActive=!1},frMenu:function(){this.hActive=!0},min:function(){electron.min()},max:function(){electron.max()},close:function(){electron.close()}},created(){window.Vue=this,this.$watch((()=>this.nActive),((e,t)=>{window.nActive=e})),this.$watch((()=>this.$route.path),((e,t)=>{e.match("store")&&(e.match("sorts")?(this.seMenu(),this.sort=this.$route.params.sort,t.match("sorts")?this.tabs="sorts":(window.isSorts=!0,this.nActive?setTimeout((()=>{this.tabs="sorts",this.isSorts=!0}),900):this.tabs="sorts")):t.match("sorts")?(window.isSorts=!0,this.nActive?setTimeout((()=>{this.tabs=this.path[e],setTimeout((()=>{this.isSorts=!1,this.lsA=!1,this.frMenu(),setTimeout((()=>{this.lsA=!0}),400)}),150)}),100):(this.tabs=this.path[e],this.frMenu())):(this.tabs=this.path[e],this.frMenu()))})),this.$route.path.match("store")&&(this.$route.path.match("sorts")?(this.tabs="sorts",this.sort=this.$route.params.sort,this.seMenu(),this.isSorts=!0):(this.tabs=this.path[this.$route.path],this.frMenu())),window.nActive=!0}};var L=o(9214),F=o(4607),H=o(9570),Q=o(3747),V=o(5096),j=o(2025),J=o(7547),N=o(2770),U=o(8408),Y=o(2652),z=o(7518),E=o.n(z);R.render=h;const O=R;E()(R,"components",{QLayout:L.Z,QBtn:F.Z,QToolbar:H.Z,QToolbarTitle:Q.Z,QAvatar:V.Z,QSpace:j.Z,QTabs:J.Z,QRouteTab:N.Z,QTab:U.Z,QPageContainer:Y.Z})}}]);