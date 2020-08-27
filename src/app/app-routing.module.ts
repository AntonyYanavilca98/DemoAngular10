import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductComponent } from './products/product.component';
import { DetailsproductComponent } from './products/detailsproduct/detailsproduct.component';
import { ErrorComponent } from './error/error.component';
import { ProductListComponent } from './products/product-list/product-list.component';

const routes: Routes = [
  {path:'',component: HomepageComponent},
  {path:'products', component: ProductComponent},
  {path:'productsList', component: ProductListComponent},
  {path:'product/:id', component: DetailsproductComponent},
  {path:'**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
