"use strict";(self["webpackChunkmedicalbookapp"]=self["webpackChunkmedicalbookapp"]||[]).push([[503],{811:(e,a,t)=>{t.d(a,{Z:()=>r});var o=t(2421);function r(){const{supabase:e}=(0,o["default"])(),a=async a=>{const{data:t,error:o}=await e.from(a).select("*");if(o)throw o;return t},t=async(a,t)=>{const{data:o,error:r}=await e.from(a).select("*").eq("id",t);if(r)throw r;return o[0]},r=async(a,t,o)=>{const{data:r,error:l}=await e.from(a).select("*").eq(t,o);if(l)throw l;return r},l=async(a,t)=>{const o=t.reduce(((e,a,t)=>`${e.name}:${e.foreign_key}(${e.fields}),${a.name}:${a.foreign_key}(${a.fields})`)),{data:r,error:l}=await e.from(a).select(`*,${o}`);if(l)throw l;return console.log(r),r},n=async(a,t)=>{const{data:o,error:r}=await e.from(a).insert([{...t}]);if(r)throw r;return o},s=async(a,t)=>{const{data:o,error:r}=await e.from(a).update([{...t}]).match({id:t.id});if(r)throw r;return o},i=async(a,t)=>{const{data:o,error:r}=await e.from(a).delete().match({id:t});if(r)throw r;return o},d=async(a,t,o)=>{const{data:r,error:l}=await e.from(a).delete().match({[t]:o});if(l)throw l;return r};return{getByField:r,list:a,getById:t,post:n,update:s,remove:i,removeWhere:d,joinTables:l}}},503:(e,a,t)=>{t.r(a),t.d(a,{default:()=>x});var o=t(3673),r=t(2323);const l=(0,o.Uk)(" Boas Vindas! "),n=(0,o._)("p",null,"Aqui é onde você irá cadastrar a sua conte. É bem rápido. Para começar, informe para a gente os seus dados pessoais",-1),s={class:"q-pa-xs"},i={class:"login-btn-area"},d={class:"row q-mt-md"},u={class:"row"};function m(e,a,t,m,c,p){const f=(0,o.up)("q-toolbar-title"),b=(0,o.up)("q-toolbar"),y=(0,o.up)("q-header"),w=(0,o.up)("q-input"),v=(0,o.up)("q-option-group"),h=(0,o.up)("q-select"),_=(0,o.up)("q-btn"),q=(0,o.up)("q-form"),g=(0,o.up)("q-page");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(y,{class:"bg-primary",elevated:""},{default:(0,o.w5)((()=>[(0,o.Wm)(b,null,{default:(0,o.w5)((()=>[(0,o.Wm)(f,{class:"text-center"},{default:(0,o.w5)((()=>[l])),_:1})])),_:1})])),_:1}),(0,o.Wm)(g,{padding:"",class:(0,r.C_)(["row justify-center q-gutter-sm",{"items-center":e.$q.screen.width>599}])},{default:(0,o.w5)((()=>[(0,o._)("div",{class:(0,r.C_)(["explore",{"col-4":e.$q.screen.width>599}])},[n,(0,o.Wm)(q,{onSubmit:e.nextStep},{default:(0,o.w5)((()=>[(0,o.Wm)(w,{dense:"",modelValue:e.formData.name,"onUpdate:modelValue":a[0]||(a[0]=a=>e.formData.name=a),rounded:"",outlined:"",type:"text",label:"Nome completo","lazy-rules":"",rules:[e=>null!==e&&""!==e||"Campo não pode estar vazio"]},null,8,["modelValue","rules"]),(0,o.Wm)(w,{dense:"",modelValue:e.formData.birthday,"onUpdate:modelValue":a[1]||(a[1]=a=>e.formData.birthday=a),rounded:"",outlined:"",type:"date",label:"Data de nascimento","stack-label":"","lazy-rules":"",rules:[e=>null!==e&&""!==e||"Campo não pode estar vazio"]},null,8,["modelValue","rules"]),(0,o.Wm)(w,{dense:"",modelValue:e.formData.cpf,"onUpdate:modelValue":a[2]||(a[2]=a=>e.formData.cpf=a),rounded:"",outlined:"",type:"text",label:"CPF","lazy-rules":"",mask:"###########",rules:[e=>null!==e&&""!==e||"Campo não pode estar vazio",a=>e.TestaCPF(a)||"CPF inválido"]},null,8,["modelValue","rules"]),(0,o._)("div",null,[(0,o._)("div",s,[(0,o.Wm)(v,{modelValue:e.formData.profile_type_id,"onUpdate:modelValue":a[3]||(a[3]=a=>e.formData.profile_type_id=a),options:e.tipo,color:"primary",inline:""},null,8,["modelValue","options"])])]),(0,o.Wm)(h,{dense:"",rounded:"",outlined:"",modelValue:e.formData.nationality,"onUpdate:modelValue":a[4]||(a[4]=a=>e.formData.nationality=a),options:e.options,label:"Nacionalidade"},null,8,["modelValue","options"]),(0,o._)("div",i,[(0,o._)("div",d,[(0,o.Wm)(_,{label:"próximo passo",rounded:"",color:"primary",type:"submit",class:"q-mb-md full-width"})]),(0,o._)("div",u,[(0,o.Wm)(_,{label:"cancelar",to:"/",class:"q-mb-md full-width",rounded:"",color:"secondary"})])])])),_:1},8,["onSubmit"])],2)])),_:1},8,["class"])])}var c=t(4434),p=t(1959),f=t(9582),b=t(3617),y=t(811);const w=(0,o.aZ)({name:"FirstStepPage",setup(){const{list:e}=(0,y.Z)(),a=(0,p.iH)(!0),t=(0,p.qj)({name:"",birthday:"",cpf:"",nationality:"",profile_type_id:1}),r=(0,p.iH)([]),l=(0,p.iH)([{label:"Estudante",value:1},{label:"Profissional",value:2}]),n=async()=>{try{const t=await e("nationality");r.value=t.map((e=>e.name)),a.value=!1}catch(t){(0,c.Z)(t)}};(0,o.bv)((()=>{n()}));const s=(0,b.oR)(),i=(0,f.tv)(),d=()=>{s.commit("user/setFormOne",t),i.push("/second")};function u(e){var a,t;if(a=0,"00000000000"==e)return!1;for(let o=1;o<=9;o++)a+=parseInt(e.substring(o-1,o))*(11-o);if(t=10*a%11,10!=t&&11!=t||(t=0),t!=parseInt(e.substring(9,10)))return!1;a=0;for(let o=1;o<=10;o++)a+=parseInt(e.substring(o-1,o))*(12-o);return t=10*a%11,10!=t&&11!=t||(t=0),t==parseInt(e.substring(10,11))}return{TestaCPF:u,formData:t,options:r,tipo:l,nextStep:d}}});var v=t(4260),h=t(3812),_=t(9570),q=t(3747),g=t(4379),V=t(5269),Z=t(4842),D=t(8758),W=t(3017),k=t(2165),C=t(7518),Q=t.n(C);const $=(0,v.Z)(w,[["render",m]]),x=$;Q()(w,"components",{QHeader:h.Z,QToolbar:_.Z,QToolbarTitle:q.Z,QPage:g.Z,QForm:V.Z,QInput:Z.Z,QOptionGroup:D.Z,QSelect:W.Z,QBtn:k.Z})}}]);