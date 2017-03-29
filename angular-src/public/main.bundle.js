webpackJsonp([1,4],{

/***/ 387:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 387;


/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(507);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/home/viktor/shows_projekt/symgular/angular-src/src/main.js.map

/***/ }),

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_getalltime_service__ = __webpack_require__(516);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlltimeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlltimeComponent = (function () {
    function AlltimeComponent(getalltime) {
        this.getalltime = getalltime;
    }
    AlltimeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getalltime.getAlltime().subscribe(function (data) {
            _this.alltime = data;
            (function (err) {
                console.error(err);
                return false;
            });
        });
    };
    AlltimeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-alltime',
            template: __webpack_require__(685),
            styles: [__webpack_require__(674)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_getalltime_service__["a" /* GetalltimeService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_getalltime_service__["a" /* GetalltimeService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_getalltime_service__["a" /* GetalltimeService */]) === 'function' && _a) || Object])
    ], AlltimeComponent);
    return AlltimeComponent;
    var _a;
}());
//# sourceMappingURL=/home/viktor/shows_projekt/symgular/angular-src/src/alltime.component.js.map

/***/ }),

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Hehe';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(686),
            styles: [__webpack_require__(675)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/home/viktor/shows_projekt/symgular/angular-src/src/app.component.js.map

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__discover_discover_component__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__navbar_navbar_component__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__herosection_herosection_component__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home_component__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__result_result_component__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__specresult_specresult_component__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__email_email_component__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__recent_recent_component__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__alltime_alltime_component__ = __webpack_require__(505);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_9__home_home_component__["a" /* HomeComponent */] },
    { path: 'discover', component: __WEBPACK_IMPORTED_MODULE_6__discover_discover_component__["a" /* DiscoverComponent */] },
    { path: 'results/:name', component: __WEBPACK_IMPORTED_MODULE_10__result_result_component__["a" /* ResultComponent */] },
    { path: 'specresult/:id', component: __WEBPACK_IMPORTED_MODULE_11__specresult_specresult_component__["a" /* SpecresultComponent */] },
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__discover_discover_component__["a" /* DiscoverComponent */],
                __WEBPACK_IMPORTED_MODULE_7__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_8__herosection_herosection_component__["a" /* HeroSectionComponent */],
                __WEBPACK_IMPORTED_MODULE_9__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__result_result_component__["a" /* ResultComponent */],
                __WEBPACK_IMPORTED_MODULE_11__specresult_specresult_component__["a" /* SpecresultComponent */],
                __WEBPACK_IMPORTED_MODULE_12__email_email_component__["a" /* EmailComponent */],
                __WEBPACK_IMPORTED_MODULE_13__recent_recent_component__["a" /* RecentComponent */],
                __WEBPACK_IMPORTED_MODULE_14__alltime_alltime_component__["a" /* AlltimeComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/home/viktor/shows_projekt/symgular/angular-src/src/app.module.js.map

/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_discover_service__ = __webpack_require__(515);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiscoverComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DiscoverComponent = (function () {
    function DiscoverComponent(discover) {
        this.discover = discover;
        this.dates = this.loadDates();
    }
    DiscoverComponent.prototype.ngOnInit = function () {
        this.genres = [{ category: 'Akció & Kaland', id: 10759 }, { category: 'Animáció', id: 16 }, { category: 'Dokumentum', id: 99 },
            { category: 'Dráma', id: 18 }, { category: 'Családi', id: 10751 }, { category: 'Gyerek', id: 10762 }, { category: 'Komédia', id: 35 },
            { category: 'Hírek', id: 10763 }, { category: 'Sci-fi & Fantasy', id: 10765 }, { category: 'Krimi', id: 80 }, { category: 'Misztikus', id: 9648 }, { category: 'Western', id: 37 }];
    };
    DiscoverComponent.prototype.loadDates = function () {
        var dates = [];
        var max = new Date().getFullYear();
        var min = max - 27;
        for (var i = max; i >= min; i--) {
            dates.push(i.toString());
        }
        return dates;
    };
    DiscoverComponent.prototype.onSubmitDiscover = function () {
        var _this = this;
        var discoverData = {
            date: this.date,
            genre: this.genre
        };
        this.discover.getDiscoveries(discoverData.date, discoverData.genre).subscribe(function (discoveredShows) {
            _this.showdata = discoveredShows;
            (function (err) {
                console.error(err);
                return false;
            });
        });
    };
    DiscoverComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-discover',
            template: __webpack_require__(687),
            styles: [__webpack_require__(676)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_discover_service__["a" /* DiscoverService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_discover_service__["a" /* DiscoverService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_discover_service__["a" /* DiscoverService */]) === 'function' && _a) || Object])
    ], DiscoverComponent);
    return DiscoverComponent;
    var _a;
}());
//# sourceMappingURL=/home/viktor/shows_projekt/symgular/angular-src/src/discover.component.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EmailComponent = (function () {
    function EmailComponent() {
    }
    EmailComponent.prototype.ngOnInit = function () {
    };
    EmailComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-email',
            template: __webpack_require__(688),
            styles: [__webpack_require__(677)]
        }), 
        __metadata('design:paramtypes', [])
    ], EmailComponent);
    return EmailComponent;
}());
//# sourceMappingURL=/home/viktor/shows_projekt/symgular/angular-src/src/email.component.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroSectionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeroSectionComponent = (function () {
    function HeroSectionComponent() {
    }
    HeroSectionComponent.prototype.ngOnInit = function () {
    };
    HeroSectionComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-hero-section',
            template: __webpack_require__(689),
            styles: [__webpack_require__(678)]
        }), 
        __metadata('design:paramtypes', [])
    ], HeroSectionComponent);
    return HeroSectionComponent;
}());
//# sourceMappingURL=/home/viktor/shows_projekt/symgular/angular-src/src/herosection.component.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__(690),
            styles: [__webpack_require__(679)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=/home/viktor/shows_projekt/symgular/angular-src/src/home.component.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_navsearch_service__ = __webpack_require__(518);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = (function () {
    function NavbarComponent(router, service) {
        this.router = router;
        this.service = service;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onSubmitSearch = function () {
        this.router.navigateByUrl('results/' + this.showname);
    };
    NavbarComponent.prototype.search = function (term) {
        var _this = this;
        if (term !== '') {
            this.service.search(term)
                .subscribe(function (result) { return _this.items = result; });
        }
        else {
            this.items = null;
        }
    };
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__(691),
            styles: [__webpack_require__(680)],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_navsearch_service__["a" /* NavsearchService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_navsearch_service__["a" /* NavsearchService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_navsearch_service__["a" /* NavsearchService */]) === 'function' && _b) || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/viktor/shows_projekt/symgular/angular-src/src/navbar.component.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_getrecent_service__ = __webpack_require__(517);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RecentComponent = (function () {
    function RecentComponent(recent) {
        this.recent = recent;
    }
    RecentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.recent.getRecent().subscribe(function (recentshows) {
            _this.recents = recentshows;
            (function (err) {
                console.error(err);
                return false;
            });
        });
    };
    RecentComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-recent',
            template: __webpack_require__(692),
            styles: [__webpack_require__(681)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_getrecent_service__["a" /* GetRecentService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_getrecent_service__["a" /* GetRecentService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_getrecent_service__["a" /* GetRecentService */]) === 'function' && _a) || Object])
    ], RecentComponent);
    return RecentComponent;
    var _a;
}());
//# sourceMappingURL=/home/viktor/shows_projekt/symgular/angular-src/src/recent.component.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_search_service__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ResultComponent = (function () {
    function ResultComponent(search, router, route) {
        this.search = search;
        this.router = router;
        this.route = route;
    }
    ResultComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.search.searchByName(params['name']); })
            .subscribe(function (data) {
            _this.Show = data;
        });
    };
    ResultComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-result',
            template: __webpack_require__(693),
            styles: [__webpack_require__(682)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_search_service__["a" /* SearchService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_search_service__["a" /* SearchService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_search_service__["a" /* SearchService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === 'function' && _c) || Object])
    ], ResultComponent);
    return ResultComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/viktor/shows_projekt/symgular/angular-src/src/result.component.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiscoverService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DiscoverService = (function () {
    function DiscoverService(Http) {
        this.Http = Http;
    }
    DiscoverService.prototype.getDiscoveries = function (date, genre) {
        return this.Http.get('http://81.2.254.235:8000/discover/' + date + ':' + genre)
            .map(function (res) { return res.json(); });
    };
    DiscoverService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], DiscoverService);
    return DiscoverService;
    var _a;
}());
//# sourceMappingURL=/home/viktor/shows_projekt/symgular/angular-src/src/discover.service.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetalltimeService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GetalltimeService = (function () {
    function GetalltimeService(http) {
        this.http = http;
    }
    GetalltimeService.prototype.getAlltime = function () {
        return this.http.get('http://81.2.254.235:8000/alltime')
            .map(function (res) { return res.json(); });
    };
    GetalltimeService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], GetalltimeService);
    return GetalltimeService;
    var _a;
}());
//# sourceMappingURL=/home/viktor/shows_projekt/symgular/angular-src/src/getalltime.service.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetRecentService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GetRecentService = (function () {
    function GetRecentService(http) {
        this.http = http;
    }
    GetRecentService.prototype.getRecent = function () {
        return this.http.get('http://81.2.254.235:8000/recent')
            .map(function (res) { return res.json(); });
    };
    GetRecentService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], GetRecentService);
    return GetRecentService;
    var _a;
}());
//# sourceMappingURL=/home/viktor/shows_projekt/symgular/angular-src/src/getrecent.service.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavsearchService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavsearchService = (function () {
    function NavsearchService(http) {
        this.http = http;
    }
    NavsearchService.prototype.search = function (name) {
        return this.http.get('http://localhost:8000/navsearch/' + name)
            .map(function (res) { return res.json(); });
    };
    NavsearchService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], NavsearchService);
    return NavsearchService;
    var _a;
}());
//# sourceMappingURL=/home/viktor/shows_projekt/symgular/angular-src/src/navsearch.service.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchService = (function () {
    function SearchService(Http) {
        this.Http = Http;
    }
    SearchService.prototype.searchByName = function (name) {
        return this.Http.get('http://81.2.254.235:8000/search/' + name.replace(/ /g, '+')).map(function (res) { return res.json(); });
    };
    SearchService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], SearchService);
    return SearchService;
    var _a;
}());
//# sourceMappingURL=/home/viktor/shows_projekt/symgular/angular-src/src/search.service.js.map

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpecresultService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SpecresultService = (function () {
    function SpecresultService(Http) {
        this.Http = Http;
    }
    SpecresultService.prototype.showSpecificShow = function (id) {
        return this.Http.get('http://81.2.254.235:8000/shows/' + id).map(function (res) { return res.json(); });
    };
    SpecresultService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], SpecresultService);
    return SpecresultService;
    var _a;
}());
//# sourceMappingURL=/home/viktor/shows_projekt/symgular/angular-src/src/specresult.service.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_specresult_service__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpecresultComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SpecresultComponent = (function () {
    function SpecresultComponent(specresult, router, route) {
        this.specresult = specresult;
        this.router = router;
        this.route = route;
    }
    SpecresultComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.specresult.showSpecificShow(params['id']); })
            .subscribe(function (show) { return _this.Show = show; });
    };
    SpecresultComponent.prototype.changeTitleforSorozatJunkieUrl = function () {
        var changedName = this.Show["title"].replace(/ /g, '-');
        this.Show["Junkie"] = changedName;
    };
    SpecresultComponent.prototype.loading = function () {
        console.log('loading...\n');
    };
    SpecresultComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-specresult',
            template: __webpack_require__(694),
            styles: [__webpack_require__(683)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_specresult_service__["a" /* SpecresultService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_specresult_service__["a" /* SpecresultService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_specresult_service__["a" /* SpecresultService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === 'function' && _c) || Object])
    ], SpecresultComponent);
    return SpecresultComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/viktor/shows_projekt/symgular/angular-src/src/specresult.component.js.map

/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/home/viktor/shows_projekt/symgular/angular-src/src/environment.js.map

/***/ }),

