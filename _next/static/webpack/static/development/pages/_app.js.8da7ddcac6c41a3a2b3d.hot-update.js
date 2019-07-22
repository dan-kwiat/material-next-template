webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/AppBar.js":
/*!******************************!*\
  !*** ./components/AppBar.js ***!
  \******************************/
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
var _jsxFileName = "/Users/dan/Documents/Repositories/material-next-template/components/AppBar.js";






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
  }, "@media (min-width:840px){.mobile-appbar.jsx-3595979589{display:none !important;}}@media (max-width:839px){.desktop-appbar.jsx-3595979589{display:none !important;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW4vRG9jdW1lbnRzL1JlcG9zaXRvcmllcy9tYXRlcmlhbC1uZXh0LXRlbXBsYXRlL2NvbXBvbmVudHMvQXBwQmFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStDZ0IsQUFJbUMsQUFLQSx3QkFKMUIsQUFLQSIsImZpbGUiOiIvVXNlcnMvZGFuL0RvY3VtZW50cy9SZXBvc2l0b3JpZXMvbWF0ZXJpYWwtbmV4dC10ZW1wbGF0ZS9jb21wb25lbnRzL0FwcEJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBNYXRlcmlhbEljb24gZnJvbSAnQG1hdGVyaWFsL3JlYWN0LW1hdGVyaWFsLWljb24nXG5pbXBvcnQgVG9wQXBwQmFyLCB7XG4gIFRvcEFwcEJhckljb24sXG4gIFRvcEFwcEJhclJvdyxcbiAgVG9wQXBwQmFyU2VjdGlvbixcbiAgVG9wQXBwQmFyVGl0bGUsXG59IGZyb20gJ0BtYXRlcmlhbC9yZWFjdC10b3AtYXBwLWJhcidcblxuY29uc3QgQmFyID0gKHtcbiAgY2xhc3NOYW1lLFxuICB0aXRsZSxcbiAgcmVuZGVyVG9nZ2xlLFxuICBmaXhlZCxcbn0pID0+IChcbiAgPFRvcEFwcEJhciBjbGFzc05hbWU9e2NsYXNzTmFtZX0gZml4ZWQ9e2ZpeGVkfT5cbiAgICA8VG9wQXBwQmFyUm93PlxuICAgICAgPFRvcEFwcEJhclNlY3Rpb24gYWxpZ249J3N0YXJ0Jz5cbiAgICAgICAge3JlbmRlclRvZ2dsZSA/IChcbiAgICAgICAgICA8VG9wQXBwQmFySWNvbiBuYXZJY29uIHRhYkluZGV4PXswfT5cbiAgICAgICAgICAgIHtyZW5kZXJUb2dnbGUoKX1cbiAgICAgICAgICA8L1RvcEFwcEJhckljb24+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgICA8VG9wQXBwQmFyVGl0bGU+e3RpdGxlfTwvVG9wQXBwQmFyVGl0bGU+XG4gICAgICA8L1RvcEFwcEJhclNlY3Rpb24+XG4gICAgPC9Ub3BBcHBCYXJSb3c+XG4gIDwvVG9wQXBwQmFyPlxuKVxuXG5jb25zdCBBcHBCYXIgPSAoeyBzZXRJc0RyYXdlck9wZW4gfSkgPT4gKFxuICA8PlxuICAgIDxCYXJcbiAgICAgIGNsYXNzTmFtZT0nbW9iaWxlLWFwcGJhcidcbiAgICAgIHRpdGxlPSdUaXRsZSdcbiAgICAgIHJlbmRlclRvZ2dsZT17KCkgPT4gKFxuICAgICAgICA8TWF0ZXJpYWxJY29uXG4gICAgICAgICAgaGFzUmlwcGxlXG4gICAgICAgICAgaWNvbj0nbWVudSdcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc0RyYXdlck9wZW4odHJ1ZSl9XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgIC8+XG4gICAgPEJhclxuICAgICAgY2xhc3NOYW1lPSdkZXNrdG9wLWFwcGJhcidcbiAgICAgIHRpdGxlPSdUaXRsZSdcbiAgICAgIGZpeGVkXG4gICAgLz5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogODQwcHgpIHtcbiAgICAgICAgLm1vYmlsZS1hcHBiYXIge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDgzOXB4KSB7XG4gICAgICAgIC5kZXNrdG9wLWFwcGJhciB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8Lz5cbilcbkFwcEJhci5wcm9wVHlwZXMgPSB7XG4gIHNldElzRHJhd2VyT3BlbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwQmFyIl19 */\n/*@ sourceURL=/Users/dan/Documents/Repositories/material-next-template/components/AppBar.js */"));
};

AppBar.propTypes = {
  setIsDrawerOpen: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (AppBar);

/***/ })

})
//# sourceMappingURL=_app.js.8da7ddcac6c41a3a2b3d.hot-update.js.map