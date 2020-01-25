module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Hooks/useForm.js":
/*!*************************************!*\
  !*** ./components/Hooks/useForm.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);








function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }



const useForm = (initialState, callback) => {
  const {
    0: form,
    1: setForm
  } = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(initialState);

  const handleChange = e => {
    e.persist();
    setForm(form => _objectSpread({}, form, {
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (e.currentTarget.checkValidity() === false) {
      e.stopPropagation();
    }

    callback();
  };

  return {
    handleChange,
    handleSubmit,
    form,
    setForm
  };
};

/* harmony default export */ __webpack_exports__["default"] = (useForm);

/***/ }),

/***/ "./components/contact.jsx":
/*!********************************!*\
  !*** ./components/contact.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-reveal/Fade */ "react-reveal/Fade");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ui_titleBanner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ui/titleBanner */ "./components/ui/titleBanner.js");
/* harmony import */ var _ui_tabs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ui/tabs */ "./components/ui/tabs.js");
/* harmony import */ var _ui_Barbell__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ui/Barbell */ "./components/ui/Barbell.jsx");







var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\fiton\\components\\contact.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }







const Styled = styled_components__WEBPACK_IMPORTED_MODULE_9___default.a.section`
  text-align: center;
  padding: 2em 1em 4em;

  .form {
    display: grid;
    grid-gap: 2em;
    align-items: center;
    justify-content: center;
    padding-top: 1.5em;
    max-width: 1100px;
    margin: 0 auto;
  }

  .input--link,
  .textarea {
    color: var(--second-clr);
    font-weight: var(--fw-bold);
    font-size: 0.9rem;
    text-align: center;
    border: 1px solid #777777;
    border-radius: 25px;
    outline: none;

    &::placeholder {
      text-align: center;
    }
  }

  .input--link,
  .textarea {
    padding: 1em;
    transition: var(--ease--in--out--02s);
    &:focus {
      outline-color: transparent;
      border-color: var(--primary-clr);
    }
  }

  /* Alert msg to subject */
  .alert--msg {
    outline-color: #af0000;
  }

  .alert--title {
    color: #af0000;
  }

  .form--button {
    background-color: var(--primary-clr);
    justify-self: center;
    &:hover,
    &focus {
      background-color: transparent;
      border-color: var(--primary-clr);
      outline-color: var(--primary-clr);
      color: var(--second-clr);
    }
  }

  .msg {
    justify-self: center;
    color: var(--primary-clr);
    grid-column: 1 / 3;
    font-weight: bold;
    font-size: 1.5rem;
  }

  @media screen and (min-width: 760px) {
    .form {
      grid-template-columns: repeat(3, 1fr);
      row-gap: 2em;
      column-gap: 1em;
    }

    .textarea,
    .form--button {
      grid-column: 1 / 4;
    }
  }
`;

const Contact = () => {
  const {
    0: status,
    1: setSatus
  } = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(null);
  const {
    0: msg,
    1: setMsg
  } = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(null);
  const {
    0: form,
    1: setForm
  } = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const {
    name,
    email,
    phone,
    subject,
    message
  } = form;

  const handleChange = ({
    target
  }) => setForm(form => _objectSpread({}, form, {
    [target.name]: target.value
  }));

  const clearMsg = () => setInterval(() => setMsg(null), 8000);

  const handleSubmit = ev => {
    ev.preventDefault();
    setInterval(() => setStatus(), 8000);
  };

  return __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: undefined
  }, __jsx(Styled, {
    className: "contact section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: undefined
  }, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_8___default.a, {
    bottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: undefined
  }, __jsx(_ui_titleBanner__WEBPACK_IMPORTED_MODULE_10__["default"], {
    title: "CONTACT US",
    subtitle: "get in touch",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: undefined
  }), __jsx(_ui_Barbell__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: undefined
  })), msg && __jsx("h3", {
    className: "alert--title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: undefined
  }, msg), __jsx("form", {
    className: "form",
    onSubmit: handleSubmit,
    action: "https://formspree.io/mnqjlvaz",
    method: "POST",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: undefined
  }, __jsx("input", {
    type: "hidden",
    name: "form-name",
    value: "contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: undefined
  }), __jsx("input", {
    onChange: handleChange,
    value: name,
    name: "name",
    type: "text",
    className: "input--link name",
    placeholder: "FULL NAME",
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: undefined
  }), __jsx("input", {
    onChange: handleChange,
    value: email,
    name: "email",
    type: "email",
    className: "input--link email--form",
    placeholder: "EMAIL",
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: undefined
  }), __jsx("input", {
    onChange: handleChange,
    value: phone,
    name: "phone",
    type: "number",
    className: "input--link phone",
    placeholder: "PHONE NUMBER",
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: undefined
  }), __jsx("textarea", {
    onChange: handleChange,
    value: message,
    className: "textarea",
    name: "message",
    cols: "30",
    rows: "9",
    placeholder: "MESSAGE / QUESTION",
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: undefined
  }), status === 'SUCCESS' ? __jsx("p", {
    className: "msg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: undefined
  }, "Message Sent!") : __jsx(_ui_tabs__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: "form--button",
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: undefined
  }, "send message"), status === 'ERROR' && __jsx("p", {
    className: "msg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: undefined
  }, "Ooops! There was an error."))));
};

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ }),

/***/ "./components/context/StateContext.js":
/*!********************************************!*\
  !*** ./components/context/StateContext.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const StateContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
/* harmony default export */ __webpack_exports__["default"] = (StateContext);

/***/ }),

/***/ "./components/home/about.jsx":
/*!***********************************!*\
  !*** ./components/home/about.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ui_titleBanner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/titleBanner */ "./components/ui/titleBanner.js");
/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/button */ "./components/ui/button.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-reveal/Fade */ "react-reveal/Fade");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\fiton\\components\\home\\about.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Styled = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.section`
  padding: 3em 5vw 4em;
  text-align: center;
  display: grid;
  grid-gap: 4em;
  justify-items: center;

  .title--banner {
    margin-bottom: 1.3em;
  }

  .para {
    margin-bottom: 1em;
  }

  .button {
    margin-top: 1em;
  }

  .imgs--container {
    display: grid;
    grid-gap: 1em;
    gap: 1em;
  }

  @media screen and (min-width: 760px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1em;

    .content {
      order: 1;
      display: grid;

      & > :last-child {
        align-self: self-end;
      }
    }

    .imgs--container {
      grid-template-columns: repeat(2, 1fr);
      /* align-content: center; */
      grid-gap: 0.5em;
      gap: 0.5em;
      max-width: 700px;
    }

    .top {
      grid-column: 1 /3;
    }

    .img {
      align-self: stretch;
      object-fit: cover;
    }
  }
  @media screen and (min-width: 1200px) {
    grid-gap: 5em;
    text-align: left;

    .title--banner,
    .title {
      margin: 0;
    }
  }
