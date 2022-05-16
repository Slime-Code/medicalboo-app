"use strict";
(self["webpackChunkmedicalbookapp"] = self["webpackChunkmedicalbookapp"] || []).push([[395],{

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

  const getNotByField = async (table, field, value) => {
    const {
      data,
      error
    } = await supabase.from(table).select('*').neq(field, value);
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
    getNotByField,
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

/***/ 4395:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ AboutApp)
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(3673);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/AboutApp.vue?vue&type=template&id=1e318e5a


const _hoisted_1 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", {
  class: "text-h4"
}, " Sobre o app ", -1);

const _hoisted_2 = {
  class: "flex column"
};
const _hoisted_3 = {
  key: 0,
  class: "col self-center"
};
const _hoisted_4 = ["innerHTML"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_separator = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-separator");

  const _component_q_spinner_dots = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-spinner-dots");

  const _component_q_page = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-page");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_page, {
    padding: "",
    class: "constrain-4"
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_hoisted_1, (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_separator, {
      class: "q-my-sm"
    }), (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_2, [_ctx.loading ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", _hoisted_3, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_spinner_dots, {
      size: "3rem",
      color: "primary"
    })])) : ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", {
      key: 1,
      innerHTML: _ctx.aboutApp.conteudo
    }, null, 8, _hoisted_4))])]),
    _: 1
  });
}
;// CONCATENATED MODULE: ./src/pages/AboutApp.vue?vue&type=template&id=1e318e5a

// EXTERNAL MODULE: ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(1959);
// EXTERNAL MODULE: ./src/composebles/useApi.js
var useApi = __webpack_require__(811);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/AboutApp.vue?vue&type=script&lang=js


/* harmony default export */ const AboutAppvue_type_script_lang_js = ((0,runtime_core_esm_bundler/* defineComponent */.aZ)({
  setup() {
    const {
      list
    } = (0,useApi/* default */.Z)();
    const aboutApp = (0,reactivity_esm_bundler/* ref */.iH)({
      title: "",
      conteudo: ""
    });
    const loading = (0,reactivity_esm_bundler/* ref */.iH)(false);

    async function loadInfo() {
      loading.value = true;
      const data = await list('sobreApp');
      aboutApp.value = data[0];
      loading.value = false;
    }

    (0,runtime_core_esm_bundler/* onMounted */.bv)(() => loadInfo());
    return {
      aboutApp,
      loading
    };
  }

}));
;// CONCATENATED MODULE: ./src/pages/AboutApp.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(4260);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPage.js
var QPage = __webpack_require__(4379);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/separator/QSeparator.js
var QSeparator = __webpack_require__(5869);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/spinner/QSpinnerDots.js
var QSpinnerDots = __webpack_require__(4765);
// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(7518);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/pages/AboutApp.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(AboutAppvue_type_script_lang_js, [['render',render]])

/* harmony default export */ const AboutApp = (__exports__);
;



runtime_auto_import_default()(AboutAppvue_type_script_lang_js, 'components', {QPage: QPage/* default */.Z,QSeparator: QSeparator/* default */.Z,QSpinnerDots: QSpinnerDots/* default */.Z});


/***/ })

}]);
//# sourceMappingURL=395.js.map