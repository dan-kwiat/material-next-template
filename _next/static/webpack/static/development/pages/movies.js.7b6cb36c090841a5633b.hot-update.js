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
/* harmony import */ var _material_react_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material/react-dialog */ "./node_modules/@material/react-dialog/dist/index.js");
/* harmony import */ var _material_react_dialog__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_react_dialog__WEBPACK_IMPORTED_MODULE_13__);





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
var dialogStyles = {
  styles: react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
    id: "3942587624",
    __self: undefined
  }, "div.jsx-3942587624>div.mdc-dialog__container.jsx-3942587624{height:600px;}"),
  className: "jsx-3942587624"
};

var SelectedMovie = function SelectedMovie(_ref) {
  var isOpen = _ref.isOpen,
      show = _ref.show;
  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_react_dialog__WEBPACK_IMPORTED_MODULE_13___default.a, {
    className: dialogStyles.className,
    open: isOpen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_react_dialog__WEBPACK_IMPORTED_MODULE_13__["DialogTitle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, show.name), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_react_dialog__WEBPACK_IMPORTED_MODULE_13__["DialogContent"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
    src: "https://picsum.photos/id/".concat(610, "/400"),
    className: "jsx-429862689" + " " + 'dialog-cover-photo',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "jsx-429862689",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "HELLO DIALOG CONTENT")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_react_dialog__WEBPACK_IMPORTED_MODULE_13__["DialogFooter"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_react_dialog__WEBPACK_IMPORTED_MODULE_13__["DialogButton"], {
    action: "dismiss",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "Dismiss"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_react_dialog__WEBPACK_IMPORTED_MODULE_13__["DialogButton"], {
    action: "accept",
    isDefault: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "Accept"))), dialogStyles.styles, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
    id: "429862689",
    __self: this
  }, ".dialog-cover-photo.jsx-429862689{max-width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW4vRG9jdW1lbnRzL1JlcG9zaXRvcmllcy9tYXRlcmlhbC1uZXh0LXRlbXBsYXRlL3BhZ2VzL21vdmllcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwRWtCLEFBRzBCLGVBQ2pCIiwiZmlsZSI6Ii9Vc2Vycy9kYW4vRG9jdW1lbnRzL1JlcG9zaXRvcmllcy9tYXRlcmlhbC1uZXh0LXRlbXBsYXRlL3BhZ2VzL21vdmllcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZyYWdtZW50LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IGNzcyBmcm9tICdzdHlsZWQtanN4L2NzcydcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC9yZWFjdC1idXR0b24nXG5pbXBvcnQgQ2FyZCwge1xuICBDYXJkUHJpbWFyeUNvbnRlbnQsXG4gIENhcmRNZWRpYSxcbiAgQ2FyZEFjdGlvbnMsXG4gIENhcmRBY3Rpb25CdXR0b25zLFxuICBDYXJkQWN0aW9uSWNvbnNcbn0gZnJvbSAnQG1hdGVyaWFsL3JlYWN0LWNhcmQnXG5pbXBvcnQgTWF0ZXJpYWxJY29uIGZyb20gJ0BtYXRlcmlhbC9yZWFjdC1tYXRlcmlhbC1pY29uJ1xuaW1wb3J0IHsgQ2VsbCwgR3JpZCwgUm93IH0gZnJvbSAnQG1hdGVyaWFsL3JlYWN0LWxheW91dC1ncmlkJ1xuaW1wb3J0IERpYWxvZywge1xuICBEaWFsb2dUaXRsZSxcbiAgRGlhbG9nQ29udGVudCxcbiAgRGlhbG9nRm9vdGVyLFxuICBEaWFsb2dCdXR0b24sXG59IGZyb20gJ0BtYXRlcmlhbC9yZWFjdC1kaWFsb2cnXG5cbmNvbnN0IGdldFNocmlua2luZ0RpdiA9IChzaHJ1bmssIGhlaWdodCkgPT4ge1xuICByZXR1cm4gY3NzLnJlc29sdmVgXG4gICAgZGl2IHtcbiAgICAgIHRyYW5zaXRpb246IGhlaWdodCAwLjJzIGVhc2U7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgaGVpZ2h0OiAke3NocnVuayA/IDAgOiBoZWlnaHR9cHg7XG4gICAgfVxuICBgXG59XG5cbmNvbnN0IGxhcmdlU2hydW5rID0gZ2V0U2hyaW5raW5nRGl2KHRydWUsIDMwMClcbmNvbnN0IGxhcmdlVW5zaHJ1bmsgPSBnZXRTaHJpbmtpbmdEaXYoZmFsc2UsIDMwMClcblxuY29uc3Qgc21hbGxTaHJ1bmsgPSBnZXRTaHJpbmtpbmdEaXYodHJ1ZSwgNTIpXG5jb25zdCBzbWFsbFVuc2hydW5rID0gZ2V0U2hyaW5raW5nRGl2KGZhbHNlLCA1MilcblxuY29uc3QgY2FyZFN0eWxlcyA9IGNzcy5yZXNvbHZlYFxuICBkaXYge1xuICAgIGNvbG9yOiByZ2JhKDAsMCwwLC43KTtcbiAgfVxuYFxuXG5cbmNvbnN0IGRpYWxvZ1N0eWxlcyA9IGNzcy5yZXNvbHZlYFxuICBkaXYgPiBkaXYubWRjLWRpYWxvZ19fY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDYwMHB4O1xuICB9XG5gXG5cblxuXG5cbmNvbnN0IFNlbGVjdGVkTW92aWUgPSAoeyBpc09wZW4sIHNob3cgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIDxEaWFsb2dcbiAgICAgICAgY2xhc3NOYW1lPXtkaWFsb2dTdHlsZXMuY2xhc3NOYW1lfVxuICAgICAgICBvcGVuPXtpc09wZW59XG4gICAgICA+XG4gICAgICAgIDxEaWFsb2dUaXRsZT57c2hvdy5uYW1lfTwvRGlhbG9nVGl0bGU+XG4gICAgICAgIDxEaWFsb2dDb250ZW50PlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz17YGh0dHBzOi8vcGljc3VtLnBob3Rvcy9pZC8kezYxMH0vNDAwYH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT0nZGlhbG9nLWNvdmVyLXBob3RvJ1xuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdj5IRUxMTyBESUFMT0cgQ09OVEVOVDwvZGl2PlxuICAgICAgICA8L0RpYWxvZ0NvbnRlbnQ+XG4gICAgICAgIDxEaWFsb2dGb290ZXI+XG4gICAgICAgICAgPERpYWxvZ0J1dHRvbiBhY3Rpb249J2Rpc21pc3MnPkRpc21pc3M8L0RpYWxvZ0J1dHRvbj5cbiAgICAgICAgICA8RGlhbG9nQnV0dG9uIGFjdGlvbj0nYWNjZXB0JyBpc0RlZmF1bHQ+QWNjZXB0PC9EaWFsb2dCdXR0b24+XG4gICAgICAgIDwvRGlhbG9nRm9vdGVyPlxuICAgICAgPC9EaWFsb2c+XG4gICAgICB7ZGlhbG9nU3R5bGVzLnN0eWxlc31cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmRpYWxvZy1jb3Zlci1waG90byB7XG4gICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9GcmFnbWVudD5cbiAgKVxufVxuXG5cbmNvbnN0IE1vdmllcyA9ICh7IHNob3dzIH0pID0+IHtcbiAgY29uc3QgW2V4cGFuZGVkLCBzZXRFeHBhbmRlZF0gPSB1c2VTdGF0ZSh7fSlcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudC1jb250YWluZXInPlxuICAgICAgPGgxPkhlYWRlcjwvaDE+XG4gICAgICA8cD5UaGlzIGNvbnRlbnQgaXMgaW4gPGk+cGFnZXMvbW92aWVzLmpzPC9pPjwvcD5cbiAgICAgIDxTZWxlY3RlZE1vdmllXG4gICAgICAgIGlzT3BlblxuICAgICAgICBzaG93PXtzaG93cyA/IHNob3dzWzBdIDogbnVsbH1cbiAgICAgIC8+XG4gICAgICA8Um93PlxuICAgICAgICB7c2hvd3MubWFwKChzaG93LCBpKSA9PiAoXG4gICAgICAgICAgPENlbGxcbiAgICAgICAgICAgIGtleT17c2hvdy5pZH1cbiAgICAgICAgICAgIGRlc2t0b3BDb2x1bW5zPXs0fVxuICAgICAgICAgICAgcGhvbmVDb2x1bW5zPXs0fVxuICAgICAgICAgICAgdGFibGV0Q29sdW1ucz17NH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NhcmRTdHlsZXMuY2xhc3NOYW1lfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Q2FyZFByaW1hcnlDb250ZW50XG4gICAgICAgICAgICAgICAgb25DbGljaz17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICBzZXRFeHBhbmRlZCh4ID0+ICh7XG4gICAgICAgICAgICAgICAgICAgIC4uLngsXG4gICAgICAgICAgICAgICAgICAgIFtzaG93LmlkXTogIWV4cGFuZGVkW3Nob3cuaWRdLFxuICAgICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxDYXJkTWVkaWFcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17ZXhwYW5kZWRbc2hvdy5pZF0gPyBsYXJnZVNocnVuay5jbGFzc05hbWUgOiBsYXJnZVVuc2hydW5rLmNsYXNzTmFtZX1cbiAgICAgICAgICAgICAgICAgIHNxdWFyZVxuICAgICAgICAgICAgICAgICAgaW1hZ2VVcmw9e2BodHRwczovL3BpY3N1bS5waG90b3MvaWQvJHs2MTAraX0vNDAwYH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgICAgICAgIHtzaG93Lm5hbWV9XG4gICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1tcbiAgICAgICAgICAgICAgICAgICAgZXhwYW5kZWRbc2hvdy5pZF0gPyBsYXJnZVVuc2hydW5rLmNsYXNzTmFtZSA6IGxhcmdlU2hydW5rLmNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgJ2V4cGFuZGVkLWNvbnRlbnQnLFxuICAgICAgICAgICAgICAgICAgXS5qb2luKCcgJyl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHA+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIEltcGVyZGlldCBwcm9pbiBmZXJtZW50dW0gbGVvIHZlbC4gUG9ydHRpdG9yIGVnZXQgZG9sb3IgbW9yYmkgbm9uLiBTZWQgYXJjdSBub24gb2RpbyBldWlzbW9kIGxhY2luaWEgYXQgcXVpcyByaXN1cy4gSWFjdWxpcyB1cm5hIGlkIHZvbHV0cGF0IGxhY3VzIGxhb3JlZXQgbm9uIGN1cmFiaXR1ciBncmF2aWRhIGFyY3UuIEVuaW0gbmVjIGR1aSBudW5jIG1hdHRpcyBlbmltLiBJZCBzZW1wZXIgcmlzdXMgaW4gaGVuZHJlcml0LiBJcHN1bSBudW5jIGFsaXF1ZXQgYmliZW5kdW0gZW5pbSBmYWNpbGlzaXMuIEluIGFsaXF1YW0gc2VtIGZyaW5naWxsYSB1dCBtb3JiaSB0aW5jaWR1bnQgYXVndWUuIFZ1bHB1dGF0ZSBlbmltIG51bGxhIGFsaXF1ZXQgcG9ydHRpdG9yIGxhY3VzIGx1Y3R1cyBhY2N1bXNhbiB0b3J0b3IuIE9yY2kgYWMgYXVjdG9yIGF1Z3VlIG1hdXJpcyBhdWd1ZSBuZXF1ZSBncmF2aWRhIGluLiBNYXR0aXMgdnVscHV0YXRlIGVuaW0gbnVsbGEgYWxpcXVldCBwb3J0dGl0b3IuIE1ldHVzIGRpY3R1bSBhdCB0ZW1wb3IgY29tbW9kbyB1bGxhbWNvcnBlciBhIGxhY3VzIHZlc3RpYnVsdW0gc2VkLiBJbXBlcmRpZXQgbWFzc2EgdGluY2lkdW50IG51bmMgcHVsdmluYXIgc2FwaWVuIGV0LiBSaG9uY3VzIG1hdHRpcyByaG9uY3VzIHVybmEgbmVxdWUuPC9wPlxuICAgICAgICAgICAgICAgICAgPHA+RG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0IGR1aXMuIExhY3VzIHN1c3BlbmRpc3NlIGZhdWNpYnVzIGludGVyZHVtIHBvc3VlcmUgbG9yZW0gaXBzdW0gZG9sb3Igc2l0LiBMZW8gdXJuYSBtb2xlc3RpZSBhdCBlbGVtZW50dW0gZXUuIFNlZCBhZGlwaXNjaW5nIGRpYW0gZG9uZWMgYWRpcGlzY2luZyB0cmlzdGlxdWUgcmlzdXMgbmVjIGZldWdpYXQuIEF0IGxlY3R1cyB1cm5hIGR1aXMgY29udmFsbGlzIGNvbnZhbGxpcyB0ZWxsdXMgaWQuIERhcGlidXMgdWx0cmljZXMgaW4gaWFjdWxpcyBudW5jIHNlZCBhdWd1ZSBsYWN1cyB2aXZlcnJhIHZpdGFlLiBOdWxsYSBwaGFyZXRyYSBkaWFtIHNpdCBhbWV0IG5pc2wgc3VzY2lwaXQgYWRpcGlzY2luZyBiaWJlbmR1bS4gUHJhZXNlbnQgdHJpc3RpcXVlIG1hZ25hIHNpdCBhbWV0IHB1cnVzIGdyYXZpZGEgcXVpcy4gTGVjdHVzIHByb2luIG5pYmggbmlzbCBjb25kaW1lbnR1bS4gTmliaCB2ZW5lbmF0aXMgY3JhcyBzZWQgZmVsaXMuIENvbnNlcXVhdCBzZW1wZXIgdml2ZXJyYSBuYW0gbGliZXJvIGp1c3RvLiBVbHRyaWNlcyBncmF2aWRhIGRpY3R1bSBmdXNjZSB1dC4gRW5pbSBwcmFlc2VudCBlbGVtZW50dW0gZmFjaWxpc2lzIGxlbyB2ZWwgZnJpbmdpbGxhLjwvcD5cbiAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmYWRlLW92ZXJsYXknXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L0NhcmRQcmltYXJ5Q29udGVudD5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17ZXhwYW5kZWRbc2hvdy5pZF0gPyBzbWFsbFVuc2hydW5rLmNsYXNzTmFtZSA6IHNtYWxsU2hydW5rLmNsYXNzTmFtZX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxDYXJkQWN0aW9ucz5cbiAgICAgICAgICAgICAgICAgIDxDYXJkQWN0aW9uQnV0dG9ucz5cbiAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPScvbW92aWVzL1tpZF0nXG4gICAgICAgICAgICAgICAgICAgICAgYXM9e2AvbW92aWVzLyR7c2hvdy5pZH1gfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYWlsaW5nSWNvbj17PE1hdGVyaWFsSWNvbiBpY29uPSdhcnJvd19mb3J3YXJkJyAvPn1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFkIE1vcmVcbiAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPC9DYXJkQWN0aW9uQnV0dG9ucz5cbiAgICAgICAgICAgICAgICA8L0NhcmRBY3Rpb25zPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICA8L0NlbGw+XG4gICAgICAgICkpfVxuICAgICAgPC9Sb3c+XG4gICAgICB7bGFyZ2VTaHJ1bmsuc3R5bGVzfVxuICAgICAge2xhcmdlVW5zaHJ1bmsuc3R5bGVzfVxuICAgICAge3NtYWxsU2hydW5rLnN0eWxlc31cbiAgICAgIHtzbWFsbFVuc2hydW5rLnN0eWxlc31cbiAgICAgIHtjYXJkU3R5bGVzLnN0eWxlc31cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgaDMge1xuICAgICAgICAgIHBhZGRpbmc6IDAgMWVtIDAgMWVtO1xuICAgICAgICB9XG4gICAgICAgIC5leHBhbmRlZC1jb250ZW50IHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgcGFkZGluZzogMCAxZW0gMCAxZW07XG4gICAgICAgIH1cbiAgICAgICAgLmZhZGUtb3ZlcmxheSB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMHB4O1xuICAgICAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgICByaWdodDogMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICNmZmYsIHRyYW5zcGFyZW50IDNlbSwgdHJhbnNwYXJlbnQgMTAwJSk7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5Nb3ZpZXMuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oKSB7XG4gIGNvbnNvbGUubG9nKCdnZXR0aW5nIGRhdGEnKVxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zZWFyY2gvc2hvd3M/cT1iYXRtYW4nKVxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuICBjb25zb2xlLmxvZyhgU2hvdyBkYXRhIGZldGNoZWQuIENvdW50OiAke2RhdGEubGVuZ3RofWApXG5cbiAgcmV0dXJuIHtcbiAgICBzaG93czogZGF0YS5tYXAoZW50cnkgPT4gZW50cnkuc2hvdylcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb3ZpZXNcbiJdfQ== */\n/*@ sourceURL=/Users/dan/Documents/Repositories/material-next-template/pages/movies/index.js */"));
};

