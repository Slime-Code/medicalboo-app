"use strict";
(self["webpackChunkmedicalbookapp"] = self["webpackChunkmedicalbookapp"] || []).push([[595],{

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

/***/ 6611:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ApproachesListPage)
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(3673);
// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(2323);
// EXTERNAL MODULE: ./node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js
var runtime_dom_esm_bundler = __webpack_require__(8880);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/admins/approach/ApproachesListPage.vue?vue&type=template&id=b5e2910c


const _hoisted_1 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", {
  class: "text-h5 q-pa-sm"
}, "Abordagens", -1);

const _hoisted_2 = {
  class: "row items-center"
};
const _hoisted_3 = {
  class: "row q-pa-md q-gutter-sm"
};

const _hoisted_4 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", {
  class: "text-h6"
}, "Nova Abordagem", -1);

const _hoisted_5 = {
  class: "row"
};
const _hoisted_6 = {
  class: "col-12"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_space = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-space");

  const _component_q_btn = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-btn");

  const _component_q_spinner_facebook = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-spinner-facebook");

  const _component_q_card_section = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-card-section");

  const _component_q_separator = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-separator");

  const _component_q_item_section = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-item-section");

  const _component_q_input = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-input");

  const _component_q_editor = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-editor");

  const _component_q_card = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-card");

  const _component_q_expansion_item = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-expansion-item");

  const _component_q_list = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-list");

  const _component_q_slide_transition = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-slide-transition");

  const _component_q_td = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-td");

  const _component_q_tooltip = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-tooltip");

  const _component_q_tr = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-tr");

  const _component_q_table = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-table");

  const _component_q_select = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-select");

  const _component_q_checkbox = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-checkbox");

  const _component_q_card_actions = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-card-actions");

  const _component_q_form = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-form");

  const _component_q_dialog = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-dialog");

  const _component_q_inner_loading = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-inner-loading");

  const _component_q_page = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-page");

  const _directive_ripple = (0,runtime_core_esm_bundler/* resolveDirective */.Q2)("ripple");

  const _directive_close_popup = (0,runtime_core_esm_bundler/* resolveDirective */.Q2)("close-popup");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_page, {
    class: "q-pa-md"
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_hoisted_1, (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_slide_transition, null, {
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* withDirectives */.wy)((0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_card_section, {
        class: "q-px-none"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_card, {
          flat: "",
          bordered: ""
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_ctx.currentApproach ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_card_section, {
            key: 0,
            class: "row"
          }, {
            default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.Uk)((0,shared_esm_bundler/* toDisplayString */.zw)(_ctx.currentApproach.title) + " ", 1), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_space), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
              flat: "",
              round: "",
              icon: "close",
              dense: "",
              onClick: _cache[0] || (_cache[0] = $event => _ctx.currentApproach = null)
            }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
              flat: "",
              loading: _ctx.loadingContent,
              round: "",
              icon: "save",
              dense: "",
              onClick: _cache[1] || (_cache[1] = $event => _ctx.saveContent())
            }, {
              loading: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_spinner_facebook)]),
              _: 1
            }, 8, ["loading"])]),
            _: 1
          })) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_separator), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_card_section, null, {
            default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [((0,runtime_core_esm_bundler/* openBlock */.wg)(true), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, null, (0,runtime_core_esm_bundler/* renderList */.Ko)(_ctx.contents, (content, index) => {
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
                  }, 1024), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item_section, {
                    side: ""
                  }, {
                    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_2, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
                      icon: "cancel",
                      color: "red",
                      round: "",
                      flat: "",
                      onClick: $event => _ctx.removeContent(index)
                    }, null, 8, ["onClick"])])]),
                    _: 2
                  }, 1024)]),
                  default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_separator), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_card, null, {
                    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_card_section, null, {
                      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_input, {
                        rules: [val => !!val || 'Campo obrigatório'],
                        outlined: "",
                        label: "Título",
                        dense: "",
                        modelValue: _ctx.contents[index].title,
                        "onUpdate:modelValue": $event => _ctx.contents[index].title = $event
                      }, null, 8, ["rules", "modelValue", "onUpdate:modelValue"]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_editor, {
                        modelValue: _ctx.contents[index].content,
                        "onUpdate:modelValue": $event => _ctx.contents[index].content = $event,
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
              icon: "add",
              color: "primary",
              outline: "",
              label: "Adicionar conteúdo",
              "no-caps": "",
              onClick: _ctx.addContent
            }, null, 8, ["onClick"])]),
            _: 1
          })]),
          _: 1
        })]),
        _: 1
      }, 512), [[runtime_dom_esm_bundler/* vShow */.F8, _ctx.currentApproach]])]),
      _: 1
    }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_card, {
      class: "q-mb-sm",
      flat: "",
      bordered: ""
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_3, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_input, {
        class: "col-7 col-sm-7 col-md-7 col-xs-12 col-lg-7 col-xl-7",
        modelValue: _ctx.filter,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => _ctx.filter = $event),
        placeholder: "Pesquisar abordagem",
        dense: "",
        outlined: ""
      }, null, 8, ["modelValue"]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_space), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
        class: "col-2 col-sm-2 col-md-2 col-xs-12 col-lg-2 col-xl-2",
        color: "primary",
        label: "Nova abordagem",
        onClick: _cache[3] || (_cache[3] = $event => _ctx.newDialog()),
        "no-caps": "",
        rounded: ""
      }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
        class: "col-2 col-sm-2 col-md-2 col-xs-12 col-lg-2 col-xl-2",
        color: "primary",
        label: "Atualizar",
        onClick: _cache[4] || (_cache[4] = $event => _ctx.getAproaches()),
        "no-caps": "",
        rounded: ""
      })])]),
      _: 1
    }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_table, {
      color: "primary",
      dense: _ctx.$q.screen.lt.xs,
      flat: "",
      square: "",
      bordered: "",
      loading: _ctx.loadingTable,
      rows: _ctx.rows,
      columns: _ctx.columns,
      "visible-columns": ['title', 'options', 'topic', 'type_approach', 'criado'],
      "row-key": "title",
      separator: "cell",
      filter: _ctx.filter
    }, {
      body: (0,runtime_core_esm_bundler/* withCtx */.w5)(props => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_tr, {
        props: props
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_td, {
          key: "title",
          props: props
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.Uk)((0,shared_esm_bundler/* toDisplayString */.zw)(props.row.title), 1)]),
          _: 2
        }, 1032, ["props"]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_td, {
          class: "text-left",
          key: "topic",
          props: props
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.Uk)((0,shared_esm_bundler/* toDisplayString */.zw)(props.row.topic), 1)]),
          _: 2
        }, 1032, ["props"]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_td, {
          class: "text-left",
          key: "type_approach",
          props: props
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.Uk)((0,shared_esm_bundler/* toDisplayString */.zw)(props.row.type_approach), 1)]),
          _: 2
        }, 1032, ["props"]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_td, {
          class: "text-left",
          key: "criado",
          props: props
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" Yuri Rego aos: " + (0,shared_esm_bundler/* toDisplayString */.zw)(new Date(props.row.created_at).toLocaleString("en-GB", {
            timeZone: "UTC"
          })), 1)]),
          _: 2
        }, 1032, ["props"]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_td, {
          key: "options",
          class: "text-left",
          props: props
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
            icon: "content_copy",
            disable: !props.row.link,
            flat: "",
            round: "",
            size: "sm",
            dense: "",
            onClick: $event => _ctx.copyTo(props.row.id)
          }, {
            default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_tooltip, null, {
              default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.Uk)((0,shared_esm_bundler/* toDisplayString */.zw)(props.row.link ? "Copiar conteúdo como Hyperlink" : "Não conteúdo Hyperlink"), 1)]),
              _: 2
            }, 1024)]),
            _: 2
          }, 1032, ["disable", "onClick"]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
            flat: "",
            round: "",
            size: "sm",
            icon: "edit",
            onClick: $event => _ctx.newDialog(props.row),
            dense: ""
          }, null, 8, ["onClick"]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
            flat: "",
            round: "",
            size: "sm",
            icon: "source",
            onClick: $event => _ctx.getContents(props.row),
            dense: ""
          }, null, 8, ["onClick"]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
            flat: "",
            round: "",
            size: "sm",
            icon: "delete",
            onClick: $event => _ctx.confirmDelete(props.row.id),
            dense: ""
          }, null, 8, ["onClick"])]),
          _: 2
        }, 1032, ["props"])]),
        _: 2
      }, 1032, ["props"])]),
      _: 1
    }, 8, ["dense", "loading", "rows", "columns", "filter"]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_dialog, {
      modelValue: _ctx.showAddApproach,
      "onUpdate:modelValue": _cache[11] || (_cache[11] = $event => _ctx.showAddApproach = $event),
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
            default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_hoisted_4]),
            _: 1
          }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_separator), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_card_section, {
            class: "scroll",
            style: {
              "max-height": "55vh"
            }
          }, {
            default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_5, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_input, {
              class: "col-12",
              rules: [val => !!val || 'Campo obrigatório'],
              outlined: "",
              label: "Titulo",
              dense: "",
              modelValue: _ctx.formData.title,
              "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => _ctx.formData.title = $event),
              modelModifiers: {
                trim: true
              },
              autofocus: ""
            }, null, 8, ["rules", "modelValue"]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_select, {
              class: "col-12",
              rules: [val => !!val || 'Campo obrigatório'],
              dense: "",
              outlined: "",
              modelValue: _ctx.formData.topic_id,
              "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => _ctx.formData.topic_id = $event),
              options: _ctx.optionsTopic,
              label: "Topico"
            }, null, 8, ["rules", "modelValue", "options"]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_select, {
              class: "col-12",
              rules: [val => !!val || 'Campo obrigatório'],
              dense: "",
              outlined: "",
              modelValue: _ctx.formData.type_approach_id,
              "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => _ctx.formData.type_approach_id = $event),
              options: _ctx.optionsAproach,
              label: "Tipo de Abordagem"
            }, null, 8, ["rules", "modelValue", "options"]), (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_6, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_checkbox, {
              modelValue: _ctx.formData.link,
              "onUpdate:modelValue": _cache[8] || (_cache[8] = $event => _ctx.formData.link = $event),
              class: "col-4",
              label: "Conteúdo hyperlink"
            }, null, 8, ["modelValue"]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_checkbox, {
              modelValue: _ctx.formData.premium,
              "onUpdate:modelValue": _cache[9] || (_cache[9] = $event => _ctx.formData.premium = $event),
              class: "col-4",
              label: "Conteúdo Premium"
            }, null, 8, ["modelValue"])])])]),
            _: 1
          }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_separator), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_card_actions, {
            align: "right"
          }, {
            default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* withDirectives */.wy)((0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
              label: "Cancelar ",
              onClick: _cache[10] || (_cache[10] = $event => _ctx.loadingForm = false),
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
          })]),
          _: 1
        }, 8, ["onSubmit"])]),
        _: 1
      })]),
      _: 1
    }, 8, ["modelValue"]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_inner_loading, {
      showing: _ctx.loadingForm,
      label: "Carregando dados...",
      "label-class": "text-primary",
      color: "primary",
      "label-style": "font-size: 1.1em"
    }, null, 8, ["showing"])]),
    _: 1
  });
}
;// CONCATENATED MODULE: ./src/pages/admins/approach/ApproachesListPage.vue?vue&type=template&id=b5e2910c

