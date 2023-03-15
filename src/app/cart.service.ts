import { Injectable } from "@angular/core";
import { Product } from "./products";
import { HttpClient } from "@angular/common/http";
import { IProducts } from "./interfaces/product";

@Injectable({
  providedIn: "root",
})
export class CartService {
  items: IProducts[] = [];

  constructor(private http: HttpClient) {}

  addToCart(product: IProducts) {
    this.items.push(product);
    return this.items;
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return [];
  }

  getShippingPrices() {
    return this.http.get<{ type: string; price: number }[]>(
      "assets/shipping.json"
    );
  }
}
