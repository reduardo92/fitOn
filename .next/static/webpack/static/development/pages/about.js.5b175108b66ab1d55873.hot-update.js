webpackHotUpdate("static\\development\\pages\\about.js",{

/***/ "./components/ui/carousel/carousel.jsx":
/*!*********************************************!*\
  !*** ./components/ui/carousel/carousel.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/values */ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _brainhubeu_react_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @brainhubeu/react-carousel */ "./node_modules/@brainhubeu/react-carousel/lib/react-carousel.js");
/* harmony import */ var _brainhubeu_react_carousel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_brainhubeu_react_carousel__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../context/StateContext */ "./components/context/StateContext.js");


var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\fiton\\components\\ui\\carousel\\carousel.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  width: 100%;\n  height: 300px;\n\n  ul {\n    display: flex;\n    li {\n      flex-shrink: 0;\n      height: 300px;\n      position: relative;\n      z-index: 1;\n\n      &::before {\n        content: '';\n        position: absolute;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        background-color: ", ";\n      }\n\n      img {\n        height: 100%;\n        object-fit: cover;\n      }\n    }\n  }\n\n  @media screen and (min-width: 760px) {\n    /* height: 350px; */\n\n    ul {\n      li {\n        /* height: 350px; */\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var Styled = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].section(_templateObject(), function (props) {
  return props.heroOpacity || 'rgba(0, 0, 0, 0.65)';
});

var Carousell = function Carousell() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_context_StateContext__WEBPACK_IMPORTED_MODULE_5__["default"]),
      setCarosuel = _useContext.setCarosuel;

  var imgs = {
    0: '/man-carrying.jpg',
    1: '/bars.jpg',
    2: '/black-exercise.jpg',
    3: '/close-up-of.jpg',
    4: '/free.jpg',
    5: '/group-of-people.jpg',
    6: '/gymnastic.jpg',
    7: '/heavyBall.jpg',
    8: '/hitCardio.jpg',
    9: '/homeHero.jpg',
    10: '/boxing.jpg',
    11: '/kettebell.jpg',
    12: '/man-lying.jpg',
    13: '/people.jpg',
    14: '/person-carrying.jpg',
    15: '/secondBg.jpg',
    16: '/slide_2.jpg',
    17: '/tyre-push.jpg'
  };
  return __jsx(Styled, {
    className: "carousel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, __jsx(_brainhubeu_react_carousel__WEBPACK_IMPORTED_MODULE_3___default.a, {
    slidesPerPage: setCarosuel(),
    infinite: true,
    autoPlay: 5000,
    animationSpeed: 3000,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default()(imgs).map(function (img, i) {
    return __jsx("img", {
      key: i,
      src: img,
      alt: "img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    });
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Carousell);

/***/ })

})
//# sourceMappingURL=about.js.5b175108b66ab1d55873.hot-update.js.map