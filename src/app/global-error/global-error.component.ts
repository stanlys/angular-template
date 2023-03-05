import { Component } from "@angular/core";
import { ErrorService } from "app/services/error.service";

@Component({
  selector: "app-global-error",
  templateUrl: "./global-error.component.html",
  styleUrls: ["./global-error.component.css"],
})
export class GlobalErrorComponent {
  constructor(private errorService: ErrorService) {}
  error = this.errorService.error;
}