/***/ 674:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(24)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 675:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(24)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 676:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(24)();
// imports


// module
exports.push([module.i, ".btn{\n    margin-bottom: 15px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 677:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(24)();
// imports


// module
exports.push([module.i, ".form-control{\n    margin-bottom: 15px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 678:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(24)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 679:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(24)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 680:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(24)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 681:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(24)();
// imports


// module
exports.push([module.i, ".col-md-2{\n    margin-left: -15px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 682:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(24)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 683:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(24)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 685:
/***/ (function(module, exports) {

module.exports = "<p class=\"text-center\">\n  Legjobb 10 sorozat az Imdb rating szerint.\n</p>\n<div *ngFor=\"let item of alltime\">\n   <a class=\"result-item\" routerLink=\"/specresult/{{item.show_id}}\">\n      <ul>\n        <div class=\"row lista-recent\">    \n          <div class=\"col-md-4 lista-item\">\n            <img src='{{item.poster_pic}}' alt=\"{{item.name}}\" class=\"img img-responsive\">\n          </div>\n          <div class=\"col-md-8 lista-item\">\n          <b>{{ item.name }}</b><br><small>Első adás: {{ item.created_at }}<br>Rating: {{item.rating}}</small>\n          </div>\n        </div>\n    </ul>\n  </a>                    \n</div>\n\n\n<p class=\"text-muted text-center\">A lista főként a személyes ízlésem és a rating alajpán lett rangsorolva.</p>\n"

/***/ }),

/***/ 686:
/***/ (function(module, exports) {

module.exports = "<app-hero-section></app-hero-section>\n<app-navbar></app-navbar>\n\n <div class=\"row\">\n     <div class=\"col-md-2 col-md-offset-0 col-xs-10 col-xs-offset-1\">\n       <app-recent></app-recent>\n     </div>\n     <div class=\"col-md-8 col-md-offset-0  col-xs-10 col-xs-offset-1\">\n        <router-outlet></router-outlet>\n     </div>\n     <div class=\"col-md-2 col-md-offset-0  col-xs-10 col-xs-offset-1\">\n        <app-alltime></app-alltime>\n     </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-md-8 col-md-offset-2 col-xs-10 col-xs-offset-1\">\n        <app-email></app-email>\n    </div>\n</div>"

/***/ }),

/***/ 687:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-8 col-md-offset-2\">\n<form (submit) = 'onSubmitDiscover()'>\n\n  <div class=\"form-group\">\n    <label>Év:</label>\n      <select [(ngModel)] =\"date\" name =\"date\" class =\"form-control\" >\n       <option *ngFor=\"let date of dates\" [value]=\"date\" >{{date}}</option>\n      </select>\n  </div>\n  <div class=\"form-group\">\n    <label>Kategória:</label>\n      <select [(ngModel)] = \"genre\" name = \"genre\" class = \"form-control\">\n        <option *ngFor=\"let genre of genres\" [value]=\"genre.id\">{{genre.category}}</option>\n      </select>\n  </div>\n    <input type=\"submit\" class=\"btn btn-primary\" value=\"Küldés\">\n\n</form>\n</div>\n  </div>\n</div>\n\n<div *ngIf = \"showdata\">\n  <div *ngFor = \"let items of showdata.results\">\n    <a class=\"result-item\" routerLink=\"/specresult/{{items.id}}\">\n     <div class=\"panel panel-default\">  \n      <div class=\"panel-heading\">{{items.name}} <p>Népszerűségi index: {{items.popularity}}</p></div>\n        <div class =\"panel-body discovered_series\" >\n        <img src=\"http://image.tmdb.org/t/p/w185{{items.poster_path}}\" alt=\"{{items.name}}\">\n          <p>{{items.overview}}</p>\n        </div>\n      </div>\n     </a>\n  </div>\n</div>"

/***/ }),

/***/ 688:
/***/ (function(module, exports) {

module.exports = " <div class=\"footer\">\n            <hr>\n            <p class=\"text-center\">Valamilyen ötleted/tanácsod van az oldallal kapcsolatban?<br>Kérlek írd meg üzenetben, minden kritika jól jön. :)</p>\n                <div class=\"row\">\n                 <form>       \n                    <div class=\"col-md-6\" id=\"contact\">\n                        <label>Név</label><br>\n                        <input class=\"form-control\" type=\"text\" placeholder=\"Név\">\n                    </div>\n                    <div class=\"col-md-6\">\n                       <label>Email</label><br>\n                        <input class=\"form-control\" type=\"email\" placeholder=\"Email\">\n                    </div>\n                    <div class=\"col-md-12\">\n                      <label>Üzenet</label><br>\n                      <textarea class=\"form-control\" style=\"height: 200px\" placeholder=\"Üzenet...\" ></textarea>\n                    </div>\n                        <input type=\"submit\" class=\"btn btn-default\" value=\"Üzenet küldése\" >\n                 </form>\n                        \n                </div>\n    </div> "

/***/ }),

/***/ 689:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n        <div class=\"col-md-10 col-md-offset-1\">\n            <div class=\"jumbotron hero-section\">\n                 <div class=\"row\">\n                    <div class=\"col-xs-1 col-md-1 hero-item\" style=\"width: 19.9999992%\">\n                            <img src=\"assets/img/breaking-bad.jpg\" class=\"img img-responsive\" alt=\"Breaking Bad\">\n                    </div>\n                    <div class=\"col-xs-1 col-md-1 hero-item\" style=\"width: 19.9999992%\">\n                            <img src=\"assets/img/game-of-thrones.jpg\" class=\"img img-responsive\" alt=\"Game of Thrones\">\n                    </div>\n                    <div class=\"col-xs-1 col-md-1 hero-item\" style=\"width: 19.9999992%\">\n                            <img src=\"assets/img/sherlock.jpg\" class=\"img img-responsive\" alt=\"Sherlock\">\n                    </div>\n                    <div class=\"col-xs-1 col-md-1 hero-item\" style=\"width: 19.9999992%\">\n                            <img src=\"assets/img/stranger-things.jpg\" class=\"img img-responsive\" alt=\"Stranger Things\">\n                    </div>\n                    <div class=\"col-xs-1 col-md-1 hero-item\" style=\"width: 19.9999992%\">\n                            <img src=\"assets/img/westworld.jpg\" class=\"img img-responsive\" alt=\"Westorld\">\n                    </div>    \n                </div>\n            </div>\n        </div>\n</div>"

/***/ }),

/***/ 690:
/***/ (function(module, exports) {

module.exports = "<h3 class=\"text-center\">\n   Ennek az oldalnak a célja és megalkotásának oka az, hogy friss és megtekintésre alkamas sorozatokat ajánljon.</h3>\n <div class=\"well\"> \n  <div class=\"row\">\n   <div class=\"col-md-5 col-md-offset-2\">\n     <p class=\"lead text-justify\">\n      <strong> Ha részeltesebb infókat, leírást, elemzést szeretnél olvasni egyes sorozatokról, akkor ajánlom az alábbi oldal rendszeres látogatását.</strong></p>\n    </div> \n        <div class=\"col-md-5\">\n         <a href=\"https://www.sorozatjunkie.hu/\" target=\"_blank\"><img class=\"img img-responsive img-thumbnail\" alt=\"Sorozat Junkie\" src=\"assets/img/junkie.png\"></a>\n          <hr class=\"orange\">\n        </div>\n         <div class=\"col-md-6 col-md-offset-1\">\n          <hr class=\"blue\">\n           <a href=\"http://www.feliratok.info/\" target=\"_blank\"><img class=\"img img-responsive img-thumbnail\" alt=\"Feliratok.info\" src='assets/img/sub.png'></a>                    \n         </div>\n          <div class=\"col-md-4\">\n           <p class=\"lead text-justify\">\n            <strong>Jó minőségű feliratokat nemcsak sorozatokhoz, de filmekhez is angolul/magyarul a képen látható helyen lehet elérni.</strong> </p>\n          </div>   \n   </div>  \n  </div>  \n\t<p class=\"bg-primary text-center\">Az oldal teljesen automatikusan működik, az adatokat külső API-ok segítségvel dolgozom fel és íratom ki az oldalra, valamint a sorozatok az adatbázisban bizonyos időközönként frissülnek.</p>"

/***/ }),

/***/ 691:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n        <div class=\"col-md-10 col-md-offset-1\">\n            <nav class=\"navbar navbar-default\">\n                    <div class=\"navbar-header\">\n                        <a class=\"navbar-brand\" href=\"/\">\n                        <img alt=\"Home\" src=\"\"></a>\n                    </div>\n                    <ul class=\"nav navbar-nav\">\n                        <li><a href=\"/discover\">Sorozat Ajánló</a></li>\n                    </ul>\n                    <form class=\"navbar-form navbar-left\" (submit) = \"onSubmitSearch()\">\n                        <div class=\"form-group\">\n                            <input  type=\"text\" class=\"form-control\" [(ngModel)] = \"showname\" name= \"showname\" placeholder=\"Sorozat neve...\" (input)=\"search($event.target.value)\" list=\"show-suggestion\" >\n                            <datalist id=\"show-suggestion\">\n                               <option [value]=\"item.title\" *ngFor=\"let item of items\">\n                                    {{item.title}}\n                               </option>\n                            </datalist>\n                        </div>\n                            <button type=\"submit\" class=\"btn btn-primary\">Keresés</button>\n                    </form>                   \n                    <ul class=\"nav navbar-form navbar-right\">\n                        <li class= 'form-group'><button class=\"btn btn-info scrollToContact\">Lépj kapcsolatba velem</button></li>\n                    </ul>\n            </nav>\n        </div>\n</div>"

/***/ }),

