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
/* harmony import */ var _AppBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AppBar */ "./components/Layout/AppBar.js");
/* harmony import */ var _Drawer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Drawer */ "./components/Layout/Drawer/index.js");
/* harmony import */ var _material_react_top_app_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material/react-top-app-bar */ "./node_modules/@material/react-top-app-bar/dist/index.js");
/* harmony import */ var _material_react_top_app_bar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_react_top_app_bar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _useWindowSize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./useWindowSize */ "./components/Layout/useWindowSize.js");

var _jsxFileName = "/Users/dan/Documents/Repositories/material-next-template/components/Layout/index.js";








var Layout = function Layout(_ref) {
  var children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      isDrawerOpen = _useState2[0],
      setIsDrawerOpen = _useState2[1];

  var _useWindowSize = Object(_useWindowSize__WEBPACK_IMPORTED_MODULE_6__["default"])(),
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
  }, "@media (min-width:840px){.layout-container.jsx-2214634897{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;height:100vh;overflow:hidden;}.layout-app-content.jsx-2214634897{-webkit-flex:auto;-ms-flex:auto;flex:auto;overflow:auto;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW4vRG9jdW1lbnRzL1JlcG9zaXRvcmllcy9tYXRlcmlhbC1uZXh0LXRlbXBsYXRlL2NvbXBvbmVudHMvTGF5b3V0L2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJCa0IsQUFJMEIsQUFNSCwwQ0FDSSxjQUNoQixrQkFQcUIscUVBQ04sYUFDRyxnQkFDbEIiLCJmaWxlIjoiL1VzZXJzL2Rhbi9Eb2N1bWVudHMvUmVwb3NpdG9yaWVzL21hdGVyaWFsLW5leHQtdGVtcGxhdGUvY29tcG9uZW50cy9MYXlvdXQvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXBwQmFyIGZyb20gJy4vQXBwQmFyJ1xuaW1wb3J0IERyYXdlciBmcm9tICcuL0RyYXdlcidcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBUb3BBcHBCYXJGaXhlZEFkanVzdCB9IGZyb20gJ0BtYXRlcmlhbC9yZWFjdC10b3AtYXBwLWJhcidcblxuaW1wb3J0IHVzZVdpbmRvd1NpemUgZnJvbSAnLi91c2VXaW5kb3dTaXplJ1xuXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IFtpc0RyYXdlck9wZW4sIHNldElzRHJhd2VyT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgeyBpbm5lcldpZHRoIH0gPSB1c2VXaW5kb3dTaXplKClcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2xheW91dC1jb250YWluZXInPlxuICAgICAgICA8RHJhd2VyXG4gICAgICAgICAgaXNPcGVuPXtpc0RyYXdlck9wZW59XG4gICAgICAgICAgc2V0SXNEcmF3ZXJPcGVuPXtzZXRJc0RyYXdlck9wZW59XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsYXlvdXQtYXBwLWNvbnRlbnQnPlxuICAgICAgICAgIDxBcHBCYXJcbiAgICAgICAgICAgIHNldElzRHJhd2VyT3Blbj17c2V0SXNEcmF3ZXJPcGVufVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPFRvcEFwcEJhckZpeGVkQWRqdXN0PlxuICAgICAgICAgICAge2lubmVyV2lkdGh9IGlubmVyd2lkdGhcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICA8L1RvcEFwcEJhckZpeGVkQWRqdXN0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogODQwcHgpIHtcbiAgICAgICAgICAubGF5b3V0LWNvbnRhaW5lciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubGF5b3V0LWFwcC1jb250ZW50IHtcbiAgICAgICAgICAgIGZsZXg6IGF1dG87XG4gICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRcbiJdfQ== */\n/*@ sourceURL=/Users/dan/Documents/Repositories/material-next-template/components/Layout/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/Layout/useWindowSize.js":
/*!********************************************!*\
  !*** ./components/Layout/useWindowSize.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash.throttle */ "./node_modules/lodash.throttle/index.js");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_2__);



var THROTTLE_LIMIT = 300;
var DEFAULT_SIZE = {
  innerHeight: 1000,
  innerWidth: 1000,
  outerHeight: 1000,
  outerWidth: 1000
};

var getSize = function getSize() {
  if (false) {}

  return {
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
    outerHeight: window.outerHeight,
    outerWidth: window.outerWidth
  };
};

var useWindowSize = function useWindowSize() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(getSize()),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      windowSize = _useState2[0],
      setWindowSize = _useState2[1];

  var handleResize = lodash_throttle__WEBPACK_IMPORTED_MODULE_2___default()(function () {
    setWindowSize(getSize());
  }, THROTTLE_LIMIT);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    // need to check for ssr here?
    window.addEventListener('resize', handleResize);
    return function () {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return windowSize;
};

/* harmony default export */ __webpack_exports__["default"] = (useWindowSize);

/***/ }),

/***/ "./hooks/useWindowSize.js":
false

})
//# sourceMappingURL=_app.js.6cc5d4743b1fb6e8418a.hot-update.js.map