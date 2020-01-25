webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/context/StateProider.js":
/*!********************************************!*\
  !*** ./components/context/StateProider.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _StateContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StateContext */ "./components/context/StateContext.js");
var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\fiton\\components\\context\\StateProider.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var StateProvider = function StateProvider(_ref) {
  var children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      windowSize = _useState[0],
      setWindowSize = _useState[1];

  var setCarosuel = function setCarosuel() {
    var tablet = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
    var laptop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;

    if (windowSize < 768) {
      return 1;
    } else if (windowSize <= 768 || windowSize < 1280) {
      return tablet;
    } else if (windowSize < 1280) {
      return laptop;
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setWindowSize(window.innerWidth);
  }, []);
  console.log(windowSize);
  console.log(setCarosuel());
  return __jsx(_StateContext__WEBPACK_IMPORTED_MODULE_1__["default"].Provider, {
    value: {
      windowSize: windowSize,
      setCarosuel: setCarosuel
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (StateProvider);

/***/ })

})
//# sourceMappingURL=_app.js.7412e2bb5a54c0c1fa0c.hot-update.js.map