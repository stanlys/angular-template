import { Component } from "@angular/core";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.css"],
})
export class AuthComponent {
  loginText = "Окно входа";
  singUpText = "Окно регистрации";

  isAuth = true;
}
