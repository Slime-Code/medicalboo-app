/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 119:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(5363);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(71);
// EXTERNAL MODULE: ./node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js
var runtime_dom_esm_bundler = __webpack_require__(8880);
// EXTERNAL MODULE: ./node_modules/quasar/src/vue-plugin.js
var vue_plugin = __webpack_require__(9592);
// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(3673);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/App.vue?vue&type=template&id=1fb6c209

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_view = (0,runtime_core_esm_bundler/* resolveComponent */.up)("router-view");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_router_view);
}
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/App.vue?vue&type=script&lang=js

/* harmony default export */ const Appvue_type_script_lang_js = ((0,runtime_core_esm_bundler/* defineComponent */.aZ)({
  name: 'App'
}));
;// CONCATENATED MODULE: ./src/App.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(4260);
;// CONCATENATED MODULE: ./src/App.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(Appvue_type_script_lang_js, [['render',render]])

/* harmony default export */ const App = (__exports__);
// EXTERNAL MODULE: ./src/store/index.js + 57 modules
var src_store = __webpack_require__(7919);
// EXTERNAL MODULE: ./node_modules/quasar/wrappers/index.js
var wrappers = __webpack_require__(7083);
// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.esm-bundler.js
var vue_router_esm_bundler = __webpack_require__(9582);
// EXTERNAL MODULE: ./src/composebles/useAuthUser.js
var useAuthUser = __webpack_require__(4958);
;// CONCATENATED MODULE: ./src/router/routes.js

const routes = [{
  path: '',
  name: 'Init',
  component: () => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(185)]).then(__webpack_require__.bind(__webpack_require__, 4185))
}, {
  path: '/login',
  name: 'login',
  component: () => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(26)]).then(__webpack_require__.bind(__webpack_require__, 8026))
}, {
  path: '/',
  component: () => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(544)]).then(__webpack_require__.bind(__webpack_require__, 4544)),
  children: [{
    path: 'home',
    name: 'home',
    component: () => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(703)]).then(__webpack_require__.bind(__webpack_require__, 2703))
  }],
  meta: {
    requiresAuth: true
  }
}, {
  path: '/',
  component: () => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(544)]).then(__webpack_require__.bind(__webpack_require__, 4544)),
  children: [{
    path: 'profile',
    name: 'profile',
    component: () => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(642)]).then(__webpack_require__.bind(__webpack_require__, 642))
  }, {
    path: 'content/:key',
    name: 'content',
    component: () => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(924)]).then(__webpack_require__.bind(__webpack_require__, 1924))
  }, {
    path: 'editar-senha',
    name: 'editar-senha',
    component: () => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(798)]).then(__webpack_require__.bind(__webpack_require__, 3798))
  }, {
    path: 'meus-dados',
    name: 'meus-dados',
    component: () => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(685)]).then(__webpack_require__.bind(__webpack_require__, 7685))
  }, {
    path: 'explore',
    name: 'explore',
    component: () => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(766)]).then(__webpack_require__.bind(__webpack_require__, 6766))
  }, {
    path: 'favorite',
    name: 'favorite',
    component: () => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(668)]).then(__webpack_require__.bind(__webpack_require__, 2668))
  }, {
    path: '/approach/:id',
    name: 'approach',
    component: () => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(946)]).then(__webpack_require__.bind(__webpack_require__, 1946))
  }, {
    path: 'note',
    name: 'note',
    component: () => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(254)]).then(__webpack_require__.bind(__webpack_require__, 8254))
  }, {
    path: 'accesso-por-capitulo',
    name: 'accesso-por-capitulo',
    component: () => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(317)]).then(__webpack_require__.bind(__webpack_require__, 317))
  }],
  meta: {
    requiresAuth: true
  }
}, {
  path: '/',
  component: () => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(448)]).then(__webpack_require__.bind(__webpack_require__, 4946)),
  children: [{
    path: '/approach-detail/:id',
    name: 'approach-detail',
    component: () => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(541)]).then(__webpack_require__.bind(__webpack_require__, 5541))
  }],
  meta: {
    requaresAuth: true
  }
}, {
  path: '/codigo-acesso',
  name: 'codigo-acesso',
  component: () => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(914)]).then(__webpack_require__.bind(__webpack_require__, 3914)),
  meta: {
    requaresAuth: true
  }
}, {
  path: '/register',
  component: () => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(159)]).then(__webpack_require__.bind(__webpack_require__, 6159)),
  children: [{
    path: '',
    name: 'register',
    component: () => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(503)]).then(__webpack_require__.bind(__webpack_require__, 503))
  }, {
    path: '/second',
    name: 'second',
    component: () => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(571)]).then(__webpack_require__.bind(__webpack_require__, 7571))
  }, {
    path: '/third',
    name: 'third',
    component: () => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(238)]).then(__webpack_require__.bind(__webpack_require__, 2238))
  }, {
    path: '/concluido',
    name: 'concluido',
    component: () => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(866)]).then(__webpack_require__.bind(__webpack_require__, 7866))
  }, {
    path: '/email-confirmation',
    name: 'email-confirmation',
    component: () => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(823)]).then(__webpack_require__.bind(__webpack_require__, 2823))
  }, {
    path: '/registerPage',
    name: 'registerPage',
    component: () => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(8)]).then(__webpack_require__.bind(__webpack_require__, 7008))
  }]
}, {
  path: '/',
  component: () => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(109)]).then(__webpack_require__.bind(__webpack_require__, 5109)),
  children: [{
    path: '',
    name: 'prime',
    component: () => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(881)]).then(__webpack_require__.bind(__webpack_require__, 9881))
  }],
  meta: {
    requiresAuth: true
  }
}, {
  path: '/admin',
  component: () => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(724)]).then(__webpack_require__.bind(__webpack_require__, 6724)),
  children: [{
    path: '',
    name: 'inicio',
    component: () => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(457)]).then(__webpack_require__.bind(__webpack_require__, 1457))
  }, {
    path: 'painel',
    name: 'painel',
    component: () => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(457)]).then(__webpack_require__.bind(__webpack_require__, 1457))
  }, {
    path: '/admin/approaches',
    name: 'approaches',
    component: () => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(383)]).then(__webpack_require__.bind(__webpack_require__, 8383))
  }, {
    path: '/admin/categories',
    name: 'categories',
    component: () => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(455)]).then(__webpack_require__.bind(__webpack_require__, 7455))
  }, {
    path: '/admin/topics',
    name: 'topics',
    component: () => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(1)]).then(__webpack_require__.bind(__webpack_require__, 5001))
  }, {
    path: '/admin/users',
    name: 'users',
    component: () => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(505)]).then(__webpack_require__.bind(__webpack_require__, 6505))
  }, {
    path: '/admin/colaboradores',
    name: 'admin',
    component: () => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(563)]).then(__webpack_require__.bind(__webpack_require__, 6563))
  }, {
    path: '/admin/tipos-De-Abordagens',
    name: 'tipos-De-Abordagens',
    component: () => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(106)]).then(__webpack_require__.bind(__webpack_require__, 4106))
  }, {
    path: '/admin/occupation-areas',
    name: 'occupation-areas',
    component: () => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(938)]).then(__webpack_require__.bind(__webpack_require__, 8938))
  }],
  meta: {
    requaresAuth: true
  }
}, // Always leave this as last one,
// but you can also remove it
{
  path: '/:catchAll(.*)*',
  component: () => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(436)]).then(__webpack_require__.bind(__webpack_require__, 5436))
}];
/* harmony default export */ const router_routes = (routes);
;// CONCATENATED MODULE: ./src/router/index.js





/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

/* harmony default export */ const src_router = ((0,wrappers/* route */.BC)(() => {
  const createHistory =  false ? 0 :  false ? 0 : vue_router_esm_bundler/* createWebHashHistory */.r5;
  const Router = (0,vue_router_esm_bundler/* createRouter */.p7)({
    scrollBehavior: () => ({
      left: 0,
      top: 0
    }),
    routes: router_routes,
    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory( false ? 0 : "")
  }); // eslint-disable-next-line consistent-return

  Router.beforeEach(to => {
    if (to.fullPath === '/admin') {
      return {
        name: 'login',
        query: {
          access: 'admin'
        }
      };
    }

    const {
      user
    } = (0,useAuthUser/* default */.Z)();

    if (to.hash.includes('type=recovery') && to.name !== 'reset-password') {
      const accessToken = to.hash.split('&')[0];
      const token = accessToken.replace('#acess_token=', '');
      return {
        name: 'reset-password',
        query: {
          token
        }
      };
    }

    const isLoggedIn = !!user.value;

    if (!isLoggedIn && to.meta.requiresAuth && !Object.keys(to.query).includes('fromEmail')) {
      return {
        name: 'login'
      };
    }
  });
  return Router;
}));
// EXTERNAL MODULE: ./src-capacitor/node_modules/@capacitor/core/dist/esm/index.js + 24 modules
var esm = __webpack_require__(2345);
;// CONCATENATED MODULE: ./.quasar/app.js


