webpackHotUpdate("static/development/pages/movies.js",{

/***/ "./pages/movies.js":
/*!*************************!*\
  !*** ./pages/movies.js ***!
  \*************************/
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
/* harmony import */ var _material_react_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material/react-button */ "./node_modules/@material/react-button/dist/index.js");
/* harmony import */ var _material_react_button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_react_button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_react_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material/react-card */ "./node_modules/@material/react-card/dist/index.js");
/* harmony import */ var _material_react_card__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_react_card__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_react_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material/react-material-icon */ "./node_modules/@material/react-material-icon/dist/index.js");
/* harmony import */ var _material_react_material_icon__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_react_material_icon__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8__);


var _jsxFileName = "/Users/dan/Documents/Repositories/material-next-template/pages/movies.js";








var Movies = function Movies(_ref) {
  var shows = _ref.shows;
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-950155605" + " " + 'content-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h1", {
    className: "jsx-950155605",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Header"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
    className: "jsx-950155605",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "This content is in ", react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("i", {
    className: "jsx-950155605",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "pages/index.js")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-950155605" + " " + 'card-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, shows.map(function (show) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_react_card__WEBPACK_IMPORTED_MODULE_5___default.a, {
      key: show.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_react_card__WEBPACK_IMPORTED_MODULE_5__["CardPrimaryContent"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_react_card__WEBPACK_IMPORTED_MODULE_5__["CardMedia"], {
      square: true,
      imageUrl: "https://picsum.photos/500/500?grayscale",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "jsx-950155605" + " " + 'main-content',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h3", {
      className: "jsx-950155605",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
      href: "/p/[id]",
      as: "/p/".concat(show.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
      className: "jsx-950155605",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, show.name))))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_react_card__WEBPACK_IMPORTED_MODULE_5__["CardActions"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_react_card__WEBPACK_IMPORTED_MODULE_5__["CardActionButtons"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_react_button__WEBPACK_IMPORTED_MODULE_4___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, "Read")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_react_card__WEBPACK_IMPORTED_MODULE_5__["CardActionIcons"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_react_material_icon__WEBPACK_IMPORTED_MODULE_6___default.a, {
      hasRipple: true,
      icon: "share",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }))));
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "950155605",
    __self: this
  }, "h1.jsx-950155605{font-weight:500;}.content-container.jsx-950155605{padding:1em;max-width:720px;box-sizing:border-box;margin:0 auto;}.card-container.jsx-950155605{width:300px;color:rgba(0,0,0,.6);}.main-content.jsx-950155605{padding:0 1em 0 1em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW4vRG9jdW1lbnRzL1JlcG9zaXRvcmllcy9tYXRlcmlhbC1uZXh0LXRlbXBsYXRlL3BhZ2VzL21vdmllcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzRGtCLEFBRzJCLEFBR0osQUFNQSxBQUlRLFlBVEosQUFNSyxJQVR2QixJQWFBLFFBVHdCLEtBTXhCLGlCQUxnQixjQUNoQiIsImZpbGUiOiIvVXNlcnMvZGFuL0RvY3VtZW50cy9SZXBvc2l0b3JpZXMvbWF0ZXJpYWwtbmV4dC10ZW1wbGF0ZS9wYWdlcy9tb3ZpZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC9yZWFjdC1idXR0b24nXG5pbXBvcnQgQ2FyZCwge1xuICBDYXJkUHJpbWFyeUNvbnRlbnQsXG4gIENhcmRNZWRpYSxcbiAgQ2FyZEFjdGlvbnMsXG4gIENhcmRBY3Rpb25CdXR0b25zLFxuICBDYXJkQWN0aW9uSWNvbnNcbn0gZnJvbSAnQG1hdGVyaWFsL3JlYWN0LWNhcmQnXG5pbXBvcnQgTWF0ZXJpYWxJY29uIGZyb20gJ0BtYXRlcmlhbC9yZWFjdC1tYXRlcmlhbC1pY29uJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcblxuXG5jb25zdCBNb3ZpZXMgPSAoeyBzaG93cyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQtY29udGFpbmVyJz5cbiAgICAgIDxoMT5IZWFkZXI8L2gxPlxuICAgICAgPHA+VGhpcyBjb250ZW50IGlzIGluIDxpPnBhZ2VzL2luZGV4LmpzPC9pPjwvcD5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPSdjYXJkLWNvbnRhaW5lcidcbiAgICAgID5cbiAgICAgICAge3Nob3dzLm1hcChzaG93ID0+IChcbiAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAga2V5PXtzaG93LmlkfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxDYXJkUHJpbWFyeUNvbnRlbnQ+XG4gICAgICAgICAgICAgIDxDYXJkTWVkaWFcbiAgICAgICAgICAgICAgICBzcXVhcmVcbiAgICAgICAgICAgICAgICBpbWFnZVVybD0naHR0cHM6Ly9waWNzdW0ucGhvdG9zLzUwMC81MDA/Z3JheXNjYWxlJ1xuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWFpbi1jb250ZW50Jz5cbiAgICAgICAgICAgICAgICA8aDM+XG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3AvW2lkXVwiIGFzPXtgL3AvJHtzaG93LmlkfWB9PlxuICAgICAgICAgICAgICAgICAgICA8YT57c2hvdy5uYW1lfTwvYT5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQ2FyZFByaW1hcnlDb250ZW50PlxuICAgICAgICAgICAgPENhcmRBY3Rpb25zPlxuICAgICAgICAgICAgICA8Q2FyZEFjdGlvbkJ1dHRvbnM+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgIFJlYWRcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9DYXJkQWN0aW9uQnV0dG9ucz5cbiAgICAgICAgICAgICAgPENhcmRBY3Rpb25JY29ucz5cbiAgICAgICAgICAgICAgICA8TWF0ZXJpYWxJY29uXG4gICAgICAgICAgICAgICAgICBoYXNSaXBwbGVcbiAgICAgICAgICAgICAgICAgIGljb249J3NoYXJlJ1xuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvQ2FyZEFjdGlvbkljb25zPlxuICAgICAgICAgICAgPC9DYXJkQWN0aW9ucz5cbiAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGgxIHtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICB9XG4gICAgICAgIC5jb250ZW50LWNvbnRhaW5lciB7XG4gICAgICAgICAgcGFkZGluZzogMWVtO1xuICAgICAgICAgIG1heC13aWR0aDogNzIwcHg7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgfVxuICAgICAgICAuY2FyZC1jb250YWluZXIge1xuICAgICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgICBjb2xvcjogcmdiYSgwLDAsMCwuNik7XG4gICAgICAgIH1cbiAgICAgICAgLm1haW4tY29udGVudCB7XG4gICAgICAgICAgcGFkZGluZzogMCAxZW0gMCAxZW07XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5Nb3ZpZXMuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oKSB7XG4gIGNvbnNvbGUubG9nKCdnZXR0aW5nIGRhdGEnKVxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zZWFyY2gvc2hvd3M/cT1iYXRtYW4nKVxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuICBjb25zb2xlLmxvZyhgU2hvdyBkYXRhIGZldGNoZWQuIENvdW50OiAke2RhdGEubGVuZ3RofWApXG5cbiAgcmV0dXJuIHtcbiAgICBzaG93czogZGF0YS5tYXAoZW50cnkgPT4gZW50cnkuc2hvdylcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb3ZpZXNcbiJdfQ== */\n/*@ sourceURL=/Users/dan/Documents/Repositories/material-next-template/pages/movies.js */"));
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
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8___default()('https://api.tvmaze.com/search/shows?q=batman');

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
//# sourceMappingURL=movies.js.2b6ec5f81f90e1456f20.hot-update.js.map