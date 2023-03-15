import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { CategoriesComponent } from './categories/categories.component';
import { RoadsComponent } from './roads/roads.component';
import { UsersComponent } from './users/users.component';
const routes: Routes = [
  {
    path: 'products',
    component: ProductComponent,
  },

  {
    path: 'categories',
    component: CategoriesComponent,
  },

  {
    path: 'roads',
    component: RoadsComponent,
  },

  {
    path: 'users',
    component: UsersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
