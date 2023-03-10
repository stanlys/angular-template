import { EventEmitter } from "@angular/core";
import { Output } from "@angular/core";
import { Component, Input } from "@angular/core";

interface IPassword {
  type: string;
  icon_name: string;
}

const passwordElements: IPassword[] = [
  { type: "password", icon_name: "visibility" },
  { type: "text", icon_name: "visibility_off" },
];

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.css"],
})
export class AuthComponent {
  loginText = "Окно входа";
  singUpText = "Окно регистрации";
  password = passwordElements[0];
  isAuth = true;
  userName = "User";

  @Input()
  color: string = "#c4c4c4";

  @Output()
  test = new EventEmitter();

  // constructor(public translate: TranslateService) {}
  togglePasswordElement() {
    this.password =
      this.password.type === "password"
        ? passwordElements[1]
        : passwordElements[0];
  }

  testClick() {
    console.log("Click on icon");
  }

  onTest(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.test.emit(value);
  }
}
