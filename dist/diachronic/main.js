(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n    display: block;\n    height: 100%;\n    overflow: hidden;\n}\n\n.logo {\n    font-size: 30px;\n}\n\n.header {\n    background-color: lightgrey;\n    color: black;\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n}\n\n.header .book {\n    display: inline-block;\n    background-color: gray;\n    color: white;\n    font-weight: bold;\n    font-size: 24px;\n    padding: 16px 40px 15px 40px;\n    cursor: pointer;\n}\n\n.header .book:hover {\n    text-decoration: underline;\n}\n\n.header .title {\n    display: inline-block;\n    font-weight: normal;\n    font-size: 25px;\n    padding: 15px 0px 0px 40px;\n}\n\n.header input {\n    position: absolute;\n    right: 40px;\n    top: 12px;\n    height: 30px;\n    width: 20%;\n    padding-left: 10px;\n}\n\n.ui-accordion-header.ui-state-active {\n    border: 0;\n}\n\n.split-pane {\n    height: calc(100% - 60px) !important;\n    display: block;\n}\n\n.split-pane-content-primary, .split-pane-content-secondary {\n    height: calc(100% - 20px) !important;\n}\n\n.book {\n    height: 100%;\n    padding: 10px;\n    overflow-y: auto;\n}\n\n.book .chapter {\n    \n}\n\n.book .chapter .ltr {\n    text-align: left;\n    line-height: 30px;\n}\n\n.book .chapter .rtl {\n    text-align: right;\n    line-height: 20px;\n}\n\n.book .chapter .verse {\n    display: inline;\n}\n\n.book .chapter .verse .text {\n    display: inline;\n}\n\n.book .chapter .verse .number {\n    display: inline;\n    font-weight: bold;\n}\n\n.book .chapter .ltr .verse .number {\n    padding-right: 5px;\n}\n\n.book .chapter .rtl .verse .number {\n    padding-left: 5px;\n    float:right;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <div class=\"book\" (click)=\"click_book()\">{{book}} {{chapter}}</div>\n  <div class=\"title\">Bible \"thoughts\" with Mark Stone</div>\n  <input type=\"text\" pInputText placeholder=\"Search\">\n</div>\n<p-sidebar [(visible)]=\"showSideMenu\">\n  <p-accordion [activeIndex]=\"book_num - 1\" expandIcon=\"\" collapseIcon=\"\">\n    <div *ngFor=\"let book of books\">\n      <p-accordionTab header=\"{{book.title}}\">\n        <div class=\"ui-g\">\n            <div class=\"ui-g-2\" *ngFor=\"let c of numArray(1, book.num_of_chapters + 1)\">{{c}}</div>\n        </div>\n      </p-accordionTab>\n    </div>\n  </p-accordion>\n</p-sidebar>\n<vertical-split-pane class=\"split-pane\"\n    primary-component-minsize=\"300\"\n    primary-component-initialratio=\"0.5\">\n\n    <div class=\"split-pane-content-primary\">\n        <div class=\"book\">\n          <div class=\"chapter\" *ngFor=\"let chapter of left_chapters\">\n              <div class=\"ltr\" *ngIf=\"!chapter.rtl\">\n                <div class=\"verse\" *ngFor=\"let verse of chapter.verses\">\n                  <div class=\"number\" *ngIf=\"verse.number\">{{verse.number}}</div>\n                  <div class=\"text\">{{verse.text}}</div>\n                  <div class=\"linebreak\" *ngIf=\"verse.linebreak\">&nbsp;</div>\n                </div>\n              </div>\n              <div class=\"rtl\" *ngIf=\"chapter.rtl\">\n                <div class=\"verse\" *ngFor=\"let verse of chapter.verses\">\n                  <div class=\"text\">{{verse.text}}</div>\n                  <div class=\"number\" *ngIf=\"verse.number\">{{verse.number}}</div>\n                  <div class=\"linebreak\" *ngIf=\"verse.linebreak\">&nbsp;</div>\n                </div>\n              </div>\n          </div>\n        </div>\n    </div>\n\n    <div class=\"split-pane-content-secondary\">\n        <div class=\"book\">\n            <div class=\"chapter\" *ngFor=\"let chapter of right_chapters\">\n              <div class=\"ltr\" *ngIf=\"!chapter.rtl\">\n                <div class=\"verse\" *ngFor=\"let verse of chapter.verses\">\n                  <div class=\"number\" *ngIf=\"verse.number\">{{verse.number}}</div>\n                  <div class=\"text\">{{verse.text}}</div>\n                  <div class=\"linebreak\" *ngIf=\"verse.linebreak\">&nbsp;</div>\n                </div>\n              </div>\n              <div class=\"rtl\" *ngIf=\"chapter.rtl\">\n                <div class=\"verse\" *ngFor=\"let verse of chapter.verses\">\n                  <div class=\"text\">{{verse.text}}</div>\n                  <div class=\"number\" *ngIf=\"verse.number\">{{verse.number}}</div>\n                  <div class=\"linebreak\" *ngIf=\"verse.linebreak\">&nbsp;</div>\n                </div>\n              </div>\n            </div>\n        </div>\n    </div>\n\n</vertical-split-pane>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios_jsonp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios-jsonp */ "./node_modules/axios-jsonp/lib/index.js");
/* harmony import */ var axios_jsonp__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios_jsonp__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_books_OT__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data/books_OT */ "./src/app/data/books_OT.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.books = _data_books_OT__WEBPACK_IMPORTED_MODULE_3__["default"];
        this.book = 'Genesis';
        this.book_num = 1;
        this.chapter = 1;
        this.left_chapters = [];
        this.right_chapters = [];
        // init content
        Promise.all([
            this.getBibleText('net', this.book, this.chapter).then(function (v) { return _this.left_chapters.push(v); }),
            this.getBibleText('bhs', this.book, this.chapter).then(function (v) { return _this.right_chapters.push(v); })
        ]);
    };
    AppComponent.prototype.click_book = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.showSideMenu = true;
                return [2 /*return*/];
            });
        });
    };
    AppComponent.prototype.getBibleText = function (trans, book, start_chapter, start_verse, end_verse) {
        return __awaiter(this, void 0, void 0, function () {
            var resp, activeChapter, passage, json, v;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        activeChapter = null;
                        passage = book + " " + start_chapter + (start_verse ? ':' + start_verse : '') + (end_verse ? '-' + end_verse : '');
                        if (!(trans.toLowerCase() === 'net')) return [3 /*break*/, 2];
                        return [4 /*yield*/, axios__WEBPACK_IMPORTED_MODULE_1___default()({
                                url: "//labs.bible.org/api/?type=json&formatting=para&passage=" + passage,
                                adapter: axios_jsonp__WEBPACK_IMPORTED_MODULE_2__,
                                callbackParamName: 'callback'
                            })];
                    case 1:
                        // @ts-ignore
                        resp = _a.sent();
                        console.log(resp.data[0]);
                        resp.data.forEach(function (v) {
                            if (activeChapter === null) {
                                activeChapter = {
                                    title: v.title,
                                    number: v.chapter,
                                    verses: [],
                                    rtl: trans.toLowerCase() === 'bhs'
                                };
                            }
                            activeChapter.verses.push({
                                number: v.verse,
                                text: v.text.replace(/\<\/?p ?[a-z\=\"]{0,}\>/gi, '').replace(/\<a .*\<\/a\>/gi, ''),
                                linebreak: (v.text.indexOf('</p>') > -1)
                            });
                        });
                        console.log(activeChapter.verses[0]);
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, axios__WEBPACK_IMPORTED_MODULE_1___default()({
                            url: "//getbible.net/json?version=" + trans + "&passage=" + passage,
                            adapter: axios_jsonp__WEBPACK_IMPORTED_MODULE_2__,
                            callbackParamName: 'getbible'
                        })];
                    case 3:
                        // @ts-ignore
                        resp = _a.sent();
                        json = (start_verse) ? resp.data.book[0] : resp.data;
                        activeChapter = {
                            title: '',
                            number: json.chapter_nr,
                            verses: [],
                            rtl: trans.toLowerCase() === 'bhs'
                        };
                        // tslint:disable-next-line:forin
                        for (v in json.chapter) {
                            activeChapter.verses.push({
                                // tslint:disable-next-line:radix
                                number: json.chapter[v].verse_nr,
                                text: json.chapter[v].verse,
                                linebreak: trans.toLowerCase() === 'bhs'
                            });
                        }
                        _a.label = 4;
                    case 4: return [2 /*return*/, activeChapter];
                }
            });
        });
    };
    AppComponent.prototype.numArray = function (from, to) {
        return Array(to - from).fill(0).map(function (n, i) { return i + from; });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ng2_split_pane_lib_ng2_split_pane__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-split-pane/lib/ng2-split-pane */ "./node_modules/ng2-split-pane/lib/ng2-split-pane.js");
