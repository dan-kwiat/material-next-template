webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/AppBar.js":
false,

/***/ "./components/Drawer/DeviceAppropriateDrawer.js":
false,

/***/ "./components/Drawer/DrawerList.js":
false,

/***/ "./components/Drawer/index.js":
false,

/***/ "./components/Layout/AppBar.js":
/*!*************************************!*\
  !*** ./components/Layout/AppBar.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_react_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/react-material-icon */ "./node_modules/@material/react-material-icon/dist/index.js");
/* harmony import */ var _material_react_material_icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_react_material_icon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_react_top_app_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material/react-top-app-bar */ "./node_modules/@material/react-top-app-bar/dist/index.js");
/* harmony import */ var _material_react_top_app_bar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_react_top_app_bar__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/dan/Documents/Repositories/material-next-template/components/Layout/AppBar.js";






var Bar = function Bar(_ref) {
  var className = _ref.className,
      title = _ref.title,
      renderToggle = _ref.renderToggle,
      fixed = _ref.fixed;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_react_top_app_bar__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: className,
    fixed: fixed,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_react_top_app_bar__WEBPACK_IMPORTED_MODULE_4__["TopAppBarRow"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_react_top_app_bar__WEBPACK_IMPORTED_MODULE_4__["TopAppBarSection"], {
    align: "start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, renderToggle ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_react_top_app_bar__WEBPACK_IMPORTED_MODULE_4__["TopAppBarIcon"], {
    navIcon: true,
    tabIndex: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, renderToggle()) : null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_react_top_app_bar__WEBPACK_IMPORTED_MODULE_4__["TopAppBarTitle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, title))));
};

var AppBar = function AppBar(_ref2) {
  var setIsDrawerOpen = _ref2.setIsDrawerOpen;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Bar, {
    className: "mobile-appbar",
    title: "Title",
    renderToggle: function renderToggle() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_react_material_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
        hasRipple: true,
        icon: "menu",
        onClick: function onClick() {
          return setIsDrawerOpen(true);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Bar, {
    className: "desktop-appbar",
    title: "Title",
    fixed: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3595979589",
    __self: this
  }, "@media (min-width:840px){.mobile-appbar.jsx-3595979589{display:none !important;}}@media (max-width:839px){.desktop-appbar.jsx-3595979589{display:none !important;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW4vRG9jdW1lbnRzL1JlcG9zaXRvcmllcy9tYXRlcmlhbC1uZXh0LXRlbXBsYXRlL2NvbXBvbmVudHMvTGF5b3V0L0FwcEJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQ2dCLEFBSW1DLEFBS0Esd0JBSjFCLEFBS0EiLCJmaWxlIjoiL1VzZXJzL2Rhbi9Eb2N1bWVudHMvUmVwb3NpdG9yaWVzL21hdGVyaWFsLW5leHQtdGVtcGxhdGUvY29tcG9uZW50cy9MYXlvdXQvQXBwQmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IE1hdGVyaWFsSWNvbiBmcm9tICdAbWF0ZXJpYWwvcmVhY3QtbWF0ZXJpYWwtaWNvbidcbmltcG9ydCBUb3BBcHBCYXIsIHtcbiAgVG9wQXBwQmFySWNvbixcbiAgVG9wQXBwQmFyUm93LFxuICBUb3BBcHBCYXJTZWN0aW9uLFxuICBUb3BBcHBCYXJUaXRsZSxcbn0gZnJvbSAnQG1hdGVyaWFsL3JlYWN0LXRvcC1hcHAtYmFyJ1xuXG5jb25zdCBCYXIgPSAoe1xuICBjbGFzc05hbWUsXG4gIHRpdGxlLFxuICByZW5kZXJUb2dnbGUsXG4gIGZpeGVkLFxufSkgPT4gKFxuICA8VG9wQXBwQmFyIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBmaXhlZD17Zml4ZWR9PlxuICAgIDxUb3BBcHBCYXJSb3c+XG4gICAgICA8VG9wQXBwQmFyU2VjdGlvbiBhbGlnbj0nc3RhcnQnPlxuICAgICAgICB7cmVuZGVyVG9nZ2xlID8gKFxuICAgICAgICAgIDxUb3BBcHBCYXJJY29uIG5hdkljb24gdGFiSW5kZXg9ezB9PlxuICAgICAgICAgICAge3JlbmRlclRvZ2dsZSgpfVxuICAgICAgICAgIDwvVG9wQXBwQmFySWNvbj5cbiAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDxUb3BBcHBCYXJUaXRsZT57dGl0bGV9PC9Ub3BBcHBCYXJUaXRsZT5cbiAgICAgIDwvVG9wQXBwQmFyU2VjdGlvbj5cbiAgICA8L1RvcEFwcEJhclJvdz5cbiAgPC9Ub3BBcHBCYXI+XG4pXG5cbmNvbnN0IEFwcEJhciA9ICh7IHNldElzRHJhd2VyT3BlbiB9KSA9PiAoXG4gIDw+XG4gICAgPEJhclxuICAgICAgY2xhc3NOYW1lPSdtb2JpbGUtYXBwYmFyJ1xuICAgICAgdGl0bGU9J1RpdGxlJ1xuICAgICAgcmVuZGVyVG9nZ2xlPXsoKSA9PiAoXG4gICAgICAgIDxNYXRlcmlhbEljb25cbiAgICAgICAgICBoYXNSaXBwbGVcbiAgICAgICAgICBpY29uPSdtZW51J1xuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzRHJhd2VyT3Blbih0cnVlKX1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgLz5cbiAgICA8QmFyXG4gICAgICBjbGFzc05hbWU9J2Rlc2t0b3AtYXBwYmFyJ1xuICAgICAgdGl0bGU9J1RpdGxlJ1xuICAgICAgZml4ZWRcbiAgICAvPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA4NDBweCkge1xuICAgICAgICAubW9iaWxlLWFwcGJhciB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogODM5cHgpIHtcbiAgICAgICAgLmRlc2t0b3AtYXBwYmFyIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvPlxuKVxuQXBwQmFyLnByb3BUeXBlcyA9IHtcbiAgc2V0SXNEcmF3ZXJPcGVuOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHBCYXIiXX0= */\n/*@ sourceURL=/Users/dan/Documents/Repositories/material-next-template/components/Layout/AppBar.js */"));
};

AppBar.propTypes = {
  setIsDrawerOpen: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (AppBar);

/***/ }),

/***/ "./components/Layout/Drawer/DeviceAppropriateDrawer.js":
/*!*************************************************************!*\
  !*** ./components/Layout/Drawer/DeviceAppropriateDrawer.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_react_drawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/react-drawer */ "./node_modules/@material/react-drawer/dist/index.js");
