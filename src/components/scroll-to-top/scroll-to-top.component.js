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
 * Created by DreamBoy on 2017/1/29.
 */
var core_1 = require('@angular/core');
var ScrollToTopComponent = (function () {
    function ScrollToTopComponent() {
        this.top = 200; // 滚动条滚动高度的阈值
        // 参考：http://brianflove.com/2016/10/10/angular-2-window-scroll-event-using-hostlistener/
        this.scrollTop = 0; // 当前滚动条滚动的高度
        this.scrollTop = this.getScrollTop();
    }
    ScrollToTopComponent.prototype.onWindowScroll = function () {
        this.scrollTop = this.getScrollTop();
    };
    ScrollToTopComponent.prototype.getScrollTop = function () {
        return document.documentElement.scrollTop || document.body.scrollTop;
    };
    // 回到顶部
    ScrollToTopComponent.prototype.scrollToTop = function () {
        window.scrollTo(0, 0);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], ScrollToTopComponent.prototype, "top", void 0);
    __decorate([
        // 当前滚动条滚动的高度
        core_1.HostListener("window:scroll", []), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], ScrollToTopComponent.prototype, "onWindowScroll", null);
    ScrollToTopComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'wm-scroll-to-top',
            template: "\n        <span class=\"u-scroll-to-top\" [class.z-active]=\"scrollTop >= top\" (click)=\"scrollToTop()\"><i class=\"fa fa-chevron-up fa-lg\"></i></span>\n    ",
            styleUrls: ['scroll-to-top.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], ScrollToTopComponent);
    return ScrollToTopComponent;
}());
exports.ScrollToTopComponent = ScrollToTopComponent;
//# sourceMappingURL=scroll-to-top.component.js.map