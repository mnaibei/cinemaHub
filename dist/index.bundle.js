"use strict";
(self["webpackChunkcinemahub"] = self["webpackChunkcinemahub"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
}

html {
  font-size: 62.5%;
  font-family: 'Lato', sans-serif;
  scroll-behavior: smooth;
}

body {
  min-height: 100vh;
  font-weight: 400;
  background-color: #f2d2bd;
}

#header {
  position: sticky;
  top: 0;
  width: 100%;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 3rem;
  background-color: #ffe4e1;
  margin-bottom: 2rem;
}

.navbar h1 {
  font-size: 3rem;
}

.nav-links {
  list-style: none;
}

.home {
  font-size: 2rem;
  color: #a52a2a;
}

.home:hover {
  text-decoration: underline;
}

.welcome {
  font-size: 3rem;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.text {
  font-size: 2rem;
}

.form {
  border-radius: 2.5rem;
  position: relative;
  padding: 0 2rem;
  width: 70%;
}

.searchInput {
  width: 100%;
  height: 100%;
  display: block;
  border-radius: 2.5rem;
  font-size: 1.7rem;
  padding: 1.2rem 1.5rem;
  border: none;
  cursor: pointer;
}

.searchButton {
  position: absolute;
  top: 0;
  right: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15%;
  height: 100%;
  font-size: 1.7rem;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  cursor: pointer;
  border: none;
  background: transparent;
  background-color: #ffe4e1;
}

.searchInput:focus {
  outline: 0;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.5);
}

.search-container {
  display: flex;
  flex-direction: column;
  min-height: 80vh;
  align-items: center;
  justify-content: center;
}

.results {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 3rem;
  place-items: center;
  text-transform: capitalize;
  margin-bottom: 2rem;
}

.movie-img,
.modal-img {
  height: 300px;
  width: 250px;
}

.movie-item {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  margin: 2rem;
  font-size: 1.5rem;
  word-wrap: break-word;
}

.movie-info {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.title {
  width: 250px;
}

.view-more-btn {
  height: 3.9rem;
  border: none;
  background: transparent;
  background-color: #ffe4e1;
  cursor: pointer;
  border-radius: 4px;
  margin-top: 8px;
}

.view-more-btn:hover {
  background-color: brown;
}

.details-container {
  position: fixed;
  flex-direction: column;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 228, 196, 0.9);
}

.details-content {
  display: flex;
  flex-direction: column;
}

.details-container .details-content {
  max-width: 95%;
  max-height: 95%;
  overflow: auto;
  background-color: rgba(255, 228, 225);
  padding: 20px;
  border-radius: 8px;
}

.content {
  display: flex;
  gap: 2rem;
  padding: 1rem;
}

.description {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: 1.6rem;
}

