"use strict";(self["webpackChunkmedicalbookapp"]=self["webpackChunkmedicalbookapp"]||[]).push([[724],{811:(e,a,t)=>{t.d(a,{Z:()=>o});var l=t(2421);function o(){const{supabase:e}=(0,l["default"])(),a=async a=>{const{data:t,error:l}=await e.from(a).select("*");if(l)throw l;return t},t=async(a,t)=>{const{data:l,error:o}=await e.from(a).select("*").eq("id",t);if(o)throw o;return l[0]},o=async(a,t,l)=>{const{data:o,error:n}=await e.from(a).select("*").eq(t,l);if(n)throw n;return o},n=async(a,t)=>{const l=t.reduce(((e,a,t)=>`${e.name}:${e.foreign_key}(${e.fields}),${a.name}:${a.foreign_key}(${a.fields})`)),{data:o,error:n}=await e.from(a).select(`*,${l}`);if(n)throw n;return console.log(o),o},r=async(a,t)=>{const{data:l,error:o}=await e.from(a).insert([{...t}]);if(o)throw o;return l},i=async(a,t)=>{const{data:l,error:o}=await e.from(a).update([{...t}]).match({id:t.id});if(o)throw o;return l},s=async(a,t)=>{const{data:l,error:o}=await e.from(a).delete().match({id:t});if(o)throw o;return l},u=async(a,t,l)=>{const{data:o,error:n}=await e.from(a).delete().match({[t]:l});if(n)throw n;return o};return{getByField:o,list:a,getById:t,post:r,update:i,remove:s,removeWhere:u,joinTables:n}}},6724:(e,a,t)=>{t.r(a),t.d(a,{default:()=>re});var l=t(3673),o=t(2323);const n={class:"col-md-4 col-sm-6 col-xs-10"},r=(0,l._)("p",null,[(0,l._)("strong",null," copyright 2022-2023 "),(0,l._)("strong",{style:{color:"#007BCE"}}," MedicalBook"),(0,l.Uk)(". Todos os direitos reservados. ")],-1),i={class:"flex flex-center"},s={class:"column",align:"center"},u={class:"col item q-pt-lg"},c={class:"text-center"},d=(0,l._)("br",null,null,-1),m=(0,l._)("span",null,"Administrador",-1),p=(0,l._)("br",null,null,-1),f={class:"text-h6 row item-start"},w=(0,l.Uk)(" Alterar valor do pacote Premium "),g=(0,l._)("br",null,null,-1),b=(0,l._)("br",null,null,-1);function y(e,a,t,y,_,h){const q=(0,l.up)("q-btn"),W=(0,l.up)("q-space"),k=(0,l.up)("q-toolbar"),v=(0,l.up)("q-header"),Z=(0,l.up)("q-toolbar-title"),x=(0,l.up)("q-footer"),Q=(0,l.up)("q-icon"),S=(0,l.up)("q-badge"),C=(0,l.up)("q-item-label"),I=(0,l.up)("q-item-section"),P=(0,l.up)("q-item"),L=(0,l.up)("q-separator"),B=(0,l.up)("ItemMenuSideBar"),V=(0,l.up)("q-expansion-item"),D=(0,l.up)("q-list"),A=(0,l.up)("q-drawer"),H=(0,l.up)("router-view"),T=(0,l.up)("q-card-section"),$=(0,l.up)("q-input"),F=(0,l.up)("q-card-actions"),z=(0,l.up)("q-form"),U=(0,l.up)("q-card"),j=(0,l.up)("q-dialog"),M=(0,l.up)("q-page-container"),O=(0,l.up)("q-layout"),E=(0,l.Q2)("close-popup"),N=(0,l.Q2)("ripple");return(0,l.wg)(),(0,l.j4)(O,{view:"lHr LpR lFr",class:"bg-grey-1"},{default:(0,l.w5)((()=>[(0,l._)("div",n,[(0,l.Wm)(v,{elevated:"",class:"bg-white text-grey-8","height-hint":"64"},{default:(0,l.w5)((()=>[(0,l.Wm)(k,null,{default:(0,l.w5)((()=>[(0,l.Wm)(q,{flat:"",dense:"",round:"",onClick:y.toggleLeftDrawer,"aria-label":"Menu",icon:"menu",class:"q-mx-md"},null,8,["onClick"]),(0,l.Wm)(q,{to:{name:"inicio"},flat:"",dense:"",color:"grey-8","no-caps":"",label:"Início",class:"q-ml-sm q-px-md"}),(0,l.Wm)(q,{flat:"",dense:"",color:"grey-8","no-caps":"",label:"Suporte",class:"q-ml-sm q-px-md"}),(0,l.Wm)(W),(0,l.Wm)(q,{onClick:a[0]||(a[0]=e=>y.dilogPremi=!0),size:"13px","no-caps":"","no-wrap":"",unelevated:"","text-color":"black",icon:"fas fa-crown",label:"Premium",class:"btn-profile btn-prime q-ml-sm q-px-md",style:{"background-color":"#FFC300"}})])),_:1})])),_:1}),(0,l.Wm)(x,{class:"bg-white text-grey-8"},{default:(0,l.w5)((()=>[(0,l.Wm)(k,{bordered:"",class:"q-pa-md"},{default:(0,l.w5)((()=>[(0,l.Wm)(Z,{class:"text-body1"},{default:(0,l.w5)((()=>[r])),_:1})])),_:1})])),_:1}),(0,l.Wm)(A,{modelValue:y.leftDrawerOpen,"onUpdate:modelValue":a[1]||(a[1]=e=>y.leftDrawerOpen=e),"show-if-above":"",bordered:""},{default:(0,l.w5)((()=>[(0,l.Wm)(D,null,{default:(0,l.w5)((()=>[(0,l._)("div",i,[(0,l._)("div",s,[(0,l._)("div",u,[(0,l.Wm)(q,{style:{background:"#1A4B9A",color:"#1378B3"},round:"",icon:"fas fa-user",size:"40px"},{default:(0,l.w5)((()=>[(0,l.Wm)(S,{class:"pic",style:{background:"#49D16B"},rounded:""},{default:(0,l.w5)((()=>[(0,l.Wm)(Q,{dense:"",name:"camera",color:"white",size:"30px"})])),_:1})])),_:1})])])]),(0,l._)("div",c,[(0,l.Wm)(P,{clickable:""},{default:(0,l.w5)((()=>[(0,l.Wm)(I,null,{default:(0,l.w5)((()=>[(0,l.Wm)(C,{header:""},{default:(0,l.w5)((()=>[(0,l._)("strong",null,(0,o.zw)(y.user.user_metadata.name),1),d,m])),_:1})])),_:1})])),_:1})]),(0,l.Wm)(L),(0,l.Wm)(L),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(y.principaisLinks,(e=>((0,l.wg)(),(0,l.j4)(B,(0,l.dG)({key:e.title},e),null,16)))),128)),(0,l.Wm)(D,{class:"rounded-borders"},{default:(0,l.w5)((()=>[(0,l.Wm)(V,{dense:"","dense-toggle":"","expand-separator":"",icon:"person",label:"Usuários"},{default:(0,l.w5)((()=>[(0,l.Wm)(V,{to:{name:"admin"},"switch-toggle-side":"","dense-toggle":"",label:"Admin"}),(0,l.Wm)(V,{to:{name:"users"},"switch-toggle-side":"","dense-toggle":"",label:"Normal"})])),_:1}),p])),_:1}),(0,l.Wm)(q,{flat:"",class:"full-widt",style:{"margin-left":"5px"},icon:"logout",label:"Sair",onClick:y.handleLogout},null,8,["onClick"])])),_:1})])),_:1},8,["modelValue"]),(0,l.Wm)(M,{class:"GPL__page-container"},{default:(0,l.w5)((()=>[(0,l.Wm)(H),(0,l.Wm)(j,{modelValue:y.dilogPremi,"onUpdate:modelValue":a[3]||(a[3]=e=>y.dilogPremi=e),persistent:""},{default:(0,l.w5)((()=>[(0,l.Wm)(U,{style:{"min-width":"350px"}},{default:(0,l.w5)((()=>[(0,l.Wm)(T,null,{default:(0,l.w5)((()=>[(0,l._)("div",f,[(0,l.Wm)(Q,{name:"fas fa-crown",style:{"margin-right":"10px"}}),w,(0,l.Wm)(W),(0,l.wy)((0,l.Wm)(q,{icon:"close",flat:"",round:"",dense:""},null,512),[[E]])]),(0,l.Wm)(L)])),_:1}),g,(0,l.Wm)(z,{onSubmit:y.updatValuePremium},{default:(0,l.w5)((()=>[(0,l.Wm)(F,{align:"left",class:"text-primary"},{default:(0,l.w5)((()=>[(0,l.Wm)($,{filled:"",modelValue:y.money,"onUpdate:modelValue":a[2]||(a[2]=e=>y.money=e),type:"number",label:"valor",style:{"max-width":"150px",width:"150px"},suffix:"R$ "},null,8,["modelValue"]),(0,l.wy)((0,l.Wm)(q,{label:"Salvar Valor",size:"19px","no-caps":"","no-wrap":"",unelevated:"",style:{"background-color":"#FFC300","margin-left":"10px","max-width":"150px",width:"150px"},"text-color":"black",type:"submit"},null,512),[[N],[E]])])),_:1}),b])),_:1},8,["onSubmit"])])),_:1})])),_:1},8,["modelValue"])])),_:1})])])),_:1})}t(5363),t(2100);function _(e,a,t,n,r,i){const s=(0,l.up)("q-icon"),u=(0,l.up)("q-item-section"),c=(0,l.up)("q-item-label"),d=(0,l.up)("q-item");return(0,l.wg)(),(0,l.j4)(d,{clickable:"",to:e.link},{default:(0,l.w5)((()=>[e.icon?((0,l.wg)(),(0,l.j4)(u,{key:0,avatar:""},{default:(0,l.w5)((()=>[(0,l.Wm)(s,{name:e.icon},null,8,["name"])])),_:1})):(0,l.kq)("",!0),(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l.Wm)(c,null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,o.zw)(e.title),1)])),_:1})])),_:1})])),_:1},8,["to"])}const h=(0,l.aZ)({name:"ItemMenuSideBar",props:{title:{type:String,required:!0},link:{type:String,default:"#"},icon:{type:String,default:""}}});var q=t(4260),W=t(3414),k=t(2035),v=t(4554),Z=t(2350),x=t(7518),Q=t.n(x);const S=(0,q.Z)(h,[["render",_]]),C=S;Q()(h,"components",{QItem:W.Z,QItemSection:k.Z,QIcon:v.Z,QItemLabel:Z.Z});var I=t(1959),P=t(4605),L=t(9582),B=t(8825),V=t(4958),D=t(811);const A=[{title:"Dashboard",icon:"event",link:"/admin/"},{title:"Categorias",icon:"school",link:"/admin/categories"},{title:"Tópicos",icon:"chat_bubble",link:"/admin/topics"},{title:"Abordagens",icon:"receipt",link:"/admin/approaches"},{title:"Áreas de oucupação",icon:"work",link:"/admin/occupation-areas"},{title:"Tipos de abordagens",icon:"folder",link:"/admin/tipos-De-Abordagens"}],H={name:"AdminLayout",components:{ItemMenuSideBar:C},setup(){const e=(0,I.iH)(!1),a=(0,I.iH)(""),t=(0,I.iH)(.26),o=(0,B.Z)(),n=(0,L.tv)(),r=(0,I.iH)(!1),i=(0,I.iH)(!1),s=(0,I.iH)(297.9),u={valor:0,id:1},{logout:c,user:d}=(0,V.Z)(),{list:m,update:p}=(0,D.Z)();function f(){e.value=!e.value}const w=async()=>{o.dialog({title:"Logout",message:"Tens a certeza que queres Sair ?",cancel:!0,persistent:!0}).onOk((async()=>{try{r.value=!0,await c(),r.value=!1,n.replace({name:"login"})}catch(e){r.value=!1,(0,P.s)(`A Sessão Não Pode Ser Terminada Pelo Seguinte Erro: ${JSON.stringify(e)}`)}}))},g=async()=>{const e=await m("valorPremium");s.value=e.map((e=>e.valor))},b=async()=>{u.valor=s.value,await p("valorPremium",u)};return(0,l.bv)((()=>{g()})),{user:d,updatValuePremium:b,dilogPremi:i,leftDrawerOpen:e,search:a,storage:t,principaisLinks:A,toggleLeftDrawer:f,miniState:(0,I.iH)(!0),handleLogout:w,money:s}}};var T=t(3066),$=t(3812),F=t(9570),z=t(2165),U=t(2025),j=t(1762),M=t(3747),O=t(6873),E=t(7011),N=t(9721),R=t(5869),G=t(429),J=t(2652),K=t(6778),Y=t(151),X=t(5589),ee=t(5269),ae=t(9367),te=t(4842),le=t(677),oe=t(6489);const ne=(0,q.Z)(H,[["render",y]]),re=ne;Q()(H,"components",{QLayout:T.Z,QHeader:$.Z,QToolbar:F.Z,QBtn:z.Z,QSpace:U.Z,QFooter:j.Z,QToolbarTitle:M.Z,QDrawer:O.Z,QList:E.Z,QBadge:N.Z,QIcon:v.Z,QItem:W.Z,QItemSection:k.Z,QItemLabel:Z.Z,QSeparator:R.Z,QExpansionItem:G.Z,QPageContainer:J.Z,QDialog:K.Z,QCard:Y.Z,QCardSection:X.Z,QForm:ee.Z,QCardActions:ae.Z,QInput:te.Z}),Q()(H,"directives",{ClosePopup:le.Z,Ripple:oe.Z})}}]);