/*!
 * (The MIT License)
 * 
 * Copyright (c) 2012-2014 Marcin Warpechowski
 * Copyright (c) 2015 Handsoncode sp. z o.o. <hello@handsoncode.net>
 * 
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * 'Software'), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 * 
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
 * CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("../../handsontable"));
	else if(typeof define === 'function' && define.amd)
		define(["../../handsontable"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("../../handsontable")) : factory(root["Handsontable"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
/**
 * Constants for parts of translation.
 */

var CONTEXTMENU_ITEMS_ROW_ABOVE = exports.CONTEXTMENU_ITEMS_ROW_ABOVE = 'ContextMenu:items.insertRowAbove';
var CONTEXTMENU_ITEMS_ROW_BELOW = exports.CONTEXTMENU_ITEMS_ROW_BELOW = 'ContextMenu:items.insertRowBelow';
var CONTEXTMENU_ITEMS_INSERT_LEFT = exports.CONTEXTMENU_ITEMS_INSERT_LEFT = 'ContextMenu:items.insertColumnOnTheLeft';
var CONTEXTMENU_ITEMS_INSERT_RIGHT = exports.CONTEXTMENU_ITEMS_INSERT_RIGHT = 'ContextMenu:items.insertColumnOnTheRight';
var CONTEXTMENU_ITEMS_REMOVE_ROW = exports.CONTEXTMENU_ITEMS_REMOVE_ROW = 'ContextMenu:items.removeRow';
var CONTEXTMENU_ITEMS_REMOVE_COLUMN = exports.CONTEXTMENU_ITEMS_REMOVE_COLUMN = 'ContextMenu:items.removeColumn';
var CONTEXTMENU_ITEMS_UNDO = exports.CONTEXTMENU_ITEMS_UNDO = 'ContextMenu:items.undo';
var CONTEXTMENU_ITEMS_REDO = exports.CONTEXTMENU_ITEMS_REDO = 'ContextMenu:items.redo';
var CONTEXTMENU_ITEMS_READ_ONLY = exports.CONTEXTMENU_ITEMS_READ_ONLY = 'ContextMenu:items.readOnly';

var CONTEXTMENU_ITEMS_ALIGNMENT = exports.CONTEXTMENU_ITEMS_ALIGNMENT = 'ContextMenu:items.align';
var CONTEXTMENU_ITEMS_ALIGNMENT_LEFT = exports.CONTEXTMENU_ITEMS_ALIGNMENT_LEFT = 'ContextMenu:items.align.left';
var CONTEXTMENU_ITEMS_ALIGNMENT_CENTER = exports.CONTEXTMENU_ITEMS_ALIGNMENT_CENTER = 'ContextMenu:items.align.center';
var CONTEXTMENU_ITEMS_ALIGNMENT_RIGHT = exports.CONTEXTMENU_ITEMS_ALIGNMENT_RIGHT = 'ContextMenu:items.align.right';
var CONTEXTMENU_ITEMS_ALIGNMENT_JUSTIFY = exports.CONTEXTMENU_ITEMS_ALIGNMENT_JUSTIFY = 'ContextMenu:items.align.justify';
var CONTEXTMENU_ITEMS_ALIGNMENT_TOP = exports.CONTEXTMENU_ITEMS_ALIGNMENT_TOP = 'ContextMenu:items.align.top';
var CONTEXTMENU_ITEMS_ALIGNMENT_MIDDLE = exports.CONTEXTMENU_ITEMS_ALIGNMENT_MIDDLE = 'ContextMenu:items.align.middle';
var CONTEXTMENU_ITEMS_ALIGNMENT_BOTTOM = exports.CONTEXTMENU_ITEMS_ALIGNMENT_BOTTOM = 'ContextMenu:items.align.bottom';

