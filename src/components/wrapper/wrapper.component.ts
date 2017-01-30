/**
 * Created by DreamBoy on 2017/1/29.
 */
import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'wm-wrapper',
    templateUrl: 'wrapper.component.html',
    styleUrls: [ 'wrapper.component.css' ]
})
export class WrapperComponent {
    isShowSidebar: boolean = true; // 是否显示侧边栏
    isShowSidebarHeader: boolean = true; // 是否显示侧边栏中的header
}