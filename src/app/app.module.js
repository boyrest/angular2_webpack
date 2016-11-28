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
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var HomeComponent_1 = require("./component/home/HomeComponent");
var AboutComponent_1 = require("./component/about/AboutComponent");
var ContactComponent_1 = require("./component/contact/ContactComponent");
var RoutesDemoApp_1 = require("./component/RoutesDemoApp");
var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent_1.HomeComponent },
    { path: 'about', component: AboutComponent_1.AboutComponent },
    { path: 'contact', component: ContactComponent_1.ContactComponent },
    { path: 'contactus', redirectTo: 'contact' }
];
var RoutesDemoAppModule = (function () {
    function RoutesDemoAppModule() {
    }
    return RoutesDemoAppModule;
}());
RoutesDemoAppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            router_1.RouterModule.forRoot(routes)
        ],
        declarations: [
            RoutesDemoApp_1.RoutesDemoApp,
            HomeComponent_1.HomeComponent,
            AboutComponent_1.AboutComponent,
            ContactComponent_1.ContactComponent
        ],
        bootstrap: [RoutesDemoApp_1.RoutesDemoApp],
        providers: [
            { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }
        ]
    }),
    __metadata("design:paramtypes", [])
], RoutesDemoAppModule);
exports.RoutesDemoAppModule = RoutesDemoAppModule;
//# sourceMappingURL=app.module.js.map