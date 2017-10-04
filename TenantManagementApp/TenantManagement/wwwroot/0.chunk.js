webpackJsonp([0],{

/***/ 481:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(9);
var common_1 = __webpack_require__(50);
var about_routes_1 = __webpack_require__(483);
var about_component_1 = __webpack_require__(482);
var AboutModule = (function () {
    function AboutModule() {
    }
    AboutModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                about_routes_1.AboutRoutes
            ],
            declarations: [
                about_component_1.AboutComponent
            ],
        })
    ], AboutModule);
    return AboutModule;
}());
exports.AboutModule = AboutModule;


/***/ }),

/***/ 482:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(9);
var AboutComponent = (function () {
    function AboutComponent() {
        this.message = 'Hello from AboutComponent constructor';
    }
    AboutComponent = __decorate([
        core_1.Component({
            selector: 'about-component',
            template: __webpack_require__(484)
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());
exports.AboutComponent = AboutComponent;


/***/ }),

/***/ 483:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__(84);
var about_component_1 = __webpack_require__(482);
var routes = [
    { path: '', component: about_component_1.AboutComponent }
];
exports.AboutRoutes = router_1.RouterModule.forChild(routes);


/***/ }),

/***/ 484:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\n    <h1>{{message}}</h1>\n\n</div>"

/***/ })

});
//# sourceMappingURL=0.chunk.js.map