(()=>{"use strict";var e={119:(e,t,o)=>{o(5363),o(71);var a=o(8880),r=o(9592),n=o(3673);function i(e,t,o,a,r,i){const s=(0,n.up)("router-view");return(0,n.wg)(),(0,n.j4)(s)}const s=(0,n.aZ)({name:"App"});var c=o(4260);const p=(0,c.Z)(s,[["render",i]]),u=p;var d=o(7919),l=o(7083),h=o(9582),m=o(4958);const f=[{path:"",name:"Init",component:()=>Promise.all([o.e(736),o.e(185)]).then(o.bind(o,4185))},{path:"/login",name:"login",component:()=>Promise.all([o.e(736),o.e(26)]).then(o.bind(o,8026))},{path:"/",component:()=>Promise.all([o.e(736),o.e(544)]).then(o.bind(o,4544)),children:[{path:"home",name:"home",component:()=>Promise.all([o.e(736),o.e(703)]).then(o.bind(o,2703))}],meta:{requiresAuth:!0}},{path:"/",component:()=>Promise.all([o.e(736),o.e(544)]).then(o.bind(o,4544)),children:[{path:"profile",name:"profile",component:()=>Promise.all([o.e(736),o.e(642)]).then(o.bind(o,642))},{path:"content/:key",name:"content",component:()=>Promise.all([o.e(736),o.e(924)]).then(o.bind(o,1924))},{path:"editar-senha",name:"editar-senha",component:()=>Promise.all([o.e(736),o.e(798)]).then(o.bind(o,3798))},{path:"meus-dados",name:"meus-dados",component:()=>Promise.all([o.e(736),o.e(685)]).then(o.bind(o,7685))},{path:"explore",name:"explore",component:()=>Promise.all([o.e(736),o.e(766)]).then(o.bind(o,6766))},{path:"favorite",name:"favorite",component:()=>Promise.all([o.e(736),o.e(668)]).then(o.bind(o,2668))},{path:"/approach/:id",name:"approach",component:()=>Promise.all([o.e(736),o.e(946)]).then(o.bind(o,1946))},{path:"note",name:"note",component:()=>Promise.all([o.e(736),o.e(254)]).then(o.bind(o,8254))},{path:"accesso-por-capitulo",name:"accesso-por-capitulo",component:()=>Promise.all([o.e(736),o.e(317)]).then(o.bind(o,317))}],meta:{requiresAuth:!0}},{path:"/",component:()=>Promise.all([o.e(736),o.e(448)]).then(o.bind(o,4946)),children:[{path:"/approach-detail/:id",name:"approach-detail",component:()=>Promise.all([o.e(736),o.e(541)]).then(o.bind(o,5541))}],meta:{requaresAuth:!0}},{path:"/codigo-acesso",name:"codigo-acesso",component:()=>Promise.all([o.e(736),o.e(914)]).then(o.bind(o,3914)),meta:{requaresAuth:!0}},{path:"/register",component:()=>Promise.all([o.e(736),o.e(159)]).then(o.bind(o,6159)),children:[{path:"",name:"register",component:()=>Promise.all([o.e(736),o.e(503)]).then(o.bind(o,503))},{path:"/second",name:"second",component:()=>Promise.all([o.e(736),o.e(571)]).then(o.bind(o,7571))},{path:"/third",name:"third",component:()=>Promise.all([o.e(736),o.e(238)]).then(o.bind(o,2238))},{path:"/concluido",name:"concluido",component:()=>Promise.all([o.e(736),o.e(866)]).then(o.bind(o,7866))},{path:"/email-confirmation",name:"email-confirmation",component:()=>Promise.all([o.e(736),o.e(823)]).then(o.bind(o,2823))},{path:"/registerPage",name:"registerPage",component:()=>Promise.all([o.e(736),o.e(8)]).then(o.bind(o,7008))}]},{path:"/",component:()=>Promise.all([o.e(736),o.e(109)]).then(o.bind(o,5109)),children:[{path:"",name:"prime",component:()=>Promise.all([o.e(736),o.e(881)]).then(o.bind(o,9881))}],meta:{requiresAuth:!0}},{path:"/admin",component:()=>Promise.all([o.e(736),o.e(724)]).then(o.bind(o,6724)),children:[{path:"",name:"inicio",component:()=>Promise.all([o.e(736),o.e(457)]).then(o.bind(o,1457))},{path:"painel",name:"painel",component:()=>Promise.all([o.e(736),o.e(457)]).then(o.bind(o,1457))},{path:"/admin/approaches",name:"approaches",component:()=>Promise.all([o.e(736),o.e(383)]).then(o.bind(o,8383))},{path:"/admin/categories",name:"categories",component:()=>Promise.all([o.e(736),o.e(455)]).then(o.bind(o,7455))},{path:"/admin/topics",name:"topics",component:()=>Promise.all([o.e(736),o.e(1)]).then(o.bind(o,5001))},{path:"/admin/users",name:"users",component:()=>Promise.all([o.e(736),o.e(505)]).then(o.bind(o,6505))},{path:"/admin/colaboradores",name:"admin",component:()=>Promise.all([o.e(736),o.e(563)]).then(o.bind(o,6563))},{path:"/admin/tipos-De-Abordagens",name:"tipos-De-Abordagens",component:()=>Promise.all([o.e(736),o.e(106)]).then(o.bind(o,4106))},{path:"/admin/occupation-areas",name:"occupation-areas",component:()=>Promise.all([o.e(736),o.e(938)]).then(o.bind(o,8938))}],meta:{requaresAuth:!0}},{path:"/:catchAll(.*)*",component:()=>Promise.all([o.e(736),o.e(436)]).then(o.bind(o,5436))}],g=f,v=(0,l.BC)((()=>{const e=h.r5,t=(0,h.p7)({scrollBehavior:()=>({left:0,top:0}),routes:g,history:e("")});return t.beforeEach((e=>{if("/admin"===e.fullPath)return{name:"login",query:{access:"admin"}};const{user:t}=(0,m.Z)();if(e.hash.includes("type=recovery")&&"reset-password"!==e.name){const t=e.hash.split("&")[0],o=t.replace("#acess_token=","");return{name:"reset-password",query:{token:o}}}const o=!!t.value;return o||!e.meta.requiresAuth||Object.keys(e.query).includes("fromEmail")?void 0:{name:"login"}})),t}));var y=o(2345);const{SplashScreen:A}=y.Vn,b=(0,n.aZ)({name:"AppWrapper",setup(e){return(0,n.bv)((()=>{A.hide()})),()=>(0,n.h)(u,e)}});async function P(e,t){const a="function"===typeof d["default"]?await(0,d["default"])({}):d["default"],{storeKey:n}=await Promise.resolve().then(o.bind(o,7919)),i="function"===typeof v?await v({store:a}):v;a.$router=i;const s=e(b);return s.use(r.Z,t),s.config.globalProperties.$q.capacitor=window.Capacitor,{app:s,store:a,storeKey:n,router:i}}var w=o(3869),T=o(6778),Z=o(6395),U=o(6249),$=o(4434),O=o(1417);const C={config:{},lang:w.Z,components:{QDialog:T.Z},plugins:{LocalStorage:Z.Z,Loading:U.Z,Notify:$.Z,Dialog:O.Z}},I="";async function F({app:e,router:t,store:o,storeKey:a},r){let n=!1;const i=e=>{try{return t.resolve(e).href}catch(o){}return Object(e)===e?null:e},s=e=>{if(n=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const t=i(e);null!==t&&(window.location.href=t,window.location.reload())},c=window.location.href.replace(window.location.origin,"");for(let u=0;!1===n&&u<r.length;u++)try{await r[u]({app:e,router:t,store:o,ssrContext:null,redirect:s,urlPath:c,publicPath:I})}catch(p){return p&&p.url?void s(p.url):void console.error("[Quasar] boot error:",p)}!0!==n&&(e.use(t),e.use(o,a),e.mount("#q-app"))}P(a.ri,C).then((e=>Promise.all([Promise.resolve().then(o.bind(o,2421)),Promise.resolve().then(o.bind(o,5474))]).then((t=>{const o=t.map((e=>e.default)).filter((e=>"function"===typeof e));F(e,o)}))))},7227:(e,t,o)=>{o.d(t,{Z:()=>i});var a=o(52),r=o.n(a);const n=r().create({baseURL:"http://127.0.0.1:8000/api"}),i=n},5474:(e,t,o)=>{o.r(t),o.d(t,{api:()=>i,default:()=>s});var a=o(7083),r=o(52),n=o.n(r);const i=n().create({baseURL:"https://api.example.com"}),s=(0,a.xr)((({app:e})=>{n().defaults.withCredentials=!0,e.config.globalProperties.$axios=n(),e.config.globalProperties.$api=i}))},2421:(e,t,o)=>{o.r(t),o.d(t,{default:()=>c});var a=o(4436),r=o(4958);const n="https://bedvvcrqehulfocxohvt.supabase.co",i="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJlZHZ2Y3JxZWh1bGZvY3hvaHZ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDY1OTIwNjQsImV4cCI6MTk2MjE2ODA2NH0.TlR14ypEFye2cP7yJ67jRn5uYIn1vbq0M0j3jKFyINw",s=(0,a.eI)(n,i);function c(){return{supabase:s}}s.auth.onAuthStateChange(((e,t)=>{const{user:o}=(0,r.Z)();o.value=(null===t||void 0===t?void 0:t.user)||null}))},4958:(e,t,o)=>{o.d(t,{Z:()=>i});var a=o(1959),r=o(2421);const n=(0,a.iH)(null);function i(){const{supabase:e}=(0,r["default"])(),t=async({email:t,password:o})=>{const{user:a,error:r}=await e.auth.signIn({email:t,password:o});if(r)throw r;return a},o=async t=>{const{user:o,error:a}=await e.auth.update(t);if(a)throw a;return o},a=async()=>{const{error:t}=await e.auth.signOut();if(t)throw t},i=async()=>!!n.value,s=async({email:t,password:o,...a})=>{const{user:r,error:n}=await e.auth.signUp({email:t,password:o},{data:a,redirectTo:`${window.location.origin}/login`});if(n)throw n;return r},c=async t=>{const{user:o,error:a}=await e.auth.update(t);if(a)throw a;return o},p=async t=>{const{user:o,error:a}=await e.auth.api.sendPasswordRestEmail(t);if(a)throw a;return o},u=async(t,o)=>{const{user:a,error:r}=await e.auth.api.updateUser(t,{password:o});if(r)throw r;return a};return{user:n,login:t,loginWithSociaProvider:o,logout:a,isLoggedIn:i,register:s,updated:c,sendPasswordRestEmail:p,resetPassword:u}}},4605:(e,t,o)=>{o.d(t,{L:()=>i,s:()=>n});var a=o(6249),r=o(4434);function n(e){a.Z.hide(),r.Z.create({color:"negative",position:"top",message:e,icon:"report_problem"})}function i(e){a.Z.hide(),r.Z.create({color:"green-5",textColor:"white",icon:"done",position:"top",message:e})}},7919:(e,t,o)=>{o.r(t),o.d(t,{default:()=>ko});var a={};o.r(a),o.d(a,{getData:()=>E,getUserDetails:()=>S,getUserPermission:()=>_});var r={};o.r(r),o.d(r,{setDetails:()=>x,setFormOne:()=>J,setFormSecond:()=>M,setFormThird:()=>B,setLoggedIn:()=>q});var n={};o.r(n),o.d(n,{getState:()=>V,login:()=>Q,setDataForm:()=>W});var i={};o.r(i),o.d(i,{approach:()=>te,approaches:()=>ee});var s={};o.r(s),o.d(s,{addApproach:()=>re,deleteApproach:()=>ie,setApproach:()=>ae,setApproaches:()=>oe,updateApproach:()=>ne});var c={};o.r(c),o.d(c,{addApproach:()=>le,deleteApproach:()=>me,getApproach:()=>de,getApproaches:()=>ue,updateApproach:()=>he});var p={};o.r(p),o.d(p,{categories:()=>ve,category:()=>ye});var u={};o.r(u),o.d(u,{addCategory:()=>Pe,deleteCategory:()=>Te,setCategories:()=>Ae,setCategory:()=>be,updateCategory:()=>we});var d={};o.r(d),o.d(d,{addCategory:()=>Ce,deleteCategory:()=>Fe,getCategories:()=>$e,getCategory:()=>Oe,updateCategory:()=>Ie});var l={};o.r(l),o.d(l,{note:()=>je,notes:()=>De});var h={};o.r(h),o.d(h,{addNote:()=>Ee,deleteNote:()=>qe,setNote:()=>Se,setNotes:()=>_e,updateNote:()=>Le});var m={};o.r(m),o.d(m,{profile:()=>Re,profiles:()=>Be});var f={};o.r(f),o.d(f,{addProfile:()=>Ke,deleteProfile:()=>Qe,setProfile:()=>He,setProfiles:()=>Ye,updateProfile:()=>ze});var g={};o.r(g),o.d(g,{addProfile:()=>et,deleteProfile:()=>ot,getProfile:()=>Ge,getProfiles:()=>Xe,updateProfile:()=>tt});var v={};o.r(v),o.d(v,{topic:()=>it,topics:()=>nt});var y={};o.r(y),o.d(y,{addTopic:()=>pt,deleteTopic:()=>dt,setTopic:()=>ct,setTopics:()=>st,updateTopic:()=>ut});var A={};o.r(A),o.d(A,{addTopic:()=>gt,deleteTopic:()=>yt,getApproach:()=>ft,getApproaches:()=>mt,updateTopic:()=>vt});var b={};o.r(b),o.d(b,{accessTopicUser:()=>wt,accessTopicUsers:()=>Pt});var P={};o.r(P),o.d(P,{addAccessTopicUser:()=>Ut,deleteAccessTopicUser:()=>Ot,setAccessTopicUser:()=>Zt,setAccessTopicUsers:()=>Tt,updateAccessTopicUser:()=>$t});var w={};o.r(w),o.d(w,{addAccessTopicUser:()=>Nt,deleteApproach:()=>jt,getAccessTopicUser:()=>kt,getAccessTopicUsers:()=>Ft,updateAccessTopicUser:()=>Dt});var T={};o.r(T),o.d(T,{favoriteApproachUser:()=>Lt,favoriteApproachUsers:()=>Et});var Z={};o.r(Z),o.d(Z,{addFavoriteApproachUser:()=>Jt,deleteFavoriteApproachUser:()=>Bt,setFavoriteApproachUser:()=>xt,setFavoriteApproachUsers:()=>qt,updateFavoriteApproachUser:()=>Mt});var U={};o.r(U),o.d(U,{addFavoriteApproachUser:()=>zt,deleteFavoriteApproachUser:()=>Vt,getFavoriteApproachUser:()=>Kt,getFavoriteApproachUsers:()=>Ht,updateFavoriteApproachUser:()=>Qt});var $={};o.r($),o.d($,{occupatioAreas:()=>Gt,occupationArea:()=>eo});var O={};o.r(O),o.d(O,{addOccupationArea:()=>ao,deleteOccupationArea:()=>no,setOccupationArea:()=>oo,setOccupationAreas:()=>to,updateOccupationArea:()=>ro});var C={};o.r(C),o.d(C,{addOccupationArea:()=>uo,deleteOccupationArea:()=>ho,getOccupationArea:()=>po,getOccupationAreas:()=>co,updateOccupationArea:()=>lo});var I={};o.r(I),o.d(I,{profileType:()=>vo,profileTypes:()=>go});var F={};o.r(F),o.d(F,{addProfileType:()=>bo,deleteProfileType:()=>wo,setProfileType:()=>Ao,setProfileTypes:()=>yo,updateProfileType:()=>Po});var k={};o.r(k),o.d(k,{addProfileType:()=>Oo,deleteProfileType:()=>Io,getProfileType:()=>$o,getProfileTypes:()=>Uo,updateProfileType:()=>Co});var N=o(7083),D=o(3617);function j(){return{loggedIn:!1,permissions:[],details:{},formData:{name:"",email:"",birthday:"",cpf:"",nationality:"",graduation_year:"",profile_type_id:1,occupation_area:"",password:""}}}function _(e){return e.permissions}function S(e){return e.details}function E(e){return e.formData}var L=o(6395);function q(e,t){e.loggedIn=t,L.Z.set("user.loggedIn",t)}function x(e,t){e.details=t,L.Z.set("user.details",t)}function J(e,t){e.formData.name=t.name,e.formData.birthday=t.birthday,e.formData.cpf=t.cpf,e.formData.nationality=t.nationality,e.formData.profile_type_id=t.profile_type_id}function M(e,t){e.formData.email=t.email,e.formData.password=t.password}function B(e,t){e.formData.occupation_area=t.occupation_area,e.formData.graduation_year=t.graduation_year}var R=o(6249),Y=o(4605),H=o(52),K=o.n(H),z=o(5474);function Q({commit:e},t){return R.Z.show(),K().get("http://127.0.0.1:8000/api/sanctum/csrf-cookie").then((()=>{K().post("http://127.0.0.1:8000/api/login",{email:t.email,password:t.password}).then((t=>{e("setLoggedIn",!0);const o=t.data.user.type;z.api.defaults.headers.common.Authorization=`Bearer ${t.data.token}`,K().get("http://127.0.0.1:8000/api/user").then((t=>{e("setDetails",t.data),(0,Y.L)("Seja bem vindo!"),"admin"===o?this.$router.push("/admin"):this.$router.push("/home")})).catch((()=>{(0,Y.s)("Falha ao carregar detalhes do usuário!"),e("setLoggedIn",!1)}))})).catch((()=>{(0,Y.s)("Palavra-passe ou nome de usuário incorrectos")}))})).catch((()=>{(0,Y.s)("Algo correu mal, tente novamente mais tarde")})),!0}function V({commit:e}){const t=L.Z.getItem("user.loggedIn")||!1,o=L.Z.getItem("user.details")||{};e("setLoggedIn",t),e("setDetails",o)}function W({commit:e},t){t.name?e("setFormOne",t):t.email?e("setFormSecond",t):t.graduation_year&&e("setFormThird",t)}const X={namespaced:!0,getters:a,mutations:r,actions:n,state:j},G={approaches:[],approach:null};function ee(e){return e.approaches}function te(e){return e.approach}function oe(e,t){e.approaches=t}function ae(e,t){e.approach=t}function re(e,t){e.approaches.push(t)}function ne(e,t){let o=e.approaches.find((e=>e.id===t.id));o?o=t:e.approaches.push(t)}function ie(e,t){e.approaches=e.approaches.filter((e=>e.id!==t))}var se=o(7227);const ce="approach",pe={all(){return se.Z.get(ce)},show(e){return se.Z.get(`${ce}/${e}`)},store(e){return se.Z.post(ce,e)},delete(e){return se.Z["delete"](`${ce}/${e}`)},update(e,t){return se.Z.put(`${ce}/${e}`,t)}};function ue({commit:e}){pe.all().then((t=>{e("setApproaches",t.data.data)})).catch((e=>{console.log(e)}))}function de({commit:e},t){pe.show(t).then((t=>{e("setApproach",t.data)}))}function le({commit:e},t){pe.store(t).then((t=>{e("addApproach",t.data)}))}function he({commit:e},t,o){pe.update(t,o).then((t=>{e("updateApproach",t.data)}))}function me({commit:e},t){e("deleteApproach",t),K().get("http://127.0.0.1:8000/api/sanctum/csrf-cookie").then((()=>{K()["delete"]("http://127.0.0.1:8000/api/approach",{id:t}).then((e=>(console.log(e),!0)))}))}const fe={namespaced:!0,getters:i,mutations:s,actions:c,state:G},ge={categories:[],category:null};function ve(e){return e.categories}function ye(e){return e.category}function Ae(e,t){e.categories=t}function be(e,t){e.category=t}function Pe(e,t){e.categories.push(t)}function we(e,t){let o=e.categories.find((e=>e.id===t.id));o?o=t:e.categories.push(t)}function Te(e,t){e.categories=e.categories.filter((e=>e.id!==t))}const Ze="category",Ue={all(){return se.Z.get(Ze)},show(e){return se.Z.get(`${Ze}/${e}`)},store(e){return se.Z.post(Ze,e)},delete(e){return se.Z["delete"](`${Ze}/${e}`)},update(e,t){return se.Z.put(`${Ze}/${e}`,t)}};function $e({commit:e}){Ue.all().then((t=>{e("setCategories",t.data.data)})).catch((e=>{console.log(e)}))}function Oe({commit:e},t){Ue.show(t).then((t=>{e("setCategory",t.data)}))}function Ce({commit:e},t){Ue.store(t).then((t=>{e("addCategory",t.data)}))}function Ie({commit:e},t,o){Ue.update(t,o).then((t=>{e("updateCategory",t.data)}))}function Fe({commit:e},t){e("deleteCategory",t),Ue["delete"](t).then((e=>{console.log(e)}))}const ke={namespaced:!0,getters:p,mutations:u,actions:d,state:ge},Ne={notes:[],note:null};function De(e){return e.notes}function je(e){return e.note}function _e(e,t){e.notes=t}function Se(e,t){e.note=t}function Ee(e,t){e.notes.push(t)}function Le(e,t){let o=e.notes.find((e=>e.id===t.id));o?o=t:e.notes.push(t)}function qe(e,t){e.notes=e.notes.filter((e=>e.id!==t))}var xe=o(2605);const Je={namespaced:!0,getters:l,mutations:h,actions:xe,state:Ne},Me={profiles:[],profile:null};function Be(e){return e.profiles}function Re(e){return e.profile}function Ye(e,t){e.profiles=t}function He(e,t){e.profile=t}function Ke(e,t){e.profiles.push(t)}function ze(e,t){let o=e.profiles.find((e=>e.id===t.id));o?o=t:e.profiles.push(t)}function Qe(e,t){e.profiles=e.profiles.filter((e=>e.id!==t))}const Ve="profile",We={all(){return se.Z.get(Ve)},show(e){return se.Z.get(`${Ve}/${e}`)},store(e){return se.Z.post(Ve,e)},delete(e){return se.Z["delete"](`${Ve}/${e}`)},update(e,t){return se.Z.put(`${Ve}/${e}`,t)}};function Xe({commit:e}){We.all().then((t=>{e("setProfiles",t.data.data)})).catch((e=>{console.log(e)}))}function Ge({commit:e},t){We.show(t).then((t=>{e("setProfile",t.data)}))}function et({commit:e},t){We.store(t).then((t=>{e("addProfile",t.data)}))}function tt({commit:e},t,o){We.update(t,o).then((t=>{e("updateProfile",t.data)}))}function ot({commit:e},t){e("deleteProfile",t),We["delete"](t).then((e=>{console.log(e)}))}const at={namespaced:!0,getters:m,mutations:f,actions:g,state:Me},rt={topics:[],topic:null};function nt(e){return e.topics}function it(e){return e.topic}function st(e,t){e.topics=t}function ct(e,t){e.topic=t}function pt(e,t){e.topics.push(t)}function ut(e,t){let o=e.topics.find((e=>e.id===t.id));o?o=t:e.topics.push(t)}function dt(e,t){e.topics=e.topics.filter((e=>e.id!==t))}const lt="topic",ht={all(){return se.Z.get(lt)},show(e){return se.Z.get(`${lt}/${e}`)},store(e){return se.Z.post(lt,e)},delete(e){return se.Z["delete"](`${lt}/${e}`)},update(e,t){return se.Z.put(`${lt}/${e}`,t)}};function mt({commit:e}){ht.all().then((t=>{e("setTopics",t.data.data)})).catch((e=>{console.log(e)}))}function ft({commit:e},t){ht.show(t).then((t=>{e("setTopic",t.data)}))}function gt({commit:e},t){ht.store(t).then((t=>{e("addTopic",t.data)}))}function vt({commit:e},t,o){ht.update(t,o).then((t=>{e("updateTopic",t.data)}))}function yt({commit:e},t){e("deleteTopic",t),ht["delete"](t).then((e=>{console.log(e)}))}const At={namespaced:!0,getters:v,mutations:y,actions:A,state:rt},bt={accessTopicUsers:[],accessTopicUser:null};function Pt(e){return e.accessTopicUsers}function wt(e){return e.accessTopicUser}function Tt(e,t){e.accessTopicUsers=t}function Zt(e,t){e.AccessTopicUser=t}function Ut(e,t){e.accessTopicUsers.push(t)}function $t(e,t){let o=e.accessTopicUsers.find((e=>e.id===t.id));o?o=t:e.accessTopicUsers.push(t)}function Ot(e,t){e.accessTopicUsers=e.accessTopicUsers.filter((e=>e.id!==t))}const Ct="access-topic-user",It={all(){return se.Z.get(Ct)},show(e){return se.Z.get(`${Ct}/${e}`)},store(e){return se.Z.post(Ct,e)},delete(e){return se.Z["delete"](`${Ct}/${e}`)},update(e,t){return se.Z.put(`${Ct}/${e}`,t)}};function Ft({commit:e}){It.all().then((t=>{e("setAccessTopicUsers",t.data.data)})).catch((e=>{console.log(e)}))}function kt({commit:e},t){It.show(t).then((t=>{e("setAccessTopicUser",t.data)}))}function Nt({commit:e},t){It.store(t).then((t=>{e("addAccessTopicUser",t.data)}))}function Dt({commit:e},t,o){It.update(t,o).then((t=>{e("updateAccessTopicUser",t.data)}))}function jt({commit:e},t){e("deleteAccessTopicUser",t),It["delete"](t).then((e=>{console.log(e)}))}const _t={namespaced:!0,getters:b,mutations:P,actions:w,state:bt},St={favoriteApproachUsers:[],favoriteApproachUser:null};function Et(e){return e.favoriteApproachUsers}function Lt(e){return e.favoriteApproachUser}function qt(e,t){e.favoriteApproachUsers=t}function xt(e,t){e.favoriteApproachUser=t}function Jt(e,t){e.favoriteApproachUsers.push(t)}function Mt(e,t){let o=e.favoriteApproachUsers.find((e=>e.id===t.id));o?o=t:e.favoriteApproachUsers.push(t)}function Bt(e,t){e.favoriteApproachUsers=e.favoriteApproachUsers.filter((e=>e.id!==t))}const Rt="favorite-approach-user",Yt={all(){return se.Z.get(Rt)},show(e){return se.Z.get(`${Rt}/${e}`)},store(e){return se.Z.post(Rt,e)},delete(e){return se.Z["delete"](`${Rt}/${e}`)},update(e,t){return se.Z.put(`${Rt}/${e}`,t)}};function Ht({commit:e}){Yt.all().then((t=>{e("setFavoriteApproachUsers",t.data.data)})).catch((e=>{console.log(e)}))}function Kt({commit:e},t){Yt.show(t).then((t=>{e("setFavoriteApproachUser",t.data)}))}function zt({commit:e},t){Yt.store(t).then((t=>{e("addFavoriteApproachUser",t.data)}))}function Qt({commit:e},t,o){Yt.update(t,o).then((t=>{e("updateFavoriteApproachUser",t.data)}))}function Vt({commit:e},t){e("deleteFavoriteApproachUser",t),Yt["delete"](t).then((e=>{console.log(e)}))}const Wt={namespaced:!0,getters:T,mutations:Z,actions:U,state:St},Xt={occupationAreas:[],occupationArea:null};function Gt(e){return e.occupatioAreas}function eo(e){return e.occupationArea}function to(e,t){e.occupationAreas=t}function oo(e,t){e.occupationArea=t}function ao(e,t){e.occupationAreas.push(t)}function ro(e,t){let o=e.occupationAreas.find((e=>e.id===t.id));o?o=t:e.occupationAreas.push(t)}function no(e,t){e.occupationAreas=e.occupationAreas.filter((e=>e.id!==t))}const io="occupation-area",so={all(){return se.Z.get(io)},show(e){return se.Z.get(`${io}/${e}`)},store(e){return se.Z.post(io,e)},delete(e){return se.Z["delete"](`${io}/${e}`)},update(e,t){return se.Z.put(`${io}/${e}`,t)}};function co({commit:e}){so.all().then((t=>{e("setOccupationAreas",t.data.data)})).catch((e=>{console.log(e)}))}function po({commit:e},t){so.show(t).then((t=>{e("setOccupationArea",t.data)}))}function uo({commit:e},t){so.store(t).then((t=>{e("addOccupationArea",t.data)}))}function lo({commit:e},t,o){so.update(t,o).then((t=>{e("updateOccupationArea",t.data)}))}function ho({commit:e},t){e("deleteOccupationArea",t),so["delete"](t).then((e=>{console.log(e)}))}const mo={namespaced:!0,getters:$,mutations:O,actions:C,state:Xt},fo={profileTypes:[],profileType:null};function go(e){return e.profileTypes}function vo(e){return e.profileType}function yo(e,t){e.profileTypes=t}function Ao(e,t){e.profileType=t}function bo(e,t){e.profileTypes.push(t)}function Po(e,t){let o=e.profileTypes.find((e=>e.id===t.id));o?o=t:e.profileTypes.push(t)}function wo(e,t){e.profileTypes=e.profileTypes.filter((e=>e.id!==t))}const To="profile-type",Zo={all(){return se.Z.get(To)},show(e){return se.Z.get(`${To}/${e}`)},store(e){return se.Z.post(To,e)},delete(e){return se.Z["delete"](`${To}/${e}`)},update(e,t){return se.Z.put(`${To}/${e}`,t)}};function Uo({commit:e}){Zo.all().then((t=>{e("setProfileTypes",t.data.data)})).catch((e=>{console.log(e)}))}function $o({commit:e},t){Zo.show(t).then((t=>{e("setProfileType",t.data)}))}function Oo({commit:e},t){Zo.store(t).then((t=>{e("addProfileType",t.data)}))}function Co({commit:e},t,o){Zo.update(t,o).then((t=>{e("updateProfileType",t.data)}))}function Io({commit:e},t){e("deleteProfileType",t),Zo["delete"](t).then((e=>{console.log(e)}))}const Fo={namespaced:!0,getters:I,mutations:F,actions:k,state:fo},ko=(0,N.h)((()=>{const e=(0,D.MT)({modules:{user:X,approach:fe,category:ke,note:Je,profile:at,topic:At,accessTopicUser:_t,favoriteApproachUser:Wt,occupationArea:mo,profileType:Fo},strict:!1});return e}))},2605:(e,t,o)=>{o.r(t),o.d(t,{addNote:()=>c,deleteNote:()=>u,getApproaches:()=>i,getNote:()=>s,updateNote:()=>p});var a=o(7227);const r="note",n={all(){return a.Z.get(r)},show(e){return a.Z.get(`${r}/${e}`)},store(e){return a.Z.post(r,e)},delete(e){return a.Z["delete"](`${r}/${e}`)},update(e,t){return a.Z.put(`${r}/${e}`,t)}};function i({commit:e}){n.all().then((t=>{e("setNotes",t.data.data)})).catch((e=>{console.log(e)}))}function s({commit:e},t){n.show(t).then((t=>{e("setNote",t.data)}))}function c({commit:e},t){n.store(t).then((t=>{e("addNote",t.data)}))}function p({commit:e},t,o){n.update(t,o).then((t=>{e("updateNote",t.data)}))}function u({commit:e},t){e("deleteNote",t),n["delete"](t).then((e=>{console.log(e)}))}}},t={};function o(a){var r=t[a];if(void 0!==r)return r.exports;var n=t[a]={exports:{}};return e[a].call(n.exports,n,n.exports,o),n.exports}o.m=e,(()=>{var e=[];o.O=(t,a,r,n)=>{if(!a){var i=1/0;for(u=0;u<e.length;u++){for(var[a,r,n]=e[u],s=!0,c=0;c<a.length;c++)(!1&n||i>=n)&&Object.keys(o.O).every((e=>o.O[e](a[c])))?a.splice(c--,1):(s=!1,n<i&&(i=n));if(s){e.splice(u--,1);var p=r();void 0!==p&&(t=p)}}return t}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[a,r,n]}})(),(()=>{o.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return o.d(t,{a:t}),t}})(),(()=>{o.d=(e,t)=>{for(var a in t)o.o(t,a)&&!o.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}})(),(()=>{o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((t,a)=>(o.f[a](e,t),t)),[]))})(),(()=>{o.u=e=>"js/"+e+".js"})(),(()=>{o.miniCssF=e=>"css/"+({143:"app",736:"vendor"}[e]||e)+".css"})(),(()=>{o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="medicalbookapp:";o.l=(a,r,n,i)=>{if(e[a])e[a].push(r);else{var s,c;if(void 0!==n)for(var p=document.getElementsByTagName("script"),u=0;u<p.length;u++){var d=p[u];if(d.getAttribute("src")==a||d.getAttribute("data-webpack")==t+n){s=d;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,o.nc&&s.setAttribute("nonce",o.nc),s.setAttribute("data-webpack",t+n),s.src=a),e[a]=[r];var l=(t,o)=>{s.onerror=s.onload=null,clearTimeout(h);var r=e[a];if(delete e[a],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((e=>e(o))),t)return t(o)},h=setTimeout(l.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=l.bind(null,s.onerror),s.onload=l.bind(null,s.onload),c&&document.head.appendChild(s)}}})(),(()=>{o.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{o.p=""})(),(()=>{var e=(e,t,o,a)=>{var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var n=n=>{if(r.onerror=r.onload=null,"load"===n.type)o();else{var i=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=s,r.parentNode.removeChild(r),a(c)}};return r.onerror=r.onload=n,r.href=t,document.head.appendChild(r),r},t=(e,t)=>{for(var o=document.getElementsByTagName("link"),a=0;a<o.length;a++){var r=o[a],n=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(n===e||n===t))return r}var i=document.getElementsByTagName("style");for(a=0;a<i.length;a++){r=i[a],n=r.getAttribute("data-href");if(n===e||n===t)return r}},a=a=>new Promise(((r,n)=>{var i=o.miniCssF(a),s=o.p+i;if(t(i,s))return r();e(a,s,r,n)})),r={143:0};o.f.miniCss=(e,t)=>{var o={8:1,26:1,109:1,185:1,238:1,317:1,457:1,541:1,544:1,571:1,642:1,668:1,685:1,703:1,798:1,866:1,914:1,938:1,946:1};r[e]?t.push(r[e]):0!==r[e]&&o[e]&&t.push(r[e]=a(e).then((()=>{r[e]=0}),(t=>{throw delete r[e],t})))}})(),(()=>{var e={143:0};o.f.j=(t,a)=>{var r=o.o(e,t)?e[t]:void 0;if(0!==r)if(r)a.push(r[2]);else{var n=new Promise(((o,a)=>r=e[t]=[o,a]));a.push(r[2]=n);var i=o.p+o.u(t),s=new Error,c=a=>{if(o.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var n=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;s.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",s.name="ChunkLoadError",s.type=n,s.request=i,r[1](s)}};o.l(i,c,"chunk-"+t,t)}},o.O.j=t=>0===e[t];var t=(t,a)=>{var r,n,[i,s,c]=a,p=0;if(i.some((t=>0!==e[t]))){for(r in s)o.o(s,r)&&(o.m[r]=s[r]);if(c)var u=c(o)}for(t&&t(a);p<i.length;p++)n=i[p],o.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return o.O(u)},a=self["webpackChunkmedicalbookapp"]=self["webpackChunkmedicalbookapp"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var a=o.O(void 0,[736],(()=>o(119)));a=o.O(a)})();