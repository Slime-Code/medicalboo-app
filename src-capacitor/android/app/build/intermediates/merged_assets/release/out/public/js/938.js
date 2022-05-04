"use strict";(self["webpackChunkmedicalbookapp"]=self["webpackChunkmedicalbookapp"]||[]).push([[938],{811:(e,a,o)=>{o.d(a,{Z:()=>t});var l=o(2421);function t(){const{supabase:e}=(0,l["default"])(),a=async a=>{const{data:o,error:l}=await e.from(a).select("*");if(l)throw l;return o},o=async(a,o)=>{const{data:l,error:t}=await e.from(a).select("*").eq("id",o);if(t)throw t;return l[0]},t=async(a,o,l)=>{const{data:t,error:r}=await e.from(a).select("*").eq(o,l);if(r)throw r;return t},r=async(a,o)=>{const l=o.reduce(((e,a,o)=>`${e.name}:${e.foreign_key}(${e.fields}),${a.name}:${a.foreign_key}(${a.fields})`)),{data:t,error:r}=await e.from(a).select(`*,${l}`);if(r)throw r;return console.log(t),t},n=async(a,o)=>{const{data:l,error:t}=await e.from(a).insert([{...o}]);if(t)throw t;return l},c=async(a,o)=>{const{data:l,error:t}=await e.from(a).update([{...o}]).match({id:o.id});if(t)throw t;return l},s=async(a,o)=>{const{data:l,error:t}=await e.from(a).delete().match({id:o});if(t)throw t;return l},i=async(a,o,l)=>{const{data:t,error:r}=await e.from(a).delete().match({[o]:l});if(r)throw r;return t};return{getByField:t,list:a,getById:o,post:n,update:c,remove:s,removeWhere:i,joinTables:r}}},8938:(e,a,o)=>{o.r(a),o.d(a,{default:()=>P});var l=o(3673),t=o(2323);const r=e=>((0,l.dD)("data-v-6e4fc98c"),e=e(),(0,l.Cn)(),e),n=r((()=>(0,l._)("div",{class:"text-h5 q-pa-sm"},"Áreas de oucupação",-1))),c={class:"row q-pa-md q-gutter-sm"},s={class:"flex q-pt-xl flex-center"},i=r((()=>(0,l._)("div",{class:"text-h6"},"Nova area de ocupação",-1)));function d(e,a,o,r,d,u){const m=(0,l.up)("q-input"),p=(0,l.up)("q-space"),f=(0,l.up)("q-btn"),w=(0,l.up)("q-card"),g=(0,l.up)("q-td"),y=(0,l.up)("q-tr"),b=(0,l.up)("q-table"),q=(0,l.up)("q-page"),v=(0,l.up)("q-card-section"),_=(0,l.up)("q-card-actions"),h=(0,l.up)("q-form"),W=(0,l.up)("q-dialog"),k=(0,l.up)("q-inner-loading"),Z=(0,l.Q2)("ripple"),C=(0,l.Q2)("close-popup");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(q,{class:"q-pa-md"},{default:(0,l.w5)((()=>[n,(0,l.Wm)(w,{class:"q-mb-sm",flat:"",bordered:""},{default:(0,l.w5)((()=>[(0,l._)("div",c,[(0,l.Wm)(m,{class:"col-7 col-sm-7 col-md-7 col-xs-12 col-lg-7 col-xl-7",modelValue:e.filter,"onUpdate:modelValue":a[0]||(a[0]=a=>e.filter=a),placeholder:"Pesquisar abordagem",dense:"",outlined:""},null,8,["modelValue"]),(0,l.Wm)(p),(0,l.Wm)(f,{class:"col-2 col-sm-2 col-md-2 col-xs-12 col-lg-2 col-xl-2",color:"primary",label:"Nova tipo",onClick:a[1]||(a[1]=a=>e.newDialog()),"no-caps":"",rounded:""}),(0,l.Wm)(f,{class:"col-2 col-sm-2 col-md-2 col-xs-12 col-lg-2 col-xl-2",color:"primary",label:"Atualizar",onClick:a[2]||(a[2]=a=>e.listAll()),"no-caps":"",rounded:""})])])),_:1}),(0,l.Wm)(b,{dense:e.$q.screen.lt.md,flat:"",square:"",bordered:"",title:"Lista de ocupações",rows:e.categories,columns:e.columns,"visible-columns":["title","definition"],filter:e.filter,separator:"cell","row-key":"title"},{body:(0,l.w5)((a=>[(0,l.Wm)(y,{props:a},{default:(0,l.w5)((()=>[(0,l.Wm)(g,{key:"name",props:a,class:"text-center"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,t.zw)(a.row.occupation_area),1)])),_:2},1032,["props"]),(0,l.Wm)(g,{key:"actions",class:"text-center",props:a},{default:(0,l.w5)((()=>[(0,l.Wm)(f,{flat:"",square:"",icon:"edit",onClick:o=>e.newDialog(a.row),dense:""},null,8,["onClick"]),(0,l.Wm)(f,{flat:"",square:"",icon:"delete",onClick:o=>e.confirmDelete(a.row.id),class:"q-ml-sm",dense:""},null,8,["onClick"])])),_:2},1032,["props"])])),_:2},1032,["props"])])),_:1},8,["dense","rows","columns","filter"])])),_:1}),(0,l._)("div",s,[(0,l.Wm)(W,{modelValue:e.dialogCategory,"onUpdate:modelValue":a[4]||(a[4]=a=>e.dialogCategory=a),persistent:""},{default:(0,l.w5)((()=>[(0,l.Wm)(w,{style:{"min-width":"350px"}},{default:(0,l.w5)((()=>[(0,l.Wm)(v,null,{default:(0,l.w5)((()=>[i])),_:1}),(0,l.Wm)(h,{onSubmit:e.saveItem},{default:(0,l.w5)((()=>[(0,l.Wm)(v,{class:"q-pt-none"},{default:(0,l.w5)((()=>[(0,l.Wm)(m,{dense:"",modelValue:e.formData.occupation_area,"onUpdate:modelValue":a[3]||(a[3]=a=>e.formData.occupation_area=a),modelModifiers:{trim:!0},autofocus:""},null,8,["modelValue"])])),_:1}),(0,l.Wm)(_,{align:"right",class:"text-primary"},{default:(0,l.w5)((()=>[(0,l.wy)((0,l.Wm)(f,{label:"Cancelar",color:"primary","no-caps":""},null,512),[[Z],[C]]),(0,l.wy)((0,l.Wm)(f,{label:"Salvar",color:"primary",type:"submit","no-caps":""},null,512),[[Z],[C]])])),_:1})])),_:1},8,["onSubmit"])])),_:1})])),_:1},8,["modelValue"]),(0,l.Wm)(k,{showing:e.loading,label:"Atualizando...","label-class":"text-primary",color:"primary","label-style":"font-size: 1.1em"},null,8,["showing"])])],64)}o(2100);var u=o(8825),m=o(1959),p=o(811);const f=[{name:"name",required:!0,label:"Titulo",align:"center",field:e=>e.name,format:e=>`${e}`,sortable:!0},{name:"actions",required:!0,label:"Acoes",align:"center",field:e=>e.name,format:e=>`${e}`,sortable:!0}],w=[],g=(0,l.aZ)({name:"OccupationAreaListPage",components:{},setup(){const e=(0,m.iH)(!0),a=(0,u.Z)(),{list:o,post:t,update:r,remove:n}=(0,p.Z)(),c=(0,m.iH)([]),s=(0,m.iH)([]),i=(0,m.qj)({occupation_area:"",id:null}),d=async()=>{try{e.value=!0,s.value=await o("occupation_area"),e.value=!1}catch(a){alert(JSON.stringify(a))}},g=async a=>{try{e.value=!0,await n("occupation_area",a),d(),e.value=!1}catch(o){alert(o)}},y=async()=>{try{e.value=!0,i.id?await r("occupation_area",i):(delete i.id,await t("occupation_area",i)),d(),e.value=!1}catch(a){alert(a)}};(0,l.bv)((()=>{d()}));const b=async()=>{},q=(0,m.iH)(!1),v=e=>{e?Object.keys(e).forEach((a=>{i[a]=e[a]})):i.occupation_area="",q.value=!0};function _(e){a.dialog({title:"Eliminar registro",message:"Gostaria de apagar este registro?",persistent:!0,cancel:"Cancelar"}).onOk((()=>{g(e)})).onOk((()=>{})).onCancel((()=>{})).onDismiss((()=>{}))}const h=(0,m.iH)("");return{filter:h,confirmDelete:_,newDialog:v,formData:i,loading:e,deleteItem:g,dialogCategory:q,categories:s,saveItem:y,onItemClick:b,columns:f,rows:w,listAll:d,topics:c,varDialogPassword:(0,m.iH)(!1)}}});var y=o(4260),b=o(4379),q=o(151),v=o(4842),_=o(2025),h=o(2165),W=o(8468),k=o(8186),Z=o(3884),C=o(6778),x=o(5589),Q=o(5269),D=o(9367),$=o(6941),V=o(3812),H=o(6489),I=o(677),A=o(7518),S=o.n(A);const O=(0,y.Z)(g,[["render",d],["__scopeId","data-v-6e4fc98c"]]),P=O;S()(g,"components",{QPage:b.Z,QCard:q.Z,QInput:v.Z,QSpace:_.Z,QBtn:h.Z,QTable:W.Z,QTr:k.Z,QTd:Z.Z,QDialog:C.Z,QCardSection:x.Z,QForm:Q.Z,QCardActions:D.Z,QInnerLoading:$.Z,QHeader:V.Z}),S()(g,"directives",{Ripple:H.Z,ClosePopup:I.Z})}}]);