"use strict";
(self["webpackChunkmedicalbookapp"] = self["webpackChunkmedicalbookapp"] || []).push([[254],{

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

/***/ 8254:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ NotePage)
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(3673);
// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(2323);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/users/NotePage.vue?vue&type=template&id=4f3d46b6

const _hoisted_1 = {
  class: "col-6 col-xs-12 col-md-6 col-lg-6 col-xl-6"
};
const _hoisted_2 = {
  class: "q-row"
};

const _hoisted_3 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("br", null, null, -1);

const _hoisted_4 = {
  class: "q-pa-md"
};

const _hoisted_5 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", {
  class: "textarea-color"
}, null, -1);

const _hoisted_6 = {
  class: "q-mt-sm textarea-rodape"
};
const _hoisted_7 = {
  class: "row full-width"
};
const _hoisted_8 = {
  class: "col-8 rodape-titulo"
};

const _hoisted_9 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("br", null, null, -1);

const _hoisted_10 = {
  key: 0
};

const _hoisted_11 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("br", null, null, -1);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_icon = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-icon");

  const _component_q_input = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-input");

  const _component_q_btn = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-btn");

  const _component_q_page_sticky = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-page-sticky");

  const _component_q_inner_loading = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-inner-loading");

  const _component_q_page = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-page");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_page, {
    padding: "",
    class: "row justify-center q-gutter-sm"
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_1, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_input, {
      class: "q-mt-md",
      outlined: "",
      rounded: "",
      "bottom-slots": "",
      modelValue: _ctx.text,
      "onUpdate:modelValue": [_cache[1] || (_cache[1] = $event => _ctx.text = $event), _cache[2] || (_cache[2] = $event => _ctx.searchNote())],
      placeholder: "Pesquise uma nota",
      dense: ""
    }, {
      append: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_ctx.text !== '' ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_icon, {
        key: 0,
        name: "close",
        onClick: _cache[0] || (_cache[0] = $event => _ctx.text = ''),
        class: "cursor-pointer"
      })) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
        name: "search"
      })]),
      _: 1
    }, 8, ["modelValue"]), (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_2, [((0,runtime_core_esm_bundler/* openBlock */.wg)(true), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, null, (0,runtime_core_esm_bundler/* renderList */.Ko)(_ctx.notas, (i, index) => {
      return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", {
        key: index
      }, [_hoisted_3, (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_4, [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", null, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_input, {
        borderless: "",
        modelValue: i.content,
        "onUpdate:modelValue": $event => i.content = $event,
        filled: "",
        clearable: "",
        color: "red-12",
        type: "textarea",
        label: "Nota",
        onBlur: $event => _ctx.updateNote(i)
      }, null, 8, ["modelValue", "onUpdate:modelValue", "onBlur"]), _hoisted_5]), (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_6, [(0,runtime_core_esm_bundler/* createElementVNode */._)("strong", _hoisted_7, [(0,runtime_core_esm_bundler/* createElementVNode */._)("span", _hoisted_8, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_input, {
        outlined: "",
        dense: "",
        modelValue: i.title,
        "onUpdate:modelValue": $event => i.title = $event,
        onBlur: $event => _ctx.updateNote(i),
        type: "text"
      }, null, 8, ["modelValue", "onUpdate:modelValue", "onBlur"])]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
        class: "col-1",
        flat: "",
        round: "",
        icon: "delete",
        color: "red-5",
        dense: "",
        onClick: $event => _ctx.removeNote(index, i.id)
      }, null, 8, ["onClick"])]), _hoisted_9, i.created_at ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("span", _hoisted_10, (0,shared_esm_bundler/* toDisplayString */.zw)(new Date(i.created_at).toLocaleString("pt-BR", {
        timeZone: "UTC"
      })), 1)) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true)])])]);
    }), 128))]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_page_sticky, {
      position: "bottom-right",
      offset: [18, 18]
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
        onClick: _ctx.addDataBase,
        fab: "",
        color: "green",
        icon: "add",
        class: "flax absolute-down"
      }, null, 8, ["onClick"])]),
      _: 1
    }), _hoisted_11, (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_inner_loading, {
      showing: _ctx.loading,
      color: "primary"
    }, null, 8, ["showing"])])]),
    _: 1
  });
}
;// CONCATENATED MODULE: ./src/pages/users/NotePage.vue?vue&type=template&id=4f3d46b6

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(71);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.trim.js
var es_string_trim = __webpack_require__(6801);
// EXTERNAL MODULE: ./node_modules/quasar/src/composables/use-quasar.js
var use_quasar = __webpack_require__(8825);
// EXTERNAL MODULE: ./src/store/note/actions.js + 1 modules
var actions = __webpack_require__(2605);
// EXTERNAL MODULE: ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(1959);
// EXTERNAL MODULE: ./src/composebles/useApi.js
var useApi = __webpack_require__(811);
// EXTERNAL MODULE: ./src/composebles/useAuthUser.js
var useAuthUser = __webpack_require__(4958);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/users/NotePage.vue?vue&type=script&lang=js


