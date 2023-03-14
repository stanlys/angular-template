import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";

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
import { CreateProductComponent } from "./components/create-product/create-product.component";
import { FocusDirective } from "./directives/focus.directive";
import { AuthComponent } from "./components/auth/auth.component";
import { FullWidthDirective } from "./directives/full-width.directive";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { InputWothFooterComponent } from "./components/input/input-woth-footer/input-woth-footer.component";
import { RatingInputComponent } from './components/rating-input/rating-input.component';
import { MyInputComponent } from './components/my-input/my-input.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: router.index, title: "Main", component: MainPageComponent },
      { path: router.example1, component: ProductListComponent },
      { path: "products/:productId", component: ProductDetailComponent },
      { path: router.cart, title: "Корзина", component: CartComponent },
      { path: "shipping", component: ShippingComponent },
      { path: "auth", title: "LogIn", component: AuthComponent },
      { path: "**", title: "404", component: PageNotFoundComponent },
    ]),
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      defaultLanguage: "en",
    }),
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
    AuthComponent,
    FullWidthDirective,
    PageNotFoundComponent,
    InputWothFooterComponent,
    RatingInputComponent,
    MyInputComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
