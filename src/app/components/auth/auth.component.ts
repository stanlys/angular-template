import { Component } from "@angular/core";

interface IPassword {
  type: string;
  src: string;
}

const passwordElements: IPassword[] = [
  { type: "password", src: "../../../assets/view.png" },
  { type: "text", src: "../../../assets/hide.png" },
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
}
