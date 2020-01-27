webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/ui/titleBanner.js":
/*!**************************************!*\
  !*** ./components/ui/titleBanner.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\fiton\\components\\ui\\titleBanner.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: relative;\n  max-width: fit-content;\n  margin: 0 auto;\n\n  .title,\n  .subtitle {\n    position: relative;\n    width: 100%;\n    display: block;\n    font-family: var(--fn-monterrat);\n    font-weight: var(--fw-bold);\n    text-transform: uppercase;\n  }\n\n  .title {\n    color: var(--primary-clr);\n    width: fit-content;\n    margin: 0 auto;\n    font-size: 1.1rem;\n    /* -webkit-text-stroke: 1px var(--primary-clr); */\n    padding: ", ";\n    &::after,\n    &::before {\n      content: '';\n      position: absolute;\n      height: 30px;\n      width: 30px;\n      top: 43%;\n      transform: translateY(-50%);\n      background-size: cover;\n    }\n\n    &::before {\n      background-image: url(leftTitle.png);\n      left: 0;\n    }\n\n    &::after {\n      background-image: url(rightTitle.png);\n      right: 0;\n    }\n  }\n\n  .subtitle {\n    color: ", ";\n    font-size: 1.8rem;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var Styled = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject(), function (props) {
  return props.padd ? props.padd : ' 0 12%';
}, function (props) {
  return props.invert ? 'var(--white-clr)' : 'var(--second-clr)';
});

var TitleBanner = function TitleBanner(_ref) {
  var subtitle = _ref.subtitle,
      title = _ref.title,
      invert = _ref.invert,
      padd = _ref.padd;
  return __jsx(Styled, {
    className: "title--banner",
    invert: invert,
    padd: padd,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx("h2", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, title), __jsx("h3", {
    className: "subtitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, subtitle));
};

/* harmony default export */ __webpack_exports__["default"] = (TitleBanner);

/***/ })

})
//# sourceMappingURL=index.js.47951bd85ee119ca7add.hot-update.js.map