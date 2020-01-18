webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/ui/hero.js":
/*!*******************************!*\
  !*** ./components/ui/hero.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\fiton\\components\\ui\\hero.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: relative;\n  background-image: url(", ");\n  background-position: center;\n  background-size: cover;\n  object-fit: cover;\n  min-height: ", ";\n  text-align: center;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-justify-content: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  z-index: 1;\n  clip-path: polygon(0 0 ,100% 0, 100% calc(100% - 10vw), 0 100%);\n  /* margin-bottom: -10vw; */\n\n  &::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-color: ", ";\n    z-index: -1;\n  }\n\n\n\n  /* @media screen and (min-width: 768px) {\n    min-height: ", ";\n  }\n  @media screen and (min-width: 1024px) {\n    min-height: ", ";\n  } */\n\n  @media screen and (min-width: 1024px) {\n    min-height: ", ";\n    clip-path: polygon(0 0 ,100% 0, 100% calc(100% - 10vw), 0 100%);\n  margin-bottom: -10vw;\n\n\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var Styled = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject(), function (props) {
  return props.img;
}, function (props) {
  return props.heroSize ? '100vh' : 'calc(100vh - 5vh)';
}, function (props) {
  return props.heroOpacity || 'rgba(0, 0, 0, 0.65)';
}, function (props) {
  return props.heroSize ? '100vh' : 'calc(100vh - 70vh)';
}, function (props) {
  return props.heroSize ? '100vh' : 'calc(100vh - 50vh)';
}, function (props) {
  return props.heroSize ? '100vh' : 'calc(100vh - 0vh)';
});

var hero = function hero(_ref) {
  var _ref$img = _ref.img,
      img = _ref$img === void 0 ? '/homeHero.jpg' : _ref$img,
      heroSize = _ref.heroSize,
      heroOpacity = _ref.heroOpacity,
      children = _ref.children;
  return __jsx(Styled, {
    className: "hero",
    img: img,
    heroSize: heroSize,
    heroOpacity: heroOpacity,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (hero);

/***/ })

})
//# sourceMappingURL=index.js.292c5ac60f4e88b9aff6.hot-update.js.map