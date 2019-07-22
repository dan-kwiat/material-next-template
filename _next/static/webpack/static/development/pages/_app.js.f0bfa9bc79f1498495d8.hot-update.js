webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Layout/Drawer/index.js":
/*!*******************************************!*\
  !*** ./components/Layout/Drawer/index.js ***!
  \*******************************************/
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
/* harmony import */ var _DrawerList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DrawerList */ "./components/Layout/Drawer/DrawerList.js");
var _jsxFileName = "/Users/dan/Documents/Repositories/material-next-template/components/Layout/Drawer/index.js";





var MobileDrawer = function MobileDrawer(_ref) {
  var isOpen = _ref.isOpen,
      setIsDrawerOpen = _ref.setIsDrawerOpen;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_react_drawer__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: "app-drawer",
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
      lineNumber: 12
    },
    __self: this
  });
};

MobileDrawer.propTypes = {
  isOpen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  setIsDrawerOpen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};

var DesktopDrawer = function DesktopDrawer() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_react_drawer__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: "app-drawer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  });
};

var ResponsiveDrawer = function ResponsiveDrawer(_ref2) {
  var isMobile = _ref2.isMobile,
      isOpen = _ref2.isOpen,
      setIsDrawerOpen = _ref2.setIsDrawerOpen;
  return isMobile ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MobileDrawer, {
    isOpen: isOpen,
    setIsDrawerOpen: setIsDrawerOpen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DesktopDrawer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  });
};

ResponsiveDrawer.propTypes = {
  isMobile: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  isOpen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  setIsDrawerOpen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};

var Contents = function Contents(_ref3) {
  var isMobile = _ref3.isMobile,
      setIsDrawerOpen = _ref3.setIsDrawerOpen;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_react_drawer__WEBPACK_IMPORTED_MODULE_2__["DrawerHeader"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_react_drawer__WEBPACK_IMPORTED_MODULE_2__["DrawerTitle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, isMobile ? 'Mobile Drawer Title' : 'Mobile Desktop Title'), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_react_drawer__WEBPACK_IMPORTED_MODULE_2__["DrawerSubtitle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, isMobile ? 'Mobile Drawer Subtitle' : 'Mobile Desktop Subtitle')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_react_drawer__WEBPACK_IMPORTED_MODULE_2__["DrawerContent"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DrawerList__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onItemClick: function onItemClick() {
      return setIsDrawerOpen(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  })));
};

Contents.propTypes = {
  isMobile: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  setIsDrawerOpen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};

var Drawer = function Drawer(_ref4) {
  var isMobile = _ref4.isMobile,
      isOpen = _ref4.isOpen,
      setIsDrawerOpen = _ref4.setIsDrawerOpen;
  return isMobile ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_react_drawer__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: "app-drawer",
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
      lineNumber: 71
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Contents, {
    isMobile: isMobile,
    setIsDrawerOpen: setIsDrawerOpen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  })) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_react_drawer__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: "app-drawer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Contents, {
    isMobile: isMobile,
    setIsDrawerOpen: setIsDrawerOpen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }));
};

Drawer.propTypes = {
  isMobile: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  isOpen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  setIsDrawerOpen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Drawer);

/***/ })

})
//# sourceMappingURL=_app.js.f0bfa9bc79f1498495d8.hot-update.js.map