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
    className: "jsx-4159275170" + " " + 'app-drawer-mobile',
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
    className: "jsx-4159275170" + " " + 'app-drawer-desktop',
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
    id: "4159275170",
    __self: this
  }, "@media (min-width:840px){.app-drawer-mobile.jsx-4159275170{display:none !important;}}@media (max-width:839px){.app-drawer-desktop.jsx-4159275170{display:none !important;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW4vRG9jdW1lbnRzL1JlcG9zaXRvcmllcy9tYXRlcmlhbC1uZXh0LXRlbXBsYXRlL2NvbXBvbmVudHMvTGF5b3V0L0RyYXdlci9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyRGdCLEFBSW1DLEFBS0Esd0JBSjFCLEFBS0EiLCJmaWxlIjoiL1VzZXJzL2Rhbi9Eb2N1bWVudHMvUmVwb3NpdG9yaWVzL21hdGVyaWFsLW5leHQtdGVtcGxhdGUvY29tcG9uZW50cy9MYXlvdXQvRHJhd2VyL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBOYXZEcmF3ZXIsIHtcbiAgRHJhd2VySGVhZGVyLFxuICBEcmF3ZXJTdWJ0aXRsZSxcbiAgRHJhd2VyVGl0bGUsXG4gIERyYXdlckNvbnRlbnQsXG59IGZyb20gJ0BtYXRlcmlhbC9yZWFjdC1kcmF3ZXInXG5pbXBvcnQgRHJhd2VyTGlzdCBmcm9tICcuL0RyYXdlckxpc3QnXG5cbmNvbnN0IENvbnRlbnRzID0gKHsgaXNNb2JpbGUsIHNldElzRHJhd2VyT3BlbiB9KSA9PiAoXG4gIDxGcmFnbWVudD5cbiAgICA8RHJhd2VySGVhZGVyPlxuICAgICAgPERyYXdlclRpdGxlPlxuICAgICAgICBEcmF3ZXIgVGl0bGVcbiAgICAgIDwvRHJhd2VyVGl0bGU+XG4gICAgICA8RHJhd2VyU3VidGl0bGU+XG4gICAgICAgIERyYXdlciBTdWJ0aXRsZVxuICAgICAgPC9EcmF3ZXJTdWJ0aXRsZT5cbiAgICA8L0RyYXdlckhlYWRlcj5cbiAgICA8RHJhd2VyQ29udGVudD5cbiAgICAgIDxEcmF3ZXJMaXN0XG4gICAgICAgIG9uSXRlbUNsaWNrPXsoKSA9PiBzZXRJc0RyYXdlck9wZW4oZmFsc2UpfVxuICAgICAgLz5cbiAgICA8L0RyYXdlckNvbnRlbnQ+XG4gIDwvRnJhZ21lbnQ+XG4pXG5Db250ZW50cy5wcm9wVHlwZXMgPSB7XG4gIGlzTW9iaWxlOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICBzZXRJc0RyYXdlck9wZW46IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59XG5cbmNvbnN0IERyYXdlciA9ICh7IGlzTW9iaWxlLCBpc09wZW4sIHNldElzRHJhd2VyT3BlbiB9KSA9PiAoXG4gIDw+XG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPSdhcHAtZHJhd2VyLW1vYmlsZSdcbiAgICA+XG4gICAgICA8TmF2RHJhd2VyXG4gICAgICAgIG1vZGFsPXt0cnVlfVxuICAgICAgICBvcGVuPXtpc09wZW59XG4gICAgICAgIG9uT3Blbj17KCkgPT4gc2V0SXNEcmF3ZXJPcGVuKHRydWUpfVxuICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRJc0RyYXdlck9wZW4oZmFsc2UpfVxuICAgICAgPlxuICAgICAgICA8Q29udGVudHNcbiAgICAgICAgICBpc01vYmlsZT17aXNNb2JpbGV9XG4gICAgICAgICAgc2V0SXNEcmF3ZXJPcGVuPXtzZXRJc0RyYXdlck9wZW59XG4gICAgICAgIC8+XG4gICAgICA8L05hdkRyYXdlcj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9J2FwcC1kcmF3ZXItZGVza3RvcCdcbiAgICA+XG4gICAgICA8TmF2RHJhd2VyPlxuICAgICAgICA8Q29udGVudHNcbiAgICAgICAgICBpc01vYmlsZT17aXNNb2JpbGV9XG4gICAgICAgICAgc2V0SXNEcmF3ZXJPcGVuPXtzZXRJc0RyYXdlck9wZW59XG4gICAgICAgIC8+XG4gICAgICA8L05hdkRyYXdlcj5cbiAgICA8L2Rpdj5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogODQwcHgpIHtcbiAgICAgICAgLmFwcC1kcmF3ZXItbW9iaWxlIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA4MzlweCkge1xuICAgICAgICAuYXBwLWRyYXdlci1kZXNrdG9wIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvPlxuKVxuRHJhd2VyLnByb3BUeXBlcyA9IHtcbiAgaXNNb2JpbGU6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIGlzT3BlbjogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgc2V0SXNEcmF3ZXJPcGVuOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufVxuXG5leHBvcnQgZGVmYXVsdCBEcmF3ZXJcbiJdfQ== */\n/*@ sourceURL=/Users/dan/Documents/Repositories/material-next-template/components/Layout/Drawer/index.js */"));
};

Drawer.propTypes = {
  isMobile: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,
  isOpen: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,
  setIsDrawerOpen: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Drawer);

/***/ })

})
//# sourceMappingURL=_app.js.2d4e0f68faf178f001a2.hot-update.js.map