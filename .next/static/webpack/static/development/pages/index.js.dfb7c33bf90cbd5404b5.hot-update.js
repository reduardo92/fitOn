webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/ui/TrainerCard.jsx":
/*!***************************************!*\
  !*** ./components/ui/TrainerCard.jsx ***!
  \***************************************/
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

var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\fiton\\components\\ui\\TrainerCard.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: relative;\n  max-width: 350px;\n  margin: 0 auto;\n\n  .card--img {\n    position: relative;\n    transition: var(--ease--in--out--02s);\n    width: 100%;\n    img {\n      object-fit: cover;\n      height: 450px;\n    }\n\n    &::before {\n      content: '';\n      position: absolute;\n      background-color: var(--primary-clr);\n      height: 100%;\n      width: 100%;\n      top: 12px;\n      /* left: 0; */\n      right: -6px;\n      z-index: -1;\n    }\n  }\n  .card--body {\n    padding: 0.5em 1em 1.5em;\n    color: var(--second-clr);\n    font-weight: bold;\n    text-transform: uppercase;\n    text-align: center;\n    margin-top: 1em;\n\n    &__title {\n      color: var(--primary-clr);\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var Styled = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());

var TrainerCard = function TrainerCard(_ref) {
  var _ref$data = _ref.data,
      id = _ref$data.id,
      img = _ref$data.img,
      title = _ref$data.title,
      subtitle = _ref$data.subtitle;
  return __jsx(Styled, {
    className: "card--trainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/trainer/[id]",
    as: "/trainer/".concat(id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx("div", {
    className: "card--img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx("img", {
    src: img,
    alt: title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }))), __jsx("div", {
    className: "card--body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx("h3", {
    className: "card--body__title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, title), __jsx("div", {
    className: "card--body__para",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, subtitle)));
};

/* harmony default export */ __webpack_exports__["default"] = (TrainerCard);

/***/ })

})
//# sourceMappingURL=index.js.dfb7c33bf90cbd5404b5.hot-update.js.map