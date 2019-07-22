(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/settings.js"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fsettings&absolutePagePath=%2FUsers%2Fdan%2FDocuments%2FRepositories%2Fmaterial-next-template%2Fpages%2Fsettings.js!./":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fsettings&absolutePagePath=%2FUsers%2Fdan%2FDocuments%2FRepositories%2Fmaterial-next-template%2Fpages%2Fsettings.js ***!
  \*************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/settings", function() {
      var page = __webpack_require__(/*! ./pages/settings.js */ "./pages/settings.js")
      if(true) {
        module.hot.accept(/*! ./pages/settings.js */ "./pages/settings.js", function() {
          if(!next.router.components["/settings"]) return
          var updatedPage = __webpack_require__(/*! ./pages/settings.js */ "./pages/settings.js")
          next.router.update("/settings", updatedPage.default || updatedPage)
        })
      }
      return { page: page.default || page }
    }]);
  

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_c8f2bf67145e2f978a34 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_c8f2bf67145e2f978a34 */ "dll-reference dll_c8f2bf67145e2f978a34"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/string-hash/index.js":
/*!*******************************************!*\
  !*** ./node_modules/string-hash/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
/*!********************************************************!*\
  !*** ./node_modules/styled-jsx/dist/lib/stylesheet.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/
var isProd = process.env && "development" === 'production';

var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? "object" !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheet);

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = "#".concat(name, "-deleted-rule____{}");
    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;
    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
    var node = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = node ? node.getAttribute('content') : null;
  }

  _createClass(StyleSheet, [{
    key: "setOptimizeForSpeed",
    value: function setOptimizeForSpeed(bool) {
      invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');
      invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
      this.flush();
      this._optimizeForSpeed = bool;
      this.inject();
    }
  }, {
    key: "isOptimizeForSpeed",
    value: function isOptimizeForSpeed() {
      return this._optimizeForSpeed;
    }
  }, {
    key: "inject",
    value: function inject() {
      var _this = this;

      invariant(!this._injected, 'sheet already injected');
      this._injected = true;

      if (this._isBrowser && this._optimizeForSpeed) {
        this._tags[0] = this.makeStyleTag(this._name);
        this._optimizeForSpeed = 'insertRule' in this.getSheet();

        if (!this._optimizeForSpeed) {
          if (!isProd) {
            console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.');
          }

          this.flush();
          this._injected = true;
        }

        return;
      }

      this._serverSheet = {
        cssRules: [],
        insertRule: function insertRule(rule, index) {
          if (typeof index === 'number') {
            _this._serverSheet.cssRules[index] = {
              cssText: rule
            };
          } else {
            _this._serverSheet.cssRules.push({
              cssText: rule
            });
          }

          return index;
        },
        deleteRule: function deleteRule(index) {
          _this._serverSheet.cssRules[index] = null;
        }
      };
    }
  }, {
    key: "getSheetForTag",
    value: function getSheetForTag(tag) {
      if (tag.sheet) {
        return tag.sheet;
      } // this weirdness brought to you by firefox


      for (var i = 0; i < document.styleSheets.length; i++) {
        if (document.styleSheets[i].ownerNode === tag) {
          return document.styleSheets[i];
        }
      }
    }
  }, {
    key: "getSheet",
    value: function getSheet() {
      return this.getSheetForTag(this._tags[this._tags.length - 1]);
    }
  }, {
    key: "insertRule",
    value: function insertRule(rule, index) {
      invariant(isString(rule), '`insertRule` accepts only strings');

      if (!this._isBrowser) {
        if (typeof index !== 'number') {
          index = this._serverSheet.cssRules.length;
        }

        this._serverSheet.insertRule(rule, index);

        return this._rulesCount++;
      }

      if (this._optimizeForSpeed) {
        var sheet = this.getSheet();

        if (typeof index !== 'number') {
          index = sheet.cssRules.length;
        } // this weirdness for perf, and chrome's weird bug
        // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule


        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          }

          return -1;
        }
      } else {
        var insertionPoint = this._tags[index];

        this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
      }

      return this._rulesCount++;
    }
  }, {
    key: "replaceRule",
    value: function replaceRule(index, rule) {
      if (this._optimizeForSpeed || !this._isBrowser) {
        var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;

        if (!rule.trim()) {
          rule = this._deletedRulePlaceholder;
        }

        if (!sheet.cssRules[index]) {
          // @TBD Should we throw an error?
          return index;
        }

        sheet.deleteRule(index);

        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          } // In order to preserve the indices we insert a deleteRulePlaceholder


          sheet.insertRule(this._deletedRulePlaceholder, index);
        }
      } else {
        var tag = this._tags[index];
        invariant(tag, "old rule at index `".concat(index, "` not found"));
        tag.textContent = rule;
      }

      return index;
    }
  }, {
    key: "deleteRule",
    value: function deleteRule(index) {
      if (!this._isBrowser) {
        this._serverSheet.deleteRule(index);

        return;
      }

      if (this._optimizeForSpeed) {
        this.replaceRule(index, '');
      } else {
        var tag = this._tags[index];
        invariant(tag, "rule at index `".concat(index, "` not found"));
        tag.parentNode.removeChild(tag);
        this._tags[index] = null;
      }
    }
  }, {
    key: "flush",
    value: function flush() {
      this._injected = false;
      this._rulesCount = 0;

      if (this._isBrowser) {
        this._tags.forEach(function (tag) {
          return tag && tag.parentNode.removeChild(tag);
        });

        this._tags = [];
      } else {
        // simpler on server
        this._serverSheet.cssRules = [];
      }
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this2 = this;

      if (!this._isBrowser) {
        return this._serverSheet.cssRules;
      }

      return this._tags.reduce(function (rules, tag) {
        if (tag) {
          rules = rules.concat(_this2.getSheetForTag(tag).cssRules.map(function (rule) {
            return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
          }));
        } else {
          rules.push(null);
        }

        return rules;
      }, []);
    }
  }, {
    key: "makeStyleTag",
    value: function makeStyleTag(name, cssString, relativeToTag) {
      if (cssString) {
        invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
      }

      var tag = document.createElement('style');
      if (this._nonce) tag.setAttribute('nonce', this._nonce);
      tag.type = 'text/css';
      tag.setAttribute("data-".concat(name), '');

      if (cssString) {
        tag.appendChild(document.createTextNode(cssString));
      }

      var head = document.head || document.getElementsByTagName('head')[0];

      if (relativeToTag) {
        head.insertBefore(tag, relativeToTag);
      } else {
        head.appendChild(tag);
      }

      return tag;
    }
  }, {
    key: "length",
    get: function get() {
      return this._rulesCount;
    }
  }]);

  return StyleSheet;
}();

exports.default = StyleSheet;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheet: ".concat(message, "."));
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/styled-jsx/dist/style.js":
/*!***********************************************!*\
  !*** ./node_modules/styled-jsx/dist/style.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flush = flush;
exports.default = void 0;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__(/*! ./stylesheet-registry */ "./node_modules/styled-jsx/dist/stylesheet-registry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var styleSheetRegistry = new _stylesheetRegistry.default();

