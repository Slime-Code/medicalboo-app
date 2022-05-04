"use strict";
(self["webpackChunkmedicalbookapp"] = self["webpackChunkmedicalbookapp"] || []).push([[544],{

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

/***/ 4544:
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
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/layouts/PrincipalLayout.vue?vue&type=template&id=09a3f828&scoped=true


const _withScopeId = n => ((0,runtime_core_esm_bundler/* pushScopeId */.dD)("data-v-09a3f828"), n = n(), (0,runtime_core_esm_bundler/* popScopeId */.Cn)(), n);

const _hoisted_1 = {
  class: "row"
};
const _hoisted_2 = {
  class: "col-2"
};

const _hoisted_3 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", {
  class: "col-10 large-screen-only"
}, [/*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", null, "Mais acessados")], -1));

const _hoisted_4 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", {
  class: "text-h6"
}, "Mais acessados", -1));

const _hoisted_5 = {
  class: "row"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_icon = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-icon");

  const _component_q_badge = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-badge");

  const _component_q_btn = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-btn");

  const _component_q_toolbar_title = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-toolbar-title");

  const _component_q_space = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-space");

  const _component_q_toolbar = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-toolbar");

  const _component_q_header = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-header");

  const _component_router_view = (0,runtime_core_esm_bundler/* resolveComponent */.up)("router-view");

  const _component_q_page_container = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-page-container");

  const _component_q_route_tab = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-route-tab");

  const _component_q_tabs = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-tabs");

  const _component_q_footer = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-footer");

  const _component_q_card_section = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-card-section");

  const _component_TopicButtom = (0,runtime_core_esm_bundler/* resolveComponent */.up)("TopicButtom");

  const _component_q_card = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-card");

  const _component_q_dialog = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-dialog");

  const _component_q_layout = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-layout");

  const _directive_close_popup = (0,runtime_core_esm_bundler/* resolveDirective */.Q2)("close-popup");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_layout, {
    view: "lHh lpr lFf"
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_header, {
      reveal: "",
      elevated: ""
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_toolbar, {
        class: "q-pa-md"
      }, {
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
            style: {
              "background": "#49d16b"
            },
            rounded: ""
          }, {
            default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
              dense: "",
              name: "eva-camera-outline",
              color: "white"
            })]),
            _: 1
          })]),
          _: 1
        }), _ctx.user ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_toolbar_title, {
          key: 0
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.Uk)((0,shared_esm_bundler/* toDisplayString */.zw)(_ctx.user.user_metadata.name), 1)]),
          _: 1
        })) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_space), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
          "no-caps": "",
          unelevated: "",
          rounded: "",
          onClick: _cache[0] || (_cache[0] = $event => _ctx.icon = true),
          style: {
            "background": "#ffffff",
            "color": "#1a4b9a"
          }
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_1, [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_2, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
            left: "",
            name: "widgets"
          })]), _hoisted_3])]),
          _: 1
        })]),
        _: 1
      })]),
      _: 1
    }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_page_container, null, {
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
        "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.tab = $event),
        "indicator-color": "transparent",
        dense: "",
        align: "justify",
        class: "constrain-2"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_route_tab, {
          to: "/explore",
          dense: "",
          "no-caps": "",
          name: "explorar",
          icon: "eva-search-outline",
          label: "Explorar"
        }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_route_tab, {
          to: "/favorite",
          dense: "",
          "no-caps": "",
          name: "favoritos",
          icon: "eva-heart-outline",
          label: "Favoritos"
        }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_route_tab, {
          to: "/home",
          dense: "",
          "no-caps": "",
          name: "inicio",
          icon: "eva-home-outline",
          label: "Inicio"
        }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_route_tab, {
          to: "/note",
          dense: "",
          "no-caps": "",
          name: "notas",
          icon: "far fa-sticky-note",
          label: "Notas"
        }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_route_tab, {
          to: "/profile",
          dense: "",
          "no-caps": "",
          name: "perfil",
          icon: "far fa-user",
          label: "Perfil"
        })]),
        _: 1
      }, 8, ["modelValue"])]),
      _: 1
    }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_dialog, {
      modelValue: _ctx.icon,
      "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => _ctx.icon = $event)
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_card, null, {
        default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_card_section, {
          class: "row items-center q-pb-none"
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_hoisted_4, (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_space), (0,runtime_core_esm_bundler/* withDirectives */.wy)((0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
            icon: "close",
            flat: "",
            round: "",
            dense: "",
            "close-personal": ""
          }, null, 512), [[_directive_close_popup]])]),
          _: 1
        }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_card_section, null, {
          default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_5, [((0,runtime_core_esm_bundler/* openBlock */.wg)(true), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, null, (0,runtime_core_esm_bundler/* renderList */.Ko)(_ctx.topics, (topic, index) => {
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
;// CONCATENATED MODULE: ./src/layouts/PrincipalLayout.vue?vue&type=template&id=09a3f828&scoped=true

// EXTERNAL MODULE: ./src/functions/functionShowNotifications.js
var functionShowNotifications = __webpack_require__(4605);
// EXTERNAL MODULE: ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(1959);
// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.esm-bundler.js
var vue_router_esm_bundler = __webpack_require__(9582);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/TopicButtom.vue?vue&type=template&id=446d26bb&scoped=true


const TopicButtomvue_type_template_id_446d26bb_scoped_true_withScopeId = n => (_pushScopeId("data-v-446d26bb"), n = n(), _popScopeId(), n);

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
  name: 'PrincipalLayout',
  components: {
    TopicButtom: TopicButtom
  },

  setup() {
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
        const aux = await list('access_topic_user'); // eslint-disable-next-line no-plusplus

        for (let index = 0; index < aux.length; index++) {
          if (aux[index].user_id === user.value.id) {
            // eslint-disable-next-line no-await-in-loop
            topics.value.push(await getById('topic', aux[index].topic_id));
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

    (0,runtime_core_esm_bundler/* onMounted */.bv)(() => {
      listTopicsAproachs();
    });
    return {
      icon: (0,reactivity_esm_bundler/* ref */.iH)(false),
      tab: (0,reactivity_esm_bundler/* ref */.iH)('inicio'),
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
// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__(2165);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/badge/QBadge.js
var QBadge = __webpack_require__(9721);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__(4554);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/toolbar/QToolbarTitle.js
var QToolbarTitle = __webpack_require__(3747);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/space/QSpace.js
var QSpace = __webpack_require__(2025);
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
// EXTERNAL MODULE: ./node_modules/quasar/src/components/tabs/QTab.js
var QTab = __webpack_require__(8408);
// EXTERNAL MODULE: ./node_modules/quasar/src/directives/ClosePopup.js
var ClosePopup = __webpack_require__(677);
;// CONCATENATED MODULE: ./src/layouts/PrincipalLayout.vue




;


const PrincipalLayout_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(PrincipalLayoutvue_type_script_lang_js, [['render',render],['__scopeId',"data-v-09a3f828"]])

/* harmony default export */ const PrincipalLayout = (PrincipalLayout_exports_);
;
















runtime_auto_import_default()(PrincipalLayoutvue_type_script_lang_js, 'components', {QLayout: QLayout/* default */.Z,QHeader: QHeader/* default */.Z,QToolbar: QToolbar/* default */.Z,QBtn: QBtn/* default */.Z,QBadge: QBadge/* default */.Z,QIcon: QIcon/* default */.Z,QToolbarTitle: QToolbarTitle/* default */.Z,QSpace: QSpace/* default */.Z,QPageContainer: QPageContainer/* default */.Z,QFooter: QFooter/* default */.Z,QTabs: QTabs/* default */.Z,QRouteTab: QRouteTab/* default */.Z,QDialog: QDialog/* default */.Z,QCard: QCard/* default */.Z,QCardSection: QCardSection/* default */.Z,QTab: QTab/* default */.Z});runtime_auto_import_default()(PrincipalLayoutvue_type_script_lang_js, 'directives', {ClosePopup: ClosePopup/* default */.Z});


/***/ })

}]);
//# sourceMappingURL=544.js.map