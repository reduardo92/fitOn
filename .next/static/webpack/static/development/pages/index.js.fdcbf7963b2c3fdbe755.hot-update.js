webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/ui/tabs.js":
/*!*******************************!*\
  !*** ./components/ui/tabs.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  color: ", ";\n  background-color: ", ";\n  padding: 1em 3.2em;\n  border-radius: 40px;\n  border: 2px solid var(--primary-clr);\n  text-transform: uppercase;\n  font-weight: var(--fw-bold);\n  transition: var(--ease--in--out--02s);\n  border: 3px solid\n    ", ";\n  outline-color: ", ";\n  transform: ", ";\n  cursor: pointer;\n\n  &:hover,\n  &focus {\n    color: ", ";\n    transform: scale(0.95);\n    background-color: transparent;\n    border-color: var(--second-clr);\n    outline-color: var(--second-clr);\n    cursor: pointer;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var TabStyled = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button(_templateObject(), function (props) {
  return props.active ? 'var(--second-clr)' : 'var(--white-clr)';
}, function (props) {
  return props.active ? 'transparent' : 'var(--second-clr)';
}, function (props) {
  return props.active ? 'var(--second-clr)' : 'transparent';
}, function (props) {
  return props.active ? 'transparent' : 'var(--second-clr);';
}, function (props) {
  return props.active ? 'scale(0.95)' : '';
}, function (props) {
  return props.color ? 'var(--second-clr)' : 'var(--white-clr)';
});
/* harmony default export */ __webpack_exports__["default"] = (TabStyled);

/***/ })

})
//# sourceMappingURL=index.js.fdcbf7963b2c3fdbe755.hot-update.js.map