var JSXStyle =
/*#__PURE__*/
function (_Component) {
  _inherits(JSXStyle, _Component);

  function JSXStyle(props) {
    var _this;

    _classCallCheck(this, JSXStyle);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(JSXStyle).call(this, props));
    _this.prevProps = {};
    return _this;
  }

  _createClass(JSXStyle, [{
    key: "shouldComponentUpdate",
    // probably faster than PureComponent (shallowEqual)
    value: function shouldComponentUpdate(otherProps) {
      return this.props.id !== otherProps.id || // We do this check because `dynamic` is an array of strings or undefined.
      // These are the computed values for dynamic styles.
      String(this.props.dynamic) !== String(otherProps.dynamic);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      styleSheetRegistry.remove(this.props);
    }
  }, {
    key: "render",
    value: function render() {
      // This is a workaround to make the side effect async safe in the "render" phase.
      // See https://github.com/zeit/styled-jsx/pull/484
      if (this.shouldComponentUpdate(this.prevProps)) {
        // Updates
        if (this.prevProps.id) {
          styleSheetRegistry.remove(this.prevProps);
        }

        styleSheetRegistry.add(this.props);
        this.prevProps = this.props;
      }

      return null;
    }
  }], [{
    key: "dynamic",
    value: function dynamic(info) {
      return info.map(function (tagInfo) {
        var baseId = tagInfo[0];
        var props = tagInfo[1];
        return styleSheetRegistry.computeId(baseId, props);
      }).join(' ');
    }
  }]);

  return JSXStyle;
}(_react.Component);

exports.default = JSXStyle;

function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return cssRules;
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
/*!*************************************************************!*\
  !*** ./node_modules/styled-jsx/dist/stylesheet-registry.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__(/*! string-hash */ "./node_modules/string-hash/index.js"));

var _stylesheet = _interopRequireDefault(__webpack_require__(/*! ./lib/stylesheet */ "./node_modules/styled-jsx/dist/lib/stylesheet.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/gi, '\\/style');
};

var StyleSheetRegistry =
/*#__PURE__*/
function () {
  function StyleSheetRegistry() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === void 0 ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? "object" !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheetRegistry);

    this._sheet = styleSheet || new _stylesheet.default({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();

    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;
    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  _createClass(StyleSheetRegistry, [{
    key: "add",
    value: function add(props) {
      var _this = this;

      if (undefined === this._optimizeForSpeed) {
        this._optimizeForSpeed = Array.isArray(props.children);

        this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);

        this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
      }

      if (this._isBrowser && !this._fromServer) {
        this._fromServer = this.selectFromServer();
        this._instancesCounts = Object.keys(this._fromServer).reduce(function (acc, tagName) {
          acc[tagName] = 0;
          return acc;
        }, {});
      }

      var _this$getIdAndRules = this.getIdAndRules(props),
          styleId = _this$getIdAndRules.styleId,
          rules = _this$getIdAndRules.rules; // Deduping: just increase the instances count.


      if (styleId in this._instancesCounts) {
        this._instancesCounts[styleId] += 1;
        return;
      }

      var indices = rules.map(function (rule) {
        return _this._sheet.insertRule(rule);
      }) // Filter out invalid rules
      .filter(function (index) {
        return index !== -1;
      });
      this._indices[styleId] = indices;
      this._instancesCounts[styleId] = 1;
    }
  }, {
    key: "remove",
    value: function remove(props) {
      var _this2 = this;

      var _this$getIdAndRules2 = this.getIdAndRules(props),
          styleId = _this$getIdAndRules2.styleId;

      invariant(styleId in this._instancesCounts, "styleId: `".concat(styleId, "` not found"));
      this._instancesCounts[styleId] -= 1;

      if (this._instancesCounts[styleId] < 1) {
        var tagFromServer = this._fromServer && this._fromServer[styleId];

        if (tagFromServer) {
          tagFromServer.parentNode.removeChild(tagFromServer);
          delete this._fromServer[styleId];
        } else {
          this._indices[styleId].forEach(function (index) {
            return _this2._sheet.deleteRule(index);
          });

          delete this._indices[styleId];
        }

        delete this._instancesCounts[styleId];
      }
    }
  }, {
    key: "update",
    value: function update(props, nextProps) {
      this.add(nextProps);
      this.remove(props);
    }
  }, {
    key: "flush",
    value: function flush() {
      this._sheet.flush();

      this._sheet.inject();

      this._fromServer = undefined;
      this._indices = {};
      this._instancesCounts = {};
      this.computeId = this.createComputeId();
      this.computeSelector = this.createComputeSelector();
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this3 = this;

      var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function (styleId) {
        return [styleId, _this3._fromServer[styleId]];
      }) : [];

      var cssRules = this._sheet.cssRules();

      return fromServer.concat(Object.keys(this._indices).map(function (styleId) {
        return [styleId, _this3._indices[styleId].map(function (index) {
          return cssRules[index].cssText;
        }).join(_this3._optimizeForSpeed ? '' : '\n')];
      }) // filter out empty rules
      .filter(function (rule) {
        return Boolean(rule[1]);
      }));
    }
    /**
     * createComputeId
     *
     * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
     */

  }, {
    key: "createComputeId",
    value: function createComputeId() {
      var cache = {};
      return function (baseId, props) {
        if (!props) {
          return "jsx-".concat(baseId);
        }

        var propsToString = String(props);
        var key = baseId + propsToString; // return `jsx-${hashString(`${baseId}-${propsToString}`)}`

        if (!cache[key]) {
          cache[key] = "jsx-".concat((0, _stringHash.default)("".concat(baseId, "-").concat(propsToString)));
        }

        return cache[key];
      };
    }
    /**
     * createComputeSelector
     *
     * Creates a function to compute and memoize dynamic selectors.
     */

  }, {
    key: "createComputeSelector",
    value: function createComputeSelector() {
      var selectoPlaceholderRegexp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : /__jsx-style-dynamic-selector/g;
      var cache = {};
      return function (id, css) {
        // Sanitize SSR-ed CSS.
        // Client side code doesn't need to be sanitized since we use
        // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
        if (!this._isBrowser) {
          css = sanitize(css);
        }

        var idcss = id + css;

        if (!cache[idcss]) {
          cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
        }

        return cache[idcss];
      };
    }
  }, {
    key: "getIdAndRules",
    value: function getIdAndRules(props) {
      var _this4 = this;

      var css = props.children,
          dynamic = props.dynamic,
          id = props.id;

      if (dynamic) {
        var styleId = this.computeId(id, dynamic);
        return {
          styleId: styleId,
          rules: Array.isArray(css) ? css.map(function (rule) {
            return _this4.computeSelector(styleId, rule);
          }) : [this.computeSelector(styleId, css)]
        };
      }

      return {
        styleId: this.computeId(id),
        rules: Array.isArray(css) ? css : [css]
      };
    }
    /**
     * selectFromServer
     *
     * Collects style tags from the document with id __jsx-XXX
     */

  }, {
    key: "selectFromServer",
    value: function selectFromServer() {
      var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
      return elements.reduce(function (acc, element) {
        var id = element.id.slice(2);
        acc[id] = element;
        return acc;
      }, {});
    }
  }]);

  return StyleSheetRegistry;
}();

