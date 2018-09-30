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

module.exports = ":host {\r\n    display: block;\r\n    height: 100%;\r\n    overflow: hidden;\r\n}\r\n\r\n.logo {\r\n    font-size: 30px;\r\n}\r\n\r\n.header {\r\n    background-color: #D9D4DF;\r\n    color: #422360;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    height: 50px;\r\n}\r\n\r\n.header .book {\r\n    display: inline;\r\n    background-color: gray;\r\n    color: white;\r\n    font-weight: bold;\r\n    font-size: 24px;\r\n    cursor: pointer;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.header .book span:hover {\r\n    text-decoration: underline;\r\n}\r\n\r\n.header .book i {\r\n    padding: 14px 15px 15px 5px;\r\n}\r\n\r\n.header .title {\r\n    display: inline;\r\n    font-weight: normal;\r\n    font-size: 25px;\r\n    padding: 15px 0px 0px 40px;\r\n}\r\n\r\n.header input {\r\n    position: absolute;\r\n    right: 20px;\r\n    top: 7px;\r\n    height: 30px;\r\n    width: 20%;\r\n    padding-left: 10px;\r\n}\r\n\r\n.ui-accordion-header.ui-state-active {\r\n    border: 0;\r\n}\r\n\r\n.sideMenu.books .ui-sidebar{\r\n    overflow-y: auto;\r\n}\r\n\r\n.sideMenu .chapter {\r\n    cursor: pointer;\r\n}\r\n\r\n.sideMenu .chapter:hover {\r\n    text-decoration: underline;\r\n    font-weight: bold;\r\n}\r\n\r\n.sideMenu .ui-selectbutton {\r\n    width:100%;\r\n    margin-top: 10px;\r\n}\r\n\r\n.sideMenu .ui-selectbutton .ui-button {\r\n    width: 50%;\r\n}\r\n\r\n.sideMenu .onOff {\r\n    line-height: 35px;\r\n}\r\n\r\n.sideMenu .onOff p-inputswitch { \r\n    position: absolute;\r\n    right: 31px;\r\n}\r\n\r\n.periods .ui-selectbutton {\r\n    width: 100%;\r\n    display: table;\r\n    table-layout: fixed;\r\n}\r\n\r\n.periods .ui-selectbutton .ui-button {\r\n    display: table-cell;\r\n    padding-top: 5px;\r\n    background-color: whitesmoke !important;\r\n}\r\n\r\n.periods .ui-selectbutton .ui-button:hover {\r\n    background-color: lightgrey !important;\r\n}\r\n\r\n.periods .ui-selectbutton .ui-button.ui-state-active {\r\n    background-color: #186ba0 !important;\r\n}\r\n\r\n.periods .ui-selectbutton .ui-button.ui-state-active .period_abbrev {\r\n    background-color: #186ba0 !important;\r\n    color: white !important;\r\n}\r\n\r\n.periods .ui-selectbutton .ui-button.ui-state-active .period_date {\r\n    background-color: #186ba0 !important;\r\n    color: white !important;\r\n}\r\n\r\n.periods .ui-selectbutton .ui-button .period:hover {\r\n    text-decoration: underline;\r\n}\r\n\r\n.periods .ui-selectbutton .ui-button .period_abbrev {\r\n    padding: 2px 5px 2px 5px;\r\n}\r\n\r\n.periods .ui-selectbutton .ui-button .period_date {\r\n    font-size: 10px;\r\n    color: gray;\r\n    padding: 5px;\r\n}\r\n\r\n.split-pane {\r\n    height: calc(100% - 97px) !important;\r\n    display: block;\r\n}\r\n\r\n.split-pane-content-primary, .split-pane-content-secondary {\r\n    height: calc(100% - 20px) !important;\r\n}\r\n\r\n.book {\r\n    height: 100%;\r\n    padding: 10px;\r\n    overflow-y: auto;\r\n}\r\n\r\n.book .chapter_number_hidden {\r\n    visibility: hidden;\r\n    position: absolute;\r\n    right: -10px;\r\n}\r\n\r\n.book .chapter_number {\r\n    font-weight: bold;\r\n    font-size: 250%;\r\n}\r\n\r\n.book .ltr .chapter_number {\r\n    padding: 0 0 20px 5px;\r\n}\r\n\r\n.book .rtl .chapter_number {\r\n    padding: 0 5px 20px 0;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\r\n  <div class=\"book\">\r\n    <i class=\"fa fa-bars\" aria-hidden=\"true\" (click)=\"click_menu()\"></i><span (click)=\"click_book()\">{{book}} {{chapter}}</span>\r\n  </div>\r\n  <div class=\"title\">Bible \"thoughts\" with Mark Stone</div>\r\n  <input type=\"text\" pInputText placeholder=\"Search\">\r\n</div>\r\n<p-sidebar [(visible)]=\"showSideMenu\" class=\"sideMenu toggles\">\r\n  <p-selectButton [options]=\"chronologies\" [(ngModel)]=\"chronology_selected\" (onChange)=\"click_chronology()\"></p-selectButton>\r\n  <p-selectButton [options]=\"versedisplays\" [(ngModel)]=\"showLiminal\"></p-selectButton>\r\n  <p-selectButton [options]=\"verselines\" [(ngModel)]=\"showLineByLine\"></p-selectButton>\r\n  <p-selectButton [options]=\"versenumbers\" [(ngModel)]=\"showVerseNumbers\"></p-selectButton>\r\n</p-sidebar>\r\n<p-sidebar [(visible)]=\"showBiblePicker\" class=\"sideMenu books\">\r\n  <p-accordion class=\"books\" [activeIndex]=\"book_num - 1\" expandIcon=\"\" collapseIcon=\"\">\r\n    <div *ngFor=\"let book of books\">\r\n      <p-accordionTab header=\"{{book.title}}\">\r\n        <div class=\"ui-g\">\r\n          <div class=\"ui-g-2 chapter\" *ngFor=\"let c of numArray(1, book.num_of_chapters + 1)\" (click)=\"click_chapter(book.title, c)\">{{c}}</div>\r\n        </div>\r\n      </p-accordionTab>\r\n    </div>\r\n  </p-accordion>\r\n</p-sidebar>\r\n<p-selectButton class=\"periods\" [options]=\"periods_items\" [(ngModel)]=\"periods_selected\" multiple=\"true\">\r\n  <ng-template let-item>\r\n    <div *ngIf=\"item.value\" class=\"period\" title=\"{{item.value.name}}\" (click)=\"click_period(item.value)\">\r\n      <span class=\"period_abbrev\" [style.color]=\"item.value.color_text\" [style.background-color]=\"item.value.color_bg\">{{item.value.abbrev}}</span>\r\n      <div class=\"period_date\">{{item.value.date}} BCE</div>\r\n    </div>\r\n    <div *ngIf=\"!item.value\" class=\"period\">\r\n        <span class=\"period_abbrev\">No sources found!</span>\r\n        <div class=\"period_date\">&nbsp;</div>\r\n    </div>\r\n</ng-template>\r\n</p-selectButton>\r\n<vertical-split-pane class=\"split-pane\" primary-component-minsize=\"300\" primary-component-initialratio=\"0.5\">\r\n    <div class=\"split-pane-content-primary\">\r\n        <div class=\"book book_left\">\r\n          <div *ngFor=\"let chapter of left_chapters\" class=\"chapter chapter_{{chapter.number}}\" [attr.data-number]=\"chapter.number\">\r\n              <div class=\"ltr\" *ngIf=\"!chapter.rtl\">\r\n                <div class=\"chapter_number\" *ngIf=\"left_chapters.length > 1\">{{chapter.number}}</div>\r\n                <app-chapter [chapter]=\"chapter\" [aperiods]=\"periods_selected\" [showVerseNumbers]=\"showVerseNumbers\" [showLineByLine]=\"showLineByLine\" [showLiminal]=\"showLiminal\"></app-chapter>\r\n              </div>\r\n              <div class=\"rtl\" *ngIf=\"chapter.rtl\">\r\n                <div class=\"chapter_number\" *ngIf=\"left_chapters.length > 1\">{{chapter.number}}</div>\r\n                <app-chapter [chapter]=\"chapter\" [aperiods]=\"periods_selected\" [showVerseNumbers]=\"showVerseNumbers\" [showLineByLine]=\"showLineByLine\" [showLiminal]=\"showLiminal\"></app-chapter>\r\n              </div>\r\n          </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"split-pane-content-secondary\">\r\n        <div class=\"book book_right\">\r\n            <div *ngFor=\"let chapter of right_chapters\" class=\"chapter chapter_{{chapter.number}}\" [attr.data-number]=\"chapter.number\">\r\n              <div class=\"ltr\" *ngIf=\"!chapter.rtl\">\r\n                <div class=\"chapter_number\" *ngIf=\"left_chapters.length > 1\">{{chapter.number}}</div>\r\n                <app-chapter [chapter]=\"chapter\" [aperiods]=\"periods_selected\" [showVerseNumbers]=\"showVerseNumbers\" [showLineByLine]=\"showLineByLine\" [showLiminal]=\"showLiminal\"></app-chapter>\r\n              </div>\r\n              <div class=\"rtl\" *ngIf=\"chapter.rtl\">\r\n                <div class=\"chapter_number\" *ngIf=\"left_chapters.length > 1\">{{chapter.number}}</div>\r\n                <app-chapter [chapter]=\"chapter\" [aperiods]=\"periods_selected\" [showVerseNumbers]=\"showVerseNumbers\" [showLineByLine]=\"showLineByLine\" [showLiminal]=\"showLiminal\"></app-chapter>\r\n              </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</vertical-split-pane>"

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
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_books_OT__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data/books_OT */ "./src/app/data/books_OT.ts");
/* harmony import */ var _models_chronology__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./models/chronology */ "./src/app/models/chronology.ts");
/* harmony import */ var _models_period__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./models/period */ "./src/app/models/period.ts");
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
        this.periods = [];
        this.periods_items = [{ label: '', value: false }];
        this.periods_selected = [];
        this.period_colors = ['D09429', '7338A7', 'B71A4F', '507BC3', '859F4A', '827570', 'E28539'];
        this.books = _data_books_OT__WEBPACK_IMPORTED_MODULE_4__["default"];
        this.book = 'Genesis';
        this.book_num = 1;
        this.chapter = 1;
        this.verse = 1;
        this.left_translation = 'net';
        this.right_translation = 'bhs';
        this.left_chapters = [];
        this.right_chapters = [];
        this.chronologies = [];
        this.chronology_selected = [];
        this.versedisplays = [
            { label: 'Liminal', value: true },
            { label: 'Continuous', value: false }
        ];
        this.verselines = [
            { label: 'Line / Verses', value: true },
            { label: 'Natural', value: false }
        ];
        this.versenumbers = [
            { label: 'Show Verse #', value: true },
            { label: 'Hide Verse #', value: false }
        ];
        this.showVerseNumbers = true;
        this.showLineByLine = false;
        this.showLiminal = true;
        this.showSideMenu = false;
        this.showBiblePicker = false;
        this.scroll_processing = false;
        this.scroll_timeout = null;
    }
    AppComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var cachebuster, _a, _b, _c, _d, _e, _f, _g, _h, _j;
            return __generator(this, function (_k) {
                switch (_k.label) {
                    case 0:
                        cachebuster = 0;
                        this.scroll_bound = this.scroll.bind(this);
                        window.addEventListener('scroll', this.scroll_bound, true);
                        // get data
                        _a = this;
                        return [4 /*yield*/, axios__WEBPACK_IMPORTED_MODULE_1___default()({
                                url: "https://www.micahparker.com/diachronics/data/sources.json?cbnow=" + cachebuster
                            })];
                    case 1:
                        // get data
                        _a.periods = (_k.sent()).data.value.map(function (d) { return new _models_period__WEBPACK_IMPORTED_MODULE_6__["default"](d); });
                        _c = (_b = this.chronologies).push;
                        _d = {
                            'label': 'Documentary'
                        };
                        _e = 'value';
                        return [4 /*yield*/, axios__WEBPACK_IMPORTED_MODULE_1___default()({
                                url: "https://www.micahparker.com/diachronics/data/documentary.json?cbnow=" + cachebuster
                            })];
                    case 2:
                        _c.apply(_b, [(_d[_e] = (_k.sent()).data.value.filter(function (d) { return d.Book; }).map(function (d) { return new _models_chronology__WEBPACK_IMPORTED_MODULE_5__["default"](d); }),
                                _d)]);
                        _g = (_f = this.chronologies).push;
                        _h = {
                            'label': 'Supplementary'
                        };
                        _j = 'value';
                        return [4 /*yield*/, axios__WEBPACK_IMPORTED_MODULE_1___default()({
                                url: "https://www.micahparker.com/diachronics/data/supplementary.json?cbnow=" + cachebuster
                            })];
                    case 3:
                        _g.apply(_f, [(_h[_j] = (_k.sent()).data.value.filter(function (d) { return d.Book; }).map(function (d) { return new _models_chronology__WEBPACK_IMPORTED_MODULE_5__["default"](d); }),
                                _h)]);
                        this.chronology_selected = this.chronologies[1].value;
                        // init content
                        this.getContent(this.book, this.chapter).then(function () {
                            return _this.getContent(_this.book, _this.chapter + 1);
                        }).then(function () {
                            return _this.getContent(_this.book, _this.chapter + 2);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        window.removeEventListener('scroll', this.scroll_bound, true);
    };
    AppComponent.prototype.click_menu = function () {
        this.showSideMenu = true;
    };
    AppComponent.prototype.click_book = function () {
        this.showBiblePicker = true;
    };
    AppComponent.prototype.click_chapter = function (book, chapter) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.book = book;
                this.chapter = chapter;
                // clear chapters
                this.left_chapters.length = 0;
                this.right_chapters.length = 0;
                // now get the content
                this.getContent(book, chapter);
                // hide the side menu
                this.showBiblePicker = false;
                return [2 /*return*/];
            });
        });
    };
    AppComponent.prototype.click_period = function (period) {
        var filtered = this.periods_selected.filter(function (p) { return p.date !== period.date; });
        if (this.periods_selected.length !== filtered.length) {
            this.periods_selected = filtered;
        }
        else {
            this.periods_selected.push(period);
        }
    };
    AppComponent.prototype.click_chronology = function () {
        // clear chapters
        this.left_chapters.length = 0;
        this.right_chapters.length = 0;
        // now get the content
        this.getContent(this.book, this.chapter);
        // hide the side menu
        this.showSideMenu = false;
    };
    AppComponent.prototype.getContent = function (book, chapter) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // get new content!
                    return [4 /*yield*/, Promise.all([
                            this.getBibleText(this.left_translation, book, chapter).then(function (v) {
                                _this.left_chapters.push(v);
                                _this.left_chapters.sort(function (a, b) { return a.number - b.number; });
                            }),
                            this.getBibleText(this.right_translation, book, chapter).then(function (v) {
                                _this.right_chapters.push(v);
                                _this.right_chapters.sort(function (a, b) { return a.number - b.number; });
                            })
                        ])];
                    case 1:
                        // get new content!
                        _a.sent();
                        // filter the periods
                        this.processPeriods();
                        return [2 /*return*/];
                }
            });
        });
    };
    AppComponent.prototype.getBibleText = function (trans, book, start_chapter, start_verse, end_verse) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
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
                        resp.data.forEach(function (v) {
                            if (activeChapter === null) {
                                activeChapter = {
                                    title: v.title,
                                    number: v.chapter,
                                    verses: [],
                                    rtl: trans.toLowerCase() === 'bhs'
                                };
                            }
                            activeChapter.verses = activeChapter.verses.concat(_this.processVerse(trans, activeChapter, {
                                number: v.verse,
                                text: v.text.replace(/\<\/?p ?[a-z\=\"]{0,}\>/gi, '').replace(/\<a .*\<\/a\>/gi, ''),
                                linebreak: (v.text.indexOf('</p>') > -1)
                            }));
                        });
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
                            activeChapter.verses = activeChapter.verses.concat(this.processVerse(trans, activeChapter, {
                                number: json.chapter[v].verse_nr,
                                text: json.chapter[v].verse,
                                linebreak: (json.chapter[v].verse.match(/\\r|\\n/) > -1)
                            }));
                        }
                        _a.label = 4;
                    case 4: return [2 /*return*/, activeChapter];
                }
            });
        });
    };
    AppComponent.prototype.processPeriods = function () {
        var _this = this;
        // filter periods
        this.periods_items = this.periods.filter(function (p) {
            // tslint:disable-next-line:max-line-length
            return _this.left_chapters.filter(function (c) { return c.verses &&
                c.verses.filter(function (v) { return v.period && v.period.date === p.date && v.period.name === p.name; }).length; }).length > 0
                ||
                    _this.right_chapters.filter(function (c) { return c.verses &&
                        c.verses.filter(function (v) { return v.period && v.period.date === p.date && v.period.name === p.name; }).length; }).length > 0;
        }).map(function (p, i) {
            p.color_text = "#" + _this.period_colors[i];
            return { label: p.abbrev, value: p };
        });
        // need to insert an empty if there are nont
        if (this.periods_items.length === 0) {
            this.periods_items = [{ label: '', value: false }];
        }
    };
    AppComponent.prototype.processVerse = function (trans, chapter, verse) {
        var _this = this;
        // tslint:disable:triple-equals
        var verses = [];
        var lang = trans === 'bhs' ? 'HEBREW' : 'ENGLISH';
        var verse_inc = parseFloat(verse.number.toString() + '.01');
        var verse_lst = -1;
        // filter data
        var data = this.chronology_selected.filter(function (c) {
            return c.Book.toLowerCase() === _this.book.toLowerCase() &&
                (c['Start Chapter'] <= chapter.number && c['End Chapter'] >= chapter.number) &&
                (c['Start Chapter'] != chapter.number || c['Start Verse'] <= verse.number) &&
                (c['End Chapter'] != chapter.number || c['End Verse'] >= verse.number);
        }).sort(function (a, b) { return ((a['Start Chapter'] * 1000) + a['Start Verse']) - ((b['Start Chapter'] * 1000) + b['Start Verse']); });
        // define verse seg add
        var text_split = verse.text.replace(/^\s+|\s+$/g, '').split(' ');
        var verseSeg = function (c, text_start_idx, text_end_idx, isend) {
            var _verse = lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](verse);
            _verse.number = verse_inc + 0;
            // split the text up!
            if (text_start_idx === text_end_idx) {
                _verse.text = text_split[text_start_idx] + '!';
                verse_lst = text_start_idx;
            }
            else {
                _verse.text = text_split.slice(text_start_idx, text_end_idx || text_split.length).join(' ');
                verse_lst = text_end_idx || text_split.length;
            }
            // add space?
            if (text_start_idx > 0) {
                _verse.text = ' ' + _verse.text;
            }
            if (text_end_idx < text_split.length) {
                _verse.text = _verse.text + ' ';
            }
            // override line break if broken up
            if ((!isend && text_end_idx < text_split.length) && _verse.linebreak) {
                _verse.linebreak = false;
            }
            // set the chronology for ref in the template
            if (c) {
                var periods = _this.periods.filter(function (p) { return p.date == c.Date && (p.abbrev == c['Source Name'] || p.old_abbrev == c['Source Name']); });
                if (periods.length) {
                    _verse.period = periods[0];
                }
                _verse.chronology = c;
                // override verse text?
                if (c['Alt translation']) {
                    // _verse.text = c['Alt translation'];
                }
            }
            // add to array!
            verses.push(_verse);
            // increment
            verse_inc = (Math.round((verse_inc + .01) * 100) / 100);
        };
        // loop over each match and break the verse apart
        data.forEach(function (c, i) {
            var start_chapter = c['Start Chapter'] + 0;
            var end_chapter = c['End Chapter'] + 0;
            var start_verse = c['Start Verse'] + 0;
            var end_verse = c['End Verse'] + 0;
            var start_word = c[lang.toLowerCase() + "_intra_start"] - 1;
            var end_word = c[lang.toLowerCase() + "_intra_end"] || 99999;
            // tslint:disable:one-line
            if (start_chapter == chapter.number && start_verse == verse.number) {
                // save off the first part of the verse
                if (!verses.length && start_word > 0) {
                    verseSeg(null, 0, start_word);
                }
                // it not ending in this verse then just use the whole rest of the verse
                if (end_chapter != chapter.number || end_verse != verse.number) {
                    verseSeg(c, start_word, null, true);
                }
                else {
                    verseSeg(c, start_word, end_word);
                }
            }
            else if (end_chapter == chapter.number && end_verse == verse.number) {
                // save off the end of the verse
                if (end_word && end_word > -1 && end_word < text_split.length) {
                    verseSeg(c, 0, end_word);
                }
                else {
                    // not sure what to do with no real end specified, so just do nothing
                    verseSeg(c, 0, null, true);
                }
            }
            else {
                // the whole verse fits inside the match!
                verseSeg(c, 0, null, true);
            }
        });
        // if there are no matches just return the passed in verse
        if (!verses.length) {
            verses.push(verse);
        }
        // if we are all done with segments but there is more verse left
        if (verse_lst > -1 && verse_lst < (text_split.length - 1)) {
            verseSeg(null, verse_lst + 1);
        }
        // add a space to the last segment for readability
        var last = verses[verses.length - 1];
        if (last.text.substring(last.text.length - 1, last.text.length) != ' ') {
            last.text += ' ';
        }
        // return the verses
        return verses.filter(function (v) { return lodash__WEBPACK_IMPORTED_MODULE_3__["trim"](v.text).length; });
    };
    AppComponent.prototype.numArray = function (from, to) {
        return Array(to - from).fill(0).map(function (n, i) { return i + from; });
    };
    AppComponent.prototype.stringify = function (s) {
        return JSON.stringify(s);
    };
    AppComponent.prototype.scroll = function (e) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var scrollTopThreshold, active_dom_chapters, active_dom_verses, chapterClass, verseClass, domNode, domNode;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // tslint:disable:radix
                        //clearTimeout(this.scroll_timeout);
                        //this.scroll_timeout = setTimeout(() => { scroll(e) }, 1000);
                        if (this.scroll_processing) {
                            return [2 /*return*/];
                        }
                        this.scroll_processing = true;
                        scrollTopThreshold = 20;
                        active_dom_chapters = Array.from(e.target.querySelectorAll('.chapter')).filter(function (c, i) {
                            if (e.target.scrollTop < scrollTopThreshold && i === 0) {
                                return true;
                            }
                            return (e.target.scrollTop) >= (c.offsetTop - e.target.offsetTop) &&
                                (e.target.scrollTop) < ((c.offsetTop - e.target.offsetTop) + c.offsetHeight);
                        }).reverse();
                        if (!active_dom_chapters.length) {
                            this.scroll_processing = false;
                            return [2 /*return*/];
                        }
                        active_dom_verses = Array.from(active_dom_chapters[0].querySelectorAll('.verse')).filter(function (c, i) {
                            if (e.target.scrollTop < ((active_dom_chapters[0].offsetTop - e.target.offsetTop) + scrollTopThreshold) && i === 0) {
                                return true;
                            }
                            return (e.target.scrollTop) >= (c.offsetTop - e.target.offsetTop) &&
                                (e.target.scrollTop) < ((c.offsetTop - e.target.offsetTop) + c.offsetHeight);
                        }).reverse();
                        if (!active_dom_chapters.length) {
                            this.scroll_processing = false;
                            return [2 /*return*/];
                        }
                        // set global chapter
                        this.chapter = parseInt(active_dom_chapters.length ? active_dom_chapters[0].dataset.number : 1) || this.chapter;
                        this.verse = parseInt(active_dom_verses.length ? active_dom_verses[0].dataset.number : 1) || this.verse;
                        if (!(e.target.scrollTop + e.target.clientHeight >= e.target.scrollHeight - 100)) return [3 /*break*/, 2];
                        // set min height so we dont get scroll jump
                        e.target.style.minHeight = e.target.clientHeight;
                        // get the new content
                        return [4 /*yield*/, this.getContent(this.book, this.chapter + 1)];
                    case 1:
                        // get the new content
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        // move other pane?
                        if (active_dom_chapters.length && active_dom_verses.length) {
                            chapterClass = active_dom_chapters[0].className.split(' ').join('.');
                            verseClass = this.verse > 1 ? active_dom_verses[0].className.split(' ').join('.') : 'chapter_number';
                            // scroll other pane
                            if (e.target.className.indexOf('book_left') > -1) {
                                domNode = document.querySelector(".book_right ." + chapterClass + " ." + verseClass);
                                if (domNode) {
                                    domNode.scrollIntoView();
                                }
                            }
                            else if (e.target.className.indexOf('book_right') > -1) {
                                domNode = document.querySelector(".book_left ." + chapterClass + " ." + verseClass);
                                if (domNode) {
                                    domNode.scrollIntoView();
                                }
                            }
                        }
                        // ok, let scrolling trigger again... with timeout otherwise it causes a ping pong effect
                        setTimeout(function () { return _this.scroll_processing = false; }, 100);
                        return [2 /*return*/];
                }
            });
        });
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _chapter_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chapter.component */ "./src/app/chapter.component.ts");
/* harmony import */ var ng2_split_pane_lib_ng2_split_pane__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-split-pane/lib/ng2-split-pane */ "./node_modules/ng2-split-pane/lib/ng2-split-pane.js");
/* harmony import */ var ng2_split_pane_lib_ng2_split_pane__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng2_split_pane_lib_ng2_split_pane__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/accordion */ "./node_modules/primeng/accordion.js");
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_accordion__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/sidebar */ "./node_modules/primeng/sidebar.js");
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_sidebar__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/scrollpanel */ "./node_modules/primeng/scrollpanel.js");
/* harmony import */ var primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/selectbutton */ "./node_modules/primeng/selectbutton.js");
/* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_selectbutton__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/inputswitch */ "./node_modules/primeng/inputswitch.js");
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_inputswitch__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/tooltip */ "./node_modules/primeng/tooltip.js");
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primeng_tooltip__WEBPACK_IMPORTED_MODULE_12__);
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
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _chapter_component__WEBPACK_IMPORTED_MODULE_5__["ChapterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                ng2_split_pane_lib_ng2_split_pane__WEBPACK_IMPORTED_MODULE_6__["SplitPaneModule"],
                primeng_accordion__WEBPACK_IMPORTED_MODULE_7__["AccordionModule"],
                primeng_sidebar__WEBPACK_IMPORTED_MODULE_8__["SidebarModule"],
                primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_9__["ScrollPanelModule"],
                primeng_selectbutton__WEBPACK_IMPORTED_MODULE_10__["SelectButtonModule"],
                primeng_inputswitch__WEBPACK_IMPORTED_MODULE_11__["InputSwitchModule"],
                primeng_tooltip__WEBPACK_IMPORTED_MODULE_12__["TooltipModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/chapter.component.css":
/*!***************************************!*\
  !*** ./src/app/chapter.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".book .chapter {\r\n    \r\n}\r\n\r\n.book .chapter .ltr {\r\n    text-align: left;\r\n    line-height: 20px;\r\n}\r\n\r\n.book .chapter .ltr .verse .number {\r\n    padding-right: 5px;\r\n}\r\n\r\n.book .chapter .rtl {\r\n    text-align: right;\r\n    line-height: 20px;\r\n    direction: rtl;\r\n}\r\n\r\n.book .chapter .rtl .verse .number {\r\n    padding-left: 5px;\r\n    float:right;\r\n}\r\n\r\n.book .chapter .verse {\r\n    display: inline;\r\n}\r\n\r\n.book .chapter .verse .number {\r\n    display: inline;\r\n    font-weight: bold;\r\n    color: black;\r\n}"

/***/ }),

