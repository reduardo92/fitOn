webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/ui/Testimonies/TestimoniesCard.jsx":
/*!*******************************************************!*\
  !*** ./components/ui/Testimonies/TestimoniesCard.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\fiton\\components\\ui\\Testimonies\\TestimoniesCard.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: relative;\n  background-color: var(--accent-clr);\n  color: var(--second-clr);\n  text-align: center;\n  padding: 5em 1em 2em;\n  margin: 0 0.5em;\n  max-width: 500px;\n\n  &::before {\n    content: '';\n    position: absolute;\n    background-color: var(--primary-clr);\n    height: 100%;\n    width: 100%;\n    top: 10px;\n    /* left: 0; */\n    right: -4px;\n    z-index: -1;\n  }\n\n  .card--testimoneis--img {\n    border-radius: 50%;\n    height: 120px;\n    width: 120px;\n    margin: 0 auto;\n    border: 3px solid var(--primary-clr);\n    object-fit: cover;\n    position: absolute;\n    top: -50px;\n    left: 0;\n    right: 0;\n  }\n\n  .card--testimoneis--content__para {\n    max-width: 50vw;\n    margin: 0 auto;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var Styled = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());

var TestimoniesCard = function TestimoniesCard(_ref) {
  var _ref$data = _ref.data,
      img = _ref$data.img,
      name = _ref$data.name,
      text = _ref$data.text;
  return __jsx(Styled, {
    className: "card--testimonies",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx("img", {
    src: img,
    alt: "woman",
    className: "card--testimoneis--img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), __jsx("div", {
    className: "card--testimoneis--content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx("h3", {
    className: "card--testimoneis--content__name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, name), __jsx("p", {
    className: "card--testimoneis--content__para",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, text)));
};

/* harmony default export */ __webpack_exports__["default"] = (TestimoniesCard);

/***/ })

})
//# sourceMappingURL=index.js.76c2dce11791d7bc816f.hot-update.js.map