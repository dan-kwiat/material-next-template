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
    className: "jsx-3078058244" + " " + 'content-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
    className: "jsx-3078058244",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Header"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
    className: "jsx-3078058244",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "This content is in ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
    className: "jsx-3078058244",
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
      className: "jsx-3078058244",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, show.name), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: "jsx-3078058244" + " " + ([expanded[show.id] ? largeUnshrunk.className : largeShrunk.className, 'expanded-content'].join(' ') || ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
      className: "jsx-3078058244",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Imperdiet proin fermentum leo vel. Porttitor eget dolor morbi non. Sed arcu non odio euismod lacinia at quis risus. Iaculis urna id volutpat lacus laoreet non curabitur gravida arcu. Enim nec dui nunc mattis enim. Id semper risus in hendrerit. Ipsum nunc aliquet bibendum enim facilisis. In aliquam sem fringilla ut morbi tincidunt augue. Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor. Orci ac auctor augue mauris augue neque gravida in. Mattis vulputate enim nulla aliquet porttitor. Metus dictum at tempor commodo ullamcorper a lacus vestibulum sed. Imperdiet massa tincidunt nunc pulvinar sapien et. Rhoncus mattis rhoncus urna neque."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
      className: "jsx-3078058244",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, "Dolor sit amet consectetur adipiscing elit duis. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit. Leo urna molestie at elementum eu. Sed adipiscing diam donec adipiscing tristique risus nec feugiat. At lectus urna duis convallis convallis tellus id. Dapibus ultrices in iaculis nunc sed augue lacus viverra vitae. Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum. Praesent tristique magna sit amet purus gravida quis. Lectus proin nibh nisl condimentum. Nibh venenatis cras sed felis. Consequat semper viverra nam libero justo. Ultrices gravida dictum fusce ut. Enim praesent elementum facilisis leo vel fringilla."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: "jsx-3078058244" + " " + 'fade-overlay',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: "jsx-3078058244" + " " + ((expanded[show.id] ? smallUnshrunk.className : smallShrunk.className) || ""),
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
    id: "3078058244",
    __self: this
  }, "h3.jsx-3078058244{padding:0 1em 0 1em;}.expanded-content.jsx-3078058244{position:relative;padding:0 1em 0 1em;}.fade-overlay.jsx-3078058244{position:absolute;top:0px;bottom:0px;left:0px;right:0px;background:linear-gradient(to top,rgba(255,255,255,1),rgba(255,255,255,0) 2em);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW4vRG9jdW1lbnRzL1JlcG9zaXRvcmllcy9tYXRlcmlhbC1uZXh0LXRlbXBsYXRlL3BhZ2VzL21vdmllcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErR2tCLEFBRytCLEFBR0YsQUFJQSxrQkFIRSxBQUlaLEVBUFYsTUFRYSxXQUNGLENBTFgsUUFNWSxVQUN1RSwrRUFDbkYiLCJmaWxlIjoiL1VzZXJzL2Rhbi9Eb2N1bWVudHMvUmVwb3NpdG9yaWVzL21hdGVyaWFsLW5leHQtdGVtcGxhdGUvcGFnZXMvbW92aWVzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBjc3MgZnJvbSAnc3R5bGVkLWpzeC9jc3MnXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJ1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwvcmVhY3QtYnV0dG9uJ1xuaW1wb3J0IENhcmQsIHtcbiAgQ2FyZFByaW1hcnlDb250ZW50LFxuICBDYXJkTWVkaWEsXG4gIENhcmRBY3Rpb25zLFxuICBDYXJkQWN0aW9uQnV0dG9ucyxcbiAgQ2FyZEFjdGlvbkljb25zXG59IGZyb20gJ0BtYXRlcmlhbC9yZWFjdC1jYXJkJ1xuaW1wb3J0IE1hdGVyaWFsSWNvbiBmcm9tICdAbWF0ZXJpYWwvcmVhY3QtbWF0ZXJpYWwtaWNvbidcbmltcG9ydCB7IENlbGwsIEdyaWQsIFJvdyB9IGZyb20gJ0BtYXRlcmlhbC9yZWFjdC1sYXlvdXQtZ3JpZCdcblxuY29uc3QgZ2V0U2hyaW5raW5nRGl2ID0gKHNocnVuaywgaGVpZ2h0KSA9PiB7XG4gIHJldHVybiBjc3MucmVzb2x2ZWBcbiAgICBkaXYge1xuICAgICAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuMnMgZWFzZTtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICBoZWlnaHQ6ICR7c2hydW5rID8gMCA6IGhlaWdodH1weDtcbiAgICB9XG4gIGBcbn1cblxuY29uc3QgbGFyZ2VTaHJ1bmsgPSBnZXRTaHJpbmtpbmdEaXYodHJ1ZSwgMzAwKVxuY29uc3QgbGFyZ2VVbnNocnVuayA9IGdldFNocmlua2luZ0RpdihmYWxzZSwgMzAwKVxuXG5jb25zdCBzbWFsbFNocnVuayA9IGdldFNocmlua2luZ0Rpdih0cnVlLCA1MilcbmNvbnN0IHNtYWxsVW5zaHJ1bmsgPSBnZXRTaHJpbmtpbmdEaXYoZmFsc2UsIDUyKVxuXG5jb25zdCBjYXJkU3R5bGVzID0gY3NzLnJlc29sdmVgXG4gIGRpdiB7XG4gICAgY29sb3I6IHJnYmEoMCwwLDAsLjcpO1xuICB9XG5gXG5cbmNvbnN0IE1vdmllcyA9ICh7IHNob3dzIH0pID0+IHtcbiAgY29uc3QgW2V4cGFuZGVkLCBzZXRFeHBhbmRlZF0gPSB1c2VTdGF0ZSh7fSlcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudC1jb250YWluZXInPlxuICAgICAgPGgxPkhlYWRlcjwvaDE+XG4gICAgICA8cD5UaGlzIGNvbnRlbnQgaXMgaW4gPGk+cGFnZXMvbW92aWVzLmpzPC9pPjwvcD5cbiAgICAgIDxSb3c+XG4gICAgICAgIHtzaG93cy5tYXAoKHNob3csIGkpID0+IChcbiAgICAgICAgICA8Q2VsbFxuICAgICAgICAgICAga2V5PXtzaG93LmlkfVxuICAgICAgICAgICAgZGVza3RvcENvbHVtbnM9ezR9XG4gICAgICAgICAgICBwaG9uZUNvbHVtbnM9ezR9XG4gICAgICAgICAgICB0YWJsZXRDb2x1bW5zPXs0fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxDYXJkXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2FyZFN0eWxlcy5jbGFzc05hbWV9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxDYXJkUHJpbWFyeUNvbnRlbnRcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgIHNldEV4cGFuZGVkKHggPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgLi4ueCxcbiAgICAgICAgICAgICAgICAgICAgW3Nob3cuaWRdOiAhZXhwYW5kZWRbc2hvdy5pZF0sXG4gICAgICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPENhcmRNZWRpYVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtleHBhbmRlZFtzaG93LmlkXSA/IGxhcmdlU2hydW5rLmNsYXNzTmFtZSA6IGxhcmdlVW5zaHJ1bmsuY2xhc3NOYW1lfVxuICAgICAgICAgICAgICAgICAgc3F1YXJlXG4gICAgICAgICAgICAgICAgICBpbWFnZVVybD17YGh0dHBzOi8vcGljc3VtLnBob3Rvcy9pZC8kezYxMCtpfS80MDBgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGgzPlxuICAgICAgICAgICAgICAgICAge3Nob3cubmFtZX1cbiAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17W1xuICAgICAgICAgICAgICAgICAgICBleHBhbmRlZFtzaG93LmlkXSA/IGxhcmdlVW5zaHJ1bmsuY2xhc3NOYW1lIDogbGFyZ2VTaHJ1bmsuY2xhc3NOYW1lLFxuICAgICAgICAgICAgICAgICAgICAnZXhwYW5kZWQtY29udGVudCcsXG4gICAgICAgICAgICAgICAgICBdLmpvaW4oJyAnKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8cD5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gSW1wZXJkaWV0IHByb2luIGZlcm1lbnR1bSBsZW8gdmVsLiBQb3J0dGl0b3IgZWdldCBkb2xvciBtb3JiaSBub24uIFNlZCBhcmN1IG5vbiBvZGlvIGV1aXNtb2QgbGFjaW5pYSBhdCBxdWlzIHJpc3VzLiBJYWN1bGlzIHVybmEgaWQgdm9sdXRwYXQgbGFjdXMgbGFvcmVldCBub24gY3VyYWJpdHVyIGdyYXZpZGEgYXJjdS4gRW5pbSBuZWMgZHVpIG51bmMgbWF0dGlzIGVuaW0uIElkIHNlbXBlciByaXN1cyBpbiBoZW5kcmVyaXQuIElwc3VtIG51bmMgYWxpcXVldCBiaWJlbmR1bSBlbmltIGZhY2lsaXNpcy4gSW4gYWxpcXVhbSBzZW0gZnJpbmdpbGxhIHV0IG1vcmJpIHRpbmNpZHVudCBhdWd1ZS4gVnVscHV0YXRlIGVuaW0gbnVsbGEgYWxpcXVldCBwb3J0dGl0b3IgbGFjdXMgbHVjdHVzIGFjY3Vtc2FuIHRvcnRvci4gT3JjaSBhYyBhdWN0b3IgYXVndWUgbWF1cmlzIGF1Z3VlIG5lcXVlIGdyYXZpZGEgaW4uIE1hdHRpcyB2dWxwdXRhdGUgZW5pbSBudWxsYSBhbGlxdWV0IHBvcnR0aXRvci4gTWV0dXMgZGljdHVtIGF0IHRlbXBvciBjb21tb2RvIHVsbGFtY29ycGVyIGEgbGFjdXMgdmVzdGlidWx1bSBzZWQuIEltcGVyZGlldCBtYXNzYSB0aW5jaWR1bnQgbnVuYyBwdWx2aW5hciBzYXBpZW4gZXQuIFJob25jdXMgbWF0dGlzIHJob25jdXMgdXJuYSBuZXF1ZS48L3A+XG4gICAgICAgICAgICAgICAgICA8cD5Eb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQgZHVpcy4gTGFjdXMgc3VzcGVuZGlzc2UgZmF1Y2lidXMgaW50ZXJkdW0gcG9zdWVyZSBsb3JlbSBpcHN1bSBkb2xvciBzaXQuIExlbyB1cm5hIG1vbGVzdGllIGF0IGVsZW1lbnR1bSBldS4gU2VkIGFkaXBpc2NpbmcgZGlhbSBkb25lYyBhZGlwaXNjaW5nIHRyaXN0aXF1ZSByaXN1cyBuZWMgZmV1Z2lhdC4gQXQgbGVjdHVzIHVybmEgZHVpcyBjb252YWxsaXMgY29udmFsbGlzIHRlbGx1cyBpZC4gRGFwaWJ1cyB1bHRyaWNlcyBpbiBpYWN1bGlzIG51bmMgc2VkIGF1Z3VlIGxhY3VzIHZpdmVycmEgdml0YWUuIE51bGxhIHBoYXJldHJhIGRpYW0gc2l0IGFtZXQgbmlzbCBzdXNjaXBpdCBhZGlwaXNjaW5nIGJpYmVuZHVtLiBQcmFlc2VudCB0cmlzdGlxdWUgbWFnbmEgc2l0IGFtZXQgcHVydXMgZ3JhdmlkYSBxdWlzLiBMZWN0dXMgcHJvaW4gbmliaCBuaXNsIGNvbmRpbWVudHVtLiBOaWJoIHZlbmVuYXRpcyBjcmFzIHNlZCBmZWxpcy4gQ29uc2VxdWF0IHNlbXBlciB2aXZlcnJhIG5hbSBsaWJlcm8ganVzdG8uIFVsdHJpY2VzIGdyYXZpZGEgZGljdHVtIGZ1c2NlIHV0LiBFbmltIHByYWVzZW50IGVsZW1lbnR1bSBmYWNpbGlzaXMgbGVvIHZlbCBmcmluZ2lsbGEuPC9wPlxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2ZhZGUtb3ZlcmxheSdcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvQ2FyZFByaW1hcnlDb250ZW50PlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtleHBhbmRlZFtzaG93LmlkXSA/IHNtYWxsVW5zaHJ1bmsuY2xhc3NOYW1lIDogc21hbGxTaHJ1bmsuY2xhc3NOYW1lfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPENhcmRBY3Rpb25zPlxuICAgICAgICAgICAgICAgICAgPENhcmRBY3Rpb25CdXR0b25zPlxuICAgICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9Jy9tb3ZpZXMvW2lkXSdcbiAgICAgICAgICAgICAgICAgICAgICBhcz17YC9tb3ZpZXMvJHtzaG93LmlkfWB9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhaWxpbmdJY29uPXs8TWF0ZXJpYWxJY29uIGljb249J2Fycm93X2ZvcndhcmQnIC8+fVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWQgTW9yZVxuICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8L0NhcmRBY3Rpb25CdXR0b25zPlxuICAgICAgICAgICAgICAgIDwvQ2FyZEFjdGlvbnM+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgIDwvQ2VsbD5cbiAgICAgICAgKSl9XG4gICAgICA8L1Jvdz5cbiAgICAgIHtsYXJnZVNocnVuay5zdHlsZXN9XG4gICAgICB7bGFyZ2VVbnNocnVuay5zdHlsZXN9XG4gICAgICB7c21hbGxTaHJ1bmsuc3R5bGVzfVxuICAgICAge3NtYWxsVW5zaHJ1bmsuc3R5bGVzfVxuICAgICAge2NhcmRTdHlsZXMuc3R5bGVzfVxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBoMyB7XG4gICAgICAgICAgcGFkZGluZzogMCAxZW0gMCAxZW07XG4gICAgICAgIH1cbiAgICAgICAgLmV4cGFuZGVkLWNvbnRlbnQge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBwYWRkaW5nOiAwIDFlbSAwIDFlbTtcbiAgICAgICAgfVxuICAgICAgICAuZmFkZS1vdmVybGF5IHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgICAgYm90dG9tOiAwcHg7XG4gICAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgcmdiYSgyNTUsMjU1LDI1NSwxKSwgcmdiYSgyNTUsMjU1LDI1NSwwKSAyZW0pO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuTW92aWVzLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uKCkge1xuICBjb25zb2xlLmxvZygnZ2V0dGluZyBkYXRhJylcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLnR2bWF6ZS5jb20vc2VhcmNoL3Nob3dzP3E9YmF0bWFuJylcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcbiAgY29uc29sZS5sb2coYFNob3cgZGF0YSBmZXRjaGVkLiBDb3VudDogJHtkYXRhLmxlbmd0aH1gKVxuXG4gIHJldHVybiB7XG4gICAgc2hvd3M6IGRhdGEubWFwKGVudHJ5ID0+IGVudHJ5LnNob3cpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTW92aWVzXG4iXX0= */\n/*@ sourceURL=/Users/dan/Documents/Repositories/material-next-template/pages/movies/index.js */"));
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
//# sourceMappingURL=movies.js.dab0c76321ac696a44d2.hot-update.js.map