import { Component, Input } from "@angular/core";
import { ModalService } from "app/services/modal.service";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.css"],
})
export class ModalComponent {
  @Input() title: string;
  isShow = true;

  constructor(public modalService: ModalService) {}

  toggleShow() {
    this.isShow = !this.isShow;
  }
}
