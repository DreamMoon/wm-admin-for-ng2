import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { PrimengModule } from '../modules/primeng/primeng.module';

import { AppComponent }  from './app.component';
import { ContainerComponent } from '../components/container/container.component';
import { HomeComponent } from "../components/home/home.component";
import { NavbarComponent } from '../components/navbar/navbar.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import {WrapperComponent} from "../components/wrapper/wrapper.component";
import {ScrollToTopComponent} from "../components/scroll-to-top/scroll-to-top.component";
import {FooterComponent} from "../components/footer/footer.component";

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    PrimengModule
  ],
  declarations: [
    AppComponent,
    ContainerComponent,
    FooterComponent,
    HomeComponent,
    NavbarComponent,
    ScrollToTopComponent,
    SidebarComponent,
    WrapperComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
