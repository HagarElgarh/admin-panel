import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';

const routes: Routes = [
  {
    path: '',  
    component: MainContentComponent,  
    children: [
      {
        path: 'products',  
        loadChildren: () =>
          import('../features/product/product.module').then((m) => m.ProductModule),
      },
      {
        path: 'categories',
        loadChildren: () =>
          import('../features/category/category.module').then((m) => m.CategoryModule),
      },
    ],
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
}) 
export class LayoutRoutingModule { }
