webpackHotUpdate("static\\development\\pages\\classes.js",{

/***/ "./components/classes/ClassesCard.jsx":
/*!********************************************!*\
  !*** ./components/classes/ClassesCard.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\fiton\\components\\classes\\ClassesCard.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: relative;\n  max-width: 380px;\n  margin: 0 auto;\n  height: 200px;\n\n  .classes--card--img {\n    position: relative;\n    transition: var(--ease--in--out--02s);\n    width: 100%;\n    img {\n      object-fit: cover;\n      height: 100%;\n    }\n\n    &::before {\n      content: '';\n      position: absolute;\n      background-color: var(--primary-clr);\n      height: 100%;\n      width: 100%;\n      top: -12px;\n      left: -10px;\n      z-index: -1;\n    }\n  }\n\n  .classes--card--title {\n    color: var(--second-clr);\n    margin-top: 1em;\n    font-weight: bold;\n    text-transform: uppercase;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var Styled = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());

var ClassesCard = function ClassesCard(_ref) {
  var _ref$data = _ref.data,
      img = _ref$data.img,
      title = _ref$data.title;
  return __jsx(Styled, {
    className: "classes--card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("div", {
    className: "classes--card--img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("img", {
    src: img,
    alt: title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  })), __jsx("h3", {
    className: "classes--card--title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, title));
};

/* harmony default export */ __webpack_exports__["default"] = (ClassesCard);

/***/ })

})
//# sourceMappingURL=classes.js.631a5674b00f5613a5ed.hot-update.js.map