`;

const About = () => {
  return __jsx(Styled, {
    className: "home--about max-width",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }, __jsx("div", {
    className: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }, __jsx(_ui_titleBanner__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "welcome",
    subtitle: "why choose us?",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }), __jsx("p", {
    className: "para",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem possimus distinctio ex. Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia quibusdam temporibus culpa dolore possimus distinctio ex. Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia quibusdam temporibus culpa dolore."), __jsx("p", {
    className: "para",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: undefined
  }, "mollitia quibusdam temporibus culpa dolore consequuntur sunt nisi consequuntur sunt nisi. animi aspernatur ducimus quas obcaecati mollitia quibusdam temporibus culpa dolore consequuntur sunt nisi."), __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
    top: true,
    delay: 500,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  }, __jsx(_ui_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "read more",
    toLink: "/about",
    invert: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: undefined
  }))), __jsx("div", {
    className: "imgs--container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: undefined
  }, __jsx("img", {
    src: "/strenght.jpg",
    alt: "img",
    className: "img top",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: undefined
  }), __jsx("img", {
    src: "/secondBg.jpg",
    alt: "img",
    className: "img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: undefined
  }), __jsx("img", {
    src: "/heavyBall.jpg",
    alt: "img",
    className: "img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: undefined
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

// import Head from 'next/head';
// import '../global.css';
const Layout = ({
  children
}) => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, children);

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/ui/Barbell.jsx":
/*!***********************************!*\
  !*** ./components/ui/Barbell.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\fiton\\components\\ui\\Barbell.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Styled = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img`
  /* margin: 5em 0; */

  max-width: 500px;
  margin: ${props => props.addMg ? props.addMg : ' 0 auto'};
`;

const Barbell = ({
  addMg
}) => {
  return __jsx(Styled, {
    addMg: addMg,
    className: "barbell",
    src: "olympic_barbell.svg",
    alt: "barbell",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Barbell);

/***/ }),

/***/ "./components/ui/Card.jsx":
/*!********************************!*\
  !*** ./components/ui/Card.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\fiton\\components\\ui\\Card.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Styled = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  position: relative;
  max-width: 350px;
  margin: 0 auto;

  &::before {
    content: '';
    position: absolute;
    background-color: var(--primary-clr);
    height: 100%;
    width: 100%;
    top: 12px;
    /* left: 0; */
    right: -6px;
    z-index: -1;
  }

  .card--img {
    position: relative;
    transition: var(--ease--in--out--02s);
    width: 100%;
  }
  .card--body {
    padding: 0.5em 1em 1.5em;
    background-color: var(--white-clr);
    color: var(--second-clr);

    &__para {
      padding-top: 0.5em;
    }
  }
`;

const Card = ({
  data: {
    img,
    title,
    subtitle
  }
}) => {
  return __jsx(Styled, {
    className: "card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, __jsx("div", {
    className: "card--img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, __jsx("img", {
    src: img,
    alt: title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  })), title && __jsx("div", {
    className: "card--body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, __jsx("h3", {
    className: "card--body__title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, title), __jsx("div", {
    className: "card--body__para",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, subtitle)));
};

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./components/ui/MembershipCard.jsx":
/*!******************************************!*\
  !*** ./components/ui/MembershipCard.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\fiton\\components\\ui\\MembershipCard.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Styled = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  position: relative;
  width: 200px;
  height: 450px;
  border: 2px solid var(--primary-clr);
  display: grid;
  padding: 0 0.5em;
  justify-items: center;
  /* padding: 8em 1em; */

  .card--title {
    color: ${props => props.invert ? 'var(--second-clr)' : 'var(--white-clr)'};
    font-weight: bold;
    align-self: center;
    font-size: 1.75rem;

    .month {
      display: block;
      color: ${props => props.invert ? 'var(--second-clr)' : 'var(--white-clr)'};
      font-weight: normal;
      font-size: 1rem;
    }
  }

  .card--packages {
    color: var(--second-clr);
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    align-self: flex-end;

    &__item {
      color: ${props => props.invert ? 'var(--second-clr)' : 'var(--white-clr)'};
      text-align: center;
      margin-bottom: 1.5em;
    }

    .line {
      width: 50px;
      height: 9px;
      background-color: var(--primary-clr);
      margin: 0 auto;
    }
  }

  .button {
    text-transform: uppercase;
    margin-bottom: 1em;
    align-self: center;
    color: var(--second-clr);
    background-color: var(--primary-clr);
    padding: 0.8em 1em;
    font-weight: bold;
    border: 2px solid var(--primary-clr);
    border-radius: 5px;
    font-size: 0.9rem;
    transition: var(--ease--in--out--02s);

    &:hover,
    &:focus {
      background-color: transparent;
      color: var(--white-clr);
    }
  }
`;

const MembershipCard = ({
  data: {
    id,
    price,
    included
  }
}) => __jsx(Styled, {
  className: "card--membership",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 74
  },
  __self: undefined
}, __jsx("h3", {
  className: "card--title",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 75
  },
  __self: undefined
}, "$", price, " ", __jsx("span", {
  className: "month",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 76
  },
  __self: undefined
}, "/month")), __jsx("ul", {
  className: "card--packages",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 78
  },
  __self: undefined
}, included.map((item, i) => __jsx("li", {
  key: i,
  className: "card--packages__item",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 80
  },
  __self: undefined
}, item === '-' ? __jsx("div", {
  className: "line",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 81
  },
  __self: undefined
}) : item))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/cart",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 85
  },
  __self: undefined
}, __jsx("a", {
  className: "button",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 86
  },
  __self: undefined
}, "choose plan")));

/* harmony default export */ __webpack_exports__["default"] = (MembershipCard);

/***/ }),

/***/ "./components/ui/PersonalTrainerBanner.jsx":
/*!*************************************************!*\
  !*** ./components/ui/PersonalTrainerBanner.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-reveal/Fade */ "react-reveal/Fade");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./button */ "./components/ui/button.js");
var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\fiton\\components\\ui\\PersonalTrainerBanner.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Styled = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.section`
  position: relative;
  background-image: url(/platesbg.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  object-fit: cover;
  min-height: 75vw;
  z-index: 1;
  display: grid;
  justify-items: center;
  align-content: center;
  padding: 2em;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.75);
    z-index: -1;
  }

  .title--content {
    padding: 0 1em;
    text-align: center;
    max-width: 500px;
  }

  .title {
    span {
      color: var(--primary-clr);
    }
  }

  .img-line {
    width: 100px;
    margin: 1em auto;
  }

  .last--tab {
    background-color: var(--primary-clr);

    &:focus,
    &:hover {
      border-color: var(--primary-clr);
      border: 2px solid var(--primary-clr);
      color: var(--white-clr);
      background-color: transparent;
    }
  }

  @media screen and (min-width: 760px) {
    min-height: 25vw;
  }
  @media screen and (min-width: 1100px) {
    min-height: 12vw;
    background-position: bottom;
  }
