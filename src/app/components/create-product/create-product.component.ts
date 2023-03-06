import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-create-product",
  templateUrl: "./create-product.component.html",
  styleUrls: ["./create-product.component.css"],
})
export class CreateProductComponent implements OnInit {
  form = new FormGroup({
    title: new FormControl<string>("", [
      Validators.required,
      Validators.minLength(5),
    ]),
    price: new FormControl<number>(0, [
      Validators.required,
      Validators.min(10),
    ]),
  });

  constructor() {}

  ngOnInit(): void {}

  get isValid() {
    // if (this.form.touched) return false;
    return this.form.status === "VALID";
  }

  submit() {
    if (this.isValid) console.warn("Add---");
  }
}
