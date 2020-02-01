webpackHotUpdate("static\\development\\pages\\class\\[id].js",{

/***/ "./pages/class/[id].js":
/*!*****************************!*\
  !*** ./pages/class/[id].js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/ui/button */ "./components/ui/button.js");
/* harmony import */ var react_reveal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-reveal */ "./node_modules/react-reveal/index.js");
/* harmony import */ var react_reveal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_reveal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/layout */ "./components/layout.js");
/* harmony import */ var _components_ui_banner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/ui/banner */ "./components/ui/banner.js");
/* harmony import */ var _components_ui_hero__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/ui/hero */ "./components/ui/hero.js");
/* harmony import */ var _components_ui_SubPageStyle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/ui/SubPageStyle */ "./components/ui/SubPageStyle.js");
/* harmony import */ var _components_ui_Servicess_servicesData__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/ui/Servicess/servicesData */ "./components/ui/Servicess/servicesData.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);

var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\fiton\\pages\\class\\[id].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









var Class = function Class(_ref) {
  var classe = _ref.classe;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_9__["useRouter"])();
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx(_components_ui_hero__WEBPACK_IMPORTED_MODULE_6__["default"], {
    img: "/secondBg.jpg",
    heroSize: "calc(100vh - 40vh)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx(_components_ui_banner__WEBPACK_IMPORTED_MODULE_5__["default"], {
    bannerTitle: "trainer",
    btnTwo: "classes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  })), __jsx(_components_ui_SubPageStyle__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: "trainer max-width",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("div", {
    className: "imgs--container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("img", {
    src: classe[0].img,
    alt: classe[0].title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  })), __jsx("div", {
    className: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("h1", {
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, classe[0].title), __jsx("p", {
    className: "para",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, classe[0].text), __jsx(react_reveal__WEBPACK_IMPORTED_MODULE_3___default.a, {
    top: true,
    delay: 500,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "back",
    toLink: router.back(),
    invert: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  })))));
};

Class.getInitialProps = function _callee(ctx) {
  var classe;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          classe = _components_ui_Servicess_servicesData__WEBPACK_IMPORTED_MODULE_8__["default"].filter(function (item) {
            return item.id === ctx.query.id;
          });
          console.log(classe);
          console.log(ctx.query.id);
          return _context.abrupt("return", {
            classe: classe
          });

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Class);

/***/ })

})
//# sourceMappingURL=[id].js.b0b3156b4f7b6f620d7f.hot-update.js.map