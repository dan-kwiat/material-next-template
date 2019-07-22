webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Layout/AppBar.js":
/*!*************************************!*\
  !*** ./components/Layout/AppBar.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_react_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/react-material-icon */ "./node_modules/@material/react-material-icon/dist/index.js");
/* harmony import */ var _material_react_material_icon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_react_material_icon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_react_top_app_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/react-top-app-bar */ "./node_modules/@material/react-top-app-bar/dist/index.js");
/* harmony import */ var _material_react_top_app_bar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_react_top_app_bar__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/dan/Documents/Repositories/material-next-template/components/Layout/AppBar.js";





var AppBar = function AppBar(_ref) {
  var isMobile = _ref.isMobile,
      setIsDrawerOpen = _ref.setIsDrawerOpen;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_react_top_app_bar__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: "appbar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_react_top_app_bar__WEBPACK_IMPORTED_MODULE_3__["TopAppBarRow"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_react_top_app_bar__WEBPACK_IMPORTED_MODULE_3__["TopAppBarSection"], {
    align: "start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, isMobile ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_react_top_app_bar__WEBPACK_IMPORTED_MODULE_3__["TopAppBarIcon"], {
    navIcon: true,
    tabIndex: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_react_material_icon__WEBPACK_IMPORTED_MODULE_2___default.a, {
    hasRipple: true,
    icon: "menu",
    onClick: function onClick() {
      return setIsDrawerOpen(true);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  })) : null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_react_top_app_bar__WEBPACK_IMPORTED_MODULE_3__["TopAppBarTitle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, isMobile ? 'Mobile Title' : 'Desktop Title'))));
};

AppBar.propTypes = {
  isMobile: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  setIsDrawerOpen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (AppBar);

/***/ })

})
//# sourceMappingURL=_app.js.f97e2c541eff321f1774.hot-update.js.map