.sub-desc {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.ratings {
  list-style: decimal;
}

.rating-desc {
  margin-left: 1.5rem;
}

.close-btn {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 30px;
  cursor: pointer;
}

.footer {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0.5rem;
  font-size: 1.5rem;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #ffe4e1;
  width: 100%;
  gap: 2px;
}

@media screen and (max-width: 768px) {
  .welcome {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .text {
    font-size: 1.2rem;
  }

  .search-container {
    display: flex;
    flex-direction: column;
    min-height: 80vh;
    align-items: center;
    justify-content: center;
  }

  .form {
    border-radius: 1.5rem;
    position: relative;
    padding: 0 1rem;
    width: 95%;
  }

  .searchInput {
    width: 100%;
    height: 100%;
    display: block;
    border-radius: 2.5rem;
    font-size: 1.7rem;
    padding: 1.2rem 1.5rem;
    border: none;
    cursor: pointer;
  }

  .searchButton {
    position: absolute;
    top: 0;
    right: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20%;
    height: 100%;
    font-size: 1.7rem;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    cursor: pointer;
    border: none;
    background: transparent;
    background-color: #ffe4e1;
  }

  .results {
    display: grid;
    grid-template-columns: 1fr;
    padding: 0.5rem;
    place-items: center;
    text-transform: capitalize;
  }

  .movie-item {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    margin: 1rem;
    font-size: 1.5rem;
    word-wrap: break-word;
  }

  .movie-info {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
  }

  .title {
    width: 250px;
  }

  .details-content {
    display: flex;
    flex-direction: column;
    overflow: auto;
  }

  .details-container {
    overflow: hidden;
  }

  .details-container .details-content {
    max-width: 85%;
    max-height: 85%;
    background-color: rgba(255, 228, 225);
    padding: 20px;
    border-radius: 8px;
  }

  .close-btn {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 30px;
    cursor: pointer;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding: 1rem;
  }

  .description {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-size: 1.6rem;
  }

  .sub-desc {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .genre {
    width: 150px;
  }

  .ratings {
    display: flex;
    flex-direction: column;
    gap: 1px;
    list-style: decimal;
  }

  .rating-desc {
    margin: 0.5rem;
  }
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap');\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  text-decoration: none;\n}\n\nhtml {\n  font-size: 62.5%;\n  font-family: 'Lato', sans-serif;\n  scroll-behavior: smooth;\n}\n\nbody {\n  min-height: 100vh;\n  font-weight: 400;\n  background-color: #f2d2bd;\n}\n\n#header {\n  position: sticky;\n  top: 0;\n  width: 100%;\n}\n\n.navbar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.5rem 3rem;\n  background-color: #ffe4e1;\n  margin-bottom: 2rem;\n}\n\n.navbar h1 {\n  font-size: 3rem;\n}\n\n.nav-links {\n  list-style: none;\n}\n\n.home {\n  font-size: 2rem;\n  color: #a52a2a;\n}\n\n.home:hover {\n  text-decoration: underline;\n}\n\n.welcome {\n  font-size: 3rem;\n  margin-bottom: 2rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.text {\n  font-size: 2rem;\n}\n\n.form {\n  border-radius: 2.5rem;\n  position: relative;\n  padding: 0 2rem;\n  width: 70%;\n}\n\n.searchInput {\n  width: 100%;\n  height: 100%;\n  display: block;\n  border-radius: 2.5rem;\n  font-size: 1.7rem;\n  padding: 1.2rem 1.5rem;\n  border: none;\n  cursor: pointer;\n}\n\n.searchButton {\n  position: absolute;\n  top: 0;\n  right: 2rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 15%;\n  height: 100%;\n  font-size: 1.7rem;\n  border-top-right-radius: 30px;\n  border-bottom-right-radius: 30px;\n  cursor: pointer;\n  border: none;\n  background: transparent;\n  background-color: #ffe4e1;\n}\n\n.searchInput:focus {\n  outline: 0;\n  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.5);\n}\n\n.search-container {\n  display: flex;\n  flex-direction: column;\n  min-height: 80vh;\n  align-items: center;\n  justify-content: center;\n}\n\n.results {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  padding: 3rem;\n  place-items: center;\n  text-transform: capitalize;\n  margin-bottom: 2rem;\n}\n\n.movie-img,\n.modal-img {\n  height: 300px;\n  width: 250px;\n}\n\n.movie-item {\n  display: flex;\n  flex-direction: column;\n  padding: 2rem;\n  margin: 2rem;\n  font-size: 1.5rem;\n  word-wrap: break-word;\n}\n\n.movie-info {\n  display: flex;\n  flex-direction: column;\n  gap: 0.3rem;\n}\n\n.title {\n  width: 250px;\n}\n\n.view-more-btn {\n  height: 3.9rem;\n  border: none;\n  background: transparent;\n  background-color: #ffe4e1;\n  cursor: pointer;\n  border-radius: 4px;\n  margin-top: 8px;\n}\n\n.view-more-btn:hover {\n  background-color: brown;\n}\n\n.details-container {\n  position: fixed;\n  flex-direction: column;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(255, 228, 196, 0.9);\n}\n\n.details-content {\n  display: flex;\n  flex-direction: column;\n}\n\n.details-container .details-content {\n  max-width: 95%;\n  max-height: 95%;\n  overflow: auto;\n  background-color: rgba(255, 228, 225);\n  padding: 20px;\n  border-radius: 8px;\n}\n\n.content {\n  display: flex;\n  gap: 2rem;\n  padding: 1rem;\n}\n\n.description {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  font-size: 1.6rem;\n}\n\n.sub-desc {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.ratings {\n  list-style: decimal;\n}\n\n.rating-desc {\n  margin-left: 1.5rem;\n}\n\n.close-btn {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  font-size: 30px;\n  cursor: pointer;\n}\n\n.footer {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  padding: 0.5rem;\n  font-size: 1.5rem;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  background-color: #ffe4e1;\n  width: 100%;\n  gap: 2px;\n}\n\n@media screen and (max-width: 768px) {\n  .welcome {\n    font-size: 1.5rem;\n    margin-bottom: 1.5rem;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .text {\n    font-size: 1.2rem;\n  }\n\n  .search-container {\n    display: flex;\n    flex-direction: column;\n    min-height: 80vh;\n    align-items: center;\n    justify-content: center;\n  }\n\n  .form {\n    border-radius: 1.5rem;\n    position: relative;\n    padding: 0 1rem;\n    width: 95%;\n  }\n\n  .searchInput {\n    width: 100%;\n    height: 100%;\n    display: block;\n    border-radius: 2.5rem;\n    font-size: 1.7rem;\n    padding: 1.2rem 1.5rem;\n    border: none;\n    cursor: pointer;\n  }\n\n  .searchButton {\n    position: absolute;\n    top: 0;\n    right: 1rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 20%;\n    height: 100%;\n    font-size: 1.7rem;\n    border-top-right-radius: 30px;\n    border-bottom-right-radius: 30px;\n    cursor: pointer;\n    border: none;\n    background: transparent;\n    background-color: #ffe4e1;\n  }\n\n  .results {\n    display: grid;\n    grid-template-columns: 1fr;\n    padding: 0.5rem;\n    place-items: center;\n    text-transform: capitalize;\n  }\n\n  .movie-item {\n    display: flex;\n    flex-direction: column;\n    padding: 1rem;\n    margin: 1rem;\n    font-size: 1.5rem;\n    word-wrap: break-word;\n  }\n\n  .movie-info {\n    display: flex;\n    flex-direction: column;\n    gap: 0.3rem;\n  }\n\n  .title {\n    width: 250px;\n  }\n\n  .details-content {\n    display: flex;\n    flex-direction: column;\n    overflow: auto;\n  }\n\n  .details-container {\n    overflow: hidden;\n  }\n\n  .details-container .details-content {\n    max-width: 85%;\n    max-height: 85%;\n    background-color: rgba(255, 228, 225);\n    padding: 20px;\n    border-radius: 8px;\n  }\n\n  .close-btn {\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    font-size: 30px;\n    cursor: pointer;\n  }\n\n  .content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 2rem;\n    padding: 1rem;\n  }\n\n  .description {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    font-size: 1.6rem;\n  }\n\n  .sub-desc {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n  }\n\n  .genre {\n    width: 150px;\n  }\n\n  .ratings {\n    display: flex;\n    flex-direction: column;\n    gap: 1px;\n    list-style: decimal;\n  }\n\n  .rating-desc {\n    margin: 0.5rem;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



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



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _modules_searchMovies_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/searchMovies.js */ "./src/modules/searchMovies.js");
/* harmony import */ var _modules_displayMovies_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/displayMovies.js */ "./src/modules/displayMovies.js");
/* harmony import */ var _modules_single_page_functions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/single-page-functions.js */ "./src/modules/single-page-functions.js");





// fetch DOM elements
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const resultsContainer = document.getElementById('results');
const home = document.querySelector('.home');

const searchMoviesHandler = async () => {
  // getting user query
  const query = document.getElementById('searchInput').value;
  try {
    // sending query to searchMovies function
    const movies = await (0,_modules_searchMovies_js__WEBPACK_IMPORTED_MODULE_1__["default"])(query);

    // sending result to displayMovies function
    (0,_modules_displayMovies_js__WEBPACK_IMPORTED_MODULE_2__["default"])(movies);
    document.getElementById('searchInput').value = ''; // Clearing the input field
  } catch (error) {
    resultsContainer.innerHTML = 'oops something went wrong! please refresh';
  }
};

// search box functionality so user can also press enter and submit query
searchInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    resultsContainer.innerHTML = '';
    searchMoviesHandler();
    (0,_modules_single_page_functions_js__WEBPACK_IMPORTED_MODULE_3__.onlyDisplayResults)();
  }
});

