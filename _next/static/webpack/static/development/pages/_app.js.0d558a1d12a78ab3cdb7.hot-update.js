webpackHotUpdate("static/development/pages/_app.js",{

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
/* harmony import */ var _material_react_top_app_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/react-top-app-bar */ "./node_modules/@material/react-top-app-bar/dist/index.js");
/* harmony import */ var _material_react_top_app_bar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_react_top_app_bar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _useWindowSize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useWindowSize */ "./components/Layout/useWindowSize.js");
/* harmony import */ var _AppBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AppBar */ "./components/Layout/AppBar.js");
/* harmony import */ var _Drawer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Drawer */ "./components/Layout/Drawer/index.js");

var _jsxFileName = "/Users/dan/Documents/Repositories/material-next-template/components/Layout/index.js";








var Layout = function Layout(_ref) {
  var children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      isDrawerOpen = _useState2[0],
      setIsDrawerOpen = _useState2[1];

  var _useWindowSize = Object(_useWindowSize__WEBPACK_IMPORTED_MODULE_4__["default"])(),
      isMobile = _useWindowSize.isMobile;

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-2214634897" + " " + 'layout-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Drawer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    isOpen: isDrawerOpen,
    setIsDrawerOpen: setIsDrawerOpen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-2214634897" + " " + 'layout-app-content',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_AppBar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    setIsDrawerOpen: setIsDrawerOpen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_react_top_app_bar__WEBPACK_IMPORTED_MODULE_3__["TopAppBarFixedAdjust"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, isMobile ? "t" : "f", " innerwidth", children))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2214634897",
    __self: this
  }, "@media (min-width:840px){.layout-container.jsx-2214634897{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;height:100vh;overflow:hidden;}.layout-app-content.jsx-2214634897{-webkit-flex:auto;-ms-flex:auto;flex:auto;overflow:auto;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW4vRG9jdW1lbnRzL1JlcG9zaXRvcmllcy9tYXRlcmlhbC1uZXh0LXRlbXBsYXRlL2NvbXBvbmVudHMvTGF5b3V0L2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBCa0IsQUFJMEIsQUFNSCwwQ0FDSSxjQUNoQixrQkFQcUIscUVBQ04sYUFDRyxnQkFDbEIiLCJmaWxlIjoiL1VzZXJzL2Rhbi9Eb2N1bWVudHMvUmVwb3NpdG9yaWVzL21hdGVyaWFsLW5leHQtdGVtcGxhdGUvY29tcG9uZW50cy9MYXlvdXQvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVG9wQXBwQmFyRml4ZWRBZGp1c3QgfSBmcm9tICdAbWF0ZXJpYWwvcmVhY3QtdG9wLWFwcC1iYXInXG5pbXBvcnQgdXNlV2luZG93U2l6ZSBmcm9tICcuL3VzZVdpbmRvd1NpemUnXG5pbXBvcnQgQXBwQmFyIGZyb20gJy4vQXBwQmFyJ1xuaW1wb3J0IERyYXdlciBmcm9tICcuL0RyYXdlcidcblxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbaXNEcmF3ZXJPcGVuLCBzZXRJc0RyYXdlck9wZW5dID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IHsgaXNNb2JpbGUgfSA9IHVzZVdpbmRvd1NpemUoKVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbGF5b3V0LWNvbnRhaW5lcic+XG4gICAgICAgIDxEcmF3ZXJcbiAgICAgICAgICBpc09wZW49e2lzRHJhd2VyT3Blbn1cbiAgICAgICAgICBzZXRJc0RyYXdlck9wZW49e3NldElzRHJhd2VyT3Blbn1cbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xheW91dC1hcHAtY29udGVudCc+XG4gICAgICAgICAgPEFwcEJhclxuICAgICAgICAgICAgc2V0SXNEcmF3ZXJPcGVuPXtzZXRJc0RyYXdlck9wZW59XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8VG9wQXBwQmFyRml4ZWRBZGp1c3Q+XG4gICAgICAgICAgICB7aXNNb2JpbGUgPyBcInRcIiA6IFwiZlwifSBpbm5lcndpZHRoXG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgPC9Ub3BBcHBCYXJGaXhlZEFkanVzdD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDg0MHB4KSB7XG4gICAgICAgICAgLmxheW91dC1jb250YWluZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxheW91dC1hcHAtY29udGVudCB7XG4gICAgICAgICAgICBmbGV4OiBhdXRvO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0XG4iXX0= */\n/*@ sourceURL=/Users/dan/Documents/Repositories/material-next-template/components/Layout/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=_app.js.0d558a1d12a78ab3cdb7.hot-update.js.map