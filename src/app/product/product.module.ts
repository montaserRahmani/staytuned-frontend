import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductService } from './product.service';
import { FormsModule } from '@angular/forms';



@NgModule({
  providers: [ProductService],
  declarations: [
    ProductComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
})
export class ProductModule { }
