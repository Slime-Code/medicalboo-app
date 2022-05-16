"use strict";
(self["webpackChunkmedicalbookapp"] = self["webpackChunkmedicalbookapp"] || []).push([[357],{

/***/ 1357:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ PrimePage)
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(3673);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/users/PrimePage.vue?vue&type=template&id=1750c402

const _hoisted_1 = {
  class: "q-pa-md col-md-4 col-sm-6 col-xs-10 q-gutter-y-lg"
};
const _hoisted_2 = {
  class: "column flex items-center"
};

const _hoisted_3 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", {
  class: "text-h6"
}, "Clareza Quando Você Mais Precisa", -1);

const _hoisted_4 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", {
  class: "text-body2 text-center"
}, " Fornecemos as evidências fundamentada na experiência clínica dos médicos mais notáveis do mundo ", -1);

const _hoisted_5 = {
  class: "col column flex q-gutter-sm"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_carousel_slide = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-carousel-slide");

  const _component_q_toggle = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-toggle");

  const _component_q_carousel_control = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-carousel-control");

  const _component_q_btn = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-btn");

  const _component_q_carousel = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-carousel");

  const _component_q_page = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-page");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_page, {
    padding: "",
    class: "constrain-4"
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_1, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_carousel, {
      swipeable: "",
      animated: "",
      modelValue: $setup.slide,
      "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => $setup.slide = $event),
      autoplay: $setup.autoplay,
      ref: "carousel",
      infinite: ""
    }, {
      control: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_carousel_control, {
        position: "top-right",
        offset: [18, 18],
        class: "text-white rounded-borders",
        style: {
          "background": "rgba(0, 0, 0, 0.3)",
          "padding": "4px 8px"
        }
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_toggle, {
          dense: "",
          dark: "",
          color: "orange",
          modelValue: $setup.autoplay,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => $setup.autoplay = $event),
          label: "Play & stop"
        }, null, 8, ["modelValue"])]),
        _: 1
      }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_carousel_control, {
        position: "bottom-right",
        offset: [18, 18],
        class: "q-gutter-xs"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
          push: "",
          round: "",
          dense: "",
          color: "orange",
          "text-color": "black",
          icon: "arrow_left",
          onClick: _cache[1] || (_cache[1] = $event => _ctx.$refs.carousel.previous())
        }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
          push: "",
          round: "",
          dense: "",
          color: "orange",
          "text-color": "black",
          icon: "arrow_right",
          onClick: _cache[2] || (_cache[2] = $event => _ctx.$refs.carousel.next())
        })]),
        _: 1
      })]),
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_carousel_slide, {
        name: 1,
        "img-src": "img/prescrição.png"
      }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_carousel_slide, {
        name: 2,
        "img-src": "img/calculadoras.png"
      }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_carousel_slide, {
        name: 3,
        "img-src": "img/prescrição.png"
      }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_carousel_slide, {
        name: 4,
        "img-src": "img/BG-FULL.png"
      })]),
      _: 1
    }, 8, ["modelValue", "autoplay"])]), (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_2, [_hoisted_3, _hoisted_4, (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_5, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
      class: "col",
      color: "green-5",
      rounded: "",
      label: "Experimente 7 Dias Gratis",
      to: {
        name: 'home'
      }
    }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
      class: "col",
      color: "grey-5",
      rounded: "",
      unelevated: "",
      dense: "",
      label: "agora Não",
      to: {
        name: 'home'
      }
    })])])]),
    _: 1
  });
}
;// CONCATENATED MODULE: ./src/pages/users/PrimePage.vue?vue&type=template&id=1750c402

// EXTERNAL MODULE: ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(1959);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/users/PrimePage.vue?vue&type=script&lang=js

/* harmony default export */ const PrimePagevue_type_script_lang_js = ({
  setup() {
    return {
      slide: (0,reactivity_esm_bundler/* ref */.iH)(1),
      autoplay: (0,reactivity_esm_bundler/* ref */.iH)(true)
    };
  }

});
;// CONCATENATED MODULE: ./src/pages/users/PrimePage.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(4260);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPage.js
var QPage = __webpack_require__(4379);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/carousel/QCarousel.js
var QCarousel = __webpack_require__(1277);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/carousel/QCarouselSlide.js
var QCarouselSlide = __webpack_require__(4593);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/carousel/QCarouselControl.js
var QCarouselControl = __webpack_require__(7607);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/toggle/QToggle.js
var QToggle = __webpack_require__(8886);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__(2165);
// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(7518);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/pages/users/PrimePage.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(PrimePagevue_type_script_lang_js, [['render',render]])

/* harmony default export */ const PrimePage = (__exports__);
;






runtime_auto_import_default()(PrimePagevue_type_script_lang_js, 'components', {QPage: QPage/* default */.Z,QCarousel: QCarousel/* default */.Z,QCarouselSlide: QCarouselSlide/* default */.Z,QCarouselControl: QCarouselControl/* default */.Z,QToggle: QToggle/* default */.Z,QBtn: QBtn/* default */.Z});


/***/ })

}]);
//# sourceMappingURL=357.js.map