/***/ 692:
/***/ (function(module, exports) {

module.exports = "<p class=\"text-center\">\n  Legfrisebb sorozatok, amiket érdemes lehet megnézni.\n</p>\n<div *ngFor=\"let item of recents\">\n   <a class=\"result-item\" routerLink=\"/specresult/{{item.show_id}}\">\n      <ul>\n        <div class=\"row lista-recent\">    \n          <div class=\"col-md-4 lista-item\">\n            <img src='http://image.tmdb.org/t/p/w185{{item.poster_pic}}' alt=\"{{item.name}}\" class=\"img img-responsive\">\n          </div>\n          <div class=\"col-md-8 lista-item\">\n          <b>{{ item.name }}</b><br><small>Első adás: {{item.created_at}}</small>\n          </div>\n        </div>\n    </ul>\n  </a>                    \n</div>\n\n\n<p class=\"text-muted text-center\">A lista naponta frissül.</p>\n"

/***/ }),

/***/ 693:
/***/ (function(module, exports) {

module.exports = "<div *ngIf = \"Show\">\n  <div *ngFor = \"let items of Show['Search']\">\n    <a class=\"result-item\" routerLink =\"/specresult/{{items.imdbID}}\">\n        <div class=\"panel panel-default\">  \n            <div class=\"panel-heading\">{{items.Title}}</div>\n                <div class =\"panel-body discovered_series\">            \n                <img src=\"{{items.Poster}}\" alt=\"{{items.Title}}\">\n                </div>\n        </div>\n       </a>\n  </div>\n</div>"

/***/ }),

