var Client =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/client/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/form.scss":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/form.scss ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".form-section {\n  position: relative;\n  background-color: #fff;\n  border-radius: 6px;\n  padding: 40px;\n  box-shadow: 0px 0px 6px 0px #ccc;\n  transition: all 0.25s ease-in; }\n  .form-section form {\n    display: flex; }\n    .form-section form input {\n      border: 1px solid #e4e4e4;\n      padding: 5px 5px;\n      width: 100%;\n      line-height: 16px;\n      margin: 10px 0;\n      font-size: 2vh; }\n      .form-section form input:focus {\n        outline: none; }\n    .form-section form .button {\n      width: 20%;\n      border: none;\n      background-color: #d4ecff; }\n  .form-section #results {\n    margin-top: 12px; }\n    .form-section #results h6 {\n      margin: 4px;\n      font-size: 2.2ch;\n      text-align: center; }\n      .form-section #results h6 .close {\n        color: #af5656;\n        cursor: pointer;\n        font-weight: 600; }\n    .form-section #results ul {\n      width: 75%;\n      margin: 4px;\n      margin: auto;\n      border: 1px solid #e4e4e4;\n      border-radius: 6px;\n      padding: 4px; }\n      .form-section #results ul li {\n        display: flex;\n        justify-content: space-between;\n        border-bottom: 1px solid #e4e4e4;\n        padding: 8px; }\n        .form-section #results ul li:last-child {\n          border: none; }\n", "",{"version":3,"sources":["webpack://./src/client/styles/form.scss"],"names":[],"mappings":"AAMA;EACI,kBAAkB;EAClB,sBAAsB;EAEtB,kBATkB;EAUlB,aAAa;EACb,gCAAgC;EAChC,6BAA6B,EAAA;EAPjC;IAUQ,aAAa,EAAA;IAVrB;MAYY,yBAhBa;MAiBb,gBAfU;MAgBV,WAAW;MACX,iBAAiB;MACjB,cAAc;MACd,cAAc,EAAA;MAjB1B;QAmBgB,aAAa,EAAA;IAnB7B;MAuBY,UAAU;MACV,YAAY;MACZ,yBAAyB,EAAA;EAzBrC;IA8BQ,gBAAgB,EAAA;IA9BxB;MAgCY,WAAW;MACX,gBAAgB;MAChB,kBAAkB,EAAA;MAlC9B;QAoCgB,cAAuB;QACvB,eAAe;QACf,gBAAgB,EAAA;IAtChC;MA0CY,UAAU;MACV,WAAW;MACX,YAAY;MACZ,yBAjDa;MAkDb,kBAnDU;MAoDV,YAAY,EAAA;MA/CxB;QAiDgB,aAAa;QACb,8BAA8B;QAC9B,gCAvDS;QAwDT,YAAY,EAAA;QApD5B;UAsDoB,YACJ,EAAA","sourcesContent":["$formBorderWeight: 1px;\n$formBorderRadius: 6px;\n$formBorderColor: #e4e4e4;\n\n$inputPadding: 5px 5px;\n\n.form-section{\n    position: relative;\n    background-color: #fff;\n    // border: $formBorderWeight solid $formBorderColor;\n    border-radius: $formBorderRadius;\n    padding: 40px;\n    box-shadow: 0px 0px 6px 0px #ccc;\n    transition: all 0.25s ease-in;\n\n    form {\n        display: flex;\n        input {\n            border: 1px solid $formBorderColor;\n            padding: $inputPadding;\n            width: 100%;\n            line-height: 16px;\n            margin: 10px 0;\n            font-size: 2vh;\n            &:focus{\n                outline: none;\n            }\n        }\n        .button {\n            width: 20%;\n            border: none;\n            background-color: #d4ecff;\n        }\n    }\n\n    #results {\n        margin-top: 12px;\n        h6 {\n            margin: 4px;\n            font-size: 2.2ch;\n            text-align: center;\n            .close {\n                color: rgb(175, 86, 86);\n                cursor: pointer;\n                font-weight: 600;\n            }\n        }\n        ul {\n            width: 75%;\n            margin: 4px;\n            margin: auto;\n            border: 1px solid $formBorderColor;\n            border-radius: $formBorderRadius;\n            padding: 4px;\n            li {\n                display: flex;\n                justify-content: space-between;\n                border-bottom: 1px solid $formBorderColor;\n                padding: 8px;\n                &:last-child{\n                    border: none\n                }\n            }\n        }\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/layout.scss":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/layout.scss ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;600&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".gradient {\n  background: #f0f0f0;\n  background: -moz-linear-gradient(39deg, #f0f0f0 0%, #ffffff 100%);\n  background: -webkit-linear-gradient(39deg, #f0f0f0 0%, #ffffff 100%);\n  background: linear-gradient(39deg, #f0f0f0 0%, #ffffff 100%);\n  /* IE6-9 */\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e700ce', endColorstr='#ff536d',GradientType=1 ); }\n\n* {\n  font-family: 'Open Sans', sans-serif; }\n\nbody {\n  flex-direction: column;\n  justify-content: center;\n  min-height: 100vh; }\n\nheader {\n  display: flex;\n  justify-content: space-between;\n  padding: 10px 40px;\n  font-family: 'Open Sans', sans-serif;\n  font-weight: 600;\n  font-size: 2vh; }\n  header a {\n    text-decoration: none;\n    color: #2c2c2c ff; }\n\nmain {\n  display: flex;\n  flex-wrap: wrap;\n  margin: 25vh 0px;\n  align-self: center;\n  justify-content: space-evenly; }\n  main section {\n    margin: 16px;\n    align-self: center; }\n    @media (min-width: 768px) {\n      main section {\n        flex: 0 1 80%; } }\n    @media (min-width: 992px) {\n      main section {\n        flex: 0 1 40%; } }\n    main section:first-child {\n      font-size: 48px; }\n\nfooter {\n  font-family: 'Open Sans', sans-serif;\n  text-align: center;\n  font-size: 1.8vh; }\n  footer a {\n    text-decoration: none;\n    color: #29465d;\n    font-weight: 600; }\n", "",{"version":3,"sources":["webpack://./src/client/styles/layout.scss"],"names":[],"mappings":"AA4BA;EACI,mBALa;EAMb,iEAA2E;EAC3E,oEAA6E;EAC7E,4DAAqE;EACpE,UAAA;EACD,mHAAmH,EAAA;;AAGvH;EACI,oCAAoC,EAAA;;AAGxC;EACI,sBAAsB;EACtB,uBAAuB;EACvB,iBAAiB,EAAA;;AAGrB;EACI,aAAa;EACb,8BAA8B;EAC9B,kBAAkB;EAClB,oCAAoC;EACpC,gBAAgB;EAChB,cAAc,EAAA;EANlB;IASQ,qBAAqB;IACrB,iBAAwB,EAAA;;AAIhC;EACI,aAAa;EACb,eAAe;EACf,gBAAgB;EAChB,kBAAkB;EAClB,6BAA6B,EAAA;EALjC;IAcQ,YAAY;IACZ,kBAAkB,EAAA;IAtEpB;MAuDN;QASY,aAAa,EAAA,EAUpB;IAtEC;MAmDN;QAYY,aAAa,EAAA,EAOpB;IAnBL;MAiBY,eAAe,EAAA;;AAM3B;EACI,oCAAoC;EACpC,kBAAkB;EAClB,gBAAgB,EAAA;EAHpB;IAKQ,qBAAqB;IACrB,cAAsB;IACtB,gBAAgB,EAAA","sourcesContent":["@mixin breakpoint($class) {\n    @if $class == xs {\n      @media (max-width: 767px) { @content; }\n    }\n   \n    @else if $class == sm {\n      @media (min-width: 768px) { @content; }\n    }\n   \n    @else if $class == md {\n      @media (min-width: 992px) { @content; }\n    }\n   \n    @else if $class == lg {\n      @media (min-width: 1200px) { @content; }\n    }\n   \n    @else {\n      @warn \"Breakpoint mixin supports: xs, sm, md, lg\";\n    }\n  }\n\n@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;600&display=swap');\n\n$primary: #f0f0f0;\n$secondary: #ffffff;\n$direction: 39deg;\n\n.gradient {\n    background: $primary;\n    background: -moz-linear-gradient($direction,  $primary 0%, $secondary 100%);\n    background: -webkit-linear-gradient($direction,  $primary 0%,$secondary 100%); \n    background: linear-gradient($direction,  $primary 0%,$secondary 100%);\n     /* IE6-9 */\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e700ce', endColorstr='#ff536d',GradientType=1 );\n}\n\n* {\n    font-family: 'Open Sans', sans-serif;\n}\n\nbody {\n    flex-direction: column;\n    justify-content: center;\n    min-height: 100vh;\n}\n\nheader {\n    display: flex;\n    justify-content: space-between;\n    padding: 10px 40px;\n    font-family: 'Open Sans', sans-serif;\n    font-weight: 600;\n    font-size: 2vh;\n\n    a {\n        text-decoration: none;\n        color: rgb(44, 44, 44)ff;\n    }\n}\n\nmain {\n    display: flex;\n    flex-wrap: wrap;\n    margin: 25vh 0px;\n    align-self: center;\n    justify-content: space-evenly;\n\n    section {\n        @include breakpoint(sm) {\n            flex: 0 1 80%;\n        }\n        @include breakpoint(md) {\n            flex: 0 1 40%;\n        }\n        margin: 16px;\n        align-self: center;\n        &:first-child {\n            font-size: 48px;\n        }\n    }\n\n}\n\nfooter {\n    font-family: 'Open Sans', sans-serif;\n    text-align: center;\n    font-size: 1.8vh;\n    a {\n        text-decoration: none;\n        color: rgb(41, 70, 93);\n        font-weight: 600;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/loading.scss":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/loading.scss ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "#loading-modal {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  border-radius: 6px;\n  background-color: rgba(140, 106, 147, 0.12);\n  z-index: 1000;\n  display: none; }\n\nsvg {\n  display: none;\n  z-index: 1001;\n  width: 104px;\n  height: 104px; }\n\n.loading {\n  stroke: palevioletred;\n  stroke-width: 4;\n  stroke-linecap: round;\n  fill: none;\n  transform-origin: 50%;\n  animation: dash 1s ease-in-out infinite alternate, rotate 1s linear infinite; }\n\n.loading-track {\n  fill: none;\n  stroke: rgba(0, 0, 0, 0.2);\n  stroke-width: 4; }\n\n@keyframes dash {\n  0% {\n    stroke-dasharray: 314.159;\n    stroke-dashoffset: 304.73423;\n    transform: rotate(-130deg); }\n  100% {\n    stroke-dasharray: 314.159;\n    stroke-dashoffset: 157.0795;\n    transform: rotate(-110deg); } }\n\n@keyframes rotate {\n  0% {\n    transform: rotate(0deg); }\n  100% {\n    transform: rotate(360deg); } }\n\nsvg {\n  position: absolute;\n  left: calc(50% - 50px);\n  top: calc(0% + 25px); }\n", "",{"version":3,"sources":["webpack://./src/client/styles/loading.scss"],"names":[],"mappings":"AAKA;EACI,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,MAAM;EACN,OAAO;EACP,kBAAkB;EAClB,2CAA2C;EAC3C,aAAa;EACb,aAAa,EAAA;;AAGjB;EACI,aAAa;EACb,aAAa;EACb,YAAyC;EACzC,aAAyC,EAAA;;AAG7C;EACE,qBAAqB;EACrB,eAxBa;EAyBb,qBAAqB;EACrB,UAAU;EACV,qBAAqB;EACrB,4EAEkC,EAAA;;AAIpC;EACE,UAAU;EACV,0BAAsB;EACtB,eArCa,EAAA;;AAwCf;EACE;IACE,yBA5CO;IA6CP,4BA7CO;IA8CP,0BAA0B,EAAA;EAE5B;IACE,yBAjDO;IAkDP,2BAlDO;IAmDP,0BAA0B,EAAA,EAAA;;AAI9B;EACE;IACE,uBAAuB,EAAA;EAEzB;IACE,yBAAyB,EAAA,EAAA;;AAI7B;EACE,kBAAkB;EAClB,sBAAgC;EAChC,oBAAkC,EAAA","sourcesContent":["$radius: 50;\r\n$circumference: $radius * 2 * 3.14159;\r\n$strokeWidth: 4;\r\n$duration: 1s;\r\n\r\n#loading-modal {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    border-radius: 6px;\r\n    background-color: rgba(140, 106, 147, 0.12);\r\n    z-index: 1000;\r\n    display: none;\r\n}\r\n\r\nsvg {\r\n    display: none;\r\n    z-index: 1001;\r\n    width:  ($radius * 2) + $strokeWidth + px;\r\n    height: ($radius * 2) + $strokeWidth + px;\r\n}\r\n\r\n.loading {\r\n  stroke: palevioletred;\r\n  stroke-width: $strokeWidth;\r\n  stroke-linecap: round;\r\n  fill: none;\r\n  transform-origin: 50%;\r\n  animation: \r\n    dash $duration ease-in-out infinite alternate,\r\n    rotate $duration linear infinite;\r\n  // filter: url(#blur);\r\n}\r\n\r\n.loading-track {\r\n  fill: none;\r\n  stroke: rgba(0,0,0,.2);\r\n  stroke-width: $strokeWidth;\r\n}\r\n\r\n@keyframes dash {\r\n  0% {\r\n    stroke-dasharray: $circumference;\r\n    stroke-dashoffset: $circumference * 0.97;\r\n    transform: rotate(-130deg);\r\n  }\r\n  100% {\r\n    stroke-dasharray: $circumference;\r\n    stroke-dashoffset: $circumference * 0.5;\r\n    transform: rotate(-110deg);\r\n  }\r\n}\r\n\r\n@keyframes rotate {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\nsvg {\r\n  position: absolute;\r\n  left: calc(50% - #{$radius}px);\r\n  top: calc(0% + #{$radius / 2}px);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/resets.scss":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/resets.scss ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/* http://meyerweb.com/eric/tools/css/reset/\n   v2.0 | 20110126\n   License: none (public domain)\n*/\n* {\n  box-sizing: border-box; }\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block; }\n\nbody {\n  line-height: 1; }\n\nol, ul {\n  list-style: none; }\n\nblockquote, q {\n  quotes: none; }\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\nul {\n  list-style-type: none; }\n", "",{"version":3,"sources":["webpack://./src/client/styles/resets.scss"],"names":[],"mappings":"AAAA;;;CAGC;AAED;EACI,sBAAsB,EAAA;;AAG1B;;;;;;;;;;;;;EAaC,SAAS;EACT,UAAU;EACV,SAAS;EACT,eAAe;EACf,aAAa;EACb,wBAAwB,EAAA;;AAEzB,gDAAA;AACA;;EAEC,cAAc,EAAA;;AAEf;EACC,cAAc,EAAA;;AAEf;EACC,gBAAgB,EAAA;;AAEjB;EACC,YAAY,EAAA;;AAEb;;EAEC,WAAW;EACX,aAAa,EAAA;;AAEd;EACC,yBAAyB;EACzB,iBAAiB,EAAA;;AAElB;EACI,qBAAqB,EAAA","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/\n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\n* {\n    box-sizing: border-box;\n}\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\nul {\n    list-style-type: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/client/index.js":
/*!*****************************!*\
  !*** ./src/client/index.js ***!
  \*****************************/
/*! exports provided: handleSubmit, clearResults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_formHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/formHandler */ "./src/client/js/formHandler.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "handleSubmit", function() { return _js_formHandler__WEBPACK_IMPORTED_MODULE_0__["handleSubmit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clearResults", function() { return _js_formHandler__WEBPACK_IMPORTED_MODULE_0__["clearResults"]; });

/* harmony import */ var _styles_resets_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/resets.scss */ "./src/client/styles/resets.scss");
/* harmony import */ var _styles_loading_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/loading.scss */ "./src/client/styles/loading.scss");
/* harmony import */ var _styles_layout_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/layout.scss */ "./src/client/styles/layout.scss");
/* harmony import */ var _styles_form_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/form.scss */ "./src/client/styles/form.scss");








