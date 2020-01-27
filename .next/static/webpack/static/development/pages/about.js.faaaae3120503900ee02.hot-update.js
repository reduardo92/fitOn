webpackHotUpdate("static\\development\\pages\\about.js",{

/***/ "./components/about/AboutContent.jsx":
/*!*******************************************!*\
  !*** ./components/about/AboutContent.jsx ***!
  \*******************************************/
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
/* harmony import */ var _ui_titleBanner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/titleBanner */ "./components/ui/titleBanner.js");
/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/button */ "./components/ui/button.js");

var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\fiton\\components\\about\\AboutContent.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  padding: 3em 5vw 4em;\n  text-align: center;\n  display: grid;\n  grid-gap: 4em;\n  justify-items: center;\n\n  .title--banner {\n    margin-bottom: 1.3em;\n  }\n\n  .para {\n    margin-bottom: 1em;\n  }\n\n  .button {\n    margin-top: 1em;\n  }\n\n  .imgs--container {\n    position: relative;\n    position: relative;\n    transition: var(--ease--in--out--02s);\n    max-width: 440px;\n    width: 100%;\n    height: 500px;\n\n    img {\n      object-fit: cover;\n      height: 500px;\n    }\n\n    &::before {\n      content: '';\n      position: absolute;\n      background-color: var(--primary-clr);\n      height: 100%;\n      width: 100%;\n      top: -30px;\n      left: -10px;\n      z-index: -1;\n    }\n  }\n\n  @media screen and (min-width: 760px) {\n    grid-template-columns: repeat(2, 1fr);\n    grid-gap: 1em;\n\n    .content {\n      order: 1;\n      display: grid;\n\n      & > :last-child {\n        align-self: self-end;\n      }\n    }\n\n    .imgs--container {\n      align-self: center;\n      justify-self: flex-end;\n    }\n  }\n  @media screen and (min-width: 1200px) {\n    grid-gap: 5em;\n    text-align: left;\n\n    .title--banner,\n    .title {\n      margin: 0;\n    }\n\n    .imgs--container {\n      &::before {\n        top: -30px;\n        left: -25px;\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var Styled = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].section(_templateObject());

var AboutContent = function AboutContent() {
  return __jsx(Styled, {
    className: "about--content max-width",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, __jsx("div", {
    className: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, __jsx(_ui_titleBanner__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "welcome",
    subtitle: "We care about your health",
    padd: "0 6.8%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }), __jsx("p", {
    className: "para",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem possimus distinctio ex. Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia quibusdam temporibus culpa dolore molestias blanditiis animi aspernatur ducimus quas obcaecati mollitia"), __jsx("p", {
    className: "para",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, "consequuntur sunt nisi. animi aspernatur ducimus quas obcaecati mollitia quibusdam temporibus culpa dolore consequuntur sunt nisi. animi aspernatur ducimus quas"), __jsx("p", {
    className: "para",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, "consequuntur sunt nisi. animi aspernatur ducimus quas obcaecati mollitia quibusdam temporibus culpa dolore consequuntur sunt nisi. animi aspernatur ducimus quas"), __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3___default.a, {
    top: true,
    delay: 500,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, __jsx(_ui_button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "contact us",
    toLink: "/contact",
    invert: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }))), __jsx("div", {
    className: "imgs--container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, __jsx("img", {
    src: "/homeHero.jpg",
    alt: "hemo hero",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (AboutContent);

/***/ })

})
//# sourceMappingURL=about.js.faaaae3120503900ee02.hot-update.js.map