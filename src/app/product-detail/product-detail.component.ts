import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Product, products } from "../products";

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.css"],
})
export class ProductDetailComponent implements OnInit {
  product: Product | undefined;

  constructor(private router: ActivatedRoute) {}

  ngOnInit() {
    const route = this.router.snapshot.paramMap;
    console.log(route);
    const productId = Number(route.get("productId"));
    this.product = products.find((product) => product.id === productId);
  }
}
