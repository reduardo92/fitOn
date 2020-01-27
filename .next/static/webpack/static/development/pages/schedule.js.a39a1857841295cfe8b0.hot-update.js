webpackHotUpdate("static\\development\\pages\\schedule.js",{

/***/ "./components/ui/PersonalTrainerBanner.jsx":
/*!*************************************************!*\
  !*** ./components/ui/PersonalTrainerBanner.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-reveal/Fade */ "./node_modules/react-reveal/Fade.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./button */ "./components/ui/button.js");

var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\fiton\\components\\ui\\PersonalTrainerBanner.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: relative;\n  background-image: url(/platesbg.jpg);\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  object-fit: cover;\n  min-height: 75vw;\n  z-index: 1;\n  display: grid;\n  justify-items: center;\n  align-content: center;\n  padding: 2em;\n\n  &::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-color: rgba(0, 0, 0, 0.75);\n    z-index: -1;\n  }\n\n  .title--content {\n    padding: 0 1em;\n    text-align: center;\n    max-width: 500px;\n  }\n\n  .title {\n    span {\n      color: var(--primary-clr);\n    }\n  }\n\n  .img-line {\n    width: 100px;\n    margin: 1em auto;\n  }\n\n  .last--tab {\n    background-color: var(--primary-clr);\n\n    &:focus,\n    &:hover {\n      border-color: var(--primary-clr);\n      border: 2px solid var(--primary-clr);\n      color: var(--white-clr);\n      background-color: transparent;\n    }\n  }\n\n  @media screen and (min-width: 760px) {\n    min-height: 25vw;\n  }\n  @media screen and (min-width: 1100px) {\n    min-height: 12vw;\n    background-position: bottom;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var Styled = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].section(_templateObject());

var PersonalTrainerBanner = function PersonalTrainerBanner() {
  return __jsx(Styled, {
    className: "schedule--weeek",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, __jsx("div", {
    className: "title--content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, __jsx("h2", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "Do you need a ", __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "Personal Trainer?"), " Get in touch with us now."), __jsx("img", {
    src: "/yellowLine.png",
    alt: "yellow line",
    className: "img-line",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  })), __jsx(_button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "contact us",
    toLink: "/contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (PersonalTrainerBanner);

/***/ }),

/***/ "./components/ui/Schedule/Schedule.jsx":
/*!*********************************************!*\
  !*** ./components/ui/Schedule/Schedule.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Barbell__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Barbell */ "./components/ui/Barbell.jsx");
/* harmony import */ var _titleBanner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../titleBanner */ "./components/ui/titleBanner.js");
/* harmony import */ var _ScheduleTable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ScheduleTable */ "./components/ui/Schedule/ScheduleTable.jsx");

var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\fiton\\components\\ui\\Schedule\\Schedule.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  padding: 4em 1em;\n  text-align: center;\n  max-width: 1500px;\n  margin: 0 auto;\n\n  & > :last-child {\n    margin-top: 3em;\n  }\n\n  & > :first-child {\n    margin: 0 auto 1em;\n  }\n\n  @media screen and (min-width: 768px) {\n    & > :first-child {\n      width: 90%;\n      margin: 0 auto;\n    }\n  }\n  @media screen and (min-width: 1280px) {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    justify-content: center;\n\n    & > :first-child {\n      align-self: end;\n      margin: 0;\n    }\n\n    .title--banner {\n      margin-left: 9em;\n    }\n\n    .card--container {\n      grid-column: 1 / 3;\n    }\n\n    & > :last-child {\n      margin-top: 2em;\n      justify-self: center;\n      grid-column: 1/3;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var Styled = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].section(_templateObject());

var Schedule = function Schedule() {
  return __jsx(Styled, {
    className: "schedule",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx(_Barbell__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), __jsx(_titleBanner__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "schedule",
    subtitle: "timetable",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }), __jsx(_ScheduleTable__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Schedule);

/***/ }),

/***/ "./components/ui/Schedule/ScheduleCard.jsx":
/*!*************************************************!*\
  !*** ./components/ui/Schedule/ScheduleCard.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _scheduleData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scheduleData */ "./components/ui/Schedule/scheduleData.js");

