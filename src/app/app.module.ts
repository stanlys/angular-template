import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { TopBarComponent } from "./top-bar/top-bar.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductAlertComponent } from "./components/product-alert/product-alert.component";
import { ProductDetailComponent } from "./components/product-detail/product-detail.component";
import { CartComponent } from "./cart/cart.component";
import { ShippingComponent } from "./components/shipping/shipping.component";
import { MainPageComponent } from "./main-page/main-page.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatIconModule } from "@angular/material/icon";

import { router } from "./router";
import { ProductCartComponent } from "./product-cart/product-cart.component";
import { GlobalErrorComponent } from "./global-error/global-error.component";
import { FilterProductsPipe } from "./pipes/filter-products.pipe";
import { ProductTitleToLowPipe } from "./pipes/product-title-to-low.pipe";
import { ModalComponent } from "./components/modal/modal.component";
import { CreateProductComponent } from './components/create-product/create-product.component';
import { FocusDirective } from './directives/focus.directive';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: router.index, component: MainPageComponent },
      { path: router.example1, component: ProductListComponent },
      { path: "products/:productId", component: ProductDetailComponent },
      { path: router.cart, component: CartComponent },
      { path: "shipping", component: ShippingComponent },
    ]),
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    FormsModule,
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertComponent,
    ProductDetailComponent,
    CartComponent,
    ShippingComponent,
    MainPageComponent,
    ProductCartComponent,
    GlobalErrorComponent,
    FilterProductsPipe,
    ProductTitleToLowPipe,
    ModalComponent,
    CreateProductComponent,
    FocusDirective,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