/**
 * THIS FILE IS GENERATED AUTOMATICALLY.
 * DO NOT EDIT.
 *
 * You are probably looking on adding startup/initialization code.
 * Use "quasar new boot <name>" and add it there.
 * One boot file per concern. Then reference the file(s) in quasar.conf.js > boot:
 * boot: ['file', ...] // do not add ".js" extension to it.
 *
 * Boot files are your "main.js"
 **/
;




const {
  SplashScreen
} = esm/* Plugins */.Vn;

const RootComponent = (0,runtime_core_esm_bundler/* defineComponent */.aZ)({
  name: 'AppWrapper',

  setup(props) {
    (0,runtime_core_esm_bundler/* onMounted */.bv)(() => {
      SplashScreen.hide();
    });
    return () => (0,runtime_core_esm_bundler.h)(App, props);
  }

});
/* harmony default export */ async function app(createAppFn, quasarUserOptions) {
  // create store and router instances
  const store = typeof src_store["default"] === 'function' ? await (0,src_store["default"])({}) : src_store["default"]; // obtain Vuex injection key in case we use TypeScript

  const {
    storeKey
  } = await Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 7919));
  const router = typeof src_router === 'function' ? await src_router({
    store
  }) : src_router; // make router instance available in store

  store.$router = router; // Create the app instance.
  // Here we inject into it the Quasar UI, the router & possibly the store.

  const app = createAppFn(RootComponent);
  app.config.devtools = true;
  app.use(vue_plugin/* default */.Z, quasarUserOptions);
  app.config.globalProperties.$q.capacitor = window.Capacitor; // Expose the app, the router and the store.
  // Note that we are not mounting the app here, since bootstrapping will be
  // different depending on whether we are in a browser or on the server.

  return {
    app,
    store,
    storeKey,
    router
  };
}
// EXTERNAL MODULE: ./node_modules/quasar/lang/pt.js
var pt = __webpack_require__(3869);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/dialog/QDialog.js
var QDialog = __webpack_require__(6778);
// EXTERNAL MODULE: ./node_modules/quasar/src/plugins/LocalStorage.js + 1 modules
var LocalStorage = __webpack_require__(6395);
// EXTERNAL MODULE: ./node_modules/quasar/src/plugins/Loading.js
var Loading = __webpack_require__(6249);
// EXTERNAL MODULE: ./node_modules/quasar/src/plugins/Notify.js
var Notify = __webpack_require__(4434);
// EXTERNAL MODULE: ./node_modules/quasar/src/plugins/Dialog.js + 2 modules
var Dialog = __webpack_require__(1417);
;// CONCATENATED MODULE: ./.quasar/quasar-user-options.js
/**
 * THIS FILE IS GENERATED AUTOMATICALLY.
 * DO NOT EDIT.
 *
 * You are probably looking on adding startup/initialization code.
 * Use "quasar new boot <name>" and add it there.
 * One boot file per concern. Then reference the file(s) in quasar.conf.js > boot:
 * boot: ['file', ...] // do not add ".js" extension to it.
 *
 * Boot files are your "main.js"
 **/

;
/* harmony default export */ const quasar_user_options = ({
  config: {},
  lang: pt/* default */.Z,
  components: {
    QDialog: QDialog/* default */.Z
  },
  plugins: {
    LocalStorage: LocalStorage/* default */.Z,
    Loading: Loading/* default */.Z,
    Notify: Notify/* default */.Z,
    Dialog: Dialog/* default */.Z
  }
});
;// CONCATENATED MODULE: ./.quasar/client-entry.js



/**
 * THIS FILE IS GENERATED AUTOMATICALLY.
 * DO NOT EDIT.
 *
 * You are probably looking on adding startup/initialization code.
 * Use "quasar new boot <name>" and add it there.
 * One boot file per concern. Then reference the file(s) in quasar.conf.js > boot:
 * boot: ['file', ...] // do not add ".js" extension to it.
 *
 * Boot files are your "main.js"
 **/




 // We load Quasar stylesheet file





const publicPath = ``;

async function start({
  app,
  router,
  store,
  storeKey
}, bootFiles) {
  let hasRedirected = false;

  const getRedirectUrl = url => {
    try {
      return router.resolve(url).href;
    } catch (err) {}

    return Object(url) === url ? null : url;
  };

  const redirect = url => {
    hasRedirected = true;

    if (typeof url === 'string' && /^https?:\/\//.test(url)) {
      window.location.href = url;
      return;
    }

    const href = getRedirectUrl(url); // continue if we didn't fail to resolve the url

    if (href !== null) {
      window.location.href = href;
      window.location.reload();
    }
  };

  const urlPath = window.location.href.replace(window.location.origin, '');

  for (let i = 0; hasRedirected === false && i < bootFiles.length; i++) {
    try {
      await bootFiles[i]({
        app,
        router,
        store,
        ssrContext: null,
        redirect,
        urlPath,
        publicPath
      });
    } catch (err) {
      if (err && err.url) {
        redirect(err.url);
        return;
      }

      console.error('[Quasar] boot error:', err);
      return;
    }
  }

  if (hasRedirected === true) {
    return;
  }

  app.use(router);
  app.use(store, storeKey);
  app.mount('#q-app');
}

app(runtime_dom_esm_bundler/* createApp */.ri, quasar_user_options).then(app => {
  return Promise.all([Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 2421)), Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 5474))]).then(bootFiles => {
    const boot = bootFiles.map(entry => entry.default).filter(entry => typeof entry === 'function');
    start(app, boot);
  });
});

/***/ }),

/***/ 7227:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const Api = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: 'http://127.0.0.1:8000/api'
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Api);

/***/ }),

/***/ 5474:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "api": () => (/* binding */ api),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var quasar_wrappers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7083);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);

 // Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)

const api = axios__WEBPACK_IMPORTED_MODULE_1___default().create({
  baseURL: 'https://api.example.com'
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,quasar_wrappers__WEBPACK_IMPORTED_MODULE_0__/* .boot */ .xr)(({
  app
}) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api
  (axios__WEBPACK_IMPORTED_MODULE_1___default().defaults.withCredentials) = true;
  app.config.globalProperties.$axios = (axios__WEBPACK_IMPORTED_MODULE_1___default()); // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api; // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
}));


/***/ }),

/***/ 2421:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useSupabase)
/* harmony export */ });
/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4436);
/* harmony import */ var src_composebles_useAuthUser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4958);
/* eslint-disable */


const supabaseUrl = 'https://bedvvcrqehulfocxohvt.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJlZHZ2Y3JxZWh1bGZvY3hvaHZ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDY1OTIwNjQsImV4cCI6MTk2MjE2ODA2NH0.TlR14ypEFye2cP7yJ67jRn5uYIn1vbq0M0j3jKFyINw';
const supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_1__/* .createClient */ .eI)(supabaseUrl, supabaseKey); // se houver alguma modificação no estado do usuário logado:

supabase.auth.onAuthStateChange((event, session) => {
  const {
    user
  } = (0,src_composebles_useAuthUser__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
  user.value = (session === null || session === void 0 ? void 0 : session.user) || null;
});
function useSupabase() {
  return {
    supabase
  };
}

/***/ }),

/***/ 4958:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useAuthUser)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1959);
/* harmony import */ var boot_supabase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2421);
/* eslint-disable */


