import { Component, Input } from "@angular/core";
import { IProducts } from "app/interfaces/product";

@Component({
  selector: "app-product-cart",
  templateUrl: "./product-cart.component.html",
  styleUrls: ["./product-cart.component.css"],
})
export class ProductCartComponent {
  @Input() product: IProducts;
}
