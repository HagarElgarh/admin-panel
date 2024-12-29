import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryProductComponent } from './components/category-product/category-product.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
  { path: 'list', component: CategoryProductComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CategoryRoutingModule { }
