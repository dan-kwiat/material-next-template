webpackHotUpdate("static/development/pages/_app.js",{

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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components */ "./components/index.js");
/* harmony import */ var _material_react_top_app_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material/react-top-app-bar */ "./node_modules/@material/react-top-app-bar/dist/index.js");
/* harmony import */ var _material_react_top_app_bar__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_react_top_app_bar__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../index.scss */ "./index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../hooks/useWindowSize */ "./hooks/useWindowSize.js");







var _jsxFileName = "/Users/dan/Documents/Repositories/material-next-template/pages/_app.js";










var Layout = function Layout(_ref) {
  var children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_6__["default"])(_useState, 2),
      isDrawerOpen = _useState2[0],
      setIsDrawerOpen = _useState2[1];

  var _useWindowSize = Object(_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_14__["default"])(),
      innerWidth = _useWindowSize.innerWidth;

  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "jsx-1244013185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "jsx-1244013185" + " " + 'desktop-drawer-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_11__["Drawer"], {
    isOpen: isDrawerOpen,
    setIsDrawerOpen: setIsDrawerOpen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "jsx-1244013185" + " " + 'desktop-drawer-app-content',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_11__["AppBar"], {
    setIsDrawerOpen: setIsDrawerOpen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_react_top_app_bar__WEBPACK_IMPORTED_MODULE_12__["TopAppBarFixedAdjust"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, innerWidth, " innerwidth", children))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
    id: "1244013185",
    __self: this
  }, "@media (min-width:840px){.desktop-drawer-container.jsx-1244013185{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;height:100vh;overflow:hidden;}.desktop-drawer-app-content.jsx-1244013185{-webkit-flex:auto;-ms-flex:auto;flex:auto;overflow:auto;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW4vRG9jdW1lbnRzL1JlcG9zaXRvcmllcy9tYXRlcmlhbC1uZXh0LXRlbXBsYXRlL3BhZ2VzL19hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkJrQixBQUkwQixBQU1ILDBDQUNJLGNBQ2hCLGtCQVBxQixxRUFDTixhQUNHLGdCQUNsQiIsImZpbGUiOiIvVXNlcnMvZGFuL0RvY3VtZW50cy9SZXBvc2l0b3JpZXMvbWF0ZXJpYWwtbmV4dC10ZW1wbGF0ZS9wYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBBcHAsIHsgQ29udGFpbmVyIH0gZnJvbSAnbmV4dC9hcHAnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgeyBBcHBCYXIsIERyYXdlciB9IGZyb20gJy4uL2NvbXBvbmVudHMnXG5pbXBvcnQgeyBUb3BBcHBCYXJGaXhlZEFkanVzdCB9IGZyb20gJ0BtYXRlcmlhbC9yZWFjdC10b3AtYXBwLWJhcidcbmltcG9ydCAnLi4vaW5kZXguc2NzcydcblxuaW1wb3J0IHVzZVdpbmRvd1NpemUgZnJvbSAnLi4vaG9va3MvdXNlV2luZG93U2l6ZSdcblxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbaXNEcmF3ZXJPcGVuLCBzZXRJc0RyYXdlck9wZW5dID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IHsgaW5uZXJXaWR0aCB9ID0gdXNlV2luZG93U2l6ZSgpXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdkZXNrdG9wLWRyYXdlci1jb250YWluZXInPlxuICAgICAgICA8RHJhd2VyXG4gICAgICAgICAgaXNPcGVuPXtpc0RyYXdlck9wZW59XG4gICAgICAgICAgc2V0SXNEcmF3ZXJPcGVuPXtzZXRJc0RyYXdlck9wZW59XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkZXNrdG9wLWRyYXdlci1hcHAtY29udGVudCc+XG4gICAgICAgICAgPEFwcEJhclxuICAgICAgICAgICAgc2V0SXNEcmF3ZXJPcGVuPXtzZXRJc0RyYXdlck9wZW59XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8VG9wQXBwQmFyRml4ZWRBZGp1c3Q+XG4gICAgICAgICAgICB7aW5uZXJXaWR0aH0gaW5uZXJ3aWR0aFxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgIDwvVG9wQXBwQmFyRml4ZWRBZGp1c3Q+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA4NDBweCkge1xuICAgICAgICAgIC5kZXNrdG9wLWRyYXdlci1jb250YWluZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmRlc2t0b3AtZHJhd2VyLWFwcC1jb250ZW50IHtcbiAgICAgICAgICAgIGZsZXg6IGF1dG87XG4gICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jbGFzcyBBcHBMYXlvdXQgZXh0ZW5kcyBBcHAge1xuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4gKFxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPHRpdGxlPk1hdGVyaWFsIE5leHQ8L3RpdGxlPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICA8L0xheW91dD5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHBMYXlvdXRcbiJdfQ== */\n/*@ sourceURL=/Users/dan/Documents/Repositories/material-next-template/pages/_app.js */"));
};

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
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_9__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_10___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, "Material Next")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Layout, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }))));
    }
  }]);

  return AppLayout;
}(next_app__WEBPACK_IMPORTED_MODULE_9___default.a);

/* harmony default export */ __webpack_exports__["default"] = (AppLayout);

/***/ })

})
//# sourceMappingURL=_app.js.e81739ed1b1d1dece751.hot-update.js.map