/* harmony import */ var _material_react_drawer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_react_drawer__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/dan/Documents/Repositories/material-next-template/components/Layout/Drawer/DeviceAppropriateDrawer.js";





var DeviceAppropriateDrawer = function DeviceAppropriateDrawer(_ref) {
  var isOpen = _ref.isOpen,
      setIsDrawerOpen = _ref.setIsDrawerOpen,
      children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_react_drawer__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: "permanent-drawer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, children), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_react_drawer__WEBPACK_IMPORTED_MODULE_3___default.a, {
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
  }, children), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3329626593",
    __self: this
  }, "@media (min-width:840px){.modal-drawer.jsx-3329626593{display:none !important;}}@media (max-width:839px){.permanent-drawer.jsx-3329626593{display:none !important;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW4vRG9jdW1lbnRzL1JlcG9zaXRvcmllcy9tYXRlcmlhbC1uZXh0LXRlbXBsYXRlL2NvbXBvbmVudHMvTGF5b3V0L0RyYXdlci9EZXZpY2VBcHByb3ByaWF0ZURyYXdlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQmdCLEFBSW1DLEFBS0Esd0JBSjFCLEFBS0EiLCJmaWxlIjoiL1VzZXJzL2Rhbi9Eb2N1bWVudHMvUmVwb3NpdG9yaWVzL21hdGVyaWFsLW5leHQtdGVtcGxhdGUvY29tcG9uZW50cy9MYXlvdXQvRHJhd2VyL0RldmljZUFwcHJvcHJpYXRlRHJhd2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IE5hdkRyYXdlciBmcm9tICdAbWF0ZXJpYWwvcmVhY3QtZHJhd2VyJ1xuXG5jb25zdCBEZXZpY2VBcHByb3ByaWF0ZURyYXdlciA9ICh7IGlzT3Blbiwgc2V0SXNEcmF3ZXJPcGVuLCBjaGlsZHJlbiB9KSA9PiAoXG4gIDw+XG4gICAgPE5hdkRyYXdlclxuICAgICAgY2xhc3NOYW1lPSdwZXJtYW5lbnQtZHJhd2VyJ1xuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L05hdkRyYXdlcj5cbiAgICA8TmF2RHJhd2VyXG4gICAgICBjbGFzc05hbWU9J21vZGFsLWRyYXdlcidcbiAgICAgIG1vZGFsXG4gICAgICBvcGVuPXtpc09wZW59XG4gICAgICBvbk9wZW49eygpID0+IHNldElzRHJhd2VyT3Blbih0cnVlKX1cbiAgICAgIG9uQ2xvc2U9eygpID0+IHNldElzRHJhd2VyT3BlbihmYWxzZSl9XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvTmF2RHJhd2VyPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA4NDBweCkge1xuICAgICAgICAubW9kYWwtZHJhd2VyIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA4MzlweCkge1xuICAgICAgICAucGVybWFuZW50LWRyYXdlciB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8Lz5cbilcbkRldmljZUFwcHJvcHJpYXRlRHJhd2VyLnByb3BUeXBlcyA9IHtcbiAgaXNPcGVuOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICBzZXRJc0RyYXdlck9wZW46IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59XG5cbmV4cG9ydCBkZWZhdWx0IERldmljZUFwcHJvcHJpYXRlRHJhd2VyIl19 */\n/*@ sourceURL=/Users/dan/Documents/Repositories/material-next-template/components/Layout/Drawer/DeviceAppropriateDrawer.js */"));
};

