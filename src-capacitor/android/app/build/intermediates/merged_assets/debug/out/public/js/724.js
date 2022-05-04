"use strict";
(self["webpackChunkmedicalbookapp"] = self["webpackChunkmedicalbookapp"] || []).push([[724],{

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

/***/ 6724:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ AdminLayout)
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(3673);
// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(2323);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/layouts/AdminLayout.vue?vue&type=template&id=3fc03e96

const _hoisted_1 = {
  class: "col-md-4 col-sm-6 col-xs-10"
};

const _hoisted_2 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", null, [/*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("strong", null, " copyright 2022-2023 "), /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("strong", {
  style: {
    "color": "#007BCE"
  }
}, " MedicalBook"), /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)(". Todos os direitos reservados. ")], -1);

const _hoisted_3 = {
  class: "flex flex-center"
};
const _hoisted_4 = {
  class: "column",
  align: "center"
};
const _hoisted_5 = {
  class: "col item q-pt-lg"
};
const _hoisted_6 = {
  class: "text-center"
};

const _hoisted_7 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("br", null, null, -1);

const _hoisted_8 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("span", null, "Administrador", -1);

const _hoisted_9 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("br", null, null, -1);

const _hoisted_10 = {
  class: "text-h6 row item-start"
};

const _hoisted_11 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" Alterar valor do pacote Premium ");

const _hoisted_12 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("br", null, null, -1);

