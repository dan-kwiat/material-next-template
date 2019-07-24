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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_react_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material/react-button */ "./node_modules/@material/react-button/dist/index.js");
/* harmony import */ var _material_react_button__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_react_button__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_react_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material/react-card */ "./node_modules/@material/react-card/dist/index.js");
/* harmony import */ var _material_react_card__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_react_card__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_react_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material/react-material-icon */ "./node_modules/@material/react-material-icon/dist/index.js");
/* harmony import */ var _material_react_material_icon__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_react_material_icon__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_react_layout_grid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material/react-layout-grid */ "./node_modules/@material/react-layout-grid/dist/index.js");
/* harmony import */ var _material_react_layout_grid__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_react_layout_grid__WEBPACK_IMPORTED_MODULE_12__);





var _jsxFileName = "/Users/dan/Documents/Repositories/material-next-template/pages/movies/index.js";










var getShrinkingDiv = function getShrinkingDiv(shrunk, height) {
  return {
    styles: react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
      id: "1056860842",
      dynamic: [shrunk ? 0 : height],
      __self: this
    }, "div.__jsx-style-dynamic-selector{-webkit-transition:height 0.2s ease;transition:height 0.2s ease;overflow:hidden;height:".concat(shrunk ? 0 : height, "px;}")),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["1056860842", [shrunk ? 0 : height]]])
  };
};

var largeShrunk = getShrinkingDiv(true, 300);
var largeUnshrunk = getShrinkingDiv(false, 300);
var smallShrunk = getShrinkingDiv(true, 52);
var smallUnshrunk = getShrinkingDiv(false, 52);
var cardStyles = {
  styles: react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
    id: "4271100301",
    __self: undefined
  }, "div.jsx-4271100301{color:rgba(0,0,0,.7);}"),
  className: "jsx-4271100301"
};

