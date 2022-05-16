"use strict";
(self["webpackChunkmedicalbookapp"] = self["webpackChunkmedicalbookapp"] || []).push([[849],{

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

/***/ 4849:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ PrincipalLayout)
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(3673);
// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(2323);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/layouts/PrincipalLayout.vue?vue&type=template&id=23f0de3d


const _hoisted_1 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("span", {
  class: "text-primary"
}, " edicalbook ", -1);

const _hoisted_2 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)("New tab");

const _hoisted_3 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)("New incognito tab");

const _hoisted_4 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)("Recent tabs");

const _hoisted_5 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)("History");

const _hoisted_6 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)("Downloads");

const _hoisted_7 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)("Settings");

const _hoisted_8 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)("Help & Feedback");

const _hoisted_9 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", {
  class: "text-h6"
}, "Mais acessados", -1);

const _hoisted_10 = {
  class: "row"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_icon = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-icon");

  const _component_q_badge = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-badge");

  const _component_q_btn = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-btn");

  const _component_q_toolbar_title = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-toolbar-title");

  const _component_q_toolbar = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-toolbar");

  const _component_q_header = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-header");

  const _component_q_img = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-img");

  const _component_q_item_section = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-item-section");

  const _component_q_item = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-item");

  const _component_q_separator = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-separator");

  const _component_q_list = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-list");

  const _component_q_menu = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-menu");

  const _component_q_input = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-input");

  const _component_router_view = (0,runtime_core_esm_bundler/* resolveComponent */.up)("router-view");

  const _component_q_page_container = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-page-container");

  const _component_q_route_tab = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-route-tab");

  const _component_q_tabs = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-tabs");

  const _component_q_footer = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-footer");

  const _component_q_space = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-space");

  const _component_q_card_section = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-card-section");

  const _component_TopicButtom = (0,runtime_core_esm_bundler/* resolveComponent */.up)("TopicButtom");

  const _component_q_card = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-card");

  const _component_q_dialog = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-dialog");

  const _component_q_layout = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-layout");

  const _directive_close_popup = (0,runtime_core_esm_bundler/* resolveDirective */.Q2)("close-popup");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_layout, {
    view: "lHh lpr lFf"
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_ctx.$q.screen.width <= 599 ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_header, {
      key: 0,
      flat: "",
      bordered: "",
      class: "small-screen-only ground bg-primary"
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_ctx.$router.currentRoute.value.fullPath === '/home' ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_toolbar, {
        key: 0,
        class: "constrain-2"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_toolbar_title, null, {
          default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
            to: "/profile",
            style: {
              "background": "#ffffff",
              "color": "#1a4b9a"
            },
            round: "",
            icon: "fas fa-user",
            size: "20px"
          }, {
            default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_badge, {
              class: "pic",
              align: "bottom",
              style: {
                "background": "#49d16b"
              },
              rounded: ""
            }, {
              default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
                dense: "",
                name: "eva-camera-outline",
                size: "12px",
                color: "white"
              })]),
              _: 1
            })]),
            _: 1
          })]),
          _: 1
        }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
          "no-caps": "",
          unelevated: "",
          rounded: "",
          label: "Mais acessados",
          onClick: _cache[0] || (_cache[0] = $event => _ctx.icon = true),
          icon: "widgets",
          "text-color": "primary",
          color: "white"
        })]),
        _: 1
      })) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true), _ctx.$router.currentRoute.value.fullPath === '/home' ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_toolbar, {
        key: 1,
        class: "detail"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_toolbar_title, {
          class: "text-caption"
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" Olá " + (0,shared_esm_bundler/* toDisplayString */.zw)(_ctx.user.user_metadata.name) + ", bom te ver por aqui ", 1)]),
          _: 1
        })]),
        _: 1
      })) : ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_toolbar, {
        key: 2,
        class: "detail"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_toolbar_title, {
          class: "absolute-center"
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.Uk)((0,shared_esm_bundler/* toDisplayString */.zw)(_ctx.title), 1)]),
          _: 1
        })]),
        _: 1
      }))]),
      _: 1
    })) : ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_header, {
      key: 1,
      reveal: "",
      flat: "",
      bordered: "",
      class: "bg-white large-screen-only"
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_toolbar, {
        class: "constrain-2"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_toolbar_title, {
          class: "row jusitfy-between items-center"
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_img, {
            class: "q-my-sm",
            src: "icone.png",
            style: {
              "width": "20%",
              "height": "20%",
              "max-height": "50px"
            }
          }), _hoisted_1, (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_input, {
            modelValue: _ctx.generalSearch,
            "onUpdate:modelValue": [_cache[3] || (_cache[3] = $event => _ctx.generalSearch = $event), _cache[4] || (_cache[4] = $event => _ctx.showingGeneralSearch = true)],
            class: "col-4 absolute-center",
            debounce: "600",
            placeholder: "Pesquisar categoria, tópico, abordagem...",
            outlined: "",
            dense: "",
            rounded: ""
          }, {
            prepend: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
              size: "xs",
              name: "eva-search-outline"
            })]),
            append: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_ctx.generalSearch ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_btn, {
              key: 0,
              icon: "cancel",
              size: "sm",
              round: "",
              flat: "",
              onClick: _cache[1] || (_cache[1] = $event => _ctx.generalSearch = ''),
              dense: ""
            })) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true)]),
            default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_ctx.showingGeneralSearch ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_menu, {
              key: 0,
              modelValue: _ctx.showingGeneralSearch,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => _ctx.showingGeneralSearch = $event)
            }, {
              default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_list, {
                style: {
                  "min-width": "365px"
                }
              }, {
                default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* withDirectives */.wy)(((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_item, {
                  clickable: ""
                }, {
                  default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item_section, null, {
                    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_hoisted_2]),
                    _: 1
                  })]),
                  _: 1
                })), [[_directive_close_popup]]), (0,runtime_core_esm_bundler/* withDirectives */.wy)(((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_item, {
                  clickable: ""
                }, {
                  default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item_section, null, {
                    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_hoisted_3]),
                    _: 1
                  })]),
                  _: 1
                })), [[_directive_close_popup]]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_separator), (0,runtime_core_esm_bundler/* withDirectives */.wy)(((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_item, {
                  clickable: ""
                }, {
                  default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item_section, null, {
                    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_hoisted_4]),
                    _: 1
                  })]),
                  _: 1
                })), [[_directive_close_popup]]), (0,runtime_core_esm_bundler/* withDirectives */.wy)(((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_item, {
                  clickable: ""
                }, {
                  default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item_section, null, {
                    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_hoisted_5]),
                    _: 1
                  })]),
                  _: 1
                })), [[_directive_close_popup]]), (0,runtime_core_esm_bundler/* withDirectives */.wy)(((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_item, {
                  clickable: ""
                }, {
                  default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item_section, null, {
                    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_hoisted_6]),
                    _: 1
                  })]),
                  _: 1
                })), [[_directive_close_popup]]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_separator), (0,runtime_core_esm_bundler/* withDirectives */.wy)(((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_item, {
                  clickable: ""
                }, {
                  default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item_section, null, {
                    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_hoisted_7]),
                    _: 1
                  })]),
                  _: 1
                })), [[_directive_close_popup]]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_separator), (0,runtime_core_esm_bundler/* withDirectives */.wy)(((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_item, {
                  clickable: ""
                }, {
                  default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item_section, null, {
                    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_hoisted_8]),
                    _: 1
                  })]),
                  _: 1
                })), [[_directive_close_popup]])]),
                _: 1
              })]),
              _: 1
            }, 8, ["modelValue"])) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true)]),
            _: 1
          }, 8, ["modelValue"])]),
          _: 1
        }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
          "no-caps": "",
          unelevated: "",
          rounded: "",
          label: "Mais acessados",
          onClick: _cache[5] || (_cache[5] = $event => _ctx.icon = true),
          icon: "widgets",
          color: "primary"
        })]),
        _: 1
      })]),
      _: 1
    })), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_page_container, null, {
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_router_view)]),
      _: 1
    }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_footer, {
      style: {
        "background-color": "#f6f6f6"
      },
      bordered: ""
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_tabs, {
        modelValue: _ctx.tab,
        "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => _ctx.tab = $event),
        "indicator-color": "transparent",
        dense: "",
        "active-color": "primary",
        align: "justify",
        class: "constrain-4 q-pa-md text-grey-8"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [((0,runtime_core_esm_bundler/* openBlock */.wg)(true), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, null, (0,runtime_core_esm_bundler/* renderList */.Ko)(_ctx.tabsLink, tab => {
          return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_route_tab, {
            key: tab.name,
            to: tab.to,
            dense: "",
            "no-caps": "",
            name: tab.name,
            icon: tab.icon,
            label: tab.label
          }, null, 8, ["to", "name", "icon", "label"]);
        }), 128))]),
        _: 1
      }, 8, ["modelValue"])]),
      _: 1
    }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_dialog, {
      modelValue: _ctx.icon,
      "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => _ctx.icon = $event)
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_card, null, {
        default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_card_section, {
          class: "row items-center q-pb-none"
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_hoisted_9, (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_space), (0,runtime_core_esm_bundler/* withDirectives */.wy)((0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
            icon: "close",
            flat: "",
            round: "",
            dense: "",
            "close-personal": ""
          }, null, 512), [[_directive_close_popup]])]),
          _: 1
        }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_card_section, null, {
          default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_10, [((0,runtime_core_esm_bundler/* openBlock */.wg)(true), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, null, (0,runtime_core_esm_bundler/* renderList */.Ko)(_ctx.topics, (topic, index) => {
            return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", {
              class: "col-6",
              key: index
            }, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_TopicButtom, {
              title: topic.name,
              id: topic.id
            }, null, 8, ["title", "id"])]);
          }), 128))])]),
          _: 1
        })]),
        _: 1
      })]),
      _: 1
    }, 8, ["modelValue"])]),
    _: 1
  });
}
;// CONCATENATED MODULE: ./src/layouts/PrincipalLayout.vue?vue&type=template&id=23f0de3d

