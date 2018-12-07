webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Drawer/DeviceAppropriateDrawer.js":
/*!******************************************************!*\
  !*** ./components/Drawer/DeviceAppropriateDrawer.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_react_drawer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/react-drawer */ "./node_modules/@material/react-drawer/dist/index.js");
/* harmony import */ var _material_react_drawer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_react_drawer__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/dan/Documents/Repositories/material-next-template/components/Drawer/DeviceAppropriateDrawer.js";




var DeviceAppropriateDrawer = function DeviceAppropriateDrawer(_ref) {
  var isOpen = _ref.isOpen,
      setIsDrawerOpen = _ref.setIsDrawerOpen,
      children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_react_drawer__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: "permanent-drawer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, children), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_react_drawer__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: "modal-drawer",
    modal: true,
    open: isOpen,
    onOpen: function onOpen() {
      return setIsDrawerOpen(true);
    },
    onClose: function onClose() {
      return setIsDrawerOpen(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, children), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", {
    jsx: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "\n      @media (min-width: 840px) {\n        .modal-drawer {\n          display: none !important;\n        }\n      }\n      @media (max-width: 839px) {\n        .permanent-drawer {\n          display: none !important;\n        }\n      }\n    "));
};

DeviceAppropriateDrawer.propTypes = {
  isOpen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  setIsDrawerOpen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (DeviceAppropriateDrawer);

/***/ }),

/***/ "./components/Drawer/index.js":
/*!************************************!*\
  !*** ./components/Drawer/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_react_drawer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/react-drawer */ "./node_modules/@material/react-drawer/dist/index.js");
/* harmony import */ var _material_react_drawer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_react_drawer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _DrawerList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DrawerList */ "./components/Drawer/DrawerList.js");
/* harmony import */ var _DeviceAppropriateDrawer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DeviceAppropriateDrawer */ "./components/Drawer/DeviceAppropriateDrawer.js");
var _jsxFileName = "/Users/dan/Documents/Repositories/material-next-template/components/Drawer/index.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







var Drawer = function Drawer(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DeviceAppropriateDrawer__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_react_drawer__WEBPACK_IMPORTED_MODULE_2__["DrawerHeader"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_react_drawer__WEBPACK_IMPORTED_MODULE_2__["DrawerTitle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Drawer Title"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_react_drawer__WEBPACK_IMPORTED_MODULE_2__["DrawerSubtitle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Drawer Subtitle")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_react_drawer__WEBPACK_IMPORTED_MODULE_2__["DrawerContent"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DrawerList__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onItemClick: function onItemClick() {
      props.setIsDrawerOpen && props.setIsDrawerOpen(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "plain link")));
};

Drawer.propTypes = {
  isOpen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  setIsDrawerOpen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Drawer);

/***/ })

})
//# sourceMappingURL=index.js.e561c1611919a630cea9.hot-update.js.map