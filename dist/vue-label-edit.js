!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("vue-label-edit",[],t):"object"==typeof exports?exports["vue-label-edit"]=t():e["vue-label-edit"]=t()}(window,function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var _=t[o]={i:o,l:!1,exports:{}};return e[o].call(_.exports,_,_.exports,n),_.l=!0,_.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="./src/LabelEdit.vue")}({"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/LabelEdit.vue":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/LabelEdit.vue ***!
  \*************************************************************************************************************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\tname: 'LabelEdit',\n\tdata: function () {\n\t\treturn {\n\t\t\tedit: false, // define whether it is in edit mode or not\n\t\t\tlabel: '', // v-bind data model for input text\n\t\t\tempty: 'Enter some text value' // empty place holder .. replace with your own localization for default\n\t\t};\n\t},\n\tprops: ['text', 'placeholder'], // parent should provide :text or :placeholder\n\tmethods: {\n\t\tinitText: function () {\n\t\t\tif (this.text == '' || this.text == undefined) {\n\t\t\t\tthis.label = this.vlabel;\n\t\t\t} else {\n\t\t\t\tthis.label = this.text;\n\t\t\t}\n\t\t},\n\t\t// when the div label got clicked and trigger the text box\n\t\tonLabelClick: function () {\n\t\t\tthis.edit = true;\n\t\t\tthis.label = this.text;\n\t\t},\n\t\t// trigger when textbox got lost focus\n\t\tupdateText: function () {\n\t\t\t// update the edit mode to false .. display div label text\n\t\t\tthis.edit = false;\n\t\t\t// emit text updated callback\n\t\t\tthis.$emit('text-updated', this.label);\n\t\t}\n\t},\n\tcomputed: {\n\t\tvplaceholder: function () {\n\t\t\t// check if the placeholder is undefined or empty\n\t\t\tif (this.placeholder == undefined || this.placeholder == '') {\n\t\t\t\t// if it is empty or undefined, pre-populate with built-in place holder text\n\t\t\t\treturn this.empty;\n\t\t\t} else {\n\t\t\t\treturn this.placeholder;\n\t\t\t}\n\t\t},\n\t\tvlabel: function () {\n\t\t\t// after text has been updated\n\t\t\t// return text value or place holder value depends on value of the text\n\t\t\tif (this.text == undefined || this.text == '') {\n\t\t\t\treturn this.vplaceholder;\n\t\t\t} else {\n\t\t\t\treturn this.label;\n\t\t\t}\n\t\t}\n\t},\n\tmounted: function () {\n\t\t// initiate the label view\n\t\tthis.initText();\n\t},\n\tupdated: function () {\n\t\tvar ed = this.$refs.labeledit;\n\t\tif (ed != null) {\n\t\t\ted.focus();\n\t\t}\n\t},\n\twatch: {\n\t\ttext: function (value) {\n\t\t\tif (value == '' || value == undefined) {\n\t\t\t\tthis.label = this.vplaceholder;\n\t\t\t}\n\t\t}\n\t}\n});\n\n//# sourceURL=webpack://vue-label-edit/./src/LabelEdit.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0")},"./node_modules/vue-loader/lib/runtime/component-normalizer.js":
/*!*********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/component-normalizer.js ***!
  \*********************************************************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return normalizeComponent; });\n/* globals __VUE_SSR_CONTEXT__ */\n\n// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).\n// This module is a runtime utility for cleaner component module output and will\n// be included in the final webpack user bundle.\n\nfunction normalizeComponent (\n  scriptExports,\n  render,\n  staticRenderFns,\n  functionalTemplate,\n  injectStyles,\n  scopeId,\n  moduleIdentifier, /* server only */\n  shadowMode /* vue-cli only */\n) {\n  scriptExports = scriptExports || {}\n\n  // ES6 modules interop\n  var type = typeof scriptExports.default\n  if (type === 'object' || type === 'function') {\n    scriptExports = scriptExports.default\n  }\n\n  // Vue.extend constructor export interop\n  var options = typeof scriptExports === 'function'\n    ? scriptExports.options\n    : scriptExports\n\n  // render functions\n  if (render) {\n    options.render = render\n    options.staticRenderFns = staticRenderFns\n    options._compiled = true\n  }\n\n  // functional template\n  if (functionalTemplate) {\n    options.functional = true\n  }\n\n  // scopedId\n  if (scopeId) {\n    options._scopeId = scopeId\n  }\n\n  var hook\n  if (moduleIdentifier) { // server build\n    hook = function (context) {\n      // 2.3 injection\n      context =\n        context || // cached call\n        (this.$vnode && this.$vnode.ssrContext) || // stateful\n        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional\n      // 2.2 with runInNewContext: true\n      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {\n        context = __VUE_SSR_CONTEXT__\n      }\n      // inject component styles\n      if (injectStyles) {\n        injectStyles.call(this, context)\n      }\n      // register component module identifier for async chunk inferrence\n      if (context && context._registeredComponents) {\n        context._registeredComponents.add(moduleIdentifier)\n      }\n    }\n    // used by ssr in case component is cached and beforeCreate\n    // never gets called\n    options._ssrRegister = hook\n  } else if (injectStyles) {\n    hook = shadowMode\n      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }\n      : injectStyles\n  }\n\n  if (hook) {\n    if (options.functional) {\n      // for template-only hot-reload because in that case the render fn doesn't\n      // go through the normalizer\n      options._injectStyles = hook\n      // register for functioal component in vue file\n      var originalRender = options.render\n      options.render = function renderWithStyleInjection (h, context) {\n        hook.call(context)\n        return originalRender(h, context)\n      }\n    } else {\n      // inject component registration as beforeCreate hook\n      var existing = options.beforeCreate\n      options.beforeCreate = existing\n        ? [].concat(existing, hook)\n        : [hook]\n    }\n  }\n\n  return {\n    exports: scriptExports,\n    options: options\n  }\n}\n\n\n//# sourceURL=webpack://vue-label-edit/./node_modules/vue-loader/lib/runtime/component-normalizer.js?")},'./node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-4fc6ac75","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/LabelEdit.vue':
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-4fc6ac75","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/LabelEdit.vue ***!
  \********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c("div", { staticClass: "vlabeledit" }, [\n    !_vm.edit\n      ? _c(\n          "div",\n          { staticClass: "vlabeledit-label", on: { click: _vm.onLabelClick } },\n          [_vm._v(_vm._s(_vm.vlabel))]\n        )\n      : _vm._e(),\n    _vm._v(" "),\n    _vm.edit\n      ? _c("input", {\n          directives: [\n            {\n              name: "model",\n              rawName: "v-model",\n              value: _vm.label,\n              expression: "label"\n            }\n          ],\n          ref: "labeledit",\n          staticClass: "vlabeledit-input",\n          attrs: { type: "text", placeholder: _vm.vplaceholder },\n          domProps: { value: _vm.label },\n          on: {\n            blur: _vm.updateText,\n            input: function($event) {\n              if ($event.target.composing) {\n                return\n              }\n              _vm.label = $event.target.value\n            }\n          }\n        })\n      : _vm._e()\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\nif (false) {}\n\n//# sourceURL=webpack://vue-label-edit/./src/LabelEdit.vue?./node_modules/vue-loader/lib/template-compiler?%7B%22id%22:%22data-v-4fc6ac75%22,%22hasScoped%22:false,%22optionsId%22:%220%22,%22buble%22:%7B%22transforms%22:%7B%7D%7D%7D!./node_modules/vue-loader/lib/selector.js?type=template&index=0')},"./src/LabelEdit.vue":
/*!***************************!*\
  !*** ./src/LabelEdit.vue ***!
  \***************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_LabelEdit_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !babel-loader!../node_modules/vue-loader/lib/selector?type=script&index=0!./LabelEdit.vue */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/LabelEdit.vue");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_4fc6ac75_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_LabelEdit_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-4fc6ac75","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!../node_modules/vue-loader/lib/selector?type=template&index=0!./LabelEdit.vue */ "./node_modules/vue-loader/lib/template-compiler/index.js?{\\"id\\":\\"data-v-4fc6ac75\\",\\"hasScoped\\":false,\\"optionsId\\":\\"0\\",\\"buble\\":{\\"transforms\\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/LabelEdit.vue");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/component-normalizer */ "./node_modules/vue-loader/lib/runtime/component-normalizer.js");\nvar disposed = false\n/* script */\n\n\n/* template */\n\n/* template functional */\nvar __vue_template_functional__ = false\n/* styles */\nvar __vue_styles__ = null\n/* scopeId */\nvar __vue_scopeId__ = null\n/* moduleIdentifier (server only) */\nvar __vue_module_identifier__ = null\n\nvar Component = Object(_node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__["default"])(\n  _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_LabelEdit_vue__WEBPACK_IMPORTED_MODULE_0__["default"],\n  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_4fc6ac75_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_LabelEdit_vue__WEBPACK_IMPORTED_MODULE_1__["render"],\n  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_4fc6ac75_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_LabelEdit_vue__WEBPACK_IMPORTED_MODULE_1__["staticRenderFns"],\n  __vue_template_functional__,\n  __vue_styles__,\n  __vue_scopeId__,\n  __vue_module_identifier__\n)\nComponent.options.__file = "src/LabelEdit.vue"\n\n/* hot reload */\nif (false) {}\n\n/* harmony default export */ __webpack_exports__["default"] = (Component.exports);\n\n\n//# sourceURL=webpack://vue-label-edit/./src/LabelEdit.vue?')}})});