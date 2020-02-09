import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from '../shared/components/header/header.component';
import { FooterComponent } from '../shared/components/footer/footer.component';

import { HighlightDirective } from '../shared/directives/highlight/highlight.directive';
import { ExponetialPipe } from '../shared/pipes/exponential/exponetial.pipe';

import { MaterialModule } from './../material/material.module';


@NgModule({
  declarations: [
   HeaderComponent,
   FooterComponent,
   HighlightDirective,
   ExponetialPipe
  ],
  exports: [
   HeaderComponent,
   FooterComponent,
   HighlightDirective,
   ExponetialPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ]
})
export class SharedModule { }
