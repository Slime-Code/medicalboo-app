"use strict";(self["webpackChunkmedicalbookapp"]=self["webpackChunkmedicalbookapp"]||[]).push([[317],{811:(e,a,t)=>{t.d(a,{Z:()=>r});var o=t(2421);function r(){const{supabase:e}=(0,o["default"])(),a=async a=>{const{data:t,error:o}=await e.from(a).select("*");if(o)throw o;return t},t=async(a,t)=>{const{data:o,error:r}=await e.from(a).select("*").eq("id",t);if(r)throw r;return o[0]},r=async(a,t,o)=>{const{data:r,error:i}=await e.from(a).select("*").eq(t,o);if(i)throw i;return r},i=async(a,t)=>{const o=t.reduce(((e,a,t)=>`${e.name}:${e.foreign_key}(${e.fields}),${a.name}:${a.foreign_key}(${a.fields})`)),{data:r,error:i}=await e.from(a).select(`*,${o}`);if(i)throw i;return console.log(r),r},n=async(a,t)=>{const{data:o,error:r}=await e.from(a).insert([{...t}]);if(r)throw r;return o},s=async(a,t)=>{const{data:o,error:r}=await e.from(a).update([{...t}]).match({id:t.id});if(r)throw r;return o},l=async(a,t)=>{const{data:o,error:r}=await e.from(a).delete().match({id:t});if(r)throw r;return o},c=async(a,t,o)=>{const{data:r,error:i}=await e.from(a).delete().match({[t]:o});if(i)throw i;return r};return{getByField:r,list:a,getById:t,post:n,update:s,remove:l,removeWhere:c,joinTables:i}}},6804:(e,a,t)=>{t.d(a,{Z:()=>Z});t(71);var o=t(3673),r=t(2323);const i=e=>((0,o.dD)("data-v-ac079208"),e=e(),(0,o.Cn)(),e),n={class:"q-link cursor-pointer q-ma-xs"},s={class:"row"},l={class:"col-grow-1 q-pa-xs"},c={class:"column"},d=i((()=>(0,o._)("div",{class:"col-grow-1"},[(0,o._)("div",{class:"q-approach-bar"})],-1)));function u(e,a,t,i,u,p){const m=(0,o.up)("q-rating"),f=(0,o.up)("q-banner");return(0,o.wg)(),(0,o.iD)("a",n,[(0,o.Wm)(f,{rounded:"",class:"bg-white text-grey-6 q-approach"},{default:(0,o.w5)((()=>[(0,o._)("div",s,[(0,o._)("div",{onClick:a[0]||(a[0]=(...a)=>e.go&&e.go(...a)),class:"col q-py-xs"},(0,r.zw)(e.title.title),1),(0,o._)("div",l,[(0,o._)("div",c,[(0,o.Wm)(m,{onClick:e.addFavorit,max:"1",modelValue:e.ratingModel,"onUpdate:modelValue":a[1]||(a[1]=a=>e.ratingModel=a),name:"quality",size:"2em",color:"yellow",icon:"star_border","icon-selected":"star","no-dimming":""},null,8,["onClick","modelValue"])])]),d])])),_:1})])}t(2100);var p=t(4605),m=t(1959),f=t(9582),v=t(811),g=t(4958);const h=(0,o.aZ)({name:"ApproachButtom",props:{title:{type:Object,required:"Sem titulo"},icon:{type:String,default:"img:img/feto.png"},color:{type:String,default:""},accessCap:{type:Boolean,default:!0}},setup(e){const{user:a}=(0,g.Z)(),t=(0,f.tv)(),r=(0,m.iH)(!0),{post:i,remove:n,getByField:s}=(0,v.Z)(),l={user_id:"",approach_id:""},c=async(a,o)=>{t.push(`/approach-detail/${e.title.id}`)},d=(0,m.iH)(0),u=async()=>{try{const a=await s("favorite_approach_user","approach_id",e.title.id);a.length>0?d.value=1:d.value=0}catch(a){(0,p.s)(`falha na Operação Pelo Seguinte Erro: ${JSON.stringify(a)}`)}},h=async()=>{try{if(1!==d.value){const a=await s("favorite_approach_user","approach_id",e.title.id);await n("favorite_approach_user",a[0].id)}else l.user_id=a.value.id,l.approach_id=e.title.id,r.value=!0,await i("favorite_approach_user",l),r.value=!1,(0,p.L)(" Adicionado aos favoritos com sucesso !!!")}catch(t){(0,p.s)(JSON.stringify(t))}};return(0,o.bv)((async()=>{await u()})),{addFavorit:h,go:c,ratingModel:d}}});var w=t(4260),_=t(5607),y=t(8833),q=t(7518),b=t.n(q);const k=(0,w.Z)(h,[["render",u],["__scopeId","data-v-ac079208"]]),Z=k;b()(h,"components",{QBanner:_.Z,QRating:y.Z})},317:(e,a,t)=>{t.r(a),t.d(a,{default:()=>C});var o=t(3673);const r=e=>((0,o.dD)("data-v-154ae233"),e=e(),(0,o.Cn)(),e),i={class:"column explore"},n={class:"col"},s={class:"col"},l=r((()=>(0,o._)("hr",null,null,-1))),c=r((()=>(0,o._)("br",null,null,-1))),d=r((()=>(0,o._)("br",null,null,-1))),u=r((()=>(0,o._)("br",null,null,-1)));function p(e,a,t,r,p,m){const f=(0,o.up)("q-icon"),v=(0,o.up)("q-input"),g=(0,o.up)("ApproachButtom"),h=(0,o.up)("q-spinner"),w=(0,o.up)("q-page");return(0,o.wg)(),(0,o.j4)(w,{class:"flex flex-center"},{default:(0,o.w5)((()=>[(0,o._)("div",i,[(0,o._)("div",n,[(0,o.Wm)(v,{outlined:"",rounded:"","bottom-slots":"",modelValue:e.text,"onUpdate:modelValue":a[1]||(a[1]=a=>e.text=a),label:"Pesquise aqui um tópico",dense:""},{append:(0,o.w5)((()=>[""!==e.text?((0,o.wg)(),(0,o.j4)(f,{key:0,name:"close",onClick:a[0]||(a[0]=a=>e.text=""),class:"cursor-pointer"})):(0,o.kq)("",!0),(0,o.Wm)(f,{name:"search"})])),_:1},8,["modelValue"])]),(0,o._)("div",s,[l,c,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.topics,((e,a)=>((0,o.wg)(),(0,o.j4)(g,{title:e,key:a,accessCap:!1,color:"green",icon:"time"},null,8,["title"])))),128))]),d,u,e.loading?((0,o.wg)(),(0,o.j4)(h,{key:0,class:"absolute-center",size:"xl",color:"primary"})):(0,o.kq)("",!0)])])),_:1})}var m=t(4434),f=t(1959),v=t(6804),g=t(811);const h=(0,o.aZ)({name:"AccessoPorCapituloPage",components:{ApproachButtom:v.Z},setup(){const{list:e}=(0,g.Z)(),a=(0,f.iH)([]),t=(0,f.iH)(!0),o=async()=>{try{t.value=!0,a.value=await e("approach"),t.value=!1}catch(o){(0,m.Z)(o)}};return{loading:t,listTopics:o,text:(0,f.iH)(""),topics:a,slide:(0,f.iH)("style")}},mounted(){this.listTopics()}});var w=t(4260),_=t(4379),y=t(4842),q=t(4554),b=t(6833),k=t(7518),Z=t.n(k);const x=(0,w.Z)(h,[["render",p],["__scopeId","data-v-154ae233"]]),C=x;Z()(h,"components",{QPage:_.Z,QInput:y.Z,QIcon:q.Z,QSpinner:b.Z})}}]);