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

var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\fiton\\components\\pricing\\PricingContent.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  padding: 4em 1em;\n\n  .card--container {\n    max-width: 600px;\n    margin: 4em auto;\n    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n    grid-gap: 3em;\n\n    & > :last-child {\n      grid-column: auto;\n    }\n  }\n\n  @media screen and (min-width: 1200px) {\n    .card--container {\n      max-width: 900px;\n      grid-gap: 0.1em;\n    }\n  }\n\n  @media screen and (min-width: 768px) {\n    & > :first-child {\n      width: 90%;\n      margin: 0 auto;\n    }\n  }\n  @media screen and (min-width: 1280px) {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    justify-content: center;\n\n    & > :first-child {\n      align-self: end;\n      margin: 0;\n    }\n\n    .title--banner {\n      margin-left: 9em;\n    }\n\n    .card--container {\n      grid-column: 1 / 3;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var Styled = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].section(_templateObject());

var PricingContent = function PricingContent() {
  return __jsx(Styled, {
    classname: "pricing--content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx(_ui_Barbell__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }), __jsx(_ui_titleBanner__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "pricing",
    subtitle: "membership plans",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }), __jsx("div", {
    className: "card--container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, memerships.map(function (items, i) {
    return __jsx(_ui_MembershipCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: i,
      data: items,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    });
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (PricingContent);

/***/ }),

/***/ "./pages/pricing.js":
/*!**************************!*\
  !*** ./pages/pricing.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _components_ui_mapBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ui/mapBox */ "./components/ui/mapBox.jsx");
/* harmony import */ var _components_ui_hero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ui/hero */ "./components/ui/hero.js");
/* harmony import */ var _components_ui_scheduleWeek__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ui/scheduleWeek */ "./components/ui/scheduleWeek.jsx");
/* harmony import */ var _components_ui_banner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ui/banner */ "./components/ui/banner.js");
/* harmony import */ var _components_ui_meetOurTeam_MeetOurTeam__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/ui/meetOurTeam/MeetOurTeam */ "./components/ui/meetOurTeam/MeetOurTeam.jsx");
/* harmony import */ var _components_ui_PersonalTrainerBanner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/ui/PersonalTrainerBanner */ "./components/ui/PersonalTrainerBanner.jsx");
/* harmony import */ var _components_ui_Testimonies_Testimonies__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/ui/Testimonies/Testimonies */ "./components/ui/Testimonies/Testimonies.jsx");
/* harmony import */ var _components_ui_carousel_carousel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/ui/carousel/carousel */ "./components/ui/carousel/carousel.jsx");
/* harmony import */ var _components_ui_membershipPlans_MembershipPlans__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/ui/membershipPlans/MembershipPlans */ "./components/ui/membershipPlans/MembershipPlans.jsx");
/* harmony import */ var _components_pricing_PricingContent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/pricing/PricingContent */ "./components/pricing/PricingContent.jsx");
var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\fiton\\pages\\pricing.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












var pricing = function pricing() {
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx(_components_ui_hero__WEBPACK_IMPORTED_MODULE_3__["default"], {
    img: "/roomGym.jpg",
    heroSize: "calc(100vh - 40vh)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx(_components_ui_banner__WEBPACK_IMPORTED_MODULE_5__["default"], {
    bannerTitle: "pricing",
    btnTwo: "contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  })), __jsx(_components_pricing_PricingContent__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), __jsx(_components_ui_scheduleWeek__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), __jsx(_components_ui_meetOurTeam_MeetOurTeam__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), __jsx(_components_ui_PersonalTrainerBanner__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), __jsx(_components_ui_Testimonies_Testimonies__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), __jsx(_components_ui_mapBox__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), __jsx(_components_ui_carousel_carousel__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (pricing);

/***/ })

})
//# sourceMappingURL=pricing.js.6461a8c4afc6c332edc2.hot-update.js.map