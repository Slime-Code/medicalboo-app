"use strict";
(self["webpackChunkmedicalbookapp"] = self["webpackChunkmedicalbookapp"] || []).push([[66],{

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

/***/ 4066:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SobreAppPage)
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(3673);
// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(2323);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/admins/SobreAppPage.vue?vue&type=template&id=0b799bd8


const _hoisted_1 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", {
  class: "text-h5 q-pa-sm"
}, "Sobre O App", -1);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_separator = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-separator");

  const _component_q_item_section = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-item-section");

  const _component_q_editor = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-editor");

  const _component_q_card_section = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-card-section");

  const _component_q_card = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-card");

  const _component_q_expansion_item = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-expansion-item");

  const _component_q_list = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-list");

  const _component_q_btn = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-btn");

  const _component_q_inner_loading = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-inner-loading");

  const _component_q_page = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-page");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_page, {
    class: "q-pa-md"
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_hoisted_1, (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_separator), ((0,runtime_core_esm_bundler/* openBlock */.wg)(true), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, null, (0,runtime_core_esm_bundler/* renderList */.Ko)(_ctx.formDat, (content, index) => {
      return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_list, {
        key: index,
        bordered: "",
        class: "rounded-borders q-my-sm"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_expansion_item, {
          label: "Conteúdo"
        }, {
          header: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item_section, null, {
            default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.Uk)((0,shared_esm_bundler/* toDisplayString */.zw)(content.title), 1)]),
            _: 2
          }, 1024)]),
          default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_separator), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_card, null, {
            default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_card_section, null, {
              default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_editor, {
                modelValue: _ctx.formDat[index].conteudo,
                "onUpdate:modelValue": $event => _ctx.formDat[index].conteudo = $event,
                "min-height": "8rem",
                toolbar: [[{
                  label: _ctx.$q.lang.editor.align,
                  icon: _ctx.$q.iconSet.editor.align,
                  fixedLabel: true,
                  list: 'only-icons',
                  options: ['left', 'center', 'right', 'justify']
                }, {
                  label: _ctx.$q.lang.editor.align,
                  icon: _ctx.$q.iconSet.editor.align,
                  fixedLabel: true,
                  options: ['left', 'center', 'right', 'justify']
                }], ['bold', 'italic', 'strike', 'underline', 'subscript', 'superscript'], ['token', 'hr', 'link', 'custom_btn'], ['print', 'fullscreen'], [{
                  label: _ctx.$q.lang.editor.formatting,
                  icon: _ctx.$q.iconSet.editor.formatting,
                  list: 'no-icons',
                  options: ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'code']
                }, {
                  label: _ctx.$q.lang.editor.fontSize,
                  icon: _ctx.$q.iconSet.editor.fontSize,
                  fixedLabel: true,
                  fixedIcon: true,
                  list: 'no-icons',
                  options: ['size-1', 'size-2', 'size-3', 'size-4', 'size-5', 'size-6', 'size-7']
                }, {
                  label: _ctx.$q.lang.editor.defaultFont,
                  icon: _ctx.$q.iconSet.editor.font,
                  fixedIcon: true,
                  list: 'no-icons',
                  options: ['default_font', 'arial', 'arial_black', 'comic_sans', 'courier_new', 'impact', 'lucida_grande', 'times_new_roman', 'verdana']
                }, 'removeFormat'], ['quote', 'unordered', 'ordered', 'outdent', 'indent'], ['undo', 'redo'], ['viewsource']],
                fonts: {
                  arial: 'Arial',
                  arial_black: 'Arial Black',
                  comic_sans: 'Comic Sans MS',
                  courier_new: 'Courier New',
                  impact: 'Impact',
                  lucida_grande: 'Lucida Grande',
                  times_new_roman: 'Times New Roman',
                  verdana: 'Verdana'
                }
              }, null, 8, ["modelValue", "onUpdate:modelValue", "toolbar"])]),
              _: 2
            }, 1024)]),
            _: 2
          }, 1024)]),
          _: 2
        }, 1024)]),
        _: 2
      }, 1024);
    }), 128)), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
      class: "q-mb-sm",
      icon: "send",
      color: "primary",
      outline: "",
      label: "Salvar",
      "no-caps": "",
      onClick: _ctx.saveContent
    }, null, 8, ["onClick"]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_inner_loading, {
      showing: _ctx.loadingForm,
      label: "Carregando dados...",
      "label-class": "text-primary",
      color: "primary",
      "label-style": "font-size: 1.1em"
    }, null, 8, ["showing"])]),
    _: 1
  });
}
;// CONCATENATED MODULE: ./src/pages/admins/SobreAppPage.vue?vue&type=template&id=0b799bd8