/***/ }),

/***/ "./src/client/js/formHandler.js":
/*!**************************************!*\
  !*** ./src/client/js/formHandler.js ***!
  \**************************************/
/*! exports provided: handleSubmit, clearResults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleSubmit", function() { return handleSubmit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearResults", function() { return clearResults; });
/* harmony import */ var _urlValidation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./urlValidation */ "./src/client/js/urlValidation.js");
/* harmony import */ var _toggleLoading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toggleLoading */ "./src/client/js/toggleLoading.js");



var handleSubmit = function handleSubmit(event) {
  event.preventDefault();
  Object(_toggleLoading__WEBPACK_IMPORTED_MODULE_1__["toggleLoading"])(true);
  var url = document.getElementById('url').value;
  var urlValid = Object(_urlValidation__WEBPACK_IMPORTED_MODULE_0__["checkUrl"])(url);
  var resultSection = document.getElementById('results');

  if (urlValid) {
    fetch('http://localhost:8081/analyize', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        url: url
      })
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      resultSection.innerHTML = "<h6>\n                    <span onclick=\"return Client.clearResults()\" class=\"close\">[X]</span>\n                    Results for [".concat(url, "]:\n                </h6>\n                <ul>\n                    <li>\n                        <span>Agreement</span>\n                        <span>").concat(data.agreement, "</span>\n                    </li>\n                    <li>\n                        <span>Confidence</span>\n                        <span>").concat(data.confidence, "</span>\n                    </li>\n                    <li>\n                        <span>Irony</span>\n                        <span>").concat(data.irony, "</span>\n                    </li>\n                    <li>\n                        <span>Score</span>\n                        <span>").concat(data.score_tag, "</span>\n                    </li>\n                    <li>\n                        <span>Subjectivity</span>\n                        <span>").concat(data.subjectivity, "</span>\n                    </li>\n                </ul>");
      Object(_toggleLoading__WEBPACK_IMPORTED_MODULE_1__["toggleLoading"])(false);
    })["catch"](function (error) {
      console.log(error);
      Object(_toggleLoading__WEBPACK_IMPORTED_MODULE_1__["toggleLoading"])(false);
      resultSection.innerHTML = "Unknown server error";
    });
    return 0;
  } else {
    resultSection.innerHTML = "Invalid URL!";
    Object(_toggleLoading__WEBPACK_IMPORTED_MODULE_1__["toggleLoading"])(false);
    return 1;
  }
};

