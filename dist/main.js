/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/content.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/content.css ***!
  \**********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".content {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  align-content: center;\n  gap: 20px;\n  width: 100%;\n  height: 100vh;\n}\n", "",{"version":3,"sources":["webpack://./src/styles/content.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,eAAe;EACf,uBAAuB;EACvB,mBAAmB;EACnB,qBAAqB;EACrB,SAAS;EACT,WAAW;EACX,aAAa;AACf","sourcesContent":[".content {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  align-content: center;\n  gap: 20px;\n  width: 100%;\n  height: 100vh;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/gameboard.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/gameboard.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".gameboard {\n  display: grid;\n  grid-template-columns: repeat(11, 1fr);\n  grid-template-rows: repeat(11, 1fr);\n  border: 1px solid black;\n  width: min(80vw, 400px);\n  height: min(80vw, 400px);\n}\n\n.gameboard_blurred {\n  filter: blur(3px);\n}\n\n/* Tiles */\n\n.gameboard__tile-grid {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  grid-column: 2 / 11;\n  grid-row: 2 / 11;\n  border: 1px solid black;\n}\n\n.gameboard__tile {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid black;\n}\n\n.gameboard_right\n  .gameboard__tile:hover:not(.gameboard__tile_ship, .gameboard__tile_hit, .gameboard__tile_missed) {\n  background-color: #dddddd;\n  cursor: pointer;\n}\n\n.gameboard__tile_ship {\n  background-color: aquamarine;\n}\n\n.gameboard__tile_missed {\n  background-color: yellow;\n}\n\n.gameboard__tile_hit {\n  background-color: red;\n}\n\n/* Labels */\n\n.gameboard__col-labels {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-column: 2 / 11;\n  grid-row: 1 / 2;\n}\n\n.gameboard__row-labels {\n  display: grid;\n  grid-template-rows: repeat(10, 1fr);\n  grid-column: 1 / 2;\n  grid-row: 2 / 11;\n}\n\n.gameboard__row-label,\n.gameboard__col-label {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n/* Start window */\n\n.gameboard-wrapper {\n  position: relative;\n}\n\n.start-window {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.start-window__dialog {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n  background-color: #ddd;\n  border: 1px solid black;\n  width: 70%;\n  height: 40%;\n  border-radius: 5px;\n}\n", "",{"version":3,"sources":["webpack://./src/styles/gameboard.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,sCAAsC;EACtC,mCAAmC;EACnC,uBAAuB;EACvB,uBAAuB;EACvB,wBAAwB;AAC1B;;AAEA;EACE,iBAAiB;AACnB;;AAEA,UAAU;;AAEV;EACE,aAAa;EACb,sCAAsC;EACtC,mCAAmC;EACnC,mBAAmB;EACnB,gBAAgB;EAChB,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;;EAEE,yBAAyB;EACzB,eAAe;AACjB;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,qBAAqB;AACvB;;AAEA,WAAW;;AAEX;EACE,aAAa;EACb,sCAAsC;EACtC,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,mCAAmC;EACnC,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;;EAEE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA,iBAAiB;;AAEjB;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,WAAW;EACX,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,6BAA6B;EAC7B,mBAAmB;EACnB,sBAAsB;EACtB,uBAAuB;EACvB,UAAU;EACV,WAAW;EACX,kBAAkB;AACpB","sourcesContent":[".gameboard {\n  display: grid;\n  grid-template-columns: repeat(11, 1fr);\n  grid-template-rows: repeat(11, 1fr);\n  border: 1px solid black;\n  width: min(80vw, 400px);\n  height: min(80vw, 400px);\n}\n\n.gameboard_blurred {\n  filter: blur(3px);\n}\n\n/* Tiles */\n\n.gameboard__tile-grid {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  grid-column: 2 / 11;\n  grid-row: 2 / 11;\n  border: 1px solid black;\n}\n\n.gameboard__tile {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid black;\n}\n\n.gameboard_right\n  .gameboard__tile:hover:not(.gameboard__tile_ship, .gameboard__tile_hit, .gameboard__tile_missed) {\n  background-color: #dddddd;\n  cursor: pointer;\n}\n\n.gameboard__tile_ship {\n  background-color: aquamarine;\n}\n\n.gameboard__tile_missed {\n  background-color: yellow;\n}\n\n.gameboard__tile_hit {\n  background-color: red;\n}\n\n/* Labels */\n\n.gameboard__col-labels {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-column: 2 / 11;\n  grid-row: 1 / 2;\n}\n\n.gameboard__row-labels {\n  display: grid;\n  grid-template-rows: repeat(10, 1fr);\n  grid-column: 1 / 2;\n  grid-row: 2 / 11;\n}\n\n.gameboard__row-label,\n.gameboard__col-label {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n/* Start window */\n\n.gameboard-wrapper {\n  position: relative;\n}\n\n.start-window {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.start-window__dialog {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n  background-color: #ddd;\n  border: 1px solid black;\n  width: 70%;\n  height: 40%;\n  border-radius: 5px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "reset.css\n  /* http://meyerweb.com/eric/tools/css/reset/ \n    v2.0 | 20110126\n    License: none (public domain)\n  */\n\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n  }\n  ol, ul {\n    list-style: none;\n  }\n  blockquote, q {\n    quotes: none;\n  }\n  blockquote:before, blockquote:after,\n  q:before, q:after {\n    content: '';\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  /* Custom change */\n  * {\n    box-sizing: border-box;\n  }\n  ", "",{"version":3,"sources":["webpack://./src/styles/reset.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;IAmBI,SAAS;IACT,UAAU;IACV,SAAS;IACT,eAAe;IACf,aAAa;IACb,wBAAwB;EAC1B;EACA,gDAAgD;EAChD;;IAEE,cAAc;EAChB;EACA;IACE,cAAc;EAChB;EACA;IACE,gBAAgB;EAClB;EACA;IACE,YAAY;EACd;EACA;;IAEE,WAAW;IACX,aAAa;EACf;EACA;IACE,yBAAyB;IACzB,iBAAiB;EACnB;EACA,kBAAkB;EAClB;IACE,sBAAsB;EACxB","sourcesContent":["reset.css\n  /* http://meyerweb.com/eric/tools/css/reset/ \n    v2.0 | 20110126\n    License: none (public domain)\n  */\n\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n  }\n  ol, ul {\n    list-style: none;\n  }\n  blockquote, q {\n    quotes: none;\n  }\n  blockquote:before, blockquote:after,\n  q:before, q:after {\n    content: '';\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  /* Custom change */\n  * {\n    box-sizing: border-box;\n  }\n  "],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/ships.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/ships.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Ships list */\n\n.player-ship-wrapper {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  align-self: flex-start;\n  gap: 20px;\n  width: 125px;\n}\n\n.player-ships {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 5px;\n  padding: 5px;\n  border: 1px solid black;\n  width: 100%;\n}\n\n.player-ships > div:hover {\n  background-color: #dddddd;\n  cursor: pointer;\n}\n\n/* Ship direction rotation */\n\n.ship-direction {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(3, 1fr);\n  gap: 5px;\n  border: 1px solid black;\n  padding: 5px;\n  width: 100%;\n}\n\n.ship-direction__rotator {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 5px;\n  border: 1px solid black;\n  border-radius: 5px;\n  background-color: white;\n}\n\n.ship-direction__rotator:hover {\n  background-color: #dddddd;\n  cursor: pointer;\n}\n\n.ship-direction__rotator.selected {\n  background-color: #dddddd;\n}\n\n.ship-direction__title {\n  grid-column: 1 / 4;\n  grid-row: 1 / 2;\n}\n\n.ship-direction__rotator_up {\n  grid-column: 2 / 3;\n  grid-row: 2 / 3;\n}\n\n.ship-direction__rotator_right {\n  grid-column: 3 / 4;\n  grid-row: 3 / 4;\n}\n\n.ship-direction__rotator_down {\n  grid-column: 2 / 3;\n  grid-row: 3 / 4;\n}\n\n.ship-direction__rotator_left {\n  grid-column: 1 / 2;\n  grid-row: 3 / 4;\n}\n", "",{"version":3,"sources":["webpack://./src/styles/ships.css"],"names":[],"mappings":"AAAA,eAAe;;AAEf;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,sBAAsB;EACtB,SAAS;EACT,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,QAAQ;EACR,YAAY;EACZ,uBAAuB;EACvB,WAAW;AACb;;AAEA;EACE,yBAAyB;EACzB,eAAe;AACjB;;AAEA,4BAA4B;;AAE5B;EACE,aAAa;EACb,qCAAqC;EACrC,kCAAkC;EAClC,QAAQ;EACR,uBAAuB;EACvB,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,uBAAuB;EACvB,kBAAkB;EAClB,uBAAuB;AACzB;;AAEA;EACE,yBAAyB;EACzB,eAAe;AACjB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,eAAe;AACjB","sourcesContent":["/* Ships list */\n\n.player-ship-wrapper {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  align-self: flex-start;\n  gap: 20px;\n  width: 125px;\n}\n\n.player-ships {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 5px;\n  padding: 5px;\n  border: 1px solid black;\n  width: 100%;\n}\n\n.player-ships > div:hover {\n  background-color: #dddddd;\n  cursor: pointer;\n}\n\n/* Ship direction rotation */\n\n.ship-direction {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(3, 1fr);\n  gap: 5px;\n  border: 1px solid black;\n  padding: 5px;\n  width: 100%;\n}\n\n.ship-direction__rotator {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 5px;\n  border: 1px solid black;\n  border-radius: 5px;\n  background-color: white;\n}\n\n.ship-direction__rotator:hover {\n  background-color: #dddddd;\n  cursor: pointer;\n}\n\n.ship-direction__rotator.selected {\n  background-color: #dddddd;\n}\n\n.ship-direction__title {\n  grid-column: 1 / 4;\n  grid-row: 1 / 2;\n}\n\n.ship-direction__rotator_up {\n  grid-column: 2 / 3;\n  grid-row: 2 / 3;\n}\n\n.ship-direction__rotator_right {\n  grid-column: 3 / 4;\n  grid-row: 3 / 4;\n}\n\n.ship-direction__rotator_down {\n  grid-column: 2 / 3;\n  grid-row: 3 / 4;\n}\n\n.ship-direction__rotator_left {\n  grid-column: 1 / 2;\n  grid-row: 3 / 4;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
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

/***/ "./src/styles/content.css":
/*!********************************!*\
  !*** ./src/styles/content.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_content_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./content.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/content.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_content_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_content_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_content_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_content_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/gameboard.css":
/*!**********************************!*\
  !*** ./src/styles/gameboard.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_gameboard_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./gameboard.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/gameboard.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_gameboard_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_gameboard_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_gameboard_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_gameboard_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/reset.css":
/*!******************************!*\
  !*** ./src/styles/reset.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./reset.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/ships.css":
/*!******************************!*\
  !*** ./src/styles/ships.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ships_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./ships.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/ships.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ships_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ships_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ships_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ships_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
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
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/GameController.js":
/*!*******************************!*\
  !*** ./src/GameController.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _models_Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/Player */ "./src/models/Player.js");
/* harmony import */ var _models_Player__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_models_Player__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_Gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/Gameboard */ "./src/models/Gameboard.js");
/* harmony import */ var _models_Gameboard__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_models_Gameboard__WEBPACK_IMPORTED_MODULE_1__);



// Controller variables
let player = null;
let computer = null;
let playerBoard = null;
let computerBoard = null;
let started = false;
let selectedShip = null;

/**
 *
 * @param {object} gb Gameboard object.
 * @param {boolean} showShips True if gameboard should display ship positions
 */
const renderBoard = (gameboard, showShips) => {
  let tileGrid;

  // Selects the appropriate board
  if (showShips) {
    tileGrid = document.querySelector(
      '.gameboard_left > .gameboard__tile-grid'
    );
  } else {
    tileGrid = document.querySelector(
      '.gameboard_right > .gameboard__tile-grid'
    );
  }

  // Clears previous rendering
  while (tileGrid.firstChild) {
    tileGrid.removeChild(tileGrid.firstChild);
  }

  // Creates the grid tiles
  let charCode = 65;
  for (; charCode <= 74; charCode++) {
    for (let col = 1; col <= 10; col++) {
      const tileStr = `${String.fromCharCode(charCode)}${col}`;
      const tile = document.createElement('div');

      tile.classList.add('gameboard__tile');
      tile.classList.add(`gameboard__tile_pos_${tileStr}`);
      tile.setAttribute('data-tile', tileStr);

      // Marks ship postions for player's board
      if (showShips && gameboard.getTile(tileStr).ship) {
        tile.classList.add('gameboard__tile_ship');
      }

      // Marks misses
      if (gameboard.getTile(tileStr).status === 1) {
        tile.classList.add('gameboard__tile_missed');
      }

      // Marks hits
      if (gameboard.getTile(tileStr).status === 2) {
        tile.classList.add('gameboard__tile_hit');
      }

      // Register event listeners on unclicked target board tiles
      if (started && !showShips && gameboard.getTile(tileStr).status === 0) {
        tile.addEventListener('click', handleTileClick);
      }

      // Register event listeners on player board for game start ship placement
      if (!started && showShips) {
        tile.addEventListener('mouseover', showShipPlacement);
        tile.addEventListener('click', handleShipPlacement);
      }

      tileGrid.appendChild(tile);
    }
  }
};

/**
 * Allows the game to end and prevents any more moves from being made.
 */
const endGame = () => {
  const tiles = [
    ...document.querySelectorAll('.gameboard_right .gameboard__tile'),
  ];

  tiles.forEach((tile) => tile.removeEventListener('click', handleTileClick));
};

/**
 * Allows the computer to make its turn against the player when the player's
 * turn is over.
 */
const endTurn = () => {
  if (computerBoard.isDefeated()) {
    console.log(`${player.getName()} wins!`);
    endGame();
    return;
  }

  computer.attack(playerBoard);
  renderBoard(playerBoard, true);

  if (playerBoard.isDefeated()) {
    console.log(`${computer.getName()} wins!`);
    endGame();
  }
};

/**
 * Event handler for when the player clicks on a tile to attack.
 * @param {Event} e
 */
const handleTileClick = (e) => {
  const tileStr = e.currentTarget.getAttribute('data-tile');
  const attackedTile = player.attack(computerBoard, tileStr);
  if (attackedTile) {
    renderBoard(computerBoard, false);
    endTurn();
  }
};

/**
 * Starts the game.
 */
const startGame = () => {
  started = true;
};

/**
 * Highlights the currently selected ship direction during placement.
 */
const showDirection = () => {
  if (!selectedShip) return;

  // Clears previously highlighted direction
  const rotators = [...document.querySelectorAll('.ship-direction__rotator')];
  rotators.forEach((rotator) => {
    rotator.style.setProperty('background-color', 'white');
  });

  // Highlights the current direction
  let rotator = null;
  if (selectedShip.direction === 'UP') {
    rotator = document.querySelector('.ship-direction__rotator_up');
  } else if (selectedShip.direction === 'RIGHT') {
    rotator = document.querySelector('.ship-direction__rotator_right');
  } else if (selectedShip.direction === 'DOWN') {
    rotator = document.querySelector('.ship-direction__rotator_down');
  } else if (selectedShip.direction === 'LEFT') {
    rotator = document.querySelector('.ship-direction__rotator_left');
  }
  rotator.style.setProperty('background-color', '#dddddd');
};

/**
 * Registers event handlers to allow player to select and place ships.
 */
const registerShipSelectors = () => {
  let currentOption = null;

  // Allows the carrier to be selected for placement
  const carrierOption = document.querySelector('.player-ships__carrier');
  carrierOption.addEventListener('click', (e) => {
    if (currentOption) {
      currentOption.style.setProperty('background-color', 'white');
    }
    currentOption = e.currentTarget;
    currentOption.style.setProperty('background-color', 'aquamarine');
    selectedShip = { length: 5, direction: 'DOWN' };
    showDirection();
  });

  // Allows the battleship to be selected for placement
  const battleshipOption = document.querySelector('.player-ships__battleship');
  battleshipOption.addEventListener('click', (e) => {
    if (currentOption) {
      currentOption.style.setProperty('background-color', 'white');
    }
    currentOption = e.currentTarget;
    e.currentTarget.style.setProperty('background-color', 'aquamarine');
    selectedShip = { length: 4, direction: 'DOWN' };
    showDirection();
  });

  // Allows the cruiser to be selected for placement
  const cruiserOption = document.querySelector('.player-ships__cruiser');
  cruiserOption.addEventListener('click', (e) => {
    if (currentOption) {
      currentOption.style.setProperty('background-color', 'white');
    }
    currentOption = e.currentTarget;
    e.currentTarget.style.setProperty('background-color', 'aquamarine');
    selectedShip = { length: 3, direction: 'DOWN' };
    showDirection();
  });

  // Allows the submarine to be selected for placement
  const submarineOption = document.querySelector('.player-ships__submarine');
  submarineOption.addEventListener('click', (e) => {
    if (currentOption) {
      currentOption.style.setProperty('background-color', 'white');
    }
    currentOption = e.currentTarget;
    e.currentTarget.style.setProperty('background-color', 'aquamarine');
    selectedShip = { length: 3, direction: 'DOWN' };
    showDirection();
  });

  // Allows the destroyer to be selected for placement
  const destroyerOption = document.querySelector('.player-ships__destroyer');
  destroyerOption.addEventListener('click', (e) => {
    if (currentOption) {
      currentOption.style.setProperty('background-color', 'white');
    }
    currentOption = e.currentTarget;
    e.currentTarget.style.setProperty('background-color', 'aquamarine');
    selectedShip = { length: 2, direction: 'DOWN' };
    showDirection();
  });
};

/**
 * Resets all tile colors to white
 */
const resetTileColors = () => {
  const tiles = [
    ...document.querySelectorAll('.gameboard_left .gameboard__tile'),
  ];
  tiles.forEach((tile) => {
    tile.style.setProperty('background-color', 'white');
  });
};

/**
 * Shows where a selected ship will be placed on the grid.
 * @param {Event} e
 */
const showShipPlacement = (e) => {
  if (!selectedShip) return;
  resetTileColors();

  let tile = e.currentTarget;
  let tileStr = tile.getAttribute('data-tile');
  let tileLetter = tileStr.slice(0, 1).toUpperCase();
  let tileNum = parseInt(tileStr.slice(1), 10);
  tile.style.setProperty('background-color', 'aquamarine');

  // Up direction
  if (selectedShip.direction === 'UP') {
    for (let i = 0; i < selectedShip.length - 1; i++) {
      // Decrement the row letter
      tileLetter = String.fromCharCode(tileLetter.charCodeAt(0) - 1);
      if (tileLetter.charCodeAt(0) < 65) break;
      tileStr = `${tileLetter}${tileNum}`;
      tile = document.querySelector(`.gameboard__tile_pos_${tileStr}`);
      tile.style.setProperty('background-color', 'aquamarine');
    }
  }

  // Right direction
  if (selectedShip.direction === 'RIGHT') {
    for (let i = 0; i < selectedShip.length - 1; i++) {
      // Increment the column number
      tileNum++;
      if (tileNum > 10) break;
      tileStr = `${tileLetter}${tileNum}`;
      tile = document.querySelector(`.gameboard__tile_pos_${tileStr}`);
      tile.style.setProperty('background-color', 'aquamarine');
    }
  }

  // Down direction
  if (selectedShip.direction === 'DOWN') {
    for (let i = 0; i < selectedShip.length - 1; i++) {
      // Increment the row letter
      tileLetter = String.fromCharCode(tileLetter.charCodeAt(0) + 1);
      if (tileLetter.charCodeAt(0) > 74) break;
      tileStr = `${tileLetter}${tileNum}`;
      tile = document.querySelector(`.gameboard__tile_pos_${tileStr}`);
      tile.style.setProperty('background-color', 'aquamarine');
    }
  }

  // Left direction
  if (selectedShip.direction === 'LEFT') {
    for (let i = 0; i < selectedShip.length - 1; i++) {
      // Decrement the column number
      tileNum--;
      if (tileNum < 1) break;
      tileStr = `${tileLetter}${tileNum}`;
      tile = document.querySelector(`.gameboard__tile_pos_${tileStr}`);
      tile.style.setProperty('background-color', 'aquamarine');
    }
  }
};

/**
 * Event handler to allow player to rotate a ship's direction during placement.
 * @param {Event} e
 */
const handleRotation = (e) => {
  if (!selectedShip) return;
  selectedShip.direction = e.currentTarget.getAttribute('data-dir');
  showDirection();
};

const handleShipPlacement = (e) => {
  const tileStr = e.currentTarget.getAttribute('data-tile');

  try {
    playerBoard.placeShip(selectedShip.length, {
      origin: tileStr,
      direction: selectedShip.direction,
    });
    selectedShip = null;
    renderBoard(playerBoard, true);
  } catch (err) {
    console.error(err);
  }
};

/**
 * Initializes the start of the game.
 */
const initialize = () => {
  player = _models_Player__WEBPACK_IMPORTED_MODULE_0___default()('Bob');
  computer = _models_Player__WEBPACK_IMPORTED_MODULE_0___default()();
  playerBoard = _models_Gameboard__WEBPACK_IMPORTED_MODULE_1___default()();
  computerBoard = _models_Gameboard__WEBPACK_IMPORTED_MODULE_1___default()();

  renderBoard(playerBoard, true);
  renderBoard(computerBoard, false);
  registerShipSelectors();

  // Registers event handlers for ship rotation buttons
  const rotators = [...document.querySelectorAll('.ship-direction__rotator')];
  rotators.forEach((rotator) => {
    rotator.addEventListener('click', handleRotation);
  });

  // const grid = document.querySelector('.gameboard_left .gameboard__tile-grid');
  // grid.addEventListener('mouseleave', resetTileColors);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialize);


/***/ }),