const _hoisted_13 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("br", null, null, -1);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_btn = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-btn");

  const _component_q_space = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-space");

  const _component_q_toolbar = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-toolbar");

  const _component_q_header = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-header");

  const _component_q_toolbar_title = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-toolbar-title");

  const _component_q_footer = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-footer");

  const _component_q_icon = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-icon");

  const _component_q_badge = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-badge");

  const _component_q_item_label = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-item-label");

  const _component_q_item_section = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-item-section");

  const _component_q_item = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-item");

  const _component_q_separator = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-separator");

  const _component_ItemMenuSideBar = (0,runtime_core_esm_bundler/* resolveComponent */.up)("ItemMenuSideBar");

  const _component_q_expansion_item = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-expansion-item");

  const _component_q_list = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-list");

  const _component_q_drawer = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-drawer");

  const _component_router_view = (0,runtime_core_esm_bundler/* resolveComponent */.up)("router-view");

  const _component_q_card_section = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-card-section");

  const _component_q_input = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-input");

  const _component_q_card_actions = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-card-actions");

  const _component_q_form = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-form");

  const _component_q_card = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-card");

  const _component_q_dialog = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-dialog");

  const _component_q_page_container = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-page-container");

  const _component_q_layout = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-layout");

  const _directive_close_popup = (0,runtime_core_esm_bundler/* resolveDirective */.Q2)("close-popup");

  const _directive_ripple = (0,runtime_core_esm_bundler/* resolveDirective */.Q2)("ripple");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_layout, {
    view: "lHr LpR lFr",
    class: "bg-grey-1"
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_1, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_header, {
      elevated: "",
      class: "bg-white text-grey-8",
      "height-hint": "64"
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_toolbar, null, {
        default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
          flat: "",
          dense: "",
          round: "",
          onClick: $setup.toggleLeftDrawer,
          "aria-label": "Menu",
          icon: "menu",
          class: "q-mx-md"
        }, null, 8, ["onClick"]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
          to: {
            name: "inicio"
          },
          flat: "",
          dense: "",
          color: "grey-8",
          "no-caps": "",
          label: "Início",
          class: "q-ml-sm q-px-md"
        }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
          flat: "",
          dense: "",
          color: "grey-8",
          "no-caps": "",
          label: "Suporte",
          class: "q-ml-sm q-px-md"
        }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_space), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
          onClick: _cache[0] || (_cache[0] = $event => $setup.dilogPremi = true),
          size: "13px",
          "no-caps": "",
          "no-wrap": "",
          unelevated: "",
          "text-color": "black",
          icon: "fas fa-crown",
          label: "Premium",
          class: "btn-profile btn-prime q-ml-sm q-px-md",
          style: {
            "background-color": "#FFC300"
          }
        })]),
        _: 1
      })]),
      _: 1
    }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_footer, {
      class: "bg-white text-grey-8"
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_toolbar, {
        bordered: "",
        class: "q-pa-md"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_toolbar_title, {
          class: "text-body1"
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_hoisted_2]),
          _: 1
        })]),
        _: 1
      })]),
      _: 1
    }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_drawer, {
      modelValue: $setup.leftDrawerOpen,
      "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => $setup.leftDrawerOpen = $event),
      "show-if-above": "",
      bordered: ""
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_list, null, {
        default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_3, [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_4, [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_5, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
          style: {
            "background": "#1A4B9A",
            "color": "#1378B3"
          },
          round: "",
          icon: "fas fa-user",
          size: "40px"
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_badge, {
            class: "pic",
            style: {
              "background": "#49D16B"
            },
            rounded: ""
          }, {
            default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
              dense: "",
              name: "camera",
              color: "white",
              size: "30px"
            })]),
            _: 1
          })]),
          _: 1
        })])])]), (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_6, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item, {
          clickable: ""
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item_section, null, {
            default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item_label, {
              header: ""
            }, {
              default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createElementVNode */._)("strong", null, (0,shared_esm_bundler/* toDisplayString */.zw)($setup.user.user_metadata.name), 1), _hoisted_7, _hoisted_8]),
              _: 1
            })]),
            _: 1
          })]),
          _: 1
        })]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_separator), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_separator), ((0,runtime_core_esm_bundler/* openBlock */.wg)(true), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, null, (0,runtime_core_esm_bundler/* renderList */.Ko)($setup.principaisLinks, link => {
          return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_ItemMenuSideBar, (0,runtime_core_esm_bundler/* mergeProps */.dG)({
            key: link.title
          }, link), null, 16);
        }), 128)), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_list, {
          class: "rounded-borders"
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_expansion_item, {
            dense: "",
            "dense-toggle": "",
            "expand-separator": "",
            icon: "person",
            label: "Usuários"
          }, {
            default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_expansion_item, {
              to: {
                name: 'admin'
              },
              "switch-toggle-side": "",
              "dense-toggle": "",
              label: "Admin"
            }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_expansion_item, {
              to: {
                name: 'users'
              },
              "switch-toggle-side": "",
              "dense-toggle": "",
              label: "Normal"
            })]),
            _: 1
          }), _hoisted_9]),
          _: 1
        }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
          flat: "",
          class: "full-widt",
          style: {
            "margin-left": "5px"
          },
          icon: "logout",
          label: "Sair",
          onClick: $setup.handleLogout
        }, null, 8, ["onClick"])]),
        _: 1
      })]),
      _: 1
    }, 8, ["modelValue"]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_page_container, {
      class: "GPL__page-container"
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_router_view), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_dialog, {
        modelValue: $setup.dilogPremi,
        "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => $setup.dilogPremi = $event),
        persistent: ""
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_card, {
          style: {
            "min-width": "350px"
          }
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_card_section, null, {
            default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_10, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
              name: "fas fa-crown",
              style: {
                "margin-right": "10px"
              }
            }), _hoisted_11, (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_space), (0,runtime_core_esm_bundler/* withDirectives */.wy)((0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
              icon: "close",
              flat: "",
              round: "",
              dense: ""
            }, null, 512), [[_directive_close_popup]])]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_separator)]),
            _: 1
          }), _hoisted_12, (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_form, {
            onSubmit: $setup.updatValuePremium
          }, {
            default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_card_actions, {
              align: "left",
              class: "text-primary"
            }, {
              default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_input, {
                filled: "",
                modelValue: $setup.money,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => $setup.money = $event),
                type: "number",
                label: "valor",
                style: {
                  "max-width": "150px",
                  "width": "150px"
                },
                suffix: "R$ "
              }, null, 8, ["modelValue"]), (0,runtime_core_esm_bundler/* withDirectives */.wy)((0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
                label: "Salvar Valor",
                size: "19px",
                "no-caps": "",
                "no-wrap": "",
                unelevated: "",
                style: {
                  "background-color": "#FFC300",
                  "margin-left": "10px",
                  "max-width": "150px",
                  "width": "150px"
                },
                "text-color": "black",
                type: "submit"
              }, null, 512), [[_directive_ripple], [_directive_close_popup]])]),
              _: 1
            }), _hoisted_13]),
            _: 1
          }, 8, ["onSubmit"])]),
          _: 1
        })]),
        _: 1
      }, 8, ["modelValue"])]),
      _: 1
    })])]),
    _: 1
  });
}
;// CONCATENATED MODULE: ./src/layouts/AdminLayout.vue?vue&type=template&id=3fc03e96

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(5363);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.json.stringify.js
var es_json_stringify = __webpack_require__(2100);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/ItemMenuSideBar.vue?vue&type=template&id=70243810

