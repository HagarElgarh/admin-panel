import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [LoaderComponent, ProductCardComponent],
  imports: [CommonModule, HttpClientModule,
    ReactiveFormsModule, RouterModule],
  exports: [LoaderComponent, ProductCardComponent, HttpClientModule,
    ReactiveFormsModule, RouterModule]
})
export class SharedModule { }