const user = (0,vue__WEBPACK_IMPORTED_MODULE_1__/* .ref */ .iH)(null);
function useAuthUser() {
  const {
    supabase
  } = (0,boot_supabase__WEBPACK_IMPORTED_MODULE_0__["default"])();

  const login = async ({
    email,
    password
  }) => {
    const {
      user,
      error
    } = await supabase.auth.signIn({
      email,
      password
    });
    if (error) throw error;
    return user;
  };

  const loginWithSociaProvider = async provider => {
    const {
      user,
      error
    } = await supabase.auth.update(provider);
    if (error) throw error;
    return user;
  };

  const logout = async () => {
    const {
      error
    } = await supabase.auth.signOut();
    if (error) throw error;
  };

  const isLoggedIn = async () => {
    return !!user.value;
  };

  const register = async ({
    email,
    password,
    ...meta
  }) => {
    const {
      user,
      error
    } = await supabase.auth.signUp({
      email,
      password
    }, {
      data: meta,
      redirectTo: `${window.location.origin}/login`
    });
    if (error) throw error;
    return user;
  };

  const updated = async data => {
    const {
      user,
      error
    } = await supabase.auth.update(data);
    if (error) throw error;
    return user;
  };

  const sendPasswordRestEmail = async email => {
    const {
      user,
      error
    } = await supabase.auth.api.sendPasswordRestEmail(email);
    if (error) throw error;
    return user;
  };

  const resetPassword = async (accessToken, newPassword) => {
    const {
      user,
      error
    } = await supabase.auth.api.updateUser(accessToken, {
      password: newPassword
    });
    if (error) throw error;
    return user;
  };

  return {
    user,
    login,
    loginWithSociaProvider,
    logout,
    isLoggedIn,
    register,
    updated,
    sendPasswordRestEmail,
    resetPassword
  };
}

/***/ }),

/***/ 4605:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ showSuccessNotification),
/* harmony export */   "s": () => (/* binding */ showErrorNotification)
/* harmony export */ });
/* harmony import */ var quasar_src_plugins_Loading_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6249);
/* harmony import */ var quasar_src_plugins_Notify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4434);
;

function showErrorNotification(errorMessage) {
  quasar_src_plugins_Loading_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"].hide */ .Z.hide();
  quasar_src_plugins_Notify_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"].create */ .Z.create({
    color: 'negative',
    position: 'top',
    message: errorMessage,
    icon: 'report_problem'
  });
}

function showSuccessNotification(messageSuccess) {
  quasar_src_plugins_Loading_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"].hide */ .Z.hide();
  quasar_src_plugins_Notify_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"].create */ .Z.create({
    color: 'green-5',
    textColor: 'white',
    icon: 'done',
    position: 'top',
    message: messageSuccess
  });
}



/***/ }),

/***/ 7919:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ store)
});

// NAMESPACE OBJECT: ./src/store/user/getters.js
var getters_namespaceObject = {};
__webpack_require__.r(getters_namespaceObject);
__webpack_require__.d(getters_namespaceObject, {
  "getData": () => (getData),
  "getUserDetails": () => (getUserDetails),
  "getUserPermission": () => (getUserPermission)
});

// NAMESPACE OBJECT: ./src/store/user/mutations.js
var mutations_namespaceObject = {};
__webpack_require__.r(mutations_namespaceObject);
__webpack_require__.d(mutations_namespaceObject, {
  "setDetails": () => (setDetails),
  "setFormOne": () => (setFormOne),
  "setFormSecond": () => (setFormSecond),
  "setFormThird": () => (setFormThird),
  "setLoggedIn": () => (setLoggedIn)
});

// NAMESPACE OBJECT: ./src/store/user/actions.js
var actions_namespaceObject = {};
__webpack_require__.r(actions_namespaceObject);
__webpack_require__.d(actions_namespaceObject, {
  "getState": () => (getState),
  "login": () => (login),
  "setDataForm": () => (setDataForm)
});

// NAMESPACE OBJECT: ./src/store/approach/getters.js
var approach_getters_namespaceObject = {};
__webpack_require__.r(approach_getters_namespaceObject);
__webpack_require__.d(approach_getters_namespaceObject, {
  "approach": () => (approach),
  "approaches": () => (approaches)
});

// NAMESPACE OBJECT: ./src/store/approach/mutations.js
var approach_mutations_namespaceObject = {};
__webpack_require__.r(approach_mutations_namespaceObject);
__webpack_require__.d(approach_mutations_namespaceObject, {
  "addApproach": () => (addApproach),
  "deleteApproach": () => (deleteApproach),
  "setApproach": () => (setApproach),
  "setApproaches": () => (setApproaches),
  "updateApproach": () => (updateApproach)
});

// NAMESPACE OBJECT: ./src/store/approach/actions.js
var approach_actions_namespaceObject = {};
__webpack_require__.r(approach_actions_namespaceObject);
__webpack_require__.d(approach_actions_namespaceObject, {
  "addApproach": () => (actions_addApproach),
  "deleteApproach": () => (actions_deleteApproach),
  "getApproach": () => (getApproach),
  "getApproaches": () => (getApproaches),
  "updateApproach": () => (actions_updateApproach)
});

// NAMESPACE OBJECT: ./src/store/category/getters.js
var category_getters_namespaceObject = {};
__webpack_require__.r(category_getters_namespaceObject);
__webpack_require__.d(category_getters_namespaceObject, {
  "categories": () => (categories),
  "category": () => (category)
});

// NAMESPACE OBJECT: ./src/store/category/mutations.js
var category_mutations_namespaceObject = {};
__webpack_require__.r(category_mutations_namespaceObject);
__webpack_require__.d(category_mutations_namespaceObject, {
  "addCategory": () => (addCategory),
  "deleteCategory": () => (deleteCategory),
  "setCategories": () => (setCategories),
  "setCategory": () => (setCategory),
  "updateCategory": () => (updateCategory)
});

// NAMESPACE OBJECT: ./src/store/category/actions.js
var category_actions_namespaceObject = {};
__webpack_require__.r(category_actions_namespaceObject);
__webpack_require__.d(category_actions_namespaceObject, {
  "addCategory": () => (actions_addCategory),
  "deleteCategory": () => (actions_deleteCategory),
  "getCategories": () => (getCategories),
  "getCategory": () => (getCategory),
  "updateCategory": () => (actions_updateCategory)
});

// NAMESPACE OBJECT: ./src/store/note/getters.js
var note_getters_namespaceObject = {};
__webpack_require__.r(note_getters_namespaceObject);
__webpack_require__.d(note_getters_namespaceObject, {
  "note": () => (note),
  "notes": () => (notes)
});

// NAMESPACE OBJECT: ./src/store/note/mutations.js
var note_mutations_namespaceObject = {};
__webpack_require__.r(note_mutations_namespaceObject);
__webpack_require__.d(note_mutations_namespaceObject, {
  "addNote": () => (addNote),
  "deleteNote": () => (deleteNote),
  "setNote": () => (setNote),
  "setNotes": () => (setNotes),
  "updateNote": () => (updateNote)
});

// NAMESPACE OBJECT: ./src/store/profile/getters.js
var profile_getters_namespaceObject = {};
__webpack_require__.r(profile_getters_namespaceObject);
__webpack_require__.d(profile_getters_namespaceObject, {
  "profile": () => (profile),
  "profiles": () => (profiles)
});

// NAMESPACE OBJECT: ./src/store/profile/mutations.js
var profile_mutations_namespaceObject = {};
__webpack_require__.r(profile_mutations_namespaceObject);
__webpack_require__.d(profile_mutations_namespaceObject, {
  "addProfile": () => (addProfile),
  "deleteProfile": () => (deleteProfile),
  "setProfile": () => (setProfile),
  "setProfiles": () => (setProfiles),
  "updateProfile": () => (updateProfile)
});

// NAMESPACE OBJECT: ./src/store/profile/actions.js
var profile_actions_namespaceObject = {};
__webpack_require__.r(profile_actions_namespaceObject);
__webpack_require__.d(profile_actions_namespaceObject, {
  "addProfile": () => (actions_addProfile),
  "deleteProfile": () => (actions_deleteProfile),
  "getProfile": () => (getProfile),
  "getProfiles": () => (getProfiles),
  "updateProfile": () => (actions_updateProfile)
});

// NAMESPACE OBJECT: ./src/store/topic/getters.js
var topic_getters_namespaceObject = {};
__webpack_require__.r(topic_getters_namespaceObject);
__webpack_require__.d(topic_getters_namespaceObject, {
  "topic": () => (topic),
  "topics": () => (topics)
});

// NAMESPACE OBJECT: ./src/store/topic/mutations.js
var topic_mutations_namespaceObject = {};
__webpack_require__.r(topic_mutations_namespaceObject);
__webpack_require__.d(topic_mutations_namespaceObject, {
  "addTopic": () => (addTopic),
  "deleteTopic": () => (deleteTopic),
  "setTopic": () => (setTopic),
  "setTopics": () => (setTopics),
  "updateTopic": () => (updateTopic)
});

// NAMESPACE OBJECT: ./src/store/topic/actions.js
var topic_actions_namespaceObject = {};
__webpack_require__.r(topic_actions_namespaceObject);
__webpack_require__.d(topic_actions_namespaceObject, {
  "addTopic": () => (actions_addTopic),
  "deleteTopic": () => (actions_deleteTopic),
  "getApproach": () => (actions_getApproach),
  "getApproaches": () => (actions_getApproaches),
  "updateTopic": () => (actions_updateTopic)
});

