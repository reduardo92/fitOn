webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/ui/PersonalTrainerBanner.jsx":
/*!*************************************************!*\
  !*** ./components/ui/PersonalTrainerBanner.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-reveal/Fade */ "./node_modules/react-reveal/Fade.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./button */ "./components/ui/button.js");

var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\fiton\\components\\ui\\PersonalTrainerBanner.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: relative;\n  background-image: url('/platesbg.jpg');\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  object-fit: cover;\n  min-height: 75vw;\n  z-index: 1;\n  display: grid;\n  justify-items: center;\n  align-content: center;\n  padding: 2em;\n\n  &::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-color: rgba(0, 0, 0, 0.75);\n    z-index: -1;\n  }\n\n  .title--content {\n    padding: 0 1em;\n    text-align: center;\n    max-width: 500px;\n  }\n\n  .title {\n    span {\n      color: var(--primary-clr);\n    }\n  }\n\n  .img-line {\n    width: 100px;\n    margin: 1em auto;\n  }\n\n  .last--tab {\n    background-color: var(--primary-clr);\n\n    &:focus,\n    &:hover {\n      border-color: var(--primary-clr);\n      border: 2px solid var(--primary-clr);\n      color: var(--white-clr);\n      background-color: transparent;\n    }\n  }\n\n  @media screen and (min-width: 760px) {\n    min-height: 25vw;\n  }\n  @media screen and (min-width: 1100px) {\n    min-height: 12vw;\n    background-position: bottom;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var Styled = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].section(_templateObject());

var PersonalTrainerBanner = function PersonalTrainerBanner() {
  return __jsx(Styled, {
    className: "schedule--weeek",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, __jsx("div", {
    className: "title--content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, __jsx("h2", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "Do you need a ", __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "Personal Trainer?"), " Get in touch with us now."), __jsx("img", {
    src: "/yellowLine.png",
    alt: "yellow line",
    className: "img-line",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  })), __jsx(_button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "contact us",
    toLink: "/contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (PersonalTrainerBanner);

/***/ })

})
//# sourceMappingURL=index.js.b82074103924bcbac43e.hot-update.js.map