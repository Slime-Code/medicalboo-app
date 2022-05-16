"use strict";
(self["webpackChunkmedicalbookapp"] = self["webpackChunkmedicalbookapp"] || []).push([[798],{

/***/ 3798:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ EditarSenha)
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(3673);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/users/EditarSenha.vue?vue&type=template&id=f920a0b2&scoped=true


const _withScopeId = n => (_pushScopeId("data-v-f920a0b2"), n = n(), _popScopeId(), n);

const _hoisted_1 = {
  class: "column",
  align: "center"
};
const _hoisted_2 = {
  class: "col item full-width",
  style: {
    "max-width": "500px"
  }
};
const _hoisted_3 = {
  key: 0,
  class: "q-pt-md q-gutter-y-md"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_input = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-input");

  const _component_q_btn = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-btn");

  const _component_q_form = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-form");

  const _component_q_page = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-page");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_page, {
    class: "flex flex-center"
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_form, {
      onSubmit: _ctx.handleResetEmail
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_1, [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_2, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_input, {
        modelValue: _ctx.text,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.text = $event),
        label: "Senha Antiga"
      }, null, 8, ["modelValue"]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_input, {
        modelValue: _ctx.email,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.email = $event),
        label: "Digite sua Nova Senha"
      }, null, 8, ["modelValue"]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_input, {
        modelValue: _ctx.email2,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => _ctx.email2 = $event),
        label: "Digite sua Nova Senha"
      }, null, 8, ["modelValue"]), _ctx.email === _ctx.email2 && _ctx.email !== '' ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", _hoisted_3, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
        "no-caps": "",
        label: "Enviar",
        class: "full-width",
        color: "primary",
        type: "submit"
      })])) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true)])])]),
      _: 1
    }, 8, ["onSubmit"])]),
    _: 1
  });
}
;// CONCATENATED MODULE: ./src/pages/users/EditarSenha.vue?vue&type=template&id=f920a0b2&scoped=true

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(5363);
// EXTERNAL MODULE: ./src/functions/functionShowNotifications.js
var functionShowNotifications = __webpack_require__(4605);
// EXTERNAL MODULE: ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(1959);
// EXTERNAL MODULE: ./src/composebles/useAuthUser.js
var useAuthUser = __webpack_require__(4958);
// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.esm-bundler.js
var vue_router_esm_bundler = __webpack_require__(9582);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/users/EditarSenha.vue?vue&type=script&lang=js





/* harmony default export */ const EditarSenhavue_type_script_lang_js = ((0,runtime_core_esm_bundler/* defineComponent */.aZ)({
  name: 'EditarSenha',

  setup() {
    const router = (0,vue_router_esm_bundler/* useRouter */.tv)();
    const {
      user
    } = (0,useAuthUser/* default */.Z)();
    const aux = (0,reactivity_esm_bundler/* ref */.iH)(user);
    const {
      password
    } = aux;
    const valid = (0,reactivity_esm_bundler/* ref */.iH)(true); // alert(JSON.stringify(aux.value));

    const {
      sendPasswordRestEmail
    } = (0,useAuthUser/* default */.Z)();
    const email = (0,reactivity_esm_bundler/* ref */.iH)('');
    const email2 = (0,reactivity_esm_bundler/* ref */.iH)('');
    const text = (0,reactivity_esm_bundler/* ref */.iH)('');

    const handleResetEmail = async () => {
      try {
        await sendPasswordRestEmail(text.value);
        (0,functionShowNotifications/* showSuccessNotification */.L)(`Senha Alterada com Sucesso: ${text.value}`);
        router.replace({
          name: ''
        });
      } catch (error) {
        alert(error);
      }
    };

    (0,runtime_core_esm_bundler/* onMounted */.bv)(() => {
      if (email.value === email2.value) {
        valid.value = false;
      }
    });
    return {
      handleResetEmail,
      password,
      user,
      text,
      email,
      email2,
      valid
    };
  }

}));
;// CONCATENATED MODULE: ./src/pages/users/EditarSenha.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(4260);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPage.js
var QPage = __webpack_require__(4379);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/form/QForm.js
var QForm = __webpack_require__(5269);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/input/QInput.js + 2 modules
var QInput = __webpack_require__(4842);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__(2165);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__(4554);
// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(7518);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/pages/users/EditarSenha.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(EditarSenhavue_type_script_lang_js, [['render',render],['__scopeId',"data-v-f920a0b2"]])

/* harmony default export */ const EditarSenha = (__exports__);
;





runtime_auto_import_default()(EditarSenhavue_type_script_lang_js, 'components', {QPage: QPage/* default */.Z,QForm: QForm/* default */.Z,QInput: QInput/* default */.Z,QBtn: QBtn/* default */.Z,QIcon: QIcon/* default */.Z});


/***/ })

}]);
//# sourceMappingURL=798.js.map