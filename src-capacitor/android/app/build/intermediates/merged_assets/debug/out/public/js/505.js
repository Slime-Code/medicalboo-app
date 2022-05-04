"use strict";
(self["webpackChunkmedicalbookapp"] = self["webpackChunkmedicalbookapp"] || []).push([[505],{

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

/***/ 6505:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ UsersListPage)
});

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.trim.js
var es_string_trim = __webpack_require__(6801);
// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(3673);
// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(2323);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/admins/user/UsersListPage.vue?vue&type=template&id=6a22b2d4


const _hoisted_1 = {
  class: "flex q-pt-xl flex-center"
};
const _hoisted_2 = {
  class: "column",
  style: {
    "min-width": "90%"
  }
};
const _hoisted_3 = {
  class: "col q-ma-xs"
};

const _hoisted_4 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("h5", {
  class: "col-12 title",
  style: {
    "margin": "20px 0"
  }
}, "Usuários", -1);

const _hoisted_5 = {
  style: {
    "width": "100px"
  },
  class: "row q-gutter-sm"
};
const _hoisted_6 = {
  class: "q-mt-md"
};
const _hoisted_7 = {
  key: 0
};
const _hoisted_8 = {
  key: 1
};
const _hoisted_9 = {
  key: 0
};
const _hoisted_10 = {
  key: 1
};

const _hoisted_11 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", {
  class: "text-h6"
}, "Novo Usuário", -1);

const _hoisted_12 = {
  class: "q-pa-md"
};
const _hoisted_13 = {
  class: "q-gutter-md row items-start"
};
const _hoisted_14 = {
  class: "q-pa-xs"
};

const _hoisted_15 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)();

