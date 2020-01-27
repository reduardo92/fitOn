webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/ui/scheduleWeek.jsx":
/*!****************************************!*\
  !*** ./components/ui/scheduleWeek.jsx ***!
  \****************************************/
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
/* harmony import */ var _Hooks_useForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Hooks/useForm */ "./components/Hooks/useForm.js");

var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\fiton\\components\\ui\\scheduleWeek.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: relative;\n  background-image: url(/platesbg.jpg);\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  object-fit: cover;\n  min-height: 75vw;\n  z-index: 1;\n  display: grid;\n  justify-items: center;\n  align-content: center;\n  padding: 2em;\n\n  &::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-color: rgba(0, 0, 0, 0.75);\n    z-index: -1;\n  }\n\n  .title--content {\n    padding: 0 1em;\n    text-align: center;\n  }\n\n  .img-line {\n    width: 100px;\n    margin: 0 auto;\n  }\n\n  .btns--container {\n    text-align: center;\n    display: grid;\n    margin-top: 1em;\n  }\n\n  .input--tab {\n    display: block;\n    font-family: var(--fn-monterrat);\n    font-weight: var(--fw-bold);\n    font-size: 1em;\n    text-align: center;\n    background-color: var(--white-clr);\n    color: var(--second-clr);\n    padding: 1em 1em;\n    border-radius: 40px;\n    border: 1px solid var(--second-clr);\n    position: relative;\n    transition: var(--ease--in--out--02s);\n    cursor: pointer;\n    margin-bottom: 1em;\n\n    &:focus {\n      outline: none;\n      border-color: var(--primary-clr);\n      border: 2px solid var(--primary-clr);\n      color: ", ";\n      cursor: pointer;\n    }\n  }\n\n  .last--tab {\n    background-color: var(--primary-clr);\n\n    &:focus,\n    &:hover {\n      border-color: var(--primary-clr);\n      border: 2px solid var(--primary-clr);\n      color: var(--white-clr);\n      background-color: transparent;\n    }\n  }\n\n  @media screen and (min-width: 760px) {\n    min-height: 25vw;\n\n    .btns--container {\n      grid-template-columns: repeat(3, 1fr);\n      justify-content: center;\n    }\n\n    .input--tab {\n      padding: 1em 0;\n    }\n\n    .last--tab {\n      grid-column: 2/2;\n    }\n  }\n  @media screen and (min-width: 1100px) {\n    min-height: 12vw;\n    background-position: bottom;\n\n    .btns--container {\n      grid-template-columns: repeat(4, 1fr);\n    }\n\n    .last--tab {\n      grid-column: auto;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var Styled = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].section(_templateObject(), function (props) {
  return props.hoverclr && 'var(--second-clr)';
});

var ScheduleWeek = function ScheduleWeek() {
  var submit = function submit() {
    console.log(form);
    setForm({
      name: '',
      email: '',
      phone: ''
    });
  };

  var _useForm = Object(_Hooks_useForm__WEBPACK_IMPORTED_MODULE_4__["default"])({
    name: '',
    email: '',
    phone: ''
  }, submit),
      handleChange = _useForm.handleChange,
      handleSubmit = _useForm.handleSubmit,
      form = _useForm.form,
      setForm = _useForm.setForm;

  return __jsx(Styled, {
    className: "schedule--weeek",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, __jsx("div", {
    className: "title--content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, __jsx("h2", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, "SCHEDULE YOUR FREE WEEK"), __jsx("img", {
    src: "/yellowLine.png",
    alt: "yellow line",
    className: "img-line",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  })), __jsx("form", {
    className: "btns--container",
    onSubmit: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, __jsx("input", {
    type: "text",
    className: "input--tab",
    placeholder: "NAME",
    onChange: handleChange,
    name: "name",
    value: form.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }), __jsx("input", {
    type: "email",
    className: "input--tab",
    placeholder: "EMAIL",
    onChange: handleChange,
    name: "email",
    value: form.email,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }), __jsx("input", {
    type: "text",
    className: "input--tab",
    placeholder: "PHONE",
    onChange: handleChange,
    name: "phone",
    value: form.phone,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }), __jsx("input", {
    type: "submit",
    value: "SUBMIT",
    className: "input--tab last--tab",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ScheduleWeek);

/***/ })

})
//# sourceMappingURL=index.js.733f44b7d7c2ea33e59f.hot-update.js.map