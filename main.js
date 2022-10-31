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
___CSS_LOADER_EXPORT___.push([module.id, "/* Ships list */\n\n.player-ship-wrapper {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  align-self: flex-start;\n  gap: 20px;\n  width: 125px;\n}\n\n.player-ships {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 5px;\n  padding: 5px;\n  border: 1px solid black;\n  width: 100%;\n}\n\n.player-ships > div:hover {\n  background-color: #dddddd;\n  cursor: pointer;\n}\n\n.player-ships__ship {\n  padding: 5px;\n  border-radius: 5px;\n}\n\n/* Ship direction rotation */\n\n.ship-direction {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(3, 1fr);\n  gap: 5px;\n  border: 1px solid black;\n  padding: 5px;\n  width: 100%;\n}\n\n.ship-direction__rotator {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 5px;\n  border: 1px solid black;\n  border-radius: 5px;\n  background-color: white;\n}\n\n.ship-direction__rotator:hover {\n  background-color: #dddddd;\n  cursor: pointer;\n}\n\n.ship-direction__rotator.selected {\n  background-color: #dddddd;\n}\n\n.ship-direction__title {\n  grid-column: 1 / 4;\n  grid-row: 1 / 2;\n}\n\n.ship-direction__rotator_up {\n  grid-column: 2 / 3;\n  grid-row: 2 / 3;\n}\n\n.ship-direction__rotator_right {\n  grid-column: 3 / 4;\n  grid-row: 3 / 4;\n}\n\n.ship-direction__rotator_down {\n  grid-column: 2 / 3;\n  grid-row: 3 / 4;\n}\n\n.ship-direction__rotator_left {\n  grid-column: 1 / 2;\n  grid-row: 3 / 4;\n}\n", "",{"version":3,"sources":["webpack://./src/styles/ships.css"],"names":[],"mappings":"AAAA,eAAe;;AAEf;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,sBAAsB;EACtB,SAAS;EACT,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,QAAQ;EACR,YAAY;EACZ,uBAAuB;EACvB,WAAW;AACb;;AAEA;EACE,yBAAyB;EACzB,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,kBAAkB;AACpB;;AAEA,4BAA4B;;AAE5B;EACE,aAAa;EACb,qCAAqC;EACrC,kCAAkC;EAClC,QAAQ;EACR,uBAAuB;EACvB,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,uBAAuB;EACvB,kBAAkB;EAClB,uBAAuB;AACzB;;AAEA;EACE,yBAAyB;EACzB,eAAe;AACjB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,eAAe;AACjB","sourcesContent":["/* Ships list */\n\n.player-ship-wrapper {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  align-self: flex-start;\n  gap: 20px;\n  width: 125px;\n}\n\n.player-ships {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 5px;\n  padding: 5px;\n  border: 1px solid black;\n  width: 100%;\n}\n\n.player-ships > div:hover {\n  background-color: #dddddd;\n  cursor: pointer;\n}\n\n.player-ships__ship {\n  padding: 5px;\n  border-radius: 5px;\n}\n\n/* Ship direction rotation */\n\n.ship-direction {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(3, 1fr);\n  gap: 5px;\n  border: 1px solid black;\n  padding: 5px;\n  width: 100%;\n}\n\n.ship-direction__rotator {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 5px;\n  border: 1px solid black;\n  border-radius: 5px;\n  background-color: white;\n}\n\n.ship-direction__rotator:hover {\n  background-color: #dddddd;\n  cursor: pointer;\n}\n\n.ship-direction__rotator.selected {\n  background-color: #dddddd;\n}\n\n.ship-direction__title {\n  grid-column: 1 / 4;\n  grid-row: 1 / 2;\n}\n\n.ship-direction__rotator_up {\n  grid-column: 2 / 3;\n  grid-row: 2 / 3;\n}\n\n.ship-direction__rotator_right {\n  grid-column: 3 / 4;\n  grid-row: 3 / 4;\n}\n\n.ship-direction__rotator_down {\n  grid-column: 2 / 3;\n  grid-row: 3 / 4;\n}\n\n.ship-direction__rotator_left {\n  grid-column: 1 / 2;\n  grid-row: 3 / 4;\n}\n"],"sourceRoot":""}]);
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
let playerShips = [];

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
        tile.addEventListener('click', handlePlayerAttack);
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

  tiles.forEach((tile) =>
    tile.removeEventListener('click', handlePlayerAttack)
  );
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
const handlePlayerAttack = (e) => {
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
// const startGame = () => {
//   started = true;
// };

/**
 * Clears the currently highlighted direction during ship placement.
 */
const clearDirection = () => {
  // Clears previously highlighted direction
  const rotators = [...document.querySelectorAll('.ship-direction__rotator')];
  rotators.forEach((rotator) => {
    rotator.style.setProperty('background-color', 'white');
  });
};

/**
 * Highlights the currently selected ship direction during placement.
 */
const showDirection = () => {
  if (!selectedShip) return;
  clearDirection();

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

const updatePlayerShipStatus = () => {
  const shipElements = [...document.querySelectorAll('.player-ships__ship')];
  shipElements.forEach((shipElement) => {
    shipElement.style.setProperty('background-color', 'white');
  });
};

/**
 * Registers event handlers to allow player to select and place ships.
 */
const registerShipSelectors = () => {
  let currentOption = null;

  // Allows the carrier to be selected for placement
  const carrierOption = document.querySelector('.player-ships__ship_carrier');
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
  const battleshipOption = document.querySelector(
    '.player-ships__ship_battleship'
  );
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
  const cruiserOption = document.querySelector('.player-ships__ship_cruiser');
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
  const submarineOption = document.querySelector(
    '.player-ships__ship_submarine'
  );
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
  const destroyerOption = document.querySelector(
    '.player-ships__ship_destroyer'
  );
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

/**
 * Allows a player to place their selected ship before game start.
 */
const handleShipPlacement = (e) => {
  const tileStr = e.currentTarget.getAttribute('data-tile');

  try {
    playerBoard.placeShip(selectedShip.length, {
      origin: tileStr,
      direction: selectedShip.direction,
    });
    selectedShip = null;
    updatePlayerShipStatus();
    clearDirection();
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
    return ship;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTRCO0FBQ0U7QUFDRTtBQUNKO0FBQ2M7O0FBRTFDLDJEQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9jb250ZW50LmNzcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL2dhbWVib2FyZC5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9yZXNldC5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9zaGlwcy5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL2NvbnRlbnQuY3NzPzNkYmEiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9nYW1lYm9hcmQuY3NzPzIxODciLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9yZXNldC5jc3M/NGNmYiIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL3NoaXBzLmNzcz82ZDY3Iiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL0dhbWVDb250cm9sbGVyLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9tb2RlbHMvR2FtZWJvYXJkLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9tb2RlbHMvUGxheWVyLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9tb2RlbHMvU2hpcC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2NvbnRlbnQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixTQUFTO0VBQ1QsV0FBVztFQUNYLGFBQWE7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuZ2FtZWJvYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMSwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDExLCAxZnIpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICB3aWR0aDogbWluKDgwdncsIDQwMHB4KTtcXG4gIGhlaWdodDogbWluKDgwdncsIDQwMHB4KTtcXG59XFxuXFxuLmdhbWVib2FyZF9ibHVycmVkIHtcXG4gIGZpbHRlcjogYmx1cigzcHgpO1xcbn1cXG5cXG4vKiBUaWxlcyAqL1xcblxcbi5nYW1lYm9hcmRfX3RpbGUtZ3JpZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMTE7XFxuICBncmlkLXJvdzogMiAvIDExO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5nYW1lYm9hcmRfX3RpbGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uZ2FtZWJvYXJkX3JpZ2h0XFxuICAuZ2FtZWJvYXJkX190aWxlOmhvdmVyOm5vdCguZ2FtZWJvYXJkX190aWxlX3NoaXAsIC5nYW1lYm9hcmRfX3RpbGVfaGl0LCAuZ2FtZWJvYXJkX190aWxlX21pc3NlZCkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZGRkZDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmdhbWVib2FyZF9fdGlsZV9zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XFxufVxcblxcbi5nYW1lYm9hcmRfX3RpbGVfbWlzc2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXG59XFxuXFxuLmdhbWVib2FyZF9fdGlsZV9oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4vKiBMYWJlbHMgKi9cXG5cXG4uZ2FtZWJvYXJkX19jb2wtbGFiZWxzIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMTE7XFxuICBncmlkLXJvdzogMSAvIDI7XFxufVxcblxcbi5nYW1lYm9hcmRfX3Jvdy1sYWJlbHMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgZ3JpZC1yb3c6IDIgLyAxMTtcXG59XFxuXFxuLmdhbWVib2FyZF9fcm93LWxhYmVsLFxcbi5nYW1lYm9hcmRfX2NvbC1sYWJlbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4vKiBTdGFydCB3aW5kb3cgKi9cXG5cXG4uZ2FtZWJvYXJkLXdyYXBwZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uc3RhcnQtd2luZG93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5zdGFydC13aW5kb3dfX2RpYWxvZyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIHdpZHRoOiA3MCU7XFxuICBoZWlnaHQ6IDQwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9nYW1lYm9hcmQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxtQ0FBbUM7RUFDbkMsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2Qix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUEsVUFBVTs7QUFFVjtFQUNFLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsbUNBQW1DO0VBQ25DLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBOztFQUVFLHlCQUF5QjtFQUN6QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBLFdBQVc7O0FBRVg7RUFDRSxhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1DQUFtQztFQUNuQyxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBOztFQUVFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBLGlCQUFpQjs7QUFFakI7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsVUFBVTtFQUNWLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmdhbWVib2FyZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTEsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMSwgMWZyKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgd2lkdGg6IG1pbig4MHZ3LCA0MDBweCk7XFxuICBoZWlnaHQ6IG1pbig4MHZ3LCA0MDBweCk7XFxufVxcblxcbi5nYW1lYm9hcmRfYmx1cnJlZCB7XFxuICBmaWx0ZXI6IGJsdXIoM3B4KTtcXG59XFxuXFxuLyogVGlsZXMgKi9cXG5cXG4uZ2FtZWJvYXJkX190aWxlLWdyaWQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLWNvbHVtbjogMiAvIDExO1xcbiAgZ3JpZC1yb3c6IDIgLyAxMTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uZ2FtZWJvYXJkX190aWxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmdhbWVib2FyZF9yaWdodFxcbiAgLmdhbWVib2FyZF9fdGlsZTpob3Zlcjpub3QoLmdhbWVib2FyZF9fdGlsZV9zaGlwLCAuZ2FtZWJvYXJkX190aWxlX2hpdCwgLmdhbWVib2FyZF9fdGlsZV9taXNzZWQpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5nYW1lYm9hcmRfX3RpbGVfc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xcbn1cXG5cXG4uZ2FtZWJvYXJkX190aWxlX21pc3NlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxufVxcblxcbi5nYW1lYm9hcmRfX3RpbGVfaGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLyogTGFiZWxzICovXFxuXFxuLmdhbWVib2FyZF9fY29sLWxhYmVscyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLWNvbHVtbjogMiAvIDExO1xcbiAgZ3JpZC1yb3c6IDEgLyAyO1xcbn1cXG5cXG4uZ2FtZWJvYXJkX19yb3ctbGFiZWxzIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gIGdyaWQtcm93OiAyIC8gMTE7XFxufVxcblxcbi5nYW1lYm9hcmRfX3Jvdy1sYWJlbCxcXG4uZ2FtZWJvYXJkX19jb2wtbGFiZWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLyogU3RhcnQgd2luZG93ICovXFxuXFxuLmdhbWVib2FyZC13cmFwcGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnN0YXJ0LXdpbmRvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uc3RhcnQtd2luZG93X19kaWFsb2cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICB3aWR0aDogNzAlO1xcbiAgaGVpZ2h0OiA0MCU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcInJlc2V0LmNzc1xcbiAgLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgIHYyLjAgfCAyMDExMDEyNlxcbiAgICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiAgKi9cXG5cXG4gIGh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG4gIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG4gIGEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG4gIGRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG4gIHNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuICBiLCB1LCBpLCBjZW50ZXIsXFxuICBkbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbiAgZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxuICB0YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG4gIGFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXG4gIGZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxuICBtZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG4gIHRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBmb250LXNpemU6IDEwMCU7XFxuICAgIGZvbnQ6IGluaGVyaXQ7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG4gIH1cXG4gIC8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG4gIGFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcbiAgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxuICBib2R5IHtcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxuICB9XFxuICBvbCwgdWwge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgfVxcbiAgYmxvY2txdW90ZSwgcSB7XFxuICAgIHF1b3Rlczogbm9uZTtcXG4gIH1cXG4gIGJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbiAgcTpiZWZvcmUsIHE6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgY29udGVudDogbm9uZTtcXG4gIH1cXG4gIHRhYmxlIHtcXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XFxuICB9XFxuICAvKiBDdXN0b20gY2hhbmdlICovXFxuICAqIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIH1cXG4gIFwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvcmVzZXQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBbUJJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsU0FBUztJQUNULGVBQWU7SUFDZixhQUFhO0lBQ2Isd0JBQXdCO0VBQzFCO0VBQ0EsZ0RBQWdEO0VBQ2hEOztJQUVFLGNBQWM7RUFDaEI7RUFDQTtJQUNFLGNBQWM7RUFDaEI7RUFDQTtJQUNFLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsWUFBWTtFQUNkO0VBQ0E7O0lBRUUsV0FBVztJQUNYLGFBQWE7RUFDZjtFQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLGlCQUFpQjtFQUNuQjtFQUNBLGtCQUFrQjtFQUNsQjtJQUNFLHNCQUFzQjtFQUN4QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJyZXNldC5jc3NcXG4gIC8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgICB2Mi4wIHwgMjAxMTAxMjZcXG4gICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4gICovXFxuXFxuICBodG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuICBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuICBhLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuICBkZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuICBzbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbiAgYiwgdSwgaSwgY2VudGVyLFxcbiAgZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG4gIGZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbiAgdGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuICBhcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuICBmaWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbiAgbWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxuICB0aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgZm9udC1zaXplOiAxMDAlO1xcbiAgICBmb250OiBpbmhlcml0O1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxuICB9XFxuICAvKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuICBhcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXG4gIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcbiAgYm9keSB7XFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcbiAgfVxcbiAgb2wsIHVsIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIH1cXG4gIGJsb2NrcXVvdGUsIHEge1xcbiAgICBxdW90ZXM6IG5vbmU7XFxuICB9XFxuICBibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXG4gIHE6YmVmb3JlLCBxOmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGNvbnRlbnQ6IG5vbmU7XFxuICB9XFxuICB0YWJsZSB7XFxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xcbiAgfVxcbiAgLyogQ3VzdG9tIGNoYW5nZSAqL1xcbiAgKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB9XFxuICBcIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBTaGlwcyBsaXN0ICovXFxuXFxuLnBsYXllci1zaGlwLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgZ2FwOiAyMHB4O1xcbiAgd2lkdGg6IDEyNXB4O1xcbn1cXG5cXG4ucGxheWVyLXNoaXBzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDVweDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5wbGF5ZXItc2hpcHMgPiBkaXY6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZGRkZDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnBsYXllci1zaGlwc19fc2hpcCB7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi8qIFNoaXAgZGlyZWN0aW9uIHJvdGF0aW9uICovXFxuXFxuLnNoaXAtZGlyZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKTtcXG4gIGdhcDogNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBwYWRkaW5nOiA1cHg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnNoaXAtZGlyZWN0aW9uX19yb3RhdG9yIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uc2hpcC1kaXJlY3Rpb25fX3JvdGF0b3I6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZGRkZDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNoaXAtZGlyZWN0aW9uX19yb3RhdG9yLnNlbGVjdGVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQ7XFxufVxcblxcbi5zaGlwLWRpcmVjdGlvbl9fdGl0bGUge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyA0O1xcbiAgZ3JpZC1yb3c6IDEgLyAyO1xcbn1cXG5cXG4uc2hpcC1kaXJlY3Rpb25fX3JvdGF0b3JfdXAge1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgZ3JpZC1yb3c6IDIgLyAzO1xcbn1cXG5cXG4uc2hpcC1kaXJlY3Rpb25fX3JvdGF0b3JfcmlnaHQge1xcbiAgZ3JpZC1jb2x1bW46IDMgLyA0O1xcbiAgZ3JpZC1yb3c6IDMgLyA0O1xcbn1cXG5cXG4uc2hpcC1kaXJlY3Rpb25fX3JvdGF0b3JfZG93biB7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICBncmlkLXJvdzogMyAvIDQ7XFxufVxcblxcbi5zaGlwLWRpcmVjdGlvbl9fcm90YXRvcl9sZWZ0IHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gIGdyaWQtcm93OiAzIC8gNDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zaGlwcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsZUFBZTs7QUFFZjtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsU0FBUztFQUNULFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLFFBQVE7RUFDUixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQSw0QkFBNEI7O0FBRTVCO0VBQ0UsYUFBYTtFQUNiLHFDQUFxQztFQUNyQyxrQ0FBa0M7RUFDbEMsUUFBUTtFQUNSLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIFNoaXBzIGxpc3QgKi9cXG5cXG4ucGxheWVyLXNoaXAtd3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICBnYXA6IDIwcHg7XFxuICB3aWR0aDogMTI1cHg7XFxufVxcblxcbi5wbGF5ZXItc2hpcHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogNXB4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnBsYXllci1zaGlwcyA+IGRpdjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkZGRkO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucGxheWVyLXNoaXBzX19zaGlwIHtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLyogU2hpcCBkaXJlY3Rpb24gcm90YXRpb24gKi9cXG5cXG4uc2hpcC1kaXJlY3Rpb24ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxZnIpO1xcbiAgZ2FwOiA1cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIHBhZGRpbmc6IDVweDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uc2hpcC1kaXJlY3Rpb25fX3JvdGF0b3Ige1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5zaGlwLWRpcmVjdGlvbl9fcm90YXRvcjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkZGRkO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2hpcC1kaXJlY3Rpb25fX3JvdGF0b3Iuc2VsZWN0ZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZGRkZDtcXG59XFxuXFxuLnNoaXAtZGlyZWN0aW9uX190aXRsZSB7XFxuICBncmlkLWNvbHVtbjogMSAvIDQ7XFxuICBncmlkLXJvdzogMSAvIDI7XFxufVxcblxcbi5zaGlwLWRpcmVjdGlvbl9fcm90YXRvcl91cCB7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICBncmlkLXJvdzogMiAvIDM7XFxufVxcblxcbi5zaGlwLWRpcmVjdGlvbl9fcm90YXRvcl9yaWdodCB7XFxuICBncmlkLWNvbHVtbjogMyAvIDQ7XFxuICBncmlkLXJvdzogMyAvIDQ7XFxufVxcblxcbi5zaGlwLWRpcmVjdGlvbl9fcm90YXRvcl9kb3duIHtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gIGdyaWQtcm93OiAzIC8gNDtcXG59XFxuXFxuLnNoaXAtZGlyZWN0aW9uX19yb3RhdG9yX2xlZnQge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgZ3JpZC1yb3c6IDMgLyA0O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NvbnRlbnQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jb250ZW50LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nYW1lYm9hcmQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nYW1lYm9hcmQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2V0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVzZXQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NoaXBzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2hpcHMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBQbGF5ZXIgZnJvbSAnLi9tb2RlbHMvUGxheWVyJztcbmltcG9ydCBHYW1lYm9hcmQgZnJvbSAnLi9tb2RlbHMvR2FtZWJvYXJkJztcblxuLy8gQ29udHJvbGxlciB2YXJpYWJsZXNcbmxldCBwbGF5ZXIgPSBudWxsO1xubGV0IGNvbXB1dGVyID0gbnVsbDtcbmxldCBwbGF5ZXJCb2FyZCA9IG51bGw7XG5sZXQgY29tcHV0ZXJCb2FyZCA9IG51bGw7XG5sZXQgc3RhcnRlZCA9IGZhbHNlO1xubGV0IHNlbGVjdGVkU2hpcCA9IG51bGw7XG5sZXQgcGxheWVyU2hpcHMgPSBbXTtcblxuLyoqXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGdiIEdhbWVib2FyZCBvYmplY3QuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHNob3dTaGlwcyBUcnVlIGlmIGdhbWVib2FyZCBzaG91bGQgZGlzcGxheSBzaGlwIHBvc2l0aW9uc1xuICovXG5jb25zdCByZW5kZXJCb2FyZCA9IChnYW1lYm9hcmQsIHNob3dTaGlwcykgPT4ge1xuICBsZXQgdGlsZUdyaWQ7XG5cbiAgLy8gU2VsZWN0cyB0aGUgYXBwcm9wcmlhdGUgYm9hcmRcbiAgaWYgKHNob3dTaGlwcykge1xuICAgIHRpbGVHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICcuZ2FtZWJvYXJkX2xlZnQgPiAuZ2FtZWJvYXJkX190aWxlLWdyaWQnXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICB0aWxlR3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAnLmdhbWVib2FyZF9yaWdodCA+IC5nYW1lYm9hcmRfX3RpbGUtZ3JpZCdcbiAgICApO1xuICB9XG5cbiAgLy8gQ2xlYXJzIHByZXZpb3VzIHJlbmRlcmluZ1xuICB3aGlsZSAodGlsZUdyaWQuZmlyc3RDaGlsZCkge1xuICAgIHRpbGVHcmlkLnJlbW92ZUNoaWxkKHRpbGVHcmlkLmZpcnN0Q2hpbGQpO1xuICB9XG5cbiAgLy8gQ3JlYXRlcyB0aGUgZ3JpZCB0aWxlc1xuICBsZXQgY2hhckNvZGUgPSA2NTtcbiAgZm9yICg7IGNoYXJDb2RlIDw9IDc0OyBjaGFyQ29kZSsrKSB7XG4gICAgZm9yIChsZXQgY29sID0gMTsgY29sIDw9IDEwOyBjb2wrKykge1xuICAgICAgY29uc3QgdGlsZVN0ciA9IGAke1N0cmluZy5mcm9tQ2hhckNvZGUoY2hhckNvZGUpfSR7Y29sfWA7XG4gICAgICBjb25zdCB0aWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZCgnZ2FtZWJvYXJkX190aWxlJyk7XG4gICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoYGdhbWVib2FyZF9fdGlsZV9wb3NfJHt0aWxlU3RyfWApO1xuICAgICAgdGlsZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGlsZScsIHRpbGVTdHIpO1xuXG4gICAgICAvLyBNYXJrcyBzaGlwIHBvc3Rpb25zIGZvciBwbGF5ZXIncyBib2FyZFxuICAgICAgaWYgKHNob3dTaGlwcyAmJiBnYW1lYm9hcmQuZ2V0VGlsZSh0aWxlU3RyKS5zaGlwKSB7XG4gICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZCgnZ2FtZWJvYXJkX190aWxlX3NoaXAnKTtcbiAgICAgIH1cblxuICAgICAgLy8gTWFya3MgbWlzc2VzXG4gICAgICBpZiAoZ2FtZWJvYXJkLmdldFRpbGUodGlsZVN0cikuc3RhdHVzID09PSAxKSB7XG4gICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZCgnZ2FtZWJvYXJkX190aWxlX21pc3NlZCcpO1xuICAgICAgfVxuXG4gICAgICAvLyBNYXJrcyBoaXRzXG4gICAgICBpZiAoZ2FtZWJvYXJkLmdldFRpbGUodGlsZVN0cikuc3RhdHVzID09PSAyKSB7XG4gICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZCgnZ2FtZWJvYXJkX190aWxlX2hpdCcpO1xuICAgICAgfVxuXG4gICAgICAvLyBSZWdpc3RlciBldmVudCBsaXN0ZW5lcnMgb24gdW5jbGlja2VkIHRhcmdldCBib2FyZCB0aWxlc1xuICAgICAgaWYgKHN0YXJ0ZWQgJiYgIXNob3dTaGlwcyAmJiBnYW1lYm9hcmQuZ2V0VGlsZSh0aWxlU3RyKS5zdGF0dXMgPT09IDApIHtcbiAgICAgICAgdGlsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVBsYXllckF0dGFjayk7XG4gICAgICB9XG5cbiAgICAgIC8vIFJlZ2lzdGVyIGV2ZW50IGxpc3RlbmVycyBvbiBwbGF5ZXIgYm9hcmQgZm9yIGdhbWUgc3RhcnQgc2hpcCBwbGFjZW1lbnRcbiAgICAgIGlmICghc3RhcnRlZCAmJiBzaG93U2hpcHMpIHtcbiAgICAgICAgdGlsZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBzaG93U2hpcFBsYWNlbWVudCk7XG4gICAgICAgIHRpbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVTaGlwUGxhY2VtZW50KTtcbiAgICAgIH1cblxuICAgICAgdGlsZUdyaWQuYXBwZW5kQ2hpbGQodGlsZSk7XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIEFsbG93cyB0aGUgZ2FtZSB0byBlbmQgYW5kIHByZXZlbnRzIGFueSBtb3JlIG1vdmVzIGZyb20gYmVpbmcgbWFkZS5cbiAqL1xuY29uc3QgZW5kR2FtZSA9ICgpID0+IHtcbiAgY29uc3QgdGlsZXMgPSBbXG4gICAgLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdhbWVib2FyZF9yaWdodCAuZ2FtZWJvYXJkX190aWxlJyksXG4gIF07XG5cbiAgdGlsZXMuZm9yRWFjaCgodGlsZSkgPT5cbiAgICB0aWxlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlUGxheWVyQXR0YWNrKVxuICApO1xufTtcblxuLyoqXG4gKiBBbGxvd3MgdGhlIGNvbXB1dGVyIHRvIG1ha2UgaXRzIHR1cm4gYWdhaW5zdCB0aGUgcGxheWVyIHdoZW4gdGhlIHBsYXllcidzXG4gKiB0dXJuIGlzIG92ZXIuXG4gKi9cbmNvbnN0IGVuZFR1cm4gPSAoKSA9PiB7XG4gIGlmIChjb21wdXRlckJvYXJkLmlzRGVmZWF0ZWQoKSkge1xuICAgIGNvbnNvbGUubG9nKGAke3BsYXllci5nZXROYW1lKCl9IHdpbnMhYCk7XG4gICAgZW5kR2FtZSgpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbXB1dGVyLmF0dGFjayhwbGF5ZXJCb2FyZCk7XG4gIHJlbmRlckJvYXJkKHBsYXllckJvYXJkLCB0cnVlKTtcblxuICBpZiAocGxheWVyQm9hcmQuaXNEZWZlYXRlZCgpKSB7XG4gICAgY29uc29sZS5sb2coYCR7Y29tcHV0ZXIuZ2V0TmFtZSgpfSB3aW5zIWApO1xuICAgIGVuZEdhbWUoKTtcbiAgfVxufTtcblxuLyoqXG4gKiBFdmVudCBoYW5kbGVyIGZvciB3aGVuIHRoZSBwbGF5ZXIgY2xpY2tzIG9uIGEgdGlsZSB0byBhdHRhY2suXG4gKiBAcGFyYW0ge0V2ZW50fSBlXG4gKi9cbmNvbnN0IGhhbmRsZVBsYXllckF0dGFjayA9IChlKSA9PiB7XG4gIGNvbnN0IHRpbGVTdHIgPSBlLmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXRpbGUnKTtcbiAgY29uc3QgYXR0YWNrZWRUaWxlID0gcGxheWVyLmF0dGFjayhjb21wdXRlckJvYXJkLCB0aWxlU3RyKTtcbiAgaWYgKGF0dGFja2VkVGlsZSkge1xuICAgIHJlbmRlckJvYXJkKGNvbXB1dGVyQm9hcmQsIGZhbHNlKTtcbiAgICBlbmRUdXJuKCk7XG4gIH1cbn07XG5cbi8qKlxuICogU3RhcnRzIHRoZSBnYW1lLlxuICovXG4vLyBjb25zdCBzdGFydEdhbWUgPSAoKSA9PiB7XG4vLyAgIHN0YXJ0ZWQgPSB0cnVlO1xuLy8gfTtcblxuLyoqXG4gKiBDbGVhcnMgdGhlIGN1cnJlbnRseSBoaWdobGlnaHRlZCBkaXJlY3Rpb24gZHVyaW5nIHNoaXAgcGxhY2VtZW50LlxuICovXG5jb25zdCBjbGVhckRpcmVjdGlvbiA9ICgpID0+IHtcbiAgLy8gQ2xlYXJzIHByZXZpb3VzbHkgaGlnaGxpZ2h0ZWQgZGlyZWN0aW9uXG4gIGNvbnN0IHJvdGF0b3JzID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaGlwLWRpcmVjdGlvbl9fcm90YXRvcicpXTtcbiAgcm90YXRvcnMuZm9yRWFjaCgocm90YXRvcikgPT4ge1xuICAgIHJvdGF0b3Iuc3R5bGUuc2V0UHJvcGVydHkoJ2JhY2tncm91bmQtY29sb3InLCAnd2hpdGUnKTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIEhpZ2hsaWdodHMgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBzaGlwIGRpcmVjdGlvbiBkdXJpbmcgcGxhY2VtZW50LlxuICovXG5jb25zdCBzaG93RGlyZWN0aW9uID0gKCkgPT4ge1xuICBpZiAoIXNlbGVjdGVkU2hpcCkgcmV0dXJuO1xuICBjbGVhckRpcmVjdGlvbigpO1xuXG4gIC8vIEhpZ2hsaWdodHMgdGhlIGN1cnJlbnQgZGlyZWN0aW9uXG4gIGxldCByb3RhdG9yID0gbnVsbDtcbiAgaWYgKHNlbGVjdGVkU2hpcC5kaXJlY3Rpb24gPT09ICdVUCcpIHtcbiAgICByb3RhdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXAtZGlyZWN0aW9uX19yb3RhdG9yX3VwJyk7XG4gIH0gZWxzZSBpZiAoc2VsZWN0ZWRTaGlwLmRpcmVjdGlvbiA9PT0gJ1JJR0hUJykge1xuICAgIHJvdGF0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcC1kaXJlY3Rpb25fX3JvdGF0b3JfcmlnaHQnKTtcbiAgfSBlbHNlIGlmIChzZWxlY3RlZFNoaXAuZGlyZWN0aW9uID09PSAnRE9XTicpIHtcbiAgICByb3RhdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXAtZGlyZWN0aW9uX19yb3RhdG9yX2Rvd24nKTtcbiAgfSBlbHNlIGlmIChzZWxlY3RlZFNoaXAuZGlyZWN0aW9uID09PSAnTEVGVCcpIHtcbiAgICByb3RhdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXAtZGlyZWN0aW9uX19yb3RhdG9yX2xlZnQnKTtcbiAgfVxuICByb3RhdG9yLnN0eWxlLnNldFByb3BlcnR5KCdiYWNrZ3JvdW5kLWNvbG9yJywgJyNkZGRkZGQnKTtcbn07XG5cbmNvbnN0IHVwZGF0ZVBsYXllclNoaXBTdGF0dXMgPSAoKSA9PiB7XG4gIGNvbnN0IHNoaXBFbGVtZW50cyA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGxheWVyLXNoaXBzX19zaGlwJyldO1xuICBzaGlwRWxlbWVudHMuZm9yRWFjaCgoc2hpcEVsZW1lbnQpID0+IHtcbiAgICBzaGlwRWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnYmFja2dyb3VuZC1jb2xvcicsICd3aGl0ZScpO1xuICB9KTtcbn07XG5cbi8qKlxuICogUmVnaXN0ZXJzIGV2ZW50IGhhbmRsZXJzIHRvIGFsbG93IHBsYXllciB0byBzZWxlY3QgYW5kIHBsYWNlIHNoaXBzLlxuICovXG5jb25zdCByZWdpc3RlclNoaXBTZWxlY3RvcnMgPSAoKSA9PiB7XG4gIGxldCBjdXJyZW50T3B0aW9uID0gbnVsbDtcblxuICAvLyBBbGxvd3MgdGhlIGNhcnJpZXIgdG8gYmUgc2VsZWN0ZWQgZm9yIHBsYWNlbWVudFxuICBjb25zdCBjYXJyaWVyT3B0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci1zaGlwc19fc2hpcF9jYXJyaWVyJyk7XG4gIGNhcnJpZXJPcHRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmIChjdXJyZW50T3B0aW9uKSB7XG4gICAgICBjdXJyZW50T3B0aW9uLnN0eWxlLnNldFByb3BlcnR5KCdiYWNrZ3JvdW5kLWNvbG9yJywgJ3doaXRlJyk7XG4gICAgfVxuICAgIGN1cnJlbnRPcHRpb24gPSBlLmN1cnJlbnRUYXJnZXQ7XG4gICAgY3VycmVudE9wdGlvbi5zdHlsZS5zZXRQcm9wZXJ0eSgnYmFja2dyb3VuZC1jb2xvcicsICdhcXVhbWFyaW5lJyk7XG4gICAgc2VsZWN0ZWRTaGlwID0geyBsZW5ndGg6IDUsIGRpcmVjdGlvbjogJ0RPV04nIH07XG4gICAgc2hvd0RpcmVjdGlvbigpO1xuICB9KTtcblxuICAvLyBBbGxvd3MgdGhlIGJhdHRsZXNoaXAgdG8gYmUgc2VsZWN0ZWQgZm9yIHBsYWNlbWVudFxuICBjb25zdCBiYXR0bGVzaGlwT3B0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAnLnBsYXllci1zaGlwc19fc2hpcF9iYXR0bGVzaGlwJ1xuICApO1xuICBiYXR0bGVzaGlwT3B0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoY3VycmVudE9wdGlvbikge1xuICAgICAgY3VycmVudE9wdGlvbi5zdHlsZS5zZXRQcm9wZXJ0eSgnYmFja2dyb3VuZC1jb2xvcicsICd3aGl0ZScpO1xuICAgIH1cbiAgICBjdXJyZW50T3B0aW9uID0gZS5jdXJyZW50VGFyZ2V0O1xuICAgIGUuY3VycmVudFRhcmdldC5zdHlsZS5zZXRQcm9wZXJ0eSgnYmFja2dyb3VuZC1jb2xvcicsICdhcXVhbWFyaW5lJyk7XG4gICAgc2VsZWN0ZWRTaGlwID0geyBsZW5ndGg6IDQsIGRpcmVjdGlvbjogJ0RPV04nIH07XG4gICAgc2hvd0RpcmVjdGlvbigpO1xuICB9KTtcblxuICAvLyBBbGxvd3MgdGhlIGNydWlzZXIgdG8gYmUgc2VsZWN0ZWQgZm9yIHBsYWNlbWVudFxuICBjb25zdCBjcnVpc2VyT3B0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci1zaGlwc19fc2hpcF9jcnVpc2VyJyk7XG4gIGNydWlzZXJPcHRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmIChjdXJyZW50T3B0aW9uKSB7XG4gICAgICBjdXJyZW50T3B0aW9uLnN0eWxlLnNldFByb3BlcnR5KCdiYWNrZ3JvdW5kLWNvbG9yJywgJ3doaXRlJyk7XG4gICAgfVxuICAgIGN1cnJlbnRPcHRpb24gPSBlLmN1cnJlbnRUYXJnZXQ7XG4gICAgZS5jdXJyZW50VGFyZ2V0LnN0eWxlLnNldFByb3BlcnR5KCdiYWNrZ3JvdW5kLWNvbG9yJywgJ2FxdWFtYXJpbmUnKTtcbiAgICBzZWxlY3RlZFNoaXAgPSB7IGxlbmd0aDogMywgZGlyZWN0aW9uOiAnRE9XTicgfTtcbiAgICBzaG93RGlyZWN0aW9uKCk7XG4gIH0pO1xuXG4gIC8vIEFsbG93cyB0aGUgc3VibWFyaW5lIHRvIGJlIHNlbGVjdGVkIGZvciBwbGFjZW1lbnRcbiAgY29uc3Qgc3VibWFyaW5lT3B0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAnLnBsYXllci1zaGlwc19fc2hpcF9zdWJtYXJpbmUnXG4gICk7XG4gIHN1Ym1hcmluZU9wdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKGN1cnJlbnRPcHRpb24pIHtcbiAgICAgIGN1cnJlbnRPcHRpb24uc3R5bGUuc2V0UHJvcGVydHkoJ2JhY2tncm91bmQtY29sb3InLCAnd2hpdGUnKTtcbiAgICB9XG4gICAgY3VycmVudE9wdGlvbiA9IGUuY3VycmVudFRhcmdldDtcbiAgICBlLmN1cnJlbnRUYXJnZXQuc3R5bGUuc2V0UHJvcGVydHkoJ2JhY2tncm91bmQtY29sb3InLCAnYXF1YW1hcmluZScpO1xuICAgIHNlbGVjdGVkU2hpcCA9IHsgbGVuZ3RoOiAzLCBkaXJlY3Rpb246ICdET1dOJyB9O1xuICAgIHNob3dEaXJlY3Rpb24oKTtcbiAgfSk7XG5cbiAgLy8gQWxsb3dzIHRoZSBkZXN0cm95ZXIgdG8gYmUgc2VsZWN0ZWQgZm9yIHBsYWNlbWVudFxuICBjb25zdCBkZXN0cm95ZXJPcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICcucGxheWVyLXNoaXBzX19zaGlwX2Rlc3Ryb3llcidcbiAgKTtcbiAgZGVzdHJveWVyT3B0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoY3VycmVudE9wdGlvbikge1xuICAgICAgY3VycmVudE9wdGlvbi5zdHlsZS5zZXRQcm9wZXJ0eSgnYmFja2dyb3VuZC1jb2xvcicsICd3aGl0ZScpO1xuICAgIH1cbiAgICBjdXJyZW50T3B0aW9uID0gZS5jdXJyZW50VGFyZ2V0O1xuICAgIGUuY3VycmVudFRhcmdldC5zdHlsZS5zZXRQcm9wZXJ0eSgnYmFja2dyb3VuZC1jb2xvcicsICdhcXVhbWFyaW5lJyk7XG4gICAgc2VsZWN0ZWRTaGlwID0geyBsZW5ndGg6IDIsIGRpcmVjdGlvbjogJ0RPV04nIH07XG4gICAgc2hvd0RpcmVjdGlvbigpO1xuICB9KTtcbn07XG5cbi8qKlxuICogUmVzZXRzIGFsbCB0aWxlIGNvbG9ycyB0byB3aGl0ZVxuICovXG5jb25zdCByZXNldFRpbGVDb2xvcnMgPSAoKSA9PiB7XG4gIGNvbnN0IHRpbGVzID0gW1xuICAgIC4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nYW1lYm9hcmRfbGVmdCAuZ2FtZWJvYXJkX190aWxlJyksXG4gIF07XG4gIHRpbGVzLmZvckVhY2goKHRpbGUpID0+IHtcbiAgICB0aWxlLnN0eWxlLnNldFByb3BlcnR5KCdiYWNrZ3JvdW5kLWNvbG9yJywgJ3doaXRlJyk7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBTaG93cyB3aGVyZSBhIHNlbGVjdGVkIHNoaXAgd2lsbCBiZSBwbGFjZWQgb24gdGhlIGdyaWQuXG4gKiBAcGFyYW0ge0V2ZW50fSBlXG4gKi9cbmNvbnN0IHNob3dTaGlwUGxhY2VtZW50ID0gKGUpID0+IHtcbiAgaWYgKCFzZWxlY3RlZFNoaXApIHJldHVybjtcbiAgcmVzZXRUaWxlQ29sb3JzKCk7XG5cbiAgbGV0IHRpbGUgPSBlLmN1cnJlbnRUYXJnZXQ7XG4gIGxldCB0aWxlU3RyID0gdGlsZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGlsZScpO1xuICBsZXQgdGlsZUxldHRlciA9IHRpbGVTdHIuc2xpY2UoMCwgMSkudG9VcHBlckNhc2UoKTtcbiAgbGV0IHRpbGVOdW0gPSBwYXJzZUludCh0aWxlU3RyLnNsaWNlKDEpLCAxMCk7XG4gIHRpbGUuc3R5bGUuc2V0UHJvcGVydHkoJ2JhY2tncm91bmQtY29sb3InLCAnYXF1YW1hcmluZScpO1xuXG4gIC8vIFVwIGRpcmVjdGlvblxuICBpZiAoc2VsZWN0ZWRTaGlwLmRpcmVjdGlvbiA9PT0gJ1VQJykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VsZWN0ZWRTaGlwLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgLy8gRGVjcmVtZW50IHRoZSByb3cgbGV0dGVyXG4gICAgICB0aWxlTGV0dGVyID0gU3RyaW5nLmZyb21DaGFyQ29kZSh0aWxlTGV0dGVyLmNoYXJDb2RlQXQoMCkgLSAxKTtcbiAgICAgIGlmICh0aWxlTGV0dGVyLmNoYXJDb2RlQXQoMCkgPCA2NSkgYnJlYWs7XG4gICAgICB0aWxlU3RyID0gYCR7dGlsZUxldHRlcn0ke3RpbGVOdW19YDtcbiAgICAgIHRpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZ2FtZWJvYXJkX190aWxlX3Bvc18ke3RpbGVTdHJ9YCk7XG4gICAgICB0aWxlLnN0eWxlLnNldFByb3BlcnR5KCdiYWNrZ3JvdW5kLWNvbG9yJywgJ2FxdWFtYXJpbmUnKTtcbiAgICB9XG4gIH1cblxuICAvLyBSaWdodCBkaXJlY3Rpb25cbiAgaWYgKHNlbGVjdGVkU2hpcC5kaXJlY3Rpb24gPT09ICdSSUdIVCcpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlbGVjdGVkU2hpcC5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgIC8vIEluY3JlbWVudCB0aGUgY29sdW1uIG51bWJlclxuICAgICAgdGlsZU51bSsrO1xuICAgICAgaWYgKHRpbGVOdW0gPiAxMCkgYnJlYWs7XG4gICAgICB0aWxlU3RyID0gYCR7dGlsZUxldHRlcn0ke3RpbGVOdW19YDtcbiAgICAgIHRpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZ2FtZWJvYXJkX190aWxlX3Bvc18ke3RpbGVTdHJ9YCk7XG4gICAgICB0aWxlLnN0eWxlLnNldFByb3BlcnR5KCdiYWNrZ3JvdW5kLWNvbG9yJywgJ2FxdWFtYXJpbmUnKTtcbiAgICB9XG4gIH1cblxuICAvLyBEb3duIGRpcmVjdGlvblxuICBpZiAoc2VsZWN0ZWRTaGlwLmRpcmVjdGlvbiA9PT0gJ0RPV04nKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxlY3RlZFNoaXAubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAvLyBJbmNyZW1lbnQgdGhlIHJvdyBsZXR0ZXJcbiAgICAgIHRpbGVMZXR0ZXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHRpbGVMZXR0ZXIuY2hhckNvZGVBdCgwKSArIDEpO1xuICAgICAgaWYgKHRpbGVMZXR0ZXIuY2hhckNvZGVBdCgwKSA+IDc0KSBicmVhaztcbiAgICAgIHRpbGVTdHIgPSBgJHt0aWxlTGV0dGVyfSR7dGlsZU51bX1gO1xuICAgICAgdGlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5nYW1lYm9hcmRfX3RpbGVfcG9zXyR7dGlsZVN0cn1gKTtcbiAgICAgIHRpbGUuc3R5bGUuc2V0UHJvcGVydHkoJ2JhY2tncm91bmQtY29sb3InLCAnYXF1YW1hcmluZScpO1xuICAgIH1cbiAgfVxuXG4gIC8vIExlZnQgZGlyZWN0aW9uXG4gIGlmIChzZWxlY3RlZFNoaXAuZGlyZWN0aW9uID09PSAnTEVGVCcpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlbGVjdGVkU2hpcC5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgIC8vIERlY3JlbWVudCB0aGUgY29sdW1uIG51bWJlclxuICAgICAgdGlsZU51bS0tO1xuICAgICAgaWYgKHRpbGVOdW0gPCAxKSBicmVhaztcbiAgICAgIHRpbGVTdHIgPSBgJHt0aWxlTGV0dGVyfSR7dGlsZU51bX1gO1xuICAgICAgdGlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5nYW1lYm9hcmRfX3RpbGVfcG9zXyR7dGlsZVN0cn1gKTtcbiAgICAgIHRpbGUuc3R5bGUuc2V0UHJvcGVydHkoJ2JhY2tncm91bmQtY29sb3InLCAnYXF1YW1hcmluZScpO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBFdmVudCBoYW5kbGVyIHRvIGFsbG93IHBsYXllciB0byByb3RhdGUgYSBzaGlwJ3MgZGlyZWN0aW9uIGR1cmluZyBwbGFjZW1lbnQuXG4gKiBAcGFyYW0ge0V2ZW50fSBlXG4gKi9cbmNvbnN0IGhhbmRsZVJvdGF0aW9uID0gKGUpID0+IHtcbiAgaWYgKCFzZWxlY3RlZFNoaXApIHJldHVybjtcbiAgc2VsZWN0ZWRTaGlwLmRpcmVjdGlvbiA9IGUuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZGlyJyk7XG4gIHNob3dEaXJlY3Rpb24oKTtcbn07XG5cbi8qKlxuICogQWxsb3dzIGEgcGxheWVyIHRvIHBsYWNlIHRoZWlyIHNlbGVjdGVkIHNoaXAgYmVmb3JlIGdhbWUgc3RhcnQuXG4gKi9cbmNvbnN0IGhhbmRsZVNoaXBQbGFjZW1lbnQgPSAoZSkgPT4ge1xuICBjb25zdCB0aWxlU3RyID0gZS5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS10aWxlJyk7XG5cbiAgdHJ5IHtcbiAgICBwbGF5ZXJCb2FyZC5wbGFjZVNoaXAoc2VsZWN0ZWRTaGlwLmxlbmd0aCwge1xuICAgICAgb3JpZ2luOiB0aWxlU3RyLFxuICAgICAgZGlyZWN0aW9uOiBzZWxlY3RlZFNoaXAuZGlyZWN0aW9uLFxuICAgIH0pO1xuICAgIHNlbGVjdGVkU2hpcCA9IG51bGw7XG4gICAgdXBkYXRlUGxheWVyU2hpcFN0YXR1cygpO1xuICAgIGNsZWFyRGlyZWN0aW9uKCk7XG4gICAgcmVuZGVyQm9hcmQocGxheWVyQm9hcmQsIHRydWUpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gIH1cbn07XG5cbi8qKlxuICogSW5pdGlhbGl6ZXMgdGhlIHN0YXJ0IG9mIHRoZSBnYW1lLlxuICovXG5jb25zdCBpbml0aWFsaXplID0gKCkgPT4ge1xuICBwbGF5ZXIgPSBQbGF5ZXIoJ0JvYicpO1xuICBjb21wdXRlciA9IFBsYXllcigpO1xuICBwbGF5ZXJCb2FyZCA9IEdhbWVib2FyZCgpO1xuICBjb21wdXRlckJvYXJkID0gR2FtZWJvYXJkKCk7XG5cbiAgcmVuZGVyQm9hcmQocGxheWVyQm9hcmQsIHRydWUpO1xuICByZW5kZXJCb2FyZChjb21wdXRlckJvYXJkLCBmYWxzZSk7XG4gIHJlZ2lzdGVyU2hpcFNlbGVjdG9ycygpO1xuXG4gIC8vIFJlZ2lzdGVycyBldmVudCBoYW5kbGVycyBmb3Igc2hpcCByb3RhdGlvbiBidXR0b25zXG4gIGNvbnN0IHJvdGF0b3JzID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaGlwLWRpcmVjdGlvbl9fcm90YXRvcicpXTtcbiAgcm90YXRvcnMuZm9yRWFjaCgocm90YXRvcikgPT4ge1xuICAgIHJvdGF0b3IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVSb3RhdGlvbik7XG4gIH0pO1xuXG4gIC8vIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZWJvYXJkX2xlZnQgLmdhbWVib2FyZF9fdGlsZS1ncmlkJyk7XG4gIC8vIGdyaWQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHJlc2V0VGlsZUNvbG9ycyk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBpbml0aWFsaXplO1xuIiwiY29uc3QgU2hpcCA9IHJlcXVpcmUoJy4vU2hpcCcpO1xuXG4vKipcbiAqIEhlbHBlciBmdW5jdGlvbiB0byBjb252ZXJ0IGEgdGlsZSBzdHJpbmcgdG8gYXJyYXkgaW5kZXhlcyBmb3IgdGhlIGdyaWQuXG4gKiBAcGFyYW0ge3N0cmluZ30gdGlsZVN0ciBSZXByZXNlbnRzIGEgdGlsZSAoZS5nLiAnQTEnKS5cbiAqIEByZXR1cm5zIE9iamVjdCB3aXRoICdyb3cnIGFuZCAnY29sJyBwcm9wZXJ0aWVzLlxuICovXG5jb25zdCB0b0dyaWRDb29yZCA9ICh0aWxlU3RyKSA9PiB7XG4gIC8vIENvbnZlcnQgcm93IHN1YnN0cmluZyB0byB1cHBlcmNhc2UgQVNDSUkgY29kZSBhbmQgc3VidHJhY3QgNjVcbiAgY29uc3Qgcm93ID0gdGlsZVN0ci5zbGljZSgwLCAxKS50b1VwcGVyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgLSA2NTtcbiAgY29uc3QgY29sID0gcGFyc2VJbnQodGlsZVN0ci5zbGljZSgxKSwgMTApIC0gMTtcbiAgcmV0dXJuIHsgcm93LCBjb2wgfTtcbn07XG5cbi8qKlxuICogR2FtZWJvYXJkIGZhY3RvcnkgZnVuY3Rpb24uXG4gKiBAcmV0dXJucyBBbiBpbnRlcmZhY2UgZm9yIHRoZSBnYW1lYm9hcmQuXG4gKi9cbmNvbnN0IEdhbWVib2FyZCA9ICgpID0+IHtcbiAgLy8gQ3JlYXRlcyBhIDJEIGdyaWQgb2YgdGlsZXMgYW5kIHRoZWlyIGFzc29jaWF0ZWQgcHJvcGVydGllc1xuICBsZXQgZ3JpZCA9IFsuLi5uZXcgQXJyYXkoMTApXS5tYXAoKCkgPT5cbiAgICBbLi4ubmV3IEFycmF5KDEwKV0ubWFwKCgpID0+ICh7IHNoaXA6IG51bGwsIHN0YXR1czogMCB9KSlcbiAgKTtcblxuICAvLyBDb250YWlucyBzaGlwcyB0aGF0IGFyZSBwcmVzZW50IG9uIHRoZSBib2FyZFxuICBjb25zdCBzaGlwcyA9IFtdO1xuXG4gIC8qKlxuICAgKiBQbGFjZXMgYSBuZXcgc2hpcCBvbiB0aGUgZ2FtZWJvYXJkLlxuICAgKiBAcGFyYW0ge251bWJlcn0gbGVuIExlbmd0aCBvZiB0aGUgc2hpcCB0byBwbGFjZS5cbiAgICogQHBhcmFtIHtvYmplY3R9IHBvcyBQb3NpdGlvbiBvZiB0aGUgc2hpcC5cbiAgICovXG4gIGNvbnN0IHBsYWNlU2hpcCA9IChsZW4sIHBvcykgPT4ge1xuICAgIGNvbnN0IHNoaXAgPSBTaGlwKGxlbiwgcG9zKTtcbiAgICBjb25zdCBzaGlwRGlyZWN0aW9uID0gc2hpcC5nZXRQb3NpdGlvbigpLmRpcmVjdGlvbjtcbiAgICBjb25zdCBncmlkQ29weSA9IFsuLi5ncmlkXTtcbiAgICBjb25zdCBncmlkQ29vcmQgPSB0b0dyaWRDb29yZChzaGlwLmdldFBvc2l0aW9uKCkub3JpZ2luKTtcbiAgICBjb25zdCBlcnIgPSAnU2hpcCBjYW5ub3QgYmUgcGxhY2VkIG9uIG9jY3VwaWVkIHRpbGVzJztcblxuICAgIGlmIChzaGlwRGlyZWN0aW9uID09PSAnVVAnKSB7XG4gICAgICBsZXQgeyByb3csIGNvbCB9ID0gZ3JpZENvb3JkOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHByZWZlci1jb25zdFxuICAgICAgZm9yIChsZXQgaSA9IGxlbjsgaSA+IDA7IGktLSkge1xuICAgICAgICBpZiAoZ3JpZENvcHlbcm93XVtjb2xdLnNoaXApIHRocm93IG5ldyBFcnJvcihlcnIpO1xuICAgICAgICBncmlkQ29weVtyb3ddW2NvbF0uc2hpcCA9IHNoaXA7XG4gICAgICAgIHJvdy0tO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoc2hpcERpcmVjdGlvbiA9PT0gJ0RPV04nKSB7XG4gICAgICBsZXQgeyByb3csIGNvbCB9ID0gZ3JpZENvb3JkOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHByZWZlci1jb25zdFxuICAgICAgZm9yIChsZXQgaSA9IGxlbjsgaSA+IDA7IGktLSkge1xuICAgICAgICBpZiAoZ3JpZENvcHlbcm93XVtjb2xdLnNoaXApIHRocm93IG5ldyBFcnJvcihlcnIpO1xuICAgICAgICBncmlkQ29weVtyb3ddW2NvbF0uc2hpcCA9IHNoaXA7XG4gICAgICAgIHJvdysrO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoc2hpcERpcmVjdGlvbiA9PT0gJ0xFRlQnKSB7XG4gICAgICBsZXQgeyByb3csIGNvbCB9ID0gZ3JpZENvb3JkOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHByZWZlci1jb25zdFxuICAgICAgZm9yIChsZXQgaSA9IGxlbjsgaSA+IDA7IGktLSkge1xuICAgICAgICBpZiAoZ3JpZENvcHlbcm93XVtjb2xdLnNoaXApIHRocm93IG5ldyBFcnJvcihlcnIpO1xuICAgICAgICBncmlkQ29weVtyb3ddW2NvbF0uc2hpcCA9IHNoaXA7XG4gICAgICAgIGNvbC0tO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoc2hpcERpcmVjdGlvbiA9PT0gJ1JJR0hUJykge1xuICAgICAgbGV0IHsgcm93LCBjb2wgfSA9IGdyaWRDb29yZDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBwcmVmZXItY29uc3RcbiAgICAgIGZvciAobGV0IGkgPSBsZW47IGkgPiAwOyBpLS0pIHtcbiAgICAgICAgaWYgKGdyaWRDb3B5W3Jvd11bY29sXS5zaGlwKSB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcbiAgICAgICAgZ3JpZENvcHlbcm93XVtjb2xdLnNoaXAgPSBzaGlwO1xuICAgICAgICBjb2wrKztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgcGxhY2Ugc2hpcDogU2hpcCBkaXJlY3Rpb24gaW52YWxpZCcpO1xuICAgIH1cbiAgICBzaGlwcy5wdXNoKHNoaXApO1xuICAgIGdyaWQgPSBncmlkQ29weTtcbiAgICByZXR1cm4gc2hpcDtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRpbGUgQSB0aWxlIG9uIHRoZSBncmlkIChlLmcuICdBMScpLlxuICAgKiBAcmV0dXJucyBPYmplY3QgY29udGFpbmluZyB0aWxlIHByb3BlcnRpZXMuXG4gICAqL1xuICBjb25zdCBnZXRUaWxlID0gKHRpbGVTdHIpID0+IHtcbiAgICBjb25zdCB7IHJvdywgY29sIH0gPSB0b0dyaWRDb29yZCh0aWxlU3RyKTtcbiAgICByZXR1cm4gZ3JpZFtyb3ddW2NvbF07XG4gIH07XG5cbiAgLyoqXG4gICAqIEFsbG93cyBhIGJvYXJkIHRvIHJlZ2lzdGVyIGEgaGl0IG9yIG1pc3MgZm9yIGEgdGlsZS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHRpbGVTdHIgUmVwcmVzZW50cyB0aGUgdGlsZSB0byBhdHRhY2suXG4gICAqIEByZXR1cm5zIHRydWUgaWYgc3VjY2Vzc2Z1bCBvciBmYWxzZSBpZiB0aWxlIGhhcyBhbHJlYWR5IGJlZW4gYXR0YWNrZWQuXG4gICAqL1xuICBjb25zdCByZWNlaXZlQXR0YWNrID0gKHRpbGVTdHIpID0+IHtcbiAgICBsZXQgdGlsZTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IHJvdywgY29sIH0gPSB0b0dyaWRDb29yZCh0aWxlU3RyKTtcbiAgICAgIHRpbGUgPSBncmlkW3Jvd11bY29sXTtcbiAgICB9IGNhdGNoIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCB0aWxlIGNvb3JkaW5hdGVzJyk7XG4gICAgfVxuXG4gICAgLy8gVGlsZSBoYXMgYWxyZWFkeSBiZWVuIGF0dGFja2VkXG4gICAgaWYgKHRpbGUuc3RhdHVzICE9PSAwKSByZXR1cm4gZmFsc2U7XG5cbiAgICAvLyBIaXRzIGEgc2hpcCBpZiBpdCBvY2N1cGllcyB0aGUgdGlsZSwgb3RoZXJ3aXNlIHRpbGUgaXMgbWFya2VkIGFzIG1pc3NlZFxuICAgIGlmICh0aWxlLnNoaXApIHtcbiAgICAgIHRpbGUuc2hpcC5oaXQoKTtcbiAgICAgIHRpbGUuc3RhdHVzID0gMjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGlsZS5zdGF0dXMgPSAxO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcmV0dXJucyB0cnVlIGlmIG5vIHVuc3VuayBzaGlwcyByZW1haW4sIGZhbHNlIG90aGVyd2lzZS5cbiAgICovXG4gIGNvbnN0IGlzRGVmZWF0ZWQgPSAoKSA9PiB7XG4gICAgaWYgKHNoaXBzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgLy8gQ2hlY2tzIGlmIHRoZXJlIGFyZSBhbnkgdW5zdW5rIHNoaXBzIHJlbWFpbmluZ1xuICAgIGlmIChzaGlwcy5maWx0ZXIoKHNoaXApID0+ICFzaGlwLmlzU3VuaygpKS5sZW5ndGggPiAwKSByZXR1cm4gZmFsc2U7XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICAvKipcbiAgICogQHJldHVybnMgQW4gYXJyYXkgY29udGFpbmluZyBzdGF0dXMgb2YgZWFjaCBzaGlwLlxuICAgKi9cbiAgY29uc3QgZ2V0U2hpcFN0YXR1cyA9ICgpID0+IHtcbiAgICBjb25zdCBzaGlwU3RhdHVzID0gW107XG5cbiAgICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICBzaGlwU3RhdHVzLnB1c2goe1xuICAgICAgICBsZW5ndGg6IHNoaXAuZ2V0TGVuZ3RoKCksXG4gICAgICAgIGhpdHM6IHNoaXAuZ2V0SGl0cygpLFxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc2hpcFN0YXR1cztcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHBsYWNlU2hpcCxcbiAgICBnZXRUaWxlLFxuICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgaXNEZWZlYXRlZCxcbiAgICBnZXRTaGlwU3RhdHVzLFxuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBHYW1lYm9hcmQ7XG4iLCIvKipcbiAqIFJlcHJlc2VudHMgYSBwbGF5ZXIuIElmIG5vIG5hbWUgaXMgZ2l2ZW4sIGEgY29tcHV0ZXIgcGxheWVyIHdpbGwgYmUgc2V0IHVwLlxuICogQHBhcmFtIHtzdHJpbmd9IG4gUGxheWVyIG5hbWUuIElmIGVtcHR5LCBwbGF5ZXIgYmVjb21lcyBhIGNvbXB1dGVyLlxuICogQHJldHVybnMgVGhlIFBsYXllciBpbnRlcmZhY2UuXG4gKi9cbmNvbnN0IFBsYXllciA9IChuKSA9PiB7XG4gIGNvbnN0IG5hbWUgPSBuIHx8ICdDb21wdXRlcic7XG5cbiAgLy8gUG9wdWxhdGVzIHZhbGlkIG1vdmVzIGZvciB0aGUgY29tcHV0ZXIgcGxheWVyXG4gIGNvbnN0IG1vdmVzID0gW107XG4gIGlmICghbikge1xuICAgIGZvciAobGV0IGNoYXIgPSA2NTsgY2hhciA8PSA3NDsgY2hhcisrKSB7XG4gICAgICBmb3IgKGxldCBudW0gPSAxOyBudW0gPD0gMTA7IG51bSsrKSB7XG4gICAgICAgIG1vdmVzLnB1c2goU3RyaW5nLmZyb21DaGFyQ29kZShjaGFyKS5jb25jYXQobnVtLnRvU3RyaW5nKCkpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybnMgVGhlIHBsYXllcidzIG5hbWUuXG4gICAqL1xuICBjb25zdCBnZXROYW1lID0gKCkgPT4gbmFtZTtcblxuICAvKipcbiAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgcGxheWVyIG9iamVjdCByZXByZXNlbnRzIGEgaHVtYW4gcGxheWVyLlxuICAgKi9cbiAgY29uc3QgaXNIdW1hbiA9ICgpID0+ICEhbjtcblxuICAvKipcbiAgICogQWxsb3dzIGEgcGxheWVyIHRvIGF0dGFjayBhIGdhbWVib2FyZCBhdCBhIHNwZWNpZmljIHRpbGUgb3IgYXQgYSByYW5kb21cbiAgICogdGlsZS5cbiAgICogQHBhcmFtIHtvYmplY3R9IGdhbWVib2FyZCBUaGUgZ2FtZWJvYXJkIHRvIGF0dGFjay5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHRpbGUgVGhlIHRpbGUgdG8gYXR0YWNrIChlLmcuICdBMScpLlxuICAgKiBAcmV0dXJucyBUaGUgdGlsZSB0aGF0IHdhcyBzdWNjZXNzZnVsbHkgYXR0YWNrIG9yIG51bGwgb3RoZXJ3aXNlLlxuICAgKi9cbiAgY29uc3QgYXR0YWNrID0gKGdhbWVib2FyZCwgdGlsZSA9IG51bGwpID0+IHtcbiAgICAvLyBQbGF5ZXIgYXR0YWNrcyBhIHNwZWNpZmljIHRpbGVcbiAgICBpZiAodGlsZSkgcmV0dXJuIGdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKHRpbGUpID8gdGlsZSA6IG51bGw7XG5cbiAgICAvLyBDb21wdXRlciBwbGF5ZXIgYXR0YWNrcyByYW5kb20gdGlsZVxuICAgIGlmIChtb3Zlcy5sZW5ndGggPT09IDApIHRocm93IG5ldyBFcnJvcignTm8gdmFsaWQgbW92ZXMgcmVtYWluaW5nJyk7XG4gICAgY29uc3QgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtb3Zlcy5sZW5ndGgpO1xuICAgIGNvbnN0IHJhbmRvbVRpbGUgPSBtb3Zlcy5hdChyYW5kb21JbmRleCk7XG4gICAgaWYgKGdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKHJhbmRvbVRpbGUpKSB7XG4gICAgICBtb3Zlcy5zcGxpY2UocmFuZG9tSW5kZXgsIDEpO1xuICAgICAgcmV0dXJuIHJhbmRvbVRpbGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXROYW1lLFxuICAgIGlzSHVtYW4sXG4gICAgYXR0YWNrLFxuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBQbGF5ZXI7XG4iLCIvKipcbiAqIENoZWNrcyBpZiB0aGUgZ2l2ZW4gcG9zaXRpb24gY29uZm9ybXMgdG8gdGhlIGV4cGVjdGVkIHN0cnVjdHVyZSBhbmQgdmFsdWVzXG4gKiBAcGFyYW0ge251bWJlcn0gbGVuIFNoaXAgbGVuZ3RoXG4gKiBAcGFyYW0ge29iamVjdH0gcG9zIFNoaXAgcG9zaXRpb25cbiAqIEByZXR1cm5zIHRydWUgaWYgcG9zaXRpb24gaXMgdmFsaWQsIGZhbHNlIG90aGVyd2lzZVxuICovXG5jb25zdCBwb3NJc1ZhbGlkID0gKGxlbiwgcG9zKSA9PiB7XG4gIHRyeSB7XG4gICAgLy8gQ2hlY2sgb3JpZ2luXG4gICAgY29uc3Qgb3JpZ2luTGV0dGVyID0gcG9zLm9yaWdpbi5zbGljZSgwLCAxKS50b1VwcGVyQ2FzZSgpO1xuICAgIGNvbnN0IG9yaWdpbk51bSA9IHBhcnNlSW50KHBvcy5vcmlnaW4uc2xpY2UoMSksIDEwKTtcbiAgICBpZiAoIW9yaWdpbkxldHRlci5tYXRjaCgvW0EtSl0vKSB8fCAhKG9yaWdpbk51bSA+PSAxICYmIG9yaWdpbk51bSA8PSAxMCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBDaGVjayBkaXJlY3Rpb25cbiAgICBjb25zdCBkaXJlY3Rpb24gPSBwb3MuZGlyZWN0aW9uLnRvVXBwZXJDYXNlKCk7XG4gICAgaWYgKFxuICAgICAgZGlyZWN0aW9uICE9PSAnVVAnICYmXG4gICAgICBkaXJlY3Rpb24gIT09ICdET1dOJyAmJlxuICAgICAgZGlyZWN0aW9uICE9PSAnTEVGVCcgJiZcbiAgICAgIGRpcmVjdGlvbiAhPT0gJ1JJR0hUJ1xuICAgICkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIENoZWNrIG92ZXJmbG93XG4gICAgaWYgKFxuICAgICAgKGRpcmVjdGlvbiA9PT0gJ1VQJyAmJiBvcmlnaW5MZXR0ZXIuY2hhckNvZGVBdCgwKSAtIChsZW4gLSAxKSA8IDY1KSB8fFxuICAgICAgKGRpcmVjdGlvbiA9PT0gJ0RPV04nICYmIG9yaWdpbkxldHRlci5jaGFyQ29kZUF0KDApICsgKGxlbiAtIDEpID4gNzQpIHx8XG4gICAgICAoZGlyZWN0aW9uID09PSAnTEVGVCcgJiYgb3JpZ2luTnVtIC0gKGxlbiAtIDEpIDwgMSkgfHxcbiAgICAgIChkaXJlY3Rpb24gPT09ICdSSUdIVCcgJiYgb3JpZ2luTnVtICsgKGxlbiAtIDEpID4gMTApXG4gICAgKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbi8qKlxuICogU2hpcCBmYWN0b3J5IGZ1bmN0aW9uLlxuICogQHBhcmFtIHtudW1iZXJ9IGxlbiBMZW5ndGggb2Ygc2hpcCBmcm9tIGJlIGluIHJhbmdlIFsyLTVdLlxuICogQHBhcmFtIHtvYmplY3R9IHBvcyBQb3NpdGlvbiBtdXN0IGNvbnRhaW4gb3JpZ2luIGFuZCBkaXJlY3Rpb24gcHJvcGVydGllcy5cbiAqIEByZXR1cm5zIEFuIGludGVyZmFjZSBmb3IgdGhlIHNoaXAuXG4gKi9cbmNvbnN0IFNoaXAgPSAobGVuLCBwb3MpID0+IHtcbiAgaWYgKCFOdW1iZXIuaXNJbnRlZ2VyKGxlbikgfHwgbGVuIDwgMiB8fCBsZW4gPiA1KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHNoaXAgbGVuZ3RoJyk7XG4gIH1cblxuICBpZiAoIXBvc0lzVmFsaWQobGVuLCBwb3MpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHNoaXAgcG9zaXRpb24nKTtcbiAgfVxuXG4gIC8vIEluaXRpYWxpemUgdmFsdWVzXG4gIGNvbnN0IGxlbmd0aCA9IGxlbjtcbiAgY29uc3QgcG9zaXRpb24gPSB7XG4gICAgb3JpZ2luOiBwb3Mub3JpZ2luLnRvVXBwZXJDYXNlKCksXG4gICAgZGlyZWN0aW9uOiBwb3MuZGlyZWN0aW9uLnRvVXBwZXJDYXNlKCksXG4gIH07XG4gIGxldCBoaXRzID0gMDtcblxuICAvKipcbiAgICogQHJldHVybnMgTGVuZ3RoIG9mIHRoZSBzaGlwLlxuICAgKi9cbiAgY29uc3QgZ2V0TGVuZ3RoID0gKCkgPT4gbGVuZ3RoO1xuXG4gIC8qKlxuICAgKiBAcmV0dXJucyBOdW1iZXIgb2YgZW5lbXkgaGl0cyBvbiB0aGUgc2hpcC5cbiAgICovXG4gIGNvbnN0IGdldEhpdHMgPSAoKSA9PiBoaXRzO1xuXG4gIC8qKlxuICAgKiBAcmV0dXJucyB0cnVlIGlmIHRoZSBzaGlwIGhhcyBzdW5rLCBmYWxzZSBvdGhlcndpc2UuXG4gICAqL1xuICBjb25zdCBpc1N1bmsgPSAoKSA9PiB7XG4gICAgaWYgKGhpdHMgPj0gbGVuZ3RoKSByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIEFuIG9iamVjdCByZXByZXNlbnRpbmcgdGhlIHBvc2l0aW9uIG9mIGEgc2hpcC5cbiAgICovXG4gIGNvbnN0IGdldFBvc2l0aW9uID0gKCkgPT4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShwb3NpdGlvbikpO1xuXG4gIC8qKlxuICAgKiBJbmNyZW1lbnRzIHRoZSBoaXQgY291bnRlciBmb3IgdGhlIHNoaXAuXG4gICAqL1xuICBjb25zdCBoaXQgPSAoKSA9PiB7XG4gICAgaGl0cyArPSAxO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0TGVuZ3RoLFxuICAgIGdldEhpdHMsXG4gICAgaXNTdW5rLFxuICAgIGdldFBvc2l0aW9uLFxuICAgIGhpdCxcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gU2hpcDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXMvcmVzZXQuY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvY29udGVudC5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9nYW1lYm9hcmQuY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvc2hpcHMuY3NzJztcbmltcG9ydCBpbml0aWFsaXplIGZyb20gJy4vR2FtZUNvbnRyb2xsZXInO1xuXG5pbml0aWFsaXplKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=