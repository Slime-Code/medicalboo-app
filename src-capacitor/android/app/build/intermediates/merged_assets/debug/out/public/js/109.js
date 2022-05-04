"use strict";
(self["webpackChunkmedicalbookapp"] = self["webpackChunkmedicalbookapp"] || []).push([[109],{

/***/ 811:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useApi)
/* harmony export */ });
/* harmony import */ var boot_supabase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2421);
/* eslint-disable linebreak-style */
 // import useAuthUser from './useAuthUser';

function useApi() {
  const {
    supabase
  } = (0,boot_supabase__WEBPACK_IMPORTED_MODULE_0__["default"])(); // const { user } = useAuthUser();

  const list = async table => {
    const {
      data,
      error
    } = await supabase.from(table).select('*');
    if (error) throw error;
    return data;
  };

  const getById = async (table, id) => {
    const {
      data,
      error
    } = await supabase.from(table).select('*').eq('id', id);
    if (error) throw error;
    return data[0];
  };

  const getByField = async (table, field, value) => {
    const {
      data,
      error
    } = await supabase.from(table).select('*').eq(field, value);
    if (error) throw error;
    return data;
  };

  const joinTables = async (origin, tables) => {
    const fields = tables.reduce((previousValue, currentValue, index) => {
      return `${previousValue.name}:${previousValue.foreign_key}(${previousValue.fields})` + ',' + `${currentValue.name}:${currentValue.foreign_key}(${currentValue.fields})`;
    });
    const {
      data,
      error
    } = await supabase.from(origin).select(`*,${fields}`);
    if (error) throw error;
    console.log(data);
    return data;
  };

  const post = async (table, form) => {
    const {
      data,
      error
    } = await supabase.from(table).insert([{ ...form // user_id: user.value.id,

    }]);
    if (error) throw error;
    return data;
  };

  const update = async (table, form) => {
    const {
      data,
      error
    } = await supabase.from(table).update([{ ...form
    }]).match({
      id: form.id
    });
    if (error) throw error;
    return data;
  };

  const remove = async (table, id) => {
    const {
      data,
      error
    } = await supabase.from(table).delete().match({
      id
    });
    if (error) throw error;
    return data;
  };

  const removeWhere = async (table, field, id) => {
    const {
      data,
      error
    } = await supabase.from(table).delete().match({
      [field]: id
    });
    if (error) throw error;
    return data;
  };

  return {
    getByField,
    list,
    getById,
    post,
    update,
    remove,
    removeWhere,
    joinTables
  };
}

/***/ }),

/***/ 5109:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ PrimeLayout)
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(3673);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/layouts/PrimeLayout.vue?vue&type=template&id=212c9dd7&scoped=true


const _withScopeId = n => ((0,runtime_core_esm_bundler/* pushScopeId */.dD)("data-v-212c9dd7"), n = n(), (0,runtime_core_esm_bundler/* popScopeId */.Cn)(), n);

const _hoisted_1 = {
  class: "flex flex-center"
};

const _hoisted_2 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("img", {
  src: "img/premi.png",
  style: {
    "width": "300%",
    "height": "150px"
  }
}, null, -1));

const _hoisted_3 = {
  class: "row login-btn-area absolute-bottom flex flex-center col-md-4 col-sm-6 col-xs-10 q-gutter-y-lg"
};
const _hoisted_4 = {
  class: "flex flex-center"
};

