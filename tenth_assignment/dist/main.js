/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./font/october-moon-font/OctoberMoon-deql.ttf */ \"./src/font/october-moon-font/OctoberMoon-deql.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! images/clouds_background.jpg */ \"./src/images/clouds_background.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\r\\n    font-family: \\\"haunted_moon\\\";\\r\\n    src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n  }\\r\\nhtml, body{\\r\\n    margin:0;\\r\\n    padding:0;\\r\\n    min-height:100%;\\r\\n    min-width: 100%;\\r\\n    background-color:#efaa9e;\\r\\n    z-index:-2;\\r\\n    display:flex;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n    text-align: center; \\r\\n}\\r\\n#content{ \\r\\n    display:block;\\r\\n    position:absolute;\\r\\n    top:0;\\r\\n    z-index:-1;\\r\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \"),  linear-gradient(to bottom, #6b4b88,50%,#bd697d); \\r\\n    min-width:100%;\\r\\n    background-repeat:no-repeat;\\r\\n    background-position: top;\\r\\n    -webkit-mask-image:-webkit-gradient(linear,left top, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)));\\r\\n}\\r\\n#header, #nav, #footer{\\r\\n    position: fixed;\\r\\n    padding:10px;\\r\\n    width:100%;\\r\\n}\\r\\n#header{\\r\\n    top:20px;\\r\\n}\\r\\n#nav{ \\r\\n    top:100px;\\r\\n}\\r\\n#main{\\r\\n    position: fixed;\\r\\n    padding:10px;\\r\\n    top:150px;\\r\\n}\\r\\n\\r\\n\\r\\n\\r\\n#container{\\r\\n\\r\\n    display:grid;\\r\\n    row-gap:20px;\\r\\n    column-gap:20px;\\r\\n    grid-template-columns:auto auto;\\r\\n    text-align: center;  \\r\\n    padding:20px;\\r\\n}\\r\\n#item{\\r\\n    display:flex;\\r\\n    flex-direction: column;\\r\\n    justify-content: space-around;\\r\\n    align-items: center;\\r\\n    background-color: #F0B8DF;\\r\\n    border: 2px solid #EB99EB;\\r\\n    border-radius:10px;\\r\\n    margin:10px;\\r\\n    width: 400px;\\r\\n    max-height: 300px;;\\r\\n  }\\r\\n#item_header{\\r\\n    display:flex;\\r\\n    font-family: \\\"haunted_moon\\\";\\r\\n    font-size:larger;\\r\\n    margin-top: 0.2em;\\r\\n}\\r\\n#item_content{\\r\\n    display:flex;\\r\\n    justify-content: space-around;\\r\\n    align-items: center;\\r\\n    text-align:center;\\r\\n    /*\\r\\n    background-color: #F0B8DF;\\r\\n    border: 2px solid #EB99EB;\\r\\n    */\\r\\n    border-radius:10px;\\r\\n    margin:10px;\\r\\n    width: 98%;\\r\\n    height: 80%\\r\\n}\\r\\nh1{\\r\\n    font-family: haunted_moon;\\r\\n    text-shadow: 2px 4px 4px #EB99EB;\\r\\n    padding:10px;\\r\\n}\\r\\n\\r\\n\\r\\n#leftside{\\r\\n    display:flex;\\r\\n    border-radius:10px;\\r\\n    padding:10px;\\r\\n    margin-left: 10px;\\r\\n    margin-right: 10px;\\r\\n    /*\\r\\n    background-color: #F0B8DF;\\r\\n    */\\r\\n}\\r\\n\\r\\n#rightside{\\r\\n    max-width:50%;\\r\\n    position:relative;\\r\\n    height:auto;\\r\\n    display:flex;\\r\\n    flex-direction:column;\\r\\n    background-color: #EB99EB;\\r\\n    border-radius:10px;\\r\\n    padding:10px;\\r\\n    margin-right: 10px;\\r\\n    padding-top: 30px;\\r\\n    padding-bottom: 30px;\\r\\n}\\r\\n\\r\\nbutton{\\r\\n    background-color: #6B42DD;\\r\\n    padding: 1rem 1.3rem;\\r\\n    border: 2px solid #6B42DD;\\r\\n    color: #ffffff;\\r\\n    font-size: 0.6875rem;\\r\\n    font-weight: 600;\\r\\n    letter-spacing: 0.3rem;\\r\\n    position: relative;\\r\\n    margin-right: 0.1rem;\\r\\n    border-radius:10px;\\r\\n  }\\r\\n\\r\\n  button:hover{\\r\\n    background-color: #EB99EB;\\r\\n  }\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://tenth_assignment/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://tenth_assignment/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://tenth_assignment/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://tenth_assignment/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://tenth_assignment/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://tenth_assignment/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://tenth_assignment/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://tenth_assignment/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://tenth_assignment/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://tenth_assignment/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://tenth_assignment/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _modules_home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/home.js */ \"./src/modules/home.js\");\n/* harmony import */ var _modules_menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/menu.js */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/contact.js */ \"./src/modules/contact.js\");\n/* harmony import */ var _images_clouds_background_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/clouds_background.jpg */ \"./src/images/clouds_background.jpg\");\n\n\n\n\n//import crystalBall from './images/crystal_ball.png'\n\n\n\nfunction createHeader(){\n  const header = document.createElement(\"h1\")\n  header.setAttribute(\"id\", \"header\")\n  header.textContent = \"The Witch's Cauldron\"\n  console.log(\"header created\")\n  return header\n}\n\nfunction createTabs() {\n  const tabs= document.createElement(\"div\");\n  tabs.setAttribute(\"class\",\"tabs\")\n  console.log(\"Tabs created\");\n\n  const tab_home = document.createElement(\"button\")\n  const tab_menu = document.createElement(\"button\")\n  const tab_contact = document.createElement(\"button\")\n  tab_home.setAttribute(\"id\",\"home\")\n  tab_menu.setAttribute(\"id\",\"menu\")\n  tab_contact.setAttribute(\"id\",\"contact\")\n  \n  tab_home.classList.add('tab')\n  tab_menu.classList.add('tab')\n  tab_contact.classList.add('tab')\n\n  tab_home.textContent= \"Home\";\n  tab_menu.textContent = \"Menu\";\n  tab_contact.textContent = \"Contact\";\n\n \n\n  tab_home.onclick = _modules_home_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n  tab_menu.onclick = _modules_menu_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n  tab_contact.onclick = _modules_contact_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\n\n  \n  tabs.appendChild(tab_home)\n  tabs.appendChild(tab_menu)\n  tabs.appendChild(tab_contact)\n\n  return tabs\n}\n\nfunction init(){\n\n  const content = document.getElementById('content');\n  const clouds = new Image();\n  clouds.src = _images_clouds_background_jpg__WEBPACK_IMPORTED_MODULE_4__;\n  content.appendChild(clouds)\n  //const bi = document.getElementsByClassName(\"body\");\n\n  const header =document.getElementById('header')\n  //const main = document.getElementById('main')\n  //main.textContent= \"\"\n\n  /*\n  const footer = document.getElementById('footer')\n  const crystal_ball = new Image()\n  crystal_ball.src = crystalBall;\n  crystal_ball.style.maxWidth=\"20%\";\n  footer.appendChild(crystal_ball);\n  */\n  header.appendChild(createHeader());\n  nav.appendChild(createTabs());\n  \n\n  (0,_modules_home_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n}\n\ninit();\n\n\n//# sourceURL=webpack://tenth_assignment/./src/index.js?");

