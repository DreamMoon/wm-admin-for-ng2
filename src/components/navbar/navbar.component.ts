/**
 * Created by DreamBoy on 2017/1/28.
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'wm-navbar',
    templateUrl: 'navbar.component.html',
    styleUrls: [ 'navbar.component.css' ]
})
export class NavbarComponent {
    // 控制是否显示侧边栏
    @Input() showSidebar: boolean = true;
    @Output() showSidebarChange: EventEmitter<boolean> = new EventEmitter();
    // 控制是否显示侧边栏中的header
    @Input() showSidebarHeader: boolean = true;
    @Output() showSidebarHeaderChange: EventEmitter<boolean> = new EventEmitter();

    toggelSidebar(): void {
        this.showSidebar = !this.showSidebar;
        this.showSidebarChange.emit(this.showSidebar);
    }
    toggleSidebarHeader(): void {
        this.showSidebarHeader = !this.showSidebarHeader;
        this.showSidebarHeaderChange.emit(this.showSidebarHeader);
    }
}