/* harmony import */ var ng2_split_pane_lib_ng2_split_pane__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_split_pane_lib_ng2_split_pane__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/accordion */ "./node_modules/primeng/accordion.js");
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_accordion__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/sidebar */ "./node_modules/primeng/sidebar.js");
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_sidebar__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/scrollpanel */ "./node_modules/primeng/scrollpanel.js");
/* harmony import */ var primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_7__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                ng2_split_pane_lib_ng2_split_pane__WEBPACK_IMPORTED_MODULE_4__["SplitPaneModule"],
                primeng_accordion__WEBPACK_IMPORTED_MODULE_5__["AccordionModule"],
                primeng_sidebar__WEBPACK_IMPORTED_MODULE_6__["SidebarModule"],
                primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_7__["ScrollPanelModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/data/books_OT.ts":
/*!**********************************!*\
  !*** ./src/app/data/books_OT.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([
    {
        'title': 'Genesis',
        'number': 1,
        'num_of_verses': 1533,
        'num_of_chapters': 50
    },
    {
        'title': 'Exodus',
        'number': 2,
        'num_of_verses': 1213,
        'num_of_chapters': 40
    },
    {
        'title': 'Leviticus',
        'number': 3,
        'num_of_verses': 859,
        'num_of_chapters': 27
    },
    {
        'title': 'Numbers',
        'number': 4,
        'num_of_verses': 1288,
        'num_of_chapters': 36
    },
    {
        'title': 'Deuteronomy',
        'number': 5,
        'num_of_verses': 959,
        'num_of_chapters': 34
    },
    {
        'title': 'Joshua',
        'number': 6,
        'num_of_verses': 658,
        'num_of_chapters': 24
    },
    {
        'title': 'Judges',
        'number': 7,
        'num_of_verses': 618,
        'num_of_chapters': 21
    },
    {
        'title': 'Ruth',
        'number': 8,
        'num_of_verses': 85,
        'num_of_chapters': 4
    },
    {
        'title': '1 Samuel',
        'number': 9,
        'num_of_verses': 810,
        'num_of_chapters': 31
    },
    {
        'title': '2 Samuel',
        'number': 10,
        'num_of_verses': 695,
        'num_of_chapters': 24
    },
    {
        'title': '1 Kings',
        'number': 11,
        'num_of_verses': 816,
        'num_of_chapters': 22
    },
    {
        'title': '2 Kings',
        'number': 12,
        'num_of_verses': 719,
        'num_of_chapters': 25
    },
    {
        'title': '1 Chronicles',
        'number': 13,
        'num_of_verses': 942,
        'num_of_chapters': 29
    },
    {
        'title': '2 Chronicles',
        'number': 14,
        'num_of_verses': 822,
        'num_of_chapters': 36
    },
    {
        'title': 'Ezra',
        'number': 15,
        'num_of_verses': 280,
        'num_of_chapters': 10
    },
    {
        'title': 'Nehemiah',
        'number': 16,
        'num_of_verses': 406,
        'num_of_chapters': 13
    },
    {
        'title': 'Esther',
        'number': 17,
        'num_of_verses': 167,
        'num_of_chapters': 10
    },
    {
        'title': 'Job',
        'number': 18,
        'num_of_verses': 1070,
        'num_of_chapters': 42
    },
    {
        'title': 'Psalms',
        'number': 19,
        'num_of_verses': 2461,
        'num_of_chapters': 150
    },
    {
        'title': 'Proverbs',
        'number': 20,
        'num_of_verses': 915,
        'num_of_chapters': 31
    },
    {
        'title': 'Ecclesiastes',
        'number': 21,
        'num_of_verses': 222,
        'num_of_chapters': 12
    },
    {
        'title': 'Song of Solomon',
        'number': 22,
        'num_of_verses': 117,
        'num_of_chapters': 8
    },
    {
        'title': 'Isaiah',
        'number': 23,
        'num_of_verses': 1292,
        'num_of_chapters': 66
    },
    {
        'title': 'Jeremiah',
        'number': 24,
        'num_of_verses': 1364,
        'num_of_chapters': 52
    },
    {
        'title': 'Lamentations',
        'number': 1,
        'num_of_verses': 154,
        'num_of_chapters': 5
    },
    {
        'title': 'Ezekiel',
        'number': 25,
        'num_of_verses': 1273,
        'num_of_chapters': 48
    },
    {
        'title': 'Daniel',
        'number': 26,
        'num_of_verses': 357,
        'num_of_chapters': 12
    },
    {
        'title': 'Hosea',
        'number': 27,
        'num_of_verses': 197,
        'num_of_chapters': 14
    },
    {
        'title': 'Joel',
        'number': 28,
        'num_of_verses': 73,
        'num_of_chapters': 3
    },
    {
        'title': 'Amos',
        'number': 29,
        'num_of_verses': 146,
        'num_of_chapters': 9
    },
    {
        'title': 'Obadiah',
        'number': 30,
        'num_of_verses': 21,
        'num_of_chapters': 1
    },
    {
        'title': 'Jonah',
        'number': 31,
        'num_of_verses': 48,
        'num_of_chapters': 4
    },
    {
        'title': 'Micah',
        'number': 32,
        'num_of_verses': 105,
        'num_of_chapters': 7
    },
    {
        'title': 'Nahum',
        'number': 33,
        'num_of_verses': 47,
        'num_of_chapters': 3
    },
    {
        'title': 'Habakkuk',
        'number': 34,
        'num_of_verses': 56,
        'num_of_chapters': 3
    },
    {
        'title': 'Zephaniah',
        'number': 35,
        'num_of_verses': 53,
        'num_of_chapters': 3
    },
    {
        'title': 'Haggai',
        'number': 36,
        'num_of_verses': 38,
        'num_of_chapters': 2
    },
    {
        'title': 'Zechariah',
        'number': 37,
        'num_of_verses': 211,
        'num_of_chapters': 14
    },
    {
        'title': 'Malachi',
        'number': 38,
        'num_of_verses': 55,
        'num_of_chapters': 4
    }
]);


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/micah/Source/diachronics/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map