/***/ "./src/app/chapter.component.html":
/*!****************************************!*\
  !*** ./src/app/chapter.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let verse of chapter.verses\"\r\n    [style.background-color]=\"verse.period?.color_bg\" \r\n    [style.color]=\"verse.period?.color_text\" \r\n    [style.display]=\"aperiods.indexOf(verse.period) > -1 && !showLiminal ? 'none' : 'inline'\"\r\n    class=\"verse verse_{{numRound(verse.number)}}\"\r\n    [attr.data-number]=\"verse.number\">\r\n  <div class=\"number\" *ngIf=\"showVerseNumbers && verse.number && (verse.number - .01) <= numRound(verse.number)\" title=\"{{verse.number}}\">{{numRound(verse.number)}}</div>\r\n  <span [style.visibility]=\"aperiods.indexOf(verse.period) > -1 && showLiminal ? 'hidden' : 'visible'\" pTooltip=\"{{verse.chronology['Footnote text']}}\">{{verse.text}}</span>\r\n  <div class=\"linebreak\" *ngIf=\"verse.linebreak || showLineByLine\">&nbsp;</div>\r\n</div>"

/***/ }),

/***/ "./src/app/chapter.component.ts":
/*!**************************************!*\
  !*** ./src/app/chapter.component.ts ***!
  \**************************************/
