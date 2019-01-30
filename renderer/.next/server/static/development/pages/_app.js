module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/AppLayout.js":
/*!*********************************!*\
  !*** ./components/AppLayout.js ***!
  \*********************************/
/*! exports provided: AppLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppLayout", function() { return AppLayout; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/error */ "next/error");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nprogress */ "nprogress");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// Module imports




nprogress__WEBPACK_IMPORTED_MODULE_2___default.a.configure({
  showSpinner: false
});
next_router__WEBPACK_IMPORTED_MODULE_4___default.a.events.on('routeChangeStart', function () {
  return nprogress__WEBPACK_IMPORTED_MODULE_2___default.a.start();
});
next_router__WEBPACK_IMPORTED_MODULE_4___default.a.events.on('routeChangeStart', function () {
  return nprogress__WEBPACK_IMPORTED_MODULE_2___default.a.done();
});
next_router__WEBPACK_IMPORTED_MODULE_4___default.a.events.on('routeChangeComplete', function () {
  return nprogress__WEBPACK_IMPORTED_MODULE_2___default.a.done();
});

var AppLayout =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AppLayout, _React$Component);

  function AppLayout() {
    _classCallCheck(this, AppLayout);

    return _possibleConstructorReturn(this, _getPrototypeOf(AppLayout).apply(this, arguments));
  }

  _createClass(AppLayout, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps,
          statusCode = _this$props.statusCode;
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        role: "application"
      }, statusCode === 200 && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Component, pageProps), statusCode !== 200 && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("main", {
        className: "fade-in page error"
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "page-content"
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(next_error__WEBPACK_IMPORTED_MODULE_1___default.a, {
        statusCode: statusCode
      }))));
    }
  }], [{
    key: "getInitialProps",

    /***************************************************************************\
      Public Methods
    \***************************************************************************/
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var Component, ctx, asPath, isServer, query, pageProps, statusCode;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Component = _ref.Component, ctx = _ref.ctx;
                asPath = ctx.asPath, isServer = ctx.isServer, query = ctx.query;
                pageProps = {};

                if (!Component.getInitialProps) {
                  _context.next = 7;
                  break;
                }

                _context.next = 6;
                return Component.getInitialProps(ctx);

              case 6:
                pageProps = _context.sent;

              case 7:
                statusCode = 200;

                if (ctx.res) {
                  statusCode = ctx.res.statusCode;
                }

                return _context.abrupt("return", {
                  statusCode: statusCode,
                  pageProps: _objectSpread({
                    asPath: asPath,
                    isServer: isServer,
                    query: query
                  }, pageProps)
                });

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return AppLayout;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);



/***/ }),

/***/ "./components/FollowerGoal.js":
/*!************************************!*\
  !*** ./components/FollowerGoal.js ***!
  \************************************/
/*! exports provided: FollowerGoal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowerGoal", function() { return FollowerGoal; });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var left_pad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! left-pad */ "left-pad");
/* harmony import */ var left_pad__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(left_pad__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! . */ "./components/index.js");
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Module imports



 // Component imports

 // Component constants

var mapStateToProps = function mapStateToProps(_ref) {
  var followers = _ref.followers;
  return {
    followers: followers
  };
};

var twitchClientId = 'qmozd17tqggbpbt1ig6x1tm4hsg96q';
var FollowerGoal = (_dec = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps), _dec(_class =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FollowerGoal, _React$Component);

  function FollowerGoal() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, FollowerGoal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(FollowerGoal)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      followerGoal: 50
      /***************************************************************************\
        Public Methods
      \***************************************************************************/

    });

    return _this;
  }

  _createClass(FollowerGoal, [{
    key: "render",
    value: function render() {
      var followers = this.props.followers;
      var followerGoal = this.state.followerGoal;
      var followerCount = Object.keys(followers).length;
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "stream-follower-goal"
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("header", null, "Follower Goal"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(___WEBPACK_IMPORTED_MODULE_4__["ProgressBar"], {
        max: followerGoal,
        value: followerCount
      }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "follower-counts"
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
        className: "follower-count"
      }, left_pad__WEBPACK_IMPORTED_MODULE_2___default()(followerCount, 6, '0')), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
        className: "follower-count-goal"
      }, left_pad__WEBPACK_IMPORTED_MODULE_2___default()(followerGoal, 6, '0'))));
    }
  }]);

  return FollowerGoal;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component)) || _class);


/***/ }),

