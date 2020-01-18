webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/ui/Servicess/Services.jsx":
/*!**********************************************!*\
  !*** ./components/ui/Servicess/Services.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _titleBanner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../titleBanner */ "./components/ui/titleBanner.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../button */ "./components/ui/button.js");
/* harmony import */ var _servicesData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./servicesData */ "./components/ui/Servicess/servicesData.js");
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Card */ "./components/ui/Card.jsx");

var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\fiton\\components\\ui\\Servicess\\Services.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: relative;\n  background: url(bars.jpg);\n  background-size: cover;\n  background-position: left;\n  object-fit: cover;\n  min-height: 100vh;\n  clip-path: polygon(0 0, 100% 0, 100% calc(100% - 10vw), 0 100%);\n  padding: 5em 1em;\n  z-index: 1;\n  text-align: center;\n\n  &::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-color: ", ";\n    z-index: -1;\n  }\n\n  & > :last-child {\n    margin-top: 3em;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var Stlyed = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].section(_templateObject(), function (props) {
  return props.heroOpacity || 'rgba(0, 0, 0, 0.65)';
});

var Services = function Services() {
  return __jsx(Stlyed, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("div", {
    className: "max-width",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx(_titleBanner__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Services",
    subtitle: "STEP UP YOUR FITNESS",
    invert: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), __jsx("div", {
    className: "card--container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, _servicesData__WEBPACK_IMPORTED_MODULE_5__["default"].map(function (card, i) {
    return i <= 2 && __jsx(_Card__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: card.id,
      data: card,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    });
  })), __jsx(_button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "view more",
    toLink: "/services",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Services);

/***/ })

})
//# sourceMappingURL=index.js.aca6b4ceb66eb6a798ac.hot-update.js.map