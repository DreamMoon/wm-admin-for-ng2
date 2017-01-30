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
var primeng_1 = require('primeng/primeng');
var primeng_2 = require('primeng/primeng');
var PrimengModule = (function () {
    function PrimengModule() {
    }
    PrimengModule = __decorate([
        core_1.NgModule({
            imports: [primeng_1.AccordionModule, primeng_2.ButtonModule],
            exports: [primeng_1.AccordionModule, primeng_2.ButtonModule]
        }), 
        __metadata('design:paramtypes', [])
    ], PrimengModule);
    return PrimengModule;
}());
exports.PrimengModule = PrimengModule;
//# sourceMappingURL=primeng.module.js.map