/***/ "./components/ProgressBar.js":
/*!***********************************!*\
  !*** ./components/ProgressBar.js ***!
  \***********************************/
/*! exports provided: ProgressBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressBar", function() { return ProgressBar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid/v4 */ "uuid/v4");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uuid_v4__WEBPACK_IMPORTED_MODULE_1__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// Module imports



var ProgressBar = function ProgressBar(_ref) {
  var _ref$max = _ref.max,
      max = _ref$max === void 0 ? 100 : _ref$max,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? 0 : _ref$value;
  var currentCompletion = parseInt(value) / parseInt(max);
  var padding = 4;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(uuid_v4__WEBPACK_IMPORTED_MODULE_1___default()()),
      _useState2 = _slicedToArray(_useState, 1),
      id = _useState2[0];

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: "progress-bar",
    "data-max": max,
    "data-value": value,
    height: "48px",
    style: {
      verticalAlign: 'initial'
    },
    width: "100%"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
    alignmentBaseline: "middle",
    className: "percentage-complete",
    dy: "50%",
    id: "".concat(id, "-progress-value"),
    x: "".concat(padding, "px"),
    y: "0"
  }, currentCompletion * 100, "%"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    fill: "#0093c7",
    id: "".concat(id, "-progress-value-bar"),
    style: {
      height: "calc(100% - ".concat(padding * 2, "px)"),
      width: "calc(".concat(currentCompletion * 100, "% - ").concat(padding * 2, "px)")
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("clipPath", {
    id: "".concat(id, "-progress-value-bar-clip-path")
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
    href: "#".concat(id, "-progress-value-bar")
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    fill: "white",
    height: "100%",
    width: "100%"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    style: {
      height: "calc(100% - ".concat(padding * 2, "px)"),
      width: '100%'
    },
    transform: "translate(".concat(padding, ", ").concat(padding, ")")
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
    fill: "black",
    href: "#".concat(id, "-progress-value")
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
    href: "#".concat(id, "-progress-value-bar")
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
    clipPath: "url(#".concat(id, "-progress-value-bar-clip-path)"),
    fill: "white",
    href: "#".concat(id, "-progress-value")
  })));
};



/***/ }),

/***/ "./components/StreamEvents.js":
/*!************************************!*\
  !*** ./components/StreamEvents.js ***!
  \************************************/
/*! exports provided: default, StreamEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StreamEvents", function() { return StreamEvents; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _StreamEventsComponents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StreamEventsComponents */ "./components/StreamEventsComponents/index.js");
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Module imports



 // Component imports

 // Component constants

var mapStateToProps = function mapStateToProps(_ref) {
  var currentStream = _ref.currentStream,
      events = _ref.events;
  return {
    currentStream: currentStream,
    events: events
  };
};

var twitchClientId = 'qmozd17tqggbpbt1ig6x1tm4hsg96q';
var twitchRedirectURI = encodeURI('https://ww09l72vl.codesandbox.io');
var StreamEvents = (_dec = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps), _dec(_class =
/*#__PURE__*/
function (_React$Component) {
  _inherits(StreamEvents, _React$Component);

  function StreamEvents() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, StreamEvents);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(StreamEvents)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "eventPollingIntervalID", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "queuedEvents", []);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      events: [],
      followers: []
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "twitchAccessToken", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "twitchUserID", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_startEventPolling", function () {
      _this.eventPollingIntervalID = setInterval(function () {
        if (_this.queuedEvents.length) {
          _this.setState(function (_ref2) {
            var events = _ref2.events;
            return {
              events: [].concat(_toConsumableArray(events), [_this.queuedEvents.shift()])
            };
          });
        }
      }, 1000);
    });

    return _this;
  }

  _createClass(StreamEvents, [{
    key: "componentDidMount",

    /***************************************************************************\
      Public Methods
    \***************************************************************************/
    value: function componentDidMount() {
      this._startEventPolling();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(previousProps) {
      var currentStream = this.props.currentStream;

      if (currentStream) {
        var createdAt = currentStream.created_at;
        var filteredEvents = this.props.events.filter(function (event) {
          return event.createdAt > createdAt;
        });
        var newEvents = [];
        newEvents = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["difference"])(filteredEvents, previousProps.events);

        if (newEvents.length) {
          this.queuedEvents = this.queuedEvents.concat(newEvents);
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.eventPollingIntervalID);
    }
  }, {
    key: "render",
    value: function render() {
      var events = this.state.events;
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("ol", {
        className: "nes-list stream-events"
      }, events.map(function (event) {
        return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", {
          "data-type": event.type
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
          className: "is-dark is-rounded nes-container"
        }, event.type === 'bits' && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_StreamEventsComponents__WEBPACK_IMPORTED_MODULE_4__["StreamEventBits"], {
          event: event
        }), event.type === 'follow' && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_StreamEventsComponents__WEBPACK_IMPORTED_MODULE_4__["StreamEventFollow"], {
          event: event
        }), event.type === 'host' && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_StreamEventsComponents__WEBPACK_IMPORTED_MODULE_4__["StreamEventHost"], {
          event: event
        }), event.type === 'raid' && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_StreamEventsComponents__WEBPACK_IMPORTED_MODULE_4__["StreamEventRaid"], {
          event: event
        })));
      }));
    }
  }]);

  return StreamEvents;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component)) || _class);
