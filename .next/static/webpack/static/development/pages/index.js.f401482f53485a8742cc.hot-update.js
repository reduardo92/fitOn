webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/ui/membershipCard.jsx":
/*!******************************************!*\
  !*** ./components/ui/membershipCard.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./button */ "./components/ui/button.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\fiton\\components\\ui\\membershipCard.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: relative;\n  width: 180px;\n  height: 450px;\n  border: 2px solid var(--primary-clr);\n  display: grid;\n  padding: 0 0.5em;\n  justify-items: center;\n  /* padding: 8em 1em; */\n\n  .card--title {\n    color: ", ";\n    font-weight: bold;\n    align-self: center;\n    font-size: 1.75rem;\n\n    .month {\n      display: block;\n      color: ", ";\n      font-weight: normal;\n      font-size: 1rem;\n    }\n  }\n\n  .card--packages {\n    color: var(--second-clr);\n    font-weight: bold;\n    text-transform: uppercase;\n    text-align: center;\n    align-self: flex-end;\n\n    &__item {\n      color: ", ";\n      text-align: center;\n      margin-bottom: 1.5em;\n    }\n\n    .line {\n      width: 50px;\n      height: 9px;\n      background-color: var(--primary-clr);\n      margin: 0 auto;\n    }\n  }\n\n  .button {\n    text-transform: uppercase;\n    margin-bottom: 1em;\n    align-self: center;\n    color: var(--second-clr);\n    background-color: var(--primary-clr);\n    padding: 0.8em 1em;\n    font-weight: bold;\n    border-radius: 5px;\n    font-size: 0.9rem;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var Styled = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject(), function (props) {
  return props.invert ? 'var(--second-clr)' : 'var(--white-clr)';
}, function (props) {
  return props.invert ? 'var(--second-clr)' : 'var(--white-clr)';
}, function (props) {
  return props.invert ? 'var(--second-clr)' : 'var(--white-clr)';
});

var MembershipCard = function MembershipCard(_ref) {
  var _ref$data = _ref.data,
      id = _ref$data.id,
      price = _ref$data.price,
      included = _ref$data.included;
  return __jsx(Styled, {
    className: "card--membership",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx("h3", {
    className: "card--title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "$", price, " ", __jsx("span", {
    className: "month",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "/month")), __jsx("ul", {
    className: "card--packages",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, included.map(function (item, i) {
    return __jsx("li", {
      key: i,
      className: "card--packages__item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, item === '-' ? __jsx("div", {
      className: "line",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }) : item);
  })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/cart",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, __jsx("a", {
    className: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, "choose plan")));
};

/* harmony default export */ __webpack_exports__["default"] = (MembershipCard);

/***/ })

})
//# sourceMappingURL=index.js.f401482f53485a8742cc.hot-update.js.map