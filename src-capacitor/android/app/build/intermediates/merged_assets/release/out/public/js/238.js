"use strict";(self["webpackChunkmedicalbookapp"]=self["webpackChunkmedicalbookapp"]||[]).push([[238],{6201:(e,a,o)=>{function r(e){switch(e){case"User already registered":return"Usuário já cadastrado!";case"Invalid login credentials":return"Usuário ou senha errado!";default:return"Erro ao se conetar com o servidor, verifique a sua conexão com a internet!"}}o.d(a,{y:()=>r})},811:(e,a,o)=>{o.d(a,{Z:()=>t});var r=o(2421);function t(){const{supabase:e}=(0,r["default"])(),a=async a=>{const{data:o,error:r}=await e.from(a).select("*");if(r)throw r;return o},o=async(a,o)=>{const{data:r,error:t}=await e.from(a).select("*").eq("id",o);if(t)throw t;return r[0]},t=async(a,o,r)=>{const{data:t,error:n}=await e.from(a).select("*").eq(o,r);if(n)throw n;return t},n=async(a,o)=>{const r=o.reduce(((e,a,o)=>`${e.name}:${e.foreign_key}(${e.fields}),${a.name}:${a.foreign_key}(${a.fields})`)),{data:t,error:n}=await e.from(a).select(`*,${r}`);if(n)throw n;return console.log(t),t},s=async(a,o)=>{const{data:r,error:t}=await e.from(a).insert([{...o}]);if(t)throw t;return r},i=async(a,o)=>{const{data:r,error:t}=await e.from(a).update([{...o}]).match({id:o.id});if(t)throw t;return r},l=async(a,o)=>{const{data:r,error:t}=await e.from(a).delete().match({id:o});if(t)throw t;return r},d=async(a,o,r)=>{const{data:t,error:n}=await e.from(a).delete().match({[o]:r});if(n)throw n;return t};return{getByField:t,list:a,getById:o,post:s,update:i,remove:l,removeWhere:d,joinTables:n}}},2238:(e,a,o)=>{o.r(a),o.d(a,{default:()=>V});var r=o(3673),t=o(2323);const n=e=>((0,r.dD)("data-v-bed87e26"),e=e(),(0,r.Cn)(),e),s=(0,r.Uk)(" Dados de acesso "),i=n((()=>(0,r._)("p",null," Aqui é onde você irá cadastrar a sua conte. É bem rápido. Para começar, informe para a gente os seus dados pessoais ",-1))),l={class:"login-btn-area"},d={class:"row"},c={class:"row"},u={class:"flex flex-top"};function m(e,a,o,n,m,p){const f=(0,r.up)("q-btn"),g=(0,r.up)("q-toolbar-title"),w=(0,r.up)("q-toolbar"),b=(0,r.up)("q-header"),h=(0,r.up)("q-select"),v=(0,r.up)("q-form"),y=(0,r.up)("q-page"),_=(0,r.up)("q-spinner");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(b,{elevated:""},{default:(0,r.w5)((()=>[(0,r.Wm)(w,null,{default:(0,r.w5)((()=>[(0,r.Wm)(f,{to:"/second",flat:"",round:"",dense:"",icon:"arrow_back"}),(0,r.Wm)(g,{class:"text-center"},{default:(0,r.w5)((()=>[s])),_:1})])),_:1})])),_:1}),(0,r.Wm)(y,{padding:"",class:(0,t.C_)(["row justify-center q-gutter-sm",{"items-center":e.$q.screen.width>599}])},{default:(0,r.w5)((()=>[(0,r._)("div",{class:(0,t.C_)({"col-4":e.$q.screen.width>599})},[i,(0,r.Wm)(v,{onSubmit:e.nextStep},{default:(0,r.w5)((()=>[(0,r.Wm)(h,{dense:"",rounded:"",outlined:"",loading:e.loading,modelValue:e.formData.occupation_area,"onUpdate:modelValue":a[0]||(a[0]=a=>e.formData.occupation_area=a),options:e.options,label:"Área de actuação",class:"q-mb-md",rules:[e=>!!e||"Campo obrigatório"]},null,8,["loading","modelValue","options","rules"]),(0,r.Wm)(h,{loading:e.loading,dense:"",rounded:"",outlined:"",modelValue:e.formData.graduation_year,"onUpdate:modelValue":a[1]||(a[1]=a=>e.formData.graduation_year=a),options:e.options1,label:"Ano de formatura",rules:[e=>!!e||"Campo obrigatório"]},null,8,["loading","modelValue","options","rules"]),(0,r._)("div",l,[(0,r._)("div",d,[(0,r.Wm)(f,{label:"próximo passo",rounded:"",color:"primary",class:"q-mb-md full-width",type:"submit"})]),(0,r._)("div",c,[(0,r.Wm)(f,{label:"cancelar",to:"/",class:"q-mb-md full-width",rounded:"",color:"secondary"})])])])),_:1},8,["onSubmit"])],2)])),_:1},8,["class"]),(0,r._)("div",u,[e.loading1?((0,r.wg)(),(0,r.j4)(_,{key:0,class:"absolute-center",size:"xl",color:"primary"})):(0,r.kq)("",!0)])])}o(2100),o(5363);var p=o(4605),f=o(1959),g=o(9582),w=o(3617),b=o(8825),h=o(4958),v=o(811),y=o(6201);const _=(0,r.aZ)({name:"ThirdStepPage",setup(){const{register:e}=(0,h.Z)(),a=(0,f.iH)(!0),o=(0,f.iH)(!1),{list:t}=(0,v.Z)(),{post:n}=(0,v.Z)(),s=(0,w.oR)(),i=(0,g.tv)(),l=(0,r.Fl)((()=>s.getters["user/getData"])),d=(0,f.qj)({occupation_area:"",graduation_year:""}),c=(0,f.iH)([]),u=(0,f.iH)([]),m=async()=>{try{a.value=!0;const e=await t("occupation_area");c.value=e.map((e=>e.occupation_area));await t("graduation_year");for(let a=1922;a<=(new Date).getFullYear();a++)u.value.push(a);a.value=!1}catch(e){(0,p.s)(`houve uma falha ao carregar os dados do banco: ${JSON.stringify(e)}`)}};(0,r.bv)((()=>{m()}));(0,b.Z)();const _=async()=>{try{o.value=!0,s.commit("user/setFormThird",d);const a={...s.state.user.formData},r=await e(a);a.user_id=r.id,await n("perfil",a),i.replace({name:"concluido"}),o.value=!1}catch(a){o.value=!1,(0,p.s)((0,y.y)(a.message))}};return(0,r.bv)((()=>{l.value.email.length||i.push("/register")})),{loading:a,loading1:o,formData:d,options:c,options1:u,nextStep:_,teste:l}}});var q=o(4260),Z=o(3812),k=o(9570),D=o(2165),W=o(3747),$=o(4379),Q=o(5269),x=o(3017),S=o(6833),C=o(6115),F=o(7518),T=o.n(F);const U=(0,q.Z)(_,[["render",m],["__scopeId","data-v-bed87e26"]]),V=U;T()(_,"components",{QHeader:Z.Z,QToolbar:k.Z,QBtn:D.Z,QToolbarTitle:W.Z,QPage:$.Z,QForm:Q.Z,QSelect:x.Z,QSpinner:S.Z,QField:C.Z})}}]);