/* harmony default export */ __webpack_exports__["default"] = (StreamEvents);


/***/ }),

/***/ "./components/StreamEventsComponents/Bits.js":
/*!***************************************************!*\
  !*** ./components/StreamEventsComponents/Bits.js ***!
  \***************************************************/
/*! exports provided: StreamEventBits */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StreamEventBits", function() { return StreamEventBits; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var StreamEventBits = function StreamEventBits(_ref) {
  var event = _ref.event;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "name"
  }, event.user.display_name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "message"
  }, event.value, " Bits"));
};



/***/ }),

/***/ "./components/StreamEventsComponents/Follow.js":
/*!*****************************************************!*\
  !*** ./components/StreamEventsComponents/Follow.js ***!
  \*****************************************************/
/*! exports provided: StreamEventFollow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StreamEventFollow", function() { return StreamEventFollow; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var StreamEventFollow = function StreamEventFollow(_ref) {
  var event = _ref.event;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "name"
  }, event.user.display_name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "message"
  }, "Followed"));
};



/***/ }),

/***/ "./components/StreamEventsComponents/Host.js":
/*!***************************************************!*\
  !*** ./components/StreamEventsComponents/Host.js ***!
  \***************************************************/
/*! exports provided: StreamEventHost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StreamEventHost", function() { return StreamEventHost; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var StreamEventHost = function StreamEventHost(_ref) {
  var event = _ref.event;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "name"
  }, event.user.display_name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "message"
  }, "Host(", event.value, ")"));
};



/***/ }),

/***/ "./components/StreamEventsComponents/Raid.js":
/*!***************************************************!*\
  !*** ./components/StreamEventsComponents/Raid.js ***!
  \***************************************************/
/*! exports provided: StreamEventRaid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StreamEventRaid", function() { return StreamEventRaid; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var StreamEventRaid = function StreamEventRaid(_ref) {
  var event = _ref.event;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "name"
  }, event.user.display_name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "message"
  }, "Raid(", event.value, ")"));
};



/***/ }),

/***/ "./components/StreamEventsComponents/index.js":
/*!****************************************************!*\
  !*** ./components/StreamEventsComponents/index.js ***!
  \****************************************************/
/*! exports provided: StreamEventBits, StreamEventFollow, StreamEventHost, StreamEventRaid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Bits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Bits */ "./components/StreamEventsComponents/Bits.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StreamEventBits", function() { return _Bits__WEBPACK_IMPORTED_MODULE_0__["StreamEventBits"]; });

/* harmony import */ var _Follow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Follow */ "./components/StreamEventsComponents/Follow.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StreamEventFollow", function() { return _Follow__WEBPACK_IMPORTED_MODULE_1__["StreamEventFollow"]; });

/* harmony import */ var _Host__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Host */ "./components/StreamEventsComponents/Host.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StreamEventHost", function() { return _Host__WEBPACK_IMPORTED_MODULE_2__["StreamEventHost"]; });

/* harmony import */ var _Raid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Raid */ "./components/StreamEventsComponents/Raid.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StreamEventRaid", function() { return _Raid__WEBPACK_IMPORTED_MODULE_3__["StreamEventRaid"]; });






/***/ }),

/***/ "./components/index.js":
/*!*****************************!*\
  !*** ./components/index.js ***!
  \*****************************/
/*! exports provided: AppLayout, FollowerGoal, ProgressBar, StreamEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppLayout */ "./components/AppLayout.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppLayout", function() { return _AppLayout__WEBPACK_IMPORTED_MODULE_0__["AppLayout"]; });