// NAMESPACE OBJECT: ./src/store/access-topic-user/getters.js
var access_topic_user_getters_namespaceObject = {};
__webpack_require__.r(access_topic_user_getters_namespaceObject);
__webpack_require__.d(access_topic_user_getters_namespaceObject, {
  "accessTopicUser": () => (accessTopicUser),
  "accessTopicUsers": () => (accessTopicUsers)
});

// NAMESPACE OBJECT: ./src/store/access-topic-user/mutations.js
var access_topic_user_mutations_namespaceObject = {};
__webpack_require__.r(access_topic_user_mutations_namespaceObject);
__webpack_require__.d(access_topic_user_mutations_namespaceObject, {
  "addAccessTopicUser": () => (addAccessTopicUser),
  "deleteAccessTopicUser": () => (deleteAccessTopicUser),
  "setAccessTopicUser": () => (setAccessTopicUser),
  "setAccessTopicUsers": () => (setAccessTopicUsers),
  "updateAccessTopicUser": () => (updateAccessTopicUser)
});

// NAMESPACE OBJECT: ./src/store/access-topic-user/actions.js
var access_topic_user_actions_namespaceObject = {};
__webpack_require__.r(access_topic_user_actions_namespaceObject);
__webpack_require__.d(access_topic_user_actions_namespaceObject, {
  "addAccessTopicUser": () => (actions_addAccessTopicUser),
  "deleteApproach": () => (access_topic_user_actions_deleteApproach),
  "getAccessTopicUser": () => (getAccessTopicUser),
  "getAccessTopicUsers": () => (getAccessTopicUsers),
  "updateAccessTopicUser": () => (actions_updateAccessTopicUser)
});

// NAMESPACE OBJECT: ./src/store/favorite-approach-user/getters.js
var favorite_approach_user_getters_namespaceObject = {};
__webpack_require__.r(favorite_approach_user_getters_namespaceObject);
__webpack_require__.d(favorite_approach_user_getters_namespaceObject, {
  "favoriteApproachUser": () => (favoriteApproachUser),
  "favoriteApproachUsers": () => (favoriteApproachUsers)
});

// NAMESPACE OBJECT: ./src/store/favorite-approach-user/mutations.js
var favorite_approach_user_mutations_namespaceObject = {};
__webpack_require__.r(favorite_approach_user_mutations_namespaceObject);
__webpack_require__.d(favorite_approach_user_mutations_namespaceObject, {
  "addFavoriteApproachUser": () => (addFavoriteApproachUser),
  "deleteFavoriteApproachUser": () => (deleteFavoriteApproachUser),
  "setFavoriteApproachUser": () => (setFavoriteApproachUser),
  "setFavoriteApproachUsers": () => (setFavoriteApproachUsers),
  "updateFavoriteApproachUser": () => (updateFavoriteApproachUser)
});

// NAMESPACE OBJECT: ./src/store/favorite-approach-user/actions.js
var favorite_approach_user_actions_namespaceObject = {};
__webpack_require__.r(favorite_approach_user_actions_namespaceObject);
__webpack_require__.d(favorite_approach_user_actions_namespaceObject, {
  "addFavoriteApproachUser": () => (actions_addFavoriteApproachUser),
  "deleteFavoriteApproachUser": () => (actions_deleteFavoriteApproachUser),
  "getFavoriteApproachUser": () => (getFavoriteApproachUser),
  "getFavoriteApproachUsers": () => (getFavoriteApproachUsers),
  "updateFavoriteApproachUser": () => (actions_updateFavoriteApproachUser)
});

// NAMESPACE OBJECT: ./src/store/occupation-area/getters.js
var occupation_area_getters_namespaceObject = {};
__webpack_require__.r(occupation_area_getters_namespaceObject);
__webpack_require__.d(occupation_area_getters_namespaceObject, {
  "occupatioAreas": () => (occupatioAreas),
  "occupationArea": () => (occupationArea)
});

// NAMESPACE OBJECT: ./src/store/occupation-area/mutations.js
var occupation_area_mutations_namespaceObject = {};
__webpack_require__.r(occupation_area_mutations_namespaceObject);
__webpack_require__.d(occupation_area_mutations_namespaceObject, {
  "addOccupationArea": () => (addOccupationArea),
  "deleteOccupationArea": () => (deleteOccupationArea),
  "setOccupationArea": () => (setOccupationArea),
  "setOccupationAreas": () => (setOccupationAreas),
  "updateOccupationArea": () => (updateOccupationArea)
});

// NAMESPACE OBJECT: ./src/store/occupation-area/actions.js
var occupation_area_actions_namespaceObject = {};
__webpack_require__.r(occupation_area_actions_namespaceObject);
__webpack_require__.d(occupation_area_actions_namespaceObject, {
  "addOccupationArea": () => (actions_addOccupationArea),
  "deleteOccupationArea": () => (actions_deleteOccupationArea),
  "getOccupationArea": () => (getOccupationArea),
  "getOccupationAreas": () => (getOccupationAreas),
  "updateOccupationArea": () => (actions_updateOccupationArea)
});

// NAMESPACE OBJECT: ./src/store/profile-type/getters.js
var profile_type_getters_namespaceObject = {};
__webpack_require__.r(profile_type_getters_namespaceObject);
__webpack_require__.d(profile_type_getters_namespaceObject, {
  "profileType": () => (profileType),
  "profileTypes": () => (profileTypes)
});

// NAMESPACE OBJECT: ./src/store/profile-type/mutations.js
var profile_type_mutations_namespaceObject = {};
__webpack_require__.r(profile_type_mutations_namespaceObject);
__webpack_require__.d(profile_type_mutations_namespaceObject, {
  "addProfileType": () => (addProfileType),
  "deleteProfileType": () => (deleteProfileType),
  "setProfileType": () => (setProfileType),
  "setProfileTypes": () => (setProfileTypes),
  "updateProfileType": () => (updateProfileType)
});

// NAMESPACE OBJECT: ./src/store/profile-type/actions.js
var profile_type_actions_namespaceObject = {};
__webpack_require__.r(profile_type_actions_namespaceObject);
__webpack_require__.d(profile_type_actions_namespaceObject, {
  "addProfileType": () => (actions_addProfileType),
  "deleteProfileType": () => (actions_deleteProfileType),
  "getProfileType": () => (getProfileType),
  "getProfileTypes": () => (getProfileTypes),
  "updateProfileType": () => (actions_updateProfileType)
});

// EXTERNAL MODULE: ./node_modules/quasar/wrappers/index.js
var wrappers = __webpack_require__(7083);
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm-bundler.js
var vuex_esm_bundler = __webpack_require__(5250);
;// CONCATENATED MODULE: ./src/store/user/state.js
// eslint-disable-next-line func-names
/* harmony default export */ function state() {
  return {
    loggedIn: false,
    permissions: [],
    details: {},
    formData: {
      // user_id: 0,
      name: '',
      email: '',
      birthday: '',
      cpf: '',
      nationality: '',
      graduation_year: '',
      profile_type_id: 1,
      occupation_area: '',
      password: ''
    }
  };
}
;// CONCATENATED MODULE: ./src/store/user/getters.js
function getUserPermission(state) {
  return state.permissions;
}
function getUserDetails(state) {
  return state.details;
}
function getData(state) {
  return state.formData;
}
// EXTERNAL MODULE: ./node_modules/quasar/src/plugins/LocalStorage.js + 1 modules
var LocalStorage = __webpack_require__(6395);
;// CONCATENATED MODULE: ./src/store/user/mutations.js
/* eslint-disable */
;

function setLoggedIn(state, value) {
  state.loggedIn = value;
  LocalStorage/* default.set */.Z.set('user.loggedIn', value);
}

function setDetails(state, payload) {
  state.details = payload;
  LocalStorage/* default.set */.Z.set('user.details', payload);
}

function setFormOne(state, payload) {
  state.formData.name = payload.name;
  state.formData.birthday = payload.birthday;
  state.formData.cpf = payload.cpf;
  state.formData.nationality = payload.nationality;
  state.formData.profile_type_id = payload.profile_type_id;
}

function setFormSecond(state, payload) {
  state.formData.email = payload.email;
  state.formData.password = payload.password;
}

function setFormThird(state, payload) {
  state.formData.occupation_area = payload.occupation_area;
  state.formData.graduation_year = payload.graduation_year;
}


