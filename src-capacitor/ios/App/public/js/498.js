"use strict";
(self["webpackChunkmedicalbookapp"] = self["webpackChunkmedicalbookapp"] || []).push([[498],{

/***/ 6201:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ message)
/* harmony export */ });
function message(message) {
  switch (message) {
    case 'User already registered':
      return 'Usuário já cadastrado!';

    case 'Invalid login credentials':
      return 'Usuário ou senha errado!';

    default:
      return 'Erro ao se conetar com o servidor, verifique a sua conexão com a internet!';
  }
}

/***/ }),

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

/***/ 7498:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ThirdStepPage)
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(3673);
// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(2323);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/register/ThirdStepPage.vue?vue&type=template&id=18a2531a&scoped=true


const _withScopeId = n => ((0,runtime_core_esm_bundler/* pushScopeId */.dD)("data-v-18a2531a"), n = n(), (0,runtime_core_esm_bundler/* popScopeId */.Cn)(), n);

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
const _hoisted_6 = {
  class: "flex flex-top"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_btn = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-btn");

  const _component_q_toolbar_title = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-toolbar-title");

  const _component_q_toolbar = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-toolbar");

  const _component_q_header = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-header");

  const _component_q_select = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-select");

  const _component_q_form = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-form");

  const _component_q_page = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-page");

  const _component_q_spinner = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-spinner");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", null, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_header, {
    elevated: ""
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_toolbar, null, {
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
        to: "/second",
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
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_select, {
        dense: "",
        rounded: "",
        outlined: "",
        loading: _ctx.loading,
        modelValue: _ctx.formData.occupation_area,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.formData.occupation_area = $event),
        options: _ctx.options,
        label: "Área de actuação",
        class: "q-mb-md",
        rules: [val => !!val || 'Campo obrigatório']
      }, null, 8, ["loading", "modelValue", "options", "rules"]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_select, {
        loading: _ctx.loading,
        dense: "",
        rounded: "",
        outlined: "",
        modelValue: _ctx.formData.graduation_year,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.formData.graduation_year = $event),
        options: _ctx.options1,
        label: "Ano de formatura",
        rules: [val => !!val || 'Campo obrigatório']
      }, null, 8, ["loading", "modelValue", "options", "rules"]), (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_3, [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_4, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
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
  }, 8, ["class"]), (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_6, [_ctx.loading1 ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_spinner, {
    key: 0,
    class: "absolute-center",
    size: "xl",
    color: "primary"
  })) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true)])]);
}
;// CONCATENATED MODULE: ./src/pages/register/ThirdStepPage.vue?vue&type=template&id=18a2531a&scoped=true

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.json.stringify.js
var es_json_stringify = __webpack_require__(2100);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(5363);
// EXTERNAL MODULE: ./src/functions/functionShowNotifications.js
var functionShowNotifications = __webpack_require__(4605);
// EXTERNAL MODULE: ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(1959);
// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.esm-bundler.js
var vue_router_esm_bundler = __webpack_require__(9582);
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm-bundler.js
var vuex_esm_bundler = __webpack_require__(5250);
// EXTERNAL MODULE: ./node_modules/quasar/src/composables/use-quasar.js
var use_quasar = __webpack_require__(8825);
// EXTERNAL MODULE: ./src/composebles/useAuthUser.js
var useAuthUser = __webpack_require__(4958);
// EXTERNAL MODULE: ./src/composebles/useApi.js
var useApi = __webpack_require__(811);
// EXTERNAL MODULE: ./src/composebles/messageAPI.js
var messageAPI = __webpack_require__(6201);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/register/ThirdStepPage.vue?vue&type=script&lang=js






;


 // import user from '../../api/User';

/* eslint-disable no-alert */

/* harmony default export */ const ThirdStepPagevue_type_script_lang_js = ((0,runtime_core_esm_bundler/* defineComponent */.aZ)({
  name: "ThirdStepPage",

  setup() {
    const {
      register
    } = (0,useAuthUser/* default */.Z)();
    const loading = (0,reactivity_esm_bundler/* ref */.iH)(true);
    const loading1 = (0,reactivity_esm_bundler/* ref */.iH)(false);
    const {
      list
    } = (0,useApi/* default */.Z)();
    const {
      post
    } = (0,useApi/* default */.Z)();
    const store = (0,vuex_esm_bundler/* useStore */.oR)();
    const router = (0,vue_router_esm_bundler/* useRouter */.tv)();
    const teste = (0,runtime_core_esm_bundler/* computed */.Fl)(() => store.getters["user/getData"]);
    const formData = (0,reactivity_esm_bundler/* reactive */.qj)({
      occupation_area: "",
      graduation_year: ""
    });
    const options = (0,reactivity_esm_bundler/* ref */.iH)([]);
    const options1 = (0,reactivity_esm_bundler/* ref */.iH)([]);

    const listTopicsAproachs = async () => {
      try {
        loading.value = true;
        const aux1 = await list("occupation_area");
        options.value = aux1.map(elem => elem.occupation_area);
        const aux = await list("graduation_year");

        for (let index = 1922; index <= new Date().getFullYear(); index++) {
          options1.value.push(index);
        }

        loading.value = false;
      } catch (error) {
        (0,functionShowNotifications/* showErrorNotification */.s)(`houve uma falha ao carregar os dados do banco: ${JSON.stringify(error)}`);
      }
    };

    (0,runtime_core_esm_bundler/* onMounted */.bv)(() => {
      listTopicsAproachs();
    });
    const $q = (0,use_quasar/* default */.Z)();

    const nextStep = async () => {
      try {
        loading1.value = true;
        store.commit("user/setFormThird", formData);
        const form = { ...store.state.user.formData,
          month: new Date(Date.now()).getMonth(),
          year: new Date(Date.now()).getFullYear()
        };
        const user = await register(form); // delete form.email;
        // delete form.password;

        form.user_id = user.id;
        await post("perfil", form);
        router.replace({
          name: "concluido"
        });
        loading1.value = false;
      } catch (error) {
        loading1.value = false;
        (0,functionShowNotifications/* showErrorNotification */.s)((0,messageAPI/* message */.y)(error.message));
      }
    };

    (0,runtime_core_esm_bundler/* onMounted */.bv)(() => {
      if (!teste.value.email.length) {
        router.push("/register");
      }
    });
    return {
      loading,
      loading1,
      formData,
      options,
      options1,
      nextStep,
      teste
    };
  }

}));
;// CONCATENATED MODULE: ./src/pages/register/ThirdStepPage.vue?vue&type=script&lang=js
 
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
// EXTERNAL MODULE: ./node_modules/quasar/src/components/select/QSelect.js + 1 modules
var QSelect = __webpack_require__(3017);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/spinner/QSpinner.js
var QSpinner = __webpack_require__(6833);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/field/QField.js
var QField = __webpack_require__(6115);
// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(7518);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/pages/register/ThirdStepPage.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(ThirdStepPagevue_type_script_lang_js, [['render',render],['__scopeId',"data-v-18a2531a"]])

/* harmony default export */ const ThirdStepPage = (__exports__);
;









runtime_auto_import_default()(ThirdStepPagevue_type_script_lang_js, 'components', {QHeader: QHeader/* default */.Z,QToolbar: QToolbar/* default */.Z,QBtn: QBtn/* default */.Z,QToolbarTitle: QToolbarTitle/* default */.Z,QPage: QPage/* default */.Z,QForm: QForm/* default */.Z,QSelect: QSelect/* default */.Z,QSpinner: QSpinner/* default */.Z,QField: QField/* default */.Z});


/***/ })

}]);
//# sourceMappingURL=498.js.map