// EXTERNAL MODULE: ./src/functions/functionShowNotifications.js
var functionShowNotifications = __webpack_require__(4605);
// EXTERNAL MODULE: ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(1959);
// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.esm-bundler.js
var vue_router_esm_bundler = __webpack_require__(9582);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/TopicButtom.vue?vue&type=template&id=446d26bb&scoped=true


const _withScopeId = n => (_pushScopeId("data-v-446d26bb"), n = n(), _popScopeId(), n);

const TopicButtomvue_type_template_id_446d26bb_scoped_true_hoisted_1 = ["href"];
const TopicButtomvue_type_template_id_446d26bb_scoped_true_hoisted_2 = {
  class: "row no-wrap items-center"
};
const TopicButtomvue_type_template_id_446d26bb_scoped_true_hoisted_3 = {
  class: "col q-pl-lg"
};
const TopicButtomvue_type_template_id_446d26bb_scoped_true_hoisted_4 = {
  class: "text-uppercase"
};
const TopicButtomvue_type_template_id_446d26bb_scoped_true_hoisted_5 = {
  class: "text-weight-bold"
};
function TopicButtomvue_type_template_id_446d26bb_scoped_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_avatar = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-avatar");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("a", {
    href: _ctx.link + _ctx.id,
    class: "q-link rounded-borders q-pa-md q-ma-md cursor-pointer column justify-center bg-grey-1"
  }, [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", TopicButtomvue_type_template_id_446d26bb_scoped_true_hoisted_2, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_avatar, {
    color: _ctx.color_icon,
    "text-color": "white",
    icon: _ctx.icon
  }, null, 8, ["color", "icon"]), (0,runtime_core_esm_bundler/* createElementVNode */._)("div", TopicButtomvue_type_template_id_446d26bb_scoped_true_hoisted_3, [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", TopicButtomvue_type_template_id_446d26bb_scoped_true_hoisted_4, (0,shared_esm_bundler/* toDisplayString */.zw)(_ctx.title), 1), (0,runtime_core_esm_bundler/* createElementVNode */._)("div", TopicButtomvue_type_template_id_446d26bb_scoped_true_hoisted_5, (0,shared_esm_bundler/* toDisplayString */.zw)(_ctx.caption), 1)])])], 8, TopicButtomvue_type_template_id_446d26bb_scoped_true_hoisted_1);
}
;// CONCATENATED MODULE: ./src/components/TopicButtom.vue?vue&type=template&id=446d26bb&scoped=true

;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/TopicButtom.vue?vue&type=script&lang=js

/* harmony default export */ const TopicButtomvue_type_script_lang_js = ((0,runtime_core_esm_bundler/* defineComponent */.aZ)({
  name: 'TopicButtom',
  props: {
    title: {
      type: String,
      required: 'Sem titulo'
    },
    caption: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: 'img:img/feto.png'
    },
    color_icon: {
      type: String,
      default: 'teal'
    },
    id: {
      type: Number
    },
    link: {
      type: String,
      default: '/approach/'
    }
  }
}));
;// CONCATENATED MODULE: ./src/components/TopicButtom.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(4260);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/avatar/QAvatar.js
var QAvatar = __webpack_require__(5096);
// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(7518);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/components/TopicButtom.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(TopicButtomvue_type_script_lang_js, [['render',TopicButtomvue_type_template_id_446d26bb_scoped_true_render],['__scopeId',"data-v-446d26bb"]])