var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\fiton\\components\\ui\\Schedule\\ScheduleCard.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 100%;\n  font-weight: bold;\n\n  .day {\n    text-transform: uppercase;\n    color: var(--white-clr);\n    padding: 0.8em 0.5em;\n    background-color: var(--second-clr);\n  }\n\n  .day--ul--li {\n    background-color: var(--primary-clr);\n    border-bottom: 1px solid rgba(0, 0, 0, 0.9);\n    width: 100%;\n    color: var(--second-clr);\n    height: 65px;\n    align-items: baseline;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    justify-items: center;\n    align-items: center;\n  }\n\n  @media screen and (min-width: 768px) {\n  }\n  @media screen and (min-width: 1280px) {\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var Styled = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());

var ScheduleCard = function ScheduleCard(_ref) {
  var day = _ref.day;
  return __jsx(Styled, {
    className: "card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("h3", {
    className: "day",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, day), __jsx("ul", {
    className: "day--ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, _scheduleData__WEBPACK_IMPORTED_MODULE_3__["default"][day].map(function (item) {
    return __jsx("li", {
      key: item.id,
      className: "day--ul--li",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, __jsx("p", {
      className: "tile",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, item.title), __jsx("p", {
      className: "hour",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, item.time));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ScheduleCard);

/***/ }),

/***/ "./components/ui/Schedule/ScheduleTable.jsx":
/*!**************************************************!*\
  !*** ./components/ui/Schedule/ScheduleTable.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _ScheduleCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ScheduleCard */ "./components/ui/Schedule/ScheduleCard.jsx");

var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\fiton\\components\\ui\\Schedule\\ScheduleTable.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: grid;\n  justify-items: center;\n  grid-gap: 4em;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n\n  .day--ul--li:last-child {\n    border-bottom: none;\n  }\n\n  @media screen and (min-width: 768px) {\n    grid-gap: 1em;\n  }\n  @media screen and (min-width: 1280px) {\n    grid-template-columns: repeat(7, 1fr);\n    grid-gap: 0.1em;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var Styled = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].section(_templateObject());

var ScheduleTable = function ScheduleTable() {
  return __jsx(Styled, {
    className: "schedule--table",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx(_ScheduleCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    day: "monday",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), __jsx(_ScheduleCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    day: "tuesday",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), __jsx(_ScheduleCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    day: "wednesday",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), __jsx(_ScheduleCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    day: "thursday",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), __jsx(_ScheduleCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    day: "friday",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), __jsx(_ScheduleCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    day: "saturday",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), __jsx(_ScheduleCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    day: "sunday",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ScheduleTable);

/***/ }),

/***/ "./components/ui/Schedule/scheduleData.js":
/*!************************************************!*\
  !*** ./components/ui/Schedule/scheduleData.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);

var scheduleData = {
  monday: [{
    id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
    title: 'Strenght Traning',
    time: '5:00am'
  }, {
    id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
    title: 'CrossFit',
    time: '6:15am'
  }, {
    id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
    title: 'CrossFit',
    time: '10:00am'
  }, {
    id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
    title: 'crossFit',
    time: '4:45pm'
  }, {
    id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
    title: 'Strenght Traning',
    time: '6:00pm'
  }, {
    id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
    title: 'CrossFit',
    time: '7:15pm'
  }],
  tuesday: [{
    id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
    title: 'crossFit',
    time: '5:00am'
  }, {
    id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
    title: 'crossFit',
    time: '6:15am'
  }, {
    id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
    title: 'Strenght Traning',
    time: '10:00am'
  }, {
    id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
    title: 'Strenght Traning',
    time: '4:45pm'
  }, {
    id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
    title: 'Strenght Traning',
    time: '6:00pm'
  }, {
    id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
    title: 'Strenght Traning',
    time: '7:15pm'
  }],
  wednesday: [{
    id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
    title: 'CrossFit',
    time: '5:00am'
  }, {
    id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
    title: 'CrossFit',
    time: '6:15am'
  }, {
    id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
    title: 'CrossFit',
    time: '10:00am'
  }, {
    id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
    title: 'CrossFit',
    time: '4:45apm'
  }, {
    id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
    title: 'CrossFit',
    time: '6:00pm'
  }, {
    id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
    title: 'CrossFit',
    time: '7:15pm'
  }],
  thursday: [{
    id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
    title: 'CrossFit',
    time: '5:00am'
  }, {
    id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
    title: 'CrossFit',
    time: '6:15am'
  }, {
    id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
    title: 'Olympic Weightlifting',
    time: '9:00am'
  }, {
    id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
    title: 'Strenght Traning',
    time: '4:45pm'
  }, {
    id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
    title: 'Olympic Weightlifting',
    time: '6:00pm'
  }, {
    id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
    title: 'Olympic Weightlifting',
    time: '7:15pm'
  }],
  friday: [{
    id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
    title: 'Strenght Traning',
    time: '5:00am'
  }, {
    id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
    title: 'CrossFit',
    time: '6:15am'
  }, {
    id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
    title: 'CrossFit',
    time: '10:00am'
  }, {
    id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
    title: 'Strenght Traning',
    time: '4:45pm'
  }, {
    id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
    title: 'CrossFit',
    time: '6:00pm'
  }, {
    id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
    title: 'CrossFit',
    time: '7:15pm'
  }],
  saturday: [{
    id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
    title: 'Strenght Traning',
    time: '5:00am'
  }, {
    id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
    title: 'Olympic Weightlifting',
    time: '6:15am'
  }, {
    id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
    title: 'Olympic Weightlifting',
    time: '10:00am'
  }, {
    id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
    title: 'Strenght Traning',
    time: '4:45pm'
  }, {
    id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
    title: 'CrossFit',
    time: '6:00pm'
  }, {
    id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
    title: 'Olympic Weightlifting',
    time: '7:15pm'
  }],
  sunday: [{
    id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
    title: 'CrossFit',
    time: '5:00am'
  }, {
    id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
    title: 'CrossFit',
    time: '6:15am'
  }, {
    id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
    title: 'CrossFit',
    time: '10:00am'
  }, {
    id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
    title: 'CrossFit',
    time: '4:45apm'
  }, {
    id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
    title: 'CrossFit',
    time: '6:00pm'
  }, {
    id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
    title: 'CrossFit',
    time: '7:15pm'
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (scheduleData);

/***/ }),

/***/ "./pages/schedule.js":
/*!***************************!*\
  !*** ./pages/schedule.js ***!
  \***************************/
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
/* harmony import */ var _components_ui_membershipPlans_MembershipPlans__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/ui/membershipPlans/MembershipPlans */ "./components/ui/membershipPlans/MembershipPlans.jsx");
/* harmony import */ var _components_ui_Schedule_Schedule__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/ui/Schedule/Schedule */ "./components/ui/Schedule/Schedule.jsx");
/* harmony import */ var _components_ui_PersonalTrainerBanner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/ui/PersonalTrainerBanner */ "./components/ui/PersonalTrainerBanner.jsx");
var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\fiton\\pages\\schedule.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;













var schedule = function schedule() {
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx(_components_ui_hero__WEBPACK_IMPORTED_MODULE_4__["default"], {
    img: "/strenght.jpg",
    heroSize: "calc(100vh - 40vh)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx(_components_ui_banner__WEBPACK_IMPORTED_MODULE_6__["default"], {
    bannerTitle: "schedule",
    btnTwo: "pricing",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  })), __jsx(_components_ui_Schedule_Schedule__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), __jsx(_components_ui_scheduleWeek__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), __jsx(_components_ui_Testimonies_Testimonies__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), __jsx(_components_ui_PersonalTrainerBanner__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), __jsx(_components_ui_meetOurTeam_MeetOurTeam__WEBPACK_IMPORTED_MODULE_7__["default"], {
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
  }), __jsx(_components_ui_carousel_carousel__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (schedule);

/***/ })

})
//# sourceMappingURL=schedule.js.a39a1857841295cfe8b0.hot-update.js.map