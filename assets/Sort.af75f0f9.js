import{_ as $,a6 as M,r,b as F,q as g,s as y,F as O,x as W,A as D,u as I,a7 as J,t as f,z as w}from"./index.dbeb2a32.js";import{api as E}from"./axios.fd163daf.js";import"./index.2885cb15.js";const P=["src"],U=M(),V={preFetch({currentRoute:v}){E.post("/type/get_type_list").then(c=>{let e;c.data.data.forEach(a=>{e=a.orig_name===v.params.sort?a.type_id:e}),e?E.post("/application/get_application_list",{size:1e4,type_id:e}).then(a=>{U.appList=a.data.data.data}):v.push("/Error404")})}},j=Object.assign(V,{name:"Sort",setup(v){const c=I(),e=M(),a=r(e.appList),m=r([]),b=r(e.source),S=r(c.params.sort.toString());e.$subscribe((s,n)=>{a.value=n.appList,u.value&&(m.value=z(a)),S.value=c.params.sort.toString()});const u=r(),i=r({container:!0,active:!1,animation:!1});function k(s){console.log(s),m.value=z(a)}window.addEventListener("resize",k);function z(s){let n=264,t=92,d=50,l=16,o=32,h=JSON.parse(JSON.stringify(s.value)),L=u.value.clientWidth,p=Math.floor((L+o-l*2)/(n+o)),x=(L-(n+o)*p+o-l*2)/(p+1);return u.value.style.height=`${Math.ceil(h.length/p)*(t+o)+o+d*1.5}px`,h.forEach((_,C)=>{_.position={left:C%p*(x+o+n)+l+x,top:Math.floor(C/p)*(t+o)+d},_.style=`transform:translate(${_.position.left}px,${_.position.top}px)`}),h}function A(){i.value.active=!0,i.value.animation=!0}function B(){i.value.active=!1}function N(s){s.propertyName==="transform"&&(i.value.animation=!1)}return F(()=>{e.appList=[]}),(s,n)=>(g(),y("div",{class:D(i.value),ref:t=>{u.value=t}},[(g(!0),y(O,null,W(m.value,(t,d)=>(g(),y("div",{style:J(t.style),key:d,ref_for:!0,ref:l=>{t.el=l},onMousedown:A,onMouseup:B,onTransitionend:N},[f("img",{src:b.value+"/store/"+S.value+"/"+t.package.replace("+","%2B")+"/icon.png",alt:""},null,8,P),f("div",null,[f("h6",null,w(t.application_name_zh),1),f("p",null,w(t.more),1)])],36))),128))],2))}});var T=$(j,[["__scopeId","data-v-0aa42211"]]);export{T as default};
