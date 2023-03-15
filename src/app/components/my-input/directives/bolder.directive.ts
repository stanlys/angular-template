import {
  Directive,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
} from "@angular/core";

@Directive({
  selector: "[appBolder]",
})
export class BolderDirective implements OnInit {
  myDiv = HTMLDivElement;
  myLabel = HTMLLabelElement;
  myInput = HTMLInputElement;

  constructor(private el: ElementRef, private render: Renderer2) {}

  ngOnInit(): void {
    this.myDiv = this.el.nativeElement;
    this.myInput = this.el.nativeElement.children[1];
    this.myLabel = this.el.nativeElement.children[0];
  }

  @HostListener("mouseover") onMouseOver() {
    this.render.setStyle(this.myLabel, "color", "red");
  }

  @HostListener("mouseout") onMouseOut() {
    this.render.setStyle(this.myLabel, "color", "black");
  }
}