var Movies = function Movies(_ref) {
  var shows = _ref.shows;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])({}),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState, 2),
      expanded = _useState2[0],
      setExpanded = _useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "jsx-2951748689" + " " + 'content-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
    className: "jsx-2951748689",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Header"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
    className: "jsx-2951748689",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "This content is in ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
    className: "jsx-2951748689",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "pages/movies.js")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_react_layout_grid__WEBPACK_IMPORTED_MODULE_12__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, shows.map(function (show, i) {
    return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_react_layout_grid__WEBPACK_IMPORTED_MODULE_12__["Cell"], {
      key: show.id,
      desktopColumns: 4,
      phoneColumns: 4,
      tabletColumns: 4,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_react_card__WEBPACK_IMPORTED_MODULE_10___default.a, {
      className: cardStyles.className,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_react_card__WEBPACK_IMPORTED_MODULE_10__["CardPrimaryContent"], {
      onClick: function onClick(e) {
        setExpanded(function (x) {
          return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, x, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, show.id, !expanded[show.id]));
        });
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_react_card__WEBPACK_IMPORTED_MODULE_10__["CardMedia"], {
      className: expanded[show.id] ? largeShrunk.className : largeUnshrunk.className,
      square: true,
      imageUrl: "https://picsum.photos/id/".concat(610 + i, "/400"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", {
      className: "jsx-2951748689",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, show.name), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: "jsx-2951748689" + " " + ([expanded[show.id] ? largeUnshrunk.className : largeShrunk.className, 'expanded-content'].join(' ') || ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
      className: "jsx-2951748689",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Imperdiet proin fermentum leo vel. Porttitor eget dolor morbi non. Sed arcu non odio euismod lacinia at quis risus. Iaculis urna id volutpat lacus laoreet non curabitur gravida arcu. Enim nec dui nunc mattis enim. Id semper risus in hendrerit. Ipsum nunc aliquet bibendum enim facilisis. In aliquam sem fringilla ut morbi tincidunt augue. Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor. Orci ac auctor augue mauris augue neque gravida in. Mattis vulputate enim nulla aliquet porttitor. Metus dictum at tempor commodo ullamcorper a lacus vestibulum sed. Imperdiet massa tincidunt nunc pulvinar sapien et. Rhoncus mattis rhoncus urna neque."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
      className: "jsx-2951748689",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, "Dolor sit amet consectetur adipiscing elit duis. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit. Leo urna molestie at elementum eu. Sed adipiscing diam donec adipiscing tristique risus nec feugiat. At lectus urna duis convallis convallis tellus id. Dapibus ultrices in iaculis nunc sed augue lacus viverra vitae. Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum. Praesent tristique magna sit amet purus gravida quis. Lectus proin nibh nisl condimentum. Nibh venenatis cras sed felis. Consequat semper viverra nam libero justo. Ultrices gravida dictum fusce ut. Enim praesent elementum facilisis leo vel fringilla."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: "jsx-2951748689" + " " + 'fade-overlay',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: "jsx-2951748689" + " " + ((expanded[show.id] ? smallUnshrunk.className : smallShrunk.className) || ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_react_card__WEBPACK_IMPORTED_MODULE_10__["CardActions"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_react_card__WEBPACK_IMPORTED_MODULE_10__["CardActionButtons"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
      href: "/movies/[id]",
      as: "/movies/".concat(show.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_react_button__WEBPACK_IMPORTED_MODULE_9___default.a, {
      outlined: true,
      trailingIcon: react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_react_material_icon__WEBPACK_IMPORTED_MODULE_11___default.a, {
        icon: "arrow_forward",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, "Read More")))))));
  })), largeShrunk.styles, largeUnshrunk.styles, smallShrunk.styles, smallUnshrunk.styles, cardStyles.styles, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
    id: "2951748689",
    __self: this
  }, "h3.jsx-2951748689{padding:0 1em 0 1em;}.expanded-content.jsx-2951748689{position:relative;padding:0 1em 0 1em;}.fade-overlay.jsx-2951748689{position:absolute;top:0px;bottom:0px;left:0px;right:0px;background:linear-gradient(to top,#fff,transparent 3em,transparent 100%);background:linear-gradient(to top,rgba(255,255,255,1),rgba(255,255,255,1) 1em,rgba(255,255,255,0) 2.5em);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW4vRG9jdW1lbnRzL1JlcG9zaXRvcmllcy9tYXRlcmlhbC1uZXh0LXRlbXBsYXRlL3BhZ2VzL21vdmllcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErR2tCLEFBRytCLEFBR0YsQUFJQSxrQkFIRSxBQUlaLEVBUFYsTUFRYSxXQUNGLENBTFgsUUFNWSxVQUNrRSx5RUFDZ0MseUdBQzlHIiwiZmlsZSI6Ii9Vc2Vycy9kYW4vRG9jdW1lbnRzL1JlcG9zaXRvcmllcy9tYXRlcmlhbC1uZXh0LXRlbXBsYXRlL3BhZ2VzL21vdmllcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZyYWdtZW50LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IGNzcyBmcm9tICdzdHlsZWQtanN4L2NzcydcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC9yZWFjdC1idXR0b24nXG5pbXBvcnQgQ2FyZCwge1xuICBDYXJkUHJpbWFyeUNvbnRlbnQsXG4gIENhcmRNZWRpYSxcbiAgQ2FyZEFjdGlvbnMsXG4gIENhcmRBY3Rpb25CdXR0b25zLFxuICBDYXJkQWN0aW9uSWNvbnNcbn0gZnJvbSAnQG1hdGVyaWFsL3JlYWN0LWNhcmQnXG5pbXBvcnQgTWF0ZXJpYWxJY29uIGZyb20gJ0BtYXRlcmlhbC9yZWFjdC1tYXRlcmlhbC1pY29uJ1xuaW1wb3J0IHsgQ2VsbCwgR3JpZCwgUm93IH0gZnJvbSAnQG1hdGVyaWFsL3JlYWN0LWxheW91dC1ncmlkJ1xuXG5jb25zdCBnZXRTaHJpbmtpbmdEaXYgPSAoc2hydW5rLCBoZWlnaHQpID0+IHtcbiAgcmV0dXJuIGNzcy5yZXNvbHZlYFxuICAgIGRpdiB7XG4gICAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMC4ycyBlYXNlO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIGhlaWdodDogJHtzaHJ1bmsgPyAwIDogaGVpZ2h0fXB4O1xuICAgIH1cbiAgYFxufVxuXG5jb25zdCBsYXJnZVNocnVuayA9IGdldFNocmlua2luZ0Rpdih0cnVlLCAzMDApXG5jb25zdCBsYXJnZVVuc2hydW5rID0gZ2V0U2hyaW5raW5nRGl2KGZhbHNlLCAzMDApXG5cbmNvbnN0IHNtYWxsU2hydW5rID0gZ2V0U2hyaW5raW5nRGl2KHRydWUsIDUyKVxuY29uc3Qgc21hbGxVbnNocnVuayA9IGdldFNocmlua2luZ0RpdihmYWxzZSwgNTIpXG5cbmNvbnN0IGNhcmRTdHlsZXMgPSBjc3MucmVzb2x2ZWBcbiAgZGl2IHtcbiAgICBjb2xvcjogcmdiYSgwLDAsMCwuNyk7XG4gIH1cbmBcblxuY29uc3QgTW92aWVzID0gKHsgc2hvd3MgfSkgPT4ge1xuICBjb25zdCBbZXhwYW5kZWQsIHNldEV4cGFuZGVkXSA9IHVzZVN0YXRlKHt9KVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50LWNvbnRhaW5lcic+XG4gICAgICA8aDE+SGVhZGVyPC9oMT5cbiAgICAgIDxwPlRoaXMgY29udGVudCBpcyBpbiA8aT5wYWdlcy9tb3ZpZXMuanM8L2k+PC9wPlxuICAgICAgPFJvdz5cbiAgICAgICAge3Nob3dzLm1hcCgoc2hvdywgaSkgPT4gKFxuICAgICAgICAgIDxDZWxsXG4gICAgICAgICAgICBrZXk9e3Nob3cuaWR9XG4gICAgICAgICAgICBkZXNrdG9wQ29sdW1ucz17NH1cbiAgICAgICAgICAgIHBob25lQ29sdW1ucz17NH1cbiAgICAgICAgICAgIHRhYmxldENvbHVtbnM9ezR9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPENhcmRcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjYXJkU3R5bGVzLmNsYXNzTmFtZX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPENhcmRQcmltYXJ5Q29udGVudFxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgc2V0RXhwYW5kZWQoeCA9PiAoe1xuICAgICAgICAgICAgICAgICAgICAuLi54LFxuICAgICAgICAgICAgICAgICAgICBbc2hvdy5pZF06ICFleHBhbmRlZFtzaG93LmlkXSxcbiAgICAgICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8Q2FyZE1lZGlhXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2V4cGFuZGVkW3Nob3cuaWRdID8gbGFyZ2VTaHJ1bmsuY2xhc3NOYW1lIDogbGFyZ2VVbnNocnVuay5jbGFzc05hbWV9XG4gICAgICAgICAgICAgICAgICBzcXVhcmVcbiAgICAgICAgICAgICAgICAgIGltYWdlVXJsPXtgaHR0cHM6Ly9waWNzdW0ucGhvdG9zL2lkLyR7NjEwK2l9LzQwMGB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8aDM+XG4gICAgICAgICAgICAgICAgICB7c2hvdy5uYW1lfVxuICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtbXG4gICAgICAgICAgICAgICAgICAgIGV4cGFuZGVkW3Nob3cuaWRdID8gbGFyZ2VVbnNocnVuay5jbGFzc05hbWUgOiBsYXJnZVNocnVuay5jbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgICAgICdleHBhbmRlZC1jb250ZW50JyxcbiAgICAgICAgICAgICAgICAgIF0uam9pbignICcpfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxwPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBJbXBlcmRpZXQgcHJvaW4gZmVybWVudHVtIGxlbyB2ZWwuIFBvcnR0aXRvciBlZ2V0IGRvbG9yIG1vcmJpIG5vbi4gU2VkIGFyY3Ugbm9uIG9kaW8gZXVpc21vZCBsYWNpbmlhIGF0IHF1aXMgcmlzdXMuIElhY3VsaXMgdXJuYSBpZCB2b2x1dHBhdCBsYWN1cyBsYW9yZWV0IG5vbiBjdXJhYml0dXIgZ3JhdmlkYSBhcmN1LiBFbmltIG5lYyBkdWkgbnVuYyBtYXR0aXMgZW5pbS4gSWQgc2VtcGVyIHJpc3VzIGluIGhlbmRyZXJpdC4gSXBzdW0gbnVuYyBhbGlxdWV0IGJpYmVuZHVtIGVuaW0gZmFjaWxpc2lzLiBJbiBhbGlxdWFtIHNlbSBmcmluZ2lsbGEgdXQgbW9yYmkgdGluY2lkdW50IGF1Z3VlLiBWdWxwdXRhdGUgZW5pbSBudWxsYSBhbGlxdWV0IHBvcnR0aXRvciBsYWN1cyBsdWN0dXMgYWNjdW1zYW4gdG9ydG9yLiBPcmNpIGFjIGF1Y3RvciBhdWd1ZSBtYXVyaXMgYXVndWUgbmVxdWUgZ3JhdmlkYSBpbi4gTWF0dGlzIHZ1bHB1dGF0ZSBlbmltIG51bGxhIGFsaXF1ZXQgcG9ydHRpdG9yLiBNZXR1cyBkaWN0dW0gYXQgdGVtcG9yIGNvbW1vZG8gdWxsYW1jb3JwZXIgYSBsYWN1cyB2ZXN0aWJ1bHVtIHNlZC4gSW1wZXJkaWV0IG1hc3NhIHRpbmNpZHVudCBudW5jIHB1bHZpbmFyIHNhcGllbiBldC4gUmhvbmN1cyBtYXR0aXMgcmhvbmN1cyB1cm5hIG5lcXVlLjwvcD5cbiAgICAgICAgICAgICAgICAgIDxwPkRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCBkdWlzLiBMYWN1cyBzdXNwZW5kaXNzZSBmYXVjaWJ1cyBpbnRlcmR1bSBwb3N1ZXJlIGxvcmVtIGlwc3VtIGRvbG9yIHNpdC4gTGVvIHVybmEgbW9sZXN0aWUgYXQgZWxlbWVudHVtIGV1LiBTZWQgYWRpcGlzY2luZyBkaWFtIGRvbmVjIGFkaXBpc2NpbmcgdHJpc3RpcXVlIHJpc3VzIG5lYyBmZXVnaWF0LiBBdCBsZWN0dXMgdXJuYSBkdWlzIGNvbnZhbGxpcyBjb252YWxsaXMgdGVsbHVzIGlkLiBEYXBpYnVzIHVsdHJpY2VzIGluIGlhY3VsaXMgbnVuYyBzZWQgYXVndWUgbGFjdXMgdml2ZXJyYSB2aXRhZS4gTnVsbGEgcGhhcmV0cmEgZGlhbSBzaXQgYW1ldCBuaXNsIHN1c2NpcGl0IGFkaXBpc2NpbmcgYmliZW5kdW0uIFByYWVzZW50IHRyaXN0aXF1ZSBtYWduYSBzaXQgYW1ldCBwdXJ1cyBncmF2aWRhIHF1aXMuIExlY3R1cyBwcm9pbiBuaWJoIG5pc2wgY29uZGltZW50dW0uIE5pYmggdmVuZW5hdGlzIGNyYXMgc2VkIGZlbGlzLiBDb25zZXF1YXQgc2VtcGVyIHZpdmVycmEgbmFtIGxpYmVybyBqdXN0by4gVWx0cmljZXMgZ3JhdmlkYSBkaWN0dW0gZnVzY2UgdXQuIEVuaW0gcHJhZXNlbnQgZWxlbWVudHVtIGZhY2lsaXNpcyBsZW8gdmVsIGZyaW5naWxsYS48L3A+XG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZmFkZS1vdmVybGF5J1xuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9DYXJkUHJpbWFyeUNvbnRlbnQ+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2V4cGFuZGVkW3Nob3cuaWRdID8gc21hbGxVbnNocnVuay5jbGFzc05hbWUgOiBzbWFsbFNocnVuay5jbGFzc05hbWV9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8Q2FyZEFjdGlvbnM+XG4gICAgICAgICAgICAgICAgICA8Q2FyZEFjdGlvbkJ1dHRvbnM+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj0nL21vdmllcy9baWRdJ1xuICAgICAgICAgICAgICAgICAgICAgIGFzPXtgL21vdmllcy8ke3Nob3cuaWR9YH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmVkXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFpbGluZ0ljb249ezxNYXRlcmlhbEljb24gaWNvbj0nYXJyb3dfZm9yd2FyZCcgLz59XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhZCBNb3JlXG4gICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDwvQ2FyZEFjdGlvbkJ1dHRvbnM+XG4gICAgICAgICAgICAgICAgPC9DYXJkQWN0aW9ucz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgPC9DZWxsPlxuICAgICAgICApKX1cbiAgICAgIDwvUm93PlxuICAgICAge2xhcmdlU2hydW5rLnN0eWxlc31cbiAgICAgIHtsYXJnZVVuc2hydW5rLnN0eWxlc31cbiAgICAgIHtzbWFsbFNocnVuay5zdHlsZXN9XG4gICAgICB7c21hbGxVbnNocnVuay5zdHlsZXN9XG4gICAgICB7Y2FyZFN0eWxlcy5zdHlsZXN9XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGgzIHtcbiAgICAgICAgICBwYWRkaW5nOiAwIDFlbSAwIDFlbTtcbiAgICAgICAgfVxuICAgICAgICAuZXhwYW5kZWQtY29udGVudCB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHBhZGRpbmc6IDAgMWVtIDAgMWVtO1xuICAgICAgICB9XG4gICAgICAgIC5mYWRlLW92ZXJsYXkge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgICBib3R0b206IDBweDtcbiAgICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjZmZmLCB0cmFuc3BhcmVudCAzZW0sIHRyYW5zcGFyZW50IDEwMCUpO1xuICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHJnYmEoMjU1LDI1NSwyNTUsMSksIHJnYmEoMjU1LDI1NSwyNTUsMSkgMWVtLCByZ2JhKDI1NSwyNTUsMjU1LDApIDIuNWVtKTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbk1vdmllcy5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbigpIHtcbiAgY29uc29sZS5sb2coJ2dldHRpbmcgZGF0YScpXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS50dm1hemUuY29tL3NlYXJjaC9zaG93cz9xPWJhdG1hbicpXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXG4gIGNvbnNvbGUubG9nKGBTaG93IGRhdGEgZmV0Y2hlZC4gQ291bnQ6ICR7ZGF0YS5sZW5ndGh9YClcblxuICByZXR1cm4ge1xuICAgIHNob3dzOiBkYXRhLm1hcChlbnRyeSA9PiBlbnRyeS5zaG93KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vdmllc1xuIl19 */\n/*@ sourceURL=/Users/dan/Documents/Repositories/material-next-template/pages/movies/index.js */"));
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
//# sourceMappingURL=movies.js.8a186eb5386a3cce3e58.hot-update.js.map