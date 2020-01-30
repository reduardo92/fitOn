webpackHotUpdate("static\\development\\pages\\classes.js",{

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
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  padding: 4em 1em;\n  text-align: center;\n\n  @media screen and (min-width: 768px) {\n    & > :first-child {\n      width: 90%;\n      margin: 0 auto;\n    }\n  }\n  @media screen and (min-width: 1280px) {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    justify-content: center;\n\n    & > :first-child {\n      align-self: end;\n      margin: 0;\n    }\n\n    .title--banner {\n      margin-left: 9em;\n    }\n\n    .card--container {\n      grid-column: 1 / 3;\n    }\n  }\n"]);

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
      lineNumber: 38
    },
    __self: this
  }, __jsx(_ui_Barbell__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), __jsx(_ui_titleBanner__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "classes",
    subtitle: "lets build the best you",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), __jsx("div", {
    className: "card--container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, _classesData__WEBPACK_IMPORTED_MODULE_5__["default"].map(function (item, i) {
    return __jsx(_ClassesCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: i,
      data: item,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    });
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ClassesContent);

/***/ })

})
//# sourceMappingURL=classes.js.2474ec440cc2416c49d2.hot-update.js.map