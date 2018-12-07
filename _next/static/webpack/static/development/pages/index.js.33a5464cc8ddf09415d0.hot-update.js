webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components */ "./components/index.js");
/* harmony import */ var _material_react_top_app_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material/react-top-app-bar */ "./node_modules/@material/react-top-app-bar/dist/index.js");
/* harmony import */ var _material_react_top_app_bar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_react_top_app_bar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../index.scss */ "./index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/dan/Documents/Repositories/material-next-template/pages/index.js";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var AppLayout = function AppLayout() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      isDrawerOpen = _useState2[0],
      setIsDrawerOpen = _useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1244013185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
    className: "jsx-1244013185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Material Next"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/icon?family=Material+Icons",
    rel: "stylesheet",
    className: "jsx-1244013185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Roboto",
    rel: "stylesheet",
    className: "jsx-1244013185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    className: "jsx-1244013185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1244013185" + " " + 'desktop-drawer-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["Drawer"], {
    isOpen: isDrawerOpen,
    setIsDrawerOpen: setIsDrawerOpen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1244013185" + " " + 'desktop-drawer-app-content',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["AppBar"], {
    setIsDrawerOpen: setIsDrawerOpen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_react_top_app_bar__WEBPACK_IMPORTED_MODULE_4__["TopAppBarFixedAdjust"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["AppContent"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1244013185",
    css: "@media (min-width:840px){.desktop-drawer-container.jsx-1244013185{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;height:100vh;overflow:hidden;}.desktop-drawer-app-content.jsx-1244013185{-webkit-flex:auto;-ms-flex:auto;flex:auto;overflow:auto;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW4vRG9jdW1lbnRzL1JlcG9zaXRvcmllcy9tYXRlcmlhbC1uZXh0LXRlbXBsYXRlL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThCa0IsQUFJMEIsQUFNSCwwQ0FDSSxjQUNoQixrQkFQcUIscUVBQ04sYUFDRyxnQkFDbEIiLCJmaWxlIjoiL1VzZXJzL2Rhbi9Eb2N1bWVudHMvUmVwb3NpdG9yaWVzL21hdGVyaWFsLW5leHQtdGVtcGxhdGUvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IEFwcEJhciwgQXBwQ29udGVudCwgRHJhd2VyIH0gZnJvbSAnLi4vY29tcG9uZW50cydcbmltcG9ydCB7IFRvcEFwcEJhckZpeGVkQWRqdXN0IH0gZnJvbSAnQG1hdGVyaWFsL3JlYWN0LXRvcC1hcHAtYmFyJ1xuaW1wb3J0ICcuLi9pbmRleC5zY3NzJ1xuXG5jb25zdCBBcHBMYXlvdXQgPSAoKSA9PiB7XG4gIGNvbnN0IFtpc0RyYXdlck9wZW4sIHNldElzRHJhd2VyT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5NYXRlcmlhbCBOZXh0PC90aXRsZT5cbiAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vaWNvbj9mYW1pbHk9TWF0ZXJpYWwrSWNvbnNcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cbiAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG9cIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2Rlc2t0b3AtZHJhd2VyLWNvbnRhaW5lcic+XG4gICAgICAgIDxEcmF3ZXJcbiAgICAgICAgICBpc09wZW49e2lzRHJhd2VyT3Blbn1cbiAgICAgICAgICBzZXRJc0RyYXdlck9wZW49e3NldElzRHJhd2VyT3Blbn1cbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Rlc2t0b3AtZHJhd2VyLWFwcC1jb250ZW50Jz5cbiAgICAgICAgICA8QXBwQmFyXG4gICAgICAgICAgICBzZXRJc0RyYXdlck9wZW49e3NldElzRHJhd2VyT3Blbn1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxUb3BBcHBCYXJGaXhlZEFkanVzdD5cbiAgICAgICAgICAgIDxBcHBDb250ZW50IC8+XG4gICAgICAgICAgPC9Ub3BBcHBCYXJGaXhlZEFkanVzdD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDg0MHB4KSB7XG4gICAgICAgICAgLmRlc2t0b3AtZHJhd2VyLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZGVza3RvcC1kcmF3ZXItYXBwLWNvbnRlbnQge1xuICAgICAgICAgICAgZmxleDogYXV0bztcbiAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcExheW91dFxuIl19 */\n/*@ sourceURL=/Users/dan/Documents/Repositories/material-next-template/pages/index.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (AppLayout);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.33a5464cc8ddf09415d0.hot-update.js.map