function ItemMenuSideBarvue_type_template_id_70243810_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_icon = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-icon");

  const _component_q_item_section = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-item-section");

  const _component_q_item_label = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-item-label");

  const _component_q_item = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-item");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_item, {
    clickable: "",
    to: _ctx.link
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_ctx.icon ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_item_section, {
      key: 0,
      avatar: ""
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
        name: _ctx.icon
      }, null, 8, ["name"])]),
      _: 1
    })) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item_section, null, {
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item_label, null, {
        default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.Uk)((0,shared_esm_bundler/* toDisplayString */.zw)(_ctx.title), 1)]),
        _: 1
      })]),
      _: 1
    })]),
    _: 1
  }, 8, ["to"]);
}
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/ItemMenuSideBar.vue?vue&type=script&lang=js

/* harmony default export */ const ItemMenuSideBarvue_type_script_lang_js = ((0,runtime_core_esm_bundler/* defineComponent */.aZ)({
  name: 'ItemMenuSideBar',
  props: {
    title: {
      type: String,
      required: true
    },
    link: {
      type: String,
      default: '#'
    },
    icon: {
      type: String,
      default: ''
    }
  }
}));
;// CONCATENATED MODULE: ./src/components/ItemMenuSideBar.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(4260);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItem.js
var QItem = __webpack_require__(3414);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemSection.js
var QItemSection = __webpack_require__(2035);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__(4554);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemLabel.js
var QItemLabel = __webpack_require__(2350);
// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(7518);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/components/ItemMenuSideBar.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(ItemMenuSideBarvue_type_script_lang_js, [['render',ItemMenuSideBarvue_type_template_id_70243810_render]])

/* harmony default export */ const ItemMenuSideBar = (__exports__);
;




runtime_auto_import_default()(ItemMenuSideBarvue_type_script_lang_js, 'components', {QItem: QItem/* default */.Z,QItemSection: QItemSection/* default */.Z,QIcon: QIcon/* default */.Z,QItemLabel: QItemLabel/* default */.Z});

// EXTERNAL MODULE: ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(1959);
// EXTERNAL MODULE: ./src/functions/functionShowNotifications.js
var functionShowNotifications = __webpack_require__(4605);
// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.esm-bundler.js
var vue_router_esm_bundler = __webpack_require__(9582);
// EXTERNAL MODULE: ./node_modules/quasar/src/composables/use-quasar.js
var use_quasar = __webpack_require__(8825);
// EXTERNAL MODULE: ./src/composebles/useAuthUser.js
var useAuthUser = __webpack_require__(4958);
// EXTERNAL MODULE: ./src/composebles/useApi.js
var useApi = __webpack_require__(811);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/layouts/AdminLayout.vue?vue&type=script&lang=js


 // import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';

const linksList = [{
  title: 'Dashboard',
  icon: 'event',
  link: '/admin/'
}, {
  title: 'Categorias',
  icon: 'school',
  link: '/admin/categories'
}, {
  title: 'Tópicos',
  icon: 'chat_bubble',
  link: '/admin/topics'
}, {
  title: 'Abordagens',
  icon: 'receipt',
  link: '/admin/approaches'
}, {
  title: 'Áreas de oucupação',
  icon: 'work',
  link: '/admin/occupation-areas'
}, {
  title: 'Tipos de abordagens',
  icon: 'folder',
  link: '/admin/tipos-De-Abordagens'
}];



;