/***/ "./src/models/Gameboard.js":
/*!*********************************!*\
  !*** ./src/models/Gameboard.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Ship = __webpack_require__(/*! ./Ship */ "./src/models/Ship.js");

/**
 * Helper function to convert a tile string to array indexes for the grid.
 * @param {string} tileStr Represents a tile (e.g. 'A1').
 * @returns Object with 'row' and 'col' properties.
 */
const toGridCoord = (tileStr) => {
  // Convert row substring to uppercase ASCII code and subtract 65
  const row = tileStr.slice(0, 1).toUpperCase().charCodeAt(0) - 65;
  const col = parseInt(tileStr.slice(1), 10) - 1;
  return { row, col };
};

/**
 * Gameboard factory function.
 * @returns An interface for the gameboard.
 */
const Gameboard = () => {
  // Creates a 2D grid of tiles and their associated properties
  let grid = [...new Array(10)].map(() =>
    [...new Array(10)].map(() => ({ ship: null, status: 0 }))
  );

  // Contains ships that are present on the board
  const ships = [];

  /**
   * Places a new ship on the gameboard.
   * @param {number} len Length of the ship to place.
   * @param {object} pos Position of the ship.
   */
  const placeShip = (len, pos) => {
    const ship = Ship(len, pos);
    const shipDirection = ship.getPosition().direction;
    const gridCopy = [...grid];
    const gridCoord = toGridCoord(ship.getPosition().origin);
    const err = 'Ship cannot be placed on occupied tiles';

    if (shipDirection === 'UP') {
      let { row, col } = gridCoord; // eslint-disable-line prefer-const
      for (let i = len; i > 0; i--) {
        if (gridCopy[row][col].ship) throw new Error(err);
        gridCopy[row][col].ship = ship;
        row--;
      }
    } else if (shipDirection === 'DOWN') {
      let { row, col } = gridCoord; // eslint-disable-line prefer-const
      for (let i = len; i > 0; i--) {
        if (gridCopy[row][col].ship) throw new Error(err);
        gridCopy[row][col].ship = ship;
        row++;
      }
    } else if (shipDirection === 'LEFT') {
      let { row, col } = gridCoord; // eslint-disable-line prefer-const
      for (let i = len; i > 0; i--) {
        if (gridCopy[row][col].ship) throw new Error(err);
        gridCopy[row][col].ship = ship;
        col--;
      }
    } else if (shipDirection === 'RIGHT') {
      let { row, col } = gridCoord; // eslint-disable-line prefer-const
      for (let i = len; i > 0; i--) {
        if (gridCopy[row][col].ship) throw new Error(err);
        gridCopy[row][col].ship = ship;
        col++;
      }
    } else {
      throw new Error('Cannot place ship: Ship direction invalid');
    }
    ships.push(ship);
    grid = gridCopy;
  };

  /**
   * @param {string} tile A tile on the grid (e.g. 'A1').
   * @returns Object containing tile properties.
   */
  const getTile = (tileStr) => {
    const { row, col } = toGridCoord(tileStr);
    return grid[row][col];
  };

  /**
   * Allows a board to register a hit or miss for a tile.
   * @param {string} tileStr Represents the tile to attack.
   * @returns true if successful or false if tile has already been attacked.
   */
  const receiveAttack = (tileStr) => {
    let tile;

    try {
      const { row, col } = toGridCoord(tileStr);
      tile = grid[row][col];
    } catch {
      throw new Error('Invalid tile coordinates');
    }

    // Tile has already been attacked
    if (tile.status !== 0) return false;

    // Hits a ship if it occupies the tile, otherwise tile is marked as missed
    if (tile.ship) {
      tile.ship.hit();
      tile.status = 2;
    } else {
      tile.status = 1;
    }

    return true;
  };

  /**
   * @returns true if no unsunk ships remain, false otherwise.
   */
  const isDefeated = () => {
    if (ships.length === 0) return false;

    // Checks if there are any unsunk ships remaining
    if (ships.filter((ship) => !ship.isSunk()).length > 0) return false;

    return true;
  };

  /**
   * @returns An array containing status of each ship.
   */
  const getShipStatus = () => {
    const shipStatus = [];

    ships.forEach((ship) => {
      shipStatus.push({
        length: ship.getLength(),
        hits: ship.getHits(),
      });
    });

    return shipStatus;
  };

  return {
    placeShip,
    getTile,
    receiveAttack,
    isDefeated,
    getShipStatus,
  };
};