// EXTERNAL MODULE: ./node_modules/quasar/src/plugins/Loading.js
var Loading = __webpack_require__(6249);
// EXTERNAL MODULE: ./src/functions/functionShowNotifications.js
var functionShowNotifications = __webpack_require__(4605);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(52);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
// EXTERNAL MODULE: ./src/boot/axios.js
var boot_axios = __webpack_require__(5474);
;// CONCATENATED MODULE: ./src/store/user/actions.js
;




function login({
  commit
}, payload) {
  Loading/* default.show */.Z.show();
  axios_default().get('http://127.0.0.1:8000/api/sanctum/csrf-cookie').then(() => {
    axios_default().post('http://127.0.0.1:8000/api/login', {
      email: payload.email,
      password: payload.password
    }).then(response1 => {
      commit('setLoggedIn', true); // console.log(response1.data.user);

      const userType = response1.data.user.type;
      boot_axios.api.defaults.headers.common.Authorization = `Bearer ${response1.data.token}`;
      axios_default().get('http://127.0.0.1:8000/api/user').then(response => {
        commit('setDetails', response.data);
        (0,functionShowNotifications/* showSuccessNotification */.L)('Seja bem vindo!');

        if (userType === 'admin') {
          this.$router.push('/admin');
        } else {
          this.$router.push('/home');
        }
      }).catch(() => {
        (0,functionShowNotifications/* showErrorNotification */.s)('Falha ao carregar detalhes do usuário!');
        commit('setLoggedIn', false);
      });
    }).catch(() => {
      (0,functionShowNotifications/* showErrorNotification */.s)('Palavra-passe ou nome de usuário incorrectos');
    });
  }).catch(() => {
    (0,functionShowNotifications/* showErrorNotification */.s)('Algo correu mal, tente novamente mais tarde');
  });
  return true;
}

function getState({
  commit
}) {
  const loggedIn = LocalStorage/* default.getItem */.Z.getItem('user.loggedIn') || false;
  const details = LocalStorage/* default.getItem */.Z.getItem('user.details') || {};
  commit('setLoggedIn', loggedIn);
  commit('setDetails', details);
}
/*
function register() {
  // -----------
}
*/


function setDataForm({
  commit
}, payload) {
  if (payload.name) {
    commit('setFormOne', payload);
  } else if (payload.email) {
    commit('setFormSecond', payload);
  } else if (payload.graduation_year) {
    commit('setFormThird', payload);
  }
}


;// CONCATENATED MODULE: ./src/store/user/index.js




/* harmony default export */ const user = ({
  namespaced: true,
  getters: getters_namespaceObject,
  mutations: mutations_namespaceObject,
  actions: actions_namespaceObject,
  state: state
});
;// CONCATENATED MODULE: ./src/store/approach/state.js
/* harmony default export */ const approach_state = ({
  approaches: [],
  approach: null
});
;// CONCATENATED MODULE: ./src/store/approach/getters.js
function approaches(state) {
  return state.approaches;
}
function approach(state) {
  return state.approach;
}
;// CONCATENATED MODULE: ./src/store/approach/mutations.js
function setApproaches(state, approaches) {
  state.approaches = approaches;
}
function setApproach(state, approach) {
  state.approach = approach;
}
function addApproach(state, approach) {
  state.approaches.push(approach);
}
function updateApproach(state, approach) {
  let approachInState = state.approaches.find(item => item.id === approach.id);

  if (approachInState) {
    approachInState = approach;
    return;
  }

  state.approaches.push(approach);
}
function deleteApproach(state, approachId) {
  state.approaches = state.approaches.filter(item => item.id !== approachId);
}
// EXTERNAL MODULE: ./src/api/Api.js
var Api = __webpack_require__(7227);
;// CONCATENATED MODULE: ./src/api/Approach.js

const ENDPOINT = 'approach';
/* harmony default export */ const Approach = ({
  all() {
    return Api/* default.get */.Z.get(ENDPOINT);
  },

  show(id) {
    return Api/* default.get */.Z.get(`${ENDPOINT}/${id}`);
  },

  store(data) {
    return Api/* default.post */.Z.post(ENDPOINT, data);
  },

  delete(id) {
    return Api/* default.delete */.Z["delete"](`${ENDPOINT}/${id}`);
  },

  update(id, data) {
    return Api/* default.put */.Z.put(`${ENDPOINT}/${id}`, data);
  }

});
;// CONCATENATED MODULE: ./src/store/approach/actions.js


function getApproaches({
  commit
}) {
  Approach.all().then(response => {
    commit('setApproaches', response.data.data);
  }).catch(response => {
    console.log(response);
  });
}
function getApproach({
  commit
}, approachId) {
  Approach.show(approachId).then(response => {
    commit('setApproach', response.data);
  });
}
function actions_addApproach({
  commit
}, approach) {
  Approach.store(approach).then(response => {
    commit('addApproach', response.data);
  });
}
function actions_updateApproach({
  commit
}, approachId, approach) {
  Approach.update(approachId, approach).then(response => {
    commit('updateApproach', response.data);
  });
}
function actions_deleteApproach({
  commit
}, approachId) {
  commit('deleteApproach', approachId);
  axios_default().get('http://127.0.0.1:8000/api/sanctum/csrf-cookie').then(() => {
    axios_default()["delete"]('http://127.0.0.1:8000/api/approach', {
      id: approachId
    }).then(response1 => {
      console.log(response1);
      return true;
    });
  });
}
;// CONCATENATED MODULE: ./src/store/approach/index.js




/* harmony default export */ const store_approach = ({
  namespaced: true,
  getters: approach_getters_namespaceObject,
  mutations: approach_mutations_namespaceObject,
  actions: approach_actions_namespaceObject,
  state: approach_state
});
;// CONCATENATED MODULE: ./src/store/category/state.js
/* harmony default export */ const category_state = ({
  categories: [],
  category: null
});
;// CONCATENATED MODULE: ./src/store/category/getters.js
function categories(state) {
  return state.categories;
}
function category(state) {
  return state.category;
}
;// CONCATENATED MODULE: ./src/store/category/mutations.js
function setCategories(state, categories) {
  state.categories = categories;
}
function setCategory(state, category) {
  state.category = category;
}
function addCategory(state, category) {
  state.categories.push(category);
}
function updateCategory(state, category) {
  let categoryInState = state.categories.find(item => item.id === category.id);

  if (categoryInState) {
    categoryInState = category;
    return;
  }

  state.categories.push(category);
}
function deleteCategory(state, categoryId) {
  state.categories = state.categories.filter(item => item.id !== categoryId);
}
;// CONCATENATED MODULE: ./src/api/Category.js

const Category_ENDPOINT = 'category';
/* harmony default export */ const Category = ({
  all() {
    return Api/* default.get */.Z.get(Category_ENDPOINT);
  },

  show(id) {
    return Api/* default.get */.Z.get(`${Category_ENDPOINT}/${id}`);
  },

  store(data) {
    return Api/* default.post */.Z.post(Category_ENDPOINT, data);
  },

  delete(id) {
    return Api/* default.delete */.Z["delete"](`${Category_ENDPOINT}/${id}`);
  },

  update(id, data) {
    return Api/* default.put */.Z.put(`${Category_ENDPOINT}/${id}`, data);
  }

});
;// CONCATENATED MODULE: ./src/store/category/actions.js

function getCategories({
  commit
}) {
  Category.all().then(response => {
    commit('setCategories', response.data.data);
  }).catch(response => {
    console.log(response);
  });
}
function getCategory({
  commit
}, categoryId) {
  Category.show(categoryId).then(response => {
    commit('setCategory', response.data);
  });
}
function actions_addCategory({
  commit
}, category) {
  Category.store(category).then(response => {
    commit('addCategory', response.data);
  });
}
function actions_updateCategory({
  commit
}, categoryId, category) {
  Category.update(categoryId, category).then(response => {
    commit('updateCategory', response.data);
  });
}
function actions_deleteCategory({
  commit
}, categoryId) {
  commit('deleteCategory', categoryId);
  Category["delete"](categoryId).then(response => {
    console.log(response);
  });
}
;// CONCATENATED MODULE: ./src/store/category/index.js




/* harmony default export */ const store_category = ({
  namespaced: true,
  getters: category_getters_namespaceObject,
  mutations: category_mutations_namespaceObject,
  actions: category_actions_namespaceObject,
  state: category_state
});
;// CONCATENATED MODULE: ./src/store/note/state.js
/* harmony default export */ const note_state = ({
  notes: [],
  note: null
});
;// CONCATENATED MODULE: ./src/store/note/getters.js
function notes(state) {
  return state.notes;
}
function note(state) {
  return state.note;
}
;// CONCATENATED MODULE: ./src/store/note/mutations.js
function setNotes(state, notes) {
  state.notes = notes;
}
function setNote(state, note) {
  state.note = note;
}
function addNote(state, note) {
  state.notes.push(note);
}
function updateNote(state, note) {
  let noteInState = state.notes.find(item => item.id === note.id);

  if (noteInState) {
    noteInState = note;
    return;
  }

  state.notes.push(note);
}
function deleteNote(state, approachId) {
  state.notes = state.notes.filter(item => item.id !== approachId);
}
// EXTERNAL MODULE: ./src/store/note/actions.js + 1 modules
var actions = __webpack_require__(2605);
;// CONCATENATED MODULE: ./src/store/note/index.js




