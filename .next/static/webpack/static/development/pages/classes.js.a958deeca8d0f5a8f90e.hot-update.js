webpackHotUpdate("static\\development\\pages\\classes.js",{

/***/ "./components/ui/meetOurTeam/MeetOurTeam.jsx":
/*!***************************************************!*\
  !*** ./components/ui/meetOurTeam/MeetOurTeam.jsx ***!
  \***************************************************/
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
/* harmony import */ var _trainers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./trainers */ "./components/ui/meetOurTeam/trainers.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../button */ "./components/ui/button.js");
/* harmony import */ var _TrainerCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../TrainerCard */ "./components/ui/TrainerCard.jsx");

var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\fiton\\components\\ui\\meetOurTeam\\MeetOurTeam.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  padding: 4em 1em;\n  text-align: center;\n  max-width: 1500px;\n  margin: 0 auto;\n\n  .button {\n    margin-top: 3em;\n  }\n\n  & > :first-child {\n    margin: 0 auto 1em;\n  }\n\n  @media screen and (min-width: 768px) {\n    & > :first-child {\n      width: 90%;\n      margin: 0 auto;\n    }\n  }\n  @media screen and (min-width: 1280px) {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    justify-content: center;\n\n    & > :first-child {\n      align-self: end;\n      margin: 0;\n    }\n\n    .title--banner {\n      margin-left: 9em;\n    }\n\n    .card--container {\n      grid-column: 1 / 3;\n    }\n\n    .button {\n      margin-top: 2em;\n      justify-self: center;\n      grid-column: 1/3;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var Styled = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].section(_templateObject());

var MeetOurTeam = function MeetOurTeam(_ref) {
  var teamHome = _ref.teamHome;
  return __jsx(Styled, {
    className: "meet--our--team",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx(_Barbell__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }), __jsx(_titleBanner__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "trainers",
    subtitle: "meet our team",
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
  }, _trainers__WEBPACK_IMPORTED_MODULE_5__["default"].map(function (trainer, i) {
    return i <= 2 && __jsx(_TrainerCard__WEBPACK_IMPORTED_MODULE_7__["default"], {
      key: i,
      data: trainer,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    });
  })), teamHome ? '' : __jsx(_button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: "see the whole team",
    toLink: "/team",
    bgclr: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (MeetOurTeam);

/***/ })

})
//# sourceMappingURL=classes.js.a958deeca8d0f5a8f90e.hot-update.js.map