/* harmony import */ var _FollowerGoal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FollowerGoal */ "./components/FollowerGoal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FollowerGoal", function() { return _FollowerGoal__WEBPACK_IMPORTED_MODULE_1__["FollowerGoal"]; });

/* harmony import */ var _ProgressBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProgressBar */ "./components/ProgressBar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProgressBar", function() { return _ProgressBar__WEBPACK_IMPORTED_MODULE_2__["ProgressBar"]; });

/* harmony import */ var _StreamEvents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StreamEvents */ "./components/StreamEvents.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StreamEvents", function() { return _StreamEvents__WEBPACK_IMPORTED_MODULE_3__["StreamEvents"]; });






/***/ }),

/***/ "./helpers/getTwitchFollowers.js":
/*!***************************************!*\
  !*** ./helpers/getTwitchFollowers.js ***!
  \***************************************/
/*! exports provided: getTwitchFollowers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTwitchFollowers", function() { return getTwitchFollowers; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/config */ "next/config");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_twitchAPI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/twitchAPI */ "./services/twitchAPI.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// Module imports
 // Component imports

 // Constants

var _getConfig = next_config__WEBPACK_IMPORTED_MODULE_1___default()(),
    publicRuntimeConfig = _getConfig.publicRuntimeConfig;

var twitchUserID = '72632519';

function getTwitchFollowers(_x) {
  return _getTwitchFollowers.apply(this, arguments);
}

function _getTwitchFollowers() {
  _getTwitchFollowers = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(followers) {
    var newFollowers,
        cursor,
        shouldContinue,
        response,
        _iteratorNormalCompletion,
        _didIteratorError,
        _iteratorError,
        _iterator,
        _step,
        follower,
        _args = arguments;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            newFollowers = _args.length > 1 && _args[1] !== undefined ? _args[1] : [];
            cursor = _args.length > 2 && _args[2] !== undefined ? _args[2] : null;
            shouldContinue = true;
            _context.next = 5;
            return _services_twitchAPI__WEBPACK_IMPORTED_MODULE_2__["default"].get("/kraken/channels/".concat(twitchUserID, "/follows").concat(cursor ? "?cursor=".concat(cursor) : ''));

          case 5:
            response = _context.sent;
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context.prev = 9;

            for (_iterator = response.data.follows[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              follower = _step.value;

              if (followers[follower.user._id]) {
                shouldContinue = false;
              } else {
                newFollowers.push(follower);
              }
            }

            _context.next = 17;
            break;

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](9);
            _didIteratorError = true;
            _iteratorError = _context.t0;

          case 17:
            _context.prev = 17;
            _context.prev = 18;

            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }

          case 20:
            _context.prev = 20;

            if (!_didIteratorError) {
              _context.next = 23;
              break;
            }

            throw _iteratorError;

          case 23:
            return _context.finish(20);

          case 24:
            return _context.finish(17);

          case 25:
            if (!(shouldContinue && newFollowers.length < response.data._total)) {
              _context.next = 28;
              break;
            }

            _context.next = 28;
            return getTwitchFollowers(followers, newFollowers, response.data._cursor);

          case 28:
            return _context.abrupt("return", newFollowers);

          case 29:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[9, 13, 17, 25], [18,, 20, 24]]);
  }));
  return _getTwitchFollowers.apply(this, arguments);
}



/***/ }),

/***/ "./helpers/index.js":
/*!**************************!*\
  !*** ./helpers/index.js ***!
  \**************************/
/*! exports provided: getTwitchFollowers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getTwitchFollowers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getTwitchFollowers */ "./helpers/getTwitchFollowers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTwitchFollowers", function() { return _getTwitchFollowers__WEBPACK_IMPORTED_MODULE_0__["getTwitchFollowers"]; });



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/app */ "next/app");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! localforage */ "localforage");
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(localforage__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store */ "./store.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components */ "./components/index.js");
/* harmony import */ var _scss_reset_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../scss/reset.scss */ "./scss/reset.scss");
/* harmony import */ var _scss_reset_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_scss_reset_scss__WEBPACK_IMPORTED_MODULE_8__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// Module imports




 // Component imports


 // Style imports

 // import '../scss/libraries.scss'
// import '../scss/app.scss'