DeviceAppropriateDrawer.propTypes = {
  isOpen: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,
  setIsDrawerOpen: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (DeviceAppropriateDrawer);

/***/ }),

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
      NAV_LINKS.forEach(function (x) {
        return router.prefetch(x.path);
      }); // do not include HOME_ROUTE prefix
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
          lineNumber: 46
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
            lineNumber: 52
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_react_list__WEBPACK_IMPORTED_MODULE_9__["ListItemGraphic"], {
          graphic: react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_react_material_icon__WEBPACK_IMPORTED_MODULE_10___default.a, {
            icon: icon,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 62
            },
            __self: this
          }),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_react_list__WEBPACK_IMPORTED_MODULE_9__["ListItemText"], {
          primaryText: label,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_react_list__WEBPACK_IMPORTED_MODULE_9__["ListItemMeta"], {
          meta: meta || '',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
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

/***/ }),

/***/ "./components/Layout/Drawer/index.js":
/*!*******************************************!*\
  !*** ./components/Layout/Drawer/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_react_drawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/react-drawer */ "./node_modules/@material/react-drawer/dist/index.js");
/* harmony import */ var _material_react_drawer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_react_drawer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _DrawerList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DrawerList */ "./components/Layout/Drawer/DrawerList.js");
/* harmony import */ var _DeviceAppropriateDrawer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DeviceAppropriateDrawer */ "./components/Layout/Drawer/DeviceAppropriateDrawer.js");

var _jsxFileName = "/Users/dan/Documents/Repositories/material-next-template/components/Layout/Drawer/index.js";






var Drawer = function Drawer(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_DeviceAppropriateDrawer__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_react_drawer__WEBPACK_IMPORTED_MODULE_3__["DrawerHeader"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_react_drawer__WEBPACK_IMPORTED_MODULE_3__["DrawerTitle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Drawer Title"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_react_drawer__WEBPACK_IMPORTED_MODULE_3__["DrawerSubtitle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Drawer Subtitle")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_react_drawer__WEBPACK_IMPORTED_MODULE_3__["DrawerContent"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_DrawerList__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onItemClick: function onItemClick() {
      props.setIsDrawerOpen && props.setIsDrawerOpen(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  })));
};

Drawer.propTypes = {
  isOpen: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,
  setIsDrawerOpen: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Drawer);

/***/ }),

/***/ "./components/Layout/index.js":
/*!************************************!*\
  !*** ./components/Layout/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _AppBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AppBar */ "./components/Layout/AppBar.js");
/* harmony import */ var _Drawer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Drawer */ "./components/Layout/Drawer/index.js");
/* harmony import */ var _material_react_top_app_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material/react-top-app-bar */ "./node_modules/@material/react-top-app-bar/dist/index.js");
/* harmony import */ var _material_react_top_app_bar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_react_top_app_bar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/useWindowSize */ "./hooks/useWindowSize.js");

var _jsxFileName = "/Users/dan/Documents/Repositories/material-next-template/components/Layout/index.js";








