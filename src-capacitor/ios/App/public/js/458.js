"use strict";
(self["webpackChunkmedicalbookapp"] = self["webpackChunkmedicalbookapp"] || []).push([[458],{

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

/***/ 9458:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ProfilePage)
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(3673);
// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(2323);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/users/ProfilePage.vue?vue&type=template&id=43acd9a4&scoped=true


const _withScopeId = n => ((0,runtime_core_esm_bundler/* pushScopeId */.dD)("data-v-43acd9a4"), n = n(), (0,runtime_core_esm_bundler/* popScopeId */.Cn)(), n);

const _hoisted_1 = {
  class: "column",
  align: "center"
};
const _hoisted_2 = {
  class: "col item"
};
const _hoisted_3 = {
  class: "col item"
};
const _hoisted_4 = {
  key: 0,
  style: {
    "margin": "0"
  }
};

const _hoisted_5 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("span", null, "Assinatura Gratis", -1));

const _hoisted_6 = {
  class: "col item q-ma-md"
};
const _hoisted_7 = {
  class: "row"
};
const _hoisted_8 = {
  class: "col"
};
const _hoisted_9 = {
  class: "col"
};
const _hoisted_10 = {
  class: "col item"
};
const _hoisted_11 = {
  class: "column q-ma-md"
};
const _hoisted_12 = {
  class: "col"
};
const _hoisted_13 = {
  class: "text-h6 row items-center q-pb-none"
};

const _hoisted_14 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", null, "Avalie o App", -1));

const _hoisted_15 = {
  class: "q-pa-md"
};

const _hoisted_16 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)("Obrigado pela sua classificação, ajudar-nos-a a melhorar o App: ");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_icon = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-icon");

  const _component_q_badge = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-badge");

  const _component_q_btn = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-btn");

  const _component_q_spinner = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-spinner");

  const _component_q_space = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-space");

  const _component_q_card_section = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-card-section");

  const _component_q_rating = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-rating");

  const _component_q_form = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-form");

  const _component_q_separator = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-separator");

  const _component_q_card = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-card");

  const _component_q_dialog = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-dialog");

  const _component_q_page = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-page");

  const _directive_close_popup = (0,runtime_core_esm_bundler/* resolveDirective */.Q2)("close-popup");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_page, {
    class: "flex flex-center"
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_1, [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_2, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
      style: {
        "background": "#1a4b9a",
        "color": "#1378b3"
      },
      round: "",
      icon: "fas fa-user",
      size: "40px"
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_badge, {
        class: "pic",
        style: {
          "background": "#49d16b"
        },
        rounded: ""
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
          dense: "",
          name: "eva-camera-outline",
          color: "white",
          size: "30px"
        })]),
        _: 1
      })]),
      _: 1
    })]), (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_3, [_ctx.user ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("h6", _hoisted_4, (0,shared_esm_bundler/* toDisplayString */.zw)(_ctx.user.user_metadata.name), 1)) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true), _hoisted_5]), (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_6, [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_7, [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_8, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
      to: "meus-dados",
      "no-caps": "",
      outline: "",
      unelevated: "",
      rounded: "",
      label: "Meus dados",
      class: "btn-profile btn-sec"
    })]), (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_9, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
      to: {
        name: 'prime'
      },
      "no-caps": "",
      "no-wrap": "",
      unelevated: "",
      rounded: "",
      "text-color": "black",
      icon: "fas fa-crown",
      label: "Quero ser Prime",
      class: "btn-profile btn-prime"
    })])])]), _ctx.loading ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_spinner, {
      key: 0,
      class: "absolute-center",
      size: "xl",
      color: "primary"
    })) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true), (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_10, [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_11, [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_12, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
      onClick: _cache[0] || (_cache[0] = $event => _ctx.dialogAvaliarApp = true),
      align: "left",
      flat: "",
      "no-caps": "",
      style: {
        "color": "black"
      },
      label: "Avalie o app",
      "icon-right": "eva-arrow-ios-forward-outline",
      class: "btn-opcao"
    }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
      align: "left",
      flat: "",
      "no-caps": "",
      style: {
        "color": "black"
      },
      label: "Convide amigos",
      "icon-right": "eva-arrow-ios-forward-outline",
      onClick: _cache[1] || (_cache[1] = $event => _ctx.show(true)),
      class: "btn-opcao"
    }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
      to: "/codigo-acesso",
      align: "left",
      flat: "",
      "no-caps": "",
      style: {
        "color": "black"
      },
      label: "Código de acesso",
      "icon-right": "eva-arrow-ios-forward-outline",
      class: "btn-opcao"
    }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
      align: "left",
      flat: "",
      "no-caps": "",
      style: {
        "color": "black"
      },
      label: "Suporte",
      "icon-right": "eva-arrow-ios-forward-outline",
      class: "btn-opcao",
      onClick: _ctx.goToWhats
    }, null, 8, ["onClick"]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
      align: "left",
      flat: "",
      "no-caps": "",
      style: {
        "color": "black"
      },
      label: "Sobre o app",
      "icon-right": "eva-arrow-ios-forward-outline",
      class: "btn-opcao",
      to: "/about-app"
    }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
      onClick: _ctx.handleLogout,
      align: "left",
      flat: "",
      "no-caps": "",
      style: {
        "color": "black"
      },
      label: "Sair",
      class: "btn-opcao"
    }, null, 8, ["onClick"])])])])]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_dialog, {
      modelValue: _ctx.dialogAvaliarApp,
      "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => _ctx.dialogAvaliarApp = $event)
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_card, {
        style: {
          "min-width": "350px"
        }
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_card_section, {
          class: "q-pb-none"
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_13, [_hoisted_14, (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_space), (0,runtime_core_esm_bundler/* withDirectives */.wy)((0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
            icon: "close",
            flat: "",
            round: "",
            dense: ""
          }, null, 512), [[_directive_close_popup]])])]),
          _: 1
        }), (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_15, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_form, {
          onSubmit: _ctx.onSubmit,
          class: "q-gutter-md"
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_rating, {
            name: "Qualidade",
            modelValue: _ctx.quality,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => _ctx.quality = $event),
            max: "5",
            size: "3.5em",
            color: "yellow",
            icon: "star_border",
            "icon-selected": "star",
            "no-dimming": ""
          }, null, 8, ["modelValue"]), (0,runtime_core_esm_bundler/* createElementVNode */._)("div", null, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
            label: "Classificar",
            type: "submit",
            color: "primary"
          })])]),
          _: 1
        }, 8, ["onSubmit"]), _ctx.submitResult.length > 0 ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_card, {
          key: 0,
          flat: "",
          bordered: "",
          class: "q-mt-md bg-grey-2"
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_card_section, null, {
            default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_hoisted_16]),
            _: 1
          }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_separator), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_card_section, {
            class: "row q-gutter-sm items-center"
          }, {
            default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [((0,runtime_core_esm_bundler/* openBlock */.wg)(true), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, null, (0,runtime_core_esm_bundler/* renderList */.Ko)(_ctx.submitResult, (item, index) => {
              return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", {
                key: index,
                class: "q-px-sm q-py-xs bg-grey-8 text-white rounded-borders text-center text-no-wrap"
              }, (0,shared_esm_bundler/* toDisplayString */.zw)(item.name) + " = " + (0,shared_esm_bundler/* toDisplayString */.zw)(item.value * 20) + (0,shared_esm_bundler/* toDisplayString */.zw)(_ctx.porcento), 1);
            }), 128))]),
            _: 1
          })]),
          _: 1
        })) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true)])]),
        _: 1
      })]),
      _: 1
    }, 8, ["modelValue"])]),
    _: 1
  });
}
;// CONCATENATED MODULE: ./src/pages/users/ProfilePage.vue?vue&type=template&id=43acd9a4&scoped=true

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.json.stringify.js
var es_json_stringify = __webpack_require__(2100);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(5363);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(71);
// EXTERNAL MODULE: ./src/functions/functionShowNotifications.js
var functionShowNotifications = __webpack_require__(4605);
// EXTERNAL MODULE: ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(1959);
// EXTERNAL MODULE: ./src/composebles/useAuthUser.js
var useAuthUser = __webpack_require__(4958);
// EXTERNAL MODULE: ./src/composebles/useApi.js
var useApi = __webpack_require__(811);
// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.esm-bundler.js
var vue_router_esm_bundler = __webpack_require__(9582);
// EXTERNAL MODULE: ./node_modules/quasar/src/composables/use-quasar.js
var use_quasar = __webpack_require__(8825);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/users/ProfilePage.vue?vue&type=script&lang=js