const _hoisted_5 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", {
  style: {
    "color": "#1C9BB2"
  }
}, [/*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("strong", null, "Clareza Quando Você Mais Precisa")], -1));

const _hoisted_6 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", {
  class: "text-center"
}, "Fornecemos as evidências funadamentada na esperência clínica dos médicos mais notáveis do mundo", -1));

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_toolbar = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-toolbar");

  const _component_q_header = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-header");

  const _component_router_view = (0,runtime_core_esm_bundler/* resolveComponent */.up)("router-view");

  const _component_q_page_container = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-page-container");

  const _component_q_btn = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-btn");

  const _component_q_layout = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-layout");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_layout, {
    class: "col-md-4 col-sm-6 col-xs-10 q-gutter-y-lg"
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_1, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_header, {
      elevated: "",
      class: "",
      style: {
        "background": "#004A9D"
      },
      "height-hint": "90"
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_toolbar, {
        class: "q-py-xl q-px-md"
      }, {
        action: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => []),
        default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_hoisted_2]),
        _: 1
      })]),
      _: 1
    })]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_page_container, {
      style: {
        "padding-top": "0px",
        "background-color": "white"
      }
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_router_view)]),
      _: 1
    }), (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_3, [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_4, [_hoisted_5, _hoisted_6, (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
      rounded: "",
      label: "Expermente 7 Dias Grates",
      to: {
        name: 'home'
      },
      style: {
        "background-color": "#49d166",
        "color": "#FFF"
      }
    }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
      style: {
        "margin-top": "10px"
      },
      rounded: "",
      unelevated: "",
      dense: "",
      label: "agora Não",
      to: {
        name: 'home'
      }
    })])])]),
    _: 1
  });
}
;// CONCATENATED MODULE: ./src/layouts/PrimeLayout.vue?vue&type=template&id=212c9dd7&scoped=true

// EXTERNAL MODULE: ./node_modules/quasar/src/plugins/Notify.js
var Notify = __webpack_require__(4434);
// EXTERNAL MODULE: ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(1959);
// EXTERNAL MODULE: ./src/composebles/useApi.js
var useApi = __webpack_require__(811);
// EXTERNAL MODULE: ./src/composebles/useAuthUser.js
var useAuthUser = __webpack_require__(4958);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/layouts/PrimeLayout.vue?vue&type=script&lang=js
;



/* harmony default export */ const PrimeLayoutvue_type_script_lang_js = ((0,runtime_core_esm_bundler/* defineComponent */.aZ)({
  name: 'MainLayout',

  setup() {
    const loading = (0,reactivity_esm_bundler/* ref */.iH)(true);
    const {
      user
    } = (0,useAuthUser/* default */.Z)();
    const {
      list
    } = (0,useApi/* default */.Z)();
    const {
      getById
    } = (0,useApi/* default */.Z)();
    const topics = (0,reactivity_esm_bundler/* ref */.iH)(['covid-19']);

    const listTopicsAproachs = async () => {
      try {
        loading.value = true;
        const aux = await list('access_topic_user');
        const aux1 = ['covid-19']; // eslint-disable-next-line no-plusplus

        for (let index = 0; index < aux.length; index++) {
          if (aux.user_id === user.id) {
            aux1[index] = getById('topic', aux.id);
          }
        }

        topics.value = aux1.map(elem => elem.name);
        loading.value = false;
      } catch (error) {
        (0,Notify/* default */.Z)(error);
      }
    };

    (0,runtime_core_esm_bundler/* onMounted */.bv)(() => {
      listTopicsAproachs();
    });
    return {
      icon: (0,reactivity_esm_bundler/* ref */.iH)(false),
      tab: (0,reactivity_esm_bundler/* ref */.iH)('inicio'),
      topics
    };
  }

}));
;// CONCATENATED MODULE: ./src/layouts/PrimeLayout.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(4260);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/layout/QLayout.js + 1 modules
var QLayout = __webpack_require__(3066);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/header/QHeader.js
var QHeader = __webpack_require__(3812);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/toolbar/QToolbar.js
var QToolbar = __webpack_require__(9570);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPageContainer.js
var QPageContainer = __webpack_require__(2652);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__(2165);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/tabs/QTabs.js
var QTabs = __webpack_require__(7547);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/tabs/QTab.js
var QTab = __webpack_require__(8408);
// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(7518);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/layouts/PrimeLayout.vue




;



const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(PrimeLayoutvue_type_script_lang_js, [['render',render],['__scopeId',"data-v-212c9dd7"]])

/* harmony default export */ const PrimeLayout = (__exports__);
;







runtime_auto_import_default()(PrimeLayoutvue_type_script_lang_js, 'components', {QLayout: QLayout/* default */.Z,QHeader: QHeader/* default */.Z,QToolbar: QToolbar/* default */.Z,QPageContainer: QPageContainer/* default */.Z,QBtn: QBtn/* default */.Z,QTabs: QTabs/* default */.Z,QTab: QTab/* default */.Z});


/***/ })

}]);
//# sourceMappingURL=109.js.map