`;

const PersonalTrainerBanner = () => __jsx(Styled, {
  className: "schedule--weeek",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 69
  },
  __self: undefined
}, __jsx("div", {
  className: "title--content",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 70
  },
  __self: undefined
}, __jsx("h2", {
  className: "title",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 71
  },
  __self: undefined
}, "Do you need a ", __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 72
  },
  __self: undefined
}, "Personal Trainer?"), " Get in touch with us now."), __jsx("img", {
  src: "/yellowLine.png",
  alt: "yellow line",
  className: "img-line",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 74
  },
  __self: undefined
})), __jsx(_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
  title: "contact us",
  toLink: "/contact",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 76
  },
  __self: undefined
}));

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Barbell__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Barbell */ "./components/ui/Barbell.jsx");
/* harmony import */ var _titleBanner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../titleBanner */ "./components/ui/titleBanner.js");
/* harmony import */ var _ScheduleTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ScheduleTable */ "./components/ui/Schedule/ScheduleTable.jsx");
var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\fiton\\components\\ui\\Schedule\\Schedule.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Styled = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.section`
  padding: 4em 1em;
  text-align: center;
  max-width: 1500px;
  margin: 0 auto;

  & > :last-child {
    margin-top: 3em;
  }

  & > :first-child {
    margin: 0 auto 1em;
  }

  @media screen and (min-width: 768px) {
    & > :first-child {
      width: 90%;
      margin: 0 auto;
    }
  }
  @media screen and (min-width: 1280px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;

    & > :first-child {
      align-self: end;
      margin: 0;
    }

    .title--banner {
      margin-left: 9em;
    }

    .card--container {
      grid-column: 1 / 3;
    }

    & > :last-child {
      margin-top: 2em;
      justify-self: center;
      grid-column: 1/3;
    }
  }
`;

const Schedule = () => {
  return __jsx(Styled, {
    className: "schedule",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, __jsx(_Barbell__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }), __jsx(_titleBanner__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "schedule",
    subtitle: "timetable",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }), __jsx(_ScheduleTable__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _scheduleData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scheduleData */ "./components/ui/Schedule/scheduleData.js");
var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\fiton\\components\\ui\\Schedule\\ScheduleCard.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Styled = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  width: 100%;
  font-weight: bold;

  .day {
    text-transform: uppercase;
    color: var(--white-clr);
    padding: 0.8em 0.5em;
    background-color: var(--second-clr);
  }

  .day--ul--li {
    background-color: var(--primary-clr);
    border-bottom: 1px solid rgba(0, 0, 0, 0.9);
    width: 100%;
    color: var(--second-clr);
    height: 65px;
    align-items: baseline;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    align-items: center;
  }

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1280px) {
  }
`;

const ScheduleCard = ({
  day
}) => {
  return __jsx(Styled, {
    className: "card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, __jsx("h3", {
    className: "day",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, day), __jsx("ul", {
    className: "day--ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, _scheduleData__WEBPACK_IMPORTED_MODULE_2__["default"][day].map(item => __jsx("li", {
    key: item.id,
    className: "day--ul--li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, __jsx("p", {
    className: "tile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, item.title), __jsx("p", {
    className: "hour",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, item.time)))));
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ScheduleCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ScheduleCard */ "./components/ui/Schedule/ScheduleCard.jsx");
var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\fiton\\components\\ui\\Schedule\\ScheduleTable.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Styled = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.section`
  display: grid;
  justify-items: center;
  grid-gap: 4em;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

  .day--ul--li:last-child {
    border-bottom: none;
  }

  @media screen and (min-width: 768px) {
    grid-gap: 1em;
  }
  @media screen and (min-width: 1280px) {
    grid-template-columns: repeat(7, 1fr);
    grid-gap: 0.1em;
  }
`;

const ScheduleTable = () => {
  return __jsx(Styled, {
    className: "schedule--table",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, __jsx(_ScheduleCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    day: "monday",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }), __jsx(_ScheduleCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    day: "tuesday",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }), __jsx(_ScheduleCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    day: "wednesday",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }), __jsx(_ScheduleCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    day: "thursday",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }), __jsx(_ScheduleCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    day: "friday",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }), __jsx(_ScheduleCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    day: "saturday",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }), __jsx(_ScheduleCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    day: "sunday",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
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
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);

const scheduleData = {
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

/***/ "./components/ui/Servicess/Services.jsx":
/*!**********************************************!*\
  !*** ./components/ui/Servicess/Services.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _titleBanner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../titleBanner */ "./components/ui/titleBanner.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../button */ "./components/ui/button.js");
/* harmony import */ var _servicesData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./servicesData */ "./components/ui/Servicess/servicesData.js");
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Card */ "./components/ui/Card.jsx");
var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\fiton\\components\\ui\\Servicess\\Services.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Stlyed = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.section`
  position: relative;
  background: url(bars.jpg);
  background-size: cover;
  background-position: left;
  object-fit: cover;
  min-height: 100vh;
  clip-path: polygon(0 0, 100% 0, 100% calc(100% - 10vw), 0 100%);
  padding: 3em 1em 7em;
  z-index: 1;
  text-align: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: ${props => props.heroOpacity || 'rgba(0, 0, 0, 0.65)'};
    z-index: -1;
  }

  & > :last-child {
    margin-top: 3em;
  }

  .card--container {
    margin-bottom: 4em;
  }

  @media screen and (min-width: 1200px) {
    min-height: 85vh;
    clip-path: polygon(0 0, 100% 0, 100% calc(100% - 5vw), 0 100%);
  }
`;

const Services = () => {
  return __jsx(Stlyed, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, __jsx("div", {
    className: "max-width",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, __jsx(_titleBanner__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Services",
    subtitle: "STEP UP YOUR FITNESS",
    invert: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }), __jsx("div", {
    className: "card--container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, _servicesData__WEBPACK_IMPORTED_MODULE_4__["default"].map((card, i) => i <= 2 && __jsx(_Card__WEBPACK_IMPORTED_MODULE_5__["default"], {
    key: card.id,
    data: card,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }))), __jsx(_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "view more",
    toLink: "/services",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Services);

/***/ }),

/***/ "./components/ui/Servicess/servicesData.js":
/*!*************************************************!*\
  !*** ./components/ui/Servicess/servicesData.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);

const services = [{
  id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
  img: '/gymnastic.jpg',
  title: 'CROSSFIT',
  subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem possimus distinctio ex. Natus totam voluptatibus'
}, {
  id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
  img: 'free.jpg',
  title: 'FREE LIFTING',
  subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem possimus distinctio ex. Natus totam voluptatibus'
}, {
  id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
  img: '/yoga.jpg',
  title: 'YOGA',
  subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem possimus distinctio ex. Natus totam voluptatibus'
}, {
  id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
  img: '/kettebell.jpg',
  title: 'KETTLEBELL',
  subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem possimus distinctio ex. Natus totam voluptatibus'
}, {
  id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
  img: '/olymipic.jpg',
  title: 'OLYMPIC WEIGHTLIFTING',
  subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem possimus distinctio ex. Natus totam voluptatibus'
}, {
  id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
  img: '/strenghtTraining.jpg',
  title: 'STRENGHT TRAINING',
  subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem possimus distinctio ex. Natus totam voluptatibus'
}, {
  id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
  img: '/boxing.jpg',
  title: 'BOXING',
  subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem possimus distinctio ex. Natus totam voluptatibus'
}, {
  id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
  img: '/begginerTraining.png',
  title: 'BEGGINER TRAINING',
  subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem possimus distinctio ex. Natus totam voluptatibus'
}, {
  id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
  img: '/hitCardio.jpg',
  title: 'HITT CARDIO',
  subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem possimus distinctio ex. Natus totam voluptatibus'
}];
/* harmony default export */ __webpack_exports__["default"] = (services);

