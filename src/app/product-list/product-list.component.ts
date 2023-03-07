import { Component, OnInit } from "@angular/core";
import { IProducts, MOCK_PRODUCTS } from "app/interfaces/product";
import { ModalService } from "app/services/modal.service";
import { ProductServices } from "app/services/product.services";
import { Observable, tap, map } from "rxjs";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"],
})
export class ProductListComponent implements OnInit {
  isLoading = false;
  searchValue = "";
  // products: Observable<IProducts[]>;

  constructor(
    public productService: ProductServices,
    public modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    // this.products = this.productService
    //   .getProductAll()
    //   .pipe(tap(() => (this.isLoading = false)));
    this.productService.getProductAll().subscribe((products) => {
      // this.products = products;
      this.isLoading = false;
    });
  }

  getProductsCategory() {
    const selectElement = [];
    return [{ value: "first1" }, { value: "second2" }];
  }

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
