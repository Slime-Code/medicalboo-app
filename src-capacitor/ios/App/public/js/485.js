"use strict";
(self["webpackChunkmedicalbookapp"] = self["webpackChunkmedicalbookapp"] || []).push([[485],{

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

/***/ 3485:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ DashboardPage)
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(3673);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/admins/DashboardPage.vue?vue&type=template&id=aa2b6926

const _hoisted_1 = {
  class: "row q-col-gutter-sm flex"
};
const _hoisted_2 = {
  class: "row q-pa-sm q-col-gutter-x-md"
};
const _hoisted_3 = {
  class: "q-pa-md"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_CardDashboard = (0,runtime_core_esm_bundler/* resolveComponent */.up)("CardDashboard");

  const _component_apexchart = (0,runtime_core_esm_bundler/* resolveComponent */.up)("apexchart");

  const _component_q_card_section = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-card-section");

  const _component_q_card = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-card");

  const _component_q_inner_loading = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-inner-loading");

  const _component_q_page = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-page");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_page, {
    padding: ""
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_1, [((0,runtime_core_esm_bundler/* openBlock */.wg)(true), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, null, (0,runtime_core_esm_bundler/* renderList */.Ko)(_ctx.cards, (card, index) => {
      return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_CardDashboard, {
        class: "col-sm-4 col-md-4 col-xs-12",
        key: index,
        info: card
      }, null, 8, ["info"]);
    }), 128))]), (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_2, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_card, {
      class: "col-sm-12 col-xs-12 col-md-6 col-lg-4 col-xl-4"
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_card_section, null, {
        default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_apexchart, {
          type: "donut",
          options: _ctx.pieUsers.chartOptions,
          series: _ctx.pieUsers.series
        }, null, 8, ["options", "series"])]),
        _: 1
      })]),
      _: 1
    }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_card, {
      class: "col-sm-12 col-xs-12 col-md-6 col-lg-4 col-xl-4"
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_card_section, null, {
        default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_apexchart, {
          type: "donut",
          options: _ctx.pieAdmin.chartOptions,
          series: _ctx.pieAdmin.series
        }, null, 8, ["options", "series"])]),
        _: 1
      })]),
      _: 1
    }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_card, {
      class: "col-sm-12 col-xs-12 col-md-6 col-lg-4 col-xl-4"
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_card_section, null, {
        default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_apexchart, {
          type: "donut",
          options: _ctx.pieContents.chartOptions,
          series: _ctx.pieContents.series
        }, null, 8, ["options", "series"])]),
        _: 1
      })]),
      _: 1
    })]), (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_3, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_apexchart, {
      type: "area",
      height: "550",
      options: _ctx.areaChart.chartOptions,
      series: _ctx.areaChart.series
    }, null, 8, ["options", "series"])]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_inner_loading, {
      showing: _ctx.loading,
      label: "Carregando...",
      color: "primary",
      "label-class": "text-primary",
      "label-style": "font-size: 1.1em"
    }, null, 8, ["showing"])]),
    _: 1
  });
}
;// CONCATENATED MODULE: ./src/pages/admins/DashboardPage.vue?vue&type=template&id=aa2b6926

// EXTERNAL MODULE: ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(1959);
// EXTERNAL MODULE: ./src/composebles/useApi.js
var useApi = __webpack_require__(811);
// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(2323);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/CardDashboard.vue?vue&type=template&id=5a4942ac

function CardDashboardvue_type_template_id_5a4942ac_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_item_section = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-item-section");

  const _component_q_item = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-item");

  const _component_q_card_section = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-card-section");

  const _component_q_icon = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-icon");

  const _component_q_card = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-card");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", null, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_card, {
    class: (0,shared_esm_bundler/* normalizeClass */.C_)([`bg-${_ctx.info.color}`, "text-white"])
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_card_section, null, {
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item, null, {
        default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item_section, {
          class: "text-body1"
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.Uk)((0,shared_esm_bundler/* toDisplayString */.zw)(_ctx.info.title), 1)]),
          _: 1
        })]),
        _: 1
      })]),
      _: 1
    }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_card_section, null, {
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item, null, {
        default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item_section, null, {
          default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
            size: "md",
            name: _ctx.info.icon
          }, null, 8, ["name"])]),
          _: 1
        }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item_section, {
          class: "text-h4 text-white",
          side: ""
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.Uk)((0,shared_esm_bundler/* toDisplayString */.zw)(_ctx.info.qtd), 1)]),
          _: 1
        })]),
        _: 1
      })]),
      _: 1
    })]),
    _: 1
  }, 8, ["class"])]);
}
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/CardDashboard.vue?vue&type=script&lang=js

/* harmony default export */ const CardDashboardvue_type_script_lang_js = ((0,runtime_core_esm_bundler/* defineComponent */.aZ)({
  name: 'CardDashboard',
  props: {
    info: {
      type: Object
    }
  }
}));
;// CONCATENATED MODULE: ./src/components/CardDashboard.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(4260);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCard.js
var QCard = __webpack_require__(151);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCardSection.js
var QCardSection = __webpack_require__(5589);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItem.js
var QItem = __webpack_require__(3414);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemSection.js
var QItemSection = __webpack_require__(2035);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__(4554);
// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(7518);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/components/CardDashboard.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(CardDashboardvue_type_script_lang_js, [['render',CardDashboardvue_type_template_id_5a4942ac_render]])

/* harmony default export */ const CardDashboard = (__exports__);
;





runtime_auto_import_default()(CardDashboardvue_type_script_lang_js, 'components', {QCard: QCard/* default */.Z,QCardSection: QCardSection/* default */.Z,QItem: QItem/* default */.Z,QItemSection: QItemSection/* default */.Z,QIcon: QIcon/* default */.Z});

