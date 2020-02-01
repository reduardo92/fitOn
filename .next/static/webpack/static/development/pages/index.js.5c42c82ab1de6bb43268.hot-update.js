webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/home/about.jsx":
/*!***********************************!*\
  !*** ./components/home/about.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _ui_titleBanner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/titleBanner */ "./components/ui/titleBanner.js");
/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/button */ "./components/ui/button.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-reveal/Fade */ "./node_modules/react-reveal/Fade.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\fiton\\components\\home\\about.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  padding: 3em 5vw 4em;\n  text-align: center;\n  display: grid;\n  grid-gap: 4em;\n  justify-items: center;\n\n  .title--banner {\n    margin-bottom: 1.3em;\n  }\n\n  .para {\n    margin-bottom: 1em;\n  }\n\n  .button {\n    margin-top: 1em;\n  }\n\n  .imgs--container {\n    display: grid;\n    grid-gap: 1em;\n    gap: 1em;\n  }\n\n  @media screen and (min-width: 760px) {\n    grid-template-columns: repeat(2, 1fr);\n    grid-gap: 1em;\n\n    .content {\n      order: 1;\n      display: grid;\n\n      & > :last-child {\n        align-self: self-end;\n      }\n    }\n\n    .imgs--container {\n      grid-template-columns: repeat(2, 1fr);\n      /* align-content: center; */\n      grid-gap: 0.5em;\n      gap: 0.5em;\n      max-width: 700px;\n    }\n\n    .top {\n      grid-column: 1 /3;\n    }\n\n    .img {\n      align-self: stretch;\n      object-fit: cover;\n    }\n  }\n  @media screen and (min-width: 1200px) {\n    grid-gap: 5em;\n    text-align: left;\n\n    .title--banner,\n    .title {\n      margin: 0;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var Styled = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].section(_templateObject());

var About = function About() {
  return __jsx(Styled, {
    className: "home--about max-width",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx("div", {
    className: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, __jsx(_ui_titleBanner__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "welcome",
    subtitle: "why choose us?",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }), __jsx("p", {
    className: "para",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem possimus distinctio ex. Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia quibusdam temporibus culpa dolore possimus distinctio ex. Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia quibusdam temporibus culpa dolore."), __jsx("p", {
    className: "para",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, "mollitia quibusdam temporibus culpa dolore consequuntur sunt nisi consequuntur sunt nisi. animi aspernatur ducimus quas obcaecati mollitia quibusdam temporibus culpa dolore consequuntur sunt nisi."), __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_5___default.a, {
    top: true,
    delay: 500,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, __jsx(_ui_button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "read more",
    toLink: "/about",
    invert: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }))), __jsx("div", {
    className: "imgs--container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, __jsx("img", {
    src: "/strenght.jpg",
    alt: "img",
    className: "img top",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }), __jsx("img", {
    src: "/secondBg.jpg",
    alt: "img",
    className: "img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }), __jsx("img", {
    src: "/heavyBall.jpg",
    alt: "img",
    className: "img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./node_modules/react-reveal/Bounce.js":
false,

/***/ "./node_modules/react-reveal/Flip.js":
false,

/***/ "./node_modules/react-reveal/LightSpeed.js":
false,

/***/ "./node_modules/react-reveal/Reveal.js":
false,

/***/ "./node_modules/react-reveal/Roll.js":
false,

/***/ "./node_modules/react-reveal/Rotate.js":
false,

/***/ "./node_modules/react-reveal/Slide.js":
false,

/***/ "./node_modules/react-reveal/Zoom.js":
false,

/***/ "./node_modules/react-reveal/index.js":
false

})
//# sourceMappingURL=index.js.5c42c82ab1de6bb43268.hot-update.js.map