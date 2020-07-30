webpackHotUpdate("static/development/pages/search.js",{

/***/ "./pages/search.tsx":
/*!**************************!*\
  !*** ./pages/search.tsx ***!
  \**************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Search; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.tsx\");\n/* harmony import */ var _components_layout_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout.module.css */ \"./components/layout.module.css\");\n/* harmony import */ var _components_layout_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_layout_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _lib_stringSearch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/stringSearch */ \"./lib/stringSearch.ts\");\n/* harmony import */ var _components_cards_searchCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/cards/searchCard */ \"./components/cards/searchCard.tsx\");\n/* harmony import */ var _models_pageId__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/pageId */ \"./models/pageId.ts\");\n/* harmony import */ var _constants_siteConstants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../constants/siteConstants */ \"./constants/siteConstants.ts\");\nvar _jsxFileName = \"/home/mgoulao/IEEE/cs-ieee-ist.github.io/pages/search.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\nvar __N_SSG = true;\nfunction Search(_ref) {\n  _s();\n\n  var _this = this;\n\n  var pages = _ref.pages;\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"])();\n  var nColor = 0;\n  var MAX_COLOR = 7;\n  var resultPages = [];\n  var pagesIds = pages.map(function (value) {\n    return new _models_pageId__WEBPACK_IMPORTED_MODULE_7__[\"default\"](value.topic, value.page);\n  });\n  if (router.query.query !== undefined) resultPages = Object(_lib_stringSearch__WEBPACK_IMPORTED_MODULE_5__[\"search\"])(router.query.query, pagesIds);\n  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 3\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 4\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 5\n    }\n  }, \"Search - \" + _constants_siteConstants__WEBPACK_IMPORTED_MODULE_8__[\"default\"].COMPLETE_TITLE)), __jsx(\"div\", {\n    className: _components_layout_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.contentContainer,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 4\n    }\n  }, __jsx(\"div\", {\n    className: _components_layout_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.searchResults,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 5\n    }\n  }, __jsx(\"span\", {\n    className: _components_layout_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.searchResultsTitle,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 6\n    }\n  }, \"Search Results\"), resultPages.map(function (value) {\n    return __jsx(_components_cards_searchCard__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      page: value.page,\n      key: value.page.getTitle(),\n      color: \"backColor\".concat(nColor = nColor % MAX_COLOR + 1),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 8\n      }\n    });\n  }))));\n}\n\n_s(Search, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"]];\n});\n\n_c = Search;\n\nvar _c;\n\n$RefreshReg$(_c, \"Search\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zZWFyY2gudHN4Pzc5YWIiXSwibmFtZXMiOlsiU2VhcmNoIiwicGFnZXMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJuQ29sb3IiLCJNQVhfQ09MT1IiLCJyZXN1bHRQYWdlcyIsInBhZ2VzSWRzIiwibWFwIiwidmFsdWUiLCJQYWdlSWQiLCJ0b3BpYyIsInBhZ2UiLCJxdWVyeSIsInVuZGVmaW5lZCIsInNlYXJjaCIsIlNpdGVDb25zdGFudHMiLCJDT01QTEVURV9USVRMRSIsInN0eWxlcyIsImNvbnRlbnRDb250YWluZXIiLCJzZWFyY2hSZXN1bHRzIiwic2VhcmNoUmVzdWx0c1RpdGxlIiwiZ2V0VGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsU0FBU0EsTUFBVCxPQUF5RTtBQUFBOztBQUFBOztBQUFBLE1BQXZEQyxLQUF1RCxRQUF2REEsS0FBdUQ7QUFDdkYsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLE1BQUlDLE1BQU0sR0FBRyxDQUFiO0FBQ0EsTUFBTUMsU0FBUyxHQUFHLENBQWxCO0FBQ0EsTUFBSUMsV0FBOEMsR0FBRyxFQUFyRDtBQUNBLE1BQU1DLFFBQVEsR0FBR04sS0FBSyxDQUFDTyxHQUFOLENBQVUsVUFBQUMsS0FBSztBQUFBLFdBQUssSUFBSUMsc0RBQUosQ0FBV0QsS0FBSyxDQUFDRSxLQUFqQixFQUF3QkYsS0FBSyxDQUFDRyxJQUE5QixDQUFMO0FBQUEsR0FBZixDQUFqQjtBQUNBLE1BQUlWLE1BQU0sQ0FBQ1csS0FBUCxDQUFhQSxLQUFiLEtBQXVCQyxTQUEzQixFQUNDUixXQUFXLEdBQUdTLGdFQUFNLENBQUNiLE1BQU0sQ0FBQ1csS0FBUCxDQUFhQSxLQUFkLEVBQStCTixRQUEvQixDQUFwQjtBQUVELFNBQ0MsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFRLGNBQWNTLGdFQUFhLENBQUNDLGNBQXBDLENBREQsQ0FERCxFQUlDO0FBQUssYUFBUyxFQUFFQyxvRUFBTSxDQUFDQyxnQkFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUssYUFBUyxFQUFFRCxvRUFBTSxDQUFDRSxhQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBTSxhQUFTLEVBQUVGLG9FQUFNLENBQUNHLGtCQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURELEVBRUVmLFdBQVcsQ0FBQ0UsR0FBWixDQUFnQixVQUFDQyxLQUFELEVBQVc7QUFDM0IsV0FDQyxNQUFDLG9FQUFEO0FBQ0MsVUFBSSxFQUFFQSxLQUFLLENBQUNHLElBRGI7QUFFQyxTQUFHLEVBQUVILEtBQUssQ0FBQ0csSUFBTixDQUFXVSxRQUFYLEVBRk47QUFHQyxXQUFLLHFCQUFlbEIsTUFBTSxHQUFJQSxNQUFNLEdBQUdDLFNBQVYsR0FBdUIsQ0FBL0MsQ0FITjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREQ7QUFPQSxHQVJBLENBRkYsQ0FERCxDQUpELENBREQ7QUFxQkE7O0dBOUJ1QkwsTTtVQUNSRyxxRDs7O0tBRFFILE0iLCJmaWxlIjoiLi9wYWdlcy9zZWFyY2gudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXRcIjtcbmltcG9ydCB7IGdldFBhZ2VzIH0gZnJvbSBcIi4uL2xpYi9jb250ZW50XCI7XG5pbXBvcnQgeyBHZXRTdGF0aWNQcm9wcyB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dC5tb2R1bGUuY3NzXCI7XG5cbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgc2VhcmNoIH0gZnJvbSBcIi4uL2xpYi9zdHJpbmdTZWFyY2hcIjtcbmltcG9ydCBTZWFyY2hDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL2NhcmRzL3NlYXJjaENhcmRcIjtcbmltcG9ydCBQYWdlSWQgZnJvbSBcIi4uL21vZGVscy9wYWdlSWRcIjtcbmltcG9ydCBTaXRlQ29uc3RhbnRzIGZyb20gXCIuLi9jb25zdGFudHMvc2l0ZUNvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWFyY2goeyBwYWdlcyB9OiB7IHBhZ2VzOiB7IHRvcGljOiBzdHJpbmcsIHBhZ2U6IHN0cmluZyB9W10gfSkge1xuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblx0bGV0IG5Db2xvciA9IDA7XG5cdGNvbnN0IE1BWF9DT0xPUiA9IDc7XG5cdGxldCByZXN1bHRQYWdlczogeyBwYWdlOiBQYWdlSWQ7IHJhdGlvOiBudW1iZXIgfVtdID0gW107XG5cdGNvbnN0IHBhZ2VzSWRzID0gcGFnZXMubWFwKHZhbHVlID0+IChuZXcgUGFnZUlkKHZhbHVlLnRvcGljLCB2YWx1ZS5wYWdlKSkpO1xuXHRpZiAocm91dGVyLnF1ZXJ5LnF1ZXJ5ICE9PSB1bmRlZmluZWQpXG5cdFx0cmVzdWx0UGFnZXMgPSBzZWFyY2gocm91dGVyLnF1ZXJ5LnF1ZXJ5IGFzIHN0cmluZywgcGFnZXNJZHMpO1xuXG5cdHJldHVybiAoXG5cdFx0PExheW91dD5cblx0XHRcdDxIZWFkPlxuXHRcdFx0XHQ8dGl0bGU+e1wiU2VhcmNoIC0gXCIgKyBTaXRlQ29uc3RhbnRzLkNPTVBMRVRFX1RJVExFfTwvdGl0bGU+XG5cdFx0XHQ8L0hlYWQ+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnRDb250YWluZXJ9PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaFJlc3VsdHN9PlxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaFJlc3VsdHNUaXRsZX0+U2VhcmNoIFJlc3VsdHM8L3NwYW4+XG5cdFx0XHRcdFx0e3Jlc3VsdFBhZ2VzLm1hcCgodmFsdWUpID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdDxTZWFyY2hDYXJkXG5cdFx0XHRcdFx0XHRcdFx0cGFnZT17dmFsdWUucGFnZX1cblx0XHRcdFx0XHRcdFx0XHRrZXk9e3ZhbHVlLnBhZ2UuZ2V0VGl0bGUoKX1cblx0XHRcdFx0XHRcdFx0XHRjb2xvcj17YGJhY2tDb2xvciR7KG5Db2xvciA9IChuQ29sb3IgJSBNQVhfQ09MT1IpICsgMSl9YH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fSl9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9MYXlvdXQ+XG5cdCk7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XG5cdGNvbnN0IHBhZ2VzID0gYXdhaXQgZ2V0UGFnZXMoKTtcblx0cmV0dXJuIHtcblx0XHRwcm9wczoge1xuXHRcdFx0cGFnZXMsXG5cdFx0fSxcblx0fTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/search.tsx\n");

/***/ })

})