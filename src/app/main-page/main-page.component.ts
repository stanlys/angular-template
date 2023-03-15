import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-main-page",
  templateUrl: "./main-page.component.html",
  styleUrls: ["./main-page.component.css"],
})
export class MainPageComponent {
  myForm: FormGroup = new FormGroup({
    userName: new FormControl<string>(""),
    userEmail: new FormControl<string>(""),
    rate: new FormControl<number>(1),
  });

  onTest() {
    console.log(this.myForm.value);
  }

  submit() {
    console.log(this.myForm.value);
  }
}
