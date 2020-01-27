webpackHotUpdate("static\\development\\pages\\classes.js",{

/***/ "./components/classes/ClassesCard.jsx":
/*!********************************************!*\
  !*** ./components/classes/ClassesCard.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\fiton\\components\\classes\\ClassesCard.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: relative;\n  max-width: 350px;\n  margin: 0 auto;\n\n  .classes--card--img {\n    position: relative;\n    transition: var(--ease--in--out--02s);\n    width: 100%;\n    height: 300px;\n    img {\n      object-fit: cover;\n      height: 100%;\n    }\n\n    &::before {\n      content: '';\n      position: absolute;\n      background-color: var(--primary-clr);\n      height: 100%;\n      width: 100%;\n      top: 12px;\n      /* left: 0; */\n      right: -6px;\n      z-index: -1;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var Styled = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());

var ClassesCard = function ClassesCard(_ref) {
  var _ref$data = _ref.data,
      img = _ref$data.img,
      title = _ref$data.title;
  return __jsx(Styled, {
    className: "classes--card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("div", {
    className: "classes--card--img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("img", {
    src: img,
    alt: title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  })), __jsx("h3", {
    className: "classes--card--title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, title));
};

/* harmony default export */ __webpack_exports__["default"] = (ClassesCard);

/***/ }),

/***/ "./components/classes/ClassesContent.jsx":
/*!***********************************************!*\
  !*** ./components/classes/ClassesContent.jsx ***!
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
/* harmony import */ var _classesData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./classesData */ "./components/classes/classesData.js");
/* harmony import */ var _ClassesCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ClassesCard */ "./components/classes/ClassesCard.jsx");

var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\fiton\\components\\classes\\ClassesContent.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  padding: 4em 1em;\n\n  @media screen and (min-width: 768px) {\n    & > :first-child {\n      width: 90%;\n      margin: 0 auto;\n    }\n  }\n  @media screen and (min-width: 1280px) {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    justify-content: center;\n\n    & > :first-child {\n      align-self: end;\n      margin: 0;\n    }\n\n    .title--banner {\n      margin-left: 9em;\n    }\n\n    .card--container {\n      grid-column: 1 / 3;\n    }\n\n    & > :last-child {\n      margin-top: 2em;\n      justify-self: center;\n      grid-column: 1/3;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var Styled = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].section(_templateObject());

var ClassesContent = function ClassesContent() {
  return __jsx(Styled, {
    className: "classes--content max-width",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx(_ui_Barbell__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), __jsx(_ui_titleBanner__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "trainers",
    subtitle: "meet our team",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), __jsx("div", {
    className: "card--container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, _classesData__WEBPACK_IMPORTED_MODULE_5__["default"].map(function (item, i) {
    return __jsx(_ClassesCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: i,
      data: item,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    });
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ClassesContent);

/***/ }),

/***/ "./components/classes/classesData.js":
/*!*******************************************!*\
  !*** ./components/classes/classesData.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);

var classesData = [{
  id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
  title: 'Kettlebell',
  img: '/kettebell.jpg'
}, {
  id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
  title: 'OLYMPIC WEIGHTLIFTING',
  img: '/olymipic.jpg'
}, {
  id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
  title: 'CrossFit',
  img: '/gymnastic.jpg'
}, {
  id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
  title: 'Open lifting',
  img: '/free.jpg'
}, {
  id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
  title: 'yoga',
  img: '/yoga.jpg'
}, {
  id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
  title: 'boxing',
  img: '/boxing.jpg'
}, {
  id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
  title: 'begginer training',
  img: '/begginerTraining.png'
}, {
  id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
  title: 'hit cardio',
  img: '/hitCardio.jpg'
}, {
  id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
  title: 'strenght training',
  img: '/strenghtTraining.jpg'
}];
/* harmony default export */ __webpack_exports__["default"] = (classesData);

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
/* harmony import */ var _components_ui_Testimonies_Testimonies__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/ui/Testimonies/Testimonies */ "./components/ui/Testimonies/Testimonies.jsx");
/* harmony import */ var _components_ui_carousel_carousel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/ui/carousel/carousel */ "./components/ui/carousel/carousel.jsx");
/* harmony import */ var _components_about_AboutContent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/about/AboutContent */ "./components/about/AboutContent.jsx");
/* harmony import */ var _components_ui_membershipPlans_MembershipPlans__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/ui/membershipPlans/MembershipPlans */ "./components/ui/membershipPlans/MembershipPlans.jsx");
/* harmony import */ var _components_classes_ClassesContent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/classes/ClassesContent */ "./components/classes/ClassesContent.jsx");
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
  })), __jsx(_components_classes_ClassesContent__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), __jsx(_components_about_AboutContent__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), __jsx(_components_ui_membershipPlans_MembershipPlans__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), __jsx(_components_ui_meetOurTeam_MeetOurTeam__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), __jsx(_components_ui_scheduleWeek__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), __jsx(_components_ui_Testimonies_Testimonies__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), __jsx(_components_ui_mapBox__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), __jsx(_components_ui_carousel_carousel__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (classes);

/***/ })

})
//# sourceMappingURL=classes.js.c72f6f62750e04e5e2f3.hot-update.js.map