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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --content-bg-color: #5d6d88;\n  --mild-white: #b0b1bd;\n  --mild-white-hover: #9495a0;\n  --midnight: #0e0f24;\n  --ship-bg-color: #9b3838;\n  --ship-undamaged-color: #418820;\n  --ship-damaged-color: #abad3a;\n  --ship-hover-color: #005974;\n  --ship-selected-color: #007ba0;\n  --direction-hover-color: #005974;\n  --direction-selected-color: #007ba0;\n  --tile-normal-color: #2d374f;\n  --tile-missed-color: #1a1b37;\n  --gameboard-bg-color: #606c80;\n  --error-red-color: #9b3838;\n\n  --default-border-radius: 3px;\n}\n\nbody {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100vw;\n  height: 100vh;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.content {\n  display: grid;\n  align-content: center;\n  justify-items: center;\n  gap: 20px;\n  width: 100%;\n  height: 100%;\n  user-select: none;\n  background-color: var(--content-bg-color);\n}\n\n.player-space,\n.computer-space {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n}\n\n.player-space {\n  grid-column: 1 / 2;\n  grid-row: 1 / 2;\n  justify-self: end;\n}\n\n.computer-space {\n  grid-column: 2 / 3;\n  grid-row: 1 / 2;\n  justify-self: start;\n}\n\nbutton {\n  font-size: 1rem;\n}\n\n/* Status messages */\n\n.message-window-wrapper {\n  height: 225px;\n  width: fit-content;\n  grid-column: 1 / 3;\n  grid-row: 2 / 3;\n}\n\n.message-window {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n  padding: 20px;\n  border: 1px solid var(--midnight);\n  border-radius: 5px;\n  background-color: var(--gameboard-bg-color);\n  color: var(--midnight);\n}\n\n.message-window__messages {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n}\n\n.message-window__messages.hidden {\n  display: none;\n}\n\n.message-window__reset-btn:hover {\n  background-color: var(--mild-white-hover);\n  cursor: pointer;\n}\n\n.message-window__reset-btn {\n  border: 1px solid var(--midnight);\n  border-radius: var(--default-border-radius);\n  padding: 5px;\n  color: var(--midnight);\n  background-color: var(--mild-white);\n}\n\n.message-window__reset-btn.hidden {\n  display: none;\n}\n\n.message-window__outcome {\n  font-size: 2rem;\n}\n\n.message-window__outcome.hidden {\n  display: none;\n}\n\n.message-window_error {\n  background-color: var(--error-red-color);\n}\n", "",{"version":3,"sources":["webpack://./src/styles/content.css"],"names":[],"mappings":"AAAA;EACE,2BAA2B;EAC3B,qBAAqB;EACrB,2BAA2B;EAC3B,mBAAmB;EACnB,wBAAwB;EACxB,+BAA+B;EAC/B,6BAA6B;EAC7B,2BAA2B;EAC3B,8BAA8B;EAC9B,gCAAgC;EAChC,mCAAmC;EACnC,4BAA4B;EAC5B,4BAA4B;EAC5B,6BAA6B;EAC7B,0BAA0B;;EAE1B,4BAA4B;AAC9B;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,yCAAyC;AAC3C;;AAEA;EACE,aAAa;EACb,qBAAqB;EACrB,qBAAqB;EACrB,SAAS;EACT,WAAW;EACX,YAAY;EACZ,iBAAiB;EACjB,yCAAyC;AAC3C;;AAEA;;EAEE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,eAAe;AACjB;;AAEA,oBAAoB;;AAEpB;EACE,aAAa;EACb,kBAAkB;EAClB,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;EACT,aAAa;EACb,iCAAiC;EACjC,kBAAkB;EAClB,2CAA2C;EAC3C,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,yCAAyC;EACzC,eAAe;AACjB;;AAEA;EACE,iCAAiC;EACjC,2CAA2C;EAC3C,YAAY;EACZ,sBAAsB;EACtB,mCAAmC;AACrC;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,wCAAwC;AAC1C","sourcesContent":[":root {\n  --content-bg-color: #5d6d88;\n  --mild-white: #b0b1bd;\n  --mild-white-hover: #9495a0;\n  --midnight: #0e0f24;\n  --ship-bg-color: #9b3838;\n  --ship-undamaged-color: #418820;\n  --ship-damaged-color: #abad3a;\n  --ship-hover-color: #005974;\n  --ship-selected-color: #007ba0;\n  --direction-hover-color: #005974;\n  --direction-selected-color: #007ba0;\n  --tile-normal-color: #2d374f;\n  --tile-missed-color: #1a1b37;\n  --gameboard-bg-color: #606c80;\n  --error-red-color: #9b3838;\n\n  --default-border-radius: 3px;\n}\n\nbody {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100vw;\n  height: 100vh;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.content {\n  display: grid;\n  align-content: center;\n  justify-items: center;\n  gap: 20px;\n  width: 100%;\n  height: 100%;\n  user-select: none;\n  background-color: var(--content-bg-color);\n}\n\n.player-space,\n.computer-space {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n}\n\n.player-space {\n  grid-column: 1 / 2;\n  grid-row: 1 / 2;\n  justify-self: end;\n}\n\n.computer-space {\n  grid-column: 2 / 3;\n  grid-row: 1 / 2;\n  justify-self: start;\n}\n\nbutton {\n  font-size: 1rem;\n}\n\n/* Status messages */\n\n.message-window-wrapper {\n  height: 225px;\n  width: fit-content;\n  grid-column: 1 / 3;\n  grid-row: 2 / 3;\n}\n\n.message-window {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n  padding: 20px;\n  border: 1px solid var(--midnight);\n  border-radius: 5px;\n  background-color: var(--gameboard-bg-color);\n  color: var(--midnight);\n}\n\n.message-window__messages {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n}\n\n.message-window__messages.hidden {\n  display: none;\n}\n\n.message-window__reset-btn:hover {\n  background-color: var(--mild-white-hover);\n  cursor: pointer;\n}\n\n.message-window__reset-btn {\n  border: 1px solid var(--midnight);\n  border-radius: var(--default-border-radius);\n  padding: 5px;\n  color: var(--midnight);\n  background-color: var(--mild-white);\n}\n\n.message-window__reset-btn.hidden {\n  display: none;\n}\n\n.message-window__outcome {\n  font-size: 2rem;\n}\n\n.message-window__outcome.hidden {\n  display: none;\n}\n\n.message-window_error {\n  background-color: var(--error-red-color);\n}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ".gameboard {\n  display: grid;\n  grid-template-columns: repeat(11, 1fr);\n  grid-template-rows: repeat(11, 1fr);\n  border: 2px solid var(--midnight);\n  border-radius: var(--default-border-radius);\n  width: clamp(280px, 30vw, 500px);\n  height: clamp(280px, 30vw, 500px);\n  color: var(--midnight);\n  font-weight: bold;\n  background-color: var(--gameboard-bg-color);\n}\n\n.gameboard_blurred {\n  filter: blur(3px);\n}\n\n/* Tiles */\n\n.gameboard__tile-grid {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  grid-column: 2 / 11;\n  grid-row: 2 / 11;\n  border: 1px solid var(--midnight);\n  border-radius: var(--default-border-radius);\n}\n\n.gameboard__tile {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid var(--midnight);\n  background-color: var(--tile-normal-color);\n}\n\n.gameboard_computer\n  .gameboard__tile:hover:not(.gameboard__tile_ship, .gameboard__tile_hit, .gameboard__tile_missed) {\n  background-color: var(--mild-white);\n  cursor: pointer;\n}\n\n.gameboard__tile_ship {\n  background-color: var(--ship-selected-color);\n  transition: background-color 400ms;\n}\n\n.gameboard__tile_missed {\n  background-color: var(--tile-missed-color);\n  transition: background-color 400ms;\n}\n\n.gameboard__tile_hit {\n  background-color: var(--ship-bg-color);\n  transition: background-color 400ms;\n}\n\n.gameboard__tile_placement {\n  background-color: var(--ship-selected-color);\n}\n\n/* Labels */\n\n.gameboard__col-labels {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-column: 2 / 11;\n  grid-row: 1 / 2;\n}\n\n.gameboard__row-labels {\n  display: grid;\n  grid-template-rows: repeat(10, 1fr);\n  grid-column: 1 / 2;\n  grid-row: 2 / 11;\n}\n\n.gameboard__row-label,\n.gameboard__col-label {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n/* Start window */\n\n.gameboard-wrapper {\n  position: relative;\n}\n\n.start-window {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.start-dialog {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n  border: 1px solid var(--midnight);\n  width: 70%;\n  height: 40%;\n  border-radius: 5px;\n  background-color: var(--gameboard-bg-color);\n  color: var(--midnight);\n}\n\n.start-window.hidden {\n  display: none;\n}\n\n.start-dialog__btn {\n  border: 1px solid var(--midnight);\n  border-radius: var(--default-border-radius);\n  padding: 5px;\n  color: var(--midnight);\n}\n\n.start-dialog__btn:disabled {\n  background-color: var(--tile-normal-color);\n  color: var(--gameboard-bg-color);\n}\n\n.start-dialog__btn:not(.start-dialog__btn:disabled):hover {\n  background-color: var(--mild-white-hover);\n  cursor: pointer;\n}\n\n.start-dialog__btn:not(.start-dialog__btn:disabled) {\n  color: var(--midnight);\n  background-color: var(--mild-white);\n}\n", "",{"version":3,"sources":["webpack://./src/styles/gameboard.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,sCAAsC;EACtC,mCAAmC;EACnC,iCAAiC;EACjC,2CAA2C;EAC3C,gCAAgC;EAChC,iCAAiC;EACjC,sBAAsB;EACtB,iBAAiB;EACjB,2CAA2C;AAC7C;;AAEA;EACE,iBAAiB;AACnB;;AAEA,UAAU;;AAEV;EACE,aAAa;EACb,sCAAsC;EACtC,mCAAmC;EACnC,mBAAmB;EACnB,gBAAgB;EAChB,iCAAiC;EACjC,2CAA2C;AAC7C;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,iCAAiC;EACjC,0CAA0C;AAC5C;;AAEA;;EAEE,mCAAmC;EACnC,eAAe;AACjB;;AAEA;EACE,4CAA4C;EAC5C,kCAAkC;AACpC;;AAEA;EACE,0CAA0C;EAC1C,kCAAkC;AACpC;;AAEA;EACE,sCAAsC;EACtC,kCAAkC;AACpC;;AAEA;EACE,4CAA4C;AAC9C;;AAEA,WAAW;;AAEX;EACE,aAAa;EACb,sCAAsC;EACtC,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,mCAAmC;EACnC,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;;EAEE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA,iBAAiB;;AAEjB;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,WAAW;EACX,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,6BAA6B;EAC7B,mBAAmB;EACnB,iCAAiC;EACjC,UAAU;EACV,WAAW;EACX,kBAAkB;EAClB,2CAA2C;EAC3C,sBAAsB;AACxB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,iCAAiC;EACjC,2CAA2C;EAC3C,YAAY;EACZ,sBAAsB;AACxB;;AAEA;EACE,0CAA0C;EAC1C,gCAAgC;AAClC;;AAEA;EACE,yCAAyC;EACzC,eAAe;AACjB;;AAEA;EACE,sBAAsB;EACtB,mCAAmC;AACrC","sourcesContent":[".gameboard {\n  display: grid;\n  grid-template-columns: repeat(11, 1fr);\n  grid-template-rows: repeat(11, 1fr);\n  border: 2px solid var(--midnight);\n  border-radius: var(--default-border-radius);\n  width: clamp(280px, 30vw, 500px);\n  height: clamp(280px, 30vw, 500px);\n  color: var(--midnight);\n  font-weight: bold;\n  background-color: var(--gameboard-bg-color);\n}\n\n.gameboard_blurred {\n  filter: blur(3px);\n}\n\n/* Tiles */\n\n.gameboard__tile-grid {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  grid-column: 2 / 11;\n  grid-row: 2 / 11;\n  border: 1px solid var(--midnight);\n  border-radius: var(--default-border-radius);\n}\n\n.gameboard__tile {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid var(--midnight);\n  background-color: var(--tile-normal-color);\n}\n\n.gameboard_computer\n  .gameboard__tile:hover:not(.gameboard__tile_ship, .gameboard__tile_hit, .gameboard__tile_missed) {\n  background-color: var(--mild-white);\n  cursor: pointer;\n}\n\n.gameboard__tile_ship {\n  background-color: var(--ship-selected-color);\n  transition: background-color 400ms;\n}\n\n.gameboard__tile_missed {\n  background-color: var(--tile-missed-color);\n  transition: background-color 400ms;\n}\n\n.gameboard__tile_hit {\n  background-color: var(--ship-bg-color);\n  transition: background-color 400ms;\n}\n\n.gameboard__tile_placement {\n  background-color: var(--ship-selected-color);\n}\n\n/* Labels */\n\n.gameboard__col-labels {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-column: 2 / 11;\n  grid-row: 1 / 2;\n}\n\n.gameboard__row-labels {\n  display: grid;\n  grid-template-rows: repeat(10, 1fr);\n  grid-column: 1 / 2;\n  grid-row: 2 / 11;\n}\n\n.gameboard__row-label,\n.gameboard__col-label {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n/* Start window */\n\n.gameboard-wrapper {\n  position: relative;\n}\n\n.start-window {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.start-dialog {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n  border: 1px solid var(--midnight);\n  width: 70%;\n  height: 40%;\n  border-radius: 5px;\n  background-color: var(--gameboard-bg-color);\n  color: var(--midnight);\n}\n\n.start-window.hidden {\n  display: none;\n}\n\n.start-dialog__btn {\n  border: 1px solid var(--midnight);\n  border-radius: var(--default-border-radius);\n  padding: 5px;\n  color: var(--midnight);\n}\n\n.start-dialog__btn:disabled {\n  background-color: var(--tile-normal-color);\n  color: var(--gameboard-bg-color);\n}\n\n.start-dialog__btn:not(.start-dialog__btn:disabled):hover {\n  background-color: var(--mild-white-hover);\n  cursor: pointer;\n}\n\n.start-dialog__btn:not(.start-dialog__btn:disabled) {\n  color: var(--midnight);\n  background-color: var(--mild-white);\n}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "/* Ships status/selection list */\n\n.player-ship-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-self: flex-start;\n  gap: 20px;\n  width: 125px;\n}\n\n.player-ships,\n.computer-ships {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  font-weight: bold;\n  border: 2px solid var(--midnight);\n  border-radius: var(--default-border-radius);\n}\n\n.player-ships {\n  width: 100%;\n}\n\n.computer-ships {\n  align-self: flex-start;\n  width: 125px;\n}\n\n.computer-ships_transparent {\n  filter: opacity(0);\n}\n\n.player-ships__ship,\n.computer-ships__ship {\n  padding: 5px;\n}\n\n.player-ships__ship:not(.player-ships__ship:last-child),\n.computer-ships__ship:not(.computer-ships__ship:last-child) {\n  border-bottom: 1px solid var(--midnight);\n}\n\n.player-ships__ship {\n  cursor: pointer;\n  background-color: var(--ship-bg-color);\n}\n\n.player-ships__ship:hover:not(.player-ships__ship_placed, .player-ships__ship_selected) {\n  background-color: var(--ship-hover-color);\n}\n\n.player-ships__ship_selected {\n  background-color: var(--ship-selected-color);\n  cursor: unset;\n}\n\n.player-ships__ship_undamaged,\n.computer-ships__ship_undamaged {\n  background-color: var(--ship-undamaged-color);\n}\n\n.player-ships__ship_damaged,\n.computer-ships__ship_damaged {\n  background-color: var(--ship-damaged-color);\n}\n\n.player-ships__ship_sunk,\n.computer-ships__ship_sunk {\n  background-color: var(--ship-bg-color);\n}\n\n/* Ship direction rotation */\n\n.ship-direction {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(3, 1fr);\n  gap: 5px;\n  border: 2px solid var(--midnight);\n  border-radius: var(--default-border-radius);\n  padding: 5px;\n  width: 100%;\n  color: var(--midnight);\n  font-weight: bold;\n}\n\n.ship-direction__rotator {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 5px;\n  border: 1px solid var(--midnight);\n  border-radius: 5px;\n  background-color: var(--mild-white);\n}\n\n.ship-direction__rotator:hover:not(.ship-direction__rotator_selected) {\n  background-color: var(--direction-hover-color);\n  cursor: pointer;\n}\n\n.ship-direction__rotator_selected {\n  background-color: var(--direction-selected-color);\n}\n\n.ship-direction__title {\n  grid-column: 1 / 4;\n  grid-row: 1 / 2;\n  text-align: center;\n}\n\n.ship-direction__rotator_up {\n  grid-column: 2 / 3;\n  grid-row: 2 / 3;\n}\n\n.ship-direction__rotator_right {\n  grid-column: 3 / 4;\n  grid-row: 3 / 4;\n}\n\n.ship-direction__rotator_down {\n  grid-column: 2 / 3;\n  grid-row: 3 / 4;\n}\n\n.ship-direction__rotator_left {\n  grid-column: 1 / 2;\n  grid-row: 3 / 4;\n}\n\n.ship-direction.hidden {\n  display: none;\n}\n", "",{"version":3,"sources":["webpack://./src/styles/ships.css"],"names":[],"mappings":"AAAA,gCAAgC;;AAEhC;EACE,aAAa;EACb,sBAAsB;EACtB,sBAAsB;EACtB,SAAS;EACT,YAAY;AACd;;AAEA;;EAEE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,iBAAiB;EACjB,iCAAiC;EACjC,2CAA2C;AAC7C;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,sBAAsB;EACtB,YAAY;AACd;;AAEA;EACE,kBAAkB;AACpB;;AAEA;;EAEE,YAAY;AACd;;AAEA;;EAEE,wCAAwC;AAC1C;;AAEA;EACE,eAAe;EACf,sCAAsC;AACxC;;AAEA;EACE,yCAAyC;AAC3C;;AAEA;EACE,4CAA4C;EAC5C,aAAa;AACf;;AAEA;;EAEE,6CAA6C;AAC/C;;AAEA;;EAEE,2CAA2C;AAC7C;;AAEA;;EAEE,sCAAsC;AACxC;;AAEA,4BAA4B;;AAE5B;EACE,aAAa;EACb,qCAAqC;EACrC,kCAAkC;EAClC,QAAQ;EACR,iCAAiC;EACjC,2CAA2C;EAC3C,YAAY;EACZ,WAAW;EACX,sBAAsB;EACtB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,iCAAiC;EACjC,kBAAkB;EAClB,mCAAmC;AACrC;;AAEA;EACE,8CAA8C;EAC9C,eAAe;AACjB;;AAEA;EACE,iDAAiD;AACnD;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,aAAa;AACf","sourcesContent":["/* Ships status/selection list */\n\n.player-ship-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-self: flex-start;\n  gap: 20px;\n  width: 125px;\n}\n\n.player-ships,\n.computer-ships {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  font-weight: bold;\n  border: 2px solid var(--midnight);\n  border-radius: var(--default-border-radius);\n}\n\n.player-ships {\n  width: 100%;\n}\n\n.computer-ships {\n  align-self: flex-start;\n  width: 125px;\n}\n\n.computer-ships_transparent {\n  filter: opacity(0);\n}\n\n.player-ships__ship,\n.computer-ships__ship {\n  padding: 5px;\n}\n\n.player-ships__ship:not(.player-ships__ship:last-child),\n.computer-ships__ship:not(.computer-ships__ship:last-child) {\n  border-bottom: 1px solid var(--midnight);\n}\n\n.player-ships__ship {\n  cursor: pointer;\n  background-color: var(--ship-bg-color);\n}\n\n.player-ships__ship:hover:not(.player-ships__ship_placed, .player-ships__ship_selected) {\n  background-color: var(--ship-hover-color);\n}\n\n.player-ships__ship_selected {\n  background-color: var(--ship-selected-color);\n  cursor: unset;\n}\n\n.player-ships__ship_undamaged,\n.computer-ships__ship_undamaged {\n  background-color: var(--ship-undamaged-color);\n}\n\n.player-ships__ship_damaged,\n.computer-ships__ship_damaged {\n  background-color: var(--ship-damaged-color);\n}\n\n.player-ships__ship_sunk,\n.computer-ships__ship_sunk {\n  background-color: var(--ship-bg-color);\n}\n\n/* Ship direction rotation */\n\n.ship-direction {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(3, 1fr);\n  gap: 5px;\n  border: 2px solid var(--midnight);\n  border-radius: var(--default-border-radius);\n  padding: 5px;\n  width: 100%;\n  color: var(--midnight);\n  font-weight: bold;\n}\n\n.ship-direction__rotator {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 5px;\n  border: 1px solid var(--midnight);\n  border-radius: 5px;\n  background-color: var(--mild-white);\n}\n\n.ship-direction__rotator:hover:not(.ship-direction__rotator_selected) {\n  background-color: var(--direction-hover-color);\n  cursor: pointer;\n}\n\n.ship-direction__rotator_selected {\n  background-color: var(--direction-selected-color);\n}\n\n.ship-direction__title {\n  grid-column: 1 / 4;\n  grid-row: 1 / 2;\n  text-align: center;\n}\n\n.ship-direction__rotator_up {\n  grid-column: 2 / 3;\n  grid-row: 2 / 3;\n}\n\n.ship-direction__rotator_right {\n  grid-column: 3 / 4;\n  grid-row: 3 / 4;\n}\n\n.ship-direction__rotator_down {\n  grid-column: 2 / 3;\n  grid-row: 3 / 4;\n}\n\n.ship-direction__rotator_left {\n  grid-column: 1 / 2;\n  grid-row: 3 / 4;\n}\n\n.ship-direction.hidden {\n  display: none;\n}\n"],"sourceRoot":""}]);
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

/***/ "./node_modules/lodash.clonedeep/index.js":
/*!************************************************!*\
  !*** ./node_modules/lodash.clonedeep/index.js ***!
  \************************************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/**
 * Adds the key-value `pair` to `map`.
 *
 * @private
 * @param {Object} map The map to modify.
 * @param {Array} pair The key-value pair to add.
 * @returns {Object} Returns `map`.
 */
function addMapEntry(map, pair) {
  // Don't return `map.set` because it's not chainable in IE 11.
  map.set(pair[0], pair[1]);
  return map;
}

/**
 * Adds `value` to `set`.
 *
 * @private
 * @param {Object} set The set to modify.
 * @param {*} value The value to add.
 * @returns {Object} Returns `set`.
 */
function addSetEntry(set, value) {
  // Don't return `set.add` because it's not chainable in IE 11.
  set.add(value);
  return set;
}

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array ? array.length : 0;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    getPrototype = overArg(Object.getPrototypeOf, Object),
    objectCreate = Object.create,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols,
    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeKeys = overArg(Object.keys, Object);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  this.__data__ = new ListCache(entries);
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  return this.__data__['delete'](key);
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var cache = this.__data__;
  if (cache instanceof ListCache) {
    var pairs = cache.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      return this;
    }
    cache = this.__data__ = new MapCache(pairs);
  }
  cache.set(key, value);
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = (isArray(value) || isArguments(value))
    ? baseTimes(value.length, String)
    : [];

  var length = result.length,
      skipIndexes = !!length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    object[key] = value;
  }
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @param {boolean} [isFull] Specify a clone including symbols.
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
  var result;
  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      if (isHostObject(value)) {
        return object ? value : {};
      }
      result = initCloneObject(isFunc ? {} : value);
      if (!isDeep) {
        return copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, baseClone, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (!isArr) {
    var props = isFull ? getAllKeys(value) : keys(value);
  }
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, isDeep, isFull, customizer, key, value, stack));
  });
  return result;
}

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} prototype The object to inherit from.
 * @returns {Object} Returns the new object.
 */
function baseCreate(proto) {
  return isObject(proto) ? objectCreate(proto) : {};
}

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

/**
 * The base implementation of `getTag`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  return objectToString.call(value);
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var result = new buffer.constructor(buffer.length);
  buffer.copy(result);
  return result;
}

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

/**
 * Creates a clone of `map`.
 *
 * @private
 * @param {Object} map The map to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned map.
 */
function cloneMap(map, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);
  return arrayReduce(array, addMapEntry, new map.constructor);
}

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

/**
 * Creates a clone of `set`.
 *
 * @private
 * @param {Object} set The set to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned set.
 */
function cloneSet(set, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);
  return arrayReduce(array, addSetEntry, new set.constructor);
}

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    assignValue(object, key, newValue === undefined ? source[key] : newValue);
  }
  return object;
}

/**
 * Copies own symbol properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Creates an array of the own enumerable symbol properties of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11,
// for data views in Edge < 14, and promises in Node.js.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = objectToString.call(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : undefined;

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, cloneFunc, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return cloneMap(object, isDeep, cloneFunc);

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return cloneSet(object, isDeep, cloneFunc);

    case symbolTag:
      return cloneSymbol(object);
  }
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */
function cloneDeep(value) {
  return baseClone(value, true, true);
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = cloneDeep;


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
/* harmony import */ var _utility_stringConversion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utility/stringConversion */ "./src/utility/stringConversion.js");
/* harmony import */ var _utility_stringConversion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_utility_stringConversion__WEBPACK_IMPORTED_MODULE_2__);




// ============================================================================
//  Controller variables
// ============================================================================

let player = null;
let computer = null;
let playerBoard = null;
let computerBoard = null;
let selectedShip = null;
let playerShips = [];
let computerShips = [];
let playerAttackCount = 0;
let computerAttackCount = 0;

// ============================================================================
//  Gameboard functions
// ============================================================================

/**
 * Event handler for when the player clicks on a tile to attack.
 * @param {Event} e
 */
const handlePlayerAttack = (e) => {
  if (
    e.currentTarget.classList.contains('gameboard__tile_missed') ||
    e.currentTarget.classList.contains('gameboard__tile_hit')
  ) {
    // Prevents attacking of tiles that have already been attacked
    return;
  }

  const tileStr = e.currentTarget.getAttribute('data-tile');
  const attackedTile = player.attack(computerBoard, tileStr);

  if (attackedTile) {
    playerAttackCount++;
    renderBoard(computerBoard, false);

    if (computerBoard.getTile(tileStr).ship && computerBoard.getTile(tileStr).ship.isSunk()) {
      updateComputerShipStatus();
    }

    const statusStr = (0,_utility_stringConversion__WEBPACK_IMPORTED_MODULE_2__.statusToString)(computerBoard.getTile(tileStr).status);
    showStandardMsg(`You attacked ${tileStr} and ${statusStr}.`);

    // Check win condition
    if (computerBoard.isDefeated()) {
      endGame(player);
    } else {
      endTurn();
    }
  }
};

/**
 * Creates tiles for both 10x10 grids that represent gameboards.
 */
const createGridTiles = () => {
  const playerTileGrid = document.querySelector('.gameboard_player > .gameboard__tile-grid');
  const computerTileGrid = document.querySelector('.gameboard_computer > .gameboard__tile-grid');

  let charCode = 65;
  for (; charCode <= 74; charCode++) {
    for (let col = 1; col <= 10; col++) {
      const tileStr = String.fromCharCode(charCode).concat(col.toString());

      const playerTile = document.createElement('div');
      playerTile.classList.add('gameboard__tile');
      playerTile.classList.add(`gameboard__tile_pos_${tileStr}`);
      playerTile.setAttribute('data-tile', tileStr);
      playerTileGrid.appendChild(playerTile);

      const computerTile = document.createElement('div');
      computerTile.classList.add('gameboard__tile');
      computerTile.classList.add(`gameboard__tile_pos_${tileStr}`);
      computerTile.setAttribute('data-tile', tileStr);
      computerTileGrid.appendChild(computerTile);
    }
  }
};

/**
 * Updates the color of each tile on the gameboard based on tile status.
 * @param {Object} gb Gameboard object.
 * @param {boolean} showShips True if gameboard should display ship positions
 */
const renderBoard = (gameboard, showShips) => {
  let tileGrid;

  // Selects the appropriate board
  if (showShips) {
    tileGrid = document.querySelector('.gameboard_player > .gameboard__tile-grid');
  } else {
    tileGrid = document.querySelector('.gameboard_computer > .gameboard__tile-grid');
  }

  // Updates each tile
  const tiles = [...tileGrid.children];
  tiles.forEach((tile) => {
    tile.classList.remove('gameboard__tile_ship');
    tile.classList.remove('gameboard__tile_missed');
    tile.classList.remove('gameboard__tile_hit');

    const gameboardTile = gameboard.getTile(tile.getAttribute('data-tile'));

    // Marks ship postions for player's board
    if (showShips && gameboardTile.ship) {
      tile.classList.add('gameboard__tile_ship');
    }

    // Marks misses
    if (gameboardTile.status === 1) {
      tile.classList.add('gameboard__tile_missed');
    }

    // Marks hits
    if (gameboardTile.status === 2) {
      tile.classList.add('gameboard__tile_hit');
    }
  });
};

/**
 * Resets tile color for tiles that previously indicated ship positions during placement.
 */