/* harmony default export */ const TopicButtom = (__exports__);
;

runtime_auto_import_default()(TopicButtomvue_type_script_lang_js, 'components', {QAvatar: QAvatar/* default */.Z});

// EXTERNAL MODULE: ./src/composebles/useApi.js
var useApi = __webpack_require__(811);
// EXTERNAL MODULE: ./src/composebles/useAuthUser.js
var useAuthUser = __webpack_require__(4958);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/layouts/PrincipalLayout.vue?vue&type=script&lang=js






/* harmony default export */ const PrincipalLayoutvue_type_script_lang_js = ((0,runtime_core_esm_bundler/* defineComponent */.aZ)({
  name: "PrincipalLayout",
  components: {
    TopicButtom: TopicButtom
  },

  setup() {
    const tabsLink = [{
      to: "/explore",
      name: "explore",
      icon: "search",
      label: "Explorar"
    }, {
      to: "/favorite",
      name: "favoritos",
      icon: "eva-heart-outline",
      label: "Favoritos"
    }, {
      to: "/home",
      name: "inicio",
      icon: "eva-home-outline",
      label: "Inicio"
    }, {
      to: "/note",
      name: "notas",
      icon: "far fa-sticky-note",
      label: "Notas"
    }, {
      to: "/profile",
      name: "perfil",
      icon: "far fa-user",
      label: "Perfil"
    }];
    const loading = (0,reactivity_esm_bundler/* ref */.iH)(true);
    const router = (0,vue_router_esm_bundler/* useRouter */.tv)();
    const {
      user
    } = (0,useAuthUser/* default */.Z)();
    const {
      list,
      getById
    } = (0,useApi/* default */.Z)();
    const topics = (0,reactivity_esm_bundler/* ref */.iH)([]); // Para Listar Os Tópicos Mais Accessados....................

    const listTopicsAproachs = async () => {
      try {
        loading.value = true;
        const aux = await list("access_topic_user"); // eslint-disable-next-line no-plusplus

        for (let index = 0; index < aux.length; index++) {
          if (aux[index].user_id === user.value.id) {
            // eslint-disable-next-line no-await-in-loop
            topics.value.push(await getById("topic", aux[index].topic_id));
          }
        }

        loading.value = false;
      } catch (error) {
        loading.value = false;
        (0,functionShowNotifications/* showErrorNotification */.s)(`A Resposta do banco Não Foi Bem Sucedida Pelo Seguinte Erro: ${error}`);
      }
    };

    const go = async id => {
      router.push(`/approach/${id}`);
    };

    const showingGeneralSearch = (0,reactivity_esm_bundler/* ref */.iH)(false);
    const generalSearch = (0,reactivity_esm_bundler/* ref */.iH)("");
    const title = (0,runtime_core_esm_bundler/* computed */.Fl)(() => {
      const current = router.currentRoute.value.fullPath;
      if (current === '/home') return 'Página Inicial';else if (current === '/favorite') return 'Favoritos';else if (current === '/note') return 'Minhas notas';else if (current === '/profile') return 'Perfil';else if (current === '/explore') return 'Exporar';else return 'Sobre';
    });
    (0,runtime_core_esm_bundler/* onMounted */.bv)(() => {
      listTopicsAproachs();
    });
    return {
      title,
      generalSearch,
      showingGeneralSearch,
      tabsLink,
      icon: (0,reactivity_esm_bundler/* ref */.iH)(false),
      tab: (0,reactivity_esm_bundler/* ref */.iH)("inicio"),
      topics,
      user,
      go
    };
  }

}));
;// CONCATENATED MODULE: ./src/layouts/PrincipalLayout.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/quasar/src/components/layout/QLayout.js + 1 modules
var QLayout = __webpack_require__(3066);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/header/QHeader.js
var QHeader = __webpack_require__(3812);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/toolbar/QToolbar.js
var QToolbar = __webpack_require__(9570);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/toolbar/QToolbarTitle.js
var QToolbarTitle = __webpack_require__(3747);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__(2165);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/badge/QBadge.js
var QBadge = __webpack_require__(9721);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__(4554);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/img/QImg.js + 1 modules
var QImg = __webpack_require__(4027);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/input/QInput.js + 2 modules
var QInput = __webpack_require__(4842);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/menu/QMenu.js
var QMenu = __webpack_require__(9825);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QList.js
var QList = __webpack_require__(7011);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItem.js
var QItem = __webpack_require__(3414);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemSection.js
var QItemSection = __webpack_require__(2035);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/separator/QSeparator.js
var QSeparator = __webpack_require__(5869);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPageContainer.js
var QPageContainer = __webpack_require__(2652);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/footer/QFooter.js
var QFooter = __webpack_require__(1762);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/tabs/QTabs.js
var QTabs = __webpack_require__(7547);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/tabs/QRouteTab.js
var QRouteTab = __webpack_require__(2770);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/dialog/QDialog.js
var QDialog = __webpack_require__(6778);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCard.js
var QCard = __webpack_require__(151);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCardSection.js
var QCardSection = __webpack_require__(5589);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/space/QSpace.js
var QSpace = __webpack_require__(2025);
// EXTERNAL MODULE: ./node_modules/quasar/src/directives/ClosePopup.js
var ClosePopup = __webpack_require__(677);
;// CONCATENATED MODULE: ./src/layouts/PrincipalLayout.vue