// EXTERNAL MODULE: ./node_modules/vue3-apexcharts/dist/vue3-apexcharts.common.js
var vue3_apexcharts_common = __webpack_require__(2585);
var vue3_apexcharts_common_default = /*#__PURE__*/__webpack_require__.n(vue3_apexcharts_common);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/admins/DashboardPage.vue?vue&type=script&lang=js




/* harmony default export */ const DashboardPagevue_type_script_lang_js = ((0,runtime_core_esm_bundler/* defineComponent */.aZ)({
  name: "DashboardPage",
  components: {
    CardDashboard: CardDashboard,
    apexchart: (vue3_apexcharts_common_default())
  },

  setup() {
    const cards = (0,reactivity_esm_bundler/* reactive */.qj)({
      users: {
        title: "Todos Usuários cadastrados",
        percent: 0,
        icon: "fa fa-users",
        qtd: 0,
        color: "primary"
      },
      usersToday: {
        title: "Usuários cadastrados hoje",
        percent: 0,
        qtd: 0,
        icon: "today",
        color: "green"
      },
      approach: {
        title: "Total de abordagem",
        percent: 0,
        icon: "book",
        qtd: 0,
        color: "purple"
      }
    }); // eslint-disable-next-line prefer-template
    // const data = now.getFullYear + '-' + now.getMonth + '-' + now.getDay;

    const {
      list,
      getByField,
      getNotByField
    } = (0,useApi/* default */.Z)();
    const loading = (0,reactivity_esm_bundler/* ref */.iH)(true);
    (0,runtime_core_esm_bundler/* onMounted */.bv)(() => {
      listDados();
    });
    const areaChart = (0,reactivity_esm_bundler/* reactive */.qj)({
      series: [{
        name: "Número de usuários",
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }],
      chartOptions: {
        chart: {
          type: "area",
          height: 350,
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: "smooth"
        },
        title: {
          text: "Número de usuários ao longo do ano",
          align: "left"
        },
        labels: [],
        xaxis: {
          categories: ["Jan", "Fev", "Mar", "Abril", "Maio", "Jun", "Jul", "Agosto", "Set", "Out", "Nov", "Dez"]
        },
        yaxis: {},
        legend: {
          horizontalAlign: "left"
        }
      }
    });
    const pieUsers = (0,reactivity_esm_bundler/* reactive */.qj)({
      series: [44, 55],
      chartOptions: {
        chart: {
          width: 380,
          type: "donut"
        },
        title: {
          text: "Usuarios Premium",
          align: "left"
        },
        labels: ["Premium", "Não Premium"],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }]
      }
    });
    const pieAdmin = (0,reactivity_esm_bundler/* reactive */.qj)({
      series: [44, 55],
      chartOptions: {
        chart: {
          width: 380,
          type: "donut"
        },
        title: {
          text: "Outros usuários",
          align: "left"
        },
        labels: ["Admin", "Não Admin"],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }]
      }
    });
    const pieContents = (0,reactivity_esm_bundler/* reactive */.qj)({
      series: [20, 100],
      chartOptions: {
        chart: {
          width: 380,
          type: "donut"
        },
        title: {
          text: "Tipo de conteúdo",
          align: "left"
        },
        labels: ["Premium", "Não Premium"],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }]
      }
    });

    const listDados = async () => {
      const notAdmin = (await getNotByField("perfil", "profile_type_id", 3)).length;
      pieAdmin.series[1] = notAdmin;
      pieAdmin.series[1] = notAdmin;
      pieAdmin.series[0] = (await getByField("perfil", "profile_type_id", 3)).length;
      cards.users.qtd = notAdmin;
      pieUsers.series[0] = (await getNotByField("perfil", "premium", true)).length;
      pieUsers.series[1] = (await getNotByField("perfil", "premium", false)).length;
      pieContents.series[0] = (await getNotByField("approach", "premium", true)).length;
      pieContents.series[1] = (await getNotByField("approach", "premium", false)).length;
      const currentDate = new Date(Date.now());
      const date = `${currentDate.getFullYear()}/${currentDate.getMonth() > 9 ? "" : "0"}${currentDate.getMonth().toLocaleString()}/${currentDate.getDay() > 9 ? "" : "0"}${currentDate.getDay().toString(16)}`;
      cards.usersToday.qtd = (await getByField("perfil", "created_at", date)).length;
      cards.approach.qtd = (await list("approach")).length;
      loading.value = false;

      for (let mounth = 1; mounth <= 12; mounth++) {
        const count = (await getByField("perfil", "month", mounth)).length;
        areaChart.series[0].data[mounth - 1] = count;
      }
    };

    return {
      loading,
      cards,
      areaChart,
      pieUsers,
      pieAdmin,
      pieContents
    };
  }

}));
;// CONCATENATED MODULE: ./src/pages/admins/DashboardPage.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPage.js
var QPage = __webpack_require__(4379);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/inner-loading/QInnerLoading.js
var QInnerLoading = __webpack_require__(6941);
;// CONCATENATED MODULE: ./src/pages/admins/DashboardPage.vue




;
const DashboardPage_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(DashboardPagevue_type_script_lang_js, [['render',render]])

/* harmony default export */ const DashboardPage = (DashboardPage_exports_);
;




runtime_auto_import_default()(DashboardPagevue_type_script_lang_js, 'components', {QPage: QPage/* default */.Z,QCard: QCard/* default */.Z,QCardSection: QCardSection/* default */.Z,QInnerLoading: QInnerLoading/* default */.Z});


/***/ })

}]);
//# sourceMappingURL=485.js.map