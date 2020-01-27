webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/ui/banner.js":
/*!*********************************!*\
  !*** ./components/ui/banner.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./button */ "./components/ui/button.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-reveal/Fade */ "./node_modules/react-reveal/Fade.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\fiton\\components\\ui\\banner.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  padding: 0 0.5em;\n  text-align: center;\n  .title {\n    font-family: var(--fn-monterrat);\n    text-transform: uppercase;\n    margin-bottom: 1em;\n    font-size: 2.5rem;\n    line-height: 1;\n\n    span {\n      display: block;\n    }\n  }\n\n  /* .button + .button {\n    margin-left: 1em;\n  } */\n  .btn--group {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-gap: 0.5em;\n  }\n  @media screen and (min-width: 768px) {\n  }\n  @media screen and (min-width: 1024px) {\n    .title {\n      font-size: 4rem;\n      line-height: 0.5;\n      margin: 0;\n    }\n\n    .button {\n      font-size: 1.15rem;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var Styled = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());

var Banner = function Banner(_ref) {
  var banner = _ref.banner,
      bannerTitle = _ref.bannerTitle,
      btnOne = _ref.btnOne,
      btnTwo = _ref.btnTwo;
  return __jsx(Styled, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
    bottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx("h1", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, banner === 'home' ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, "become the ", __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "best you")) : bannerTitle), banner === 'home' ? __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
    top: true,
    delay: 500,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx(_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "join now!",
    toLink: "/contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  })) : __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
    top: true,
    delay: 500,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx("div", {
    className: "btn--group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx(_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: btnOne,
    toLink: "/".concat(btnOne),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }), __jsx(_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: btnTwo,
    toLink: "/".concat(btnTwo),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Banner);

/***/ })

})
//# sourceMappingURL=index.js.b9fa07512a0a593289f7.hot-update.js.map