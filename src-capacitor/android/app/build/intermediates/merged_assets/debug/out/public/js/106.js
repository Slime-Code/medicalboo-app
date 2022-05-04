"use strict";
(self["webpackChunkmedicalbookapp"] = self["webpackChunkmedicalbookapp"] || []).push([[106],{

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

/***/ 4106:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ TiposDeAbordagensListPage)
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(3673);
// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(2323);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/admins/approach-type/TiposDeAbordagensListPage.vue?vue&type=template&id=59c475f0


const _hoisted_1 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", {
  class: "text-h5 q-pa-sm"
}, "Tipos de Abordagem", -1);

const _hoisted_2 = {
  class: "row q-pa-md q-gutter-sm"
};

const _hoisted_3 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", {
  class: "text-h6"
}, "Novo Tipo de abordagem", -1);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_input = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-input");

  const _component_q_space = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-space");

  const _component_q_btn = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-btn");

  const _component_q_card = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-card");

  const _component_q_td = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-td");

  const _component_q_tr = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-tr");

  const _component_q_table = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-table");

  const _component_q_page = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-page");

  const _component_q_card_section = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-card-section");

  const _component_q_card_actions = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-card-actions");

  const _component_q_form = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-form");

  const _component_q_dialog = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-dialog");

  const _component_q_inner_loading = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-inner-loading");

  const _directive_ripple = (0,runtime_core_esm_bundler/* resolveDirective */.Q2)("ripple");

  const _directive_close_popup = (0,runtime_core_esm_bundler/* resolveDirective */.Q2)("close-popup");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, null, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_page, {
    class: "q-pa-md"
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_hoisted_1, (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_card, {
      class: "q-mb-sm",
      flat: "",
      bordered: ""
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_2, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_input, {
        class: "col-7 col-sm-7 col-md-7 col-xs-12 col-lg-7 col-xl-7",
        modelValue: _ctx.filter,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.filter = $event),
        placeholder: "Pesquisar abordagem",
        dense: "",
        outlined: ""
      }, null, 8, ["modelValue"]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_space), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
        class: "col-2 col-sm-2 col-md-2 col-xs-12 col-lg-2 col-xl-2",
        color: "primary",
        label: "Nova tipo",
        onClick: _cache[1] || (_cache[1] = $event => _ctx.newDialog()),
        "no-caps": "",
        rounded: ""
      }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
        class: "col-2 col-sm-2 col-md-2 col-xs-12 col-lg-2 col-xl-2",
        color: "primary",
        label: "Atualizar",
        onClick: _cache[2] || (_cache[2] = $event => _ctx.listAll()),
        "no-caps": "",
        rounded: ""
      })])]),
      _: 1
    }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_table, {
      dense: _ctx.$q.screen.lt.md,
      flat: "",
      square: "",
      bordered: "",
      title: "Lista de tipos de abordagem",
      rows: _ctx.rows,
      columns: _ctx.columns,
      "visible-columns": ['title', 'options'],
      "row-key": "title",
      filter: _ctx.filter,
      separator: "cell"
    }, {
      body: (0,runtime_core_esm_bundler/* withCtx */.w5)(props => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_tr, {
        props: props
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_td, {
          key: "title",
          props: props
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.Uk)((0,shared_esm_bundler/* toDisplayString */.zw)(props.row.type_approach), 1)]),
          _: 2
        }, 1032, ["props"]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_td, {
          key: "definition",
          props: props
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.Uk)((0,shared_esm_bundler/* toDisplayString */.zw)(props.row.definition), 1)]),
          _: 2
        }, 1032, ["props"]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_td, {
          key: "options",
          class: "text-center",
          props: props
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
            flat: "",
            square: "",
            icon: "edit",
            onClick: $event => _ctx.newDialog(props.row),
            dense: ""
          }, null, 8, ["onClick"]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
            flat: "",
            square: "",
            icon: "delete",
            onClick: $event => _ctx.confirmDelete(props.row.id),
            dense: ""
          }, null, 8, ["onClick"])]),
          _: 2
        }, 1032, ["props"])]),
        _: 2
      }, 1032, ["props"])]),
      _: 1
    }, 8, ["dense", "rows", "columns", "filter"])]),
    _: 1
  }), (0,runtime_core_esm_bundler/* createElementVNode */._)("div", null, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_dialog, {
    modelValue: _ctx.dialogCategory,
    "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => _ctx.dialogCategory = $event),
    persistent: ""
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_card, {
      style: {
        "min-width": "350px"
      }
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_card_section, null, {
        default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_hoisted_3]),
        _: 1
      }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_form, {
        onSubmit: _ctx.saveItem
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_card_section, {
          class: "q-pt-none"
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_input, {
            dense: "",
            modelValue: _ctx.formData.type_approach,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => _ctx.formData.type_approach = $event),
            modelModifiers: {
              trim: true
            },
            autofocus: ""
          }, null, 8, ["modelValue"])]),
          _: 1
        }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_card_actions, {
          align: "right",
          class: "text-primary"
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* withDirectives */.wy)((0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
            label: "Cancelar",
            color: "primary",
            "no-caps": ""
          }, null, 512), [[_directive_ripple], [_directive_close_popup]]), (0,runtime_core_esm_bundler/* withDirectives */.wy)((0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
            label: "Salvar",
            color: "primary",
            type: "submit",
            "no-caps": ""
          }, null, 512), [[_directive_ripple], [_directive_close_popup]])]),
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
  }, null, 8, ["showing"])])], 64);
}
;// CONCATENATED MODULE: ./src/pages/admins/approach-type/TiposDeAbordagensListPage.vue?vue&type=template&id=59c475f0

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.json.stringify.js
var es_json_stringify = __webpack_require__(2100);
// EXTERNAL MODULE: ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(1959);
// EXTERNAL MODULE: ./node_modules/quasar/src/composables/use-quasar.js
var use_quasar = __webpack_require__(8825);
// EXTERNAL MODULE: ./src/composebles/useApi.js
var useApi = __webpack_require__(811);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/admins/approach-type/TiposDeAbordagensListPage.vue?vue&type=script&lang=js


