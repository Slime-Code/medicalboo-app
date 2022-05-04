"use strict";
(self["webpackChunkmedicalbookapp"] = self["webpackChunkmedicalbookapp"] || []).push([[8],{

/***/ 7008:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RegisterPage)
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(3673);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/register/RegisterPage.vue?vue&type=template&id=243d173c&scoped=true


const _withScopeId = n => (_pushScopeId("data-v-243d173c"), n = n(), _popScopeId(), n);

const _hoisted_1 = {
  class: "q-pa-md"
};

const _hoisted_2 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" For each ad campaign that you create, you can control how much you're willing to spend on clicks and conversions, which networks and geographical locations you want your ads to show on, and more. ");

const _hoisted_3 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" An ad group contains one or more ads which target a shared set of keywords. ");

const _hoisted_4 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" Try out different ad text to see what brings in the most customers, and learn how to enhance your ads using features like ad extensions. If you run into any problems with your ads, find out how to tell if they're running and how to resolve approval issues. ");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_btn = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-btn");

  const _component_q_stepper_navigation = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-stepper-navigation");

  const _component_q_step = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-step");

  const _component_q_stepper = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-stepper");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", _hoisted_1, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
    label: "Reset",
    push: "",
    color: "white",
    "text-color": "primary",
    onClick: _ctx.reset,
    class: "q-mb-md"
  }, null, 8, ["onClick"]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_stepper, {
    modelValue: _ctx.step,
    "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => _ctx.step = $event),
    "header-nav": "",
    ref: "stepper",
    color: "green-13",
    animated: ""
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_step, {
      name: 1,
      icon: "settings",
      done: _ctx.done1
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_hoisted_2, (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_stepper_navigation, null, {
        default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
          onClick: _cache[0] || (_cache[0] = () => {
            _ctx.done1 = true;
            _ctx.step = 2;
          }),
          color: "green-13",
          label: "Continue"
        })]),
        _: 1
      })]),
      _: 1
    }, 8, ["done"]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_step, {
      name: 2,
      icon: "create_new_folder",
      done: _ctx.done2
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_hoisted_3, (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_stepper_navigation, null, {
        default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
          onClick: _cache[1] || (_cache[1] = () => {
            _ctx.done2 = true;
            _ctx.step = 3;
          }),
          color: "green-13",
          label: "Continue"
        }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
          flat: "",
          onClick: _cache[2] || (_cache[2] = $event => _ctx.step = 1),
          color: "green-13",
          label: "Back",
          class: "q-ml-sm"
        })]),
        _: 1
      })]),
      _: 1
    }, 8, ["done"]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_step, {
      name: 3,
      icon: "add_comment",
      done: _ctx.done3
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_hoisted_4, (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_stepper_navigation, null, {
        default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
          color: "green-13",
          onClick: _cache[3] || (_cache[3] = $event => _ctx.done3 = true),
          label: "Finish"
        }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
          flat: "",
          onClick: _cache[4] || (_cache[4] = $event => _ctx.step = 2),
          color: "green-13",
          label: "Back",
          class: "q-ml-sm"
        })]),
        _: 1
      })]),
      _: 1
    }, 8, ["done"])]),
    _: 1
  }, 8, ["modelValue"])]);
}
;// CONCATENATED MODULE: ./src/pages/register/RegisterPage.vue?vue&type=template&id=243d173c&scoped=true

// EXTERNAL MODULE: ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(1959);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/register/RegisterPage.vue?vue&type=script&lang=js

/* harmony default export */ const RegisterPagevue_type_script_lang_js = ((0,runtime_core_esm_bundler/* defineComponent */.aZ)({
  name: 'FirstStepPage',

  setup() {
    const step = (0,reactivity_esm_bundler/* ref */.iH)(1);
    const done1 = (0,reactivity_esm_bundler/* ref */.iH)(false);
    const done2 = (0,reactivity_esm_bundler/* ref */.iH)(false);
    const done3 = (0,reactivity_esm_bundler/* ref */.iH)(false);
    return {
      step,
      done1,
      done2,
      done3,

      reset() {
        done1.value = false;
        done2.value = false;
        done3.value = false;
        step.value = 1;
      }

    };
  }

}));
;// CONCATENATED MODULE: ./src/pages/register/RegisterPage.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(4260);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__(2165);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/stepper/QStepper.js
var QStepper = __webpack_require__(3518);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/stepper/QStep.js
var QStep = __webpack_require__(6552);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/stepper/QStepperNavigation.js
var QStepperNavigation = __webpack_require__(6877);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/header/QHeader.js
var QHeader = __webpack_require__(3812);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/field/QField.js
var QField = __webpack_require__(6115);
// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(7518);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/pages/register/RegisterPage.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(RegisterPagevue_type_script_lang_js, [['render',render],['__scopeId',"data-v-243d173c"]])

/* harmony default export */ const RegisterPage = (__exports__);
;






runtime_auto_import_default()(RegisterPagevue_type_script_lang_js, 'components', {QBtn: QBtn/* default */.Z,QStepper: QStepper/* default */.Z,QStep: QStep/* default */.Z,QStepperNavigation: QStepperNavigation/* default */.Z,QHeader: QHeader/* default */.Z,QField: QField/* default */.Z});


/***/ })

}]);
//# sourceMappingURL=8.js.map