const resetTileColors = () => {
  const tiles = [...document.querySelectorAll('.gameboard_player .gameboard__tile')];
  tiles.forEach((tile) => {
    tile.classList.remove('gameboard__tile_placement');
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
  tile.classList.add('gameboard__tile_placement');

  // Up direction
  if (selectedShip.direction === 'UP') {
    for (let i = 0; i < selectedShip.length - 1; i++) {
      // Decrement the row letter
      tileLetter = String.fromCharCode(tileLetter.charCodeAt(0) - 1);
      if (tileLetter.charCodeAt(0) < 65) break;
      tileStr = `${tileLetter}${tileNum}`;
      tile = document.querySelector(`.gameboard__tile_pos_${tileStr}`);
      tile.classList.add('gameboard__tile_placement');
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
      tile.classList.add('gameboard__tile_placement');
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
      tile.classList.add('gameboard__tile_placement');
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
      tile.classList.add('gameboard__tile_placement');
    }
  }
};

/**
 * Allows a player to place their selected ship before game start.
 */
const handleShipPlacement = (e) => {
  if (!selectedShip) return;

  try {
    const tileStr = e.currentTarget.getAttribute('data-tile');
    const ship = playerBoard.placeShip(selectedShip.length, {
      origin: tileStr,
      direction: selectedShip.direction,
    });

    playerShips.push({ type: selectedShip.type, ref: ship });
    showStandardMsg(`You have placed your ${selectedShip.type}.`);

    // Updates the selected ship element
    const shipElement = document.querySelector(`.player-ships__ship_${selectedShip.type}`);
    shipElement.removeEventListener('click', handleShipSelection);
    shipElement.addEventListener('click', handleShipRemove);
    shipElement.classList.add('player-ships__ship_placed');
    selectedShip = null;

    // Hides ship direction controls
    const shipDirection = document.querySelector('.ship-direction');
    shipDirection.classList.add('hidden');

    // Updates other views
    updateShipCounter();
    updatePlayerShipStatus();
    clearDirection();
    renderBoard(playerBoard, true);
  } catch (err) {
    showErrorMsg(err.message.concat('.'));
  }
};

// ============================================================================
//  Ship status/selection functions
// ============================================================================

/**
 * Colors the ships in the player's ship status window according to their status.
 */
const updatePlayerShipStatus = () => {
  const shipElements = [...document.querySelectorAll('.player-ships__ship')];

  // Clear any highlighted ships
  shipElements.forEach((shipElement) => {
    shipElement.classList.remove('player-ships__ship_selected');

    // Determines if current ship element matches with an existing ship
    const shipType = shipElement.getAttribute('data-ship');
    const matchingShip = playerShips.find((ship) => ship.type === shipType);
    if (!matchingShip) return;

    // Updates the ship status color
    if (matchingShip.ref.isSunk()) {
      shipElement.classList.remove('player-ships__ship_damaged');
      shipElement.classList.add('player-ships__ship_sunk');
    } else if (matchingShip.ref.getHits() > 0) {
      shipElement.classList.remove('player-ships__ship_undamaged');
      shipElement.classList.add('player-ships__ship_damaged');
    } else {
      shipElement.classList.add('player-ships__ship_undamaged');
    }
  });
};

/**
 * Colors the ships in the computer's ship status window according to their status.
 */
const updateComputerShipStatus = () => {
  const shipElements = [...document.querySelectorAll('.computer-ships__ship')];

  // Clear any highlighted ships
  shipElements.forEach((shipElement) => {
    // Determines if current ship element matches with an existing ship
    const shipType = shipElement.getAttribute('data-ship');
    const matchingShip = computerShips.find((ship) => ship.type === shipType);
    if (!matchingShip) return;

    // Updates the ship status color
    if (matchingShip.ref.isSunk()) {
      shipElement.classList.remove('computer-ships__ship_damaged');
      shipElement.classList.add('computer-ships__ship_sunk');
    } else if (matchingShip.ref.getHits() > 0) {
      shipElement.classList.remove('computer-ships__ship_undamaged');
      shipElement.classList.add('computer-ships__ship_damaged');
    } else {
      shipElement.classList.add('computer-ships__ship_undamaged');
    }
  });
};

/**
 * Event handler for selecting a ship to place on the gameboard.
 * @param {Event} e
 */
const handleShipSelection = (e) => {
  const shipElements = [...document.querySelectorAll('.player-ships__ship')];
  const shipType = e.currentTarget.getAttribute('data-ship');

  // Clears any highlighted ships
  shipElements.forEach((shipElement) => {
    shipElement.classList.remove('player-ships__ship_selected');
  });

  // Highlights the currently selected ship
  e.currentTarget.classList.add('player-ships__ship_selected');

  if (shipType === 'carrier') {
    selectedShip = { type: shipType, length: 5, direction: 'DOWN' };
  } else if (shipType === 'battleship') {
    selectedShip = { type: shipType, length: 4, direction: 'DOWN' };
  } else if (shipType === 'cruiser') {
    selectedShip = { type: shipType, length: 3, direction: 'DOWN' };
  } else if (shipType === 'submarine') {
    selectedShip = { type: shipType, length: 3, direction: 'DOWN' };
  } else if (shipType === 'destroyer') {
    selectedShip = { type: shipType, length: 2, direction: 'DOWN' };
  } else {
    throw new Error('Invalid ship type attribute');
  }

  showStandardMsg(`You have selected your ${shipType}.`);
  showDirection();
};

/**
 * Allows a player to remove a placed ship before game start.
 * @param {Event} e
 */
const handleShipRemove = (e) => {
  const shipType = e.currentTarget.getAttribute('data-ship');
  const matchingShip = playerShips.find((ship) => ship.type === shipType);
  if (!matchingShip) throw new Error('Unable to remove non-existant ship');

  // Remove ship from stored lists
  playerShips.splice(playerShips.indexOf(matchingShip), 1);
  playerBoard.removeShip(matchingShip.ref);
  selectedShip = null;

  // Swap event handlers
  e.currentTarget.removeEventListener('click', handleShipRemove);
  e.currentTarget.addEventListener('click', handleShipSelection);

  // Update views
  e.currentTarget.classList.remove('player-ships__ship_placed');
  e.currentTarget.classList.remove('player-ships__ship_undamaged');
  updateShipCounter();
  updatePlayerShipStatus();
  renderBoard(playerBoard, true);
  showStandardMsg(`You have removed your ${shipType}.`);
};

// ============================================================================
//  Ship rotation functions
// ============================================================================

/**
 * Clears the currently highlighted direction during ship placement.
 */
const clearDirection = () => {
  // Clears previously highlighted direction
  const rotators = [...document.querySelectorAll('.ship-direction__rotator')];
  rotators.forEach((rotator) => {
    rotator.classList.remove('ship-direction__rotator_selected');
  });
};

/**
 * Highlights the currently selected ship direction during placement.
 */
const showDirection = () => {
  if (!selectedShip) return;

  // Show the ship direction controlls
  const shipDirection = document.querySelector('.ship-direction');
  shipDirection.classList.remove('hidden');
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
  rotator.classList.add('ship-direction__rotator_selected');
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

// ============================================================================
//  Game flow functions
// ============================================================================

/**
 * Starts the game.
 */
const startGame = () => {
  // Hides the start window
  const startWindow = document.querySelector('.start-window');
  startWindow.classList.add('hidden');

  // Unblurs the right gameboard
  const gameboardComputer = document.querySelector('.gameboard_computer');
  const computerShipStatus = document.querySelector('.computer-ships');
  gameboardComputer.classList.remove('gameboard_blurred');
  computerShipStatus.classList.remove('computer-ships_transparent');

  // Removes event listeners for ship selection and remove cursor pointer
  const shipElements = [...document.querySelectorAll('.player-ships__ship')];
  shipElements.forEach((shipElement) => {
    shipElement.style.setProperty('cursor', 'unset');
    shipElement.removeEventListener('click', handleShipRemove);
  });

  // Registers event listeners for computer tiles
  const computerTiles = [...document.querySelectorAll('.gameboard_computer .gameboard__tile')];
  computerTiles.forEach((tile) => {
    tile.addEventListener('click', handlePlayerAttack);
  });

  updateComputerShipStatus();
  showStandardMsg('Game started!');
  showStandardMsg('Click on the enemy tiles to attack.', true);
};

/**
 * Resets the game.
 */
const resetGame = () => {
  player = _models_Player__WEBPACK_IMPORTED_MODULE_0___default()('Player');
  computer = _models_Player__WEBPACK_IMPORTED_MODULE_0___default()();
  playerBoard = _models_Gameboard__WEBPACK_IMPORTED_MODULE_1___default()();
  computerBoard = _models_Gameboard__WEBPACK_IMPORTED_MODULE_1___default()();
  playerShips = [];
  computerShips = [];
  playerAttackCount = 0;
  computerAttackCount = 0;

  renderBoard(playerBoard, true);
  renderBoard(computerBoard, false);
  setupComputerBoard();
  updatePlayerShipStatus();
  updateComputerShipStatus();
  updateShipCounter();

  // Adds event handlers for ship selection and a pointer cursor to each ship selection element
  const playerShipElements = [...document.querySelectorAll('.player-ships__ship')];
  playerShipElements.forEach((shipElement) => {
    shipElement.style.setProperty('cursor', 'pointer');
    shipElement.addEventListener('click', handleShipSelection);
    shipElement.classList.remove('player-ships__ship_undamaged');
    shipElement.classList.remove('player-ships__ship_damaged');
    shipElement.classList.remove('player-ships__ship_sunk');
    shipElement.classList.remove('player-ships__ship_placed');
  });

  // Resets computer ship status window
  const computerShipElements = [...document.querySelectorAll('.computer-ships__ship')];
  computerShipElements.forEach((shipElement) => {
    shipElement.classList.remove('computer-ships__ship_undamaged');
    shipElement.classList.remove('computer-ships__ship_damaged');
    shipElement.classList.remove('computer-ships__ship_sunk');
  });

  // Hides the reset button
  const resetBtn = document.querySelector('.message-window__reset-btn');
  resetBtn.classList.add('hidden');

  // Shows the start window
  const startWindow = document.querySelector('.start-window');
  startWindow.classList.remove('hidden');

  // Blurs the right gameboard
  const gameboardComputer = document.querySelector('.gameboard_computer');
  const computerShipStatus = document.querySelector('.computer-ships');
  gameboardComputer.classList.add('gameboard_blurred');
  computerShipStatus.classList.add('computer-ships_transparent');

  // Resets status messages
  const outcomeMsg = document.querySelector('.message-window__outcome');
  outcomeMsg.classList.add('hidden');
  showStandardMsg('Click on your ships to place them in the grid.');
  const status = document.querySelector('.start-dialog__status');
  status.textContent = 'Place your ships to start.';
};

/**
 * Allows the game to end and prevents any more moves from being made.
 */
const endGame = (winner) => {
  // Removes player ability to continue attack
  const tiles = [...document.querySelectorAll('.gameboard_computer .gameboard__tile')];
  tiles.forEach((tile) => tile.removeEventListener('click', handlePlayerAttack));

  const resetBtn = document.querySelector('.message-window__reset-btn');
  resetBtn.classList.remove('hidden');

  const outcomeMsg = document.querySelector('.message-window__outcome');
  outcomeMsg.classList.remove('hidden');

  if (winner.isHuman()) {
    outcomeMsg.textContent = 'You won!';
    showStandardMsg(`You sunk all their ships in ${playerAttackCount} shots!`, true);
  } else {
    outcomeMsg.textContent = 'You lost!';
    showStandardMsg(`They sunk all your ships in ${computerAttackCount} shots!`, true);
  }
};

/**
 * Allows the computer to make its turn against the player when the player's
 * turn is over.
 */
const endTurn = () => {
  const tileStr = computer.attack(playerBoard);
  computerAttackCount++;
  renderBoard(playerBoard, true);
  updatePlayerShipStatus();

  const statusStr = (0,_utility_stringConversion__WEBPACK_IMPORTED_MODULE_2__.statusToString)(playerBoard.getTile(tileStr).status);
  showStandardMsg(`The enemy attacked ${tileStr} and ${statusStr}.`, true);

  if (playerBoard.isDefeated()) {
    endGame(computer);
  }
};

/**
 * Checks if all ships are placed and starts the game if so. Otherwise, the
 * placed ships counter text is updated.
 */
const updateShipCounter = () => {
  const count = playerShips.length;
  const startBtn = document.querySelector('.start-dialog__btn');

  // Enables start button if all ships placed
  const status = document.querySelector('.start-dialog__status');
  if (count === 5) {
    startBtn.removeAttribute('disabled');
    status.textContent = 'The game is ready to start.';
  } else {
    startBtn.setAttribute('disabled', true);
    status.textContent = 'Place your ships to start.';
  }

  // Updates the counter text
  const counterElement = document.querySelector('.start-dialog__ship-counter');
  counterElement.textContent = `${playerShips.length}/5 ships placed.`;
};

/**
 * Randomly places the computer's ships on its board.
 */
const setupComputerBoard = () => {
  computerShips.push({
    type: 'carrier',
    ref: computerBoard.placeShipRandom(5),
  });
  computerShips.push({
    type: 'battleship',
    ref: computerBoard.placeShipRandom(4),
  });
  computerShips.push({
    type: 'cruiser',
    ref: computerBoard.placeShipRandom(3),
  });
  computerShips.push({
    type: 'submarine',
    ref: computerBoard.placeShipRandom(3),
  });
  computerShips.push({
    type: 'destroyer',
    ref: computerBoard.placeShipRandom(2),
  });
};

// ============================================================================
//  Message functions
// ============================================================================

/**
 * Displays a status message.
 * @param {string} msg The message to display.
 * @param {boolean} append Will append an additional message if true
 */
const showStandardMsg = (msg, append = false) => {
  const messages = document.querySelector('.message-window__messages');

  const message = document.createElement('div');
  message.classList.add('messages__msg');
  message.textContent = msg;

  // Removes any previous error styling
  const messageWindow = document.querySelector('.message-window');
  messageWindow.classList.remove('message-window_error');

  if (append) {
    messages.appendChild(message);
  } else {
    // Clears previous messages
    while (messages.firstChild) {
      messages.removeChild(messages.firstChild);
    }
    messages.appendChild(message);
  }
};

/**
 * Displays an error message.
 * @param {string} msg The error message to display.
 */
const showErrorMsg = (msg) => {
  const messages = document.querySelector('.message-window__messages');

  // Clears previous messages
  while (messages.firstChild) {
    messages.removeChild(messages.firstChild);
  }

  const message = document.createElement('div');
  message.classList.add('messages__msg');
  message.textContent = msg;

  // Styles the message window to indicate an error
  const messageWindow = document.querySelector('.message-window');
  messageWindow.classList.add('message-window_error');

  messages.appendChild(message);
};

// ============================================================================
//  Test functions
// ============================================================================

/**
 * Allows two computers to play against each other.
 */
const testFight = (bothComputers = false) => {
  const shipElements = [...document.querySelectorAll('.player-ships__ship')];
  shipElements.forEach((shipElement) => {
    shipElement.removeEventListener('click', handleShipSelection);
    shipElement.classList.add('player-ships__ship_placed');
  });

  playerShips.push({
    type: 'carrier',
    ref: playerBoard.placeShipRandom(5),
  });
  playerShips.push({
    type: 'battleship',
    ref: playerBoard.placeShipRandom(4),
  });
  playerShips.push({
    type: 'cruiser',
    ref: playerBoard.placeShipRandom(3),
  });
  playerShips.push({
    type: 'submarine',
    ref: playerBoard.placeShipRandom(3),
  });
  playerShips.push({
    type: 'destroyer',
    ref: playerBoard.placeShipRandom(2),
  });

  renderBoard(playerBoard, true);
  updatePlayerShipStatus();
  startGame();

  if (!bothComputers) return;

  for (let i = 0; i < 99; i++) {
    if (playerBoard.isDefeated()) break;

    const tileStr = player.attack(computerBoard);
    playerAttackCount++;
    const statusStr = (0,_utility_stringConversion__WEBPACK_IMPORTED_MODULE_2__.statusToString)(computerBoard.getTile(tileStr).status);
    showStandardMsg(`You attacked ${tileStr} and ${statusStr}.`);

    if (computerBoard.isDefeated()) {
      endGame(player);
      break;
    }

    endTurn();
  }

  renderBoard(computerBoard, false);
  updateComputerShipStatus();
};

// ============================================================================
//  Exported functions
// ============================================================================

/**
 * Initializes the start of the game.
 */
const initialize = () => {
  createGridTiles();
  player = _models_Player__WEBPACK_IMPORTED_MODULE_0___default()('Player');
  computer = _models_Player__WEBPACK_IMPORTED_MODULE_0___default()();
  playerBoard = _models_Gameboard__WEBPACK_IMPORTED_MODULE_1___default()();
  computerBoard = _models_Gameboard__WEBPACK_IMPORTED_MODULE_1___default()();
  setupComputerBoard();

  // Register event listeners on player board for game start ship placement
  const playerTiles = [...document.querySelectorAll('.gameboard_player .gameboard__tile')];
  playerTiles.forEach((tile) => {
    tile.addEventListener('mouseover', showShipPlacement);
    tile.addEventListener('click', handleShipPlacement);
  });

  // Registers event listener for ship selection list
  const shipElements = [...document.querySelectorAll('.player-ships__ship')];
  shipElements.forEach((shipElement) =>
    shipElement.addEventListener('click', handleShipSelection)
  );

  // Registers event listener for ship rotation buttons
  const rotators = [...document.querySelectorAll('.ship-direction__rotator')];
  rotators.forEach((rotator) => {
    rotator.addEventListener('click', handleRotation);
  });

  // Registers event listener for clearing any ship placement tile colors
  // when leaving the grid
  const grid = document.querySelector('.gameboard_player .gameboard__tile-grid');
  grid.addEventListener('mouseleave', resetTileColors);

  // Registers event listener for the start button
  const startButton = document.querySelector('.start-dialog__btn');
  startButton.addEventListener('click', startGame);

  // Registers event listener for reset button
  const resetButton = document.querySelector('.message-window__reset-btn');
  resetButton.addEventListener('click', resetGame);

  // TEST
  testFight();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialize);


/***/ }),

/***/ "./src/models/Gameboard.js":
/*!*********************************!*\
  !*** ./src/models/Gameboard.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const cloneDeep = __webpack_require__(/*! lodash.clonedeep */ "./node_modules/lodash.clonedeep/index.js");
const Ship = __webpack_require__(/*! ./Ship */ "./src/models/Ship.js");
const { toGridCoord, toTileStr } = __webpack_require__(/*! ../utility/stringConversion */ "./src/utility/stringConversion.js");
const { GameboardErrors, ShipErrors } = __webpack_require__(/*! ../utility/errors */ "./src/utility/errors.js");

/**
 * Gameboard factory function.
 * @returns An interface for the gameboard.
 */
