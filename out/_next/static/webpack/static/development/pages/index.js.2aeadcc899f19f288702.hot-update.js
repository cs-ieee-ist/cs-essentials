webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/headerSearch.tsx":
/*!*************************************!*\
  !*** ./components/headerSearch.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return HeaderSearch; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout.module.css */ \"./components/layout.module.css\");\n/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_layout_module_css__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/home/mgoulao/IEEE/cs-ieee-ist.github.io/components/headerSearch.tsx\",\n    _s2 = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nfunction HeaderSearch() {\n  _s2();\n\n  var _s = $RefreshSig$();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\"),\n      query = _useState[0],\n      setQuery = _useState[1];\n\n  var inputChange = function inputChange(event) {\n    setQuery(event.target.value);\n  };\n\n  var keyPressHandler = function keyPressHandler(event) {\n    _s();\n\n    console.log(event.key);\n    var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n    if (event.key === \"Enter\") router.push(\"\".concat(\"\", \"/search?query=\").concat(query));\n  };\n\n  _s(keyPressHandler, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n    return [next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"]];\n  });\n\n  return __jsx(\"div\", {\n    className: _layout_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.headerSearch,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 5\n    }\n  }, __jsx(\"input\", {\n    placeholder: \"Search\",\n    onChange: inputChange,\n    onKeyPress: keyPressHandler,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }\n  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: {\n      pathname: \"\".concat(\"\", \"/search\"),\n      query: {\n        query: query\n      }\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }\n  }, __jsx(\"a\", {\n    className: _layout_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.headerSearchBtn,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 9\n    }\n  }, __jsx(\"img\", {\n    src: \"\".concat(\"\", \"/icons/search.svg\"),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 11\n    }\n  }))));\n}\n\n_s2(HeaderSearch, \"HYX2QbDDdTtlu7GfoQbAPZOIM6k=\");\n\n_c = HeaderSearch;\n\nvar _c;\n\n$RefreshReg$(_c, \"HeaderSearch\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hlYWRlclNlYXJjaC50c3g/NTJlMSJdLCJuYW1lcyI6WyJIZWFkZXJTZWFyY2giLCJ1c2VTdGF0ZSIsInF1ZXJ5Iiwic2V0UXVlcnkiLCJpbnB1dENoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJrZXlQcmVzc0hhbmRsZXIiLCJjb25zb2xlIiwibG9nIiwia2V5Iiwicm91dGVyIiwidXNlUm91dGVyIiwicHVzaCIsInN0eWxlcyIsImhlYWRlclNlYXJjaCIsInBhdGhuYW1lIiwiaGVhZGVyU2VhcmNoQnRuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRWUsU0FBU0EsWUFBVCxHQUF3QjtBQUFBOztBQUFBOztBQUFBLGtCQUNYQyxzREFBUSxDQUFDLEVBQUQsQ0FERztBQUFBLE1BQzlCQyxLQUQ4QjtBQUFBLE1BQ3ZCQyxRQUR1Qjs7QUFHckMsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsS0FBRCxFQUFXO0FBQzdCRixZQUFRLENBQUNFLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxLQUFkLENBQVI7QUFDRCxHQUZEOztBQUlBLE1BQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0gsS0FBRCxFQUFXO0FBQUE7O0FBQ2pDSSxXQUFPLENBQUNDLEdBQVIsQ0FBWUwsS0FBSyxDQUFDTSxHQUFsQjtBQUNBLFFBQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxRQUFJUixLQUFLLENBQUNNLEdBQU4sS0FBYyxPQUFsQixFQUNDQyxNQUFNLENBQUNFLElBQVAsd0NBQXVEWixLQUF2RDtBQUNGLEdBTEQ7O0FBUHFDLEtBTy9CTSxlQVArQjtBQUFBLFlBU3BCSyxxREFUb0I7QUFBQTs7QUFjckMsU0FDRTtBQUFLLGFBQVMsRUFBRUUseURBQU0sQ0FBQ0MsWUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU8sZUFBVyxFQUFDLFFBQW5CO0FBQTRCLFlBQVEsRUFBRVosV0FBdEM7QUFBbUQsY0FBVSxFQUFFSSxlQUEvRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFFO0FBQUVTLGNBQVEsMEJBQVY7QUFBaURmLFdBQUssRUFBRTtBQUFFQSxhQUFLLEVBQUVBO0FBQVQ7QUFBeEQsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUVhLHlEQUFNLENBQUNHLGVBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLE9BQUcsb0NBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsQ0FGRixDQURGO0FBVUQ7O0lBeEJ1QmxCLFk7O0tBQUFBLFkiLCJmaWxlIjoiLi9jb21wb25lbnRzL2hlYWRlclNlYXJjaC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2xheW91dC5tb2R1bGUuY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlclNlYXJjaCgpIHtcbiAgY29uc3QgW3F1ZXJ5LCBzZXRRdWVyeV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCBpbnB1dENoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIHNldFF1ZXJ5KGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgY29uc3Qga2V5UHJlc3NIYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc29sZS5sb2coZXZlbnQua2V5KTtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICAgIGlmIChldmVudC5rZXkgPT09IFwiRW50ZXJcIilcbiAgICAgcm91dGVyLnB1c2goYCR7cHJvY2Vzcy5lbnYuQkFDS0VORF9VUkx9L3NlYXJjaD9xdWVyeT0ke3F1ZXJ5fWApXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlclNlYXJjaH0+XG4gICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIiBvbkNoYW5nZT17aW5wdXRDaGFuZ2V9IG9uS2V5UHJlc3M9e2tleVByZXNzSGFuZGxlcn0+PC9pbnB1dD5cbiAgICAgIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6IGAke3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMfS9zZWFyY2hgLCBxdWVyeTogeyBxdWVyeTogcXVlcnkgfSB9fT5cbiAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyU2VhcmNoQnRufT5cbiAgICAgICAgICA8aW1nIHNyYz17YCR7cHJvY2Vzcy5lbnYuQkFDS0VORF9VUkx9L2ljb25zL3NlYXJjaC5zdmdgfT48L2ltZz5cbiAgICAgICAgPC9hPlxuICAgICAgPC9MaW5rPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/headerSearch.tsx\n");

/***/ })

})