exports.default = StyleSheetRegistry;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheetRegistry: ".concat(message, "."));
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/style.js":
/*!******************************************!*\
  !*** ./node_modules/styled-jsx/style.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/style */ "./node_modules/styled-jsx/dist/style.js")


/***/ }),

/***/ "./pages/settings.js":
/*!***************************!*\
  !*** ./pages/settings.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/dan/Documents/Repositories/material-next-template/pages/settings.js";



var Settings = function Settings() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3461541738" + " " + 'content-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-3461541738",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, "Header"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3461541738",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, "This content is in ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "jsx-3461541738",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, "pages/settings.js")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3461541738",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "See the source code at ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://github.com/dan-kwiat/material-next-template",
    className: "jsx-3461541738",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "github.com/dan-kwiat/material-next-template")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3461541738",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Dolor sit amet consectetur adipiscing elit duis. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit. Leo urna molestie at elementum eu. Sed adipiscing diam donec adipiscing tristique risus nec feugiat. At lectus urna duis convallis convallis tellus id. Dapibus ultrices in iaculis nunc sed augue lacus viverra vitae. Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum. Praesent tristique magna sit amet purus gravida quis. Lectus proin nibh nisl condimentum. Nibh venenatis cras sed felis. Consequat semper viverra nam libero justo. Ultrices gravida dictum fusce ut. Enim praesent elementum facilisis leo vel fringilla."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3461541738",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Suspendisse in est ante in nibh mauris cursus. Imperdiet massa tincidunt nunc pulvinar sapien et. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Habitasse platea dictumst vestibulum rhoncus. Purus in massa tempor nec feugiat nisl pretium fusce. Ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat. Massa id neque aliquam vestibulum. Vitae ultricies leo integer malesuada nunc vel risus commodo. Urna molestie at elementum eu facilisis sed odio morbi quis. Bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim. Tristique senectus et netus et. Lacus luctus accumsan tortor posuere ac ut consequat semper. Bibendum enim facilisis gravida neque convallis a. Pharetra massa massa ultricies mi quis hendrerit dolor magna eget. Consequat interdum varius sit amet mattis vulputate."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3461541738",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Nullam vehicula ipsum a arcu cursus vitae congue mauris. Risus at ultrices mi tempus imperdiet nulla malesuada. Lobortis scelerisque fermentum dui faucibus in ornare quam. Nascetur ridiculus mus mauris vitae ultricies. Eget nunc lobortis mattis aliquam faucibus purus in massa tempor. Cras ornare arcu dui vivamus arcu felis bibendum. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum. Ipsum faucibus vitae aliquet nec ullamcorper sit amet risus nullam. Nec ultrices dui sapien eget mi proin sed libero enim. Mauris sit amet massa vitae tortor condimentum. Viverra adipiscing at in tellus integer feugiat. Sit amet dictum sit amet justo donec. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3461541738",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Imperdiet proin fermentum leo vel. Porttitor eget dolor morbi non. Sed arcu non odio euismod lacinia at quis risus. Iaculis urna id volutpat lacus laoreet non curabitur gravida arcu. Enim nec dui nunc mattis enim. Id semper risus in hendrerit. Ipsum nunc aliquet bibendum enim facilisis. In aliquam sem fringilla ut morbi tincidunt augue. Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor. Orci ac auctor augue mauris augue neque gravida in. Mattis vulputate enim nulla aliquet porttitor. Metus dictum at tempor commodo ullamcorper a lacus vestibulum sed. Imperdiet massa tincidunt nunc pulvinar sapien et. Rhoncus mattis rhoncus urna neque."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3461541738",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Imperdiet proin fermentum leo vel. Porttitor eget dolor morbi non. Sed arcu non odio euismod lacinia at quis risus. Iaculis urna id volutpat lacus laoreet non curabitur gravida arcu. Enim nec dui nunc mattis enim. Id semper risus in hendrerit. Ipsum nunc aliquet bibendum enim facilisis. In aliquam sem fringilla ut morbi tincidunt augue. Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor. Orci ac auctor augue mauris augue neque gravida in. Mattis vulputate enim nulla aliquet porttitor. Metus dictum at tempor commodo ullamcorper a lacus vestibulum sed. Imperdiet massa tincidunt nunc pulvinar sapien et. Rhoncus mattis rhoncus urna neque."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3461541738",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Dolor sit amet consectetur adipiscing elit duis. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit. Leo urna molestie at elementum eu. Sed adipiscing diam donec adipiscing tristique risus nec feugiat. At lectus urna duis convallis convallis tellus id. Dapibus ultrices in iaculis nunc sed augue lacus viverra vitae. Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum. Praesent tristique magna sit amet purus gravida quis. Lectus proin nibh nisl condimentum. Nibh venenatis cras sed felis. Consequat semper viverra nam libero justo. Ultrices gravida dictum fusce ut. Enim praesent elementum facilisis leo vel fringilla."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3461541738",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Dis parturient montes nascetur ridiculus. Non blandit massa enim nec dui. Sagittis eu volutpat odio facilisis mauris. Quam quisque id diam vel quam elementum pulvinar. Enim ut sem viverra aliquet eget sit. Vel orci porta non pulvinar neque laoreet suspendisse interdum consectetur. Vitae et leo duis ut diam. Vulputate ut pharetra sit amet aliquam id diam maecenas ultricies. Nam aliquam sem et tortor consequat id porta nibh. Massa sapien faucibus et molestie ac feugiat sed lectus. Neque aliquam vestibulum morbi blandit cursus risus at. Ut sem viverra aliquet eget sit amet. Et egestas quis ipsum suspendisse ultrices gravida dictum. Risus feugiat in ante metus dictum at tempor commodo ullamcorper. Etiam tempor orci eu lobortis elementum nibh tellus molestie."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3461541738",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Suspendisse in est ante in nibh mauris cursus. Imperdiet massa tincidunt nunc pulvinar sapien et. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Habitasse platea dictumst vestibulum rhoncus. Purus in massa tempor nec feugiat nisl pretium fusce. Ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat. Massa id neque aliquam vestibulum. Vitae ultricies leo integer malesuada nunc vel risus commodo. Urna molestie at elementum eu facilisis sed odio morbi quis. Bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim. Tristique senectus et netus et. Lacus luctus accumsan tortor posuere ac ut consequat semper. Bibendum enim facilisis gravida neque convallis a. Pharetra massa massa ultricies mi quis hendrerit dolor magna eget. Consequat interdum varius sit amet mattis vulputate."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3461541738",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Dis parturient montes nascetur ridiculus. Non blandit massa enim nec dui. Sagittis eu volutpat odio facilisis mauris. Quam quisque id diam vel quam elementum pulvinar. Enim ut sem viverra aliquet eget sit. Vel orci porta non pulvinar neque laoreet suspendisse interdum consectetur. Vitae et leo duis ut diam. Vulputate ut pharetra sit amet aliquam id diam maecenas ultricies. Nam aliquam sem et tortor consequat id porta nibh. Massa sapien faucibus et molestie ac feugiat sed lectus. Neque aliquam vestibulum morbi blandit cursus risus at. Ut sem viverra aliquet eget sit amet. Et egestas quis ipsum suspendisse ultrices gravida dictum. Risus feugiat in ante metus dictum at tempor commodo ullamcorper. Etiam tempor orci eu lobortis elementum nibh tellus molestie."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3461541738",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Nullam vehicula ipsum a arcu cursus vitae congue mauris. Risus at ultrices mi tempus imperdiet nulla malesuada. Lobortis scelerisque fermentum dui faucibus in ornare quam. Nascetur ridiculus mus mauris vitae ultricies. Eget nunc lobortis mattis aliquam faucibus purus in massa tempor. Cras ornare arcu dui vivamus arcu felis bibendum. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum. Ipsum faucibus vitae aliquet nec ullamcorper sit amet risus nullam. Nec ultrices dui sapien eget mi proin sed libero enim. Mauris sit amet massa vitae tortor condimentum. Viverra adipiscing at in tellus integer feugiat. Sit amet dictum sit amet justo donec. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3461541738",
    __self: this
  }, "h1.jsx-3461541738{font-weight:500;}.content-container.jsx-3461541738{padding:1em;max-width:720px;box-sizing:border-box;margin:0 auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW4vRG9jdW1lbnRzL1JlcG9zaXRvcmllcy9tYXRlcmlhbC1uZXh0LXRlbXBsYXRlL3BhZ2VzL3NldHRpbmdzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdCa0IsQUFHMkIsQUFHSixZQUNJLElBSGxCLFlBSXdCLHNCQUNSLGNBQ2hCIiwiZmlsZSI6Ii9Vc2Vycy9kYW4vRG9jdW1lbnRzL1JlcG9zaXRvcmllcy9tYXRlcmlhbC1uZXh0LXRlbXBsYXRlL3BhZ2VzL3NldHRpbmdzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgU2V0dGluZ3MgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQtY29udGFpbmVyJz5cbiAgICAgIDxoMT5IZWFkZXI8L2gxPlxuICAgICAgPHA+VGhpcyBjb250ZW50IGlzIGluIDxpPnBhZ2VzL3NldHRpbmdzLmpzPC9pPjwvcD5cbiAgICAgIDxwPlNlZSB0aGUgc291cmNlIGNvZGUgYXQgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9kYW4ta3dpYXQvbWF0ZXJpYWwtbmV4dC10ZW1wbGF0ZVwiPmdpdGh1Yi5jb20vZGFuLWt3aWF0L21hdGVyaWFsLW5leHQtdGVtcGxhdGU8L2E+PC9wPlxuICAgICAgPHA+RG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0IGR1aXMuIExhY3VzIHN1c3BlbmRpc3NlIGZhdWNpYnVzIGludGVyZHVtIHBvc3VlcmUgbG9yZW0gaXBzdW0gZG9sb3Igc2l0LiBMZW8gdXJuYSBtb2xlc3RpZSBhdCBlbGVtZW50dW0gZXUuIFNlZCBhZGlwaXNjaW5nIGRpYW0gZG9uZWMgYWRpcGlzY2luZyB0cmlzdGlxdWUgcmlzdXMgbmVjIGZldWdpYXQuIEF0IGxlY3R1cyB1cm5hIGR1aXMgY29udmFsbGlzIGNvbnZhbGxpcyB0ZWxsdXMgaWQuIERhcGlidXMgdWx0cmljZXMgaW4gaWFjdWxpcyBudW5jIHNlZCBhdWd1ZSBsYWN1cyB2aXZlcnJhIHZpdGFlLiBOdWxsYSBwaGFyZXRyYSBkaWFtIHNpdCBhbWV0IG5pc2wgc3VzY2lwaXQgYWRpcGlzY2luZyBiaWJlbmR1bS4gUHJhZXNlbnQgdHJpc3RpcXVlIG1hZ25hIHNpdCBhbWV0IHB1cnVzIGdyYXZpZGEgcXVpcy4gTGVjdHVzIHByb2luIG5pYmggbmlzbCBjb25kaW1lbnR1bS4gTmliaCB2ZW5lbmF0aXMgY3JhcyBzZWQgZmVsaXMuIENvbnNlcXVhdCBzZW1wZXIgdml2ZXJyYSBuYW0gbGliZXJvIGp1c3RvLiBVbHRyaWNlcyBncmF2aWRhIGRpY3R1bSBmdXNjZSB1dC4gRW5pbSBwcmFlc2VudCBlbGVtZW50dW0gZmFjaWxpc2lzIGxlbyB2ZWwgZnJpbmdpbGxhLjwvcD5cbiAgICAgIDxwPlN1c3BlbmRpc3NlIGluIGVzdCBhbnRlIGluIG5pYmggbWF1cmlzIGN1cnN1cy4gSW1wZXJkaWV0IG1hc3NhIHRpbmNpZHVudCBudW5jIHB1bHZpbmFyIHNhcGllbiBldC4gUHJldGl1bSB2dWxwdXRhdGUgc2FwaWVuIG5lYyBzYWdpdHRpcyBhbGlxdWFtIG1hbGVzdWFkYSBiaWJlbmR1bSBhcmN1LiBIYWJpdGFzc2UgcGxhdGVhIGRpY3R1bXN0IHZlc3RpYnVsdW0gcmhvbmN1cy4gUHVydXMgaW4gbWFzc2EgdGVtcG9yIG5lYyBmZXVnaWF0IG5pc2wgcHJldGl1bSBmdXNjZS4gVXQgZW5pbSBibGFuZGl0IHZvbHV0cGF0IG1hZWNlbmFzIHZvbHV0cGF0IGJsYW5kaXQgYWxpcXVhbSBldGlhbSBlcmF0LiBNYXNzYSBpZCBuZXF1ZSBhbGlxdWFtIHZlc3RpYnVsdW0uIFZpdGFlIHVsdHJpY2llcyBsZW8gaW50ZWdlciBtYWxlc3VhZGEgbnVuYyB2ZWwgcmlzdXMgY29tbW9kby4gVXJuYSBtb2xlc3RpZSBhdCBlbGVtZW50dW0gZXUgZmFjaWxpc2lzIHNlZCBvZGlvIG1vcmJpIHF1aXMuIEJpYmVuZHVtIGFyY3Ugdml0YWUgZWxlbWVudHVtIGN1cmFiaXR1ciB2aXRhZSBudW5jIHNlZCB2ZWxpdCBkaWduaXNzaW0uIFRyaXN0aXF1ZSBzZW5lY3R1cyBldCBuZXR1cyBldC4gTGFjdXMgbHVjdHVzIGFjY3Vtc2FuIHRvcnRvciBwb3N1ZXJlIGFjIHV0IGNvbnNlcXVhdCBzZW1wZXIuIEJpYmVuZHVtIGVuaW0gZmFjaWxpc2lzIGdyYXZpZGEgbmVxdWUgY29udmFsbGlzIGEuIFBoYXJldHJhIG1hc3NhIG1hc3NhIHVsdHJpY2llcyBtaSBxdWlzIGhlbmRyZXJpdCBkb2xvciBtYWduYSBlZ2V0LiBDb25zZXF1YXQgaW50ZXJkdW0gdmFyaXVzIHNpdCBhbWV0IG1hdHRpcyB2dWxwdXRhdGUuPC9wPlxuICAgICAgPHA+TnVsbGFtIHZlaGljdWxhIGlwc3VtIGEgYXJjdSBjdXJzdXMgdml0YWUgY29uZ3VlIG1hdXJpcy4gUmlzdXMgYXQgdWx0cmljZXMgbWkgdGVtcHVzIGltcGVyZGlldCBudWxsYSBtYWxlc3VhZGEuIExvYm9ydGlzIHNjZWxlcmlzcXVlIGZlcm1lbnR1bSBkdWkgZmF1Y2lidXMgaW4gb3JuYXJlIHF1YW0uIE5hc2NldHVyIHJpZGljdWx1cyBtdXMgbWF1cmlzIHZpdGFlIHVsdHJpY2llcy4gRWdldCBudW5jIGxvYm9ydGlzIG1hdHRpcyBhbGlxdWFtIGZhdWNpYnVzIHB1cnVzIGluIG1hc3NhIHRlbXBvci4gQ3JhcyBvcm5hcmUgYXJjdSBkdWkgdml2YW11cyBhcmN1IGZlbGlzIGJpYmVuZHVtLiBUZWxsdXMgcGVsbGVudGVzcXVlIGV1IHRpbmNpZHVudCB0b3J0b3IgYWxpcXVhbSBudWxsYSBmYWNpbGlzaSBjcmFzIGZlcm1lbnR1bS4gSXBzdW0gZmF1Y2lidXMgdml0YWUgYWxpcXVldCBuZWMgdWxsYW1jb3JwZXIgc2l0IGFtZXQgcmlzdXMgbnVsbGFtLiBOZWMgdWx0cmljZXMgZHVpIHNhcGllbiBlZ2V0IG1pIHByb2luIHNlZCBsaWJlcm8gZW5pbS4gTWF1cmlzIHNpdCBhbWV0IG1hc3NhIHZpdGFlIHRvcnRvciBjb25kaW1lbnR1bS4gVml2ZXJyYSBhZGlwaXNjaW5nIGF0IGluIHRlbGx1cyBpbnRlZ2VyIGZldWdpYXQuIFNpdCBhbWV0IGRpY3R1bSBzaXQgYW1ldCBqdXN0byBkb25lYy4gUHJldGl1bSB2dWxwdXRhdGUgc2FwaWVuIG5lYyBzYWdpdHRpcyBhbGlxdWFtIG1hbGVzdWFkYSBiaWJlbmR1bS48L3A+XG4gICAgICA8cD5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gSW1wZXJkaWV0IHByb2luIGZlcm1lbnR1bSBsZW8gdmVsLiBQb3J0dGl0b3IgZWdldCBkb2xvciBtb3JiaSBub24uIFNlZCBhcmN1IG5vbiBvZGlvIGV1aXNtb2QgbGFjaW5pYSBhdCBxdWlzIHJpc3VzLiBJYWN1bGlzIHVybmEgaWQgdm9sdXRwYXQgbGFjdXMgbGFvcmVldCBub24gY3VyYWJpdHVyIGdyYXZpZGEgYXJjdS4gRW5pbSBuZWMgZHVpIG51bmMgbWF0dGlzIGVuaW0uIElkIHNlbXBlciByaXN1cyBpbiBoZW5kcmVyaXQuIElwc3VtIG51bmMgYWxpcXVldCBiaWJlbmR1bSBlbmltIGZhY2lsaXNpcy4gSW4gYWxpcXVhbSBzZW0gZnJpbmdpbGxhIHV0IG1vcmJpIHRpbmNpZHVudCBhdWd1ZS4gVnVscHV0YXRlIGVuaW0gbnVsbGEgYWxpcXVldCBwb3J0dGl0b3IgbGFjdXMgbHVjdHVzIGFjY3Vtc2FuIHRvcnRvci4gT3JjaSBhYyBhdWN0b3IgYXVndWUgbWF1cmlzIGF1Z3VlIG5lcXVlIGdyYXZpZGEgaW4uIE1hdHRpcyB2dWxwdXRhdGUgZW5pbSBudWxsYSBhbGlxdWV0IHBvcnR0aXRvci4gTWV0dXMgZGljdHVtIGF0IHRlbXBvciBjb21tb2RvIHVsbGFtY29ycGVyIGEgbGFjdXMgdmVzdGlidWx1bSBzZWQuIEltcGVyZGlldCBtYXNzYSB0aW5jaWR1bnQgbnVuYyBwdWx2aW5hciBzYXBpZW4gZXQuIFJob25jdXMgbWF0dGlzIHJob25jdXMgdXJuYSBuZXF1ZS48L3A+XG4gICAgICA8cD5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gSW1wZXJkaWV0IHByb2luIGZlcm1lbnR1bSBsZW8gdmVsLiBQb3J0dGl0b3IgZWdldCBkb2xvciBtb3JiaSBub24uIFNlZCBhcmN1IG5vbiBvZGlvIGV1aXNtb2QgbGFjaW5pYSBhdCBxdWlzIHJpc3VzLiBJYWN1bGlzIHVybmEgaWQgdm9sdXRwYXQgbGFjdXMgbGFvcmVldCBub24gY3VyYWJpdHVyIGdyYXZpZGEgYXJjdS4gRW5pbSBuZWMgZHVpIG51bmMgbWF0dGlzIGVuaW0uIElkIHNlbXBlciByaXN1cyBpbiBoZW5kcmVyaXQuIElwc3VtIG51bmMgYWxpcXVldCBiaWJlbmR1bSBlbmltIGZhY2lsaXNpcy4gSW4gYWxpcXVhbSBzZW0gZnJpbmdpbGxhIHV0IG1vcmJpIHRpbmNpZHVudCBhdWd1ZS4gVnVscHV0YXRlIGVuaW0gbnVsbGEgYWxpcXVldCBwb3J0dGl0b3IgbGFjdXMgbHVjdHVzIGFjY3Vtc2FuIHRvcnRvci4gT3JjaSBhYyBhdWN0b3IgYXVndWUgbWF1cmlzIGF1Z3VlIG5lcXVlIGdyYXZpZGEgaW4uIE1hdHRpcyB2dWxwdXRhdGUgZW5pbSBudWxsYSBhbGlxdWV0IHBvcnR0aXRvci4gTWV0dXMgZGljdHVtIGF0IHRlbXBvciBjb21tb2RvIHVsbGFtY29ycGVyIGEgbGFjdXMgdmVzdGlidWx1bSBzZWQuIEltcGVyZGlldCBtYXNzYSB0aW5jaWR1bnQgbnVuYyBwdWx2aW5hciBzYXBpZW4gZXQuIFJob25jdXMgbWF0dGlzIHJob25jdXMgdXJuYSBuZXF1ZS48L3A+XG4gICAgICA8cD5Eb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQgZHVpcy4gTGFjdXMgc3VzcGVuZGlzc2UgZmF1Y2lidXMgaW50ZXJkdW0gcG9zdWVyZSBsb3JlbSBpcHN1bSBkb2xvciBzaXQuIExlbyB1cm5hIG1vbGVzdGllIGF0IGVsZW1lbnR1bSBldS4gU2VkIGFkaXBpc2NpbmcgZGlhbSBkb25lYyBhZGlwaXNjaW5nIHRyaXN0aXF1ZSByaXN1cyBuZWMgZmV1Z2lhdC4gQXQgbGVjdHVzIHVybmEgZHVpcyBjb252YWxsaXMgY29udmFsbGlzIHRlbGx1cyBpZC4gRGFwaWJ1cyB1bHRyaWNlcyBpbiBpYWN1bGlzIG51bmMgc2VkIGF1Z3VlIGxhY3VzIHZpdmVycmEgdml0YWUuIE51bGxhIHBoYXJldHJhIGRpYW0gc2l0IGFtZXQgbmlzbCBzdXNjaXBpdCBhZGlwaXNjaW5nIGJpYmVuZHVtLiBQcmFlc2VudCB0cmlzdGlxdWUgbWFnbmEgc2l0IGFtZXQgcHVydXMgZ3JhdmlkYSBxdWlzLiBMZWN0dXMgcHJvaW4gbmliaCBuaXNsIGNvbmRpbWVudHVtLiBOaWJoIHZlbmVuYXRpcyBjcmFzIHNlZCBmZWxpcy4gQ29uc2VxdWF0IHNlbXBlciB2aXZlcnJhIG5hbSBsaWJlcm8ganVzdG8uIFVsdHJpY2VzIGdyYXZpZGEgZGljdHVtIGZ1c2NlIHV0LiBFbmltIHByYWVzZW50IGVsZW1lbnR1bSBmYWNpbGlzaXMgbGVvIHZlbCBmcmluZ2lsbGEuPC9wPlxuICAgICAgPHA+RGlzIHBhcnR1cmllbnQgbW9udGVzIG5hc2NldHVyIHJpZGljdWx1cy4gTm9uIGJsYW5kaXQgbWFzc2EgZW5pbSBuZWMgZHVpLiBTYWdpdHRpcyBldSB2b2x1dHBhdCBvZGlvIGZhY2lsaXNpcyBtYXVyaXMuIFF1YW0gcXVpc3F1ZSBpZCBkaWFtIHZlbCBxdWFtIGVsZW1lbnR1bSBwdWx2aW5hci4gRW5pbSB1dCBzZW0gdml2ZXJyYSBhbGlxdWV0IGVnZXQgc2l0LiBWZWwgb3JjaSBwb3J0YSBub24gcHVsdmluYXIgbmVxdWUgbGFvcmVldCBzdXNwZW5kaXNzZSBpbnRlcmR1bSBjb25zZWN0ZXR1ci4gVml0YWUgZXQgbGVvIGR1aXMgdXQgZGlhbS4gVnVscHV0YXRlIHV0IHBoYXJldHJhIHNpdCBhbWV0IGFsaXF1YW0gaWQgZGlhbSBtYWVjZW5hcyB1bHRyaWNpZXMuIE5hbSBhbGlxdWFtIHNlbSBldCB0b3J0b3IgY29uc2VxdWF0IGlkIHBvcnRhIG5pYmguIE1hc3NhIHNhcGllbiBmYXVjaWJ1cyBldCBtb2xlc3RpZSBhYyBmZXVnaWF0IHNlZCBsZWN0dXMuIE5lcXVlIGFsaXF1YW0gdmVzdGlidWx1bSBtb3JiaSBibGFuZGl0IGN1cnN1cyByaXN1cyBhdC4gVXQgc2VtIHZpdmVycmEgYWxpcXVldCBlZ2V0IHNpdCBhbWV0LiBFdCBlZ2VzdGFzIHF1aXMgaXBzdW0gc3VzcGVuZGlzc2UgdWx0cmljZXMgZ3JhdmlkYSBkaWN0dW0uIFJpc3VzIGZldWdpYXQgaW4gYW50ZSBtZXR1cyBkaWN0dW0gYXQgdGVtcG9yIGNvbW1vZG8gdWxsYW1jb3JwZXIuIEV0aWFtIHRlbXBvciBvcmNpIGV1IGxvYm9ydGlzIGVsZW1lbnR1bSBuaWJoIHRlbGx1cyBtb2xlc3RpZS48L3A+XG4gICAgICA8cD5TdXNwZW5kaXNzZSBpbiBlc3QgYW50ZSBpbiBuaWJoIG1hdXJpcyBjdXJzdXMuIEltcGVyZGlldCBtYXNzYSB0aW5jaWR1bnQgbnVuYyBwdWx2aW5hciBzYXBpZW4gZXQuIFByZXRpdW0gdnVscHV0YXRlIHNhcGllbiBuZWMgc2FnaXR0aXMgYWxpcXVhbSBtYWxlc3VhZGEgYmliZW5kdW0gYXJjdS4gSGFiaXRhc3NlIHBsYXRlYSBkaWN0dW1zdCB2ZXN0aWJ1bHVtIHJob25jdXMuIFB1cnVzIGluIG1hc3NhIHRlbXBvciBuZWMgZmV1Z2lhdCBuaXNsIHByZXRpdW0gZnVzY2UuIFV0IGVuaW0gYmxhbmRpdCB2b2x1dHBhdCBtYWVjZW5hcyB2b2x1dHBhdCBibGFuZGl0IGFsaXF1YW0gZXRpYW0gZXJhdC4gTWFzc2EgaWQgbmVxdWUgYWxpcXVhbSB2ZXN0aWJ1bHVtLiBWaXRhZSB1bHRyaWNpZXMgbGVvIGludGVnZXIgbWFsZXN1YWRhIG51bmMgdmVsIHJpc3VzIGNvbW1vZG8uIFVybmEgbW9sZXN0aWUgYXQgZWxlbWVudHVtIGV1IGZhY2lsaXNpcyBzZWQgb2RpbyBtb3JiaSBxdWlzLiBCaWJlbmR1bSBhcmN1IHZpdGFlIGVsZW1lbnR1bSBjdXJhYml0dXIgdml0YWUgbnVuYyBzZWQgdmVsaXQgZGlnbmlzc2ltLiBUcmlzdGlxdWUgc2VuZWN0dXMgZXQgbmV0dXMgZXQuIExhY3VzIGx1Y3R1cyBhY2N1bXNhbiB0b3J0b3IgcG9zdWVyZSBhYyB1dCBjb25zZXF1YXQgc2VtcGVyLiBCaWJlbmR1bSBlbmltIGZhY2lsaXNpcyBncmF2aWRhIG5lcXVlIGNvbnZhbGxpcyBhLiBQaGFyZXRyYSBtYXNzYSBtYXNzYSB1bHRyaWNpZXMgbWkgcXVpcyBoZW5kcmVyaXQgZG9sb3IgbWFnbmEgZWdldC4gQ29uc2VxdWF0IGludGVyZHVtIHZhcml1cyBzaXQgYW1ldCBtYXR0aXMgdnVscHV0YXRlLjwvcD5cbiAgICAgIDxwPkRpcyBwYXJ0dXJpZW50IG1vbnRlcyBuYXNjZXR1ciByaWRpY3VsdXMuIE5vbiBibGFuZGl0IG1hc3NhIGVuaW0gbmVjIGR1aS4gU2FnaXR0aXMgZXUgdm9sdXRwYXQgb2RpbyBmYWNpbGlzaXMgbWF1cmlzLiBRdWFtIHF1aXNxdWUgaWQgZGlhbSB2ZWwgcXVhbSBlbGVtZW50dW0gcHVsdmluYXIuIEVuaW0gdXQgc2VtIHZpdmVycmEgYWxpcXVldCBlZ2V0IHNpdC4gVmVsIG9yY2kgcG9ydGEgbm9uIHB1bHZpbmFyIG5lcXVlIGxhb3JlZXQgc3VzcGVuZGlzc2UgaW50ZXJkdW0gY29uc2VjdGV0dXIuIFZpdGFlIGV0IGxlbyBkdWlzIHV0IGRpYW0uIFZ1bHB1dGF0ZSB1dCBwaGFyZXRyYSBzaXQgYW1ldCBhbGlxdWFtIGlkIGRpYW0gbWFlY2VuYXMgdWx0cmljaWVzLiBOYW0gYWxpcXVhbSBzZW0gZXQgdG9ydG9yIGNvbnNlcXVhdCBpZCBwb3J0YSBuaWJoLiBNYXNzYSBzYXBpZW4gZmF1Y2lidXMgZXQgbW9sZXN0aWUgYWMgZmV1Z2lhdCBzZWQgbGVjdHVzLiBOZXF1ZSBhbGlxdWFtIHZlc3RpYnVsdW0gbW9yYmkgYmxhbmRpdCBjdXJzdXMgcmlzdXMgYXQuIFV0IHNlbSB2aXZlcnJhIGFsaXF1ZXQgZWdldCBzaXQgYW1ldC4gRXQgZWdlc3RhcyBxdWlzIGlwc3VtIHN1c3BlbmRpc3NlIHVsdHJpY2VzIGdyYXZpZGEgZGljdHVtLiBSaXN1cyBmZXVnaWF0IGluIGFudGUgbWV0dXMgZGljdHVtIGF0IHRlbXBvciBjb21tb2RvIHVsbGFtY29ycGVyLiBFdGlhbSB0ZW1wb3Igb3JjaSBldSBsb2JvcnRpcyBlbGVtZW50dW0gbmliaCB0ZWxsdXMgbW9sZXN0aWUuPC9wPlxuICAgICAgPHA+TnVsbGFtIHZlaGljdWxhIGlwc3VtIGEgYXJjdSBjdXJzdXMgdml0YWUgY29uZ3VlIG1hdXJpcy4gUmlzdXMgYXQgdWx0cmljZXMgbWkgdGVtcHVzIGltcGVyZGlldCBudWxsYSBtYWxlc3VhZGEuIExvYm9ydGlzIHNjZWxlcmlzcXVlIGZlcm1lbnR1bSBkdWkgZmF1Y2lidXMgaW4gb3JuYXJlIHF1YW0uIE5hc2NldHVyIHJpZGljdWx1cyBtdXMgbWF1cmlzIHZpdGFlIHVsdHJpY2llcy4gRWdldCBudW5jIGxvYm9ydGlzIG1hdHRpcyBhbGlxdWFtIGZhdWNpYnVzIHB1cnVzIGluIG1hc3NhIHRlbXBvci4gQ3JhcyBvcm5hcmUgYXJjdSBkdWkgdml2YW11cyBhcmN1IGZlbGlzIGJpYmVuZHVtLiBUZWxsdXMgcGVsbGVudGVzcXVlIGV1IHRpbmNpZHVudCB0b3J0b3IgYWxpcXVhbSBudWxsYSBmYWNpbGlzaSBjcmFzIGZlcm1lbnR1bS4gSXBzdW0gZmF1Y2lidXMgdml0YWUgYWxpcXVldCBuZWMgdWxsYW1jb3JwZXIgc2l0IGFtZXQgcmlzdXMgbnVsbGFtLiBOZWMgdWx0cmljZXMgZHVpIHNhcGllbiBlZ2V0IG1pIHByb2luIHNlZCBsaWJlcm8gZW5pbS4gTWF1cmlzIHNpdCBhbWV0IG1hc3NhIHZpdGFlIHRvcnRvciBjb25kaW1lbnR1bS4gVml2ZXJyYSBhZGlwaXNjaW5nIGF0IGluIHRlbGx1cyBpbnRlZ2VyIGZldWdpYXQuIFNpdCBhbWV0IGRpY3R1bSBzaXQgYW1ldCBqdXN0byBkb25lYy4gUHJldGl1bSB2dWxwdXRhdGUgc2FwaWVuIG5lYyBzYWdpdHRpcyBhbGlxdWFtIG1hbGVzdWFkYSBiaWJlbmR1bS48L3A+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGgxIHtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICB9XG4gICAgICAgIC5jb250ZW50LWNvbnRhaW5lciB7XG4gICAgICAgICAgcGFkZGluZzogMWVtO1xuICAgICAgICAgIG1heC13aWR0aDogNzIwcHg7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNldHRpbmdzXG4iXX0= */\n/*@ sourceURL=/Users/dan/Documents/Repositories/material-next-template/pages/settings.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Settings);

/***/ }),

/***/ 4:
/*!*****************************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2Fsettings&absolutePagePath=%2FUsers%2Fdan%2FDocuments%2FRepositories%2Fmaterial-next-template%2Fpages%2Fsettings.js ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2Fsettings&absolutePagePath=%2FUsers%2Fdan%2FDocuments%2FRepositories%2Fmaterial-next-template%2Fpages%2Fsettings.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fsettings&absolutePagePath=%2FUsers%2Fdan%2FDocuments%2FRepositories%2Fmaterial-next-template%2Fpages%2Fsettings.js!./");


/***/ }),

/***/ "dll-reference dll_c8f2bf67145e2f978a34":
/*!*******************************************!*\
  !*** external "dll_c8f2bf67145e2f978a34" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_c8f2bf67145e2f978a34;

/***/ })

},[[4,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=settings.js.map