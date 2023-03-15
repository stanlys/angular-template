import { Component, Input } from "@angular/core";
import { CartService } from "app/cart.service";
import { IProducts } from "app/interfaces/product";

@Component({
  selector: "app-product-cart",
  templateUrl: "./product-cart.component.html",
  styleUrls: ["./product-cart.component.css"],
})
export class ProductCartComponent {
  @Input() product: IProducts;
  @Input() index!: number;

  showDetails = false;

  constructor(public cartService: CartService) {}

  toggleShowDetails() {
    this.showDetails = !this.showDetails;
  }

  addToCart() {
    this.cartService.addToCart(this.product);
  }
}