// search button functionality, calls the searchMoviesHandler when clicked
searchButton.addEventListener('click', (e) => {
  e.preventDefault();
  resultsContainer.innerHTML = '';
  searchMoviesHandler();
  (0,_modules_single_page_functions_js__WEBPACK_IMPORTED_MODULE_3__.onlyDisplayResults)();
});

// home button redirects user back home
home.addEventListener('click', _modules_single_page_functions_js__WEBPACK_IMPORTED_MODULE_3__.onlyDisplayHome);


/***/ }),

/***/ "./src/modules/displayMovies.js":
/*!**************************************!*\
  !*** ./src/modules/displayMovies.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const displayMovies = (movies) => {
  // getting container where data will be displayed
  const resultsContainer = document.getElementById('results');

  // clearing previous loaded data
  resultsContainer.innerHTML = '';

  // if no movies found from query show this message
  if (!movies) {
    resultsContainer.innerHTML = '<p>No movies found.</p>';
    return;
  }

  // loop through data found, create div and append to DOM
  movies.forEach((movie) => {
    const movieCard = document.createElement('div');
    movieCard.classList.add('movie-item');

    // check if movie has poster image otherwise use default
    const posterUrl = movie.Poster !== 'N/A'
      ? movie.Poster
      : 'https://images.unsplash.com/photo-1509281373149-e957c6296406?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1028&q=80';

    // create movie card
    movieCard.innerHTML = `
      <img src=${posterUrl} class="movie-img">
        <div class="movie-info">
          <h3 class="title">${movie.Title}</h3>
            <p>type: ${movie.Type}</p>
            <p>year: ${movie.Year}</p>
            </div>
            <button class="view-more-btn">View Details</button>
            <div class="details-container" style="display: none;"></div>
      `;

    const viewMoreBtn = movieCard.querySelector('.view-more-btn');
    const detailsContainer = movieCard.querySelector('.details-container');

    // fetch movie details from the API using imdb id
    const fetchMovieDetails = async (imdbID) => {
      const apiKey = '6d76a8b8';
      const endpoint = `https://www.omdbapi.com/?apikey=${apiKey}&i=${imdbID}`;

      try {
        const response = await fetch(endpoint);
        const details = response.json();
        return details;
      } catch (error) {
        return error;
      }
    };

    // Function to toggle visibility of details container
    function toggleDetailsVisibility(detailsContainer) {
      detailsContainer.style.display = detailsContainer.style.display === 'none' ? 'flex' : 'none';
    }

    // view more button functionality
    viewMoreBtn.addEventListener('click', () => {
      if (detailsContainer.innerHTML) {
        // Details already fetched, show them
        toggleDetailsVisibility(detailsContainer);
      } else {
        // Fetch movie details and display
        fetchMovieDetails(movie.imdbID).then((data) => {
          // display fetched details
          detailsContainer.innerHTML = `
          <div class="details-content">
            <div class="close-btn">&times;</div> 
            <div class="content">
            <img src=${posterUrl} class="modal-img">
            <div class="description">
            <h3>${movie.Title}</h3>
            <div class="sub-desc">
            <h4 class="genre">Genre: ${data.Genre}</h4>
            <p> ${data.Runtime}</p>
            </div>
            <p>Description: ${data.Plot}</p>
            <p>Cast: ${data.Actors}</p>
            <p>Director: ${data.Director}</p>
            <ul class="ratings">Ratings:
            <li class="rating-desc">IMDb: ${data.imdbRating}</li>
            <li class="rating-desc">MetaScore: ${data.Metascore}</li>
            </ul>
            </div>
            </div>
            </div>
          `;
          toggleDetailsVisibility(detailsContainer);

          // close button function
          const closeButton = detailsContainer.querySelector('.close-btn');
          closeButton.addEventListener('click', () => {
            toggleDetailsVisibility(detailsContainer);
          });
        });
      }
    });

    // append to DOM
    resultsContainer.appendChild(movieCard);
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayMovies);


/***/ }),

/***/ "./src/modules/searchMovies.js":
/*!*************************************!*\
  !*** ./src/modules/searchMovies.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const searchMovies = async (query) => {
  const apiKey = '6d76a8b8';
  const endpoint = 'https://www.omdbapi.com/';

  // search query sent to server
  const url = `${endpoint}?apikey=${apiKey}&s=${query}`;

  // getting results
  try {
    const result = await fetch(url);

    // parse data to json
    const data = await result.json();

    // select data from the search column and return it
    const movieData = data.Search;
    return movieData;
  } catch (error) {
    return error;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (searchMovies);


/***/ }),

