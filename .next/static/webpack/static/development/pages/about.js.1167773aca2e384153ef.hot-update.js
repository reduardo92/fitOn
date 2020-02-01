webpackHotUpdate("static\\development\\pages\\about.js",{

/***/ "./components/ui/Testimonies/Testimonies.jsx":
/*!***************************************************!*\
  !*** ./components/ui/Testimonies/Testimonies.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/StateContext */ "./components/context/StateContext.js");
/* harmony import */ var _brainhubeu_react_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @brainhubeu/react-carousel */ "./node_modules/@brainhubeu/react-carousel/lib/react-carousel.js");
/* harmony import */ var _brainhubeu_react_carousel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_brainhubeu_react_carousel__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Barbell__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Barbell */ "./components/ui/Barbell.jsx");
/* harmony import */ var _testimoniesData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./testimoniesData */ "./components/ui/Testimonies/testimoniesData.js");
/* harmony import */ var _titleBanner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../titleBanner */ "./components/ui/titleBanner.js");
/* harmony import */ var _TestimoniesCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./TestimoniesCard */ "./components/ui/Testimonies/TestimoniesCard.jsx");

var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\fiton\\components\\ui\\Testimonies\\Testimonies.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  padding: 5em 1em;\n  text-align: center;\n\n  .barbell {\n    margin: 0;\n    margin-top: 1em;\n  }\n\n  .container {\n    display: flex;\n  }\n\n  .card--tesimonies {\n    flex-shrink: 1;\n  }\n\n  .carousel--container {\n    width: 100%;\n    height: 430px;\n  }\n\n  .BrainhubCarousel__trackContainer {\n    margin-top: 5em;\n    ul {\n      display: flex;\n      flex-wrap: wrap;\n    }\n\n    li {\n      flex: 45%;\n    }\n  }\n  .barbell {\n    max-width: 500px;\n    margin: 0 auto;\n  }\n\n  @media screen and (min-width: 768px) {\n    .carousel--container {\n      height: 300px;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}









var Styled = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].section(_templateObject());

var Testimonies = function Testimonies() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_StateContext__WEBPACK_IMPORTED_MODULE_2__["default"]),
      setCarosuel = _useContext.setCarosuel;

  return __jsx(Styled, {
    className: "testimoneis",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx(_titleBanner__WEBPACK_IMPORTED_MODULE_7__["default"], {
    title: "testimonies",
    subtitle: "what our memebers say",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }), __jsx(_Barbell__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }), __jsx("div", {
    className: "carousel--container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx(_brainhubeu_react_carousel__WEBPACK_IMPORTED_MODULE_3___default.a, {
    slidesPerPage: setCarosuel(2, 3),
    infinite: true,
    centered: true,
    autoPlay: 5000,
    animationSpeed: 2000,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, _testimoniesData__WEBPACK_IMPORTED_MODULE_6__["default"].map(function (item) {
    return __jsx(_TestimoniesCard__WEBPACK_IMPORTED_MODULE_8__["default"], {
      key: item.id,
      data: item,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    });
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Testimonies);

/***/ })

})
//# sourceMappingURL=about.js.1167773aca2e384153ef.hot-update.js.map