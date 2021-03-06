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
var ContainerComponent = (function () {
    function ContainerComponent() {
        this.stretched = false;
        this.clicks = 0;
        this.msgs = [];
    }
    ContainerComponent.prototype.count = function () {
        this.clicks++;
    };
    ContainerComponent.prototype.onTabClose = function (event) {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Tab Closed', detail: 'Index: ' + event.index });
    };
    ContainerComponent.prototype.onTabOpen = function (event) {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Tab Expanded', detail: 'Index: ' + event.index });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], ContainerComponent.prototype, "stretched", void 0);
    ContainerComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'wm-container',
            templateUrl: 'container.component.html',
            styleUrls: ['container.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], ContainerComponent);
    return ContainerComponent;
}());
exports.ContainerComponent = ContainerComponent;
//# sourceMappingURL=container.component.js.map