/* harmony default export */ const AdminLayoutvue_type_script_lang_js = ({
  name: 'AdminLayout',
  components: {
    ItemMenuSideBar: ItemMenuSideBar
  },

  setup() {
    const leftDrawerOpen = (0,reactivity_esm_bundler/* ref */.iH)(false);
    const search = (0,reactivity_esm_bundler/* ref */.iH)('');
    const storage = (0,reactivity_esm_bundler/* ref */.iH)(0.26);
    const $q = (0,use_quasar/* default */.Z)();
    const router = (0,vue_router_esm_bundler/* useRouter */.tv)();
    const loading = (0,reactivity_esm_bundler/* ref */.iH)(false);
    const dilogPremi = (0,reactivity_esm_bundler/* ref */.iH)(false);
    const money = (0,reactivity_esm_bundler/* ref */.iH)(297.90);
    const form = {
      valor: 0.0,
      id: 1
    };
    const {
      logout,
      user
    } = (0,useAuthUser/* default */.Z)();
    const {
      list,
      update
    } = (0,useApi/* default */.Z)();

    function toggleLeftDrawer() {
      leftDrawerOpen.value = !leftDrawerOpen.value;
    }

    const handleLogout = async () => {
      $q.dialog({
        title: 'Logout',
        message: 'Tens a certeza que queres Sair ?',
        cancel: true,
        persistent: true
      }).onOk(async () => {
        try {
          loading.value = true;
          await logout();
          loading.value = false;
          router.replace({
            name: 'login'
          });
        } catch (error) {
          loading.value = false;
          (0,functionShowNotifications/* showErrorNotification */.s)(`A Sessão Não Pode Ser Terminada Pelo Seguinte Erro: ${JSON.stringify(error)}`);
        }
      });
    };

    const getValuePremium = async () => {
      const aux = await list('valorPremium');
      money.value = aux.map(e => e.valor);
    };

    const updatValuePremium = async () => {
      form.valor = money.value;
      await update('valorPremium', form);
    };

    (0,runtime_core_esm_bundler/* onMounted */.bv)(() => {
      getValuePremium();
    });
    return {
      user,
      updatValuePremium,
      dilogPremi,
      leftDrawerOpen,
      search,
      storage,
      principaisLinks: linksList,
      toggleLeftDrawer,
      miniState: (0,reactivity_esm_bundler/* ref */.iH)(true),
      handleLogout,
      money
    };
  }

});
;// CONCATENATED MODULE: ./src/layouts/AdminLayout.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/quasar/src/components/layout/QLayout.js + 1 modules
var QLayout = __webpack_require__(3066);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/header/QHeader.js
var QHeader = __webpack_require__(3812);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/toolbar/QToolbar.js
var QToolbar = __webpack_require__(9570);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__(2165);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/space/QSpace.js
var QSpace = __webpack_require__(2025);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/footer/QFooter.js
var QFooter = __webpack_require__(1762);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/toolbar/QToolbarTitle.js
var QToolbarTitle = __webpack_require__(3747);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/drawer/QDrawer.js + 1 modules
var QDrawer = __webpack_require__(6873);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QList.js
var QList = __webpack_require__(7011);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/badge/QBadge.js
var QBadge = __webpack_require__(9721);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/separator/QSeparator.js
var QSeparator = __webpack_require__(5869);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/expansion-item/QExpansionItem.js
var QExpansionItem = __webpack_require__(429);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPageContainer.js
var QPageContainer = __webpack_require__(2652);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/dialog/QDialog.js
var QDialog = __webpack_require__(6778);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCard.js
var QCard = __webpack_require__(151);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCardSection.js
var QCardSection = __webpack_require__(5589);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/form/QForm.js
var QForm = __webpack_require__(5269);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCardActions.js
var QCardActions = __webpack_require__(9367);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/input/QInput.js + 2 modules
var QInput = __webpack_require__(4842);
// EXTERNAL MODULE: ./node_modules/quasar/src/directives/ClosePopup.js
var ClosePopup = __webpack_require__(677);
// EXTERNAL MODULE: ./node_modules/quasar/src/directives/Ripple.js + 1 modules
var Ripple = __webpack_require__(6489);
;// CONCATENATED MODULE: ./src/layouts/AdminLayout.vue




;
const AdminLayout_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(AdminLayoutvue_type_script_lang_js, [['render',render]])

/* harmony default export */ const AdminLayout = (AdminLayout_exports_);
;
























runtime_auto_import_default()(AdminLayoutvue_type_script_lang_js, 'components', {QLayout: QLayout/* default */.Z,QHeader: QHeader/* default */.Z,QToolbar: QToolbar/* default */.Z,QBtn: QBtn/* default */.Z,QSpace: QSpace/* default */.Z,QFooter: QFooter/* default */.Z,QToolbarTitle: QToolbarTitle/* default */.Z,QDrawer: QDrawer/* default */.Z,QList: QList/* default */.Z,QBadge: QBadge/* default */.Z,QIcon: QIcon/* default */.Z,QItem: QItem/* default */.Z,QItemSection: QItemSection/* default */.Z,QItemLabel: QItemLabel/* default */.Z,QSeparator: QSeparator/* default */.Z,QExpansionItem: QExpansionItem/* default */.Z,QPageContainer: QPageContainer/* default */.Z,QDialog: QDialog/* default */.Z,QCard: QCard/* default */.Z,QCardSection: QCardSection/* default */.Z,QForm: QForm/* default */.Z,QCardActions: QCardActions/* default */.Z,QInput: QInput/* default */.Z});runtime_auto_import_default()(AdminLayoutvue_type_script_lang_js, 'directives', {ClosePopup: ClosePopup/* default */.Z,Ripple: Ripple/* default */.Z});


/***/ })

}]);
//# sourceMappingURL=724.js.map