/***/ }),

/***/ "./components/ui/Testimonies/Testimonies.jsx":
/*!***************************************************!*\
  !*** ./components/ui/Testimonies/Testimonies.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Barbell__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Barbell */ "./components/ui/Barbell.jsx");
/* harmony import */ var _testimoniesData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./testimoniesData */ "./components/ui/Testimonies/testimoniesData.js");
/* harmony import */ var _titleBanner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../titleBanner */ "./components/ui/titleBanner.js");
/* harmony import */ var _TestimoniesCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TestimoniesCard */ "./components/ui/Testimonies/TestimoniesCard.jsx");
/* harmony import */ var _brainhubeu_react_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @brainhubeu/react-carousel */ "@brainhubeu/react-carousel");
/* harmony import */ var _brainhubeu_react_carousel__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_brainhubeu_react_carousel__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../context/StateContext */ "./components/context/StateContext.js");
var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\fiton\\components\\ui\\Testimonies\\Testimonies.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const Styled = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.section`
  padding: 5em 1em;
  text-align: center;

  .barbell {
    margin: 0;
    margin-top: 1em;
  }

  .container {
    display: flex;
  }

  .card--tesimonies {
    flex-shrink: 1;
  }

  .carousel--container {
    width: 100%;
    height: 430px;
  }

  .BrainhubCarousel__trackContainer {
    margin-top: 5em;
    ul {
      display: flex;
      flex-wrap: wrap;
    }

    li {
      flex: 45%;
    }
  }
  .barbell {
    max-width: 500px;
    margin: 0 auto;
  }

  @media screen and (min-width: 768px) {
    .carousel--container {
      height: 300px;
    }
  }
`;

const Testimonies = () => {
  const {
    setCarosuel
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_StateContext__WEBPACK_IMPORTED_MODULE_7__["default"]);
  return __jsx(Styled, {
    className: "testimoneis",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }, __jsx(_titleBanner__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "testimonies",
    subtitle: "what our memebers say",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }), __jsx(_Barbell__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }), __jsx("div", {
    className: "carousel--container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, __jsx(_brainhubeu_react_carousel__WEBPACK_IMPORTED_MODULE_6___default.a, {
    slidesPerPage: setCarosuel(2, 3),
    infinite: true,
    centered: true,
    autoPlay: 5000,
    animationSpeed: 2000,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, _testimoniesData__WEBPACK_IMPORTED_MODULE_3__["default"].map(item => __jsx(_TestimoniesCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
    key: item.id,
    data: item,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Testimonies);

/***/ }),

/***/ "./components/ui/Testimonies/TestimoniesCard.jsx":
/*!*******************************************************!*\
  !*** ./components/ui/Testimonies/TestimoniesCard.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\fiton\\components\\ui\\Testimonies\\TestimoniesCard.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Styled = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  position: relative;
  background-color: var(--accent-clr);
  color: var(--second-clr);
  text-align: center;
  padding: 5em 1em 2em;
  margin: 0 0.5em;
  max-width: 500px;

  &::before {
    content: '';
    position: absolute;
    background-color: var(--primary-clr);
    height: 100%;
    width: 100%;
    top: 10px;
    /* left: 0; */
    right: -4px;
    z-index: -1;
  }

  .card--testimoneis--img {
    border-radius: 50%;
    height: 120px;
    width: 120px;
    margin: 0 auto;
    border: 3px solid var(--primary-clr);
    object-fit: cover;
    position: absolute;
    top: -50px;
    left: 0;
    right: 0;
  }

  .card--testimoneis--content__para {
    max-width: 50vw;
    margin: 0 auto;
  }

  @media screen and (min-width: 760px) {
    /* margin: 0 auto; */
  }
`;

const TestimoniesCard = ({
  data: {
    img,
    name,
    text
  }
}) => __jsx(Styled, {
  className: "card--testimonies",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48
  },
  __self: undefined
}, __jsx("img", {
  src: img,
  alt: "woman",
  className: "card--testimoneis--img",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 49
  },
  __self: undefined
}), __jsx("div", {
  className: "card--testimoneis--content",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 50
  },
  __self: undefined
}, __jsx("h3", {
  className: "card--testimoneis--content__name",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 51
  },
  __self: undefined
}, name), __jsx("p", {
  className: "card--testimoneis--content__para",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 52
  },
  __self: undefined
}, text)));

/* harmony default export */ __webpack_exports__["default"] = (TestimoniesCard);

/***/ }),

/***/ "./components/ui/Testimonies/testimoniesData.js":
/*!******************************************************!*\
  !*** ./components/ui/Testimonies/testimoniesData.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);

const testimoniesData = [{
  id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
  img: 'woman_one.jpg',
  name: 'Jane Smith',
  text: `Lorem ipsum dolor sit amet, consectetur adipisc
        ulum porttitor egestas orci, vinec at velit vestibulum,
        Lorem ipsum dolor sit amet, consectetur adipisc
        ulum porttitor egestas orci, vinec at velit vestibulum,`
}, {
  id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
  img: 'guy_one.jpg',
  name: 'Alex jones',
  text: `Lorem ipsum dolor sit amet, consectetur adipisc
ulum porttitor egestas orci, vinec at velit vestibulum,
Lorem ipsum dolor sit amet, consectetur adipisc
ulum porttitor egestas orci, vinec at velit vestibulum,`
}, {
  id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
  img: 'woman_two.jpg',
  name: 'Diana Doe',
  text: `Lorem ipsum dolor sit amet, consectetur adipisc
ulum porttitor egestas orci, vinec at velit vestibulum,
Lorem ipsum dolor sit amet, consectetur adipisc
ulum porttitor egestas orci, vinec at velit vestibulum,`
}, {
  id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
  img: 'guy_two.jpg',
  name: 'Jay Smith',
  text: `Lorem ipsum dolor sit amet, consectetur adipisc
ulum porttitor egestas orci, vinec at velit vestibulum,
Lorem ipsum dolor sit amet, consectetur adipisc
ulum porttitor egestas orci, vinec at velit vestibulum,`
}, {
  id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
  img: 'woman_one.jpg',
  name: 'Nicole Jones',
  text: `Lorem ipsum dolor sit amet, consectetur adipisc
ulum porttitor egestas orci, vinec at velit vestibulum,
Lorem ipsum dolor sit amet, consectetur adipisc
ulum porttitor egestas orci, vinec at velit vestibulum,`
}, {
  id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
  img: 'guy_one.jpg',
  name: 'John Doe',
  text: `Lorem ipsum dolor sit amet, consectetur adipisc
ulum porttitor egestas orci, vinec at velit vestibulum,
Lorem ipsum dolor sit amet, consectetur adipisc
ulum porttitor egestas orci, vinec at velit vestibulum,`
}, {
  id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
  img: 'woman_two.jpg',
  name: 'Lindsey Jones',
  text: `Lorem ipsum dolor sit amet, consectetur adipisc
ulum porttitor egestas orci, vinec at velit vestibulum,
Lorem ipsum dolor sit amet, consectetur adipisc
ulum porttitor egestas orci, vinec at velit vestibulum,`
}, {
  id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
  img: 'guy_two.jpg',
  name: 'Doe Smith',
  text: `Lorem ipsum dolor sit amet, consectetur adipisc
