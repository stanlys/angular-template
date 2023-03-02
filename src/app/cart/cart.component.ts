import { Component } from "@angular/core";
import { CartService } from "../cart.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"],
})
export class CartComponent {
  products = this.cartService.getItems();

  constructor(private cartService: CartService) {
    this.products = this.cartService.getItems();
  }

  clearCart() {
    this.products = this.cartService.clearCart();
    console.log("clear");
  }
}
