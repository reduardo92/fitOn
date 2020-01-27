webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/ui/button.js":
/*!*********************************!*\
  !*** ./components/ui/button.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\fiton\\components\\ui\\button.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: inline-block;\n  font-family: var(--fn-monterrat);\n  font-weight: var(--fw-bold);\n  font-size: 0.9rem;\n  text-align: center;\n  background-color: ", ";\n  color: ", ";\n  text-transform: uppercase;\n  padding: 1em 3.2em;\n  border-radius: 40px;\n  border: 2px solid var(--primary-clr);\n  position: relative;\n  transition: var(--ease--in--out--02s);\n  cursor: pointer;\n\n  &:hover,\n  &:focus {\n    transform: scale(0.95);\n    background-color: ", ";\n    border-color: var(--primary-clr);\n    color: ", ";\n    cursor: pointer;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var Styled = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].a(_templateObject(), function (props) {
  return props.bgclr ? 'var(--primary-clr)' : 'transparent';
}, function (props) {
  return props.invert ? 'var(--second-clr)' : 'var(--white-clr)';
}, function (props) {
  return props.bgclr ? 'transparent' : 'var(--primary-clr)';
}, function (props) {
  return props.hoverclr ? 'var(--white-clr)' : 'var(--second-clr)';
});

var Button = function Button(_ref) {
  var toLink = _ref.toLink,
      title = _ref.title,
      hoverclr = _ref.hoverclr,
      bgclr = _ref.bgclr,
      invert = _ref.invert;
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: toLink,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx(Styled, {
    hoverclr: hoverclr,
    bgclr: bgclr,
    invert: invert,
    className: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, title));
};

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ })

})
//# sourceMappingURL=index.js.d163c749b31ad9654b4b.hot-update.js.map