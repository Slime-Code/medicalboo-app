"use strict";
(self["webpackChunkmedicalbookapp"] = self["webpackChunkmedicalbookapp"] || []).push([[668],{

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

/***/ 6804:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ ApproachButtom)
});

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(71);
// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(3673);
// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(2323);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/ApproachButtom.vue?vue&type=template&id=ac079208&scoped=true



const _withScopeId = n => ((0,runtime_core_esm_bundler/* pushScopeId */.dD)("data-v-ac079208"), n = n(), (0,runtime_core_esm_bundler/* popScopeId */.Cn)(), n);

const _hoisted_1 = {
  class: "q-link cursor-pointer q-ma-xs"
};
const _hoisted_2 = {
  class: "row"
};
const _hoisted_3 = {
  class: "col-grow-1 q-pa-xs"
};
const _hoisted_4 = {
  class: "column"
};

const _hoisted_5 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", {
  class: "col-grow-1"
}, [/*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", {
  class: "q-approach-bar"
})], -1));

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_rating = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-rating");

  const _component_q_banner = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-banner");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("a", _hoisted_1, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_banner, {
    rounded: "",
    class: "bg-white text-grey-6 q-approach"
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_2, [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", {
      onClick: _cache[0] || (_cache[0] = (...args) => _ctx.go && _ctx.go(...args)),
      class: "col q-py-xs"
    }, (0,shared_esm_bundler/* toDisplayString */.zw)(_ctx.title.title), 1), (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_3, [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_4, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_rating, {
      onClick: _ctx.addFavorit,
      max: "1",
      modelValue: _ctx.ratingModel,
      "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.ratingModel = $event),
      name: "quality",
      size: "2em",
      color: "yellow",
      icon: "star_border",
      "icon-selected": "star",
      "no-dimming": ""
    }, null, 8, ["onClick", "modelValue"])])]), _hoisted_5])]),
    _: 1
  })]);
}
;// CONCATENATED MODULE: ./src/components/ApproachButtom.vue?vue&type=template&id=ac079208&scoped=true

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.json.stringify.js
var es_json_stringify = __webpack_require__(2100);
// EXTERNAL MODULE: ./src/functions/functionShowNotifications.js
var functionShowNotifications = __webpack_require__(4605);
// EXTERNAL MODULE: ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(1959);
// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.esm-bundler.js
var vue_router_esm_bundler = __webpack_require__(9582);
// EXTERNAL MODULE: ./src/composebles/useApi.js
var useApi = __webpack_require__(811);
// EXTERNAL MODULE: ./src/composebles/useAuthUser.js
var useAuthUser = __webpack_require__(4958);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/ApproachButtom.vue?vue&type=script&lang=js






/* harmony default export */ const ApproachButtomvue_type_script_lang_js = ((0,runtime_core_esm_bundler/* defineComponent */.aZ)({
  name: 'ApproachButtom',
  props: {
    title: {
      type: Object,
      required: 'Sem titulo'
    },
    icon: {
      type: String,
      default: 'img:img/feto.png'
    },
    color: {
      type: String,
      default: ''
    },
    accessCap: {
      type: Boolean,
      default: true
    }
  },

  setup(props) {
    const {
      user
    } = (0,useAuthUser/* default */.Z)();
    const router = (0,vue_router_esm_bundler/* useRouter */.tv)();
    const loading = (0,reactivity_esm_bundler/* ref */.iH)(true);
    const {
      post,
      remove,
      getByField
    } = (0,useApi/* default */.Z)();
    const formData = {
      user_id: '',
      approach_id: ''
    };

    const go = async (evt, index) => {
      router.push(`/approach-detail/${props.title.id}`);
    }; // ---------- Inicializar O estado De Favoritos -------------


    const ratingModel = (0,reactivity_esm_bundler/* ref */.iH)(0);

    const initFavorit = async () => {
      try {
        const idFavorit = await getByField('favorite_approach_user', 'approach_id', props.title.id);

        if (idFavorit.length > 0) {
          ratingModel.value = 1;
        } else {
          ratingModel.value = 0;
        } // alert(JSON.stringify(idFavorit));

      } catch (error) {
        (0,functionShowNotifications/* showErrorNotification */.s)(`falha na Operação Pelo Seguinte Erro: ${JSON.stringify(error)}`);
      } /// loading.value = false;

    }; // ---------- Fim Inicializar O estado De Favoritos -------------


    const addFavorit = async () => {
      try {
        if (ratingModel.value !== 1) {
          const idFavorit = await getByField('favorite_approach_user', 'approach_id', props.title.id);
          await remove('favorite_approach_user', idFavorit[0].id);
        } else {
          formData.user_id = user.value.id;
          formData.approach_id = props.title.id;
          loading.value = true;
          await post('favorite_approach_user', formData);
          loading.value = false;
          (0,functionShowNotifications/* showSuccessNotification */.L)(' Adicionado aos favoritos com sucesso !!!');
        }
      } catch (error) {
        (0,functionShowNotifications/* showErrorNotification */.s)(JSON.stringify(error));
      }
    };

    (0,runtime_core_esm_bundler/* onMounted */.bv)(async () => {
      await initFavorit();
    });
    return {
      addFavorit,
      go,
      ratingModel
    };
  }

}));
;// CONCATENATED MODULE: ./src/components/ApproachButtom.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(4260);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/banner/QBanner.js
var QBanner = __webpack_require__(5607);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/rating/QRating.js
var QRating = __webpack_require__(8833);
// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(7518);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/components/ApproachButtom.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(ApproachButtomvue_type_script_lang_js, [['render',render],['__scopeId',"data-v-ac079208"]])

/* harmony default export */ const ApproachButtom = (__exports__);
;