ulum porttitor egestas orci, vinec at velit vestibulum,
Lorem ipsum dolor sit amet, consectetur adipisc
ulum porttitor egestas orci, vinec at velit vestibulum,`
}];
/* harmony default export */ __webpack_exports__["default"] = (testimoniesData);

/***/ }),

/***/ "./components/ui/TrainerCard.jsx":
/*!***************************************!*\
  !*** ./components/ui/TrainerCard.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\fiton\\components\\ui\\TrainerCard.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Styled = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  position: relative;
  max-width: 350px;
  margin: 0 auto;

  .card--img {
    position: relative;
    transition: var(--ease--in--out--02s);
    width: 100%;
    img {
      object-fit: cover;
      height: 450px;
    }

    &::before {
      content: '';
      position: absolute;
      background-color: var(--primary-clr);
      height: 100%;
      width: 100%;
      top: 12px;
      /* left: 0; */
      right: -6px;
      z-index: -1;
    }
  }
  .card--body {
    padding: 0.5em 1em 1.5em;
    color: var(--second-clr);
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    margin-top: 1em;

    &__title {
      color: var(--primary-clr);
    }
  }
`;

const TrainerCard = ({
  data: {
    img,
    title,
    subtitle
  }
}) => __jsx(Styled, {
  className: "card--trainer",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44
  },
  __self: undefined
}, __jsx("div", {
  className: "card--img",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45
  },
  __self: undefined
}, __jsx("img", {
  src: img,
  alt: title,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 46
  },
  __self: undefined
})), __jsx("div", {
  className: "card--body",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48
  },
  __self: undefined
}, __jsx("h3", {
  className: "card--body__title",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 49
  },
  __self: undefined
}, title), __jsx("div", {
  className: "card--body__para",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 50
  },
  __self: undefined
}, subtitle)));

/* harmony default export */ __webpack_exports__["default"] = (TrainerCard);

/***/ }),

/***/ "./components/ui/banner.js":
/*!*********************************!*\
  !*** ./components/ui/banner.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button */ "./components/ui/button.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-reveal/Fade */ "react-reveal/Fade");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\fiton\\components\\ui\\banner.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Styled = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  padding: 0 0.5em;
  text-align: center;
  .title {
    font-family: var(--fn-monterrat);
    text-transform: uppercase;
    margin-bottom: 1em;
    font-size: 2.5rem;

    span {
      display: block;
    }
  }

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
    .title {
      font-size: 4rem;
      line-height: 0.5;
      margin: 0;
    }

    .button {
      font-size: 1.15rem;
    }
  }
`;

const Banner = ({
  banner,
  bannerTitle
}) => {
  return __jsx(Styled, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3___default.a, {
    bottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, __jsx("h1", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, banner === 'home' ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, "become the ", __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, "best you")) : bannerTitle), banner === 'home' ? __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3___default.a, {
    top: true,
    delay: 500,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, __jsx(_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "join now!",
    toLink: "/contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  })) : __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3___default.a, {
    top: true,
    delay: 500,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, __jsx("div", {
    className: "btn--group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, __jsx(_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "visit us",
    toLink: "/contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }), __jsx(_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "visit us",
    toLink: "/contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  })))));
}; // <Fade top delay={500}>
//   <Button title='visit us' toLink='/contact' />
// </Fade>


/* harmony default export */ __webpack_exports__["default"] = (Banner);

/***/ }),

/***/ "./components/ui/button.js":
/*!*********************************!*\
  !*** ./components/ui/button.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\fiton\\components\\ui\\button.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Styled = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.a`
  display: inline-block;
  font-family: var(--fn-monterrat);
  font-weight: var(--fw-bold);
  font-size: 1em;
  text-align: center;
  background-color: ${props => props.bgclr ? 'var(--primary-clr)' : 'transparent'};
  color: ${props => props.invert ? 'var(--second-clr)' : 'var(--white-clr)'};
  text-transform: uppercase;
  padding: 1em 3.2em;
  border-radius: 40px;
  border: 2px solid var(--primary-clr);
  position: relative;
  transition: var(--ease--in--out--02s);
  cursor: pointer;

  &:hover,
  &:focus {
    transform: scale(0.95);
    background-color: ${props => props.bgclr ? 'transparent' : 'var(--primary-clr)'};
    border-color: var(--primary-clr);
    color: ${props => props.hoverclr ? 'var(--white-clr)' : 'var(--second-clr)'};
    cursor: pointer;
  }
`;

const Button = ({
  toLink,
  title,
  hoverclr,
  bgclr,
  invert
}) => __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: toLink,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34
  },
  __self: undefined
}, __jsx(Styled, {
  hoverclr: hoverclr,
  bgclr: bgclr,
  invert: invert,
  className: "button",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35
  },
  __self: undefined
}, title));

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./components/ui/carousel/carousel.jsx":
/*!*********************************************!*\
  !*** ./components/ui/carousel/carousel.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/values */ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _brainhubeu_react_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @brainhubeu/react-carousel */ "@brainhubeu/react-carousel");
/* harmony import */ var _brainhubeu_react_carousel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_brainhubeu_react_carousel__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/StateContext */ "./components/context/StateContext.js");

var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\fiton\\components\\ui\\carousel\\carousel.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const Styled = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.section`
  width: 100%;
  height: 300px;
  overflow-x: hidden;

  ul {
    display: flex;
    li {
      flex-shrink: 0;
      height: 300px;
      position: relative;
      z-index: 1;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: ${props => props.heroOpacity || 'rgba(0, 0, 0, 0.65)'};
      }

      img {
        height: 100%;
        object-fit: cover;
      }
    }
  }

  @media screen and (min-width: 760px) {
    /* height: 350px; */

    ul {
      li {
        /* height: 350px; */
      }
    }
  }
`;

const Carousell = () => {
  const {
    setCarosuel
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_StateContext__WEBPACK_IMPORTED_MODULE_4__["default"]);
  const imgs = {
    0: '/man-carrying.jpg',
    1: '/bars.jpg',
    2: '/black-exercise.jpg',
    3: '/close-up-of.jpg',
    4: '/free.jpg',
    5: '/group-of-people.jpg',
    6: '/gymnastic.jpg',
    7: '/heavyBall.jpg',
    8: '/hitCardio.jpg',
    9: '/homeHero.jpg',
    10: '/boxing.jpg',
    11: '/kettebell.jpg',
    12: '/man-lying.jpg',
    13: '/people.jpg',
    14: '/person-carrying.jpg',
    15: '/secondBg.jpg',
    16: '/slide_2.jpg',
    17: '/tyre-push.jpg'
  };
  return __jsx(Styled, {
    className: "carousel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }, __jsx(_brainhubeu_react_carousel__WEBPACK_IMPORTED_MODULE_2___default.a, {
    slidesPerPage: setCarosuel(),
    infinite: true,
    autoPlay: 5000,
    animationSpeed: 3000,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }, _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default()(imgs).map((img, i) => __jsx("img", {
    key: i,
    src: img,
    alt: "img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: undefined
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Carousell);

/***/ }),

/***/ "./components/ui/hero.js":
/*!*******************************!*\
  !*** ./components/ui/hero.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\fiton\\components\\ui\\hero.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Styled = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  position: relative;
  background-image: url(${props => props.img});
  background-position: center;
  background-size: cover;
  object-fit: cover;
  min-height: ${props => props.heroSize ? '100vh' : 'calc(100vh - 5vh)'};
  text-align: center;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  z-index: 1;
  clip-path: polygon(0 0 ,100% 0, 100% calc(100% - 10vw), 0 100%);
  /* margin-bottom: -10vw; */

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: ${props => props.heroOpacity || 'rgba(0, 0, 0, 0.65)'};
    z-index: -1;
  }



  /* @media screen and (min-width: 768px) {
    min-height: ${props => props.heroSize ? '100vh' : 'calc(100vh - 70vh)'};
  }
  @media screen and (min-width: 1024px) {
    min-height: ${props => props.heroSize ? '100vh' : 'calc(100vh - 50vh)'};
  } */

  @media screen and (min-width: 1024px) {
    min-height: 110vh;
    clip-path: polygon(0 0 ,100% 0, 100% calc(100% - 5vw), 0 100%);


  }
`;

