webpackHotUpdate("static/development/pages/_app.js",{

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
/* harmony import */ var _material_react_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/react-material-icon */ "./node_modules/@material/react-material-icon/dist/index.js");
/* harmony import */ var _material_react_material_icon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_react_material_icon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_react_top_app_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/react-top-app-bar */ "./node_modules/@material/react-top-app-bar/dist/index.js");
/* harmony import */ var _material_react_top_app_bar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_react_top_app_bar__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/dan/Documents/Repositories/material-next-template/components/AppBar.js";

 // import TopAppBar from '@material/react-top-app-bar'




var Bar = function Bar(_ref) {
  var className = _ref.className,
      title = _ref.title,
      navToggle = _ref.navToggle,
      fixed = _ref.fixed;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_react_top_app_bar__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: className,
    fixed: fixed,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_react_top_app_bar__WEBPACK_IMPORTED_MODULE_3__["TopAppBarRow"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_react_top_app_bar__WEBPACK_IMPORTED_MODULE_3__["TopAppBarSection"], {
    align: "start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, navToggle ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_react_top_app_bar__WEBPACK_IMPORTED_MODULE_3__["TopAppBarIcon"], {
    navIcon: true,
    tabIndex: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, navToggle()) : null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_react_top_app_bar__WEBPACK_IMPORTED_MODULE_3__["TopAppBarTitle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, title))));
}; // const renderDrawerIcon = onClick => (
//   <MaterialIcon
//     icon='menu'
//     onClick={onClick}
//   />
// )


var AppBar = function AppBar(_ref2) {
  var setIsDrawerOpen = _ref2.setIsDrawerOpen;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Bar, {
    className: "mobile-appbar",
    title: "Title",
    navToggle: function navToggle() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_react_material_icon__WEBPACK_IMPORTED_MODULE_2___default.a, {
        hasRipple: true,
        icon: "menu",
        onClick: function onClick() {
          return setIsDrawerOpen(true);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Bar, {
    className: "desktop-appbar",
    title: "Title",
    fixed: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", {
    jsx: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "\n      @media (min-width: 840px) {\n        .mobile-appbar {\n          display: none !important;\n        }\n      }\n      @media (max-width: 839px) {\n        .desktop-appbar {\n          display: none !important;\n        }\n      }\n    "));
};

AppBar.propTypes = {
  setIsDrawerOpen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (AppBar);

/***/ })

})
//# sourceMappingURL=_app.js.ab6b9d0b2f1de73f6fe1.hot-update.js.map