var Layout = function Layout(_ref) {
  var children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      isDrawerOpen = _useState2[0],
      setIsDrawerOpen = _useState2[1];

  var _useWindowSize = Object(_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_6__["default"])(),
      innerWidth = _useWindowSize.innerWidth;

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-2214634897" + " " + 'layout-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Drawer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    isOpen: isDrawerOpen,
    setIsDrawerOpen: setIsDrawerOpen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-2214634897" + " " + 'layout-app-content',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_AppBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    setIsDrawerOpen: setIsDrawerOpen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_react_top_app_bar__WEBPACK_IMPORTED_MODULE_5__["TopAppBarFixedAdjust"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, innerWidth, " innerwidth", children))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2214634897",
    __self: this
  }, "@media (min-width:840px){.layout-container.jsx-2214634897{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;height:100vh;overflow:hidden;}.layout-app-content.jsx-2214634897{-webkit-flex:auto;-ms-flex:auto;flex:auto;overflow:auto;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW4vRG9jdW1lbnRzL1JlcG9zaXRvcmllcy9tYXRlcmlhbC1uZXh0LXRlbXBsYXRlL2NvbXBvbmVudHMvTGF5b3V0L2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJCa0IsQUFJMEIsQUFNSCwwQ0FDSSxjQUNoQixrQkFQcUIscUVBQ04sYUFDRyxnQkFDbEIiLCJmaWxlIjoiL1VzZXJzL2Rhbi9Eb2N1bWVudHMvUmVwb3NpdG9yaWVzL21hdGVyaWFsLW5leHQtdGVtcGxhdGUvY29tcG9uZW50cy9MYXlvdXQvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXBwQmFyIGZyb20gJy4vQXBwQmFyJ1xuaW1wb3J0IERyYXdlciBmcm9tICcuL0RyYXdlcidcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBUb3BBcHBCYXJGaXhlZEFkanVzdCB9IGZyb20gJ0BtYXRlcmlhbC9yZWFjdC10b3AtYXBwLWJhcidcblxuaW1wb3J0IHVzZVdpbmRvd1NpemUgZnJvbSAnLi4vLi4vaG9va3MvdXNlV2luZG93U2l6ZSdcblxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbaXNEcmF3ZXJPcGVuLCBzZXRJc0RyYXdlck9wZW5dID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IHsgaW5uZXJXaWR0aCB9ID0gdXNlV2luZG93U2l6ZSgpXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdsYXlvdXQtY29udGFpbmVyJz5cbiAgICAgICAgPERyYXdlclxuICAgICAgICAgIGlzT3Blbj17aXNEcmF3ZXJPcGVufVxuICAgICAgICAgIHNldElzRHJhd2VyT3Blbj17c2V0SXNEcmF3ZXJPcGVufVxuICAgICAgICAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGF5b3V0LWFwcC1jb250ZW50Jz5cbiAgICAgICAgICA8QXBwQmFyXG4gICAgICAgICAgICBzZXRJc0RyYXdlck9wZW49e3NldElzRHJhd2VyT3Blbn1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxUb3BBcHBCYXJGaXhlZEFkanVzdD5cbiAgICAgICAgICAgIHtpbm5lcldpZHRofSBpbm5lcndpZHRoXG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgPC9Ub3BBcHBCYXJGaXhlZEFkanVzdD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDg0MHB4KSB7XG4gICAgICAgICAgLmxheW91dC1jb250YWluZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxheW91dC1hcHAtY29udGVudCB7XG4gICAgICAgICAgICBmbGV4OiBhdXRvO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0XG4iXX0= */\n/*@ sourceURL=/Users/dan/Documents/Repositories/material-next-template/components/Layout/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/index.js":
false,

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout/index.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../index.scss */ "./index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_10__);






var _jsxFileName = "/Users/dan/Documents/Repositories/material-next-template/pages/_app.js";

// import { useState } from 'react'


 // import { TopAppBarFixedAdjust } from '@material/react-top-app-bar'

 // import useWindowSize from '../hooks/useWindowSize'
// const Layout = ({ children }) => {
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false)
//   const { innerWidth } = useWindowSize()
//   return (
//     <div>
//       <div className='desktop-drawer-container'>
//         <Drawer
//           isOpen={isDrawerOpen}
//           setIsDrawerOpen={setIsDrawerOpen}
//         />
//         <div className='desktop-drawer-app-content'>
//           <AppBar
//             setIsDrawerOpen={setIsDrawerOpen}
//           />
//           <TopAppBarFixedAdjust>
//             {innerWidth} innerwidth
//             {children}
//           </TopAppBarFixedAdjust>
//         </div>
//       </div>
//       <style jsx>{`
//         @media (min-width: 840px) {
//           .desktop-drawer-container {
//             display: flex;
//             flex-direction: row;
//             height: 100vh;
//             overflow: hidden;
//           }
//           .desktop-drawer-app-content {
//             flex: auto;
//             overflow: auto;
//           }
//         }
//       `}</style>
//     </div>
//   )
// }

var AppLayout =
/*#__PURE__*/
function (_App) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(AppLayout, _App);

  function AppLayout() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AppLayout);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(AppLayout).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(AppLayout, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_7__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, "Material Next")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }))));
    }
  }]);

  return AppLayout;
}(next_app__WEBPACK_IMPORTED_MODULE_7___default.a);

/* harmony default export */ __webpack_exports__["default"] = (AppLayout);

/***/ })

})
//# sourceMappingURL=_app.js.5878af80b38bb0e8aeac.hot-update.js.map