webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/ui/membershipPlans/MembershipPlans.jsx":
/*!***********************************************************!*\
  !*** ./components/ui/membershipPlans/MembershipPlans.jsx ***!
  \***********************************************************/
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
/* harmony import */ var _memeberships__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./memeberships */ "./components/ui/membershipPlans/memeberships.js");
/* harmony import */ var _membershipCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../membershipCard */ "./components/ui/membershipCard.jsx");

var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\fiton\\components\\ui\\membershipPlans\\MembershipPlans.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: relative;\n  background: url(roomGym.jpg);\n  background-size: cover;\n  background-position: left;\n  object-fit: cover;\n  min-height: 100vh;\n  padding: 9em 1em;\n  z-index: 1;\n  text-align: center;\n  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 10vw));\n\n  &::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-color: ", ";\n    z-index: -1;\n  }\n\n  .card--container {\n    max-width: 600px;\n    margin: 4em auto;\n    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n    grid-gap: 3em;\n\n    & > :last-child {\n      grid-column: auto;\n    }\n  }\n\n  @media screen and (min-width: 1200px) {\n    .card--container {\n      max-width: 900px;\n      grid-gap: 0.1em;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var Stlyed = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].section(_templateObject(), function (props) {
  return props.heroOpacity || 'rgba(0, 0, 0, 0.65)';
});

var MembershipPlans = function MembershipPlans() {
  return __jsx(Stlyed, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx("div", {
    className: "max-width",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx(_titleBanner__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "pricing",
    subtitle: "membership plans",
    invert: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), __jsx("div", {
    className: "card--container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, _memeberships__WEBPACK_IMPORTED_MODULE_5__["default"].map(function (items, i) {
    return __jsx(_membershipCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: i,
      data: items,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    });
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (MembershipPlans);

/***/ })

})
//# sourceMappingURL=index.js.fb224f82fd6ac2303a09.hot-update.js.map