runtime_auto_import_default()(ApproachButtomvue_type_script_lang_js, 'components', {QBanner: QBanner/* default */.Z,QRating: QRating/* default */.Z});


/***/ }),

/***/ 2668:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ FavoritePage)
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(3673);
// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(2323);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/users/FavoritePage.vue?vue&type=template&id=27ed24f5&scoped=true


const _withScopeId = n => ((0,runtime_core_esm_bundler/* pushScopeId */.dD)("data-v-27ed24f5"), n = n(), (0,runtime_core_esm_bundler/* popScopeId */.Cn)(), n);

const _hoisted_1 = {
  class: "column"
};
const _hoisted_2 = {
  class: "col"
};

const _hoisted_3 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", {
  class: "text-h5"
}, "Meus conteúdos favoritos", -1));

const _hoisted_4 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("br", null, null, -1));

const _hoisted_5 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("br", null, null, -1));

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ApproachButtom = (0,runtime_core_esm_bundler/* resolveComponent */.up)("ApproachButtom");

  const _component_q_list = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-list");

  const _component_q_spinner = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-spinner");

  const _component_q_page = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-page");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_page, {
    padding: ""
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_1, [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_2, [_hoisted_3, (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_list, {
      class: (0,shared_esm_bundler/* normalizeClass */.C_)(["row justify-center q-pl-sm q-gutter-sm q-mt-lg", {
        'no-wrap': _ctx.$q.screen.width > 599
      }])
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [((0,runtime_core_esm_bundler/* openBlock */.wg)(true), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, null, (0,runtime_core_esm_bundler/* renderList */.Ko)(_ctx.top, (option, index) => {
        return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_ApproachButtom, {
          class: "col-xs-12 col-sm-12 col-md-6 col-xl-3 col-lg-6",
          title: option,
          key: index
        }, null, 8, ["title"]);
      }), 128))]),
      _: 1
    }, 8, ["class"])]), _hoisted_4, _hoisted_5, _ctx.loading ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_spinner, {
      key: 0,
      class: "absolute-center",
      size: "xl",
      color: "primary"
    })) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true)])]),
    _: 1
  });
}
;// CONCATENATED MODULE: ./src/pages/users/FavoritePage.vue?vue&type=template&id=27ed24f5&scoped=true

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.json.stringify.js
var es_json_stringify = __webpack_require__(2100);
// EXTERNAL MODULE: ./src/functions/functionShowNotifications.js
var functionShowNotifications = __webpack_require__(4605);
// EXTERNAL MODULE: ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(1959);
// EXTERNAL MODULE: ./src/components/ApproachButtom.vue + 4 modules
var ApproachButtom = __webpack_require__(6804);
// EXTERNAL MODULE: ./src/composebles/useApi.js
var useApi = __webpack_require__(811);
// EXTERNAL MODULE: ./src/composebles/useAuthUser.js
var useAuthUser = __webpack_require__(4958);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/users/FavoritePage.vue?vue&type=script&lang=js


/* eslint-disable no-await-in-loop */

/* eslint-disable no-plusplus */





/* harmony default export */ const FavoritePagevue_type_script_lang_js = ((0,runtime_core_esm_bundler/* defineComponent */.aZ)({
  name: "ProfilePage",
  components: {
    ApproachButtom: ApproachButtom/* default */.Z
  },

  setup() {
    const {
      user
    } = (0,useAuthUser/* default */.Z)();
    const loading = (0,reactivity_esm_bundler/* ref */.iH)(true);
    const {
      list
    } = (0,useApi/* default */.Z)();
    const {
      getById
    } = (0,useApi/* default */.Z)();
    const topic = (0,reactivity_esm_bundler/* ref */.iH)([]);
    const top = (0,reactivity_esm_bundler/* ref */.iH)([]);
    const text = (0,reactivity_esm_bundler/* ref */.iH)([]);

    const listTopics = async () => {
      try {
        loading.value = true;
        const aux = await list("favorite_approach_user");
        text.value = aux.map(elem => elem.user_id);
        topic.value = aux.map(elem => elem.approach_id);
        const i = (0,reactivity_esm_bundler/* ref */.iH)(0);

        for (let index = 0; index < topic.value.length; index++) {
          if (user.value.id !== text.value[i.value]) {
            topic.value.splice(index, 1);
            --index;
          }

          i.value++;
        }

        topic.value.forEach(async element => {
          top.value.push(await getById("approach", element));
        });
      } catch (error) {
        (0,functionShowNotifications/* showErrorNotification */.s)(JSON.stringify(error.message));
      } finally {
        loading.value = false;
      }
    };

    return {
      top,
      loading,
      listTopics,
      text: (0,reactivity_esm_bundler/* ref */.iH)(""),
      slide: (0,reactivity_esm_bundler/* ref */.iH)("style")
    };
  },

  mounted() {
    this.listTopics();
  }

}));
;// CONCATENATED MODULE: ./src/pages/users/FavoritePage.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(4260);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPage.js
var QPage = __webpack_require__(4379);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QList.js
var QList = __webpack_require__(7011);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/spinner/QSpinner.js
var QSpinner = __webpack_require__(6833);
// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(7518);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/pages/users/FavoritePage.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(FavoritePagevue_type_script_lang_js, [['render',render],['__scopeId',"data-v-27ed24f5"]])

/* harmony default export */ const FavoritePage = (__exports__);
;



runtime_auto_import_default()(FavoritePagevue_type_script_lang_js, 'components', {QPage: QPage/* default */.Z,QList: QList/* default */.Z,QSpinner: QSpinner/* default */.Z});


/***/ })

}]);
//# sourceMappingURL=668.js.map