/***/ "./src/modules/single-page-functions.js":
/*!**********************************************!*\
  !*** ./src/modules/single-page-functions.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   onlyDisplayHome: () => (/* binding */ onlyDisplayHome),
/* harmony export */   onlyDisplayResults: () => (/* binding */ onlyDisplayResults)
/* harmony export */ });
const onlyDisplayResults = () => {
  document.getElementById('test').style.display = 'unset';
  document.getElementById('home').style.display = 'none';
};

const onlyDisplayHome = () => {
  document.getElementById('test').style.display = 'none';
  document.getElementById('home').style.display = 'unset';
};




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRiw2R0FBNkcsSUFBSSxJQUFJLGtCQUFrQjtBQUN2STtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxpRkFBaUYsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFV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O0FBQ0g7O0FBRUEsaUVBQWUsYUFBYSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUN4RzdCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixTQUFTLFVBQVUsT0FBTyxLQUFLLE1BQU07O0FBRXREO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDdEI1QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFK0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaW5lbWFodWIvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9jaW5lbWFodWIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2NpbmVtYWh1Yi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2NpbmVtYWh1Yi8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vY2luZW1haHViLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2NpbmVtYWh1Yi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vY2luZW1haHViLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2NpbmVtYWh1Yi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9jaW5lbWFodWIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9jaW5lbWFodWIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9jaW5lbWFodWIvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2luZW1haHViLy4vc3JjL21vZHVsZXMvZGlzcGxheU1vdmllcy5qcyIsIndlYnBhY2s6Ly9jaW5lbWFodWIvLi9zcmMvbW9kdWxlcy9zZWFyY2hNb3ZpZXMuanMiLCJ3ZWJwYWNrOi8vY2luZW1haHViLy4vc3JjL21vZHVsZXMvc2luZ2xlLXBhZ2UtZnVuY3Rpb25zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TGF0bzp3Z2h0QDMwMDs0MDA7NzAwOzkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuaHRtbCB7XG4gIGZvbnQtc2l6ZTogNjIuNSU7XG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xufVxuXG5ib2R5IHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmQyYmQ7XG59XG5cbiNoZWFkZXIge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubmF2YmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxLjVyZW0gM3JlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZTRlMTtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cblxuLm5hdmJhciBoMSB7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbn1cblxuLm5hdi1saW5rcyB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi5ob21lIHtcbiAgZm9udC1zaXplOiAycmVtO1xuICBjb2xvcjogI2E1MmEyYTtcbn1cblxuLmhvbWU6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLndlbGNvbWUge1xuICBmb250LXNpemU6IDNyZW07XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi50ZXh0IHtcbiAgZm9udC1zaXplOiAycmVtO1xufVxuXG4uZm9ybSB7XG4gIGJvcmRlci1yYWRpdXM6IDIuNXJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAwIDJyZW07XG4gIHdpZHRoOiA3MCU7XG59XG5cbi5zZWFyY2hJbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXItcmFkaXVzOiAyLjVyZW07XG4gIGZvbnQtc2l6ZTogMS43cmVtO1xuICBwYWRkaW5nOiAxLjJyZW0gMS41cmVtO1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNlYXJjaEJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMnJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxNSU7XG4gIGhlaWdodDogMTAwJTtcbiAgZm9udC1zaXplOiAxLjdyZW07XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzMHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMzBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlNGUxO1xufVxuXG4uc2VhcmNoSW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiAwO1xuICBib3gtc2hhZG93OiAwIDFyZW0gMnJlbSByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5zZWFyY2gtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWluLWhlaWdodDogODB2aDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5yZXN1bHRzIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcbiAgcGFkZGluZzogM3JlbTtcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5cbi5tb3ZpZS1pbWcsXG4ubW9kYWwtaW1nIHtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgd2lkdGg6IDI1MHB4O1xufVxuXG4ubW92aWUtaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDJyZW07XG4gIG1hcmdpbjogMnJlbTtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbn1cblxuLm1vdmllLWluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDAuM3JlbTtcbn1cblxuLnRpdGxlIHtcbiAgd2lkdGg6IDI1MHB4O1xufVxuXG4udmlldy1tb3JlLWJ0biB7XG4gIGhlaWdodDogMy45cmVtO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlNGUxO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuXG4udmlldy1tb3JlLWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJyb3duO1xufVxuXG4uZGV0YWlscy1jb250YWluZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHotaW5kZXg6IDE7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyMjgsIDE5NiwgMC45KTtcbn1cblxuLmRldGFpbHMtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5kZXRhaWxzLWNvbnRhaW5lciAuZGV0YWlscy1jb250ZW50IHtcbiAgbWF4LXdpZHRoOiA5NSU7XG4gIG1heC1oZWlnaHQ6IDk1JTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyMjgsIDIyNSk7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuLmNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDJyZW07XG4gIHBhZGRpbmc6IDFyZW07XG59XG5cbi5kZXNjcmlwdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMXJlbTtcbiAgZm9udC1zaXplOiAxLjZyZW07XG59XG5cbi5zdWItZGVzYyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMXJlbTtcbn1cblxuLnJhdGluZ3Mge1xuICBsaXN0LXN0eWxlOiBkZWNpbWFsO1xufVxuXG4ucmF0aW5nLWRlc2Mge1xuICBtYXJnaW4tbGVmdDogMS41cmVtO1xufVxuXG4uY2xvc2UtYnRuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZTRlMTtcbiAgd2lkdGg6IDEwMCU7XG4gIGdhcDogMnB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAud2VsY29tZSB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5cbiAgLnRleHQge1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICB9XG5cbiAgLnNlYXJjaC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtaW4taGVpZ2h0OiA4MHZoO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cblxuICAuZm9ybSB7XG4gICAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nOiAwIDFyZW07XG4gICAgd2lkdGg6IDk1JTtcbiAgfVxuXG4gIC5zZWFyY2hJbnB1dCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJvcmRlci1yYWRpdXM6IDIuNXJlbTtcbiAgICBmb250LXNpemU6IDEuN3JlbTtcbiAgICBwYWRkaW5nOiAxLjJyZW0gMS41cmVtO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICAuc2VhcmNoQnV0dG9uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAxcmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMjAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBmb250LXNpemU6IDEuN3JlbTtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMzBweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMzBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmU0ZTE7XG4gIH1cblxuICAucmVzdWx0cyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgfVxuXG4gIC5tb3ZpZS1pdGVtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBtYXJnaW46IDFyZW07XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICB9XG5cbiAgLm1vdmllLWluZm8ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDAuM3JlbTtcbiAgfVxuXG4gIC50aXRsZSB7XG4gICAgd2lkdGg6IDI1MHB4O1xuICB9XG5cbiAgLmRldGFpbHMtY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICB9XG5cbiAgLmRldGFpbHMtY29udGFpbmVyIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG5cbiAgLmRldGFpbHMtY29udGFpbmVyIC5kZXRhaWxzLWNvbnRlbnQge1xuICAgIG1heC13aWR0aDogODUlO1xuICAgIG1heC1oZWlnaHQ6IDg1JTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjI4LCAyMjUpO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICB9XG5cbiAgLmNsb3NlLWJ0biB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIC5jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDJyZW07XG4gICAgcGFkZGluZzogMXJlbTtcbiAgfVxuXG4gIC5kZXNjcmlwdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMXJlbTtcbiAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgfVxuXG4gIC5zdWItZGVzYyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG5cbiAgLmdlbnJlIHtcbiAgICB3aWR0aDogMTUwcHg7XG4gIH1cblxuICAucmF0aW5ncyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMXB4O1xuICAgIGxpc3Qtc3R5bGU6IGRlY2ltYWw7XG4gIH1cblxuICAucmF0aW5nLWRlc2Mge1xuICAgIG1hcmdpbjogMC41cmVtO1xuICB9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJd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ZDs7RUFFQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxlQUFlO0lBQ2YscUNBQXFDO0lBQ3JDLGFBQWE7SUFDYixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQiw4QkFBOEI7RUFDaEM7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFFBQVE7SUFDUixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TGF0bzp3Z2h0QDMwMDs0MDA7NzAwOzkwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5odG1sIHtcXG4gIGZvbnQtc2l6ZTogNjIuNSU7XFxuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxufVxcblxcbmJvZHkge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZDJiZDtcXG59XFxuXFxuI2hlYWRlciB7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5uYXZiYXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxLjVyZW0gM3JlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmU0ZTE7XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG5cXG4ubmF2YmFyIGgxIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuLm5hdi1saW5rcyB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4uaG9tZSB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBjb2xvcjogI2E1MmEyYTtcXG59XFxuXFxuLmhvbWU6aG92ZXIge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbi53ZWxjb21lIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50ZXh0IHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLmZvcm0ge1xcbiAgYm9yZGVyLXJhZGl1czogMi41cmVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZzogMCAycmVtO1xcbiAgd2lkdGg6IDcwJTtcXG59XFxuXFxuLnNlYXJjaElucHV0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBib3JkZXItcmFkaXVzOiAyLjVyZW07XFxuICBmb250LXNpemU6IDEuN3JlbTtcXG4gIHBhZGRpbmc6IDEuMnJlbSAxLjVyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zZWFyY2hCdXR0b24ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDJyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDE1JTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDMwcHg7XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMzBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZTRlMTtcXG59XFxuXFxuLnNlYXJjaElucHV0OmZvY3VzIHtcXG4gIG91dGxpbmU6IDA7XFxuICBib3gtc2hhZG93OiAwIDFyZW0gMnJlbSByZ2JhKDAsIDAsIDAsIDAuNSk7XFxufVxcblxcbi5zZWFyY2gtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWluLWhlaWdodDogODB2aDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnJlc3VsdHMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICBwYWRkaW5nOiAzcmVtO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG59XFxuXFxuLm1vdmllLWltZyxcXG4ubW9kYWwtaW1nIHtcXG4gIGhlaWdodDogMzAwcHg7XFxuICB3aWR0aDogMjUwcHg7XFxufVxcblxcbi5tb3ZpZS1pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIG1hcmdpbjogMnJlbTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbn1cXG5cXG4ubW92aWUtaW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMC4zcmVtO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgd2lkdGg6IDI1MHB4O1xcbn1cXG5cXG4udmlldy1tb3JlLWJ0biB7XFxuICBoZWlnaHQ6IDMuOXJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZTRlMTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIG1hcmdpbi10b3A6IDhweDtcXG59XFxuXFxuLnZpZXctbW9yZS1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYnJvd247XFxufVxcblxcbi5kZXRhaWxzLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgei1pbmRleDogMTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjI4LCAxOTYsIDAuOSk7XFxufVxcblxcbi5kZXRhaWxzLWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5kZXRhaWxzLWNvbnRhaW5lciAuZGV0YWlscy1jb250ZW50IHtcXG4gIG1heC13aWR0aDogOTUlO1xcbiAgbWF4LWhlaWdodDogOTUlO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjI4LCAyMjUpO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMnJlbTtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5kZXNjcmlwdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMXJlbTtcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcbn1cXG5cXG4uc3ViLWRlc2Mge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi5yYXRpbmdzIHtcXG4gIGxpc3Qtc3R5bGU6IGRlY2ltYWw7XFxufVxcblxcbi5yYXRpbmctZGVzYyB7XFxuICBtYXJnaW4tbGVmdDogMS41cmVtO1xcbn1cXG5cXG4uY2xvc2UtYnRuIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlNGUxO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBnYXA6IDJweDtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gIC53ZWxjb21lIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC50ZXh0IHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICB9XFxuXFxuICAuc2VhcmNoLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1pbi1oZWlnaHQ6IDgwdmg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgfVxcblxcbiAgLmZvcm0ge1xcbiAgICBib3JkZXItcmFkaXVzOiAxLjVyZW07XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgcGFkZGluZzogMCAxcmVtO1xcbiAgICB3aWR0aDogOTUlO1xcbiAgfVxcblxcbiAgLnNlYXJjaElucHV0IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIuNXJlbTtcXG4gICAgZm9udC1zaXplOiAxLjdyZW07XFxuICAgIHBhZGRpbmc6IDEuMnJlbSAxLjVyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcblxcbiAgLnNlYXJjaEJ1dHRvbiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICByaWdodDogMXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAyMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZm9udC1zaXplOiAxLjdyZW07XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzMHB4O1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMzBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlNGUxO1xcbiAgfVxcblxcbiAgLnJlc3VsdHMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG4gIH1cXG5cXG4gIC5tb3ZpZS1pdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgbWFyZ2luOiAxcmVtO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbiAgfVxcblxcbiAgLm1vdmllLWluZm8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDAuM3JlbTtcXG4gIH1cXG5cXG4gIC50aXRsZSB7XFxuICAgIHdpZHRoOiAyNTBweDtcXG4gIH1cXG5cXG4gIC5kZXRhaWxzLWNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gIH1cXG5cXG4gIC5kZXRhaWxzLWNvbnRhaW5lciB7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICB9XFxuXFxuICAuZGV0YWlscy1jb250YWluZXIgLmRldGFpbHMtY29udGVudCB7XFxuICAgIG1heC13aWR0aDogODUlO1xcbiAgICBtYXgtaGVpZ2h0OiA4NSU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyMjgsIDIyNSk7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIH1cXG5cXG4gIC5jbG9zZS1idG4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG5cXG4gIC5jb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAycmVtO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgfVxcblxcbiAgLmRlc2NyaXB0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBmb250LXNpemU6IDEuNnJlbTtcXG4gIH1cXG5cXG4gIC5zdWItZGVzYyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIH1cXG5cXG4gIC5nZW5yZSB7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gIH1cXG5cXG4gIC5yYXRpbmdzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxcHg7XFxuICAgIGxpc3Qtc3R5bGU6IGRlY2ltYWw7XFxuICB9XFxuXFxuICAucmF0aW5nLWRlc2Mge1xcbiAgICBtYXJnaW46IDAuNXJlbTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuaW1wb3J0IHNlYXJjaE1vdmllcyBmcm9tICcuL21vZHVsZXMvc2VhcmNoTW92aWVzLmpzJztcbmltcG9ydCBkaXNwbGF5TW92aWVzIGZyb20gJy4vbW9kdWxlcy9kaXNwbGF5TW92aWVzLmpzJztcbmltcG9ydCB7XG4gIG9ubHlEaXNwbGF5UmVzdWx0cyxcbiAgb25seURpc3BsYXlIb21lLFxufSBmcm9tICcuL21vZHVsZXMvc2luZ2xlLXBhZ2UtZnVuY3Rpb25zLmpzJztcblxuLy8gZmV0Y2ggRE9NIGVsZW1lbnRzXG5jb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2hJbnB1dCcpO1xuY29uc3Qgc2VhcmNoQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaEJ1dHRvbicpO1xuY29uc3QgcmVzdWx0c0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHRzJyk7XG5jb25zdCBob21lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWUnKTtcblxuY29uc3Qgc2VhcmNoTW92aWVzSGFuZGxlciA9IGFzeW5jICgpID0+IHtcbiAgLy8gZ2V0dGluZyB1c2VyIHF1ZXJ5XG4gIGNvbnN0IHF1ZXJ5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaElucHV0JykudmFsdWU7XG4gIHRyeSB7XG4gICAgLy8gc2VuZGluZyBxdWVyeSB0byBzZWFyY2hNb3ZpZXMgZnVuY3Rpb25cbiAgICBjb25zdCBtb3ZpZXMgPSBhd2FpdCBzZWFyY2hNb3ZpZXMocXVlcnkpO1xuXG4gICAgLy8gc2VuZGluZyByZXN1bHQgdG8gZGlzcGxheU1vdmllcyBmdW5jdGlvblxuICAgIGRpc3BsYXlNb3ZpZXMobW92aWVzKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoSW5wdXQnKS52YWx1ZSA9ICcnOyAvLyBDbGVhcmluZyB0aGUgaW5wdXQgZmllbGRcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXN1bHRzQ29udGFpbmVyLmlubmVySFRNTCA9ICdvb3BzIHNvbWV0aGluZyB3ZW50IHdyb25nISBwbGVhc2UgcmVmcmVzaCc7XG4gIH1cbn07XG5cbi8vIHNlYXJjaCBib3ggZnVuY3Rpb25hbGl0eSBzbyB1c2VyIGNhbiBhbHNvIHByZXNzIGVudGVyIGFuZCBzdWJtaXQgcXVlcnlcbnNlYXJjaElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHtcbiAgaWYgKGV2ZW50LmtleSA9PT0gJ0VudGVyJykge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgcmVzdWx0c0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICBzZWFyY2hNb3ZpZXNIYW5kbGVyKCk7XG4gICAgb25seURpc3BsYXlSZXN1bHRzKCk7XG4gIH1cbn0pO1xuXG4vLyBzZWFyY2ggYnV0dG9uIGZ1bmN0aW9uYWxpdHksIGNhbGxzIHRoZSBzZWFyY2hNb3ZpZXNIYW5kbGVyIHdoZW4gY2xpY2tlZFxuc2VhcmNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICByZXN1bHRzQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICBzZWFyY2hNb3ZpZXNIYW5kbGVyKCk7XG4gIG9ubHlEaXNwbGF5UmVzdWx0cygpO1xufSk7XG5cbi8vIGhvbWUgYnV0dG9uIHJlZGlyZWN0cyB1c2VyIGJhY2sgaG9tZVxuaG9tZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9ubHlEaXNwbGF5SG9tZSk7XG4iLCJjb25zdCBkaXNwbGF5TW92aWVzID0gKG1vdmllcykgPT4ge1xuICAvLyBnZXR0aW5nIGNvbnRhaW5lciB3aGVyZSBkYXRhIHdpbGwgYmUgZGlzcGxheWVkXG4gIGNvbnN0IHJlc3VsdHNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0cycpO1xuXG4gIC8vIGNsZWFyaW5nIHByZXZpb3VzIGxvYWRlZCBkYXRhXG4gIHJlc3VsdHNDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG5cbiAgLy8gaWYgbm8gbW92aWVzIGZvdW5kIGZyb20gcXVlcnkgc2hvdyB0aGlzIG1lc3NhZ2VcbiAgaWYgKCFtb3ZpZXMpIHtcbiAgICByZXN1bHRzQ29udGFpbmVyLmlubmVySFRNTCA9ICc8cD5ObyBtb3ZpZXMgZm91bmQuPC9wPic7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gbG9vcCB0aHJvdWdoIGRhdGEgZm91bmQsIGNyZWF0ZSBkaXYgYW5kIGFwcGVuZCB0byBET01cbiAgbW92aWVzLmZvckVhY2goKG1vdmllKSA9PiB7XG4gICAgY29uc3QgbW92aWVDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbW92aWVDYXJkLmNsYXNzTGlzdC5hZGQoJ21vdmllLWl0ZW0nKTtcblxuICAgIC8vIGNoZWNrIGlmIG1vdmllIGhhcyBwb3N0ZXIgaW1hZ2Ugb3RoZXJ3aXNlIHVzZSBkZWZhdWx0XG4gICAgY29uc3QgcG9zdGVyVXJsID0gbW92aWUuUG9zdGVyICE9PSAnTi9BJ1xuICAgICAgPyBtb3ZpZS5Qb3N0ZXJcbiAgICAgIDogJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTA5MjgxMzczMTQ5LWU5NTdjNjI5NjQwNj9peGxpYj1yYi00LjAuMyZpeGlkPU0zd3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4ZkElM0QlM0QmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0xMDI4JnE9ODAnO1xuXG4gICAgLy8gY3JlYXRlIG1vdmllIGNhcmRcbiAgICBtb3ZpZUNhcmQuaW5uZXJIVE1MID0gYFxuICAgICAgPGltZyBzcmM9JHtwb3N0ZXJVcmx9IGNsYXNzPVwibW92aWUtaW1nXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb3ZpZS1pbmZvXCI+XG4gICAgICAgICAgPGgzIGNsYXNzPVwidGl0bGVcIj4ke21vdmllLlRpdGxlfTwvaDM+XG4gICAgICAgICAgICA8cD50eXBlOiAke21vdmllLlR5cGV9PC9wPlxuICAgICAgICAgICAgPHA+eWVhcjogJHttb3ZpZS5ZZWFyfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInZpZXctbW9yZS1idG5cIj5WaWV3IERldGFpbHM8L2J1dHRvbj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXRhaWxzLWNvbnRhaW5lclwiIHN0eWxlPVwiZGlzcGxheTogbm9uZTtcIj48L2Rpdj5cbiAgICAgIGA7XG5cbiAgICBjb25zdCB2aWV3TW9yZUJ0biA9IG1vdmllQ2FyZC5xdWVyeVNlbGVjdG9yKCcudmlldy1tb3JlLWJ0bicpO1xuICAgIGNvbnN0IGRldGFpbHNDb250YWluZXIgPSBtb3ZpZUNhcmQucXVlcnlTZWxlY3RvcignLmRldGFpbHMtY29udGFpbmVyJyk7XG5cbiAgICAvLyBmZXRjaCBtb3ZpZSBkZXRhaWxzIGZyb20gdGhlIEFQSSB1c2luZyBpbWRiIGlkXG4gICAgY29uc3QgZmV0Y2hNb3ZpZURldGFpbHMgPSBhc3luYyAoaW1kYklEKSA9PiB7XG4gICAgICBjb25zdCBhcGlLZXkgPSAnNmQ3NmE4YjgnO1xuICAgICAgY29uc3QgZW5kcG9pbnQgPSBgaHR0cHM6Ly93d3cub21kYmFwaS5jb20vP2FwaWtleT0ke2FwaUtleX0maT0ke2ltZGJJRH1gO1xuXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGVuZHBvaW50KTtcbiAgICAgICAgY29uc3QgZGV0YWlscyA9IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgcmV0dXJuIGRldGFpbHM7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIEZ1bmN0aW9uIHRvIHRvZ2dsZSB2aXNpYmlsaXR5IG9mIGRldGFpbHMgY29udGFpbmVyXG4gICAgZnVuY3Rpb24gdG9nZ2xlRGV0YWlsc1Zpc2liaWxpdHkoZGV0YWlsc0NvbnRhaW5lcikge1xuICAgICAgZGV0YWlsc0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gZGV0YWlsc0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScgPyAnZmxleCcgOiAnbm9uZSc7XG4gICAgfVxuXG4gICAgLy8gdmlldyBtb3JlIGJ1dHRvbiBmdW5jdGlvbmFsaXR5XG4gICAgdmlld01vcmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBpZiAoZGV0YWlsc0NvbnRhaW5lci5pbm5lckhUTUwpIHtcbiAgICAgICAgLy8gRGV0YWlscyBhbHJlYWR5IGZldGNoZWQsIHNob3cgdGhlbVxuICAgICAgICB0b2dnbGVEZXRhaWxzVmlzaWJpbGl0eShkZXRhaWxzQ29udGFpbmVyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEZldGNoIG1vdmllIGRldGFpbHMgYW5kIGRpc3BsYXlcbiAgICAgICAgZmV0Y2hNb3ZpZURldGFpbHMobW92aWUuaW1kYklEKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgLy8gZGlzcGxheSBmZXRjaGVkIGRldGFpbHNcbiAgICAgICAgICBkZXRhaWxzQ29udGFpbmVyLmlubmVySFRNTCA9IGBcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGV0YWlscy1jb250ZW50XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2xvc2UtYnRuXCI+JnRpbWVzOzwvZGl2PiBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgICAgICA8aW1nIHNyYz0ke3Bvc3RlclVybH0gY2xhc3M9XCJtb2RhbC1pbWdcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgPGgzPiR7bW92aWUuVGl0bGV9PC9oMz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdWItZGVzY1wiPlxuICAgICAgICAgICAgPGg0IGNsYXNzPVwiZ2VucmVcIj5HZW5yZTogJHtkYXRhLkdlbnJlfTwvaDQ+XG4gICAgICAgICAgICA8cD4gJHtkYXRhLlJ1bnRpbWV9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8cD5EZXNjcmlwdGlvbjogJHtkYXRhLlBsb3R9PC9wPlxuICAgICAgICAgICAgPHA+Q2FzdDogJHtkYXRhLkFjdG9yc308L3A+XG4gICAgICAgICAgICA8cD5EaXJlY3RvcjogJHtkYXRhLkRpcmVjdG9yfTwvcD5cbiAgICAgICAgICAgIDx1bCBjbGFzcz1cInJhdGluZ3NcIj5SYXRpbmdzOlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwicmF0aW5nLWRlc2NcIj5JTURiOiAke2RhdGEuaW1kYlJhdGluZ308L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwicmF0aW5nLWRlc2NcIj5NZXRhU2NvcmU6ICR7ZGF0YS5NZXRhc2NvcmV9PC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgYDtcbiAgICAgICAgICB0b2dnbGVEZXRhaWxzVmlzaWJpbGl0eShkZXRhaWxzQ29udGFpbmVyKTtcblxuICAgICAgICAgIC8vIGNsb3NlIGJ1dHRvbiBmdW5jdGlvblxuICAgICAgICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gZGV0YWlsc0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtYnRuJyk7XG4gICAgICAgICAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0b2dnbGVEZXRhaWxzVmlzaWJpbGl0eShkZXRhaWxzQ29udGFpbmVyKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBhcHBlbmQgdG8gRE9NXG4gICAgcmVzdWx0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChtb3ZpZUNhcmQpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlNb3ZpZXM7XG4iLCJjb25zdCBzZWFyY2hNb3ZpZXMgPSBhc3luYyAocXVlcnkpID0+IHtcbiAgY29uc3QgYXBpS2V5ID0gJzZkNzZhOGI4JztcbiAgY29uc3QgZW5kcG9pbnQgPSAnaHR0cHM6Ly93d3cub21kYmFwaS5jb20vJztcblxuICAvLyBzZWFyY2ggcXVlcnkgc2VudCB0byBzZXJ2ZXJcbiAgY29uc3QgdXJsID0gYCR7ZW5kcG9pbnR9P2FwaWtleT0ke2FwaUtleX0mcz0ke3F1ZXJ5fWA7XG5cbiAgLy8gZ2V0dGluZyByZXN1bHRzXG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2godXJsKTtcblxuICAgIC8vIHBhcnNlIGRhdGEgdG8ganNvblxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXN1bHQuanNvbigpO1xuXG4gICAgLy8gc2VsZWN0IGRhdGEgZnJvbSB0aGUgc2VhcmNoIGNvbHVtbiBhbmQgcmV0dXJuIGl0XG4gICAgY29uc3QgbW92aWVEYXRhID0gZGF0YS5TZWFyY2g7XG4gICAgcmV0dXJuIG1vdmllRGF0YTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gZXJyb3I7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNlYXJjaE1vdmllcztcbiIsImNvbnN0IG9ubHlEaXNwbGF5UmVzdWx0cyA9ICgpID0+IHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rlc3QnKS5zdHlsZS5kaXNwbGF5ID0gJ3Vuc2V0JztcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWUnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufTtcblxuY29uc3Qgb25seURpc3BsYXlIb21lID0gKCkgPT4ge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVzdCcpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lJykuc3R5bGUuZGlzcGxheSA9ICd1bnNldCc7XG59O1xuXG5leHBvcnQgeyBvbmx5RGlzcGxheVJlc3VsdHMsIG9ubHlEaXNwbGF5SG9tZSB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9