"use strict";(self["webpackChunkmedicalbookapp"]=self["webpackChunkmedicalbookapp"]||[]).push([[541],{811:(e,a,t)=>{t.d(a,{Z:()=>n});var r=t(2421);function n(){const{supabase:e}=(0,r["default"])(),a=async a=>{const{data:t,error:r}=await e.from(a).select("*");if(r)throw r;return t},t=async(a,t)=>{const{data:r,error:n}=await e.from(a).select("*").eq("id",t);if(n)throw n;return r[0]},n=async(a,t,r)=>{const{data:n,error:o}=await e.from(a).select("*").eq(t,r);if(o)throw o;return n},o=async(a,t)=>{const r=t.reduce(((e,a,t)=>`${e.name}:${e.foreign_key}(${e.fields}),${a.name}:${a.foreign_key}(${a.fields})`)),{data:n,error:o}=await e.from(a).select(`*,${r}`);if(o)throw o;return console.log(n),n},s=async(a,t)=>{const{data:r,error:n}=await e.from(a).insert([{...t}]);if(n)throw n;return r},c=async(a,t)=>{const{data:r,error:n}=await e.from(a).update([{...t}]).match({id:t.id});if(n)throw n;return r},i=async(a,t)=>{const{data:r,error:n}=await e.from(a).delete().match({id:t});if(n)throw n;return r},l=async(a,t,r)=>{const{data:n,error:o}=await e.from(a).delete().match({[t]:r});if(o)throw o;return n};return{getByField:n,list:a,getById:t,post:s,update:c,remove:i,removeWhere:l,joinTables:o}}},5541:(e,a,t)=>{t.r(a),t.d(a,{default:()=>k});var r=t(3673),n=t(2323);const o={class:"text-h4 col"},s={class:"q-ml-sm text-subtitle22 col"};function c(e,a,t,c,i,l){const d=(0,r.up)("q-rating"),u=(0,r.up)("q-btn"),m=(0,r.up)("q-banner"),p=(0,r.up)("q-card-section"),f=(0,r.up)("q-card"),w=(0,r.up)("q-expansion-item"),h=(0,r.up)("q-list"),y=(0,r.up)("q-page");return(0,r.wg)(),(0,r.j4)(y,{class:"column"},{default:(0,r.w5)((()=>[(0,r.Wm)(m,{rounded:"",class:"bg-grey-3 q-mb-md"},{action:(0,r.w5)((()=>[(0,r.Wm)(u,{color:"primary",label:"Assinar"})])),default:(0,r.w5)((()=>[(0,r._)("div",o,(0,n.zw)(e.approach.title),1),(0,r.Wm)(d,{class:"col q-ma-sm",size:"1.9em",color:"amber",icon:"star_border","icon-selected":"star"}),(0,r._)("div",s," Atualizado em "+(0,n.zw)(new Date(e.approach.created_at).toLocaleDateString("pt-BR",{year:"numeric",month:"long",day:"numeric"})),1)])),_:1}),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.contents,(a=>((0,r.wg)(),(0,r.j4)(h,{class:(0,n.C_)({"q-mx-xl":e.$q.screen.width>599}),flat:"",bordered:"",key:a.id},{default:(0,r.w5)((()=>[(0,r.Wm)(w,{label:a.title,"header-class":"bg-grey-3 text-body1 text-bold"},{default:(0,r.w5)((()=>[(0,r.Wm)(f,null,{default:(0,r.w5)((()=>[(0,r.Wm)(p,{class:"text-justify",innerHTML:a.content},null,8,["innerHTML"])])),_:2},1024)])),_:2},1032,["label"])])),_:2},1032,["class"])))),128))])),_:1})}var i=t(1959),l=t(811),d=t(9582);const u=(0,r.aZ)({name:"ProfilePage",setup(){const{getById:e,getByField:a}=(0,l.Z)(),t=(0,d.yj)(),n=(0,i.iH)({title:"",created_at:""}),o=(0,i.iH)([]);return(0,r.bv)((async()=>{n.value=await e("approach",t.params.id),o.value=await a("approach_contents","id_approach",t.params.id)})),{approach:n,contents:o}}});var m=t(4260),p=t(4379),f=t(5607),w=t(8833),h=t(2165),y=t(7011),b=t(429),g=t(151),_=t(5589),q=t(7518),v=t.n(q);const Z=(0,m.Z)(u,[["render",c],["__scopeId","data-v-24076507"]]),k=Z;v()(u,"components",{QPage:p.Z,QBanner:f.Z,QRating:w.Z,QBtn:h.Z,QList:y.Z,QExpansionItem:b.Z,QCard:g.Z,QCardSection:_.Z})}}]);