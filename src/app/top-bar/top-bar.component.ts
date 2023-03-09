import { Component, Injectable } from "@angular/core";
import { CartService } from "../cart.service";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-top-bar",
  templateUrl: "./top-bar.component.html",
  styleUrls: ["./top-bar.component.css"],
})
export class TopBarComponent {
  products = this.cart.getItems();
  constructor(private cart: CartService, public translate: TranslateService) {}
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
