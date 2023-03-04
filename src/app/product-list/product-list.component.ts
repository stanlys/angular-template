import { Component } from "@angular/core";
import { IProducts, MOCK_PRODUCTS } from "app/interfaces/product";

import { products } from "../products";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"],
})
export class ProductListComponent {
  products = products;
  fakeProducts: IProducts[] = MOCK_PRODUCTS;

  share() {
    window.alert("The product has been shared!");
  }

  onNotify() {
    window.alert("You will notify");
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