/***/ }),

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_baba_yaga_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/baba_yaga.jpeg */ \"./src/images/baba_yaga.jpeg\");\n/* harmony import */ var _images_anise_fartsparkler_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/anise_fartsparkler.jpg */ \"./src/images/anise_fartsparkler.jpg\");\n\r\n\r\n\r\nclass Contacts{\r\n  constructor(){\r\n    this.contacts = []\r\n  }\r\n  \r\n  addContactItem=function(newContact){\r\n    this.contacts.push(newContact)\r\n  }\r\n  removeContactItem=function(name){\r\n    for (let i =0; i<this.contacts.length; i++){\r\n      if(this.contacts[i].name==name)\r\n      this.contacts.splice(i,1);\r\n      console.log(this.contacts);\r\n    }\r\n  }\r\n\r\ncreateContactPage = function() {\r\n  const contact_header= document.createElement(\"h1\");\r\n  contact_header.setAttribute(\"id\",\"contact_header\");\r\n  contact_header.textContent=\"Contact\";\r\n  console.log(\"Contact page created\");\r\n  return contact_header\r\n}\r\n\r\n}\r\n\r\n\r\n\r\nclass contactItem { \r\nconstructor(name, role, email, phone){\r\n  this.name = name\r\n  this.role = role\r\n  this.email = email\r\n  this.phone = phone\r\n  \r\n  this.info = function() { \r\n    console.log(name + \", Position: \" + role+ \", Email at:  \" + email + \", or call at : \"+ phone) ;\r\n  }\r\n}\r\n\r\ncreateContact=function(newContactItem){\r\n  const contact= document.createElement(\"div\")\r\n  contact.setAttribute(\"id\",\"item\")\r\n  const contact_header = document.createElement(\"div\")\r\n  //contact_header.setAttribute(\"id\",\"item_header\")\r\n  //contact_header.textContent=newContactItem.name;\r\n\r\n  const contact_content = document.createElement(\"div\")\r\n  contact_content.setAttribute(\"id\",\"item_content\")\r\n\r\n  const left_side=document.createElement(\"div\")\r\n  left_side.setAttribute(\"id\",\"leftside\")\r\n  left_side.style.height=\"200px\"\r\n  left_side.style.maxWidth=\"35%\"\r\n\r\n  const right_side=document.createElement(\"div\")\r\n  right_side.setAttribute(\"id\",\"rightside\")\r\n\r\n  \r\n\r\n  //create menu item elements\r\n  const contactName = document.createElement('p');\r\n  const contactRole = document.createElement('div');\r\n  const contactEmail= document.createElement('div');\r\n  const contactPhone= document.createElement('div');\r\n\r\n\r\n   //assign the values to the menu items\r\n  contactName.textContent = newContactItem.name;\r\n  contactName.style.fontFamily=\"haunted_moon\"\r\n  contactName.style.textShadow=\" 2px 4px 4px #CF7BE6\" ;\r\n  contactRole.textContent = newContactItem.role;\r\n  contactEmail.textContent = \"Email: \" + newContactItem.email;\r\n  contactEmail.style.overflow = \"hidden\";\r\n  contactEmail.style.textOverflow= \"ellipsis\";\r\n  contactEmail.style.wordBreak = \"true\";\r\n  //contactEmail.style.fontSize = \"0.6em\";\r\n  //contactEmail.style.maxHeight = \"2em\";\r\n  contactPhone.textContent = \"Phone \" + newContactItem.phone;\r\n  //getting image for the contacts\r\n  const contactImage=new Image();\r\n  if(newContactItem.name=='Anise Fartsparkler'){\r\n    contactImage.src = _images_anise_fartsparkler_jpg__WEBPACK_IMPORTED_MODULE_1__;\r\n  }\r\n  else{\r\n    contactImage.src = _images_baba_yaga_jpeg__WEBPACK_IMPORTED_MODULE_0__;\r\n  }\r\n  console.log(contactImage.src)\r\n  left_side.appendChild(contactImage)\r\n\r\n  right_side.appendChild(contactName);\r\n  right_side.appendChild(contactRole);\r\n  right_side.appendChild(contactEmail);\r\n  right_side.appendChild(contactPhone);\r\n\r\n  contact_content.appendChild(left_side);\r\n  contact_content.appendChild(right_side);\r\n  //contact.appendChild(contact_header);\r\n  contact.appendChild(contact_content)\r\n  //console.log(\"item was added\")\r\n \r\n  return contact;\r\n}\r\n}\r\n\r\nfunction loadContactPage(){\r\n  let myContacts = new Contacts();\r\n  const main = document.querySelector('#main');\r\n  main.textContent=\"\";\r\n  main.appendChild(myContacts.createContactPage());\r\n\r\n  let baba_yaga= new contactItem(\"Baba Yaga\",\"Brew Master\", \"chicken_feet@cauldron.com\",\"123-456-7890\")\r\n  let anise_fartsparkler= new contactItem(\"Anise Fartsparkler\", \"Apprentice\",\"anise_fartsparkler@cauldron.com\",\"234-567-8901\")\r\n  myContacts.addContactItem(baba_yaga)\r\n  myContacts.addContactItem(anise_fartsparkler)\r\n\r\n  const container = document.createElement(\"div\");\r\n  container.setAttribute(\"id\",\"container\")\r\n\r\n  for (var i = 0; i < myContacts.contacts.length; i++) {\r\n   container.appendChild(myContacts.contacts[i].createContact(myContacts.contacts[i]));\r\n  }\r\n\r\n  main.appendChild(container);\r\n}\r\n\r\n\r\n//loadContactPage();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContactPage);\n\n//# sourceURL=webpack://tenth_assignment/./src/modules/contact.js?");

