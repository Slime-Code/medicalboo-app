"use strict";
(self["webpackChunkmedicalbookapp"] = self["webpackChunkmedicalbookapp"] || []).push([[381],{

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

/***/ 6381:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MainPage)
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(3673);
// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(2323);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/users/MainPage.vue?vue&type=template&id=7545f4a1&scoped=true


const _withScopeId = n => (_pushScopeId("data-v-7545f4a1"), n = n(), _popScopeId(), n);

const _hoisted_1 = {
  class: "column justify-around",
  style: {
    "height": "100%"
  }
};
const _hoisted_2 = {
  key: 0,
  class: "text-center text-body1"
};
const _hoisted_3 = {
  key: 0
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_tab = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-tab");

  const _component_q_spinner = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-spinner");

  const _component_q_tabs = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-tabs");

  const _component_q_card_section = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-card-section");

  const _component_q_card = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-card");

  const _component_q_avatar = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-avatar");

  const _component_q_item_section = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-item-section");

  const _component_q_item = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-item");

  const _component_q_tab_panel = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-tab-panel");

  const _component_q_tab_panels = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-tab-panels");

  const _component_q_space = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-space");

  const _component_Banner = (0,runtime_core_esm_bundler/* resolveComponent */.up)("Banner");

  const _component_q_inner_loading = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-inner-loading");

  const _component_q_page = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-page");

  const _directive_ripple = (0,runtime_core_esm_bundler/* resolveDirective */.Q2)("ripple");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_page, {
    class: "q-pa-md constrain-2"
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_card, {
      flat: ""
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_card_section, {
        class: "q-pa-sm"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_tabs, {
          class: "text-grey-6",
          modelValue: _ctx.tab,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.tab = $event),
          "inline-label": "",
          "active-color": "white",
          "active-bg-color": "primary",
          dense: "",
          "no-caps": "",
          "indicator-color": "transparent"
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [((0,runtime_core_esm_bundler/* openBlock */.wg)(true), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, null, (0,runtime_core_esm_bundler/* renderList */.Ko)(_ctx.categorys, (category, index) => {
            return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_tab, {
              class: "custom-border q-mx-xs",
              key: index,
              name: category.name,
              label: category.name,
              onClick: $event => _ctx.getTopicByCategory(category.id)
            }, null, 8, ["name", "label", "onClick"]);
          }), 128)), (0,runtime_core_esm_bundler/* createElementVNode */._)("div", null, [_ctx.loadingCategory ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_spinner, {
            key: 0,
            color: "primary",
            size: "3em"
          })) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true)])]),
          _: 1
        }, 8, ["modelValue"])]),
        _: 1
      })]),
      _: 1
    }), (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_1, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_tab_panels, {
      class: "col",
      modelValue: _ctx.tab,
      "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.tab = $event),
      animated: "",
      swipeable: "",
      vertical: "",
      "transition-prev": "jump-up",
      "transition-next": "jump-up"
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [((0,runtime_core_esm_bundler/* openBlock */.wg)(true), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, null, (0,runtime_core_esm_bundler/* renderList */.Ko)(_ctx.categorys, (category, index) => {
        return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_tab_panel, {
          class: "row justify-center q-gutter-sm items-center",
          key: index,
          name: category.name
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [((0,runtime_core_esm_bundler/* openBlock */.wg)(true), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, null, (0,runtime_core_esm_bundler/* renderList */.Ko)(_ctx.topics, (topic, index) => {
            return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_card, {
              key: index,
              style: {
                "background-color": "#f6f6f6"
              },
              flat: "",
              bordered: "",
              class: "q-my-sm col-sm-12 col-xs-12 col-md-4 col-lg-3"
            }, {
              default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* withDirectives */.wy)(((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_item, {
                clickable: "",
                onClick: $event => _ctx.go(topic.id)
              }, {
                default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item_section, {
                  side: ""
                }, {
                  default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_avatar, {
                    color: _ctx.color_icon,
                    "text-color": "white",
                    icon: _ctx.icon
                  }, null, 8, ["color", "icon"])]),
                  _: 1
                }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item_section, null, {
                  default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.Uk)((0,shared_esm_bundler/* toDisplayString */.zw)(topic.name), 1)]),
                  _: 2
                }, 1024)]),
                _: 2
              }, 1032, ["onClick"])), [[_directive_ripple]])]),
              _: 2
            }, 1024);
          }), 128)), !_ctx.topics.length && !_ctx.loadingTopic ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("span", _hoisted_2, " Nenhum tópico para esta categória ")) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true)]),
          _: 2
        }, 1032, ["name"]);
      }), 128))]),
      _: 1
    }, 8, ["modelValue"]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_space, {
      vertical: ""
    }), !_ctx.loadingTopic ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", _hoisted_3, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_Banner)])) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true)]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_inner_loading, {
      showing: _ctx.loadingTopic,
      label: "Carregando tópicos",
      "label-class": "text-primary",
      color: "primary",
      "label-style": "font-size: 1.1em"
    }, null, 8, ["showing"])]),
    _: 1
  });
}
;// CONCATENATED MODULE: ./src/pages/users/MainPage.vue?vue&type=template&id=7545f4a1&scoped=true

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.json.stringify.js
var es_json_stringify = __webpack_require__(2100);
// EXTERNAL MODULE: ./src/functions/functionShowNotifications.js
var functionShowNotifications = __webpack_require__(4605);
// EXTERNAL MODULE: ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(1959);
// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.esm-bundler.js
var vue_router_esm_bundler = __webpack_require__(9582);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Banner.vue?vue&type=template&id=1bc7b64b