// EXTERNAL MODULE: ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(1959);
// EXTERNAL MODULE: ./node_modules/quasar/src/composables/use-quasar.js
var use_quasar = __webpack_require__(8825);
// EXTERNAL MODULE: ./node_modules/quasar/src/utils/copy-to-clipboard.js
var copy_to_clipboard = __webpack_require__(1914);
// EXTERNAL MODULE: ./src/composebles/useApi.js
var useApi = __webpack_require__(811);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/admins/approach/ApproachesListPage.vue?vue&type=script&lang=js

;

const columns = [{
  name: 'title',
  required: true,
  label: 'Título',
  align: 'left',
  field: 'title',
  sortable: true
}, {
  name: 'topic',
  align: 'left',
  label: 'Tópico',
  field: 'topic',
  sortable: true
}, {
  name: 'type_approach',
  align: 'left',
  label: 'Tipo de abordagem',
  field: 'type_approach',
  sortable: true
}, {
  name: 'criado',
  align: 'left',
  label: 'Criado Por',
  field: 'criado Por',
  sortable: true
}, {
  name: 'options',
  align: 'left',
  label: 'Ação',
  field: 'options',
  sortable: true
}];
/* harmony default export */ const ApproachesListPagevue_type_script_lang_js = ((0,runtime_core_esm_bundler/* defineComponent */.aZ)({
  setup() {
    const $q = (0,use_quasar/* default */.Z)();
    const loadingForm = (0,reactivity_esm_bundler/* ref */.iH)(false);
    const loadingTable = (0,reactivity_esm_bundler/* ref */.iH)(false);
    const {
      list,
      joinTables,
      post,
      update,
      removeWhere,
      remove,
      getById,
      getByField
    } = (0,useApi/* default */.Z)();
    const rows = (0,reactivity_esm_bundler/* ref */.iH)([]);
    const optionsAproach = (0,reactivity_esm_bundler/* ref */.iH)(null);
    const optionsTopic = (0,reactivity_esm_bundler/* ref */.iH)(null);
    const showAddApproach = (0,reactivity_esm_bundler/* ref */.iH)(false);
    const formData = (0,reactivity_esm_bundler/* reactive */.qj)({
      title: '',
      topic_id: null,
      type_approach_id: null,
      link: false,
      premium: false
    });

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
    }; // const cat = [];


    const getAproaches = async () => {
      try {
        loadingTable.value = true;
        const aux = await joinTables('approach', [{
          name: 'topic',
          foreign_key: 'topic_id',
          fields: 'name'
        }, {
          name: 'type_approach',
          foreign_key: 'type_approach_id',
          fields: 'type_approach'
        }]);
        rows.value = aux.map(item => ({
          id: item.id,
          title: item.title,
          link: item.link,
          type_approach_id: item.type_approach_id,
          topic_id: item.topic_id,
          topic: item.topic.name,
          type_approach: item.type_approach.type_approach,
          created_at: item.created_at,
          premium: item.premium
        }));
        loadingTable.value = false;
      } catch (error) {
        loadingTable.value = false;
        alert(error);
      }
    };

    const deleteItem = async id => {
      // await remove('favorite_approach_user', id);
      await removeWhere('approach_contents', 'id_approach', id);
      await removeWhere('favorite_approach_user', 'approach_id', id);
      await removeWhere('definicao', 'approach_id', id);
      await removeWhere('exameComplementar', 'approach_id', id);
      await remove('approach', id);
      getAproaches();
    };

    (0,runtime_core_esm_bundler/* onMounted */.bv)(() => {
      getAproaches();
      getLists();
    });

    const newDialog = async data => {
      if (data) {
        loadingForm.value = true;
        const result = await getById('type_approach', data.type_approach_id);
        const resultTopic = await getById('topic', data.topic_id);
        formData.title = data.title;
        formData.id = data.id;
        formData.link = data.link;
        formData.premium = data.premium;
        loadingForm.value = false;
        formData.type_approach_id = {
          label: result.type_approach,
          value: result.id
        };
        formData.topic_id = {
          label: resultTopic.name,
          value: resultTopic.id
        };
      } else {
        formData.premium = false;
        contents.value = [];
        formData.title = '';
        formData.topic_id = null;
        formData.type_approach_id = null;
      }

      showAddApproach.value = true;
    };

    const saveItem = async () => {
      try {
        showAddApproach.value = false;
        loadingForm.value = true;
        let approach_id = formData.id;

        if (!formData.id) {
          delete formData.id;
          formData.topic_id = formData.topic_id.value;
          formData.type_approach_id = formData.type_approach_id.value;
          const result = await post('approach', formData);
          alert('foiiiiiii');
          approach_id = result[0].id;
        } else {
          formData.topic_id = formData.topic_id.value;
          formData.type_approach_id = formData.type_approach_id.value;
          alert('atualizar');
          await update('approach', formData);
          delete formData.id;
        }

        getAproaches();
        loadingForm.value = false;
      } catch (error) {
        alert(error.message);
        loadingForm.value = false;
      }
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
    const contents = (0,reactivity_esm_bundler/* ref */.iH)([]);

    const addContent = () => {
      contents.value.push({
        title: 'Novo conteúdo',
        content: ''
      });
    };

    const currentApproach = (0,reactivity_esm_bundler/* ref */.iH)();
    const loadingContent = (0,reactivity_esm_bundler/* ref */.iH)(false);

    const saveContent = async () => {
      contents.value.forEach(async content => {
        const data = {
          title: content.title,
          content: content.content,
          id: content.id,
          id_approach: currentApproach.value.id
        };
        loadingContent.value = true;

        if (content.id) {
          await update('approach_contents', data);
        } else {
          delete data.id;
          await post('approach_contents', data);
        }

        loadingContent.value = false;
      });
    };

    const removeContent = index => {
      if (contents.value[index].id) {
        const {
          id
        } = contents.value[index];
        $q.dialog({
          title: 'Eliminar conteúdo',
          message: `Gostaria de apagar conteúdo ${contents.value[index].title} ?`,
          persistent: true,
          cancel: 'Cancelar'
        }).onOk(async () => {
          await remove('approach_contents', id);
          $q.notify({
            message: 'Conteúdo apagado com sucesso!!'
          });
        });
      }

      contents.value.splice(index, 1);
    };

    const getContents = async approach => {
      currentApproach.value = approach;
      loadingForm.value = true;
      contents.value = await getByField('approach_contents', 'id_approach', currentApproach.value.id);
      loadingForm.value = false;
    };

    const copyTo = key => {
      (0,copy_to_clipboard/* default */.Z)(`${window.location.origin}/content/${key}`).then(() => {
        // success!
        $q.notify({
          message: 'Conteúdo copiado'
        });
      }).catch(() => {// fail
      });
    };

    return {
      copyTo,
      getContents,
      loadingContent,
      saveContent,
      contents,
      loadingForm,
      loadingTable,
      addContent,
      removeContent,
      filter,
      newDialog,
      showAddApproach,
      formData,
      optionsAproach,
      optionsTopic,
      saveItem,
      currentApproach,
      deleteItem,
      confirmDelete,
      columns,
      rows,
      getAproaches
    };
  }

}));
;// CONCATENATED MODULE: ./src/pages/admins/approach/ApproachesListPage.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(4260);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPage.js
var QPage = __webpack_require__(4379);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/slide-transition/QSlideTransition.js
var QSlideTransition = __webpack_require__(2471);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCardSection.js
var QCardSection = __webpack_require__(5589);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCard.js
var QCard = __webpack_require__(151);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/space/QSpace.js
var QSpace = __webpack_require__(2025);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__(2165);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/spinner/QSpinnerFacebook.js
var QSpinnerFacebook = __webpack_require__(8719);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/separator/QSeparator.js
var QSeparator = __webpack_require__(5869);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QList.js
var QList = __webpack_require__(7011);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/expansion-item/QExpansionItem.js
var QExpansionItem = __webpack_require__(429);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemSection.js
var QItemSection = __webpack_require__(2035);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/input/QInput.js + 2 modules
var QInput = __webpack_require__(4842);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/editor/QEditor.js + 4 modules
var QEditor = __webpack_require__(9859);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/table/QTable.js + 12 modules
var QTable = __webpack_require__(8468);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/table/QTr.js
var QTr = __webpack_require__(8186);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/table/QTd.js
var QTd = __webpack_require__(3884);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/tooltip/QTooltip.js
var QTooltip = __webpack_require__(8870);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/dialog/QDialog.js
var QDialog = __webpack_require__(6778);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/form/QForm.js
var QForm = __webpack_require__(5269);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/select/QSelect.js + 1 modules
var QSelect = __webpack_require__(3017);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/checkbox/QCheckbox.js
var QCheckbox = __webpack_require__(5735);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCardActions.js
var QCardActions = __webpack_require__(9367);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/inner-loading/QInnerLoading.js
var QInnerLoading = __webpack_require__(6941);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemLabel.js
var QItemLabel = __webpack_require__(2350);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/page-sticky/QPageSticky.js + 1 modules
var QPageSticky = __webpack_require__(1007);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/header/QHeader.js
var QHeader = __webpack_require__(3812);
// EXTERNAL MODULE: ./node_modules/quasar/src/directives/Ripple.js + 1 modules
var Ripple = __webpack_require__(6489);
// EXTERNAL MODULE: ./node_modules/quasar/src/directives/ClosePopup.js
var ClosePopup = __webpack_require__(677);
// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(7518);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/pages/admins/approach/ApproachesListPage.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(ApproachesListPagevue_type_script_lang_js, [['render',render]])

