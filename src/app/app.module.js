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
var app_component_1 = require("./component/app/app.component");
var footer_component_1 = require("./component/footer/footer.component");
var header_component_1 = require("./component/header/header.component");
var app_user_item_1 = require("./component/common/list/app.user.item");
var form_component_1 = require("./component/form/form.component");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var article_component_1 = require("./component/form/article/article.component");
var hero_form_component_1 = require("./component/hero/hero-form.component");
var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent_1.HomeComponent },
    { path: 'about/:id', component: AboutComponent_1.AboutComponent },
    { path: 'contact', component: ContactComponent_1.ContactComponent },
    { path: 'form', component: form_component_1.FormIndexComponent },
    { path: 'hero', component: hero_form_component_1.HeroFormComponent }
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
            router_1.RouterModule.forRoot(routes),
            forms_1.FormsModule,
            http_1.HttpModule
        ],
        declarations: [
            app_component_1.AppComponent,
            HomeComponent_1.HomeComponent,
            AboutComponent_1.AboutComponent,
            ContactComponent_1.ContactComponent,
            footer_component_1.AppFooter,
            header_component_1.AppHeader,
            app_user_item_1.UserItem,
            form_component_1.FormIndexComponent,
            article_component_1.ArticleComponent,
            hero_form_component_1.HeroFormComponent
        ],
        bootstrap: [app_component_1.AppComponent],
        providers: [
            { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }
        ]
    }),
    __metadata("design:paramtypes", [])
], RoutesDemoAppModule);
exports.RoutesDemoAppModule = RoutesDemoAppModule;
//# sourceMappingURL=app.module.js.map