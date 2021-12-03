import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ListComponent, DetailsComponent, CreateComponent, EditComponent],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ProductosModule { }