/* harmony default export */ const store_note = ({
  namespaced: true,
  getters: note_getters_namespaceObject,
  mutations: note_mutations_namespaceObject,
  actions: actions,
  state: note_state
});
;// CONCATENATED MODULE: ./src/store/profile/state.js
/* harmony default export */ const profile_state = ({
  profiles: [],
  profile: null
});
;// CONCATENATED MODULE: ./src/store/profile/getters.js
function profiles(state) {
  return state.profiles;
}
function profile(state) {
  return state.profile;
}
;// CONCATENATED MODULE: ./src/store/profile/mutations.js
function setProfiles(state, profiles) {
  state.profiles = profiles;
}
function setProfile(state, profile) {
  state.profile = profile;
}
function addProfile(state, profile) {
  state.profiles.push(profile);
}
function updateProfile(state, profile) {
  let profileInState = state.profiles.find(item => item.id === profile.id);

  if (profileInState) {
    profileInState = profile;
    return;
  }

  state.profiles.push(profile);
}
function deleteProfile(state, profileId) {
  state.profiles = state.profiles.filter(item => item.id !== profileId);
}
;// CONCATENATED MODULE: ./src/api/Profile.js

const Profile_ENDPOINT = 'profile';
/* harmony default export */ const Profile = ({
  all() {
    return Api/* default.get */.Z.get(Profile_ENDPOINT);
  },

  show(id) {
    return Api/* default.get */.Z.get(`${Profile_ENDPOINT}/${id}`);
  },

  store(data) {
    return Api/* default.post */.Z.post(Profile_ENDPOINT, data);
  },

  delete(id) {
    return Api/* default.delete */.Z["delete"](`${Profile_ENDPOINT}/${id}`);
  },

  update(id, data) {
    return Api/* default.put */.Z.put(`${Profile_ENDPOINT}/${id}`, data);
  }

});
;// CONCATENATED MODULE: ./src/store/profile/actions.js

function getProfiles({
  commit
}) {
  Profile.all().then(response => {
    commit('setProfiles', response.data.data);
  }).catch(response => {
    console.log(response);
  });
}
function getProfile({
  commit
}, profileId) {
  Profile.show(profileId).then(response => {
    commit('setProfile', response.data);
  });
}
function actions_addProfile({
  commit
}, profile) {
  Profile.store(profile).then(response => {
    commit('addProfile', response.data);
  });
}
function actions_updateProfile({
  commit
}, profileId, profile) {
  Profile.update(profileId, profile).then(response => {
    commit('updateProfile', response.data);
  });
}
function actions_deleteProfile({
  commit
}, profileId) {
  commit('deleteProfile', profileId);
  Profile["delete"](profileId).then(response => {
    console.log(response);
  });
}
;// CONCATENATED MODULE: ./src/store/profile/index.js




/* harmony default export */ const store_profile = ({
  namespaced: true,
  getters: profile_getters_namespaceObject,
  mutations: profile_mutations_namespaceObject,
  actions: profile_actions_namespaceObject,
  state: profile_state
});
;// CONCATENATED MODULE: ./src/store/topic/state.js
/* harmony default export */ const topic_state = ({
  topics: [],
  topic: null
});
;// CONCATENATED MODULE: ./src/store/topic/getters.js
function topics(state) {
  return state.topics;
}
function topic(state) {
  return state.topic;
}
;// CONCATENATED MODULE: ./src/store/topic/mutations.js
function setTopics(state, topics) {
  state.topics = topics;
}
function setTopic(state, topic) {
  state.topic = topic;
}
function addTopic(state, topic) {
  state.topics.push(topic);
}
function updateTopic(state, topic) {
  let topicInState = state.topics.find(item => item.id === topic.id);

  if (topicInState) {
    topicInState = topic;
    return;
  }

  state.topics.push(topic);
}
function deleteTopic(state, topicId) {
  state.topics = state.topics.filter(item => item.id !== topicId);
}
;// CONCATENATED MODULE: ./src/api/Topic.js

const Topic_ENDPOINT = 'topic';
/* harmony default export */ const Topic = ({
  all() {
    return Api/* default.get */.Z.get(Topic_ENDPOINT);
  },

  show(id) {
    return Api/* default.get */.Z.get(`${Topic_ENDPOINT}/${id}`);
  },

  store(data) {
    return Api/* default.post */.Z.post(Topic_ENDPOINT, data);
  },

  delete(id) {
    return Api/* default.delete */.Z["delete"](`${Topic_ENDPOINT}/${id}`);
  },

  update(id, data) {
    return Api/* default.put */.Z.put(`${Topic_ENDPOINT}/${id}`, data);
  }

});
;// CONCATENATED MODULE: ./src/store/topic/actions.js

function actions_getApproaches({
  commit
}) {
  Topic.all().then(response => {
    commit('setTopics', response.data.data);
  }).catch(response => {
    console.log(response);
  });
}
function actions_getApproach({
  commit
}, topicId) {
  Topic.show(topicId).then(response => {
    commit('setTopic', response.data);
  });
}
function actions_addTopic({
  commit
}, topic) {
  Topic.store(topic).then(response => {
    commit('addTopic', response.data);
  });
}
function actions_updateTopic({
  commit
}, topicId, topic) {
  Topic.update(topicId, topic).then(response => {
    commit('updateTopic', response.data);
  });
}
function actions_deleteTopic({
  commit
}, topicId) {
  commit('deleteTopic', topicId);
  Topic["delete"](topicId).then(response => {
    console.log(response);
  });
}
;// CONCATENATED MODULE: ./src/store/topic/index.js




/* harmony default export */ const store_topic = ({
  namespaced: true,
  getters: topic_getters_namespaceObject,
  mutations: topic_mutations_namespaceObject,
  actions: topic_actions_namespaceObject,
  state: topic_state
});
;// CONCATENATED MODULE: ./src/store/access-topic-user/state.js
/* harmony default export */ const access_topic_user_state = ({
  accessTopicUsers: [],
  accessTopicUser: null
});
;// CONCATENATED MODULE: ./src/store/access-topic-user/getters.js
function accessTopicUsers(state) {
  return state.accessTopicUsers;
}
function accessTopicUser(state) {
  return state.accessTopicUser;
}
;// CONCATENATED MODULE: ./src/store/access-topic-user/mutations.js
function setAccessTopicUsers(state, accessTopicUsers) {
  state.accessTopicUsers = accessTopicUsers;
}
function setAccessTopicUser(state, AccessTopicUser) {
  state.AccessTopicUser = AccessTopicUser;
}
function addAccessTopicUser(state, AccessTopicUser) {
  state.accessTopicUsers.push(AccessTopicUser);
}
function updateAccessTopicUser(state, AccessTopicUser) {
  let accessTopicUserInState = state.accessTopicUsers.find(item => item.id === AccessTopicUser.id);

  if (accessTopicUserInState) {
    accessTopicUserInState = AccessTopicUser;
    return;
  }

  state.accessTopicUsers.push(AccessTopicUser);
}
function deleteAccessTopicUser(state, accessTopicUserId) {
  state.accessTopicUsers = state.accessTopicUsers.filter(item => item.id !== accessTopicUserId);
}
;// CONCATENATED MODULE: ./src/api/AccessTopicUser.js

const AccessTopicUser_ENDPOINT = 'access-topic-user';
/* harmony default export */ const AccessTopicUser = ({
  all() {
    return Api/* default.get */.Z.get(AccessTopicUser_ENDPOINT);
  },

  show(id) {
    return Api/* default.get */.Z.get(`${AccessTopicUser_ENDPOINT}/${id}`);
  },

  store(data) {
    return Api/* default.post */.Z.post(AccessTopicUser_ENDPOINT, data);
  },

  delete(id) {
    return Api/* default.delete */.Z["delete"](`${AccessTopicUser_ENDPOINT}/${id}`);
  },

  update(id, data) {
    return Api/* default.put */.Z.put(`${AccessTopicUser_ENDPOINT}/${id}`, data);
  }

});
;// CONCATENATED MODULE: ./src/store/access-topic-user/actions.js

