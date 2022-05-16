"use strict";
(self["webpackChunkmedicalbookapp"] = self["webpackChunkmedicalbookapp"] || []).push([[766],{

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

/***/ 6766:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ExplorePage)
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(3673);
// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(2323);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/users/ExplorePage.vue?vue&type=template&id=1f624470


const _hoisted_1 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", {
  class: "text-h5 q-pa-sm"
}, " Explorar ", -1);

const _hoisted_2 = {
  class: "full-width row flex-center text-accent q-gutter-sm"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_icon = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-icon");

  const _component_q_input = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-input");

  const _component_q_table = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-table");

  const _component_q_page = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-page");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_page, {
    padding: ""
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_hoisted_1, (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_table, {
      rows: $setup.rows,
      columns: $setup.columns,
      flat: "",
      bordered: "",
      filter: $setup.filter,
      "no-data-label": "Nenhuma abordagem encontrada",
      "no-results-label": "Nenhuma Resultado encontrada",
      "row-key": "id",
      "hide-header": "",
      "hide-bottom": "",
      grid: "",
      onRowClick: $setup.go,
      separator: "cell"
    }, {
      "top-right": (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_input, {
        class: "full-width",
        outlined: "",
        rounded: "",
        dense: "",
        debounce: "300",
        modelValue: $setup.filter,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => $setup.filter = $event),
        placeholder: "Pesquise uma abordagem"
      }, {
        append: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
          name: "search"
        })]),
        _: 1
      }, 8, ["modelValue"])]),
      "no-data": (0,runtime_core_esm_bundler/* withCtx */.w5)(({
        icon,
        message,
        filter
      }) => [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_2, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
        size: "2em",
        name: "sentiment_dissatisfied"
      }), (0,runtime_core_esm_bundler/* createElementVNode */._)("span", null, " ... " + (0,shared_esm_bundler/* toDisplayString */.zw)(message), 1), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
        size: "2em",
        name: filter ? 'filter_b_and_w' : icon
      }, null, 8, ["name"])])]),
      _: 1
    }, 8, ["rows", "columns", "filter", "onRowClick"])]),
    _: 1
  });
}
;// CONCATENATED MODULE: ./src/pages/users/ExplorePage.vue?vue&type=template&id=1f624470

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.json.stringify.js
var es_json_stringify = __webpack_require__(2100);
// EXTERNAL MODULE: ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(1959);
// EXTERNAL MODULE: ./src/functions/functionShowNotifications.js
var functionShowNotifications = __webpack_require__(4605);
// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.esm-bundler.js
var vue_router_esm_bundler = __webpack_require__(9582);
// EXTERNAL MODULE: ./src/composebles/useApi.js
var useApi = __webpack_require__(811);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/users/ExplorePage.vue?vue&type=script&lang=js





/* harmony default export */ const ExplorePagevue_type_script_lang_js = ({
  setup() {
    const rows = (0,reactivity_esm_bundler/* ref */.iH)([]);
    const {
      list
    } = (0,useApi/* default */.Z)();
    const router = (0,vue_router_esm_bundler/* useRouter */.tv)();
    const loading = (0,reactivity_esm_bundler/* ref */.iH)(true);

    const go = async (evt, row) => {
      router.push(`/approach-detail/${row.id}`);
    };

    const listTopics = async () => {
      try {
        loading.value = true;
        const aux = await list('approach');
        rows.value = aux; // rows.value.sort();

        loading.value = false;
      } catch (error) {
        (0,functionShowNotifications/* showErrorNotification */.s)(`verifique antes a conecção de rede... especificação do Erro: ${JSON.stringify(error)}`);
      }
    };

    return {
      listTopics,
      filter: (0,reactivity_esm_bundler/* ref */.iH)(''),
      rows,
      loading,
      go,
      explore: 'explore',
      columns: [{
        name: 'title',
        required: true,
        align: 'left',
        field: row => row.title,
        format: val => `${val}`,
        sortable: true
      }]
    };
  },

  mounted() {
    this.listTopics();
  }

});
;// CONCATENATED MODULE: ./src/pages/users/ExplorePage.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(4260);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPage.js
var QPage = __webpack_require__(4379);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/table/QTable.js + 12 modules
var QTable = __webpack_require__(8468);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/input/QInput.js + 2 modules
var QInput = __webpack_require__(4842);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__(4554);
// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(7518);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/pages/users/ExplorePage.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(ExplorePagevue_type_script_lang_js, [['render',render]])

/* harmony default export */ const ExplorePage = (__exports__);
;




runtime_auto_import_default()(ExplorePagevue_type_script_lang_js, 'components', {QPage: QPage/* default */.Z,QTable: QTable/* default */.Z,QInput: QInput/* default */.Z,QIcon: QIcon/* default */.Z});


/***/ })

}]);
//# sourceMappingURL=766.js.map