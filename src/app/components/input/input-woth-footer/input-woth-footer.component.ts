import { Component, Input } from "@angular/core";

@Component({
  selector: "app-input-woth-footer",
  templateUrl: "./input-woth-footer.component.html",
  styleUrls: ["./input-woth-footer.component.css"],
})
export class InputWothFooterComponent {
  @Input()
  footerColor: string = "#c4c4c4";

  currentValue: string = "";

  inputSomething = () => {
    console.log(this.currentValue);
  };
}