const Bannervue_type_template_id_1bc7b64b_hoisted_1 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" Outras versões Medicalbook ");

const Bannervue_type_template_id_1bc7b64b_hoisted_2 = ["src"];
function Bannervue_type_template_id_1bc7b64b_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_card_section = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-card-section");

  const _component_q_item_section = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-item-section");

  const _component_q_item = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-item");

  const _component_q_banner = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-banner");

  const _component_q_card = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-card");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_card, {
    flat: "",
    bordered: "",
    square: ""
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_card_section, {
      class: "text-h6"
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [Bannervue_type_template_id_1bc7b64b_hoisted_1]),
      _: 1
    }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_card_section, {
      class: "row q-col-gutter-xs"
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [((0,runtime_core_esm_bundler/* openBlock */.wg)(true), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, null, (0,runtime_core_esm_bundler/* renderList */.Ko)(_ctx.data, (n, index) => {
        return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_banner, {
          key: index,
          rounded: "",
          class: "col-sm-12 col-xs-12 col-md-6 col-lg-4"
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item, {
            clickable: "",
            to: {
              name: n.name
            }
          }, {
            default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item_section, null, {
              default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createElementVNode */._)("img", {
                class: "fit",
                src: n.path
              }, null, 8, Bannervue_type_template_id_1bc7b64b_hoisted_2)]),
              _: 2
            }, 1024)]),
            _: 2
          }, 1032, ["to"])]),
          _: 2
        }, 1024);
      }), 128))]),
      _: 1
    })]),
    _: 1
  });
}
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/Banner.vue?vue&type=script&lang=js

/* harmony default export */ const Bannervue_type_script_lang_js = ((0,runtime_core_esm_bundler/* defineComponent */.aZ)({
  setup() {
    const data = (0,reactivity_esm_bundler/* ref */.iH)([{
      name: "prime",
      path: "img/banner-premium.png"
    }, {
      name: "accesso-por-capitulo",
      path: "img/Grátis@2x.png"
    }, {
      name: "accesso-por-capitulo",
      path: "img/Grátis-2@2x.png"
    }]);
    return {
      data
    };
  }

}));
;// CONCATENATED MODULE: ./src/components/Banner.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(4260);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCard.js
var QCard = __webpack_require__(151);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCardSection.js
var QCardSection = __webpack_require__(5589);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/banner/QBanner.js
var QBanner = __webpack_require__(5607);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItem.js
var QItem = __webpack_require__(3414);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemSection.js
var QItemSection = __webpack_require__(2035);
// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(7518);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/components/Banner.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(Bannervue_type_script_lang_js, [['render',Bannervue_type_template_id_1bc7b64b_render]])

/* harmony default export */ const Banner = (__exports__);
;





runtime_auto_import_default()(Bannervue_type_script_lang_js, 'components', {QCard: QCard/* default */.Z,QCardSection: QCardSection/* default */.Z,QBanner: QBanner/* default */.Z,QItem: QItem/* default */.Z,QItemSection: QItemSection/* default */.Z});

// EXTERNAL MODULE: ./src/composebles/useApi.js
var useApi = __webpack_require__(811);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/users/MainPage.vue?vue&type=script&lang=js




 // import TopicButtom from '../../components/TopicButtom.vue';

/* eslint-disable no-alert */


