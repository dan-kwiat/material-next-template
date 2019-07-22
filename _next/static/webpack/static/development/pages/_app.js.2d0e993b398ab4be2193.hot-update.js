webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Layout/Drawer/DrawerList.js":
/*!************************************************!*\
  !*** ./components/Layout/Drawer/DrawerList.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/config */ "./node_modules/next-server/dist/lib/runtime-config.js");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_react_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material/react-list */ "./node_modules/@material/react-list/dist/index.js");
/* harmony import */ var _material_react_list__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_react_list__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_react_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material/react-material-icon */ "./node_modules/@material/react-material-icon/dist/index.js");
/* harmony import */ var _material_react_material_icon__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_react_material_icon__WEBPACK_IMPORTED_MODULE_10__);





var _jsxFileName = "/Users/dan/Documents/Repositories/material-next-template/components/Layout/Drawer/DrawerList.js";








var _getConfig = next_config__WEBPACK_IMPORTED_MODULE_8___default()(),
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
}, {
  path: '/movies',
  icon: 'movie',
  label: 'Movies',
  meta: 'dynamic'
}];

var DrawerList =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(DrawerList, _Component);

  function DrawerList() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DrawerList);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(DrawerList).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(DrawerList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var router = this.props.router;
      setTimeout(function () {
        NAV_LINKS.forEach(function (x) {
          return router.prefetch(x.path);
        }); // don't need HOME_ROUTE prefix
      }, 1000);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          onItemClick = _this$props.onItemClick,
          router = _this$props.router;
      var selectedIndex = NAV_LINKS.reduce(function (agg, x, i) {
        return x.path === router.pathname ? i : agg;
      }, 0);
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_react_list__WEBPACK_IMPORTED_MODULE_9___default.a, {
        tag: "nav",
        singleSelection: true,
        selectedIndex: selectedIndex,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, NAV_LINKS.map(function (_ref) {
        var path = _ref.path,
            icon = _ref.icon,
            label = _ref.label,
            meta = _ref.meta;
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_react_list__WEBPACK_IMPORTED_MODULE_9__["ListItem"], {
          tag: "a",
          key: path,
          href: "".concat(HOME_ROUTE).concat(path),
          onClick: function onClick(e) {
            e.preventDefault();
            router.push("".concat(HOME_ROUTE).concat(path));
            onItemClick();
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_react_list__WEBPACK_IMPORTED_MODULE_9__["ListItemGraphic"], {
          graphic: react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_react_material_icon__WEBPACK_IMPORTED_MODULE_10___default.a, {
            icon: icon,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 70
            },
            __self: this
          }),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_react_list__WEBPACK_IMPORTED_MODULE_9__["ListItemText"], {
          primaryText: label,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_react_list__WEBPACK_IMPORTED_MODULE_9__["ListItemMeta"], {
          meta: meta || '',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          },
          __self: this
        }));
      }));
    }
  }]);

  return DrawerList;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

DrawerList.propTypes = {
  onItemClick: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_7__["withRouter"])(DrawerList));

/***/ })

})
//# sourceMappingURL=_app.js.2d0e993b398ab4be2193.hot-update.js.map