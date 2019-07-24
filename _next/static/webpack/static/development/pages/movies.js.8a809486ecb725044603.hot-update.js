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
    className: "jsx-2149466645" + " " + 'content-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
    className: "jsx-2149466645",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Header"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
    className: "jsx-2149466645",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "This content is in ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
    className: "jsx-2149466645",
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
      className: "jsx-2149466645",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, show.name), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: "jsx-2149466645" + " " + ([expanded[show.id] ? largeUnshrunk.className : largeShrunk.className, 'expanded-content'].join(' ') || ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
      className: "jsx-2149466645",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Imperdiet proin fermentum leo vel. Porttitor eget dolor morbi non. Sed arcu non odio euismod lacinia at quis risus. Iaculis urna id volutpat lacus laoreet non curabitur gravida arcu. Enim nec dui nunc mattis enim. Id semper risus in hendrerit. Ipsum nunc aliquet bibendum enim facilisis. In aliquam sem fringilla ut morbi tincidunt augue. Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor. Orci ac auctor augue mauris augue neque gravida in. Mattis vulputate enim nulla aliquet porttitor. Metus dictum at tempor commodo ullamcorper a lacus vestibulum sed. Imperdiet massa tincidunt nunc pulvinar sapien et. Rhoncus mattis rhoncus urna neque."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
      className: "jsx-2149466645",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, "Dolor sit amet consectetur adipiscing elit duis. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit. Leo urna molestie at elementum eu. Sed adipiscing diam donec adipiscing tristique risus nec feugiat. At lectus urna duis convallis convallis tellus id. Dapibus ultrices in iaculis nunc sed augue lacus viverra vitae. Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum. Praesent tristique magna sit amet purus gravida quis. Lectus proin nibh nisl condimentum. Nibh venenatis cras sed felis. Consequat semper viverra nam libero justo. Ultrices gravida dictum fusce ut. Enim praesent elementum facilisis leo vel fringilla."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: "jsx-2149466645" + " " + 'fade-overlay',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: "jsx-2149466645" + " " + ((expanded[show.id] ? smallUnshrunk.className : smallShrunk.className) || ""),
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
    id: "2149466645",
    __self: this
  }, "h3.jsx-2149466645{padding:0 1em 0 1em;}.expanded-content.jsx-2149466645{position:relative;padding:0 1em 0 1em;}.fade-overlay.jsx-2149466645{position:absolute;top:0px;bottom:0px;left:0px;right:0px;background:linear-gradient(to top,#fff,transparent 3em,transparent 100%);background:linear-gradient(to top,rgba(255,255,255,1),rgba(255,255,255,0) 2em);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW4vRG9jdW1lbnRzL1JlcG9zaXRvcmllcy9tYXRlcmlhbC1uZXh0LXRlbXBsYXRlL3BhZ2VzL21vdmllcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErR2tCLEFBRytCLEFBR0YsQUFJQSxrQkFIRSxBQUlaLEVBUFYsTUFRYSxXQUNGLENBTFgsUUFNWSxVQUNrRSx5RUFDSywrRUFDbkYiLCJmaWxlIjoiL1VzZXJzL2Rhbi9Eb2N1bWVudHMvUmVwb3NpdG9yaWVzL21hdGVyaWFsLW5leHQtdGVtcGxhdGUvcGFnZXMvbW92aWVzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRnJhZ21lbnQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJ1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsL3JlYWN0LWJ1dHRvbidcbmltcG9ydCBDYXJkLCB7XG4gIENhcmRQcmltYXJ5Q29udGVudCxcbiAgQ2FyZE1lZGlhLFxuICBDYXJkQWN0aW9ucyxcbiAgQ2FyZEFjdGlvbkJ1dHRvbnMsXG4gIENhcmRBY3Rpb25JY29uc1xufSBmcm9tICdAbWF0ZXJpYWwvcmVhY3QtY2FyZCdcbmltcG9ydCBNYXRlcmlhbEljb24gZnJvbSAnQG1hdGVyaWFsL3JlYWN0LW1hdGVyaWFsLWljb24nXG5pbXBvcnQgeyBDZWxsLCBHcmlkLCBSb3cgfSBmcm9tICdAbWF0ZXJpYWwvcmVhY3QtbGF5b3V0LWdyaWQnXG5cbmNvbnN0IGdldFNocmlua2luZ0RpdiA9IChzaHJ1bmssIGhlaWdodCkgPT4ge1xuICByZXR1cm4gY3NzLnJlc29sdmVgXG4gICAgZGl2IHtcbiAgICAgIHRyYW5zaXRpb246IGhlaWdodCAwLjJzIGVhc2U7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgaGVpZ2h0OiAke3NocnVuayA/IDAgOiBoZWlnaHR9cHg7XG4gICAgfVxuICBgXG59XG5cbmNvbnN0IGxhcmdlU2hydW5rID0gZ2V0U2hyaW5raW5nRGl2KHRydWUsIDMwMClcbmNvbnN0IGxhcmdlVW5zaHJ1bmsgPSBnZXRTaHJpbmtpbmdEaXYoZmFsc2UsIDMwMClcblxuY29uc3Qgc21hbGxTaHJ1bmsgPSBnZXRTaHJpbmtpbmdEaXYodHJ1ZSwgNTIpXG5jb25zdCBzbWFsbFVuc2hydW5rID0gZ2V0U2hyaW5raW5nRGl2KGZhbHNlLCA1MilcblxuY29uc3QgY2FyZFN0eWxlcyA9IGNzcy5yZXNvbHZlYFxuICBkaXYge1xuICAgIGNvbG9yOiByZ2JhKDAsMCwwLC43KTtcbiAgfVxuYFxuXG5jb25zdCBNb3ZpZXMgPSAoeyBzaG93cyB9KSA9PiB7XG4gIGNvbnN0IFtleHBhbmRlZCwgc2V0RXhwYW5kZWRdID0gdXNlU3RhdGUoe30pXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQtY29udGFpbmVyJz5cbiAgICAgIDxoMT5IZWFkZXI8L2gxPlxuICAgICAgPHA+VGhpcyBjb250ZW50IGlzIGluIDxpPnBhZ2VzL21vdmllcy5qczwvaT48L3A+XG4gICAgICA8Um93PlxuICAgICAgICB7c2hvd3MubWFwKChzaG93LCBpKSA9PiAoXG4gICAgICAgICAgPENlbGxcbiAgICAgICAgICAgIGtleT17c2hvdy5pZH1cbiAgICAgICAgICAgIGRlc2t0b3BDb2x1bW5zPXs0fVxuICAgICAgICAgICAgcGhvbmVDb2x1bW5zPXs0fVxuICAgICAgICAgICAgdGFibGV0Q29sdW1ucz17NH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NhcmRTdHlsZXMuY2xhc3NOYW1lfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Q2FyZFByaW1hcnlDb250ZW50XG4gICAgICAgICAgICAgICAgb25DbGljaz17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICBzZXRFeHBhbmRlZCh4ID0+ICh7XG4gICAgICAgICAgICAgICAgICAgIC4uLngsXG4gICAgICAgICAgICAgICAgICAgIFtzaG93LmlkXTogIWV4cGFuZGVkW3Nob3cuaWRdLFxuICAgICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxDYXJkTWVkaWFcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17ZXhwYW5kZWRbc2hvdy5pZF0gPyBsYXJnZVNocnVuay5jbGFzc05hbWUgOiBsYXJnZVVuc2hydW5rLmNsYXNzTmFtZX1cbiAgICAgICAgICAgICAgICAgIHNxdWFyZVxuICAgICAgICAgICAgICAgICAgaW1hZ2VVcmw9e2BodHRwczovL3BpY3N1bS5waG90b3MvaWQvJHs2MTAraX0vNDAwYH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgICAgICAgIHtzaG93Lm5hbWV9XG4gICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1tcbiAgICAgICAgICAgICAgICAgICAgZXhwYW5kZWRbc2hvdy5pZF0gPyBsYXJnZVVuc2hydW5rLmNsYXNzTmFtZSA6IGxhcmdlU2hydW5rLmNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgJ2V4cGFuZGVkLWNvbnRlbnQnLFxuICAgICAgICAgICAgICAgICAgXS5qb2luKCcgJyl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHA+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIEltcGVyZGlldCBwcm9pbiBmZXJtZW50dW0gbGVvIHZlbC4gUG9ydHRpdG9yIGVnZXQgZG9sb3IgbW9yYmkgbm9uLiBTZWQgYXJjdSBub24gb2RpbyBldWlzbW9kIGxhY2luaWEgYXQgcXVpcyByaXN1cy4gSWFjdWxpcyB1cm5hIGlkIHZvbHV0cGF0IGxhY3VzIGxhb3JlZXQgbm9uIGN1cmFiaXR1ciBncmF2aWRhIGFyY3UuIEVuaW0gbmVjIGR1aSBudW5jIG1hdHRpcyBlbmltLiBJZCBzZW1wZXIgcmlzdXMgaW4gaGVuZHJlcml0LiBJcHN1bSBudW5jIGFsaXF1ZXQgYmliZW5kdW0gZW5pbSBmYWNpbGlzaXMuIEluIGFsaXF1YW0gc2VtIGZyaW5naWxsYSB1dCBtb3JiaSB0aW5jaWR1bnQgYXVndWUuIFZ1bHB1dGF0ZSBlbmltIG51bGxhIGFsaXF1ZXQgcG9ydHRpdG9yIGxhY3VzIGx1Y3R1cyBhY2N1bXNhbiB0b3J0b3IuIE9yY2kgYWMgYXVjdG9yIGF1Z3VlIG1hdXJpcyBhdWd1ZSBuZXF1ZSBncmF2aWRhIGluLiBNYXR0aXMgdnVscHV0YXRlIGVuaW0gbnVsbGEgYWxpcXVldCBwb3J0dGl0b3IuIE1ldHVzIGRpY3R1bSBhdCB0ZW1wb3IgY29tbW9kbyB1bGxhbWNvcnBlciBhIGxhY3VzIHZlc3RpYnVsdW0gc2VkLiBJbXBlcmRpZXQgbWFzc2EgdGluY2lkdW50IG51bmMgcHVsdmluYXIgc2FwaWVuIGV0LiBSaG9uY3VzIG1hdHRpcyByaG9uY3VzIHVybmEgbmVxdWUuPC9wPlxuICAgICAgICAgICAgICAgICAgPHA+RG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0IGR1aXMuIExhY3VzIHN1c3BlbmRpc3NlIGZhdWNpYnVzIGludGVyZHVtIHBvc3VlcmUgbG9yZW0gaXBzdW0gZG9sb3Igc2l0LiBMZW8gdXJuYSBtb2xlc3RpZSBhdCBlbGVtZW50dW0gZXUuIFNlZCBhZGlwaXNjaW5nIGRpYW0gZG9uZWMgYWRpcGlzY2luZyB0cmlzdGlxdWUgcmlzdXMgbmVjIGZldWdpYXQuIEF0IGxlY3R1cyB1cm5hIGR1aXMgY29udmFsbGlzIGNvbnZhbGxpcyB0ZWxsdXMgaWQuIERhcGlidXMgdWx0cmljZXMgaW4gaWFjdWxpcyBudW5jIHNlZCBhdWd1ZSBsYWN1cyB2aXZlcnJhIHZpdGFlLiBOdWxsYSBwaGFyZXRyYSBkaWFtIHNpdCBhbWV0IG5pc2wgc3VzY2lwaXQgYWRpcGlzY2luZyBiaWJlbmR1bS4gUHJhZXNlbnQgdHJpc3RpcXVlIG1hZ25hIHNpdCBhbWV0IHB1cnVzIGdyYXZpZGEgcXVpcy4gTGVjdHVzIHByb2luIG5pYmggbmlzbCBjb25kaW1lbnR1bS4gTmliaCB2ZW5lbmF0aXMgY3JhcyBzZWQgZmVsaXMuIENvbnNlcXVhdCBzZW1wZXIgdml2ZXJyYSBuYW0gbGliZXJvIGp1c3RvLiBVbHRyaWNlcyBncmF2aWRhIGRpY3R1bSBmdXNjZSB1dC4gRW5pbSBwcmFlc2VudCBlbGVtZW50dW0gZmFjaWxpc2lzIGxlbyB2ZWwgZnJpbmdpbGxhLjwvcD5cbiAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmYWRlLW92ZXJsYXknXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L0NhcmRQcmltYXJ5Q29udGVudD5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17ZXhwYW5kZWRbc2hvdy5pZF0gPyBzbWFsbFVuc2hydW5rLmNsYXNzTmFtZSA6IHNtYWxsU2hydW5rLmNsYXNzTmFtZX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxDYXJkQWN0aW9ucz5cbiAgICAgICAgICAgICAgICAgIDxDYXJkQWN0aW9uQnV0dG9ucz5cbiAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPScvbW92aWVzL1tpZF0nXG4gICAgICAgICAgICAgICAgICAgICAgYXM9e2AvbW92aWVzLyR7c2hvdy5pZH1gfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYWlsaW5nSWNvbj17PE1hdGVyaWFsSWNvbiBpY29uPSdhcnJvd19mb3J3YXJkJyAvPn1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFkIE1vcmVcbiAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPC9DYXJkQWN0aW9uQnV0dG9ucz5cbiAgICAgICAgICAgICAgICA8L0NhcmRBY3Rpb25zPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICA8L0NlbGw+XG4gICAgICAgICkpfVxuICAgICAgPC9Sb3c+XG4gICAgICB7bGFyZ2VTaHJ1bmsuc3R5bGVzfVxuICAgICAge2xhcmdlVW5zaHJ1bmsuc3R5bGVzfVxuICAgICAge3NtYWxsU2hydW5rLnN0eWxlc31cbiAgICAgIHtzbWFsbFVuc2hydW5rLnN0eWxlc31cbiAgICAgIHtjYXJkU3R5bGVzLnN0eWxlc31cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgaDMge1xuICAgICAgICAgIHBhZGRpbmc6IDAgMWVtIDAgMWVtO1xuICAgICAgICB9XG4gICAgICAgIC5leHBhbmRlZC1jb250ZW50IHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgcGFkZGluZzogMCAxZW0gMCAxZW07XG4gICAgICAgIH1cbiAgICAgICAgLmZhZGUtb3ZlcmxheSB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMHB4O1xuICAgICAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgICByaWdodDogMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICNmZmYsIHRyYW5zcGFyZW50IDNlbSwgdHJhbnNwYXJlbnQgMTAwJSk7XG4gICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgcmdiYSgyNTUsMjU1LDI1NSwxKSwgcmdiYSgyNTUsMjU1LDI1NSwwKSAyZW0pO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuTW92aWVzLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uKCkge1xuICBjb25zb2xlLmxvZygnZ2V0dGluZyBkYXRhJylcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLnR2bWF6ZS5jb20vc2VhcmNoL3Nob3dzP3E9YmF0bWFuJylcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcbiAgY29uc29sZS5sb2coYFNob3cgZGF0YSBmZXRjaGVkLiBDb3VudDogJHtkYXRhLmxlbmd0aH1gKVxuXG4gIHJldHVybiB7XG4gICAgc2hvd3M6IGRhdGEubWFwKGVudHJ5ID0+IGVudHJ5LnNob3cpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTW92aWVzXG4iXX0= */\n/*@ sourceURL=/Users/dan/Documents/Repositories/material-next-template/pages/movies/index.js */"));
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
//# sourceMappingURL=movies.js.8a809486ecb725044603.hot-update.js.map