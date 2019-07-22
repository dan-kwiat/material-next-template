webpackHotUpdate("static/development/pages/movies.js",{

/***/ "./pages/movies/index.js":
/*!*******************************!*\
  !*** ./pages/movies/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/config */ "./node_modules/next-server/dist/lib/runtime-config.js");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_react_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material/react-button */ "./node_modules/@material/react-button/dist/index.js");
/* harmony import */ var _material_react_button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_react_button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_react_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material/react-card */ "./node_modules/@material/react-card/dist/index.js");
/* harmony import */ var _material_react_card__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_react_card__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_react_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material/react-material-icon */ "./node_modules/@material/react-material-icon/dist/index.js");
/* harmony import */ var _material_react_material_icon__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_react_material_icon__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9__);


var _jsxFileName = "/Users/dan/Documents/Repositories/material-next-template/pages/movies/index.js";









var _getConfig = next_config__WEBPACK_IMPORTED_MODULE_4___default()(),
    publicRuntimeConfig = _getConfig.publicRuntimeConfig;

var HOME_ROUTE = publicRuntimeConfig.HOME_ROUTE;

var Movies = function Movies(_ref) {
  var shows = _ref.shows;
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-23489986" + " " + 'content-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h1", {
    className: "jsx-23489986",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Header"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
    className: "jsx-23489986",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "This content is in ", react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("i", {
    className: "jsx-23489986",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "pages/movies.js")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-23489986" + " " + 'card-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, shows.map(function (show) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_react_card__WEBPACK_IMPORTED_MODULE_6___default.a, {
      key: show.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_react_card__WEBPACK_IMPORTED_MODULE_6__["CardPrimaryContent"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_react_card__WEBPACK_IMPORTED_MODULE_6__["CardMedia"], {
      square: true,
      imageUrl: "https://picsum.photos/500/500?grayscale",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "jsx-23489986" + " " + 'main-content',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h3", {
      className: "jsx-23489986",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
      href: "".concat(HOME_ROUTE, "/movies/[id]"),
      as: "".concat(HOME_ROUTE, "/movies/").concat(show.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
      className: "jsx-23489986",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, show.name))))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_react_card__WEBPACK_IMPORTED_MODULE_6__["CardActions"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_react_card__WEBPACK_IMPORTED_MODULE_6__["CardActionButtons"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_react_button__WEBPACK_IMPORTED_MODULE_5___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, "Read")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_react_card__WEBPACK_IMPORTED_MODULE_6__["CardActionIcons"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_react_material_icon__WEBPACK_IMPORTED_MODULE_7___default.a, {
      hasRipple: true,
      icon: "share",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }))));
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "23489986",
    __self: this
  }, "h1.jsx-23489986{font-weight:500;}.content-container.jsx-23489986{padding:1em;max-width:720px;box-sizing:border-box;margin:0 auto;}.card-container.jsx-23489986{width:300px;}.main-content.jsx-23489986{color:rgba(0,0,0,1);padding:0 1em 0 1em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW4vRG9jdW1lbnRzL1JlcG9zaXRvcmllcy9tYXRlcmlhbC1uZXh0LXRlbXBsYXRlL3BhZ2VzL21vdmllcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0RGtCLEFBRzJCLEFBR0osQUFNQSxBQUdRLFlBUkosQUFNbEIsSUFUQSxJQVlzQixRQVJFLFlBU3hCLFVBUmdCLGNBQ2hCIiwiZmlsZSI6Ii9Vc2Vycy9kYW4vRG9jdW1lbnRzL1JlcG9zaXRvcmllcy9tYXRlcmlhbC1uZXh0LXRlbXBsYXRlL3BhZ2VzL21vdmllcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnZXRDb25maWcgZnJvbSAnbmV4dC9jb25maWcnXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC9yZWFjdC1idXR0b24nXG5pbXBvcnQgQ2FyZCwge1xuICBDYXJkUHJpbWFyeUNvbnRlbnQsXG4gIENhcmRNZWRpYSxcbiAgQ2FyZEFjdGlvbnMsXG4gIENhcmRBY3Rpb25CdXR0b25zLFxuICBDYXJkQWN0aW9uSWNvbnNcbn0gZnJvbSAnQG1hdGVyaWFsL3JlYWN0LWNhcmQnXG5pbXBvcnQgTWF0ZXJpYWxJY29uIGZyb20gJ0BtYXRlcmlhbC9yZWFjdC1tYXRlcmlhbC1pY29uJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcblxuY29uc3QgeyBwdWJsaWNSdW50aW1lQ29uZmlnIH0gPSBnZXRDb25maWcoKVxuY29uc3QgeyBIT01FX1JPVVRFIH0gPSBwdWJsaWNSdW50aW1lQ29uZmlnXG5cbmNvbnN0IE1vdmllcyA9ICh7IHNob3dzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudC1jb250YWluZXInPlxuICAgICAgPGgxPkhlYWRlcjwvaDE+XG4gICAgICA8cD5UaGlzIGNvbnRlbnQgaXMgaW4gPGk+cGFnZXMvbW92aWVzLmpzPC9pPjwvcD5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPSdjYXJkLWNvbnRhaW5lcidcbiAgICAgID5cbiAgICAgICAge3Nob3dzLm1hcChzaG93ID0+IChcbiAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAga2V5PXtzaG93LmlkfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxDYXJkUHJpbWFyeUNvbnRlbnQ+XG4gICAgICAgICAgICAgIDxDYXJkTWVkaWFcbiAgICAgICAgICAgICAgICBzcXVhcmVcbiAgICAgICAgICAgICAgICBpbWFnZVVybD0naHR0cHM6Ly9waWNzdW0ucGhvdG9zLzUwMC81MDA/Z3JheXNjYWxlJ1xuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWFpbi1jb250ZW50Jz5cbiAgICAgICAgICAgICAgICA8aDM+XG4gICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICBocmVmPXtgJHtIT01FX1JPVVRFfS9tb3ZpZXMvW2lkXWB9XG4gICAgICAgICAgICAgICAgICAgIGFzPXtgJHtIT01FX1JPVVRFfS9tb3ZpZXMvJHtzaG93LmlkfWB9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxhPntzaG93Lm5hbWV9PC9hPlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9DYXJkUHJpbWFyeUNvbnRlbnQ+XG4gICAgICAgICAgICA8Q2FyZEFjdGlvbnM+XG4gICAgICAgICAgICAgIDxDYXJkQWN0aW9uQnV0dG9ucz5cbiAgICAgICAgICAgICAgICA8QnV0dG9uPlxuICAgICAgICAgICAgICAgICAgUmVhZFxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L0NhcmRBY3Rpb25CdXR0b25zPlxuICAgICAgICAgICAgICA8Q2FyZEFjdGlvbkljb25zPlxuICAgICAgICAgICAgICAgIDxNYXRlcmlhbEljb25cbiAgICAgICAgICAgICAgICAgIGhhc1JpcHBsZVxuICAgICAgICAgICAgICAgICAgaWNvbj0nc2hhcmUnXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9DYXJkQWN0aW9uSWNvbnM+XG4gICAgICAgICAgICA8L0NhcmRBY3Rpb25zPlxuICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgaDEge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRlbnQtY29udGFpbmVyIHtcbiAgICAgICAgICBwYWRkaW5nOiAxZW07XG4gICAgICAgICAgbWF4LXdpZHRoOiA3MjBweDtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICB9XG4gICAgICAgIC5jYXJkLWNvbnRhaW5lciB7XG4gICAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5tYWluLWNvbnRlbnQge1xuICAgICAgICAgIGNvbG9yOiByZ2JhKDAsMCwwLDEpO1xuICAgICAgICAgIHBhZGRpbmc6IDAgMWVtIDAgMWVtO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuTW92aWVzLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uKCkge1xuICBjb25zb2xlLmxvZygnZ2V0dGluZyBkYXRhJylcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLnR2bWF6ZS5jb20vc2VhcmNoL3Nob3dzP3E9YmF0bWFuJylcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcbiAgY29uc29sZS5sb2coYFNob3cgZGF0YSBmZXRjaGVkLiBDb3VudDogJHtkYXRhLmxlbmd0aH1gKVxuXG4gIHJldHVybiB7XG4gICAgc2hvd3M6IGRhdGEubWFwKGVudHJ5ID0+IGVudHJ5LnNob3cpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTW92aWVzXG4iXX0= */\n/*@ sourceURL=/Users/dan/Documents/Repositories/material-next-template/pages/movies/index.js */"));
};

Movies.getInitialProps =
/*#__PURE__*/
Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var res, data;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log('getting data');
          _context.next = 3;
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9___default()('https://api.tvmaze.com/search/shows?q=batman');

        case 3:
          res = _context.sent;
          _context.next = 6;
          return res.json();

        case 6:
          data = _context.sent;
          console.log("Show data fetched. Count: ".concat(data.length));
          return _context.abrupt("return", {
            shows: data.map(function (entry) {
              return entry.show;
            })
          });

        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
/* harmony default export */ __webpack_exports__["default"] = (Movies);

/***/ })

})
//# sourceMappingURL=movies.js.5eea7f37788b679485a0.hot-update.js.map