var Movies = function Movies(_ref2) {
  var shows = _ref2.shows;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])({}),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState, 2),
      expanded = _useState2[0],
      setExpanded = _useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "jsx-1535914354" + " " + 'content-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
    className: "jsx-1535914354",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "Header"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
    className: "jsx-1535914354",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, "This content is in ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
    className: "jsx-1535914354",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, "pages/movies.js")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(SelectedMovie, {
    isOpen: true,
    show: shows ? shows[0] : null,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_react_layout_grid__WEBPACK_IMPORTED_MODULE_12__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
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
        lineNumber: 97
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_react_card__WEBPACK_IMPORTED_MODULE_10___default.a, {
      className: cardStyles.className,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
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
        lineNumber: 106
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_react_card__WEBPACK_IMPORTED_MODULE_10__["CardMedia"], {
      className: expanded[show.id] ? largeShrunk.className : largeUnshrunk.className,
      square: true,
      imageUrl: "https://picsum.photos/id/".concat(610 + i, "/400"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", {
      className: "jsx-1535914354",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      },
      __self: this
    }, show.name), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: "jsx-1535914354" + " " + ([expanded[show.id] ? largeUnshrunk.className : largeShrunk.className, 'expanded-content'].join(' ') || ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
      className: "jsx-1535914354",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      },
      __self: this
    }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Imperdiet proin fermentum leo vel. Porttitor eget dolor morbi non. Sed arcu non odio euismod lacinia at quis risus. Iaculis urna id volutpat lacus laoreet non curabitur gravida arcu. Enim nec dui nunc mattis enim. Id semper risus in hendrerit. Ipsum nunc aliquet bibendum enim facilisis. In aliquam sem fringilla ut morbi tincidunt augue. Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor. Orci ac auctor augue mauris augue neque gravida in. Mattis vulputate enim nulla aliquet porttitor. Metus dictum at tempor commodo ullamcorper a lacus vestibulum sed. Imperdiet massa tincidunt nunc pulvinar sapien et. Rhoncus mattis rhoncus urna neque."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
      className: "jsx-1535914354",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      },
      __self: this
    }, "Dolor sit amet consectetur adipiscing elit duis. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit. Leo urna molestie at elementum eu. Sed adipiscing diam donec adipiscing tristique risus nec feugiat. At lectus urna duis convallis convallis tellus id. Dapibus ultrices in iaculis nunc sed augue lacus viverra vitae. Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum. Praesent tristique magna sit amet purus gravida quis. Lectus proin nibh nisl condimentum. Nibh venenatis cras sed felis. Consequat semper viverra nam libero justo. Ultrices gravida dictum fusce ut. Enim praesent elementum facilisis leo vel fringilla."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: "jsx-1535914354" + " " + 'fade-overlay',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: "jsx-1535914354" + " " + ((expanded[show.id] ? smallUnshrunk.className : smallShrunk.className) || ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_react_card__WEBPACK_IMPORTED_MODULE_10__["CardActions"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_react_card__WEBPACK_IMPORTED_MODULE_10__["CardActionButtons"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
      href: "/movies/[id]",
      as: "/movies/".concat(show.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_react_button__WEBPACK_IMPORTED_MODULE_9___default.a, {
      outlined: true,
      trailingIcon: react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_react_material_icon__WEBPACK_IMPORTED_MODULE_11___default.a, {
        icon: "arrow_forward",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144
      },
      __self: this
    }, "Read More")))))));
  })), largeShrunk.styles, largeUnshrunk.styles, smallShrunk.styles, smallUnshrunk.styles, cardStyles.styles, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
    id: "1535914354",
    __self: this
  }, "h3.jsx-1535914354{padding:0 1em 0 1em;}.expanded-content.jsx-1535914354{position:relative;padding:0 1em 0 1em;}.fade-overlay.jsx-1535914354{position:absolute;top:0px;bottom:0px;left:0px;right:0px;background:linear-gradient(to top,#fff,transparent 3em,transparent 100%);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW4vRG9jdW1lbnRzL1JlcG9zaXRvcmllcy9tYXRlcmlhbC1uZXh0LXRlbXBsYXRlL3BhZ2VzL21vdmllcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrS2tCLEFBRytCLEFBR0YsQUFJQSxrQkFIRSxBQUlaLEVBUFYsTUFRYSxXQUNGLENBTFgsUUFNWSxVQUNrRSx5RUFDOUUiLCJmaWxlIjoiL1VzZXJzL2Rhbi9Eb2N1bWVudHMvUmVwb3NpdG9yaWVzL21hdGVyaWFsLW5leHQtdGVtcGxhdGUvcGFnZXMvbW92aWVzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRnJhZ21lbnQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJ1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsL3JlYWN0LWJ1dHRvbidcbmltcG9ydCBDYXJkLCB7XG4gIENhcmRQcmltYXJ5Q29udGVudCxcbiAgQ2FyZE1lZGlhLFxuICBDYXJkQWN0aW9ucyxcbiAgQ2FyZEFjdGlvbkJ1dHRvbnMsXG4gIENhcmRBY3Rpb25JY29uc1xufSBmcm9tICdAbWF0ZXJpYWwvcmVhY3QtY2FyZCdcbmltcG9ydCBNYXRlcmlhbEljb24gZnJvbSAnQG1hdGVyaWFsL3JlYWN0LW1hdGVyaWFsLWljb24nXG5pbXBvcnQgeyBDZWxsLCBHcmlkLCBSb3cgfSBmcm9tICdAbWF0ZXJpYWwvcmVhY3QtbGF5b3V0LWdyaWQnXG5pbXBvcnQgRGlhbG9nLCB7XG4gIERpYWxvZ1RpdGxlLFxuICBEaWFsb2dDb250ZW50LFxuICBEaWFsb2dGb290ZXIsXG4gIERpYWxvZ0J1dHRvbixcbn0gZnJvbSAnQG1hdGVyaWFsL3JlYWN0LWRpYWxvZydcblxuY29uc3QgZ2V0U2hyaW5raW5nRGl2ID0gKHNocnVuaywgaGVpZ2h0KSA9PiB7XG4gIHJldHVybiBjc3MucmVzb2x2ZWBcbiAgICBkaXYge1xuICAgICAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuMnMgZWFzZTtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICBoZWlnaHQ6ICR7c2hydW5rID8gMCA6IGhlaWdodH1weDtcbiAgICB9XG4gIGBcbn1cblxuY29uc3QgbGFyZ2VTaHJ1bmsgPSBnZXRTaHJpbmtpbmdEaXYodHJ1ZSwgMzAwKVxuY29uc3QgbGFyZ2VVbnNocnVuayA9IGdldFNocmlua2luZ0RpdihmYWxzZSwgMzAwKVxuXG5jb25zdCBzbWFsbFNocnVuayA9IGdldFNocmlua2luZ0Rpdih0cnVlLCA1MilcbmNvbnN0IHNtYWxsVW5zaHJ1bmsgPSBnZXRTaHJpbmtpbmdEaXYoZmFsc2UsIDUyKVxuXG5jb25zdCBjYXJkU3R5bGVzID0gY3NzLnJlc29sdmVgXG4gIGRpdiB7XG4gICAgY29sb3I6IHJnYmEoMCwwLDAsLjcpO1xuICB9XG5gXG5cblxuY29uc3QgZGlhbG9nU3R5bGVzID0gY3NzLnJlc29sdmVgXG4gIGRpdiA+IGRpdi5tZGMtZGlhbG9nX19jb250YWluZXIge1xuICAgIGhlaWdodDogNjAwcHg7XG4gIH1cbmBcblxuXG5cblxuY29uc3QgU2VsZWN0ZWRNb3ZpZSA9ICh7IGlzT3Blbiwgc2hvdyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAgPERpYWxvZ1xuICAgICAgICBjbGFzc05hbWU9e2RpYWxvZ1N0eWxlcy5jbGFzc05hbWV9XG4gICAgICAgIG9wZW49e2lzT3Blbn1cbiAgICAgID5cbiAgICAgICAgPERpYWxvZ1RpdGxlPntzaG93Lm5hbWV9PC9EaWFsb2dUaXRsZT5cbiAgICAgICAgPERpYWxvZ0NvbnRlbnQ+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3JjPXtgaHR0cHM6Ly9waWNzdW0ucGhvdG9zL2lkLyR7NjEwfS80MDBgfVxuICAgICAgICAgICAgY2xhc3NOYW1lPSdkaWFsb2ctY292ZXItcGhvdG8nXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2PkhFTExPIERJQUxPRyBDT05URU5UPC9kaXY+XG4gICAgICAgIDwvRGlhbG9nQ29udGVudD5cbiAgICAgICAgPERpYWxvZ0Zvb3Rlcj5cbiAgICAgICAgICA8RGlhbG9nQnV0dG9uIGFjdGlvbj0nZGlzbWlzcyc+RGlzbWlzczwvRGlhbG9nQnV0dG9uPlxuICAgICAgICAgIDxEaWFsb2dCdXR0b24gYWN0aW9uPSdhY2NlcHQnIGlzRGVmYXVsdD5BY2NlcHQ8L0RpYWxvZ0J1dHRvbj5cbiAgICAgICAgPC9EaWFsb2dGb290ZXI+XG4gICAgICA8L0RpYWxvZz5cbiAgICAgIHtkaWFsb2dTdHlsZXMuc3R5bGVzfVxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuZGlhbG9nLWNvdmVyLXBob3RvIHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L0ZyYWdtZW50PlxuICApXG59XG5cblxuY29uc3QgTW92aWVzID0gKHsgc2hvd3MgfSkgPT4ge1xuICBjb25zdCBbZXhwYW5kZWQsIHNldEV4cGFuZGVkXSA9IHVzZVN0YXRlKHt9KVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50LWNvbnRhaW5lcic+XG4gICAgICA8aDE+SGVhZGVyPC9oMT5cbiAgICAgIDxwPlRoaXMgY29udGVudCBpcyBpbiA8aT5wYWdlcy9tb3ZpZXMuanM8L2k+PC9wPlxuICAgICAgPFNlbGVjdGVkTW92aWVcbiAgICAgICAgaXNPcGVuXG4gICAgICAgIHNob3c9e3Nob3dzID8gc2hvd3NbMF0gOiBudWxsfVxuICAgICAgLz5cbiAgICAgIDxSb3c+XG4gICAgICAgIHtzaG93cy5tYXAoKHNob3csIGkpID0+IChcbiAgICAgICAgICA8Q2VsbFxuICAgICAgICAgICAga2V5PXtzaG93LmlkfVxuICAgICAgICAgICAgZGVza3RvcENvbHVtbnM9ezR9XG4gICAgICAgICAgICBwaG9uZUNvbHVtbnM9ezR9XG4gICAgICAgICAgICB0YWJsZXRDb2x1bW5zPXs0fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxDYXJkXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2FyZFN0eWxlcy5jbGFzc05hbWV9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxDYXJkUHJpbWFyeUNvbnRlbnRcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgIHNldEV4cGFuZGVkKHggPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgLi4ueCxcbiAgICAgICAgICAgICAgICAgICAgW3Nob3cuaWRdOiAhZXhwYW5kZWRbc2hvdy5pZF0sXG4gICAgICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPENhcmRNZWRpYVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtleHBhbmRlZFtzaG93LmlkXSA/IGxhcmdlU2hydW5rLmNsYXNzTmFtZSA6IGxhcmdlVW5zaHJ1bmsuY2xhc3NOYW1lfVxuICAgICAgICAgICAgICAgICAgc3F1YXJlXG4gICAgICAgICAgICAgICAgICBpbWFnZVVybD17YGh0dHBzOi8vcGljc3VtLnBob3Rvcy9pZC8kezYxMCtpfS80MDBgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGgzPlxuICAgICAgICAgICAgICAgICAge3Nob3cubmFtZX1cbiAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17W1xuICAgICAgICAgICAgICAgICAgICBleHBhbmRlZFtzaG93LmlkXSA/IGxhcmdlVW5zaHJ1bmsuY2xhc3NOYW1lIDogbGFyZ2VTaHJ1bmsuY2xhc3NOYW1lLFxuICAgICAgICAgICAgICAgICAgICAnZXhwYW5kZWQtY29udGVudCcsXG4gICAgICAgICAgICAgICAgICBdLmpvaW4oJyAnKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8cD5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gSW1wZXJkaWV0IHByb2luIGZlcm1lbnR1bSBsZW8gdmVsLiBQb3J0dGl0b3IgZWdldCBkb2xvciBtb3JiaSBub24uIFNlZCBhcmN1IG5vbiBvZGlvIGV1aXNtb2QgbGFjaW5pYSBhdCBxdWlzIHJpc3VzLiBJYWN1bGlzIHVybmEgaWQgdm9sdXRwYXQgbGFjdXMgbGFvcmVldCBub24gY3VyYWJpdHVyIGdyYXZpZGEgYXJjdS4gRW5pbSBuZWMgZHVpIG51bmMgbWF0dGlzIGVuaW0uIElkIHNlbXBlciByaXN1cyBpbiBoZW5kcmVyaXQuIElwc3VtIG51bmMgYWxpcXVldCBiaWJlbmR1bSBlbmltIGZhY2lsaXNpcy4gSW4gYWxpcXVhbSBzZW0gZnJpbmdpbGxhIHV0IG1vcmJpIHRpbmNpZHVudCBhdWd1ZS4gVnVscHV0YXRlIGVuaW0gbnVsbGEgYWxpcXVldCBwb3J0dGl0b3IgbGFjdXMgbHVjdHVzIGFjY3Vtc2FuIHRvcnRvci4gT3JjaSBhYyBhdWN0b3IgYXVndWUgbWF1cmlzIGF1Z3VlIG5lcXVlIGdyYXZpZGEgaW4uIE1hdHRpcyB2dWxwdXRhdGUgZW5pbSBudWxsYSBhbGlxdWV0IHBvcnR0aXRvci4gTWV0dXMgZGljdHVtIGF0IHRlbXBvciBjb21tb2RvIHVsbGFtY29ycGVyIGEgbGFjdXMgdmVzdGlidWx1bSBzZWQuIEltcGVyZGlldCBtYXNzYSB0aW5jaWR1bnQgbnVuYyBwdWx2aW5hciBzYXBpZW4gZXQuIFJob25jdXMgbWF0dGlzIHJob25jdXMgdXJuYSBuZXF1ZS48L3A+XG4gICAgICAgICAgICAgICAgICA8cD5Eb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQgZHVpcy4gTGFjdXMgc3VzcGVuZGlzc2UgZmF1Y2lidXMgaW50ZXJkdW0gcG9zdWVyZSBsb3JlbSBpcHN1bSBkb2xvciBzaXQuIExlbyB1cm5hIG1vbGVzdGllIGF0IGVsZW1lbnR1bSBldS4gU2VkIGFkaXBpc2NpbmcgZGlhbSBkb25lYyBhZGlwaXNjaW5nIHRyaXN0aXF1ZSByaXN1cyBuZWMgZmV1Z2lhdC4gQXQgbGVjdHVzIHVybmEgZHVpcyBjb252YWxsaXMgY29udmFsbGlzIHRlbGx1cyBpZC4gRGFwaWJ1cyB1bHRyaWNlcyBpbiBpYWN1bGlzIG51bmMgc2VkIGF1Z3VlIGxhY3VzIHZpdmVycmEgdml0YWUuIE51bGxhIHBoYXJldHJhIGRpYW0gc2l0IGFtZXQgbmlzbCBzdXNjaXBpdCBhZGlwaXNjaW5nIGJpYmVuZHVtLiBQcmFlc2VudCB0cmlzdGlxdWUgbWFnbmEgc2l0IGFtZXQgcHVydXMgZ3JhdmlkYSBxdWlzLiBMZWN0dXMgcHJvaW4gbmliaCBuaXNsIGNvbmRpbWVudHVtLiBOaWJoIHZlbmVuYXRpcyBjcmFzIHNlZCBmZWxpcy4gQ29uc2VxdWF0IHNlbXBlciB2aXZlcnJhIG5hbSBsaWJlcm8ganVzdG8uIFVsdHJpY2VzIGdyYXZpZGEgZGljdHVtIGZ1c2NlIHV0LiBFbmltIHByYWVzZW50IGVsZW1lbnR1bSBmYWNpbGlzaXMgbGVvIHZlbCBmcmluZ2lsbGEuPC9wPlxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2ZhZGUtb3ZlcmxheSdcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvQ2FyZFByaW1hcnlDb250ZW50PlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtleHBhbmRlZFtzaG93LmlkXSA/IHNtYWxsVW5zaHJ1bmsuY2xhc3NOYW1lIDogc21hbGxTaHJ1bmsuY2xhc3NOYW1lfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPENhcmRBY3Rpb25zPlxuICAgICAgICAgICAgICAgICAgPENhcmRBY3Rpb25CdXR0b25zPlxuICAgICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9Jy9tb3ZpZXMvW2lkXSdcbiAgICAgICAgICAgICAgICAgICAgICBhcz17YC9tb3ZpZXMvJHtzaG93LmlkfWB9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhaWxpbmdJY29uPXs8TWF0ZXJpYWxJY29uIGljb249J2Fycm93X2ZvcndhcmQnIC8+fVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWQgTW9yZVxuICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8L0NhcmRBY3Rpb25CdXR0b25zPlxuICAgICAgICAgICAgICAgIDwvQ2FyZEFjdGlvbnM+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgIDwvQ2VsbD5cbiAgICAgICAgKSl9XG4gICAgICA8L1Jvdz5cbiAgICAgIHtsYXJnZVNocnVuay5zdHlsZXN9XG4gICAgICB7bGFyZ2VVbnNocnVuay5zdHlsZXN9XG4gICAgICB7c21hbGxTaHJ1bmsuc3R5bGVzfVxuICAgICAge3NtYWxsVW5zaHJ1bmsuc3R5bGVzfVxuICAgICAge2NhcmRTdHlsZXMuc3R5bGVzfVxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBoMyB7XG4gICAgICAgICAgcGFkZGluZzogMCAxZW0gMCAxZW07XG4gICAgICAgIH1cbiAgICAgICAgLmV4cGFuZGVkLWNvbnRlbnQge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBwYWRkaW5nOiAwIDFlbSAwIDFlbTtcbiAgICAgICAgfVxuICAgICAgICAuZmFkZS1vdmVybGF5IHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgICAgYm90dG9tOiAwcHg7XG4gICAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgI2ZmZiwgdHJhbnNwYXJlbnQgM2VtLCB0cmFuc3BhcmVudCAxMDAlKTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbk1vdmllcy5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbigpIHtcbiAgY29uc29sZS5sb2coJ2dldHRpbmcgZGF0YScpXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS50dm1hemUuY29tL3NlYXJjaC9zaG93cz9xPWJhdG1hbicpXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXG4gIGNvbnNvbGUubG9nKGBTaG93IGRhdGEgZmV0Y2hlZC4gQ291bnQ6ICR7ZGF0YS5sZW5ndGh9YClcblxuICByZXR1cm4ge1xuICAgIHNob3dzOiBkYXRhLm1hcChlbnRyeSA9PiBlbnRyeS5zaG93KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vdmllc1xuIl19 */\n/*@ sourceURL=/Users/dan/Documents/Repositories/material-next-template/pages/movies/index.js */"));
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
//# sourceMappingURL=movies.js.7b6cb36c090841a5633b.hot-update.js.map