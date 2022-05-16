"use strict";
(self["webpackChunkmedicalbookapp"] = self["webpackChunkmedicalbookapp"] || []).push([[185],{

/***/ 4185:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ InitPage)
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(3673);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/login/InitPage.vue?vue&type=template&id=7025bac8&scoped=true


const _withScopeId = n => (_pushScopeId("data-v-7025bac8"), n = n(), _popScopeId(), n);

const _hoisted_1 = {
  key: 0
};
const _hoisted_2 = {
  key: 1,
  class: "column items-center absolute-center q-gutter-y-lg",
  style: {
    "width": "300px",
    "height": "300px"
  }
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_img = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-img");

  const _component_q_inner_loading = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-inner-loading");

  const _component_q_spinner_dots = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-spinner-dots");

  const _component_q_page = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-page");

  const _component_q_layout = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-layout");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_layout, {
    view: "lHh Lpr lFf"
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_page, {
      class: "constrain"
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_ctx.$q.screen.width <= 599 ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", _hoisted_1, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_img, {
        src: "img/BG.png",
        loading: "lazy",
        height: "100%"
      }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_inner_loading, {
        showing: true,
        color: "white",
        class: "bg-transparent"
      })])) : ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", _hoisted_2, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_img, {
        src: "img/logo-original.png"
      }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_spinner_dots, {
        color: "primary",
        size: "4em"
      })]))]),
      _: 1
    })]),
    _: 1
  });
}
;// CONCATENATED MODULE: ./src/pages/login/InitPage.vue?vue&type=template&id=7025bac8&scoped=true

// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.esm-bundler.js
var vue_router_esm_bundler = __webpack_require__(9582);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/login/InitPage.vue?vue&type=script&lang=js


/* harmony default export */ const InitPagevue_type_script_lang_js = ((0,runtime_core_esm_bundler/* defineComponent */.aZ)({
  name: "InitPage",

  setup() {
    const $router = (0,vue_router_esm_bundler/* useRouter */.tv)();
    (0,runtime_core_esm_bundler/* onMounted */.bv)(() => {
      setTimeout(() => {
        $router.push({
          name: 'login'
        });
      }, 2500);
    });
    return {};
  }

}));
;// CONCATENATED MODULE: ./src/pages/login/InitPage.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(4260);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/layout/QLayout.js + 1 modules
var QLayout = __webpack_require__(3066);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPage.js
var QPage = __webpack_require__(4379);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/img/QImg.js + 1 modules
var QImg = __webpack_require__(4027);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/inner-loading/QInnerLoading.js
var QInnerLoading = __webpack_require__(6941);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/spinner/QSpinnerDots.js
var QSpinnerDots = __webpack_require__(4765);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__(2165);
// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(7518);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/pages/login/InitPage.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(InitPagevue_type_script_lang_js, [['render',render],['__scopeId',"data-v-7025bac8"]])

/* harmony default export */ const InitPage = (__exports__);
;






runtime_auto_import_default()(InitPagevue_type_script_lang_js, 'components', {QLayout: QLayout/* default */.Z,QPage: QPage/* default */.Z,QImg: QImg/* default */.Z,QInnerLoading: QInnerLoading/* default */.Z,QSpinnerDots: QSpinnerDots/* default */.Z,QBtn: QBtn/* default */.Z});


/***/ })

}]);
//# sourceMappingURL=185.js.map