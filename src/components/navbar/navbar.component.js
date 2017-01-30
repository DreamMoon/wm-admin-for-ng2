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
/**
 * Created by DreamBoy on 2017/1/28.
 */
var core_1 = require('@angular/core');
var NavbarComponent = (function () {
    function NavbarComponent() {
        // 控制是否显示侧边栏
        this.showSidebar = true;
        this.showSidebarChange = new core_1.EventEmitter();
        // 控制是否显示侧边栏中的header
        this.showSidebarHeader = true;
        this.showSidebarHeaderChange = new core_1.EventEmitter();
        this.curDropdownMenuIndex = 0; // 当前显示的下拉菜单。0表示没有显示任何菜单；大于0表示显示第几个下拉菜单
    }
    NavbarComponent.prototype.toggelSidebar = function () {
        this.showSidebar = !this.showSidebar;
        this.showSidebarChange.emit(this.showSidebar);
    };
    NavbarComponent.prototype.toggleSidebarHeader = function () {
        this.showSidebarHeader = !this.showSidebarHeader;
        this.showSidebarHeaderChange.emit(this.showSidebarHeader);
    };
    NavbarComponent.prototype.showDropdownMenu = function (index) {
        if (this.curDropdownMenuIndex == index) {
            this.curDropdownMenuIndex = 0;
        }
        else {
            this.curDropdownMenuIndex = index;
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], NavbarComponent.prototype, "showSidebar", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], NavbarComponent.prototype, "showSidebarChange", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], NavbarComponent.prototype, "showSidebarHeader", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], NavbarComponent.prototype, "showSidebarHeaderChange", void 0);
    NavbarComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'wm-navbar',
            templateUrl: 'navbar.component.html',
            styleUrls: ['navbar.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], NavbarComponent);
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;
//# sourceMappingURL=navbar.component.js.map