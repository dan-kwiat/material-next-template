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

var DrawerList = function DrawerList(_ref) {
  var onItemClick = _ref.onItemClick,
      router = _ref.router;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_react_list__WEBPACK_IMPORTED_MODULE_4___default.a, {
    tag: "nav",
    singleSelection: true,
    selectedIndex: NAV_LINKS.findIndex(function (x) {
      return x.path === router.pathname;
    }) // needs polyfill?
    ,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, NAV_LINKS.map(function (_ref2) {
    var path = _ref2.path,
        icon = _ref2.icon,
        label = _ref2.label,
        meta = _ref2.meta;
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
        lineNumber: 42
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_react_list__WEBPACK_IMPORTED_MODULE_4__["ListItemGraphic"], {
      graphic: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_react_material_icon__WEBPACK_IMPORTED_MODULE_5___default.a, {
        icon: icon,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_react_list__WEBPACK_IMPORTED_MODULE_4__["ListItemText"], {
      primaryText: label,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_react_list__WEBPACK_IMPORTED_MODULE_4__["ListItemMeta"], {
      meta: meta || '',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }));
  }));
};

DrawerList.propTypes = {
  onItemClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(DrawerList));

/***/ })

})
//# sourceMappingURL=_app.js.a40489140a2f14718b8f.hot-update.js.map