const _hoisted_16 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("br", null, null, -1);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_btn = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-btn");

  const _component_q_td = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-td");

  const _component_q_tr = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-tr");

  const _component_q_table = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-table");

  const _component_q_card_section = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-card-section");

  const _component_q_separator = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-separator");

  const _component_q_input = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-input");

  const _component_q_option_group = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-option-group");

  const _component_q_select = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-select");

  const _component_q_card_actions = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-card-actions");

  const _component_q_form = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-form");

  const _component_q_card = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-card");

  const _component_q_dialog = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-dialog");

  const _component_q_inner_loading = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-inner-loading");

  const _directive_ripple = (0,runtime_core_esm_bundler/* resolveDirective */.Q2)("ripple");

  const _directive_close_popup = (0,runtime_core_esm_bundler/* resolveDirective */.Q2)("close-popup");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", _hoisted_1, [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_2, [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_3, [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", null, [_hoisted_4, (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_5, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
    icon: "update",
    color: "primary",
    class: "col",
    onClick: _cache[0] || (_cache[0] = $event => _ctx.listAll())
  })])]), (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_6, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_table, {
    color: "primary",
    dense: _ctx.$q.screen.lt.sm,
    flat: "",
    square: "",
    bordered: "",
    title: "Lista de Usuários",
    rows: _ctx.rows,
    columns: _ctx.columns,
    "visible-columns": ['title', 'data', 'cpf', 'nacionalidade', 'ano-de-graduacao', 'area-de-ocupacao', 'data-cadastro', 'premium', 'perfil', 'options'],
    "row-key": "title",
    separator: "cell"
  }, {
    body: (0,runtime_core_esm_bundler/* withCtx */.w5)(props => [props.row.perfil !== 3 ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_tr, {
      key: 0,
      props: props
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_td, {
        key: "title",
        props: props
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.Uk)((0,shared_esm_bundler/* toDisplayString */.zw)(props.row.name), 1)]),
        _: 2
      }, 1032, ["props"]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_td, {
        key: "data",
        props: props
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.Uk)((0,shared_esm_bundler/* toDisplayString */.zw)(props.row.data), 1)]),
        _: 2
      }, 1032, ["props"]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_td, {
        key: "cpf",
        props: props
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.Uk)((0,shared_esm_bundler/* toDisplayString */.zw)(props.row.cpf), 1)]),
        _: 2
      }, 1032, ["props"]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_td, {
        key: "nacionalidade",
        props: props
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.Uk)((0,shared_esm_bundler/* toDisplayString */.zw)(props.row.nacionalidade), 1)]),
        _: 2
      }, 1032, ["props"]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_td, {
        key: "ano-de-graduacao",
        props: props
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.Uk)((0,shared_esm_bundler/* toDisplayString */.zw)(props.row.ano_de_graduacao), 1)]),
        _: 2
      }, 1032, ["props"]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_td, {
        key: "area-de-ocupacao",
        props: props
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.Uk)((0,shared_esm_bundler/* toDisplayString */.zw)(props.row.area_de_ocupacao), 1)]),
        _: 2
      }, 1032, ["props"]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_td, {
        key: "data-cadastro",
        props: props
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.Uk)((0,shared_esm_bundler/* toDisplayString */.zw)(props.row.created_at), 1)]),
        _: 2
      }, 1032, ["props"]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_td, {
        key: "premium",
        props: props
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [props.row.premium ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("p", _hoisted_7, "SIM")) : ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("p", _hoisted_8, "NÃO"))]),
        _: 2
      }, 1032, ["props"]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_td, {
        key: "perfil",
        props: props
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [props.row.perfil == 1 ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("p", _hoisted_9, "Estudante")) : props.row.perfil == 2 ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("p", _hoisted_10, "Proficional")) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true)]),
        _: 2
      }, 1032, ["props"]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_td, {
        key: "options",
        class: "text-right",
        props: props
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
          flat: "",
          square: "",
          icon: "delete",
          onClick: $event => _ctx.confirmDelete(props.row.id),
          dense: ""
        }, null, 8, ["onClick"])]),
        _: 2
      }, 1032, ["props"])]),
      _: 2
    }, 1032, ["props"])) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true)]),
    _: 1
  }, 8, ["dense", "rows", "columns"])])])]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_dialog, {
    modelValue: _ctx.dialogUser,
    "onUpdate:modelValue": _cache[13] || (_cache[13] = $event => _ctx.dialogUser = $event),
    persistent: ""
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_card, {
      class: "full-width"
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_form, {
        onSubmit: _ctx.saveItem
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_card_section, {
          class: "q-py-sm"
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_hoisted_11]),
          _: 1
        }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_separator), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_card_section, {
          class: "scroll",
          style: {
            "max-height": "77vh"
          }
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_12, [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_13, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_input, {
            class: "col",
            style: {
              "min-width": "250px"
            },
            dense: "",
            modelValue: _ctx.rows.name,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.rows.name = $event),
            rounded: "",
            outlined: "",
            type: "text",
            label: "Nome completo",
            "lazy-rules": "",
            rules: [val => val !== null && val !== '' || 'Campo não pode estar vazio']
          }, null, 8, ["modelValue", "rules"]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_input, {
            class: "col",
            style: {
              "min-width": "120px"
            },
            dense: "",
            modelValue: _ctx.rows.birthday,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => _ctx.rows.birthday = $event),
            rounded: "",
            outlined: "",
            type: "date",
            label: "Data de nascimento",
            "stack-label": "",
            "lazy-rules": "",
            rules: [val => val !== null && val !== '' || 'Campo não pode estar vazio']
          }, null, 8, ["modelValue", "rules"]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_input, {
            class: "col",
            style: {
              "min-width": "250px"
            },
            dense: "",
            modelValue: _ctx.rows.cpf,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => _ctx.rows.cpf = $event),
            rounded: "",
            outlined: "",
            type: "text",
            label: "CPF",
            "lazy-rules": "",
            rules: [val => val !== null && val !== '' || 'Campo não pode estar vazio']
          }, null, 8, ["modelValue", "rules"]), (0,runtime_core_esm_bundler/* createElementVNode */._)("div", null, [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_14, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_option_group, {
            modelValue: _ctx.rows.profile_type_id,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => _ctx.rows.profile_type_id = $event),
            options: _ctx.tipo,
            color: "primary",
            inline: ""
          }, null, 8, ["modelValue", "options"])])]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_select, {
            class: "col",
            style: {
              "min-width": "230px"
            },
            dense: "",
            rounded: "",
            outlined: "",
            modelValue: _ctx.rows.nationality,
            "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => _ctx.rows.nationality = $event),
            options: _ctx.options,
            label: "Nacionalidade"
          }, null, 8, ["modelValue", "options"]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_separator), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_input, {
            style: {
              "min-width": "30%"
            },
            class: "col",
            dense: "",
            modelValue: _ctx.rows.email,
            "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => _ctx.rows.email = $event),
            rounded: "",
            outlined: "",
            type: "email",
            label: "Email",
            "lazy-rules": "",
            rules: [val => val !== null && val !== '' || 'Campo não pode estar vazio']
          }, null, 8, ["modelValue", "rules"]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_input, {
            style: {
              "min-width": "50%"
            },
            dense: "",
            class: "col",
            modelValue: _ctx.formData.confirm_email,
            "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => _ctx.formData.confirm_email = $event),
            rounded: "",
            outlined: "",
            type: "email",
            label: "Confirme o email",
            "lazy-rules": "",
            rules: [val => val !== null && val !== '' || 'Campo não pode estar vazio', val => val.trim() === _ctx.rows.email.trim() || 'Email não correspondente']
          }, null, 8, ["modelValue", "rules"]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_input, {
            style: {
              "min-width": "30%",
              "max-width": "50%"
            },
            class: "col",
            dense: "",
            modelValue: _ctx.rows.password,
            "onUpdate:modelValue": _cache[8] || (_cache[8] = $event => _ctx.rows.password = $event),
            rounded: "",
            outlined: "",
            type: "password",
            label: "Senha",
            "lazy-rules": "",
            rules: [val => val !== null && val !== '' || 'Campo não pode estar vazio']
          }, null, 8, ["modelValue", "rules"]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_input, {
            class: "col",
            style: {
              "min-width": "50%",
              "max-width": "50%"
            },
            dense: "",
            modelValue: _ctx.rows.confirm_password,
            "onUpdate:modelValue": _cache[9] || (_cache[9] = $event => _ctx.rows.confirm_password = $event),
            rounded: "",
            outlined: "",
            type: "password",
            label: "Confirme a senha",
            "lazy-rules": "",
            rules: [val => val !== null && val !== '' || 'Campo não pode estar vazio', val => val.trim() === _ctx.rows.password.trim() || 'Senha não correspondente']
          }, null, 8, ["modelValue", "rules"]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_separator), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_select, {
            style: {
              "min-width": "30%",
              "max-width": "50%"
            },
            dense: "",
            rounded: "",
            outlined: "",
            loading: _ctx.loading,
            modelValue: _ctx.rows.occupation_area,
            "onUpdate:modelValue": _cache[10] || (_cache[10] = $event => _ctx.rows.occupation_area = $event),
            options: _ctx.options2,
            label: "Área de actuação",
            class: "col"
          }, null, 8, ["loading", "modelValue", "options"]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_select, {
            style: {
              "min-width": "50%",
              "max-width": "50%"
            },
            loading: _ctx.loading,
            dense: "",
            rounded: "",
            outlined: "",
            modelValue: _ctx.rows.graduation_year,
            "onUpdate:modelValue": _cache[11] || (_cache[11] = $event => _ctx.rows.graduation_year = $event),
            options: _ctx.options1,
            label: "Ano de formatura",
            class: "col"
          }, null, 8, ["loading", "modelValue", "options"]), _hoisted_15, _hoisted_16, (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_card_actions, {
            align: "right"
          }, {
            default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* withDirectives */.wy)((0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
              label: "Cancelar ",
              onClick: _cache[12] || (_cache[12] = $event => _ctx.loadingForm = false),
              color: "primary",
              "no-caps": "",
              dense: ""
            }, null, 512), [[_directive_ripple], [_directive_close_popup]]), (0,runtime_core_esm_bundler/* withDirectives */.wy)((0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
              label: "Salvar",
              color: "primary",
              dense: "",
              type: "submit",
              "no-caps": ""
            }, null, 512), [[_directive_ripple]])]),
            _: 1
          })])])]),
          _: 1
        })]),
        _: 1
      }, 8, ["onSubmit"])]),
      _: 1
    })]),
    _: 1
  }, 8, ["modelValue"]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_inner_loading, {
    showing: _ctx.loading,
    label: "Atualizando...",
    "label-class": "text-primary",
    color: "primary",
    "label-style": "font-size: 1.1em"
  }, null, 8, ["showing"])]);
}
;// CONCATENATED MODULE: ./src/pages/admins/user/UsersListPage.vue?vue&type=template&id=6a22b2d4

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.json.stringify.js
var es_json_stringify = __webpack_require__(2100);
// EXTERNAL MODULE: ./src/functions/functionShowNotifications.js
var functionShowNotifications = __webpack_require__(4605);
// EXTERNAL MODULE: ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(1959);
// EXTERNAL MODULE: ./node_modules/quasar/src/composables/use-quasar.js
var use_quasar = __webpack_require__(8825);
// EXTERNAL MODULE: ./src/composebles/useApi.js
var useApi = __webpack_require__(811);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/admins/user/UsersListPage.vue?vue&type=script&lang=js