const hero = ({
  img = '/homeHero.jpg',
  heroSize,
  heroOpacity,
  children
}) => {
  return __jsx(Styled, {
    className: "hero",
    img: img,
    heroSize: heroSize,
    heroOpacity: heroOpacity,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (hero);

/***/ }),

/***/ "./components/ui/mapBox.jsx":
/*!**********************************!*\
  !*** ./components/ui/mapBox.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\fiton\\components\\ui\\mapBox.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Styled = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.section`
  /* margin: 5em 0; */

  .map--Box {
    width: 100vw;
    height: 400px;

    display: block;
  }

  @media screen and (min-width: 1024px) {
    .map--Box {
      height: 500px;
    }
  }
`;

const MapBox = () => __jsx(Styled, {
  className: "google--map",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}, __jsx("iframe", {
  className: "map--Box",
  id: "gmap_canvas",
  src: "https://maps.google.com/maps?q=%20960%20W%2018th%20St%2C%20Chicago%2C%20IL%2060608&t=&z=15&ie=UTF8&iwloc=&output=embed",
  frameBorder: "0",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}));

/* harmony default export */ __webpack_exports__["default"] = (MapBox);

/***/ }),

/***/ "./components/ui/meetOurTeam/MeetOurTeam.jsx":
/*!***************************************************!*\
  !*** ./components/ui/meetOurTeam/MeetOurTeam.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Barbell__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Barbell */ "./components/ui/Barbell.jsx");
/* harmony import */ var _titleBanner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../titleBanner */ "./components/ui/titleBanner.js");
/* harmony import */ var _trainers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./trainers */ "./components/ui/meetOurTeam/trainers.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../button */ "./components/ui/button.js");
/* harmony import */ var _TrainerCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../TrainerCard */ "./components/ui/TrainerCard.jsx");
var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\fiton\\components\\ui\\meetOurTeam\\MeetOurTeam.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Styled = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.section`
  padding: 4em 1em;
  text-align: center;
  max-width: 1500px;
  margin: 0 auto;

  & > :last-child {
    margin-top: 3em;
  }

  & > :first-child {
    margin: 0 auto 1em;
  }

  @media screen and (min-width: 768px) {
    & > :first-child {
      width: 90%;
      margin: 0 auto;
    }
  }
  @media screen and (min-width: 1280px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;

    & > :first-child {
      align-self: end;
      margin: 0;
    }

    .title--banner {
      margin-left: 9em;
    }

    .card--container {
      grid-column: 1 / 3;
    }

    & > :last-child {
      margin-top: 2em;
      justify-self: center;
      grid-column: 1/3;
    }
  }
`;

const MeetOurTeam = () => __jsx(Styled, {
  className: "meet--our--team",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 55
  },
  __self: undefined
}, __jsx(_Barbell__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 56
  },
  __self: undefined
}), __jsx(_titleBanner__WEBPACK_IMPORTED_MODULE_3__["default"], {
  title: "trainers",
  subtitle: "meet our team",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 57
  },
  __self: undefined
}), __jsx("div", {
  className: "card--container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 58
  },
  __self: undefined
}, _trainers__WEBPACK_IMPORTED_MODULE_4__["default"].map((trainer, i) => i <= 2 && __jsx(_TrainerCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
  key: i,
  data: trainer,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 60
  },
  __self: undefined
}))), __jsx(_button__WEBPACK_IMPORTED_MODULE_5__["default"], {
  title: "see the whole team",
  toLink: "/team",
  bgclr: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 63
  },
  __self: undefined
}));

/* harmony default export */ __webpack_exports__["default"] = (MeetOurTeam);

/***/ }),

/***/ "./components/ui/meetOurTeam/trainers.js":
/*!***********************************************!*\
  !*** ./components/ui/meetOurTeam/trainers.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);

const trainers = [{
  id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
  img: '/carlos.jpg',
  title: 'CARLOS FRANCISCO',
  subtitle: 'gym owner'
}, {
  id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
  img: '/micheal.jpg',
  title: 'MICHEAL WILLIAMS ',
  subtitle: 'gym owner'
}, {
  id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
  img: '/jack.jpg',
  title: 'JACK BROOK',
  subtitle: 'gym manager'
}, {
  id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
  img: '/paul.jpg',
  title: 'Paul Smith',
  subtitle: 'gym trainer'
}, {
  id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
  img: '/mike.jpg',
  title: 'Mike oddel',
  subtitle: 'gym trainer'
}, {
  id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
  img: '/jane.jpg',
  title: 'jane lockhead',
  subtitle: 'gym trainer'
}, {
  id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
  img: '/alex.jpg',
  title: 'alex james',
  subtitle: ''
}, {
  id: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4(),
  img: '/zack.jpg',
  title: 'zack joe',
  subtitle: 'gym trainer'
}];
/* harmony default export */ __webpack_exports__["default"] = (trainers);

/***/ }),

/***/ "./components/ui/membershipPlans/MembershipPlans.jsx":
/*!***********************************************************!*\
  !*** ./components/ui/membershipPlans/MembershipPlans.jsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _titleBanner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../titleBanner */ "./components/ui/titleBanner.js");
/* harmony import */ var _memeberships__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./memeberships */ "./components/ui/membershipPlans/memeberships.js");
/* harmony import */ var _MembershipCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../MembershipCard */ "./components/ui/MembershipCard.jsx");
var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\fiton\\components\\ui\\membershipPlans\\MembershipPlans.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Stlyed = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.section`
  position: relative;
  background: url(roomGym.jpg);
  background-size: cover;
  background-position: left;
  object-fit: cover;
  min-height: 100vh;
  padding: 9em 1em;
  z-index: 1;
  text-align: center;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 10vw));

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: ${props => props.heroOpacity || 'rgba(0, 0, 0, 0.65)'};
    z-index: -1;
  }

  .card--container {
    max-width: 600px;
    margin: 4em auto;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 3em;

    & > :last-child {
      grid-column: auto;
    }
  }

  @media screen and (min-width: 1200px) {
    .card--container {
      max-width: 900px;
      grid-gap: 0.1em;
    }
  }

  @media screen and (min-width: 1024px) {
    min-height: 85vh;
    clip-path: polygon(0 0, 100% 0, 100% calc(100% - 5vw), 0 100%);
  }
