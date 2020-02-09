import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { MaterialModule} from './../material/material.module';

@NgModule({
  declarations: [ProductFormComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule
   
  ]
})
export class AdminModule { }
