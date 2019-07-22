webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
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
/* harmony import */ var _components_Batman__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Batman */ "./components/Batman/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9__);


var _jsxFileName = "/Users/dan/Documents/Repositories/material-next-template/pages/index.js";









var Home = function Home(_ref) {
  var shows = _ref.shows;
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-950155605" + " " + 'content-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h1", {
    className: "jsx-950155605",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Header"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
    className: "jsx-950155605",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "This content is in ", react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("i", {
    className: "jsx-950155605",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "pages/index.js")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("ul", {
    className: "jsx-950155605",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, shows.map(function (show) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", {
      key: show.id,
      className: "jsx-950155605",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
      href: "/p/[id]",
      as: "/p/".concat(show.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
      className: "jsx-950155605",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, show.name)));
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-950155605" + " " + 'card-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_react_card__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_react_card__WEBPACK_IMPORTED_MODULE_5__["CardPrimaryContent"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_react_card__WEBPACK_IMPORTED_MODULE_5__["CardMedia"], {
    square: true,
    imageUrl: "https://picsum.photos/500/500?grayscale",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-950155605" + " " + 'main-content',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h3", {
    className: "jsx-950155605",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Andromeda"))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_react_card__WEBPACK_IMPORTED_MODULE_5__["CardActions"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_react_card__WEBPACK_IMPORTED_MODULE_5__["CardActionButtons"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_react_button__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "Read")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_react_card__WEBPACK_IMPORTED_MODULE_5__["CardActionIcons"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_react_material_icon__WEBPACK_IMPORTED_MODULE_6___default.a, {
    hasRipple: true,
    icon: "share",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }))))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
    className: "jsx-950155605",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "See the source code at ", react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
    href: "https://github.com/dan-kwiat/material-next-template",
    className: "jsx-950155605",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "github.com/dan-kwiat/material-next-template")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
    className: "jsx-950155605",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Imperdiet proin fermentum leo vel. Porttitor eget dolor morbi non. Sed arcu non odio euismod lacinia at quis risus. Iaculis urna id volutpat lacus laoreet non curabitur gravida arcu. Enim nec dui nunc mattis enim. Id semper risus in hendrerit. Ipsum nunc aliquet bibendum enim facilisis. In aliquam sem fringilla ut morbi tincidunt augue. Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor. Orci ac auctor augue mauris augue neque gravida in. Mattis vulputate enim nulla aliquet porttitor. Metus dictum at tempor commodo ullamcorper a lacus vestibulum sed. Imperdiet massa tincidunt nunc pulvinar sapien et. Rhoncus mattis rhoncus urna neque."), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
    className: "jsx-950155605",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "Dolor sit amet consectetur adipiscing elit duis. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit. Leo urna molestie at elementum eu. Sed adipiscing diam donec adipiscing tristique risus nec feugiat. At lectus urna duis convallis convallis tellus id. Dapibus ultrices in iaculis nunc sed augue lacus viverra vitae. Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum. Praesent tristique magna sit amet purus gravida quis. Lectus proin nibh nisl condimentum. Nibh venenatis cras sed felis. Consequat semper viverra nam libero justo. Ultrices gravida dictum fusce ut. Enim praesent elementum facilisis leo vel fringilla."), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
    className: "jsx-950155605",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "Suspendisse in est ante in nibh mauris cursus. Imperdiet massa tincidunt nunc pulvinar sapien et. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Habitasse platea dictumst vestibulum rhoncus. Purus in massa tempor nec feugiat nisl pretium fusce. Ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat. Massa id neque aliquam vestibulum. Vitae ultricies leo integer malesuada nunc vel risus commodo. Urna molestie at elementum eu facilisis sed odio morbi quis. Bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim. Tristique senectus et netus et. Lacus luctus accumsan tortor posuere ac ut consequat semper. Bibendum enim facilisis gravida neque convallis a. Pharetra massa massa ultricies mi quis hendrerit dolor magna eget. Consequat interdum varius sit amet mattis vulputate."), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
    className: "jsx-950155605",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "Dis parturient montes nascetur ridiculus. Non blandit massa enim nec dui. Sagittis eu volutpat odio facilisis mauris. Quam quisque id diam vel quam elementum pulvinar. Enim ut sem viverra aliquet eget sit. Vel orci porta non pulvinar neque laoreet suspendisse interdum consectetur. Vitae et leo duis ut diam. Vulputate ut pharetra sit amet aliquam id diam maecenas ultricies. Nam aliquam sem et tortor consequat id porta nibh. Massa sapien faucibus et molestie ac feugiat sed lectus. Neque aliquam vestibulum morbi blandit cursus risus at. Ut sem viverra aliquet eget sit amet. Et egestas quis ipsum suspendisse ultrices gravida dictum. Risus feugiat in ante metus dictum at tempor commodo ullamcorper. Etiam tempor orci eu lobortis elementum nibh tellus molestie."), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
    className: "jsx-950155605",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "Nullam vehicula ipsum a arcu cursus vitae congue mauris. Risus at ultrices mi tempus imperdiet nulla malesuada. Lobortis scelerisque fermentum dui faucibus in ornare quam. Nascetur ridiculus mus mauris vitae ultricies. Eget nunc lobortis mattis aliquam faucibus purus in massa tempor. Cras ornare arcu dui vivamus arcu felis bibendum. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum. Ipsum faucibus vitae aliquet nec ullamcorper sit amet risus nullam. Nec ultrices dui sapien eget mi proin sed libero enim. Mauris sit amet massa vitae tortor condimentum. Viverra adipiscing at in tellus integer feugiat. Sit amet dictum sit amet justo donec. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum."), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
    className: "jsx-950155605",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Imperdiet proin fermentum leo vel. Porttitor eget dolor morbi non. Sed arcu non odio euismod lacinia at quis risus. Iaculis urna id volutpat lacus laoreet non curabitur gravida arcu. Enim nec dui nunc mattis enim. Id semper risus in hendrerit. Ipsum nunc aliquet bibendum enim facilisis. In aliquam sem fringilla ut morbi tincidunt augue. Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor. Orci ac auctor augue mauris augue neque gravida in. Mattis vulputate enim nulla aliquet porttitor. Metus dictum at tempor commodo ullamcorper a lacus vestibulum sed. Imperdiet massa tincidunt nunc pulvinar sapien et. Rhoncus mattis rhoncus urna neque."), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
    className: "jsx-950155605",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "Dolor sit amet consectetur adipiscing elit duis. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit. Leo urna molestie at elementum eu. Sed adipiscing diam donec adipiscing tristique risus nec feugiat. At lectus urna duis convallis convallis tellus id. Dapibus ultrices in iaculis nunc sed augue lacus viverra vitae. Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum. Praesent tristique magna sit amet purus gravida quis. Lectus proin nibh nisl condimentum. Nibh venenatis cras sed felis. Consequat semper viverra nam libero justo. Ultrices gravida dictum fusce ut. Enim praesent elementum facilisis leo vel fringilla."), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
    className: "jsx-950155605",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "Suspendisse in est ante in nibh mauris cursus. Imperdiet massa tincidunt nunc pulvinar sapien et. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Habitasse platea dictumst vestibulum rhoncus. Purus in massa tempor nec feugiat nisl pretium fusce. Ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat. Massa id neque aliquam vestibulum. Vitae ultricies leo integer malesuada nunc vel risus commodo. Urna molestie at elementum eu facilisis sed odio morbi quis. Bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim. Tristique senectus et netus et. Lacus luctus accumsan tortor posuere ac ut consequat semper. Bibendum enim facilisis gravida neque convallis a. Pharetra massa massa ultricies mi quis hendrerit dolor magna eget. Consequat interdum varius sit amet mattis vulputate."), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
    className: "jsx-950155605",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "Dis parturient montes nascetur ridiculus. Non blandit massa enim nec dui. Sagittis eu volutpat odio facilisis mauris. Quam quisque id diam vel quam elementum pulvinar. Enim ut sem viverra aliquet eget sit. Vel orci porta non pulvinar neque laoreet suspendisse interdum consectetur. Vitae et leo duis ut diam. Vulputate ut pharetra sit amet aliquam id diam maecenas ultricies. Nam aliquam sem et tortor consequat id porta nibh. Massa sapien faucibus et molestie ac feugiat sed lectus. Neque aliquam vestibulum morbi blandit cursus risus at. Ut sem viverra aliquet eget sit amet. Et egestas quis ipsum suspendisse ultrices gravida dictum. Risus feugiat in ante metus dictum at tempor commodo ullamcorper. Etiam tempor orci eu lobortis elementum nibh tellus molestie."), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
    className: "jsx-950155605",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "Nullam vehicula ipsum a arcu cursus vitae congue mauris. Risus at ultrices mi tempus imperdiet nulla malesuada. Lobortis scelerisque fermentum dui faucibus in ornare quam. Nascetur ridiculus mus mauris vitae ultricies. Eget nunc lobortis mattis aliquam faucibus purus in massa tempor. Cras ornare arcu dui vivamus arcu felis bibendum. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum. Ipsum faucibus vitae aliquet nec ullamcorper sit amet risus nullam. Nec ultrices dui sapien eget mi proin sed libero enim. Mauris sit amet massa vitae tortor condimentum. Viverra adipiscing at in tellus integer feugiat. Sit amet dictum sit amet justo donec. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum."), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "950155605",
    __self: this
  }, "h1.jsx-950155605{font-weight:500;}.content-container.jsx-950155605{padding:1em;max-width:720px;box-sizing:border-box;margin:0 auto;}.card-container.jsx-950155605{width:300px;color:rgba(0,0,0,.6);}.main-content.jsx-950155605{padding:0 1em 0 1em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW4vRG9jdW1lbnRzL1JlcG9zaXRvcmllcy9tYXRlcmlhbC1uZXh0LXRlbXBsYXRlL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtFa0IsQUFHMkIsQUFHSixBQU1BLEFBSVEsWUFUSixBQU1LLElBVHZCLElBYUEsUUFUd0IsS0FNeEIsaUJBTGdCLGNBQ2hCIiwiZmlsZSI6Ii9Vc2Vycy9kYW4vRG9jdW1lbnRzL1JlcG9zaXRvcmllcy9tYXRlcmlhbC1uZXh0LXRlbXBsYXRlL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwvcmVhY3QtYnV0dG9uJ1xuaW1wb3J0IENhcmQsIHtcbiAgQ2FyZFByaW1hcnlDb250ZW50LFxuICBDYXJkTWVkaWEsXG4gIENhcmRBY3Rpb25zLFxuICBDYXJkQWN0aW9uQnV0dG9ucyxcbiAgQ2FyZEFjdGlvbkljb25zXG59IGZyb20gJ0BtYXRlcmlhbC9yZWFjdC1jYXJkJ1xuaW1wb3J0IE1hdGVyaWFsSWNvbiBmcm9tICdAbWF0ZXJpYWwvcmVhY3QtbWF0ZXJpYWwtaWNvbidcbmltcG9ydCBCYXRtYW4gZnJvbSAnLi4vY29tcG9uZW50cy9CYXRtYW4nXG5cbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXG5cblxuY29uc3QgSG9tZSA9ICh7IHNob3dzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudC1jb250YWluZXInPlxuICAgICAgPGgxPkhlYWRlcjwvaDE+XG4gICAgICA8cD5UaGlzIGNvbnRlbnQgaXMgaW4gPGk+cGFnZXMvaW5kZXguanM8L2k+PC9wPlxuICAgICAgPHVsPlxuICAgICAgICB7c2hvd3MubWFwKHNob3cgPT4gKFxuICAgICAgICAgIDxsaSBrZXk9e3Nob3cuaWR9PlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wL1tpZF1cIiBhcz17YC9wLyR7c2hvdy5pZH1gfT5cbiAgICAgICAgICAgICAgPGE+e3Nob3cubmFtZX08L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQtY29udGFpbmVyJz5cbiAgICAgICAgPENhcmQ+XG4gICAgICAgICAgPENhcmRQcmltYXJ5Q29udGVudD5cbiAgICAgICAgICAgIDxDYXJkTWVkaWFcbiAgICAgICAgICAgICAgc3F1YXJlXG4gICAgICAgICAgICAgIGltYWdlVXJsPSdodHRwczovL3BpY3N1bS5waG90b3MvNTAwLzUwMD9ncmF5c2NhbGUnXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21haW4tY29udGVudCc+XG4gICAgICAgICAgICAgIDxoMz5BbmRyb21lZGE8L2gzPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9DYXJkUHJpbWFyeUNvbnRlbnQ+XG4gICAgICAgICAgPENhcmRBY3Rpb25zPlxuICAgICAgICAgICAgPENhcmRBY3Rpb25CdXR0b25zPlxuICAgICAgICAgICAgICA8QnV0dG9uPlxuICAgICAgICAgICAgICAgIFJlYWRcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L0NhcmRBY3Rpb25CdXR0b25zPlxuICAgICAgICAgICAgPENhcmRBY3Rpb25JY29ucz5cbiAgICAgICAgICAgICAgPE1hdGVyaWFsSWNvblxuICAgICAgICAgICAgICAgIGhhc1JpcHBsZVxuICAgICAgICAgICAgICAgIGljb249J3NoYXJlJ1xuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9DYXJkQWN0aW9uSWNvbnM+XG4gICAgICAgICAgPC9DYXJkQWN0aW9ucz5cbiAgICAgICAgPC9DYXJkPlxuICAgICAgPC9kaXY+XG4gICAgICA8cD5TZWUgdGhlIHNvdXJjZSBjb2RlIGF0IDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZGFuLWt3aWF0L21hdGVyaWFsLW5leHQtdGVtcGxhdGVcIj5naXRodWIuY29tL2Rhbi1rd2lhdC9tYXRlcmlhbC1uZXh0LXRlbXBsYXRlPC9hPjwvcD5cbiAgICAgIDxwPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBJbXBlcmRpZXQgcHJvaW4gZmVybWVudHVtIGxlbyB2ZWwuIFBvcnR0aXRvciBlZ2V0IGRvbG9yIG1vcmJpIG5vbi4gU2VkIGFyY3Ugbm9uIG9kaW8gZXVpc21vZCBsYWNpbmlhIGF0IHF1aXMgcmlzdXMuIElhY3VsaXMgdXJuYSBpZCB2b2x1dHBhdCBsYWN1cyBsYW9yZWV0IG5vbiBjdXJhYml0dXIgZ3JhdmlkYSBhcmN1LiBFbmltIG5lYyBkdWkgbnVuYyBtYXR0aXMgZW5pbS4gSWQgc2VtcGVyIHJpc3VzIGluIGhlbmRyZXJpdC4gSXBzdW0gbnVuYyBhbGlxdWV0IGJpYmVuZHVtIGVuaW0gZmFjaWxpc2lzLiBJbiBhbGlxdWFtIHNlbSBmcmluZ2lsbGEgdXQgbW9yYmkgdGluY2lkdW50IGF1Z3VlLiBWdWxwdXRhdGUgZW5pbSBudWxsYSBhbGlxdWV0IHBvcnR0aXRvciBsYWN1cyBsdWN0dXMgYWNjdW1zYW4gdG9ydG9yLiBPcmNpIGFjIGF1Y3RvciBhdWd1ZSBtYXVyaXMgYXVndWUgbmVxdWUgZ3JhdmlkYSBpbi4gTWF0dGlzIHZ1bHB1dGF0ZSBlbmltIG51bGxhIGFsaXF1ZXQgcG9ydHRpdG9yLiBNZXR1cyBkaWN0dW0gYXQgdGVtcG9yIGNvbW1vZG8gdWxsYW1jb3JwZXIgYSBsYWN1cyB2ZXN0aWJ1bHVtIHNlZC4gSW1wZXJkaWV0IG1hc3NhIHRpbmNpZHVudCBudW5jIHB1bHZpbmFyIHNhcGllbiBldC4gUmhvbmN1cyBtYXR0aXMgcmhvbmN1cyB1cm5hIG5lcXVlLjwvcD5cbiAgICAgIDxwPkRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCBkdWlzLiBMYWN1cyBzdXNwZW5kaXNzZSBmYXVjaWJ1cyBpbnRlcmR1bSBwb3N1ZXJlIGxvcmVtIGlwc3VtIGRvbG9yIHNpdC4gTGVvIHVybmEgbW9sZXN0aWUgYXQgZWxlbWVudHVtIGV1LiBTZWQgYWRpcGlzY2luZyBkaWFtIGRvbmVjIGFkaXBpc2NpbmcgdHJpc3RpcXVlIHJpc3VzIG5lYyBmZXVnaWF0LiBBdCBsZWN0dXMgdXJuYSBkdWlzIGNvbnZhbGxpcyBjb252YWxsaXMgdGVsbHVzIGlkLiBEYXBpYnVzIHVsdHJpY2VzIGluIGlhY3VsaXMgbnVuYyBzZWQgYXVndWUgbGFjdXMgdml2ZXJyYSB2aXRhZS4gTnVsbGEgcGhhcmV0cmEgZGlhbSBzaXQgYW1ldCBuaXNsIHN1c2NpcGl0IGFkaXBpc2NpbmcgYmliZW5kdW0uIFByYWVzZW50IHRyaXN0aXF1ZSBtYWduYSBzaXQgYW1ldCBwdXJ1cyBncmF2aWRhIHF1aXMuIExlY3R1cyBwcm9pbiBuaWJoIG5pc2wgY29uZGltZW50dW0uIE5pYmggdmVuZW5hdGlzIGNyYXMgc2VkIGZlbGlzLiBDb25zZXF1YXQgc2VtcGVyIHZpdmVycmEgbmFtIGxpYmVybyBqdXN0by4gVWx0cmljZXMgZ3JhdmlkYSBkaWN0dW0gZnVzY2UgdXQuIEVuaW0gcHJhZXNlbnQgZWxlbWVudHVtIGZhY2lsaXNpcyBsZW8gdmVsIGZyaW5naWxsYS48L3A+XG4gICAgICA8cD5TdXNwZW5kaXNzZSBpbiBlc3QgYW50ZSBpbiBuaWJoIG1hdXJpcyBjdXJzdXMuIEltcGVyZGlldCBtYXNzYSB0aW5jaWR1bnQgbnVuYyBwdWx2aW5hciBzYXBpZW4gZXQuIFByZXRpdW0gdnVscHV0YXRlIHNhcGllbiBuZWMgc2FnaXR0aXMgYWxpcXVhbSBtYWxlc3VhZGEgYmliZW5kdW0gYXJjdS4gSGFiaXRhc3NlIHBsYXRlYSBkaWN0dW1zdCB2ZXN0aWJ1bHVtIHJob25jdXMuIFB1cnVzIGluIG1hc3NhIHRlbXBvciBuZWMgZmV1Z2lhdCBuaXNsIHByZXRpdW0gZnVzY2UuIFV0IGVuaW0gYmxhbmRpdCB2b2x1dHBhdCBtYWVjZW5hcyB2b2x1dHBhdCBibGFuZGl0IGFsaXF1YW0gZXRpYW0gZXJhdC4gTWFzc2EgaWQgbmVxdWUgYWxpcXVhbSB2ZXN0aWJ1bHVtLiBWaXRhZSB1bHRyaWNpZXMgbGVvIGludGVnZXIgbWFsZXN1YWRhIG51bmMgdmVsIHJpc3VzIGNvbW1vZG8uIFVybmEgbW9sZXN0aWUgYXQgZWxlbWVudHVtIGV1IGZhY2lsaXNpcyBzZWQgb2RpbyBtb3JiaSBxdWlzLiBCaWJlbmR1bSBhcmN1IHZpdGFlIGVsZW1lbnR1bSBjdXJhYml0dXIgdml0YWUgbnVuYyBzZWQgdmVsaXQgZGlnbmlzc2ltLiBUcmlzdGlxdWUgc2VuZWN0dXMgZXQgbmV0dXMgZXQuIExhY3VzIGx1Y3R1cyBhY2N1bXNhbiB0b3J0b3IgcG9zdWVyZSBhYyB1dCBjb25zZXF1YXQgc2VtcGVyLiBCaWJlbmR1bSBlbmltIGZhY2lsaXNpcyBncmF2aWRhIG5lcXVlIGNvbnZhbGxpcyBhLiBQaGFyZXRyYSBtYXNzYSBtYXNzYSB1bHRyaWNpZXMgbWkgcXVpcyBoZW5kcmVyaXQgZG9sb3IgbWFnbmEgZWdldC4gQ29uc2VxdWF0IGludGVyZHVtIHZhcml1cyBzaXQgYW1ldCBtYXR0aXMgdnVscHV0YXRlLjwvcD5cbiAgICAgIDxwPkRpcyBwYXJ0dXJpZW50IG1vbnRlcyBuYXNjZXR1ciByaWRpY3VsdXMuIE5vbiBibGFuZGl0IG1hc3NhIGVuaW0gbmVjIGR1aS4gU2FnaXR0aXMgZXUgdm9sdXRwYXQgb2RpbyBmYWNpbGlzaXMgbWF1cmlzLiBRdWFtIHF1aXNxdWUgaWQgZGlhbSB2ZWwgcXVhbSBlbGVtZW50dW0gcHVsdmluYXIuIEVuaW0gdXQgc2VtIHZpdmVycmEgYWxpcXVldCBlZ2V0IHNpdC4gVmVsIG9yY2kgcG9ydGEgbm9uIHB1bHZpbmFyIG5lcXVlIGxhb3JlZXQgc3VzcGVuZGlzc2UgaW50ZXJkdW0gY29uc2VjdGV0dXIuIFZpdGFlIGV0IGxlbyBkdWlzIHV0IGRpYW0uIFZ1bHB1dGF0ZSB1dCBwaGFyZXRyYSBzaXQgYW1ldCBhbGlxdWFtIGlkIGRpYW0gbWFlY2VuYXMgdWx0cmljaWVzLiBOYW0gYWxpcXVhbSBzZW0gZXQgdG9ydG9yIGNvbnNlcXVhdCBpZCBwb3J0YSBuaWJoLiBNYXNzYSBzYXBpZW4gZmF1Y2lidXMgZXQgbW9sZXN0aWUgYWMgZmV1Z2lhdCBzZWQgbGVjdHVzLiBOZXF1ZSBhbGlxdWFtIHZlc3RpYnVsdW0gbW9yYmkgYmxhbmRpdCBjdXJzdXMgcmlzdXMgYXQuIFV0IHNlbSB2aXZlcnJhIGFsaXF1ZXQgZWdldCBzaXQgYW1ldC4gRXQgZWdlc3RhcyBxdWlzIGlwc3VtIHN1c3BlbmRpc3NlIHVsdHJpY2VzIGdyYXZpZGEgZGljdHVtLiBSaXN1cyBmZXVnaWF0IGluIGFudGUgbWV0dXMgZGljdHVtIGF0IHRlbXBvciBjb21tb2RvIHVsbGFtY29ycGVyLiBFdGlhbSB0ZW1wb3Igb3JjaSBldSBsb2JvcnRpcyBlbGVtZW50dW0gbmliaCB0ZWxsdXMgbW9sZXN0aWUuPC9wPlxuICAgICAgPHA+TnVsbGFtIHZlaGljdWxhIGlwc3VtIGEgYXJjdSBjdXJzdXMgdml0YWUgY29uZ3VlIG1hdXJpcy4gUmlzdXMgYXQgdWx0cmljZXMgbWkgdGVtcHVzIGltcGVyZGlldCBudWxsYSBtYWxlc3VhZGEuIExvYm9ydGlzIHNjZWxlcmlzcXVlIGZlcm1lbnR1bSBkdWkgZmF1Y2lidXMgaW4gb3JuYXJlIHF1YW0uIE5hc2NldHVyIHJpZGljdWx1cyBtdXMgbWF1cmlzIHZpdGFlIHVsdHJpY2llcy4gRWdldCBudW5jIGxvYm9ydGlzIG1hdHRpcyBhbGlxdWFtIGZhdWNpYnVzIHB1cnVzIGluIG1hc3NhIHRlbXBvci4gQ3JhcyBvcm5hcmUgYXJjdSBkdWkgdml2YW11cyBhcmN1IGZlbGlzIGJpYmVuZHVtLiBUZWxsdXMgcGVsbGVudGVzcXVlIGV1IHRpbmNpZHVudCB0b3J0b3IgYWxpcXVhbSBudWxsYSBmYWNpbGlzaSBjcmFzIGZlcm1lbnR1bS4gSXBzdW0gZmF1Y2lidXMgdml0YWUgYWxpcXVldCBuZWMgdWxsYW1jb3JwZXIgc2l0IGFtZXQgcmlzdXMgbnVsbGFtLiBOZWMgdWx0cmljZXMgZHVpIHNhcGllbiBlZ2V0IG1pIHByb2luIHNlZCBsaWJlcm8gZW5pbS4gTWF1cmlzIHNpdCBhbWV0IG1hc3NhIHZpdGFlIHRvcnRvciBjb25kaW1lbnR1bS4gVml2ZXJyYSBhZGlwaXNjaW5nIGF0IGluIHRlbGx1cyBpbnRlZ2VyIGZldWdpYXQuIFNpdCBhbWV0IGRpY3R1bSBzaXQgYW1ldCBqdXN0byBkb25lYy4gUHJldGl1bSB2dWxwdXRhdGUgc2FwaWVuIG5lYyBzYWdpdHRpcyBhbGlxdWFtIG1hbGVzdWFkYSBiaWJlbmR1bS48L3A+XG4gICAgICA8cD5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gSW1wZXJkaWV0IHByb2luIGZlcm1lbnR1bSBsZW8gdmVsLiBQb3J0dGl0b3IgZWdldCBkb2xvciBtb3JiaSBub24uIFNlZCBhcmN1IG5vbiBvZGlvIGV1aXNtb2QgbGFjaW5pYSBhdCBxdWlzIHJpc3VzLiBJYWN1bGlzIHVybmEgaWQgdm9sdXRwYXQgbGFjdXMgbGFvcmVldCBub24gY3VyYWJpdHVyIGdyYXZpZGEgYXJjdS4gRW5pbSBuZWMgZHVpIG51bmMgbWF0dGlzIGVuaW0uIElkIHNlbXBlciByaXN1cyBpbiBoZW5kcmVyaXQuIElwc3VtIG51bmMgYWxpcXVldCBiaWJlbmR1bSBlbmltIGZhY2lsaXNpcy4gSW4gYWxpcXVhbSBzZW0gZnJpbmdpbGxhIHV0IG1vcmJpIHRpbmNpZHVudCBhdWd1ZS4gVnVscHV0YXRlIGVuaW0gbnVsbGEgYWxpcXVldCBwb3J0dGl0b3IgbGFjdXMgbHVjdHVzIGFjY3Vtc2FuIHRvcnRvci4gT3JjaSBhYyBhdWN0b3IgYXVndWUgbWF1cmlzIGF1Z3VlIG5lcXVlIGdyYXZpZGEgaW4uIE1hdHRpcyB2dWxwdXRhdGUgZW5pbSBudWxsYSBhbGlxdWV0IHBvcnR0aXRvci4gTWV0dXMgZGljdHVtIGF0IHRlbXBvciBjb21tb2RvIHVsbGFtY29ycGVyIGEgbGFjdXMgdmVzdGlidWx1bSBzZWQuIEltcGVyZGlldCBtYXNzYSB0aW5jaWR1bnQgbnVuYyBwdWx2aW5hciBzYXBpZW4gZXQuIFJob25jdXMgbWF0dGlzIHJob25jdXMgdXJuYSBuZXF1ZS48L3A+XG4gICAgICA8cD5Eb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQgZHVpcy4gTGFjdXMgc3VzcGVuZGlzc2UgZmF1Y2lidXMgaW50ZXJkdW0gcG9zdWVyZSBsb3JlbSBpcHN1bSBkb2xvciBzaXQuIExlbyB1cm5hIG1vbGVzdGllIGF0IGVsZW1lbnR1bSBldS4gU2VkIGFkaXBpc2NpbmcgZGlhbSBkb25lYyBhZGlwaXNjaW5nIHRyaXN0aXF1ZSByaXN1cyBuZWMgZmV1Z2lhdC4gQXQgbGVjdHVzIHVybmEgZHVpcyBjb252YWxsaXMgY29udmFsbGlzIHRlbGx1cyBpZC4gRGFwaWJ1cyB1bHRyaWNlcyBpbiBpYWN1bGlzIG51bmMgc2VkIGF1Z3VlIGxhY3VzIHZpdmVycmEgdml0YWUuIE51bGxhIHBoYXJldHJhIGRpYW0gc2l0IGFtZXQgbmlzbCBzdXNjaXBpdCBhZGlwaXNjaW5nIGJpYmVuZHVtLiBQcmFlc2VudCB0cmlzdGlxdWUgbWFnbmEgc2l0IGFtZXQgcHVydXMgZ3JhdmlkYSBxdWlzLiBMZWN0dXMgcHJvaW4gbmliaCBuaXNsIGNvbmRpbWVudHVtLiBOaWJoIHZlbmVuYXRpcyBjcmFzIHNlZCBmZWxpcy4gQ29uc2VxdWF0IHNlbXBlciB2aXZlcnJhIG5hbSBsaWJlcm8ganVzdG8uIFVsdHJpY2VzIGdyYXZpZGEgZGljdHVtIGZ1c2NlIHV0LiBFbmltIHByYWVzZW50IGVsZW1lbnR1bSBmYWNpbGlzaXMgbGVvIHZlbCBmcmluZ2lsbGEuPC9wPlxuICAgICAgPHA+U3VzcGVuZGlzc2UgaW4gZXN0IGFudGUgaW4gbmliaCBtYXVyaXMgY3Vyc3VzLiBJbXBlcmRpZXQgbWFzc2EgdGluY2lkdW50IG51bmMgcHVsdmluYXIgc2FwaWVuIGV0LiBQcmV0aXVtIHZ1bHB1dGF0ZSBzYXBpZW4gbmVjIHNhZ2l0dGlzIGFsaXF1YW0gbWFsZXN1YWRhIGJpYmVuZHVtIGFyY3UuIEhhYml0YXNzZSBwbGF0ZWEgZGljdHVtc3QgdmVzdGlidWx1bSByaG9uY3VzLiBQdXJ1cyBpbiBtYXNzYSB0ZW1wb3IgbmVjIGZldWdpYXQgbmlzbCBwcmV0aXVtIGZ1c2NlLiBVdCBlbmltIGJsYW5kaXQgdm9sdXRwYXQgbWFlY2VuYXMgdm9sdXRwYXQgYmxhbmRpdCBhbGlxdWFtIGV0aWFtIGVyYXQuIE1hc3NhIGlkIG5lcXVlIGFsaXF1YW0gdmVzdGlidWx1bS4gVml0YWUgdWx0cmljaWVzIGxlbyBpbnRlZ2VyIG1hbGVzdWFkYSBudW5jIHZlbCByaXN1cyBjb21tb2RvLiBVcm5hIG1vbGVzdGllIGF0IGVsZW1lbnR1bSBldSBmYWNpbGlzaXMgc2VkIG9kaW8gbW9yYmkgcXVpcy4gQmliZW5kdW0gYXJjdSB2aXRhZSBlbGVtZW50dW0gY3VyYWJpdHVyIHZpdGFlIG51bmMgc2VkIHZlbGl0IGRpZ25pc3NpbS4gVHJpc3RpcXVlIHNlbmVjdHVzIGV0IG5ldHVzIGV0LiBMYWN1cyBsdWN0dXMgYWNjdW1zYW4gdG9ydG9yIHBvc3VlcmUgYWMgdXQgY29uc2VxdWF0IHNlbXBlci4gQmliZW5kdW0gZW5pbSBmYWNpbGlzaXMgZ3JhdmlkYSBuZXF1ZSBjb252YWxsaXMgYS4gUGhhcmV0cmEgbWFzc2EgbWFzc2EgdWx0cmljaWVzIG1pIHF1aXMgaGVuZHJlcml0IGRvbG9yIG1hZ25hIGVnZXQuIENvbnNlcXVhdCBpbnRlcmR1bSB2YXJpdXMgc2l0IGFtZXQgbWF0dGlzIHZ1bHB1dGF0ZS48L3A+XG4gICAgICA8cD5EaXMgcGFydHVyaWVudCBtb250ZXMgbmFzY2V0dXIgcmlkaWN1bHVzLiBOb24gYmxhbmRpdCBtYXNzYSBlbmltIG5lYyBkdWkuIFNhZ2l0dGlzIGV1IHZvbHV0cGF0IG9kaW8gZmFjaWxpc2lzIG1hdXJpcy4gUXVhbSBxdWlzcXVlIGlkIGRpYW0gdmVsIHF1YW0gZWxlbWVudHVtIHB1bHZpbmFyLiBFbmltIHV0IHNlbSB2aXZlcnJhIGFsaXF1ZXQgZWdldCBzaXQuIFZlbCBvcmNpIHBvcnRhIG5vbiBwdWx2aW5hciBuZXF1ZSBsYW9yZWV0IHN1c3BlbmRpc3NlIGludGVyZHVtIGNvbnNlY3RldHVyLiBWaXRhZSBldCBsZW8gZHVpcyB1dCBkaWFtLiBWdWxwdXRhdGUgdXQgcGhhcmV0cmEgc2l0IGFtZXQgYWxpcXVhbSBpZCBkaWFtIG1hZWNlbmFzIHVsdHJpY2llcy4gTmFtIGFsaXF1YW0gc2VtIGV0IHRvcnRvciBjb25zZXF1YXQgaWQgcG9ydGEgbmliaC4gTWFzc2Egc2FwaWVuIGZhdWNpYnVzIGV0IG1vbGVzdGllIGFjIGZldWdpYXQgc2VkIGxlY3R1cy4gTmVxdWUgYWxpcXVhbSB2ZXN0aWJ1bHVtIG1vcmJpIGJsYW5kaXQgY3Vyc3VzIHJpc3VzIGF0LiBVdCBzZW0gdml2ZXJyYSBhbGlxdWV0IGVnZXQgc2l0IGFtZXQuIEV0IGVnZXN0YXMgcXVpcyBpcHN1bSBzdXNwZW5kaXNzZSB1bHRyaWNlcyBncmF2aWRhIGRpY3R1bS4gUmlzdXMgZmV1Z2lhdCBpbiBhbnRlIG1ldHVzIGRpY3R1bSBhdCB0ZW1wb3IgY29tbW9kbyB1bGxhbWNvcnBlci4gRXRpYW0gdGVtcG9yIG9yY2kgZXUgbG9ib3J0aXMgZWxlbWVudHVtIG5pYmggdGVsbHVzIG1vbGVzdGllLjwvcD5cbiAgICAgIDxwPk51bGxhbSB2ZWhpY3VsYSBpcHN1bSBhIGFyY3UgY3Vyc3VzIHZpdGFlIGNvbmd1ZSBtYXVyaXMuIFJpc3VzIGF0IHVsdHJpY2VzIG1pIHRlbXB1cyBpbXBlcmRpZXQgbnVsbGEgbWFsZXN1YWRhLiBMb2JvcnRpcyBzY2VsZXJpc3F1ZSBmZXJtZW50dW0gZHVpIGZhdWNpYnVzIGluIG9ybmFyZSBxdWFtLiBOYXNjZXR1ciByaWRpY3VsdXMgbXVzIG1hdXJpcyB2aXRhZSB1bHRyaWNpZXMuIEVnZXQgbnVuYyBsb2JvcnRpcyBtYXR0aXMgYWxpcXVhbSBmYXVjaWJ1cyBwdXJ1cyBpbiBtYXNzYSB0ZW1wb3IuIENyYXMgb3JuYXJlIGFyY3UgZHVpIHZpdmFtdXMgYXJjdSBmZWxpcyBiaWJlbmR1bS4gVGVsbHVzIHBlbGxlbnRlc3F1ZSBldSB0aW5jaWR1bnQgdG9ydG9yIGFsaXF1YW0gbnVsbGEgZmFjaWxpc2kgY3JhcyBmZXJtZW50dW0uIElwc3VtIGZhdWNpYnVzIHZpdGFlIGFsaXF1ZXQgbmVjIHVsbGFtY29ycGVyIHNpdCBhbWV0IHJpc3VzIG51bGxhbS4gTmVjIHVsdHJpY2VzIGR1aSBzYXBpZW4gZWdldCBtaSBwcm9pbiBzZWQgbGliZXJvIGVuaW0uIE1hdXJpcyBzaXQgYW1ldCBtYXNzYSB2aXRhZSB0b3J0b3IgY29uZGltZW50dW0uIFZpdmVycmEgYWRpcGlzY2luZyBhdCBpbiB0ZWxsdXMgaW50ZWdlciBmZXVnaWF0LiBTaXQgYW1ldCBkaWN0dW0gc2l0IGFtZXQganVzdG8gZG9uZWMuIFByZXRpdW0gdnVscHV0YXRlIHNhcGllbiBuZWMgc2FnaXR0aXMgYWxpcXVhbSBtYWxlc3VhZGEgYmliZW5kdW0uPC9wPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBoMSB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgfVxuICAgICAgICAuY29udGVudC1jb250YWluZXIge1xuICAgICAgICAgIHBhZGRpbmc6IDFlbTtcbiAgICAgICAgICBtYXgtd2lkdGg6IDcyMHB4O1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIH1cbiAgICAgICAgLmNhcmQtY29udGFpbmVyIHtcbiAgICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgICAgICAgY29sb3I6IHJnYmEoMCwwLDAsLjYpO1xuICAgICAgICB9XG4gICAgICAgIC5tYWluLWNvbnRlbnQge1xuICAgICAgICAgIHBhZGRpbmc6IDAgMWVtIDAgMWVtO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuSG9tZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbigpIHtcbiAgY29uc29sZS5sb2coJ2dldHRpbmcgZGF0YScpXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS50dm1hemUuY29tL3NlYXJjaC9zaG93cz9xPWJhdG1hbicpXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXG4gIGNvbnNvbGUubG9nKGBTaG93IGRhdGEgZmV0Y2hlZC4gQ291bnQ6ICR7ZGF0YS5sZW5ndGh9YClcblxuICByZXR1cm4ge1xuICAgIHNob3dzOiBkYXRhLm1hcChlbnRyeSA9PiBlbnRyeS5zaG93KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVcbiJdfQ== */\n/*@ sourceURL=/Users/dan/Documents/Repositories/material-next-template/pages/index.js */"));
};

Home.getInitialProps =
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
/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.8c24ee95b3a7888618e4.hot-update.js.map