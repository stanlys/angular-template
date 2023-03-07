import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ModalService } from "app/services/modal.service";
import { ProductServices } from "app/services/product.services";

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

  constructor(
    private productService: ProductServices,
    public modalService: ModalService
  ) {}

  ngOnInit(): void {}

  get isValid() {
    // if (this.form.touched) return false;
    return this.form.status === "VALID";
  }

  submit() {
    console.log(this.form);
    if (this.isValid) {
      this.productService
        .createProduct({
          title: this.form.value.title as unknown as string,
          price: this.form.value.price as unknown as number,
          description: "lorem ipsum set",
          image: "https://i.pravatar.cc",
          category: "electronic",
          id: 0,
          rating: {
            count: 0,
            rate: 5,
          },
        })
        .subscribe(() => {
          this.modalService.close();
        });
    }
  }
}
