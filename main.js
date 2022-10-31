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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNjOztBQUUxQywyREFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvY29udGVudC5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9nYW1lYm9hcmQuY3NzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvcmVzZXQuY3NzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvc2hpcHMuY3NzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9jb250ZW50LmNzcz8zZGJhIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvZ2FtZWJvYXJkLmNzcz8yMTg3Iiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvcmVzZXQuY3NzPzRjZmIiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9zaGlwcy5jc3M/NmQ2NyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9HYW1lQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvbW9kZWxzL0dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvbW9kZWxzL1BsYXllci5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvbW9kZWxzL1NoaXAuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9jb250ZW50LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsU0FBUztFQUNULFdBQVc7RUFDWCxhQUFhO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmdhbWVib2FyZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTEsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMSwgMWZyKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgd2lkdGg6IG1pbig4MHZ3LCA0MDBweCk7XFxuICBoZWlnaHQ6IG1pbig4MHZ3LCA0MDBweCk7XFxufVxcblxcbi5nYW1lYm9hcmRfYmx1cnJlZCB7XFxuICBmaWx0ZXI6IGJsdXIoM3B4KTtcXG59XFxuXFxuLyogVGlsZXMgKi9cXG5cXG4uZ2FtZWJvYXJkX190aWxlLWdyaWQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLWNvbHVtbjogMiAvIDExO1xcbiAgZ3JpZC1yb3c6IDIgLyAxMTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uZ2FtZWJvYXJkX190aWxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmdhbWVib2FyZF9yaWdodFxcbiAgLmdhbWVib2FyZF9fdGlsZTpob3Zlcjpub3QoLmdhbWVib2FyZF9fdGlsZV9zaGlwLCAuZ2FtZWJvYXJkX190aWxlX2hpdCwgLmdhbWVib2FyZF9fdGlsZV9taXNzZWQpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5nYW1lYm9hcmRfX3RpbGVfc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xcbn1cXG5cXG4uZ2FtZWJvYXJkX190aWxlX21pc3NlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxufVxcblxcbi5nYW1lYm9hcmRfX3RpbGVfaGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLyogTGFiZWxzICovXFxuXFxuLmdhbWVib2FyZF9fY29sLWxhYmVscyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLWNvbHVtbjogMiAvIDExO1xcbiAgZ3JpZC1yb3c6IDEgLyAyO1xcbn1cXG5cXG4uZ2FtZWJvYXJkX19yb3ctbGFiZWxzIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gIGdyaWQtcm93OiAyIC8gMTE7XFxufVxcblxcbi5nYW1lYm9hcmRfX3Jvdy1sYWJlbCxcXG4uZ2FtZWJvYXJkX19jb2wtbGFiZWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLyogU3RhcnQgd2luZG93ICovXFxuXFxuLmdhbWVib2FyZC13cmFwcGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnN0YXJ0LXdpbmRvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uc3RhcnQtd2luZG93X19kaWFsb2cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICB3aWR0aDogNzAlO1xcbiAgaGVpZ2h0OiA0MCU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvZ2FtZWJvYXJkLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsbUNBQW1DO0VBQ25DLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBLFVBQVU7O0FBRVY7RUFDRSxhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLG1DQUFtQztFQUNuQyxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTs7RUFFRSx5QkFBeUI7RUFDekIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQSxXQUFXOztBQUVYO0VBQ0UsYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQ0FBbUM7RUFDbkMsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQSxpQkFBaUI7O0FBRWpCO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLFVBQVU7RUFDVixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5nYW1lYm9hcmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDExLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTEsIDFmcik7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIHdpZHRoOiBtaW4oODB2dywgNDAwcHgpO1xcbiAgaGVpZ2h0OiBtaW4oODB2dywgNDAwcHgpO1xcbn1cXG5cXG4uZ2FtZWJvYXJkX2JsdXJyZWQge1xcbiAgZmlsdGVyOiBibHVyKDNweCk7XFxufVxcblxcbi8qIFRpbGVzICovXFxuXFxuLmdhbWVib2FyZF9fdGlsZS1ncmlkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAxMTtcXG4gIGdyaWQtcm93OiAyIC8gMTE7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmdhbWVib2FyZF9fdGlsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5nYW1lYm9hcmRfcmlnaHRcXG4gIC5nYW1lYm9hcmRfX3RpbGU6aG92ZXI6bm90KC5nYW1lYm9hcmRfX3RpbGVfc2hpcCwgLmdhbWVib2FyZF9fdGlsZV9oaXQsIC5nYW1lYm9hcmRfX3RpbGVfbWlzc2VkKSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkZGRkO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZ2FtZWJvYXJkX190aWxlX3NoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcXG59XFxuXFxuLmdhbWVib2FyZF9fdGlsZV9taXNzZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xcbn1cXG5cXG4uZ2FtZWJvYXJkX190aWxlX2hpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi8qIExhYmVscyAqL1xcblxcbi5nYW1lYm9hcmRfX2NvbC1sYWJlbHMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAxMTtcXG4gIGdyaWQtcm93OiAxIC8gMjtcXG59XFxuXFxuLmdhbWVib2FyZF9fcm93LWxhYmVscyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICBncmlkLXJvdzogMiAvIDExO1xcbn1cXG5cXG4uZ2FtZWJvYXJkX19yb3ctbGFiZWwsXFxuLmdhbWVib2FyZF9fY29sLWxhYmVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi8qIFN0YXJ0IHdpbmRvdyAqL1xcblxcbi5nYW1lYm9hcmQtd3JhcHBlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5zdGFydC13aW5kb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLnN0YXJ0LXdpbmRvd19fZGlhbG9nIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgd2lkdGg6IDcwJTtcXG4gIGhlaWdodDogNDAlO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJyZXNldC5jc3NcXG4gIC8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgICB2Mi4wIHwgMjAxMTAxMjZcXG4gICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4gICovXFxuXFxuICBodG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuICBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuICBhLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuICBkZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuICBzbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbiAgYiwgdSwgaSwgY2VudGVyLFxcbiAgZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG4gIGZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbiAgdGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuICBhcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuICBmaWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbiAgbWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxuICB0aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgZm9udC1zaXplOiAxMDAlO1xcbiAgICBmb250OiBpbmhlcml0O1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxuICB9XFxuICAvKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuICBhcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXG4gIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcbiAgYm9keSB7XFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcbiAgfVxcbiAgb2wsIHVsIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIH1cXG4gIGJsb2NrcXVvdGUsIHEge1xcbiAgICBxdW90ZXM6IG5vbmU7XFxuICB9XFxuICBibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXG4gIHE6YmVmb3JlLCBxOmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGNvbnRlbnQ6IG5vbmU7XFxuICB9XFxuICB0YWJsZSB7XFxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xcbiAgfVxcbiAgLyogQ3VzdG9tIGNoYW5nZSAqL1xcbiAgKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB9XFxuICBcIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3Jlc2V0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQW1CSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLFNBQVM7SUFDVCxlQUFlO0lBQ2YsYUFBYTtJQUNiLHdCQUF3QjtFQUMxQjtFQUNBLGdEQUFnRDtFQUNoRDs7SUFFRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLFlBQVk7RUFDZDtFQUNBOztJQUVFLFdBQVc7SUFDWCxhQUFhO0VBQ2Y7RUFDQTtJQUNFLHlCQUF5QjtJQUN6QixpQkFBaUI7RUFDbkI7RUFDQSxrQkFBa0I7RUFDbEI7SUFDRSxzQkFBc0I7RUFDeEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wicmVzZXQuY3NzXFxuICAvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuICAqL1xcblxcbiAgaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbiAgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbiAgYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbiAgZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbiAgc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG4gIGIsIHUsIGksIGNlbnRlcixcXG4gIGRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuICBmaWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG4gIHRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbiAgYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcbiAgZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG4gIG1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbiAgdGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGZvbnQtc2l6ZTogMTAwJTtcXG4gICAgZm9udDogaW5oZXJpdDtcXG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbiAgfVxcbiAgLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbiAgYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxuICBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG4gIGJvZHkge1xcbiAgICBsaW5lLWhlaWdodDogMTtcXG4gIH1cXG4gIG9sLCB1bCB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICB9XFxuICBibG9ja3F1b3RlLCBxIHtcXG4gICAgcXVvdGVzOiBub25lO1xcbiAgfVxcbiAgYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxuICBxOmJlZm9yZSwgcTphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBjb250ZW50OiBub25lO1xcbiAgfVxcbiAgdGFibGUge1xcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgICBib3JkZXItc3BhY2luZzogMDtcXG4gIH1cXG4gIC8qIEN1c3RvbSBjaGFuZ2UgKi9cXG4gICoge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgfVxcbiAgXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogU2hpcHMgbGlzdCAqL1xcblxcbi5wbGF5ZXItc2hpcC13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gIGdhcDogMjBweDtcXG4gIHdpZHRoOiAxMjVweDtcXG59XFxuXFxuLnBsYXllci1zaGlwcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiA1cHg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ucGxheWVyLXNoaXBzID4gZGl2OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wbGF5ZXItc2hpcHNfX3NoaXAge1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4vKiBTaGlwIGRpcmVjdGlvbiByb3RhdGlvbiAqL1xcblxcbi5zaGlwLWRpcmVjdGlvbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDFmcik7XFxuICBnYXA6IDVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5zaGlwLWRpcmVjdGlvbl9fcm90YXRvciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnNoaXAtZGlyZWN0aW9uX19yb3RhdG9yOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zaGlwLWRpcmVjdGlvbl9fcm90YXRvci5zZWxlY3RlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkZGRkO1xcbn1cXG5cXG4uc2hpcC1kaXJlY3Rpb25fX3RpdGxlIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gNDtcXG4gIGdyaWQtcm93OiAxIC8gMjtcXG59XFxuXFxuLnNoaXAtZGlyZWN0aW9uX19yb3RhdG9yX3VwIHtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gIGdyaWQtcm93OiAyIC8gMztcXG59XFxuXFxuLnNoaXAtZGlyZWN0aW9uX19yb3RhdG9yX3JpZ2h0IHtcXG4gIGdyaWQtY29sdW1uOiAzIC8gNDtcXG4gIGdyaWQtcm93OiAzIC8gNDtcXG59XFxuXFxuLnNoaXAtZGlyZWN0aW9uX19yb3RhdG9yX2Rvd24ge1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgZ3JpZC1yb3c6IDMgLyA0O1xcbn1cXG5cXG4uc2hpcC1kaXJlY3Rpb25fX3JvdGF0b3JfbGVmdCB7XFxuICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICBncmlkLXJvdzogMyAvIDQ7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc2hpcHMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGVBQWU7O0FBRWY7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixRQUFRO0VBQ1IsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUEsNEJBQTRCOztBQUU1QjtFQUNFLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMsa0NBQWtDO0VBQ2xDLFFBQVE7RUFDUix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBTaGlwcyBsaXN0ICovXFxuXFxuLnBsYXllci1zaGlwLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgZ2FwOiAyMHB4O1xcbiAgd2lkdGg6IDEyNXB4O1xcbn1cXG5cXG4ucGxheWVyLXNoaXBzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDVweDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5wbGF5ZXItc2hpcHMgPiBkaXY6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZGRkZDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnBsYXllci1zaGlwc19fc2hpcCB7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi8qIFNoaXAgZGlyZWN0aW9uIHJvdGF0aW9uICovXFxuXFxuLnNoaXAtZGlyZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKTtcXG4gIGdhcDogNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBwYWRkaW5nOiA1cHg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnNoaXAtZGlyZWN0aW9uX19yb3RhdG9yIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uc2hpcC1kaXJlY3Rpb25fX3JvdGF0b3I6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZGRkZDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNoaXAtZGlyZWN0aW9uX19yb3RhdG9yLnNlbGVjdGVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQ7XFxufVxcblxcbi5zaGlwLWRpcmVjdGlvbl9fdGl0bGUge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyA0O1xcbiAgZ3JpZC1yb3c6IDEgLyAyO1xcbn1cXG5cXG4uc2hpcC1kaXJlY3Rpb25fX3JvdGF0b3JfdXAge1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgZ3JpZC1yb3c6IDIgLyAzO1xcbn1cXG5cXG4uc2hpcC1kaXJlY3Rpb25fX3JvdGF0b3JfcmlnaHQge1xcbiAgZ3JpZC1jb2x1bW46IDMgLyA0O1xcbiAgZ3JpZC1yb3c6IDMgLyA0O1xcbn1cXG5cXG4uc2hpcC1kaXJlY3Rpb25fX3JvdGF0b3JfZG93biB7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICBncmlkLXJvdzogMyAvIDQ7XFxufVxcblxcbi5zaGlwLWRpcmVjdGlvbl9fcm90YXRvcl9sZWZ0IHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gIGdyaWQtcm93OiAzIC8gNDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jb250ZW50LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY29udGVudC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2FtZWJvYXJkLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2FtZWJvYXJkLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNldC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2V0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zaGlwcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NoaXBzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgUGxheWVyIGZyb20gJy4vbW9kZWxzL1BsYXllcic7XG5pbXBvcnQgR2FtZWJvYXJkIGZyb20gJy4vbW9kZWxzL0dhbWVib2FyZCc7XG5cbi8vIENvbnRyb2xsZXIgdmFyaWFibGVzXG5sZXQgcGxheWVyID0gbnVsbDtcbmxldCBjb21wdXRlciA9IG51bGw7XG5sZXQgcGxheWVyQm9hcmQgPSBudWxsO1xubGV0IGNvbXB1dGVyQm9hcmQgPSBudWxsO1xubGV0IHN0YXJ0ZWQgPSBmYWxzZTtcbmxldCBzZWxlY3RlZFNoaXAgPSBudWxsO1xubGV0IHBsYXllclNoaXBzID0gW107XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBnYiBHYW1lYm9hcmQgb2JqZWN0LlxuICogQHBhcmFtIHtib29sZWFufSBzaG93U2hpcHMgVHJ1ZSBpZiBnYW1lYm9hcmQgc2hvdWxkIGRpc3BsYXkgc2hpcCBwb3NpdGlvbnNcbiAqL1xuY29uc3QgcmVuZGVyQm9hcmQgPSAoZ2FtZWJvYXJkLCBzaG93U2hpcHMpID0+IHtcbiAgbGV0IHRpbGVHcmlkO1xuXG4gIC8vIFNlbGVjdHMgdGhlIGFwcHJvcHJpYXRlIGJvYXJkXG4gIGlmIChzaG93U2hpcHMpIHtcbiAgICB0aWxlR3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAnLmdhbWVib2FyZF9sZWZ0ID4gLmdhbWVib2FyZF9fdGlsZS1ncmlkJ1xuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgdGlsZUdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgJy5nYW1lYm9hcmRfcmlnaHQgPiAuZ2FtZWJvYXJkX190aWxlLWdyaWQnXG4gICAgKTtcbiAgfVxuXG4gIC8vIENsZWFycyBwcmV2aW91cyByZW5kZXJpbmdcbiAgd2hpbGUgKHRpbGVHcmlkLmZpcnN0Q2hpbGQpIHtcbiAgICB0aWxlR3JpZC5yZW1vdmVDaGlsZCh0aWxlR3JpZC5maXJzdENoaWxkKTtcbiAgfVxuXG4gIC8vIENyZWF0ZXMgdGhlIGdyaWQgdGlsZXNcbiAgbGV0IGNoYXJDb2RlID0gNjU7XG4gIGZvciAoOyBjaGFyQ29kZSA8PSA3NDsgY2hhckNvZGUrKykge1xuICAgIGZvciAobGV0IGNvbCA9IDE7IGNvbCA8PSAxMDsgY29sKyspIHtcbiAgICAgIGNvbnN0IHRpbGVTdHIgPSBgJHtTdHJpbmcuZnJvbUNoYXJDb2RlKGNoYXJDb2RlKX0ke2NvbH1gO1xuICAgICAgY29uc3QgdGlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoJ2dhbWVib2FyZF9fdGlsZScpO1xuICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKGBnYW1lYm9hcmRfX3RpbGVfcG9zXyR7dGlsZVN0cn1gKTtcbiAgICAgIHRpbGUuc2V0QXR0cmlidXRlKCdkYXRhLXRpbGUnLCB0aWxlU3RyKTtcblxuICAgICAgLy8gTWFya3Mgc2hpcCBwb3N0aW9ucyBmb3IgcGxheWVyJ3MgYm9hcmRcbiAgICAgIGlmIChzaG93U2hpcHMgJiYgZ2FtZWJvYXJkLmdldFRpbGUodGlsZVN0cikuc2hpcCkge1xuICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoJ2dhbWVib2FyZF9fdGlsZV9zaGlwJyk7XG4gICAgICB9XG5cbiAgICAgIC8vIE1hcmtzIG1pc3Nlc1xuICAgICAgaWYgKGdhbWVib2FyZC5nZXRUaWxlKHRpbGVTdHIpLnN0YXR1cyA9PT0gMSkge1xuICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoJ2dhbWVib2FyZF9fdGlsZV9taXNzZWQnKTtcbiAgICAgIH1cblxuICAgICAgLy8gTWFya3MgaGl0c1xuICAgICAgaWYgKGdhbWVib2FyZC5nZXRUaWxlKHRpbGVTdHIpLnN0YXR1cyA9PT0gMikge1xuICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoJ2dhbWVib2FyZF9fdGlsZV9oaXQnKTtcbiAgICAgIH1cblxuICAgICAgLy8gUmVnaXN0ZXIgZXZlbnQgbGlzdGVuZXJzIG9uIHVuY2xpY2tlZCB0YXJnZXQgYm9hcmQgdGlsZXNcbiAgICAgIGlmIChzdGFydGVkICYmICFzaG93U2hpcHMgJiYgZ2FtZWJvYXJkLmdldFRpbGUodGlsZVN0cikuc3RhdHVzID09PSAwKSB7XG4gICAgICAgIHRpbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVQbGF5ZXJBdHRhY2spO1xuICAgICAgfVxuXG4gICAgICAvLyBSZWdpc3RlciBldmVudCBsaXN0ZW5lcnMgb24gcGxheWVyIGJvYXJkIGZvciBnYW1lIHN0YXJ0IHNoaXAgcGxhY2VtZW50XG4gICAgICBpZiAoIXN0YXJ0ZWQgJiYgc2hvd1NoaXBzKSB7XG4gICAgICAgIHRpbGUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgc2hvd1NoaXBQbGFjZW1lbnQpO1xuICAgICAgICB0aWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlU2hpcFBsYWNlbWVudCk7XG4gICAgICB9XG5cbiAgICAgIHRpbGVHcmlkLmFwcGVuZENoaWxkKHRpbGUpO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBBbGxvd3MgdGhlIGdhbWUgdG8gZW5kIGFuZCBwcmV2ZW50cyBhbnkgbW9yZSBtb3ZlcyBmcm9tIGJlaW5nIG1hZGUuXG4gKi9cbmNvbnN0IGVuZEdhbWUgPSAoKSA9PiB7XG4gIGNvbnN0IHRpbGVzID0gW1xuICAgIC4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nYW1lYm9hcmRfcmlnaHQgLmdhbWVib2FyZF9fdGlsZScpLFxuICBdO1xuXG4gIHRpbGVzLmZvckVhY2goKHRpbGUpID0+XG4gICAgdGlsZS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVBsYXllckF0dGFjaylcbiAgKTtcbn07XG5cbi8qKlxuICogQWxsb3dzIHRoZSBjb21wdXRlciB0byBtYWtlIGl0cyB0dXJuIGFnYWluc3QgdGhlIHBsYXllciB3aGVuIHRoZSBwbGF5ZXInc1xuICogdHVybiBpcyBvdmVyLlxuICovXG5jb25zdCBlbmRUdXJuID0gKCkgPT4ge1xuICBpZiAoY29tcHV0ZXJCb2FyZC5pc0RlZmVhdGVkKCkpIHtcbiAgICBjb25zb2xlLmxvZyhgJHtwbGF5ZXIuZ2V0TmFtZSgpfSB3aW5zIWApO1xuICAgIGVuZEdhbWUoKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb21wdXRlci5hdHRhY2socGxheWVyQm9hcmQpO1xuICByZW5kZXJCb2FyZChwbGF5ZXJCb2FyZCwgdHJ1ZSk7XG5cbiAgaWYgKHBsYXllckJvYXJkLmlzRGVmZWF0ZWQoKSkge1xuICAgIGNvbnNvbGUubG9nKGAke2NvbXB1dGVyLmdldE5hbWUoKX0gd2lucyFgKTtcbiAgICBlbmRHYW1lKCk7XG4gIH1cbn07XG5cbi8qKlxuICogRXZlbnQgaGFuZGxlciBmb3Igd2hlbiB0aGUgcGxheWVyIGNsaWNrcyBvbiBhIHRpbGUgdG8gYXR0YWNrLlxuICogQHBhcmFtIHtFdmVudH0gZVxuICovXG5jb25zdCBoYW5kbGVQbGF5ZXJBdHRhY2sgPSAoZSkgPT4ge1xuICBjb25zdCB0aWxlU3RyID0gZS5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS10aWxlJyk7XG4gIGNvbnN0IGF0dGFja2VkVGlsZSA9IHBsYXllci5hdHRhY2soY29tcHV0ZXJCb2FyZCwgdGlsZVN0cik7XG4gIGlmIChhdHRhY2tlZFRpbGUpIHtcbiAgICByZW5kZXJCb2FyZChjb21wdXRlckJvYXJkLCBmYWxzZSk7XG4gICAgZW5kVHVybigpO1xuICB9XG59O1xuXG4vKipcbiAqIFN0YXJ0cyB0aGUgZ2FtZS5cbiAqL1xuLy8gY29uc3Qgc3RhcnRHYW1lID0gKCkgPT4ge1xuLy8gICBzdGFydGVkID0gdHJ1ZTtcbi8vIH07XG5cbi8qKlxuICogQ2xlYXJzIHRoZSBjdXJyZW50bHkgaGlnaGxpZ2h0ZWQgZGlyZWN0aW9uIGR1cmluZyBzaGlwIHBsYWNlbWVudC5cbiAqL1xuY29uc3QgY2xlYXJEaXJlY3Rpb24gPSAoKSA9PiB7XG4gIC8vIENsZWFycyBwcmV2aW91c2x5IGhpZ2hsaWdodGVkIGRpcmVjdGlvblxuICBjb25zdCByb3RhdG9ycyA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2hpcC1kaXJlY3Rpb25fX3JvdGF0b3InKV07XG4gIHJvdGF0b3JzLmZvckVhY2goKHJvdGF0b3IpID0+IHtcbiAgICByb3RhdG9yLnN0eWxlLnNldFByb3BlcnR5KCdiYWNrZ3JvdW5kLWNvbG9yJywgJ3doaXRlJyk7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBIaWdobGlnaHRzIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgc2hpcCBkaXJlY3Rpb24gZHVyaW5nIHBsYWNlbWVudC5cbiAqL1xuY29uc3Qgc2hvd0RpcmVjdGlvbiA9ICgpID0+IHtcbiAgaWYgKCFzZWxlY3RlZFNoaXApIHJldHVybjtcbiAgY2xlYXJEaXJlY3Rpb24oKTtcblxuICAvLyBIaWdobGlnaHRzIHRoZSBjdXJyZW50IGRpcmVjdGlvblxuICBsZXQgcm90YXRvciA9IG51bGw7XG4gIGlmIChzZWxlY3RlZFNoaXAuZGlyZWN0aW9uID09PSAnVVAnKSB7XG4gICAgcm90YXRvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwLWRpcmVjdGlvbl9fcm90YXRvcl91cCcpO1xuICB9IGVsc2UgaWYgKHNlbGVjdGVkU2hpcC5kaXJlY3Rpb24gPT09ICdSSUdIVCcpIHtcbiAgICByb3RhdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXAtZGlyZWN0aW9uX19yb3RhdG9yX3JpZ2h0Jyk7XG4gIH0gZWxzZSBpZiAoc2VsZWN0ZWRTaGlwLmRpcmVjdGlvbiA9PT0gJ0RPV04nKSB7XG4gICAgcm90YXRvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwLWRpcmVjdGlvbl9fcm90YXRvcl9kb3duJyk7XG4gIH0gZWxzZSBpZiAoc2VsZWN0ZWRTaGlwLmRpcmVjdGlvbiA9PT0gJ0xFRlQnKSB7XG4gICAgcm90YXRvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwLWRpcmVjdGlvbl9fcm90YXRvcl9sZWZ0Jyk7XG4gIH1cbiAgcm90YXRvci5zdHlsZS5zZXRQcm9wZXJ0eSgnYmFja2dyb3VuZC1jb2xvcicsICcjZGRkZGRkJyk7XG59O1xuXG5jb25zdCB1cGRhdGVQbGF5ZXJTaGlwU3RhdHVzID0gKCkgPT4ge1xuICBjb25zdCBzaGlwRWxlbWVudHMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBsYXllci1zaGlwc19fc2hpcCcpXTtcbiAgc2hpcEVsZW1lbnRzLmZvckVhY2goKHNoaXBFbGVtZW50KSA9PiB7XG4gICAgc2hpcEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJ2JhY2tncm91bmQtY29sb3InLCAnd2hpdGUnKTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIFJlZ2lzdGVycyBldmVudCBoYW5kbGVycyB0byBhbGxvdyBwbGF5ZXIgdG8gc2VsZWN0IGFuZCBwbGFjZSBzaGlwcy5cbiAqL1xuY29uc3QgcmVnaXN0ZXJTaGlwU2VsZWN0b3JzID0gKCkgPT4ge1xuICBsZXQgY3VycmVudE9wdGlvbiA9IG51bGw7XG5cbiAgLy8gQWxsb3dzIHRoZSBjYXJyaWVyIHRvIGJlIHNlbGVjdGVkIGZvciBwbGFjZW1lbnRcbiAgY29uc3QgY2Fycmllck9wdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXItc2hpcHNfX3NoaXBfY2FycmllcicpO1xuICBjYXJyaWVyT3B0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoY3VycmVudE9wdGlvbikge1xuICAgICAgY3VycmVudE9wdGlvbi5zdHlsZS5zZXRQcm9wZXJ0eSgnYmFja2dyb3VuZC1jb2xvcicsICd3aGl0ZScpO1xuICAgIH1cbiAgICBjdXJyZW50T3B0aW9uID0gZS5jdXJyZW50VGFyZ2V0O1xuICAgIGN1cnJlbnRPcHRpb24uc3R5bGUuc2V0UHJvcGVydHkoJ2JhY2tncm91bmQtY29sb3InLCAnYXF1YW1hcmluZScpO1xuICAgIHNlbGVjdGVkU2hpcCA9IHsgbGVuZ3RoOiA1LCBkaXJlY3Rpb246ICdET1dOJyB9O1xuICAgIHNob3dEaXJlY3Rpb24oKTtcbiAgfSk7XG5cbiAgLy8gQWxsb3dzIHRoZSBiYXR0bGVzaGlwIHRvIGJlIHNlbGVjdGVkIGZvciBwbGFjZW1lbnRcbiAgY29uc3QgYmF0dGxlc2hpcE9wdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgJy5wbGF5ZXItc2hpcHNfX3NoaXBfYmF0dGxlc2hpcCdcbiAgKTtcbiAgYmF0dGxlc2hpcE9wdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKGN1cnJlbnRPcHRpb24pIHtcbiAgICAgIGN1cnJlbnRPcHRpb24uc3R5bGUuc2V0UHJvcGVydHkoJ2JhY2tncm91bmQtY29sb3InLCAnd2hpdGUnKTtcbiAgICB9XG4gICAgY3VycmVudE9wdGlvbiA9IGUuY3VycmVudFRhcmdldDtcbiAgICBlLmN1cnJlbnRUYXJnZXQuc3R5bGUuc2V0UHJvcGVydHkoJ2JhY2tncm91bmQtY29sb3InLCAnYXF1YW1hcmluZScpO1xuICAgIHNlbGVjdGVkU2hpcCA9IHsgbGVuZ3RoOiA0LCBkaXJlY3Rpb246ICdET1dOJyB9O1xuICAgIHNob3dEaXJlY3Rpb24oKTtcbiAgfSk7XG5cbiAgLy8gQWxsb3dzIHRoZSBjcnVpc2VyIHRvIGJlIHNlbGVjdGVkIGZvciBwbGFjZW1lbnRcbiAgY29uc3QgY3J1aXNlck9wdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXItc2hpcHNfX3NoaXBfY3J1aXNlcicpO1xuICBjcnVpc2VyT3B0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoY3VycmVudE9wdGlvbikge1xuICAgICAgY3VycmVudE9wdGlvbi5zdHlsZS5zZXRQcm9wZXJ0eSgnYmFja2dyb3VuZC1jb2xvcicsICd3aGl0ZScpO1xuICAgIH1cbiAgICBjdXJyZW50T3B0aW9uID0gZS5jdXJyZW50VGFyZ2V0O1xuICAgIGUuY3VycmVudFRhcmdldC5zdHlsZS5zZXRQcm9wZXJ0eSgnYmFja2dyb3VuZC1jb2xvcicsICdhcXVhbWFyaW5lJyk7XG4gICAgc2VsZWN0ZWRTaGlwID0geyBsZW5ndGg6IDMsIGRpcmVjdGlvbjogJ0RPV04nIH07XG4gICAgc2hvd0RpcmVjdGlvbigpO1xuICB9KTtcblxuICAvLyBBbGxvd3MgdGhlIHN1Ym1hcmluZSB0byBiZSBzZWxlY3RlZCBmb3IgcGxhY2VtZW50XG4gIGNvbnN0IHN1Ym1hcmluZU9wdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgJy5wbGF5ZXItc2hpcHNfX3NoaXBfc3VibWFyaW5lJ1xuICApO1xuICBzdWJtYXJpbmVPcHRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmIChjdXJyZW50T3B0aW9uKSB7XG4gICAgICBjdXJyZW50T3B0aW9uLnN0eWxlLnNldFByb3BlcnR5KCdiYWNrZ3JvdW5kLWNvbG9yJywgJ3doaXRlJyk7XG4gICAgfVxuICAgIGN1cnJlbnRPcHRpb24gPSBlLmN1cnJlbnRUYXJnZXQ7XG4gICAgZS5jdXJyZW50VGFyZ2V0LnN0eWxlLnNldFByb3BlcnR5KCdiYWNrZ3JvdW5kLWNvbG9yJywgJ2FxdWFtYXJpbmUnKTtcbiAgICBzZWxlY3RlZFNoaXAgPSB7IGxlbmd0aDogMywgZGlyZWN0aW9uOiAnRE9XTicgfTtcbiAgICBzaG93RGlyZWN0aW9uKCk7XG4gIH0pO1xuXG4gIC8vIEFsbG93cyB0aGUgZGVzdHJveWVyIHRvIGJlIHNlbGVjdGVkIGZvciBwbGFjZW1lbnRcbiAgY29uc3QgZGVzdHJveWVyT3B0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAnLnBsYXllci1zaGlwc19fc2hpcF9kZXN0cm95ZXInXG4gICk7XG4gIGRlc3Ryb3llck9wdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKGN1cnJlbnRPcHRpb24pIHtcbiAgICAgIGN1cnJlbnRPcHRpb24uc3R5bGUuc2V0UHJvcGVydHkoJ2JhY2tncm91bmQtY29sb3InLCAnd2hpdGUnKTtcbiAgICB9XG4gICAgY3VycmVudE9wdGlvbiA9IGUuY3VycmVudFRhcmdldDtcbiAgICBlLmN1cnJlbnRUYXJnZXQuc3R5bGUuc2V0UHJvcGVydHkoJ2JhY2tncm91bmQtY29sb3InLCAnYXF1YW1hcmluZScpO1xuICAgIHNlbGVjdGVkU2hpcCA9IHsgbGVuZ3RoOiAyLCBkaXJlY3Rpb246ICdET1dOJyB9O1xuICAgIHNob3dEaXJlY3Rpb24oKTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIFJlc2V0cyBhbGwgdGlsZSBjb2xvcnMgdG8gd2hpdGVcbiAqL1xuY29uc3QgcmVzZXRUaWxlQ29sb3JzID0gKCkgPT4ge1xuICBjb25zdCB0aWxlcyA9IFtcbiAgICAuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ2FtZWJvYXJkX2xlZnQgLmdhbWVib2FyZF9fdGlsZScpLFxuICBdO1xuICB0aWxlcy5mb3JFYWNoKCh0aWxlKSA9PiB7XG4gICAgdGlsZS5zdHlsZS5zZXRQcm9wZXJ0eSgnYmFja2dyb3VuZC1jb2xvcicsICd3aGl0ZScpO1xuICB9KTtcbn07XG5cbi8qKlxuICogU2hvd3Mgd2hlcmUgYSBzZWxlY3RlZCBzaGlwIHdpbGwgYmUgcGxhY2VkIG9uIHRoZSBncmlkLlxuICogQHBhcmFtIHtFdmVudH0gZVxuICovXG5jb25zdCBzaG93U2hpcFBsYWNlbWVudCA9IChlKSA9PiB7XG4gIGlmICghc2VsZWN0ZWRTaGlwKSByZXR1cm47XG4gIHJlc2V0VGlsZUNvbG9ycygpO1xuXG4gIGxldCB0aWxlID0gZS5jdXJyZW50VGFyZ2V0O1xuICBsZXQgdGlsZVN0ciA9IHRpbGUuZ2V0QXR0cmlidXRlKCdkYXRhLXRpbGUnKTtcbiAgbGV0IHRpbGVMZXR0ZXIgPSB0aWxlU3RyLnNsaWNlKDAsIDEpLnRvVXBwZXJDYXNlKCk7XG4gIGxldCB0aWxlTnVtID0gcGFyc2VJbnQodGlsZVN0ci5zbGljZSgxKSwgMTApO1xuICB0aWxlLnN0eWxlLnNldFByb3BlcnR5KCdiYWNrZ3JvdW5kLWNvbG9yJywgJ2FxdWFtYXJpbmUnKTtcblxuICAvLyBVcCBkaXJlY3Rpb25cbiAgaWYgKHNlbGVjdGVkU2hpcC5kaXJlY3Rpb24gPT09ICdVUCcpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlbGVjdGVkU2hpcC5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgIC8vIERlY3JlbWVudCB0aGUgcm93IGxldHRlclxuICAgICAgdGlsZUxldHRlciA9IFN0cmluZy5mcm9tQ2hhckNvZGUodGlsZUxldHRlci5jaGFyQ29kZUF0KDApIC0gMSk7XG4gICAgICBpZiAodGlsZUxldHRlci5jaGFyQ29kZUF0KDApIDwgNjUpIGJyZWFrO1xuICAgICAgdGlsZVN0ciA9IGAke3RpbGVMZXR0ZXJ9JHt0aWxlTnVtfWA7XG4gICAgICB0aWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmdhbWVib2FyZF9fdGlsZV9wb3NfJHt0aWxlU3RyfWApO1xuICAgICAgdGlsZS5zdHlsZS5zZXRQcm9wZXJ0eSgnYmFja2dyb3VuZC1jb2xvcicsICdhcXVhbWFyaW5lJyk7XG4gICAgfVxuICB9XG5cbiAgLy8gUmlnaHQgZGlyZWN0aW9uXG4gIGlmIChzZWxlY3RlZFNoaXAuZGlyZWN0aW9uID09PSAnUklHSFQnKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxlY3RlZFNoaXAubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAvLyBJbmNyZW1lbnQgdGhlIGNvbHVtbiBudW1iZXJcbiAgICAgIHRpbGVOdW0rKztcbiAgICAgIGlmICh0aWxlTnVtID4gMTApIGJyZWFrO1xuICAgICAgdGlsZVN0ciA9IGAke3RpbGVMZXR0ZXJ9JHt0aWxlTnVtfWA7XG4gICAgICB0aWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmdhbWVib2FyZF9fdGlsZV9wb3NfJHt0aWxlU3RyfWApO1xuICAgICAgdGlsZS5zdHlsZS5zZXRQcm9wZXJ0eSgnYmFja2dyb3VuZC1jb2xvcicsICdhcXVhbWFyaW5lJyk7XG4gICAgfVxuICB9XG5cbiAgLy8gRG93biBkaXJlY3Rpb25cbiAgaWYgKHNlbGVjdGVkU2hpcC5kaXJlY3Rpb24gPT09ICdET1dOJykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VsZWN0ZWRTaGlwLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgLy8gSW5jcmVtZW50IHRoZSByb3cgbGV0dGVyXG4gICAgICB0aWxlTGV0dGVyID0gU3RyaW5nLmZyb21DaGFyQ29kZSh0aWxlTGV0dGVyLmNoYXJDb2RlQXQoMCkgKyAxKTtcbiAgICAgIGlmICh0aWxlTGV0dGVyLmNoYXJDb2RlQXQoMCkgPiA3NCkgYnJlYWs7XG4gICAgICB0aWxlU3RyID0gYCR7dGlsZUxldHRlcn0ke3RpbGVOdW19YDtcbiAgICAgIHRpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZ2FtZWJvYXJkX190aWxlX3Bvc18ke3RpbGVTdHJ9YCk7XG4gICAgICB0aWxlLnN0eWxlLnNldFByb3BlcnR5KCdiYWNrZ3JvdW5kLWNvbG9yJywgJ2FxdWFtYXJpbmUnKTtcbiAgICB9XG4gIH1cblxuICAvLyBMZWZ0IGRpcmVjdGlvblxuICBpZiAoc2VsZWN0ZWRTaGlwLmRpcmVjdGlvbiA9PT0gJ0xFRlQnKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxlY3RlZFNoaXAubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAvLyBEZWNyZW1lbnQgdGhlIGNvbHVtbiBudW1iZXJcbiAgICAgIHRpbGVOdW0tLTtcbiAgICAgIGlmICh0aWxlTnVtIDwgMSkgYnJlYWs7XG4gICAgICB0aWxlU3RyID0gYCR7dGlsZUxldHRlcn0ke3RpbGVOdW19YDtcbiAgICAgIHRpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZ2FtZWJvYXJkX190aWxlX3Bvc18ke3RpbGVTdHJ9YCk7XG4gICAgICB0aWxlLnN0eWxlLnNldFByb3BlcnR5KCdiYWNrZ3JvdW5kLWNvbG9yJywgJ2FxdWFtYXJpbmUnKTtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogRXZlbnQgaGFuZGxlciB0byBhbGxvdyBwbGF5ZXIgdG8gcm90YXRlIGEgc2hpcCdzIGRpcmVjdGlvbiBkdXJpbmcgcGxhY2VtZW50LlxuICogQHBhcmFtIHtFdmVudH0gZVxuICovXG5jb25zdCBoYW5kbGVSb3RhdGlvbiA9IChlKSA9PiB7XG4gIGlmICghc2VsZWN0ZWRTaGlwKSByZXR1cm47XG4gIHNlbGVjdGVkU2hpcC5kaXJlY3Rpb24gPSBlLmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWRpcicpO1xuICBzaG93RGlyZWN0aW9uKCk7XG59O1xuXG5jb25zdCBoYW5kbGVTaGlwUGxhY2VtZW50ID0gKGUpID0+IHtcbiAgY29uc3QgdGlsZVN0ciA9IGUuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGlsZScpO1xuXG4gIHRyeSB7XG4gICAgcGxheWVyQm9hcmQucGxhY2VTaGlwKHNlbGVjdGVkU2hpcC5sZW5ndGgsIHtcbiAgICAgIG9yaWdpbjogdGlsZVN0cixcbiAgICAgIGRpcmVjdGlvbjogc2VsZWN0ZWRTaGlwLmRpcmVjdGlvbixcbiAgICB9KTtcbiAgICBzZWxlY3RlZFNoaXAgPSBudWxsO1xuICAgIHVwZGF0ZVBsYXllclNoaXBTdGF0dXMoKTtcbiAgICBjbGVhckRpcmVjdGlvbigpO1xuICAgIHJlbmRlckJvYXJkKHBsYXllckJvYXJkLCB0cnVlKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICB9XG59O1xuXG4vKipcbiAqIEluaXRpYWxpemVzIHRoZSBzdGFydCBvZiB0aGUgZ2FtZS5cbiAqL1xuY29uc3QgaW5pdGlhbGl6ZSA9ICgpID0+IHtcbiAgcGxheWVyID0gUGxheWVyKCdCb2InKTtcbiAgY29tcHV0ZXIgPSBQbGF5ZXIoKTtcbiAgcGxheWVyQm9hcmQgPSBHYW1lYm9hcmQoKTtcbiAgY29tcHV0ZXJCb2FyZCA9IEdhbWVib2FyZCgpO1xuXG4gIHJlbmRlckJvYXJkKHBsYXllckJvYXJkLCB0cnVlKTtcbiAgcmVuZGVyQm9hcmQoY29tcHV0ZXJCb2FyZCwgZmFsc2UpO1xuICByZWdpc3RlclNoaXBTZWxlY3RvcnMoKTtcblxuICAvLyBSZWdpc3RlcnMgZXZlbnQgaGFuZGxlcnMgZm9yIHNoaXAgcm90YXRpb24gYnV0dG9uc1xuICBjb25zdCByb3RhdG9ycyA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2hpcC1kaXJlY3Rpb25fX3JvdGF0b3InKV07XG4gIHJvdGF0b3JzLmZvckVhY2goKHJvdGF0b3IpID0+IHtcbiAgICByb3RhdG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlUm90YXRpb24pO1xuICB9KTtcblxuICAvLyBjb25zdCBncmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWVib2FyZF9sZWZ0IC5nYW1lYm9hcmRfX3RpbGUtZ3JpZCcpO1xuICAvLyBncmlkLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCByZXNldFRpbGVDb2xvcnMpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaW5pdGlhbGl6ZTtcbiIsImNvbnN0IFNoaXAgPSByZXF1aXJlKCcuL1NoaXAnKTtcblxuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gdG8gY29udmVydCBhIHRpbGUgc3RyaW5nIHRvIGFycmF5IGluZGV4ZXMgZm9yIHRoZSBncmlkLlxuICogQHBhcmFtIHtzdHJpbmd9IHRpbGVTdHIgUmVwcmVzZW50cyBhIHRpbGUgKGUuZy4gJ0ExJykuXG4gKiBAcmV0dXJucyBPYmplY3Qgd2l0aCAncm93JyBhbmQgJ2NvbCcgcHJvcGVydGllcy5cbiAqL1xuY29uc3QgdG9HcmlkQ29vcmQgPSAodGlsZVN0cikgPT4ge1xuICAvLyBDb252ZXJ0IHJvdyBzdWJzdHJpbmcgdG8gdXBwZXJjYXNlIEFTQ0lJIGNvZGUgYW5kIHN1YnRyYWN0IDY1XG4gIGNvbnN0IHJvdyA9IHRpbGVTdHIuc2xpY2UoMCwgMSkudG9VcHBlckNhc2UoKS5jaGFyQ29kZUF0KDApIC0gNjU7XG4gIGNvbnN0IGNvbCA9IHBhcnNlSW50KHRpbGVTdHIuc2xpY2UoMSksIDEwKSAtIDE7XG4gIHJldHVybiB7IHJvdywgY29sIH07XG59O1xuXG4vKipcbiAqIEdhbWVib2FyZCBmYWN0b3J5IGZ1bmN0aW9uLlxuICogQHJldHVybnMgQW4gaW50ZXJmYWNlIGZvciB0aGUgZ2FtZWJvYXJkLlxuICovXG5jb25zdCBHYW1lYm9hcmQgPSAoKSA9PiB7XG4gIC8vIENyZWF0ZXMgYSAyRCBncmlkIG9mIHRpbGVzIGFuZCB0aGVpciBhc3NvY2lhdGVkIHByb3BlcnRpZXNcbiAgbGV0IGdyaWQgPSBbLi4ubmV3IEFycmF5KDEwKV0ubWFwKCgpID0+XG4gICAgWy4uLm5ldyBBcnJheSgxMCldLm1hcCgoKSA9PiAoeyBzaGlwOiBudWxsLCBzdGF0dXM6IDAgfSkpXG4gICk7XG5cbiAgLy8gQ29udGFpbnMgc2hpcHMgdGhhdCBhcmUgcHJlc2VudCBvbiB0aGUgYm9hcmRcbiAgY29uc3Qgc2hpcHMgPSBbXTtcblxuICAvKipcbiAgICogUGxhY2VzIGEgbmV3IHNoaXAgb24gdGhlIGdhbWVib2FyZC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGxlbiBMZW5ndGggb2YgdGhlIHNoaXAgdG8gcGxhY2UuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBwb3MgUG9zaXRpb24gb2YgdGhlIHNoaXAuXG4gICAqL1xuICBjb25zdCBwbGFjZVNoaXAgPSAobGVuLCBwb3MpID0+IHtcbiAgICBjb25zdCBzaGlwID0gU2hpcChsZW4sIHBvcyk7XG4gICAgY29uc3Qgc2hpcERpcmVjdGlvbiA9IHNoaXAuZ2V0UG9zaXRpb24oKS5kaXJlY3Rpb247XG4gICAgY29uc3QgZ3JpZENvcHkgPSBbLi4uZ3JpZF07XG4gICAgY29uc3QgZ3JpZENvb3JkID0gdG9HcmlkQ29vcmQoc2hpcC5nZXRQb3NpdGlvbigpLm9yaWdpbik7XG4gICAgY29uc3QgZXJyID0gJ1NoaXAgY2Fubm90IGJlIHBsYWNlZCBvbiBvY2N1cGllZCB0aWxlcyc7XG5cbiAgICBpZiAoc2hpcERpcmVjdGlvbiA9PT0gJ1VQJykge1xuICAgICAgbGV0IHsgcm93LCBjb2wgfSA9IGdyaWRDb29yZDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBwcmVmZXItY29uc3RcbiAgICAgIGZvciAobGV0IGkgPSBsZW47IGkgPiAwOyBpLS0pIHtcbiAgICAgICAgaWYgKGdyaWRDb3B5W3Jvd11bY29sXS5zaGlwKSB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcbiAgICAgICAgZ3JpZENvcHlbcm93XVtjb2xdLnNoaXAgPSBzaGlwO1xuICAgICAgICByb3ctLTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHNoaXBEaXJlY3Rpb24gPT09ICdET1dOJykge1xuICAgICAgbGV0IHsgcm93LCBjb2wgfSA9IGdyaWRDb29yZDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBwcmVmZXItY29uc3RcbiAgICAgIGZvciAobGV0IGkgPSBsZW47IGkgPiAwOyBpLS0pIHtcbiAgICAgICAgaWYgKGdyaWRDb3B5W3Jvd11bY29sXS5zaGlwKSB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcbiAgICAgICAgZ3JpZENvcHlbcm93XVtjb2xdLnNoaXAgPSBzaGlwO1xuICAgICAgICByb3crKztcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHNoaXBEaXJlY3Rpb24gPT09ICdMRUZUJykge1xuICAgICAgbGV0IHsgcm93LCBjb2wgfSA9IGdyaWRDb29yZDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBwcmVmZXItY29uc3RcbiAgICAgIGZvciAobGV0IGkgPSBsZW47IGkgPiAwOyBpLS0pIHtcbiAgICAgICAgaWYgKGdyaWRDb3B5W3Jvd11bY29sXS5zaGlwKSB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcbiAgICAgICAgZ3JpZENvcHlbcm93XVtjb2xdLnNoaXAgPSBzaGlwO1xuICAgICAgICBjb2wtLTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHNoaXBEaXJlY3Rpb24gPT09ICdSSUdIVCcpIHtcbiAgICAgIGxldCB7IHJvdywgY29sIH0gPSBncmlkQ29vcmQ7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgcHJlZmVyLWNvbnN0XG4gICAgICBmb3IgKGxldCBpID0gbGVuOyBpID4gMDsgaS0tKSB7XG4gICAgICAgIGlmIChncmlkQ29weVtyb3ddW2NvbF0uc2hpcCkgdGhyb3cgbmV3IEVycm9yKGVycik7XG4gICAgICAgIGdyaWRDb3B5W3Jvd11bY29sXS5zaGlwID0gc2hpcDtcbiAgICAgICAgY29sKys7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IHBsYWNlIHNoaXA6IFNoaXAgZGlyZWN0aW9uIGludmFsaWQnKTtcbiAgICB9XG4gICAgc2hpcHMucHVzaChzaGlwKTtcbiAgICBncmlkID0gZ3JpZENvcHk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0aWxlIEEgdGlsZSBvbiB0aGUgZ3JpZCAoZS5nLiAnQTEnKS5cbiAgICogQHJldHVybnMgT2JqZWN0IGNvbnRhaW5pbmcgdGlsZSBwcm9wZXJ0aWVzLlxuICAgKi9cbiAgY29uc3QgZ2V0VGlsZSA9ICh0aWxlU3RyKSA9PiB7XG4gICAgY29uc3QgeyByb3csIGNvbCB9ID0gdG9HcmlkQ29vcmQodGlsZVN0cik7XG4gICAgcmV0dXJuIGdyaWRbcm93XVtjb2xdO1xuICB9O1xuXG4gIC8qKlxuICAgKiBBbGxvd3MgYSBib2FyZCB0byByZWdpc3RlciBhIGhpdCBvciBtaXNzIGZvciBhIHRpbGUuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0aWxlU3RyIFJlcHJlc2VudHMgdGhlIHRpbGUgdG8gYXR0YWNrLlxuICAgKiBAcmV0dXJucyB0cnVlIGlmIHN1Y2Nlc3NmdWwgb3IgZmFsc2UgaWYgdGlsZSBoYXMgYWxyZWFkeSBiZWVuIGF0dGFja2VkLlxuICAgKi9cbiAgY29uc3QgcmVjZWl2ZUF0dGFjayA9ICh0aWxlU3RyKSA9PiB7XG4gICAgbGV0IHRpbGU7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgeyByb3csIGNvbCB9ID0gdG9HcmlkQ29vcmQodGlsZVN0cik7XG4gICAgICB0aWxlID0gZ3JpZFtyb3ddW2NvbF07XG4gICAgfSBjYXRjaCB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgdGlsZSBjb29yZGluYXRlcycpO1xuICAgIH1cblxuICAgIC8vIFRpbGUgaGFzIGFscmVhZHkgYmVlbiBhdHRhY2tlZFxuICAgIGlmICh0aWxlLnN0YXR1cyAhPT0gMCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgLy8gSGl0cyBhIHNoaXAgaWYgaXQgb2NjdXBpZXMgdGhlIHRpbGUsIG90aGVyd2lzZSB0aWxlIGlzIG1hcmtlZCBhcyBtaXNzZWRcbiAgICBpZiAodGlsZS5zaGlwKSB7XG4gICAgICB0aWxlLnNoaXAuaGl0KCk7XG4gICAgICB0aWxlLnN0YXR1cyA9IDI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRpbGUuc3RhdHVzID0gMTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICAvKipcbiAgICogQHJldHVybnMgdHJ1ZSBpZiBubyB1bnN1bmsgc2hpcHMgcmVtYWluLCBmYWxzZSBvdGhlcndpc2UuXG4gICAqL1xuICBjb25zdCBpc0RlZmVhdGVkID0gKCkgPT4ge1xuICAgIGlmIChzaGlwcy5sZW5ndGggPT09IDApIHJldHVybiBmYWxzZTtcblxuICAgIC8vIENoZWNrcyBpZiB0aGVyZSBhcmUgYW55IHVuc3VuayBzaGlwcyByZW1haW5pbmdcbiAgICBpZiAoc2hpcHMuZmlsdGVyKChzaGlwKSA9PiAhc2hpcC5pc1N1bmsoKSkubGVuZ3RoID4gMCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIEFuIGFycmF5IGNvbnRhaW5pbmcgc3RhdHVzIG9mIGVhY2ggc2hpcC5cbiAgICovXG4gIGNvbnN0IGdldFNoaXBTdGF0dXMgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2hpcFN0YXR1cyA9IFtdO1xuXG4gICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgc2hpcFN0YXR1cy5wdXNoKHtcbiAgICAgICAgbGVuZ3RoOiBzaGlwLmdldExlbmd0aCgpLFxuICAgICAgICBoaXRzOiBzaGlwLmdldEhpdHMoKSxcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHNoaXBTdGF0dXM7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBwbGFjZVNoaXAsXG4gICAgZ2V0VGlsZSxcbiAgICByZWNlaXZlQXR0YWNrLFxuICAgIGlzRGVmZWF0ZWQsXG4gICAgZ2V0U2hpcFN0YXR1cyxcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gR2FtZWJvYXJkO1xuIiwiLyoqXG4gKiBSZXByZXNlbnRzIGEgcGxheWVyLiBJZiBubyBuYW1lIGlzIGdpdmVuLCBhIGNvbXB1dGVyIHBsYXllciB3aWxsIGJlIHNldCB1cC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBuIFBsYXllciBuYW1lLiBJZiBlbXB0eSwgcGxheWVyIGJlY29tZXMgYSBjb21wdXRlci5cbiAqIEByZXR1cm5zIFRoZSBQbGF5ZXIgaW50ZXJmYWNlLlxuICovXG5jb25zdCBQbGF5ZXIgPSAobikgPT4ge1xuICBjb25zdCBuYW1lID0gbiB8fCAnQ29tcHV0ZXInO1xuXG4gIC8vIFBvcHVsYXRlcyB2YWxpZCBtb3ZlcyBmb3IgdGhlIGNvbXB1dGVyIHBsYXllclxuICBjb25zdCBtb3ZlcyA9IFtdO1xuICBpZiAoIW4pIHtcbiAgICBmb3IgKGxldCBjaGFyID0gNjU7IGNoYXIgPD0gNzQ7IGNoYXIrKykge1xuICAgICAgZm9yIChsZXQgbnVtID0gMTsgbnVtIDw9IDEwOyBudW0rKykge1xuICAgICAgICBtb3Zlcy5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUoY2hhcikuY29uY2F0KG51bS50b1N0cmluZygpKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIFRoZSBwbGF5ZXIncyBuYW1lLlxuICAgKi9cbiAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IG5hbWU7XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHBsYXllciBvYmplY3QgcmVwcmVzZW50cyBhIGh1bWFuIHBsYXllci5cbiAgICovXG4gIGNvbnN0IGlzSHVtYW4gPSAoKSA9PiAhIW47XG5cbiAgLyoqXG4gICAqIEFsbG93cyBhIHBsYXllciB0byBhdHRhY2sgYSBnYW1lYm9hcmQgYXQgYSBzcGVjaWZpYyB0aWxlIG9yIGF0IGEgcmFuZG9tXG4gICAqIHRpbGUuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBnYW1lYm9hcmQgVGhlIGdhbWVib2FyZCB0byBhdHRhY2suXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0aWxlIFRoZSB0aWxlIHRvIGF0dGFjayAoZS5nLiAnQTEnKS5cbiAgICogQHJldHVybnMgVGhlIHRpbGUgdGhhdCB3YXMgc3VjY2Vzc2Z1bGx5IGF0dGFjayBvciBudWxsIG90aGVyd2lzZS5cbiAgICovXG4gIGNvbnN0IGF0dGFjayA9IChnYW1lYm9hcmQsIHRpbGUgPSBudWxsKSA9PiB7XG4gICAgLy8gUGxheWVyIGF0dGFja3MgYSBzcGVjaWZpYyB0aWxlXG4gICAgaWYgKHRpbGUpIHJldHVybiBnYW1lYm9hcmQucmVjZWl2ZUF0dGFjayh0aWxlKSA/IHRpbGUgOiBudWxsO1xuXG4gICAgLy8gQ29tcHV0ZXIgcGxheWVyIGF0dGFja3MgcmFuZG9tIHRpbGVcbiAgICBpZiAobW92ZXMubGVuZ3RoID09PSAwKSB0aHJvdyBuZXcgRXJyb3IoJ05vIHZhbGlkIG1vdmVzIHJlbWFpbmluZycpO1xuICAgIGNvbnN0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbW92ZXMubGVuZ3RoKTtcbiAgICBjb25zdCByYW5kb21UaWxlID0gbW92ZXMuYXQocmFuZG9tSW5kZXgpO1xuICAgIGlmIChnYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhyYW5kb21UaWxlKSkge1xuICAgICAgbW92ZXMuc3BsaWNlKHJhbmRvbUluZGV4LCAxKTtcbiAgICAgIHJldHVybiByYW5kb21UaWxlO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0TmFtZSxcbiAgICBpc0h1bWFuLFxuICAgIGF0dGFjayxcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUGxheWVyO1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgdGhlIGdpdmVuIHBvc2l0aW9uIGNvbmZvcm1zIHRvIHRoZSBleHBlY3RlZCBzdHJ1Y3R1cmUgYW5kIHZhbHVlc1xuICogQHBhcmFtIHtudW1iZXJ9IGxlbiBTaGlwIGxlbmd0aFxuICogQHBhcmFtIHtvYmplY3R9IHBvcyBTaGlwIHBvc2l0aW9uXG4gKiBAcmV0dXJucyB0cnVlIGlmIHBvc2l0aW9uIGlzIHZhbGlkLCBmYWxzZSBvdGhlcndpc2VcbiAqL1xuY29uc3QgcG9zSXNWYWxpZCA9IChsZW4sIHBvcykgPT4ge1xuICB0cnkge1xuICAgIC8vIENoZWNrIG9yaWdpblxuICAgIGNvbnN0IG9yaWdpbkxldHRlciA9IHBvcy5vcmlnaW4uc2xpY2UoMCwgMSkudG9VcHBlckNhc2UoKTtcbiAgICBjb25zdCBvcmlnaW5OdW0gPSBwYXJzZUludChwb3Mub3JpZ2luLnNsaWNlKDEpLCAxMCk7XG4gICAgaWYgKCFvcmlnaW5MZXR0ZXIubWF0Y2goL1tBLUpdLykgfHwgIShvcmlnaW5OdW0gPj0gMSAmJiBvcmlnaW5OdW0gPD0gMTApKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgZGlyZWN0aW9uXG4gICAgY29uc3QgZGlyZWN0aW9uID0gcG9zLmRpcmVjdGlvbi50b1VwcGVyQ2FzZSgpO1xuICAgIGlmIChcbiAgICAgIGRpcmVjdGlvbiAhPT0gJ1VQJyAmJlxuICAgICAgZGlyZWN0aW9uICE9PSAnRE9XTicgJiZcbiAgICAgIGRpcmVjdGlvbiAhPT0gJ0xFRlQnICYmXG4gICAgICBkaXJlY3Rpb24gIT09ICdSSUdIVCdcbiAgICApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBDaGVjayBvdmVyZmxvd1xuICAgIGlmIChcbiAgICAgIChkaXJlY3Rpb24gPT09ICdVUCcgJiYgb3JpZ2luTGV0dGVyLmNoYXJDb2RlQXQoMCkgLSAobGVuIC0gMSkgPCA2NSkgfHxcbiAgICAgIChkaXJlY3Rpb24gPT09ICdET1dOJyAmJiBvcmlnaW5MZXR0ZXIuY2hhckNvZGVBdCgwKSArIChsZW4gLSAxKSA+IDc0KSB8fFxuICAgICAgKGRpcmVjdGlvbiA9PT0gJ0xFRlQnICYmIG9yaWdpbk51bSAtIChsZW4gLSAxKSA8IDEpIHx8XG4gICAgICAoZGlyZWN0aW9uID09PSAnUklHSFQnICYmIG9yaWdpbk51bSArIChsZW4gLSAxKSA+IDEwKVxuICAgICkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG4vKipcbiAqIFNoaXAgZmFjdG9yeSBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7bnVtYmVyfSBsZW4gTGVuZ3RoIG9mIHNoaXAgZnJvbSBiZSBpbiByYW5nZSBbMi01XS5cbiAqIEBwYXJhbSB7b2JqZWN0fSBwb3MgUG9zaXRpb24gbXVzdCBjb250YWluIG9yaWdpbiBhbmQgZGlyZWN0aW9uIHByb3BlcnRpZXMuXG4gKiBAcmV0dXJucyBBbiBpbnRlcmZhY2UgZm9yIHRoZSBzaGlwLlxuICovXG5jb25zdCBTaGlwID0gKGxlbiwgcG9zKSA9PiB7XG4gIGlmICghTnVtYmVyLmlzSW50ZWdlcihsZW4pIHx8IGxlbiA8IDIgfHwgbGVuID4gNSkge1xuICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBzaGlwIGxlbmd0aCcpO1xuICB9XG5cbiAgaWYgKCFwb3NJc1ZhbGlkKGxlbiwgcG9zKSkge1xuICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBzaGlwIHBvc2l0aW9uJyk7XG4gIH1cblxuICAvLyBJbml0aWFsaXplIHZhbHVlc1xuICBjb25zdCBsZW5ndGggPSBsZW47XG4gIGNvbnN0IHBvc2l0aW9uID0ge1xuICAgIG9yaWdpbjogcG9zLm9yaWdpbi50b1VwcGVyQ2FzZSgpLFxuICAgIGRpcmVjdGlvbjogcG9zLmRpcmVjdGlvbi50b1VwcGVyQ2FzZSgpLFxuICB9O1xuICBsZXQgaGl0cyA9IDA7XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIExlbmd0aCBvZiB0aGUgc2hpcC5cbiAgICovXG4gIGNvbnN0IGdldExlbmd0aCA9ICgpID0+IGxlbmd0aDtcblxuICAvKipcbiAgICogQHJldHVybnMgTnVtYmVyIG9mIGVuZW15IGhpdHMgb24gdGhlIHNoaXAuXG4gICAqL1xuICBjb25zdCBnZXRIaXRzID0gKCkgPT4gaGl0cztcblxuICAvKipcbiAgICogQHJldHVybnMgdHJ1ZSBpZiB0aGUgc2hpcCBoYXMgc3VuaywgZmFsc2Ugb3RoZXJ3aXNlLlxuICAgKi9cbiAgY29uc3QgaXNTdW5rID0gKCkgPT4ge1xuICAgIGlmIChoaXRzID49IGxlbmd0aCkgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcmV0dXJucyBBbiBvYmplY3QgcmVwcmVzZW50aW5nIHRoZSBwb3NpdGlvbiBvZiBhIHNoaXAuXG4gICAqL1xuICBjb25zdCBnZXRQb3NpdGlvbiA9ICgpID0+IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkocG9zaXRpb24pKTtcblxuICAvKipcbiAgICogSW5jcmVtZW50cyB0aGUgaGl0IGNvdW50ZXIgZm9yIHRoZSBzaGlwLlxuICAgKi9cbiAgY29uc3QgaGl0ID0gKCkgPT4ge1xuICAgIGhpdHMgKz0gMTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdldExlbmd0aCxcbiAgICBnZXRIaXRzLFxuICAgIGlzU3VuayxcbiAgICBnZXRQb3NpdGlvbixcbiAgICBoaXQsXG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNoaXA7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGVzL3Jlc2V0LmNzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL2NvbnRlbnQuY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvZ2FtZWJvYXJkLmNzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL3NoaXBzLmNzcyc7XG5pbXBvcnQgaW5pdGlhbGl6ZSBmcm9tICcuL0dhbWVDb250cm9sbGVyJztcblxuaW5pdGlhbGl6ZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9