var CONTEXTMENU_ITEMS_CLEAR_COLUMN = exports.CONTEXTMENU_ITEMS_CLEAR_COLUMN = 'ContextMenu:items.clearColumn';
var CONTEXTMENU_ITEMS_COPY = exports.CONTEXTMENU_ITEMS_COPY = 'ContextMenu:items.copy';
var CONTEXTMENU_ITEMS_CUT = exports.CONTEXTMENU_ITEMS_CUT = 'ContextMenu:items.cut';

var FILTERS_CONDITIONS_NONE = exports.FILTERS_CONDITIONS_NONE = 'Filters:conditions.none';
var FILTERS_CONDITIONS_EMPTY = exports.FILTERS_CONDITIONS_EMPTY = 'Filters:conditions.isEmpty';
var FILTERS_CONDITIONS_NOT_EMPTY = exports.FILTERS_CONDITIONS_NOT_EMPTY = 'Filters:conditions.isNotEmpty';
var FILTERS_CONDITIONS_EQUAL = exports.FILTERS_CONDITIONS_EQUAL = 'Filters:conditions.isEqualTo';
var FILTERS_CONDITIONS_NOT_EQUAL = exports.FILTERS_CONDITIONS_NOT_EQUAL = 'Filters:conditions.isNotEqualTo';
var FILTERS_CONDITIONS_BEGINS_WITH = exports.FILTERS_CONDITIONS_BEGINS_WITH = 'Filters:conditions.beginsWith';
var FILTERS_CONDITIONS_ENDS_WITH = exports.FILTERS_CONDITIONS_ENDS_WITH = 'Filters:conditions.endsWith';
var FILTERS_CONDITIONS_CONTAINS = exports.FILTERS_CONDITIONS_CONTAINS = 'Filters:conditions.contains';
var FILTERS_CONDITIONS_NOT_CONTAIN = exports.FILTERS_CONDITIONS_NOT_CONTAIN = 'Filters:conditions.doesNotContain';
var FILTERS_CONDITIONS_BY_VALUE = exports.FILTERS_CONDITIONS_BY_VALUE = 'Filters:conditions.byValue';
var FILTERS_CONDITIONS_GREATER_THAN = exports.FILTERS_CONDITIONS_GREATER_THAN = 'Filters:conditions.greaterThan';
var FILTERS_CONDITIONS_GREATER_THAN_OR_EQUAL = exports.FILTERS_CONDITIONS_GREATER_THAN_OR_EQUAL = 'Filters:conditions.greaterThanOrEqualTo';
var FILTERS_CONDITIONS_LESS_THAN = exports.FILTERS_CONDITIONS_LESS_THAN = 'Filters:conditions.lessThan';
var FILTERS_CONDITIONS_LESS_THAN_OR_EQUAL = exports.FILTERS_CONDITIONS_LESS_THAN_OR_EQUAL = 'Filters:conditions.lessThanOrEqualTo';
var FILTERS_CONDITIONS_BETWEEN = exports.FILTERS_CONDITIONS_BETWEEN = 'Filters:conditions.isBetween';
var FILTERS_CONDITIONS_NOT_BETWEEN = exports.FILTERS_CONDITIONS_NOT_BETWEEN = 'Filters:conditions.isNotBetween';
var FILTERS_CONDITIONS_FALSE = exports.FILTERS_CONDITIONS_FALSE = 'Filters:conditions.false';
var FILTERS_CONDITIONS_TRUE = exports.FILTERS_CONDITIONS_TRUE = 'Filters:conditions.true';

var FILTERS_LABELS_FILTER_BY_CONDITION = exports.FILTERS_LABELS_FILTER_BY_CONDITION = 'Filters:labels.filterByCondition';
var FILTERS_LABELS_FILTER_BY_VALUE = exports.FILTERS_LABELS_FILTER_BY_VALUE = 'Filters:labels.filterByValue';
var FILTERS_LABELS_CONJUNCTION = exports.FILTERS_LABELS_CONJUNCTION = 'Filters:labels.conjunction';
var FILTERS_LABELS_DISJUNCTION = exports.FILTERS_LABELS_DISJUNCTION = 'Filters:labels.disjunction';

