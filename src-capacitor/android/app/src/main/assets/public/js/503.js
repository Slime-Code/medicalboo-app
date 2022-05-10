"use strict";
(self["webpackChunkmedicalbookapp"] = self["webpackChunkmedicalbookapp"] || []).push([[503],{

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

/***/ 503:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ FirstStepPage)
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(3673);
// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(2323);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/register/FirstStepPage.vue?vue&type=template&id=2373d1ce


const _hoisted_1 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" Boas Vindas! ");

const _hoisted_2 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", null, "Aqui é onde você irá cadastrar a sua conte. É bem rápido. Para começar, informe para a gente os seus dados pessoais", -1);

const _hoisted_3 = {
  class: "q-pa-xs"
};
const _hoisted_4 = {
  class: "login-btn-area"
};
const _hoisted_5 = {
  class: "row q-mt-md"
};
const _hoisted_6 = {
  class: "row"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_toolbar_title = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-toolbar-title");

  const _component_q_toolbar = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-toolbar");

  const _component_q_header = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-header");

  const _component_q_input = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-input");

  const _component_q_option_group = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-option-group");

  const _component_q_select = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-select");

  const _component_q_btn = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-btn");

  const _component_q_form = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-form");

  const _component_q_page = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-page");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", null, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_header, {
    class: "bg-primary",
    elevated: ""
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_toolbar, null, {
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_toolbar_title, {
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
      class: (0,shared_esm_bundler/* normalizeClass */.C_)(["explore", {
        'col-4': _ctx.$q.screen.width > 599
      }])
    }, [_hoisted_2, (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_form, {
      onSubmit: _ctx.nextStep
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_input, {
        dense: "",
        modelValue: _ctx.formData.name,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.formData.name = $event),
        rounded: "",
        outlined: "",
        type: "text",
        label: "Nome completo",
        "lazy-rules": "",
        rules: [val => val !== null && val !== '' || 'Campo não pode estar vazio']
      }, null, 8, ["modelValue", "rules"]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_input, {
        dense: "",
        modelValue: _ctx.formData.birthday,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.formData.birthday = $event),
        rounded: "",
        outlined: "",
        type: "date",
        label: "Data de nascimento",
        "stack-label": "",
        "lazy-rules": "",
        rules: [val => val !== null && val !== '' || 'Campo não pode estar vazio']
      }, null, 8, ["modelValue", "rules"]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_input, {
        dense: "",
        modelValue: _ctx.formData.cpf,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => _ctx.formData.cpf = $event),
        rounded: "",
        outlined: "",
        type: "text",
        label: "CPF",
        "lazy-rules": "",
        mask: "###########",
        rules: [val => val !== null && val !== '' || 'Campo não pode estar vazio', val => _ctx.TestaCPF(val) || 'CPF inválido']
      }, null, 8, ["modelValue", "rules"]), (0,runtime_core_esm_bundler/* createElementVNode */._)("div", null, [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_3, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_option_group, {
        modelValue: _ctx.formData.profile_type_id,
        "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => _ctx.formData.profile_type_id = $event),
        options: _ctx.tipo,
        color: "primary",
        inline: ""
      }, null, 8, ["modelValue", "options"])])]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_select, {
        dense: "",
        rounded: "",
        outlined: "",
        modelValue: _ctx.formData.nationality,
        "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => _ctx.formData.nationality = $event),
        options: _ctx.options,
        label: "Nacionalidade"
      }, null, 8, ["modelValue", "options"]), (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_4, [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_5, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
        label: "próximo passo",
        rounded: "",
        color: "primary",
        type: "submit",
        class: "q-mb-md full-width"
      })]), (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_6, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
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
;// CONCATENATED MODULE: ./src/pages/register/FirstStepPage.vue?vue&type=template&id=2373d1ce

// EXTERNAL MODULE: ./node_modules/quasar/src/plugins/Notify.js
var Notify = __webpack_require__(4434);
// EXTERNAL MODULE: ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(1959);
// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.esm-bundler.js
var vue_router_esm_bundler = __webpack_require__(9582);
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm-bundler.js
var vuex_esm_bundler = __webpack_require__(5250);
// EXTERNAL MODULE: ./src/composebles/useApi.js
var useApi = __webpack_require__(811);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/register/FirstStepPage.vue?vue&type=script&lang=js
;




/* harmony default export */ const FirstStepPagevue_type_script_lang_js = ((0,runtime_core_esm_bundler/* defineComponent */.aZ)({
  name: 'FirstStepPage',

  setup() {
    const {
      list
    } = (0,useApi/* default */.Z)();
    const loading = (0,reactivity_esm_bundler/* ref */.iH)(true);
    const formData = (0,reactivity_esm_bundler/* reactive */.qj)({
      name: '',
      birthday: '',
      cpf: '',
      nationality: '',
      profile_type_id: 1
    });
    const options = (0,reactivity_esm_bundler/* ref */.iH)([]);
    const tipo = (0,reactivity_esm_bundler/* ref */.iH)([{
      label: 'Estudante',
      value: 1
    }, {
      label: 'Profissional',
      value: 2
    }]);

    const listTopicsAproachs = async () => {
      try {
        const aux = await list('nationality');
        options.value = aux.map(elem => elem.name);
        loading.value = false;
      } catch (error) {
        (0,Notify/* default */.Z)(error);
      }
    };

    (0,runtime_core_esm_bundler/* onMounted */.bv)(() => {
      listTopicsAproachs();
    });
    const store = (0,vuex_esm_bundler/* useStore */.oR)();
    const router = (0,vue_router_esm_bundler/* useRouter */.tv)();

    const nextStep = () => {
      store.commit('user/setFormOne', formData);
      router.push('/second');
    };

    function TestaCPF(strCPF) {
      var Soma;
      var Resto;
      Soma = 0;
      if (strCPF == "00000000000") return false;

      for (let i = 1; i <= 9; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);

      Resto = Soma * 10 % 11;
      if (Resto == 10 || Resto == 11) Resto = 0;
      if (Resto != parseInt(strCPF.substring(9, 10))) return false;
      Soma = 0;

      for (let i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);

      Resto = Soma * 10 % 11;
      if (Resto == 10 || Resto == 11) Resto = 0;
      if (Resto != parseInt(strCPF.substring(10, 11))) return false;
      return true;
    }

    return {
      TestaCPF,
      formData,
      options,
      tipo,
      nextStep
    };
  }

}));
;// CONCATENATED MODULE: ./src/pages/register/FirstStepPage.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(4260);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/header/QHeader.js
var QHeader = __webpack_require__(3812);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/toolbar/QToolbar.js
var QToolbar = __webpack_require__(9570);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/toolbar/QToolbarTitle.js
var QToolbarTitle = __webpack_require__(3747);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPage.js
var QPage = __webpack_require__(4379);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/form/QForm.js
var QForm = __webpack_require__(5269);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/input/QInput.js + 2 modules
var QInput = __webpack_require__(4842);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/option-group/QOptionGroup.js + 1 modules
var QOptionGroup = __webpack_require__(8758);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/select/QSelect.js + 1 modules
var QSelect = __webpack_require__(3017);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__(2165);
// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(7518);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/pages/register/FirstStepPage.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(FirstStepPagevue_type_script_lang_js, [['render',render]])

/* harmony default export */ const FirstStepPage = (__exports__);
;









runtime_auto_import_default()(FirstStepPagevue_type_script_lang_js, 'components', {QHeader: QHeader/* default */.Z,QToolbar: QToolbar/* default */.Z,QToolbarTitle: QToolbarTitle/* default */.Z,QPage: QPage/* default */.Z,QForm: QForm/* default */.Z,QInput: QInput/* default */.Z,QOptionGroup: QOptionGroup/* default */.Z,QSelect: QSelect/* default */.Z,QBtn: QBtn/* default */.Z});


/***/ })

}]);
//# sourceMappingURL=503.js.map