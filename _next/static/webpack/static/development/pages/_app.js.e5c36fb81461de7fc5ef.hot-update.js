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
  var setIsDrawerOpen = _ref.setIsDrawerOpen;
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
  setIsDrawerOpen: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};

var Drawer = function Drawer(_ref2) {
  var isOpen = _ref2.isOpen,
      setIsDrawerOpen = _ref2.setIsDrawerOpen;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1228513982" + " " + 'app-drawer-container-mobile',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
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
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Contents, {
    setIsDrawerOpen: setIsDrawerOpen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1228513982" + " " + 'app-drawer-container-desktop',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_react_drawer__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Contents, {
    setIsDrawerOpen: setIsDrawerOpen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1228513982",
    __self: this
  }, "@media (min-width:".concat(breakpoint, "px){.app-drawer-container-mobile.jsx-1228513982{display:none !important;}}@media (max-width:").concat(breakpoint - 1, "px){.app-drawer-container-desktop.jsx-1228513982{display:none !important;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW4vRG9jdW1lbnRzL1JlcG9zaXRvcmllcy9tYXRlcmlhbC1uZXh0LXRlbXBsYXRlL2NvbXBvbmVudHMvTGF5b3V0L0RyYXdlci9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3RGdCLEFBSW1DLEFBS0Esd0JBSjFCLEFBS0EiLCJmaWxlIjoiL1VzZXJzL2Rhbi9Eb2N1bWVudHMvUmVwb3NpdG9yaWVzL21hdGVyaWFsLW5leHQtdGVtcGxhdGUvY29tcG9uZW50cy9MYXlvdXQvRHJhd2VyL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBOYXZEcmF3ZXIsIHtcbiAgRHJhd2VySGVhZGVyLFxuICBEcmF3ZXJTdWJ0aXRsZSxcbiAgRHJhd2VyVGl0bGUsXG4gIERyYXdlckNvbnRlbnQsXG59IGZyb20gJ0BtYXRlcmlhbC9yZWFjdC1kcmF3ZXInXG5pbXBvcnQgRHJhd2VyTGlzdCBmcm9tICcuL0RyYXdlckxpc3QnXG5cbmNvbnN0IENvbnRlbnRzID0gKHsgc2V0SXNEcmF3ZXJPcGVuIH0pID0+IChcbiAgPEZyYWdtZW50PlxuICAgIDxEcmF3ZXJIZWFkZXI+XG4gICAgICA8RHJhd2VyVGl0bGU+XG4gICAgICAgIERyYXdlciBUaXRsZVxuICAgICAgPC9EcmF3ZXJUaXRsZT5cbiAgICAgIDxEcmF3ZXJTdWJ0aXRsZT5cbiAgICAgICAgRHJhd2VyIFN1YnRpdGxlXG4gICAgICA8L0RyYXdlclN1YnRpdGxlPlxuICAgIDwvRHJhd2VySGVhZGVyPlxuICAgIDxEcmF3ZXJDb250ZW50PlxuICAgICAgPERyYXdlckxpc3RcbiAgICAgICAgb25JdGVtQ2xpY2s9eygpID0+IHNldElzRHJhd2VyT3BlbihmYWxzZSl9XG4gICAgICAvPlxuICAgIDwvRHJhd2VyQ29udGVudD5cbiAgPC9GcmFnbWVudD5cbilcbkNvbnRlbnRzLnByb3BUeXBlcyA9IHtcbiAgc2V0SXNEcmF3ZXJPcGVuOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufVxuXG5jb25zdCBEcmF3ZXIgPSAoeyBpc09wZW4sIHNldElzRHJhd2VyT3BlbiB9KSA9PiAoXG4gIDxGcmFnbWVudD5cbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9J2FwcC1kcmF3ZXItY29udGFpbmVyLW1vYmlsZSdcbiAgICA+XG4gICAgICA8TmF2RHJhd2VyXG4gICAgICAgIG1vZGFsPXt0cnVlfVxuICAgICAgICBvcGVuPXtpc09wZW59XG4gICAgICAgIG9uT3Blbj17KCkgPT4gc2V0SXNEcmF3ZXJPcGVuKHRydWUpfVxuICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRJc0RyYXdlck9wZW4oZmFsc2UpfVxuICAgICAgPlxuICAgICAgICA8Q29udGVudHNcbiAgICAgICAgICBzZXRJc0RyYXdlck9wZW49e3NldElzRHJhd2VyT3Blbn1cbiAgICAgICAgLz5cbiAgICAgIDwvTmF2RHJhd2VyPlxuICAgIDwvZGl2PlxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT0nYXBwLWRyYXdlci1jb250YWluZXItZGVza3RvcCdcbiAgICA+XG4gICAgICA8TmF2RHJhd2VyPlxuICAgICAgICA8Q29udGVudHNcbiAgICAgICAgICBzZXRJc0RyYXdlck9wZW49e3NldElzRHJhd2VyT3Blbn1cbiAgICAgICAgLz5cbiAgICAgIDwvTmF2RHJhd2VyPlxuICAgIDwvZGl2PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAke2JyZWFrcG9pbnR9cHgpIHtcbiAgICAgICAgLmFwcC1kcmF3ZXItY29udGFpbmVyLW1vYmlsZSB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogJHticmVha3BvaW50LTF9cHgpIHtcbiAgICAgICAgLmFwcC1kcmF3ZXItY29udGFpbmVyLWRlc2t0b3Age1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9GcmFnbWVudD5cbilcbkRyYXdlci5wcm9wVHlwZXMgPSB7XG4gIGJyZWFrcG9pbnQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgaXNPcGVuOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICBzZXRJc0RyYXdlck9wZW46IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59XG5cbmV4cG9ydCBkZWZhdWx0IERyYXdlclxuIl19 */\n/*@ sourceURL=/Users/dan/Documents/Repositories/material-next-template/components/Layout/Drawer/index.js */")));
};

Drawer.propTypes = {
  breakpoint: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
  isOpen: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,
  setIsDrawerOpen: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Drawer);

/***/ })

})
//# sourceMappingURL=_app.js.e5c36fb81461de7fc5ef.hot-update.js.map