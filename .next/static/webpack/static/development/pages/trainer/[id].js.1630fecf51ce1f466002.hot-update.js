webpackHotUpdate("static\\development\\pages\\trainer\\[id].js",{

/***/ "./pages/trainer/[id].js":
/*!*******************************!*\
  !*** ./pages/trainer/[id].js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_ui_meetOurTeam_trainers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/ui/meetOurTeam/trainers */ "./components/ui/meetOurTeam/trainers.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/ui/button */ "./components/ui/button.js");
/* harmony import */ var react_reveal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-reveal */ "./node_modules/react-reveal/index.js");
/* harmony import */ var react_reveal__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_reveal__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/layout */ "./components/layout.js");
/* harmony import */ var _components_ui_banner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/ui/banner */ "./components/ui/banner.js");
/* harmony import */ var _components_ui_hero__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/ui/hero */ "./components/ui/hero.js");


var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\fiton\\pages\\trainer\\[id].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  padding: 5em 1em;\n  text-align: center;\n\n  .imgs--container {\n    position: relative;\n    position: relative;\n    transition: var(--ease--in--out--02s);\n    max-width: 440px;\n    width: 100%;\n    height: 500px;\n    margin: 0 auto;\n\n    img {\n      object-fit: cover;\n      height: 500px;\n    }\n\n    &::before {\n      content: '';\n      position: absolute;\n      background-color: var(--primary-clr);\n      height: 100%;\n      width: 100%;\n      top: -30px;\n      left: -10px;\n      z-index: -1;\n    }\n  }\n\n  .content {\n    display: grid;\n    justify-items: center;\n  }\n  .name {\n    font-weight: bold;\n    text-transform: uppercase;\n    text-align: center;\n    margin-top: 1em;\n    color: var(--primary-clr);\n    font-size: 1.5rem;\n    text-align: center;\n    span {\n      display: block;\n      color: var(--second-clr);\n      font-size: 1.3rem;\n    }\n  }\n\n  .para {\n    max-width: 600px;\n    margin: 0 auto 2em;\n    align-self: center;\n    justify-self: center;\n  }\n\n  .button {\n    align-self: end;\n  }\n\n  @media screen and (min-width: 1280px) {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    padding: 5em 5vw;\n\n    .imgs--container {\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}









var Styled = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].section(_templateObject());

var Trainer = function Trainer(_ref) {
  var trainer = _ref.trainer;
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, __jsx(_components_ui_hero__WEBPACK_IMPORTED_MODULE_10__["default"], {
    img: "/secondBg.jpg",
    heroSize: "calc(100vh - 40vh)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx(_components_ui_banner__WEBPACK_IMPORTED_MODULE_9__["default"], {
    bannerTitle: "trainer",
    btnTwo: "classes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  })), __jsx(Styled, {
    className: "trainer max-width",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx("div", {
    className: "imgs--container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, __jsx("img", {
    src: trainer[0].img,
    alt: trainer[0].title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  })), __jsx("div", {
    className: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, __jsx("h1", {
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, trainer[0].title, __jsx("span", {
    className: "subtitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, trainer[0].subtitle)), __jsx("p", {
    className: "para",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, trainer[0].text), __jsx(react_reveal__WEBPACK_IMPORTED_MODULE_7___default.a, {
    top: true,
    delay: 500,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, __jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: "back",
    toLink: "/team",
    invert: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  })))));
};

Trainer.getInitialProps = function _callee(ctx) {
  var trainer;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          trainer = _components_ui_meetOurTeam_trainers__WEBPACK_IMPORTED_MODULE_4__["default"].filter(function (item) {
            return item.id === ctx.query.id;
          });
          return _context.abrupt("return", {
            trainer: trainer
          });

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Trainer);

/***/ })

})
//# sourceMappingURL=[id].js.1630fecf51ce1f466002.hot-update.js.map