var NextApp =
/*#__PURE__*/
function (_App) {
  _inherits(NextApp, _App);

  function NextApp(props) {
    var _this;

    _classCallCheck(this, NextApp);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NextApp).call(this, props));
    localforage__WEBPACK_IMPORTED_MODULE_5___default.a.config({
      name: 'TrezyCodes Stream Overlay',
      storeName: 'webStore'
    });
    return _this;
  }

  _createClass(NextApp, [{
    key: "render",
    value: function render() {
      var store = this.props.store;
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_2__["Container"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_1__["Provider"], {
        store: store
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_7__["AppLayout"], this.props)));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(appProps) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", _components__WEBPACK_IMPORTED_MODULE_7__["AppLayout"].getInitialProps(appProps));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return NextApp;
}(next_app__WEBPACK_IMPORTED_MODULE_2___default.a);

/* harmony default export */ __webpack_exports__["default"] = (next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4___default()(_store__WEBPACK_IMPORTED_MODULE_6__["initStore"])(NextApp));

/***/ }),

/***/ "./scss/reset.scss":
/*!*************************!*\
  !*** ./scss/reset.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./services/twitchAPI.js":
/*!*******************************!*\
  !*** ./services/twitchAPI.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/config */ "next/config");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_1__);
// Module imports

 // Component constants

var _getConfig = next_config__WEBPACK_IMPORTED_MODULE_1___default()(),
    publicRuntimeConfig = _getConfig.publicRuntimeConfig;

var twitchAPI = publicRuntimeConfig.apis.twitch;
/* harmony default export */ __webpack_exports__["default"] = (axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: twitchAPI.url,
  headers: {
    Accept: 'application/vnd.twitchtv.v5+json',
    'Client-ID': twitchAPI.clientID
  }
}));

/***/ }),

/***/ "./store.js":
/*!******************!*\
  !*** ./store.js ***!
  \******************/
/*! exports provided: actions, initStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initStore", function() { return initStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_initialState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/initialState */ "./store/initialState.js");
/* harmony import */ var _store_reducers_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store/reducers/index */ "./store/reducers/index.js");
/* harmony import */ var _store_actions_followers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store/actions/followers */ "./store/actions/followers.js");
/* harmony import */ var _store_actions_streams__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store/actions/streams */ "./store/actions/streams.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Module imports


 // Component imports



/* actions */



var actions = _objectSpread({}, _store_actions_followers__WEBPACK_IMPORTED_MODULE_5__, _store_actions_streams__WEBPACK_IMPORTED_MODULE_6__);
var initStore = function initStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _store_initialState__WEBPACK_IMPORTED_MODULE_3__["default"];
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_store_reducers_index__WEBPACK_IMPORTED_MODULE_4__["default"], initialState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_2___default.a)));
};

/***/ }),

/***/ "./store/actionTypes.js":
/*!******************************!*\
  !*** ./store/actionTypes.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  GET_FOLLOWERS: 'GET_FOLLOWERS',
  GET_CURRENT_STREAM: 'GET_CURRENT_STREAM'
});

/***/ }),

/***/ "./store/actions/followers.js":
/*!************************************!*\
  !*** ./store/actions/followers.js ***!
  \************************************/
/*! exports provided: getFollowers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFollowers", function() { return getFollowers; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers */ "./helpers/index.js");
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actionTypes */ "./store/actionTypes.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// Module imports

 // Component imports



var getFollowers = function getFollowers() {
  return (
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch, getState) {
        var _getState, followers, newFollows, newFollowers, success;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _getState = getState(), followers = _getState.followers;
                newFollows = [];
                newFollowers = null;
                success = false;
                _context.prev = 4;
                _context.next = 7;
                return Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["getTwitchFollowers"])(followers);

              case 7:
                newFollowers = _context.sent;
                success = true;
                _context.next = 14;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](4);
                console.error(_context.t0);

              case 14:
                newFollowers.reverse();
                dispatch({
                  payload: {
                    newFollowers: newFollowers
                  },
                  status: success ? 'success' : 'error',
                  type: _actionTypes__WEBPACK_IMPORTED_MODULE_4__["default"].GET_FOLLOWERS
                });

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[4, 11]]);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }()
  );
};

/***/ }),

/***/ "./store/actions/streams.js":
/*!**********************************!*\
  !*** ./store/actions/streams.js ***!
  \**********************************/
/*! exports provided: getCurrentStream */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentStream", function() { return getCurrentStream; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actionTypes */ "./store/actionTypes.js");
/* harmony import */ var _services_twitchAPI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/twitchAPI */ "./services/twitchAPI.js");


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// Module imports

 // Component imports


 // Component constants