var FILTERS_BUTTONS_SELECT_ALL = exports.FILTERS_BUTTONS_SELECT_ALL = 'Filters:buttons.searchAll';
var FILTERS_BUTTONS_CLEAR = exports.FILTERS_BUTTONS_CLEAR = 'Filters:buttons.clear';
var FILTERS_BUTTONS_OK = exports.FILTERS_BUTTONS_OK = 'Filters:buttons.ok';
var FILTERS_BUTTONS_CANCEL = exports.FILTERS_BUTTONS_CANCEL = 'Filters:buttons.cancel';

var FILTERS_BUTTONS_PLACEHOLDER_SEARCH = exports.FILTERS_BUTTONS_PLACEHOLDER_SEARCH = 'Filters:buttons.placeholder.search';

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _dictionary;

var _constants = __webpack_require__(0);

var C = _interopRequireWildcard(_constants);

var _handsontable = __webpack_require__(1);

var _handsontable2 = _interopRequireDefault(_handsontable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /**
                                                                                                                                                                                                                   * @preserve
                                                                                                                                                                                                                   * Authors: Wojciech Szymański
                                                                                                                                                                                                                   * Last updated: 12.10.2017
                                                                                                                                                                                                                   *
                                                                                                                                                                                                                   * Description: Definition file for English language.
                                                                                                                                                                                                                   */


var dictionary = (_dictionary = {
  languageCode: 'en-US'
}, _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ROW_ABOVE, 'Insert row above'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ROW_BELOW, 'Insert row below'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_INSERT_LEFT, 'Insert column on the left'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_INSERT_RIGHT, 'Insert column on the right'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REMOVE_ROW, ['Remove row', 'Remove rows']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REMOVE_COLUMN, ['Remove column', 'Remove columns']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_UNDO, 'Undo'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REDO, 'Redo'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_READ_ONLY, 'Read only'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT, 'Alignment'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_LEFT, 'Left'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_CENTER, 'Center'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_RIGHT, 'Right'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_JUSTIFY, 'Justify'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_TOP, 'Top'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_MIDDLE, 'Middle'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_BOTTOM, 'Bottom'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_CLEAR_COLUMN, 'Clear column'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_COPY, 'Copy'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_CUT, 'Cut'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NONE, 'None'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_EMPTY, 'Is Empty'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_EMPTY, 'Is not empty'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_EQUAL, 'Is equal to'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_EQUAL, 'Is not equal to'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_BEGINS_WITH, 'Begins with'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_ENDS_WITH, 'Ends with'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_CONTAINS, 'Contains'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_CONTAIN, 'Does not contain'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_BY_VALUE, 'By value'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_GREATER_THAN, 'Greater than'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_GREATER_THAN_OR_EQUAL, 'Greater than or equal to'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_LESS_THAN, 'Less than'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_LESS_THAN_OR_EQUAL, 'Less than or equal to'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_BETWEEN, 'Is between'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_BETWEEN, 'Is not between'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_FALSE, 'False'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_TRUE, 'True'), _defineProperty(_dictionary, C.FILTERS_LABELS_FILTER_BY_CONDITION, 'Filter by condition'), _defineProperty(_dictionary, C.FILTERS_LABELS_FILTER_BY_VALUE, 'Filter by value'), _defineProperty(_dictionary, C.FILTERS_LABELS_CONJUNCTION, 'And'), _defineProperty(_dictionary, C.FILTERS_LABELS_DISJUNCTION, 'Or'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_SELECT_ALL, 'Select all'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_CLEAR, 'Clear'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_OK, 'OK'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_CANCEL, 'Cancel'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_PLACEHOLDER_SEARCH, 'Search...'), _dictionary);

_handsontable2.default.languages.registerLocaleDictionary(dictionary.languageCode, dictionary);

exports.default = dictionary;

/***/ })
/******/ ])["default"];
});