"use strict";(self["webpackChunkmedicalbookapp"]=self["webpackChunkmedicalbookapp"]||[]).push([[1],{811:(a,e,o)=>{o.d(e,{Z:()=>l});var t=o(2421);function l(){const{supabase:a}=(0,t["default"])(),e=async e=>{const{data:o,error:t}=await a.from(e).select("*");if(t)throw t;return o},o=async(e,o)=>{const{data:t,error:l}=await a.from(e).select("*").eq("id",o);if(l)throw l;return t[0]},l=async(e,o,t)=>{const{data:l,error:r}=await a.from(e).select("*").eq(o,t);if(r)throw r;return l},r=async(e,o)=>{const t=o.reduce(((a,e,o)=>`${a.name}:${a.foreign_key}(${a.fields}),${e.name}:${e.foreign_key}(${e.fields})`)),{data:l,error:r}=await a.from(e).select(`*,${t}`);if(r)throw r;return console.log(l),l},i=async(e,o)=>{const{data:t,error:l}=await a.from(e).insert([{...o}]);if(l)throw l;return t},s=async(e,o)=>{const{data:t,error:l}=await a.from(e).update([{...o}]).match({id:o.id});if(l)throw l;return t},n=async(e,o)=>{const{data:t,error:l}=await a.from(e).delete().match({id:o});if(l)throw l;return t},c=async(e,o,t)=>{const{data:l,error:r}=await a.from(e).delete().match({[o]:t});if(r)throw r;return l};return{getByField:l,list:e,getById:o,post:i,update:s,remove:n,removeWhere:c,joinTables:r}}},5001:(a,e,o)=>{o.r(e),o.d(e,{default:()=>I});var t=o(3673),l=o(2323);const r=(0,t._)("div",{class:"text-h5 q-pa-sm"},"Tópicos",-1),i={class:"row q-pa-md q-gutter-sm"},s={class:"flex q-pt-xl flex-center"},n=(0,t._)("div",{class:"text-h6"},"Novo tpico",-1);function c(a,e,o,c,d,p){const u=(0,t.up)("q-input"),m=(0,t.up)("q-space"),f=(0,t.up)("q-btn"),w=(0,t.up)("q-card"),g=(0,t.up)("q-td"),y=(0,t.up)("q-tr"),h=(0,t.up)("q-table"),_=(0,t.up)("q-page"),v=(0,t.up)("q-card-section"),b=(0,t.up)("q-select"),q=(0,t.up)("q-card-actions"),C=(0,t.up)("q-form"),W=(0,t.up)("q-dialog"),k=(0,t.up)("q-inner-loading"),Z=(0,t.Q2)("ripple"),x=(0,t.Q2)("close-popup");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t.Wm)(_,{class:"q-pa-md"},{default:(0,t.w5)((()=>[r,(0,t.Wm)(w,{class:"q-mb-sm",flat:"",bordered:""},{default:(0,t.w5)((()=>[(0,t._)("div",i,[(0,t.Wm)(u,{class:"col-7 col-sm-7 col-md-7 col-xs-12 col-lg-7 col-xl-7",modelValue:a.filter,"onUpdate:modelValue":e[0]||(e[0]=e=>a.filter=e),placeholder:"Pesquisar abordagem",dense:"",outlined:""},null,8,["modelValue"]),(0,t.Wm)(m),(0,t.Wm)(f,{class:"col-2 col-sm-2 col-md-2 col-xs-12 col-lg-2 col-xl-2",color:"primary",label:"Nova tópico",onClick:e[1]||(e[1]=e=>a.newDialog()),"no-caps":"",rounded:""}),(0,t.Wm)(f,{class:"col-2 col-sm-2 col-md-2 col-xs-12 col-lg-2 col-xl-2",color:"primary",label:"Atualizar",onClick:e[2]||(e[2]=e=>a.listAll()),"no-caps":"",rounded:""})])])),_:1}),(0,t.Wm)(h,{dense:a.$q.screen.lt.md,flat:"",square:"",bordered:"",title:"Lista de Categorias",rows:a.rows,columns:a.columns,"visible-columns":["title","options"],"row-key":"title",filter:a.filter,separator:"cell"},{body:(0,t.w5)((e=>[(0,t.Wm)(y,{props:e},{default:(0,t.w5)((()=>[(0,t.Wm)(g,{key:"title",class:"text-center",props:e},{default:(0,t.w5)((()=>[(0,t.Uk)((0,l.zw)(e.row.name),1)])),_:2},1032,["props"]),(0,t.Wm)(g,{key:"definition",props:e},{default:(0,t.w5)((()=>[(0,t.Uk)((0,l.zw)(e.row.definition),1)])),_:2},1032,["props"]),(0,t.Wm)(g,{key:"options",class:"text-center",props:e},{default:(0,t.w5)((()=>[(0,t.Wm)(f,{flat:"",square:"",icon:"edit",onClick:o=>a.newDialog(e.row),dense:""},null,8,["onClick"]),(0,t.Wm)(f,{flat:"",square:"",icon:"delete",onClick:o=>a.confirmDelete(e.row.id),dense:""},null,8,["onClick"])])),_:2},1032,["props"])])),_:2},1032,["props"])])),_:1},8,["dense","rows","columns","filter"])])),_:1}),(0,t._)("div",s,[(0,t.Wm)(W,{modelValue:a.dialogCategory,"onUpdate:modelValue":e[5]||(e[5]=e=>a.dialogCategory=e),persistent:""},{default:(0,t.w5)((()=>[(0,t.Wm)(w,{style:{"min-width":"350px"}},{default:(0,t.w5)((()=>[(0,t.Wm)(v,null,{default:(0,t.w5)((()=>[n])),_:1}),(0,t.Wm)(C,{onSubmit:a.saveItem},{default:(0,t.w5)((()=>[(0,t.Wm)(v,null,{default:(0,t.w5)((()=>[(0,t.Wm)(b,{rules:[a=>!!a||"Campo obrigatório"],dense:"",outlined:"",modelValue:a.categoria,"onUpdate:modelValue":e[3]||(e[3]=e=>a.categoria=e),options:a.optionsCategory,label:"Categoria"},null,8,["rules","modelValue","options"])])),_:1}),(0,t.Wm)(v,{class:"q-pt-none"},{default:(0,t.w5)((()=>[(0,t.Wm)(u,{dense:"",modelValue:a.formData.name,"onUpdate:modelValue":e[4]||(e[4]=e=>a.formData.name=e),modelModifiers:{trim:!0},autofocus:""},null,8,["modelValue"])])),_:1}),(0,t.Wm)(q,{align:"right",class:"text-primary"},{default:(0,t.w5)((()=>[(0,t.wy)((0,t.Wm)(f,{label:"Cancelar",color:"primary","no-caps":""},null,512),[[Z],[x]]),(0,t.wy)((0,t.Wm)(f,{label:"Salvar",color:"primary",type:"submit","no-caps":""},null,512),[[Z],[x]])])),_:1})])),_:1},8,["onSubmit"])])),_:1})])),_:1},8,["modelValue"]),(0,t.Wm)(k,{showing:a.loading,label:"Atualizando...","label-class":"text-primary",color:"primary","label-style":"font-size: 1.1em"},null,8,["showing"])])],64)}o(2100);var d=o(1959),p=o(8825),u=o(811);const m=[{name:"title",required:!0,label:"Titulo",align:"center",field:"title",sortable:!0},{name:"options",align:"center",label:"Acção",field:"options",sortable:!0}],f=(0,t.aZ)({setup(){const a=(0,d.iH)(!0),e=(0,p.Z)(),{list:o,post:l,update:r,remove:i,getByField:s}=(0,u.Z)(),n=(0,d.iH)([]),c=(0,d.iH)([]),f=(0,d.iH)(null),w=(0,d.iH)(null),g=(0,d.qj)({name:"",id:null,categoria_id:null}),y=async()=>{try{a.value=!0,n.value=await o("topic");const e=await o("categoria");a.value=!1,f.value=e.map((a=>({label:a.name,id:a.id})))}catch(e){a.value=!1,alert(e)}},h=async e=>{try{a.value=!0;const o=await s("approach","topic_id",e);o.forEach((async a=>{const e=await s("exameComplementar","approach_id",a.id);e.forEach((async a=>{await i("exameComplementar",a.id)}));const o=await s("definicao","approach_id",a.id);o.forEach((async a=>{await i("definicao",a.id)}));const t=await s("approach_contents","id_approach",a.id);t.forEach((async a=>{await i("approach_contents",a.id)}));const l=await s("favorite_approach_user","approach_id",a.id);l.forEach((async a=>{await i("favorite_approach_user",a.id)})),await i("approach",a.id)}));const t=await s("access_topic_user","topic_id",e);t.forEach((async a=>{await i("access_topic_user",a.id)})),await i("topic",e),y(),a.value=!1}catch(o){a.value=!1,alert(JSON.stringify(o))}},_=async()=>{try{a.value=!0,g.id?(delete g.categoria_id,await r("topic",g)):(delete g.id,g.categoria_id=w.value.id,await l("topic",g)),y(),a.value=!1}catch(e){a.value=!1,alert(JSON.stringify(e))}};(0,t.bv)((async()=>{await y()}));const v=async()=>{},b=(0,d.iH)(!1),q=a=>{a?Object.keys(a).forEach((e=>{g[e]=a[e]})):g.name="",b.value=!0};function C(a){e.dialog({title:"Eliminar registro",message:"Gostaria de apagar este registro?",persistent:!0,cancel:"Cancelar"}).onOk((()=>{h(a)})).onOk((()=>{})).onCancel((()=>{})).onDismiss((()=>{}))}return{categoria:w,optionsCategory:f,confirmDelete:C,newDialog:q,formData:g,loading:a,deleteItem:h,dialogCategory:b,saveItem:_,onItemClick:v,columns:m,rows:n,listAll:y,topics:c,varDialogPassword:(0,d.iH)(!1)}}});var w=o(4260),g=o(4379),y=o(151),h=o(4842),_=o(2025),v=o(2165),b=o(8468),q=o(8186),C=o(3884),W=o(6778),k=o(5589),Z=o(5269),x=o(3017),Q=o(9367),D=o(6941),V=o(6489),E=o(677),H=o(7518),S=o.n(H);const $=(0,w.Z)(f,[["render",c]]),I=$;S()(f,"components",{QPage:g.Z,QCard:y.Z,QInput:h.Z,QSpace:_.Z,QBtn:v.Z,QTable:b.Z,QTr:q.Z,QTd:C.Z,QDialog:W.Z,QCardSection:k.Z,QForm:Z.Z,QSelect:x.Z,QCardActions:Q.Z,QInnerLoading:D.Z}),S()(f,"directives",{Ripple:V.Z,ClosePopup:E.Z})}}]);