/*! exports provided: ChapterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChapterComponent", function() { return ChapterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChapterComponent = /** @class */ (function () {
    function ChapterComponent() {
    }
    ChapterComponent.prototype.numRound = function (num) {
        return Math.floor(num);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ChapterComponent.prototype, "chapter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ChapterComponent.prototype, "aperiods", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ChapterComponent.prototype, "showVerseNumbers", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ChapterComponent.prototype, "showLineByLine", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ChapterComponent.prototype, "showLiminal", void 0);
    ChapterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chapter',
            template: __webpack_require__(/*! ./chapter.component.html */ "./src/app/chapter.component.html"),
            styles: [__webpack_require__(/*! ./chapter.component.css */ "./src/app/chapter.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        })
    ], ChapterComponent);
    return ChapterComponent;
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

/***/ "./src/app/models/chronology.ts":
/*!**************************************!*\
  !*** ./src/app/models/chronology.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
// tslint:disable:radix

var Chronology = /** @class */ (function () {
    function Chronology(data) {
        if (data) {
            lodash__WEBPACK_IMPORTED_MODULE_0__["extend"](this, data);
            this['Start Chapter'] = lodash__WEBPACK_IMPORTED_MODULE_0__["parseInt"](data['Start Chapter']);
            this['Start Verse'] = lodash__WEBPACK_IMPORTED_MODULE_0__["parseInt"](data['Start Verse']);
            this['Diff Eng start ch'] = lodash__WEBPACK_IMPORTED_MODULE_0__["parseInt"](data['Diff Eng start ch']);
            this['Diff Eng start vs'] = lodash__WEBPACK_IMPORTED_MODULE_0__["parseInt"](data['Diff Eng start vs']);
            this['english_intra_start'] = (lodash__WEBPACK_IMPORTED_MODULE_0__["parseInt"](data['ENGLISH intraverse start word index #']) ||
                lodash__WEBPACK_IMPORTED_MODULE_0__["parseInt"](data['ENGLISH intraverse start word order index #']) ||
                lodash__WEBPACK_IMPORTED_MODULE_0__["parseInt"](data['ENGLISH intraverse start word index number']) ||
                lodash__WEBPACK_IMPORTED_MODULE_0__["parseInt"](data['ENGLISH intraverse start word order index number']) ||
                lodash__WEBPACK_IMPORTED_MODULE_0__["parseInt"](data['ENGLISH intraverse start word index _x0023_']) ||
                lodash__WEBPACK_IMPORTED_MODULE_0__["parseInt"](data['ENGLISH intraverse start word order index _x0023_']) ||
                lodash__WEBPACK_IMPORTED_MODULE_0__["parseInt"](data['ENGLISH Intraverse Start word index _x0023_']) ||
                lodash__WEBPACK_IMPORTED_MODULE_0__["parseInt"](data['ENGLISH Intraverse Start word index number']));
            this['hebrew_intra_start'] = (lodash__WEBPACK_IMPORTED_MODULE_0__["parseInt"](data['HEBREW intraverse start word index #']) ||
                lodash__WEBPACK_IMPORTED_MODULE_0__["parseInt"](data['HEBREW intraverse start word order index #']) ||
                lodash__WEBPACK_IMPORTED_MODULE_0__["parseInt"](data['HEBREW intraverse start word index number']) ||
                lodash__WEBPACK_IMPORTED_MODULE_0__["parseInt"](data['HEBREW intraverse start word order index number']) ||
                lodash__WEBPACK_IMPORTED_MODULE_0__["parseInt"](data['HEBREW intraverse start word index _x0023_']) ||
                lodash__WEBPACK_IMPORTED_MODULE_0__["parseInt"](data['HEBREW intraverse start word order index _x0023_']) ||
                lodash__WEBPACK_IMPORTED_MODULE_0__["parseInt"](data['HEBREW Intraverse Start word index _x0023_']) ||
                lodash__WEBPACK_IMPORTED_MODULE_0__["parseInt"](data['HEBREW Intraverse Start word index number']));
            this['End Chapter'] = lodash__WEBPACK_IMPORTED_MODULE_0__["parseInt"](data['End Chapter']);
            this['End Verse'] = lodash__WEBPACK_IMPORTED_MODULE_0__["parseInt"](data['End Verse']);
            this['Diff Eng end ch'] = lodash__WEBPACK_IMPORTED_MODULE_0__["parseInt"](data['Diff Eng end ch']);
            this['Diff Eng end vs'] = lodash__WEBPACK_IMPORTED_MODULE_0__["parseInt"](data['Diff Eng end vs']);
            this['english_intra_end'] = (lodash__WEBPACK_IMPORTED_MODULE_0__["parseInt"](data['ENGLISH intraverse end word index #']) ||
                lodash__WEBPACK_IMPORTED_MODULE_0__["parseInt"](data['ENGLISH intraverse end word order index #']) ||
                lodash__WEBPACK_IMPORTED_MODULE_0__["parseInt"](data['ENGLISH intraverse end word index number']) ||
                lodash__WEBPACK_IMPORTED_MODULE_0__["parseInt"](data['ENGLISH intraverse end word order index number']) ||
                lodash__WEBPACK_IMPORTED_MODULE_0__["parseInt"](data['ENGLISH intraverse end word index _x0023_']) ||
                lodash__WEBPACK_IMPORTED_MODULE_0__["parseInt"](data['ENGLISH intraverse end word order index _x0023_']) ||
                lodash__WEBPACK_IMPORTED_MODULE_0__["parseInt"](data['ENGLISH Intraverse End word index _x0023_']) ||
                lodash__WEBPACK_IMPORTED_MODULE_0__["parseInt"](data['English Intraverse End word index number']));
            this['hebrew_intra_end'] = (lodash__WEBPACK_IMPORTED_MODULE_0__["parseInt"](data['HEBREW intraverse end word index number']) ||
                lodash__WEBPACK_IMPORTED_MODULE_0__["parseInt"](data['HEBREW intraverse end word order index #']) ||
                lodash__WEBPACK_IMPORTED_MODULE_0__["parseInt"](data['HEBREW intraverse end word index number']) ||
                lodash__WEBPACK_IMPORTED_MODULE_0__["parseInt"](data['HEBREW intraverse end word order index number']) ||
                lodash__WEBPACK_IMPORTED_MODULE_0__["parseInt"](data['HEBREW intraverse end word index _x0023_']) ||
                lodash__WEBPACK_IMPORTED_MODULE_0__["parseInt"](data['HEBREW intraverse end word order index _x0023_']) ||
                lodash__WEBPACK_IMPORTED_MODULE_0__["parseInt"](data['HEBREW Intraverse End word index _x0023_']) ||
                lodash__WEBPACK_IMPORTED_MODULE_0__["parseInt"](data['HEBREW Intraverse End word index number']));
            this['Date'] = lodash__WEBPACK_IMPORTED_MODULE_0__["parseInt"](data['Date']);
        }
    }
    return Chronology;
}());
/* harmony default export */ __webpack_exports__["default"] = (Chronology);


/***/ }),

/***/ "./src/app/models/period.ts":
/*!**********************************!*\
  !*** ./src/app/models/period.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

var Period = /** @class */ (function () {
    function Period(data) {
        if (data) {
            this.name = data['Full name'];
            this.abbrev = data['IF yes_x003a_ CHANGE TO'] || data['Current Dataset Abbreviation'] || this.name;
            this.old_abbrev = data['Current Dataset Abbreviation'];
            this.new_abbrev = (data['CHANGE? (y/n)'] === 'y');
            this.date = lodash__WEBPACK_IMPORTED_MODULE_0__["parseInt"](data['Period (all BCE)']);
        }
    }
    return Period;
}());
/* harmony default export */ __webpack_exports__["default"] = (Period);


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

module.exports = __webpack_require__(/*! C:\Users\Micah\Source\diachronics\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map