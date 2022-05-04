"use strict";(self["webpackChunkmedicalbookapp"]=self["webpackChunkmedicalbookapp"]||[]).push([[703],{811:(a,e,t)=>{t.d(e,{Z:()=>l});var o=t(2421);function l(){const{supabase:a}=(0,o["default"])(),e=async e=>{const{data:t,error:o}=await a.from(e).select("*");if(o)throw o;return t},t=async(e,t)=>{const{data:o,error:l}=await a.from(e).select("*").eq("id",t);if(l)throw l;return o[0]},l=async(e,t,o)=>{const{data:l,error:i}=await a.from(e).select("*").eq(t,o);if(i)throw i;return l},i=async(e,t)=>{const o=t.reduce(((a,e,t)=>`${a.name}:${a.foreign_key}(${a.fields}),${e.name}:${e.foreign_key}(${e.fields})`)),{data:l,error:i}=await a.from(e).select(`*,${o}`);if(i)throw i;return console.log(l),l},r=async(e,t)=>{const{data:o,error:l}=await a.from(e).insert([{...t}]);if(l)throw l;return o},n=async(e,t)=>{const{data:o,error:l}=await a.from(e).update([{...t}]).match({id:t.id});if(l)throw l;return o},c=async(e,t)=>{const{data:o,error:l}=await a.from(e).delete().match({id:t});if(l)throw l;return o},s=async(e,t,o)=>{const{data:l,error:i}=await a.from(e).delete().match({[t]:o});if(i)throw i;return l};return{getByField:l,list:e,getById:t,post:r,update:n,remove:c,removeWhere:s,joinTables:i}}},2703:(a,e,t)=>{t.r(e),t.d(e,{default:()=>U});var o=t(3673),l=t(2323);const i=a=>((0,o.dD)("data-v-ab2dab44"),a=a(),(0,o.Cn)(),a),r={class:"column justify-around",style:{height:"100%"}},n={key:0,class:"text-center text-body1"},c=(0,o.Uk)(" Outras versões Medicalbook "),s=i((()=>(0,o._)("img",{class:"full-width",src:"img/banner-premium.png",style:{height:"100%"}},null,-1))),u=i((()=>(0,o._)("img",{src:"img/Grátis@2x.png",style:{width:"100%",height:"100%"}},null,-1))),d=i((()=>(0,o._)("img",{src:"img/Grátis-2.png",style:{width:"100%",height:"100%"}},null,-1)));function m(a,e,t,i,m,p){const g=(0,o.up)("q-tab"),w=(0,o.up)("q-spinner"),f=(0,o.up)("q-tabs"),y=(0,o.up)("q-separator"),b=(0,o.up)("q-avatar"),v=(0,o.up)("q-item-section"),h=(0,o.up)("q-item"),k=(0,o.up)("q-card"),q=(0,o.up)("q-tab-panel"),_=(0,o.up)("q-tab-panels"),Z=(0,o.up)("q-space"),Q=(0,o.up)("q-toolbar-title"),T=(0,o.up)("q-btn"),j=(0,o.up)("q-banner"),W=(0,o.up)("q-inner-loading"),C=(0,o.up)("q-page"),H=(0,o.Q2)("ripple");return(0,o.wg)(),(0,o.j4)(C,{class:"q-pa-md constrain"},{default:(0,o.w5)((()=>[(0,o.Wm)(f,{modelValue:a.tab,"onUpdate:modelValue":e[0]||(e[0]=e=>a.tab=e),"inline-label":"","mobile-arrows":"","active-color":"primary",outline:"","indicator-color":"transparent"},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.categorys,((e,t)=>((0,o.wg)(),(0,o.j4)(g,{key:t,name:e.name,label:e.name,onClick:t=>a.getTopicByCategory(e.id)},null,8,["name","label","onClick"])))),128)),(0,o._)("div",null,[a.loadingCategory?((0,o.wg)(),(0,o.j4)(w,{key:0,color:"primary",size:"3em"})):(0,o.kq)("",!0)])])),_:1},8,["modelValue"]),a.loadingTopic?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(y,{key:0})),(0,o._)("div",r,[(0,o.Wm)(_,{class:"col",modelValue:a.tab,"onUpdate:modelValue":e[1]||(e[1]=e=>a.tab=e),animated:"",swipeable:"",vertical:"","transition-prev":"jump-up","transition-next":"jump-up"},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.categorys,((e,t)=>((0,o.wg)(),(0,o.j4)(q,{class:"row justify-center q-gutter-sm items-center",key:t,name:e.name},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.topics,((e,t)=>((0,o.wg)(),(0,o.j4)(k,{key:t,style:{"background-color":"#f6f6f6"},flat:"",bordered:"",class:"q-my-sm col-sm-12 col-xs-12 col-md-6 col-lg-4"},{default:(0,o.w5)((()=>[(0,o.wy)(((0,o.wg)(),(0,o.j4)(h,{clickable:"",onClick:t=>a.go(e.id)},{default:(0,o.w5)((()=>[(0,o.Wm)(v,{side:""},{default:(0,o.w5)((()=>[(0,o.Wm)(b,{color:a.color_icon,"text-color":"white",icon:a.icon},null,8,["color","icon"])])),_:1}),(0,o.Wm)(v,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,l.zw)(e.name),1)])),_:2},1024)])),_:2},1032,["onClick"])),[[H]])])),_:2},1024)))),128)),a.topics.length||a.loadingTopic?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("span",n," Nenhum tópico para esta categória "))])),_:2},1032,["name"])))),128))])),_:1},8,["modelValue"]),(0,o.Wm)(Z,{vertical:""}),a.loadingTopic?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(Q,{key:0,class:"text-caption q-pa-sm"},{default:(0,o.w5)((()=>[c])),_:1})),a.loadingTopic?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(k,{key:1,flat:"",bordered:"",class:"q-mb-md row justify-center items-start"},{default:(0,o.w5)((()=>[(0,o.Wm)(j,{rounded:"",class:"col-sm-12 col-xs-12 col-md-6 col-lg-4"},{avatar:(0,o.w5)((()=>[(0,o.Wm)(T,{flat:"",to:{name:"prime"}},{default:(0,o.w5)((()=>[s])),_:1})])),action:(0,o.w5)((()=>[])),_:1}),(0,o.Wm)(j,{class:"col-sm-12 col-xs-12 col-md-6 col-lg-4",rounded:""},{avatar:(0,o.w5)((()=>[(0,o.Wm)(T,{flat:"",to:{name:"accesso-por-capitulo"}},{default:(0,o.w5)((()=>[u])),_:1})])),action:(0,o.w5)((()=>[])),_:1}),(0,o.Wm)(j,{class:"col-sm-12 col-xs-12 col-md-6 col-lg-4",rounded:""},{avatar:(0,o.w5)((()=>[(0,o.Wm)(T,{flat:"",to:{name:"accesso-por-capitulo"}},{default:(0,o.w5)((()=>[d])),_:1})])),action:(0,o.w5)((()=>[])),_:1})])),_:1}))]),(0,o.Wm)(W,{showing:a.loadingTopic,label:"Carregando tópicos","label-class":"text-primary",color:"primary","label-style":"font-size: 1.1em"},null,8,["showing"])])),_:1})}t(2100);var p=t(4605),g=t(1959),w=t(9582),f=t(811);const y=(0,o.aZ)({name:"MainPage",setup(){const{list:a,getByField:e}=(0,f.Z)(),t=(0,w.tv)(),l=(0,g.iH)([]),i=(0,g.iH)([]),r=(0,g.iH)([]),n=(0,g.iH)(""),c=(0,g.iH)(!1),s=(0,g.iH)(!1),u=(0,g.iH)([[]]),d=async a=>{try{s.value=!0,l.value=await e("topic","categoria_id",a)}catch(t){alert(t.message)}finally{s.value=!1}},m=async()=>{try{s.value=!0,i.value=await a("categoria"),i.value.sort(),c.value=!1,n.value=i.value[0].name,await d(i.value[0].id)}catch(e){(0,p.s)(`A Resposta do banco Não Foi Bem Sucedida Pelo Seguinte Erro: ${JSON.stringify(e)}`)}finally{s.value=!1}},y=async a=>{t.push(`/approach/${a}`)},b=(0,g.iH)({chave:null,valo:null}),v=async()=>{console.log(b.value)};return(0,o.bv)((()=>{m()})),{go:y,getTopicByCategory:d,todos:u,foi:v,topicAcessado:b,loadingTopic:s,loadingCategory:c,listTopics:m,tab:n,topics:l,topicos:r,categorys:i,caption:(0,g.iH)(""),icon:"img:img/feto.png",color_icon:"teal"}}});var b=t(4260),v=t(4379),h=t(7547),k=t(8408),q=t(6833),_=t(5869),Z=t(5906),Q=t(6602),T=t(151),j=t(3414),W=t(2035),C=t(5096),H=t(2025),x=t(3747),$=t(5607),B=t(2165),S=t(6941),V=t(6489),D=t(7518),I=t.n(D);const P=(0,b.Z)(y,[["render",m],["__scopeId","data-v-ab2dab44"]]),U=P;I()(y,"components",{QPage:v.Z,QTabs:h.Z,QTab:k.Z,QSpinner:q.Z,QSeparator:_.Z,QTabPanels:Z.Z,QTabPanel:Q.Z,QCard:T.Z,QItem:j.Z,QItemSection:W.Z,QAvatar:C.Z,QSpace:H.Z,QToolbarTitle:x.Z,QBanner:$.Z,QBtn:B.Z,QInnerLoading:S.Z}),I()(y,"directives",{Ripple:V.Z})}}]);