/* harmony default export */ const MainPagevue_type_script_lang_js = ((0,runtime_core_esm_bundler/* defineComponent */.aZ)({
  name: "MainPage",
  components: {
    Banner: Banner
  },

  setup() {
    const {
      list,
      getByField
    } = (0,useApi/* default */.Z)();
    const router = (0,vue_router_esm_bundler/* useRouter */.tv)();
    const topics = (0,reactivity_esm_bundler/* ref */.iH)([]);
    const categorys = (0,reactivity_esm_bundler/* ref */.iH)([]);
    const topicos = (0,reactivity_esm_bundler/* ref */.iH)([]);
    const tab = (0,reactivity_esm_bundler/* ref */.iH)("");
    const loadingCategory = (0,reactivity_esm_bundler/* ref */.iH)(false);
    const loadingTopic = (0,reactivity_esm_bundler/* ref */.iH)(false);
    const todos = (0,reactivity_esm_bundler/* ref */.iH)([[]]);

    const getTopicByCategory = async id => {
      try {
        loadingTopic.value = true;
        topics.value = await getByField("topic", "categoria_id", id);
      } catch (error) {
        alert(error.message);
      } finally {
        loadingTopic.value = false;
      }
    };

    const listTopics = async () => {
      try {
        loadingTopic.value = true;
        categorys.value = await list("categoria");
        categorys.value.sort();
        loadingCategory.value = false; // // eslint-disable-next-line prefer-destructuring

        tab.value = categorys.value[0].name;
        await getTopicByCategory(categorys.value[0].id);
      } catch (error) {
        (0,functionShowNotifications/* showErrorNotification */.s)(`A Resposta do banco Não Foi Bem Sucedida Pelo Seguinte Erro: ${JSON.stringify(error)}`);
      } finally {
        loadingTopic.value = false;
      }
    };

    const go = async id => {
      router.push(`/approach/${id}`);
    };

    const topicAcessado = (0,reactivity_esm_bundler/* ref */.iH)({
      chave: null,
      valo: null
    });

    const foi = async () => {
      console.log(topicAcessado.value);
    };

    (0,runtime_core_esm_bundler/* onMounted */.bv)(() => {
      listTopics();
    });
    return {
      go,
      getTopicByCategory,
      todos,
      foi,
      topicAcessado,
      loadingTopic,
      loadingCategory,
      listTopics,
      tab,
      topics,
      topicos,
      categorys,
      caption: (0,reactivity_esm_bundler/* ref */.iH)(""),
      icon: "img:img/feto.png",
      color_icon: "teal"
    };
  }

}));
;// CONCATENATED MODULE: ./src/pages/users/MainPage.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPage.js
var QPage = __webpack_require__(4379);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/tabs/QTabs.js
var QTabs = __webpack_require__(7547);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/tabs/QTab.js
var QTab = __webpack_require__(8408);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/spinner/QSpinner.js
var QSpinner = __webpack_require__(6833);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/tab-panels/QTabPanels.js
var QTabPanels = __webpack_require__(5906);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/tab-panels/QTabPanel.js
var QTabPanel = __webpack_require__(6602);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/avatar/QAvatar.js
var QAvatar = __webpack_require__(5096);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/space/QSpace.js
var QSpace = __webpack_require__(2025);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/inner-loading/QInnerLoading.js
var QInnerLoading = __webpack_require__(6941);
// EXTERNAL MODULE: ./node_modules/quasar/src/directives/Ripple.js + 1 modules
var Ripple = __webpack_require__(6489);
;// CONCATENATED MODULE: ./src/pages/users/MainPage.vue




;


const MainPage_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(MainPagevue_type_script_lang_js, [['render',render],['__scopeId',"data-v-7545f4a1"]])

/* harmony default export */ const MainPage = (MainPage_exports_);
;













runtime_auto_import_default()(MainPagevue_type_script_lang_js, 'components', {QPage: QPage/* default */.Z,QCard: QCard/* default */.Z,QCardSection: QCardSection/* default */.Z,QTabs: QTabs/* default */.Z,QTab: QTab/* default */.Z,QSpinner: QSpinner/* default */.Z,QTabPanels: QTabPanels/* default */.Z,QTabPanel: QTabPanel/* default */.Z,QItem: QItem/* default */.Z,QItemSection: QItemSection/* default */.Z,QAvatar: QAvatar/* default */.Z,QSpace: QSpace/* default */.Z,QInnerLoading: QInnerLoading/* default */.Z});runtime_auto_import_default()(MainPagevue_type_script_lang_js, 'directives', {Ripple: Ripple/* default */.Z});


/***/ })

}]);
//# sourceMappingURL=381.js.map