import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './products/product.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ErrorComponent } from './error/error.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { DetailsproductComponent } from './products/detailsproduct/detailsproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HomepageComponent,
    DetailsproductComponent,
    ErrorComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