/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createHomePage() {\r\n  const home_header= document.createElement(\"h1\");\r\n  home_header.setAttribute(\"id\",\"home_header\");\r\n  home_header.textContent=\"Home\";\r\n  console.log(\"Home page created\");\r\n  return home_header\r\n}\r\n\r\n//business description\r\nfunction createDescriptionItem(){  \r\n  const description= document.createElement(\"div\")\r\n  description.setAttribute(\"id\",\"item\")\r\n\r\n  const description_header = document.createElement('div');\r\n  description_header.textContent = \"The Cauldron\" ;\r\n  description_header.setAttribute(\"id\",\"item_header\")\r\n\r\n  const description_paragraph = document.createElement('p')\r\n  description_paragraph.setAttribute(\"id\",\"item_content\")\r\n  description_paragraph.textContent =\"blah blah blah we brew the potions, you drink them\"\r\n\r\n  description.appendChild(description_header)\r\n  description.appendChild(description_paragraph)\r\n\r\n  return description\r\n\r\n}\r\n\r\n\r\n//reviews\r\nfunction createReviewItem(){\r\n  const review = document.createElement(\"div\")\r\n  review.setAttribute(\"id\",\"item\")\r\n  const review_header = document.createElement(\"div\")\r\n  review_header.setAttribute(\"id\",\"item_header\")\r\n  review_header.textContent=\"Reviews\"\r\n  \r\n  const  reviewer1= document.createElement(\"div\")\r\n  reviewer1.setAttribute(\"id\",\"item_content\")\r\n\r\n  const left_side=document.createElement(\"div\")\r\n  left_side.setAttribute(\"id\",\"leftside\")\r\n  left_side.style.maxWidth=\"40%\"\r\n  const star=document.createElement(\"img\")\r\n  star.src=\"../src/images/star.png\"\r\n  star.style.maxWidth= \"20%\"\r\n  star.style.height=\"auto\"\r\n  left_side.appendChild(star)\r\n  const star2=document.createElement(\"img\")\r\n  star2.src=\"../src/images/star.png\"\r\n  star2.style.maxWidth= \"20%\"\r\n  star2.style.height=\"auto\"\r\n  left_side.appendChild(star2)\r\n\r\n  const star3=document.createElement(\"img\")\r\n  star3.src=\"../src/images/star.png\"\r\n  star3.style.maxWidth= \"20%\"\r\n  star3.style.height=\"auto\"\r\n  left_side.appendChild(star3)\r\n  const star4=document.createElement(\"img\")\r\n  star4.src=\"../src/images/star.png\"\r\n  star4.style.maxWidth= \"20%\"\r\n  star4.style.height=\"auto\"\r\n  left_side.appendChild(star4)\r\n  const star5=document.createElement(\"img\")\r\n  star5.src=\"../src/images/star.png\"\r\n  star5.style.maxWidth= \"20%\"\r\n  star5.style.height=\"auto\"\r\n  left_side.appendChild(star5)\r\n  \r\n  const written_review = document.createElement(\"p\")\r\n  written_review.setAttribute(\"id\",\"rightside\")\r\n  written_review.textContent= \"I don't know what was in that stuff, but dang does it work miracles! I am on husband number three now! -Barb\"\r\n  \r\n\r\n  reviewer1.appendChild(left_side)\r\n  reviewer1.appendChild(written_review)\r\n\r\n  review.appendChild(review_header)\r\n  review.appendChild(reviewer1)\r\n  return review\r\n}\r\n\r\n\r\n\r\n//hours\r\nfunction createHours(){\r\n  const hours = document.createElement(\"div\")\r\n  hours.setAttribute(\"id\", \"item\")\r\n  \r\n  const hours_header= document.createElement('div')\r\n  hours_header.textContent=\"Hours\"\r\n  hours_header.setAttribute(\"id\",\"item_header\")\r\n  \r\n  const hour_content= document.createElement(\"div\")\r\n  hour_content.setAttribute(\"id\",\"item_content\")\r\n\r\n  const hour_element= document.createElement(\"p\")\r\n  hour_element.setAttribute(\"id\",\"rightside\")\r\n  \r\n  \r\n  const sunday = document.createElement('div')\r\n  const monday = document.createElement('div')\r\n  const tuesday = document.createElement('div')\r\n  const wednesday = document.createElement('div')\r\n  const thursday = document.createElement('div')\r\n  const friday = document.createElement('div')\r\n  const saturday = document.createElement('div')\r\n  \r\n  sunday.textContent=\"Sunday : 2pm-10pm\"\r\n  monday.textContent=\"Monday :  9am-1pm\"\r\n  tuesday.textContent=\"Tuesday :  closed\"\r\n  wednesday.textContent=\"Wednesday : closed\"\r\n  thursday. textContent=\"Thursday : 4pm- 10pm\"\r\n  friday.textContent=\"Friday : 1pm - 9pm\"\r\n  saturday.textContent=\"Saturday : 2pm - 10pm\"\r\n  \r\n  \r\n  \r\n  hour_element.appendChild(sunday)\r\n  hour_element.appendChild(monday)\r\n  hour_element.appendChild(tuesday)\r\n  hour_element.appendChild(wednesday)\r\n  hour_element.appendChild(thursday)\r\n  hour_element.appendChild(friday)\r\n  hour_element.appendChild(saturday)\r\n  \r\n  hour_content.appendChild(hour_element)\r\n  hours.appendChild(hours_header)\r\n  hours.appendChild(hour_content)\r\n\r\n  return hours\r\n}\r\n\r\n\r\n\r\n\r\n//location\r\nfunction createLocationItem(){\r\n  const address = document.createElement(\"div\")\r\n  address.setAttribute(\"id\", \"item\")\r\n  const location_element = document.createElement(\"div\")\r\n  location_element.setAttribute(\"id\",\"leftside\")\r\n  const location_header= document.createElement(\"div\")\r\n  location_header.textContent=\"Location\"\r\n  location_header.setAttribute(\"id\",\"item_header\")\r\n  const address_for_you=document.createElement('div')\r\n  address_for_you.setAttribute(\"id\",\"item_content\")\r\n  const right_side= document.createElement(\"p\")\r\n  right_side.setAttribute(\"id\",\"rightside\")\r\n  right_side.textContent=\"123 Chicken Feet Run Blackforest, Germany 12345-67990\"\r\n  \r\n  address_for_you.appendChild(right_side)\r\n  address.appendChild(location_header)\r\n  address.appendChild(address_for_you)\r\n\r\n  return address\r\n}\r\n\r\n\r\n\r\nfunction loadHome(){\r\n  const main = document.querySelector('#main');\r\n  main.textContent=\"\";\r\n  main.appendChild(createHomePage());\r\n  main.appendChild(createDescriptionItem())\r\n  main.appendChild(createReviewItem())\r\n  main.appendChild(createHours())\r\n  main.appendChild(createLocationItem())\r\n  return main;\r\n}\r\n//loadHome()\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\n\n//# sourceURL=webpack://tenth_assignment/./src/modules/home.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n//let myMenu=[]\r\n//import './styles.css'\r\n//import Icon from './images/health_potion.png'\r\n\r\n\r\nclass Menu{\r\n  constructor(){\r\n    this.menuItems = []\r\n  }\r\n  \r\n  addMenuItem=function(newMenuItem){\r\n    this.menuItems.push(newMenuItem)\r\n  }\r\n  removeMenuItem=function(name){\r\n    for (let i =0; i<this.menuItems.length; i++){\r\n      if(this.menuItems[i].name==name)\r\n      this.menuItems.splice(i,1);\r\n      //console.log(this.menuItems);\r\n    }\r\n  }\r\n  drinklist= function(){\r\n    for (var i = 0; i < this.menuItems.length; i++) {\r\n        this.menuItems[i].info();\r\n    }\r\n}\r\n\r\ncreateMenu=function(){\r\nconst menu = document.createElement(\"div\")\r\nmenu.setAttribute(\"id\",\"menu\")\r\nconsole.log(\"menu created\")\r\nmenu.textContent=\"\"\r\n\r\nconst menu_header= document.createElement(\"h1\")\r\nmenu_header.setAttribute(\"id\",\"menu_header\")\r\nmenu_header.textContent=\"Menu\"\r\n\r\nmenu.appendChild(menu_header)\r\nreturn menu\r\n\r\n}\r\n}\r\n\r\n\r\nclass menuItem { \r\nconstructor(name, description, price){\r\n  this.name = name\r\n  this.description = description\r\n  this.price = price\r\n  \r\n  this.info = function() { \r\n    console.log(name + \", Components: \" + description+ \", Priced at \" + price) ;\r\n  }\r\n}\r\n\r\ncreateMenuItem=function(newMenuItem){\r\n  const potion= document.createElement(\"div\")\r\n  potion.setAttribute(\"id\",\"item\")\r\n  const potion_content= document.createElement(\"div\")\r\n  potion_content.setAttribute(\"id\",\"item_content\")\r\n\r\n  const left_side=document.createElement(\"div\")\r\n  left_side.setAttribute(\"id\",\"leftside\")\r\n  left_side.style.maxWidth=\"40%\"\r\n  left_side.style.height=\"70%\"\r\n\r\n  const right_side=document.createElement(\"div\")\r\n  right_side.setAttribute(\"id\",\"rightside\")\r\n\r\n  \r\n\r\n  //create menu item elements\r\n  const menuItem_Name = document.createElement('p');\r\n  const menuItem_Components = document.createElement('p');\r\n  const menuItem_Price= document.createElement('p');\r\n\r\n\r\n   //assign the values to the menu items\r\n  menuItem_Name.textContent = newMenuItem.name;\r\n  menuItem_Name.style.fontFamily=\"haunted_moon\"\r\n  menuItem_Name.style.textShadow=\" 2px 4px 4px #CF7BE6\" ;\r\n  menuItem_Components.textContent = newMenuItem.description;\r\n  menuItem_Price.textContent = \"Price: \" + newMenuItem.price;\r\n  menuItem_Price.style.fontFamily=\"haunted_moon\"\r\n  console.log(newMenuItem.name)\r\n  //getting image for the food item\r\n  const menuItem_Image = document.createElement(\"img\");\r\n  menuItem_Image.src = `../src/images/${newMenuItem.name.toLowerCase().replace(/ /g,\"_\").replace(/\\'/g,\"\")}_potion.png`;\r\n  menuItem_Image.alt = `${newMenuItem.name}`;\r\n  console.log(\"image added from : \"+ menuItem_Image.src + \" using the name \"+ newMenuItem.name)\r\n  \r\n  left_side.appendChild(menuItem_Image);\r\n  right_side.appendChild(menuItem_Name);\r\n  right_side.appendChild(menuItem_Components);\r\n  right_side.appendChild(menuItem_Price);\r\n  potion_content.appendChild(left_side);\r\n  potion_content.appendChild(right_side);\r\n  potion.appendChild(potion_content)\r\n  //console.log(\"item was added\")\r\n  console.log(menuItem_Name.textContent + \" was added to page\")\r\n  return potion;\r\n}\r\n}\r\n\r\n\r\nfunction loadMenu(){\r\n  let myMenu = new Menu();\r\n  const main = document.querySelector('#main');\r\n  main.textContent=\"\";\r\n  main.appendChild(myMenu.createMenu());\r\n\r\n  let witchs_brew= new menuItem(\"Witch's Brew\",\"midori melon liquor, orange juice, lemon lime soda\", \"one toad\")\r\n  let vampires_kiss= new menuItem(\"Vampire's Kiss\", \"Rasberries, Cranberry juice, Sparking Wine, Vodka, Chambord\", \"vampire fang\")\r\n  let necromancer = new menuItem(\"Necromancer\",\"Gin, Cointreau, lemon juice, vermouth, abisinthe, creme de violette\", \"coffin nail\")\r\n  let zombie_brain = new menuItem(\"Zombie Brain Shot\", \"Peach Schnapps, creme de menthe, Baileys, grenadine\", \"brains\")\r\n  myMenu.addMenuItem(witchs_brew)\r\n  myMenu.addMenuItem(vampires_kiss)\r\n  myMenu.addMenuItem(necromancer)\r\n  myMenu.addMenuItem(zombie_brain)\r\n\r\n  const container = document.createElement(\"div\");\r\n  container.setAttribute(\"id\",\"container\")\r\n\r\n  for (var i = 0; i < myMenu.menuItems.length; i++) {\r\n    container.appendChild(myMenu.menuItems[i].createMenuItem(myMenu.menuItems[i]));\r\n    }\r\n  main.appendChild(container);\r\n}\r\n\r\n//loadMenu();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\n\n//# sourceURL=webpack://tenth_assignment/./src/modules/menu.js?");

/***/ }),