/* harmony default export */ const ApproachesListPage = (__exports__);
;



























runtime_auto_import_default()(ApproachesListPagevue_type_script_lang_js, 'components', {QPage: QPage/* default */.Z,QSlideTransition: QSlideTransition/* default */.Z,QCardSection: QCardSection/* default */.Z,QCard: QCard/* default */.Z,QSpace: QSpace/* default */.Z,QBtn: QBtn/* default */.Z,QSpinnerFacebook: QSpinnerFacebook/* default */.Z,QSeparator: QSeparator/* default */.Z,QList: QList/* default */.Z,QExpansionItem: QExpansionItem/* default */.Z,QItemSection: QItemSection/* default */.Z,QInput: QInput/* default */.Z,QEditor: QEditor/* default */.Z,QTable: QTable/* default */.Z,QTr: QTr/* default */.Z,QTd: QTd/* default */.Z,QTooltip: QTooltip/* default */.Z,QDialog: QDialog/* default */.Z,QForm: QForm/* default */.Z,QSelect: QSelect/* default */.Z,QCheckbox: QCheckbox/* default */.Z,QCardActions: QCardActions/* default */.Z,QInnerLoading: QInnerLoading/* default */.Z,QItemLabel: QItemLabel/* default */.Z,QPageSticky: QPageSticky/* default */.Z,QHeader: QHeader/* default */.Z});runtime_auto_import_default()(ApproachesListPagevue_type_script_lang_js, 'directives', {Ripple: Ripple/* default */.Z,ClosePopup: ClosePopup/* default */.Z});


/***/ })

}]);
//# sourceMappingURL=595.js.map