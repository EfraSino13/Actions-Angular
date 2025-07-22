import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './main.component';
import { SidebarModule } from '../layout/sidebar/sidebar.module';
import { NavbarModule } from '../layout/navbar/navbar.module';
import { MainRoutingModule } from './main-routing.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    BrowserModule
  ],
  providers:[NavbarModule]
})
export class MainModule { }
