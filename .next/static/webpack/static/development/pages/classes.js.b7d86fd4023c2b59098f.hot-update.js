webpackHotUpdate("static\\development\\pages\\classes.js",{

/***/ "./components/ui/MembershipCard.jsx":
/*!******************************************!*\
  !*** ./components/ui/MembershipCard.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\fiton\\components\\ui\\MembershipCard.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: relative;\n  width: 200px;\n  height: 450px;\n  border: 2px solid var(--primary-clr);\n  display: grid;\n  padding: 0 0.5em;\n  justify-items: center;\n  /* padding: 8em 1em; */\n\n  .card--title {\n    color: ", ";\n    font-weight: bold;\n    align-self: center;\n    font-size: 1.75rem;\n\n    .month {\n      display: block;\n      color: ", ";\n      font-weight: normal;\n      font-size: 1rem;\n    }\n  }\n\n  .card--packages {\n    color: var(--second-clr);\n    font-weight: bold;\n    text-transform: uppercase;\n    text-align: center;\n    align-self: flex-end;\n\n    &__item {\n      color: ", ";\n      text-align: center;\n      margin-bottom: 1.5em;\n    }\n\n    .line {\n      width: 50px;\n      height: 9px;\n      background-color: var(--primary-clr);\n      margin: 0 auto;\n    }\n  }\n\n  .button {\n    text-transform: uppercase;\n    margin-bottom: 1em;\n    align-self: center;\n    color: var(--second-clr);\n    background-color: var(--primary-clr);\n    padding: 0.8em 1em;\n    font-weight: bold;\n    border: 2px solid var(--primary-clr);\n    border-radius: 5px;\n    font-size: 0.9rem;\n    transition: var(--ease--in--out--02s);\n\n    &:hover,\n    &:focus {\n      background-color: transparent;\n      color: var(--white-clr);\n    }\n  }\n"]);

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
      lineNumber: 74
    },
    __self: this
  }, __jsx("h3", {
    className: "card--title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, "$", price, " ", __jsx("span", {
    className: "month",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, "/month")), __jsx("ul", {
    className: "card--packages",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, included.map(function (item, i) {
    return __jsx("li", {
      key: i,
      className: "card--packages__item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, item === '-' ? __jsx("div", {
      className: "line",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }) : item);
  })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/cart",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx("a", {
    className: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, "choose plan")));
};

/* harmony default export */ __webpack_exports__["default"] = (MembershipCard);

/***/ }),

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
/* harmony import */ var _memeberships__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./memeberships */ "./components/ui/membershipPlans/memeberships.js");
/* harmony import */ var _MembershipCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../MembershipCard */ "./components/ui/MembershipCard.jsx");

var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\fiton\\components\\ui\\membershipPlans\\MembershipPlans.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: relative;\n  background: url(roomGym.jpg);\n  background-size: cover;\n  background-position: left;\n  object-fit: cover;\n  min-height: 100vh;\n  padding: 9em 1em;\n  z-index: 1;\n  text-align: center;\n  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 10vw));\n\n  &::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-color: ", ";\n    z-index: -1;\n  }\n\n  .card--container {\n    max-width: 600px;\n    margin: 4em auto;\n    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n    grid-gap: 3em;\n\n    & > :last-child {\n      grid-column: auto;\n    }\n  }\n\n  @media screen and (min-width: 1200px) {\n    .card--container {\n      max-width: 900px;\n      grid-gap: 0.1em;\n    }\n  }\n\n  @media screen and (min-width: 1024px) {\n    min-height: 85vh;\n    clip-path: polygon(0 0, 100% 0, 100% calc(100% - 5vw), 0 100%);\n  }\n"]);

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
      lineNumber: 55
    },
    __self: this
  }, __jsx("div", {
    className: "max-width",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx(_titleBanner__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "pricing",
    subtitle: "membership plans",
    invert: true,
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
  }, _memeberships__WEBPACK_IMPORTED_MODULE_4__["default"].map(function (items, i) {
    return __jsx(_MembershipCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: i,
      data: items,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    });
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (MembershipPlans);

/***/ }),

/***/ "./components/ui/membershipPlans/memeberships.js":
/*!*******************************************************!*\
  !*** ./components/ui/membershipPlans/memeberships.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);

var memerships = [{
  id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
  price: '10',
  included: ['gym', '24/7 Access', '-', '-']
}, {
  id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
  price: '20',
  included: ['gym', '24/7 Access', '5 clases/month', '-']
}, {
  id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
  price: '30',
  included: ['gym', '24/7 Access', '10 clases/month', '-']
}, {
  id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
  price: '50',
  included: ['gym', '24/7 Access', 'unlimated', 'one on one']
}];
/* harmony default export */ __webpack_exports__["default"] = (memerships);

/***/ }),

/***/ "./pages/classes.js":
/*!**************************!*\
  !*** ./pages/classes.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _components_home_about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/home/about */ "./components/home/about.jsx");
/* harmony import */ var _components_ui_mapBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ui/mapBox */ "./components/ui/mapBox.jsx");
/* harmony import */ var _components_ui_hero__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ui/hero */ "./components/ui/hero.js");
/* harmony import */ var _components_ui_scheduleWeek__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ui/scheduleWeek */ "./components/ui/scheduleWeek.jsx");
/* harmony import */ var _components_ui_banner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/ui/banner */ "./components/ui/banner.js");
/* harmony import */ var _components_ui_meetOurTeam_MeetOurTeam__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/ui/meetOurTeam/MeetOurTeam */ "./components/ui/meetOurTeam/MeetOurTeam.jsx");
/* harmony import */ var _components_ui_PersonalTrainerBanner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/ui/PersonalTrainerBanner */ "./components/ui/PersonalTrainerBanner.jsx");
/* harmony import */ var _components_ui_Testimonies_Testimonies__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/ui/Testimonies/Testimonies */ "./components/ui/Testimonies/Testimonies.jsx");
/* harmony import */ var _components_ui_carousel_carousel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/ui/carousel/carousel */ "./components/ui/carousel/carousel.jsx");
/* harmony import */ var _components_about_AboutContent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/about/AboutContent */ "./components/about/AboutContent.jsx");
/* harmony import */ var _components_ui_membershipPlans_MembershipPlans__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/ui/membershipPlans/MembershipPlans */ "./components/ui/membershipPlans/MembershipPlans.jsx");
var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\fiton\\pages\\classes.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;













var classes = function classes() {
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx(_components_ui_hero__WEBPACK_IMPORTED_MODULE_4__["default"], {
    img: "/bars.jpg",
    heroSize: "calc(100vh - 40vh)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx(_components_ui_banner__WEBPACK_IMPORTED_MODULE_6__["default"], {
    bannerTitle: "classes",
    btnTwo: "team",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  })), __jsx(_components_about_AboutContent__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), __jsx(_components_ui_membershipPlans_MembershipPlans__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), __jsx(_components_ui_meetOurTeam_MeetOurTeam__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), __jsx(_components_ui_scheduleWeek__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), __jsx(_components_ui_Testimonies_Testimonies__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), __jsx(_components_ui_mapBox__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), __jsx(_components_ui_carousel_carousel__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (classes);

/***/ })

})
//# sourceMappingURL=classes.js.b7d86fd4023c2b59098f.hot-update.js.map