;

const columns = [{
  name: 'title',
  required: true,
  label: 'Nome do tipo',
  align: 'left',
  field: 'title',
  sortable: true
}, {
  name: 'options',
  align: 'center',
  label: 'Ação',
  field: 'options',
  sortable: true
}];
/* harmony default export */ const TiposDeAbordagensListPagevue_type_script_lang_js = ((0,runtime_core_esm_bundler/* defineComponent */.aZ)({
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
      type_approach: '',
      id: null
    });

    const listAll = async () => {
      try {
        loading.value = true;
        rows.value = await list('type_approach');
        loading.value = false;
      } catch (error) {
        alert(error);
      }
    };

    const deleteItem = async id => {
      try {
        loading.value = true;
        await remove('type_approach', id);
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
          await post('type_approach', formData);
        } else {
          alert(JSON.stringify(formData.id));
          await update('type_approach', formData);
        }

        listAll();
        loading.value = false;
      } catch (error) {
        alert(error);
      }
    };

    (0,runtime_core_esm_bundler/* onMounted */.bv)(() => {
      listAll();
    });

    const onItemClick = async () => {};

    const dialogCategory = (0,reactivity_esm_bundler/* ref */.iH)(false);

    const newDialog = data => {
      if (data) {
        Object.keys(data).forEach(key => {
          formData[key] = data[key];
        });
      } else {
        formData.type_approach = '';
      }

      dialogCategory.value = true;
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

    const filter = (0,reactivity_esm_bundler/* ref */.iH)('');
    return {
      filter,
      confirmDelete,
      newDialog,
      formData,
      loading,
      deleteItem,
      dialogCategory,
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
;// CONCATENATED MODULE: ./src/pages/admins/approach-type/TiposDeAbordagensListPage.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(4260);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPage.js
var QPage = __webpack_require__(4379);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCard.js
var QCard = __webpack_require__(151);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/input/QInput.js + 2 modules
var QInput = __webpack_require__(4842);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/space/QSpace.js
var QSpace = __webpack_require__(2025);
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
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCardSection.js
var QCardSection = __webpack_require__(5589);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/form/QForm.js
var QForm = __webpack_require__(5269);
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
;// CONCATENATED MODULE: ./src/pages/admins/approach-type/TiposDeAbordagensListPage.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(TiposDeAbordagensListPagevue_type_script_lang_js, [['render',render]])

/* harmony default export */ const TiposDeAbordagensListPage = (__exports__);
;














runtime_auto_import_default()(TiposDeAbordagensListPagevue_type_script_lang_js, 'components', {QPage: QPage/* default */.Z,QCard: QCard/* default */.Z,QInput: QInput/* default */.Z,QSpace: QSpace/* default */.Z,QBtn: QBtn/* default */.Z,QTable: QTable/* default */.Z,QTr: QTr/* default */.Z,QTd: QTd/* default */.Z,QDialog: QDialog/* default */.Z,QCardSection: QCardSection/* default */.Z,QForm: QForm/* default */.Z,QCardActions: QCardActions/* default */.Z,QInnerLoading: QInnerLoading/* default */.Z});runtime_auto_import_default()(TiposDeAbordagensListPagevue_type_script_lang_js, 'directives', {Ripple: Ripple/* default */.Z,ClosePopup: ClosePopup/* default */.Z});


/***/ })

}]);
//# sourceMappingURL=106.js.map