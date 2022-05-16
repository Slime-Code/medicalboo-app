"use strict";
(self["webpackChunkmedicalbookapp"] = self["webpackChunkmedicalbookapp"] || []).push([[571],{

/***/ 7571:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SecondStepPage)
});

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.trim.js
var es_string_trim = __webpack_require__(6801);
// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(3673);
// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(2323);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/register/SecondStepPage.vue?vue&type=template&id=585bd2aa&scoped=true



const _withScopeId = n => ((0,runtime_core_esm_bundler/* pushScopeId */.dD)("data-v-585bd2aa"), n = n(), (0,runtime_core_esm_bundler/* popScopeId */.Cn)(), n);

const _hoisted_1 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" Dados de acesso ");

const _hoisted_2 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", null, " Aqui é onde você irá cadastrar a sua conte. É bem rápido. Para começar, informe para a gente os seus dados pessoais ", -1));

const _hoisted_3 = {
  class: "login-btn-area"
};
const _hoisted_4 = {
  class: "row"
};
const _hoisted_5 = {
  class: "row"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_btn = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-btn");

  const _component_q_toolbar_title = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-toolbar-title");

  const _component_q_toolbar = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-toolbar");

  const _component_q_header = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-header");

  const _component_q_input = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-input");

  const _component_q_form = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-form");

  const _component_q_page = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-page");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", null, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_header, {
    elevated: ""
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_toolbar, null, {
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
        to: "/register",
        flat: "",
        round: "",
        dense: "",
        icon: "arrow_back"
      }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_toolbar_title, {
        class: "text-center"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_hoisted_1]),
        _: 1
      })]),
      _: 1
    })]),
    _: 1
  }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_page, {
    padding: "",
    class: (0,shared_esm_bundler/* normalizeClass */.C_)(["row justify-center q-gutter-sm", {
      'items-center': _ctx.$q.screen.width > 599
    }])
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", {
      class: (0,shared_esm_bundler/* normalizeClass */.C_)({
        'col-4': _ctx.$q.screen.width > 599
      })
    }, [_hoisted_2, (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_form, {
      onSubmit: _ctx.nextStep
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_input, {
        dense: "",
        modelValue: _ctx.formData.email,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.formData.email = $event),
        rounded: "",
        outlined: "",
        type: "email",
        label: "Email",
        "lazy-rules": "",
        rules: [val => val !== null && val !== '' || 'Campo não pode estar vazio', val => _ctx.checarEmail(val) || 'Email inválido']
      }, null, 8, ["modelValue", "rules"]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_input, {
        dense: "",
        class: "q-mb-sm",
        modelValue: _ctx.formData.confirm_email,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.formData.confirm_email = $event),
        rounded: "",
        outlined: "",
        type: "email",
        label: "Confirme o email",
        "lazy-rules": "",
        rules: [val => val !== null && val !== '' || 'Campo não pode estar vazio', val => val.trim() === _ctx.formData.email.trim() || 'Email não correspondente']
      }, null, 8, ["modelValue", "rules"]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_input, {
        dense: "",
        modelValue: _ctx.formData.password,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => _ctx.formData.password = $event),
        rounded: "",
        outlined: "",
        type: "password",
        label: "Senha",
        "lazy-rules": "",
        rules: [val => val !== null && val !== '' || 'Campo não pode estar vazio']
      }, null, 8, ["modelValue", "rules"]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_input, {
        dense: "",
        modelValue: _ctx.formData.confirm_password,
        "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => _ctx.formData.confirm_password = $event),
        rounded: "",
        outlined: "",
        type: "password",
        label: "Confirme a senha",
        "lazy-rules": "",
        rules: [val => val !== null && val !== '' || 'Campo não pode estar vazio', val => val.trim() === _ctx.formData.password.trim() || 'Senha não correspondente']
      }, null, 8, ["modelValue", "rules"]), (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_3, [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_4, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
        label: "próximo passo",
        rounded: "",
        color: "primary",
        class: "q-mb-md full-width",
        type: "submit"
      })]), (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_5, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
        label: "cancelar",
        to: "/",
        class: "q-mb-md full-width",
        rounded: "",
        color: "secondary"
      })])])]),
      _: 1
    }, 8, ["onSubmit"])], 2)]),
    _: 1
  }, 8, ["class"])]);
}
;// CONCATENATED MODULE: ./src/pages/register/SecondStepPage.vue?vue&type=template&id=585bd2aa&scoped=true

// EXTERNAL MODULE: ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(1959);
// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.esm-bundler.js
var vue_router_esm_bundler = __webpack_require__(9582);
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm-bundler.js
var vuex_esm_bundler = __webpack_require__(5250);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/register/SecondStepPage.vue?vue&type=script&lang=js



/* harmony default export */ const SecondStepPagevue_type_script_lang_js = ((0,runtime_core_esm_bundler/* defineComponent */.aZ)({
  name: "SecondStepPage",

  setup() {
    const formData = (0,reactivity_esm_bundler/* reactive */.qj)({
      email: "",
      password: "",
      confirm_email: "",
      confirm_password: ""
    });
    const store = (0,vuex_esm_bundler/* useStore */.oR)();
    const router = (0,vue_router_esm_bundler/* useRouter */.tv)();
    const teste = (0,runtime_core_esm_bundler/* computed */.Fl)(() => store.getters["user/getData"]);

    const nextStep = () => {
      // store.dispatch('user/setDataForm', formData)
      store.commit("user/setFormSecond", formData); // alert(JSON.stringify(store.state.user.formData));

      router.push("/third");
    };

    function checarEmail(email) {
      var re = /\S+@\S+\.\S+/;
      return re.test(email);
    }

    return {
      checarEmail,
      teste,
      formData,
      nextStep
    };
  }

}));
;// CONCATENATED MODULE: ./src/pages/register/SecondStepPage.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(4260);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/header/QHeader.js
var QHeader = __webpack_require__(3812);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/toolbar/QToolbar.js
var QToolbar = __webpack_require__(9570);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__(2165);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/toolbar/QToolbarTitle.js
var QToolbarTitle = __webpack_require__(3747);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPage.js
var QPage = __webpack_require__(4379);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/form/QForm.js
var QForm = __webpack_require__(5269);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/input/QInput.js + 2 modules
var QInput = __webpack_require__(4842);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/field/QField.js
var QField = __webpack_require__(6115);
// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(7518);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/pages/register/SecondStepPage.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(SecondStepPagevue_type_script_lang_js, [['render',render],['__scopeId',"data-v-585bd2aa"]])

/* harmony default export */ const SecondStepPage = (__exports__);
;








runtime_auto_import_default()(SecondStepPagevue_type_script_lang_js, 'components', {QHeader: QHeader/* default */.Z,QToolbar: QToolbar/* default */.Z,QBtn: QBtn/* default */.Z,QToolbarTitle: QToolbarTitle/* default */.Z,QPage: QPage/* default */.Z,QForm: QForm/* default */.Z,QInput: QInput/* default */.Z,QField: QField/* default */.Z});


/***/ })

}]);
//# sourceMappingURL=571.js.map