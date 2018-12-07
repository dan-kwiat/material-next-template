webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Drawer.js":
/*!******************************!*\
  !*** ./components/Drawer.js ***!
  \******************************/
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
/* harmony import */ var _material_react_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/react-list */ "./node_modules/@material/react-list/dist/index.js");
/* harmony import */ var _material_react_list__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_react_list__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_react_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material/react-material-icon */ "./node_modules/@material/react-material-icon/dist/index.js");
/* harmony import */ var _material_react_material_icon__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_react_material_icon__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/dan/Documents/Repositories/material-next-template/components/Drawer.js";


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var DrawerList = function DrawerList(_ref) {
  var onItemClick = _ref.onItemClick;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      _useState2 = _slicedToArray(_useState, 2),
      selectedIndex = _useState2[0],
      setSelectedIndex = _useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_react_list__WEBPACK_IMPORTED_MODULE_3___default.a, {
    singleSelection: true,
    selectedIndex: selectedIndex,
    handleSelect: setSelectedIndex,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_react_list__WEBPACK_IMPORTED_MODULE_3__["ListItem"], {
    onClick: onItemClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_react_list__WEBPACK_IMPORTED_MODULE_3__["ListItemGraphic"], {
    graphic: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_react_material_icon__WEBPACK_IMPORTED_MODULE_4___default.a, {
      icon: "home",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_react_list__WEBPACK_IMPORTED_MODULE_3__["ListItemText"], {
    primaryText: "Home",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_react_list__WEBPACK_IMPORTED_MODULE_3__["ListItem"], {
    onClick: onItemClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_react_list__WEBPACK_IMPORTED_MODULE_3__["ListItemGraphic"], {
    graphic: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_react_material_icon__WEBPACK_IMPORTED_MODULE_4___default.a, {
      icon: "search",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_react_list__WEBPACK_IMPORTED_MODULE_3__["ListItemText"], {
    primaryText: "Search",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_react_list__WEBPACK_IMPORTED_MODULE_3__["ListItem"], {
    onClick: onItemClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_react_list__WEBPACK_IMPORTED_MODULE_3__["ListItemGraphic"], {
    graphic: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_react_material_icon__WEBPACK_IMPORTED_MODULE_4___default.a, {
      icon: "settings",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_react_list__WEBPACK_IMPORTED_MODULE_3__["ListItemText"], {
    primaryText: "Settings",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_react_list__WEBPACK_IMPORTED_MODULE_3__["ListItemMeta"], {
    meta: "meta info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  })));
};

DrawerList.propTypes = {
  onItemClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};

var DeviceAppropriateDrawer = function DeviceAppropriateDrawer(_ref2) {
  var isOpen = _ref2.isOpen,
      setIsDrawerOpen = _ref2.setIsDrawerOpen,
      children = _ref2.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_react_drawer__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: "permanent-drawer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
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
      lineNumber: 52
    },
    __self: this
  }, children), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", {
    jsx: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "\n      @media (min-width: 840px) {\n        .modal-drawer {\n          display: none !important;\n        }\n      }\n      @media (max-width: 839px) {\n        .permanent-drawer {\n          display: none !important;\n        }\n      }\n    "));
};

DeviceAppropriateDrawer.propTypes = {
  isOpen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  setIsDrawerOpen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};

var Drawer = function Drawer(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DeviceAppropriateDrawer, _extends({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_react_drawer__WEBPACK_IMPORTED_MODULE_2__["DrawerHeader"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_react_drawer__WEBPACK_IMPORTED_MODULE_2__["DrawerTitle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, "Drawer Title"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_react_drawer__WEBPACK_IMPORTED_MODULE_2__["DrawerSubtitle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, "Drawer Subtitle")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_react_drawer__WEBPACK_IMPORTED_MODULE_2__["DrawerContent"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DrawerList, {
    onItemClick: function onItemClick() {
      props.setIsDrawerOpen && props.setIsDrawerOpen(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
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
//# sourceMappingURL=index.js.1a9216bcd32e36de8e45.hot-update.js.map