`;

const MembershipPlans = () => {
  return __jsx(Stlyed, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, __jsx("div", {
    className: "max-width",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, __jsx(_titleBanner__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "pricing",
    subtitle: "membership plans",
    invert: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }), __jsx("div", {
    className: "card--container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, _memeberships__WEBPACK_IMPORTED_MODULE_3__["default"].map((items, i) => __jsx(_MembershipCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    key: i,
    data: items,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  })))));
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
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);

const memerships = [{
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

/***/ "./components/ui/scheduleWeek.jsx":
/*!****************************************!*\
  !*** ./components/ui/scheduleWeek.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-reveal/Fade */ "react-reveal/Fade");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Hooks_useForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Hooks/useForm */ "./components/Hooks/useForm.js");
var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\fiton\\components\\ui\\scheduleWeek.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Styled = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.section`
  position: relative;
  background-image: url(/platesbg.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  object-fit: cover;
  min-height: 75vw;
  z-index: 1;
  display: grid;
  justify-items: center;
  align-content: center;
  padding: 2em;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.75);
    z-index: -1;
  }

  .title--content {
    padding: 0 1em;
    text-align: center;
  }

  .img-line {
    width: 100px;
    margin: 0 auto;
  }

  .btns--container {
    text-align: center;
    display: grid;
    margin-top: 1em;
  }

  .input--tab {
    display: block;
    font-family: var(--fn-monterrat);
    font-weight: var(--fw-bold);
    font-size: 1em;
    text-align: center;
    background-color: var(--white-clr);
    color: var(--second-clr);
    padding: 1em 1em;
    border-radius: 40px;
    border: 1px solid var(--second-clr);
    position: relative;
    transition: var(--ease--in--out--02s);
    cursor: pointer;
    margin-bottom: 1em;

    &:focus {
      outline: none;
      border-color: var(--primary-clr);
      border: 2px solid var(--primary-clr);
      color: ${props => props.hoverclr && 'var(--second-clr)'};
      cursor: pointer;
    }
  }

  .last--tab {
    background-color: var(--primary-clr);

    &:focus,
    &:hover {
      border-color: var(--primary-clr);
      border: 2px solid var(--primary-clr);
      color: var(--white-clr);
      background-color: transparent;
    }
  }

  @media screen and (min-width: 760px) {
    min-height: 25vw;

    .btns--container {
      grid-template-columns: repeat(3, 1fr);
      justify-content: center;
    }

    .input--tab {
      padding: 1em 0;
    }

    .last--tab {
      grid-column: 2/2;
    }
  }
  @media screen and (min-width: 1100px) {
    min-height: 12vw;
    background-position: bottom;

    .btns--container {
      grid-template-columns: repeat(4, 1fr);
    }

    .last--tab {
      grid-column: auto;
    }
  }
`;

const ScheduleWeek = () => {
  const submit = () => {
    console.log(form);
    setForm({
      name: '',
      email: '',
      phone: ''
    });
  };

  const {
    handleChange,
    handleSubmit,
    form,
    setForm
  } = Object(_Hooks_useForm__WEBPACK_IMPORTED_MODULE_3__["default"])({
    name: '',
    email: '',
    phone: ''
  }, submit);
  return __jsx(Styled, {
    className: "schedule--weeek",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: undefined
  }, __jsx("div", {
    className: "title--content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: undefined
  }, __jsx("h2", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: undefined
  }, "SCHEDULE YOUR FREE WEEK"), __jsx("img", {
    src: "/yellowLine.png",
    alt: "yellow line",
    className: "img-line",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: undefined
  })), __jsx("form", {
    className: "btns--container",
    onSubmit: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: undefined
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
    __self: undefined
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
    __self: undefined
  }), __jsx("input", {
    type: "number",
    className: "input--tab",
    placeholder: "PHONE",
    onChange: handleChange,
    name: "phone",
    value: form.phone,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: undefined
  }), __jsx("input", {
    type: "submit",
    value: "SUBMIT",
    className: "input--tab last--tab",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ScheduleWeek);

/***/ }),

/***/ "./components/ui/tabs.js":
/*!*******************************!*\
  !*** ./components/ui/tabs.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const TabStyled = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button`
  color: ${props => props.active ? 'var(--second-clr)' : 'var(--white-clr)'};
  background-color: ${props => props.active ? 'transparent' : 'var(--second-clr)'};
  padding: 1em 3.2em;
  border-radius: 40px;
  border: 2px solid var(--primary-clr);
  text-transform: uppercase;
  font-weight: var(--fw-bold);
  transition: var(--ease--in--out--02s);
  border: 3px solid
    ${props => props.active ? 'var(--second-clr)' : 'transparent'};
  outline-color: ${props => props.active ? 'transparent' : 'var(--second-clr);'};
  transform: ${props => props.active ? 'scale(0.95)' : ''};
  cursor: pointer;

  &:hover,
  &focus {
    color: ${props => props.color ? 'var(--second-clr)' : 'var(--white-clr)'};
    transform: scale(0.95);
    background-color: transparent;
    border-color: var(--second-clr);
    outline-color: var(--second-clr);
    cursor: pointer;
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (TabStyled); // const Tabs = ({title, onClick}) => {
//     return (
//         <TabStyled className='tab'>
//         </TabStyled>
//     )
// }
// export default Tabs

/***/ }),

