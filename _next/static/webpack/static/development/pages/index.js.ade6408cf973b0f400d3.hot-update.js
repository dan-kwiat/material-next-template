webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/AppBar.js":
/*!******************************!*\
  !*** ./components/AppBar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_react_top_app_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/react-top-app-bar */ "./node_modules/@material/react-top-app-bar/dist/index.js");
/* harmony import */ var _material_react_top_app_bar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_react_top_app_bar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_react_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/react-material-icon */ "./node_modules/@material/react-material-icon/dist/index.js");
/* harmony import */ var _material_react_material_icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_react_material_icon__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/dan/Documents/Repositories/material-next-template/components/AppBar.js";





var renderDrawerIcon = function renderDrawerIcon(onClick) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_react_material_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
    icon: "menu",
    onClick: onClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  });
};

var AppBar = function AppBar(_ref) {
  var setIsDrawerOpen = _ref.setIsDrawerOpen;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_react_top_app_bar__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: "mobile-appbar",
    title: "WORTHWHILE",
    navigationIcon: renderDrawerIcon(function () {
      return setIsDrawerOpen(true);
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_react_top_app_bar__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: "desktop-appbar appbar-alternate",
    title: "WORTHWHILE",
    fixed: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", {
    jsx: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "\n      @media (min-width: 840px) {\n        .mobile-appbar {\n          display: none !important;\n        }\n      }\n      @media (max-width: 839px) {\n        .desktop-appbar {\n          display: none !important;\n        }\n      }\n      .mdc-top-app-bar__title {\n        letter-spacing: 0.1em;\n      }\n    "));
};

AppBar.propTypes = {
  setIsDrawerOpen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (AppBar);

/***/ })

})
//# sourceMappingURL=index.js.ade6408cf973b0f400d3.hot-update.js.map