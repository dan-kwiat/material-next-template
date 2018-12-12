webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Drawer/DrawerList.js":
/*!*****************************************!*\
  !*** ./components/Drawer/DrawerList.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/config */ "./node_modules/next/config.js");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_react_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material/react-list */ "../material-components-web-react/packages/list/dist/index.js");
/* harmony import */ var _material_react_list__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_react_list__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_react_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material/react-material-icon */ "./node_modules/@material/react-material-icon/dist/index.js");
/* harmony import */ var _material_react_material_icon__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_react_material_icon__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/dan/Documents/Repositories/material-next-template/components/Drawer/DrawerList.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var _getConfig = next_config__WEBPACK_IMPORTED_MODULE_3___default()(),
    publicRuntimeConfig = _getConfig.publicRuntimeConfig;

var HOME_ROUTE = publicRuntimeConfig.HOME_ROUTE;
var NAV_LINKS = [{
  path: '/',
  icon: 'home',
  label: 'Home'
}, {
  path: '/search',
  icon: 'search',
  label: 'Search'
}, {
  path: '/settings',
  icon: 'settings',
  label: 'Settings',
  meta: 'meta info'
}];

var DrawerList =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DrawerList, _React$Component);

  function DrawerList() {
    _classCallCheck(this, DrawerList);

    return _possibleConstructorReturn(this, _getPrototypeOf(DrawerList).apply(this, arguments));
  }

  _createClass(DrawerList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var router = this.props.router;
      router.prefetch("".concat(HOME_ROUTE).concat(NAV_LINKS[2].path));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          onItemClick = _this$props.onItemClick,
          router = _this$props.router;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_react_list__WEBPACK_IMPORTED_MODULE_4___default.a, {
        tag: "nav",
        singleSelection: true,
        selectedIndex: NAV_LINKS.findIndex(function (x) {
          return x.path === router.pathname;
        }) // needs polyfill?
        ,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, NAV_LINKS.map(function (_ref) {
        var path = _ref.path,
            icon = _ref.icon,
            label = _ref.label,
            meta = _ref.meta;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_react_list__WEBPACK_IMPORTED_MODULE_4__["ListItem"], {
          tag: "a",
          key: path,
          href: "".concat(HOME_ROUTE).concat(path),
          onClick: function onClick(e) {
            // could prefetch routes in componentDidMount?
            e.preventDefault();
            router.push("".concat(HOME_ROUTE).concat(path));
            onItemClick();
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_react_list__WEBPACK_IMPORTED_MODULE_4__["ListItemGraphic"], {
          graphic: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_react_material_icon__WEBPACK_IMPORTED_MODULE_5___default.a, {
            icon: icon,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 60
            },
            __self: this
          }),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_react_list__WEBPACK_IMPORTED_MODULE_4__["ListItemText"], {
          primaryText: label,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_react_list__WEBPACK_IMPORTED_MODULE_4__["ListItemMeta"], {
          meta: meta || '',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          },
          __self: this
        }));
      }));
    }
  }]);

  return DrawerList;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

DrawerList.propTypes = {
  onItemClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(DrawerList));

/***/ })

})
//# sourceMappingURL=_app.js.ef1fc23c9a5fa2ff1756.hot-update.js.map