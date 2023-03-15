import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-main-page",
  templateUrl: "./main-page.component.html",
  styleUrls: ["./main-page.component.css"],
})
export class MainPageComponent {
  myForm: FormGroup = new FormGroup({
    userName: new FormControl(),
    userEmail: new FormControl(),
  });

  onTest() {
    console.log(this.myForm);
  }

  submit() {
    console.log(this.myForm);
  }
}