/* eslint-disable no-unused-expressions */

/* eslint-disable no-restricted-syntax */





;
/* harmony default export */ const ProfilePagevue_type_script_lang_js = ((0,runtime_core_esm_bundler/* defineComponent */.aZ)({
  name: "ProfilePage",

  setup() {
    const $q = (0,use_quasar/* default */.Z)();
    const router = (0,vue_router_esm_bundler/* useRouter */.tv)();
    const {
      post,
      getByField,
      update,
      list
    } = (0,useApi/* default */.Z)();
    const route = (0,vue_router_esm_bundler/* useRoute */.yj)();
    const {
      token
    } = route.query;
    const {
      logout,
      user,
      resetPassword
    } = (0,useAuthUser/* default */.Z)();
    const dialogPassword = (0,reactivity_esm_bundler/* ref */.iH)(false);
    const dialogAvaliarApp = (0,reactivity_esm_bundler/* ref */.iH)(false);
    const loading = (0,reactivity_esm_bundler/* ref */.iH)(false);
    const quality = (0,reactivity_esm_bundler/* ref */.iH)(0);
    const submitResult = (0,reactivity_esm_bundler/* ref */.iH)([]);
    const formData = (0,reactivity_esm_bundler/* ref */.iH)({
      password: "",
      password1: "",
      antigo: ""
    }); // ---- Classificação do APP -----------------

    const table = (0,reactivity_esm_bundler/* ref */.iH)({
      id: null,
      valor: 0,
      user_id: ""
    });

    const updatClassification = async () => {
      try {
        if (table.value.id === null) {
          const tabela = table.value;
          delete tabela.id;
          table.value.user_id = user.value.id;
          loading.value = true;
          await post("classification", tabela);
          loading.value = false;
        } else {
          table.value.user_id = user.value.id;
          table.value.valor = quality.value;
          loading.value = true;
          await update("classification", table.value);
          loading.value = false;
        }
      } catch (error) {
        loading.value = false;
        (0,functionShowNotifications/* showErrorNotification */.s)(`Classificação Não Foi Bem Sucedida Pelo Seguinte Erro: ${JSON.stringify(error)}`);
      }
    }; // ---- Fim Classificação do APP -----------------
    // ---- Alterar a PASSword -----------------------


    const updatPassword = async () => {
      // eslint-disable-next-line max-len
      if (formData.value.password !== formData.value.password1) {
        // alert(JSON.stringify(user.value));
        $q.dialog({
          title: "Falhou!",
          message: "Senha Errada... Pretendes Repetir ?",
          cancel: true,
          persistent: true
        }).onOk(async () => {
          dialogPassword.value = true;
        });
      } else {
        $q.dialog({
          title: "Alterar Senha:",
          message: "Tens a certeza que queres alterar a Senha ?",
          cancel: true,
          persistent: true
        }).onOk(async () => {
          try {
            loading.value = true;
            user.value.password = formData.value.password1;
            await resetPassword(token, formData.value.password);
            loading.value = false;
            (0,functionShowNotifications/* showSuccessNotification */.L)(`Alteração Feita Com sucesso : ${formData.value.password1}`);
          } catch (error) {
            loading.value = false;
            (0,functionShowNotifications/* showErrorNotification */.s)(`Alteração Não Foi Bem Sucedido Pelo Seguinte Erro: ${JSON.stringify(error)}`);
          }
        });
      }
    }; // ---- Fim Alterar a PASSword --------------------------
    // ---- Terminar sessão ----------------------------------


    const handleLogout = async () => {
      $q.dialog({
        title: "Sair",
        message: "Tens a certeza que queres Sair ?",
        cancel: true,
        persistent: true
      }).onOk(async () => {
        try {
          loading.value = true;
          await logout();
          loading.value = false;
          router.replace({
            name: "login"
          });
        } catch (error) {
          loading.value = false;
          (0,functionShowNotifications/* showErrorNotification */.s)(`A Sessão Não Pode Ser Terminada Pelo Seguinte Erro: ${JSON.stringify(error)}`);
        }
      });
    }; // ---- Fim Terminar sessão -----------------------
    // ---- Será Alterado...... -----------------------


    const listTable = async () => {
      // loading.value = true;
      try {
        const valor = 0;
        const aux = await getByField("classification", table.value.user_id, valor);

        if (aux.length > 0) {
          const qualquer = aux.map(e => e.id); // eslint-disable-next-line prefer-destructuring

          table.value.id = qualquer[0];
          quality.value = aux.map(e => e.valor);
        } else {
          quality.value = 0;
        }
      } catch (error) {
        (0,functionShowNotifications/* showErrorNotification */.s)(`A Sessão Não Pode Ser Terminada Pelo Seguinte Erro: ${JSON.stringify(error)}`);
      } /// loading.value = false;

    };

    (0,runtime_core_esm_bundler/* onMounted */.bv)(async () => {
      listTable();
      loadInfo();
    });
    const aboutApp = (0,reactivity_esm_bundler/* ref */.iH)({
      title: "",
      conteudo: ""
    });

    async function loadInfo() {
      const data = await list('sobreApp');
      aboutApp.value = data[0];
    }

    function show(grid) {
      $q.bottomSheet({
        message: "Convidar seus amigos",
        actions: [{
          label: "Facebook",
          icon: "mdi-facebook",
          color: "blue",
          id: "facebook"
        }, {
          label: "Telegram",
          icon: "mdi-telegram",
          color: "primary",
          id: "telegram"
        }, {
          label: "Linkedin",
          icon: "mdi-linkedin",
          color: "blue-6",
          id: "linkedin"
        }, {
          label: "Whatsapp",
          icon: "mdi-whatsapp",
          color: "green",
          id: "whatsapp"
        }]
      }).onOk(action => {
        let link = "";
        const register = `medicalbook.surge.sh`;

        switch (action.id) {
          case "facebook":
            link = `https://www.facebook.com/sharer/sharer.php?u=${register}`;
            break;

          case "linkedin":
            link = `https://www.linkedin.com/sharing/share-offsite/?url=${register}`;
            break;

          case "telegram":
            link = `https://telegram.me/share/?url=${register}`;

          case "whatsapp":
            link = `https://telegram.me/share/?url=${register}`;
            break;

          default:
            break;
        }

        window.open(link, "_blank").focus();
      }).onCancel(() => {// console.log('Dismissed')
      }).onDismiss(() => {// console.log('I am triggered on both OK andtitle Cancel')
      });
    }

    function goToWhats() {
      const title = '5541999960483';
      window.open(`https://api.whatsapp.com/send?phone=${aboutApp.value.title}&text=&source=&data=&app_absent=`);
    }

    return {
      goToWhats,
      show,
      porcento: "%",
      user,
      table,
      dialogAvaliarApp,
      formData,
      loading,
      dialogPassword,
      updatPassword,
      handleLogout,
      updatClassification,
      slide: (0,reactivity_esm_bundler/* ref */.iH)("style"),
      quality,
      submitResult,

      onSubmit(evt) {
        const form = new FormData(evt.target);
        const data = [];

        for (const [name, value] of form.entries()) {
          data.push({
            name,
            value
          });
          table.value.valor = value;
        }

        submitResult.value = data;
        updatClassification();
      }

    };
  }

}));
;// CONCATENATED MODULE: ./src/pages/users/ProfilePage.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(4260);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPage.js
var QPage = __webpack_require__(4379);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__(2165);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/badge/QBadge.js
var QBadge = __webpack_require__(9721);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__(4554);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/spinner/QSpinner.js
var QSpinner = __webpack_require__(6833);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/dialog/QDialog.js
var QDialog = __webpack_require__(6778);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCard.js
var QCard = __webpack_require__(151);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCardSection.js
var QCardSection = __webpack_require__(5589);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/space/QSpace.js
var QSpace = __webpack_require__(2025);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/form/QForm.js
var QForm = __webpack_require__(5269);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/rating/QRating.js
var QRating = __webpack_require__(8833);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/separator/QSeparator.js
var QSeparator = __webpack_require__(5869);
// EXTERNAL MODULE: ./node_modules/quasar/src/directives/ClosePopup.js
var ClosePopup = __webpack_require__(677);
// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(7518);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/pages/users/ProfilePage.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(ProfilePagevue_type_script_lang_js, [['render',render],['__scopeId',"data-v-43acd9a4"]])

/* harmony default export */ const ProfilePage = (__exports__);
;












runtime_auto_import_default()(ProfilePagevue_type_script_lang_js, 'components', {QPage: QPage/* default */.Z,QBtn: QBtn/* default */.Z,QBadge: QBadge/* default */.Z,QIcon: QIcon/* default */.Z,QSpinner: QSpinner/* default */.Z,QDialog: QDialog/* default */.Z,QCard: QCard/* default */.Z,QCardSection: QCardSection/* default */.Z,QSpace: QSpace/* default */.Z,QForm: QForm/* default */.Z,QRating: QRating/* default */.Z,QSeparator: QSeparator/* default */.Z});runtime_auto_import_default()(ProfilePagevue_type_script_lang_js, 'directives', {ClosePopup: ClosePopup/* default */.Z});


/***/ })

}]);
//# sourceMappingURL=458.js.map