/***/ "./src/font/october-moon-font/OctoberMoon-deql.ttf":
/*!*********************************************************!*\
  !*** ./src/font/october-moon-font/OctoberMoon-deql.ttf ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2e73e30e55c312872ceb.ttf\";\n\n//# sourceURL=webpack://tenth_assignment/./src/font/october-moon-font/OctoberMoon-deql.ttf?");

/***/ }),

/***/ "./src/images/anise_fartsparkler.jpg":
/*!*******************************************!*\
  !*** ./src/images/anise_fartsparkler.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0290a2f4dbb1e0537264.jpg\";\n\n//# sourceURL=webpack://tenth_assignment/./src/images/anise_fartsparkler.jpg?");

/***/ }),

/***/ "./src/images/baba_yaga.jpeg":
/*!***********************************!*\
  !*** ./src/images/baba_yaga.jpeg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8e0bf733a2716f431ad1.jpeg\";\n\n//# sourceURL=webpack://tenth_assignment/./src/images/baba_yaga.jpeg?");

/***/ }),

/***/ "./src/images/clouds_background.jpg":
/*!******************************************!*\
  !*** ./src/images/clouds_background.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4e7a47720d42e68b6053.jpg\";\n\n//# sourceURL=webpack://tenth_assignment/./src/images/clouds_background.jpg?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;