var twitchUserID = '72632519';
var getCurrentStream = function getCurrentStream() {
  return (
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch) {
        var response, success;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                response = null;
                success = false;
                _context.prev = 2;
                _context.next = 5;
                return _services_twitchAPI__WEBPACK_IMPORTED_MODULE_4__["default"].get("/kraken/streams/".concat(twitchUserID));

              case 5:
                response = _context.sent;
                success = true;
                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](2);
                console.error(_context.t0);

              case 12:
                dispatch({
                  payload: _objectSpread({}, response.data.stream),
                  status: success ? 'success' : 'error',
                  type: _actionTypes__WEBPACK_IMPORTED_MODULE_3__["default"].GET_CURRENT_STREAM
                });

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 9]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()
  );
};

/***/ }),

/***/ "./store/initialState.js":
/*!*******************************!*\
  !*** ./store/initialState.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  currentStream: {},
  events: [],
  followers: {}
});

/***/ }),

/***/ "./store/reducers/currentStream.js":
/*!*****************************************!*\
  !*** ./store/reducers/currentStream.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes */ "./store/actionTypes.js");
/* harmony import */ var _initialState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../initialState */ "./store/initialState.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Component imports


/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _initialState__WEBPACK_IMPORTED_MODULE_1__["default"].currentStream;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var payload = action.payload,
      status = action.status,
      type = action.type;

  var newState = _objectSpread({}, state);

  switch (type) {
    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_CURRENT_STREAM:
      if (status === 'success') {
        payload.created_at = new Date(payload.created_at);
        newState = payload;
      }

      return newState;

    default:
      return newState;
  }
});

/***/ }),

/***/ "./store/reducers/events.js":
/*!**********************************!*\
  !*** ./store/reducers/events.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes */ "./store/actionTypes.js");
/* harmony import */ var _initialState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../initialState */ "./store/initialState.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

// Component imports


/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _initialState__WEBPACK_IMPORTED_MODULE_1__["default"].events;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var payload = action.payload,
      status = action.status,
      type = action.type;

  var newState = _toConsumableArray(state);

  switch (type) {
    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_FOLLOWERS:
      if (status === 'success') {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = payload.newFollowers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var follower = _step.value;
            follower.created_at = new Date(follower.created_at);
            newState.push({
              createdAt: follower.created_at,
              type: 'follow',
              user: follower.user
            });
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }

      return newState;

    default:
      return newState;
  }
});

/***/ }),

/***/ "./store/reducers/followers.js":
/*!*************************************!*\
  !*** ./store/reducers/followers.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes */ "./store/actionTypes.js");
/* harmony import */ var _initialState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../initialState */ "./store/initialState.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Component imports


/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _initialState__WEBPACK_IMPORTED_MODULE_1__["default"].followers;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var payload = action.payload,
      status = action.status,
      type = action.type;

  var newState = _objectSpread({}, state);

  switch (type) {
    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].GET_FOLLOWERS:
      if (status === 'success') {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = payload.newFollowers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var follower = _step.value;
            newState[follower.user._id] = follower;
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }

      return newState;

    default:
      return newState;
  }
});

/***/ }),

/***/ "./store/reducers/index.js":
/*!*********************************!*\
  !*** ./store/reducers/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _currentStream__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./currentStream */ "./store/reducers/currentStream.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events */ "./store/reducers/events.js");
/* harmony import */ var _followers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./followers */ "./store/reducers/followers.js");




/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  currentStream: _currentStream__WEBPACK_IMPORTED_MODULE_1__["default"],
  events: _events__WEBPACK_IMPORTED_MODULE_2__["default"],
  followers: _followers__WEBPACK_IMPORTED_MODULE_3__["default"]
}));

/***/ }),

/***/ 0:
/*!*****************************!*\
  !*** multi ./pages/_app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "left-pad":
/*!***************************!*\
  !*** external "left-pad" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("left-pad");

/***/ }),

/***/ "localforage":
/*!******************************!*\
  !*** external "localforage" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("localforage");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/app":
/*!***************************!*\
  !*** external "next/app" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/app");

/***/ }),

/***/ "next/config":
/*!******************************!*\
  !*** external "next/config" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/config");

/***/ }),

/***/ "next/error":
/*!*****************************!*\
  !*** external "next/error" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/error");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "uuid/v4":
/*!**************************!*\
  !*** external "uuid/v4" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("uuid/v4");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map