function getAccessTopicUsers({
  commit
}) {
  AccessTopicUser.all().then(response => {
    commit('setAccessTopicUsers', response.data.data);
  }).catch(response => {
    console.log(response);
  });
}
function getAccessTopicUser({
  commit
}, id) {
  AccessTopicUser.show(id).then(response => {
    commit('setAccessTopicUser', response.data);
  });
}
function actions_addAccessTopicUser({
  commit
}, payload) {
  AccessTopicUser.store(payload).then(response => {
    commit('addAccessTopicUser', response.data);
  });
}
function actions_updateAccessTopicUser({
  commit
}, id, payload) {
  AccessTopicUser.update(id, payload).then(response => {
    commit('updateAccessTopicUser', response.data);
  });
}
function access_topic_user_actions_deleteApproach({
  commit
}, id) {
  commit('deleteAccessTopicUser', id);
  AccessTopicUser["delete"](id).then(response => {
    console.log(response);
  });
}
;// CONCATENATED MODULE: ./src/store/access-topic-user/index.js




/* harmony default export */ const access_topic_user = ({
  namespaced: true,
  getters: access_topic_user_getters_namespaceObject,
  mutations: access_topic_user_mutations_namespaceObject,
  actions: access_topic_user_actions_namespaceObject,
  state: access_topic_user_state
});
;// CONCATENATED MODULE: ./src/store/favorite-approach-user/state.js
/* harmony default export */ const favorite_approach_user_state = ({
  favoriteApproachUsers: [],
  favoriteApproachUser: null
});
;// CONCATENATED MODULE: ./src/store/favorite-approach-user/getters.js
function favoriteApproachUsers(state) {
  return state.favoriteApproachUsers;
}
function favoriteApproachUser(state) {
  return state.favoriteApproachUser;
}
;// CONCATENATED MODULE: ./src/store/favorite-approach-user/mutations.js
function setFavoriteApproachUsers(state, favoriteApproachUsers) {
  state.favoriteApproachUsers = favoriteApproachUsers;
}
function setFavoriteApproachUser(state, favoriteApproachUser) {
  state.favoriteApproachUser = favoriteApproachUser;
}
function addFavoriteApproachUser(state, favoriteApproachUser) {
  state.favoriteApproachUsers.push(favoriteApproachUser);
}
function updateFavoriteApproachUser(state, favoriteApproachUser) {
  let favoriteApproachUserInState = state.favoriteApproachUsers.find(item => item.id === favoriteApproachUser.id);

  if (favoriteApproachUserInState) {
    favoriteApproachUserInState = favoriteApproachUser;
    return;
  }

  state.favoriteApproachUsers.push(favoriteApproachUser);
}
function deleteFavoriteApproachUser(state, favoriteApproachUserId) {
  state.favoriteApproachUsers = state.favoriteApproachUsers.filter(item => item.id !== favoriteApproachUserId);
}
;// CONCATENATED MODULE: ./src/api/FavoriteApproachUser.js

const FavoriteApproachUser_ENDPOINT = 'favorite-approach-user';
/* harmony default export */ const FavoriteApproachUser = ({
  all() {
    return Api/* default.get */.Z.get(FavoriteApproachUser_ENDPOINT);
  },

  show(id) {
    return Api/* default.get */.Z.get(`${FavoriteApproachUser_ENDPOINT}/${id}`);
  },

  store(data) {
    return Api/* default.post */.Z.post(FavoriteApproachUser_ENDPOINT, data);
  },

  delete(id) {
    return Api/* default.delete */.Z["delete"](`${FavoriteApproachUser_ENDPOINT}/${id}`);
  },

  update(id, data) {
    return Api/* default.put */.Z.put(`${FavoriteApproachUser_ENDPOINT}/${id}`, data);
  }

});
;// CONCATENATED MODULE: ./src/store/favorite-approach-user/actions.js

function getFavoriteApproachUsers({
  commit
}) {
  FavoriteApproachUser.all().then(response => {
    commit('setFavoriteApproachUsers', response.data.data);
  }).catch(response => {
    console.log(response);
  });
}
function getFavoriteApproachUser({
  commit
}, favoriteApproachUserId) {
  FavoriteApproachUser.show(favoriteApproachUserId).then(response => {
    commit('setFavoriteApproachUser', response.data);
  });
}
function actions_addFavoriteApproachUser({
  commit
}, favoriteApproachUser) {
  FavoriteApproachUser.store(favoriteApproachUser).then(response => {
    commit('addFavoriteApproachUser', response.data);
  });
}
function actions_updateFavoriteApproachUser({
  commit
}, id, favoriteApproachUser) {
  FavoriteApproachUser.update(id, favoriteApproachUser).then(response => {
    commit('updateFavoriteApproachUser', response.data);
  });
}
function actions_deleteFavoriteApproachUser({
  commit
}, favoriteApproachUserId) {
  commit('deleteFavoriteApproachUser', favoriteApproachUserId);
  FavoriteApproachUser["delete"](favoriteApproachUserId).then(response => {
    console.log(response);
  });
}
;// CONCATENATED MODULE: ./src/store/favorite-approach-user/index.js




/* harmony default export */ const favorite_approach_user = ({
  namespaced: true,
  getters: favorite_approach_user_getters_namespaceObject,
  mutations: favorite_approach_user_mutations_namespaceObject,
  actions: favorite_approach_user_actions_namespaceObject,
  state: favorite_approach_user_state
});
;// CONCATENATED MODULE: ./src/store/occupation-area/state.js
/* harmony default export */ const occupation_area_state = ({
  occupationAreas: [],
  occupationArea: null
});
;// CONCATENATED MODULE: ./src/store/occupation-area/getters.js
function occupatioAreas(state) {
  return state.occupatioAreas;
}
function occupationArea(state) {
  return state.occupationArea;
}
;// CONCATENATED MODULE: ./src/store/occupation-area/mutations.js
function setOccupationAreas(state, occupationAreas) {
  state.occupationAreas = occupationAreas;
}
function setOccupationArea(state, occupationArea) {
  state.occupationArea = occupationArea;
}
function addOccupationArea(state, occupationArea) {
  state.occupationAreas.push(occupationArea);
}
function updateOccupationArea(state, occupationArea) {
  let occupationAreaInState = state.occupationAreas.find(item => item.id === occupationArea.id);

  if (occupationAreaInState) {
    occupationAreaInState = occupationArea;
    return;
  }

  state.occupationAreas.push(occupationArea);
}
function deleteOccupationArea(state, occupationAreaId) {
  state.occupationAreas = state.occupationAreas.filter(item => item.id !== occupationAreaId);
}
;// CONCATENATED MODULE: ./src/api/OccupationArea.js

const OccupationArea_ENDPOINT = 'occupation-area';
/* harmony default export */ const OccupationArea = ({
  all() {
    return Api/* default.get */.Z.get(OccupationArea_ENDPOINT);
  },

  show(id) {
    return Api/* default.get */.Z.get(`${OccupationArea_ENDPOINT}/${id}`);
  },

  store(data) {
    return Api/* default.post */.Z.post(OccupationArea_ENDPOINT, data);
  },

  delete(id) {
    return Api/* default.delete */.Z["delete"](`${OccupationArea_ENDPOINT}/${id}`);
  },

  update(id, data) {
    return Api/* default.put */.Z.put(`${OccupationArea_ENDPOINT}/${id}`, data);
  }

});
;// CONCATENATED MODULE: ./src/store/occupation-area/actions.js

function getOccupationAreas({
  commit
}) {
  OccupationArea.all().then(response => {
    commit('setOccupationAreas', response.data.data);
  }).catch(response => {
    console.log(response);
  });
}
function getOccupationArea({
  commit
}, occupationAreaId) {
  OccupationArea.show(occupationAreaId).then(response => {
    commit('setOccupationArea', response.data);
  });
}
function actions_addOccupationArea({
  commit
}, occupationArea) {
  OccupationArea.store(occupationArea).then(response => {
    commit('addOccupationArea', response.data);
  });
}
function actions_updateOccupationArea({
  commit
}, occupationAreaId, occupationArea) {
  OccupationArea.update(occupationAreaId, occupationArea).then(response => {
    commit('updateOccupationArea', response.data);
  });
}
function actions_deleteOccupationArea({
  commit
}, occupationAreaId) {
  commit('deleteOccupationArea', occupationAreaId);
  OccupationArea["delete"](occupationAreaId).then(response => {
    console.log(response);
  });
}
;// CONCATENATED MODULE: ./src/store/occupation-area/index.js




