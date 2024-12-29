import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryRoutingModule } from './category-routing.module';
import { CategoryProductComponent } from './components/category-product/category-product.component';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    CategoryProductComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CategoryRoutingModule,
  ]
})
export class CategoryModule { }
