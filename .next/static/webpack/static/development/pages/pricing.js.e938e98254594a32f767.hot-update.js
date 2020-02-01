webpackHotUpdate("static\\development\\pages\\pricing.js",{

/***/ "./components/pricing/PricingContent.jsx":
/*!***********************************************!*\
  !*** ./components/pricing/PricingContent.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _ui_Barbell__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/Barbell */ "./components/ui/Barbell.jsx");
/* harmony import */ var _ui_titleBanner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/titleBanner */ "./components/ui/titleBanner.js");
/* harmony import */ var _ui_MembershipCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/MembershipCard */ "./components/ui/MembershipCard.jsx");
/* harmony import */ var _ui_membershipPlans_memeberships__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ui/membershipPlans/memeberships */ "./components/ui/membershipPlans/memeberships.js");

var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\fiton\\components\\pricing\\PricingContent.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  padding: 4em 1em;\n\n  & > :last-child {\n    grid-column: auto;\n  }\n\n  & > :last-child {\n    margin-top: 3em;\n  }\n\n  & > :first-child {\n    margin: 0 auto 1em;\n  }\n\n  .container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    max-width: 800px;\n    margin: 2em auto;\n  }\n\n  .card--membership {\n    margin: 2em 0.5em;\n  }\n\n  @media screen and (min-width: 768px) {\n    & > :first-child {\n      width: 90%;\n      margin: 0 auto;\n    }\n\n    .container {\n      flex-direction: row;\n    }\n  }\n\n  @media screen and (min-width: 1200px) {\n    .card--container {\n      max-width: 900px;\n      grid-gap: 0.1em;\n    }\n  }\n\n  @media screen and (min-width: 1280px) {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    justify-content: center;\n\n    & > :first-child {\n      align-self: end;\n      justify-self: center;\n      margin: 0;\n    }\n\n    .title--banner {\n      margin-left: 9em;\n    }\n\n    .card--container {\n      grid-column: 1 / 3;\n      max-width: 1300px;\n      grid-gap: 1em;\n      justify-items: center;\n      margin: 3em auto;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var Styled = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].section(_templateObject());

var PricingContent = function PricingContent() {
  return __jsx(Styled, {
    className: "pricing--content max-width",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, __jsx(_ui_Barbell__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }), __jsx(_ui_titleBanner__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "pricing",
    subtitle: "membership plans",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }), __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, _ui_membershipPlans_memeberships__WEBPACK_IMPORTED_MODULE_6__["default"].map(function (items, i) {
    return __jsx(_ui_MembershipCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: i,
      data: items,
      invert: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    });
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (PricingContent);

/***/ })

})
//# sourceMappingURL=pricing.js.e938e98254594a32f767.hot-update.js.map