const Gameboard = () => {
  // Creates a 2D grid of tiles and their associated properties
  // Origin point is located in the top left at row 0 and column 0.
  let grid = [...new Array(10)].map(() =>
    [...new Array(10)].map(() => ({ ship: null, status: 0 }))
  );

  // Contains ships that are present on the board
  const ships = [];

  /**
   * Checks the grid coordinate and adjacent points for existing ships.
   * @param {number} row Grid row number
   * @param {number} col Col row number
   * @param {Object} [shipToIgnore] Ignores tiles with this ship on it
   * @returns true if an existing ship is in proximity, false otherwise
   */
  const checkProximity = (row, col) => {
    /*
    For a given grid point, all adjacent points are checked for existing
    ships. The order of checked points starts with the top adjacent points
    left to right. Followed by middle adjacent points left to right.
    Finally, the bottom adjacent points are checked left to right. Checks
    for undefined are made so no errors are encountered if the initial grid
    point is on the grid edge.
    */
    for (let r = row - 1; r <= row + 1; r++) {
      if (grid[r]) {
        for (let c = col - 1; c <= col + 1; c++) {
          if (grid[r][c]) {
            if (grid[r][c].ship) return true;
          }
        }
      }
    }

    return false;
  };

  /**
   * Places a new ship on the gameboard.
   * @param {number} len Length of the ship to place.
   * @param {object} pos Position of the ship.
   */
  const placeShip = (len, pos) => {
    const ship = Ship(len, pos);
    const shipDirection = ship.getPosition().direction;
    const gridCopy = cloneDeep(grid);
    const gridCoord = toGridCoord(ship.getPosition().origin);

    if (shipDirection === 'UP') {
      let { row, col } = gridCoord; // eslint-disable-line prefer-const
      for (let i = len; i > 0; i--) {
        if (checkProximity(row, col)) throw new Error(GameboardErrors.proximity);
        gridCopy[row][col].ship = ship;
        row--;
      }
    } else if (shipDirection === 'DOWN') {
      let { row, col } = gridCoord; // eslint-disable-line prefer-const
      for (let i = len; i > 0; i--) {
        if (checkProximity(row, col)) throw new Error(GameboardErrors.proximity);
        gridCopy[row][col].ship = ship;
        row++;
      }
    } else if (shipDirection === 'LEFT') {
      let { row, col } = gridCoord; // eslint-disable-line prefer-const
      for (let i = len; i > 0; i--) {
        if (checkProximity(row, col)) throw new Error(GameboardErrors.proximity);
        gridCopy[row][col].ship = ship;
        col--;
      }
    } else if (shipDirection === 'RIGHT') {
      let { row, col } = gridCoord; // eslint-disable-line prefer-const
      for (let i = len; i > 0; i--) {
        if (checkProximity(row, col)) throw new Error(GameboardErrors.proximity);
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

  const placeShipRandom = (len) => {
    if (!len) throw new Error(GameboardErrors.missingLengthArg);
    if (ships.length === 5) throw new Error(GameboardErrors.maxShipCount);

    const directions = ['UP', 'RIGHT', 'DOWN', 'LEFT'];
    let ship = null;

    while (!ship) {
      // Random tile
      const row = Math.floor(Math.random() * 10);
      const col = Math.floor(Math.random() * 10);
      const origin = toTileStr(row, col);

      // Random direction
      let dir = Math.floor(Math.random() * 4);
      let direction = directions[dir];

      // Attempts to place ship at random tile in random direction. If
      // placement fails, the next direction is attempted. If all directions
      // fail, a new random tile will be chosen.
      for (let i = 0; i < 4; i++) {
        try {
          ship = placeShip(len, { origin, direction });
          break;
        } catch (err) {
          if (
            err.message === GameboardErrors.proximity ||
            err.message === ShipErrors.invalidShipPosition
          ) {
            // Attempts next direction
            direction = directions[++dir % 4];
          } else {
            console.error(err);
          }
        }
      }
    }

    return ship;
  };

  /**
   * @param {string} tile A tile on the grid (e.g. 'A1').
   * @returns Object containing tile properties.
   */
  const getTile = (tileStr) => {
    const { row, col } = toGridCoord(tileStr);
    if (grid[row] && grid[row][col]) {
      return grid[row][col];
    }

    return null;
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
      throw new Error(GameboardErrors.invalidTileStr);
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
   * @returns Number of ships on the gameboard.
   */
  const getShipCount = () => ships.length;

  /**
   * Removes the specified ship from the gameboard.
   * @param {object} ship Ship object.
   */
  const removeShip = (ship) => {
    if (!ship) return;

    const gridCoord = toGridCoord(ship.getPosition().origin);
    const shipDirection = ship.getPosition().direction;
    const shipLength = ship.getLength();

    if (shipDirection === 'UP') {
      let { row, col } = gridCoord; // eslint-disable-line prefer-const
      for (let i = shipLength; i > 0; i--) {
        grid[row][col].ship = null;
        row--;
      }
    } else if (shipDirection === 'DOWN') {
      let { row, col } = gridCoord; // eslint-disable-line prefer-const
      for (let i = shipLength; i > 0; i--) {
        grid[row][col].ship = null;
        row++;
      }
    } else if (shipDirection === 'LEFT') {
      let { row, col } = gridCoord; // eslint-disable-line prefer-const
      for (let i = shipLength; i > 0; i--) {
        grid[row][col].ship = null;
        col--;
      }
    } else if (shipDirection === 'RIGHT') {
      let { row, col } = gridCoord; // eslint-disable-line prefer-const
      for (let i = shipLength; i > 0; i--) {
        grid[row][col].ship = null;
        col++;
      }
    }

    ships.splice(ships.indexOf(ship), 1);
  };

  return {
    placeShip,
    getTile,
    receiveAttack,
    isDefeated,
    getShipCount,
    removeShip,
    placeShipRandom,
    checkProximity,
  };
};

module.exports = Gameboard;


/***/ }),

/***/ "./src/models/Player.js":
/*!******************************!*\
  !*** ./src/models/Player.js ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const { toGridCoord, toTileStr } = __webpack_require__(/*! ../utility/stringConversion */ "./src/utility/stringConversion.js");
const { PlayerErrors } = __webpack_require__(/*! ../utility/errors */ "./src/utility/errors.js");

/**
 * Represents a player. If no name is given, a computer player will be set up.
 * @param {string} n Player name. If empty, player becomes a computer.
 * @returns The Player interface.
 */
const Player = (n) => {
  const name = n || 'Computer';

  // Populates valid moves for the player
  const moves = [];
  for (let char = 65; char <= 74; char++) {
    for (let num = 1; num <= 10; num++) {
      moves.push(String.fromCharCode(char).concat(num.toString()));
    }
  }

  // Contains the next attacks a computer player should make based on tiles that hit
  const nextAttacks = [];

  let firstHit = null;

  /**
   * Adds the next attacks that the computer should make if the tileStr represents a hit.
   * @param {string} tileStr String that represents a tile (e.g. 'A1').
   * @param {Object} gameboard Gameboard object.
   * @param {string} [dir] Direction to limit attacks to.
   */
  const setNextAttacks = (tileStr, gameboard, dir = null) => {
    let orientation = null;
    if (dir === 'UP' || dir === 'DOWN') {
      orientation = 'VERTICAL';
    } else if (dir === 'LEFT' || dir === 'RIGHT') {
      orientation = 'HORIZONTAL';
    } else if (dir) {
      throw new Error(PlayerErrors.invalidDirection);
    }

    const { row, col } = toGridCoord(tileStr);
    nextAttacks.splice(0);

    if (!orientation || orientation === 'VERTICAL') {
      // Checks up
      let tile = gameboard.getTile(toTileStr(row - 1, col));
      if (tile && tile.status === 0) {
        nextAttacks.push(toTileStr(row - 1, col));
      }

      // Checks down
      tile = gameboard.getTile(toTileStr(row + 1, col));
      if (tile && tile.status === 0) {
        nextAttacks.push(toTileStr(row + 1, col));
      }
    }

    if (!orientation || orientation === 'HORIZONTAL') {
      // Checks to the right
      let tile = gameboard.getTile(toTileStr(row, col + 1));
      if (tile && tile.status === 0) {
        nextAttacks.push(toTileStr(row, col + 1));
      }

      // Checks to the left
      tile = gameboard.getTile(toTileStr(row, col - 1));
      if (tile && tile.status === 0) {
        nextAttacks.push(toTileStr(row, col - 1));
      }
    }
  };

  /**
   * Eliminates valid moves from the moves array. Used for when a ship is sunk to allow the
   * computer to make better choices.
   * @param {Object} ship Ship object.
   * @param {Object} gameboard Gameboard object.
   */
  const deleteMovesNearShip = (ship, gameboard) => {
    const shipLength = ship.getLength();
    const shipDirection = ship.getPosition().direction;
    const shipOrigin = ship.getPosition().origin;

    let { row, col } = toGridCoord(shipOrigin);
    for (let i = 0; i < shipLength; i++) {
      for (let r = row - 1; r <= row + 1; r++) {
        for (let c = col - 1; c <= col + 1; c++) {
          const tile = gameboard.getTile(toTileStr(r, c));
          if (tile) {
            const movesIndex = moves.indexOf(toTileStr(r, c));
            if (movesIndex >= 0) {
              moves.splice(movesIndex, 1);
            }
          }
        }
      }

      if (shipDirection === 'UP') {
        row--;
      } else if (shipDirection === 'RIGHT') {
        col++;
      } else if (shipDirection === 'DOWN') {
        row++;
      } else if (shipDirection === 'LEFT') {
        col--;
      }
    }
  };

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
   * @param {string} [tileStr] The tile to attack (e.g. 'A1'). If omitted, a random attack is made.
   * @returns The tile that was attacked.
   */
  const attack = (gameboard, tileStr = null) => {
    // Player attacks a specific tile
    if (tileStr) return gameboard.receiveAttack(tileStr) ? tileStr : null;

    // Checks if computer can make additional moves
    if (moves.length === 0) throw new Error(PlayerErrors.noValidMoves);

    // Computer player chooses an attack from the nextAttacks array if not empty
    if (nextAttacks.length > 0) {
      const randomIndex = Math.floor(Math.random() * nextAttacks.length);
      const nextTileStr = nextAttacks[randomIndex];
      if (!gameboard.receiveAttack(nextTileStr)) throw new Error(PlayerErrors.compAttackFailed);

      // Removes the attacked tile from future options
      moves.splice(moves.indexOf(nextTileStr), 1);
      nextAttacks.splice(randomIndex, 1);

      const attackedTile = gameboard.getTile(nextTileStr);
      if (attackedTile.status === 2 && !attackedTile.ship.isSunk()) {
        // Attack was a hit, updating next attacks based on ship direction
        setNextAttacks(nextTileStr, gameboard, attackedTile.ship.getPosition().direction);

        if (nextAttacks.length === 0 && !gameboard.getTile(firstHit).ship.isSunk()) {
          // End of ship reached and no next attacks available, attacking in other direction
          setNextAttacks(
            firstHit,
            gameboard,
            gameboard.getTile(firstHit).ship.getPosition().direction
          );
        }
      } else if (attackedTile.status === 2 && attackedTile.ship.isSunk()) {
        // Ship was sunk, clears next attacks to allow random attacks on tiles again
        firstHit = null;
        nextAttacks.splice(0);
        deleteMovesNearShip(attackedTile.ship, gameboard);
      } else if (nextAttacks.length === 0 && !gameboard.getTile(firstHit).ship.isSunk()) {
        // Last attack missed and no next attacks available, attacking in other direction
        setNextAttacks(
          firstHit,
          gameboard,
          gameboard.getTile(firstHit).ship.getPosition().direction
        );
      }
      return nextTileStr;
    }

    // Computer player attacks random tile
    const randomIndex = Math.floor(Math.random() * moves.length);
    const randomTile = moves.at(randomIndex);
    if (!gameboard.receiveAttack(randomTile)) throw new Error(PlayerErrors.compAttackFailed);

    // Checks if computer hit a ship
    if (gameboard.getTile(randomTile).status === 2) {
      // Allows computer to choose tiles near damaged ship
      firstHit = randomTile;
      setNextAttacks(randomTile, gameboard);
    }

    moves.splice(randomIndex, 1);
    return randomTile;
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


/***/ }),

/***/ "./src/utility/errors.js":
/*!*******************************!*\
  !*** ./src/utility/errors.js ***!
  \*******************************/
/***/ ((module) => {

const GameboardErrors = {
  proximity: 'Ship cannot be placed too close to others',
  invalidTileStr: 'Invalid tile string',
  missingLengthArg: 'Missing length argument',
  maxShipCount: 'Max ship count reached',
};

const ShipErrors = {
  invalidShipLength: 'Invalid ship length',
  invalidShipPosition: 'Invalid ship position',
};

const PlayerErrors = {
  noValidMoves: 'No valid moves remaining',
  compAttackFailed: 'Computer attack failed',
  invalidDirection: 'Invalid direction',
};

module.exports = { GameboardErrors, ShipErrors, PlayerErrors };


/***/ }),

/***/ "./src/utility/stringConversion.js":
/*!*****************************************!*\
  !*** ./src/utility/stringConversion.js ***!
  \*****************************************/
/***/ ((module) => {

/**
 * Converts a tile string to array indexes for the grid.
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
 * Converts array indexes to a tile string
 * @param row Row index
 * @param col Column index
 * @returns A tile string (e.g. 'A1')
 */
const toTileStr = (row, col) => String.fromCharCode(65 + row).concat(`${col + 1}`);

/**
 * Converts a status number from a tile to a string description.
 * @param {number} status 0 = unknown, 1 = missed, 2 = hit
 */
const statusToString = (status) => {
  if (status === 1) {
    return 'missed';
  }

  if (status === 2) {
    return 'hit';
  }

  return '';
};

module.exports = { toGridCoord, toTileStr, statusToString };


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
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG1CQUFtQjs7Ozs7OztVQ3BDbkI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ0pBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0E0QjtBQUNFO0FBQ0U7QUFDSjtBQUNjOztBQUUxQywyREFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvY29udGVudC5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9nYW1lYm9hcmQuY3NzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvcmVzZXQuY3NzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvc2hpcHMuY3NzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC5jbG9uZWRlZXAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9jb250ZW50LmNzcz8zZGJhIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvZ2FtZWJvYXJkLmNzcz8yMTg3Iiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvcmVzZXQuY3NzPzRjZmIiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9zaGlwcy5jc3M/NmQ2NyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9HYW1lQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvbW9kZWxzL0dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvbW9kZWxzL1BsYXllci5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvbW9kZWxzL1NoaXAuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3V0aWxpdHkvZXJyb3JzLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy91dGlsaXR5L3N0cmluZ0NvbnZlcnNpb24uanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9kZSBtb2R1bGUgZGVjb3JhdG9yIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS1jb250ZW50LWJnLWNvbG9yOiAjNWQ2ZDg4O1xcbiAgLS1taWxkLXdoaXRlOiAjYjBiMWJkO1xcbiAgLS1taWxkLXdoaXRlLWhvdmVyOiAjOTQ5NWEwO1xcbiAgLS1taWRuaWdodDogIzBlMGYyNDtcXG4gIC0tc2hpcC1iZy1jb2xvcjogIzliMzgzODtcXG4gIC0tc2hpcC11bmRhbWFnZWQtY29sb3I6ICM0MTg4MjA7XFxuICAtLXNoaXAtZGFtYWdlZC1jb2xvcjogI2FiYWQzYTtcXG4gIC0tc2hpcC1ob3Zlci1jb2xvcjogIzAwNTk3NDtcXG4gIC0tc2hpcC1zZWxlY3RlZC1jb2xvcjogIzAwN2JhMDtcXG4gIC0tZGlyZWN0aW9uLWhvdmVyLWNvbG9yOiAjMDA1OTc0O1xcbiAgLS1kaXJlY3Rpb24tc2VsZWN0ZWQtY29sb3I6ICMwMDdiYTA7XFxuICAtLXRpbGUtbm9ybWFsLWNvbG9yOiAjMmQzNzRmO1xcbiAgLS10aWxlLW1pc3NlZC1jb2xvcjogIzFhMWIzNztcXG4gIC0tZ2FtZWJvYXJkLWJnLWNvbG9yOiAjNjA2YzgwO1xcbiAgLS1lcnJvci1yZWQtY29sb3I6ICM5YjM4Mzg7XFxuXFxuICAtLWRlZmF1bHQtYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29udGVudC1iZy1jb2xvcik7XFxufVxcblxcbi5wbGF5ZXItc3BhY2UsXFxuLmNvbXB1dGVyLXNwYWNlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbi5wbGF5ZXItc3BhY2Uge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxufVxcblxcbi5jb21wdXRlci1zcGFjZSB7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICBncmlkLXJvdzogMSAvIDI7XFxuICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4vKiBTdGF0dXMgbWVzc2FnZXMgKi9cXG5cXG4ubWVzc2FnZS13aW5kb3ctd3JhcHBlciB7XFxuICBoZWlnaHQ6IDIyNXB4O1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgZ3JpZC1yb3c6IDIgLyAzO1xcbn1cXG5cXG4ubWVzc2FnZS13aW5kb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbWlkbmlnaHQpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ2FtZWJvYXJkLWJnLWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1taWRuaWdodCk7XFxufVxcblxcbi5tZXNzYWdlLXdpbmRvd19fbWVzc2FnZXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbi5tZXNzYWdlLXdpbmRvd19fbWVzc2FnZXMuaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5tZXNzYWdlLXdpbmRvd19fcmVzZXQtYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1pbGQtd2hpdGUtaG92ZXIpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubWVzc2FnZS13aW5kb3dfX3Jlc2V0LWJ0biB7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1taWRuaWdodCk7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1kZWZhdWx0LWJvcmRlci1yYWRpdXMpO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgY29sb3I6IHZhcigtLW1pZG5pZ2h0KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1pbGQtd2hpdGUpO1xcbn1cXG5cXG4ubWVzc2FnZS13aW5kb3dfX3Jlc2V0LWJ0bi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLm1lc3NhZ2Utd2luZG93X19vdXRjb21lIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLm1lc3NhZ2Utd2luZG93X19vdXRjb21lLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubWVzc2FnZS13aW5kb3dfZXJyb3Ige1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZXJyb3ItcmVkLWNvbG9yKTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9jb250ZW50LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLDJCQUEyQjtFQUMzQixxQkFBcUI7RUFDckIsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQix3QkFBd0I7RUFDeEIsK0JBQStCO0VBQy9CLDZCQUE2QjtFQUM3QiwyQkFBMkI7RUFDM0IsOEJBQThCO0VBQzlCLGdDQUFnQztFQUNoQyxtQ0FBbUM7RUFDbkMsNEJBQTRCO0VBQzVCLDRCQUE0QjtFQUM1Qiw2QkFBNkI7RUFDN0IsMEJBQTBCOztFQUUxQiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osYUFBYTtFQUNiLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQix5Q0FBeUM7QUFDM0M7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUEsb0JBQW9COztBQUVwQjtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsU0FBUztFQUNULGFBQWE7RUFDYixpQ0FBaUM7RUFDakMsa0JBQWtCO0VBQ2xCLDJDQUEyQztFQUMzQyxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UseUNBQXlDO0VBQ3pDLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsMkNBQTJDO0VBQzNDLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHdDQUF3QztBQUMxQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAtLWNvbnRlbnQtYmctY29sb3I6ICM1ZDZkODg7XFxuICAtLW1pbGQtd2hpdGU6ICNiMGIxYmQ7XFxuICAtLW1pbGQtd2hpdGUtaG92ZXI6ICM5NDk1YTA7XFxuICAtLW1pZG5pZ2h0OiAjMGUwZjI0O1xcbiAgLS1zaGlwLWJnLWNvbG9yOiAjOWIzODM4O1xcbiAgLS1zaGlwLXVuZGFtYWdlZC1jb2xvcjogIzQxODgyMDtcXG4gIC0tc2hpcC1kYW1hZ2VkLWNvbG9yOiAjYWJhZDNhO1xcbiAgLS1zaGlwLWhvdmVyLWNvbG9yOiAjMDA1OTc0O1xcbiAgLS1zaGlwLXNlbGVjdGVkLWNvbG9yOiAjMDA3YmEwO1xcbiAgLS1kaXJlY3Rpb24taG92ZXItY29sb3I6ICMwMDU5NzQ7XFxuICAtLWRpcmVjdGlvbi1zZWxlY3RlZC1jb2xvcjogIzAwN2JhMDtcXG4gIC0tdGlsZS1ub3JtYWwtY29sb3I6ICMyZDM3NGY7XFxuICAtLXRpbGUtbWlzc2VkLWNvbG9yOiAjMWExYjM3O1xcbiAgLS1nYW1lYm9hcmQtYmctY29sb3I6ICM2MDZjODA7XFxuICAtLWVycm9yLXJlZC1jb2xvcjogIzliMzgzODtcXG5cXG4gIC0tZGVmYXVsdC1ib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb250ZW50LWJnLWNvbG9yKTtcXG59XFxuXFxuLnBsYXllci1zcGFjZSxcXG4uY29tcHV0ZXItc3BhY2Uge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuLnBsYXllci1zcGFjZSB7XFxuICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICBncmlkLXJvdzogMSAvIDI7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG59XFxuXFxuLmNvbXB1dGVyLXNwYWNlIHtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gIGdyaWQtcm93OiAxIC8gMjtcXG4gIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi8qIFN0YXR1cyBtZXNzYWdlcyAqL1xcblxcbi5tZXNzYWdlLXdpbmRvdy13cmFwcGVyIHtcXG4gIGhlaWdodDogMjI1cHg7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICBncmlkLXJvdzogMiAvIDM7XFxufVxcblxcbi5tZXNzYWdlLXdpbmRvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1taWRuaWdodCk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1nYW1lYm9hcmQtYmctY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLW1pZG5pZ2h0KTtcXG59XFxuXFxuLm1lc3NhZ2Utd2luZG93X19tZXNzYWdlcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuLm1lc3NhZ2Utd2luZG93X19tZXNzYWdlcy5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLm1lc3NhZ2Utd2luZG93X19yZXNldC1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWlsZC13aGl0ZS1ob3Zlcik7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tZXNzYWdlLXdpbmRvd19fcmVzZXQtYnRuIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1pZG5pZ2h0KTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWRlZmF1bHQtYm9yZGVyLXJhZGl1cyk7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBjb2xvcjogdmFyKC0tbWlkbmlnaHQpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWlsZC13aGl0ZSk7XFxufVxcblxcbi5tZXNzYWdlLXdpbmRvd19fcmVzZXQtYnRuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubWVzc2FnZS13aW5kb3dfX291dGNvbWUge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4ubWVzc2FnZS13aW5kb3dfX291dGNvbWUuaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5tZXNzYWdlLXdpbmRvd19lcnJvciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1lcnJvci1yZWQtY29sb3IpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuZ2FtZWJvYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMSwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDExLCAxZnIpO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tbWlkbmlnaHQpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tZGVmYXVsdC1ib3JkZXItcmFkaXVzKTtcXG4gIHdpZHRoOiBjbGFtcCgyODBweCwgMzB2dywgNTAwcHgpO1xcbiAgaGVpZ2h0OiBjbGFtcCgyODBweCwgMzB2dywgNTAwcHgpO1xcbiAgY29sb3I6IHZhcigtLW1pZG5pZ2h0KTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ2FtZWJvYXJkLWJnLWNvbG9yKTtcXG59XFxuXFxuLmdhbWVib2FyZF9ibHVycmVkIHtcXG4gIGZpbHRlcjogYmx1cigzcHgpO1xcbn1cXG5cXG4vKiBUaWxlcyAqL1xcblxcbi5nYW1lYm9hcmRfX3RpbGUtZ3JpZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMTE7XFxuICBncmlkLXJvdzogMiAvIDExO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbWlkbmlnaHQpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tZGVmYXVsdC1ib3JkZXItcmFkaXVzKTtcXG59XFxuXFxuLmdhbWVib2FyZF9fdGlsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbWlkbmlnaHQpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGlsZS1ub3JtYWwtY29sb3IpO1xcbn1cXG5cXG4uZ2FtZWJvYXJkX2NvbXB1dGVyXFxuICAuZ2FtZWJvYXJkX190aWxlOmhvdmVyOm5vdCguZ2FtZWJvYXJkX190aWxlX3NoaXAsIC5nYW1lYm9hcmRfX3RpbGVfaGl0LCAuZ2FtZWJvYXJkX190aWxlX21pc3NlZCkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWlsZC13aGl0ZSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5nYW1lYm9hcmRfX3RpbGVfc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaGlwLXNlbGVjdGVkLWNvbG9yKTtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgNDAwbXM7XFxufVxcblxcbi5nYW1lYm9hcmRfX3RpbGVfbWlzc2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRpbGUtbWlzc2VkLWNvbG9yKTtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgNDAwbXM7XFxufVxcblxcbi5nYW1lYm9hcmRfX3RpbGVfaGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoaXAtYmctY29sb3IpO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciA0MDBtcztcXG59XFxuXFxuLmdhbWVib2FyZF9fdGlsZV9wbGFjZW1lbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2hpcC1zZWxlY3RlZC1jb2xvcik7XFxufVxcblxcbi8qIExhYmVscyAqL1xcblxcbi5nYW1lYm9hcmRfX2NvbC1sYWJlbHMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAxMTtcXG4gIGdyaWQtcm93OiAxIC8gMjtcXG59XFxuXFxuLmdhbWVib2FyZF9fcm93LWxhYmVscyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICBncmlkLXJvdzogMiAvIDExO1xcbn1cXG5cXG4uZ2FtZWJvYXJkX19yb3ctbGFiZWwsXFxuLmdhbWVib2FyZF9fY29sLWxhYmVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi8qIFN0YXJ0IHdpbmRvdyAqL1xcblxcbi5nYW1lYm9hcmQtd3JhcHBlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5zdGFydC13aW5kb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLnN0YXJ0LWRpYWxvZyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1pZG5pZ2h0KTtcXG4gIHdpZHRoOiA3MCU7XFxuICBoZWlnaHQ6IDQwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdhbWVib2FyZC1iZy1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tbWlkbmlnaHQpO1xcbn1cXG5cXG4uc3RhcnQtd2luZG93LmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uc3RhcnQtZGlhbG9nX19idG4ge1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbWlkbmlnaHQpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tZGVmYXVsdC1ib3JkZXItcmFkaXVzKTtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGNvbG9yOiB2YXIoLS1taWRuaWdodCk7XFxufVxcblxcbi5zdGFydC1kaWFsb2dfX2J0bjpkaXNhYmxlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aWxlLW5vcm1hbC1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tZ2FtZWJvYXJkLWJnLWNvbG9yKTtcXG59XFxuXFxuLnN0YXJ0LWRpYWxvZ19fYnRuOm5vdCguc3RhcnQtZGlhbG9nX19idG46ZGlzYWJsZWQpOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1pbGQtd2hpdGUtaG92ZXIpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc3RhcnQtZGlhbG9nX19idG46bm90KC5zdGFydC1kaWFsb2dfX2J0bjpkaXNhYmxlZCkge1xcbiAgY29sb3I6IHZhcigtLW1pZG5pZ2h0KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1pbGQtd2hpdGUpO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2dhbWVib2FyZC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLG1DQUFtQztFQUNuQyxpQ0FBaUM7RUFDakMsMkNBQTJDO0VBQzNDLGdDQUFnQztFQUNoQyxpQ0FBaUM7RUFDakMsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQiwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUEsVUFBVTs7QUFFVjtFQUNFLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsbUNBQW1DO0VBQ25DLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsaUNBQWlDO0VBQ2pDLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGlDQUFpQztFQUNqQywwQ0FBMEM7QUFDNUM7O0FBRUE7O0VBRUUsbUNBQW1DO0VBQ25DLGVBQWU7QUFDakI7O0FBRUE7RUFDRSw0Q0FBNEM7RUFDNUMsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsMENBQTBDO0VBQzFDLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLHNDQUFzQztFQUN0QyxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSw0Q0FBNEM7QUFDOUM7O0FBRUEsV0FBVzs7QUFFWDtFQUNFLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUNBQW1DO0VBQ25DLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUEsaUJBQWlCOztBQUVqQjtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsaUNBQWlDO0VBQ2pDLFVBQVU7RUFDVixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLDJDQUEyQztFQUMzQyxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsMkNBQTJDO0VBQzNDLFlBQVk7RUFDWixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSwwQ0FBMEM7RUFDMUMsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UseUNBQXlDO0VBQ3pDLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsbUNBQW1DO0FBQ3JDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5nYW1lYm9hcmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDExLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTEsIDFmcik7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1taWRuaWdodCk7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1kZWZhdWx0LWJvcmRlci1yYWRpdXMpO1xcbiAgd2lkdGg6IGNsYW1wKDI4MHB4LCAzMHZ3LCA1MDBweCk7XFxuICBoZWlnaHQ6IGNsYW1wKDI4MHB4LCAzMHZ3LCA1MDBweCk7XFxuICBjb2xvcjogdmFyKC0tbWlkbmlnaHQpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1nYW1lYm9hcmQtYmctY29sb3IpO1xcbn1cXG5cXG4uZ2FtZWJvYXJkX2JsdXJyZWQge1xcbiAgZmlsdGVyOiBibHVyKDNweCk7XFxufVxcblxcbi8qIFRpbGVzICovXFxuXFxuLmdhbWVib2FyZF9fdGlsZS1ncmlkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAxMTtcXG4gIGdyaWQtcm93OiAyIC8gMTE7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1taWRuaWdodCk7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1kZWZhdWx0LWJvcmRlci1yYWRpdXMpO1xcbn1cXG5cXG4uZ2FtZWJvYXJkX190aWxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1taWRuaWdodCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aWxlLW5vcm1hbC1jb2xvcik7XFxufVxcblxcbi5nYW1lYm9hcmRfY29tcHV0ZXJcXG4gIC5nYW1lYm9hcmRfX3RpbGU6aG92ZXI6bm90KC5nYW1lYm9hcmRfX3RpbGVfc2hpcCwgLmdhbWVib2FyZF9fdGlsZV9oaXQsIC5nYW1lYm9hcmRfX3RpbGVfbWlzc2VkKSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1taWxkLXdoaXRlKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmdhbWVib2FyZF9fdGlsZV9zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoaXAtc2VsZWN0ZWQtY29sb3IpO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciA0MDBtcztcXG59XFxuXFxuLmdhbWVib2FyZF9fdGlsZV9taXNzZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGlsZS1taXNzZWQtY29sb3IpO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciA0MDBtcztcXG59XFxuXFxuLmdhbWVib2FyZF9fdGlsZV9oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2hpcC1iZy1jb2xvcik7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDQwMG1zO1xcbn1cXG5cXG4uZ2FtZWJvYXJkX190aWxlX3BsYWNlbWVudCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaGlwLXNlbGVjdGVkLWNvbG9yKTtcXG59XFxuXFxuLyogTGFiZWxzICovXFxuXFxuLmdhbWVib2FyZF9fY29sLWxhYmVscyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLWNvbHVtbjogMiAvIDExO1xcbiAgZ3JpZC1yb3c6IDEgLyAyO1xcbn1cXG5cXG4uZ2FtZWJvYXJkX19yb3ctbGFiZWxzIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gIGdyaWQtcm93OiAyIC8gMTE7XFxufVxcblxcbi5nYW1lYm9hcmRfX3Jvdy1sYWJlbCxcXG4uZ2FtZWJvYXJkX19jb2wtbGFiZWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLyogU3RhcnQgd2luZG93ICovXFxuXFxuLmdhbWVib2FyZC13cmFwcGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnN0YXJ0LXdpbmRvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uc3RhcnQtZGlhbG9nIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbWlkbmlnaHQpO1xcbiAgd2lkdGg6IDcwJTtcXG4gIGhlaWdodDogNDAlO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ2FtZWJvYXJkLWJnLWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1taWRuaWdodCk7XFxufVxcblxcbi5zdGFydC13aW5kb3cuaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5zdGFydC1kaWFsb2dfX2J0biB7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1taWRuaWdodCk7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1kZWZhdWx0LWJvcmRlci1yYWRpdXMpO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgY29sb3I6IHZhcigtLW1pZG5pZ2h0KTtcXG59XFxuXFxuLnN0YXJ0LWRpYWxvZ19fYnRuOmRpc2FibGVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRpbGUtbm9ybWFsLWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1nYW1lYm9hcmQtYmctY29sb3IpO1xcbn1cXG5cXG4uc3RhcnQtZGlhbG9nX19idG46bm90KC5zdGFydC1kaWFsb2dfX2J0bjpkaXNhYmxlZCk6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWlsZC13aGl0ZS1ob3Zlcik7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zdGFydC1kaWFsb2dfX2J0bjpub3QoLnN0YXJ0LWRpYWxvZ19fYnRuOmRpc2FibGVkKSB7XFxuICBjb2xvcjogdmFyKC0tbWlkbmlnaHQpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWlsZC13aGl0ZSk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcInJlc2V0LmNzc1xcbiAgLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgIHYyLjAgfCAyMDExMDEyNlxcbiAgICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiAgKi9cXG5cXG4gIGh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG4gIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG4gIGEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG4gIGRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG4gIHNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuICBiLCB1LCBpLCBjZW50ZXIsXFxuICBkbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbiAgZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxuICB0YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG4gIGFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXG4gIGZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxuICBtZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG4gIHRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBmb250LXNpemU6IDEwMCU7XFxuICAgIGZvbnQ6IGluaGVyaXQ7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG4gIH1cXG4gIC8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG4gIGFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcbiAgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxuICBib2R5IHtcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxuICB9XFxuICBvbCwgdWwge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgfVxcbiAgYmxvY2txdW90ZSwgcSB7XFxuICAgIHF1b3Rlczogbm9uZTtcXG4gIH1cXG4gIGJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbiAgcTpiZWZvcmUsIHE6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgY29udGVudDogbm9uZTtcXG4gIH1cXG4gIHRhYmxlIHtcXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XFxuICB9XFxuICAvKiBDdXN0b20gY2hhbmdlICovXFxuICAqIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIH1cXG4gIFwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvcmVzZXQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBbUJJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsU0FBUztJQUNULGVBQWU7SUFDZixhQUFhO0lBQ2Isd0JBQXdCO0VBQzFCO0VBQ0EsZ0RBQWdEO0VBQ2hEOztJQUVFLGNBQWM7RUFDaEI7RUFDQTtJQUNFLGNBQWM7RUFDaEI7RUFDQTtJQUNFLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsWUFBWTtFQUNkO0VBQ0E7O0lBRUUsV0FBVztJQUNYLGFBQWE7RUFDZjtFQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLGlCQUFpQjtFQUNuQjtFQUNBLGtCQUFrQjtFQUNsQjtJQUNFLHNCQUFzQjtFQUN4QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJyZXNldC5jc3NcXG4gIC8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgICB2Mi4wIHwgMjAxMTAxMjZcXG4gICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4gICovXFxuXFxuICBodG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuICBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuICBhLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuICBkZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuICBzbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbiAgYiwgdSwgaSwgY2VudGVyLFxcbiAgZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG4gIGZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbiAgdGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuICBhcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuICBmaWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbiAgbWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxuICB0aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgZm9udC1zaXplOiAxMDAlO1xcbiAgICBmb250OiBpbmhlcml0O1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxuICB9XFxuICAvKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuICBhcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXG4gIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcbiAgYm9keSB7XFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcbiAgfVxcbiAgb2wsIHVsIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIH1cXG4gIGJsb2NrcXVvdGUsIHEge1xcbiAgICBxdW90ZXM6IG5vbmU7XFxuICB9XFxuICBibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXG4gIHE6YmVmb3JlLCBxOmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGNvbnRlbnQ6IG5vbmU7XFxuICB9XFxuICB0YWJsZSB7XFxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xcbiAgfVxcbiAgLyogQ3VzdG9tIGNoYW5nZSAqL1xcbiAgKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB9XFxuICBcIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBTaGlwcyBzdGF0dXMvc2VsZWN0aW9uIGxpc3QgKi9cXG5cXG4ucGxheWVyLXNoaXAtd3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICBnYXA6IDIwcHg7XFxuICB3aWR0aDogMTI1cHg7XFxufVxcblxcbi5wbGF5ZXItc2hpcHMsXFxuLmNvbXB1dGVyLXNoaXBzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLW1pZG5pZ2h0KTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWRlZmF1bHQtYm9yZGVyLXJhZGl1cyk7XFxufVxcblxcbi5wbGF5ZXItc2hpcHMge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5jb21wdXRlci1zaGlwcyB7XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgd2lkdGg6IDEyNXB4O1xcbn1cXG5cXG4uY29tcHV0ZXItc2hpcHNfdHJhbnNwYXJlbnQge1xcbiAgZmlsdGVyOiBvcGFjaXR5KDApO1xcbn1cXG5cXG4ucGxheWVyLXNoaXBzX19zaGlwLFxcbi5jb21wdXRlci1zaGlwc19fc2hpcCB7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5wbGF5ZXItc2hpcHNfX3NoaXA6bm90KC5wbGF5ZXItc2hpcHNfX3NoaXA6bGFzdC1jaGlsZCksXFxuLmNvbXB1dGVyLXNoaXBzX19zaGlwOm5vdCguY29tcHV0ZXItc2hpcHNfX3NoaXA6bGFzdC1jaGlsZCkge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLW1pZG5pZ2h0KTtcXG59XFxuXFxuLnBsYXllci1zaGlwc19fc2hpcCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaGlwLWJnLWNvbG9yKTtcXG59XFxuXFxuLnBsYXllci1zaGlwc19fc2hpcDpob3Zlcjpub3QoLnBsYXllci1zaGlwc19fc2hpcF9wbGFjZWQsIC5wbGF5ZXItc2hpcHNfX3NoaXBfc2VsZWN0ZWQpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoaXAtaG92ZXItY29sb3IpO1xcbn1cXG5cXG4ucGxheWVyLXNoaXBzX19zaGlwX3NlbGVjdGVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoaXAtc2VsZWN0ZWQtY29sb3IpO1xcbiAgY3Vyc29yOiB1bnNldDtcXG59XFxuXFxuLnBsYXllci1zaGlwc19fc2hpcF91bmRhbWFnZWQsXFxuLmNvbXB1dGVyLXNoaXBzX19zaGlwX3VuZGFtYWdlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaGlwLXVuZGFtYWdlZC1jb2xvcik7XFxufVxcblxcbi5wbGF5ZXItc2hpcHNfX3NoaXBfZGFtYWdlZCxcXG4uY29tcHV0ZXItc2hpcHNfX3NoaXBfZGFtYWdlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaGlwLWRhbWFnZWQtY29sb3IpO1xcbn1cXG5cXG4ucGxheWVyLXNoaXBzX19zaGlwX3N1bmssXFxuLmNvbXB1dGVyLXNoaXBzX19zaGlwX3N1bmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2hpcC1iZy1jb2xvcik7XFxufVxcblxcbi8qIFNoaXAgZGlyZWN0aW9uIHJvdGF0aW9uICovXFxuXFxuLnNoaXAtZGlyZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKTtcXG4gIGdhcDogNXB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tbWlkbmlnaHQpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tZGVmYXVsdC1ib3JkZXItcmFkaXVzKTtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgY29sb3I6IHZhcigtLW1pZG5pZ2h0KTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uc2hpcC1kaXJlY3Rpb25fX3JvdGF0b3Ige1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1pZG5pZ2h0KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1pbGQtd2hpdGUpO1xcbn1cXG5cXG4uc2hpcC1kaXJlY3Rpb25fX3JvdGF0b3I6aG92ZXI6bm90KC5zaGlwLWRpcmVjdGlvbl9fcm90YXRvcl9zZWxlY3RlZCkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGlyZWN0aW9uLWhvdmVyLWNvbG9yKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNoaXAtZGlyZWN0aW9uX19yb3RhdG9yX3NlbGVjdGVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRpcmVjdGlvbi1zZWxlY3RlZC1jb2xvcik7XFxufVxcblxcbi5zaGlwLWRpcmVjdGlvbl9fdGl0bGUge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyA0O1xcbiAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uc2hpcC1kaXJlY3Rpb25fX3JvdGF0b3JfdXAge1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgZ3JpZC1yb3c6IDIgLyAzO1xcbn1cXG5cXG4uc2hpcC1kaXJlY3Rpb25fX3JvdGF0b3JfcmlnaHQge1xcbiAgZ3JpZC1jb2x1bW46IDMgLyA0O1xcbiAgZ3JpZC1yb3c6IDMgLyA0O1xcbn1cXG5cXG4uc2hpcC1kaXJlY3Rpb25fX3JvdGF0b3JfZG93biB7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICBncmlkLXJvdzogMyAvIDQ7XFxufVxcblxcbi5zaGlwLWRpcmVjdGlvbl9fcm90YXRvcl9sZWZ0IHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gIGdyaWQtcm93OiAzIC8gNDtcXG59XFxuXFxuLnNoaXAtZGlyZWN0aW9uLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3NoaXBzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxnQ0FBZ0M7O0FBRWhDO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsU0FBUztFQUNULFlBQVk7QUFDZDs7QUFFQTs7RUFFRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsaUNBQWlDO0VBQ2pDLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUUsWUFBWTtBQUNkOztBQUVBOztFQUVFLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLGVBQWU7RUFDZixzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSw0Q0FBNEM7RUFDNUMsYUFBYTtBQUNmOztBQUVBOztFQUVFLDZDQUE2QztBQUMvQzs7QUFFQTs7RUFFRSwyQ0FBMkM7QUFDN0M7O0FBRUE7O0VBRUUsc0NBQXNDO0FBQ3hDOztBQUVBLDRCQUE0Qjs7QUFFNUI7RUFDRSxhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLGtDQUFrQztFQUNsQyxRQUFRO0VBQ1IsaUNBQWlDO0VBQ2pDLDJDQUEyQztFQUMzQyxZQUFZO0VBQ1osV0FBVztFQUNYLHNCQUFzQjtFQUN0QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osaUNBQWlDO0VBQ2pDLGtCQUFrQjtFQUNsQixtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSw4Q0FBOEM7RUFDOUMsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlEQUFpRDtBQUNuRDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogU2hpcHMgc3RhdHVzL3NlbGVjdGlvbiBsaXN0ICovXFxuXFxuLnBsYXllci1zaGlwLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgZ2FwOiAyMHB4O1xcbiAgd2lkdGg6IDEyNXB4O1xcbn1cXG5cXG4ucGxheWVyLXNoaXBzLFxcbi5jb21wdXRlci1zaGlwcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1taWRuaWdodCk7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1kZWZhdWx0LWJvcmRlci1yYWRpdXMpO1xcbn1cXG5cXG4ucGxheWVyLXNoaXBzIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uY29tcHV0ZXItc2hpcHMge1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gIHdpZHRoOiAxMjVweDtcXG59XFxuXFxuLmNvbXB1dGVyLXNoaXBzX3RyYW5zcGFyZW50IHtcXG4gIGZpbHRlcjogb3BhY2l0eSgwKTtcXG59XFxuXFxuLnBsYXllci1zaGlwc19fc2hpcCxcXG4uY29tcHV0ZXItc2hpcHNfX3NoaXAge1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4ucGxheWVyLXNoaXBzX19zaGlwOm5vdCgucGxheWVyLXNoaXBzX19zaGlwOmxhc3QtY2hpbGQpLFxcbi5jb21wdXRlci1zaGlwc19fc2hpcDpub3QoLmNvbXB1dGVyLXNoaXBzX19zaGlwOmxhc3QtY2hpbGQpIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1taWRuaWdodCk7XFxufVxcblxcbi5wbGF5ZXItc2hpcHNfX3NoaXAge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2hpcC1iZy1jb2xvcik7XFxufVxcblxcbi5wbGF5ZXItc2hpcHNfX3NoaXA6aG92ZXI6bm90KC5wbGF5ZXItc2hpcHNfX3NoaXBfcGxhY2VkLCAucGxheWVyLXNoaXBzX19zaGlwX3NlbGVjdGVkKSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaGlwLWhvdmVyLWNvbG9yKTtcXG59XFxuXFxuLnBsYXllci1zaGlwc19fc2hpcF9zZWxlY3RlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaGlwLXNlbGVjdGVkLWNvbG9yKTtcXG4gIGN1cnNvcjogdW5zZXQ7XFxufVxcblxcbi5wbGF5ZXItc2hpcHNfX3NoaXBfdW5kYW1hZ2VkLFxcbi5jb21wdXRlci1zaGlwc19fc2hpcF91bmRhbWFnZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2hpcC11bmRhbWFnZWQtY29sb3IpO1xcbn1cXG5cXG4ucGxheWVyLXNoaXBzX19zaGlwX2RhbWFnZWQsXFxuLmNvbXB1dGVyLXNoaXBzX19zaGlwX2RhbWFnZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2hpcC1kYW1hZ2VkLWNvbG9yKTtcXG59XFxuXFxuLnBsYXllci1zaGlwc19fc2hpcF9zdW5rLFxcbi5jb21wdXRlci1zaGlwc19fc2hpcF9zdW5rIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoaXAtYmctY29sb3IpO1xcbn1cXG5cXG4vKiBTaGlwIGRpcmVjdGlvbiByb3RhdGlvbiAqL1xcblxcbi5zaGlwLWRpcmVjdGlvbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDFmcik7XFxuICBnYXA6IDVweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLW1pZG5pZ2h0KTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWRlZmF1bHQtYm9yZGVyLXJhZGl1cyk7XFxuICBwYWRkaW5nOiA1cHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGNvbG9yOiB2YXIoLS1taWRuaWdodCk7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnNoaXAtZGlyZWN0aW9uX19yb3RhdG9yIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1taWRuaWdodCk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1taWxkLXdoaXRlKTtcXG59XFxuXFxuLnNoaXAtZGlyZWN0aW9uX19yb3RhdG9yOmhvdmVyOm5vdCguc2hpcC1kaXJlY3Rpb25fX3JvdGF0b3Jfc2VsZWN0ZWQpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRpcmVjdGlvbi1ob3Zlci1jb2xvcik7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zaGlwLWRpcmVjdGlvbl9fcm90YXRvcl9zZWxlY3RlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kaXJlY3Rpb24tc2VsZWN0ZWQtY29sb3IpO1xcbn1cXG5cXG4uc2hpcC1kaXJlY3Rpb25fX3RpdGxlIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gNDtcXG4gIGdyaWQtcm93OiAxIC8gMjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnNoaXAtZGlyZWN0aW9uX19yb3RhdG9yX3VwIHtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gIGdyaWQtcm93OiAyIC8gMztcXG59XFxuXFxuLnNoaXAtZGlyZWN0aW9uX19yb3RhdG9yX3JpZ2h0IHtcXG4gIGdyaWQtY29sdW1uOiAzIC8gNDtcXG4gIGdyaWQtcm93OiAzIC8gNDtcXG59XFxuXFxuLnNoaXAtZGlyZWN0aW9uX19yb3RhdG9yX2Rvd24ge1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgZ3JpZC1yb3c6IDMgLyA0O1xcbn1cXG5cXG4uc2hpcC1kaXJlY3Rpb25fX3JvdGF0b3JfbGVmdCB7XFxuICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICBncmlkLXJvdzogMyAvIDQ7XFxufVxcblxcbi5zaGlwLWRpcmVjdGlvbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIi8qKlxuICogbG9kYXNoIChDdXN0b20gQnVpbGQpIDxodHRwczovL2xvZGFzaC5jb20vPlxuICogQnVpbGQ6IGBsb2Rhc2ggbW9kdWxhcml6ZSBleHBvcnRzPVwibnBtXCIgLW8gLi9gXG4gKiBDb3B5cmlnaHQgalF1ZXJ5IEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9ycyA8aHR0cHM6Ly9qcXVlcnkub3JnLz5cbiAqIFJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlIDxodHRwczovL2xvZGFzaC5jb20vbGljZW5zZT5cbiAqIEJhc2VkIG9uIFVuZGVyc2NvcmUuanMgMS44LjMgPGh0dHA6Ly91bmRlcnNjb3JlanMub3JnL0xJQ0VOU0U+XG4gKiBDb3B5cmlnaHQgSmVyZW15IEFzaGtlbmFzLCBEb2N1bWVudENsb3VkIGFuZCBJbnZlc3RpZ2F0aXZlIFJlcG9ydGVycyAmIEVkaXRvcnNcbiAqL1xuXG4vKiogVXNlZCBhcyB0aGUgc2l6ZSB0byBlbmFibGUgbGFyZ2UgYXJyYXkgb3B0aW1pemF0aW9ucy4gKi9cbnZhciBMQVJHRV9BUlJBWV9TSVpFID0gMjAwO1xuXG4vKiogVXNlZCB0byBzdGFuZC1pbiBmb3IgYHVuZGVmaW5lZGAgaGFzaCB2YWx1ZXMuICovXG52YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nLFxuICAgIGFycmF5VGFnID0gJ1tvYmplY3QgQXJyYXldJyxcbiAgICBib29sVGFnID0gJ1tvYmplY3QgQm9vbGVhbl0nLFxuICAgIGRhdGVUYWcgPSAnW29iamVjdCBEYXRlXScsXG4gICAgZXJyb3JUYWcgPSAnW29iamVjdCBFcnJvcl0nLFxuICAgIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIGdlblRhZyA9ICdbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXScsXG4gICAgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgbnVtYmVyVGFnID0gJ1tvYmplY3QgTnVtYmVyXScsXG4gICAgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XScsXG4gICAgcHJvbWlzZVRhZyA9ICdbb2JqZWN0IFByb21pc2VdJyxcbiAgICByZWdleHBUYWcgPSAnW29iamVjdCBSZWdFeHBdJyxcbiAgICBzZXRUYWcgPSAnW29iamVjdCBTZXRdJyxcbiAgICBzdHJpbmdUYWcgPSAnW29iamVjdCBTdHJpbmddJyxcbiAgICBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJyxcbiAgICB3ZWFrTWFwVGFnID0gJ1tvYmplY3QgV2Vha01hcF0nO1xuXG52YXIgYXJyYXlCdWZmZXJUYWcgPSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nLFxuICAgIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJyxcbiAgICBmbG9hdDMyVGFnID0gJ1tvYmplY3QgRmxvYXQzMkFycmF5XScsXG4gICAgZmxvYXQ2NFRhZyA9ICdbb2JqZWN0IEZsb2F0NjRBcnJheV0nLFxuICAgIGludDhUYWcgPSAnW29iamVjdCBJbnQ4QXJyYXldJyxcbiAgICBpbnQxNlRhZyA9ICdbb2JqZWN0IEludDE2QXJyYXldJyxcbiAgICBpbnQzMlRhZyA9ICdbb2JqZWN0IEludDMyQXJyYXldJyxcbiAgICB1aW50OFRhZyA9ICdbb2JqZWN0IFVpbnQ4QXJyYXldJyxcbiAgICB1aW50OENsYW1wZWRUYWcgPSAnW29iamVjdCBVaW50OENsYW1wZWRBcnJheV0nLFxuICAgIHVpbnQxNlRhZyA9ICdbb2JqZWN0IFVpbnQxNkFycmF5XScsXG4gICAgdWludDMyVGFnID0gJ1tvYmplY3QgVWludDMyQXJyYXldJztcblxuLyoqXG4gKiBVc2VkIHRvIG1hdGNoIGBSZWdFeHBgXG4gKiBbc3ludGF4IGNoYXJhY3RlcnNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXBhdHRlcm5zKS5cbiAqL1xudmFyIHJlUmVnRXhwQ2hhciA9IC9bXFxcXF4kLiorPygpW1xcXXt9fF0vZztcblxuLyoqIFVzZWQgdG8gbWF0Y2ggYFJlZ0V4cGAgZmxhZ3MgZnJvbSB0aGVpciBjb2VyY2VkIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVGbGFncyA9IC9cXHcqJC87XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBob3N0IGNvbnN0cnVjdG9ycyAoU2FmYXJpKS4gKi9cbnZhciByZUlzSG9zdEN0b3IgPSAvXlxcW29iamVjdCAuKz9Db25zdHJ1Y3RvclxcXSQvO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgdW5zaWduZWQgaW50ZWdlciB2YWx1ZXMuICovXG52YXIgcmVJc1VpbnQgPSAvXig/OjB8WzEtOV1cXGQqKSQvO1xuXG4vKiogVXNlZCB0byBpZGVudGlmeSBgdG9TdHJpbmdUYWdgIHZhbHVlcyBzdXBwb3J0ZWQgYnkgYF8uY2xvbmVgLiAqL1xudmFyIGNsb25lYWJsZVRhZ3MgPSB7fTtcbmNsb25lYWJsZVRhZ3NbYXJnc1RhZ10gPSBjbG9uZWFibGVUYWdzW2FycmF5VGFnXSA9XG5jbG9uZWFibGVUYWdzW2FycmF5QnVmZmVyVGFnXSA9IGNsb25lYWJsZVRhZ3NbZGF0YVZpZXdUYWddID1cbmNsb25lYWJsZVRhZ3NbYm9vbFRhZ10gPSBjbG9uZWFibGVUYWdzW2RhdGVUYWddID1cbmNsb25lYWJsZVRhZ3NbZmxvYXQzMlRhZ10gPSBjbG9uZWFibGVUYWdzW2Zsb2F0NjRUYWddID1cbmNsb25lYWJsZVRhZ3NbaW50OFRhZ10gPSBjbG9uZWFibGVUYWdzW2ludDE2VGFnXSA9XG5jbG9uZWFibGVUYWdzW2ludDMyVGFnXSA9IGNsb25lYWJsZVRhZ3NbbWFwVGFnXSA9XG5jbG9uZWFibGVUYWdzW251bWJlclRhZ10gPSBjbG9uZWFibGVUYWdzW29iamVjdFRhZ10gPVxuY2xvbmVhYmxlVGFnc1tyZWdleHBUYWddID0gY2xvbmVhYmxlVGFnc1tzZXRUYWddID1cbmNsb25lYWJsZVRhZ3Nbc3RyaW5nVGFnXSA9IGNsb25lYWJsZVRhZ3Nbc3ltYm9sVGFnXSA9XG5jbG9uZWFibGVUYWdzW3VpbnQ4VGFnXSA9IGNsb25lYWJsZVRhZ3NbdWludDhDbGFtcGVkVGFnXSA9XG5jbG9uZWFibGVUYWdzW3VpbnQxNlRhZ10gPSBjbG9uZWFibGVUYWdzW3VpbnQzMlRhZ10gPSB0cnVlO1xuY2xvbmVhYmxlVGFnc1tlcnJvclRhZ10gPSBjbG9uZWFibGVUYWdzW2Z1bmNUYWddID1cbmNsb25lYWJsZVRhZ3Nbd2Vha01hcFRhZ10gPSBmYWxzZTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGV4cG9ydHNgLiAqL1xudmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJiAhZXhwb3J0cy5ub2RlVHlwZSAmJiBleHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYG1vZHVsZWAuICovXG52YXIgZnJlZU1vZHVsZSA9IGZyZWVFeHBvcnRzICYmIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmICFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlO1xuXG4vKiogRGV0ZWN0IHRoZSBwb3B1bGFyIENvbW1vbkpTIGV4dGVuc2lvbiBgbW9kdWxlLmV4cG9ydHNgLiAqL1xudmFyIG1vZHVsZUV4cG9ydHMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUuZXhwb3J0cyA9PT0gZnJlZUV4cG9ydHM7XG5cbi8qKlxuICogQWRkcyB0aGUga2V5LXZhbHVlIGBwYWlyYCB0byBgbWFwYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG1hcCBUaGUgbWFwIHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7QXJyYXl9IHBhaXIgVGhlIGtleS12YWx1ZSBwYWlyIHRvIGFkZC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG1hcGAuXG4gKi9cbmZ1bmN0aW9uIGFkZE1hcEVudHJ5KG1hcCwgcGFpcikge1xuICAvLyBEb24ndCByZXR1cm4gYG1hcC5zZXRgIGJlY2F1c2UgaXQncyBub3QgY2hhaW5hYmxlIGluIElFIDExLlxuICBtYXAuc2V0KHBhaXJbMF0sIHBhaXJbMV0pO1xuICByZXR1cm4gbWFwO1xufVxuXG4vKipcbiAqIEFkZHMgYHZhbHVlYCB0byBgc2V0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNldCBUaGUgc2V0IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGFkZC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYHNldGAuXG4gKi9cbmZ1bmN0aW9uIGFkZFNldEVudHJ5KHNldCwgdmFsdWUpIHtcbiAgLy8gRG9uJ3QgcmV0dXJuIGBzZXQuYWRkYCBiZWNhdXNlIGl0J3Mgbm90IGNoYWluYWJsZSBpbiBJRSAxMS5cbiAgc2V0LmFkZCh2YWx1ZSk7XG4gIHJldHVybiBzZXQ7XG59XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLmZvckVhY2hgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvclxuICogaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBhcnJheUVhY2goYXJyYXksIGl0ZXJhdGVlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPyBhcnJheS5sZW5ndGggOiAwO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgaWYgKGl0ZXJhdGVlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KSA9PT0gZmFsc2UpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbi8qKlxuICogQXBwZW5kcyB0aGUgZWxlbWVudHMgb2YgYHZhbHVlc2AgdG8gYGFycmF5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7QXJyYXl9IHZhbHVlcyBUaGUgdmFsdWVzIHRvIGFwcGVuZC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBhcnJheVB1c2goYXJyYXksIHZhbHVlcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHZhbHVlcy5sZW5ndGgsXG4gICAgICBvZmZzZXQgPSBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBhcnJheVtvZmZzZXQgKyBpbmRleF0gPSB2YWx1ZXNbaW5kZXhdO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8ucmVkdWNlYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3JcbiAqIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcGFyYW0geyp9IFthY2N1bXVsYXRvcl0gVGhlIGluaXRpYWwgdmFsdWUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpbml0QWNjdW1dIFNwZWNpZnkgdXNpbmcgdGhlIGZpcnN0IGVsZW1lbnQgb2YgYGFycmF5YCBhc1xuICogIHRoZSBpbml0aWFsIHZhbHVlLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGFjY3VtdWxhdGVkIHZhbHVlLlxuICovXG5mdW5jdGlvbiBhcnJheVJlZHVjZShhcnJheSwgaXRlcmF0ZWUsIGFjY3VtdWxhdG9yLCBpbml0QWNjdW0pIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA/IGFycmF5Lmxlbmd0aCA6IDA7XG5cbiAgaWYgKGluaXRBY2N1bSAmJiBsZW5ndGgpIHtcbiAgICBhY2N1bXVsYXRvciA9IGFycmF5WysraW5kZXhdO1xuICB9XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgYWNjdW11bGF0b3IgPSBpdGVyYXRlZShhY2N1bXVsYXRvciwgYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpO1xuICB9XG4gIHJldHVybiBhY2N1bXVsYXRvcjtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy50aW1lc2Agd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzXG4gKiBvciBtYXggYXJyYXkgbGVuZ3RoIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIG51bWJlciBvZiB0aW1lcyB0byBpbnZva2UgYGl0ZXJhdGVlYC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHJlc3VsdHMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VUaW1lcyhuLCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KG4pO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbikge1xuICAgIHJlc3VsdFtpbmRleF0gPSBpdGVyYXRlZShpbmRleCk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSB2YWx1ZSBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBwcm9wZXJ0eSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gZ2V0VmFsdWUob2JqZWN0LCBrZXkpIHtcbiAgcmV0dXJuIG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogb2JqZWN0W2tleV07XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBob3N0IG9iamVjdCBpbiBJRSA8IDkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBob3N0IG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0hvc3RPYmplY3QodmFsdWUpIHtcbiAgLy8gTWFueSBob3N0IG9iamVjdHMgYXJlIGBPYmplY3RgIG9iamVjdHMgdGhhdCBjYW4gY29lcmNlIHRvIHN0cmluZ3NcbiAgLy8gZGVzcGl0ZSBoYXZpbmcgaW1wcm9wZXJseSBkZWZpbmVkIGB0b1N0cmluZ2AgbWV0aG9kcy5cbiAgdmFyIHJlc3VsdCA9IGZhbHNlO1xuICBpZiAodmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUudG9TdHJpbmcgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRyeSB7XG4gICAgICByZXN1bHQgPSAhISh2YWx1ZSArICcnKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ29udmVydHMgYG1hcGAgdG8gaXRzIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG1hcCBUaGUgbWFwIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGtleS12YWx1ZSBwYWlycy5cbiAqL1xuZnVuY3Rpb24gbWFwVG9BcnJheShtYXApIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBBcnJheShtYXAuc2l6ZSk7XG5cbiAgbWFwLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIGtleSkge1xuICAgIHJlc3VsdFsrK2luZGV4XSA9IFtrZXksIHZhbHVlXTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIHVuYXJ5IGZ1bmN0aW9uIHRoYXQgaW52b2tlcyBgZnVuY2Agd2l0aCBpdHMgYXJndW1lbnQgdHJhbnNmb3JtZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHdyYXAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSB0cmFuc2Zvcm0gVGhlIGFyZ3VtZW50IHRyYW5zZm9ybS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBvdmVyQXJnKGZ1bmMsIHRyYW5zZm9ybSkge1xuICByZXR1cm4gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIGZ1bmModHJhbnNmb3JtKGFyZykpO1xuICB9O1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGBzZXRgIHRvIGFuIGFycmF5IG9mIGl0cyB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzZXQgVGhlIHNldCB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSB2YWx1ZXMuXG4gKi9cbmZ1bmN0aW9uIHNldFRvQXJyYXkoc2V0KSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkoc2V0LnNpemUpO1xuXG4gIHNldC5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmVzdWx0WysraW5kZXhdID0gdmFsdWU7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgYXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZSxcbiAgICBmdW5jUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGUsXG4gICAgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgb3ZlcnJlYWNoaW5nIGNvcmUtanMgc2hpbXMuICovXG52YXIgY29yZUpzRGF0YSA9IHJvb3RbJ19fY29yZS1qc19zaGFyZWRfXyddO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgbWV0aG9kcyBtYXNxdWVyYWRpbmcgYXMgbmF0aXZlLiAqL1xudmFyIG1hc2tTcmNLZXkgPSAoZnVuY3Rpb24oKSB7XG4gIHZhciB1aWQgPSAvW14uXSskLy5leGVjKGNvcmVKc0RhdGEgJiYgY29yZUpzRGF0YS5rZXlzICYmIGNvcmVKc0RhdGEua2V5cy5JRV9QUk9UTyB8fCAnJyk7XG4gIHJldHVybiB1aWQgPyAoJ1N5bWJvbChzcmMpXzEuJyArIHVpZCkgOiAnJztcbn0oKSk7XG5cbi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cbnZhciBmdW5jVG9TdHJpbmcgPSBmdW5jUHJvdG8udG9TdHJpbmc7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBvYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaWYgYSBtZXRob2QgaXMgbmF0aXZlLiAqL1xudmFyIHJlSXNOYXRpdmUgPSBSZWdFeHAoJ14nICtcbiAgZnVuY1RvU3RyaW5nLmNhbGwoaGFzT3duUHJvcGVydHkpLnJlcGxhY2UocmVSZWdFeHBDaGFyLCAnXFxcXCQmJylcbiAgLnJlcGxhY2UoL2hhc093blByb3BlcnR5fChmdW5jdGlvbikuKj8oPz1cXFxcXFwoKXwgZm9yIC4rPyg/PVxcXFxcXF0pL2csICckMS4qPycpICsgJyQnXG4pO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBCdWZmZXIgPSBtb2R1bGVFeHBvcnRzID8gcm9vdC5CdWZmZXIgOiB1bmRlZmluZWQsXG4gICAgU3ltYm9sID0gcm9vdC5TeW1ib2wsXG4gICAgVWludDhBcnJheSA9IHJvb3QuVWludDhBcnJheSxcbiAgICBnZXRQcm90b3R5cGUgPSBvdmVyQXJnKE9iamVjdC5nZXRQcm90b3R5cGVPZiwgT2JqZWN0KSxcbiAgICBvYmplY3RDcmVhdGUgPSBPYmplY3QuY3JlYXRlLFxuICAgIHByb3BlcnR5SXNFbnVtZXJhYmxlID0gb2JqZWN0UHJvdG8ucHJvcGVydHlJc0VudW1lcmFibGUsXG4gICAgc3BsaWNlID0gYXJyYXlQcm90by5zcGxpY2U7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVHZXRTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyxcbiAgICBuYXRpdmVJc0J1ZmZlciA9IEJ1ZmZlciA/IEJ1ZmZlci5pc0J1ZmZlciA6IHVuZGVmaW5lZCxcbiAgICBuYXRpdmVLZXlzID0gb3ZlckFyZyhPYmplY3Qua2V5cywgT2JqZWN0KTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIERhdGFWaWV3ID0gZ2V0TmF0aXZlKHJvb3QsICdEYXRhVmlldycpLFxuICAgIE1hcCA9IGdldE5hdGl2ZShyb290LCAnTWFwJyksXG4gICAgUHJvbWlzZSA9IGdldE5hdGl2ZShyb290LCAnUHJvbWlzZScpLFxuICAgIFNldCA9IGdldE5hdGl2ZShyb290LCAnU2V0JyksXG4gICAgV2Vha01hcCA9IGdldE5hdGl2ZShyb290LCAnV2Vha01hcCcpLFxuICAgIG5hdGl2ZUNyZWF0ZSA9IGdldE5hdGl2ZShPYmplY3QsICdjcmVhdGUnKTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG1hcHMsIHNldHMsIGFuZCB3ZWFrbWFwcy4gKi9cbnZhciBkYXRhVmlld0N0b3JTdHJpbmcgPSB0b1NvdXJjZShEYXRhVmlldyksXG4gICAgbWFwQ3RvclN0cmluZyA9IHRvU291cmNlKE1hcCksXG4gICAgcHJvbWlzZUN0b3JTdHJpbmcgPSB0b1NvdXJjZShQcm9taXNlKSxcbiAgICBzZXRDdG9yU3RyaW5nID0gdG9Tb3VyY2UoU2V0KSxcbiAgICB3ZWFrTWFwQ3RvclN0cmluZyA9IHRvU291cmNlKFdlYWtNYXApO1xuXG4vKiogVXNlZCB0byBjb252ZXJ0IHN5bWJvbHMgdG8gcHJpbWl0aXZlcyBhbmQgc3RyaW5ncy4gKi9cbnZhciBzeW1ib2xQcm90byA9IFN5bWJvbCA/IFN5bWJvbC5wcm90b3R5cGUgOiB1bmRlZmluZWQsXG4gICAgc3ltYm9sVmFsdWVPZiA9IHN5bWJvbFByb3RvID8gc3ltYm9sUHJvdG8udmFsdWVPZiA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBDcmVhdGVzIGEgaGFzaCBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIEhhc2goZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPyBlbnRyaWVzLmxlbmd0aCA6IDA7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBoYXNoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIEhhc2hcbiAqL1xuZnVuY3Rpb24gaGFzaENsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gbmF0aXZlQ3JlYXRlID8gbmF0aXZlQ3JlYXRlKG51bGwpIDoge307XG59XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIGhhc2guXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7T2JqZWN0fSBoYXNoIFRoZSBoYXNoIHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNoRGVsZXRlKGtleSkge1xuICByZXR1cm4gdGhpcy5oYXMoa2V5KSAmJiBkZWxldGUgdGhpcy5fX2RhdGFfX1trZXldO1xufVxuXG4vKipcbiAqIEdldHMgdGhlIGhhc2ggdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gaGFzaEdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBpZiAobmF0aXZlQ3JlYXRlKSB7XG4gICAgdmFyIHJlc3VsdCA9IGRhdGFba2V5XTtcbiAgICByZXR1cm4gcmVzdWx0ID09PSBIQVNIX1VOREVGSU5FRCA/IHVuZGVmaW5lZCA6IHJlc3VsdDtcbiAgfVxuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpID8gZGF0YVtrZXldIDogdW5kZWZpbmVkO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhIGhhc2ggdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc2hIYXMoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgcmV0dXJuIG5hdGl2ZUNyZWF0ZSA/IGRhdGFba2V5XSAhPT0gdW5kZWZpbmVkIDogaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIGhhc2ggYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBoYXNoIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBoYXNoU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBkYXRhW2tleV0gPSAobmF0aXZlQ3JlYXRlICYmIHZhbHVlID09PSB1bmRlZmluZWQpID8gSEFTSF9VTkRFRklORUQgOiB2YWx1ZTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBIYXNoYC5cbkhhc2gucHJvdG90eXBlLmNsZWFyID0gaGFzaENsZWFyO1xuSGFzaC5wcm90b3R5cGVbJ2RlbGV0ZSddID0gaGFzaERlbGV0ZTtcbkhhc2gucHJvdG90eXBlLmdldCA9IGhhc2hHZXQ7XG5IYXNoLnByb3RvdHlwZS5oYXMgPSBoYXNoSGFzO1xuSGFzaC5wcm90b3R5cGUuc2V0ID0gaGFzaFNldDtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGxpc3QgY2FjaGUgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBMaXN0Q2FjaGUoZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPyBlbnRyaWVzLmxlbmd0aCA6IDA7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IFtdO1xufVxuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVEZWxldGUoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgbGFzdEluZGV4ID0gZGF0YS5sZW5ndGggLSAxO1xuICBpZiAoaW5kZXggPT0gbGFzdEluZGV4KSB7XG4gICAgZGF0YS5wb3AoKTtcbiAgfSBlbHNlIHtcbiAgICBzcGxpY2UuY2FsbChkYXRhLCBpbmRleCwgMSk7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICByZXR1cm4gaW5kZXggPCAwID8gdW5kZWZpbmVkIDogZGF0YVtpbmRleF1bMV07XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVIYXMoa2V5KSB7XG4gIHJldHVybiBhc3NvY0luZGV4T2YodGhpcy5fX2RhdGFfXywga2V5KSA+IC0xO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIGxpc3QgY2FjaGUgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGxpc3QgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZVNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIGRhdGEucHVzaChba2V5LCB2YWx1ZV0pO1xuICB9IGVsc2Uge1xuICAgIGRhdGFbaW5kZXhdWzFdID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBMaXN0Q2FjaGVgLlxuTGlzdENhY2hlLnByb3RvdHlwZS5jbGVhciA9IGxpc3RDYWNoZUNsZWFyO1xuTGlzdENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBsaXN0Q2FjaGVEZWxldGU7XG5MaXN0Q2FjaGUucHJvdG90eXBlLmdldCA9IGxpc3RDYWNoZUdldDtcbkxpc3RDYWNoZS5wcm90b3R5cGUuaGFzID0gbGlzdENhY2hlSGFzO1xuTGlzdENhY2hlLnByb3RvdHlwZS5zZXQgPSBsaXN0Q2FjaGVTZXQ7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG1hcCBjYWNoZSBvYmplY3QgdG8gc3RvcmUga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBNYXBDYWNoZShlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA/IGVudHJpZXMubGVuZ3RoIDogMDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUNsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0ge1xuICAgICdoYXNoJzogbmV3IEhhc2gsXG4gICAgJ21hcCc6IG5ldyAoTWFwIHx8IExpc3RDYWNoZSksXG4gICAgJ3N0cmluZyc6IG5ldyBIYXNoXG4gIH07XG59XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZURlbGV0ZShrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KVsnZGVsZXRlJ10oa2V5KTtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBtYXAgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlR2V0KGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmdldChrZXkpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhIG1hcCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlSGFzKGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmhhcyhrZXkpO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIG1hcCBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBtYXAgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlU2V0KGtleSwgdmFsdWUpIHtcbiAgZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLnNldChrZXksIHZhbHVlKTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBNYXBDYWNoZWAuXG5NYXBDYWNoZS5wcm90b3R5cGUuY2xlYXIgPSBtYXBDYWNoZUNsZWFyO1xuTWFwQ2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IG1hcENhY2hlRGVsZXRlO1xuTWFwQ2FjaGUucHJvdG90eXBlLmdldCA9IG1hcENhY2hlR2V0O1xuTWFwQ2FjaGUucHJvdG90eXBlLmhhcyA9IG1hcENhY2hlSGFzO1xuTWFwQ2FjaGUucHJvdG90eXBlLnNldCA9IG1hcENhY2hlU2V0O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBzdGFjayBjYWNoZSBvYmplY3QgdG8gc3RvcmUga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBTdGFjayhlbnRyaWVzKSB7XG4gIHRoaXMuX19kYXRhX18gPSBuZXcgTGlzdENhY2hlKGVudHJpZXMpO1xufVxuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIHN0YWNrLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIFN0YWNrXG4gKi9cbmZ1bmN0aW9uIHN0YWNrQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBuZXcgTGlzdENhY2hlO1xufVxuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBzdGFjay5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBzdGFja0RlbGV0ZShrZXkpIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX19bJ2RlbGV0ZSddKGtleSk7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgc3RhY2sgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrR2V0KGtleSkge1xuICByZXR1cm4gdGhpcy5fX2RhdGFfXy5nZXQoa2V5KTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYSBzdGFjayB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrSGFzKGtleSkge1xuICByZXR1cm4gdGhpcy5fX2RhdGFfXy5oYXMoa2V5KTtcbn1cblxuLyoqXG4gKiBTZXRzIHRoZSBzdGFjayBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBzdGFjayBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gc3RhY2tTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgY2FjaGUgPSB0aGlzLl9fZGF0YV9fO1xuICBpZiAoY2FjaGUgaW5zdGFuY2VvZiBMaXN0Q2FjaGUpIHtcbiAgICB2YXIgcGFpcnMgPSBjYWNoZS5fX2RhdGFfXztcbiAgICBpZiAoIU1hcCB8fCAocGFpcnMubGVuZ3RoIDwgTEFSR0VfQVJSQVlfU0laRSAtIDEpKSB7XG4gICAgICBwYWlycy5wdXNoKFtrZXksIHZhbHVlXSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgY2FjaGUgPSB0aGlzLl9fZGF0YV9fID0gbmV3IE1hcENhY2hlKHBhaXJzKTtcbiAgfVxuICBjYWNoZS5zZXQoa2V5LCB2YWx1ZSk7XG4gIHJldHVybiB0aGlzO1xufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgU3RhY2tgLlxuU3RhY2sucHJvdG90eXBlLmNsZWFyID0gc3RhY2tDbGVhcjtcblN0YWNrLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBzdGFja0RlbGV0ZTtcblN0YWNrLnByb3RvdHlwZS5nZXQgPSBzdGFja0dldDtcblN0YWNrLnByb3RvdHlwZS5oYXMgPSBzdGFja0hhcztcblN0YWNrLnByb3RvdHlwZS5zZXQgPSBzdGFja1NldDtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIHRoZSBhcnJheS1saWtlIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtib29sZWFufSBpbmhlcml0ZWQgU3BlY2lmeSByZXR1cm5pbmcgaW5oZXJpdGVkIHByb3BlcnR5IG5hbWVzLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYXJyYXlMaWtlS2V5cyh2YWx1ZSwgaW5oZXJpdGVkKSB7XG4gIC8vIFNhZmFyaSA4LjEgbWFrZXMgYGFyZ3VtZW50cy5jYWxsZWVgIGVudW1lcmFibGUgaW4gc3RyaWN0IG1vZGUuXG4gIC8vIFNhZmFyaSA5IG1ha2VzIGBhcmd1bWVudHMubGVuZ3RoYCBlbnVtZXJhYmxlIGluIHN0cmljdCBtb2RlLlxuICB2YXIgcmVzdWx0ID0gKGlzQXJyYXkodmFsdWUpIHx8IGlzQXJndW1lbnRzKHZhbHVlKSlcbiAgICA/IGJhc2VUaW1lcyh2YWx1ZS5sZW5ndGgsIFN0cmluZylcbiAgICA6IFtdO1xuXG4gIHZhciBsZW5ndGggPSByZXN1bHQubGVuZ3RoLFxuICAgICAgc2tpcEluZGV4ZXMgPSAhIWxlbmd0aDtcblxuICBmb3IgKHZhciBrZXkgaW4gdmFsdWUpIHtcbiAgICBpZiAoKGluaGVyaXRlZCB8fCBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBrZXkpKSAmJlxuICAgICAgICAhKHNraXBJbmRleGVzICYmIChrZXkgPT0gJ2xlbmd0aCcgfHwgaXNJbmRleChrZXksIGxlbmd0aCkpKSkge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBBc3NpZ25zIGB2YWx1ZWAgdG8gYGtleWAgb2YgYG9iamVjdGAgaWYgdGhlIGV4aXN0aW5nIHZhbHVlIGlzIG5vdCBlcXVpdmFsZW50XG4gKiB1c2luZyBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuICogZm9yIGVxdWFsaXR5IGNvbXBhcmlzb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBhc3NpZ24uXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBhc3NpZ24uXG4gKi9cbmZ1bmN0aW9uIGFzc2lnblZhbHVlKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICB2YXIgb2JqVmFsdWUgPSBvYmplY3Rba2V5XTtcbiAgaWYgKCEoaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkgJiYgZXEob2JqVmFsdWUsIHZhbHVlKSkgfHxcbiAgICAgICh2YWx1ZSA9PT0gdW5kZWZpbmVkICYmICEoa2V5IGluIG9iamVjdCkpKSB7XG4gICAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgfVxufVxuXG4vKipcbiAqIEdldHMgdGhlIGluZGV4IGF0IHdoaWNoIHRoZSBga2V5YCBpcyBmb3VuZCBpbiBgYXJyYXlgIG9mIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0geyp9IGtleSBUaGUga2V5IHRvIHNlYXJjaCBmb3IuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBhc3NvY0luZGV4T2YoYXJyYXksIGtleSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICBpZiAoZXEoYXJyYXlbbGVuZ3RoXVswXSwga2V5KSkge1xuICAgICAgcmV0dXJuIGxlbmd0aDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmFzc2lnbmAgd2l0aG91dCBzdXBwb3J0IGZvciBtdWx0aXBsZSBzb3VyY2VzXG4gKiBvciBgY3VzdG9taXplcmAgZnVuY3Rpb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBkZXN0aW5hdGlvbiBvYmplY3QuXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gYmFzZUFzc2lnbihvYmplY3QsIHNvdXJjZSkge1xuICByZXR1cm4gb2JqZWN0ICYmIGNvcHlPYmplY3Qoc291cmNlLCBrZXlzKHNvdXJjZSksIG9iamVjdCk7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uY2xvbmVgIGFuZCBgXy5jbG9uZURlZXBgIHdoaWNoIHRyYWNrc1xuICogdHJhdmVyc2VkIG9iamVjdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNsb25lLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRnVsbF0gU3BlY2lmeSBhIGNsb25lIGluY2x1ZGluZyBzeW1ib2xzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY2xvbmluZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBba2V5XSBUaGUga2V5IG9mIGB2YWx1ZWAuXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIHBhcmVudCBvYmplY3Qgb2YgYHZhbHVlYC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbc3RhY2tdIFRyYWNrcyB0cmF2ZXJzZWQgb2JqZWN0cyBhbmQgdGhlaXIgY2xvbmUgY291bnRlcnBhcnRzLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGNsb25lZCB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gYmFzZUNsb25lKHZhbHVlLCBpc0RlZXAsIGlzRnVsbCwgY3VzdG9taXplciwga2V5LCBvYmplY3QsIHN0YWNrKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmIChjdXN0b21pemVyKSB7XG4gICAgcmVzdWx0ID0gb2JqZWN0ID8gY3VzdG9taXplcih2YWx1ZSwga2V5LCBvYmplY3QsIHN0YWNrKSA6IGN1c3RvbWl6ZXIodmFsdWUpO1xuICB9XG4gIGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgdmFyIGlzQXJyID0gaXNBcnJheSh2YWx1ZSk7XG4gIGlmIChpc0Fycikge1xuICAgIHJlc3VsdCA9IGluaXRDbG9uZUFycmF5KHZhbHVlKTtcbiAgICBpZiAoIWlzRGVlcCkge1xuICAgICAgcmV0dXJuIGNvcHlBcnJheSh2YWx1ZSwgcmVzdWx0KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhZyA9IGdldFRhZyh2YWx1ZSksXG4gICAgICAgIGlzRnVuYyA9IHRhZyA9PSBmdW5jVGFnIHx8IHRhZyA9PSBnZW5UYWc7XG5cbiAgICBpZiAoaXNCdWZmZXIodmFsdWUpKSB7XG4gICAgICByZXR1cm4gY2xvbmVCdWZmZXIodmFsdWUsIGlzRGVlcCk7XG4gICAgfVxuICAgIGlmICh0YWcgPT0gb2JqZWN0VGFnIHx8IHRhZyA9PSBhcmdzVGFnIHx8IChpc0Z1bmMgJiYgIW9iamVjdCkpIHtcbiAgICAgIGlmIChpc0hvc3RPYmplY3QodmFsdWUpKSB7XG4gICAgICAgIHJldHVybiBvYmplY3QgPyB2YWx1ZSA6IHt9O1xuICAgICAgfVxuICAgICAgcmVzdWx0ID0gaW5pdENsb25lT2JqZWN0KGlzRnVuYyA/IHt9IDogdmFsdWUpO1xuICAgICAgaWYgKCFpc0RlZXApIHtcbiAgICAgICAgcmV0dXJuIGNvcHlTeW1ib2xzKHZhbHVlLCBiYXNlQXNzaWduKHJlc3VsdCwgdmFsdWUpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCFjbG9uZWFibGVUYWdzW3RhZ10pIHtcbiAgICAgICAgcmV0dXJuIG9iamVjdCA/IHZhbHVlIDoge307XG4gICAgICB9XG4gICAgICByZXN1bHQgPSBpbml0Q2xvbmVCeVRhZyh2YWx1ZSwgdGFnLCBiYXNlQ2xvbmUsIGlzRGVlcCk7XG4gICAgfVxuICB9XG4gIC8vIENoZWNrIGZvciBjaXJjdWxhciByZWZlcmVuY2VzIGFuZCByZXR1cm4gaXRzIGNvcnJlc3BvbmRpbmcgY2xvbmUuXG4gIHN0YWNrIHx8IChzdGFjayA9IG5ldyBTdGFjayk7XG4gIHZhciBzdGFja2VkID0gc3RhY2suZ2V0KHZhbHVlKTtcbiAgaWYgKHN0YWNrZWQpIHtcbiAgICByZXR1cm4gc3RhY2tlZDtcbiAgfVxuICBzdGFjay5zZXQodmFsdWUsIHJlc3VsdCk7XG5cbiAgaWYgKCFpc0Fycikge1xuICAgIHZhciBwcm9wcyA9IGlzRnVsbCA/IGdldEFsbEtleXModmFsdWUpIDoga2V5cyh2YWx1ZSk7XG4gIH1cbiAgYXJyYXlFYWNoKHByb3BzIHx8IHZhbHVlLCBmdW5jdGlvbihzdWJWYWx1ZSwga2V5KSB7XG4gICAgaWYgKHByb3BzKSB7XG4gICAgICBrZXkgPSBzdWJWYWx1ZTtcbiAgICAgIHN1YlZhbHVlID0gdmFsdWVba2V5XTtcbiAgICB9XG4gICAgLy8gUmVjdXJzaXZlbHkgcG9wdWxhdGUgY2xvbmUgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICBhc3NpZ25WYWx1ZShyZXN1bHQsIGtleSwgYmFzZUNsb25lKHN1YlZhbHVlLCBpc0RlZXAsIGlzRnVsbCwgY3VzdG9taXplciwga2V5LCB2YWx1ZSwgc3RhY2spKTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uY3JlYXRlYCB3aXRob3V0IHN1cHBvcnQgZm9yIGFzc2lnbmluZ1xuICogcHJvcGVydGllcyB0byB0aGUgY3JlYXRlZCBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm90b3R5cGUgVGhlIG9iamVjdCB0byBpbmhlcml0IGZyb20uXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBuZXcgb2JqZWN0LlxuICovXG5mdW5jdGlvbiBiYXNlQ3JlYXRlKHByb3RvKSB7XG4gIHJldHVybiBpc09iamVjdChwcm90bykgPyBvYmplY3RDcmVhdGUocHJvdG8pIDoge307XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldEFsbEtleXNgIGFuZCBgZ2V0QWxsS2V5c0luYCB3aGljaCB1c2VzXG4gKiBga2V5c0Z1bmNgIGFuZCBgc3ltYm9sc0Z1bmNgIHRvIGdldCB0aGUgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBhbmRcbiAqIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGtleXNGdW5jIFRoZSBmdW5jdGlvbiB0byBnZXQgdGhlIGtleXMgb2YgYG9iamVjdGAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBzeW1ib2xzRnVuYyBUaGUgZnVuY3Rpb24gdG8gZ2V0IHRoZSBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scy5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldEFsbEtleXMob2JqZWN0LCBrZXlzRnVuYywgc3ltYm9sc0Z1bmMpIHtcbiAgdmFyIHJlc3VsdCA9IGtleXNGdW5jKG9iamVjdCk7XG4gIHJldHVybiBpc0FycmF5KG9iamVjdCkgPyByZXN1bHQgOiBhcnJheVB1c2gocmVzdWx0LCBzeW1ib2xzRnVuYyhvYmplY3QpKTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgZ2V0VGFnYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0VGFnKHZhbHVlKSB7XG4gIHJldHVybiBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc05hdGl2ZWAgd2l0aG91dCBiYWQgc2hpbSBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBuYXRpdmUgZnVuY3Rpb24sXG4gKiAgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNOYXRpdmUodmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkgfHwgaXNNYXNrZWQodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwYXR0ZXJuID0gKGlzRnVuY3Rpb24odmFsdWUpIHx8IGlzSG9zdE9iamVjdCh2YWx1ZSkpID8gcmVJc05hdGl2ZSA6IHJlSXNIb3N0Q3RvcjtcbiAgcmV0dXJuIHBhdHRlcm4udGVzdCh0b1NvdXJjZSh2YWx1ZSkpO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmtleXNgIHdoaWNoIGRvZXNuJ3QgdHJlYXQgc3BhcnNlIGFycmF5cyBhcyBkZW5zZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYmFzZUtleXMob2JqZWN0KSB7XG4gIGlmICghaXNQcm90b3R5cGUob2JqZWN0KSkge1xuICAgIHJldHVybiBuYXRpdmVLZXlzKG9iamVjdCk7XG4gIH1cbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBmb3IgKHZhciBrZXkgaW4gT2JqZWN0KG9iamVjdCkpIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkgJiYga2V5ICE9ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mICBgYnVmZmVyYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtCdWZmZXJ9IGJ1ZmZlciBUaGUgYnVmZmVyIHRvIGNsb25lLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAqIEByZXR1cm5zIHtCdWZmZXJ9IFJldHVybnMgdGhlIGNsb25lZCBidWZmZXIuXG4gKi9cbmZ1bmN0aW9uIGNsb25lQnVmZmVyKGJ1ZmZlciwgaXNEZWVwKSB7XG4gIGlmIChpc0RlZXApIHtcbiAgICByZXR1cm4gYnVmZmVyLnNsaWNlKCk7XG4gIH1cbiAgdmFyIHJlc3VsdCA9IG5ldyBidWZmZXIuY29uc3RydWN0b3IoYnVmZmVyLmxlbmd0aCk7XG4gIGJ1ZmZlci5jb3B5KHJlc3VsdCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGBhcnJheUJ1ZmZlcmAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXlCdWZmZXJ9IGFycmF5QnVmZmVyIFRoZSBhcnJheSBidWZmZXIgdG8gY2xvbmUuXG4gKiBAcmV0dXJucyB7QXJyYXlCdWZmZXJ9IFJldHVybnMgdGhlIGNsb25lZCBhcnJheSBidWZmZXIuXG4gKi9cbmZ1bmN0aW9uIGNsb25lQXJyYXlCdWZmZXIoYXJyYXlCdWZmZXIpIHtcbiAgdmFyIHJlc3VsdCA9IG5ldyBhcnJheUJ1ZmZlci5jb25zdHJ1Y3RvcihhcnJheUJ1ZmZlci5ieXRlTGVuZ3RoKTtcbiAgbmV3IFVpbnQ4QXJyYXkocmVzdWx0KS5zZXQobmV3IFVpbnQ4QXJyYXkoYXJyYXlCdWZmZXIpKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgYGRhdGFWaWV3YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IGRhdGFWaWV3IFRoZSBkYXRhIHZpZXcgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2xvbmVkIGRhdGEgdmlldy5cbiAqL1xuZnVuY3Rpb24gY2xvbmVEYXRhVmlldyhkYXRhVmlldywgaXNEZWVwKSB7XG4gIHZhciBidWZmZXIgPSBpc0RlZXAgPyBjbG9uZUFycmF5QnVmZmVyKGRhdGFWaWV3LmJ1ZmZlcikgOiBkYXRhVmlldy5idWZmZXI7XG4gIHJldHVybiBuZXcgZGF0YVZpZXcuY29uc3RydWN0b3IoYnVmZmVyLCBkYXRhVmlldy5ieXRlT2Zmc2V0LCBkYXRhVmlldy5ieXRlTGVuZ3RoKTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgYG1hcGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBjbG9uZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNsb25lRnVuYyBUaGUgZnVuY3Rpb24gdG8gY2xvbmUgdmFsdWVzLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNsb25lZCBtYXAuXG4gKi9cbmZ1bmN0aW9uIGNsb25lTWFwKG1hcCwgaXNEZWVwLCBjbG9uZUZ1bmMpIHtcbiAgdmFyIGFycmF5ID0gaXNEZWVwID8gY2xvbmVGdW5jKG1hcFRvQXJyYXkobWFwKSwgdHJ1ZSkgOiBtYXBUb0FycmF5KG1hcCk7XG4gIHJldHVybiBhcnJheVJlZHVjZShhcnJheSwgYWRkTWFwRW50cnksIG5ldyBtYXAuY29uc3RydWN0b3IpO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiBgcmVnZXhwYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHJlZ2V4cCBUaGUgcmVnZXhwIHRvIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2xvbmVkIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gY2xvbmVSZWdFeHAocmVnZXhwKSB7XG4gIHZhciByZXN1bHQgPSBuZXcgcmVnZXhwLmNvbnN0cnVjdG9yKHJlZ2V4cC5zb3VyY2UsIHJlRmxhZ3MuZXhlYyhyZWdleHApKTtcbiAgcmVzdWx0Lmxhc3RJbmRleCA9IHJlZ2V4cC5sYXN0SW5kZXg7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGBzZXRgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc2V0IFRoZSBzZXQgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjbG9uZUZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNsb25lIHZhbHVlcy5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjbG9uZWQgc2V0LlxuICovXG5mdW5jdGlvbiBjbG9uZVNldChzZXQsIGlzRGVlcCwgY2xvbmVGdW5jKSB7XG4gIHZhciBhcnJheSA9IGlzRGVlcCA/IGNsb25lRnVuYyhzZXRUb0FycmF5KHNldCksIHRydWUpIDogc2V0VG9BcnJheShzZXQpO1xuICByZXR1cm4gYXJyYXlSZWR1Y2UoYXJyYXksIGFkZFNldEVudHJ5LCBuZXcgc2V0LmNvbnN0cnVjdG9yKTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgdGhlIGBzeW1ib2xgIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHN5bWJvbCBUaGUgc3ltYm9sIG9iamVjdCB0byBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNsb25lZCBzeW1ib2wgb2JqZWN0LlxuICovXG5mdW5jdGlvbiBjbG9uZVN5bWJvbChzeW1ib2wpIHtcbiAgcmV0dXJuIHN5bWJvbFZhbHVlT2YgPyBPYmplY3Qoc3ltYm9sVmFsdWVPZi5jYWxsKHN5bWJvbCkpIDoge307XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGB0eXBlZEFycmF5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHR5cGVkQXJyYXkgVGhlIHR5cGVkIGFycmF5IHRvIGNsb25lLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNsb25lZCB0eXBlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gY2xvbmVUeXBlZEFycmF5KHR5cGVkQXJyYXksIGlzRGVlcCkge1xuICB2YXIgYnVmZmVyID0gaXNEZWVwID8gY2xvbmVBcnJheUJ1ZmZlcih0eXBlZEFycmF5LmJ1ZmZlcikgOiB0eXBlZEFycmF5LmJ1ZmZlcjtcbiAgcmV0dXJuIG5ldyB0eXBlZEFycmF5LmNvbnN0cnVjdG9yKGJ1ZmZlciwgdHlwZWRBcnJheS5ieXRlT2Zmc2V0LCB0eXBlZEFycmF5Lmxlbmd0aCk7XG59XG5cbi8qKlxuICogQ29waWVzIHRoZSB2YWx1ZXMgb2YgYHNvdXJjZWAgdG8gYGFycmF5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gc291cmNlIFRoZSBhcnJheSB0byBjb3B5IHZhbHVlcyBmcm9tLlxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5PVtdXSBUaGUgYXJyYXkgdG8gY29weSB2YWx1ZXMgdG8uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYGFycmF5YC5cbiAqL1xuZnVuY3Rpb24gY29weUFycmF5KHNvdXJjZSwgYXJyYXkpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBzb3VyY2UubGVuZ3RoO1xuXG4gIGFycmF5IHx8IChhcnJheSA9IEFycmF5KGxlbmd0aCkpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGFycmF5W2luZGV4XSA9IHNvdXJjZVtpbmRleF07XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG4vKipcbiAqIENvcGllcyBwcm9wZXJ0aWVzIG9mIGBzb3VyY2VgIHRvIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIGZyb20uXG4gKiBAcGFyYW0ge0FycmF5fSBwcm9wcyBUaGUgcHJvcGVydHkgaWRlbnRpZmllcnMgdG8gY29weS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0PXt9XSBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyB0by5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvcGllZCB2YWx1ZXMuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBjb3B5T2JqZWN0KHNvdXJjZSwgcHJvcHMsIG9iamVjdCwgY3VzdG9taXplcikge1xuICBvYmplY3QgfHwgKG9iamVjdCA9IHt9KTtcblxuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHByb3BzLmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBrZXkgPSBwcm9wc1tpbmRleF07XG5cbiAgICB2YXIgbmV3VmFsdWUgPSBjdXN0b21pemVyXG4gICAgICA/IGN1c3RvbWl6ZXIob2JqZWN0W2tleV0sIHNvdXJjZVtrZXldLCBrZXksIG9iamVjdCwgc291cmNlKVxuICAgICAgOiB1bmRlZmluZWQ7XG5cbiAgICBhc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgbmV3VmFsdWUgPT09IHVuZGVmaW5lZCA/IHNvdXJjZVtrZXldIDogbmV3VmFsdWUpO1xuICB9XG4gIHJldHVybiBvYmplY3Q7XG59XG5cbi8qKlxuICogQ29waWVzIG93biBzeW1ib2wgcHJvcGVydGllcyBvZiBgc291cmNlYCB0byBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgb2JqZWN0IHRvIGNvcHkgc3ltYm9scyBmcm9tLlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3Q9e31dIFRoZSBvYmplY3QgdG8gY29weSBzeW1ib2xzIHRvLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gY29weVN5bWJvbHMoc291cmNlLCBvYmplY3QpIHtcbiAgcmV0dXJuIGNvcHlPYmplY3Qoc291cmNlLCBnZXRTeW1ib2xzKHNvdXJjZSksIG9iamVjdCk7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiBvd24gZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scy5cbiAqL1xuZnVuY3Rpb24gZ2V0QWxsS2V5cyhvYmplY3QpIHtcbiAgcmV0dXJuIGJhc2VHZXRBbGxLZXlzKG9iamVjdCwga2V5cywgZ2V0U3ltYm9scyk7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgZGF0YSBmb3IgYG1hcGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIHJlZmVyZW5jZSBrZXkuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgbWFwIGRhdGEuXG4gKi9cbmZ1bmN0aW9uIGdldE1hcERhdGEobWFwLCBrZXkpIHtcbiAgdmFyIGRhdGEgPSBtYXAuX19kYXRhX187XG4gIHJldHVybiBpc0tleWFibGUoa2V5KVxuICAgID8gZGF0YVt0eXBlb2Yga2V5ID09ICdzdHJpbmcnID8gJ3N0cmluZycgOiAnaGFzaCddXG4gICAgOiBkYXRhLm1hcDtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBuYXRpdmUgZnVuY3Rpb24gYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgbWV0aG9kIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBmdW5jdGlvbiBpZiBpdCdzIG5hdGl2ZSwgZWxzZSBgdW5kZWZpbmVkYC5cbiAqL1xuZnVuY3Rpb24gZ2V0TmF0aXZlKG9iamVjdCwga2V5KSB7XG4gIHZhciB2YWx1ZSA9IGdldFZhbHVlKG9iamVjdCwga2V5KTtcbiAgcmV0dXJuIGJhc2VJc05hdGl2ZSh2YWx1ZSkgPyB2YWx1ZSA6IHVuZGVmaW5lZDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gZW51bWVyYWJsZSBzeW1ib2wgcHJvcGVydGllcyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBzeW1ib2xzLlxuICovXG52YXIgZ2V0U3ltYm9scyA9IG5hdGl2ZUdldFN5bWJvbHMgPyBvdmVyQXJnKG5hdGl2ZUdldFN5bWJvbHMsIE9iamVjdCkgOiBzdHViQXJyYXk7XG5cbi8qKlxuICogR2V0cyB0aGUgYHRvU3RyaW5nVGFnYCBvZiBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGB0b1N0cmluZ1RhZ2AuXG4gKi9cbnZhciBnZXRUYWcgPSBiYXNlR2V0VGFnO1xuXG4vLyBGYWxsYmFjayBmb3IgZGF0YSB2aWV3cywgbWFwcywgc2V0cywgYW5kIHdlYWsgbWFwcyBpbiBJRSAxMSxcbi8vIGZvciBkYXRhIHZpZXdzIGluIEVkZ2UgPCAxNCwgYW5kIHByb21pc2VzIGluIE5vZGUuanMuXG5pZiAoKERhdGFWaWV3ICYmIGdldFRhZyhuZXcgRGF0YVZpZXcobmV3IEFycmF5QnVmZmVyKDEpKSkgIT0gZGF0YVZpZXdUYWcpIHx8XG4gICAgKE1hcCAmJiBnZXRUYWcobmV3IE1hcCkgIT0gbWFwVGFnKSB8fFxuICAgIChQcm9taXNlICYmIGdldFRhZyhQcm9taXNlLnJlc29sdmUoKSkgIT0gcHJvbWlzZVRhZykgfHxcbiAgICAoU2V0ICYmIGdldFRhZyhuZXcgU2V0KSAhPSBzZXRUYWcpIHx8XG4gICAgKFdlYWtNYXAgJiYgZ2V0VGFnKG5ldyBXZWFrTWFwKSAhPSB3ZWFrTWFwVGFnKSkge1xuICBnZXRUYWcgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHZhciByZXN1bHQgPSBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKSxcbiAgICAgICAgQ3RvciA9IHJlc3VsdCA9PSBvYmplY3RUYWcgPyB2YWx1ZS5jb25zdHJ1Y3RvciA6IHVuZGVmaW5lZCxcbiAgICAgICAgY3RvclN0cmluZyA9IEN0b3IgPyB0b1NvdXJjZShDdG9yKSA6IHVuZGVmaW5lZDtcblxuICAgIGlmIChjdG9yU3RyaW5nKSB7XG4gICAgICBzd2l0Y2ggKGN0b3JTdHJpbmcpIHtcbiAgICAgICAgY2FzZSBkYXRhVmlld0N0b3JTdHJpbmc6IHJldHVybiBkYXRhVmlld1RhZztcbiAgICAgICAgY2FzZSBtYXBDdG9yU3RyaW5nOiByZXR1cm4gbWFwVGFnO1xuICAgICAgICBjYXNlIHByb21pc2VDdG9yU3RyaW5nOiByZXR1cm4gcHJvbWlzZVRhZztcbiAgICAgICAgY2FzZSBzZXRDdG9yU3RyaW5nOiByZXR1cm4gc2V0VGFnO1xuICAgICAgICBjYXNlIHdlYWtNYXBDdG9yU3RyaW5nOiByZXR1cm4gd2Vha01hcFRhZztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn1cblxuLyoqXG4gKiBJbml0aWFsaXplcyBhbiBhcnJheSBjbG9uZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGNsb25lLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBpbml0aWFsaXplZCBjbG9uZS5cbiAqL1xuZnVuY3Rpb24gaW5pdENsb25lQXJyYXkoYXJyYXkpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aCxcbiAgICAgIHJlc3VsdCA9IGFycmF5LmNvbnN0cnVjdG9yKGxlbmd0aCk7XG5cbiAgLy8gQWRkIHByb3BlcnRpZXMgYXNzaWduZWQgYnkgYFJlZ0V4cCNleGVjYC5cbiAgaWYgKGxlbmd0aCAmJiB0eXBlb2YgYXJyYXlbMF0gPT0gJ3N0cmluZycgJiYgaGFzT3duUHJvcGVydHkuY2FsbChhcnJheSwgJ2luZGV4JykpIHtcbiAgICByZXN1bHQuaW5kZXggPSBhcnJheS5pbmRleDtcbiAgICByZXN1bHQuaW5wdXQgPSBhcnJheS5pbnB1dDtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEluaXRpYWxpemVzIGFuIG9iamVjdCBjbG9uZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgaW5pdGlhbGl6ZWQgY2xvbmUuXG4gKi9cbmZ1bmN0aW9uIGluaXRDbG9uZU9iamVjdChvYmplY3QpIHtcbiAgcmV0dXJuICh0eXBlb2Ygb2JqZWN0LmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgIWlzUHJvdG90eXBlKG9iamVjdCkpXG4gICAgPyBiYXNlQ3JlYXRlKGdldFByb3RvdHlwZShvYmplY3QpKVxuICAgIDoge307XG59XG5cbi8qKlxuICogSW5pdGlhbGl6ZXMgYW4gb2JqZWN0IGNsb25lIGJhc2VkIG9uIGl0cyBgdG9TdHJpbmdUYWdgLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIGZ1bmN0aW9uIG9ubHkgc3VwcG9ydHMgY2xvbmluZyB2YWx1ZXMgd2l0aCB0YWdzIG9mXG4gKiBgQm9vbGVhbmAsIGBEYXRlYCwgYEVycm9yYCwgYE51bWJlcmAsIGBSZWdFeHBgLCBvciBgU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNsb25lLlxuICogQHBhcmFtIHtzdHJpbmd9IHRhZyBUaGUgYHRvU3RyaW5nVGFnYCBvZiB0aGUgb2JqZWN0IHRvIGNsb25lLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2xvbmVGdW5jIFRoZSBmdW5jdGlvbiB0byBjbG9uZSB2YWx1ZXMuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgaW5pdGlhbGl6ZWQgY2xvbmUuXG4gKi9cbmZ1bmN0aW9uIGluaXRDbG9uZUJ5VGFnKG9iamVjdCwgdGFnLCBjbG9uZUZ1bmMsIGlzRGVlcCkge1xuICB2YXIgQ3RvciA9IG9iamVjdC5jb25zdHJ1Y3RvcjtcbiAgc3dpdGNoICh0YWcpIHtcbiAgICBjYXNlIGFycmF5QnVmZmVyVGFnOlxuICAgICAgcmV0dXJuIGNsb25lQXJyYXlCdWZmZXIob2JqZWN0KTtcblxuICAgIGNhc2UgYm9vbFRhZzpcbiAgICBjYXNlIGRhdGVUYWc6XG4gICAgICByZXR1cm4gbmV3IEN0b3IoK29iamVjdCk7XG5cbiAgICBjYXNlIGRhdGFWaWV3VGFnOlxuICAgICAgcmV0dXJuIGNsb25lRGF0YVZpZXcob2JqZWN0LCBpc0RlZXApO1xuXG4gICAgY2FzZSBmbG9hdDMyVGFnOiBjYXNlIGZsb2F0NjRUYWc6XG4gICAgY2FzZSBpbnQ4VGFnOiBjYXNlIGludDE2VGFnOiBjYXNlIGludDMyVGFnOlxuICAgIGNhc2UgdWludDhUYWc6IGNhc2UgdWludDhDbGFtcGVkVGFnOiBjYXNlIHVpbnQxNlRhZzogY2FzZSB1aW50MzJUYWc6XG4gICAgICByZXR1cm4gY2xvbmVUeXBlZEFycmF5KG9iamVjdCwgaXNEZWVwKTtcblxuICAgIGNhc2UgbWFwVGFnOlxuICAgICAgcmV0dXJuIGNsb25lTWFwKG9iamVjdCwgaXNEZWVwLCBjbG9uZUZ1bmMpO1xuXG4gICAgY2FzZSBudW1iZXJUYWc6XG4gICAgY2FzZSBzdHJpbmdUYWc6XG4gICAgICByZXR1cm4gbmV3IEN0b3Iob2JqZWN0KTtcblxuICAgIGNhc2UgcmVnZXhwVGFnOlxuICAgICAgcmV0dXJuIGNsb25lUmVnRXhwKG9iamVjdCk7XG5cbiAgICBjYXNlIHNldFRhZzpcbiAgICAgIHJldHVybiBjbG9uZVNldChvYmplY3QsIGlzRGVlcCwgY2xvbmVGdW5jKTtcblxuICAgIGNhc2Ugc3ltYm9sVGFnOlxuICAgICAgcmV0dXJuIGNsb25lU3ltYm9sKG9iamVjdCk7XG4gIH1cbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgaW5kZXguXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHBhcmFtIHtudW1iZXJ9IFtsZW5ndGg9TUFYX1NBRkVfSU5URUdFUl0gVGhlIHVwcGVyIGJvdW5kcyBvZiBhIHZhbGlkIGluZGV4LlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBpbmRleCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0luZGV4KHZhbHVlLCBsZW5ndGgpIHtcbiAgbGVuZ3RoID0gbGVuZ3RoID09IG51bGwgPyBNQVhfU0FGRV9JTlRFR0VSIDogbGVuZ3RoO1xuICByZXR1cm4gISFsZW5ndGggJiZcbiAgICAodHlwZW9mIHZhbHVlID09ICdudW1iZXInIHx8IHJlSXNVaW50LnRlc3QodmFsdWUpKSAmJlxuICAgICh2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDwgbGVuZ3RoKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSBmb3IgdXNlIGFzIHVuaXF1ZSBvYmplY3Qga2V5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzS2V5YWJsZSh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICh0eXBlID09ICdzdHJpbmcnIHx8IHR5cGUgPT0gJ251bWJlcicgfHwgdHlwZSA9PSAnc3ltYm9sJyB8fCB0eXBlID09ICdib29sZWFuJylcbiAgICA/ICh2YWx1ZSAhPT0gJ19fcHJvdG9fXycpXG4gICAgOiAodmFsdWUgPT09IG51bGwpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgZnVuY2AgaGFzIGl0cyBzb3VyY2UgbWFza2VkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgZnVuY2AgaXMgbWFza2VkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzTWFza2VkKGZ1bmMpIHtcbiAgcmV0dXJuICEhbWFza1NyY0tleSAmJiAobWFza1NyY0tleSBpbiBmdW5jKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBsaWtlbHkgYSBwcm90b3R5cGUgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgcHJvdG90eXBlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzUHJvdG90eXBlKHZhbHVlKSB7XG4gIHZhciBDdG9yID0gdmFsdWUgJiYgdmFsdWUuY29uc3RydWN0b3IsXG4gICAgICBwcm90byA9ICh0eXBlb2YgQ3RvciA9PSAnZnVuY3Rpb24nICYmIEN0b3IucHJvdG90eXBlKSB8fCBvYmplY3RQcm90bztcblxuICByZXR1cm4gdmFsdWUgPT09IHByb3RvO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGBmdW5jYCB0byBpdHMgc291cmNlIGNvZGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBzb3VyY2UgY29kZS5cbiAqL1xuZnVuY3Rpb24gdG9Tb3VyY2UoZnVuYykge1xuICBpZiAoZnVuYyAhPSBudWxsKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBmdW5jVG9TdHJpbmcuY2FsbChmdW5jKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gKGZ1bmMgKyAnJyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxuICByZXR1cm4gJyc7XG59XG5cbi8qKlxuICogVGhpcyBtZXRob2QgaXMgbGlrZSBgXy5jbG9uZWAgZXhjZXB0IHRoYXQgaXQgcmVjdXJzaXZlbHkgY2xvbmVzIGB2YWx1ZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAxLjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHJlY3Vyc2l2ZWx5IGNsb25lLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGRlZXAgY2xvbmVkIHZhbHVlLlxuICogQHNlZSBfLmNsb25lXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3RzID0gW3sgJ2EnOiAxIH0sIHsgJ2InOiAyIH1dO1xuICpcbiAqIHZhciBkZWVwID0gXy5jbG9uZURlZXAob2JqZWN0cyk7XG4gKiBjb25zb2xlLmxvZyhkZWVwWzBdID09PSBvYmplY3RzWzBdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGNsb25lRGVlcCh2YWx1ZSkge1xuICByZXR1cm4gYmFzZUNsb25lKHZhbHVlLCB0cnVlLCB0cnVlKTtcbn1cblxuLyoqXG4gKiBQZXJmb3JtcyBhXG4gKiBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuICogY29tcGFyaXNvbiBiZXR3ZWVuIHR3byB2YWx1ZXMgdG8gZGV0ZXJtaW5lIGlmIHRoZXkgYXJlIGVxdWl2YWxlbnQuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0geyp9IG90aGVyIFRoZSBvdGhlciB2YWx1ZSB0byBjb21wYXJlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxIH07XG4gKiB2YXIgb3RoZXIgPSB7ICdhJzogMSB9O1xuICpcbiAqIF8uZXEob2JqZWN0LCBvYmplY3QpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEob2JqZWN0LCBvdGhlcik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoJ2EnLCAnYScpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEoJ2EnLCBPYmplY3QoJ2EnKSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoTmFOLCBOYU4pO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBlcSh2YWx1ZSwgb3RoZXIpIHtcbiAgcmV0dXJuIHZhbHVlID09PSBvdGhlciB8fCAodmFsdWUgIT09IHZhbHVlICYmIG90aGVyICE9PSBvdGhlcik7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGFuIGBhcmd1bWVudHNgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBgYXJndW1lbnRzYCBvYmplY3QsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoWzEsIDIsIDNdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJndW1lbnRzKHZhbHVlKSB7XG4gIC8vIFNhZmFyaSA4LjEgbWFrZXMgYGFyZ3VtZW50cy5jYWxsZWVgIGVudW1lcmFibGUgaW4gc3RyaWN0IG1vZGUuXG4gIHJldHVybiBpc0FycmF5TGlrZU9iamVjdCh2YWx1ZSkgJiYgaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpICYmXG4gICAgKCFwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHZhbHVlLCAnY2FsbGVlJykgfHwgb2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT0gYXJnc1RhZyk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhbiBgQXJyYXlgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXkoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXkoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheSgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UuIEEgdmFsdWUgaXMgY29uc2lkZXJlZCBhcnJheS1saWtlIGlmIGl0J3NcbiAqIG5vdCBhIGZ1bmN0aW9uIGFuZCBoYXMgYSBgdmFsdWUubGVuZ3RoYCB0aGF0J3MgYW4gaW50ZWdlciBncmVhdGVyIHRoYW4gb3JcbiAqIGVxdWFsIHRvIGAwYCBhbmQgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIGBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUmAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKCdhYmMnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiBpc0xlbmd0aCh2YWx1ZS5sZW5ndGgpICYmICFpc0Z1bmN0aW9uKHZhbHVlKTtcbn1cblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBpcyBsaWtlIGBfLmlzQXJyYXlMaWtlYCBleGNlcHQgdGhhdCBpdCBhbHNvIGNoZWNrcyBpZiBgdmFsdWVgXG4gKiBpcyBhbiBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYXJyYXktbGlrZSBvYmplY3QsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdChkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdChfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUxpa2VPYmplY3QodmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgaXNBcnJheUxpa2UodmFsdWUpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgYnVmZmVyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4zLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgYnVmZmVyLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNCdWZmZXIobmV3IEJ1ZmZlcigyKSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0J1ZmZlcihuZXcgVWludDhBcnJheSgyKSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNCdWZmZXIgPSBuYXRpdmVJc0J1ZmZlciB8fCBzdHViRmFsc2U7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBGdW5jdGlvbmAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgZnVuY3Rpb24sIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0Z1bmN0aW9uKF8pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNGdW5jdGlvbigvYWJjLyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gIC8vIFRoZSB1c2Ugb2YgYE9iamVjdCN0b1N0cmluZ2AgYXZvaWRzIGlzc3VlcyB3aXRoIHRoZSBgdHlwZW9mYCBvcGVyYXRvclxuICAvLyBpbiBTYWZhcmkgOC05IHdoaWNoIHJldHVybnMgJ29iamVjdCcgZm9yIHR5cGVkIGFycmF5IGFuZCBvdGhlciBjb25zdHJ1Y3RvcnMuXG4gIHZhciB0YWcgPSBpc09iamVjdCh2YWx1ZSkgPyBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKSA6ICcnO1xuICByZXR1cm4gdGFnID09IGZ1bmNUYWcgfHwgdGFnID09IGdlblRhZztcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgbGVuZ3RoLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBpcyBsb29zZWx5IGJhc2VkIG9uXG4gKiBbYFRvTGVuZ3RoYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtdG9sZW5ndGgpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgbGVuZ3RoLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNMZW5ndGgoMyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0xlbmd0aChOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0xlbmd0aChJbmZpbml0eSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoJzMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTGVuZ3RoKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgJiZcbiAgICB2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDw9IE1BWF9TQUZFX0lOVEVHRVI7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgdGhlXG4gKiBbbGFuZ3VhZ2UgdHlwZV0oaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLWVjbWFzY3JpcHQtbGFuZ3VhZ2UtdHlwZXMpXG4gKiBvZiBgT2JqZWN0YC4gKGUuZy4gYXJyYXlzLCBmdW5jdGlvbnMsIG9iamVjdHMsIHJlZ2V4ZXMsIGBuZXcgTnVtYmVyKDApYCwgYW5kIGBuZXcgU3RyaW5nKCcnKWApXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3Qoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gISF2YWx1ZSAmJiAodHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdmdW5jdGlvbicpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxuICogYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiAhIXZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiBgb2JqZWN0YC5cbiAqXG4gKiAqKk5vdGU6KiogTm9uLW9iamVjdCB2YWx1ZXMgYXJlIGNvZXJjZWQgdG8gb2JqZWN0cy4gU2VlIHRoZVxuICogW0VTIHNwZWNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5rZXlzKVxuICogZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYSA9IDE7XG4gKiAgIHRoaXMuYiA9IDI7XG4gKiB9XG4gKlxuICogRm9vLnByb3RvdHlwZS5jID0gMztcbiAqXG4gKiBfLmtleXMobmV3IEZvbyk7XG4gKiAvLyA9PiBbJ2EnLCAnYiddIChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpXG4gKlxuICogXy5rZXlzKCdoaScpO1xuICogLy8gPT4gWycwJywgJzEnXVxuICovXG5mdW5jdGlvbiBrZXlzKG9iamVjdCkge1xuICByZXR1cm4gaXNBcnJheUxpa2Uob2JqZWN0KSA/IGFycmF5TGlrZUtleXMob2JqZWN0KSA6IGJhc2VLZXlzKG9iamVjdCk7XG59XG5cbi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyBhIG5ldyBlbXB0eSBhcnJheS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMTMuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGVtcHR5IGFycmF5LlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgYXJyYXlzID0gXy50aW1lcygyLCBfLnN0dWJBcnJheSk7XG4gKlxuICogY29uc29sZS5sb2coYXJyYXlzKTtcbiAqIC8vID0+IFtbXSwgW11dXG4gKlxuICogY29uc29sZS5sb2coYXJyYXlzWzBdID09PSBhcnJheXNbMV0pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gc3R1YkFycmF5KCkge1xuICByZXR1cm4gW107XG59XG5cbi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyBgZmFsc2VgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4xMy4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50aW1lcygyLCBfLnN0dWJGYWxzZSk7XG4gKiAvLyA9PiBbZmFsc2UsIGZhbHNlXVxuICovXG5mdW5jdGlvbiBzdHViRmFsc2UoKSB7XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbG9uZURlZXA7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY29udGVudC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NvbnRlbnQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dhbWVib2FyZC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dhbWVib2FyZC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVzZXQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNldC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2hpcHMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zaGlwcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFBsYXllciBmcm9tICcuL21vZGVscy9QbGF5ZXInO1xuaW1wb3J0IEdhbWVib2FyZCBmcm9tICcuL21vZGVscy9HYW1lYm9hcmQnO1xuaW1wb3J0IHsgc3RhdHVzVG9TdHJpbmcgfSBmcm9tICcuL3V0aWxpdHkvc3RyaW5nQ29udmVyc2lvbic7XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vICBDb250cm9sbGVyIHZhcmlhYmxlc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5sZXQgcGxheWVyID0gbnVsbDtcbmxldCBjb21wdXRlciA9IG51bGw7XG5sZXQgcGxheWVyQm9hcmQgPSBudWxsO1xubGV0IGNvbXB1dGVyQm9hcmQgPSBudWxsO1xubGV0IHNlbGVjdGVkU2hpcCA9IG51bGw7XG5sZXQgcGxheWVyU2hpcHMgPSBbXTtcbmxldCBjb21wdXRlclNoaXBzID0gW107XG5sZXQgcGxheWVyQXR0YWNrQ291bnQgPSAwO1xubGV0IGNvbXB1dGVyQXR0YWNrQ291bnQgPSAwO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyAgR2FtZWJvYXJkIGZ1bmN0aW9uc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vKipcbiAqIEV2ZW50IGhhbmRsZXIgZm9yIHdoZW4gdGhlIHBsYXllciBjbGlja3Mgb24gYSB0aWxlIHRvIGF0dGFjay5cbiAqIEBwYXJhbSB7RXZlbnR9IGVcbiAqL1xuY29uc3QgaGFuZGxlUGxheWVyQXR0YWNrID0gKGUpID0+IHtcbiAgaWYgKFxuICAgIGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2dhbWVib2FyZF9fdGlsZV9taXNzZWQnKSB8fFxuICAgIGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2dhbWVib2FyZF9fdGlsZV9oaXQnKVxuICApIHtcbiAgICAvLyBQcmV2ZW50cyBhdHRhY2tpbmcgb2YgdGlsZXMgdGhhdCBoYXZlIGFscmVhZHkgYmVlbiBhdHRhY2tlZFxuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHRpbGVTdHIgPSBlLmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXRpbGUnKTtcbiAgY29uc3QgYXR0YWNrZWRUaWxlID0gcGxheWVyLmF0dGFjayhjb21wdXRlckJvYXJkLCB0aWxlU3RyKTtcblxuICBpZiAoYXR0YWNrZWRUaWxlKSB7XG4gICAgcGxheWVyQXR0YWNrQ291bnQrKztcbiAgICByZW5kZXJCb2FyZChjb21wdXRlckJvYXJkLCBmYWxzZSk7XG5cbiAgICBpZiAoY29tcHV0ZXJCb2FyZC5nZXRUaWxlKHRpbGVTdHIpLnNoaXAgJiYgY29tcHV0ZXJCb2FyZC5nZXRUaWxlKHRpbGVTdHIpLnNoaXAuaXNTdW5rKCkpIHtcbiAgICAgIHVwZGF0ZUNvbXB1dGVyU2hpcFN0YXR1cygpO1xuICAgIH1cblxuICAgIGNvbnN0IHN0YXR1c1N0ciA9IHN0YXR1c1RvU3RyaW5nKGNvbXB1dGVyQm9hcmQuZ2V0VGlsZSh0aWxlU3RyKS5zdGF0dXMpO1xuICAgIHNob3dTdGFuZGFyZE1zZyhgWW91IGF0dGFja2VkICR7dGlsZVN0cn0gYW5kICR7c3RhdHVzU3RyfS5gKTtcblxuICAgIC8vIENoZWNrIHdpbiBjb25kaXRpb25cbiAgICBpZiAoY29tcHV0ZXJCb2FyZC5pc0RlZmVhdGVkKCkpIHtcbiAgICAgIGVuZEdhbWUocGxheWVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZW5kVHVybigpO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBDcmVhdGVzIHRpbGVzIGZvciBib3RoIDEweDEwIGdyaWRzIHRoYXQgcmVwcmVzZW50IGdhbWVib2FyZHMuXG4gKi9cbmNvbnN0IGNyZWF0ZUdyaWRUaWxlcyA9ICgpID0+IHtcbiAgY29uc3QgcGxheWVyVGlsZUdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZWJvYXJkX3BsYXllciA+IC5nYW1lYm9hcmRfX3RpbGUtZ3JpZCcpO1xuICBjb25zdCBjb21wdXRlclRpbGVHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWVib2FyZF9jb21wdXRlciA+IC5nYW1lYm9hcmRfX3RpbGUtZ3JpZCcpO1xuXG4gIGxldCBjaGFyQ29kZSA9IDY1O1xuICBmb3IgKDsgY2hhckNvZGUgPD0gNzQ7IGNoYXJDb2RlKyspIHtcbiAgICBmb3IgKGxldCBjb2wgPSAxOyBjb2wgPD0gMTA7IGNvbCsrKSB7XG4gICAgICBjb25zdCB0aWxlU3RyID0gU3RyaW5nLmZyb21DaGFyQ29kZShjaGFyQ29kZSkuY29uY2F0KGNvbC50b1N0cmluZygpKTtcblxuICAgICAgY29uc3QgcGxheWVyVGlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgcGxheWVyVGlsZS5jbGFzc0xpc3QuYWRkKCdnYW1lYm9hcmRfX3RpbGUnKTtcbiAgICAgIHBsYXllclRpbGUuY2xhc3NMaXN0LmFkZChgZ2FtZWJvYXJkX190aWxlX3Bvc18ke3RpbGVTdHJ9YCk7XG4gICAgICBwbGF5ZXJUaWxlLnNldEF0dHJpYnV0ZSgnZGF0YS10aWxlJywgdGlsZVN0cik7XG4gICAgICBwbGF5ZXJUaWxlR3JpZC5hcHBlbmRDaGlsZChwbGF5ZXJUaWxlKTtcblxuICAgICAgY29uc3QgY29tcHV0ZXJUaWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjb21wdXRlclRpbGUuY2xhc3NMaXN0LmFkZCgnZ2FtZWJvYXJkX190aWxlJyk7XG4gICAgICBjb21wdXRlclRpbGUuY2xhc3NMaXN0LmFkZChgZ2FtZWJvYXJkX190aWxlX3Bvc18ke3RpbGVTdHJ9YCk7XG4gICAgICBjb21wdXRlclRpbGUuc2V0QXR0cmlidXRlKCdkYXRhLXRpbGUnLCB0aWxlU3RyKTtcbiAgICAgIGNvbXB1dGVyVGlsZUdyaWQuYXBwZW5kQ2hpbGQoY29tcHV0ZXJUaWxlKTtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogVXBkYXRlcyB0aGUgY29sb3Igb2YgZWFjaCB0aWxlIG9uIHRoZSBnYW1lYm9hcmQgYmFzZWQgb24gdGlsZSBzdGF0dXMuXG4gKiBAcGFyYW0ge09iamVjdH0gZ2IgR2FtZWJvYXJkIG9iamVjdC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gc2hvd1NoaXBzIFRydWUgaWYgZ2FtZWJvYXJkIHNob3VsZCBkaXNwbGF5IHNoaXAgcG9zaXRpb25zXG4gKi9cbmNvbnN0IHJlbmRlckJvYXJkID0gKGdhbWVib2FyZCwgc2hvd1NoaXBzKSA9PiB7XG4gIGxldCB0aWxlR3JpZDtcblxuICAvLyBTZWxlY3RzIHRoZSBhcHByb3ByaWF0ZSBib2FyZFxuICBpZiAoc2hvd1NoaXBzKSB7XG4gICAgdGlsZUdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZWJvYXJkX3BsYXllciA+IC5nYW1lYm9hcmRfX3RpbGUtZ3JpZCcpO1xuICB9IGVsc2Uge1xuICAgIHRpbGVHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWVib2FyZF9jb21wdXRlciA+IC5nYW1lYm9hcmRfX3RpbGUtZ3JpZCcpO1xuICB9XG5cbiAgLy8gVXBkYXRlcyBlYWNoIHRpbGVcbiAgY29uc3QgdGlsZXMgPSBbLi4udGlsZUdyaWQuY2hpbGRyZW5dO1xuICB0aWxlcy5mb3JFYWNoKCh0aWxlKSA9PiB7XG4gICAgdGlsZS5jbGFzc0xpc3QucmVtb3ZlKCdnYW1lYm9hcmRfX3RpbGVfc2hpcCcpO1xuICAgIHRpbGUuY2xhc3NMaXN0LnJlbW92ZSgnZ2FtZWJvYXJkX190aWxlX21pc3NlZCcpO1xuICAgIHRpbGUuY2xhc3NMaXN0LnJlbW92ZSgnZ2FtZWJvYXJkX190aWxlX2hpdCcpO1xuXG4gICAgY29uc3QgZ2FtZWJvYXJkVGlsZSA9IGdhbWVib2FyZC5nZXRUaWxlKHRpbGUuZ2V0QXR0cmlidXRlKCdkYXRhLXRpbGUnKSk7XG5cbiAgICAvLyBNYXJrcyBzaGlwIHBvc3Rpb25zIGZvciBwbGF5ZXIncyBib2FyZFxuICAgIGlmIChzaG93U2hpcHMgJiYgZ2FtZWJvYXJkVGlsZS5zaGlwKSB7XG4gICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoJ2dhbWVib2FyZF9fdGlsZV9zaGlwJyk7XG4gICAgfVxuXG4gICAgLy8gTWFya3MgbWlzc2VzXG4gICAgaWYgKGdhbWVib2FyZFRpbGUuc3RhdHVzID09PSAxKSB7XG4gICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoJ2dhbWVib2FyZF9fdGlsZV9taXNzZWQnKTtcbiAgICB9XG5cbiAgICAvLyBNYXJrcyBoaXRzXG4gICAgaWYgKGdhbWVib2FyZFRpbGUuc3RhdHVzID09PSAyKSB7XG4gICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoJ2dhbWVib2FyZF9fdGlsZV9oaXQnKTtcbiAgICB9XG4gIH0pO1xufTtcblxuLyoqXG4gKiBSZXNldHMgdGlsZSBjb2xvciBmb3IgdGlsZXMgdGhhdCBwcmV2aW91c2x5IGluZGljYXRlZCBzaGlwIHBvc2l0aW9ucyBkdXJpbmcgcGxhY2VtZW50LlxuICovXG5jb25zdCByZXNldFRpbGVDb2xvcnMgPSAoKSA9PiB7XG4gIGNvbnN0IHRpbGVzID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nYW1lYm9hcmRfcGxheWVyIC5nYW1lYm9hcmRfX3RpbGUnKV07XG4gIHRpbGVzLmZvckVhY2goKHRpbGUpID0+IHtcbiAgICB0aWxlLmNsYXNzTGlzdC5yZW1vdmUoJ2dhbWVib2FyZF9fdGlsZV9wbGFjZW1lbnQnKTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIFNob3dzIHdoZXJlIGEgc2VsZWN0ZWQgc2hpcCB3aWxsIGJlIHBsYWNlZCBvbiB0aGUgZ3JpZC5cbiAqIEBwYXJhbSB7RXZlbnR9IGVcbiAqL1xuY29uc3Qgc2hvd1NoaXBQbGFjZW1lbnQgPSAoZSkgPT4ge1xuICBpZiAoIXNlbGVjdGVkU2hpcCkgcmV0dXJuO1xuICByZXNldFRpbGVDb2xvcnMoKTtcblxuICBsZXQgdGlsZSA9IGUuY3VycmVudFRhcmdldDtcbiAgbGV0IHRpbGVTdHIgPSB0aWxlLmdldEF0dHJpYnV0ZSgnZGF0YS10aWxlJyk7XG4gIGxldCB0aWxlTGV0dGVyID0gdGlsZVN0ci5zbGljZSgwLCAxKS50b1VwcGVyQ2FzZSgpO1xuICBsZXQgdGlsZU51bSA9IHBhcnNlSW50KHRpbGVTdHIuc2xpY2UoMSksIDEwKTtcbiAgdGlsZS5jbGFzc0xpc3QuYWRkKCdnYW1lYm9hcmRfX3RpbGVfcGxhY2VtZW50Jyk7XG5cbiAgLy8gVXAgZGlyZWN0aW9uXG4gIGlmIChzZWxlY3RlZFNoaXAuZGlyZWN0aW9uID09PSAnVVAnKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxlY3RlZFNoaXAubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAvLyBEZWNyZW1lbnQgdGhlIHJvdyBsZXR0ZXJcbiAgICAgIHRpbGVMZXR0ZXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHRpbGVMZXR0ZXIuY2hhckNvZGVBdCgwKSAtIDEpO1xuICAgICAgaWYgKHRpbGVMZXR0ZXIuY2hhckNvZGVBdCgwKSA8IDY1KSBicmVhaztcbiAgICAgIHRpbGVTdHIgPSBgJHt0aWxlTGV0dGVyfSR7dGlsZU51bX1gO1xuICAgICAgdGlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5nYW1lYm9hcmRfX3RpbGVfcG9zXyR7dGlsZVN0cn1gKTtcbiAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZCgnZ2FtZWJvYXJkX190aWxlX3BsYWNlbWVudCcpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFJpZ2h0IGRpcmVjdGlvblxuICBpZiAoc2VsZWN0ZWRTaGlwLmRpcmVjdGlvbiA9PT0gJ1JJR0hUJykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VsZWN0ZWRTaGlwLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgLy8gSW5jcmVtZW50IHRoZSBjb2x1bW4gbnVtYmVyXG4gICAgICB0aWxlTnVtKys7XG4gICAgICBpZiAodGlsZU51bSA+IDEwKSBicmVhaztcbiAgICAgIHRpbGVTdHIgPSBgJHt0aWxlTGV0dGVyfSR7dGlsZU51bX1gO1xuICAgICAgdGlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5nYW1lYm9hcmRfX3RpbGVfcG9zXyR7dGlsZVN0cn1gKTtcbiAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZCgnZ2FtZWJvYXJkX190aWxlX3BsYWNlbWVudCcpO1xuICAgIH1cbiAgfVxuXG4gIC8vIERvd24gZGlyZWN0aW9uXG4gIGlmIChzZWxlY3RlZFNoaXAuZGlyZWN0aW9uID09PSAnRE9XTicpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlbGVjdGVkU2hpcC5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgIC8vIEluY3JlbWVudCB0aGUgcm93IGxldHRlclxuICAgICAgdGlsZUxldHRlciA9IFN0cmluZy5mcm9tQ2hhckNvZGUodGlsZUxldHRlci5jaGFyQ29kZUF0KDApICsgMSk7XG4gICAgICBpZiAodGlsZUxldHRlci5jaGFyQ29kZUF0KDApID4gNzQpIGJyZWFrO1xuICAgICAgdGlsZVN0ciA9IGAke3RpbGVMZXR0ZXJ9JHt0aWxlTnVtfWA7XG4gICAgICB0aWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmdhbWVib2FyZF9fdGlsZV9wb3NfJHt0aWxlU3RyfWApO1xuICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKCdnYW1lYm9hcmRfX3RpbGVfcGxhY2VtZW50Jyk7XG4gICAgfVxuICB9XG5cbiAgLy8gTGVmdCBkaXJlY3Rpb25cbiAgaWYgKHNlbGVjdGVkU2hpcC5kaXJlY3Rpb24gPT09ICdMRUZUJykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VsZWN0ZWRTaGlwLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgLy8gRGVjcmVtZW50IHRoZSBjb2x1bW4gbnVtYmVyXG4gICAgICB0aWxlTnVtLS07XG4gICAgICBpZiAodGlsZU51bSA8IDEpIGJyZWFrO1xuICAgICAgdGlsZVN0ciA9IGAke3RpbGVMZXR0ZXJ9JHt0aWxlTnVtfWA7XG4gICAgICB0aWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmdhbWVib2FyZF9fdGlsZV9wb3NfJHt0aWxlU3RyfWApO1xuICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKCdnYW1lYm9hcmRfX3RpbGVfcGxhY2VtZW50Jyk7XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIEFsbG93cyBhIHBsYXllciB0byBwbGFjZSB0aGVpciBzZWxlY3RlZCBzaGlwIGJlZm9yZSBnYW1lIHN0YXJ0LlxuICovXG5jb25zdCBoYW5kbGVTaGlwUGxhY2VtZW50ID0gKGUpID0+IHtcbiAgaWYgKCFzZWxlY3RlZFNoaXApIHJldHVybjtcblxuICB0cnkge1xuICAgIGNvbnN0IHRpbGVTdHIgPSBlLmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXRpbGUnKTtcbiAgICBjb25zdCBzaGlwID0gcGxheWVyQm9hcmQucGxhY2VTaGlwKHNlbGVjdGVkU2hpcC5sZW5ndGgsIHtcbiAgICAgIG9yaWdpbjogdGlsZVN0cixcbiAgICAgIGRpcmVjdGlvbjogc2VsZWN0ZWRTaGlwLmRpcmVjdGlvbixcbiAgICB9KTtcblxuICAgIHBsYXllclNoaXBzLnB1c2goeyB0eXBlOiBzZWxlY3RlZFNoaXAudHlwZSwgcmVmOiBzaGlwIH0pO1xuICAgIHNob3dTdGFuZGFyZE1zZyhgWW91IGhhdmUgcGxhY2VkIHlvdXIgJHtzZWxlY3RlZFNoaXAudHlwZX0uYCk7XG5cbiAgICAvLyBVcGRhdGVzIHRoZSBzZWxlY3RlZCBzaGlwIGVsZW1lbnRcbiAgICBjb25zdCBzaGlwRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wbGF5ZXItc2hpcHNfX3NoaXBfJHtzZWxlY3RlZFNoaXAudHlwZX1gKTtcbiAgICBzaGlwRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVNoaXBTZWxlY3Rpb24pO1xuICAgIHNoaXBFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlU2hpcFJlbW92ZSk7XG4gICAgc2hpcEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgncGxheWVyLXNoaXBzX19zaGlwX3BsYWNlZCcpO1xuICAgIHNlbGVjdGVkU2hpcCA9IG51bGw7XG5cbiAgICAvLyBIaWRlcyBzaGlwIGRpcmVjdGlvbiBjb250cm9sc1xuICAgIGNvbnN0IHNoaXBEaXJlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcC1kaXJlY3Rpb24nKTtcbiAgICBzaGlwRGlyZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuXG4gICAgLy8gVXBkYXRlcyBvdGhlciB2aWV3c1xuICAgIHVwZGF0ZVNoaXBDb3VudGVyKCk7XG4gICAgdXBkYXRlUGxheWVyU2hpcFN0YXR1cygpO1xuICAgIGNsZWFyRGlyZWN0aW9uKCk7XG4gICAgcmVuZGVyQm9hcmQocGxheWVyQm9hcmQsIHRydWUpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBzaG93RXJyb3JNc2coZXJyLm1lc3NhZ2UuY29uY2F0KCcuJykpO1xuICB9XG59O1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyAgU2hpcCBzdGF0dXMvc2VsZWN0aW9uIGZ1bmN0aW9uc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vKipcbiAqIENvbG9ycyB0aGUgc2hpcHMgaW4gdGhlIHBsYXllcidzIHNoaXAgc3RhdHVzIHdpbmRvdyBhY2NvcmRpbmcgdG8gdGhlaXIgc3RhdHVzLlxuICovXG5jb25zdCB1cGRhdGVQbGF5ZXJTaGlwU3RhdHVzID0gKCkgPT4ge1xuICBjb25zdCBzaGlwRWxlbWVudHMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBsYXllci1zaGlwc19fc2hpcCcpXTtcblxuICAvLyBDbGVhciBhbnkgaGlnaGxpZ2h0ZWQgc2hpcHNcbiAgc2hpcEVsZW1lbnRzLmZvckVhY2goKHNoaXBFbGVtZW50KSA9PiB7XG4gICAgc2hpcEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgncGxheWVyLXNoaXBzX19zaGlwX3NlbGVjdGVkJyk7XG5cbiAgICAvLyBEZXRlcm1pbmVzIGlmIGN1cnJlbnQgc2hpcCBlbGVtZW50IG1hdGNoZXMgd2l0aCBhbiBleGlzdGluZyBzaGlwXG4gICAgY29uc3Qgc2hpcFR5cGUgPSBzaGlwRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2hpcCcpO1xuICAgIGNvbnN0IG1hdGNoaW5nU2hpcCA9IHBsYXllclNoaXBzLmZpbmQoKHNoaXApID0+IHNoaXAudHlwZSA9PT0gc2hpcFR5cGUpO1xuICAgIGlmICghbWF0Y2hpbmdTaGlwKSByZXR1cm47XG5cbiAgICAvLyBVcGRhdGVzIHRoZSBzaGlwIHN0YXR1cyBjb2xvclxuICAgIGlmIChtYXRjaGluZ1NoaXAucmVmLmlzU3VuaygpKSB7XG4gICAgICBzaGlwRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdwbGF5ZXItc2hpcHNfX3NoaXBfZGFtYWdlZCcpO1xuICAgICAgc2hpcEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgncGxheWVyLXNoaXBzX19zaGlwX3N1bmsnKTtcbiAgICB9IGVsc2UgaWYgKG1hdGNoaW5nU2hpcC5yZWYuZ2V0SGl0cygpID4gMCkge1xuICAgICAgc2hpcEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgncGxheWVyLXNoaXBzX19zaGlwX3VuZGFtYWdlZCcpO1xuICAgICAgc2hpcEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgncGxheWVyLXNoaXBzX19zaGlwX2RhbWFnZWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2hpcEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgncGxheWVyLXNoaXBzX19zaGlwX3VuZGFtYWdlZCcpO1xuICAgIH1cbiAgfSk7XG59O1xuXG4vKipcbiAqIENvbG9ycyB0aGUgc2hpcHMgaW4gdGhlIGNvbXB1dGVyJ3Mgc2hpcCBzdGF0dXMgd2luZG93IGFjY29yZGluZyB0byB0aGVpciBzdGF0dXMuXG4gKi9cbmNvbnN0IHVwZGF0ZUNvbXB1dGVyU2hpcFN0YXR1cyA9ICgpID0+IHtcbiAgY29uc3Qgc2hpcEVsZW1lbnRzID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb21wdXRlci1zaGlwc19fc2hpcCcpXTtcblxuICAvLyBDbGVhciBhbnkgaGlnaGxpZ2h0ZWQgc2hpcHNcbiAgc2hpcEVsZW1lbnRzLmZvckVhY2goKHNoaXBFbGVtZW50KSA9PiB7XG4gICAgLy8gRGV0ZXJtaW5lcyBpZiBjdXJyZW50IHNoaXAgZWxlbWVudCBtYXRjaGVzIHdpdGggYW4gZXhpc3Rpbmcgc2hpcFxuICAgIGNvbnN0IHNoaXBUeXBlID0gc2hpcEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXNoaXAnKTtcbiAgICBjb25zdCBtYXRjaGluZ1NoaXAgPSBjb21wdXRlclNoaXBzLmZpbmQoKHNoaXApID0+IHNoaXAudHlwZSA9PT0gc2hpcFR5cGUpO1xuICAgIGlmICghbWF0Y2hpbmdTaGlwKSByZXR1cm47XG5cbiAgICAvLyBVcGRhdGVzIHRoZSBzaGlwIHN0YXR1cyBjb2xvclxuICAgIGlmIChtYXRjaGluZ1NoaXAucmVmLmlzU3VuaygpKSB7XG4gICAgICBzaGlwRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdjb21wdXRlci1zaGlwc19fc2hpcF9kYW1hZ2VkJyk7XG4gICAgICBzaGlwRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjb21wdXRlci1zaGlwc19fc2hpcF9zdW5rJyk7XG4gICAgfSBlbHNlIGlmIChtYXRjaGluZ1NoaXAucmVmLmdldEhpdHMoKSA+IDApIHtcbiAgICAgIHNoaXBFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2NvbXB1dGVyLXNoaXBzX19zaGlwX3VuZGFtYWdlZCcpO1xuICAgICAgc2hpcEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY29tcHV0ZXItc2hpcHNfX3NoaXBfZGFtYWdlZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzaGlwRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjb21wdXRlci1zaGlwc19fc2hpcF91bmRhbWFnZWQnKTtcbiAgICB9XG4gIH0pO1xufTtcblxuLyoqXG4gKiBFdmVudCBoYW5kbGVyIGZvciBzZWxlY3RpbmcgYSBzaGlwIHRvIHBsYWNlIG9uIHRoZSBnYW1lYm9hcmQuXG4gKiBAcGFyYW0ge0V2ZW50fSBlXG4gKi9cbmNvbnN0IGhhbmRsZVNoaXBTZWxlY3Rpb24gPSAoZSkgPT4ge1xuICBjb25zdCBzaGlwRWxlbWVudHMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBsYXllci1zaGlwc19fc2hpcCcpXTtcbiAgY29uc3Qgc2hpcFR5cGUgPSBlLmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXNoaXAnKTtcblxuICAvLyBDbGVhcnMgYW55IGhpZ2hsaWdodGVkIHNoaXBzXG4gIHNoaXBFbGVtZW50cy5mb3JFYWNoKChzaGlwRWxlbWVudCkgPT4ge1xuICAgIHNoaXBFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3BsYXllci1zaGlwc19fc2hpcF9zZWxlY3RlZCcpO1xuICB9KTtcblxuICAvLyBIaWdobGlnaHRzIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgc2hpcFxuICBlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmFkZCgncGxheWVyLXNoaXBzX19zaGlwX3NlbGVjdGVkJyk7XG5cbiAgaWYgKHNoaXBUeXBlID09PSAnY2FycmllcicpIHtcbiAgICBzZWxlY3RlZFNoaXAgPSB7IHR5cGU6IHNoaXBUeXBlLCBsZW5ndGg6IDUsIGRpcmVjdGlvbjogJ0RPV04nIH07XG4gIH0gZWxzZSBpZiAoc2hpcFR5cGUgPT09ICdiYXR0bGVzaGlwJykge1xuICAgIHNlbGVjdGVkU2hpcCA9IHsgdHlwZTogc2hpcFR5cGUsIGxlbmd0aDogNCwgZGlyZWN0aW9uOiAnRE9XTicgfTtcbiAgfSBlbHNlIGlmIChzaGlwVHlwZSA9PT0gJ2NydWlzZXInKSB7XG4gICAgc2VsZWN0ZWRTaGlwID0geyB0eXBlOiBzaGlwVHlwZSwgbGVuZ3RoOiAzLCBkaXJlY3Rpb246ICdET1dOJyB9O1xuICB9IGVsc2UgaWYgKHNoaXBUeXBlID09PSAnc3VibWFyaW5lJykge1xuICAgIHNlbGVjdGVkU2hpcCA9IHsgdHlwZTogc2hpcFR5cGUsIGxlbmd0aDogMywgZGlyZWN0aW9uOiAnRE9XTicgfTtcbiAgfSBlbHNlIGlmIChzaGlwVHlwZSA9PT0gJ2Rlc3Ryb3llcicpIHtcbiAgICBzZWxlY3RlZFNoaXAgPSB7IHR5cGU6IHNoaXBUeXBlLCBsZW5ndGg6IDIsIGRpcmVjdGlvbjogJ0RPV04nIH07XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHNoaXAgdHlwZSBhdHRyaWJ1dGUnKTtcbiAgfVxuXG4gIHNob3dTdGFuZGFyZE1zZyhgWW91IGhhdmUgc2VsZWN0ZWQgeW91ciAke3NoaXBUeXBlfS5gKTtcbiAgc2hvd0RpcmVjdGlvbigpO1xufTtcblxuLyoqXG4gKiBBbGxvd3MgYSBwbGF5ZXIgdG8gcmVtb3ZlIGEgcGxhY2VkIHNoaXAgYmVmb3JlIGdhbWUgc3RhcnQuXG4gKiBAcGFyYW0ge0V2ZW50fSBlXG4gKi9cbmNvbnN0IGhhbmRsZVNoaXBSZW1vdmUgPSAoZSkgPT4ge1xuICBjb25zdCBzaGlwVHlwZSA9IGUuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2hpcCcpO1xuICBjb25zdCBtYXRjaGluZ1NoaXAgPSBwbGF5ZXJTaGlwcy5maW5kKChzaGlwKSA9PiBzaGlwLnR5cGUgPT09IHNoaXBUeXBlKTtcbiAgaWYgKCFtYXRjaGluZ1NoaXApIHRocm93IG5ldyBFcnJvcignVW5hYmxlIHRvIHJlbW92ZSBub24tZXhpc3RhbnQgc2hpcCcpO1xuXG4gIC8vIFJlbW92ZSBzaGlwIGZyb20gc3RvcmVkIGxpc3RzXG4gIHBsYXllclNoaXBzLnNwbGljZShwbGF5ZXJTaGlwcy5pbmRleE9mKG1hdGNoaW5nU2hpcCksIDEpO1xuICBwbGF5ZXJCb2FyZC5yZW1vdmVTaGlwKG1hdGNoaW5nU2hpcC5yZWYpO1xuICBzZWxlY3RlZFNoaXAgPSBudWxsO1xuXG4gIC8vIFN3YXAgZXZlbnQgaGFuZGxlcnNcbiAgZS5jdXJyZW50VGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlU2hpcFJlbW92ZSk7XG4gIGUuY3VycmVudFRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVNoaXBTZWxlY3Rpb24pO1xuXG4gIC8vIFVwZGF0ZSB2aWV3c1xuICBlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgncGxheWVyLXNoaXBzX19zaGlwX3BsYWNlZCcpO1xuICBlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgncGxheWVyLXNoaXBzX19zaGlwX3VuZGFtYWdlZCcpO1xuICB1cGRhdGVTaGlwQ291bnRlcigpO1xuICB1cGRhdGVQbGF5ZXJTaGlwU3RhdHVzKCk7XG4gIHJlbmRlckJvYXJkKHBsYXllckJvYXJkLCB0cnVlKTtcbiAgc2hvd1N0YW5kYXJkTXNnKGBZb3UgaGF2ZSByZW1vdmVkIHlvdXIgJHtzaGlwVHlwZX0uYCk7XG59O1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyAgU2hpcCByb3RhdGlvbiBmdW5jdGlvbnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLyoqXG4gKiBDbGVhcnMgdGhlIGN1cnJlbnRseSBoaWdobGlnaHRlZCBkaXJlY3Rpb24gZHVyaW5nIHNoaXAgcGxhY2VtZW50LlxuICovXG5jb25zdCBjbGVhckRpcmVjdGlvbiA9ICgpID0+IHtcbiAgLy8gQ2xlYXJzIHByZXZpb3VzbHkgaGlnaGxpZ2h0ZWQgZGlyZWN0aW9uXG4gIGNvbnN0IHJvdGF0b3JzID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaGlwLWRpcmVjdGlvbl9fcm90YXRvcicpXTtcbiAgcm90YXRvcnMuZm9yRWFjaCgocm90YXRvcikgPT4ge1xuICAgIHJvdGF0b3IuY2xhc3NMaXN0LnJlbW92ZSgnc2hpcC1kaXJlY3Rpb25fX3JvdGF0b3Jfc2VsZWN0ZWQnKTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIEhpZ2hsaWdodHMgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBzaGlwIGRpcmVjdGlvbiBkdXJpbmcgcGxhY2VtZW50LlxuICovXG5jb25zdCBzaG93RGlyZWN0aW9uID0gKCkgPT4ge1xuICBpZiAoIXNlbGVjdGVkU2hpcCkgcmV0dXJuO1xuXG4gIC8vIFNob3cgdGhlIHNoaXAgZGlyZWN0aW9uIGNvbnRyb2xsc1xuICBjb25zdCBzaGlwRGlyZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXAtZGlyZWN0aW9uJyk7XG4gIHNoaXBEaXJlY3Rpb24uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gIGNsZWFyRGlyZWN0aW9uKCk7XG5cbiAgLy8gSGlnaGxpZ2h0cyB0aGUgY3VycmVudCBkaXJlY3Rpb25cbiAgbGV0IHJvdGF0b3IgPSBudWxsO1xuICBpZiAoc2VsZWN0ZWRTaGlwLmRpcmVjdGlvbiA9PT0gJ1VQJykge1xuICAgIHJvdGF0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcC1kaXJlY3Rpb25fX3JvdGF0b3JfdXAnKTtcbiAgfSBlbHNlIGlmIChzZWxlY3RlZFNoaXAuZGlyZWN0aW9uID09PSAnUklHSFQnKSB7XG4gICAgcm90YXRvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwLWRpcmVjdGlvbl9fcm90YXRvcl9yaWdodCcpO1xuICB9IGVsc2UgaWYgKHNlbGVjdGVkU2hpcC5kaXJlY3Rpb24gPT09ICdET1dOJykge1xuICAgIHJvdGF0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcC1kaXJlY3Rpb25fX3JvdGF0b3JfZG93bicpO1xuICB9IGVsc2UgaWYgKHNlbGVjdGVkU2hpcC5kaXJlY3Rpb24gPT09ICdMRUZUJykge1xuICAgIHJvdGF0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcC1kaXJlY3Rpb25fX3JvdGF0b3JfbGVmdCcpO1xuICB9XG4gIHJvdGF0b3IuY2xhc3NMaXN0LmFkZCgnc2hpcC1kaXJlY3Rpb25fX3JvdGF0b3Jfc2VsZWN0ZWQnKTtcbn07XG5cbi8qKlxuICogRXZlbnQgaGFuZGxlciB0byBhbGxvdyBwbGF5ZXIgdG8gcm90YXRlIGEgc2hpcCdzIGRpcmVjdGlvbiBkdXJpbmcgcGxhY2VtZW50LlxuICogQHBhcmFtIHtFdmVudH0gZVxuICovXG5jb25zdCBoYW5kbGVSb3RhdGlvbiA9IChlKSA9PiB7XG4gIGlmICghc2VsZWN0ZWRTaGlwKSByZXR1cm47XG4gIHNlbGVjdGVkU2hpcC5kaXJlY3Rpb24gPSBlLmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWRpcicpO1xuICBzaG93RGlyZWN0aW9uKCk7XG59O1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyAgR2FtZSBmbG93IGZ1bmN0aW9uc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vKipcbiAqIFN0YXJ0cyB0aGUgZ2FtZS5cbiAqL1xuY29uc3Qgc3RhcnRHYW1lID0gKCkgPT4ge1xuICAvLyBIaWRlcyB0aGUgc3RhcnQgd2luZG93XG4gIGNvbnN0IHN0YXJ0V2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJ0LXdpbmRvdycpO1xuICBzdGFydFdpbmRvdy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcblxuICAvLyBVbmJsdXJzIHRoZSByaWdodCBnYW1lYm9hcmRcbiAgY29uc3QgZ2FtZWJvYXJkQ29tcHV0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZWJvYXJkX2NvbXB1dGVyJyk7XG4gIGNvbnN0IGNvbXB1dGVyU2hpcFN0YXR1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21wdXRlci1zaGlwcycpO1xuICBnYW1lYm9hcmRDb21wdXRlci5jbGFzc0xpc3QucmVtb3ZlKCdnYW1lYm9hcmRfYmx1cnJlZCcpO1xuICBjb21wdXRlclNoaXBTdGF0dXMuY2xhc3NMaXN0LnJlbW92ZSgnY29tcHV0ZXItc2hpcHNfdHJhbnNwYXJlbnQnKTtcblxuICAvLyBSZW1vdmVzIGV2ZW50IGxpc3RlbmVycyBmb3Igc2hpcCBzZWxlY3Rpb24gYW5kIHJlbW92ZSBjdXJzb3IgcG9pbnRlclxuICBjb25zdCBzaGlwRWxlbWVudHMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBsYXllci1zaGlwc19fc2hpcCcpXTtcbiAgc2hpcEVsZW1lbnRzLmZvckVhY2goKHNoaXBFbGVtZW50KSA9PiB7XG4gICAgc2hpcEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJ2N1cnNvcicsICd1bnNldCcpO1xuICAgIHNoaXBFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlU2hpcFJlbW92ZSk7XG4gIH0pO1xuXG4gIC8vIFJlZ2lzdGVycyBldmVudCBsaXN0ZW5lcnMgZm9yIGNvbXB1dGVyIHRpbGVzXG4gIGNvbnN0IGNvbXB1dGVyVGlsZXMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdhbWVib2FyZF9jb21wdXRlciAuZ2FtZWJvYXJkX190aWxlJyldO1xuICBjb21wdXRlclRpbGVzLmZvckVhY2goKHRpbGUpID0+IHtcbiAgICB0aWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlUGxheWVyQXR0YWNrKTtcbiAgfSk7XG5cbiAgdXBkYXRlQ29tcHV0ZXJTaGlwU3RhdHVzKCk7XG4gIHNob3dTdGFuZGFyZE1zZygnR2FtZSBzdGFydGVkIScpO1xuICBzaG93U3RhbmRhcmRNc2coJ0NsaWNrIG9uIHRoZSBlbmVteSB0aWxlcyB0byBhdHRhY2suJywgdHJ1ZSk7XG59O1xuXG4vKipcbiAqIFJlc2V0cyB0aGUgZ2FtZS5cbiAqL1xuY29uc3QgcmVzZXRHYW1lID0gKCkgPT4ge1xuICBwbGF5ZXIgPSBQbGF5ZXIoJ1BsYXllcicpO1xuICBjb21wdXRlciA9IFBsYXllcigpO1xuICBwbGF5ZXJCb2FyZCA9IEdhbWVib2FyZCgpO1xuICBjb21wdXRlckJvYXJkID0gR2FtZWJvYXJkKCk7XG4gIHBsYXllclNoaXBzID0gW107XG4gIGNvbXB1dGVyU2hpcHMgPSBbXTtcbiAgcGxheWVyQXR0YWNrQ291bnQgPSAwO1xuICBjb21wdXRlckF0dGFja0NvdW50ID0gMDtcblxuICByZW5kZXJCb2FyZChwbGF5ZXJCb2FyZCwgdHJ1ZSk7XG4gIHJlbmRlckJvYXJkKGNvbXB1dGVyQm9hcmQsIGZhbHNlKTtcbiAgc2V0dXBDb21wdXRlckJvYXJkKCk7XG4gIHVwZGF0ZVBsYXllclNoaXBTdGF0dXMoKTtcbiAgdXBkYXRlQ29tcHV0ZXJTaGlwU3RhdHVzKCk7XG4gIHVwZGF0ZVNoaXBDb3VudGVyKCk7XG5cbiAgLy8gQWRkcyBldmVudCBoYW5kbGVycyBmb3Igc2hpcCBzZWxlY3Rpb24gYW5kIGEgcG9pbnRlciBjdXJzb3IgdG8gZWFjaCBzaGlwIHNlbGVjdGlvbiBlbGVtZW50XG4gIGNvbnN0IHBsYXllclNoaXBFbGVtZW50cyA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGxheWVyLXNoaXBzX19zaGlwJyldO1xuICBwbGF5ZXJTaGlwRWxlbWVudHMuZm9yRWFjaCgoc2hpcEVsZW1lbnQpID0+IHtcbiAgICBzaGlwRWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnY3Vyc29yJywgJ3BvaW50ZXInKTtcbiAgICBzaGlwRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVNoaXBTZWxlY3Rpb24pO1xuICAgIHNoaXBFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3BsYXllci1zaGlwc19fc2hpcF91bmRhbWFnZWQnKTtcbiAgICBzaGlwRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdwbGF5ZXItc2hpcHNfX3NoaXBfZGFtYWdlZCcpO1xuICAgIHNoaXBFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3BsYXllci1zaGlwc19fc2hpcF9zdW5rJyk7XG4gICAgc2hpcEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgncGxheWVyLXNoaXBzX19zaGlwX3BsYWNlZCcpO1xuICB9KTtcblxuICAvLyBSZXNldHMgY29tcHV0ZXIgc2hpcCBzdGF0dXMgd2luZG93XG4gIGNvbnN0IGNvbXB1dGVyU2hpcEVsZW1lbnRzID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb21wdXRlci1zaGlwc19fc2hpcCcpXTtcbiAgY29tcHV0ZXJTaGlwRWxlbWVudHMuZm9yRWFjaCgoc2hpcEVsZW1lbnQpID0+IHtcbiAgICBzaGlwRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdjb21wdXRlci1zaGlwc19fc2hpcF91bmRhbWFnZWQnKTtcbiAgICBzaGlwRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdjb21wdXRlci1zaGlwc19fc2hpcF9kYW1hZ2VkJyk7XG4gICAgc2hpcEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnY29tcHV0ZXItc2hpcHNfX3NoaXBfc3VuaycpO1xuICB9KTtcblxuICAvLyBIaWRlcyB0aGUgcmVzZXQgYnV0dG9uXG4gIGNvbnN0IHJlc2V0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lc3NhZ2Utd2luZG93X19yZXNldC1idG4nKTtcbiAgcmVzZXRCdG4uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG5cbiAgLy8gU2hvd3MgdGhlIHN0YXJ0IHdpbmRvd1xuICBjb25zdCBzdGFydFdpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydC13aW5kb3cnKTtcbiAgc3RhcnRXaW5kb3cuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG5cbiAgLy8gQmx1cnMgdGhlIHJpZ2h0IGdhbWVib2FyZFxuICBjb25zdCBnYW1lYm9hcmRDb21wdXRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lYm9hcmRfY29tcHV0ZXInKTtcbiAgY29uc3QgY29tcHV0ZXJTaGlwU3RhdHVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbXB1dGVyLXNoaXBzJyk7XG4gIGdhbWVib2FyZENvbXB1dGVyLmNsYXNzTGlzdC5hZGQoJ2dhbWVib2FyZF9ibHVycmVkJyk7XG4gIGNvbXB1dGVyU2hpcFN0YXR1cy5jbGFzc0xpc3QuYWRkKCdjb21wdXRlci1zaGlwc190cmFuc3BhcmVudCcpO1xuXG4gIC8vIFJlc2V0cyBzdGF0dXMgbWVzc2FnZXNcbiAgY29uc3Qgb3V0Y29tZU1zZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZXNzYWdlLXdpbmRvd19fb3V0Y29tZScpO1xuICBvdXRjb21lTXNnLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICBzaG93U3RhbmRhcmRNc2coJ0NsaWNrIG9uIHlvdXIgc2hpcHMgdG8gcGxhY2UgdGhlbSBpbiB0aGUgZ3JpZC4nKTtcbiAgY29uc3Qgc3RhdHVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJ0LWRpYWxvZ19fc3RhdHVzJyk7XG4gIHN0YXR1cy50ZXh0Q29udGVudCA9ICdQbGFjZSB5b3VyIHNoaXBzIHRvIHN0YXJ0Lic7XG59O1xuXG4vKipcbiAqIEFsbG93cyB0aGUgZ2FtZSB0byBlbmQgYW5kIHByZXZlbnRzIGFueSBtb3JlIG1vdmVzIGZyb20gYmVpbmcgbWFkZS5cbiAqL1xuY29uc3QgZW5kR2FtZSA9ICh3aW5uZXIpID0+IHtcbiAgLy8gUmVtb3ZlcyBwbGF5ZXIgYWJpbGl0eSB0byBjb250aW51ZSBhdHRhY2tcbiAgY29uc3QgdGlsZXMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdhbWVib2FyZF9jb21wdXRlciAuZ2FtZWJvYXJkX190aWxlJyldO1xuICB0aWxlcy5mb3JFYWNoKCh0aWxlKSA9PiB0aWxlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlUGxheWVyQXR0YWNrKSk7XG5cbiAgY29uc3QgcmVzZXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVzc2FnZS13aW5kb3dfX3Jlc2V0LWJ0bicpO1xuICByZXNldEJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcblxuICBjb25zdCBvdXRjb21lTXNnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lc3NhZ2Utd2luZG93X19vdXRjb21lJyk7XG4gIG91dGNvbWVNc2cuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG5cbiAgaWYgKHdpbm5lci5pc0h1bWFuKCkpIHtcbiAgICBvdXRjb21lTXNnLnRleHRDb250ZW50ID0gJ1lvdSB3b24hJztcbiAgICBzaG93U3RhbmRhcmRNc2coYFlvdSBzdW5rIGFsbCB0aGVpciBzaGlwcyBpbiAke3BsYXllckF0dGFja0NvdW50fSBzaG90cyFgLCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBvdXRjb21lTXNnLnRleHRDb250ZW50ID0gJ1lvdSBsb3N0ISc7XG4gICAgc2hvd1N0YW5kYXJkTXNnKGBUaGV5IHN1bmsgYWxsIHlvdXIgc2hpcHMgaW4gJHtjb21wdXRlckF0dGFja0NvdW50fSBzaG90cyFgLCB0cnVlKTtcbiAgfVxufTtcblxuLyoqXG4gKiBBbGxvd3MgdGhlIGNvbXB1dGVyIHRvIG1ha2UgaXRzIHR1cm4gYWdhaW5zdCB0aGUgcGxheWVyIHdoZW4gdGhlIHBsYXllcidzXG4gKiB0dXJuIGlzIG92ZXIuXG4gKi9cbmNvbnN0IGVuZFR1cm4gPSAoKSA9PiB7XG4gIGNvbnN0IHRpbGVTdHIgPSBjb21wdXRlci5hdHRhY2socGxheWVyQm9hcmQpO1xuICBjb21wdXRlckF0dGFja0NvdW50Kys7XG4gIHJlbmRlckJvYXJkKHBsYXllckJvYXJkLCB0cnVlKTtcbiAgdXBkYXRlUGxheWVyU2hpcFN0YXR1cygpO1xuXG4gIGNvbnN0IHN0YXR1c1N0ciA9IHN0YXR1c1RvU3RyaW5nKHBsYXllckJvYXJkLmdldFRpbGUodGlsZVN0cikuc3RhdHVzKTtcbiAgc2hvd1N0YW5kYXJkTXNnKGBUaGUgZW5lbXkgYXR0YWNrZWQgJHt0aWxlU3RyfSBhbmQgJHtzdGF0dXNTdHJ9LmAsIHRydWUpO1xuXG4gIGlmIChwbGF5ZXJCb2FyZC5pc0RlZmVhdGVkKCkpIHtcbiAgICBlbmRHYW1lKGNvbXB1dGVyKTtcbiAgfVxufTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYWxsIHNoaXBzIGFyZSBwbGFjZWQgYW5kIHN0YXJ0cyB0aGUgZ2FtZSBpZiBzby4gT3RoZXJ3aXNlLCB0aGVcbiAqIHBsYWNlZCBzaGlwcyBjb3VudGVyIHRleHQgaXMgdXBkYXRlZC5cbiAqL1xuY29uc3QgdXBkYXRlU2hpcENvdW50ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGNvdW50ID0gcGxheWVyU2hpcHMubGVuZ3RoO1xuICBjb25zdCBzdGFydEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydC1kaWFsb2dfX2J0bicpO1xuXG4gIC8vIEVuYWJsZXMgc3RhcnQgYnV0dG9uIGlmIGFsbCBzaGlwcyBwbGFjZWRcbiAgY29uc3Qgc3RhdHVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJ0LWRpYWxvZ19fc3RhdHVzJyk7XG4gIGlmIChjb3VudCA9PT0gNSkge1xuICAgIHN0YXJ0QnRuLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICBzdGF0dXMudGV4dENvbnRlbnQgPSAnVGhlIGdhbWUgaXMgcmVhZHkgdG8gc3RhcnQuJztcbiAgfSBlbHNlIHtcbiAgICBzdGFydEJ0bi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgc3RhdHVzLnRleHRDb250ZW50ID0gJ1BsYWNlIHlvdXIgc2hpcHMgdG8gc3RhcnQuJztcbiAgfVxuXG4gIC8vIFVwZGF0ZXMgdGhlIGNvdW50ZXIgdGV4dFxuICBjb25zdCBjb3VudGVyRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydC1kaWFsb2dfX3NoaXAtY291bnRlcicpO1xuICBjb3VudGVyRWxlbWVudC50ZXh0Q29udGVudCA9IGAke3BsYXllclNoaXBzLmxlbmd0aH0vNSBzaGlwcyBwbGFjZWQuYDtcbn07XG5cbi8qKlxuICogUmFuZG9tbHkgcGxhY2VzIHRoZSBjb21wdXRlcidzIHNoaXBzIG9uIGl0cyBib2FyZC5cbiAqL1xuY29uc3Qgc2V0dXBDb21wdXRlckJvYXJkID0gKCkgPT4ge1xuICBjb21wdXRlclNoaXBzLnB1c2goe1xuICAgIHR5cGU6ICdjYXJyaWVyJyxcbiAgICByZWY6IGNvbXB1dGVyQm9hcmQucGxhY2VTaGlwUmFuZG9tKDUpLFxuICB9KTtcbiAgY29tcHV0ZXJTaGlwcy5wdXNoKHtcbiAgICB0eXBlOiAnYmF0dGxlc2hpcCcsXG4gICAgcmVmOiBjb21wdXRlckJvYXJkLnBsYWNlU2hpcFJhbmRvbSg0KSxcbiAgfSk7XG4gIGNvbXB1dGVyU2hpcHMucHVzaCh7XG4gICAgdHlwZTogJ2NydWlzZXInLFxuICAgIHJlZjogY29tcHV0ZXJCb2FyZC5wbGFjZVNoaXBSYW5kb20oMyksXG4gIH0pO1xuICBjb21wdXRlclNoaXBzLnB1c2goe1xuICAgIHR5cGU6ICdzdWJtYXJpbmUnLFxuICAgIHJlZjogY29tcHV0ZXJCb2FyZC5wbGFjZVNoaXBSYW5kb20oMyksXG4gIH0pO1xuICBjb21wdXRlclNoaXBzLnB1c2goe1xuICAgIHR5cGU6ICdkZXN0cm95ZXInLFxuICAgIHJlZjogY29tcHV0ZXJCb2FyZC5wbGFjZVNoaXBSYW5kb20oMiksXG4gIH0pO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gIE1lc3NhZ2UgZnVuY3Rpb25zXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8qKlxuICogRGlzcGxheXMgYSBzdGF0dXMgbWVzc2FnZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBtc2cgVGhlIG1lc3NhZ2UgdG8gZGlzcGxheS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gYXBwZW5kIFdpbGwgYXBwZW5kIGFuIGFkZGl0aW9uYWwgbWVzc2FnZSBpZiB0cnVlXG4gKi9cbmNvbnN0IHNob3dTdGFuZGFyZE1zZyA9IChtc2csIGFwcGVuZCA9IGZhbHNlKSA9PiB7XG4gIGNvbnN0IG1lc3NhZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lc3NhZ2Utd2luZG93X19tZXNzYWdlcycpO1xuXG4gIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWVzc2FnZS5jbGFzc0xpc3QuYWRkKCdtZXNzYWdlc19fbXNnJyk7XG4gIG1lc3NhZ2UudGV4dENvbnRlbnQgPSBtc2c7XG5cbiAgLy8gUmVtb3ZlcyBhbnkgcHJldmlvdXMgZXJyb3Igc3R5bGluZ1xuICBjb25zdCBtZXNzYWdlV2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lc3NhZ2Utd2luZG93Jyk7XG4gIG1lc3NhZ2VXaW5kb3cuY2xhc3NMaXN0LnJlbW92ZSgnbWVzc2FnZS13aW5kb3dfZXJyb3InKTtcblxuICBpZiAoYXBwZW5kKSB7XG4gICAgbWVzc2FnZXMuYXBwZW5kQ2hpbGQobWVzc2FnZSk7XG4gIH0gZWxzZSB7XG4gICAgLy8gQ2xlYXJzIHByZXZpb3VzIG1lc3NhZ2VzXG4gICAgd2hpbGUgKG1lc3NhZ2VzLmZpcnN0Q2hpbGQpIHtcbiAgICAgIG1lc3NhZ2VzLnJlbW92ZUNoaWxkKG1lc3NhZ2VzLmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBtZXNzYWdlcy5hcHBlbmRDaGlsZChtZXNzYWdlKTtcbiAgfVxufTtcblxuLyoqXG4gKiBEaXNwbGF5cyBhbiBlcnJvciBtZXNzYWdlLlxuICogQHBhcmFtIHtzdHJpbmd9IG1zZyBUaGUgZXJyb3IgbWVzc2FnZSB0byBkaXNwbGF5LlxuICovXG5jb25zdCBzaG93RXJyb3JNc2cgPSAobXNnKSA9PiB7XG4gIGNvbnN0IG1lc3NhZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lc3NhZ2Utd2luZG93X19tZXNzYWdlcycpO1xuXG4gIC8vIENsZWFycyBwcmV2aW91cyBtZXNzYWdlc1xuICB3aGlsZSAobWVzc2FnZXMuZmlyc3RDaGlsZCkge1xuICAgIG1lc3NhZ2VzLnJlbW92ZUNoaWxkKG1lc3NhZ2VzLmZpcnN0Q2hpbGQpO1xuICB9XG5cbiAgY29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtZXNzYWdlLmNsYXNzTGlzdC5hZGQoJ21lc3NhZ2VzX19tc2cnKTtcbiAgbWVzc2FnZS50ZXh0Q29udGVudCA9IG1zZztcblxuICAvLyBTdHlsZXMgdGhlIG1lc3NhZ2Ugd2luZG93IHRvIGluZGljYXRlIGFuIGVycm9yXG4gIGNvbnN0IG1lc3NhZ2VXaW5kb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVzc2FnZS13aW5kb3cnKTtcbiAgbWVzc2FnZVdpbmRvdy5jbGFzc0xpc3QuYWRkKCdtZXNzYWdlLXdpbmRvd19lcnJvcicpO1xuXG4gIG1lc3NhZ2VzLmFwcGVuZENoaWxkKG1lc3NhZ2UpO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gIFRlc3QgZnVuY3Rpb25zXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8qKlxuICogQWxsb3dzIHR3byBjb21wdXRlcnMgdG8gcGxheSBhZ2FpbnN0IGVhY2ggb3RoZXIuXG4gKi9cbmNvbnN0IHRlc3RGaWdodCA9IChib3RoQ29tcHV0ZXJzID0gZmFsc2UpID0+IHtcbiAgY29uc3Qgc2hpcEVsZW1lbnRzID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGF5ZXItc2hpcHNfX3NoaXAnKV07XG4gIHNoaXBFbGVtZW50cy5mb3JFYWNoKChzaGlwRWxlbWVudCkgPT4ge1xuICAgIHNoaXBFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlU2hpcFNlbGVjdGlvbik7XG4gICAgc2hpcEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgncGxheWVyLXNoaXBzX19zaGlwX3BsYWNlZCcpO1xuICB9KTtcblxuICBwbGF5ZXJTaGlwcy5wdXNoKHtcbiAgICB0eXBlOiAnY2FycmllcicsXG4gICAgcmVmOiBwbGF5ZXJCb2FyZC5wbGFjZVNoaXBSYW5kb20oNSksXG4gIH0pO1xuICBwbGF5ZXJTaGlwcy5wdXNoKHtcbiAgICB0eXBlOiAnYmF0dGxlc2hpcCcsXG4gICAgcmVmOiBwbGF5ZXJCb2FyZC5wbGFjZVNoaXBSYW5kb20oNCksXG4gIH0pO1xuICBwbGF5ZXJTaGlwcy5wdXNoKHtcbiAgICB0eXBlOiAnY3J1aXNlcicsXG4gICAgcmVmOiBwbGF5ZXJCb2FyZC5wbGFjZVNoaXBSYW5kb20oMyksXG4gIH0pO1xuICBwbGF5ZXJTaGlwcy5wdXNoKHtcbiAgICB0eXBlOiAnc3VibWFyaW5lJyxcbiAgICByZWY6IHBsYXllckJvYXJkLnBsYWNlU2hpcFJhbmRvbSgzKSxcbiAgfSk7XG4gIHBsYXllclNoaXBzLnB1c2goe1xuICAgIHR5cGU6ICdkZXN0cm95ZXInLFxuICAgIHJlZjogcGxheWVyQm9hcmQucGxhY2VTaGlwUmFuZG9tKDIpLFxuICB9KTtcblxuICByZW5kZXJCb2FyZChwbGF5ZXJCb2FyZCwgdHJ1ZSk7XG4gIHVwZGF0ZVBsYXllclNoaXBTdGF0dXMoKTtcbiAgc3RhcnRHYW1lKCk7XG5cbiAgaWYgKCFib3RoQ29tcHV0ZXJzKSByZXR1cm47XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA5OTsgaSsrKSB7XG4gICAgaWYgKHBsYXllckJvYXJkLmlzRGVmZWF0ZWQoKSkgYnJlYWs7XG5cbiAgICBjb25zdCB0aWxlU3RyID0gcGxheWVyLmF0dGFjayhjb21wdXRlckJvYXJkKTtcbiAgICBwbGF5ZXJBdHRhY2tDb3VudCsrO1xuICAgIGNvbnN0IHN0YXR1c1N0ciA9IHN0YXR1c1RvU3RyaW5nKGNvbXB1dGVyQm9hcmQuZ2V0VGlsZSh0aWxlU3RyKS5zdGF0dXMpO1xuICAgIHNob3dTdGFuZGFyZE1zZyhgWW91IGF0dGFja2VkICR7dGlsZVN0cn0gYW5kICR7c3RhdHVzU3RyfS5gKTtcblxuICAgIGlmIChjb21wdXRlckJvYXJkLmlzRGVmZWF0ZWQoKSkge1xuICAgICAgZW5kR2FtZShwbGF5ZXIpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgZW5kVHVybigpO1xuICB9XG5cbiAgcmVuZGVyQm9hcmQoY29tcHV0ZXJCb2FyZCwgZmFsc2UpO1xuICB1cGRhdGVDb21wdXRlclNoaXBTdGF0dXMoKTtcbn07XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vICBFeHBvcnRlZCBmdW5jdGlvbnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLyoqXG4gKiBJbml0aWFsaXplcyB0aGUgc3RhcnQgb2YgdGhlIGdhbWUuXG4gKi9cbmNvbnN0IGluaXRpYWxpemUgPSAoKSA9PiB7XG4gIGNyZWF0ZUdyaWRUaWxlcygpO1xuICBwbGF5ZXIgPSBQbGF5ZXIoJ1BsYXllcicpO1xuICBjb21wdXRlciA9IFBsYXllcigpO1xuICBwbGF5ZXJCb2FyZCA9IEdhbWVib2FyZCgpO1xuICBjb21wdXRlckJvYXJkID0gR2FtZWJvYXJkKCk7XG4gIHNldHVwQ29tcHV0ZXJCb2FyZCgpO1xuXG4gIC8vIFJlZ2lzdGVyIGV2ZW50IGxpc3RlbmVycyBvbiBwbGF5ZXIgYm9hcmQgZm9yIGdhbWUgc3RhcnQgc2hpcCBwbGFjZW1lbnRcbiAgY29uc3QgcGxheWVyVGlsZXMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdhbWVib2FyZF9wbGF5ZXIgLmdhbWVib2FyZF9fdGlsZScpXTtcbiAgcGxheWVyVGlsZXMuZm9yRWFjaCgodGlsZSkgPT4ge1xuICAgIHRpbGUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgc2hvd1NoaXBQbGFjZW1lbnQpO1xuICAgIHRpbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVTaGlwUGxhY2VtZW50KTtcbiAgfSk7XG5cbiAgLy8gUmVnaXN0ZXJzIGV2ZW50IGxpc3RlbmVyIGZvciBzaGlwIHNlbGVjdGlvbiBsaXN0XG4gIGNvbnN0IHNoaXBFbGVtZW50cyA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGxheWVyLXNoaXBzX19zaGlwJyldO1xuICBzaGlwRWxlbWVudHMuZm9yRWFjaCgoc2hpcEVsZW1lbnQpID0+XG4gICAgc2hpcEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVTaGlwU2VsZWN0aW9uKVxuICApO1xuXG4gIC8vIFJlZ2lzdGVycyBldmVudCBsaXN0ZW5lciBmb3Igc2hpcCByb3RhdGlvbiBidXR0b25zXG4gIGNvbnN0IHJvdGF0b3JzID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaGlwLWRpcmVjdGlvbl9fcm90YXRvcicpXTtcbiAgcm90YXRvcnMuZm9yRWFjaCgocm90YXRvcikgPT4ge1xuICAgIHJvdGF0b3IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVSb3RhdGlvbik7XG4gIH0pO1xuXG4gIC8vIFJlZ2lzdGVycyBldmVudCBsaXN0ZW5lciBmb3IgY2xlYXJpbmcgYW55IHNoaXAgcGxhY2VtZW50IHRpbGUgY29sb3JzXG4gIC8vIHdoZW4gbGVhdmluZyB0aGUgZ3JpZFxuICBjb25zdCBncmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWVib2FyZF9wbGF5ZXIgLmdhbWVib2FyZF9fdGlsZS1ncmlkJyk7XG4gIGdyaWQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHJlc2V0VGlsZUNvbG9ycyk7XG5cbiAgLy8gUmVnaXN0ZXJzIGV2ZW50IGxpc3RlbmVyIGZvciB0aGUgc3RhcnQgYnV0dG9uXG4gIGNvbnN0IHN0YXJ0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJ0LWRpYWxvZ19fYnRuJyk7XG4gIHN0YXJ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3RhcnRHYW1lKTtcblxuICAvLyBSZWdpc3RlcnMgZXZlbnQgbGlzdGVuZXIgZm9yIHJlc2V0IGJ1dHRvblxuICBjb25zdCByZXNldEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZXNzYWdlLXdpbmRvd19fcmVzZXQtYnRuJyk7XG4gIHJlc2V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVzZXRHYW1lKTtcblxuICAvLyBURVNUXG4gIHRlc3RGaWdodCgpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaW5pdGlhbGl6ZTtcbiIsImNvbnN0IGNsb25lRGVlcCA9IHJlcXVpcmUoJ2xvZGFzaC5jbG9uZWRlZXAnKTtcbmNvbnN0IFNoaXAgPSByZXF1aXJlKCcuL1NoaXAnKTtcbmNvbnN0IHsgdG9HcmlkQ29vcmQsIHRvVGlsZVN0ciB9ID0gcmVxdWlyZSgnLi4vdXRpbGl0eS9zdHJpbmdDb252ZXJzaW9uJyk7XG5jb25zdCB7IEdhbWVib2FyZEVycm9ycywgU2hpcEVycm9ycyB9ID0gcmVxdWlyZSgnLi4vdXRpbGl0eS9lcnJvcnMnKTtcblxuLyoqXG4gKiBHYW1lYm9hcmQgZmFjdG9yeSBmdW5jdGlvbi5cbiAqIEByZXR1cm5zIEFuIGludGVyZmFjZSBmb3IgdGhlIGdhbWVib2FyZC5cbiAqL1xuY29uc3QgR2FtZWJvYXJkID0gKCkgPT4ge1xuICAvLyBDcmVhdGVzIGEgMkQgZ3JpZCBvZiB0aWxlcyBhbmQgdGhlaXIgYXNzb2NpYXRlZCBwcm9wZXJ0aWVzXG4gIC8vIE9yaWdpbiBwb2ludCBpcyBsb2NhdGVkIGluIHRoZSB0b3AgbGVmdCBhdCByb3cgMCBhbmQgY29sdW1uIDAuXG4gIGxldCBncmlkID0gWy4uLm5ldyBBcnJheSgxMCldLm1hcCgoKSA9PlxuICAgIFsuLi5uZXcgQXJyYXkoMTApXS5tYXAoKCkgPT4gKHsgc2hpcDogbnVsbCwgc3RhdHVzOiAwIH0pKVxuICApO1xuXG4gIC8vIENvbnRhaW5zIHNoaXBzIHRoYXQgYXJlIHByZXNlbnQgb24gdGhlIGJvYXJkXG4gIGNvbnN0IHNoaXBzID0gW107XG5cbiAgLyoqXG4gICAqIENoZWNrcyB0aGUgZ3JpZCBjb29yZGluYXRlIGFuZCBhZGphY2VudCBwb2ludHMgZm9yIGV4aXN0aW5nIHNoaXBzLlxuICAgKiBAcGFyYW0ge251bWJlcn0gcm93IEdyaWQgcm93IG51bWJlclxuICAgKiBAcGFyYW0ge251bWJlcn0gY29sIENvbCByb3cgbnVtYmVyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbc2hpcFRvSWdub3JlXSBJZ25vcmVzIHRpbGVzIHdpdGggdGhpcyBzaGlwIG9uIGl0XG4gICAqIEByZXR1cm5zIHRydWUgaWYgYW4gZXhpc3Rpbmcgc2hpcCBpcyBpbiBwcm94aW1pdHksIGZhbHNlIG90aGVyd2lzZVxuICAgKi9cbiAgY29uc3QgY2hlY2tQcm94aW1pdHkgPSAocm93LCBjb2wpID0+IHtcbiAgICAvKlxuICAgIEZvciBhIGdpdmVuIGdyaWQgcG9pbnQsIGFsbCBhZGphY2VudCBwb2ludHMgYXJlIGNoZWNrZWQgZm9yIGV4aXN0aW5nXG4gICAgc2hpcHMuIFRoZSBvcmRlciBvZiBjaGVja2VkIHBvaW50cyBzdGFydHMgd2l0aCB0aGUgdG9wIGFkamFjZW50IHBvaW50c1xuICAgIGxlZnQgdG8gcmlnaHQuIEZvbGxvd2VkIGJ5IG1pZGRsZSBhZGphY2VudCBwb2ludHMgbGVmdCB0byByaWdodC5cbiAgICBGaW5hbGx5LCB0aGUgYm90dG9tIGFkamFjZW50IHBvaW50cyBhcmUgY2hlY2tlZCBsZWZ0IHRvIHJpZ2h0LiBDaGVja3NcbiAgICBmb3IgdW5kZWZpbmVkIGFyZSBtYWRlIHNvIG5vIGVycm9ycyBhcmUgZW5jb3VudGVyZWQgaWYgdGhlIGluaXRpYWwgZ3JpZFxuICAgIHBvaW50IGlzIG9uIHRoZSBncmlkIGVkZ2UuXG4gICAgKi9cbiAgICBmb3IgKGxldCByID0gcm93IC0gMTsgciA8PSByb3cgKyAxOyByKyspIHtcbiAgICAgIGlmIChncmlkW3JdKSB7XG4gICAgICAgIGZvciAobGV0IGMgPSBjb2wgLSAxOyBjIDw9IGNvbCArIDE7IGMrKykge1xuICAgICAgICAgIGlmIChncmlkW3JdW2NdKSB7XG4gICAgICAgICAgICBpZiAoZ3JpZFtyXVtjXS5zaGlwKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgLyoqXG4gICAqIFBsYWNlcyBhIG5ldyBzaGlwIG9uIHRoZSBnYW1lYm9hcmQuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBsZW4gTGVuZ3RoIG9mIHRoZSBzaGlwIHRvIHBsYWNlLlxuICAgKiBAcGFyYW0ge29iamVjdH0gcG9zIFBvc2l0aW9uIG9mIHRoZSBzaGlwLlxuICAgKi9cbiAgY29uc3QgcGxhY2VTaGlwID0gKGxlbiwgcG9zKSA9PiB7XG4gICAgY29uc3Qgc2hpcCA9IFNoaXAobGVuLCBwb3MpO1xuICAgIGNvbnN0IHNoaXBEaXJlY3Rpb24gPSBzaGlwLmdldFBvc2l0aW9uKCkuZGlyZWN0aW9uO1xuICAgIGNvbnN0IGdyaWRDb3B5ID0gY2xvbmVEZWVwKGdyaWQpO1xuICAgIGNvbnN0IGdyaWRDb29yZCA9IHRvR3JpZENvb3JkKHNoaXAuZ2V0UG9zaXRpb24oKS5vcmlnaW4pO1xuXG4gICAgaWYgKHNoaXBEaXJlY3Rpb24gPT09ICdVUCcpIHtcbiAgICAgIGxldCB7IHJvdywgY29sIH0gPSBncmlkQ29vcmQ7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgcHJlZmVyLWNvbnN0XG4gICAgICBmb3IgKGxldCBpID0gbGVuOyBpID4gMDsgaS0tKSB7XG4gICAgICAgIGlmIChjaGVja1Byb3hpbWl0eShyb3csIGNvbCkpIHRocm93IG5ldyBFcnJvcihHYW1lYm9hcmRFcnJvcnMucHJveGltaXR5KTtcbiAgICAgICAgZ3JpZENvcHlbcm93XVtjb2xdLnNoaXAgPSBzaGlwO1xuICAgICAgICByb3ctLTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHNoaXBEaXJlY3Rpb24gPT09ICdET1dOJykge1xuICAgICAgbGV0IHsgcm93LCBjb2wgfSA9IGdyaWRDb29yZDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBwcmVmZXItY29uc3RcbiAgICAgIGZvciAobGV0IGkgPSBsZW47IGkgPiAwOyBpLS0pIHtcbiAgICAgICAgaWYgKGNoZWNrUHJveGltaXR5KHJvdywgY29sKSkgdGhyb3cgbmV3IEVycm9yKEdhbWVib2FyZEVycm9ycy5wcm94aW1pdHkpO1xuICAgICAgICBncmlkQ29weVtyb3ddW2NvbF0uc2hpcCA9IHNoaXA7XG4gICAgICAgIHJvdysrO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoc2hpcERpcmVjdGlvbiA9PT0gJ0xFRlQnKSB7XG4gICAgICBsZXQgeyByb3csIGNvbCB9ID0gZ3JpZENvb3JkOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHByZWZlci1jb25zdFxuICAgICAgZm9yIChsZXQgaSA9IGxlbjsgaSA+IDA7IGktLSkge1xuICAgICAgICBpZiAoY2hlY2tQcm94aW1pdHkocm93LCBjb2wpKSB0aHJvdyBuZXcgRXJyb3IoR2FtZWJvYXJkRXJyb3JzLnByb3hpbWl0eSk7XG4gICAgICAgIGdyaWRDb3B5W3Jvd11bY29sXS5zaGlwID0gc2hpcDtcbiAgICAgICAgY29sLS07XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChzaGlwRGlyZWN0aW9uID09PSAnUklHSFQnKSB7XG4gICAgICBsZXQgeyByb3csIGNvbCB9ID0gZ3JpZENvb3JkOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHByZWZlci1jb25zdFxuICAgICAgZm9yIChsZXQgaSA9IGxlbjsgaSA+IDA7IGktLSkge1xuICAgICAgICBpZiAoY2hlY2tQcm94aW1pdHkocm93LCBjb2wpKSB0aHJvdyBuZXcgRXJyb3IoR2FtZWJvYXJkRXJyb3JzLnByb3hpbWl0eSk7XG4gICAgICAgIGdyaWRDb3B5W3Jvd11bY29sXS5zaGlwID0gc2hpcDtcbiAgICAgICAgY29sKys7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IHBsYWNlIHNoaXA6IFNoaXAgZGlyZWN0aW9uIGludmFsaWQnKTtcbiAgICB9XG5cbiAgICBzaGlwcy5wdXNoKHNoaXApO1xuICAgIGdyaWQgPSBncmlkQ29weTtcbiAgICByZXR1cm4gc2hpcDtcbiAgfTtcblxuICBjb25zdCBwbGFjZVNoaXBSYW5kb20gPSAobGVuKSA9PiB7XG4gICAgaWYgKCFsZW4pIHRocm93IG5ldyBFcnJvcihHYW1lYm9hcmRFcnJvcnMubWlzc2luZ0xlbmd0aEFyZyk7XG4gICAgaWYgKHNoaXBzLmxlbmd0aCA9PT0gNSkgdGhyb3cgbmV3IEVycm9yKEdhbWVib2FyZEVycm9ycy5tYXhTaGlwQ291bnQpO1xuXG4gICAgY29uc3QgZGlyZWN0aW9ucyA9IFsnVVAnLCAnUklHSFQnLCAnRE9XTicsICdMRUZUJ107XG4gICAgbGV0IHNoaXAgPSBudWxsO1xuXG4gICAgd2hpbGUgKCFzaGlwKSB7XG4gICAgICAvLyBSYW5kb20gdGlsZVxuICAgICAgY29uc3Qgcm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgY29uc3QgY29sID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgY29uc3Qgb3JpZ2luID0gdG9UaWxlU3RyKHJvdywgY29sKTtcblxuICAgICAgLy8gUmFuZG9tIGRpcmVjdGlvblxuICAgICAgbGV0IGRpciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQpO1xuICAgICAgbGV0IGRpcmVjdGlvbiA9IGRpcmVjdGlvbnNbZGlyXTtcblxuICAgICAgLy8gQXR0ZW1wdHMgdG8gcGxhY2Ugc2hpcCBhdCByYW5kb20gdGlsZSBpbiByYW5kb20gZGlyZWN0aW9uLiBJZlxuICAgICAgLy8gcGxhY2VtZW50IGZhaWxzLCB0aGUgbmV4dCBkaXJlY3Rpb24gaXMgYXR0ZW1wdGVkLiBJZiBhbGwgZGlyZWN0aW9uc1xuICAgICAgLy8gZmFpbCwgYSBuZXcgcmFuZG9tIHRpbGUgd2lsbCBiZSBjaG9zZW4uXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHNoaXAgPSBwbGFjZVNoaXAobGVuLCB7IG9yaWdpbiwgZGlyZWN0aW9uIH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBlcnIubWVzc2FnZSA9PT0gR2FtZWJvYXJkRXJyb3JzLnByb3hpbWl0eSB8fFxuICAgICAgICAgICAgZXJyLm1lc3NhZ2UgPT09IFNoaXBFcnJvcnMuaW52YWxpZFNoaXBQb3NpdGlvblxuICAgICAgICAgICkge1xuICAgICAgICAgICAgLy8gQXR0ZW1wdHMgbmV4dCBkaXJlY3Rpb25cbiAgICAgICAgICAgIGRpcmVjdGlvbiA9IGRpcmVjdGlvbnNbKytkaXIgJSA0XTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzaGlwO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGlsZSBBIHRpbGUgb24gdGhlIGdyaWQgKGUuZy4gJ0ExJykuXG4gICAqIEByZXR1cm5zIE9iamVjdCBjb250YWluaW5nIHRpbGUgcHJvcGVydGllcy5cbiAgICovXG4gIGNvbnN0IGdldFRpbGUgPSAodGlsZVN0cikgPT4ge1xuICAgIGNvbnN0IHsgcm93LCBjb2wgfSA9IHRvR3JpZENvb3JkKHRpbGVTdHIpO1xuICAgIGlmIChncmlkW3Jvd10gJiYgZ3JpZFtyb3ddW2NvbF0pIHtcbiAgICAgIHJldHVybiBncmlkW3Jvd11bY29sXTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICAvKipcbiAgICogQWxsb3dzIGEgYm9hcmQgdG8gcmVnaXN0ZXIgYSBoaXQgb3IgbWlzcyBmb3IgYSB0aWxlLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGlsZVN0ciBSZXByZXNlbnRzIHRoZSB0aWxlIHRvIGF0dGFjay5cbiAgICogQHJldHVybnMgdHJ1ZSBpZiBzdWNjZXNzZnVsIG9yIGZhbHNlIGlmIHRpbGUgaGFzIGFscmVhZHkgYmVlbiBhdHRhY2tlZC5cbiAgICovXG4gIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAodGlsZVN0cikgPT4ge1xuICAgIGxldCB0aWxlO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgcm93LCBjb2wgfSA9IHRvR3JpZENvb3JkKHRpbGVTdHIpO1xuICAgICAgdGlsZSA9IGdyaWRbcm93XVtjb2xdO1xuICAgIH0gY2F0Y2gge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKEdhbWVib2FyZEVycm9ycy5pbnZhbGlkVGlsZVN0cik7XG4gICAgfVxuXG4gICAgLy8gVGlsZSBoYXMgYWxyZWFkeSBiZWVuIGF0dGFja2VkXG4gICAgaWYgKHRpbGUuc3RhdHVzICE9PSAwKSByZXR1cm4gZmFsc2U7XG5cbiAgICAvLyBIaXRzIGEgc2hpcCBpZiBpdCBvY2N1cGllcyB0aGUgdGlsZSwgb3RoZXJ3aXNlIHRpbGUgaXMgbWFya2VkIGFzIG1pc3NlZFxuICAgIGlmICh0aWxlLnNoaXApIHtcbiAgICAgIHRpbGUuc2hpcC5oaXQoKTtcbiAgICAgIHRpbGUuc3RhdHVzID0gMjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGlsZS5zdGF0dXMgPSAxO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcmV0dXJucyB0cnVlIGlmIG5vIHVuc3VuayBzaGlwcyByZW1haW4sIGZhbHNlIG90aGVyd2lzZS5cbiAgICovXG4gIGNvbnN0IGlzRGVmZWF0ZWQgPSAoKSA9PiB7XG4gICAgaWYgKHNoaXBzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgLy8gQ2hlY2tzIGlmIHRoZXJlIGFyZSBhbnkgdW5zdW5rIHNoaXBzIHJlbWFpbmluZ1xuICAgIGlmIChzaGlwcy5maWx0ZXIoKHNoaXApID0+ICFzaGlwLmlzU3VuaygpKS5sZW5ndGggPiAwKSByZXR1cm4gZmFsc2U7XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICAvKipcbiAgICogQHJldHVybnMgTnVtYmVyIG9mIHNoaXBzIG9uIHRoZSBnYW1lYm9hcmQuXG4gICAqL1xuICBjb25zdCBnZXRTaGlwQ291bnQgPSAoKSA9PiBzaGlwcy5sZW5ndGg7XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgdGhlIHNwZWNpZmllZCBzaGlwIGZyb20gdGhlIGdhbWVib2FyZC5cbiAgICogQHBhcmFtIHtvYmplY3R9IHNoaXAgU2hpcCBvYmplY3QuXG4gICAqL1xuICBjb25zdCByZW1vdmVTaGlwID0gKHNoaXApID0+IHtcbiAgICBpZiAoIXNoaXApIHJldHVybjtcblxuICAgIGNvbnN0IGdyaWRDb29yZCA9IHRvR3JpZENvb3JkKHNoaXAuZ2V0UG9zaXRpb24oKS5vcmlnaW4pO1xuICAgIGNvbnN0IHNoaXBEaXJlY3Rpb24gPSBzaGlwLmdldFBvc2l0aW9uKCkuZGlyZWN0aW9uO1xuICAgIGNvbnN0IHNoaXBMZW5ndGggPSBzaGlwLmdldExlbmd0aCgpO1xuXG4gICAgaWYgKHNoaXBEaXJlY3Rpb24gPT09ICdVUCcpIHtcbiAgICAgIGxldCB7IHJvdywgY29sIH0gPSBncmlkQ29vcmQ7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgcHJlZmVyLWNvbnN0XG4gICAgICBmb3IgKGxldCBpID0gc2hpcExlbmd0aDsgaSA+IDA7IGktLSkge1xuICAgICAgICBncmlkW3Jvd11bY29sXS5zaGlwID0gbnVsbDtcbiAgICAgICAgcm93LS07XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChzaGlwRGlyZWN0aW9uID09PSAnRE9XTicpIHtcbiAgICAgIGxldCB7IHJvdywgY29sIH0gPSBncmlkQ29vcmQ7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgcHJlZmVyLWNvbnN0XG4gICAgICBmb3IgKGxldCBpID0gc2hpcExlbmd0aDsgaSA+IDA7IGktLSkge1xuICAgICAgICBncmlkW3Jvd11bY29sXS5zaGlwID0gbnVsbDtcbiAgICAgICAgcm93Kys7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChzaGlwRGlyZWN0aW9uID09PSAnTEVGVCcpIHtcbiAgICAgIGxldCB7IHJvdywgY29sIH0gPSBncmlkQ29vcmQ7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgcHJlZmVyLWNvbnN0XG4gICAgICBmb3IgKGxldCBpID0gc2hpcExlbmd0aDsgaSA+IDA7IGktLSkge1xuICAgICAgICBncmlkW3Jvd11bY29sXS5zaGlwID0gbnVsbDtcbiAgICAgICAgY29sLS07XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChzaGlwRGlyZWN0aW9uID09PSAnUklHSFQnKSB7XG4gICAgICBsZXQgeyByb3csIGNvbCB9ID0gZ3JpZENvb3JkOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHByZWZlci1jb25zdFxuICAgICAgZm9yIChsZXQgaSA9IHNoaXBMZW5ndGg7IGkgPiAwOyBpLS0pIHtcbiAgICAgICAgZ3JpZFtyb3ddW2NvbF0uc2hpcCA9IG51bGw7XG4gICAgICAgIGNvbCsrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHNoaXBzLnNwbGljZShzaGlwcy5pbmRleE9mKHNoaXApLCAxKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHBsYWNlU2hpcCxcbiAgICBnZXRUaWxlLFxuICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgaXNEZWZlYXRlZCxcbiAgICBnZXRTaGlwQ291bnQsXG4gICAgcmVtb3ZlU2hpcCxcbiAgICBwbGFjZVNoaXBSYW5kb20sXG4gICAgY2hlY2tQcm94aW1pdHksXG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWVib2FyZDtcbiIsImNvbnN0IHsgdG9HcmlkQ29vcmQsIHRvVGlsZVN0ciB9ID0gcmVxdWlyZSgnLi4vdXRpbGl0eS9zdHJpbmdDb252ZXJzaW9uJyk7XG5jb25zdCB7IFBsYXllckVycm9ycyB9ID0gcmVxdWlyZSgnLi4vdXRpbGl0eS9lcnJvcnMnKTtcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgcGxheWVyLiBJZiBubyBuYW1lIGlzIGdpdmVuLCBhIGNvbXB1dGVyIHBsYXllciB3aWxsIGJlIHNldCB1cC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBuIFBsYXllciBuYW1lLiBJZiBlbXB0eSwgcGxheWVyIGJlY29tZXMgYSBjb21wdXRlci5cbiAqIEByZXR1cm5zIFRoZSBQbGF5ZXIgaW50ZXJmYWNlLlxuICovXG5jb25zdCBQbGF5ZXIgPSAobikgPT4ge1xuICBjb25zdCBuYW1lID0gbiB8fCAnQ29tcHV0ZXInO1xuXG4gIC8vIFBvcHVsYXRlcyB2YWxpZCBtb3ZlcyBmb3IgdGhlIHBsYXllclxuICBjb25zdCBtb3ZlcyA9IFtdO1xuICBmb3IgKGxldCBjaGFyID0gNjU7IGNoYXIgPD0gNzQ7IGNoYXIrKykge1xuICAgIGZvciAobGV0IG51bSA9IDE7IG51bSA8PSAxMDsgbnVtKyspIHtcbiAgICAgIG1vdmVzLnB1c2goU3RyaW5nLmZyb21DaGFyQ29kZShjaGFyKS5jb25jYXQobnVtLnRvU3RyaW5nKCkpKTtcbiAgICB9XG4gIH1cblxuICAvLyBDb250YWlucyB0aGUgbmV4dCBhdHRhY2tzIGEgY29tcHV0ZXIgcGxheWVyIHNob3VsZCBtYWtlIGJhc2VkIG9uIHRpbGVzIHRoYXQgaGl0XG4gIGNvbnN0IG5leHRBdHRhY2tzID0gW107XG5cbiAgbGV0IGZpcnN0SGl0ID0gbnVsbDtcblxuICAvKipcbiAgICogQWRkcyB0aGUgbmV4dCBhdHRhY2tzIHRoYXQgdGhlIGNvbXB1dGVyIHNob3VsZCBtYWtlIGlmIHRoZSB0aWxlU3RyIHJlcHJlc2VudHMgYSBoaXQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0aWxlU3RyIFN0cmluZyB0aGF0IHJlcHJlc2VudHMgYSB0aWxlIChlLmcuICdBMScpLlxuICAgKiBAcGFyYW0ge09iamVjdH0gZ2FtZWJvYXJkIEdhbWVib2FyZCBvYmplY3QuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbZGlyXSBEaXJlY3Rpb24gdG8gbGltaXQgYXR0YWNrcyB0by5cbiAgICovXG4gIGNvbnN0IHNldE5leHRBdHRhY2tzID0gKHRpbGVTdHIsIGdhbWVib2FyZCwgZGlyID0gbnVsbCkgPT4ge1xuICAgIGxldCBvcmllbnRhdGlvbiA9IG51bGw7XG4gICAgaWYgKGRpciA9PT0gJ1VQJyB8fCBkaXIgPT09ICdET1dOJykge1xuICAgICAgb3JpZW50YXRpb24gPSAnVkVSVElDQUwnO1xuICAgIH0gZWxzZSBpZiAoZGlyID09PSAnTEVGVCcgfHwgZGlyID09PSAnUklHSFQnKSB7XG4gICAgICBvcmllbnRhdGlvbiA9ICdIT1JJWk9OVEFMJztcbiAgICB9IGVsc2UgaWYgKGRpcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFBsYXllckVycm9ycy5pbnZhbGlkRGlyZWN0aW9uKTtcbiAgICB9XG5cbiAgICBjb25zdCB7IHJvdywgY29sIH0gPSB0b0dyaWRDb29yZCh0aWxlU3RyKTtcbiAgICBuZXh0QXR0YWNrcy5zcGxpY2UoMCk7XG5cbiAgICBpZiAoIW9yaWVudGF0aW9uIHx8IG9yaWVudGF0aW9uID09PSAnVkVSVElDQUwnKSB7XG4gICAgICAvLyBDaGVja3MgdXBcbiAgICAgIGxldCB0aWxlID0gZ2FtZWJvYXJkLmdldFRpbGUodG9UaWxlU3RyKHJvdyAtIDEsIGNvbCkpO1xuICAgICAgaWYgKHRpbGUgJiYgdGlsZS5zdGF0dXMgPT09IDApIHtcbiAgICAgICAgbmV4dEF0dGFja3MucHVzaCh0b1RpbGVTdHIocm93IC0gMSwgY29sKSk7XG4gICAgICB9XG5cbiAgICAgIC8vIENoZWNrcyBkb3duXG4gICAgICB0aWxlID0gZ2FtZWJvYXJkLmdldFRpbGUodG9UaWxlU3RyKHJvdyArIDEsIGNvbCkpO1xuICAgICAgaWYgKHRpbGUgJiYgdGlsZS5zdGF0dXMgPT09IDApIHtcbiAgICAgICAgbmV4dEF0dGFja3MucHVzaCh0b1RpbGVTdHIocm93ICsgMSwgY29sKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFvcmllbnRhdGlvbiB8fCBvcmllbnRhdGlvbiA9PT0gJ0hPUklaT05UQUwnKSB7XG4gICAgICAvLyBDaGVja3MgdG8gdGhlIHJpZ2h0XG4gICAgICBsZXQgdGlsZSA9IGdhbWVib2FyZC5nZXRUaWxlKHRvVGlsZVN0cihyb3csIGNvbCArIDEpKTtcbiAgICAgIGlmICh0aWxlICYmIHRpbGUuc3RhdHVzID09PSAwKSB7XG4gICAgICAgIG5leHRBdHRhY2tzLnB1c2godG9UaWxlU3RyKHJvdywgY29sICsgMSkpO1xuICAgICAgfVxuXG4gICAgICAvLyBDaGVja3MgdG8gdGhlIGxlZnRcbiAgICAgIHRpbGUgPSBnYW1lYm9hcmQuZ2V0VGlsZSh0b1RpbGVTdHIocm93LCBjb2wgLSAxKSk7XG4gICAgICBpZiAodGlsZSAmJiB0aWxlLnN0YXR1cyA9PT0gMCkge1xuICAgICAgICBuZXh0QXR0YWNrcy5wdXNoKHRvVGlsZVN0cihyb3csIGNvbCAtIDEpKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEVsaW1pbmF0ZXMgdmFsaWQgbW92ZXMgZnJvbSB0aGUgbW92ZXMgYXJyYXkuIFVzZWQgZm9yIHdoZW4gYSBzaGlwIGlzIHN1bmsgdG8gYWxsb3cgdGhlXG4gICAqIGNvbXB1dGVyIHRvIG1ha2UgYmV0dGVyIGNob2ljZXMuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBzaGlwIFNoaXAgb2JqZWN0LlxuICAgKiBAcGFyYW0ge09iamVjdH0gZ2FtZWJvYXJkIEdhbWVib2FyZCBvYmplY3QuXG4gICAqL1xuICBjb25zdCBkZWxldGVNb3Zlc05lYXJTaGlwID0gKHNoaXAsIGdhbWVib2FyZCkgPT4ge1xuICAgIGNvbnN0IHNoaXBMZW5ndGggPSBzaGlwLmdldExlbmd0aCgpO1xuICAgIGNvbnN0IHNoaXBEaXJlY3Rpb24gPSBzaGlwLmdldFBvc2l0aW9uKCkuZGlyZWN0aW9uO1xuICAgIGNvbnN0IHNoaXBPcmlnaW4gPSBzaGlwLmdldFBvc2l0aW9uKCkub3JpZ2luO1xuXG4gICAgbGV0IHsgcm93LCBjb2wgfSA9IHRvR3JpZENvb3JkKHNoaXBPcmlnaW4pO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSsrKSB7XG4gICAgICBmb3IgKGxldCByID0gcm93IC0gMTsgciA8PSByb3cgKyAxOyByKyspIHtcbiAgICAgICAgZm9yIChsZXQgYyA9IGNvbCAtIDE7IGMgPD0gY29sICsgMTsgYysrKSB7XG4gICAgICAgICAgY29uc3QgdGlsZSA9IGdhbWVib2FyZC5nZXRUaWxlKHRvVGlsZVN0cihyLCBjKSk7XG4gICAgICAgICAgaWYgKHRpbGUpIHtcbiAgICAgICAgICAgIGNvbnN0IG1vdmVzSW5kZXggPSBtb3Zlcy5pbmRleE9mKHRvVGlsZVN0cihyLCBjKSk7XG4gICAgICAgICAgICBpZiAobW92ZXNJbmRleCA+PSAwKSB7XG4gICAgICAgICAgICAgIG1vdmVzLnNwbGljZShtb3Zlc0luZGV4LCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHNoaXBEaXJlY3Rpb24gPT09ICdVUCcpIHtcbiAgICAgICAgcm93LS07XG4gICAgICB9IGVsc2UgaWYgKHNoaXBEaXJlY3Rpb24gPT09ICdSSUdIVCcpIHtcbiAgICAgICAgY29sKys7XG4gICAgICB9IGVsc2UgaWYgKHNoaXBEaXJlY3Rpb24gPT09ICdET1dOJykge1xuICAgICAgICByb3crKztcbiAgICAgIH0gZWxzZSBpZiAoc2hpcERpcmVjdGlvbiA9PT0gJ0xFRlQnKSB7XG4gICAgICAgIGNvbC0tO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQHJldHVybnMgVGhlIHBsYXllcidzIG5hbWUuXG4gICAqL1xuICBjb25zdCBnZXROYW1lID0gKCkgPT4gbmFtZTtcblxuICAvKipcbiAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgcGxheWVyIG9iamVjdCByZXByZXNlbnRzIGEgaHVtYW4gcGxheWVyLlxuICAgKi9cbiAgY29uc3QgaXNIdW1hbiA9ICgpID0+ICEhbjtcblxuICAvKipcbiAgICogQWxsb3dzIGEgcGxheWVyIHRvIGF0dGFjayBhIGdhbWVib2FyZCBhdCBhIHNwZWNpZmljIHRpbGUgb3IgYXQgYSByYW5kb21cbiAgICogdGlsZS5cbiAgICogQHBhcmFtIHtvYmplY3R9IGdhbWVib2FyZCBUaGUgZ2FtZWJvYXJkIHRvIGF0dGFjay5cbiAgICogQHBhcmFtIHtzdHJpbmd9IFt0aWxlU3RyXSBUaGUgdGlsZSB0byBhdHRhY2sgKGUuZy4gJ0ExJykuIElmIG9taXR0ZWQsIGEgcmFuZG9tIGF0dGFjayBpcyBtYWRlLlxuICAgKiBAcmV0dXJucyBUaGUgdGlsZSB0aGF0IHdhcyBhdHRhY2tlZC5cbiAgICovXG4gIGNvbnN0IGF0dGFjayA9IChnYW1lYm9hcmQsIHRpbGVTdHIgPSBudWxsKSA9PiB7XG4gICAgLy8gUGxheWVyIGF0dGFja3MgYSBzcGVjaWZpYyB0aWxlXG4gICAgaWYgKHRpbGVTdHIpIHJldHVybiBnYW1lYm9hcmQucmVjZWl2ZUF0dGFjayh0aWxlU3RyKSA/IHRpbGVTdHIgOiBudWxsO1xuXG4gICAgLy8gQ2hlY2tzIGlmIGNvbXB1dGVyIGNhbiBtYWtlIGFkZGl0aW9uYWwgbW92ZXNcbiAgICBpZiAobW92ZXMubGVuZ3RoID09PSAwKSB0aHJvdyBuZXcgRXJyb3IoUGxheWVyRXJyb3JzLm5vVmFsaWRNb3Zlcyk7XG5cbiAgICAvLyBDb21wdXRlciBwbGF5ZXIgY2hvb3NlcyBhbiBhdHRhY2sgZnJvbSB0aGUgbmV4dEF0dGFja3MgYXJyYXkgaWYgbm90IGVtcHR5XG4gICAgaWYgKG5leHRBdHRhY2tzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbmV4dEF0dGFja3MubGVuZ3RoKTtcbiAgICAgIGNvbnN0IG5leHRUaWxlU3RyID0gbmV4dEF0dGFja3NbcmFuZG9tSW5kZXhdO1xuICAgICAgaWYgKCFnYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhuZXh0VGlsZVN0cikpIHRocm93IG5ldyBFcnJvcihQbGF5ZXJFcnJvcnMuY29tcEF0dGFja0ZhaWxlZCk7XG5cbiAgICAgIC8vIFJlbW92ZXMgdGhlIGF0dGFja2VkIHRpbGUgZnJvbSBmdXR1cmUgb3B0aW9uc1xuICAgICAgbW92ZXMuc3BsaWNlKG1vdmVzLmluZGV4T2YobmV4dFRpbGVTdHIpLCAxKTtcbiAgICAgIG5leHRBdHRhY2tzLnNwbGljZShyYW5kb21JbmRleCwgMSk7XG5cbiAgICAgIGNvbnN0IGF0dGFja2VkVGlsZSA9IGdhbWVib2FyZC5nZXRUaWxlKG5leHRUaWxlU3RyKTtcbiAgICAgIGlmIChhdHRhY2tlZFRpbGUuc3RhdHVzID09PSAyICYmICFhdHRhY2tlZFRpbGUuc2hpcC5pc1N1bmsoKSkge1xuICAgICAgICAvLyBBdHRhY2sgd2FzIGEgaGl0LCB1cGRhdGluZyBuZXh0IGF0dGFja3MgYmFzZWQgb24gc2hpcCBkaXJlY3Rpb25cbiAgICAgICAgc2V0TmV4dEF0dGFja3MobmV4dFRpbGVTdHIsIGdhbWVib2FyZCwgYXR0YWNrZWRUaWxlLnNoaXAuZ2V0UG9zaXRpb24oKS5kaXJlY3Rpb24pO1xuXG4gICAgICAgIGlmIChuZXh0QXR0YWNrcy5sZW5ndGggPT09IDAgJiYgIWdhbWVib2FyZC5nZXRUaWxlKGZpcnN0SGl0KS5zaGlwLmlzU3VuaygpKSB7XG4gICAgICAgICAgLy8gRW5kIG9mIHNoaXAgcmVhY2hlZCBhbmQgbm8gbmV4dCBhdHRhY2tzIGF2YWlsYWJsZSwgYXR0YWNraW5nIGluIG90aGVyIGRpcmVjdGlvblxuICAgICAgICAgIHNldE5leHRBdHRhY2tzKFxuICAgICAgICAgICAgZmlyc3RIaXQsXG4gICAgICAgICAgICBnYW1lYm9hcmQsXG4gICAgICAgICAgICBnYW1lYm9hcmQuZ2V0VGlsZShmaXJzdEhpdCkuc2hpcC5nZXRQb3NpdGlvbigpLmRpcmVjdGlvblxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoYXR0YWNrZWRUaWxlLnN0YXR1cyA9PT0gMiAmJiBhdHRhY2tlZFRpbGUuc2hpcC5pc1N1bmsoKSkge1xuICAgICAgICAvLyBTaGlwIHdhcyBzdW5rLCBjbGVhcnMgbmV4dCBhdHRhY2tzIHRvIGFsbG93IHJhbmRvbSBhdHRhY2tzIG9uIHRpbGVzIGFnYWluXG4gICAgICAgIGZpcnN0SGl0ID0gbnVsbDtcbiAgICAgICAgbmV4dEF0dGFja3Muc3BsaWNlKDApO1xuICAgICAgICBkZWxldGVNb3Zlc05lYXJTaGlwKGF0dGFja2VkVGlsZS5zaGlwLCBnYW1lYm9hcmQpO1xuICAgICAgfSBlbHNlIGlmIChuZXh0QXR0YWNrcy5sZW5ndGggPT09IDAgJiYgIWdhbWVib2FyZC5nZXRUaWxlKGZpcnN0SGl0KS5zaGlwLmlzU3VuaygpKSB7XG4gICAgICAgIC8vIExhc3QgYXR0YWNrIG1pc3NlZCBhbmQgbm8gbmV4dCBhdHRhY2tzIGF2YWlsYWJsZSwgYXR0YWNraW5nIGluIG90aGVyIGRpcmVjdGlvblxuICAgICAgICBzZXROZXh0QXR0YWNrcyhcbiAgICAgICAgICBmaXJzdEhpdCxcbiAgICAgICAgICBnYW1lYm9hcmQsXG4gICAgICAgICAgZ2FtZWJvYXJkLmdldFRpbGUoZmlyc3RIaXQpLnNoaXAuZ2V0UG9zaXRpb24oKS5kaXJlY3Rpb25cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXh0VGlsZVN0cjtcbiAgICB9XG5cbiAgICAvLyBDb21wdXRlciBwbGF5ZXIgYXR0YWNrcyByYW5kb20gdGlsZVxuICAgIGNvbnN0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbW92ZXMubGVuZ3RoKTtcbiAgICBjb25zdCByYW5kb21UaWxlID0gbW92ZXMuYXQocmFuZG9tSW5kZXgpO1xuICAgIGlmICghZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2socmFuZG9tVGlsZSkpIHRocm93IG5ldyBFcnJvcihQbGF5ZXJFcnJvcnMuY29tcEF0dGFja0ZhaWxlZCk7XG5cbiAgICAvLyBDaGVja3MgaWYgY29tcHV0ZXIgaGl0IGEgc2hpcFxuICAgIGlmIChnYW1lYm9hcmQuZ2V0VGlsZShyYW5kb21UaWxlKS5zdGF0dXMgPT09IDIpIHtcbiAgICAgIC8vIEFsbG93cyBjb21wdXRlciB0byBjaG9vc2UgdGlsZXMgbmVhciBkYW1hZ2VkIHNoaXBcbiAgICAgIGZpcnN0SGl0ID0gcmFuZG9tVGlsZTtcbiAgICAgIHNldE5leHRBdHRhY2tzKHJhbmRvbVRpbGUsIGdhbWVib2FyZCk7XG4gICAgfVxuXG4gICAgbW92ZXMuc3BsaWNlKHJhbmRvbUluZGV4LCAxKTtcbiAgICByZXR1cm4gcmFuZG9tVGlsZTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdldE5hbWUsXG4gICAgaXNIdW1hbixcbiAgICBhdHRhY2ssXG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBsYXllcjtcbiIsIi8qKlxuICogQ2hlY2tzIGlmIHRoZSBnaXZlbiBwb3NpdGlvbiBjb25mb3JtcyB0byB0aGUgZXhwZWN0ZWQgc3RydWN0dXJlIGFuZCB2YWx1ZXNcbiAqIEBwYXJhbSB7bnVtYmVyfSBsZW4gU2hpcCBsZW5ndGhcbiAqIEBwYXJhbSB7b2JqZWN0fSBwb3MgU2hpcCBwb3NpdGlvblxuICogQHJldHVybnMgdHJ1ZSBpZiBwb3NpdGlvbiBpcyB2YWxpZCwgZmFsc2Ugb3RoZXJ3aXNlXG4gKi9cbmNvbnN0IHBvc0lzVmFsaWQgPSAobGVuLCBwb3MpID0+IHtcbiAgdHJ5IHtcbiAgICAvLyBDaGVjayBvcmlnaW5cbiAgICBjb25zdCBvcmlnaW5MZXR0ZXIgPSBwb3Mub3JpZ2luLnNsaWNlKDAsIDEpLnRvVXBwZXJDYXNlKCk7XG4gICAgY29uc3Qgb3JpZ2luTnVtID0gcGFyc2VJbnQocG9zLm9yaWdpbi5zbGljZSgxKSwgMTApO1xuICAgIGlmICghb3JpZ2luTGV0dGVyLm1hdGNoKC9bQS1KXS8pIHx8ICEob3JpZ2luTnVtID49IDEgJiYgb3JpZ2luTnVtIDw9IDEwKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIENoZWNrIGRpcmVjdGlvblxuICAgIGNvbnN0IGRpcmVjdGlvbiA9IHBvcy5kaXJlY3Rpb24udG9VcHBlckNhc2UoKTtcbiAgICBpZiAoXG4gICAgICBkaXJlY3Rpb24gIT09ICdVUCcgJiZcbiAgICAgIGRpcmVjdGlvbiAhPT0gJ0RPV04nICYmXG4gICAgICBkaXJlY3Rpb24gIT09ICdMRUZUJyAmJlxuICAgICAgZGlyZWN0aW9uICE9PSAnUklHSFQnXG4gICAgKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgb3ZlcmZsb3dcbiAgICBpZiAoXG4gICAgICAoZGlyZWN0aW9uID09PSAnVVAnICYmIG9yaWdpbkxldHRlci5jaGFyQ29kZUF0KDApIC0gKGxlbiAtIDEpIDwgNjUpIHx8XG4gICAgICAoZGlyZWN0aW9uID09PSAnRE9XTicgJiYgb3JpZ2luTGV0dGVyLmNoYXJDb2RlQXQoMCkgKyAobGVuIC0gMSkgPiA3NCkgfHxcbiAgICAgIChkaXJlY3Rpb24gPT09ICdMRUZUJyAmJiBvcmlnaW5OdW0gLSAobGVuIC0gMSkgPCAxKSB8fFxuICAgICAgKGRpcmVjdGlvbiA9PT0gJ1JJR0hUJyAmJiBvcmlnaW5OdW0gKyAobGVuIC0gMSkgPiAxMClcbiAgICApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxuLyoqXG4gKiBTaGlwIGZhY3RvcnkgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge251bWJlcn0gbGVuIExlbmd0aCBvZiBzaGlwIGZyb20gYmUgaW4gcmFuZ2UgWzItNV0uXG4gKiBAcGFyYW0ge29iamVjdH0gcG9zIFBvc2l0aW9uIG11c3QgY29udGFpbiBvcmlnaW4gYW5kIGRpcmVjdGlvbiBwcm9wZXJ0aWVzLlxuICogQHJldHVybnMgQW4gaW50ZXJmYWNlIGZvciB0aGUgc2hpcC5cbiAqL1xuY29uc3QgU2hpcCA9IChsZW4sIHBvcykgPT4ge1xuICBpZiAoIU51bWJlci5pc0ludGVnZXIobGVuKSB8fCBsZW4gPCAyIHx8IGxlbiA+IDUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgc2hpcCBsZW5ndGgnKTtcbiAgfVxuXG4gIGlmICghcG9zSXNWYWxpZChsZW4sIHBvcykpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgc2hpcCBwb3NpdGlvbicpO1xuICB9XG5cbiAgLy8gSW5pdGlhbGl6ZSB2YWx1ZXNcbiAgY29uc3QgbGVuZ3RoID0gbGVuO1xuICBjb25zdCBwb3NpdGlvbiA9IHtcbiAgICBvcmlnaW46IHBvcy5vcmlnaW4udG9VcHBlckNhc2UoKSxcbiAgICBkaXJlY3Rpb246IHBvcy5kaXJlY3Rpb24udG9VcHBlckNhc2UoKSxcbiAgfTtcbiAgbGV0IGhpdHMgPSAwO1xuXG4gIC8qKlxuICAgKiBAcmV0dXJucyBMZW5ndGggb2YgdGhlIHNoaXAuXG4gICAqL1xuICBjb25zdCBnZXRMZW5ndGggPSAoKSA9PiBsZW5ndGg7XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIE51bWJlciBvZiBlbmVteSBoaXRzIG9uIHRoZSBzaGlwLlxuICAgKi9cbiAgY29uc3QgZ2V0SGl0cyA9ICgpID0+IGhpdHM7XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIHRydWUgaWYgdGhlIHNoaXAgaGFzIHN1bmssIGZhbHNlIG90aGVyd2lzZS5cbiAgICovXG4gIGNvbnN0IGlzU3VuayA9ICgpID0+IHtcbiAgICBpZiAoaGl0cyA+PSBsZW5ndGgpIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICAvKipcbiAgICogQHJldHVybnMgQW4gb2JqZWN0IHJlcHJlc2VudGluZyB0aGUgcG9zaXRpb24gb2YgYSBzaGlwLlxuICAgKi9cbiAgY29uc3QgZ2V0UG9zaXRpb24gPSAoKSA9PiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHBvc2l0aW9uKSk7XG5cbiAgLyoqXG4gICAqIEluY3JlbWVudHMgdGhlIGhpdCBjb3VudGVyIGZvciB0aGUgc2hpcC5cbiAgICovXG4gIGNvbnN0IGhpdCA9ICgpID0+IHtcbiAgICBoaXRzICs9IDE7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXRMZW5ndGgsXG4gICAgZ2V0SGl0cyxcbiAgICBpc1N1bmssXG4gICAgZ2V0UG9zaXRpb24sXG4gICAgaGl0LFxuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBTaGlwO1xuIiwiY29uc3QgR2FtZWJvYXJkRXJyb3JzID0ge1xuICBwcm94aW1pdHk6ICdTaGlwIGNhbm5vdCBiZSBwbGFjZWQgdG9vIGNsb3NlIHRvIG90aGVycycsXG4gIGludmFsaWRUaWxlU3RyOiAnSW52YWxpZCB0aWxlIHN0cmluZycsXG4gIG1pc3NpbmdMZW5ndGhBcmc6ICdNaXNzaW5nIGxlbmd0aCBhcmd1bWVudCcsXG4gIG1heFNoaXBDb3VudDogJ01heCBzaGlwIGNvdW50IHJlYWNoZWQnLFxufTtcblxuY29uc3QgU2hpcEVycm9ycyA9IHtcbiAgaW52YWxpZFNoaXBMZW5ndGg6ICdJbnZhbGlkIHNoaXAgbGVuZ3RoJyxcbiAgaW52YWxpZFNoaXBQb3NpdGlvbjogJ0ludmFsaWQgc2hpcCBwb3NpdGlvbicsXG59O1xuXG5jb25zdCBQbGF5ZXJFcnJvcnMgPSB7XG4gIG5vVmFsaWRNb3ZlczogJ05vIHZhbGlkIG1vdmVzIHJlbWFpbmluZycsXG4gIGNvbXBBdHRhY2tGYWlsZWQ6ICdDb21wdXRlciBhdHRhY2sgZmFpbGVkJyxcbiAgaW52YWxpZERpcmVjdGlvbjogJ0ludmFsaWQgZGlyZWN0aW9uJyxcbn07XG5cbm1vZHVsZS5leHBvcnRzID0geyBHYW1lYm9hcmRFcnJvcnMsIFNoaXBFcnJvcnMsIFBsYXllckVycm9ycyB9O1xuIiwiLyoqXG4gKiBDb252ZXJ0cyBhIHRpbGUgc3RyaW5nIHRvIGFycmF5IGluZGV4ZXMgZm9yIHRoZSBncmlkLlxuICogQHBhcmFtIHtzdHJpbmd9IHRpbGVTdHIgUmVwcmVzZW50cyBhIHRpbGUgKGUuZy4gJ0ExJykuXG4gKiBAcmV0dXJucyBPYmplY3Qgd2l0aCAncm93JyBhbmQgJ2NvbCcgcHJvcGVydGllcy5cbiAqL1xuY29uc3QgdG9HcmlkQ29vcmQgPSAodGlsZVN0cikgPT4ge1xuICAvLyBDb252ZXJ0IHJvdyBzdWJzdHJpbmcgdG8gdXBwZXJjYXNlIEFTQ0lJIGNvZGUgYW5kIHN1YnRyYWN0IDY1XG4gIGNvbnN0IHJvdyA9IHRpbGVTdHIuc2xpY2UoMCwgMSkudG9VcHBlckNhc2UoKS5jaGFyQ29kZUF0KDApIC0gNjU7XG4gIGNvbnN0IGNvbCA9IHBhcnNlSW50KHRpbGVTdHIuc2xpY2UoMSksIDEwKSAtIDE7XG4gIHJldHVybiB7IHJvdywgY29sIH07XG59O1xuXG4vKipcbiAqIENvbnZlcnRzIGFycmF5IGluZGV4ZXMgdG8gYSB0aWxlIHN0cmluZ1xuICogQHBhcmFtIHJvdyBSb3cgaW5kZXhcbiAqIEBwYXJhbSBjb2wgQ29sdW1uIGluZGV4XG4gKiBAcmV0dXJucyBBIHRpbGUgc3RyaW5nIChlLmcuICdBMScpXG4gKi9cbmNvbnN0IHRvVGlsZVN0ciA9IChyb3csIGNvbCkgPT4gU3RyaW5nLmZyb21DaGFyQ29kZSg2NSArIHJvdykuY29uY2F0KGAke2NvbCArIDF9YCk7XG5cbi8qKlxuICogQ29udmVydHMgYSBzdGF0dXMgbnVtYmVyIGZyb20gYSB0aWxlIHRvIGEgc3RyaW5nIGRlc2NyaXB0aW9uLlxuICogQHBhcmFtIHtudW1iZXJ9IHN0YXR1cyAwID0gdW5rbm93biwgMSA9IG1pc3NlZCwgMiA9IGhpdFxuICovXG5jb25zdCBzdGF0dXNUb1N0cmluZyA9IChzdGF0dXMpID0+IHtcbiAgaWYgKHN0YXR1cyA9PT0gMSkge1xuICAgIHJldHVybiAnbWlzc2VkJztcbiAgfVxuXG4gIGlmIChzdGF0dXMgPT09IDIpIHtcbiAgICByZXR1cm4gJ2hpdCc7XG4gIH1cblxuICByZXR1cm4gJyc7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHsgdG9HcmlkQ29vcmQsIHRvVGlsZVN0ciwgc3RhdHVzVG9TdHJpbmcgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdGxvYWRlZDogZmFsc2UsXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuXHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ubWQgPSAobW9kdWxlKSA9PiB7XG5cdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdHJldHVybiBtb2R1bGU7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlcy9yZXNldC5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9jb250ZW50LmNzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL2dhbWVib2FyZC5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9zaGlwcy5jc3MnO1xuaW1wb3J0IGluaXRpYWxpemUgZnJvbSAnLi9HYW1lQ29udHJvbGxlcic7XG5cbmluaXRpYWxpemUoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==