var clearResults = function clearResults(event) {
  var resultSection = document.getElementById('results');
  resultSection.innerHTML = "";
};



/***/ }),

/***/ "./src/client/js/toggleLoading.js":
/*!****************************************!*\
  !*** ./src/client/js/toggleLoading.js ***!
  \****************************************/
/*! exports provided: toggleLoading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleLoading", function() { return toggleLoading; });
var toggleLoading = function toggleLoading(state) {
  var loadingModal = document.getElementById('loading-modal');
  var loadingSpinner = document.getElementById('loading-spinner');

  if (state) {
    loadingModal.style.display = 'inherit';
    loadingSpinner.style.display = 'inherit';
  } else {
    loadingModal.style.display = 'none';
    loadingSpinner.style.display = 'none';
  }
};



/***/ }),

/***/ "./src/client/js/urlValidation.js":
/*!****************************************!*\
  !*** ./src/client/js/urlValidation.js ***!
  \****************************************/
/*! exports provided: checkUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkUrl", function() { return checkUrl; });
var checkUrl = function checkUrl(url) {
  return /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/.test(url);
};



/***/ }),

/***/ "./src/client/styles/form.scss":
/*!*************************************!*\
  !*** ./src/client/styles/form.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_form_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./form.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/form.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_form_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_form_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/client/styles/layout.scss":
/*!***************************************!*\
  !*** ./src/client/styles/layout.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_layout_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./layout.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/layout.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_layout_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_layout_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/client/styles/loading.scss":
/*!****************************************!*\
  !*** ./src/client/styles/loading.scss ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_loading_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./loading.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/loading.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_loading_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_loading_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/client/styles/resets.scss":
/*!***************************************!*\
  !*** ./src/client/styles/resets.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_resets_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./resets.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/resets.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_resets_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_resets_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ })

/******/ });
//# sourceMappingURL=main.js.map