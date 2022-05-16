"use strict";
(self["webpackChunkmedicalbookapp"] = self["webpackChunkmedicalbookapp"] || []).push([[702],{

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

/***/ 7702:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ApproachDetailPage)
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(3673);
// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(2323);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/users/ApproachDetailPage.vue?vue&type=template&id=b2b5a478&scoped=true


const _withScopeId = n => (_pushScopeId("data-v-b2b5a478"), n = n(), _popScopeId(), n);

const _hoisted_1 = {
  class: "text-h4 col"
};
const _hoisted_2 = {
  class: "q-ml-sm text-subtitle22 col"
};
const _hoisted_3 = {
  key: 0,
  class: "absolute-center text-h6"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_rating = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-rating");

  const _component_q_banner = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-banner");

  const _component_q_card_section = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-card-section");

  const _component_q_card = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-card");

  const _component_q_expansion_item = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-expansion-item");

  const _component_q_list = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-list");

  const _component_q_inner_loading = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-inner-loading");

  const _component_q_page = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-page");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_page, {
    style: {
      "max-width": "100vw"
    },
    class: "column"
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_banner, {
      rounded: "",
      class: "bg-grey-3 q-mb-md"
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_1, (0,shared_esm_bundler/* toDisplayString */.zw)(_ctx.approach.title), 1), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_rating, {
        class: "col q-ma-sm",
        size: "1.9em",
        color: "amber",
        icon: "star_border",
        "icon-selected": "star"
      }), (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_2, " Atualizado em " + (0,shared_esm_bundler/* toDisplayString */.zw)(new Date(_ctx.approach.created_at).toLocaleDateString("pt-BR", {
        year: "numeric",
        month: "long",
        day: "numeric"
      })), 1)]),
      _: 1
    }), ((0,runtime_core_esm_bundler/* openBlock */.wg)(true), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, null, (0,runtime_core_esm_bundler/* renderList */.Ko)(_ctx.contents, content => {
      return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_list, {
        class: (0,shared_esm_bundler/* normalizeClass */.C_)({
          'q-mx-xl': _ctx.$q.screen.width > 599
        }),
        flat: "",
        bordered: "",
        key: content.id
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_expansion_item, {
          label: content.title,
          "header-class": "bg-grey-3 text-body1 text-bold"
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_card, null, {
            default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_card_section, {
              style: {
                "max-width": "100vw !important",
                "text-align": "justify !important",
                "white-space": "pre-line !important",
                "word-break": "break-word !important",
                "overflow-wrap": "break-word !important"
              },
              class: "pre"
            }, {
              default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.Uk)((0,shared_esm_bundler/* toDisplayString */.zw)(content.content), 1)]),
              _: 2
            }, 1024)]),
            _: 2
          }, 1024)]),
          _: 2
        }, 1032, ["label"])]),
        _: 2
      }, 1032, ["class"]);
    }), 128)), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_inner_loading, {
      showing: _ctx.loading,
      label: "Carregando...",
      color: "primary",
      "label-class": "text-primary",
      "label-style": "font-size: 1.1em"
    }, null, 8, ["showing"]), !_ctx.contents.length && !_ctx.loading ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", _hoisted_3, " Sem conteúdo ")) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true)]),
    _: 1
  });
}
;// CONCATENATED MODULE: ./src/pages/users/ApproachDetailPage.vue?vue&type=template&id=b2b5a478&scoped=true

// EXTERNAL MODULE: ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(1959);
// EXTERNAL MODULE: ./src/composebles/useApi.js
var useApi = __webpack_require__(811);
// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.esm-bundler.js
var vue_router_esm_bundler = __webpack_require__(9582);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/users/ApproachDetailPage.vue?vue&type=script&lang=js


 // import ApproachButtom from '../../components/ApproachButtom.vue';

/* harmony default export */ const ApproachDetailPagevue_type_script_lang_js = ((0,runtime_core_esm_bundler/* defineComponent */.aZ)({
  name: "ProfilePage",

  setup() {
    const {
      getById,
      getByField
    } = (0,useApi/* default */.Z)();
    const route = (0,vue_router_esm_bundler/* useRoute */.yj)();
    const approach = (0,reactivity_esm_bundler/* ref */.iH)({
      title: "",
      created_at: ""
    });
    const loading = (0,reactivity_esm_bundler/* ref */.iH)(true);
    const contents = (0,reactivity_esm_bundler/* ref */.iH)([]);
    (0,runtime_core_esm_bundler/* onMounted */.bv)(async () => {
      loading.value = true;
      approach.value = await getById("approach", route.params.id);
      contents.value = await getByField("approach_contents", "id_approach", route.params.id);
      loading.value = false;
    });
    return {
      loading,
      approach,
      contents
    };
  }

}));
;// CONCATENATED MODULE: ./src/pages/users/ApproachDetailPage.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(4260);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPage.js
var QPage = __webpack_require__(4379);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/banner/QBanner.js
var QBanner = __webpack_require__(5607);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/rating/QRating.js
var QRating = __webpack_require__(8833);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QList.js
var QList = __webpack_require__(7011);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/expansion-item/QExpansionItem.js
var QExpansionItem = __webpack_require__(429);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCard.js
var QCard = __webpack_require__(151);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCardSection.js
var QCardSection = __webpack_require__(5589);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/inner-loading/QInnerLoading.js
var QInnerLoading = __webpack_require__(6941);
// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(7518);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/pages/users/ApproachDetailPage.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(ApproachDetailPagevue_type_script_lang_js, [['render',render],['__scopeId',"data-v-b2b5a478"]])

/* harmony default export */ const ApproachDetailPage = (__exports__);
;








runtime_auto_import_default()(ApproachDetailPagevue_type_script_lang_js, 'components', {QPage: QPage/* default */.Z,QBanner: QBanner/* default */.Z,QRating: QRating/* default */.Z,QList: QList/* default */.Z,QExpansionItem: QExpansionItem/* default */.Z,QCard: QCard/* default */.Z,QCardSection: QCardSection/* default */.Z,QInnerLoading: QInnerLoading/* default */.Z});


/***/ })

}]);
//# sourceMappingURL=702.js.map