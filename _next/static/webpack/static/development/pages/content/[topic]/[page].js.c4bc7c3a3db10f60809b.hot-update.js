webpackHotUpdate("static/development/pages/content/[topic]/[page].js",{

/***/ "./components/contentSidebar.tsx":
/*!***************************************!*\
  !*** ./components/contentSidebar.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ContentSidebar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout.module.css */ "./components/layout.module.css");
/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_layout_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/mgoulao/IEEE/cs-ieee-ist.github.io/components/contentSidebar.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function ContentSidebar(_ref) {
  var _this = this;

  var topicPages = _ref.topicPages,
      activePage = _ref.activePage;
  return __jsx("div", {
    className: " ".concat(_layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.contentSidebar),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx("ul", {
    className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.sidebarList,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, topicPages.map(function (page) {
    return __jsx("li", {
      key: page.getTitle(),
      className: "".concat(_layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.sidebarItem, " ").concat(isSamePage(page.getPage(), activePage) ? _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.active : ""),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 13
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "".concat("", "/content/[topic]/[page]"),
      as: "".concat("").concat(page.getLink()),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 15
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }
    }, page.getPage())));
  })));
}

var isSamePage = function isSamePage(page, activePage) {
  console.log(page, activePage);
  return activePage === page.split("/")[page.split("/").length - 1];
};

/***/ })

})
//# sourceMappingURL=[page].js.c4bc7c3a3db10f60809b.hot-update.js.map