module.exports = Gameboard;


/***/ }),

/***/ "./src/models/Player.js":
/*!******************************!*\
  !*** ./src/models/Player.js ***!
  \******************************/
/***/ ((module) => {

/**
 * Represents a player. If no name is given, a computer player will be set up.
 * @param {string} n Player name. If empty, player becomes a computer.
 * @returns The Player interface.
 */
const Player = (n) => {
  const name = n || 'Computer';

  // Populates valid moves for the computer player
  const moves = [];
  if (!n) {
    for (let char = 65; char <= 74; char++) {
      for (let num = 1; num <= 10; num++) {
        moves.push(String.fromCharCode(char).concat(num.toString()));
      }
    }
  }

  /**
   * @returns The player's name.
   */
  const getName = () => name;

  /**
   * @returns True if the player object represents a human player.
   */
  const isHuman = () => !!n;

  /**
   * Allows a player to attack a gameboard at a specific tile or at a random
   * tile.
   * @param {object} gameboard The gameboard to attack.
   * @param {string} tile The tile to attack (e.g. 'A1').
   * @returns The tile that was successfully attack or null otherwise.
   */
  const attack = (gameboard, tile = null) => {
    // Player attacks a specific tile
    if (tile) return gameboard.receiveAttack(tile) ? tile : null;

    // Computer player attacks random tile
    if (moves.length === 0) throw new Error('No valid moves remaining');
    const randomIndex = Math.floor(Math.random() * moves.length);
    const randomTile = moves.at(randomIndex);
    if (gameboard.receiveAttack(randomTile)) {
      moves.splice(randomIndex, 1);
      return randomTile;
    }

    return null;
  };

  return {
    getName,
    isHuman,
    attack,
  };
};

module.exports = Player;


/***/ }),

/***/ "./src/models/Ship.js":
/*!****************************!*\
  !*** ./src/models/Ship.js ***!
  \****************************/
/***/ ((module) => {

/**
 * Checks if the given position conforms to the expected structure and values
 * @param {number} len Ship length
 * @param {object} pos Ship position
 * @returns true if position is valid, false otherwise
 */
const posIsValid = (len, pos) => {
  try {
    // Check origin
    const originLetter = pos.origin.slice(0, 1).toUpperCase();
    const originNum = parseInt(pos.origin.slice(1), 10);
    if (!originLetter.match(/[A-J]/) || !(originNum >= 1 && originNum <= 10)) {
      return false;
    }

    // Check direction
    const direction = pos.direction.toUpperCase();
    if (
      direction !== 'UP' &&
      direction !== 'DOWN' &&
      direction !== 'LEFT' &&
      direction !== 'RIGHT'
    ) {
      return false;
    }

    // Check overflow
    if (
      (direction === 'UP' && originLetter.charCodeAt(0) - (len - 1) < 65) ||
      (direction === 'DOWN' && originLetter.charCodeAt(0) + (len - 1) > 74) ||
      (direction === 'LEFT' && originNum - (len - 1) < 1) ||
      (direction === 'RIGHT' && originNum + (len - 1) > 10)
    ) {
      return false;
    }
  } catch {
    return false;
  }

  return true;
};

/**
 * Ship factory function.
 * @param {number} len Length of ship from be in range [2-5].
 * @param {object} pos Position must contain origin and direction properties.
 * @returns An interface for the ship.
 */
const Ship = (len, pos) => {
  if (!Number.isInteger(len) || len < 2 || len > 5) {
    throw new Error('Invalid ship length');
  }

  if (!posIsValid(len, pos)) {
    throw new Error('Invalid ship position');
  }

  // Initialize values
  const length = len;
  const position = {
    origin: pos.origin.toUpperCase(),
    direction: pos.direction.toUpperCase(),
  };
  let hits = 0;

  /**
   * @returns Length of the ship.
   */
  const getLength = () => length;

  /**
   * @returns Number of enemy hits on the ship.
   */
  const getHits = () => hits;

  /**
   * @returns true if the ship has sunk, false otherwise.
   */
  const isSunk = () => {
    if (hits >= length) return true;
    return false;
  };

  /**
   * @returns An object representing the position of a ship.
   */
  const getPosition = () => JSON.parse(JSON.stringify(position));

  /**
   * Increments the hit counter for the ship.
   */
  const hit = () => {
    hits += 1;
  };

  return {
    getLength,
    getHits,
    isSunk,
    getPosition,
    hit,
  };
};

module.exports = Ship;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/reset.css */ "./src/styles/reset.css");
/* harmony import */ var _styles_content_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/content.css */ "./src/styles/content.css");
/* harmony import */ var _styles_gameboard_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/gameboard.css */ "./src/styles/gameboard.css");
/* harmony import */ var _styles_ships_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/ships.css */ "./src/styles/ships.css");
/* harmony import */ var _GameController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GameController */ "./src/GameController.js");






