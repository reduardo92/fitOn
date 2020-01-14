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
/* harmony import */ var _servicesData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./servicesData */ "./components/ui/Servicess/servicesData.js");

var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\fiton\\components\\ui\\Servicess\\Services.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  background: url(bars.jpg);\n  background-size: cover;\n  background-position: no-repeat;\n  object-fit: cover;\n  height: 100%;\n  padding: 5em 2em;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var Stlyed = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].section(_templateObject());

var Services = function Services() {
  return __jsx(Stlyed, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx(_titleBanner__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Services",
    subtitle: "STEP UP YOUR FITNESS",
    invert: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), __jsx("div", {
    className: "card--container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, _servicesData__WEBPACK_IMPORTED_MODULE_4__["default"].map(function (_ref, i) {
    var id = _ref.id,
        title = _ref.title,
        subtitle = _ref.subtitle,
        img = _ref.img;
    return i <= 2 && __jsx("div", {
      key: id,
      className: "card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, __jsx("div", {
      className: "card--img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, __jsx("img", {
      src: img,
      alt: title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    })), __jsx("div", {
      className: "card--body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, __jsx("h3", {
      className: "card--body__title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, title), __jsx("div", {
      className: "card--body__para",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, subtitle)));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Services);

/***/ })

})
//# sourceMappingURL=index.js.03d81488f262987e903a.hot-update.js.map