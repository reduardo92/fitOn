webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/navbar.js":
/*!******************************!*\
  !*** ./components/navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context/StateContext */ "./components/context/StateContext.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.esm.js");
/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Link */ "./components/Link.js");

var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\fiton\\components\\navbar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: ", ";\n  padding: 0.5em 0;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  background-color: ", ";\n  animation: 1s fadeIn linear;\n\n  &::before {\n    content: '';\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    height: 100vh;\n    width: 100vw;\n    background-color: rgba(0, 0, 0, 0.6);\n    display: ", ";\n    opacity: ", ";\n    z-index: ", ";\n  }\n\n  /* nav links */\n  .nav--link {\n    &__item {\n      font-weight: var(--fw-bold);\n      color: var(--second-clr);\n      font-size: 1.1rem;\n      transition: var(--ease--in--out--02s);\n      cursor: pointer;\n\n      &:hover,\n      &:focus {\n        color: var(--primary-clr);\n      }\n    }\n  }\n\n  /* Change Nav Links Active */\n  .selected {\n    color: var(--primary-clr) !important;\n  }\n\n  /* Top head */\n  .head--top {\n    display: ", ";\n    justify-content: space-between;\n    flex-wrap: wrap;\n    align-items: center;\n    padding: 0 0.5em;\n\n    .info--link {\n      color: var(--white-clr);\n      display: flex;\n      justify-content: space-evenly;\n      align-items: baseline;\n      font-size: 0.85rem;\n      cursor: pointer;\n      transition: var(--ease--in--out--02s);\n      margin-bottom: 0.5em;\n\n      &:hover,\n      &:focus {\n        color: var(--primary-clr);\n      }\n      svg {\n        margin-right: 0.5em;\n        color: var(--primary-clr);\n      }\n    }\n  }\n\n  .brand-logo--top {\n    display: none;\n  }\n\n  /* NavBar */\n  .navbar {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-top: ", ";\n    padding: ", ";\n  }\n\n  .brand-logo {\n    display: block;\n    width: 120px;\n  }\n\n  .nav--toggle {\n    transition: var(--tran--opa);\n    opacity: ", ";\n    margin-right: 1em;\n  }\n\n  .burger,\n  .burger::before,\n  .burger::after {\n    background-color: ", ";\n    width: 1.5em;\n    height: 3px;\n    transition: var(--tran--opa);\n  }\n\n  .burger {\n    display: block;\n    position: relative;\n    transform: ", ";\n\n    &:hover,\n    &:focus,\n    &:hover::before,\n    &:focus::before,\n    &:hover::after,\n    &:focus::after {\n      background-color: var(--second-clr);\n    }\n\n    &::after,\n    &::before {\n      content: '';\n      position: absolute;\n      left: 0;\n    }\n\n    &::before {\n      bottom: 6px;\n      opacity: ", ";\n    }\n    &::after {\n      top: 6px;\n      transform: ", ";\n    }\n  }\n\n  .inside-nav {\n    opacity: 1;\n    margin-right: 0;\n  }\n\n  .info--nav {\n    display: none;\n  }\n  /* navbar--group */\n  .navbar--group {\n    z-index: 10;\n    transition: var(--tran--opa);\n    position: fixed;\n    top: 0;\n    right: 0;\n    background-color: var(--white-clr);\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-evenly;\n    width: 70vw;\n    transform: ", ";\n  }\n\n  @media screen and (min-width: 1200px) {\n    /* position: ", "; */\n    margin-top: ", ";\n    /* max-width: ; */\n    margin: 0 auto;\n    padding: 0 1em;\n\n    .brand-logo {\n      width: 150px;\n    }\n\n    .nav--toggle {\n      display: none;\n    }\n\n    .info--link + .info--link {\n      margin-left: 2em;\n    }\n\n    /* Top head */\n    .head--top {\n      position: relative;\n      justify-content: end;\n      padding: 0;\n      max-width: 1600px;\n      margin: 0 auto 1em;\n\n      & > :last-child {\n        margin-left: auto;\n      }\n    }\n\n    .navbar {\n      padding: ", ";\n      max-width: 1600px;\n      margin: 0 auto;\n      align-items: flex-end;\n    }\n\n    /* Navbar */\n    .navbar--group {\n      z-index: 10;\n      transition: var(--tran--opa);\n      position: relative;\n      top: 0;\n      right: 0;\n      background-color: transparent;\n      height: auto;\n      display: flex;\n      flex-direction: row;\n      align-items: center;\n      justify-content: space-between;\n      transform: translateX(0);\n      max-width: 70%;\n      margin-left: auto;\n    }\n\n    .nav--link {\n      &__item {\n        color: var(--white-clr);\n        &:hover,\n        &:focus {\n          color: var(--primary-clr);\n        }\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








var Navbar = function Navbar() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_StateContext__WEBPACK_IMPORTED_MODULE_2__["default"]),
      toggle = _useContext.toggle,
      setToggle = _useContext.setToggle,
      navScroll = _useContext.navScroll,
      navRef = _useContext.navRef;

  return __jsx(Styled, {
    className: "header",
    ref: navRef,
    toggle: toggle,
    navScroll: navScroll,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("div", {
    className: "head--top",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("a", {
    className: "info--link",
    href: "tel:",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaPhone"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), "333-333-3333"), __jsx("a", {
    className: "info--link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_5__["MdEmail"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), "Fiton@gmail.com"), __jsx("a", {
    className: "info--link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_5__["MdMap"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), "203 Fake St, chicago, Ill"), __jsx("span", {
    className: "info--link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Open 24/7")), __jsx("nav", {
    className: "navbar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx(_components_Link__WEBPACK_IMPORTED_MODULE_6__["default"], {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("a", {
    className: "brand-logo ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("img", {
    src: "/logo.svg",
    alt: "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }))), __jsx("div", {
    className: "nav--toggle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("span", {
    className: "burger toggle",
    onClick: function onClick() {
      return setToggle(!toggle);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  })), __jsx("ul", {
    className: "navbar--group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("div", {
    className: "nav--toggle inside-nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx("span", {
    className: "burger toggle",
    onClick: function onClick() {
      return setToggle(!toggle);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  })), __jsx("li", {
    className: "nav--link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx(_components_Link__WEBPACK_IMPORTED_MODULE_6__["default"], {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx("a", {
    className: "nav--link__item",
    onClick: function onClick() {
      return setToggle(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "HOME"))), __jsx("li", {
    className: "nav--link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx(_components_Link__WEBPACK_IMPORTED_MODULE_6__["default"], {
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx("a", {
    className: "nav--link__item",
    onClick: function onClick() {
      return setToggle(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "ABOUT"))), __jsx("li", {
    className: "nav--link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx(_components_Link__WEBPACK_IMPORTED_MODULE_6__["default"], {
    href: "/classes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx("a", {
    className: "nav--link__item",
    onClick: function onClick() {
      return setToggle(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "CLASSES"))), __jsx("li", {
    className: "nav--link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx(_components_Link__WEBPACK_IMPORTED_MODULE_6__["default"], {
    href: "/team",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, __jsx("a", {
    className: "nav--link__item",
    onClick: function onClick() {
      return setToggle(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, "TEAM"))), __jsx("li", {
    className: "nav--link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx(_components_Link__WEBPACK_IMPORTED_MODULE_6__["default"], {
    href: "/pricing",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx("a", {
    className: "nav--link__item",
    onClick: function onClick() {
      return setToggle(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "PRICING"))), __jsx("li", {
    className: "nav--link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, __jsx(_components_Link__WEBPACK_IMPORTED_MODULE_6__["default"], {
    href: "/schedule",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, __jsx("a", {
    className: "nav--link__item",
    onClick: function onClick() {
      return setToggle(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "SCHEDULE"))), __jsx("li", {
    className: "nav--link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, __jsx(_components_Link__WEBPACK_IMPORTED_MODULE_6__["default"], {
    href: "/contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, __jsx("a", {
    className: "nav--link__item",
    onClick: function onClick() {
      return setToggle(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, "CONTACT"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);
var Styled = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].header(_templateObject(), function (props) {
  return props.navScroll ? 'fixed' : 'absolute';
}, function (props) {
  return props.navScroll ? 'var(--second-clr)' : 'none';
}, function (props) {
  return props.toggle ? 'block' : ' none';
}, function (props) {
  return props.toggle ? 1 : 0;
}, function (props) {
  return props.toggle ? '' : -3;
}, function (props) {
  return props.navScroll ? 'none' : 'flex';
}, function (props) {
  return props.navScroll ? '0' : '1em';
}, function (props) {
  return props.navScroll ? '.5em' : '0';
}, function (props) {
  return props.toggle ? '0' : 1;
}, function (props) {
  return props.toggle ? 'var(--second-clr)' : 'var(--white-clr)';
}, function (props) {
  return props.toggle ? 'rotate(45deg)' : '';
}, function (props) {
  return props.toggle ? '0' : '1';
}, function (props) {
  return props.toggle ? 'rotate(90deg) translate(-6px)' : '';
}, function (props) {
  return props.toggle ? 'translateX(0)' : 'translateX(105%)';
}, function (props) {
  return props.navScroll ? 'fixed' : 'absolute';
}, function (props) {
  return props.navScroll ? '0' : '1em';
}, function (props) {
  return props.navScroll && '.5em';
});

/***/ })

})
//# sourceMappingURL=_app.js.018e342c1ed53ab90834.hot-update.js.map