import{_ as h,a6 as m,r as i,b as f,q as n,s as p,F as y,x as L,u as S,t as e,z as u}from"./index.7434de75.js";import{api as d}from"./axios.fd163daf.js";import"./index.2885cb15.js";const b={class:"container"},k=["id"],x=["src"],B=m(),z={preFetch({currentRoute:o}){d.post("/type/get_type_list").then(s=>{let t;s.data.data.forEach(a=>{t=a.orig_name===o.params.sort?a.type_id:t}),t?d.post("/application/get_application_list",{size:1e4,type_id:t}).then(a=>{B.appList=a.data.data.data}):o.push("/Error404")})}},E=Object.assign(z,{setup(o){const s=S(),t=m(),a=i(t.appList),v=i(t.source),_=i(s.params.sort.toString());return t.$subscribe((g,c)=>{a.value=c.appList,_.value=s.params.sort.toString()}),f(()=>{t.appList=[]}),(g,c)=>(n(),p("div",b,[(n(!0),p(y,null,L(a.value,(r,l)=>(n(),p("div",{id:"app_"+l,key:l},[e("img",{src:v.value+"/store/"+_.value+"/"+r.package.replace("+","%2B")+"/icon.png",alt:""},null,8,x),e("div",null,[e("h6",null,u(r.application_name_zh),1),e("p",null,u(r.more),1)])],8,k))),128))]))}});var q=h(E,[["__scopeId","data-v-6a1487ab"]]);export{q as default};
