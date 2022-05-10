"use strict";
(self["webpackChunkmedicalbookapp"] = self["webpackChunkmedicalbookapp"] || []).push([[159],{

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

/***/ 8159:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ LoginPage)
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(3673);
// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(2323);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/login/LoginPage.vue?vue&type=template&id=b4e4f59c


const _hoisted_1 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("br", null, null, -1);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_img = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-img");

  const _component_q_input = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-input");

  const _component_PrimaryButtom = (0,runtime_core_esm_bundler/* resolveComponent */.up)("PrimaryButtom");

  const _component_SecondaryButtom = (0,runtime_core_esm_bundler/* resolveComponent */.up)("SecondaryButtom");

  const _component_q_spinner = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-spinner");

  const _component_q_form = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-form");

  const _component_q_page = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-page");

  const _component_q_layout = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-layout");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_layout, {
    view: "lHh Lpr lFf"
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_page, {
      padding: ""
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", {
        class: (0,shared_esm_bundler/* normalizeClass */.C_)(["column bg-white q-gutter-md items-center", {
          'login-size': _ctx.$q.screen.width > 599,
          'absolute-center': _ctx.$q.screen.width > 599
        }])
      }, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_img, {
        class: "q-mb-xl",
        src: "img/logo-original.png",
        style: {
          "height": "80%",
          "width": "80%"
        }
      }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_form, {
        onSubmit: _ctx.handleLogin,
        class: "q-mt-lg"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_input, {
          dense: "",
          modelValue: _ctx.form.email,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.form.email = $event),
          rounded: "",
          outlined: "",
          label: "Email",
          "lazy-rules": "",
          rules: [val => val && val.length > 0 || 'Campo não pode estar vazio']
        }, null, 8, ["modelValue", "rules"]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_input, {
          dense: "",
          modelValue: _ctx.form.password,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.form.password = $event),
          rounded: "",
          outlined: "",
          type: "password",
          label: "Senha",
          "lazy-rules": "",
          rules: [val => val !== null && val !== '' || 'Campo não pode estar vazio']
        }, null, 8, ["modelValue", "rules"]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_PrimaryButtom, {
          class: "full-width q-my-md",
          label: "acessar",
          type: "submit"
        }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_SecondaryButtom, {
          disable: _ctx.$route.query.access === 'admin',
          label: "criar conta gratuita",
          link: "/register"
        }, null, 8, ["disable"]), _hoisted_1, _ctx.loading ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_spinner, {
          key: 0,
          class: "absolute-center",
          size: "xl",
          color: "primary"
        })) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true)]),
        _: 1
      }, 8, ["onSubmit"])], 2)]),
      _: 1
    })]),
    _: 1
  });
}
// EXTERNAL MODULE: ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(1959);
// EXTERNAL MODULE: ./src/composebles/useAuthUser.js
var useAuthUser = __webpack_require__(4958);
// EXTERNAL MODULE: ./src/composebles/useApi.js
var useApi = __webpack_require__(811);
// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.esm-bundler.js
var vue_router_esm_bundler = __webpack_require__(9582);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/PrimaryButtom.vue?vue&type=template&id=e64a3624&scoped=true

function PrimaryButtomvue_type_template_id_e64a3624_scoped_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_btn = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-btn");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_btn, {
    unelevated: "",
    to: _ctx.link,
    rounded: "",
    label: _ctx.label,
    id: _ctx.id,
    type: _ctx.type,
    dense: ""
  }, null, 8, ["to", "label", "id", "type"]);
}
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/PrimaryButtom.vue?vue&type=script&lang=js

/* harmony default export */ const PrimaryButtomvue_type_script_lang_js = ((0,runtime_core_esm_bundler/* defineComponent */.aZ)({
  name: 'PrimaryButtom',
  props: {
    label: {
      type: String,
      required: 'Botão'
    },
    id: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    }
  }
}));
;// CONCATENATED MODULE: ./src/components/PrimaryButtom.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(4260);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__(2165);
// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(7518);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/components/PrimaryButtom.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(PrimaryButtomvue_type_script_lang_js, [['render',PrimaryButtomvue_type_template_id_e64a3624_scoped_true_render],['__scopeId',"data-v-e64a3624"]])

/* harmony default export */ const PrimaryButtom = (__exports__);
;

runtime_auto_import_default()(PrimaryButtomvue_type_script_lang_js, 'components', {QBtn: QBtn/* default */.Z});

;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/SecondaryButtom.vue?vue&type=template&id=45ed27f7&scoped=true