;

const columns = [{
  name: 'title',
  required: true,
  label: 'Nome',
  align: 'left',
  field: 'title',
  sortable: true
}, {
  name: "data",
  align: "left",
  label: "Data de Nascimento",
  field: "data",
  sortable: true
}, {
  name: "CPF",
  align: "left",
  label: "CPF",
  field: "CPF",
  sortable: true
}, {
  name: "nacionalidade",
  align: "left",
  label: "Nacionalidade",
  field: "Nacionalidade",
  sortable: true
}, {
  name: "ano-de-graduacao",
  align: "left",
  label: "Ano de Graduação",
  field: "ano-de-graduacao",
  sortable: true
}, {
  name: "area-de-ocupacao",
  align: "left",
  label: "Área de Ocupação",
  field: "area-de-ocupacao",
  sortable: true
}, {
  name: "data-cadastro",
  align: "left",
  label: "Cadastrado Aos",
  field: "data",
  sortable: true
}, {
  name: "premium",
  align: "left",
  label: "premium",
  field: "premium",
  sortable: true
}, {
  name: "perfil",
  align: "left",
  label: "Perfil",
  field: "perfil",
  sortable: true
}, {
  name: 'options',
  align: 'right',
  label: 'Ação',
  field: 'options',
  sortable: true
}];
/* harmony default export */ const UsersListPagevue_type_script_lang_js = ((0,runtime_core_esm_bundler/* defineComponent */.aZ)({
  setup() {
    const loading = (0,reactivity_esm_bundler/* ref */.iH)(true);
    const $q = (0,use_quasar/* default */.Z)();
    const {
      list,
      post,
      update,
      remove
    } = (0,useApi/* default */.Z)();
    const rows = (0,reactivity_esm_bundler/* ref */.iH)([]);
    const topics = (0,reactivity_esm_bundler/* ref */.iH)([]);
    const formData = (0,reactivity_esm_bundler/* reactive */.qj)({
      name: '',
      id: null
    });
    const formUser = (0,reactivity_esm_bundler/* reactive */.qj)({
      name: '',
      birthday: '',
      cpf: '',
      nationality: '',
      profile_type_id: 1,
      email: '',
      password: '',
      confirm_email: '',
      confirm_password: '',
      occupation_area: '',
      graduation_year: ''
    });
    const options = (0,reactivity_esm_bundler/* ref */.iH)([]);
    const options2 = (0,reactivity_esm_bundler/* ref */.iH)([]);
    const options1 = (0,reactivity_esm_bundler/* ref */.iH)([]);
    const tipo = (0,reactivity_esm_bundler/* ref */.iH)([{
      label: 'Estudante',
      value: 1
    }, {
      label: 'Profissional',
      value: 2
    }]);
    const users = (0,reactivity_esm_bundler/* ref */.iH)([]);

    const getAllUsers = async () => {
      users.value = await list('users');
    };

    const listAll = async () => {
      try {
        loading.value = true;
        const aux = await list('perfil');
        rows.value = aux.map(item => ({
          id: item.id,
          name: item.name,
          data: item.birthday,
          cpf: item.cpf,
          perfil: item.profile_type_id,
          area_de_ocupacao: item.occupation_area,
          ano_de_graduacao: item.graduation_year,
          email: item.email,
          created_at: item.created_at,
          password: item.password,
          nacionalidade: item.nationality,
          premium: item.premium
        }));
        loading.value = false;
      } catch (error) {
        alert(error);
      }
    };

    const deleteItem = async id => {
      try {
        loading.value = true;
        await remove('perfil', id);
        listAll();
        loading.value = false;
      } catch (error) {
        alert(error);
      }
    };

    const saveItem = async () => {
      try {
        loading.value = true;

        if (!formData.id) {
          delete formData.id;
          await post('perfil', formData);
        } else {
          await update('perfil', formData);
        }

        listAll();
        loading.value = false;
      } catch (error) {
        alert(error);
      }
    };

    const listTopicsAproachs = async () => {
      try {
        const aux = await list('nationality');
        options.value = aux.map(elem => elem.name);
        loading.value = false;
      } catch (error) {
        alert(error);
      }
    };

    const listOcupationAreaGraduation = async () => {
      try {
        loading.value = true;
        const aux1 = await list('occupation_area');
        options2.value = aux1.map(elem => elem.occupation_area);
        const aux = await list('graduation_year');
        options1.value = aux.map(elem => elem.graduation_year);
        loading.value = false;
      } catch (error) {
        (0,functionShowNotifications/* showErrorNotification */.s)(`houve uma falha ao carregar os dados do banco: ${JSON.stringify(error)}`);
      }
    };

    (0,runtime_core_esm_bundler/* onMounted */.bv)(() => {
      listTopicsAproachs();
      listAll();
      listOcupationAreaGraduation();
      getAllUsers();
    });

    const onItemClick = async () => {};

    const dialogUser = (0,reactivity_esm_bundler/* ref */.iH)(false);

    const newDialog = data => {
      if (data) {
        Object.keys(data).forEach(key => {
          formData[key] = data[key];
        });
      } else {
        formData.name = '';
      }

      dialogUser.value = true;
    };

    function confirmDelete(id) {
      $q.dialog({
        title: 'Eliminar registro',
        message: 'Gostaria de apagar este registro?',
        persistent: true,
        cancel: 'Cancelar'
      }).onOk(() => {
        deleteItem(id);
      }).onOk(() => {// console.log('>>>> second OK catcher')
      }).onCancel(() => {// console.log('>>>> Cancel')
      }).onDismiss(() => {// console.log('I am triggered on both OK and Cancel')
      });
    }

    return {
      options,
      tipo,
      confirmDelete,
      newDialog,
      formData,
      formUser,
      loading,
      deleteItem,
      dialogUser,
      saveItem,
      onItemClick,
      columns,
      rows,
      listAll,
      topics,
      varDialogPassword: (0,reactivity_esm_bundler/* ref */.iH)(false)
    };
  }

}));
;// CONCATENATED MODULE: ./src/pages/admins/user/UsersListPage.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(4260);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__(2165);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/table/QTable.js + 12 modules
var QTable = __webpack_require__(8468);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/table/QTr.js
var QTr = __webpack_require__(8186);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/table/QTd.js
var QTd = __webpack_require__(3884);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/dialog/QDialog.js
var QDialog = __webpack_require__(6778);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCard.js
var QCard = __webpack_require__(151);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/form/QForm.js
var QForm = __webpack_require__(5269);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCardSection.js
var QCardSection = __webpack_require__(5589);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/separator/QSeparator.js
var QSeparator = __webpack_require__(5869);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/input/QInput.js + 2 modules
var QInput = __webpack_require__(4842);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/option-group/QOptionGroup.js + 1 modules
var QOptionGroup = __webpack_require__(8758);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/select/QSelect.js + 1 modules
var QSelect = __webpack_require__(3017);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCardActions.js
var QCardActions = __webpack_require__(9367);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/inner-loading/QInnerLoading.js
var QInnerLoading = __webpack_require__(6941);
// EXTERNAL MODULE: ./node_modules/quasar/src/directives/Ripple.js + 1 modules
var Ripple = __webpack_require__(6489);
// EXTERNAL MODULE: ./node_modules/quasar/src/directives/ClosePopup.js
var ClosePopup = __webpack_require__(677);
// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(7518);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/pages/admins/user/UsersListPage.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(UsersListPagevue_type_script_lang_js, [['render',render]])

/* harmony default export */ const UsersListPage = (__exports__);
;















runtime_auto_import_default()(UsersListPagevue_type_script_lang_js, 'components', {QBtn: QBtn/* default */.Z,QTable: QTable/* default */.Z,QTr: QTr/* default */.Z,QTd: QTd/* default */.Z,QDialog: QDialog/* default */.Z,QCard: QCard/* default */.Z,QForm: QForm/* default */.Z,QCardSection: QCardSection/* default */.Z,QSeparator: QSeparator/* default */.Z,QInput: QInput/* default */.Z,QOptionGroup: QOptionGroup/* default */.Z,QSelect: QSelect/* default */.Z,QCardActions: QCardActions/* default */.Z,QInnerLoading: QInnerLoading/* default */.Z});runtime_auto_import_default()(UsersListPagevue_type_script_lang_js, 'directives', {Ripple: Ripple/* default */.Z,ClosePopup: ClosePopup/* default */.Z});


/***/ })

}]);
//# sourceMappingURL=505.js.map