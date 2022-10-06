import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductService } from './product.service';



@NgModule({
  providers: [ProductService],
  declarations: [
    ProductComponent
  ],
  imports: [
    CommonModule
  ],
})
export class ProductModule { }
