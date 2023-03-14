import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-main-page",
  templateUrl: "./main-page.component.html",
  styleUrls: ["./main-page.component.css"],
})
export class MainPageComponent {
  onTest(s: string) {
    console.log(s);
  }

  myForm: FormGroup = new FormGroup({
    first: new FormControl(""),
    second: new FormControl(""),
  });

  submit() {
    console.log(this.myForm);
  }
}
