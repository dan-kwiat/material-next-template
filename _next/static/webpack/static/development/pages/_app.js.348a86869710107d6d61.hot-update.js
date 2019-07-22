webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Layout/Drawer/index.js":
/*!*******************************************!*\
  !*** ./components/Layout/Drawer/index.js ***!
  \*******************************************/
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
/* harmony import */ var _DrawerList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DrawerList */ "./components/Layout/Drawer/DrawerList.js");
var _jsxFileName = "/Users/dan/Documents/Repositories/material-next-template/components/Layout/Drawer/index.js";







var Contents = function Contents(_ref) {
  var isMobile = _ref.isMobile,
      setIsDrawerOpen = _ref.setIsDrawerOpen;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_react_drawer__WEBPACK_IMPORTED_MODULE_3__["DrawerHeader"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_react_drawer__WEBPACK_IMPORTED_MODULE_3__["DrawerTitle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Drawer Title"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_react_drawer__WEBPACK_IMPORTED_MODULE_3__["DrawerSubtitle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Drawer Subtitle")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_react_drawer__WEBPACK_IMPORTED_MODULE_3__["DrawerContent"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_DrawerList__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onItemClick: function onItemClick() {
      return setIsDrawerOpen(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  })));
};

Contents.propTypes = {
  isMobile: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,
  setIsDrawerOpen: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};

var Drawer = function Drawer(_ref2) {
  var isMobile = _ref2.isMobile,
      isOpen = _ref2.isOpen,
      setIsDrawerOpen = _ref2.setIsDrawerOpen;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2883484101" + " " + 'app-drawer-container-mobile',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_react_drawer__WEBPACK_IMPORTED_MODULE_3___default.a, {
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
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Contents, {
    isMobile: isMobile,
    setIsDrawerOpen: setIsDrawerOpen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2883484101" + " " + 'app-drawer-container-desktop',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_react_drawer__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Contents, {
    isMobile: isMobile,
    setIsDrawerOpen: setIsDrawerOpen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2883484101",
    __self: this
  }, "@media (min-width:840px){.app-drawer-container-mobile.jsx-2883484101{display:none !important;}}@media (max-width:839px){.app-drawer-container-desktop.jsx-2883484101{display:none !important;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW4vRG9jdW1lbnRzL1JlcG9zaXRvcmllcy9tYXRlcmlhbC1uZXh0LXRlbXBsYXRlL2NvbXBvbmVudHMvTGF5b3V0L0RyYXdlci9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyRGdCLEFBSW1DLEFBS0Esd0JBSjFCLEFBS0EiLCJmaWxlIjoiL1VzZXJzL2Rhbi9Eb2N1bWVudHMvUmVwb3NpdG9yaWVzL21hdGVyaWFsLW5leHQtdGVtcGxhdGUvY29tcG9uZW50cy9MYXlvdXQvRHJhd2VyL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBOYXZEcmF3ZXIsIHtcbiAgRHJhd2VySGVhZGVyLFxuICBEcmF3ZXJTdWJ0aXRsZSxcbiAgRHJhd2VyVGl0bGUsXG4gIERyYXdlckNvbnRlbnQsXG59IGZyb20gJ0BtYXRlcmlhbC9yZWFjdC1kcmF3ZXInXG5pbXBvcnQgRHJhd2VyTGlzdCBmcm9tICcuL0RyYXdlckxpc3QnXG5cbmNvbnN0IENvbnRlbnRzID0gKHsgaXNNb2JpbGUsIHNldElzRHJhd2VyT3BlbiB9KSA9PiAoXG4gIDxGcmFnbWVudD5cbiAgICA8RHJhd2VySGVhZGVyPlxuICAgICAgPERyYXdlclRpdGxlPlxuICAgICAgICBEcmF3ZXIgVGl0bGVcbiAgICAgIDwvRHJhd2VyVGl0bGU+XG4gICAgICA8RHJhd2VyU3VidGl0bGU+XG4gICAgICAgIERyYXdlciBTdWJ0aXRsZVxuICAgICAgPC9EcmF3ZXJTdWJ0aXRsZT5cbiAgICA8L0RyYXdlckhlYWRlcj5cbiAgICA8RHJhd2VyQ29udGVudD5cbiAgICAgIDxEcmF3ZXJMaXN0XG4gICAgICAgIG9uSXRlbUNsaWNrPXsoKSA9PiBzZXRJc0RyYXdlck9wZW4oZmFsc2UpfVxuICAgICAgLz5cbiAgICA8L0RyYXdlckNvbnRlbnQ+XG4gIDwvRnJhZ21lbnQ+XG4pXG5Db250ZW50cy5wcm9wVHlwZXMgPSB7XG4gIGlzTW9iaWxlOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICBzZXRJc0RyYXdlck9wZW46IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59XG5cbmNvbnN0IERyYXdlciA9ICh7IGlzTW9iaWxlLCBpc09wZW4sIHNldElzRHJhd2VyT3BlbiB9KSA9PiAoXG4gIDw+XG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPSdhcHAtZHJhd2VyLWNvbnRhaW5lci1tb2JpbGUnXG4gICAgPlxuICAgICAgPE5hdkRyYXdlclxuICAgICAgICBtb2RhbD17dHJ1ZX1cbiAgICAgICAgb3Blbj17aXNPcGVufVxuICAgICAgICBvbk9wZW49eygpID0+IHNldElzRHJhd2VyT3Blbih0cnVlKX1cbiAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0SXNEcmF3ZXJPcGVuKGZhbHNlKX1cbiAgICAgID5cbiAgICAgICAgPENvbnRlbnRzXG4gICAgICAgICAgaXNNb2JpbGU9e2lzTW9iaWxlfVxuICAgICAgICAgIHNldElzRHJhd2VyT3Blbj17c2V0SXNEcmF3ZXJPcGVufVxuICAgICAgICAvPlxuICAgICAgPC9OYXZEcmF3ZXI+XG4gICAgPC9kaXY+XG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPSdhcHAtZHJhd2VyLWNvbnRhaW5lci1kZXNrdG9wJ1xuICAgID5cbiAgICAgIDxOYXZEcmF3ZXI+XG4gICAgICAgIDxDb250ZW50c1xuICAgICAgICAgIGlzTW9iaWxlPXtpc01vYmlsZX1cbiAgICAgICAgICBzZXRJc0RyYXdlck9wZW49e3NldElzRHJhd2VyT3Blbn1cbiAgICAgICAgLz5cbiAgICAgIDwvTmF2RHJhd2VyPlxuICAgIDwvZGl2PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA4NDBweCkge1xuICAgICAgICAuYXBwLWRyYXdlci1jb250YWluZXItbW9iaWxlIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA4MzlweCkge1xuICAgICAgICAuYXBwLWRyYXdlci1jb250YWluZXItZGVza3RvcCB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8Lz5cbilcbkRyYXdlci5wcm9wVHlwZXMgPSB7XG4gIGlzTW9iaWxlOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICBpc09wZW46IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIHNldElzRHJhd2VyT3BlbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgRHJhd2VyXG4iXX0= */\n/*@ sourceURL=/Users/dan/Documents/Repositories/material-next-template/components/Layout/Drawer/index.js */"));
};

Drawer.propTypes = {
  isMobile: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,
  isOpen: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,
  setIsDrawerOpen: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Drawer);

/***/ })

})
//# sourceMappingURL=_app.js.348a86869710107d6d61.hot-update.js.map