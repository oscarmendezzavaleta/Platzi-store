import { NgModule } from '@angular/core';
import {CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { BannerComponent } from './components/banner/banner.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
    declarations: [
        BannerComponent,
        HomeComponent
    ],
    imports: [
        HomeRoutingModule,
        CommonModule,
        SharedModule
    ]
})
export class HomeModule {}
