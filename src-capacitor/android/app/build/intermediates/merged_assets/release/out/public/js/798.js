"use strict";(self["webpackChunkmedicalbookapp"]=self["webpackChunkmedicalbookapp"]||[]).push([[798],{3798:(e,a,l)=>{l.r(a),l.d(a,{default:()=>k});var t=l(3673);const n={class:"column",align:"center"},u={class:"col item full-width",style:{"max-width":"500px"}},i={key:0,class:"q-pt-md q-gutter-y-md"};function m(e,a,l,m,s,o){const d=(0,t.up)("q-input"),c=(0,t.up)("q-btn"),r=(0,t.up)("q-form"),p=(0,t.up)("q-page");return(0,t.wg)(),(0,t.j4)(p,{class:"flex flex-center"},{default:(0,t.w5)((()=>[(0,t.Wm)(r,{onSubmit:e.handleResetEmail},{default:(0,t.w5)((()=>[(0,t._)("div",n,[(0,t._)("div",u,[(0,t.Wm)(d,{modelValue:e.text,"onUpdate:modelValue":a[0]||(a[0]=a=>e.text=a),label:"Senha Antiga"},null,8,["modelValue"]),(0,t.Wm)(d,{modelValue:e.email,"onUpdate:modelValue":a[1]||(a[1]=a=>e.email=a),label:"Digite sua Nova Senha"},null,8,["modelValue"]),(0,t.Wm)(d,{modelValue:e.email2,"onUpdate:modelValue":a[2]||(a[2]=a=>e.email2=a),label:"Digite sua Nova Senha"},null,8,["modelValue"]),e.email===e.email2&&""!==e.email?((0,t.wg)(),(0,t.iD)("div",i,[(0,t.Wm)(c,{"no-caps":"",label:"Enviar",class:"full-width",color:"primary",type:"submit"})])):(0,t.kq)("",!0)])])])),_:1},8,["onSubmit"])])),_:1})}l(5363);var s=l(4605),o=l(1959),d=l(4958),c=l(9582);const r=(0,t.aZ)({name:"EditarSenha",setup(){const e=(0,c.tv)(),{user:a}=(0,d.Z)(),l=(0,o.iH)(a),{password:n}=l,u=(0,o.iH)(!0),{sendPasswordRestEmail:i}=(0,d.Z)(),m=(0,o.iH)(""),r=(0,o.iH)(""),p=(0,o.iH)(""),v=async()=>{try{await i(p.value),(0,s.L)(`Senha Alterada com Sucesso: ${p.value}`),e.replace({name:""})}catch(a){alert(a)}};return(0,t.bv)((()=>{m.value===r.value&&(u.value=!1)})),{handleResetEmail:v,password:n,user:a,text:p,email:m,email2:r,valid:u}}});var p=l(4260),v=l(4379),b=l(5269),h=l(4842),w=l(2165),f=l(4554),g=l(7518),V=l.n(g);const Z=(0,p.Z)(r,[["render",m],["__scopeId","data-v-f920a0b2"]]),k=Z;V()(r,"components",{QPage:v.Z,QForm:b.Z,QInput:h.Z,QBtn:w.Z,QIcon:f.Z})}}]);