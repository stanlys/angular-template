import { Component } from "@angular/core";

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

  togglePasswordElement() {
    this.password =
      this.password.type === "password"
        ? passwordElements[1]
        : passwordElements[0];
  }

  testClick() {
    console.log("Click on icon");
  }
}