/***/ "./components/ui/titleBanner.js":
/*!**************************************!*\
  !*** ./components/ui/titleBanner.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\fiton\\components\\ui\\titleBanner.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Styled = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  position: relative;
  max-width: fit-content;
  margin: 0 auto;

  .title,
  .subtitle {
    position: relative;
    width: 100%;
    display: block;
    font-family: var(--fn-monterrat);
    font-weight: var(--fw-bold);
    text-transform: uppercase;
  }

  .title {
    color: var(--primary-clr);
    width: fit-content;
    margin: 0 auto;
    font-size: 1.1rem;
    -webkit-text-stroke: 1px var(--primary-clr);
    padding: 0 12%;
    &::after,
    &::before {
      content: '';
      position: absolute;
      height: 30px;
      width: 30px;
      top: 43%;
      transform: translateY(-50%);
      background-size: cover;
    }

    &::before {
      background-image: url(leftTitle.png);
      left: 0;
    }

    &::after {
      background-image: url(rightTitle.png);
      right: 0;
    }
  }

  .subtitle {
    color: ${props => props.invert ? 'var(--white-clr)' : 'var(--second-clr)'};
    font-size: 1.8rem;
  }
`;

const TitleBanner = ({
  subtitle,
  title,
  invert
}) => __jsx(Styled, {
  className: "title--banner",
  invert: invert,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 55
  },
  __self: undefined
}, __jsx("h2", {
  className: "title",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 56
  },
  __self: undefined
}, title), __jsx("h3", {
  className: "subtitle",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 57
  },
  __self: undefined
}, subtitle));

/* harmony default export */ __webpack_exports__["default"] = (TitleBanner);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ "core-js/library/fn/object/define-properties");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptors */ "core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/values.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/values */ "core-js/library/fn/object/values");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "core-js/library/fn/weak-map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var _WeakMap = __webpack_require__(/*! ../core-js/weak-map */ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        _Object$defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! ../next-server/lib/router/rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new _map.default();
var IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getHref() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    return (0, _url.resolve)(pathname, parsedHref);
  }

  handleRef(ref) {
    var isPrefetched = _router.default.router.pageLoader.prefetched[this.getHref()];

    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    _router.default.prefetch(this.getHref());
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = _Object$create(null);

  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function rewriteUrlForNextExport(url) {
  const [pathname, hash] = url.split('#'); // tslint:disable-next-line

  let [path, qs] = pathname.split('?');
  path = path.replace(/\/$/, ''); // Append a trailing slash if this path does not have an extension

  if (!/\.[^/]+\/?$/.test(path)) path += `/`;
  if (qs) path += '?' + qs;
  if (hash) path += '#' + hash;
  return path;
}

exports.rewriteUrlForNextExport = rewriteUrlForNextExport;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$assign = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

var _Promise = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const rewrite_url_for_export_1 = __webpack_require__(/*! ./rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // @ts-ignore variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = (asPath, _cachedData) => {
      let pathname = url_1.parse(asPath).pathname;
      pathname = !pathname || pathname === '/' ? '/index' : pathname;
      return  false ? undefined : fetch( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`).then(res => {
        if (!res.ok) {
          throw new Error(`Failed to load static props`);
        }

        return res.json();
      }).then(data => {
        this.sdc[pathname] = data;
        return data;
      }).catch(err => {
        ;
        err.code = 'PAGE_LOAD_ERROR';
        throw err;
      });
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    return rewrite_url_for_export_1.rewriteUrlForNextExport(url);
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = _Object$assign(_Object$assign({}, data), {
      Component
    });

    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new _Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.SUPPORTS_PERFORMANCE_USER_TIMING) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as));
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeMatch = route_matcher_1.getRouteMatcher(route_regex_1.getRouteRegex(route))(asPathname);

        if (!routeMatch) {
          const error = `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`;

          if (true) {
            throw new Error(error);
          } else {}

          return resolve(false);
        } // Merge params into `query`, overwriting any specified in search


        _Object$assign(query, routeMatch);
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, _Object$assign(_Object$assign({}, routeInfo), {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return _Promise.resolve(cachedRouteInfo);
    }

    return new _Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => Component.__NEXT_SPR ? this._getStaticData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(err => {
      return new _Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new _Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new _Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // @ts-ignore pathname is always defined


      const route = toRoute(pathname); // Prefetch is not supported in development mode because it would trigger on-demand-entries

      if (true) {
        // mark it as prefetched for debugging in dev
        this.pageLoader.prefetched[route] = true;
        return;
      }

      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};

    _Object$keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });

    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  if (true) {
    if (App.prototype && App.prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (_Object$keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      _Object$keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _components_home_about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/home/about */ "./components/home/about.jsx");
/* harmony import */ var _components_ui_mapBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ui/mapBox */ "./components/ui/mapBox.jsx");
/* harmony import */ var _components_contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/contact */ "./components/contact.jsx");
/* harmony import */ var _components_ui_hero__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ui/hero */ "./components/ui/hero.js");
/* harmony import */ var _components_ui_scheduleWeek__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/ui/scheduleWeek */ "./components/ui/scheduleWeek.jsx");
/* harmony import */ var _components_ui_banner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/ui/banner */ "./components/ui/banner.js");
/* harmony import */ var _components_ui_Servicess_Services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/ui/Servicess/Services */ "./components/ui/Servicess/Services.jsx");
/* harmony import */ var _components_ui_Barbell__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/ui/Barbell */ "./components/ui/Barbell.jsx");
/* harmony import */ var _components_ui_meetOurTeam_MeetOurTeam__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/ui/meetOurTeam/MeetOurTeam */ "./components/ui/meetOurTeam/MeetOurTeam.jsx");
/* harmony import */ var _components_ui_membershipPlans_MembershipPlans__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/ui/membershipPlans/MembershipPlans */ "./components/ui/membershipPlans/MembershipPlans.jsx");
/* harmony import */ var _components_ui_Schedule_Schedule__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/ui/Schedule/Schedule */ "./components/ui/Schedule/Schedule.jsx");
/* harmony import */ var _components_ui_PersonalTrainerBanner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/ui/PersonalTrainerBanner */ "./components/ui/PersonalTrainerBanner.jsx");
/* harmony import */ var _components_ui_Testimonies_Testimonies__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/ui/Testimonies/Testimonies */ "./components/ui/Testimonies/Testimonies.jsx");
/* harmony import */ var _components_ui_carousel_carousel__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/ui/carousel/carousel */ "./components/ui/carousel/carousel.jsx");
var _jsxFileName = "C:\\Users\\Eduardo Rivas\\Desktop\\react_Study\\fiton\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
















const IndexPage = () => __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}, __jsx(_components_ui_hero__WEBPACK_IMPORTED_MODULE_5__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}, __jsx(_components_ui_banner__WEBPACK_IMPORTED_MODULE_7__["default"], {
  banner: "home",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
})), __jsx(_components_home_about__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}), __jsx(_components_ui_scheduleWeek__WEBPACK_IMPORTED_MODULE_6__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}), __jsx("hr", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}), __jsx(_components_ui_Barbell__WEBPACK_IMPORTED_MODULE_9__["default"], {
  addMg: "4em auto",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}), __jsx(_components_ui_Servicess_Services__WEBPACK_IMPORTED_MODULE_8__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
}), __jsx(_components_ui_meetOurTeam_MeetOurTeam__WEBPACK_IMPORTED_MODULE_10__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
}), __jsx(_components_ui_membershipPlans_MembershipPlans__WEBPACK_IMPORTED_MODULE_11__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}), __jsx(_components_ui_Schedule_Schedule__WEBPACK_IMPORTED_MODULE_12__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  },
  __self: undefined
}), __jsx(_components_ui_PersonalTrainerBanner__WEBPACK_IMPORTED_MODULE_13__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30
  },
  __self: undefined
}), __jsx(_components_ui_Testimonies_Testimonies__WEBPACK_IMPORTED_MODULE_14__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31
  },
  __self: undefined
}), __jsx(_components_contact__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33
  },
  __self: undefined
}), __jsx(_components_ui_carousel_carousel__WEBPACK_IMPORTED_MODULE_15__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34
  },
  __self: undefined
}));

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Eduardo Rivas\Desktop\react_Study\fiton\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "@brainhubeu/react-carousel":
/*!*********************************************!*\
  !*** external "@brainhubeu/react-carousel" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@brainhubeu/react-carousel");

/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-properties":
/*!**************************************************************!*\
  !*** external "core-js/library/fn/object/define-properties" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptors":
/*!*************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptors" ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/object/values":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/values" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/values");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "core-js/library/fn/weak-map":
/*!**********************************************!*\
  !*** external "core-js/library/fn/weak-map" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-reveal/Fade":
/*!************************************!*\
  !*** external "react-reveal/Fade" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-reveal/Fade");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map