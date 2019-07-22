webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Layout/useWindowSize.js":
/*!********************************************!*\
  !*** ./components/Layout/useWindowSize.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash.throttle */ "./node_modules/lodash.throttle/index.js");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_2__);



var THROTTLE_LIMIT = 300;
var DRAWER_BREAK_POINT = 840;
var DEFAULT_SIZE = {
  innerHeight: 1000,
  innerWidth: 1000,
  outerHeight: 1000,
  outerWidth: 1000,
  isMobile: false
};

var getSize = function getSize() {
  if (false) {}

  return {
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
    outerHeight: window.outerHeight,
    outerWidth: window.outerWidth,
    isMobile: window.innerWidth < DRAWER_BREAK_POINT
  };
};

var useWindowSize = function useWindowSize() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(getSize()),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      windowSize = _useState2[0],
      setWindowSize = _useState2[1];

  var handleResize = lodash_throttle__WEBPACK_IMPORTED_MODULE_2___default()(function () {
    setWindowSize(getSize());
  }, THROTTLE_LIMIT);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    // need to check for ssr here?
    window.addEventListener('resize', handleResize);
    return function () {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return windowSize;
};

/* harmony default export */ __webpack_exports__["default"] = (useWindowSize);

/***/ })

})
//# sourceMappingURL=_app.js.3b95b2620c7c3bc8b6ee.hot-update.js.map