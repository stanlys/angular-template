import { Component } from "@angular/core";
import { CartService } from "../cart.service";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"],
})
export class CartComponent {
  products = this.cartService.getItems();

  checkoutForm = this.form.group({
    name: "",
    address: "",
    products: Array<string>,
  });

  constructor(private cartService: CartService, private form: FormBuilder) {
    this.products = this.cartService.getItems();
  }

  clearCart() {
    this.products = this.cartService.clearCart();
    console.log("clear");
  }

  onSubmit(): void {
    this.products = this.cartService.clearCart();
    console.warn("You order submit", this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