(0,_GameController__WEBPACK_IMPORTED_MODULE_4__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7VUN4R0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQTRCO0FBQ0U7QUFDRTtBQUNKO0FBQ2M7O0FBRTFDLDJEQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9jb250ZW50LmNzcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL2dhbWVib2FyZC5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9yZXNldC5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9zaGlwcy5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL2NvbnRlbnQuY3NzPzNkYmEiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9nYW1lYm9hcmQuY3NzPzIxODciLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9yZXNldC5jc3M/NGNmYiIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL3NoaXBzLmNzcz82ZDY3Iiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL0dhbWVDb250cm9sbGVyLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9tb2RlbHMvR2FtZWJvYXJkLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9tb2RlbHMvUGxheWVyLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9tb2RlbHMvU2hpcC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2NvbnRlbnQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixTQUFTO0VBQ1QsV0FBVztFQUNYLGFBQWE7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuZ2FtZWJvYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMSwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDExLCAxZnIpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICB3aWR0aDogbWluKDgwdncsIDQwMHB4KTtcXG4gIGhlaWdodDogbWluKDgwdncsIDQwMHB4KTtcXG59XFxuXFxuLmdhbWVib2FyZF9ibHVycmVkIHtcXG4gIGZpbHRlcjogYmx1cigzcHgpO1xcbn1cXG5cXG4vKiBUaWxlcyAqL1xcblxcbi5nYW1lYm9hcmRfX3RpbGUtZ3JpZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMTE7XFxuICBncmlkLXJvdzogMiAvIDExO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5nYW1lYm9hcmRfX3RpbGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uZ2FtZWJvYXJkX3JpZ2h0XFxuICAuZ2FtZWJvYXJkX190aWxlOmhvdmVyOm5vdCguZ2FtZWJvYXJkX190aWxlX3NoaXAsIC5nYW1lYm9hcmRfX3RpbGVfaGl0LCAuZ2FtZWJvYXJkX190aWxlX21pc3NlZCkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZGRkZDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmdhbWVib2FyZF9fdGlsZV9zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XFxufVxcblxcbi5nYW1lYm9hcmRfX3RpbGVfbWlzc2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXG59XFxuXFxuLmdhbWVib2FyZF9fdGlsZV9oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4vKiBMYWJlbHMgKi9cXG5cXG4uZ2FtZWJvYXJkX19jb2wtbGFiZWxzIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMTE7XFxuICBncmlkLXJvdzogMSAvIDI7XFxufVxcblxcbi5nYW1lYm9hcmRfX3Jvdy1sYWJlbHMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgZ3JpZC1yb3c6IDIgLyAxMTtcXG59XFxuXFxuLmdhbWVib2FyZF9fcm93LWxhYmVsLFxcbi5nYW1lYm9hcmRfX2NvbC1sYWJlbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4vKiBTdGFydCB3aW5kb3cgKi9cXG5cXG4uZ2FtZWJvYXJkLXdyYXBwZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uc3RhcnQtd2luZG93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5zdGFydC13aW5kb3dfX2RpYWxvZyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIHdpZHRoOiA3MCU7XFxuICBoZWlnaHQ6IDQwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9nYW1lYm9hcmQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxtQ0FBbUM7RUFDbkMsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2Qix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUEsVUFBVTs7QUFFVjtFQUNFLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsbUNBQW1DO0VBQ25DLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBOztFQUVFLHlCQUF5QjtFQUN6QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBLFdBQVc7O0FBRVg7RUFDRSxhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1DQUFtQztFQUNuQyxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBOztFQUVFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBLGlCQUFpQjs7QUFFakI7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsVUFBVTtFQUNWLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmdhbWVib2FyZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTEsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMSwgMWZyKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgd2lkdGg6IG1pbig4MHZ3LCA0MDBweCk7XFxuICBoZWlnaHQ6IG1pbig4MHZ3LCA0MDBweCk7XFxufVxcblxcbi5nYW1lYm9hcmRfYmx1cnJlZCB7XFxuICBmaWx0ZXI6IGJsdXIoM3B4KTtcXG59XFxuXFxuLyogVGlsZXMgKi9cXG5cXG4uZ2FtZWJvYXJkX190aWxlLWdyaWQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLWNvbHVtbjogMiAvIDExO1xcbiAgZ3JpZC1yb3c6IDIgLyAxMTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uZ2FtZWJvYXJkX190aWxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmdhbWVib2FyZF9yaWdodFxcbiAgLmdhbWVib2FyZF9fdGlsZTpob3Zlcjpub3QoLmdhbWVib2FyZF9fdGlsZV9zaGlwLCAuZ2FtZWJvYXJkX190aWxlX2hpdCwgLmdhbWVib2FyZF9fdGlsZV9taXNzZWQpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5nYW1lYm9hcmRfX3RpbGVfc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xcbn1cXG5cXG4uZ2FtZWJvYXJkX190aWxlX21pc3NlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxufVxcblxcbi5nYW1lYm9hcmRfX3RpbGVfaGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLyogTGFiZWxzICovXFxuXFxuLmdhbWVib2FyZF9fY29sLWxhYmVscyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLWNvbHVtbjogMiAvIDExO1xcbiAgZ3JpZC1yb3c6IDEgLyAyO1xcbn1cXG5cXG4uZ2FtZWJvYXJkX19yb3ctbGFiZWxzIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gIGdyaWQtcm93OiAyIC8gMTE7XFxufVxcblxcbi5nYW1lYm9hcmRfX3Jvdy1sYWJlbCxcXG4uZ2FtZWJvYXJkX19jb2wtbGFiZWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLyogU3RhcnQgd2luZG93ICovXFxuXFxuLmdhbWVib2FyZC13cmFwcGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnN0YXJ0LXdpbmRvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uc3RhcnQtd2luZG93X19kaWFsb2cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICB3aWR0aDogNzAlO1xcbiAgaGVpZ2h0OiA0MCU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcInJlc2V0LmNzc1xcbiAgLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgIHYyLjAgfCAyMDExMDEyNlxcbiAgICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiAgKi9cXG5cXG4gIGh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG4gIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG4gIGEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG4gIGRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG4gIHNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuICBiLCB1LCBpLCBjZW50ZXIsXFxuICBkbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbiAgZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxuICB0YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG4gIGFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXG4gIGZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxuICBtZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG4gIHRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBmb250LXNpemU6IDEwMCU7XFxuICAgIGZvbnQ6IGluaGVyaXQ7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG4gIH1cXG4gIC8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG4gIGFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcbiAgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxuICBib2R5IHtcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxuICB9XFxuICBvbCwgdWwge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgfVxcbiAgYmxvY2txdW90ZSwgcSB7XFxuICAgIHF1b3Rlczogbm9uZTtcXG4gIH1cXG4gIGJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbiAgcTpiZWZvcmUsIHE6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgY29udGVudDogbm9uZTtcXG4gIH1cXG4gIHRhYmxlIHtcXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XFxuICB9XFxuICAvKiBDdXN0b20gY2hhbmdlICovXFxuICAqIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIH1cXG4gIFwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvcmVzZXQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBbUJJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsU0FBUztJQUNULGVBQWU7SUFDZixhQUFhO0lBQ2Isd0JBQXdCO0VBQzFCO0VBQ0EsZ0RBQWdEO0VBQ2hEOztJQUVFLGNBQWM7RUFDaEI7RUFDQTtJQUNFLGNBQWM7RUFDaEI7RUFDQTtJQUNFLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsWUFBWTtFQUNkO0VBQ0E7O0lBRUUsV0FBVztJQUNYLGFBQWE7RUFDZjtFQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLGlCQUFpQjtFQUNuQjtFQUNBLGtCQUFrQjtFQUNsQjtJQUNFLHNCQUFzQjtFQUN4QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJyZXNldC5jc3NcXG4gIC8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgICB2Mi4wIHwgMjAxMTAxMjZcXG4gICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4gICovXFxuXFxuICBodG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuICBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuICBhLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuICBkZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuICBzbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbiAgYiwgdSwgaSwgY2VudGVyLFxcbiAgZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG4gIGZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbiAgdGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuICBhcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuICBmaWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbiAgbWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxuICB0aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgZm9udC1zaXplOiAxMDAlO1xcbiAgICBmb250OiBpbmhlcml0O1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxuICB9XFxuICAvKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuICBhcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXG4gIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcbiAgYm9keSB7XFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcbiAgfVxcbiAgb2wsIHVsIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIH1cXG4gIGJsb2NrcXVvdGUsIHEge1xcbiAgICBxdW90ZXM6IG5vbmU7XFxuICB9XFxuICBibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXG4gIHE6YmVmb3JlLCBxOmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGNvbnRlbnQ6IG5vbmU7XFxuICB9XFxuICB0YWJsZSB7XFxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xcbiAgfVxcbiAgLyogQ3VzdG9tIGNoYW5nZSAqL1xcbiAgKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB9XFxuICBcIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBTaGlwcyBsaXN0ICovXFxuXFxuLnBsYXllci1zaGlwLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgZ2FwOiAyMHB4O1xcbiAgd2lkdGg6IDEyNXB4O1xcbn1cXG5cXG4ucGxheWVyLXNoaXBzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDVweDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5wbGF5ZXItc2hpcHMgPiBkaXY6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZGRkZDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogU2hpcCBkaXJlY3Rpb24gcm90YXRpb24gKi9cXG5cXG4uc2hpcC1kaXJlY3Rpb24ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxZnIpO1xcbiAgZ2FwOiA1cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIHBhZGRpbmc6IDVweDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uc2hpcC1kaXJlY3Rpb25fX3JvdGF0b3Ige1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5zaGlwLWRpcmVjdGlvbl9fcm90YXRvcjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkZGRkO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2hpcC1kaXJlY3Rpb25fX3JvdGF0b3Iuc2VsZWN0ZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZGRkZDtcXG59XFxuXFxuLnNoaXAtZGlyZWN0aW9uX190aXRsZSB7XFxuICBncmlkLWNvbHVtbjogMSAvIDQ7XFxuICBncmlkLXJvdzogMSAvIDI7XFxufVxcblxcbi5zaGlwLWRpcmVjdGlvbl9fcm90YXRvcl91cCB7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICBncmlkLXJvdzogMiAvIDM7XFxufVxcblxcbi5zaGlwLWRpcmVjdGlvbl9fcm90YXRvcl9yaWdodCB7XFxuICBncmlkLWNvbHVtbjogMyAvIDQ7XFxuICBncmlkLXJvdzogMyAvIDQ7XFxufVxcblxcbi5zaGlwLWRpcmVjdGlvbl9fcm90YXRvcl9kb3duIHtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gIGdyaWQtcm93OiAzIC8gNDtcXG59XFxuXFxuLnNoaXAtZGlyZWN0aW9uX19yb3RhdG9yX2xlZnQge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgZ3JpZC1yb3c6IDMgLyA0O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3NoaXBzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxlQUFlOztBQUVmO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsUUFBUTtFQUNSLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsV0FBVztBQUNiOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7QUFDakI7O0FBRUEsNEJBQTRCOztBQUU1QjtFQUNFLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMsa0NBQWtDO0VBQ2xDLFFBQVE7RUFDUix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBTaGlwcyBsaXN0ICovXFxuXFxuLnBsYXllci1zaGlwLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgZ2FwOiAyMHB4O1xcbiAgd2lkdGg6IDEyNXB4O1xcbn1cXG5cXG4ucGxheWVyLXNoaXBzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDVweDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5wbGF5ZXItc2hpcHMgPiBkaXY6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZGRkZDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogU2hpcCBkaXJlY3Rpb24gcm90YXRpb24gKi9cXG5cXG4uc2hpcC1kaXJlY3Rpb24ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxZnIpO1xcbiAgZ2FwOiA1cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIHBhZGRpbmc6IDVweDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uc2hpcC1kaXJlY3Rpb25fX3JvdGF0b3Ige1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5zaGlwLWRpcmVjdGlvbl9fcm90YXRvcjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkZGRkO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2hpcC1kaXJlY3Rpb25fX3JvdGF0b3Iuc2VsZWN0ZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZGRkZDtcXG59XFxuXFxuLnNoaXAtZGlyZWN0aW9uX190aXRsZSB7XFxuICBncmlkLWNvbHVtbjogMSAvIDQ7XFxuICBncmlkLXJvdzogMSAvIDI7XFxufVxcblxcbi5zaGlwLWRpcmVjdGlvbl9fcm90YXRvcl91cCB7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICBncmlkLXJvdzogMiAvIDM7XFxufVxcblxcbi5zaGlwLWRpcmVjdGlvbl9fcm90YXRvcl9yaWdodCB7XFxuICBncmlkLWNvbHVtbjogMyAvIDQ7XFxuICBncmlkLXJvdzogMyAvIDQ7XFxufVxcblxcbi5zaGlwLWRpcmVjdGlvbl9fcm90YXRvcl9kb3duIHtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gIGdyaWQtcm93OiAzIC8gNDtcXG59XFxuXFxuLnNoaXAtZGlyZWN0aW9uX19yb3RhdG9yX2xlZnQge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgZ3JpZC1yb3c6IDMgLyA0O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NvbnRlbnQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jb250ZW50LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nYW1lYm9hcmQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nYW1lYm9hcmQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2V0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVzZXQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NoaXBzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2hpcHMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBQbGF5ZXIgZnJvbSAnLi9tb2RlbHMvUGxheWVyJztcbmltcG9ydCBHYW1lYm9hcmQgZnJvbSAnLi9tb2RlbHMvR2FtZWJvYXJkJztcblxuLy8gQ29udHJvbGxlciB2YXJpYWJsZXNcbmxldCBwbGF5ZXIgPSBudWxsO1xubGV0IGNvbXB1dGVyID0gbnVsbDtcbmxldCBwbGF5ZXJCb2FyZCA9IG51bGw7XG5sZXQgY29tcHV0ZXJCb2FyZCA9IG51bGw7XG5sZXQgc3RhcnRlZCA9IGZhbHNlO1xubGV0IHNlbGVjdGVkU2hpcCA9IG51bGw7XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBnYiBHYW1lYm9hcmQgb2JqZWN0LlxuICogQHBhcmFtIHtib29sZWFufSBzaG93U2hpcHMgVHJ1ZSBpZiBnYW1lYm9hcmQgc2hvdWxkIGRpc3BsYXkgc2hpcCBwb3NpdGlvbnNcbiAqL1xuY29uc3QgcmVuZGVyQm9hcmQgPSAoZ2FtZWJvYXJkLCBzaG93U2hpcHMpID0+IHtcbiAgbGV0IHRpbGVHcmlkO1xuXG4gIC8vIFNlbGVjdHMgdGhlIGFwcHJvcHJpYXRlIGJvYXJkXG4gIGlmIChzaG93U2hpcHMpIHtcbiAgICB0aWxlR3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAnLmdhbWVib2FyZF9sZWZ0ID4gLmdhbWVib2FyZF9fdGlsZS1ncmlkJ1xuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgdGlsZUdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgJy5nYW1lYm9hcmRfcmlnaHQgPiAuZ2FtZWJvYXJkX190aWxlLWdyaWQnXG4gICAgKTtcbiAgfVxuXG4gIC8vIENsZWFycyBwcmV2aW91cyByZW5kZXJpbmdcbiAgd2hpbGUgKHRpbGVHcmlkLmZpcnN0Q2hpbGQpIHtcbiAgICB0aWxlR3JpZC5yZW1vdmVDaGlsZCh0aWxlR3JpZC5maXJzdENoaWxkKTtcbiAgfVxuXG4gIC8vIENyZWF0ZXMgdGhlIGdyaWQgdGlsZXNcbiAgbGV0IGNoYXJDb2RlID0gNjU7XG4gIGZvciAoOyBjaGFyQ29kZSA8PSA3NDsgY2hhckNvZGUrKykge1xuICAgIGZvciAobGV0IGNvbCA9IDE7IGNvbCA8PSAxMDsgY29sKyspIHtcbiAgICAgIGNvbnN0IHRpbGVTdHIgPSBgJHtTdHJpbmcuZnJvbUNoYXJDb2RlKGNoYXJDb2RlKX0ke2NvbH1gO1xuICAgICAgY29uc3QgdGlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoJ2dhbWVib2FyZF9fdGlsZScpO1xuICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKGBnYW1lYm9hcmRfX3RpbGVfcG9zXyR7dGlsZVN0cn1gKTtcbiAgICAgIHRpbGUuc2V0QXR0cmlidXRlKCdkYXRhLXRpbGUnLCB0aWxlU3RyKTtcblxuICAgICAgLy8gTWFya3Mgc2hpcCBwb3N0aW9ucyBmb3IgcGxheWVyJ3MgYm9hcmRcbiAgICAgIGlmIChzaG93U2hpcHMgJiYgZ2FtZWJvYXJkLmdldFRpbGUodGlsZVN0cikuc2hpcCkge1xuICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoJ2dhbWVib2FyZF9fdGlsZV9zaGlwJyk7XG4gICAgICB9XG5cbiAgICAgIC8vIE1hcmtzIG1pc3Nlc1xuICAgICAgaWYgKGdhbWVib2FyZC5nZXRUaWxlKHRpbGVTdHIpLnN0YXR1cyA9PT0gMSkge1xuICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoJ2dhbWVib2FyZF9fdGlsZV9taXNzZWQnKTtcbiAgICAgIH1cblxuICAgICAgLy8gTWFya3MgaGl0c1xuICAgICAgaWYgKGdhbWVib2FyZC5nZXRUaWxlKHRpbGVTdHIpLnN0YXR1cyA9PT0gMikge1xuICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoJ2dhbWVib2FyZF9fdGlsZV9oaXQnKTtcbiAgICAgIH1cblxuICAgICAgLy8gUmVnaXN0ZXIgZXZlbnQgbGlzdGVuZXJzIG9uIHVuY2xpY2tlZCB0YXJnZXQgYm9hcmQgdGlsZXNcbiAgICAgIGlmIChzdGFydGVkICYmICFzaG93U2hpcHMgJiYgZ2FtZWJvYXJkLmdldFRpbGUodGlsZVN0cikuc3RhdHVzID09PSAwKSB7XG4gICAgICAgIHRpbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVUaWxlQ2xpY2spO1xuICAgICAgfVxuXG4gICAgICAvLyBSZWdpc3RlciBldmVudCBsaXN0ZW5lcnMgb24gcGxheWVyIGJvYXJkIGZvciBnYW1lIHN0YXJ0IHNoaXAgcGxhY2VtZW50XG4gICAgICBpZiAoIXN0YXJ0ZWQgJiYgc2hvd1NoaXBzKSB7XG4gICAgICAgIHRpbGUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgc2hvd1NoaXBQbGFjZW1lbnQpO1xuICAgICAgICB0aWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlU2hpcFBsYWNlbWVudCk7XG4gICAgICB9XG5cbiAgICAgIHRpbGVHcmlkLmFwcGVuZENoaWxkKHRpbGUpO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBBbGxvd3MgdGhlIGdhbWUgdG8gZW5kIGFuZCBwcmV2ZW50cyBhbnkgbW9yZSBtb3ZlcyBmcm9tIGJlaW5nIG1hZGUuXG4gKi9cbmNvbnN0IGVuZEdhbWUgPSAoKSA9PiB7XG4gIGNvbnN0IHRpbGVzID0gW1xuICAgIC4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nYW1lYm9hcmRfcmlnaHQgLmdhbWVib2FyZF9fdGlsZScpLFxuICBdO1xuXG4gIHRpbGVzLmZvckVhY2goKHRpbGUpID0+IHRpbGUucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVUaWxlQ2xpY2spKTtcbn07XG5cbi8qKlxuICogQWxsb3dzIHRoZSBjb21wdXRlciB0byBtYWtlIGl0cyB0dXJuIGFnYWluc3QgdGhlIHBsYXllciB3aGVuIHRoZSBwbGF5ZXInc1xuICogdHVybiBpcyBvdmVyLlxuICovXG5jb25zdCBlbmRUdXJuID0gKCkgPT4ge1xuICBpZiAoY29tcHV0ZXJCb2FyZC5pc0RlZmVhdGVkKCkpIHtcbiAgICBjb25zb2xlLmxvZyhgJHtwbGF5ZXIuZ2V0TmFtZSgpfSB3aW5zIWApO1xuICAgIGVuZEdhbWUoKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb21wdXRlci5hdHRhY2socGxheWVyQm9hcmQpO1xuICByZW5kZXJCb2FyZChwbGF5ZXJCb2FyZCwgdHJ1ZSk7XG5cbiAgaWYgKHBsYXllckJvYXJkLmlzRGVmZWF0ZWQoKSkge1xuICAgIGNvbnNvbGUubG9nKGAke2NvbXB1dGVyLmdldE5hbWUoKX0gd2lucyFgKTtcbiAgICBlbmRHYW1lKCk7XG4gIH1cbn07XG5cbi8qKlxuICogRXZlbnQgaGFuZGxlciBmb3Igd2hlbiB0aGUgcGxheWVyIGNsaWNrcyBvbiBhIHRpbGUgdG8gYXR0YWNrLlxuICogQHBhcmFtIHtFdmVudH0gZVxuICovXG5jb25zdCBoYW5kbGVUaWxlQ2xpY2sgPSAoZSkgPT4ge1xuICBjb25zdCB0aWxlU3RyID0gZS5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS10aWxlJyk7XG4gIGNvbnN0IGF0dGFja2VkVGlsZSA9IHBsYXllci5hdHRhY2soY29tcHV0ZXJCb2FyZCwgdGlsZVN0cik7XG4gIGlmIChhdHRhY2tlZFRpbGUpIHtcbiAgICByZW5kZXJCb2FyZChjb21wdXRlckJvYXJkLCBmYWxzZSk7XG4gICAgZW5kVHVybigpO1xuICB9XG59O1xuXG4vKipcbiAqIFN0YXJ0cyB0aGUgZ2FtZS5cbiAqL1xuY29uc3Qgc3RhcnRHYW1lID0gKCkgPT4ge1xuICBzdGFydGVkID0gdHJ1ZTtcbn07XG5cbi8qKlxuICogSGlnaGxpZ2h0cyB0aGUgY3VycmVudGx5IHNlbGVjdGVkIHNoaXAgZGlyZWN0aW9uIGR1cmluZyBwbGFjZW1lbnQuXG4gKi9cbmNvbnN0IHNob3dEaXJlY3Rpb24gPSAoKSA9PiB7XG4gIGlmICghc2VsZWN0ZWRTaGlwKSByZXR1cm47XG5cbiAgLy8gQ2xlYXJzIHByZXZpb3VzbHkgaGlnaGxpZ2h0ZWQgZGlyZWN0aW9uXG4gIGNvbnN0IHJvdGF0b3JzID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaGlwLWRpcmVjdGlvbl9fcm90YXRvcicpXTtcbiAgcm90YXRvcnMuZm9yRWFjaCgocm90YXRvcikgPT4ge1xuICAgIHJvdGF0b3Iuc3R5bGUuc2V0UHJvcGVydHkoJ2JhY2tncm91bmQtY29sb3InLCAnd2hpdGUnKTtcbiAgfSk7XG5cbiAgLy8gSGlnaGxpZ2h0cyB0aGUgY3VycmVudCBkaXJlY3Rpb25cbiAgbGV0IHJvdGF0b3IgPSBudWxsO1xuICBpZiAoc2VsZWN0ZWRTaGlwLmRpcmVjdGlvbiA9PT0gJ1VQJykge1xuICAgIHJvdGF0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcC1kaXJlY3Rpb25fX3JvdGF0b3JfdXAnKTtcbiAgfSBlbHNlIGlmIChzZWxlY3RlZFNoaXAuZGlyZWN0aW9uID09PSAnUklHSFQnKSB7XG4gICAgcm90YXRvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwLWRpcmVjdGlvbl9fcm90YXRvcl9yaWdodCcpO1xuICB9IGVsc2UgaWYgKHNlbGVjdGVkU2hpcC5kaXJlY3Rpb24gPT09ICdET1dOJykge1xuICAgIHJvdGF0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcC1kaXJlY3Rpb25fX3JvdGF0b3JfZG93bicpO1xuICB9IGVsc2UgaWYgKHNlbGVjdGVkU2hpcC5kaXJlY3Rpb24gPT09ICdMRUZUJykge1xuICAgIHJvdGF0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcC1kaXJlY3Rpb25fX3JvdGF0b3JfbGVmdCcpO1xuICB9XG4gIHJvdGF0b3Iuc3R5bGUuc2V0UHJvcGVydHkoJ2JhY2tncm91bmQtY29sb3InLCAnI2RkZGRkZCcpO1xufTtcblxuLyoqXG4gKiBSZWdpc3RlcnMgZXZlbnQgaGFuZGxlcnMgdG8gYWxsb3cgcGxheWVyIHRvIHNlbGVjdCBhbmQgcGxhY2Ugc2hpcHMuXG4gKi9cbmNvbnN0IHJlZ2lzdGVyU2hpcFNlbGVjdG9ycyA9ICgpID0+IHtcbiAgbGV0IGN1cnJlbnRPcHRpb24gPSBudWxsO1xuXG4gIC8vIEFsbG93cyB0aGUgY2FycmllciB0byBiZSBzZWxlY3RlZCBmb3IgcGxhY2VtZW50XG4gIGNvbnN0IGNhcnJpZXJPcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLXNoaXBzX19jYXJyaWVyJyk7XG4gIGNhcnJpZXJPcHRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmIChjdXJyZW50T3B0aW9uKSB7XG4gICAgICBjdXJyZW50T3B0aW9uLnN0eWxlLnNldFByb3BlcnR5KCdiYWNrZ3JvdW5kLWNvbG9yJywgJ3doaXRlJyk7XG4gICAgfVxuICAgIGN1cnJlbnRPcHRpb24gPSBlLmN1cnJlbnRUYXJnZXQ7XG4gICAgY3VycmVudE9wdGlvbi5zdHlsZS5zZXRQcm9wZXJ0eSgnYmFja2dyb3VuZC1jb2xvcicsICdhcXVhbWFyaW5lJyk7XG4gICAgc2VsZWN0ZWRTaGlwID0geyBsZW5ndGg6IDUsIGRpcmVjdGlvbjogJ0RPV04nIH07XG4gICAgc2hvd0RpcmVjdGlvbigpO1xuICB9KTtcblxuICAvLyBBbGxvd3MgdGhlIGJhdHRsZXNoaXAgdG8gYmUgc2VsZWN0ZWQgZm9yIHBsYWNlbWVudFxuICBjb25zdCBiYXR0bGVzaGlwT3B0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci1zaGlwc19fYmF0dGxlc2hpcCcpO1xuICBiYXR0bGVzaGlwT3B0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoY3VycmVudE9wdGlvbikge1xuICAgICAgY3VycmVudE9wdGlvbi5zdHlsZS5zZXRQcm9wZXJ0eSgnYmFja2dyb3VuZC1jb2xvcicsICd3aGl0ZScpO1xuICAgIH1cbiAgICBjdXJyZW50T3B0aW9uID0gZS5jdXJyZW50VGFyZ2V0O1xuICAgIGUuY3VycmVudFRhcmdldC5zdHlsZS5zZXRQcm9wZXJ0eSgnYmFja2dyb3VuZC1jb2xvcicsICdhcXVhbWFyaW5lJyk7XG4gICAgc2VsZWN0ZWRTaGlwID0geyBsZW5ndGg6IDQsIGRpcmVjdGlvbjogJ0RPV04nIH07XG4gICAgc2hvd0RpcmVjdGlvbigpO1xuICB9KTtcblxuICAvLyBBbGxvd3MgdGhlIGNydWlzZXIgdG8gYmUgc2VsZWN0ZWQgZm9yIHBsYWNlbWVudFxuICBjb25zdCBjcnVpc2VyT3B0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci1zaGlwc19fY3J1aXNlcicpO1xuICBjcnVpc2VyT3B0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoY3VycmVudE9wdGlvbikge1xuICAgICAgY3VycmVudE9wdGlvbi5zdHlsZS5zZXRQcm9wZXJ0eSgnYmFja2dyb3VuZC1jb2xvcicsICd3aGl0ZScpO1xuICAgIH1cbiAgICBjdXJyZW50T3B0aW9uID0gZS5jdXJyZW50VGFyZ2V0O1xuICAgIGUuY3VycmVudFRhcmdldC5zdHlsZS5zZXRQcm9wZXJ0eSgnYmFja2dyb3VuZC1jb2xvcicsICdhcXVhbWFyaW5lJyk7XG4gICAgc2VsZWN0ZWRTaGlwID0geyBsZW5ndGg6IDMsIGRpcmVjdGlvbjogJ0RPV04nIH07XG4gICAgc2hvd0RpcmVjdGlvbigpO1xuICB9KTtcblxuICAvLyBBbGxvd3MgdGhlIHN1Ym1hcmluZSB0byBiZSBzZWxlY3RlZCBmb3IgcGxhY2VtZW50XG4gIGNvbnN0IHN1Ym1hcmluZU9wdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXItc2hpcHNfX3N1Ym1hcmluZScpO1xuICBzdWJtYXJpbmVPcHRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmIChjdXJyZW50T3B0aW9uKSB7XG4gICAgICBjdXJyZW50T3B0aW9uLnN0eWxlLnNldFByb3BlcnR5KCdiYWNrZ3JvdW5kLWNvbG9yJywgJ3doaXRlJyk7XG4gICAgfVxuICAgIGN1cnJlbnRPcHRpb24gPSBlLmN1cnJlbnRUYXJnZXQ7XG4gICAgZS5jdXJyZW50VGFyZ2V0LnN0eWxlLnNldFByb3BlcnR5KCdiYWNrZ3JvdW5kLWNvbG9yJywgJ2FxdWFtYXJpbmUnKTtcbiAgICBzZWxlY3RlZFNoaXAgPSB7IGxlbmd0aDogMywgZGlyZWN0aW9uOiAnRE9XTicgfTtcbiAgICBzaG93RGlyZWN0aW9uKCk7XG4gIH0pO1xuXG4gIC8vIEFsbG93cyB0aGUgZGVzdHJveWVyIHRvIGJlIHNlbGVjdGVkIGZvciBwbGFjZW1lbnRcbiAgY29uc3QgZGVzdHJveWVyT3B0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci1zaGlwc19fZGVzdHJveWVyJyk7XG4gIGRlc3Ryb3llck9wdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKGN1cnJlbnRPcHRpb24pIHtcbiAgICAgIGN1cnJlbnRPcHRpb24uc3R5bGUuc2V0UHJvcGVydHkoJ2JhY2tncm91bmQtY29sb3InLCAnd2hpdGUnKTtcbiAgICB9XG4gICAgY3VycmVudE9wdGlvbiA9IGUuY3VycmVudFRhcmdldDtcbiAgICBlLmN1cnJlbnRUYXJnZXQuc3R5bGUuc2V0UHJvcGVydHkoJ2JhY2tncm91bmQtY29sb3InLCAnYXF1YW1hcmluZScpO1xuICAgIHNlbGVjdGVkU2hpcCA9IHsgbGVuZ3RoOiAyLCBkaXJlY3Rpb246ICdET1dOJyB9O1xuICAgIHNob3dEaXJlY3Rpb24oKTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIFJlc2V0cyBhbGwgdGlsZSBjb2xvcnMgdG8gd2hpdGVcbiAqL1xuY29uc3QgcmVzZXRUaWxlQ29sb3JzID0gKCkgPT4ge1xuICBjb25zdCB0aWxlcyA9IFtcbiAgICAuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ2FtZWJvYXJkX2xlZnQgLmdhbWVib2FyZF9fdGlsZScpLFxuICBdO1xuICB0aWxlcy5mb3JFYWNoKCh0aWxlKSA9PiB7XG4gICAgdGlsZS5zdHlsZS5zZXRQcm9wZXJ0eSgnYmFja2dyb3VuZC1jb2xvcicsICd3aGl0ZScpO1xuICB9KTtcbn07XG5cbi8qKlxuICogU2hvd3Mgd2hlcmUgYSBzZWxlY3RlZCBzaGlwIHdpbGwgYmUgcGxhY2VkIG9uIHRoZSBncmlkLlxuICogQHBhcmFtIHtFdmVudH0gZVxuICovXG5jb25zdCBzaG93U2hpcFBsYWNlbWVudCA9IChlKSA9PiB7XG4gIGlmICghc2VsZWN0ZWRTaGlwKSByZXR1cm47XG4gIHJlc2V0VGlsZUNvbG9ycygpO1xuXG4gIGxldCB0aWxlID0gZS5jdXJyZW50VGFyZ2V0O1xuICBsZXQgdGlsZVN0ciA9IHRpbGUuZ2V0QXR0cmlidXRlKCdkYXRhLXRpbGUnKTtcbiAgbGV0IHRpbGVMZXR0ZXIgPSB0aWxlU3RyLnNsaWNlKDAsIDEpLnRvVXBwZXJDYXNlKCk7XG4gIGxldCB0aWxlTnVtID0gcGFyc2VJbnQodGlsZVN0ci5zbGljZSgxKSwgMTApO1xuICB0aWxlLnN0eWxlLnNldFByb3BlcnR5KCdiYWNrZ3JvdW5kLWNvbG9yJywgJ2FxdWFtYXJpbmUnKTtcblxuICAvLyBVcCBkaXJlY3Rpb25cbiAgaWYgKHNlbGVjdGVkU2hpcC5kaXJlY3Rpb24gPT09ICdVUCcpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlbGVjdGVkU2hpcC5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgIC8vIERlY3JlbWVudCB0aGUgcm93IGxldHRlclxuICAgICAgdGlsZUxldHRlciA9IFN0cmluZy5mcm9tQ2hhckNvZGUodGlsZUxldHRlci5jaGFyQ29kZUF0KDApIC0gMSk7XG4gICAgICBpZiAodGlsZUxldHRlci5jaGFyQ29kZUF0KDApIDwgNjUpIGJyZWFrO1xuICAgICAgdGlsZVN0ciA9IGAke3RpbGVMZXR0ZXJ9JHt0aWxlTnVtfWA7XG4gICAgICB0aWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmdhbWVib2FyZF9fdGlsZV9wb3NfJHt0aWxlU3RyfWApO1xuICAgICAgdGlsZS5zdHlsZS5zZXRQcm9wZXJ0eSgnYmFja2dyb3VuZC1jb2xvcicsICdhcXVhbWFyaW5lJyk7XG4gICAgfVxuICB9XG5cbiAgLy8gUmlnaHQgZGlyZWN0aW9uXG4gIGlmIChzZWxlY3RlZFNoaXAuZGlyZWN0aW9uID09PSAnUklHSFQnKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxlY3RlZFNoaXAubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAvLyBJbmNyZW1lbnQgdGhlIGNvbHVtbiBudW1iZXJcbiAgICAgIHRpbGVOdW0rKztcbiAgICAgIGlmICh0aWxlTnVtID4gMTApIGJyZWFrO1xuICAgICAgdGlsZVN0ciA9IGAke3RpbGVMZXR0ZXJ9JHt0aWxlTnVtfWA7XG4gICAgICB0aWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmdhbWVib2FyZF9fdGlsZV9wb3NfJHt0aWxlU3RyfWApO1xuICAgICAgdGlsZS5zdHlsZS5zZXRQcm9wZXJ0eSgnYmFja2dyb3VuZC1jb2xvcicsICdhcXVhbWFyaW5lJyk7XG4gICAgfVxuICB9XG5cbiAgLy8gRG93biBkaXJlY3Rpb25cbiAgaWYgKHNlbGVjdGVkU2hpcC5kaXJlY3Rpb24gPT09ICdET1dOJykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VsZWN0ZWRTaGlwLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgLy8gSW5jcmVtZW50IHRoZSByb3cgbGV0dGVyXG4gICAgICB0aWxlTGV0dGVyID0gU3RyaW5nLmZyb21DaGFyQ29kZSh0aWxlTGV0dGVyLmNoYXJDb2RlQXQoMCkgKyAxKTtcbiAgICAgIGlmICh0aWxlTGV0dGVyLmNoYXJDb2RlQXQoMCkgPiA3NCkgYnJlYWs7XG4gICAgICB0aWxlU3RyID0gYCR7dGlsZUxldHRlcn0ke3RpbGVOdW19YDtcbiAgICAgIHRpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZ2FtZWJvYXJkX190aWxlX3Bvc18ke3RpbGVTdHJ9YCk7XG4gICAgICB0aWxlLnN0eWxlLnNldFByb3BlcnR5KCdiYWNrZ3JvdW5kLWNvbG9yJywgJ2FxdWFtYXJpbmUnKTtcbiAgICB9XG4gIH1cblxuICAvLyBMZWZ0IGRpcmVjdGlvblxuICBpZiAoc2VsZWN0ZWRTaGlwLmRpcmVjdGlvbiA9PT0gJ0xFRlQnKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxlY3RlZFNoaXAubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAvLyBEZWNyZW1lbnQgdGhlIGNvbHVtbiBudW1iZXJcbiAgICAgIHRpbGVOdW0tLTtcbiAgICAgIGlmICh0aWxlTnVtIDwgMSkgYnJlYWs7XG4gICAgICB0aWxlU3RyID0gYCR7dGlsZUxldHRlcn0ke3RpbGVOdW19YDtcbiAgICAgIHRpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZ2FtZWJvYXJkX190aWxlX3Bvc18ke3RpbGVTdHJ9YCk7XG4gICAgICB0aWxlLnN0eWxlLnNldFByb3BlcnR5KCdiYWNrZ3JvdW5kLWNvbG9yJywgJ2FxdWFtYXJpbmUnKTtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogRXZlbnQgaGFuZGxlciB0byBhbGxvdyBwbGF5ZXIgdG8gcm90YXRlIGEgc2hpcCdzIGRpcmVjdGlvbiBkdXJpbmcgcGxhY2VtZW50LlxuICogQHBhcmFtIHtFdmVudH0gZVxuICovXG5jb25zdCBoYW5kbGVSb3RhdGlvbiA9IChlKSA9PiB7XG4gIGlmICghc2VsZWN0ZWRTaGlwKSByZXR1cm47XG4gIHNlbGVjdGVkU2hpcC5kaXJlY3Rpb24gPSBlLmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWRpcicpO1xuICBzaG93RGlyZWN0aW9uKCk7XG59O1xuXG5jb25zdCBoYW5kbGVTaGlwUGxhY2VtZW50ID0gKGUpID0+IHtcbiAgY29uc3QgdGlsZVN0ciA9IGUuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGlsZScpO1xuXG4gIHRyeSB7XG4gICAgcGxheWVyQm9hcmQucGxhY2VTaGlwKHNlbGVjdGVkU2hpcC5sZW5ndGgsIHtcbiAgICAgIG9yaWdpbjogdGlsZVN0cixcbiAgICAgIGRpcmVjdGlvbjogc2VsZWN0ZWRTaGlwLmRpcmVjdGlvbixcbiAgICB9KTtcbiAgICBzZWxlY3RlZFNoaXAgPSBudWxsO1xuICAgIHJlbmRlckJvYXJkKHBsYXllckJvYXJkLCB0cnVlKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICB9XG59O1xuXG4vKipcbiAqIEluaXRpYWxpemVzIHRoZSBzdGFydCBvZiB0aGUgZ2FtZS5cbiAqL1xuY29uc3QgaW5pdGlhbGl6ZSA9ICgpID0+IHtcbiAgcGxheWVyID0gUGxheWVyKCdCb2InKTtcbiAgY29tcHV0ZXIgPSBQbGF5ZXIoKTtcbiAgcGxheWVyQm9hcmQgPSBHYW1lYm9hcmQoKTtcbiAgY29tcHV0ZXJCb2FyZCA9IEdhbWVib2FyZCgpO1xuXG4gIHJlbmRlckJvYXJkKHBsYXllckJvYXJkLCB0cnVlKTtcbiAgcmVuZGVyQm9hcmQoY29tcHV0ZXJCb2FyZCwgZmFsc2UpO1xuICByZWdpc3RlclNoaXBTZWxlY3RvcnMoKTtcblxuICAvLyBSZWdpc3RlcnMgZXZlbnQgaGFuZGxlcnMgZm9yIHNoaXAgcm90YXRpb24gYnV0dG9uc1xuICBjb25zdCByb3RhdG9ycyA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2hpcC1kaXJlY3Rpb25fX3JvdGF0b3InKV07XG4gIHJvdGF0b3JzLmZvckVhY2goKHJvdGF0b3IpID0+IHtcbiAgICByb3RhdG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlUm90YXRpb24pO1xuICB9KTtcblxuICAvLyBjb25zdCBncmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWVib2FyZF9sZWZ0IC5nYW1lYm9hcmRfX3RpbGUtZ3JpZCcpO1xuICAvLyBncmlkLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCByZXNldFRpbGVDb2xvcnMpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaW5pdGlhbGl6ZTtcbiIsImNvbnN0IFNoaXAgPSByZXF1aXJlKCcuL1NoaXAnKTtcblxuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gdG8gY29udmVydCBhIHRpbGUgc3RyaW5nIHRvIGFycmF5IGluZGV4ZXMgZm9yIHRoZSBncmlkLlxuICogQHBhcmFtIHtzdHJpbmd9IHRpbGVTdHIgUmVwcmVzZW50cyBhIHRpbGUgKGUuZy4gJ0ExJykuXG4gKiBAcmV0dXJucyBPYmplY3Qgd2l0aCAncm93JyBhbmQgJ2NvbCcgcHJvcGVydGllcy5cbiAqL1xuY29uc3QgdG9HcmlkQ29vcmQgPSAodGlsZVN0cikgPT4ge1xuICAvLyBDb252ZXJ0IHJvdyBzdWJzdHJpbmcgdG8gdXBwZXJjYXNlIEFTQ0lJIGNvZGUgYW5kIHN1YnRyYWN0IDY1XG4gIGNvbnN0IHJvdyA9IHRpbGVTdHIuc2xpY2UoMCwgMSkudG9VcHBlckNhc2UoKS5jaGFyQ29kZUF0KDApIC0gNjU7XG4gIGNvbnN0IGNvbCA9IHBhcnNlSW50KHRpbGVTdHIuc2xpY2UoMSksIDEwKSAtIDE7XG4gIHJldHVybiB7IHJvdywgY29sIH07XG59O1xuXG4vKipcbiAqIEdhbWVib2FyZCBmYWN0b3J5IGZ1bmN0aW9uLlxuICogQHJldHVybnMgQW4gaW50ZXJmYWNlIGZvciB0aGUgZ2FtZWJvYXJkLlxuICovXG5jb25zdCBHYW1lYm9hcmQgPSAoKSA9PiB7XG4gIC8vIENyZWF0ZXMgYSAyRCBncmlkIG9mIHRpbGVzIGFuZCB0aGVpciBhc3NvY2lhdGVkIHByb3BlcnRpZXNcbiAgbGV0IGdyaWQgPSBbLi4ubmV3IEFycmF5KDEwKV0ubWFwKCgpID0+XG4gICAgWy4uLm5ldyBBcnJheSgxMCldLm1hcCgoKSA9PiAoeyBzaGlwOiBudWxsLCBzdGF0dXM6IDAgfSkpXG4gICk7XG5cbiAgLy8gQ29udGFpbnMgc2hpcHMgdGhhdCBhcmUgcHJlc2VudCBvbiB0aGUgYm9hcmRcbiAgY29uc3Qgc2hpcHMgPSBbXTtcblxuICAvKipcbiAgICogUGxhY2VzIGEgbmV3IHNoaXAgb24gdGhlIGdhbWVib2FyZC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGxlbiBMZW5ndGggb2YgdGhlIHNoaXAgdG8gcGxhY2UuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBwb3MgUG9zaXRpb24gb2YgdGhlIHNoaXAuXG4gICAqL1xuICBjb25zdCBwbGFjZVNoaXAgPSAobGVuLCBwb3MpID0+IHtcbiAgICBjb25zdCBzaGlwID0gU2hpcChsZW4sIHBvcyk7XG4gICAgY29uc3Qgc2hpcERpcmVjdGlvbiA9IHNoaXAuZ2V0UG9zaXRpb24oKS5kaXJlY3Rpb247XG4gICAgY29uc3QgZ3JpZENvcHkgPSBbLi4uZ3JpZF07XG4gICAgY29uc3QgZ3JpZENvb3JkID0gdG9HcmlkQ29vcmQoc2hpcC5nZXRQb3NpdGlvbigpLm9yaWdpbik7XG4gICAgY29uc3QgZXJyID0gJ1NoaXAgY2Fubm90IGJlIHBsYWNlZCBvbiBvY2N1cGllZCB0aWxlcyc7XG5cbiAgICBpZiAoc2hpcERpcmVjdGlvbiA9PT0gJ1VQJykge1xuICAgICAgbGV0IHsgcm93LCBjb2wgfSA9IGdyaWRDb29yZDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBwcmVmZXItY29uc3RcbiAgICAgIGZvciAobGV0IGkgPSBsZW47IGkgPiAwOyBpLS0pIHtcbiAgICAgICAgaWYgKGdyaWRDb3B5W3Jvd11bY29sXS5zaGlwKSB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcbiAgICAgICAgZ3JpZENvcHlbcm93XVtjb2xdLnNoaXAgPSBzaGlwO1xuICAgICAgICByb3ctLTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHNoaXBEaXJlY3Rpb24gPT09ICdET1dOJykge1xuICAgICAgbGV0IHsgcm93LCBjb2wgfSA9IGdyaWRDb29yZDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBwcmVmZXItY29uc3RcbiAgICAgIGZvciAobGV0IGkgPSBsZW47IGkgPiAwOyBpLS0pIHtcbiAgICAgICAgaWYgKGdyaWRDb3B5W3Jvd11bY29sXS5zaGlwKSB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcbiAgICAgICAgZ3JpZENvcHlbcm93XVtjb2xdLnNoaXAgPSBzaGlwO1xuICAgICAgICByb3crKztcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHNoaXBEaXJlY3Rpb24gPT09ICdMRUZUJykge1xuICAgICAgbGV0IHsgcm93LCBjb2wgfSA9IGdyaWRDb29yZDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBwcmVmZXItY29uc3RcbiAgICAgIGZvciAobGV0IGkgPSBsZW47IGkgPiAwOyBpLS0pIHtcbiAgICAgICAgaWYgKGdyaWRDb3B5W3Jvd11bY29sXS5zaGlwKSB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcbiAgICAgICAgZ3JpZENvcHlbcm93XVtjb2xdLnNoaXAgPSBzaGlwO1xuICAgICAgICBjb2wtLTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHNoaXBEaXJlY3Rpb24gPT09ICdSSUdIVCcpIHtcbiAgICAgIGxldCB7IHJvdywgY29sIH0gPSBncmlkQ29vcmQ7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgcHJlZmVyLWNvbnN0XG4gICAgICBmb3IgKGxldCBpID0gbGVuOyBpID4gMDsgaS0tKSB7XG4gICAgICAgIGlmIChncmlkQ29weVtyb3ddW2NvbF0uc2hpcCkgdGhyb3cgbmV3IEVycm9yKGVycik7XG4gICAgICAgIGdyaWRDb3B5W3Jvd11bY29sXS5zaGlwID0gc2hpcDtcbiAgICAgICAgY29sKys7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IHBsYWNlIHNoaXA6IFNoaXAgZGlyZWN0aW9uIGludmFsaWQnKTtcbiAgICB9XG4gICAgc2hpcHMucHVzaChzaGlwKTtcbiAgICBncmlkID0gZ3JpZENvcHk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0aWxlIEEgdGlsZSBvbiB0aGUgZ3JpZCAoZS5nLiAnQTEnKS5cbiAgICogQHJldHVybnMgT2JqZWN0IGNvbnRhaW5pbmcgdGlsZSBwcm9wZXJ0aWVzLlxuICAgKi9cbiAgY29uc3QgZ2V0VGlsZSA9ICh0aWxlU3RyKSA9PiB7XG4gICAgY29uc3QgeyByb3csIGNvbCB9ID0gdG9HcmlkQ29vcmQodGlsZVN0cik7XG4gICAgcmV0dXJuIGdyaWRbcm93XVtjb2xdO1xuICB9O1xuXG4gIC8qKlxuICAgKiBBbGxvd3MgYSBib2FyZCB0byByZWdpc3RlciBhIGhpdCBvciBtaXNzIGZvciBhIHRpbGUuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0aWxlU3RyIFJlcHJlc2VudHMgdGhlIHRpbGUgdG8gYXR0YWNrLlxuICAgKiBAcmV0dXJucyB0cnVlIGlmIHN1Y2Nlc3NmdWwgb3IgZmFsc2UgaWYgdGlsZSBoYXMgYWxyZWFkeSBiZWVuIGF0dGFja2VkLlxuICAgKi9cbiAgY29uc3QgcmVjZWl2ZUF0dGFjayA9ICh0aWxlU3RyKSA9PiB7XG4gICAgbGV0IHRpbGU7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgeyByb3csIGNvbCB9ID0gdG9HcmlkQ29vcmQodGlsZVN0cik7XG4gICAgICB0aWxlID0gZ3JpZFtyb3ddW2NvbF07XG4gICAgfSBjYXRjaCB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgdGlsZSBjb29yZGluYXRlcycpO1xuICAgIH1cblxuICAgIC8vIFRpbGUgaGFzIGFscmVhZHkgYmVlbiBhdHRhY2tlZFxuICAgIGlmICh0aWxlLnN0YXR1cyAhPT0gMCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgLy8gSGl0cyBhIHNoaXAgaWYgaXQgb2NjdXBpZXMgdGhlIHRpbGUsIG90aGVyd2lzZSB0aWxlIGlzIG1hcmtlZCBhcyBtaXNzZWRcbiAgICBpZiAodGlsZS5zaGlwKSB7XG4gICAgICB0aWxlLnNoaXAuaGl0KCk7XG4gICAgICB0aWxlLnN0YXR1cyA9IDI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRpbGUuc3RhdHVzID0gMTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICAvKipcbiAgICogQHJldHVybnMgdHJ1ZSBpZiBubyB1bnN1bmsgc2hpcHMgcmVtYWluLCBmYWxzZSBvdGhlcndpc2UuXG4gICAqL1xuICBjb25zdCBpc0RlZmVhdGVkID0gKCkgPT4ge1xuICAgIGlmIChzaGlwcy5sZW5ndGggPT09IDApIHJldHVybiBmYWxzZTtcblxuICAgIC8vIENoZWNrcyBpZiB0aGVyZSBhcmUgYW55IHVuc3VuayBzaGlwcyByZW1haW5pbmdcbiAgICBpZiAoc2hpcHMuZmlsdGVyKChzaGlwKSA9PiAhc2hpcC5pc1N1bmsoKSkubGVuZ3RoID4gMCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIEFuIGFycmF5IGNvbnRhaW5pbmcgc3RhdHVzIG9mIGVhY2ggc2hpcC5cbiAgICovXG4gIGNvbnN0IGdldFNoaXBTdGF0dXMgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2hpcFN0YXR1cyA9IFtdO1xuXG4gICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgc2hpcFN0YXR1cy5wdXNoKHtcbiAgICAgICAgbGVuZ3RoOiBzaGlwLmdldExlbmd0aCgpLFxuICAgICAgICBoaXRzOiBzaGlwLmdldEhpdHMoKSxcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHNoaXBTdGF0dXM7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBwbGFjZVNoaXAsXG4gICAgZ2V0VGlsZSxcbiAgICByZWNlaXZlQXR0YWNrLFxuICAgIGlzRGVmZWF0ZWQsXG4gICAgZ2V0U2hpcFN0YXR1cyxcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gR2FtZWJvYXJkO1xuIiwiLyoqXG4gKiBSZXByZXNlbnRzIGEgcGxheWVyLiBJZiBubyBuYW1lIGlzIGdpdmVuLCBhIGNvbXB1dGVyIHBsYXllciB3aWxsIGJlIHNldCB1cC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBuIFBsYXllciBuYW1lLiBJZiBlbXB0eSwgcGxheWVyIGJlY29tZXMgYSBjb21wdXRlci5cbiAqIEByZXR1cm5zIFRoZSBQbGF5ZXIgaW50ZXJmYWNlLlxuICovXG5jb25zdCBQbGF5ZXIgPSAobikgPT4ge1xuICBjb25zdCBuYW1lID0gbiB8fCAnQ29tcHV0ZXInO1xuXG4gIC8vIFBvcHVsYXRlcyB2YWxpZCBtb3ZlcyBmb3IgdGhlIGNvbXB1dGVyIHBsYXllclxuICBjb25zdCBtb3ZlcyA9IFtdO1xuICBpZiAoIW4pIHtcbiAgICBmb3IgKGxldCBjaGFyID0gNjU7IGNoYXIgPD0gNzQ7IGNoYXIrKykge1xuICAgICAgZm9yIChsZXQgbnVtID0gMTsgbnVtIDw9IDEwOyBudW0rKykge1xuICAgICAgICBtb3Zlcy5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUoY2hhcikuY29uY2F0KG51bS50b1N0cmluZygpKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIFRoZSBwbGF5ZXIncyBuYW1lLlxuICAgKi9cbiAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IG5hbWU7XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHBsYXllciBvYmplY3QgcmVwcmVzZW50cyBhIGh1bWFuIHBsYXllci5cbiAgICovXG4gIGNvbnN0IGlzSHVtYW4gPSAoKSA9PiAhIW47XG5cbiAgLyoqXG4gICAqIEFsbG93cyBhIHBsYXllciB0byBhdHRhY2sgYSBnYW1lYm9hcmQgYXQgYSBzcGVjaWZpYyB0aWxlIG9yIGF0IGEgcmFuZG9tXG4gICAqIHRpbGUuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBnYW1lYm9hcmQgVGhlIGdhbWVib2FyZCB0byBhdHRhY2suXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0aWxlIFRoZSB0aWxlIHRvIGF0dGFjayAoZS5nLiAnQTEnKS5cbiAgICogQHJldHVybnMgVGhlIHRpbGUgdGhhdCB3YXMgc3VjY2Vzc2Z1bGx5IGF0dGFjayBvciBudWxsIG90aGVyd2lzZS5cbiAgICovXG4gIGNvbnN0IGF0dGFjayA9IChnYW1lYm9hcmQsIHRpbGUgPSBudWxsKSA9PiB7XG4gICAgLy8gUGxheWVyIGF0dGFja3MgYSBzcGVjaWZpYyB0aWxlXG4gICAgaWYgKHRpbGUpIHJldHVybiBnYW1lYm9hcmQucmVjZWl2ZUF0dGFjayh0aWxlKSA/IHRpbGUgOiBudWxsO1xuXG4gICAgLy8gQ29tcHV0ZXIgcGxheWVyIGF0dGFja3MgcmFuZG9tIHRpbGVcbiAgICBpZiAobW92ZXMubGVuZ3RoID09PSAwKSB0aHJvdyBuZXcgRXJyb3IoJ05vIHZhbGlkIG1vdmVzIHJlbWFpbmluZycpO1xuICAgIGNvbnN0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbW92ZXMubGVuZ3RoKTtcbiAgICBjb25zdCByYW5kb21UaWxlID0gbW92ZXMuYXQocmFuZG9tSW5kZXgpO1xuICAgIGlmIChnYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhyYW5kb21UaWxlKSkge1xuICAgICAgbW92ZXMuc3BsaWNlKHJhbmRvbUluZGV4LCAxKTtcbiAgICAgIHJldHVybiByYW5kb21UaWxlO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0TmFtZSxcbiAgICBpc0h1bWFuLFxuICAgIGF0dGFjayxcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUGxheWVyO1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgdGhlIGdpdmVuIHBvc2l0aW9uIGNvbmZvcm1zIHRvIHRoZSBleHBlY3RlZCBzdHJ1Y3R1cmUgYW5kIHZhbHVlc1xuICogQHBhcmFtIHtudW1iZXJ9IGxlbiBTaGlwIGxlbmd0aFxuICogQHBhcmFtIHtvYmplY3R9IHBvcyBTaGlwIHBvc2l0aW9uXG4gKiBAcmV0dXJucyB0cnVlIGlmIHBvc2l0aW9uIGlzIHZhbGlkLCBmYWxzZSBvdGhlcndpc2VcbiAqL1xuY29uc3QgcG9zSXNWYWxpZCA9IChsZW4sIHBvcykgPT4ge1xuICB0cnkge1xuICAgIC8vIENoZWNrIG9yaWdpblxuICAgIGNvbnN0IG9yaWdpbkxldHRlciA9IHBvcy5vcmlnaW4uc2xpY2UoMCwgMSkudG9VcHBlckNhc2UoKTtcbiAgICBjb25zdCBvcmlnaW5OdW0gPSBwYXJzZUludChwb3Mub3JpZ2luLnNsaWNlKDEpLCAxMCk7XG4gICAgaWYgKCFvcmlnaW5MZXR0ZXIubWF0Y2goL1tBLUpdLykgfHwgIShvcmlnaW5OdW0gPj0gMSAmJiBvcmlnaW5OdW0gPD0gMTApKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgZGlyZWN0aW9uXG4gICAgY29uc3QgZGlyZWN0aW9uID0gcG9zLmRpcmVjdGlvbi50b1VwcGVyQ2FzZSgpO1xuICAgIGlmIChcbiAgICAgIGRpcmVjdGlvbiAhPT0gJ1VQJyAmJlxuICAgICAgZGlyZWN0aW9uICE9PSAnRE9XTicgJiZcbiAgICAgIGRpcmVjdGlvbiAhPT0gJ0xFRlQnICYmXG4gICAgICBkaXJlY3Rpb24gIT09ICdSSUdIVCdcbiAgICApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBDaGVjayBvdmVyZmxvd1xuICAgIGlmIChcbiAgICAgIChkaXJlY3Rpb24gPT09ICdVUCcgJiYgb3JpZ2luTGV0dGVyLmNoYXJDb2RlQXQoMCkgLSAobGVuIC0gMSkgPCA2NSkgfHxcbiAgICAgIChkaXJlY3Rpb24gPT09ICdET1dOJyAmJiBvcmlnaW5MZXR0ZXIuY2hhckNvZGVBdCgwKSArIChsZW4gLSAxKSA+IDc0KSB8fFxuICAgICAgKGRpcmVjdGlvbiA9PT0gJ0xFRlQnICYmIG9yaWdpbk51bSAtIChsZW4gLSAxKSA8IDEpIHx8XG4gICAgICAoZGlyZWN0aW9uID09PSAnUklHSFQnICYmIG9yaWdpbk51bSArIChsZW4gLSAxKSA+IDEwKVxuICAgICkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG4vKipcbiAqIFNoaXAgZmFjdG9yeSBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7bnVtYmVyfSBsZW4gTGVuZ3RoIG9mIHNoaXAgZnJvbSBiZSBpbiByYW5nZSBbMi01XS5cbiAqIEBwYXJhbSB7b2JqZWN0fSBwb3MgUG9zaXRpb24gbXVzdCBjb250YWluIG9yaWdpbiBhbmQgZGlyZWN0aW9uIHByb3BlcnRpZXMuXG4gKiBAcmV0dXJucyBBbiBpbnRlcmZhY2UgZm9yIHRoZSBzaGlwLlxuICovXG5jb25zdCBTaGlwID0gKGxlbiwgcG9zKSA9PiB7XG4gIGlmICghTnVtYmVyLmlzSW50ZWdlcihsZW4pIHx8IGxlbiA8IDIgfHwgbGVuID4gNSkge1xuICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBzaGlwIGxlbmd0aCcpO1xuICB9XG5cbiAgaWYgKCFwb3NJc1ZhbGlkKGxlbiwgcG9zKSkge1xuICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBzaGlwIHBvc2l0aW9uJyk7XG4gIH1cblxuICAvLyBJbml0aWFsaXplIHZhbHVlc1xuICBjb25zdCBsZW5ndGggPSBsZW47XG4gIGNvbnN0IHBvc2l0aW9uID0ge1xuICAgIG9yaWdpbjogcG9zLm9yaWdpbi50b1VwcGVyQ2FzZSgpLFxuICAgIGRpcmVjdGlvbjogcG9zLmRpcmVjdGlvbi50b1VwcGVyQ2FzZSgpLFxuICB9O1xuICBsZXQgaGl0cyA9IDA7XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIExlbmd0aCBvZiB0aGUgc2hpcC5cbiAgICovXG4gIGNvbnN0IGdldExlbmd0aCA9ICgpID0+IGxlbmd0aDtcblxuICAvKipcbiAgICogQHJldHVybnMgTnVtYmVyIG9mIGVuZW15IGhpdHMgb24gdGhlIHNoaXAuXG4gICAqL1xuICBjb25zdCBnZXRIaXRzID0gKCkgPT4gaGl0cztcblxuICAvKipcbiAgICogQHJldHVybnMgdHJ1ZSBpZiB0aGUgc2hpcCBoYXMgc3VuaywgZmFsc2Ugb3RoZXJ3aXNlLlxuICAgKi9cbiAgY29uc3QgaXNTdW5rID0gKCkgPT4ge1xuICAgIGlmIChoaXRzID49IGxlbmd0aCkgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcmV0dXJucyBBbiBvYmplY3QgcmVwcmVzZW50aW5nIHRoZSBwb3NpdGlvbiBvZiBhIHNoaXAuXG4gICAqL1xuICBjb25zdCBnZXRQb3NpdGlvbiA9ICgpID0+IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkocG9zaXRpb24pKTtcblxuICAvKipcbiAgICogSW5jcmVtZW50cyB0aGUgaGl0IGNvdW50ZXIgZm9yIHRoZSBzaGlwLlxuICAgKi9cbiAgY29uc3QgaGl0ID0gKCkgPT4ge1xuICAgIGhpdHMgKz0gMTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdldExlbmd0aCxcbiAgICBnZXRIaXRzLFxuICAgIGlzU3VuayxcbiAgICBnZXRQb3NpdGlvbixcbiAgICBoaXQsXG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNoaXA7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGVzL3Jlc2V0LmNzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL2NvbnRlbnQuY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvZ2FtZWJvYXJkLmNzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL3NoaXBzLmNzcyc7XG5pbXBvcnQgaW5pdGlhbGl6ZSBmcm9tICcuL0dhbWVDb250cm9sbGVyJztcblxuaW5pdGlhbGl6ZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9