function SecondaryButtomvue_type_template_id_45ed27f7_scoped_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_btn = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-btn");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_btn, {
    unelevated: "",
    to: _ctx.link,
    rounded: "",
    label: _ctx.label,
    id: _ctx.id,
    dense: ""
  }, null, 8, ["to", "label", "id"]);
}
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/SecondaryButtom.vue?vue&type=script&lang=js

/* harmony default export */ const SecondaryButtomvue_type_script_lang_js = ((0,runtime_core_esm_bundler/* defineComponent */.aZ)({
  name: 'SecondaryButtom',
  props: {
    label: {
      type: String,
      required: 'Botão'
    },
    id: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: ''
    }
  }
}));
;// CONCATENATED MODULE: ./src/components/SecondaryButtom.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./src/components/SecondaryButtom.vue




;


const SecondaryButtom_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(SecondaryButtomvue_type_script_lang_js, [['render',SecondaryButtomvue_type_template_id_45ed27f7_scoped_true_render],['__scopeId',"data-v-45ed27f7"]])

/* harmony default export */ const SecondaryButtom = (SecondaryButtom_exports_);
;

runtime_auto_import_default()(SecondaryButtomvue_type_script_lang_js, 'components', {QBtn: QBtn/* default */.Z});

// EXTERNAL MODULE: ./src/composebles/messageAPI.js
var messageAPI = __webpack_require__(6201);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/login/LoginPage.vue?vue&type=script&lang=js
 // import { mapActions } from 'vuex';







/* harmony default export */ const LoginPagevue_type_script_lang_js = ((0,runtime_core_esm_bundler/* defineComponent */.aZ)({
  name: "LoginPage",
  components: {
    PrimaryButtom: PrimaryButtom,
    SecondaryButtom: SecondaryButtom
  },

  setup() {
    const form = (0,reactivity_esm_bundler/* ref */.iH)({
      email: "",
      password: ""
    });
    const loading = (0,reactivity_esm_bundler/* ref */.iH)(false);
    const router = (0,vue_router_esm_bundler/* useRouter */.tv)();
    const $route = (0,vue_router_esm_bundler/* useRoute */.yj)();
    const {
      login
    } = (0,useAuthUser/* default */.Z)();

    const handleLogin = async () => {
      try {
        var _profile$;

        let profile = [];

        if ($route.query.access === "admin") {
          try {
            const {
              getByField
            } = (0,useApi/* default */.Z)();
            profile = await getByField("perfil", "email", form.value.email);
          } catch (error) {
            profile = [{
              profile_type_id: 0
            }];
            console.error(error);
          }
        }

        loading.value = true;
        await login(form.value);

        if (((_profile$ = profile[0]) === null || _profile$ === void 0 ? void 0 : _profile$.profile_type_id) === 3) {
          router.push({
            name: "painel"
          });
        } else {
          router.push("/home");
        }
      } catch (error) {
        // eslint-disable-next-line no-alert
        alert((0,messageAPI/* message */.y)(error.message));
      } finally {
        loading.value = false;
      }
    };

    return {
      handleLogin,
      form,
      loading
    };
  }
  /* methods: {
    ...mapActions('user', ['login']),
    onSubmit() {
      this.login(this.formData);
    },
  }, */


}));
;// CONCATENATED MODULE: ./src/pages/login/LoginPage.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/quasar/src/components/layout/QLayout.js + 1 modules
var QLayout = __webpack_require__(3066);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPage.js
var QPage = __webpack_require__(4379);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/img/QImg.js + 1 modules
var QImg = __webpack_require__(4027);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/form/QForm.js
var QForm = __webpack_require__(5269);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/input/QInput.js + 2 modules
var QInput = __webpack_require__(4842);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/spinner/QSpinner.js
var QSpinner = __webpack_require__(6833);
;// CONCATENATED MODULE: ./src/pages/login/LoginPage.vue




;
const LoginPage_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(LoginPagevue_type_script_lang_js, [['render',render]])

/* harmony default export */ const LoginPage = (LoginPage_exports_);
;






runtime_auto_import_default()(LoginPagevue_type_script_lang_js, 'components', {QLayout: QLayout/* default */.Z,QPage: QPage/* default */.Z,QImg: QImg/* default */.Z,QForm: QForm/* default */.Z,QInput: QInput/* default */.Z,QSpinner: QSpinner/* default */.Z});


/***/ })

}]);
//# sourceMappingURL=159.js.map