"use strict";(self["webpackChunkmedicalbookapp"]=self["webpackChunkmedicalbookapp"]||[]).push([[505],{811:(e,a,l)=>{l.d(a,{Z:()=>r});var o=l(2421);function r(){const{supabase:e}=(0,o["default"])(),a=async a=>{const{data:l,error:o}=await e.from(a).select("*");if(o)throw o;return l},l=async(a,l)=>{const{data:o,error:r}=await e.from(a).select("*").eq("id",l);if(r)throw r;return o[0]},r=async(a,l,o)=>{const{data:r,error:t}=await e.from(a).select("*").eq(l,o);if(t)throw t;return r},t=async(a,l)=>{const o=l.reduce(((e,a,l)=>`${e.name}:${e.foreign_key}(${e.fields}),${a.name}:${a.foreign_key}(${a.fields})`)),{data:r,error:t}=await e.from(a).select(`*,${o}`);if(t)throw t;return console.log(r),r},i=async(a,l)=>{const{data:o,error:r}=await e.from(a).insert([{...l}]);if(r)throw r;return o},s=async(a,l)=>{const{data:o,error:r}=await e.from(a).update([{...l}]).match({id:l.id});if(r)throw r;return o},n=async(a,l)=>{const{data:o,error:r}=await e.from(a).delete().match({id:l});if(r)throw r;return o},d=async(a,l,o)=>{const{data:r,error:t}=await e.from(a).delete().match({[l]:o});if(t)throw t;return r};return{getByField:r,list:a,getById:l,post:i,update:s,remove:n,removeWhere:d,joinTables:t}}},6505:(e,a,l)=>{l.r(a),l.d(a,{default:()=>J});l(6801);var o=l(3673),r=l(2323);const t={class:"flex q-pt-xl flex-center"},i={class:"column",style:{"min-width":"90%"}},s={class:"col q-ma-xs"},n=(0,o._)("h5",{class:"col-12 title",style:{margin:"20px 0"}},"Usuários",-1),d={style:{width:"100px"},class:"row q-gutter-sm"},u={class:"q-mt-md"},p={key:0},m={key:1},c={key:0},w={key:1},f=(0,o._)("div",{class:"text-h6"},"Novo Usuário",-1),y={class:"q-pa-md"},g={class:"q-gutter-md row items-start"},_={class:"q-pa-xs"},b=(0,o.Uk)(),h=(0,o._)("br",null,null,-1);function v(e,a,l,v,k,W){const V=(0,o.up)("q-btn"),q=(0,o.up)("q-td"),C=(0,o.up)("q-tr"),U=(0,o.up)("q-table"),z=(0,o.up)("q-card-section"),x=(0,o.up)("q-separator"),Z=(0,o.up)("q-input"),D=(0,o.up)("q-option-group"),Q=(0,o.up)("q-select"),H=(0,o.up)("q-card-actions"),S=(0,o.up)("q-form"),N=(0,o.up)("q-card"),P=(0,o.up)("q-dialog"),$=(0,o.up)("q-inner-loading"),A=(0,o.Q2)("ripple"),I=(0,o.Q2)("close-popup");return(0,o.wg)(),(0,o.iD)("div",t,[(0,o._)("div",i,[(0,o._)("div",s,[(0,o._)("div",null,[n,(0,o._)("div",d,[(0,o.Wm)(V,{icon:"update",color:"primary",class:"col",onClick:a[0]||(a[0]=a=>e.listAll())})])]),(0,o._)("div",u,[(0,o.Wm)(U,{color:"primary",dense:e.$q.screen.lt.sm,flat:"",square:"",bordered:"",title:"Lista de Usuários",rows:e.rows,columns:e.columns,"visible-columns":["title","data","cpf","nacionalidade","ano-de-graduacao","area-de-ocupacao","data-cadastro","premium","perfil","options"],"row-key":"title",separator:"cell"},{body:(0,o.w5)((a=>[3!==a.row.perfil?((0,o.wg)(),(0,o.j4)(C,{key:0,props:a},{default:(0,o.w5)((()=>[(0,o.Wm)(q,{key:"title",props:a},{default:(0,o.w5)((()=>[(0,o.Uk)((0,r.zw)(a.row.name),1)])),_:2},1032,["props"]),(0,o.Wm)(q,{key:"data",props:a},{default:(0,o.w5)((()=>[(0,o.Uk)((0,r.zw)(a.row.data),1)])),_:2},1032,["props"]),(0,o.Wm)(q,{key:"cpf",props:a},{default:(0,o.w5)((()=>[(0,o.Uk)((0,r.zw)(a.row.cpf),1)])),_:2},1032,["props"]),(0,o.Wm)(q,{key:"nacionalidade",props:a},{default:(0,o.w5)((()=>[(0,o.Uk)((0,r.zw)(a.row.nacionalidade),1)])),_:2},1032,["props"]),(0,o.Wm)(q,{key:"ano-de-graduacao",props:a},{default:(0,o.w5)((()=>[(0,o.Uk)((0,r.zw)(a.row.ano_de_graduacao),1)])),_:2},1032,["props"]),(0,o.Wm)(q,{key:"area-de-ocupacao",props:a},{default:(0,o.w5)((()=>[(0,o.Uk)((0,r.zw)(a.row.area_de_ocupacao),1)])),_:2},1032,["props"]),(0,o.Wm)(q,{key:"data-cadastro",props:a},{default:(0,o.w5)((()=>[(0,o.Uk)((0,r.zw)(a.row.created_at),1)])),_:2},1032,["props"]),(0,o.Wm)(q,{key:"premium",props:a},{default:(0,o.w5)((()=>[a.row.premium?((0,o.wg)(),(0,o.iD)("p",p,"SIM")):((0,o.wg)(),(0,o.iD)("p",m,"NÃO"))])),_:2},1032,["props"]),(0,o.Wm)(q,{key:"perfil",props:a},{default:(0,o.w5)((()=>[1==a.row.perfil?((0,o.wg)(),(0,o.iD)("p",c,"Estudante")):2==a.row.perfil?((0,o.wg)(),(0,o.iD)("p",w,"Proficional")):(0,o.kq)("",!0)])),_:2},1032,["props"]),(0,o.Wm)(q,{key:"options",class:"text-right",props:a},{default:(0,o.w5)((()=>[(0,o.Wm)(V,{flat:"",square:"",icon:"delete",onClick:l=>e.confirmDelete(a.row.id),dense:""},null,8,["onClick"])])),_:2},1032,["props"])])),_:2},1032,["props"])):(0,o.kq)("",!0)])),_:1},8,["dense","rows","columns"])])])]),(0,o.Wm)(P,{modelValue:e.dialogUser,"onUpdate:modelValue":a[13]||(a[13]=a=>e.dialogUser=a),persistent:""},{default:(0,o.w5)((()=>[(0,o.Wm)(N,{class:"full-width"},{default:(0,o.w5)((()=>[(0,o.Wm)(S,{onSubmit:e.saveItem},{default:(0,o.w5)((()=>[(0,o.Wm)(z,{class:"q-py-sm"},{default:(0,o.w5)((()=>[f])),_:1}),(0,o.Wm)(x),(0,o.Wm)(z,{class:"scroll",style:{"max-height":"77vh"}},{default:(0,o.w5)((()=>[(0,o._)("div",y,[(0,o._)("div",g,[(0,o.Wm)(Z,{class:"col",style:{"min-width":"250px"},dense:"",modelValue:e.rows.name,"onUpdate:modelValue":a[1]||(a[1]=a=>e.rows.name=a),rounded:"",outlined:"",type:"text",label:"Nome completo","lazy-rules":"",rules:[e=>null!==e&&""!==e||"Campo não pode estar vazio"]},null,8,["modelValue","rules"]),(0,o.Wm)(Z,{class:"col",style:{"min-width":"120px"},dense:"",modelValue:e.rows.birthday,"onUpdate:modelValue":a[2]||(a[2]=a=>e.rows.birthday=a),rounded:"",outlined:"",type:"date",label:"Data de nascimento","stack-label":"","lazy-rules":"",rules:[e=>null!==e&&""!==e||"Campo não pode estar vazio"]},null,8,["modelValue","rules"]),(0,o.Wm)(Z,{class:"col",style:{"min-width":"250px"},dense:"",modelValue:e.rows.cpf,"onUpdate:modelValue":a[3]||(a[3]=a=>e.rows.cpf=a),rounded:"",outlined:"",type:"text",label:"CPF","lazy-rules":"",rules:[e=>null!==e&&""!==e||"Campo não pode estar vazio"]},null,8,["modelValue","rules"]),(0,o._)("div",null,[(0,o._)("div",_,[(0,o.Wm)(D,{modelValue:e.rows.profile_type_id,"onUpdate:modelValue":a[4]||(a[4]=a=>e.rows.profile_type_id=a),options:e.tipo,color:"primary",inline:""},null,8,["modelValue","options"])])]),(0,o.Wm)(Q,{class:"col",style:{"min-width":"230px"},dense:"",rounded:"",outlined:"",modelValue:e.rows.nationality,"onUpdate:modelValue":a[5]||(a[5]=a=>e.rows.nationality=a),options:e.options,label:"Nacionalidade"},null,8,["modelValue","options"]),(0,o.Wm)(x),(0,o.Wm)(Z,{style:{"min-width":"30%"},class:"col",dense:"",modelValue:e.rows.email,"onUpdate:modelValue":a[6]||(a[6]=a=>e.rows.email=a),rounded:"",outlined:"",type:"email",label:"Email","lazy-rules":"",rules:[e=>null!==e&&""!==e||"Campo não pode estar vazio"]},null,8,["modelValue","rules"]),(0,o.Wm)(Z,{style:{"min-width":"50%"},dense:"",class:"col",modelValue:e.formData.confirm_email,"onUpdate:modelValue":a[7]||(a[7]=a=>e.formData.confirm_email=a),rounded:"",outlined:"",type:"email",label:"Confirme o email","lazy-rules":"",rules:[e=>null!==e&&""!==e||"Campo não pode estar vazio",a=>a.trim()===e.rows.email.trim()||"Email não correspondente"]},null,8,["modelValue","rules"]),(0,o.Wm)(Z,{style:{"min-width":"30%","max-width":"50%"},class:"col",dense:"",modelValue:e.rows.password,"onUpdate:modelValue":a[8]||(a[8]=a=>e.rows.password=a),rounded:"",outlined:"",type:"password",label:"Senha","lazy-rules":"",rules:[e=>null!==e&&""!==e||"Campo não pode estar vazio"]},null,8,["modelValue","rules"]),(0,o.Wm)(Z,{class:"col",style:{"min-width":"50%","max-width":"50%"},dense:"",modelValue:e.rows.confirm_password,"onUpdate:modelValue":a[9]||(a[9]=a=>e.rows.confirm_password=a),rounded:"",outlined:"",type:"password",label:"Confirme a senha","lazy-rules":"",rules:[e=>null!==e&&""!==e||"Campo não pode estar vazio",a=>a.trim()===e.rows.password.trim()||"Senha não correspondente"]},null,8,["modelValue","rules"]),(0,o.Wm)(x),(0,o.Wm)(Q,{style:{"min-width":"30%","max-width":"50%"},dense:"",rounded:"",outlined:"",loading:e.loading,modelValue:e.rows.occupation_area,"onUpdate:modelValue":a[10]||(a[10]=a=>e.rows.occupation_area=a),options:e.options2,label:"Área de actuação",class:"col"},null,8,["loading","modelValue","options"]),(0,o.Wm)(Q,{style:{"min-width":"50%","max-width":"50%"},loading:e.loading,dense:"",rounded:"",outlined:"",modelValue:e.rows.graduation_year,"onUpdate:modelValue":a[11]||(a[11]=a=>e.rows.graduation_year=a),options:e.options1,label:"Ano de formatura",class:"col"},null,8,["loading","modelValue","options"]),b,h,(0,o.Wm)(H,{align:"right"},{default:(0,o.w5)((()=>[(0,o.wy)((0,o.Wm)(V,{label:"Cancelar ",onClick:a[12]||(a[12]=a=>e.loadingForm=!1),color:"primary","no-caps":"",dense:""},null,512),[[A],[I]]),(0,o.wy)((0,o.Wm)(V,{label:"Salvar",color:"primary",dense:"",type:"submit","no-caps":""},null,512),[[A]])])),_:1})])])])),_:1})])),_:1},8,["onSubmit"])])),_:1})])),_:1},8,["modelValue"]),(0,o.Wm)($,{showing:e.loading,label:"Atualizando...","label-class":"text-primary",color:"primary","label-style":"font-size: 1.1em"},null,8,["showing"])])}l(2100);var k=l(4605),W=l(1959),V=l(8825),q=l(811);const C=[{name:"title",required:!0,label:"Nome",align:"left",field:"title",sortable:!0},{name:"data",align:"left",label:"Data de Nascimento",field:"data",sortable:!0},{name:"CPF",align:"left",label:"CPF",field:"CPF",sortable:!0},{name:"nacionalidade",align:"left",label:"Nacionalidade",field:"Nacionalidade",sortable:!0},{name:"ano-de-graduacao",align:"left",label:"Ano de Graduação",field:"ano-de-graduacao",sortable:!0},{name:"area-de-ocupacao",align:"left",label:"Área de Ocupação",field:"area-de-ocupacao",sortable:!0},{name:"data-cadastro",align:"left",label:"Cadastrado Aos",field:"data",sortable:!0},{name:"premium",align:"left",label:"premium",field:"premium",sortable:!0},{name:"perfil",align:"left",label:"Perfil",field:"perfil",sortable:!0},{name:"options",align:"right",label:"Ação",field:"options",sortable:!0}],U=(0,o.aZ)({setup(){const e=(0,W.iH)(!0),a=(0,V.Z)(),{list:l,post:r,update:t,remove:i}=(0,q.Z)(),s=(0,W.iH)([]),n=(0,W.iH)([]),d=(0,W.qj)({name:"",id:null}),u=(0,W.qj)({name:"",birthday:"",cpf:"",nationality:"",profile_type_id:1,email:"",password:"",confirm_email:"",confirm_password:"",occupation_area:"",graduation_year:""}),p=(0,W.iH)([]),m=(0,W.iH)([]),c=(0,W.iH)([]),w=(0,W.iH)([{label:"Estudante",value:1},{label:"Profissional",value:2}]),f=(0,W.iH)([]),y=async()=>{f.value=await l("users")},g=async()=>{try{e.value=!0;const a=await l("perfil");s.value=a.map((e=>({id:e.id,name:e.name,data:e.birthday,cpf:e.cpf,perfil:e.profile_type_id,area_de_ocupacao:e.occupation_area,ano_de_graduacao:e.graduation_year,email:e.email,created_at:e.created_at,password:e.password,nacionalidade:e.nationality,premium:e.premium}))),e.value=!1}catch(a){alert(a)}},_=async a=>{try{e.value=!0,await i("perfil",a),g(),e.value=!1}catch(l){alert(l)}},b=async()=>{try{e.value=!0,d.id?await t("perfil",d):(delete d.id,await r("perfil",d)),g(),e.value=!1}catch(a){alert(a)}},h=async()=>{try{const a=await l("nationality");p.value=a.map((e=>e.name)),e.value=!1}catch(a){alert(a)}},v=async()=>{try{e.value=!0;const a=await l("occupation_area");m.value=a.map((e=>e.occupation_area));const o=await l("graduation_year");c.value=o.map((e=>e.graduation_year)),e.value=!1}catch(a){(0,k.s)(`houve uma falha ao carregar os dados do banco: ${JSON.stringify(a)}`)}};(0,o.bv)((()=>{h(),g(),v(),y()}));const U=async()=>{},z=(0,W.iH)(!1),x=e=>{e?Object.keys(e).forEach((a=>{d[a]=e[a]})):d.name="",z.value=!0};function Z(e){a.dialog({title:"Eliminar registro",message:"Gostaria de apagar este registro?",persistent:!0,cancel:"Cancelar"}).onOk((()=>{_(e)})).onOk((()=>{})).onCancel((()=>{})).onDismiss((()=>{}))}return{options:p,tipo:w,confirmDelete:Z,newDialog:x,formData:d,formUser:u,loading:e,deleteItem:_,dialogUser:z,saveItem:b,onItemClick:U,columns:C,rows:s,listAll:g,topics:n,varDialogPassword:(0,W.iH)(!1)}}});var z=l(4260),x=l(2165),Z=l(8468),D=l(8186),Q=l(3884),H=l(6778),S=l(151),N=l(5269),P=l(5589),$=l(5869),A=l(4842),I=l(8758),F=l(3017),O=l(9367),E=l(6941),j=l(6489),T=l(677),B=l(7518),G=l.n(B);const L=(0,z.Z)(U,[["render",v]]),J=L;G()(U,"components",{QBtn:x.Z,QTable:Z.Z,QTr:D.Z,QTd:Q.Z,QDialog:H.Z,QCard:S.Z,QForm:N.Z,QCardSection:P.Z,QSeparator:$.Z,QInput:A.Z,QOptionGroup:I.Z,QSelect:F.Z,QCardActions:O.Z,QInnerLoading:E.Z}),G()(U,"directives",{Ripple:j.Z,ClosePopup:T.Z})}}]);