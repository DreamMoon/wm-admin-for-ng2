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
/**
 * 二级菜单
 */
var SidebarSubmenu = (function () {
    function SidebarSubmenu() {
    }
    return SidebarSubmenu;
}());
/**
 * 一级菜单
 */
var SidebarMenu = (function () {
    function SidebarMenu() {
        this.color = '#05afd1'; // 一级菜单处左边框的颜色
        this.badge = 0; // 徽章的数值
        this.submenus = [];
    }
    return SidebarMenu;
}());
var SidebarComponent = (function () {
    function SidebarComponent() {
        this.show = false; // 是否显示sidebar
        this.showHeader = true; // 是否显示header
        this.menus = [];
        this.curMenu = null;
        this.curSubmenu = null;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.menus = [
            {
                color: '#05afd1',
                icon: 'home',
                name: '首页',
                link: '#',
                badge: 0,
                submenus: []
            },
            {
                color: '#123456',
                icon: 'cube',
                name: 'UI 控件',
                link: 'javascript:void(0)',
                badge: 0,
                submenus: [
                    {
                        link: '#',
                        name: '小部件'
                    },
                    {
                        link: '#',
                        name: '动画'
                    }
                ]
            },
            {
                color: '#234567',
                icon: 'key',
                name: '插件应用',
                link: 'javascript:void(0)',
                badge: 0,
                submenus: [
                    {
                        link: '#',
                        name: 'jQuery插件'
                    },
                    {
                        link: '#',
                        name: '我的插件'
                    }
                ]
            },
            {
                color: '#345678',
                icon: 'book',
                name: '其他页面',
                link: 'javascript:void(0)',
                badge: 0,
                submenus: [
                    {
                        link: '#',
                        name: '收件箱'
                    },
                    {
                        link: '#',
                        name: '表格'
                    }
                ]
            },
            {
                color: '#456789',
                icon: 'tag',
                name: '更多页面',
                link: 'javascript:void(0)',
                badge: 5,
                submenus: [
                    {
                        link: '#',
                        name: '空白页面'
                    },
                    {
                        link: '#',
                        name: '登录页面'
                    },
                    {
                        link: '#',
                        name: '跳转页面'
                    },
                    {
                        link: '#',
                        name: '404页面'
                    }
                ]
            },
            {
                color: '#56789A',
                icon: 'list',
                name: '一级菜单',
                link: 'javascript:void(0)',
                badge: 0,
                submenus: [
                    {
                        link: '#',
                        name: '二级菜单-1'
                    },
                    {
                        link: '#',
                        name: '二级菜单-2'
                    }
                ]
            },
            {
                color: '#6789AB',
                icon: 'sign-out',
                name: '安全退出',
                link: '#',
                badge: 0,
                submenus: []
            }
        ];
    };
    SidebarComponent.prototype.openMenu = function (menu) {
        if (this.curMenu == menu) {
            this.curMenu = null;
        }
        else {
            this.curMenu = menu;
        }
    };
    SidebarComponent.prototype.selectSubmenu = function (menu, submenu) {
        this.curMenu = menu;
        this.curSubmenu = submenu;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], SidebarComponent.prototype, "show", void 0);
    __decorate([
        // 是否显示sidebar
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], SidebarComponent.prototype, "showHeader", void 0);
    SidebarComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'wm-sidebar',
            templateUrl: 'sidebar.component.html',
            styleUrls: ['sidebar.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], SidebarComponent);
    return SidebarComponent;
}());
exports.SidebarComponent = SidebarComponent;
//# sourceMappingURL=sidebar.component.js.map