;

 // import TextArea from 'components/TextArea.vue';



/* harmony default export */ const NotePagevue_type_script_lang_js = ((0,runtime_core_esm_bundler/* defineComponent */.aZ)({
  name: "NotePage",

  setup() {
    const loading = (0,reactivity_esm_bundler/* ref */.iH)(false);
    const {
      user
    } = (0,useAuthUser/* default */.Z)();
    const notas = (0,reactivity_esm_bundler/* ref */.iH)([]);
    const form = (0,reactivity_esm_bundler/* ref */.iH)({
      content: "",
      title: "",
      date: null,
      user_id: user.value.id
    });
    const {
      post,
      getByField,
      update,
      remove
    } = (0,useApi/* default */.Z)();
    const $q = (0,use_quasar/* default */.Z)();

    const updateNote = async note => {
      try {
        await update("notas", note);
        $q.notify({
          type: "positive",
          message: `${note.title} atualizada`
        });
      } catch (error) {
        alert(error.message);
      }
    };

    const addDataBase = async () => {
      try {
        const note = await post("notas", {
          title: "Título da nota",
          content: "Conteúdo",
          user_id: user.value.id
        });
        $q.notify({
          type: "positive",
          message: "Nota criada com sucesso!!"
        });
        notas.value.push(note[0]);
      } catch (error) {
        alert(error.message);
      }

      lastNotes.value = [...notas.value];
    };

    const removeNote = async (index, id) => {
      if (id) {
        const isOk = confirm("Deseja realmente apagar essa nota?");

        if (isOk) {
          await remove("notas", id);
          $q.notify({
            type: "warning",
            message: "Nota elimana com sucesso!!"
          });
          notas.value.splice(index, 1);
        }
      } else {
        notas.value.splice(index, 1);
      }

      lastNotes.value = [...notas.value];
    };

    const text = (0,reactivity_esm_bundler/* ref */.iH)("");
    const lastNotes = (0,reactivity_esm_bundler/* ref */.iH)([]);

    const searchNote = () => {
      if (!text.value.trim().length) {
        notas.value = [...lastNotes.value];
      } else {
        const result = notas.value.filter(note => {
          const searchNoteTitle = note.title.trim().toLowerCase();
          const searchNoteContent = note.content.trim().toLowerCase();
          const textSearch = text.value.trim().toLowerCase();
          return searchNoteTitle.includes(textSearch) || searchNoteContent.includes(textSearch);
        });
        notas.value = [...result];
      }
    };

    const getNoteByUser = async () => {
      try {
        loading.value = true;
        notas.value = await getByField("notas", "user_id", user.value.id);
      } catch (error) {
        alert(error.message);
      } finally {
        loading.value = false;
      }
    };

    (0,runtime_core_esm_bundler/* onMounted */.bv)(() => {
      getNoteByUser();
    });
    return {
      updateNote,
      searchNote,
      removeNote,
      addDataBase,
      text,
      loading,
      notas,
      color: {
        type: String,
        default: "red"
      }
    };
  }

}));
;// CONCATENATED MODULE: ./src/pages/users/NotePage.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(4260);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPage.js
var QPage = __webpack_require__(4379);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/input/QInput.js + 2 modules
var QInput = __webpack_require__(4842);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__(4554);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__(2165);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/page-sticky/QPageSticky.js + 1 modules
var QPageSticky = __webpack_require__(1007);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/inner-loading/QInnerLoading.js
var QInnerLoading = __webpack_require__(6941);
// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(7518);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/pages/users/NotePage.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(NotePagevue_type_script_lang_js, [['render',render]])

/* harmony default export */ const NotePage = (__exports__);
;






runtime_auto_import_default()(NotePagevue_type_script_lang_js, 'components', {QPage: QPage/* default */.Z,QInput: QInput/* default */.Z,QIcon: QIcon/* default */.Z,QBtn: QBtn/* default */.Z,QPageSticky: QPageSticky/* default */.Z,QInnerLoading: QInnerLoading/* default */.Z});


/***/ })

}]);
//# sourceMappingURL=254.js.map