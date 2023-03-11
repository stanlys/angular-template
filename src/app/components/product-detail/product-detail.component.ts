import { Component, HostListener, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { IProducts } from "app/interfaces/product";
import { CartService } from "../../cart.service";
import { Product, products } from "../../products";

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.css"],
})
export class ProductDetailComponent implements OnInit {
  product: IProducts | undefined;

  constructor(
    private router: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit() {
    const route = this.router.snapshot.paramMap;
    console.log(route);
    const productId = Number(route.get("productId"));
    // this.product = products.find((product) => product.id === productId);
  }

  addToCart(product: IProducts) {
    this.cartService.addToCart(product);
    // window.alert(`${product.name} added to Cart`);
  }
}