/***/ 694:
/***/ (function(module, exports) {

module.exports = "\n\n<div *ngIf = \"Show\" (!load) = \"loading()\">\n <div class=\"jumbotron text-center\">\n    <h1 class =\"page-header\">\n        {{Show.Title || Show.title}}\n      </h1><hr><br>\n        <b>( {{Show.Year || Show.year}} )</b>\n      </div>\n      <div class=\"well\">\n         <div class=\"row\">\n            <div class=\"col-md-4\">\n              <img src=\"{{Show.Poster || Show.poster}}\" class=\"img img-responsive\" alt=\"{{Show.Title || Show.title}}\">\n            </div>\n            <div class=\"col-md-8\">\n              <div class=\"content\">\n                <p>Szereplők: <strong>{{Show.Actors || Show.actors}}</strong><br>Író: {{Show.Writer || Show.writer}}\n                <br>Kategória: {{Show.Genre || Show.genre}}\n                <br>Műsoridő: {{Show.Runtime || Show.runtime}} || Évadok száma: {{Show.totalSeasons || Show.total_seasons}}</p>\n                <p><strong>{{Show.imdbVotes || Show.imdb_votes}}</strong> alapján <strong>{{Show.imdbRating || Show.imdb_rating}}</strong> pontszámú a sorozat.</p>\n                <p><a href=\"http://www.feliratok.info/?search={{Show.Title || Show.title}}&soriSorszam=&nyelv=Magyar&sorozatnev=&sid=&complexsearch=true&knyelv=0&evad=&epizod1=&cimke=0&minoseg=0&rlsr=0&tab=all\" target=\"_blank\">[ Magyar felirat ]</a> | <a href=\"http://www.feliratok.info/?search={{Show.Title || Show.title}}&soriSorszam=&nyelv=Angol&sorozatnev=&sid=&complexsearch=true&knyelv=0&evad=&epizod1=&cimke=0&minoseg=0&rlsr=0&tab=all\" target=\"_blank\">[ Angol felirat ]</a> | <a href=\"http://www.imdb.com/title/{{Show.imdbID || Show.imdb_i_d}}/?ref_=rvi_tt\" target=\"_blank\"> [ Imdb ]</a> | <a (click)=\"changeTitleforSorozatJunkieUrl()\" href=\"http://www.sorozatjunkie.hu/tag/{{Show.Junkie}}/\" target=\"_blank\">[ SorozatJunkie ]</a></p> \n                <p>Rövid leírás:<br>{{Show.Plot || Show.plot}}</p>\n              </div>\n            </div>\n         </div>\n      </div>\n</div>\n<button class=\"btn btn-info\" onclick=\"goBack()\">Vissza</button>\n"

/***/ }),

/***/ 713:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(388);


/***/ })

},[713]);
//# sourceMappingURL=main.bundle.js.map