// EXTERNAL MODULE: ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(1959);
// EXTERNAL MODULE: ./src/composebles/useApi.js
var useApi = __webpack_require__(811);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/admins/SobreAppPage.vue?vue&type=script&lang=js
 // import useQuasar from 'quasar/src/composables/use-quasar.js';;


/* harmony default export */ const SobreAppPagevue_type_script_lang_js = ((0,runtime_core_esm_bundler/* defineComponent */.aZ)({
  setup() {
    // const $q = useQuasar();
    const loadingForm = (0,reactivity_esm_bundler/* ref */.iH)(false);
    const loadingTable = (0,reactivity_esm_bundler/* ref */.iH)(false);
    const {
      list,
      post,
      update
    } = (0,useApi/* default */.Z)();
    const rows = (0,reactivity_esm_bundler/* ref */.iH)([]);
    const optionsAproach = (0,reactivity_esm_bundler/* ref */.iH)(null);
    const optionsTopic = (0,reactivity_esm_bundler/* ref */.iH)(null);
    const formDat = (0,reactivity_esm_bundler/* ref */.iH)([]);

    const listSobreApp = async () => {
      formDat.value = await list('sobreApp'); // alert(JSON.stringify(formDat));
    };

    const getLists = async () => {
      const auxAproach = await list('type_approach');
      const auxTopic = await list('topic');
      optionsAproach.value = auxAproach.map(item => ({
        label: item.type_approach,
        value: item.id
      }));
      optionsTopic.value = auxTopic.map(item => ({
        label: item.name,
        value: item.id
      }));
    };

    const filter = (0,reactivity_esm_bundler/* ref */.iH)('');

    const addContent = () => {
      formDat.value.push({
        title: 'Novo conteúdo',
        content: ''
      });
    };

    const loadingContent = (0,reactivity_esm_bundler/* ref */.iH)(false);

    const saveContent = async () => {
      try {
        formDat.value.forEach(async content => {
          const data = {
            title: content.title,
            conteudo: content.conteudo,
            id: content.id
          };
          loadingContent.value = true;

          if (content.id) {
            await update('sobreApp', data);
          } else {
            delete data.id;
            await post('sobreApp', data);
          }

          loadingContent.value = false;
        });
      } catch (error) {
        alert(error.message);
      }
    };

    (0,runtime_core_esm_bundler/* onMounted */.bv)(() => {
      // getContents();
      listSobreApp(); // getAproaches();

      getLists();
    });
    return {
      formDat,
      loadingContent,
      saveContent,
      loadingForm,
      loadingTable,
      addContent,
      filter,
      optionsAproach,
      optionsTopic,
      rows
    };
  }

}));
;// CONCATENATED MODULE: ./src/pages/admins/SobreAppPage.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(4260);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPage.js
var QPage = __webpack_require__(4379);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/separator/QSeparator.js
var QSeparator = __webpack_require__(5869);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QList.js
var QList = __webpack_require__(7011);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/expansion-item/QExpansionItem.js
var QExpansionItem = __webpack_require__(429);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemSection.js
var QItemSection = __webpack_require__(2035);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCard.js
var QCard = __webpack_require__(151);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCardSection.js
var QCardSection = __webpack_require__(5589);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/editor/QEditor.js + 4 modules
var QEditor = __webpack_require__(9859);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__(2165);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/inner-loading/QInnerLoading.js
var QInnerLoading = __webpack_require__(6941);
// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(7518);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/pages/admins/SobreAppPage.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(SobreAppPagevue_type_script_lang_js, [['render',render]])

/* harmony default export */ const SobreAppPage = (__exports__);
;










runtime_auto_import_default()(SobreAppPagevue_type_script_lang_js, 'components', {QPage: QPage/* default */.Z,QSeparator: QSeparator/* default */.Z,QList: QList/* default */.Z,QExpansionItem: QExpansionItem/* default */.Z,QItemSection: QItemSection/* default */.Z,QCard: QCard/* default */.Z,QCardSection: QCardSection/* default */.Z,QEditor: QEditor/* default */.Z,QBtn: QBtn/* default */.Z,QInnerLoading: QInnerLoading/* default */.Z});


/***/ })

}]);
//# sourceMappingURL=66.js.map