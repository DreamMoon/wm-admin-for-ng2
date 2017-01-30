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
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var app_routing_module_1 = require('./app-routing.module');
var primeng_module_1 = require('../modules/primeng/primeng.module');
var app_component_1 = require('./app.component');
var container_component_1 = require('../components/container/container.component');
var home_component_1 = require("../components/home/home.component");
var navbar_component_1 = require('../components/navbar/navbar.component');
var sidebar_component_1 = require('../components/sidebar/sidebar.component');
var wrapper_component_1 = require("../components/wrapper/wrapper.component");
var scroll_to_top_component_1 = require("../components/scroll-to-top/scroll-to-top.component");
var footer_component_1 = require("../components/footer/footer.component");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                app_routing_module_1.AppRoutingModule,
                primeng_module_1.PrimengModule
            ],
            declarations: [
                app_component_1.AppComponent,
                container_component_1.ContainerComponent,
                footer_component_1.FooterComponent,
                home_component_1.HomeComponent,
                navbar_component_1.NavbarComponent,
                scroll_to_top_component_1.ScrollToTopComponent,
                sidebar_component_1.SidebarComponent,
                wrapper_component_1.WrapperComponent
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map