/* harmony default export */ const occupation_area = ({
  namespaced: true,
  getters: occupation_area_getters_namespaceObject,
  mutations: occupation_area_mutations_namespaceObject,
  actions: occupation_area_actions_namespaceObject,
  state: occupation_area_state
});
;// CONCATENATED MODULE: ./src/store/profile-type/state.js
/* harmony default export */ const profile_type_state = ({
  profileTypes: [],
  profileType: null
});
;// CONCATENATED MODULE: ./src/store/profile-type/getters.js
function profileTypes(state) {
  return state.profileTypes;
}
function profileType(state) {
  return state.profileType;
}
;// CONCATENATED MODULE: ./src/store/profile-type/mutations.js
function setProfileTypes(state, profileTypes) {
  state.profileTypes = profileTypes;
}
function setProfileType(state, profileType) {
  state.profileType = profileType;
}
function addProfileType(state, profileType) {
  state.profileTypes.push(profileType);
}
function updateProfileType(state, profileType) {
  let profileTypeInState = state.profileTypes.find(item => item.id === profileType.id);

  if (profileTypeInState) {
    profileTypeInState = profileType;
    return;
  }

  state.profileTypes.push(profileType);
}
function deleteProfileType(state, profileTypeId) {
  state.profileTypes = state.profileTypes.filter(item => item.id !== profileTypeId);
}
;// CONCATENATED MODULE: ./src/api/ProfileType.js

const ProfileType_ENDPOINT = 'profile-type';
/* harmony default export */ const ProfileType = ({
  all() {
    return Api/* default.get */.Z.get(ProfileType_ENDPOINT);
  },

  show(id) {
    return Api/* default.get */.Z.get(`${ProfileType_ENDPOINT}/${id}`);
  },

  store(data) {
    return Api/* default.post */.Z.post(ProfileType_ENDPOINT, data);
  },

  delete(id) {
    return Api/* default.delete */.Z["delete"](`${ProfileType_ENDPOINT}/${id}`);
  },

  update(id, data) {
    return Api/* default.put */.Z.put(`${ProfileType_ENDPOINT}/${id}`, data);
  }

});
;// CONCATENATED MODULE: ./src/store/profile-type/actions.js

function getProfileTypes({
  commit
}) {
  ProfileType.all().then(response => {
    commit('setProfileTypes', response.data.data);
  }).catch(response => {
    console.log(response);
  });
}
function getProfileType({
  commit
}, profileTypeId) {
  ProfileType.show(profileTypeId).then(response => {
    commit('setProfileType', response.data);
  });
}
function actions_addProfileType({
  commit
}, profileType) {
  ProfileType.store(profileType).then(response => {
    commit('addProfileType', response.data);
  });
}
function actions_updateProfileType({
  commit
}, profileTypeId, profileType) {
  ProfileType.update(profileTypeId, profileType).then(response => {
    commit('updateProfileType', response.data);
  });
}
function actions_deleteProfileType({
  commit
}, profileTypeId) {
  commit('deleteProfileType', profileTypeId);
  ProfileType["delete"](profileTypeId).then(response => {
    console.log(response);
  });
}
;// CONCATENATED MODULE: ./src/store/profile-type/index.js




/* harmony default export */ const profile_type = ({
  namespaced: true,
  getters: profile_type_getters_namespaceObject,
  mutations: profile_type_mutations_namespaceObject,
  actions: profile_type_actions_namespaceObject,
  state: profile_type_state
});
;// CONCATENATED MODULE: ./src/store/index.js











 // import example from './module-example'

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

/* harmony default export */ const store = ((0,wrappers/* store */.h)(() => {
  const Store = (0,vuex_esm_bundler/* createStore */.MT)({
    modules: {
      user: user,
      approach: store_approach,
      category: store_category,
      note: store_note,
      profile: store_profile,
      topic: store_topic,
      accessTopicUser: access_topic_user,
      favoriteApproachUser: favorite_approach_user,
      occupationArea: occupation_area,
      profileType: profile_type
    },
    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: true
  });
  return Store;
}));

/***/ }),

/***/ 2605:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "addNote": () => (/* binding */ addNote),
  "deleteNote": () => (/* binding */ deleteNote),
  "getApproaches": () => (/* binding */ getApproaches),
  "getNote": () => (/* binding */ getNote),
  "updateNote": () => (/* binding */ updateNote)
});

// EXTERNAL MODULE: ./src/api/Api.js
var Api = __webpack_require__(7227);
;// CONCATENATED MODULE: ./src/api/Note.js

const ENDPOINT = 'note';
/* harmony default export */ const Note = ({
  all() {
    return Api/* default.get */.Z.get(ENDPOINT);
  },

  show(id) {
    return Api/* default.get */.Z.get(`${ENDPOINT}/${id}`);
  },

  store(data) {
    return Api/* default.post */.Z.post(ENDPOINT, data);
  },

  delete(id) {
    return Api/* default.delete */.Z["delete"](`${ENDPOINT}/${id}`);
  },

  update(id, data) {
    return Api/* default.put */.Z.put(`${ENDPOINT}/${id}`, data);
  }

});
;// CONCATENATED MODULE: ./src/store/note/actions.js

function getApproaches({
  commit
}) {
  Note.all().then(response => {
    commit('setNotes', response.data.data);
  }).catch(response => {
    console.log(response);
  });
}
function getNote({
  commit
}, noteId) {
  Note.show(noteId).then(response => {
    commit('setNote', response.data);
  });
}
function addNote({
  commit
}, note) {
  Note.store(note).then(response => {
    commit('addNote', response.data);
  });
}
function updateNote({
  commit
}, noteId, note) {
  Note.update(noteId, note).then(response => {
    commit('updateNote', response.data);
  });
}
function deleteNote({
  commit
}, noteId) {
  commit('deleteNote', noteId);
  Note["delete"](noteId).then(response => {
    console.log(response);
  });
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "js/" + chunkId + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "css/" + ({"143":"app","736":"vendor"}[chunkId] || chunkId) + ".css";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "medicalbookapp:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/css loading */
/******/ 	(() => {
/******/ 		var createStylesheet = (chunkId, fullhref, resolve, reject) => {
/******/ 			var linkTag = document.createElement("link");
/******/ 		
/******/ 			linkTag.rel = "stylesheet";
/******/ 			linkTag.type = "text/css";
/******/ 			var onLinkComplete = (event) => {
/******/ 				// avoid mem leaks.
/******/ 				linkTag.onerror = linkTag.onload = null;
/******/ 				if (event.type === 'load') {
/******/ 					resolve();
/******/ 				} else {
/******/ 					var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 					var realHref = event && event.target && event.target.href || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + realHref + ")");
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.type = errorType;
/******/ 					err.request = realHref;
/******/ 					linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				}
/******/ 			}
/******/ 			linkTag.onerror = linkTag.onload = onLinkComplete;
/******/ 			linkTag.href = fullhref;
/******/ 		
/******/ 			document.head.appendChild(linkTag);
/******/ 			return linkTag;
/******/ 		};
/******/ 		var findStylesheet = (href, fullhref) => {
/******/ 			var existingLinkTags = document.getElementsByTagName("link");
/******/ 			for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 				var tag = existingLinkTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 				if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return tag;
/******/ 			}
/******/ 			var existingStyleTags = document.getElementsByTagName("style");
/******/ 			for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 				var tag = existingStyleTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href");
/******/ 				if(dataHref === href || dataHref === fullhref) return tag;
/******/ 			}
/******/ 		};
/******/ 		var loadStylesheet = (chunkId) => {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				if(findStylesheet(href, fullhref)) return resolve();
/******/ 				createStylesheet(chunkId, fullhref, resolve, reject);
/******/ 			});
/******/ 		}
/******/ 		// object to store loaded CSS chunks
/******/ 		var installedCssChunks = {
/******/ 			143: 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.miniCss = (chunkId, promises) => {
/******/ 			var cssChunks = {"8":1,"26":1,"109":1,"185":1,"238":1,"317":1,"457":1,"541":1,"544":1,"571":1,"642":1,"668":1,"685":1,"703":1,"798":1,"866":1,"914":1,"938":1,"946":1};
/******/ 			if(installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
/******/ 			else if(installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
/******/ 				promises.push(installedCssChunks[chunkId] = loadStylesheet(chunkId).then(() => {
/******/ 					installedCssChunks[chunkId] = 0;
/******/ 				}, (e) => {
/******/ 					delete installedCssChunks[chunkId];
/******/ 					throw e;
/******/ 				}));
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no hmr
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			143: 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkmedicalbookapp"] = self["webpackChunkmedicalbookapp"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [736], () => (__webpack_require__(119)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=app.js.map