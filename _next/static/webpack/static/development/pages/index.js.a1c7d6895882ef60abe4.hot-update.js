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

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var DrawerList =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DrawerList, _React$Component);

  function DrawerList() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DrawerList);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DrawerList)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      selectedIndex: 0
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setSelectedIndex", function (selectedIndex) {
      console.log("Selected index: ".concat(selectedIndex));

      _this.setState({
        selectedIndex: selectedIndex
      });
    });

    return _this;
  }

  _createClass(DrawerList, [{
    key: "render",
    value: function render() {
      var onItemClick = this.props.onItemClick;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_react_list__WEBPACK_IMPORTED_MODULE_3___default.a, {
        singleSelection: true,
        selectedIndex: this.state.selectedIndex,
        handleSelect: this.setSelectedIndex,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_react_list__WEBPACK_IMPORTED_MODULE_3__["ListItem"], {
        onClick: onItemClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_react_list__WEBPACK_IMPORTED_MODULE_3__["ListItemGraphic"], {
        graphic: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_react_material_icon__WEBPACK_IMPORTED_MODULE_4___default.a, {
          icon: "home",
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
        primaryText: "Home",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_react_list__WEBPACK_IMPORTED_MODULE_3__["ListItem"], {
        onClick: onItemClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_react_list__WEBPACK_IMPORTED_MODULE_3__["ListItemGraphic"], {
        graphic: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_react_material_icon__WEBPACK_IMPORTED_MODULE_4___default.a, {
          icon: "search",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          __self: this
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_react_list__WEBPACK_IMPORTED_MODULE_3__["ListItemText"], {
        primaryText: "Search",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_react_list__WEBPACK_IMPORTED_MODULE_3__["ListItem"], {
        onClick: onItemClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_react_list__WEBPACK_IMPORTED_MODULE_3__["ListItemGraphic"], {
        graphic: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_react_material_icon__WEBPACK_IMPORTED_MODULE_4___default.a, {
          icon: "settings",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          },
          __self: this
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_react_list__WEBPACK_IMPORTED_MODULE_3__["ListItemText"], {
        primaryText: "Settings",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_react_list__WEBPACK_IMPORTED_MODULE_3__["ListItemMeta"], {
        meta: "meta info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      })));
    }
  }]);

  return DrawerList;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

DrawerList.propTypes = {
  onItemClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};

var DeviceAppropriateDrawer = function DeviceAppropriateDrawer(_ref) {
  var isOpen = _ref.isOpen,
      setIsDrawerOpen = _ref.setIsDrawerOpen,
      children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_react_drawer__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: "permanent-drawer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
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
      lineNumber: 61
    },
    __self: this
  }, children), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", {
    jsx: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
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
      lineNumber: 90
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_react_drawer__WEBPACK_IMPORTED_MODULE_2__["DrawerHeader"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_react_drawer__WEBPACK_IMPORTED_MODULE_2__["DrawerTitle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "Drawer Title"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_react_drawer__WEBPACK_IMPORTED_MODULE_2__["DrawerSubtitle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, "Drawer Subtitle")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_react_drawer__WEBPACK_IMPORTED_MODULE_2__["DrawerContent"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DrawerList, {
    onItemClick: function onItemClick() {
      props.setIsDrawerOpen && props.setIsDrawerOpen(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
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
//# sourceMappingURL=index.js.a1c7d6895882ef60abe4.hot-update.js.map