"use strict";
(self["webpackChunkmedicalbookapp"] = self["webpackChunkmedicalbookapp"] || []).push([[866],{

/***/ 7866:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ConcluidoPage)
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(3673);
// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(2323);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/register/ConcluidoPage.vue?vue&type=template&id=67d3286e&scoped=true


const _withScopeId = n => ((0,runtime_core_esm_bundler/* pushScopeId */.dD)("data-v-67d3286e"), n = n(), (0,runtime_core_esm_bundler/* popScopeId */.Cn)(), n);

const _hoisted_1 = {
  class: "col"
};

const _hoisted_2 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", {
  class: "q-my-lg text-body1 text-center"
}, [/*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" O seu cadastro foi concluído com sucesso, foi enviado um email de confirmaçāo, por favor acesse o seu email para acessar o "), /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("span", {
  class: "text-bold q-pa-md text-primary"
}, "MedicalBook"), /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" :) ")], -1));

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_icon = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-icon");

  const _component_q_btn = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-btn");

  const _component_q_page = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-page");

  const _component_q_layout = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-layout");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_layout, {
    view: "lHh Lpr lFf"
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_page, {
      padding: "",
      class: "bg-white"
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", {
        class: (0,shared_esm_bundler/* normalizeClass */.C_)(["column items-center", {
          'absolute-center': _ctx.$q.screen.width > 599
        }])
      }, [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_1, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
        name: "check_circle",
        class: "text-white",
        size: "300px",
        color: "green"
      })]), _hoisted_2, (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
        class: "col",
        href: "https://mail.google.com/mail/u/0/?tab=km#inbox",
        label: "Ok",
        rounded: "",
        color: "green",
        type: "submit"
      })], 2)]),
      _: 1
    })]),
    _: 1
  });
}
;// CONCATENATED MODULE: ./src/pages/register/ConcluidoPage.vue?vue&type=template&id=67d3286e&scoped=true

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(5363);
// EXTERNAL MODULE: ./src/composebles/useAuthUser.js
var useAuthUser = __webpack_require__(4958);
// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.esm-bundler.js
var vue_router_esm_bundler = __webpack_require__(9582);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/register/ConcluidoPage.vue?vue&type=script&lang=js




/* harmony default export */ const ConcluidoPagevue_type_script_lang_js = ((0,runtime_core_esm_bundler/* defineComponent */.aZ)({
  name: "ConcluidoPage",

  setup() {
    const router = (0,vue_router_esm_bundler/* useRouter */.tv)();
    const {
      user
    } = (0,useAuthUser/* default */.Z)();

    const nextStep = async () => {
      try {
        router.replace({
          name: "email-confirmation",
          query: {
            email: user.email
          }
        });
      } catch (error) {
        alert(error.message);
      }
    };

    return {
      nextStep
    };
  }

}));
;// CONCATENATED MODULE: ./src/pages/register/ConcluidoPage.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(4260);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/layout/QLayout.js + 1 modules
var QLayout = __webpack_require__(3066);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPage.js
var QPage = __webpack_require__(4379);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__(4554);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__(2165);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/field/QField.js
var QField = __webpack_require__(6115);
// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(7518);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/pages/register/ConcluidoPage.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(ConcluidoPagevue_type_script_lang_js, [['render',render],['__scopeId',"data-v-67d3286e"]])

/* harmony default export */ const ConcluidoPage = (__exports__);
;





runtime_auto_import_default()(ConcluidoPagevue_type_script_lang_js, 'components', {QLayout: QLayout/* default */.Z,QPage: QPage/* default */.Z,QIcon: QIcon/* default */.Z,QBtn: QBtn/* default */.Z,QField: QField/* default */.Z});


/***/ })

}]);
//# sourceMappingURL=866.js.map