;
const PrincipalLayout_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(PrincipalLayoutvue_type_script_lang_js, [['render',render]])

/* harmony default export */ const PrincipalLayout = (PrincipalLayout_exports_);
;






















runtime_auto_import_default()(PrincipalLayoutvue_type_script_lang_js, 'components', {QLayout: QLayout/* default */.Z,QHeader: QHeader/* default */.Z,QToolbar: QToolbar/* default */.Z,QToolbarTitle: QToolbarTitle/* default */.Z,QBtn: QBtn/* default */.Z,QBadge: QBadge/* default */.Z,QIcon: QIcon/* default */.Z,QImg: QImg/* default */.Z,QInput: QInput/* default */.Z,QMenu: QMenu/* default */.Z,QList: QList/* default */.Z,QItem: QItem/* default */.Z,QItemSection: QItemSection/* default */.Z,QSeparator: QSeparator/* default */.Z,QPageContainer: QPageContainer/* default */.Z,QFooter: QFooter/* default */.Z,QTabs: QTabs/* default */.Z,QRouteTab: QRouteTab/* default */.Z,QDialog: QDialog/* default */.Z,QCard: QCard/* default */.Z,QCardSection: QCardSection/* default */.Z,QSpace: QSpace/* default */.Z});runtime_auto_import_default()(PrincipalLayoutvue_type_script_lang_js, 'directives', {ClosePopup: ClosePopup/* default */.Z});


/***/ })

}]);
//# sourceMappingURL=849.js.map